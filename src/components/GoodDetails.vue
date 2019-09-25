<template>
	<div>
		何意百炼钢
	</div>
</template>
		   
<script>
	import {
		goodDetails
	} from './api'
	export default{
		data() {
			return {
				goodDetails: []	
			}
		},
		methods: {
			async init() {
				const { data: res } = await goodDetails(sessionStorage.getItem('goodId'))
				console.log(res);
				
			}
		},
		created() {
			this.init()
		}
	}
</script>
<style lang="less" scoped>
	
</style>