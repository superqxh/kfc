<template>
	<view class="">
		<navT :title="product.store_name"></navT>
		<view class="">
			<image class="img" :src="(product.image)" mode=""></image>
		</view>
		<view class="box">
			<view class="left" >
				￥{{product.price}}
			</view>
			<view class="right">
				<view class="add" @click="addCartList(product.id)">
					+
				</view>
				<view class="number" v-if="productNumber(product.id)>0">
					{{productNumber(product.id)}}
				</view>
				<view class="add" @click="delCartList(product.id)" v-if="productNumber(product.id)>0">
					-
				</view>
			</view>
			
		</view>
		<view class="text">
			图片仅供参考
		</view>
		<cart v-if="show"></cart>
	</view>
</template>

<script>
	import navT from "@/components/nav/nav.vue"
	import {mapState,mapMutations} from "vuex"
	import cart from "@/components/meun/cart.vue"
	export default {
		components:{
			navT,cart
		},
		data() {
			return {
				product:[],
				number:0
			}
		},
		computed:{
			...mapState(["kfcCart","test"]),
			show(){
				if(this.kfcCart.length > 0){
					return true
				}else{
					return false
				}
			}
		},
		methods: {
			...mapMutations(['addCartList','delCartList']),
		
			productNumber(id){
				
				for(var i=0;i<this.kfcCart.length;i++){
					if(id==this.kfcCart[i].productInfo.id){
						return this.kfcCart[i].cart_num
					}
				}
				
			}
		},
		onLoad(o){
			this.product=JSON.parse(o.product) 
		
		}
	}
</script>

<style scoped>

.img{
	width: 100%;
	height: 500rpx;
}
.box{
	height: 70rpx;
	padding: 10rpx 25rpx;
	
	
}
.left{
	
	height: 50rpx;
	line-height: 50rpx;
	font-size: 50rpx;
	float: left;
	color: #D62F35;
}
.right{
	height: 50rpx;
	line-height: 50rpx;
	font-size: 35rpx;
	float: right;
}
.add{
	height: 50rpx;
	width: 50rpx;
	line-height: 50rpx;
	text-align: center;
	background-color: #D62F35;
	color: #eeeeee;
	border-radius: 50%;
	float: right;
}
.number{
	float: right;
	/* height: 50rpx; */
	/* line-height: 50rpx; */
	padding: 0 15rpx;
	width: 70rpx;
	text-align: center;
}
.text{
	width: 100%;
	line-height: 50rpx;
	font-size: 20rpx;
	color: #a9a9a9;
	padding: 10rpx 50rpx;
}
</style>
