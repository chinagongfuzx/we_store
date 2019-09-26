<template>
	<div>
		<div class="wrap">
			<h3 class="title">{{imgTxtDetails.title}}</h3>
			<div class="img-txt-wrap" v-html="imgTxtDetails.content"></div>
		</div>
	</div>
</template>

<script>
	import {
		imgTxtDetails
	} from '../api'
	export default {
		data() {
			return {
				imgTxtDetails: {}
			}
		},
		methods: {
			async init() {
				const {
					data: res
				} = await imgTxtDetails(sessionStorage.getItem('goodsId'))
				console.log(res);
				this.imgTxtDetails = res.message[0]
			}
		},
		created() {
			this.init()
		}
	}
</script>
<style lang="less" scoped>
	.wrap {
		margin: 0 10px;
	}
	.title {
		color: #226aff;
		text-align: center;
		padding: 10px 0;
		border-bottom: 1px solid #ddd;
	}
</style>