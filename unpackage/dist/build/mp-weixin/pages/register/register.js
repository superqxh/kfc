(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"01f1":function(t,n,e){"use strict";var o=e("efb5"),r=e.n(o);r.a},1633:function(t,n,e){"use strict";var o,r=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"b",function(){return r}),e.d(n,"c",function(){return c}),e.d(n,"a",function(){return o})},"3b6b":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("88dc"),r=e("2f62");function c(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){u(t,n,e[n])})}return t}function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var i=function(){return e.e("components/nav/nav").then(e.bind(null,"daf9"))},s={components:{navT:i},data:function(){return{confirm:"",account:"",password:""}},methods:c({},(0,r.mapMutations)(["changName"]),{toLogin:function(){t.redirectTo({url:"../login/login"})},show:function(n){t.showModal({content:n})},testPhone:function(){var t=/^[1][3,4,5,7,8][0-9]{9}$/;return!!t.test(this.account)||(this.show("请输入正确的手机号"),!1)},testPassword:function(){return this.password.length>=6||(this.show("密码格式有问题"),!1)},testConfirm:function(){return this.password===this.confirm||(this.show("两次输入的密码不一致"),!1)},register:function(){if(this.testPhone()&&this.testPassword()&&this.testConfirm()){var t={account:this.account,captche:"123456",password:this.password,spread:null};(0,o.register)(t).then(function(t){console.log(t)})}else console.log(0)}}),computed:c({btn:function(){return""!=this.accoun&&""!=this.password&&""!=this.confirm}},(0,r.mapState)(["name"]))};n.default=s}).call(this,e("543d")["default"])},"49c7":function(t,n,e){"use strict";e.r(n);var o=e("1633"),r=e("4a09");for(var c in r)"default"!==c&&function(t){e.d(n,t,function(){return r[t]})}(c);e("01f1");var u,i=e("f0c5"),s=Object(i["a"])(r["default"],o["b"],o["c"],!1,null,"0783d4e2",null,!1,o["a"],u);n["default"]=s.exports},"4a09":function(t,n,e){"use strict";e.r(n);var o=e("3b6b"),r=e.n(o);for(var c in o)"default"!==c&&function(t){e.d(n,t,function(){return o[t]})}(c);n["default"]=r.a},d897:function(t,n,e){"use strict";(function(t){e("1ae8"),e("921b");o(e("66fd"));var n=o(e("49c7"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},efb5:function(t,n,e){}},[["d897","common/runtime","common/vendor"]]]);