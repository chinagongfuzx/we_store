<template>
  <div id="app">
    <van-nav-bar
      title="黑马程序员.vant"
      :left-text="isBack ? '返回' : ''"
      :right-text="this.$route.path === '/search' ? '添加' : ''"
      :left-arrow="isBack"
      @click-left="onClickLeft"
      @click-right="onClickRight"
      fixed
    />
    <van-tabbar v-model="active" fixed v-if="this.$route.path !== '/cart'">
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
    <transition :name="transtionName" mode="out-in">
      <keep-alive>
        <router-view style="min-height: 100%"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: "login",
      isBack: false,
      actives: ["/login", "/vip", "/cart", "/search"],
      transtionName: "slide-left"
    };
  },
  methods: {
    onClickLeft() {
      this.$route.meta.isBack = true;
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push('/addgoods')
    },
    skip(to) {
      this.isBack = to.path === "/login" ? false : true
      this.active = this.actives.includes(to.path) ? to.path.substring(1) : "login"
    }
  },
  watch: {
    $route(to, from) {
      this.transtionName = from.meta.isBack ? "slide-right" : "slide-left";
      to.meta.isBack = false;
      this.skip(to);
    }
  },
  created() {
    this.skip(this.$route)
  }
}
</script>

<style lang="less" scoped>
#app {
  box-sizing: border-box;
  padding: 40px 0 50px 0;

  .content {
    height: 100%;
  }
}
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

.slide-left-leave-to,
.slide-right-leave-to {
  opacity: 0;
}
.slide-left-enter {
  transform: translateX(100%);
}
.slide-right-enter {
  transform: translateX(-100%);
}

.slide-left-enter-active,
.slide-right-enter-active,
.slide-left-leave-active,
.slide-right-leave-active {
  transition: 0.3s;
}
</style>
