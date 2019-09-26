<template>
  <div>
      <van-tabs v-model="activeName" swipeable @click="getContent()">
        <van-tab :title="item.title" :name="item.id" v-for="(item, index) in cateList" :key="index">
        </van-tab>
      </van-tabs>
      <ul class="item_list">
        <li v-for="item in picList" :key="item.id" @click="goDetail(item.id)">
          <div v-lazy:background-image="item.img_url" class="bgBox">
            <div class="textBot">
              <p>{{item.title}}</p>
              <p v-html="item.zhaiyao"></p>
            </div>
          </div>
        </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue';
import { Lazyload } from 'vant';
Vue.use(Lazyload);
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
  }
}
</script>
<style scoped lang='less'>
  .item_list {
    padding: 0 10px;
    li {
      height: 300px;
      margin: 10px 0;
      border-radius: 10px;
      .bgBox {
        position: relative;
        height: 100%;
        width: 100%;
        background-size: cover;
        border-radius: 6px;
        .textBot {
          position: absolute;
          bottom: 0;
          height: 75px;
          width: 100%;
          padding: 0 7px;
          font-size: 12px;
          color: #ffffff;
          background-color: rgba(0, 0, 0, 0.4);
          overflow: hidden;
          // white-space: nowrap;
          text-overflow: ellipsis;
          box-sizing: border-box;
          border-radius: 0 0 6px 6px;
          p {
            margin: 5px 0; 
          }
        }
      }
    }
  }
</style>
