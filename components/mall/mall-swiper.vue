<template>
	<view class="content"> 
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :circular="true" :duration="1000">
			<swiper-item v-for="(item,index) in list" :key="index">
				<view class="swiper-item">
					<image class="img"  :src="item" mode=""></image>
				</view>
			</swiper-item>
			
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:["https://kfc.insideria.cn/static/img/%E9%A6%96%E9%A1%B5%E5%AE%A3%E4%BC%A0/1.jpg","https://kfc.insideria.cn/static/img/%E9%A6%96%E9%A1%B5%E5%AE%A3%E4%BC%A0/2.jpg","https://kfc.insideria.cn/static/img/%E9%A6%96%E9%A1%B5%E5%AE%A3%E4%BC%A0/3.jpg"]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.content{
		width: 100%;
		height: 300rpx;
	}
	.swiper{
		width: 100%;
		/* width: 700rpx; */
		height: 280rpx;
	}
	.swiper-item{
		margin: 20rpx 25rpx;
		width: 700rpx;
		height: 260rpx;
	}
	.img{
		width: 700rpx;
		height: 260rpx;
		border-radius: 20rpx;
	}
</style>