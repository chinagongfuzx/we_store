<template>
    <div  class="detailBox">
      <div v-for="item in detailList" :key="item.id">
        <h4>{{item.title}}</h4>
        <van-row type="flex" justify="space-between">
          <van-col span="12">发表时间：{{item.add_time | dataFormat}}</van-col>
          <van-col>点击：{{item.click}}</van-col>
        </van-row>
        <hr/>
        <ul class="pic">
          <li v-for="(item, index) in picList" :key="index">
            <img :src="item.src" alt="" @click="ImgClick">
          </li>
        </ul>
        <p v-html="item.content"></p>
      </div>
      <comment :id="id"></comment>
    </div>
</template>
           
<script>
import { ImagePreview } from 'vant'
import { getPicDetailApi, getPicApi } from '@/api'
import Comment from "../common/Comment"
export default {
  props: ["id"],
  data () {
    return {
      detailList: [],
      picList: [],
      ImgList: []
    }
  },
  created() {
    this.getDetail()
    this.getPicList()
  },
  methods: {
    async getDetail () {
      // console.log(imgId)
      const {data: res} = await getPicDetailApi(this.$route.params.id)
      console.log(res)
      this.detailList = res.message
    },
    async getPicList () {
      const {data: res} = await getPicApi(this.$route.params.id)
      console.log(res)
      this.picList = res.message
    },
    ImgClick () {
      this.picList.forEach(item => {
        this.ImgList.push(item.src)
      })
      console.log(this.ImgList)
      ImagePreview(this.ImgList)
    },
    onClose() {
    }
  },
  components: {
    comment: Comment
  }          
}
</script>
<style lang="less" scoped>
  .detailBox {
    padding: 0 5px;
    overflow: hidden;
    margin-bottom: 50px;
      h4 {
      text-align: center;
      font-size: 15px;
      color: #26a2ff;
      }
  }
  .van-row--justify-space-between {
    font-size: 12px;
    color: #8f8f94
  }
  .van-col:nth-child(2) {
    float: right;
  }
  .pic {
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: flex-start;
    list-style: none;
    margin: 10px 0;
    padding: 0 5px;
    overflow: hidden;
    li {
      width: 33.3%;
      float: left;
      padding: 5px;
      box-sizing: border-box;
      img {
        width: 100%;
        height: 100%;
        box-shadow: -2px 0px 5px 1px #ccc,0px -2px 5px 1px #ccc,2px 0px 5px 1px #ccc,0px 2px 5px 1px #ccc;
      }
    }
  }
  .van-image__img {
    width: 100%;
    height: 100%;
    object-fit: fill!important;
  } 
</style>