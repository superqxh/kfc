<template>
	<view class="content">
		<view class="top">
			<view class="box"></view>
			<view class="box"></view>
			<view class="box"></view>
		</view>
		<view class="left">
			我的V�
		</view>
		<view class="right">
			
			<view class=" iconfont iconjiantou icon">
				
			</view>
			<image class="img" src="http://47.112.150.24/kfc/static/img/v/1.jpg" mode=""></image>
			<view class="number">
				5500
			</view>
		</view>
		
	</view>
</template>

<script>
</script>

<style scoped>
	.content{
		margin-left:25rpx ;
		width: 700rpx;
		box-sizing: darkgrey 2rpx 2rpx 5rpx 1rpx;
		border-radius: 10rpx;
		height: 120rpx;
		border: 1rpx solid #dddddd;
		line-height: 120rpx;
		position: relative;
	}
	.top{
		position: absolute;
		top: 0;
		left: 40rpx;
	}
	.box{
		width: 20rpx;
		height: 20rpx;
		background-color: #df3331;
		float: left;
		margin: 0 10rpx;
		
	}
	.left{
		float: left;
		height: 120rpx;
		line-height: 120rpx;
		color: #df3331;
		width: 200rpx;
		text-align: center;
		font-size: 35rpx;
	}
	.right{
		float: right;
		height: 120rpx;
		line-height:120rpx ;
		width: 400rpx;
		
	}
	.icon{
		float: right;
		height: 120rpx;
		line-height: 120rpx;
		width: 80rpx;
		color: #DF3331;
		text-align: center;
	}
	.img{
		float: right;
		width: 50rpx;
		height: 50rpx;
		margin-top:35rpx ;
		
	}
	.number{
		float: right;
		color: #DF3331;
		width: 100rpx;
		text-align: center;
	}
</style>
