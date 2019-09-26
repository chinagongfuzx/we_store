<template>
  <div id="app">
    <van-nav-bar title="黑马程序员.vant" :left-text="isBack ? '返回' : ''" :left-arrow="isBack" @click-left="onClickLeft" fixed />
    <van-tabbar v-model="active" fixed>
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
      <router-view class="content"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 'login',
      isBack: false,
      actives: ['/login', '/vip', '/cart', '/search'],
      transtionName: 'slide'
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    skip(to) {
      this.isBack = to.path === '/login' ? false : true
      this.active = this.actives.includes(to.path) ? to.path.substring(1) : 'login'
    }
  },
  watch: {
    $route(to) {
      this.skip(to)
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
  height: 100%;

  .content {
    height: 100%;
    overflow: auto;
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

.vvan-tabbar-item {
  overflow: hidden;
}

.iconfont {
  font-size: 18px;
}

.router-view {
  overflow-x: hidden;
}

.slide-leave-to {
  opacity: 0;
}

.slide-enter {
  transform: translateX(100%);
}

.slide-enter-active {
  transition: 0.4s;
}

.slide-leave-active {
  transition: 0.3s;
}
</style>
