<template>
  <div>
    <form action="/">
      <van-search v-model="value" placeholder="请输入搜索关键词" show-action @search="onSearch" @cancel="onCancel" />
    </form>
    <div v-if="flag === true">
      <van-swipe-cell v-for="(item, index) in SearchList" :key="index" :name="item.id" :on-close="onClose">
        <van-cell :title="item.name" :value="'商品上架时间' + item.ctime.substr(0, 10)" />
        <template slot="right">
          <van-button square type="danger" text="删除" />
        </template>
      </van-swipe-cell>
    </div>
    <div v-else class="aaa">
      <p>
        搜索历史
        <van-icon name="delete" @click="delvalue" />
      </p>
      <van-divider v-if="valueList.length === 0">暂无搜索历史</van-divider>
      <van-tag v-else-if="valueList.length >= 0" v-for="(item, index) in valueList" :key="index">{{ item }}</van-tag>
    </div>
  </div>
</template>

<script>
import { getSearchList, delSearchList } from '@/api'
export default {
  data() {
    return {
      value: '',
      SearchList: [],
      flag: false,
      valueList: []
    }
  },
  methods: {
    async onSearch() {
      if (!this.value) {
        this.value = ''
        return this.$toast({
          duration: 2000,
          message: '请输入搜索内容'
        })
      }
      if (!this.value.trim()) {
        this.value = ''
        return this.$toast.fail({
          duration: 2000,
          message: `搜索内容\n不能为空`
        })
      }
      const { data: res } = await getSearchList()
      this.SearchList = res.message
      this.flag = true
      this.valueList.push(this.value)
    },
    onCancel() {
      this.value = ''
      this.flag = false
    },
    async onClose(clickPosition, instance, detail) {
      switch (clickPosition) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close()
          break
        case 'right':
          const result = await this.$dialog.confirm({
            message: '确定删除吗？',
            confirmButtonText: '删除',
            confirmButtonColor: '#ff0000'
          })
          if (result !== 'confirm') return
          await delSearchList(detail.name)
          this.$notify({
            type: 'success',
            message: '删除成功',
            duration: 1000
          })
          this.onSearch()
          break
      }
    },
    delvalue() {
      this.valueList = []
    }
  }
}
</script>

<style lang="less" scoped>
.van-icon {
  float: right;
}
.p {
  float: left;
}
.van-tag {
  font-size: 14px;
  margin: 0 10px;
}
.aaa {
  padding: 0px 20px;
}
</style>
