import Get from "../common/get.js"
import Post from "../common/post.js"

/*
获取购物车列表
path: /api/cart/list
method:get
body()
data{
	valid{
		id---购物车编号
		uid---用户编号
		type---产品类型
		peoduct_attr_unique---产品属性
		cart_num---购物车数量
		add_time---添加购物车时间
		is_pay---是否下单(1:已下单,0未下单)
		is_del---是否删除(1:已删除,0:未删除)
		is_new---是否购物车购买(1:直接购买,0:已经购买)
		combination_id---拼团产品编号
		sockill_id---秒杀产品编号
		bargain_id---砍价产品编号
		productInfo---{
			id---产品编号
			image---产品图片
			slider_image---产品轮播图
			price---产品市场价
			vip_price---产品会员价
			postage---产品邮费
			mer_id----商户编号
			give_integral---赠送积分
			cate_id---分类编号
			sales---产品销量
			stock---产品库存
			store_name---产品名称
			store_info---产品简介
			unit-name---产品单位
			is-show---是否显示
			is_del---是否删除
			is_postage---是否包邮
			cost---产品成本价
			attrinfo---产品属性{
				
				product_id---产品编号
				stock---产品
				sales---产品销量
				price---产品市场价
				image---产品图片
				unique---产品属性唯一值
				cost---产品属性成本价
			}
			truePrice---支付金额
			vip_truePrice---会员支付金额
			trueStock---产品库存
			costPrice---支付成本价
		}
		
	}---购物车有效产品
	
	invalid{---购物车失效的
		id---购物车编号
		uid---用户编号
		type---产品类型
		peoduct_attr_unique---产品属性
		cart_num---购物车数量
		add_time---添加购物车时间
		is_pay---是否下单(1:已下单,0未下单)
		is_del---是否删除(1:已删除,0:未删除)
		is_new---是否购物车购买(1:直接购买,0:已经购买)
		combination_id---拼团产品编号
		sockill_id---秒杀产品编号
		bargain_id---砍价产品编号
		productInfo---{
			id---产品编号
			image---产品图片
			slider_image---产品轮播图
			price---产品市场价
			vip_price---产品会员价
			postage---产品邮费
			mer_id----商户编号
			give_integral---赠送积分
			cate_id---分类编号
			sales---产品销量
			stock---产品库存
			store_name---产品名称
			store_info---产品简介
			unit-name---产品单位
			is-show---是否显示
			is_del---是否删除
			is_postage---是否包邮
			cost---产品成本价
			attrinfo---产品属性{
				
				product_id---产品编号
				stock---产品
				sales---产品销量
				price---产品市场价
				image---产品图片
				unique---产品属性唯一值
				cost---产品属性成本价
			}
		
	}
	
	
}


*/
export function cartList(data){
	return Get.urlRequest('/api/cart/list',data)
}

/**
	购物车添加
 path:/api/cart/add
 method:post
 body{
	 productId --- 产品编号
	 cartNum --- 购物车数量
	 new --- 购物车类型
	 非必须
	 uniqueId --- 属性唯一值
	 combinationId --- 拼团产品编号
	 seckillId --- 秒杀产品编号
	 bargainId --- 砍价产品编号
 }
 data:{
	 cartId --- 购物车编号
	 
 }
 
 */
export function cartAdd(data){
	return Post.urlRequest('/api/cart/add',data)
}
/**
	删除购物车
 path:/api/cart/del
 method:post
 body{
	 ids --- 购物车数组
	 [非必填 
		购物车编号
	 ]
 }
 data:{
 }
 */
export function cartDel(data){
	return Post.urlRequest('/api/cart/del',data)
}

/**
	获取购物车数量
 path:/api/cart/count
 method:get
 body{非必须
	 numType --- 购物车数量类型
 }
 data:{
	 count --- 购物车数量
 }
 */
export function cartCount(data){
	return Get.urlRequest('/api/cart/count',data)
}
/**
	购物车修改产品数量
 path:/api/cart/num
 method:post
 body{
	 id --- 购物车编号
	 number --- 购物车数量
 }
 data:{
	 
 }
 */
export function cartNum(data){
	return Post.urlRequest('/api/cart/num',data)
}