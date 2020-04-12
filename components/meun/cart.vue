<template>
	<view class="content">
		<scroll-view scroll-y="true"  class="cart-list" :style="style" v-if=isShow>
			<view class="cart-item" v-for="(item,index) in kfcCart" :key="item.id">
				<view class="title">
					{{item.productInfo.store_name}}
				</view>
				<view class="right">
					<view class="add" @click="addCartList(item.productInfo.id)">
						+
					</view>
					<view class="numberItem">
							{{item.cart_num}}
					</view>
					<view class="add" @click="delCartList(item.productInfo.id)">
						-
					</view>
					
				</view>
			</view>
		</scroll-view>
		
		<view class="">
			<view class="img-box" @click="show()">
				<image class="img" src="../../static/img/cart/1.png" mode=""></image>
				<view class="number">
					{{number}}
				</view>
			</view>
			<view class="money-box" @click="show()">
				<view class="money">
					￥{{money}}
				</view>
				<view class="text">
					另需外送费：Y9.0
				</view>
			</view>
			<view class="ok-box" @click="confirm()">
				选好了
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import {mapState,mapMutations} from "vuex"
	export default {
		data() {
			return {
				style:"",
				isShow:""
			};
		},
		
		computed:{
			...mapState(["kfcCart","showCartList"]),
			number(){
				var num =0
				// for(var i=0;i<this.kfcCart.length;i++){
				// 	console.log(this.kfcCart[i].cart_num)
				// 	num+=this.kfcCart[i].cart_num
				// }
				
				
				Object.values(this.kfcCart).forEach((goods, index)=>{
				    num+=goods.cart_num
				}); 
				
				return num
			},
			money(){
				let m=0
				for(var i=0;i<this.kfcCart.length;i++){
					
					m+=(this.kfcCart[i].cart_num*this.kfcCart[i].productInfo.price)
				}
				return m
			}
		},
		methods:{
			
			...mapMutations(["changeKfcCart","addCartList","delCartList"]),
			confirm(){
				var str = ""
				for(var i =0;i<this.kfcCart.length;i++){
					str=this.kfcCart[i].id+","+str
					console.log(str)
				}
				uni.navigateTo({
					url:"/pages/confirm/confirm?str="+str
					
				})
			},
			show(){
				this.isShow =!this.isShow
			}
			
		},
		
		watch:{
			kfcCart(kfcCart){
				if(this.kfcCart.length>6){
					this.style=`height:650rpx`
				}else{
					this.style=`height:`+this.kfcCart.length*101+"rpx"
				}
			}
		}
	}
</script>

<style scoped>
.content{
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 2;
	width: 100%;
	height: 100rpx;
	background-color: #1d60bf;
	color: #FFFFFF;
}
.img-box
{
	position: relative;
	height: 100rpx;
	width: 120rpx;
	float: left;
	margin-left: 20rpx;
}
.img{
	width: 80rpx;
	height: 80rpx;
	float: left;
	margin: 10rpx 20rpx;
}
.number{
	background-color: #ff8018;
	color: #ffffff;
	padding: 0 7rpx;
	height: 27rpx;
	line-height: 27rpx;
	font-size: 20rpx;
	position: absolute;
	top: 20rpx;
	right: 5rpx;
	border-radius: 50%;
	
}
.money-box{
	float: left;
	margin-left: 15rpx;
}
.money{
	height: 50rpx;
	line-height: 50rpx;
	font-size: 35rpx;
	margin: 5rpx 0;
}
.text{
	height: 30rpx;
	line-height: 30rpx;
	font-size: 22rpx;
	margin: 5 rpx 0;
	color: #EEEEEE;
}
.ok-box{
	float: right;
	width: 250rpx;
	border-left: 1rpx solid #eeeeee;
	text-align: center;
	height: 100rpx;
	line-height: 100rpx;
}
.cart-list{
	position: absolute;
	bottom: 100rpx;
	left: 0;
	width: 100%;
}
.cart-item{
	width: 100%;
	height: 100rpx;
	border-top: 1rpx solid #999999;
	background-color: #ffffff;
}
.title{
	float: left;
	height: 100rpx;
	line-height: 100rpx;
	width: 350rpx;
	padding: 0 25rpx;
	color: #000000;
	font-size: 30rpx;
}
.right{
	height: 100rpx;
	line-height: 100rpx;
	font-size: 35rpx;
	float: right;
}
.add{
	width: 50rpx;
	margin: 25rpx;
	height: 50rpx;
	line-height: 50rpx;
	text-align: center;
	background-color: #d62f35;
	color: #ffffff;
	border-radius: 50%;
	float: right;
}
.numberItem{
	height: 100rpx;
	width: 70rpx;
	float: right;
	line-height: 100rpx;
	text-align: center;
	color: #000000;
	padding: 0 15rpx;
}
</style>
