(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"0ca9":function(t,e,n){var a=n("397e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("65ca4faf",a,!0,{sourceMap:!1,shadowMode:!1})},"2c8c":function(t,e,n){"use strict";var a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("cebc")),o=n("88dc"),u=n("2f62"),s=a(n("daf9")),r={components:{navT:s.default},data:function(){return{account:"",password:""}},methods:(0,i.default)({},(0,u.mapMutations)(["changToken"]),{toRegister:function(){uni.redirectTo({url:"../register/register",success:function(t){},fail:function(){},complete:function(){}})},show:function(t){uni.showModal({content:t})},testPhone:function(){var t=/^[1][3,4,5,7,8][0-9]{9}$/;return!!t.test(this.account)||(this.show("请输入正确的手机号"),!1)},testPassword:function(){return this.password.length>=6||(this.show("密码格式有问题"),!1)},login:function(){var t=this;if(this.testPhone()&&this.testPassword()){var e={account:this.account,password:this.password};(0,o.login)(e).then(function(e){(e.data.msg="登录成功")&&(console.log(e.data.data.token),t.changToken(e.data.data.token),uni.navigateBack({delta:1}))})}else console.log(0)},qq:function(){console.log(this.token);var t="/api/menu/user",e={};Get.urlRequset(t,e).then(function(t){console.log(t)})}}),computed:(0,i.default)({btn:function(){return""!=this.accoun&&""!=this.password}},(0,u.mapState)(["token"]))};e.default=r},"397e":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".nav-content[data-v-3919ef36]{margin-top:%?10?%;height:%?100?%;margin-bottom:%?50?%}.icon[data-v-3919ef36]{color:#bf212e;font-size:%?40?%;margin-left:%?30?%;width:%?50?%;text-align:center}.title-box[data-v-3919ef36]{width:%?450?%;text-align:center}.title[data-v-3919ef36]{width:%?450?%;color:#bf212e;font-size:%?40?%;font-weight:700;text-align:center}.bottom[data-v-3919ef36]{margin-top:%?-15?%;margin-left:%?165?%;height:%?20?%;width:%?120?%}.box[data-v-3919ef36]{width:%?20?%;height:%?20?%;background-color:#df3331;float:left;margin:0 %?10?%}",""])},"67d5":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".content[data-v-92431a14]{width:100%;height:100%;background-color:#fafafa}.content-box[data-v-92431a14]{margin:%?40?% %?25?%;width:%?700?%}.inp-box[data-v-92431a14]{width:100% ;position:relative;margin-top:%?30?%;margin-left:%?25?%}.inp[data-v-92431a14]{width:%?600?%;height:%?40?%;padding:%?20?% 0 %?20?% %?100?%;background-color:#fff;font-size:%?30?%}.icon-img[data-v-92431a14]{position:absolute;top:0;left:0;width:%?60?%;height:%?60?%;padding:%?10?% %?20?%}.btn[data-v-92431a14]{margin-top:%?20?%;width:%?700?%;height:%?80?%;font-size:%?30?%;color:#fff;background-color:#f04b3c}.register[data-v-92431a14]{margin-top:%?10?%;text-align:right;font-size:%?30?%;color:#f04b3c;font-weight:700;margin-right:%?25?%}",""])},"6dc4":function(t,e,n){"use strict";var a=n("7148"),i=n.n(a);i.a},7148:function(t,e,n){var a=n("67d5");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("374dffca",a,!0,{sourceMap:!1,shadowMode:!1})},8645:function(t,e,n){"use strict";n.r(e);var a=n("2c8c"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},"88dc":function(t,e,n){"use strict";var a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.login=u,e.register=s,e.addressEdit=r,e.addressDel=c,e.addressList=l,e.addressDetail=d,e.addressDefaultSet=f,e.addressDefault=v,e.user=p,e.userinfo=g,e.userEdit=h,e.logout=b,e.couponReceive=w,e.couponReceiveBatch=m,e.couponsUser=x;var i=a(n("e2d1")),o=a(n("2b37"));function u(t){return o.default.urlRequest("/api/login",t)}function s(t){return o.default.urlRequset("/api/register",t)}function r(t){return o.default.urlRequest("/api/address/edit",t)}function c(t){return o.default.urlRequest("/api/address/del",t)}function l(t){return i.default.urlRequest("/api/address/list",t)}function d(t){return i.default.urlRequest("/api/address/detail/"+t)}function f(t){return o.default.urlRequest("/api/address/default/set",t)}function v(t){return i.default.urlRequest("/api/address/default",t)}function p(t){return i.default.urlRequest("/api/user",t)}function g(t){return i.default.urlRequest("/api/userinfo",t)}function h(t){return o.default.urlRequest("/api/user/edit",t)}function b(t){return i.default.urlRequest("/api/logout",t)}function w(t){return o.default.urlRequest("/api/coupon/receive",t)}function m(t){return o.default.urlRequest("/api/coupon/receive/batch",t)}function x(t){return i.default.urlRequest("/api/coupons/user/"+t)}},"8b09":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("uni-nav-bar",{attrs:{fixed:!0,"status-bar":!0}},[n("v-uni-view",{staticClass:"title-box"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(t.title))]),n("v-uni-view",{staticClass:"bottom"},[n("v-uni-view",{staticClass:"box"}),n("v-uni-view",{staticClass:"box"}),n("v-uni-view",{staticClass:"box"})],1)],1),n("v-uni-view",{attrs:{slot:"left"},slot:"left"},[n("v-uni-view",{staticClass:"iconfont iconjiantou-copy icon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click()}}})],1),n("v-uni-view",{attrs:{slot:"right"},slot:"right"})],1)],1)},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return a})},"8e13":function(t,e,n){"use strict";n.r(e);var a=n("e526"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},"9ccb":function(t,e,n){"use strict";var a=n("0ca9"),i=n.n(a);i.a},c801:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("navT",{attrs:{title:"登 录"}}),n("v-uni-view",{staticClass:"content-box"},[n("v-uni-view",{staticClass:"inp-box"},[n("v-uni-image",{staticClass:"icon-img",attrs:{src:"../../static/img/login/account.png",mode:""}}),n("v-uni-input",{staticClass:"inp",attrs:{type:"text",value:"",placeholder:"请输入账号","placeholder-style":"color:#cccccc"},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1),n("v-uni-view",{staticClass:"inp-box"},[n("v-uni-image",{staticClass:"icon-img",attrs:{src:"../../static/img/login/password.png",mode:""}}),n("v-uni-input",{staticClass:"inp",attrs:{type:"password",value:"",placeholder:"请输入密码","placeholder-style":"color:#cccccc"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("v-uni-button",{staticClass:"btn",style:t.btn?"":"background:#bbbbbb",attrs:{disabled:!t.btn},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.login()}}},[t._v("登 录")]),n("v-uni-view",{staticClass:"register",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toRegister.apply(void 0,arguments)}}},[t._v("没有账号？立即注册")])],1)],1)},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return a})},daf9:function(t,e,n){"use strict";n.r(e);var a=n("8b09"),i=n("8e13");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("9ccb");var u,s=n("f0c5"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"3919ef36",null,!1,a["a"],u);e["default"]=r.exports},e526:function(t,e,n){"use strict";var a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("4ed6")),o={components:{uniNavBar:i.default},data:function(){return{}},methods:{click:function(){uni.navigateBack({delta:1})}},props:["title"]};e.default=o},f5c3:function(t,e,n){"use strict";n.r(e);var a=n("c801"),i=n("8645");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("6dc4");var u,s=n("f0c5"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"92431a14",null,!1,a["a"],u);e["default"]=r.exports}}]);