<template>
  <div>
    <van-cell-group>
      <van-field v-model="value" placeholder="请输入商品名称"/>
    </van-cell-group>
    <van-button type="info" @click="addSearch">添加商品</van-button>
  </div>
</template>
<script>
import addSearchList from '@/api'
export default {
  data() {
    return {
      value: ""
    };
  },
  methods: {
   async addSearch() {
     const {data:res}=  await addSearchList(this.value)
     if(res.status !== 0) return this.$Notify({ type: 'danger', message: '添加失败' })
     this.$Notify({ type: 'success', message: '添加成功' });
    }
  }
};
</script>
<style lang="less" scoped>
</style>

