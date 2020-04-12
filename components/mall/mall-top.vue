<template>
	<view class="content">
		<view class="">
			<image class="img-title" src="../../static/img/sc/1.jpg" mode=""></image>
			<view class=" title">
				{{content.title}}
			</view>
			<image class="img-title" src="../../static/img/sc/2.jpg" mode=""></image>
		</view>
		<scroll-view class="scrollView" scroll-x="true" >
		<view class="scroll-box">
					<view class="item" v-for="(item,index) of content.list" v-if="index<5" :key="item.id">
				<image class="img" :src=item.image mode=""></image>
				<view class="text-box">
					<view class="name">
						{{item.name}}
					</view>
					<view class="price">
						{{item.price}}
					</view>
					<view class="old-price">
						{{item.oldPrice}}
					</view>
				</view>
			</view>
		</view>
		</scroll-view>
		<scroll-view class="scrollView" scroll-x="true" >
		<view class="scroll-box">
			<view class="item" v-for="(item,index) of content.list" v-if="index>4" :key="item.id">
				<image class="img" src="https://kfc.insideria.cn/static/img/product/5.png" mode=""></image>
				<view class="text-box">
					<view class="name">
						螃蟹螃蟹螃蟹螃蟹螃蟹
					</view>
					<view class="price">
						200元
					</view>
					<view class="old-price">
						500元
					</view>
				</view>
			</view>
		</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				content:{
					title:"居家好物 热卖TOP磅",
					list:[
						{
							id:1,
							image:"https://kfc.insideria.cn/static/img/product/1.png",
							name:"当季新鲜美味螃蟹",
							price:"200",
							oldPrice:"500"
						},
						{
							id:2,
							image:"https://kfc.insideria.cn/static/img/product/2.png",
							name:"当季新鲜美味螃蟹",
							price:"200",
							oldPrice:"500"
						},
						{
							id:3,
							image:"https://kfc.insideria.cn/static/img/product/3.png",
							name:"当季新鲜美味螃蟹",
							price:"200",
							oldPrice:"500"
						},
						{
							id:4,
							image:"https://kfc.insideria.cn/static/img/product/4.png",
							name:"当季新鲜美味螃蟹",
							price:"200",
							oldPrice:"500"
						},
						{
							id:5,
							image:"https://kfc.insideria.cn/static/img/product/4.png",
							name:"当季新鲜美味螃蟹",
							price:"200",
							oldPrice:"500"
						},
						{
							id:6,
							image:"https://kfc.insideria.cn/static/img/product/4.png",
							name:"当季新鲜美味螃蟹",
							price:"200",
							oldPrice:"500"
						},
						{
							id:7,
							image:"https://kfc.insideria.cn/static/img/product/4.png",
							name:"当季新鲜美味螃蟹",
							price:"200",
							oldPrice:"500"
						},
						{
							id:8,
							image:"https://kfc.insideria.cn/static/img/product/4.png",
							name:"当季新鲜美味螃蟹",
							price:"200",
							oldPrice:"500"
						},
						{
							id:9,
							image:"https://kfc.insideria.cn/static/img/product/4.png",
							name:"当季新鲜美味螃蟹",
							price:"200",
							oldPrice:"500"
						},
						{
							id:10,
							image:"https://kfc.insideria.cn/static/img/product/4.png",
							name:"当季新鲜美味螃蟹",
							price:"200",
							oldPrice:"500"
						}
					]
				}
			}
		}
	}
</script>

<style scoped >
	.content{
		width: 100%;
		height: 630rpx;
	}
	.title-box{
		width: 730rpx;
		margin: 10rpx;
		height: 50rpx;
	}
	.img-title{
		float: left;
		width: 200rpx;
		height: 50rpx;
	}
	.title{
		float: left;
		width: 330rpx;
		height: 50rpx;
		line-height: 50rpx;
		text-align: center;
		color: #D93034;
		font-size: 30rpx;
		font-weight: bold;
	}
	.scrollView{
		width: 750rpx;
		height: 350rpx;
		/*Ie写法*/
		writing-mode: tb-lr;
		writing-mode: vertical-lr;
		overflow: auto;
		float: left;
	}
	.scroll-box{
		overflow: auto;
		/* width: 1000rpx; */
	}
	.item{
		margin: 0 10rpx;
		writing-mode: lr-tb;
		float: left;
	}
	.img{
		width: 200rpx;
		height: 200rpx;
	}
	.text-box{
		width: 200rpx;
		height: 120rpx;
		border-left: 1rpx solid #ccc;
		border-right: 1rpx solid #ccc;
		position: relative;
	}
	.text-box:after{
		content: '';
		display: block;
		height: 10rpx;
		background-size: 20rpx 20rpx;
		background-repeat: repeat-x;
		background-image: linear-gradient(135deg,transparent 45%,#ccc 55%,transparent 60%),linear-gradient(45deg,transparent 45%,#ccc 55%,transparent 60%);
		position: absolute;
		bottom: -9rpx;
		right: 0;
		left: 0;
	}
	.name{
	
		height: 60rpx;
		line-height: 30rpx;
		font-size: 25rpx;
		font-weight: bold;
		margin: 0 10rpx;
	}
	.price{
		height: 30rpx;
		font-size: 20rpx;
		font-weight: bold;
		margin: 0 10rpx;
		color: red;
	}
	.old-price{
		height: 30rpx;
		font-size: 20rpx;
		font-weight: bold;
		margin: 0 10rpx;
		color: #808080;
		text-decoration: line-through;
	}
</style>
