import {BASE_URL} from "./hepler.js"
import store from '../store/index.js'
async function urlRequest(url,data){
	
	let res,err;
	let token =store.state.token;
	
	
	[err,res] =await uni.request({
		url:`${BASE_URL}${url}`,
		method:"GET",
		data,
		header:{
			"content-type":"application/json",
			"Authori-zation":`Bearer ${token}`
		}
		
	})
	// console.log(token)
	return res
	
}
export default {
	urlRequest
}
// export const getHome =(url,data)=>uni.request({
// 	url,
// 	data,
// 	success(res){
// 		console.log()
// 		console.log(res.data)
// 			}
// })