<template>
	<view class="content">
		<uni-nav-bar :fixed="true" :status-bar="true">
		    <view class="title-box">
				<view class="title">
					{{title}}
				</view>
				<view class="bottom">
					<view class="box"></view>
					<view class="box"></view>
					<view class="box"></view>
				</view>
			</view>
		    <view slot="left">
				<view class="iconfont iconjiantou-copy icon" @click="click()">
					
				</view>
			</view>
		    <view slot="right"></view>
		</uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		 components: {uniNavBar},
		data() {
			return {
				
			}
		},
		methods: {
			click(){
				uni.navigateBack({
					delta:1
				})
			}
		},
		props:['title']
	}
</script>

<style scoped>
.nav-content{
	margin-top: 10rpx;
	height: 100rpx;
	margin-bottom: 50rpx;
}
.icon{
	color: #bf212e;
	font-size: 40rpx;
	margin-left: 30rpx;
	width: 50rpx;
	text-align: center;
}
.title-box{
	
	width: 450rpx;
	text-align: center;
}
.title{
	width: 450rpx;
	color: #bf212e;
	font-size: 40rpx;
	font-weight: bold;
	text-align: center;
}
.bottom{
	margin-top: -15rpx;
	margin-left: 165rpx;
	height:20rpx ;
	width: 120rpx;
}
.box{
	
	width: 20rpx;
	height: 20rpx;
	background-color: #df3331;
	float: left;
	margin: 0 10rpx;
}
</style>
