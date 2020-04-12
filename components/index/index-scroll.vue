<template>
	<view class="content-scroll">
		<scroll-view scroll-x="true" class="scrollView">
			<view class="icon" v-for="(item,index) in list" :key="index" >
				<image class="img" :src="item.pic" mode=""></image>
				<view class="text">
					{{item.name}}
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
		props:["list"],
		methods:{
			
		}
	}
</script>

<style scoped>
	.content-scroll{
	
		height: 300rpx;
		
	}
	.scrollView{
		width: 100%;
		height: 300rpx;
		writing-mode: tb-lr;
		writing-mode: vertical-lr;
		overflow: auto;
		float: left;
		border: none;
	}
	.icon{
		width: 150rpx;
		height: 150rpx;
		writing-mode: lr-tb;
		display: inline-block;
	}
	.img{
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		margin: 10rpx 0 0 25rpx;
	}
	.text{
		width: 150upx;
		text-align: center;
		font-size: 20rpx;
		height: 30rpx;
	}
</style>
