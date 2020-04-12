<template>
	<view class="content">
		<view class="item" @click="selectItem(index)" v-for="(item,index) in list" :key="index">
			<view class="test" :class="indexOf==index?'selected':''">
				{{item}}
			</view>
		</view>
	
	</view>
</template>

<script>	
	import oderList from"@/components/order/order-list.vue"
	export default{
		components:{oderList},
			
		data(){
			return{
				indexOf:"0",
				list:['外送','自助点餐','V金商城','其他']
			}
		},
		methods:{
			selectItem(index){
				this.indexOf=index
			}
		}
	}
</script>

<style scoped>
	.content{
		width: 100%;
		height: 75rpx;
		/* background-color: red; */
		background-color: #FFFFFF;
	}
	.item{
		height: 75rpx;
		width: 25%;
		float: left;
	}
	.test{
		margin: 0 auto;
		text-align:  center;
		font-size: 30rpx;
		height: 70rpx;
		line-height: 70rpx;
		color: #666;
	}
	.selected{
		color: red;
		border-bottom: 4rpx solid;
	}
</style>
