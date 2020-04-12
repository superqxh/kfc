import Vue from "vue"
import Vuex from "vuex"
import {cartAdd,cartList,cartNum,cartDel} from "@/api/cart.js"
Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		token:"",
		windowWidth:0,
		windowHeight:0,
		statusbarHeight:0,
		kfcCart:[],
		typeList:[],
		productList:[],
		payType:{
			id:1,
			value:'weixin',
			type:"微信支付",
			img:"../../static/img/pay_wx.png"
			}
		},
	mutations:{
		changePayType(state,val){
			state.payType=val
		},
		changeProductList(state,val){
			state.productList=val
		},
		changToken(state,val){
			state.token=val
		},
		changeWindowWidth(state,val){
			state.windowWidth=val
		},
		changeWindowHeight(state,val){
			state.windowHeight=val
		},
		changeStatusbarHeight(state,val){
			state.statusbarHeight=val
		},
		changeTypeList(state){
			state.typeList=[]
			
			for(var i=0;i<state.productList.length;i++){
				state.typeList.push({id:state.productList[i].id,number:0})
			}
			for(var i=0;i<state.kfcCart.length;i++){
				var arr= state.kfcCart[i].productInfo.cate_id.split(",")
				for(var j=0;j<arr.length;j++){
					for(var n=0;n<state.typeList.length;n++){

						if(state.typeList[n].id == arr[j]){
							
							state.typeList[n].number= state.typeList[n].number+state.kfcCart[i].cart_num
						}
					}
				}
				
			}
			console.log(state.typeList)
		},
		changeKfcCart(state,val){
			state.kfcCart=val
			
			this.commit("changeTypeList")
		},
		changeShowCartList(state,val){
			state.showCartList=val
		},
		addCartList(state,val){
			
			var data={
				productId:val,
				cartNum:1,
				new:0,
			}
			//购物车添加
			cartAdd(data).then(data=>{
				if(data.data.msg==="请登录"){
					console.log("请重新登录vux")
					return
				}
				//获取购物车数据存入vuex
				cartList().then(data=>{
					state.kfcCart=data.data.data.valid
					this.commit("changeTypeList")
				})
				
			})
			
		},
		delCartList(state,val){
			var data={
				id:0,
				number:0
			}
			for(var i=0;i<state.kfcCart.length;i++){
				if(state.kfcCart[i].productInfo.id === val){
					if(state.kfcCart[i].cart_num<=1){
						var data1={
							ids:`${data.id=state.kfcCart[i].id}`
						}
						cartDel(data1)
			
					}else{
						data.id=state.kfcCart[i].id;
						data.number=state.kfcCart[i].cart_num-1;
						cartNum(data).then(data=>{
							console.log(data)
						})
					}
					setTimeout(()=>{
						cartList().then(data=>{
							state.kfcCart=data.data.data.valid
							this.commit("changeTypeList")
						})
					},100)
					
					
					
				}
				
			}
		}
	}
})
export default store