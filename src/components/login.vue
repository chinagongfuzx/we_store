<template>
  <div>
    <van-nav-bar title="黑马程序员.vant"/>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in getUrlList" :key="index">
        <img :src="item.img" alt>
      </van-swipe-item>
    </van-swipe>
    <van-grid :column-num="3">
      <van-grid-item to="/news">
        <van-image src="../pic/menu1.png"/>
        <p>新闻资讯</p>
      </van-grid-item>
      <van-grid-item to="/photo_sharing">
        <van-image src="../pic/menu2.png"/>
        <p>图片分享</p>
      </van-grid-item>
      <van-grid-item to="/goods">
        <van-image src="../pic/menu3.png"/>
        <p>商品购买</p>
      </van-grid-item>
      <van-grid-item>
        <van-image src="../pic/menu4.png"/>
        <p>留言反馈</p>
      </van-grid-item>
      <van-grid-item>
        <van-image src="../pic/menu5.png"/>
        <p>视频专区</p>
      </van-grid-item>
      <van-grid-item>
        <van-image src="../pic/menu6.png"/>
        <p>联系我们</p>
      </van-grid-item>
    </van-grid>
    <van-tabbar v-model="active">
  <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item name="search" icon="user-o">会员</van-tabbar-item>
  <van-tabbar-item name="friends" icon="cart-o">购物车</van-tabbar-item>
  <van-tabbar-item name="setting" icon="search">搜索</van-tabbar-item>
</van-tabbar>
  </div>
</template>
<script>
import { getUrl } from "@/api";
export default {
  data() {
    return {
      getUrlList: [],
      active:'home'
    };
  },
  created() {
    this.getLoginUrl();
  },
  methods: {
    async getLoginUrl() {
      const { data: res } = await getUrl();
      //   console.log(res)
      this.getUrlList = res.message;
    }
  }
};
</script>
<style lang="less" scoped>
.van-nav-bar {
  background-color: blue;
}
img {
  width: 100%;
  height: 100%;
}
.van-swipe {
  height: 200px;
}
.van-image {
  width: 60px;
}
p {
  margin: 10px 0 0 0;
}
</style>
