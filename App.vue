<script>
	import {mapMutations} from "vuex"
	export default {
		methods:{
			...mapMutations(["changeWindowWidth","changeWindowHeight","changeStatusbarHeight"])
		},
		onLaunch: function() {
			uni.getSystemInfo({
				success:(res)=> {
					this.changeWindowWidth(res.windowWidth)
					this.changeWindowHeight(res.windowHeight)
					this.changeStatusbarHeight(res.statusBarHeight)
					console.log(res.windowHeight)
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	::-webkit-scrollbar {  
	    display: none;  
	    width: 0 !important;  
	    height: 0 !important;  
	    -webkit-appearance: none;  
	    background: transparent;  
	}
	
	html,body{
		width: 100%;
		height: 100%;
	}
	
@font-face {
	font-family: "iconfont";

  src:url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2')
 
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icondizhi:before {
  content: "\e641";
}

.icongouwuche:before {
  content: "\e64c";
}

.iconjiantoushang:before {
  content: "\e62c";
}

.iconyouhuiquan:before {
  content: "\e650";
}

.iconyinsi:before {
  content: "\e63c";
}

.iconweibiaoti-:before {
  content: "\e612";
}

.iconchahao:before {
  content: "\e622";
}

.iconjiantou:before {
  content: "\e610";
}

.iconjiaruwomen:before {
  content: "\e6ab";
}

.iconyaoqingma:before {
  content: "\e638";
}

.iconxinfeng2:before {
  content: "\e602";
}

.iconliping:before {
  content: "\e643";
}

.iconbianji:before {
  content: "\e60f";
}

.iconsou:before {
  content: "\e600";
}

.iconjianyi:before {
  content: "\e62d";
}

.iconqiye:before {
  content: "\e611";
}

.iconbangzhu:before {
  content: "\e601";
}

.icongongyi:before {
  content: "\e659";
}

.iconkefu:before {
  content: "\e605";
}

.iconkefu1:before {
  content: "\e60c";
}

.iconziyuan:before {
  content: "\e645";
}

.iconshezhi:before {
  content: "\e6b9";
}

.iconlipinka:before {
  content: "\e8b2";
}

.iconliping-copy:before {
  content: "\e8b7";
}

.iconjiantoushang-copy:before {
  content: "\e8b9";
}

.iconjiantou-copy:before {
  content: "\e8ba";
}



</style>
