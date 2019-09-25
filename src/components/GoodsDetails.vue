<template>
	<div>
		<div class="card">
			<p class="title">{{details.title}}</p>
			<p class="price">市场价：<del>{{details.market_price}}</del> <font>销售价: <strong>{{details.sell_price}}</strong></font></p>
		</div>
	</div>
</template>

<script>
	import {
		goodsDetails
	} from './api'
	export default {
		data() {
			return {
				details: {}
			}
		},
		methods: {
			async init() {
				const {
					data: res
				} = await goodsDetails(sessionStorage.getItem('goodsId'))
				this.details = res.message[0]
				console.log(res);
				
			}
		},
		created() {
			this.init()	
		}
	}
</script>
<style lang="less" scoped>
	.card {
		padding: 0 10px;
		margin: 10px 10px 0;
		height: 200px;
		border-radius: 4px;
		border: 1px solid #ddd;
		.title {
			margin-top: 10px;
			font-size: 16px;
			border-bottom: 1px solid #ddd;
		}
		.price {
			margin-top: 16px;
			padding: 0 10px;
			del {
				margin-right: 12px;
			}
			strong {
				color: #ed2349;
			}
		}
	}
</style>