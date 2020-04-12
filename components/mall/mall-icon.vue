<template>
	<view class="content">
		<view class="item" v-for="(item,index) in list">
			<image class="img" :src="item.img" mode=""></image>
			<view class="text">
				{{item.text}}
			</view>
		</view>
		
		
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{img:"https://kfc.insideria.cn/static/img/%E5%95%86%E5%9F%8Eicon/1.jpg",text:"会员量贩"},
					{img:"https://kfc.insideria.cn/static/img/%E5%95%86%E5%9F%8Eicon/2.jpg",text:"v金福利社"},
					{img:"https://kfc.insideria.cn/static/img/%E5%95%86%E5%9F%8Eicon/3.jpg",text:"居家餐厨"},
					{img:"https://kfc.insideria.cn/static/img/%E5%95%86%E5%9F%8Eicon/4.jpg",text:"鲜果美食"},
					{img:"https://kfc.insideria.cn/static/img/%E5%95%86%E5%9F%8Eicon/5.jpg",text:"美妆个户"},
					{img:"https://kfc.insideria.cn/static/img/%E5%95%86%E5%9F%8Eicon/6.jpg",text:"会员量贩"},
					{img:"https://kfc.insideria.cn/static/img/%E5%95%86%E5%9F%8Eicon/7.jpg",text:"会员量贩"},
					{img:"https://kfc.insideria.cn/static/img/%E5%95%86%E5%9F%8Eicon/8.jpg",text:"会员量贩"},
					{img:"https://kfc.insideria.cn/static/img/%E5%95%86%E5%9F%8Eicon/9.jpg",text:"会员量贩"},
					{img:"https://kfc.insideria.cn/static/img/%E5%95%86%E5%9F%8Eicon/10.jpg",text:"会员量贩"},
				
				
				]
			}
		}
	}
</script>

<style scoped>
	.content{
		width: 100%;
		padding: 20rpx 25rpx;
		height: 350rpx;
		
	}
	.item{
		width: 100rpx;
		height: 170rpx;
		float: left;
		padding: 0 20rpx;
		
	}
	.img{
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
	}
	.text{
		width: 100rpx;
		text-align: center;
		font-size: 20rpx;
		font-weight: bold;
	}
</style>
