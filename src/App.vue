<template>
  <div id="app">
    <!-- <van-nav-bar title="黑马程序员.vant" v-else left-text="返回" @click-left="onClickLeft"/> -->
    <!-- <van-tabbar v-model="active">
      <van-tabbar-item name="login" icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item name="vip" icon="user-o" to="vip">会员</van-tabbar-item>
      <van-tabbar-item name="cart" icon="cart-o" to="cart">购物车</van-tabbar-item>
      <van-tabbar-item name="search" icon="search" to="search">搜索</van-tabbar-item>
    </van-tabbar>-->

    <van-nav-bar
      title="黑马程序员.vant"
      v-if="active === 'login'"
      @click-left="onClickLeft"
      :left-text="flag ? '' :'返回'"
    />
    <van-nav-bar title="黑马程序员.vant" v-else left-text="返回" left-arrow @click-left="onClickLeft"/>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item name="login" to="/login">
        <van-icon slot="icon" class="iconfont" class-prefix="icon" name="index-fill"></van-icon>
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item name="vip" to="vip">
        <van-icon slot="icon" class="iconfont" class-prefix="icon" name="icon_zhanghao"></van-icon>
        <span>会员</span>
      </van-tabbar-item>
      <van-tabbar-item name="cart" to="cart" icon="cart-o" :info="0">购物车</van-tabbar-item>
      <van-tabbar-item name="search" to="search" icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: "login",
      oldval: "",
      flag: true
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
      if (this.active === "login") {
        this.flag = true
      }
    }
  },
  watch: {
    $route(to, from) {
      this.active = to.path.substr(1)
      this.oldval = to.path.substr(1)
      if (
        to.path === "/news" ||
        to.path === "/photo_sharing" ||
        to.path === "/goods"
      ) {
        this.active = "login"
        this.flag = false
      }
    }
  }
};
</script>

<style lang="less" scoped>
.van-nav-bar {
  height: 40px;
  line-height: 40px;
  background-color: #1989fa;

  .van-nav-bar__text,
  .van-icon,
  .van-nav-bar__title {
    color: #fff;
    font-size: 14px;
  }
  .van-nav-bar__text:active {
    background-color: #1989fa;
  }
}

.iconfont {
  font-size: 18px;
}
</style>
