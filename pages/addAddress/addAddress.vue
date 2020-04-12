<template>
	<view class="content">
		<navT title='新增地址'></navT>
		<view class="addressInfo">
			<view class="box">
				<view class="title">
					联系人
				</view>
				<input class="inp" v-model="name" type="text" value="" placeholder="联系人"/>
			</view>
			<view class="box">
				<view class="right">
					<view class="sex-box" :style="sex=='女士'?'color:#BF212E;border:1px solid red':''" @click="Ms()" >
						女士
					</view>
					<view class="sex-box" :style="sex=='先生'?'color:#BF212E;border:1px solid red':''" @click="Mi()">
						先生
					</view>
				</view>
			</view>
			<view class="box">
				<view class="title">
				电话
				</view>
				<input class="inp" v-model="phone" type="text" value="" placeholder="联系人电话"/>
			</view>
			<view class="box">
				<view class="title">
					地址
				</view>
				<view class="test" @click="chooseLocation">
					{{address}}<text class="iconfont iconjiantou icon"></text>
				</view>
			</view>
			<view class="box">
				<view class="title">
					详细地址
				</view>
				<input class="inp" v-model="detail" type="text" value="" placeholder="例如:3号楼401使"/>
			</view>
			
			
		</view>
		<button class="btn" type="primary" @click="click">确定</button>
	</view>
</template>

<script>
	import navT from "../../components/nav/nav.vue"
	import {addressEdit,addressList} from "@/api/user.js"
	export default {
		components:{navT},
		data() {
			return {
				name:"",
				phone:"",
				detail:"",
				sex:"先生",
				address:"请选择送餐地址",
				obj:{}
			}
		},
		
		methods: {
			click(){
				addressEdit({
					address:{
						province:this.obj.Province,
						city:this.obj.City,
						district:this.obj.Country
					},
					is_default:0,
					real_name:this.name,
					post_code:"",
					phone:this.phone,
					detail:this.address+this.detail,
					id:0
					
				}).then(data=>{
					
					if(data.data.msg=="ok"){
						console.log(12)
						uni.navigateBack({
							delta:1
						})
					}
					console.log(data)
					
				})
				console.log(this.name,this.phone,this.detail,this.sex,this.address)
			},
			Ms(){
				this.sex="女士"
			},
			Mi(){
				this.sex="先生"
			},
			chooseLocation(){
				uni.chooseLocation({
					success: (res) => {
						this.address=res.name
						this.obj= this.getArea(res.address)
					}
				})
			},
			getArea(str) {
				let area = {}
				let index11 = 0
				let index1 = str.indexOf("省")
				if (index1 == -1) {
				  index11 = str.indexOf("自治区")
				  if (index11 != -1) {
					area.Province = str.substring(0, index11 + 3)
				  } else {
					area.Province = str.substring(0, 0)
				  }
				} else {
				  area.Province = str.substring(0, index1 + 1)
				}
			 
				let index2 = str.indexOf("市")
				if (index11 == -1) {
				  area.City = str.substring(index11 + 1, index2 + 1)
				} else {
				  if (index11 == 0) {
					area.City = str.substring(index1 + 1, index2 + 1)
				  } else {
					area.City = str.substring(index11 + 3, index2 + 1)
				  }
				}
			 
				let index3 = str.lastIndexOf("区")
				if (index3 == -1) {
				  index3 = str.indexOf("县")
				  area.Country = str.substring(index2 + 1, index3 + 1)
				} else {
				  area.Country = str.substring(index2 + 1, index3 + 1)
				}
				return area;
			 }
		}
	}
</script>

<style scoped>

.content{
	width: 100%;
	height: 100%;
	background-color: #FAFAFA;
}
.addressInfo{
	padding-left: 30rpx;
	width: 720rpx;
}
.box{
	width: 100%;
	border-bottom: 2px solid #EEEEEE;
	height: 80rpx;
	padding: 10rpx 0;
}
.title{
	float: left;
	height: 80rpx;
	line-height: 80rpx;
	font-size: 35rpx;
	font-weight: bold;
}
.inp{
	float: right;
	text-align: right;
	padding-right: 25rpx;
	line-height: 80rpx;
	height: 80rpx;
	font-size: 30rpx;

}
.right{
	float: right;
	height: 70rpx;
	padding: 5rpx ;
}
.sex-box{
	float: right;
	height: 70rpx;
	line-height: 70rpx;
	width: 120rpx;
	border: 1px solid #bbbbbb;
	margin-right: 25rpx;
	text-align: center;
	border-radius: 10rpx;
}
.test{
	float: right;
	height: 80rpx;
	line-height: 80rpx;
	margin-right: 15rpx;
	font-size: 30rpx;
}
.icon{
	font-size: 25rpx;
	color: #666666;
}
.btn{
	width: 90%;
	background: #BF212E;
	color: #ffffff;
	margin-top: 20rpx;
}
</style>
