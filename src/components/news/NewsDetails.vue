<template>
  <div>
    <!-- <van-nav-bar title="黑马程序员.vant" left-text="返回" left-arrow fixed @click-left="onClickLeft" />
    <van-tabbar v-model="active" fixed>
      <van-tabbar-item name="home" to="/home">
        <van-icon slot="icon" class="iconfont" class-prefix="icon" name="index-fill"></van-icon>
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item name="search" to="/search">
        <van-icon slot="icon" class="iconfont" class-prefix="icon" name="icon_zhanghao"></van-icon>
        <span>会员</span>
      </van-tabbar-item>
      <van-tabbar-item name="friends" to="/friends" icon="cart-o" :info="0">购物车</van-tabbar-item>
      <van-tabbar-item name="setting" to="/setting" icon="search">搜索</van-tabbar-item>
    </van-tabbar> -->
    <div class="news_detail">
      <h3>{{ newsDetail.title }}</h3>
      <div class="news_info">
        <span>发表时间：{{ newsDetail.add_time | dateFormat }}</span>
        <span>点击次数：{{ newsDetail.click }}</span>
      </div>
      <div class="content" v-html="newsDetail.content"></div>
      <comment v-if="newsDetail" :id="newId"></comment>
    </div>
  </div>
</template>

<script>
import { getNewsDetailApi } from '@/api'
import Comment from '../common/Comment'
export default {
  props: ['newId'],
  data() {
    return {
      newsDetail: {},
      active: 'home'
    }
  },
  methods: {
    async getNewsDetail() {
      const { data: res } = await getNewsDetailApi(this.newId)
      res.message[0].content = res.message[0].content.replace(/\<br\s\/\>/g, '')
      this.newsDetail = res.message[0]
    },
    onClickLeft() {
      this.$router.go(-1)
    }
  },
  components: {
    comment: Comment
  },
  created() {
    this.getNewsDetail()
  }
}
</script>

<style lang="less" scoped>
.news_detail {
  padding: 0 10px;

  h3 {
    text-align: center;
    color: #1989fa;
    font-size: 14px;
    line-height: 30px;
    margin: 0;
    padding: 5px 0;
  }

  .news_info {
    display: flex;
    justify-content: space-between;
    color: #1989fa;
    font-size: 13px;
    padding: 7px 0;
    border-bottom: 1px solid #ccc;
  }

  .content {
    font-size: 16px;
    line-height: 20px;
    font-family: 'Microsoft YaHei';
    color: #535353;
  }
}
</style>
