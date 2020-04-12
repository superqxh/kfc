<template>
	<swiper class="swiper"  :indicator-dots="true" :autoplay="autoplay" :interval="3000" :duration="1000" previous-margin=40rpx next-margin=40rpx>
		<swiper-item v-for="(item,index) in list" :key=index>
			<view class="swiper-item">
				<image class="img" :src="item.pic" mode=""></image>
			</view>
		</swiper-item>
		
	</swiper>
</template>

<script>
	export default {
		props:['list'],
		data(){
			return{
				autoplay:true
				
			}
		},
		created() {
			
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
	height: 300rpx;
	
}
.swiper-item{
	margin: 20upx 15upx;
	width: 670rpx;
	height: 260rpx;
}
.img{
	width: 640rpx;
	height: 240rpx;
	border-radius: 20rpx;
}
</style>
