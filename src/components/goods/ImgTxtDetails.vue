<template>
  <div>
    <div class="wrap">
      <h3 class="title">{{ imgTxtDetails.title }}</h3>
      <div class="img-txt-wrap" v-html="imgTxtDetails.content"></div>
    </div>
  </div>
</template>

<script>
import { imgTxtDetails } from '@/api'
export default {
  data() {
    return {
      imgTxtDetails: {}
    }
  },
  methods: {
    async init() {
      const { data: res } = await imgTxtDetails(sessionStorage.getItem('goodsId'))
      console.log(res.message[0].content)
      res.message[0].content.replace(/width="\d+" height="\d+"/, '')
      this.imgTxtDetails = res.message[0]
    }
  },
  created() {
    this.init()
  }
}
</script>
<style lang="less" scoped>
/deep/.wrap {
  margin: 0 10px;
  .title {
    color: #226aff;
    text-align: center;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
  }
  .img-txt-wrap p {
    margin: 8px;
  }
  .img-txt-wrap [align='center'] {
    margin: 0;
  }

  .img-txt-wrap img {
    display: block;
    width: 100%;
    height: auto;
  }
  tr {
    width: 10rem;
    padding-right: 20px;
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
    }
  }
}
</style>