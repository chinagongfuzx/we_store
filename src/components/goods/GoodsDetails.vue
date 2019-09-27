<template>
  <div>
    <div class="card">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in imgList" :key="index">
          <img :src="item.src" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="card">
      <h3 class="title">{{ details.title }}</h3>
      <p class="price">
        市场价：<del>{{ details.market_price }}</del>
        <font
          >销售价: <strong>{{ details.sell_price }}</strong></font
        >
      </p>
      <p class="count">
        购买数量
        <van-stepper v-model="buyCount" integer />
      </p>
      <p class="btns">
        <van-button size="small" type="info">立即购买</van-button>
        <van-button size="small" type="danger" v-on:click="addCar">加入购物车</van-button>
      </p>
    </div>
    <div class="card">
      <h3 class="title">商品参数</h3>
      <p>商品货号：{{ details.goods_no }}</p>
      <p>库存情况：{{ details.stock_quantity }}件</p>
      <p>上架时间：{{ details.add_time | dateFormat('yyyy-mm-dd hh:MM:ss') }}</p>
      <p class="line"></p>
      <p class="btn-big">
        <van-button plain type="info" v-on:click="toImgTxtDetaiks">图文介绍</van-button>
      </p>
      <p class="btn-big">
        <van-button plain type="danger" v-on:click="toGoodsComment">商品评论</van-button>
      </p>
    </div>
  </div>
</template>

<script>
import { goodsImgs, goodsDetails } from '@/api'
export default {
  data() {
    return {
      imgList: [],
      details: {},
      buyCount: 1
    }
  },
  methods: {
    async init() {
      const { data: imgList } = await goodsImgs(sessionStorage.getItem('goodsId'))
      console.log(imgList)
      this.imgList = imgList.message
      const { data: res } = await goodsDetails(sessionStorage.getItem('goodsId'))
      console.log(res)
      this.details = res.message[0]
    },
    createStorage(arr) {
      arr.push({
        id: this.details.id,
        count: this.buyCount
      })
      // localStorage.setItem('carData', JSON.stringify(arr))
      this.$store.commit('saveCar', arr)
      this.buyCount
      this.$toast.success({
        duration: 1000,
        message: '已加入购物车'
      })
    },
    addCar() {
      const carData = localStorage.getItem('carData')
      if (!carData) {
        let carArr = []
        this.createStorage(carArr)
      } else {
        let carArr = JSON.parse(carData)
        // console.log(carArr);
        let additem = carArr.find(i => i.id === this.details.id)
        // console.log(additem);
        if (additem) {
          additem.count += this.buyCount
          // localStorage.setItem('carData', JSON.stringify(carArr))
          this.$store.commit('saveCar', carArr)
          this.$toast.success({
            duration: 1000,
            message: '已加入购物车'
          })
        } else {
          this.createStorage(carArr)
        }
      }
    },
    toImgTxtDetaiks() {
      this.$router.push('/imgTxtDetails')
    },
    toGoodsComment() {
      this.$router.push('/goodsComment')
    }
  },
  created() {
    this.init()
  }
}
</script>
<style lang="less" scoped>
/deep/.card {
  padding: 0 10px 10px;
  margin: 10px 10px 0;
  border-radius: 4px;
  border: 1px solid #ddd;
  .van-swipe {
    .van-swipe__track {
      margin-top: 10px;
    }
    .van-swipe-item {
      height: 160px;
      text-align: center;

      img {
        width: auto;
        height: 160px;
      }
    }
  }

  .title {
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
    font-size: 16px;
    font-weight: normal;
  }

  p {
    margin-top: 16px;
    padding: 0 10px;
    color: #999;
  }

  .price {
    del {
      margin-right: 12px;
    }

    strong {
      color: #ed2349;
    }
  }

  .count {
    .van-stepper {
      margin-left: 8px;
      display: inline-block;
      vertical-align: middle;
    }
  }

  .btns {
    button {
      margin-right: 8px;
      font-size: 14px;
    }
  }

  .line {
    height: 1px;
    background: #ddd;
  }

  .btn-big button {
    border-radius: 4px;
    width: 100%;
  }
}
</style>