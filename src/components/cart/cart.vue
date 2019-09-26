<template>
  <div>
    <div class="empty">
      <img src="../../assets/pic/cart_empty.png" alt="">
      <p>购物车空空如也</p>
      <van-button type="info" size="mini">去逛逛</van-button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.empty {
  padding: 15px 0;
  text-align: center;
  color: #ccc;

  img {
    width: 100px;
  }
}
</style>