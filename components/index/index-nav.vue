<template>
	<view class="content">
		<view class="header">
			<view class="left">
				<image class="img" src="../../static/img/1.jpg" mode=""></image>
				<view class="location-box">
					<view class="city">
						<text>长沙市</text>
						<text class="iconfont iconjiantoushang-copy"></text>
						
					</view>
					<view class="location ">
						雨花区餐厅
					</view>
				
				</view>
			</view>
			<view class="right">
				<view class="iconfont iconziyuan right-icon"></view>
				<view class="iconfont iconxinfeng2 right-icon"></view>
			</view>
			
		</view>
		<view class="box">
			<view class="box-left">
				<view class="text">
					我的V金
				</view>
				<view class="number">
					5,500
				</view>
			</view>
			<view class="box-right" >
				<view class="icon-img" v-for="(v,i) in list" :key="i">
					<image class="imgIcon" :src="v.img" mode=""></image>
					<view class="icon-img-text">
						{{v.text}}
					</view>
				</view>
				
				
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{img:'https://kfc.insideria.cn/static/img/topicon/4.jpg',text:"神钱包"},
					{img:'https://kfc.insideria.cn/static/img/topicon/3.jpg',text:"优惠卷"},
					{img:'https://kfc.insideria.cn/static/img/topicon/2.jpg',text:"卡包"},
					{img:'https://kfc.insideria.cn/static/img/topicon/1.jpg',text:"会员码"}
					]
			}
		}
	}
</script>

<style scoped>
	.content{
		background: #FFFFFF;
	}
	.header{
		/* background-color: red; */
		height: 80upx;
		padding-top: 80upx;
	}
	.left{
		float: left;
		overflow: hidden;
		
	}
	.img{
		height: 70upx;
		width: 70upx; 
		float: left;
		margin: 0 30upx;
		border-radius:50% ;
	}
	.location-box{
		float: left;
		height: 70upx;
	}
	.city{
		height: 35upx;
		line-height: 35upx;
		font-size: 35upx;
	}
	.location{
		height: 35upx;
		line-height: 35upx;
		font-size: 20upx;
	}
	.right{
		float: right;
		/* height: 70upx; */
		line-height: 35upx ;
	}
	.right-icon{
		
		float: right;
		/* height: 70upx; */
		line-height: 70upx;
		margin: 0 20upx;
		font-size: 50upx;
	}
	.box{
		height: 160upx;
		border-bottom: 5upx solid #eeeee;
		padding: 30upx;
		/* background-color: #FF0000; */
	}
	.box-left{
		float: left;
		margin-top: 30upx;
	}
	.text{
		font-size: 30upx;
	}
	.number{
		font-size: 40upx;
		font-weight: bold;
	}
	.box-right{
		float: right;
		overflow: hidden;
		margin-top: 10upx;
	}
	.icon-img{
		float: right;
		margin-right: 20upx;
	}
	.imgIcon{
		height: 100upx;
		width: 100upx;
		border-radius: 50%;
	}
	.icon-img-text{
		font-size: 25upx;
		text-align: center;
	}
</style>
