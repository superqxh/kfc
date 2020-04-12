<template>
	<view class="content">
		<navT title="确认订单"></navT>
		<view class="header" @click="changeShow">
			<view class="iconfont icondizhi topIcon">
				
			</view>
			<view class="test" >
				<view class="address">
					<!-- {{list[0].detail}} -->
					{{  addRessIndex>=0?list[addRessIndex].detail:'请添加地址'}}
				</view>
				<view class="info">
					<view class="address-real-name">
						{{addRessIndex}}
						{{  addRessIndex>=0?list[addRessIndex].real_name:'请添加地址'}}
						
					</view>
					<view class="address-phone">
							{{  addRessIndex>=0?list[addRessIndex].phone:''}}
						<!-- {{list[addRessIndex].phone}} -->
					</view>
				</view>
			</view>
		</view>
		<view class="details-box">
			<view class="top">
				菜品详情
			</view>
			<view class="product-item" v-for="(item,index) in confirmData.cartInfo" :key=index>
				<view class="product-name">
					{{item.productInfo.store_name}}
				</view>
				<view class="right">
					<view class="number">{{item.cart_num}}</view>
					<view class="price">￥{{item.productInfo.price}}</view>
				</view>
			</view>
			
			<view class="bottom">
				<view class="bottom-content">
					<text class="total">共{{number}}件，小计：<text class="total-price">￥{{money}}</text></text>
				</view>
			</view>
		</view>
		<view class="pay-box">
			<view class="pay-left">
				<view class="more" >
					更多支付方式{{payType.value}}
				</view>
				<view class="pay-price">
					￥{{money}}
				</view>
			</view>
			<view class="pay-right" @click="topayType(payType.id)">
				{{payType.type}}
			</view>
		</view>
		<view class="coupon-box" @click="showCoupon()">
			<view class="left-coupon">
				可用优惠卷
			</view>
			<view class="iconjiantou icon-coupon iconfont"></view>
		</view>
		<view class="remarks-box">
			<view class="remarks-left">
				备注
			</view>
			<view class="remarks-right">
				口味、偏好等要求
			</view>
		</view>
		<view class="post-box">
			<view class="post-money-box">
				<view class="post-money">
					￥{{money}}
				</view>
				<view class="postage">
						另需外送费9.0元
				</view>
			</view>
			<view class="post-btn" @click="postOrder()">
				提交订单<text class="iconfont iconjiantou icon-post" ></text>
			</view>
		</view>
		<view class="coupon-list" v-if="coupon_show">
			<view class="coupon-header iconchahao iconfont " @click="showCoupon"></view>
			<view class="coupon-item" >
				<view class="coupon-left" >222</view>
				<view class="coupon-right">
					<view class="coupon-top">购物满100可用</view>
					<view class="coupon-bottom">
						<view class="coupon-time">{12111</view>
						<view class="coupon-btn">选择</view>
					</view>	
				</view>
			</view>
		</view>
		
		
		
		<view class="address-box" v-if="show">
			<view class="address-header">
				<view class="iconfont iconchahao icon" @click="changeShow">
				</view>
				<view class="address-title">
					选择收货地址
				</view>
			</view>
			<scroll-view class="address-list" scroll-y="true">
				<view class="address-item " v-for="(item,index) in list" :key="index" :class="{selected:index == addRessIndex}">
					<view class="address-content" @click="click(index,item.id)">
						<view class="address-text">
							{{item.detail}}
						</view>
						<view class="user-box">
							<view class="address-real-name">
								{{item.real_name}}
							</view>
							<view class="address-phone">
								{{item.phone}}
							</view>
						</view>
					</view>
					<view class="iconfont iconbianji address-change">	</view>
				</view>
				
				
			</scroll-view>
			<view class="add-address" @click="toAddAddress">
				新增送餐地址
			</view>
		</view>
	</view>
</template>

<script>
	import navT from "../../components/nav/nav.vue"
	import {orderConfirm} from "@/api/order.js"
	import {addressList,addressDefaultSet} from "@/api/user.js"
	import {orderCreate} from"@/api/order.js"
	import {mapState} from "vuex"
	export default {
		components:{navT},
		data() {
			return {
				show:false,
				confirmData:{},
				i:0,
				list:[],
				coupon_show:false
				
			}
		},
		
		methods: {
			
			postOrder(){
				console.log(this.payType)
				var type=""
				if(this.payType.id=0){
					type="zhifubao"
				}else{
					type="weixin"
				}
				orderCreate(this.confirmData.orderKey,{
					addressId:this.list[this.addRessIndex].id,
					couponId:"",
					payType:type,
					mark:"快点"
				}).then(data=>{
					console.log(data)
				})
			},
			click(index,id){
			
				for(var i =0;i<this.list.length;i++){
					this.list[i].is_default =0
				}
				this.list[index].is_default =1
				addressDefaultSet({id}).then(data=>{
					if(data.data.msg !="ok"){
						return false
					}
					this.show=!this.show
				})
				
				
			},
			topayType(id){
				uni.navigateTo({
					url:"/pages/payType/payType?id="+id
				})
			},
			changeShow(){
				this.show=!this.show
			},
			showCoupon(){
				this.coupon_show=!this.coupon_show
			},
			toAddAddress(){
				uni.navigateTo({
					url:"../addAddress/addAddress"
				})
			}
		},
		computed:{
			...mapState(['payType']),
			
			addRessIndex(){
				
				if(this.list.length == 0){
					return -1
				}else{
					for(var i=0;i<this.list.length;i++){
						
						if(this.list[i].is_default ==1){
						
							return i
						}
					}
				}
				
			
				
			},
			number(){
				var num =0
				for(var i=0;i<this.confirmData.cartInfo.length;i++){
					num+=this.confirmData.cartInfo[i].cart_num
				}
				return num
			},
			money(){
				var money =0
				for(var i=0;i<this.confirmData.cartInfo.length;i++){
					money+=this.confirmData.cartInfo[i].cart_num*this.confirmData.cartInfo[i].productInfo.price
				}
				return money
			},
		},
		onLoad(option) {

			if(option != undefined){
				orderConfirm({cartId:option.str}).then(data=>{
					data=data.data.data
					this.confirmData=data
					console.log(this.confirmData)
				})
			}
		},
		onShow() {
			addressList().then(data=>{
				this.list=data.data.data
				console.log(data.data.data)
				
			})
		}
		
		
	}
</script>

<style scoped>
	.coupon-list{
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 2;
		width: 100%;
		background-color: #EEEEEE;
		padding-bottom: 60rpx;
		border-bottom: 1rpx solid #999;
	}
	.coupon-header{
		width: 100%;
		padding-left: 20rpx;
		color: #bf212e;
		height: 80rpx;
		line-height: 80rpx;
	}
	.coupon-item{
		width: 600rpx;
		padding:10rpx 75rpx;
		height: 150rpx;
	}
	.coupon-left{
		float: left;
		background-color: #f04b3c;
		width: 250rpx;
		height: 150rpx;
		color: #FFFFFF;
		text-align: center;
		line-height: 150rpx;
		border-radius: 10rpx 0 0 10rpx;
	}
	.coupon-right{
		float: right;
		width: 350rpx;
		height: 150rpx;
		border-radius:0 10rpx 10rpx 0 ;
		background-color: #FFFFFF;
	}
	.coupon-top{
		height: 75rpx;
		line-height: 75rpx;
		padding:0 15rpx;
		font-size: 30rpx;
	}
	.coupon-bottom{
		height: 75rpx;
		padding: 0 15rpx;
	}
	.coupon-time{
		float: left;
		height: 75rpx;
		line-height: 75rpx;
		color: #999999;
		font-size: 20rpx;
	}
	.coupon-btn{
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
	
	.coupon-box{
		margin-top:20rpx ;
		background: #FFFFFF;
		height: 80rpx;
		line-height: 80rpx;
	}
	.left-coupon{
		margin-left: 20rpx;
		float: left;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 35rpx;
	}
	.icon-coupon{
		float: right;
		height: 80rpx;
		line-height: 80rpx;
		margin: 0 20rpx 0 80rpx;
	}
	.post-box{
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 1;
		height: 100rpx;
		line-height: 100rpx;
		width: 100%;
		background: #007AFF;
		color: #FFFFFF;
	}

.post-money-box{
	float: left;
	height: 100rpx;
}
.post-money{
	font-size: 30rpx;
	float: left;
	margin-left: 25rpx;
}
.postage{
	margin-left: 10rpx;
	float: left;
	font-size: 25rpx;
}

.post-btn{
	float: right;
	height: 100rpx;
	line-height: 100rpx;
	width: 200rpx;
	border-left: 1rpx solid #eeeeee;
	text-align: center;
	font-size: 35rpx;
	
}
	
.content{
	width: 100% ;
	height: 100%;
	background: #FAFAFA;
}
.header{
	width: 100%;
	height: 200rpx;
	background: #FFFFFF;
}
.topIcon{
	color: #BF212E;
	font-size: 40rpx;
	width: 50rpx;
	text-align: center;
	float: left;
	height: 150rpx;
	line-height: 150rpx;
	margin: 25rpx 10rpx;
}
.test{
	margin: 25rpx 10rpx;
	float: left;
	color: #333333;
	height: 150rpx;
	width: 600rpx;
}
.address{
	height: 100rpx;
	line-height: 50rpx;
	font-size: 35rpx;
	width: 100%;
}
.info{
	height: 50rpx;
	line-height: 50rpx;
	font-size: 20rpx;
}
.details-box{
	margin-top:20rpx ;
	background-color: #FFFFFF;
	width: 100%;
	
}
.top{
	width: 100%;
	height: 50rpx;
	line-height: 50rpx;
	font-size: 35rpx;
	font-weight: bold;
	padding-left: 20rpx;
	border-bottom: 1rpx solid #EEEEEE;
	
}
.product-item{
	height: 50rpx;
	width: 100%;
}
.product-name{
	float: left;
	height: 50rpx;
	line-height: 50rpx;
	color: #808080;
	font-size: 30rpx;
	margin-left: 20rpx;
}
.right{
	float: right;
	height: 50rpx;
}
.number{
	float: right;
	height: 50rpx;
	line-height: 50rpx;
	font-size: 25rpx;
	color: #808080;
	width: 40rpx;
	margin-right: 20rpx;
	text-align: center;
}
.price{
	float: right;
	height: 50rpx;
	line-height: 50rpx;
	font-weight: bold;
	font-size: 30rpx;
	width: 120rpx;
	text-align: center;
}
.bottom{
	height: 80rpx;
	width: 100%;
	border-top: 1rpx solid #EEEEEE;
}
.bottom-content{
	height: 80rpx;
	line-height: 80rpx;
	margin-right: 20rpx;
	float: right;
}
.total{
	font-size: 30rpx;
}
.total-price{
	font-size: 35rpx;
	font-weight: bold;
	color: #DF3331;
}
.pay-box{
	margin-top: 20rpx;
	width: 100%;
	background: #ffffff;
	height: 100rpx;
}
.pay-left{
	float: left;
	height: 100rpx;
}
.more{
	padding-top: 10rpx;
	height: 40rpx;
	line-height: 40rpx;
	font-size: 30rpx;
	margin-left: 20rpx;
	
}
.pay-price{
	padding-bottom: 10rpx;
	height: 40rpx;
	line-height: 40rpx;
	font-size: 25rpx;
	margin-left: 20rpx;
	color: #bf212e;
}
.pay-right{
	float: right;
	height: 100rpx;
	line-height: 100rpx;
	margin-right: 20rpx;
	font-size: 35rpx;
}
.remarks-box{
	margin-top: 20rpx;
	width: 100%;
	background: #ffffff;
	height: 100rpx;
	
}
.remarks-left{
	height: 100rpx;
	line-height: 100rpx;
	font-size: 35rpx;
	font-weight: bold;
	margin-left: 20rpx;
	float: left;
}
.remarks-right{
	height: 100rpx;
	line-height: 100rpx;
	font-size: 35rpx;
	font-weight: bold;
	margin-right: 20rpx;
	float: right;
}
.address-box{
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 800rpx;
	background-color: #ffffff;
	z-index: 2;
}
.address-header{
	width: 100%;
	height: 100rpx;
	position: relative;
	background: #eeeeee;
}
.icon{
	position: absolute;
	top: 20rpx;
	left: 25rpx;
	line-height: 60rpx;
	height: 60rpx;
	color: red;
	font-size: 30rpx;
}
.address-title{
	width: 100%;
	height: 80rpx;
	line-height: 80rpx;
	text-align: center;
	font-size: 35rpx;
}
.address-list{
	height: 600rpx;
	
}
.address-item{
	padding: 25rpx;
	height: 100rpx;
	width: 700rpx;
	border-top: 1rpx solid #eeeeee;
	border-bottom: 1rpx solid #eeeeee;
	
}
.address-content{
	float: left;
	height: 100rpx;
	width: 600rpx;
}
.address-text{
	width: 600rpx;
	height: 70rpx;
	line-height: 70rpx;
	
}
.user-box{
	width: 600rpx;
	height: 30rpx;
}
.address-real-name{
	height: 30rpx;
	line-height: 30rpx;
	font-size: 25rpx;
	color: #666666;
	float: left;
}
.address-phone{
	float: left;
	margin-left: 20rpx;
	height: 30rpx;
	line-height: 30rpx;
	font-size: 25rpx;
	color: #666666;
}
.address-change{
	float: right;
	height: 100rpx;
	line-height: 100rpx;
	color: red;
	font-size: 40rpx;
}
.add-address{
	height: 80rpx;
	width: 100%;
	line-height: 80rpx;
	text-align: center;
	font-size: 35rpx;
	color: #8F212E;
}
.selected{
	border-left: 3px solid #BF212E;
}
</style>
