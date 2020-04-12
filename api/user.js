import Get from "../common/get.js"
import Post from "../common/post.js"

/*
登录
path:/api/login
method:post
data:{
	account:账号
	password:密码
}
返回:{
	token:用户登录密钥
	expires_time:用户密钥到期时间
}
*/
export function login(data){
	return Post.urlRequest('/api/login',data)
}

/*
注册
path:/api/register
method:post
header:    "content-type":"application/json",
			"Authori-zation":`Bearer ${token}`
data:{
	account:账号
	password:密码
}
body:{
	account:账号
	captcha:验证码
	password:密码
	spread:推广编号
}
返回:{
	msg
}
*/
export function register(data){
	return Post.urlRequset('/api/register',data)
}


/* 
 修改、添加地址
 path：/api/address/edit
 method:post
 body{
	 address[province]------省
	 address[city]------市
	 address[district]------区
	 is_default------是否是默认地址|1=默认地址，0=非默认地址
	 real_name----姓名
	 post_code-----邮编
	 phone-----手机号
	 detail---详细地址
	 id---------地址编号（0添加地址，非0 修改对应编号的地址信息）
 }
 data{
 }
 
 */
export function addressEdit(data){
	return Post.urlRequest("/api/address/edit",data)
}

/* 
 删除地址
 path：/api/address/del
 method:post
 body{
	 id-----地址编号
 }
 data{
 }
 */
export function addressDel(data){
	return Post.urlRequest("/api/address/del",data)
}



/* 
 地址列表
 path：/api/address/list
 method:get
 body{
	 非必须
	 page--------分页参数起始值
	 limit------分页数起步长值
 }
 data{
	 id-------地址编号
	real_name---姓名
	phone---手机号
	province----省
	city----市
	district---区
	detail-----详细地址
	 is_default------是否默认地址（1=是，0=否）
 }
 */
export function addressList(data){
	return Get.urlRequest("/api/address/list",data)
}


/* 
 获取单个地址
 path：/api/address/detail/:id
 method:get
 路径参数{
	 id------地址编号
 }
 data{
	 id-------地址编号
	 uid----用户编号
	 real_name---姓名
	 phone---手机号
	 province----省
	 city----市
	 district---区
	 detail-----详细地址
	 post_code------邮编
	 longitude-----经度
	 latitude-------纬度
	 is_default------是否默认地址（1=是，0=否）
	 is_del---------添加是否删除
	 add_time-------地址时间
 }
 */
export function addressDetail(id){
	return Get.urlRequest('/api/address/detail/'+id)
}

/* 
 设置默认地址
 path：/api/address/default/set
 method:post
 body{
	 id-----地址编号
 }
 data{
 }
 */
export function addressDefaultSet(data){
	return Post.urlRequest("/api/address/default/set",data)
}


/* 
 获取默认地址
 path：/api/address/default
 method:get
 body{
 }
 data{
	 id-------地址编号
	 real_name---姓名
	 phone---手机号
	 province----省
	 city----市
	 district---区
	 detail-----详细地址
	 is_default------是否默认地址（1=是，0=否）
 }
 */
export function addressDefault(data){
	return Get.urlRequest("/api/address/default",data)
}

/* 
个人中心
path：/api/user
method:get
data{
	uid----用户编号
	account------用户账号
	real_name----用户名
	birthday-----用户生日
	card_id-----用户身份证号码
	mark-----用户备注
	parthner_id----合伙人id
	group_id-----用户分组id
	nickname---用户昵称
	avatar-----用户头像
	phone----用户手机号
	add_time---添加时间
	add_ip-----登录ip
	last_time-------最后一次登录时间
	last_ip------最后一次登录ip
	now_money------用户余额
	integral---用户积分
	sign_num---连续签到天数
	status------用户状态|1=正常，0=禁止
	level-----用户等级
	spread_uid-----上级推广员编号
	spread_time-----推广时间
	user_type--------用户类型|Wechat 公众号，routine 小程序
	is_promoter--------推广人权限|1=是，0=否
	pay_count-----购买次数
	spread_count------推广人数
	address-----详细地址
	couponCount------拥有优惠券个数
	like------用户收藏所有产品个数
	orderStatusNum{------订单数量
		noBuy------未支付订单数量
		noPostage--------未发货订单数量
		noTake-------未收货订单数量
		noReply-------未评论订单数量
		noPink-------拼团订单数量
		noRefund-----退款订单数量
	}
	notice------用户通知数量
	brokrage------可提现返佣金额
	recharge------充值总金额
	extractTotalPrice------提现总金额
	extractPrice------可提现总金额
	statu----分销模式|1指定分销，2人人分销
	vip----是否是会员
	vip_id------会员编号
	vip_icon-----会员图标
	vip_name------会员名称
}
 */
export function user(data){
	return Get.urlRequest("/api/user",data)
}


/* 
当前登录用户信息
path：/api/userinfo
method：get
data{
	uid-----用户编号
	real_name-------姓名
	birthday-----生日
	card_id----身份证
	pathner_id----合伙人id
	nickname----昵称
	avatar------头像
	phone-----手机好
	now_money----余额
	integral----积分
	sign_num----签到次数
	level----等级
	spread_uid------推广员编号
	spread_time-------推广时间
	user_type------用户类型
	is_promoter-----是否为推广员
	pay_count------支付次数
	spread_count-------推广人数
	address------地址
}
 */
export function userinfo(data){
	return Get.urlRequest("/api/userinfo",data)
}

/* 
 用户修改信息
 path:/api/user/edit
 method:post
 body{
	 avatar------用户头像
	 nickname------用户昵称
 }
 data{
	 
 }
 */
export function userEdit(data){
	return Post.urlRequest("/api/user/edit",data)
}

/* 
 退出登录
 path：/api/logout
 method:get
 body{}
 data{ 
 }
 */
export function logout(data){
	return Get.urlRequest("/api/logout",data)
}


/* 
 领取优惠券
 path：/api/coupon/receive
 method:post
 body{
	 couponId--------要领取的优惠券的编号（公共接口中优惠券列表api返回参数中的优惠券发布编号）
 }
 data{
	 
 }
 */
export function couponReceive(data){
	return Post.urlRequest("/api/coupon/receive",data)
}

/* 
 批量领取优惠券
 path：/api/coupon/receive/batch
 method:post
 body{
	 couponId--------要领取的优惠券的编号（公共接口中优惠券列表api返回参数中的优惠券发布编号,示例：[1,2]）
 }
 data{
	 
 }
 */
export function couponReceiveBatch(data){
	return Post.urlRequest("/api/coupon/receive/batch",data)
}

/* 
 我的优惠券
 path：/api/coupons/user/:types
 method：get
 路径参数{
	 type------优惠券状态|0=全部，1=未使用，2=已使用
 }
 data{
	 id-------领取优惠券编号
	 cid------优惠券编号
	 uid-------用户编号
	 coupon_title-------优惠券名称
	 coupon_price--------优惠券抵扣金额
	 use_min_price--------优惠券最低使用金额
	 add_time-------优惠券领取时间
	 end_time-------优惠券结束时间
	 use_time-------优惠券使用时间
	 type-----优惠券获取方式
	 status----优惠券状态
	 is_faill-------优惠券是否有效
	 _add_time-----格式化开始日期（年/月/日）
	 _end_time-------格式化结束日期（年/月/日）
	 _type--------优惠券使用状态|0已失效，1=已使用/已过期，2可使用
	 _msg-----优惠券使用状态说明
 }
 */
export function couponsUser(type){
	return Get.urlRequest('/api/coupons/user/'+type)
}
