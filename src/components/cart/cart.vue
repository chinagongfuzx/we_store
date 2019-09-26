<template>
  <div>
    <div class="empty">
      <img src="../../assets/pic/cart_empty.png" alt="" />
      <p>购物车空空如也</p>
      <van-button type="info" size="mini" @click="shop">去逛逛</van-button>
    </div>
    <van-submit-bar :class="isSubBar ? '' : 'bar-high'" :price="0" button-text="提交订单" />
  </div>
</template>

<script>
export default {
  props: ['isSubBar'],
  methods: {
    shop() {
      this.$router.push('/goods')
    }
  }
}
</script>

<style lang="less" scoped>
.empty {
  padding: 15px 0;
  text-align: center;
  color: #ccc;

  img {
    width: 100px;
  }
  
  p {
    font-size: 16px;
  }
}

.van-button--danger {
  background-color: #f44;
  border-color: #f44;
}

.bar-high {
  bottom: -50px;
}
</style>