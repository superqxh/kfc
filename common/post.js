import {BASE_URL} from "./hepler.js"
import store from '../store/index.js'
async function urlRequest(url,data){
	
	let res,err;
	let token =store.state.token;
	
	
	[err,res] =await uni.request({
		url:`${BASE_URL}${url}`,
		method:"POST",
		data,
		header:{
			"content-type":"application/json",
			"Authori-zation":`Bearer ${token}`
		}
		
	})
	
	return res
	
}
export default {
	urlRequest
}