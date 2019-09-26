<template>
  <div class="vipBox">
    <van-icon name="setting-o" />
    <p>正在加班加点开发中，敬请期待！</p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@keyframes setting {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1turn);
  }
}

.vipBox {
  text-align: center;

  .van-icon {
    margin-top: 20px;
    font-size: 25px;
    animation: setting 2s linear infinite;
  }

  p {
    margin: 10px 0;
  }
}
</style>
