<template>
	<view class="content">
		<indexNav></indexNav>
		<indexTab></indexTab>
		<indexScroll :list="scrollList"></indexScroll>
		<indexSwiper :list="swiperList"></indexSwiper>
		<indexShow :content=content1></indexShow>
		<indexShow :content=content2></indexShow>
		<indexShow :content=content3></indexShow>
		<indexShow :content=content4></indexShow>
	</view>
</template>
<script>
	import indexNav from "../../components/index/index-nav.vue"
	import indexTab from "../../components/index/index-tab.vue"
	import indexScroll from '../../components/index/index-scroll.vue'
	import indexSwiper from '../../components/index/index-swiper.vue'
	import indexShow from '../../components/index/index-show.vue'
	import {index,category,menuUser} from "@/api/public.js"
	export default {
		components:{indexNav,indexTab,indexScroll,indexSwiper,indexShow},
		data() {
			return {
				swiperList:"",
				scrollList:[{id:"99",pic:"https://kfc.insideria.cn/uploads/attach/2019/12/20191213/e1e6215eaa804893f3fe6eff2545728f.jpg",name:"454"}],
				title: 'Hello',
				content1:{
					title:"美味尝鲜",
					mainImg:"https://kfc.insideria.cn/static/img/首页宣传/4.jpg",
					secondaryImgList:[
						"https://kfc.insideria.cn/static/img/首页宣传/5.jpg",
						"https://kfc.insideria.cn/static/img/首页宣传/6.jpg",
						"https://kfc.insideria.cn/static/img/首页宣传/7.jpg",
					]
				},
				content2:{
					title:"wow会员",
					mainImg:"https://kfc.insideria.cn/static/img/wow%E4%BC%9A%E5%91%98//1.jpg",
					secondaryImgList:[
						"https://kfc.insideria.cn/static/img/wow%E4%BC%9A%E5%91%98//2.jpg",
						"https://kfc.insideria.cn/static/img/wow%E4%BC%9A%E5%91%98//3.jpg",
						"https://kfc.insideria.cn/static/img/wow%E4%BC%9A%E5%91%98//4.jpg",
					]
				},
				content3:{
					title:"今日大牌",
					mainImg:"https://kfc.insideria.cn/static/img/%E4%BB%8A%E6%97%A5%E5%A4%A7%E7%89%8C/1.jpg",
					secondaryImgList:[
						"https://kfc.insideria.cn/static/img/%E4%BB%8A%E6%97%A5%E5%A4%A7%E7%89%8C/2.jpg",
						"https://kfc.insideria.cn/static/img/%E4%BB%8A%E6%97%A5%E5%A4%A7%E7%89%8C/3.jpg",
						"https://kfc.insideria.cn/static/img/%E4%BB%8A%E6%97%A5%E5%A4%A7%E7%89%8C/4.jpg",
						"https://kfc.insideria.cn/static/img/%E4%BB%8A%E6%97%A5%E5%A4%A7%E7%89%8C/5.jpg"
					]
				},
				content4:{
					title:"每日好货",
					mainImg:"https://kfc.insideria.cn/static/img/%E5%A5%BD%E8%B4%A7/1.jpg",
					secondaryImgList:[
						"https://kfc.insideria.cn/static/img/%E5%A5%BD%E8%B4%A7/2.jpg",
						"https://kfc.insideria.cn/static/img/%E5%A5%BD%E8%B4%A7/3.jpg",
						"https://kfc.insideria.cn/static/img/%E5%A5%BD%E8%B4%A7/4.jpg",
					]
				}
			}
		},
		onLoad() {
			index().then(data=>{
				data =data.data.data
				this.swiperList=data.banner
				this.scrollList=data.menus
				console.log(data)
			})
		
		},
		methods: {

		},
		created() {
		index().then(data=>{
			data =data.data.data
			this.swiperList=data.banner
			this.scrollList=data.menus
			console.log(data)
			
		})
			
		}
	}
</script>

<style>
	.content {
		background-color: #fafafa;
	}


</style>
