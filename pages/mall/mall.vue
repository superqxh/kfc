<template>
	<view class="content">
		<uni-nav-bar :fixed="true"  :status-bar="true">
			<view class="box">
				<view class="iconfont iconsou input-icon"></view>
				<input class="nav-input" type="text" value="newa" />
			</view>
			
			<view slot="left">
				<view class="iconfont iconjiantou-copy icon">
					
				</view>
			</view>
			 <view slot="right">
				 <view class="iconfont iconkefu icon">
				 	
				 </view>
			 </view>
		</uni-nav-bar>
		<mall-swiper></mall-swiper>
		<mallVgold></mallVgold>
		<mallIcon></mallIcon>
		<mallShow :content=content1></mallShow>
		<mallTop></mallTop>
		<view class="iconfont icongouwuche icon-cart">
			
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import mallSwiper from "@/components/mall/mall-swiper.vue"
	import mallVgold from "@/components/mall/mall-vgold.vue"
	import mallIcon from "@/components/mall/mall-icon.vue"
	import mallShow from "@/components/mall/mall-show.vue"
	import {mapState} from "vuex"
	
	import mallTop from "@/components/mall/mall-top.vue"
	export default {
		components: {uniNavBar,mallSwiper,mallVgold,mallIcon,mallShow,mallTop},
		data() {
			return {
				content1:{
					title:"新季爆款",
					mainImg:"https://kfc.insideria.cn/static/img/wow%E4%BC%9A%E5%91%98/1.jpg",
					secondaryImgList:["https://kfc.insideria.cn/static/img/wow%E4%BC%9A%E5%91%98/2.jpg","https://kfc.insideria.cn/static/img/wow%E4%BC%9A%E5%91%98/3.jpg","https://kfc.insideria.cn/static/img/wow%E4%BC%9A%E5%91%98/4.jpg"]
				}
			}
		},
		computed:{
			...mapState(['token'])
		},
		methods: {
			
		},
		onLoad() {
			if(this.token ==""){
				uni.navigateTo({
					url:"../login/login"
				})
			}
			
		}
		
	}
</script>

<style scoped>
.content{

}
.box{
	position: relative;
}
.input-icon{
	position: absolute;
	left: -30rpx;
	top:-18rpx;
	font-size: 40rpx;
	color: #333;
	
}
.icon{
	color: #bf212e;
	font-size: 40rpx;
	
}
.nav-input{
	width: 500rpx;
	border: 1rpx solid #EEEEEE;
	border-radius: 40rpx;
	background-color: #FAFAFA;
	padding-left:80rpx ;
	margin-left: -60rpx;
}
.icon-cart{
	position: fixed;
	top: 550px;
	right: 70rpx;
	font-size: 50rpx;
	height: 80rpx;
	line-height: 80rpx;
	width: 80rpx;
	background-color: rgba(0,0,0,0.6);
	color: #ffffff;
	border-radius: 50%;
	text-align: center;
}
</style>
