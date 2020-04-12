<template>
	<view class="content">
		<image class="img" v-for="(item,index) in list" :key=index :src=item mode="" @click="click(index)"></image>
	</view>
</template>

<script>
	import {mapState} from "vuex"
	export default {
		data(){
			return{
				list:[
					'https://kfc.insideria.cn/static/img/%E9%80%89%E9%A1%B9%E5%8D%A1%E5%9B%BE%E7%89%87/1.jpg','https://kfc.insideria.cn/static/img/%E9%80%89%E9%A1%B9%E5%8D%A1%E5%9B%BE%E7%89%87/2.jpg','https://kfc.insideria.cn/static/img/%E9%80%89%E9%A1%B9%E5%8D%A1%E5%9B%BE%E7%89%87/3.jpg'
				]
			}
		},
		computed:{
			...mapState(["token"])
		},
		methods:{
			click(index){
				if(index === 0){
					console.log(this.token)
					if(this.token==""){
						uni.navigateTo({
							url:"../login/login"
						})
					}else{
						uni.navigateTo({
							url:'/pages/menu/menu'
						})
					}
					
				}
			}
		}
	} 
</script>

<style scoped>
	.content{
		height: 200rpx;
		width: 100%;
	}
	.img{
		width: 220rpx;
		height: 160rpx;
		border-radius: 20rpx;
		margin: 20rpx 0 0 22.5rpx;
	}
</style>
