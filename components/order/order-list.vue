<template>
	<view class="content">
		<view class="item" v-for="(item,index) of list" :key="index">
			<view class="box">
				<view class="item-content">
					<view class="text-box">
						<view class="text">
							本次订单共计<text style="color: red; font-size: 40rpx;">{{item.total_num}}</text>份餐品
						</view>
						<view class="time">
							{{timestampToTime(item.add_time)}}
						</view>
					</view>
					<image class="img" src="../../static/img/menuType/10.png" mode=""></image>
				</view>
				<view class="status" @click="toOrderDetail(item.order_id)">
					{{item._status._title}} <text class="iconfont iconjiantou icon"></text><br/>
					{{item.total_price}}
				</view>
			</view>
			<view class="bottom">
				<view class="again">
					再次订购
				</view>
			</view>
		</view>
		
		
		
		
	</view>
</template>

<script>
	export default{
		
		props:["list"],
		methods:{
			timestampToTime(timestamp) {
				var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
				let Y = date.getFullYear() + '-';
				let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
				let D = date.getDate() + ' ';
				let h = date.getHours() + ':';
				let m = date.getMinutes() + ':';
				let s = date.getSeconds();
				return Y+M+D;
			},
			toOrderDetail(id){
				uni.navigateTo({
					url:"../../pages/orderDetail/orderDetail?id="+JSON.stringify(id)
				})
			}
		}
	}
</script>

<style scoped>
	.content{
		width: 100%;
		
	}
	.item{
		height: 220rpx;
		width: 100%;
		margin-top: 20rpx;
		background: #FFFFFF;
	}
	.box{
		height: 150rpx;
		border-bottom: 1rpx solid #EEEEEE;
	}
	.item-content{
		float: left;
		width: 69%;
		height: 100rpx;
		padding: 25rpx 0;
		line-height: 50rpx;
		border-left: 1rpx solid #eeeeee;
		font-size: 30rpx;
		text-align: center;
	}
	.status{
		float: right;
		color: red;
		width: 30%;
		padding: 25rpx 0;
		line-height: 50rpx;
		border-left:1rpx solid #eeeeee ;
		font-size: 30rpx;
		text-align: center;
	}
	.text-box{
		float: left;
		width: 70%;
		font-size: 30rpx;
		line-height: 60rpx;
		color: #666666;
	}
	.time{
		margin-bottom: 20rpx;
		height: 50rpx;
		line-height: 50rpx;
		font-size: 25rpx;
		text-align: center;
		color: #aaaaaa;
	}
	.img{
		float: left;
		padding: 20rpx 20rpx 0 20rpx;
		height: 110rpx;
		width: 110rpx;
	}
	.icon{
		font-size: 25rpx;
	}
	.again{
		float: right;
		height: 50rpx;
		width: 140rpx;
		border: 1rpx solid red;
		border-radius: 10rpx;
		font-size: 30rpx;
		color: red;
		text-align: center;
		line-height: 50rpx;
		margin: 10rpx 20rpx;
	}
</style>
