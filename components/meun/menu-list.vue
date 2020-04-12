<template>
	<view class="">
		<view class="content1">
			<scroll-view class="sroll-menu" scroll-y="true" :style="scrollStyle" :scroll-into-view="typeId" >
				<view :id="'type'+index" class="type" v-for="(item,index) in arr" :key="item.id" :class="{selected:currentIndex === index}" @click="clickTpye(item.id,index)">
					<image class="icon-img" src="https://kfc.insideria.cn/uploads/attach/2019/11/20191126/a38fd9738842537745995aaf86a38e2e.png" mode=""></image>
					<view  class="typeNumber" v-if="typeNumber(item.id)>0">
						{{typeNumber(item.id)}}
					</view>
					<view class="type-text" :class="{selected:currentIndex === index}" >
						{{item.cate_name}}
					</view>
				</view>
				
			</scroll-view>
			
			<scroll-view class="scroll-item" scroll-y="true" :style="scrollStyle" :scroll-into-view="itemId" @scroll="scroll">
				<view :id="'item'+index" class="item" v-for="(item,index) in arr" :key="item.id">
					<view class="type-title-box">
						<image class="title-img" src="../../static/img/sc/1.jpg" mode=""></image>
						<view class="type-title">
							{{item.cate_name}}
						</view>
						<image class="title-img" src="../../static/img/sc/2.jpg" mode=""></image>
					</view>
					<view class="item-box" v-for="(product,ind) in item.productsList" :key="product.id">
						<view class="left">
							<view class="">
								<view class="lable">疯狂星期4
									<view class="triangle-left">
										<!-- 三角形 -->
									</view>
								</view>
								
							</view>
							<image @click="clickImg(product)" class="item-img" :src="product.image" mode=""></image>
						</view>
						<view class="right">
							<view class="title">{{product.store_name}}</view>
							<view class="price">￥{{product.price}}</view>
							<view class="number-box">
								<view class="add" @click="addCartList(product.id)">+</view>
								<view class="number" v-if="itemCartNumber(product.id)>0">{{itemCartNumber(product.id)}}</view>
								<view class="add" @click="delCartList(product.id)"  v-if="itemCartNumber(product.id)>0">-</view>
							</view>
						</view>
					</view>
					
				</view>
				
			</scroll-view>
		</view>
		<cart v-if="show"></cart>
	</view>
	
	
</template>

<script>
	import {mapState,mapMutations} from "vuex"

	import cart from "@/components/meun/cart.vue"
	import {cartAdd,cartList,cartNum,cartDel} from "@/api/cart.js"
	import{category,products} from "@/api/public.js"
	export default {
		components:{cart},
		computed:{
			...mapState(["windowWidth","windowHeight","statusbarHeight","kfcCart","typeList","token"]),
			show(){
				if(this.kfcCart.length > 0){
					return true
				}else{
					return false
				}
			},
			itemHeigth(){
				//每一个产品盒子的高度
				return 300/(750/this.windowWidth)
			},
			titleHeight(){
				return 70/(750/this.windowWidth)
			},
			height(){
				return 	(this.windowHeight-this.statusbarHeight)-150-44;
			},
			typeHeight(){
				return 150/(750/this.windowWidth)
			}
		},
		data() {
			return {
				scrollStyle:"",
				style:[],
				currentIndex:0,
				itemId:"item0",
				typeId:"type0",
				arr:[],
				arr2:[]
			};
		},
		created(){
			this.getCategory()	
		},
		mounted(){
			let height =(this.windowHeight-this.statusbarHeight)*2-300-88;
			this.scrollStyle="height:"+height+"rpx"
			
			//获取账号购物车数据
			// this.getCartList()
			
		},
		
		
		methods:{
			...mapMutations(["changeKfcCart","addCartList","delCartList","changeProductList"]),
			mergeArr(){
				this.arr2=this.arr
			},
			clickImg(product){
				
				//把当前商品信息传过去
				uni.navigateTo({
					url:"/pages/details/details?product="+JSON.stringify(product)
				})
			},
			typeNumber(id){
				for(var i=0;i<this.typeList.length;i++){
					if(this.typeList[i].id == id){
						return this.typeList[i].number
					}
				}
			},
			itemCartNumber(id){
				let num
				for(var i=0;i<this.kfcCart.length;i++){
					if(id === this.kfcCart[i].productInfo.id){
						num=this.kfcCart[i].cart_num
					}
				}
				
				return num
			},
			//获取购物车数据,并放入VUEX
			getCartList(){
				cartList().then(data=>{
					if(data.data.msg==="请登录"){
						console.log("请重新登录")
						this.token==""
						return
					}
					this.changeKfcCart(data.data.data.valid)
				})
			},
			
			getCategory(){
				
				category().then(data=>{
					data=data.data.data
					var temp=[]
						for( var i=0;i<data.length;i++){
							if(data[i].cate_name="kfc外送"){
							//由于数据有空值这里进行了处理
								for(var k=0;k<data[i].children.length;k++){
									console.log(1)
									if(k!=2){
										this.arr.push(data[i].children[k])
										
									}
								}
								
								for(var j=0;j<this.arr.length;j++){
									
									this.getProducts(this.arr[j].id,j)
									
								}
							}
						}
						
						
				}).then(()=>{
					this.arr=JSON.parse(JSON.stringify(this.arr))
					this.changeProductList(this.arr)
					
					this.getCartList() //把购物车数据存入vuex
					})
			},
			
			//获取商品数据
			getProducts(val,j){
				let data={
					sid:val
				}
				products(data).then((data)=>{
					this.$set( this.arr[j] ,"productsList",data.data.data)
				})
				
			},
			//左边点击事件
			clickTpye(typeId,index){
				this.currentIndex=index
				this.itemId=`item${index}`
			},
			scroll(e){
				//延迟
				setTimeout(()=>{
					let s=e.detail.scrollTop
					let t=this.titleHeight //标题高度
					let h=this.itemHeigth //
					let hh=0;
					let number=Math.floor(this.height/this.typeHeight)
				
					for(var i =0;i<this.arr.length;i++){
						if(hh<s+10&&s+10<(hh+this.arr[i].productsList.length*h+t)){
							this.currentIndex=i;
							if(i-3<0){
								this.typeId=`type${0}`
							}else{
								this.typeId=`type${i-3}`
							}
						}
						hh+=this.arr[i].productsList.length*h+t
					}
				},300)
			}
		}
	}
</script>

<style scoped>
.content1{
	z-index: 1;
	background-color: #ffffff;
}
.sroll-menu{
	float: left;
	width: 150rpx;
	
}
.type{
	height: 150rpx;
	border-bottom: 1rpx solid #f3f3f3;
	position: relative;
}
.icon-img{
	width: 80rpx;
	height: 80rpx;
	margin-left:35rpx ;
}
.typeNumber{
	position: absolute;
	top: 15rpx;
	right: 25rpx;
	width: 25rpx;
	height: 25rpx;
	line-height: 25rpx;
	text-align: center;
	font-size: 25rpx;
	color: #D62F35;
}
.type-text{
	height: 30rpx;
	line-height: 30rpx;
	text-align: center;
	width: 150rpx;
	font-size: 20rpx;
	color: #333333;
}
.scroll-item{
	float: left;
	width: 600rpx;
	background-color: #f3f3f3;
	overflow: auto;
}
.type-title-box{
	height: 50rpx;
	background-color: #ffffff;
	width: 100%;
	
}
.title-img{
	float: left;
	width: 200rpx;
	height: 50rpx;
	
}
.type-title{
	float: left;
	color: #D62F35;
	width: 200rpx;
	height: 50rpx;
	text-align: center;
	line-height: 50rpx;
	font-size: 30rpx;
	font-weight: bold;
}
.item-box{
	margin: 20rpx 25rpx;
	width: 550rpx;
	height: 280rpx;
	border-radius: 10rpx;
	box-shadow: darkgrey 2rpx 2rpx 2rpx 2rpx;
	position: relative;
	background-color: #ffffff;
}
.left{
	float: left;
}
.lable{
	margin-left: 5rpx;
	height:50rpx;
	background-color: #d62f35;
	border-radius: 10rpx 0 0 10rpx;
	color: #ffffff;
	font-size: 30rpx;
	display: inline-block;
	padding-left: 10rpx;
}
.triangle-left{
	float: right;
	/* width: 50rpx;
	height: 50rpx; */
	border-top: 25rpx solid #d62f35;
	border-bottom: 25rpx solid #d62f35;
	border-right: 15rpx solid #ffffff;
	margin-left: 10rpx;
}
.item-img{
	width: 300rpx;
	height: 210rpx;
}
.right{
	float: right;
	
}
.title{
	margin-top: 20rpx;
	height: 80rpx;
	line-height: 40rpx;
	width: 230rpx;
	font-size: 30rpx;
	font-weight: bold;
	text-align: right;
	padding-right:20rpx ;
}
.price{
	padding-right: 20rpx;
	text-align: right;
	color: #d62f35;
	font-size: 40rpx;
}
.number-box{
	position: absolute;
	bottom: 25rpx;
	right: 25rpx;
}
.add{
	width: 50rpx;
	height: 50rpx;
	line-height: 50rpx;
	text-align: center;
	background-color: #d62f35;
	color: #ffffff;
	border-radius: 50%;
	float: right;
}
.number{
	float: right;
	height: 50rpx;
	line-height: 50rpx;
	width: 70rpx;
	text-align: center;
}
.selected{
	background-color:#f3f3f3;
	color:#D62F35;
}
</style>
