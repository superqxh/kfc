<template>
	<vive class="content">
		<navT title="注册"></navT>
		<view class="content-box">
			<view class="inp-box">
				<image class="icon-img" src="../../static/img/login/account.png" mode=""></image>
				<input class="inp" type="text" value="" placeholder="请输入账号" placeholder-style="color:#cccccc" v-model="account"/>
			</view>
			<view class="inp-box">
				<image class="icon-img" src="../../static/img/login/password.png" mode=""></image>
				<input class="inp"  type="password" value="" placeholder="请输入密码" placeholder-style="color:#cccccc" v-model="password"/>
			</view>
			<view class="inp-box">
				<image class="icon-img" src="../../static/img/login/password.png" mode=""></image>
				<input class="inp"  type="password" value="" placeholder="请再次输入密码" placeholder-style="color:#cccccc" v-model="confirm"/>
			</view>
			<button class="btn" :style="btn?'':'background:#bbbbbb'" :disabled="!btn" @click="register()">注 册</button>
			<view class="register" @click="toLogin"> 
				已注册账号去登录{{name}}
			</view>
		</view>
	</vive>
</template>

<script>
	import {register} from "../../api/user.js"
	import navT from "@/components/nav/nav.vue"
	import {mapState,mapMutations} from "vuex"
	
	export default {
		components: {navT},
		data() {
			return {
				confirm:"",
				account:'',
				password:''
				
			}
		},
		methods: {
			...mapMutations(["changName"]),
			toLogin(){
				//页面跳转
				uni.redirectTo({
					url: '../login/login',
					
				});
				
			},
			show(val){
				uni.showModal({
					content:val
				})
				
			},
			testPhone(){
				var regex = /^[1][3,4,5,7,8][0-9]{9}$/;
				if(!regex.test(this.account)){
					this.show("请输入正确的手机号")
					return false;
				}else{
					
					return true;
				}
			},
			testPassword(){
				if(this.password.length>=6){
					return true;
				}else{
					this.show("密码格式有问题");
					return false;
					
				}
			},
			testConfirm(){
				if(this.password === this.confirm){
					return true;
				}else{
					this.show("两次输入的密码不一致");
					return false;
				}
			},
			register(){
				if(this.testPhone()&&this.testPassword()&&this.testConfirm()){
					
					var data={
						account:this.account,
						captche:"123456",
						password:this.password,
						spread:null
					};
					register(data).then((data)=>{console.log(data)})
				}else{
					console.log(0);
				}
				
				
				
			}
		},
		computed:{
			btn(){
				if(this.accoun!=''&&this.password!=''&&this.confirm!=''){
					return true
				}else{
					return false
				}
			},
			...mapState(["name"])
		}
	}
</script>

<style scoped>
.content{
	width: 100%;
	height: 100%;
	background-color: #FAFAFA;
}

.content-box{
	margin: 40rpx 25rpx;
	width: 700rpx;
	
}
.inp-box{
	width:100% ;
	position: relative;
	margin-top: 30rpx;
	margin-left: 25rpx;
}
.inp{
	width: 600rpx;
	height: 40rpx;
	padding: 20rpx 0 20rpx 100rpx;
	background-color: #FFFFFF;
	font-size: 30rpx;
}
.icon-img{
	position: absolute;
	top: 0;
	left: 0;
	width: 60rpx;
	height: 60rpx;
	padding: 10rpx 20rpx;
	
}
.btn{
	margin-top:20rpx ;
	width: 700rpx;
	height: 80rpx;
	font-size: 30rpx;
	color: #FFFFFF;
	background-color: #f04b3c;
}
.register{
	margin-top: 10rpx;
	text-align: right;
	font-size: 30rpx;
	color: #f04b3c;
	font-weight: bold;
	margin-right: 25rpx;
}
</style>