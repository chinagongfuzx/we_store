<template>
  <div style="padding: 0 10px">
    <van-cell-group>
      <van-field v-model="value" placeholder="请输入商品名称" />
    </van-cell-group>
    <van-button type="info" @click="addSearch">添加商品</van-button>
  </div>
</template>
<script>
import { addSearchList } from '@/api'
export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    async addSearch() {
      if (!this.value) {
        return this.$notify({
          message: '请输入商品名称',
          duration: 1000
        })
      } else if (!this.value.trim()) {
        this.value = ''
        return this.$notify({
          message: '商品名称不能为空',
          duration: 1000
        })
      }
      const { data: res } = await addSearchList(this.value)
      if (res.status !== 0) return this.$Notify({ type: 'danger', message: '添加失败' })
      this.$notify({
        type: 'success',
        message: '添加成功',
        duration: 1000
      })
      this.value = ''
    }
  }
}
</script>
<style lang="less" scoped>
.van-button {
  width: 100%;
  height: 40px;
  margin: 40px 0;
  font-size: 16px;
  line-height: 40px;
}
</style>
