<template>
  <div>
    <comment :id="id"></comment>
  </div>
</template>
		   
<script>
import comment from '../common/Comment'
export default {
  data() {
    return {
      id: ''
    }
  },
  created() {
    this.id = sessionStorage.getItem('goodsId')
  },
  components: {
    comment
  }
}
</script>
<style lang="less" scoped>
</style>
