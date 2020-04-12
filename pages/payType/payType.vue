<template>
	<view class="content">
		<navT title="支付方式"></navT>
		<radio-group @change="radioChange">
			<view class="type-box" v-for="(item,index) in list" :key="index">
				<image class="img" :src="item.img" mode=""></image>
				<view class="title">
					{{item.type}}
				</view>
				<label class="radio">
					<radio :value="item.value" :checked="item.checked" /><text></text>
				</label>
			</view>
		</radio-group>
		
	</view>
</template>

<script>
	import navT from '@/components/nav/nav.vue'
	import {mapState,mapMutations} from "vuex"
	export default {
		components:{navT},
		data() {
			return {
				list:[{
					id:0,
					value:'zfb',
					type:"支付宝支付",
					img:"../../static/img/pay_zfb.png",
					checked:false
				},
				{
					id:1,
					value:'wx',
					type:"微信支付",
					img:"../../static/img/pay_wx.png",
					checked:true
				}
				
				]
			}
		},
		computed:{
			
		},
		methods: {
			...mapMutations(["changePayType"]),
		
			radioChange(evt){
				
				for(var i=0;i<this.list.length;i++){
					if(this.list[i].value == evt.target.value){
						this.current = i
						this.changePayType({
							id:this.list[i].id,
						value:this.list[i].value,
						type:this.list[i].type,
						img:this.list[i].img
						})
						break
					}
				}
				
			}
		},
		onLoad(o) {
			console.log(this.list[0])
				for(var i=0;i<this.list.length;i++){
					this.list[i].checked=false
				}
				this.list[o.id].checked=true
			
			
		}
	}
</script>

<style scoped>
.type-box{
	height: 100rpx;
	width: 750rpx;
	
}
.img{
	width: 80rpx;
	height: 80rpx;
	margin: 10rpx;
	float: left;
}
.title{
	height: 100rpx;
	line-height: 100rpx;
	font-size: 35rpx;
	float: left;
}
.radio{
	height: 100rpx;
	line-height: 100rpx;
	float: right;
	margin-right: 20rpx;
}
</style>
