<template>
	<view class="content">
		<view class="title-box">
			<image class="img-title" src="../../static/img/sc/1.jpg" mode=""></image>
			<view class="title">
				{{content.title}}
			</view>
			<image class="img-title" src="../../static/img/sc/2.jpg" mode=""></image>
		</view>
		<view class="main-img-box">
			<image class="main-img" :src="content.mainImg" mode=""></image>
		</view>
		<view class="secondary-img-box">
			<image class="secondary-img"  :src="item" mode="" v-for="(item,index) in content.secondaryImgList"></image>
		</view>
	</view>
</template>

<script>
	export default{
		props:["content"],
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	.content{
		width: 100%;
		height:630rpx;
	}
	.title-box{
		width: 600rpx;
		margin: 10rpx 75rpx;
		height: 50rpx;
	}
	.img-title{
		float: left;
		width: 200rpx;
		height: 50rpx;
	}
	.title{
		float: left;
		width: 200rpx;
		text-align: center;
		height: 50rpx;
		line-height: 50rpx;
		color: #d93034;
		font-weight: bold;
	}
	.main-img-box{
		margin-top: 40rpx;
		width: 100%;
		
	}.main-img{
		margin: 10rpx 25rpx;
		width: 700rpx;
		height: 260rpx;
		border-radius: 10rpx;
	}
	.secondary-img-box{
		margin: 10rpx 15rpx;
		width: 720rpx;
		height: 240rpx;
	}
	.secondary-img{
		width: 220rpx;
		height: 220rpx;
		margin: 10rpx 10rpx;
		border-radius: 10rpx;
		float: left;
	}
</style>
