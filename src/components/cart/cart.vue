<template>
  <div>
    <div v-if="!$store.state.count" class="empty">
      <img src="../../assets/pic/cart_empty.png" alt="" />
      <p>购物车空空如也</p>
      <van-button type="info" size="mini" @click="shop">去逛逛</van-button>
    </div>
    <van-card
      v-else
      v-for="(item, index) in cartList"
      :key="index"
      :num="item.count"
      :price="item.sell_price"
      :title="item.title"
      :thumb="item.thumb_path"
    >
      <div slot="footer">
        <van-stepper v-model="item.count" @change="countChange(item.id, item.count)" />
      </div>
    </van-card>
    <van-submit-bar :class="isSubBar ? '' : 'bar-high'" :price="total" button-text="提交订单" />
  </div>
</template>

<script>
import { cartListApi } from '@/api'
export default {
  props: ['isSubBar'],
  data() {
    return {
      // total: 0,
      cartList: []
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
    }
  },
  computed: {
    total() {
      let temp = 0
      if (!this.$store.state.count) return temp
      this.cartList.map(item => {
        temp += item.count * item.sell_price
      })
      return temp * 100
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

.van-button--danger {
  background-color: #f44;
  border-color: #f44;
}

.bar-high {
  bottom: -50px;
}
</style>