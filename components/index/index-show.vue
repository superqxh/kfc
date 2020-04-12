<template>
	<view class="content">
		<view class="title-box">
			<view class="title-red-box">
				<view class="red-box"></view>
			</view>
			<view class="title-text">
				{{content.title}}
			</view>
			<view class="title-red-box">
				<view class="red-box"></view>
			</view>
		</view>
		<view class="main-img-box">
			<image class="main-img" :src="content.mainImg" mode=""></image>
		</view>
		<scroll-view class="scroll-box" scroll-x='true'>
			<view class="box" v-for="(item,index) in content.secondaryImgList" :key=index>
							 
				<view class="secondary-img-box">
					<image class="secondary-img" :src="item" mode=""></image>
				</view>
			</view>
			
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:['content']
	}
</script>

<style scoped>
	.content{
		width: 100%;
		background-color: #FFFFFF;
		margin-top: 10rpx;
		height: 700rpx;
	}
	.title-box{
		
		height: 50rpx;
		width: 400rpx;
		margin: 0 auto;
	}
	.title-red-box{
		height: 50rpx;
		width: 60rpx;
		float: left;
		margin: 0 auto;
	}
	.red-box{
		width: 60rpx;
		height: 12rpx;
		background-image: linear-gradient(to right,#f15913,#dc3225);
		border-radius: 20rpx;
		margin-top: 19rpx;
	}
	.title-text{
		height: 45rpx;
		width: 220rpx;
		float: left;
		margin: 0 10rpx;
		text-align: center;
		line-height: 45rpx;
	}
	.main-img-box{
		width: 100%;
		margin-top: 10rpx;
	}
	.main-img{
		width: 700rpx;
		margin: 0 25rpx;
		border-radius: 20rpx;
		height: 300rpx;
	}
	
	.scroll-box{
		/*下面这两个好像必须加 */
		writing-mode:tb-lr ;
		writing-mode: vertical-lr;
		
		height: 270rpx;
		/* overflow: auto; */
		float: left;
		border: none;
	}
	.secondary-img-box{
		float: left;
		margin: 15rpx  20rpx;
		writing-mode: lr-tb;
		display: inline-block;
	}
	.secondary-img{
		width: 260rpx;
		height: 250rpx;
		border-radius:20rpx ;
	}
</style>
