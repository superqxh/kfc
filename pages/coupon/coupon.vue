<template>
	<view class="content">
		<nav-t title="优惠券"></nav-t>
		<scroll-view scroll-y class="scroll">
			<view class="item"  v-for="item of list" :key="item.id">
				<view class="left" :style="item.is_use?'background:#aaaaaa':'background-color:#f04b3c'">￥{{item.coupon_price}}</view>
				<view class="right">
					<view class="top">购物满{{item.use_min_price}}可用</view>
					<view class="bottom">
						<view class="time">{{item.end_time}}</view>
						<view class="btn" :style="item.is_use?'background:#aaaaaa':'background-color:#e93323'" @click="click(item.id)">{{item.is_use?"已领取":"点击领取"}}</view>
					</view>	
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {coupons} from '@/api/public.js'
	import {couponReceive} from '@/api/user.js'
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
		created() {
			this.getCoupons()
		},
		methods: {
			click(id){
				couponReceive({couponId:id}).then(data=>{
					this.getCoupons()
				})
			},
			getCoupons(){
				coupons().then(data=>{
					this.list=data.data.data
					console.log(this.list)
				})
			}
		}
	}
</script>

<style scoped>
.content{
	height: 100%;
	width: 100%;
	background:#EEEEEE
}
.scroll{
	height: 1000rpx;
}
.item{
	width: 600rpx;
	padding:10rpx 75rpx;
	height: 150rpx;
}
.left{
	float: left;
	background-color: #f04b3c;
	width: 250rpx;
	height: 150rpx;
	color: #FFFFFF;
	text-align: center;
	line-height: 150rpx;
	border-radius: 10rpx 0 0 10rpx;
}
.right{
	float: right;
	width: 350rpx;
	height: 150rpx;
	border-radius:0 10rpx 10rpx 0 ;
	background-color: #FFFFFF;
}
.top{
	height: 75rpx;
	line-height: 75rpx;
	padding:0 15rpx;
	font-size: 30rpx;
}
.bottom{
	height: 75rpx;
	padding: 0 15rpx;
}
.time{
	float: left;
	height: 75rpx;
	line-height: 75rpx;
	color: #999999;
	font-size: 20rpx;
}
.btn{
	float: right;
	background-color: #e93323;
	width: 150rpx;
	height: 45rpx;
	margin: 15rpx 20rpx;
	font-size: 25rpx;
	line-height: 45rpx;
	border-radius: 40rpx;
	color: #FFFFFF;
	text-align: center;
}
</style>
