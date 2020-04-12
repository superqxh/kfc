import Get from "@/common/get.js"
import Post from "@/common/post.js"

/* 
 请求商品分类
 path：/api/category
 method；get
 body；{
	 
 }
 data{
	 id----分类id
	 pid----分类父级
	 cate_name----分类名称
	 pic-----分类图片
	 children{   ---子分类
		 id---子分类id
		 cate_name-----子分类图片
		 pic----子分类图片
	 }
 }
 */
export function category(data){
	return Get.urlRequest("/api/category",data)
}

/* 
 获取商品列表
 path:/api/products
 method:get
 body{非必须参数
	 sid----二级分类编号
	 cid----一级分类编号
	 keyword---搜索
	 priceOrder---价格排序
	 salesOrder---销量排序
	 news----是否新品
	 page----分页参数起始值
	 limit---分页数步长值
 }
 data{
	 id----商品编号
	 store_name-----商品名称
	 cate_id-----商品分类编号
	 imgage---商品图片
	 sales----商品销量
	 price-----商品价格
	 stock-----商品库存
 }
 */
export function products(data){
	return Get.urlRequest("/api/products",data)
}

/* 
 获取首页数据
 path：/api/index
 body:{}
 data:{
	 banner:{---顶部轮播图
		 id：-----轮播图id
		 name-----轮播图名称
		 url----小程序链接
		 wap_url-----公众号链接
		 pic-----图片
	 }
	 menus{----导航模块
		 id-----导航id
		 name----导航名称
		 url----小程序链接
		 wap_url-----公众号链接
		 show---显示状态
		 pic-----图片
	 }
	 roll{------新闻简报消息滚动
		 id：-----
		 info-----信息
		 url----小程序链接
		 wap_url-----公众号链接
		 show---显示状态
	 }
	 info{-----活动
		 fastInfo-----快速选择简介
		 bastInfo----精品推荐简介
		 fristInfo----首发新品简介
		 salesInfo-----促销单品简介
		 fastList:{------分类
			 id
			 cate_name ----分类名称
			 pid-----
			 pic----分类图片
		 }
		 bastList{---精品推荐
			 id
			 image---商品图片
			 store_name----商品名称
			 cate_id-----分类id
			 price----商品价格
			 ot_price-----会员价
			 sales----销量
			 unit_name----单位名称
		 }
		 fristList:{----首发新品
			 id
			 image---商品图片
			 store_name----商品名称
			 cate_id-----分类id
			 price----商品价格
			 unit_name----单位名称
		 }
		 bastBanner{----首页精品推荐图片
			 id
			 img-----图片
			 comment-----简介
			 link-----lianjie
		 }
	 }
	 activity{----活动区域图片
		 id
		 pic---图片
		 title---标题
		 info---简介
		 link-----小程序链接
		 wap_url------公众号连接
	 }
	 lovely{-----首发新品广告图
		 id
		 img---图片
		 comment---描述
		 link-----小程序链接
		 wap_url------公众号连接
	 }
	 benefit{-----促销单品
		 id
		 image---商品图片
		 store_name----商品名称
		 cate_id-----分类id
		 price----商品价格
		 ot_price-----会员价
		 stock-----库存
		 unit_name----单位名称
	 }
	 likeInfo{---热门榜单
		 id
		 image---商品图片
		 store_name----商品名称
		 cate_id-----分类id
		 price----商品价格
		 unit_name----单位名称
	 }
	 logoUrl----企业logo
	 couponList{-----优惠券
		 id-----优惠券id
		 cid----优惠券编号
		 start_time-----优惠券开始领取时间
		 end_time------优惠券结束时间（为空不限时）
		 total_count-----优惠券领取数量
		 remain_count----优惠券剩余领取数量
		 is_permanent------是否无限张数
		 coupon_price-----优惠券面额
		 use_min_price------优惠券最低消费金额
		 is_use------是否领取
	 }
 }
 
 */
export function index(data){
	return Get.urlRequest("/api/index",data)
}


/*  
获取个人中心菜单
path :/api/menu/user
method:get
data{
	routine_my_menus{------菜单
		id------菜单编号
		name-----菜单的名称
		pic-----菜单图片
		url---小程序跳转连接
		wa_url-----公众号的跳转连接
	}
}
*/
export function menuUser(data){
	return Get.urlRequest("/api/menu/user",data)
}



/* 
 优惠券列表
 path：/api/coupons
 method:get
 body{
	 非必须参数
	 page-------分页参数起始值
	 limit------分页数步长值
 }
 data{
	 id------优惠券发布编号
	 cid-------优惠券编号
	 start_time-----优惠券开始领取的时间
	 end_time-----优惠券结束领取时间（如果为空，表示不限时）
	 total_count------优惠券领取数量
	 remain_count------优惠券剩余领取数量
	 is_permanent------优惠券是否无限张数
	 coupon_price------优惠券面额
	 use_min_price------优惠券最低消费金额
	 is_use------是否领取
 }
 */
export function coupons(data){
	return Get.urlRequest("/api/coupons",data)
}


/* 
 秒杀产品列表
 path:/api/seckill/list/:time
 menthod：get
 路径参数{
	 time-----秒杀时间段编号（通过秒杀产品时间区间接口获取）
 }
 data{
	 非必须
	 page------分页数起始值（默认0查询全部）
	 limit-----分页数步长值
	 data{
		 id-------秒杀产品编号
		 product_id-------产品编号
		 image--------秒杀产品图片
		 images-------秒杀产品轮播图
		 title-------秒杀产品标题
		 info-------秒杀产品简介
		 price-----秒杀产品售价
		 ot_price------秒杀产品市场价
		 give_integral------秒杀产品赠送积分
		 sort------秒杀产品排序
		 stock-----秒杀产品库存
		 sales------秒杀产品销量
		 unit_name-----秒杀产品单位
		 postage------邮费
		 description------秒杀产品详情
		 start_time-------开始 时间
		 end_time--------结束时间
		 status---------开启状态|1=开启，0=结束
		 is_postage-------是否包邮|1=是，0=否
		 is_hot----------是否人|1=是，0=否
		 num---------购买个数限制
		 is_show------产品状态|1=显示，0=隐藏
		 percent-------销量百分比
	 }
 }
 */
export function seckillList(time,data){
	return Get.urlRequest('/api/seckill/list/'+time,data)
}


/* 
 秒杀产品时间区间
 path：/api/seckill/index
 method:get
 data{
	 lovely------秒杀产品页面顶部图
	 seckillTime{----秒杀时间段信息
		 id------秒杀时间段编号
		 time-----秒杀时间段时间区间名称
		 continued------秒杀开启持续时间
		 state-------秒杀状态名称
		 status-----秒杀状态|0=已结束，1=抢购中，2=即将开始
		 stop------秒杀结束时间 
	 }
	 seckillTimeIndex-------当前开始的秒杀时间段索引
 }
 */
export function seckillIndex(data){
	return Get.urlRequest("/api/seckill/index",data)
}

/* 
 秒杀产品详情
 path:/api/seckill/detail/:id
 method:get
 路径参数{
	 id--------秒杀产品编号
 }
 data{
	 storeInfo{-------秒杀产品信息
		id-----秒杀产品编号
		product_id------产品编号
		image------秒杀产品图片
		images-------秒杀产品轮播图
		title---秒杀产品标题
		info--------秒杀产品简介
		price------秒杀产品售价
		ot_price----秒杀产品市场价
		give_integral-----秒杀产品赠送积分
		sort-------秒杀产品排序
		stock----秒杀产品库存
		sales------秒杀产品销量
		unit_name-----秒杀产品单位
		postage------秒杀产品邮费
		description-------秒杀产品详情
		start_time---秒杀产品开始时间
		stop_time-------秒杀产品结束时间
		status------开启状态|1=开启，0=结束
		is_postage------是否包邮|1=是，0=否
		is_hot--------是否热门|1=是，0=否
		num-------购买个数限制
		is_show-------产品状态|1=显示，0=隐藏
		userLike----是否点赞|1=是，0=否
		like_num-------点赞次数
		userCollect-----是否收藏|1=是，0=否
		uid-------用户编号
		image_base-------秒杀图片base64(用户生产海报)
		code_base-------秒杀产品二维码（用户生成海报）
	 }
	 reply{--------评论信息
		product_score-----产品分数
		service_score------服务分数
		comment-------评论
		merchant_reply_content------商家评论
		pics------评论图片
		add_time----评论时间
		nickname-----评论用户昵称
		avatar-------评论用户头像
		suk-----购买产品属性
		star-----评论星数（（产品分数+服务分数）/2）	 
	 }
	 replyCount---------评论总数
 }
 */
export function seckillDetail(id){
	return Get.urlRequest('/api/seckill/detail/'+id)
}

/* 
 签到
 path:/api/sign/integral
 method：post
 data{
	 integral------签到获得的积分
 }
 */
export function signIntegral(){
	return Post.urlRequest("/api/sign/integral")
}

/* 
 签到列表
 path：/api/sign/list
 method:get
 query{
	 page-------分页参数起始值
	 limit-------分页数步长值
 }
 data{
	 add_time-------签到时间
	 title-----签到描述
	 number-----签到积分
 }
 */
export function signList(data){
	return Get.urlRequest("/api/sign/list",data)
}


/* 
 签到列表（年月）
 path：/api/sign/month
 method：get 
 query{
	 page-------分页参数起始值
	 limit------分页数步长值
 }
 data{
	 month------年月
	 list{------签到信息
		add_time------签到时间
		title-----签到标题
		number-----签到积分
	 }
 }
 */
export function signMonth(data){
	return Get.urlRequest("/api/sign/month",data)
}


/* 
签到用户信息
path：/api/sign/user
method:post
body{
	非必须
	sign------是否统计签到|1=是，0=否
	integral------是否统计积分使用情况|1=是，0=否
	all----------是否统计签到和统计积分使用情况|1=是，0=否
}
 data{
	 uid-------用户编号
	 nickname-----用户昵称
	 avatar--------用户头像
	 now_money-------用户余额
	 integral----用户积分
	 sign_num-------连续签到天数
	 is_promoter------是否推广员|1=是，0=否
	 pay_count----购买次数
	 spread_count------推广人数
	 sum_sign_day-------累积签到次数
	 is_day_sign--------今天是否签到
	 sum_integral------累积总积分
	 deduction_integral------累计抵扣积分
	 today_integral--------今天累计积分
 }
 */
export function signUser(data){
	return Post.urlRequest("/api/sign/user",data)
}


/* 
签到配置
path：/api/sign/config
method:get
data{
	id-----配置编号
	day-----配置天
	sign_num-----配置积分
}
 */
export function signConfig(){
	return Get.urlRequest("/api/sign/config")
}