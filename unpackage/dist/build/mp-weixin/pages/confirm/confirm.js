(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/confirm/confirm"],{"327f":function(t,n,e){"use strict";e.r(n);var o=e("3c5e"),a=e("cb1b");for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);e("9175");var i,c=e("f0c5"),u=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"29a1e6f5",null,!1,o["a"],i);n["default"]=u.exports},"3c5e":function(t,n,e){"use strict";var o,a=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return r}),e.d(n,"a",function(){return o})},9175:function(t,n,e){"use strict";var o=e("a294"),a=e.n(o);a.a},a294:function(t,n,e){},cb1b:function(t,n,e){"use strict";e.r(n);var o=e("e596"),a=e.n(o);for(var r in o)"default"!==r&&function(t){e.d(n,t,function(){return o[t]})}(r);n["default"]=a.a},e596:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("c0e4"),a=e("88dc"),r=e("2f62");function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){c(t,n,e[n])})}return t}function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var u=function(){return e.e("components/nav/nav").then(e.bind(null,"daf9"))},s={components:{navT:u},data:function(){return{show:!1,confirmData:{},i:0,list:[],coupon_show:!1}},methods:{postOrder:function(){console.log(this.payType);var t="";t=(this.payType.id=0)?"zhifubao":"weixin",(0,o.orderCreate)(this.confirmData.orderKey,{addressId:this.list[this.addRessIndex].id,couponId:"",payType:t,mark:"快点"}).then(function(t){console.log(t)})},click:function(t,n){for(var e=this,o=0;o<this.list.length;o++)this.list[o].is_default=0;this.list[t].is_default=1,(0,a.addressDefaultSet)({id:n}).then(function(t){if("ok"!=t.data.msg)return!1;e.show=!e.show})},topayType:function(n){t.navigateTo({url:"/pages/payType/payType?id="+n})},changeShow:function(){this.show=!this.show},showCoupon:function(){this.coupon_show=!this.coupon_show},toAddAddress:function(){t.navigateTo({url:"../addAddress/addAddress"})}},computed:i({},(0,r.mapState)(["payType"]),{addRessIndex:function(){if(0==this.list.length)return-1;for(var t=0;t<this.list.length;t++)if(1==this.list[t].is_default)return t},number:function(){for(var t=0,n=0;n<this.confirmData.cartInfo.length;n++)t+=this.confirmData.cartInfo[n].cart_num;return t},money:function(){for(var t=0,n=0;n<this.confirmData.cartInfo.length;n++)t+=this.confirmData.cartInfo[n].cart_num*this.confirmData.cartInfo[n].productInfo.price;return t}}),onLoad:function(t){var n=this;void 0!=t&&(0,o.orderConfirm)({cartId:t.str}).then(function(t){t=t.data.data,n.confirmData=t,console.log(n.confirmData)})},onShow:function(){var t=this;(0,a.addressList)().then(function(n){t.list=n.data.data,console.log(n.data.data)})}};n.default=s}).call(this,e("543d")["default"])},e8d6:function(t,n,e){"use strict";(function(t){e("1ae8"),e("921b");o(e("66fd"));var n=o(e("327f"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])}},[["e8d6","common/runtime","common/vendor"]]]);