<template>
  <div>
    <div class="comment">
      <h4>发表评论</h4>
      <hr />
      <van-cell-group>
        <van-field v-model="commentVal" type="textarea" placeholder="请输入留言" rows="1" />
      </van-cell-group>
      <van-button type="info" @click="publish">发表评论</van-button>
      <div class="list" v-for="(item, index) in commentList" :key="index">
        <div class="title">
          <span>第{{ index + 1 }}楼</span>
          <span>用户:{{ item.user_name }}</span>
          <span>发表时间:{{ item.add_time | dateFormat }}</span>
        </div>
        <div class="content">
          {{ item.content }}
        </div>
      </div>
      <van-button plain hairline type="danger" :disabled="isMore" @click="getCommentList">{{
        isMore ? '没有更多了' : '加载更多'
      }}</van-button>
    </div>
  </div>
</template>

<script>
import { getCommentListApi, publishCommentApi } from '@/api'
export default {
  props: ['id'],
  data() {
    return {
      commentVal: '',
      commentList: [],
      pageIndex: 0,
      loading: false,
      isMore: false
    }
  },
  methods: {
    async publish() {
      if (!this.commentVal.trim()) {
        this.commentVal = ''
        return this.$toast.fail({
          message: '留言不能为空',
          duration: 1000
        })
      }
      const { data: res } = await publishCommentApi({ id: this.id, content: this.commentVal })
      if (res.status) {
        this.$toast.fail({
          message: '发表失败',
          duration: 1000
        })
        return
      }
      this.$toast.success({
        message: '发表成功',
        duration: 1000
      })
      this.commentVal = ''
    },
    async getCommentList() {
      this.pageIndex++
      const { data: res } = await getCommentListApi({ id: this.id, pageIndex: this.pageIndex })
      this.commentList.push(...res.message)
      if (res.message.length < 10) {
        this.isMore = true
      }
    }
  },
  created() {
    this.getCommentList()
  }
}
</script>

<style lang="less" scoped>
.comment {
  padding: 0 5px;

  h4 {
    font-size: 16px;
  }
  .van-field {
    height: 100px;
    border: 1px solid #ccc;
  }
  .van-button {
    width: 100%;
    margin: 5px 0;
  }
  .list {
    .title {
      height: 30px;
      line-height: 30px;
      font-size: 12px;
      background-color: #ccc;
      span {
        margin-right: 6px;
      }
    }

    .content {
      line-height: 35px;
      font-size: 12px;
      text-indent: 2em;
    }
  }
}
</style>
