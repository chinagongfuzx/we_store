<template>
	<div>
		<p>
			iPhone 6 Plus设计上和iPhone 6一致，做工延续了苹果的高标准。
		</p>
		<p>
			和前几代不同的是，与前几代iPhone有棱有角的设计相比，它从屏幕边缘到边框都是弧形设计，玻璃与边框贴合的十分紧凑，两者衔接的地方过度十分自然，更像是unibody一体式的设计。它一改以往的设计风格，也使得手机十分圆滑，不太容易掌控。
		</p>
		<p>
			TechCrunch和Engadget都提到，iPhone 6 Plus让人想起了iPad mini，尤其是后者的侧边也是弧形设计。iPhone 6 Plus同样需要双手来操作，想要单手模式的话，轻拍两下Home键（不是按下去），显示内容会下移大约一半的尺寸。
		</p>
		<p>
			<br />
		</p>
		<p align="center">
			<img width="750" height="371" class="gomeImgLoad" alt="" src="http://img5.gomein.net.cn/image/prodimg/productDesc/descImg/201503/desc1226/1122290268/1_02.jpg" /> <img width="750" height="371" class="gomeImgLoad" alt="" src="http://img6.gomein.net.cn/image/prodimg/productDesc/descImg/201503/desc1226/1122290268/1_03.jpg" />
		</p>
		<p align="center">
			<img width="750" height="370" class="gomeImgLoad" alt="" src="http://img5.gomein.net.cn/image/prodimg/productDesc/descImg/201503/desc1226/1122290268/1_04.jpg" />
		</p>
		<p align="center">
			<img width="750" height="371" class="gomeImgLoad" alt="" src="http://img6.gomein.net.cn/image/prodimg/productDesc/descImg/201503/desc1226/1122290268/1_05.jpg" /> <img width="750" height="371" class="gomeImgLoad" alt="" src="http://img5.gomein.net.cn/image/prodimg/productDesc/descImg/201503/desc1226/1122290268/1_06.jpg" /> <img width="750" height="371" class="gomeImgLoad" alt="" src="http://img5.gomein.net.cn/image/prodimg/productDesc/descImg/201503/desc1226/1122290268/1_07.jpg" /> <img width="750" height="371" class="gomeImgLoad" alt="" src="http://img5.gomein.net.cn/image/prodimg/productDesc/descImg/201503/desc1226/1122290268/1_08.jpg" /> <img width="750" height="371" class="gomeImgLoad" alt="" src="http://img6.gomein.net.cn/image/prodimg/productDesc/descImg/201503/desc1226/1122290268/1_09.jpg" /> <img width="750" height="370" class="gomeImgLoad" alt="" src="http://img6.gomein.net.cn/image/prodimg/productDesc/descImg/201503/desc1226/1122290268/1_10.jpg" /> <img width="750" height="371" class="gomeImgLoad" alt="" src="http://img6.gomein.net.cn/image/prodimg/productDesc/descImg/201503/desc1226/1122290268/1_11.jpg" /> <img width="750" height="371" class="gomeImgLoad" alt="" src="http://img5.gomein.net.cn/image/prodimg/productDesc/descImg/201503/desc1226/1122290268/1_12.jpg" />
		</p>
		<p align="center">
			<img width="750" height="371" class="gomeImgLoad" alt="" src="http://img5.gomein.net.cn/image/prodimg/productDesc/descImg/201503/desc1226/1122290268/1_13.jpg" />
		</p>
	</div>
</template>

<script>
	import {
		goodDetails
	} from './api'
	export default {
		data() {
			return {
				goodDetails: []
			}
		},
		methods: {
			async init() {
				const {
					data: res
				} = await goodDetails(sessionStorage.getItem('goodId'))
				console.log(res);

			}
		},
		created() {
			this.init()
		}
	}
</script>
<style lang="less" scoped>
	p {
		margin: 0;
	}
	img {
		display: block;
		width: 100%;
		height: auto;
	}
</style>