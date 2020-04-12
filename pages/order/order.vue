<template>
	<view class="content1">
		
		<navT title="订 单"></navT>
		<orderNav></orderNav>
		<order :list="list"></order>
		
		
	</view>
</template>

<script>
	import navT from"@/components/nav/nav.vue"
	import orderNav from "@/components/order/order-nav.vue"
	import order from"@/components/order/order-list.vue"
	import {orderList,orderDetail} from "@/api/order.js"
	import {mapState} from "vuex"
	export default {
		components:{navT,orderNav,order},
		data() {
			return {
				list:[],
				id:""
			}
		},
		methods: {
			
		},
		computed:{
			...mapState(["token"])
		},
		created() {
			console.log(121)
			
		},
		onShow() {
			console.log(this.token)
			if(this.token==""){
				uni.navigateTo({
					url:"../login/login"
				})
			}else{
				orderList().then(data=>{
					this.list=data.data.data
				})
				orderDetail(this.list[0].order_id).then(data=>{
				})
			}
			
			
		}
	}
</script>

<style scoped>
.content1{

	width: 100%;
	height: 100%;
	background-color: #FAFAFA;
}
</style>
