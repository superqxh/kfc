<template>
	<view class="content">
		<nav-t title="地址管理"></nav-t>
		<view class="header-box" @click="toAddAddress()">
			<view class="add-title" >新增地址</view>
			<view class="add">新增</view>
			<view class="add-icon">+</view>
		</view>
		<view class="address-list">
			<view class="item" v-for="item of list " :key="item.id">
				<view class="box">
					<view class="address">{{item.detail}}</view>
					<view class="info">
						<view class="name">{{item.real_name}}</view>
						<view class="phone">{{item.phone}}</view>
					</view>
				</view>
				<view class="iconfont iconbianji icon" @click="toUpdateAddress(item.id)"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import {addressList} from '@/api/user.js'
	import navT from '../../components/nav/nav.vue'
	export default {
		components:{
			navT
		},
		data() {
			return {
				list:[]
			}
		},
		methods: {
			toAddAddress(){
				uni.navigateTo({
					url:'/pages/addAddress/addAddress'
				})
			},
			toUpdateAddress(id){
				uni.navigateTo({
					url:'/pages/updateAddress/updateAddress?id='+id
				})
			}
		},
		onShow() {
			
			addressList().then(data=>{
				this.list=data.data.data
			})
		}
		
	}
</script>

<style scoped>
.content{
	width: 100%;
	height: 100%;
	background: #FAFAFA;
}
.header-box{
	margin-top:25rpx;
	width: 100%;
	height: 80rpx;
	border-bottom:1px solid #EEEEEE;
	background: #FFFFFF;
}
.add-title{
	float: left;
	margin-left: 20rpx;
	height: 80rpx;
	line-height: 80rpx;
	font-size: 35rpx;
}
.add{
	float: right;
	margin-right: 20rpx;
	height: 80rpx;
	line-height: 80rpx;
	color: #BF212E;
	font-size: 30rpx;
}
.add-icon{
	float: right;
	margin: 24rpx 10rpx;
	height: 30rpx;
	line-height: 30rpx;
	font-size: 30rpx;
	width: 30rpx;
	border-radius: 50rpx;
	text-align: center;
	border:1rpx solid #BF212E;
	color: #BF212E;
}
.address-list{
	width: 100%;
	background: #FFFFFF;
}
.item{
	height: 150rpx;
	padding:10rpx 0;
	width: 100%;
	border-bottom:1px solid #EEEEEE;
}
.box{
	height: 100%;
	float: left;
	margin-left: 20rpx;
}
.icon{
	height: 150rpx;
	line-height: 150rpx;
	float: right;
	margin-right: 20rpx;
	color: #BF212E;
	font-size: 40rpx;
}
.address{
	width: 550rpx;
	line-height: 50rpx;
	height: 100rpx;
	font-size: 25rpx;
	color: #666666;
}
.info{
	line-height: 50rpx;
	height: 50rpx;
	color: #666666;
	font-size: 25rpx;
}
.name{
	float: left;
	
}
.phone{
	float: left;
	margin-left:10rpx
}
</style>
