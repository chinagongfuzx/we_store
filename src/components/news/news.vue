<template>
  <div>
   
    <!-- 导航栏 -->
    <van-nav-bar title="黑马程序员.vant" left-text="返回" left-arrow class="newsNav"/>
 <!-- 下拉刷新 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <!-- 图文资讯区域 -->

    <van-list finished-text="没有更多了">
      <van-card
        v-for="item in newsList"
        :key="item.id"
        :num="item.click"
        price
        :title="item.title"
        :thumb="item.img_url"
      ></van-card>
    </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import { getNewsList } from "@/api";

export default {
  data() {
    return {
      newsList: [],
      isLoading: false
    };
  },
  created() {
    this.getNew();
  },
  methods: {
    async getNew() {
      const { data: res } = await getNewsList();
      // console.log(res.meta);
      if (res.status !== 0) {
        return this.$message.error("获取新闻列表失败！");
      }
      this.newsList = res.message;
      console.log(res, 6666);
      console.log(this.newsList, 77777);
    },

    // 下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        // 刷新成功重新请求数据
        this.getNew();
      }, 500);
    }
  }
};
</script>
<style lang="less" scoped>
.newsNav {
  background-color: skyblue;
  color: #fffffe;
  font-size: 12px;
}
</style>