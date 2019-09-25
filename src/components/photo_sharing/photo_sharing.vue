<template>
  <div>
      <!-- <van-nav-bar title="黑马程序员.vant" left-text="< 返回" :fixed="true" @click-left="onClickLeft" class="head_box"/> -->
      <van-tabs v-model="activeName" swipeable @click="getContent()">
        <van-tab :title="item.title" :name="item.id" v-for="(item, index) in cateList" :key="index">
        </van-tab>
      </van-tabs>
      <ul class="item_list">
        <li v-for="item in picList" :key="item.id" @click="goDetail(item.id)">
          <div v-lazy:background-image="item.img_url" class="bgBox">
            <div class="textBot">
              <p>{{item.title}}</p>
              <p>{{item.zhaiyao}}</p>
            </div>
          </div>
        </li>
    </ul>
    <!-- <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="search" icon="user-o">会员</van-tabbar-item>
      <van-tabbar-item name="friends" icon="cart-o" info="0">购物车</van-tabbar-item>
      <van-tabbar-item name="setting" icon="search">搜索</van-tabbar-item>
    </van-tabbar> -->
  </div>
</template>
<script>
import { cateListApi, getPicListApi } from '@/api'
export default {
  data () {
    return {
      active: 0,
      cateList: [],
      picList: [],
      activeName: 0
    }
  },
  created() {
    this.getCateList()
    this.getContent()
  },
  methods: {
    async getCateList () {
      const { data: res } = await cateListApi()
      // console.log(res)
      this.cateList = res.message
      this.cateList.unshift({title: '全部', id: 0})
    },
    async getContent () {
      const { data: res } = await getPicListApi(this.activeName)
      this.picList = res.message
    },
    goDetail (id) {
        this.$router.push(`/photo_sharing/info/${id}`)
    }
    // onClickLeft () {
    //     this.$router.go(-1)
    // }
  }
}
</script>
<style scoped lang="less">
//   .van-nav-bar {
//     background-color: blue;
//   }
  .item_list {
    padding: 0 10px;
    li {
      height: 300px;
      margin: 10px 0;
      .bgBox {
        position: relative;
        height: 100%;
        width: 100%;
        background-size: cover;
        border-radius: 5px;
        .textBot {
          position: absolute;
          bottom: 0;
          height: 75px;
          width: 100%;
          padding-left: 8px;
          overflow: hidden;
          font-size: 12px;
          color: #ffffff;
          background-color: rgba(0, 0, 0, 0.4);
          box-sizing: border-box;
          p {
            margin: 5px 0; 
          }
        }
      }
    }
  }
</style>
