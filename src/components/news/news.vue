<template>
  <div>
    <!-- 导航栏
    <van-nav-bar title="黑马程序员.vant" left-text="返回" left-arrow class="newsNav"/>-->

    <!-- 下拉刷新 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!-- 图文资讯区域 -->

      <van-list finished-text="没有更多了">
        <van-card
          v-for="(item, i1) in newsList"
          :key="item.id"
          :title="item.title"
          :thumb = "item.img_url"
          @click="toDetail(item.id)"
          :class="[i1 === 0 ? '' : 'bdtop']"
        >
        <div slot="price">发表时间 ：{{item.add_time | dateFormat}}</div>
        <div slot="num" class="van-num">点击 ： {{item.click}}</div>
        </van-card>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import { getNewsList } from "@/api"

export default {
  data() {
    return {
      newsList: [],
      isLoading: false,
      onLoading: true
    }
  },
  created() {
    this.getNew()
  },
  methods: {
    async getNew() {
      const { data: res } = await getNewsList()
      // console.log(res.meta);
      if (res.status !== 0) {
        return this.$toast.error("获取新闻列表失败！")
      }

      this.newsList = res.message
      
      // console.log(this.newsList, 77777)
    },

    // 下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功")
        this.isLoading = false
        // 刷新成功重新请求数据
        this.getNew()
      }, 500)
    },
    toDetail(id){
      this.$router.push(`/news/detail/${id}`)
    }
  }
}
</script>
<style lang="less" scoped>
.newsNav {
  background-color: skyblue;
  color: #fffffe;
  font-size: 12px;
}
.bdtop {
  border-top: 1px solid #EEEEEE;
}
.van-image__img {
    width: 100%;
    height: 100%;
}
.van-card {
   width: 400px;
   height: 70px;
}
.van-card__title {
    font-weight: bold;
    overflow: hidden;
}

.van-card__price {
    color: #226AFF;
    padding-top: 25px;
}
.van-card__content {
    height: 100px;
}
.van-num {
  color: #226AFF;
  padding-top: 25px;
  margin-right: 20px;
}
</style>