<template>
  <div>
    <div v-if="!$store.state.count" class="empty">
      <img src="../../assets/pic/cart_empty.png" alt="" />
      <p>购物车空空如也</p>
      <van-button type="info" size="mini" @click="shop">去逛逛</van-button>
    </div>
    <van-swipe-cell :on-close="onClose" :name="item.id" v-else v-for="(item, index) in cartList" :key="index">
      <van-card :num="item.count" :price="item.sell_price" :title="item.title" :thumb="item.thumb_path">
        <div slot="footer">
          <van-stepper v-model="item.count" integer />
        </div>
      </van-card>
      <template slot="right">
        <van-button style="height: 100%" square type="danger" text="删除" />
      </template>
    </van-swipe-cell>
    <van-submit-bar :class="isSubBar ? '' : 'bar-high'" :price="total" button-text="提交订单" />
  </div>
</template>

<script>
import { cartListApi } from '@/api'
export default {
  props: ['isSubBar'],
  data() {
    return {
      cartList: [],
      tempGoodsCount: 0
    }
  },
  methods: {
    shop() {
      this.$router.push('/goods')
    },
    async init() {
      const carData = this.$store.state.carData
      const ids = carData.map(item => item.id)
      const { data: res } = await cartListApi(ids.join(','))
      this.cartList = carData.map(item => {
        res.message.map(i => {
          if (item.id === i.id) {
            item.title = i.title
            item.sell_price = i.sell_price
            item.thumb_path = i.thumb_path
          }
        })
        return item
      })
    },
    countChange(id, count) {
      this.cartList.some(item => {
        if (item.id === id) {
          item.count = count
          return true
        }
      })
      this.$store.commit('saveCar', this.cartList)
    },
    async onClose(clickPosition, instance, detail) {
      switch (clickPosition) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close()
          break
        case 'right':
          const delResult = await this.$dialog.confirm({
            message: '确定删除该商品吗？'
          }).catch(err => err)
          if (delResult === 'confirm') {
            this.delGoods(detail.name)
          }
          break
      }
    },
    delGoods(id) {
      this.cartList = this.cartList.filter(item => item.id !== id)
      this.$store.commit('saveCar', this.cartList)
    }
  },
  computed: {
    total() {
      return this.$store.state.count
        ? this.cartList.reduce((acc, val) => {
            return acc + val.count * val.sell_price * 100
          }, 0)
        : 0
    }
  },
  created() {
    if (!this.$store.state.count) return
    this.init()
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

.van-swipe-cell:not(:first-child) {
  border-top: 1px solid #e6e6e6;
}

.van-button--danger {
  background-color: #f44;
  border-color: #f44;
}

.bar-high {
  bottom: -50px;
}
</style>