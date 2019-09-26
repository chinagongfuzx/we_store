<template>
  <van-cell>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-row type="flex" justify="center">
          <van-col span="11" v-for="item in list" :key="item.id">
            <van-cell>
              <img :src="item.img_url" alt>
              <p>{{item.title}}</p>
              <div>
                <div>
                  <span>{{item.market_price}}</span>
                  <span>{{item.sell_price}}</span>
                </div>
                <div>
                  <span>热卖中</span>
                  <span>剩余{{item.stock_quantity}}件</span>
                </div>
              </div>
            </van-cell>
          </van-col>
        </van-row>
      </van-list>
    </van-pull-refresh>
  </van-cell>
</template>
<script>
import { getGoodsList } from "@/api";
export default {
  data() {
    return {
      isLoading: false,
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.getGoodsList();
      }, 500);
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    },
    async getGoodsList() {
      const { data: res } = await getGoodsList(1);
      this.list = res.message;
    }
  },
  created() {
    this.getGoodsList();
  }
};
</script>
<style lang="less" scoped>
.van-row {
  flex-wrap: wrap;
}
.van-col {
    padding: 10px;
    margin: 10px 6px;
  border: 1px solid #ccc;
  img {
    width: 100%;
    margin: 5 10 5 10;
  }
}
.van-cell{
   padding: 0
}
</style>

