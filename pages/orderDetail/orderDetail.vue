<template>
	<view class="content">
		<nav-t title="订单详情"></nav-t>
		<view class="status-box">
			<view class="status">
				{{order._status._title}}
			</view>
			<view class="again" @click="clickAgain()">
				再来一单
			</view>
		</view>
		<view class="box">
			<view class="title">
				菜品详情
			</view>
			<view class="item" v-for="(item,index) of order.cartInfo" :key="index">
				<image class="img" :src="item.productInfo.image" mode=""></image>
				<view class="name" >
					{{item.productInfo.store_name}}
				</view>
				
				<view class="number">
					<text class="iconfont iconchahao icon "></text>{{item.cart_num}}
				</view>
				<view class="price">
					￥{{item.productInfo.price}}
				</view>
			</view>
			<view class="total">
				<view class="total-money">
					￥{{order.total_price}}
				</view>
				<view class="total-number">
					共计{{order.total_num}}份餐品
				</view>
			</view>
		</view>
		<view class="box">
			<view class="title">
				订单信息
			</view>
			<view class="info-item">
				<view class="text">
					送餐地址
				</view>
				<view class="cont">
					{{order.user_address}}
				</view>
			</view>
			<view class="info-item">
				<view class="text">
					下单时间
				</view>
				<view class="cont">
					{{timestampToTime(order.add_time)}}
				</view>
			</view>
			<view class="info-item">
				<view class="text">
					订单号
				</view>
				
				<view class="cont">
					{{order.order_id}}
					<view class="copy" @click="clickCopy()">
						复制
					</view>
				</view>
				
			</view>
			<view class="info-item">
				<view class="text">
					支付方式
				</view>
				<view class="cont">
					支付宝支付
				</view>
			</view>
			<view class="info-item">
				<view class="text">
					是否需要发票
				</view>
				<view class="cont">
					否
				</view>
			</view>
			<view class="info-item">
				<view class="text">
					其他送餐需要
				</view>
				<view class="cont">
					{{order.mark}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navT from '../../components/nav/nav.vue'
	import {orderDetail,orderAgain} from '@/api/order.js'
	export default {
		components:{
			navT
		},
		data() {
			return {
				order:{}
			}
		},
		mounted() {
			
		},
		onLoad(option) {
			var id=JSON.parse(decodeURIComponent(option.id))
			console.log(id)
			orderDetail(id).then(data=>{
				console.log(data)
				this.order=data.data.data
			})
		},
		methods: {
			timestampToTime(timestamp) {
				var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
				let Y = date.getFullYear() + '-';
				let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
				let D = date.getDate() + ' ';
				let h = date.getHours() + ':';
				let m = date.getMinutes() + ':';
				let s = date.getSeconds();
				return Y+M+D+h+m+s;
			},
			
			clickAgain(){
				orderAgain({uni:this.order.order_id}).then(data=>{
					uni.redirectTo({
						url:'/pages/confirm/confirm?str='+data.data.data.cateId
					})
				})
			}
		}
	}
</script>

<style scoped>
.content{
	width: 100%;
	height: 100%;
	background: #FAFAFA;
}
.status-box{
	width: 100%;
	height: 400rpx;
	background: #FFFFFF;
}
.status{
	width: 100%;
	height: 100rpx;
	line-height: 100rpx;
	padding-top: 150rpx;
	text-align: center;
	color: #BF212E;
	font-weight: bold;
}
.again{
	height: 50rpx;
	margin: 50rpx 40%;
	width: 20%;
	background: #BF212E;
	color: #FFFFFF;
	line-height: 50rpx;
	font-size: 25rpx;
	text-align: center;
	border-radius: 10rpx;
}
.box{
	margin-top: 10rpx;
	background: #FFFFFF;
	width: 100%;
}
.title{
	height: 70rpx;
	line-height: 70rpx;
	font-size: 22rpx;
	color: #888888;
	padding-left:20rpx;
	border-bottom:1px solid #cccccc;
}
.item{
	width:100%;
	height:60rpx;
	padding:10rpx;
}
.img{
	float:left;
	margin-left:20rpx;
	width: 60rpx;
	height: 60rpx;
}
.name{
	float: left;
	margin-left: 20rpx;
	height: 60rpx;
	line-height: 60rpx;
	font-size: 30rpx;
}
.price{
	margin-right: 20rpx;
	float:right;
	height: 60rpx;
	line-height: 60rpx;
	font-size: 35rpx;
	font-weight: bold;
	
}
.number{
	margin-right: 20rpx;
	float:right;
	height: 60rpx;
	line-height: 60rpx;
	font-size: 30rpx;
	color: #888888;
}
.icon{
	font-size: 20rpx;
}
.total{
	border-top:1px solid #cccccc;
	height: 70rpx;
	padding:10rpx 0;
	line-height: 70rpx;
}
.total-money{
	float: right;
	margin-right: 20rpx;
	font-size: 40rpx;
	height: 70rpx;
	line-height: 70rpx;
	color: #BF212E;
}
.total-number{
	float: right;
	margin-right: 20rpx;
	font-size: 35rpx;
	height: 70rpx;
	line-height: 70rpx;
	color: #666666;
}
.info-item{
	padding:10rpx 0;
	overflow:hidden;
}
.text{
	float: left;
	height: 70rpx;
	line-height: 70rpx;
	margin-left:20rpx;
	font-size: 30rpx;
}
.cont{
	float: right;
	line-height: 70rpx;
	margin-right:20rpx ;
	color: #888888;
	font-size: 25rpx;
	width:70%;
	text-align: right;
}
.copy{
	float: right;
	margin: 0 10rpx;
	line-height: 70rpx;
	font-size: 30rpx;
	color: #000000;
}
</style>
