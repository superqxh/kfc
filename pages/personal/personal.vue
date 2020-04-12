<template>
	<view class="content">
		<view class="header">
			<view class="header-img-box">
				<image class="header-img" src="../../static/img/1.jpg" mode=""></image>
			</view>
			<view class="header-name">张三<text class="iconfont iconjiantou header-icon"></text></view>
		</view>
		<view class="money-box">
			<view class="box">
				<view class="number">5,555</view>
				<view class="title">我的V金</view>
			</view>
			<view class="box" @click="toMyCoupon()">
				<view class="number">{{user.couponCount}}<text style="font-size: 30rpx;">张</text></view>
				<view class="title">我的卡包</view>
			</view>
			<view class="box">
				<view class="number">0<text style="font-size: 30rpx;">元</text></view>
				<view class="title">神钱包</view>
			</view>
		</view>
		
		<scroll-view class="menu-box" scroll-y="true">
			<view class="item" v-for="(item,index) of list " :key="item.id" @click="click(item.name)">
				<image class="menu-icon" :src="item.pic" mode=""></image>
				<view class="menu-title">
					{{item.name}}
				</view>
				<view class="text">
					<text class="iconfont iconjiantou icon"></text>
				</view>
			</view>	
		</scroll-view>
		
	</view>
</template>

<script>
	import {menuUser} from '@/api/public.js'
	import {user} from '@/api/user.js'
	import {mapState} from "vuex"
	export default {
		data() {
			return {
				list:[
					{id:1,pic:"",name:"配送地址"},
					{id:2,pic:"",name:"优惠券"}
				],
				user:{}
			}
		},
		computed:{
			...mapState(["token"])
		},
		methods: {
			toMyCoupon(){
				uni.navigateTo({
					url:'/pages/myCoupon/myCoupon'
				})
			},
			click(val){
				console.log(val)
				switch (val){
					case "配送地址":
					uni.navigateTo({
						url:'/pages/address/address'
					})
					break;
					case "优惠券":
					uni.navigateTo({
						url:'/pages/coupon/coupon'
					})
					break;
					case "签到有礼":
					uni.navigateTo({
						url:'/pages/sign/sign'
					})
					break;
					default:console.log("错误")
					break;
				}
			}
		},
		onShow() {
			console.log(121)
			if(this.token==""){
				uni.navigateTo({
					url:"../login/login"
				})
			}else{
				user().then(data=>{
					this.user=data.data.data
				})
			}
			
			
			
			// menuUser().then(data=>{
			// 	console.log(data)
			// 	this.list=data.data.data.routine_my_menus
			// })
			
		}
	}
</script>

<style scoped>
.content{
	width: 100%;
	height: 100%;
	background: #FAFAFA;
}
.header{
	height:150rpx;
	padding-top:50rpx;
	background: #FFFFFF;
	width: 100%;
}
.header-img-box{
	float: left;
	margin:30rpx;
	border:10rpx solid #EEEEEE;
	height: 70rpx;
	width: 70rpx;
	border-radius: 50%;
}
.header-img{
	height: 70rpx;
	width: 70rpx;
	border-radius: 50%;
}
.header-name{
	float: left;
	margin:30rpx 0;
	height: 70rpx;
	line-height: 90rpx;
	font-size: 35rpx;
	font-weight: bold;
}
.money-box{
	width: 100%;
	height: 150rpx;
	padding:20rpx 0;
	background: #FFFFFF;
	box-shadow:0px 2px 2px rgba(0,0,0,0.2);
}
.box{
	float: left;
	width: 250rpx;
	height: 100%;
}
.number{
	width: 100%;
	height: 50rpx;
	margin-top:20rpx;
	line-height: 50rpx;
	text-align: center;
	font-size: 40rpx;
	font-weight: bold;
}
.title{
	margin-bottom:30rpx;
	height:50rpx;
	line-height: 50rpx;
	font-size: 30rpx;
	color: #666666;
	text-align: center;
}
.menu-box{
	margin-top:30rpx;
	height: 820rpx;
	background:#FFFFFF;
	width: 100%;
}
.item{
	width: 100%;
	height: 80rpx;
	padding:10rpx 0;
	border-bottom:1px solid #CCCCCC;
}
.menu-icon{
	float:left;
	margin:0rpx 25rpx;
	height: 80rpx;
	width: 80rpx;
}
.menu-title{
	float:left;
	height: 80rpx;
	line-height: 80rpx;
	font-size: 30rpx;
}
.text{
	float:right;
	height: 80rpx;
	line-height: 80rpx;
	font-size: 25rpx;
	color: #666666;
	margin-right: 25rpx;
}
.icon{
	font-size: 20rpx;
}
</style>
