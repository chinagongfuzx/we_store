<template>
  <div class="box">
    <!-- 导航栏
    <van-nav-bar title="黑马程序员.vant" left-text="返回" left-arrow class="newsNav"/>-->
    <div class="loading" v-if="pageLoading">
      <van-loading type="spinner" color="#1989fa" />
    </div>
    <div>
      <!-- 下拉刷新 -->
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <!-- 图文资讯区域 -->

        <van-list finished-text="没有更多了">
          <van-card
            v-for="item in newsList"
            :key="item.id"
            :title="item.title"
            :thumb="item.img_url"
            @click="toDetail(item.id)"
          >
            <div slot="price">发表时间：{{ item.add_time | dateFormat }}</div>
            <div slot="num">点击：{{ item.click }}</div>
          </van-card>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { getNewsList } from '@/api'

export default {
  data() {
    return {
      newsList: [],
      isLoading: false,
      onLoading: true
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
        this.$toast.success({
          message: '刷新成功',
          duration: 1000
        })
        this.isLoading = false
        // 刷新成功重新请求数据
        this.getNew()
      }, 500)
    },
    toDetail(id) {
      this.$router.push(`/news/detail/${id}`)
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
// .van-image__img {
//   width: 100%;
//   height: 100%;
// }
/deep/.van-card {
  padding: 10px;
  border-bottom: 1px solid #eee;

  .van-card__thumb {
    width: 42px;
    height: 42px;
    margin-right: 10px;

    .van-image {
      width: 100%;
      img {
        object-fit: cover !important;
      }
    }
  }
  .van-card__content {
    min-height: 0;

    .van-card__title {
      height: 17px;
      font-size: 14px;
      font-weight: bold;
      color: #000;
    }

    .van-card__bottom {
      line-height: 30px;
      color: #226aff;

      .van-card__price {
        color: #226aff;
      }
    }
  }
}
.van-card:not(:first-child) {
  margin-top: 0;
}
</style>
