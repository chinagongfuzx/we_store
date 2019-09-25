<template>
  <div>
    <div class="loading" v-if="pageLoading" >
      <van-loading type="spinner" color="#1989fa" />
    </div>
    <div class="newslist" v-else>
      <!-- 下拉刷新 -->
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <!-- 图文资讯区域 -->
        <van-list finished-text="没有更多了">
          <van-card
            v-for="item in newsList"
            :key="item.id"
            :num="item.click"
            price
            :title="item.title"
            :thumb="item.img_url"
          ></van-card>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>
<script>
import { getNewsList } from "@/api"

export default {
  data() {
    return {
      newsList: [],
      isLoading: false
    }
  },
  computed: {
    pageLoading() {
      return this.newsList.length ? false : true
    }
  },
  created() {
    this.getNew()
  },
  methods: {
    getNew() {
      setTimeout(async () => {
        const { data: res } = await getNewsList()
        this.newsList = res.message
      }, 500)
    },

    // 下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功")
        this.isLoading = false
        // 刷新成功重新请求数据
        this.getNew()
      }, 500)
    }
  }
}
</script>
<style lang="less" scoped>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.newsNav {
  background-color: skyblue;
  color: #fffffe;
  font-size: 12px;
}
</style>