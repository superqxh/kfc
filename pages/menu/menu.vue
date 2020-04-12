<template>
	<view>
		<uni-nav-bar :fixed="true"  :status-bar="true">
			<view class="box">
				<view class="iconfont icondizhi icon-d"></view>
				<view class="text">
					<view class="text-top">雨花区环保学校</view>
					<view class="text-bottom">外卖|约30分钟</view>
				</view>
				<view class="">
					
				</view>
			</view>
			
			<view slot="left">
				<view class="iconfont iconjiantou-copy icon"  @click="click">
					
				</view>
			</view>
			 <view slot="right">
				 <view class="iconfont iconkefu icon-kf">
				 	
				 </view>
			 </view>
		</uni-nav-bar>
		<mallSwiper></mallSwiper>
		<meunList></meunList>
		
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue" 
	import mallSwiper from "@/components/mall/mall-swiper.vue"
	import meunList from "@/components/meun/menu-list.vue"
	import {mapState} from "vuex"
	export default {
		components:{uniNavBar,mallSwiper,meunList},
		data() {
			return {
				
			}
		},
		methods: {
			click(){
				console.log(1)
				uni.switchTab({
					url:'../index/index'
				})
			}
		},
		computed:{
			...mapState(["token"])
		},
		onShow() {
			
		}
	}
</script>

<style scoped>
.icon{
	color: #8f212e;
	font-size: 40rpx;
	margin-left: 30rpx;
}
.icon-kf{
	color: #8f212e;
	font-size: 40rpx;
	margin-left: 30rpx;
}
.box{
	
	margin-top: -5rpx;
	margin-left: -80rpx;
}
.icon-d{
	float: left;
	height: 60rpx;
	line-height: 60rpx;
	color: #8f212e;
}
.text{
	float: left;
}
.text-top{
	font-size: 30rpx;
	color: #8f212e;
	height: 35rpx;
	line-height: 35rpx;
	font-weight: bold;
}
.text-bottom{
	font-size: 18rpx;
	color: #000000;
	height: 25rpx;
	line-height: 25rpx;
}
</style>
