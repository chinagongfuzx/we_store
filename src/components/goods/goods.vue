<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        :immediate-check="false"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        :offset="10"
        @load="onLoad"
      >
        <van-grid :column-num="2" :border="false" use-slot>
          <van-grid-item v-for="(item, index) in goods" :key="index" v-on:click="toGoodsDetails(item.id)">
            <div class="card">
              <div class="img_box">
                <img :src="item.img_url" v-on:error.once="img404" />
              </div>
              <p class="title">{{ item.title }}</p>
              <div class="other-info">
                <p>
                  <span>￥{{ item.sell_price }}</span>
                  <del>￥{{ item.market_price }}</del>
                </p>
                <p>
                  <font>热卖中</font>
                  <font style="float: right;"
                    >剩余 <font style="color: #ed2349">{{ item.stock_quantity }}</font> 件</font
                  >
                </p>
              </div>
            </div>
          </van-grid-item>
        </van-grid>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getGoods } from '@/api'
export default {
  data() {
    return {
      pageindex: 1,
      goods: [],
      list: [],
      isLoading: false,
      loading: false,
      finished: false
    }
  },
  methods: {
    async init() {
      const { data: res } = await getGoods(this.pageindex)
      if (res.message.length === 0) return (this.finished = true)
      this.goods.push(...res.message)
    },
    img404(e) {
      e.target.src =
        'data:image/jpeg;base64,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'
    },
    toGoodsDetails(id) {
      sessionStorage.setItem('goodsId', id)
      this.$router.push(`/goodsDetails`)
    },
    onRefresh() {
      this.pageindex = 1
      setTimeout(async () => {
        await this.init()
        this.isLoading = false
        this.$toast.success({
          duration: 1000,
          message: '加载成功'
        })
      }, 500)
    },
    async onLoad() {
      this.pageindex++
      this.init()
      this.loading = false
    }
  },
  created() {
    this.init()
  }
}
</script>

<style lang="less" scoped>
/deep/.van-grid {
  padding: 0 3px;
  .van-grid-item {
    padding: 15px 7px 0;

    .van-grid-item__content {
      padding: 0;
    }

    .card {
      box-sizing: border-box;
      border: 1px solid #ccc;
      padding-top: 10px;
      font-size: 14px;
      .img_box {
        height: 200px;
        img {
          display: block;
          margin: 0 auto;
          width: 148.5px;
          margin-bottom: 28px;
        }
      }

      .title {
        box-sizing: border-box;
        height: 57px;
        padding: 4px 10px;
        margin: 14px 0;
        line-height: 24px;
        color: #000;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .other-info {
        padding: 5px 0;
        background: #f2f2f2;

        p {
          margin: 0;
          padding: 0 10px;
          font-size: 14px;
          line-height: 24px;
        }

        span {
          color: #ed2349;
          font-size: 16px;
          margin-right: 15px;
        }

        del {
          color: #323233;
        }
      }
    }
  }
}
</style>
