<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in getUrlList" :key="index">
        <img :src="item.img" alt>
      </van-swipe-item>
    </van-swipe>
    <van-grid :column-num="3" :border="false">
      <van-grid-item to="/news">
        <img src="../assets/pic/menu1.png" alt class="image">
        <p>新闻资讯</p>
      </van-grid-item>
      <van-grid-item to="/photo_sharing">
        <img src="../assets/pic/menu2.png" alt class="image">
        <p>图片分享</p>
      </van-grid-item>
      <van-grid-item to="/goods">
        <img src="../assets/pic/menu3.png" alt class="image">
        <p>商品购买</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../assets/pic/menu4.png" alt class="image">
        <p>留言反馈</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../assets/pic/menu5.png" alt class="image">
        <p>视频专区</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../assets/pic/menu6.png" alt class="image">
        <p>联系我们</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
import { getUrl } from "@/api";
export default {
  data() {
    return {
      getUrlList: [],
      active: "home"
    };
  },
  created() {
    this.getLoginUrl();
  },
  methods: {
    async getLoginUrl() {
      const { data: res } = await getUrl();
      this.getUrlList = res.message;
    }
  }
};
</script>
<style lang="less" scoped>
img {
  width: 100%;
  height: 100%;
}
.van-swipe {
  height: 200px;
}
.image {
  width: 60px;
  height: 60px;
}
p {
  margin: 10px 0 0 0;
}
</style>
