(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{185:function(e,t,r){},198:function(e,t,r){"use strict";var n=r(185);r.n(n).a},213:function(e,t,r){"use strict";r.r(t);r(70),r(23),r(24),r(14),r(52);var n=r(31),c=(r(9),r(3)),o=r(39);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={props:["products"],asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){var r,n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,n={},t.next=4,r.dispatch("auth/fetch");case 4:return c=t.sent,(n=Object.assign({},c)).dob=n.dob||{},n.state=n.state||{},t.abrupt("return",{profile:n});case 9:case"end":return t.stop()}}),t)})))()},data:function(){return{loading:!1,text:"Place order",fadeIn:"",disable:"disable"}},components:{Products:function(){return r.e(0).then(r.bind(null,216))}},computed:d(d({},Object(o.d)({shipping:function(e){return e.shipping||{}},totalAmount:function(e){return e.cart.totalAmount||0},cartItems:function(e){return e.cart.items||[]}})),Object(o.c)({checkCart:"cart/checkCart",getTotal:"cart/getTotal"})),methods:d(d({},Object(o.b)({checkout:"cart/checkout",googleSignIn:"auth/googleSignIn",addToCart:"cart/addToCart"})),{},{placeOrder:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.loading){t.next=2;break}return t.abrupt("return");case 2:if(0!=e.getTotal){t.next=4;break}return t.abrupt("return");case 4:if(e.profile&&""!=e.profile){t.next=7;break}return alert("Phone number required"),t.abrupt("return");case 7:if(e.profile.address&&""!=e.profile.address){t.next=10;break}return alert("Address is mandatory"),t.abrupt("return");case 10:if(e.text="Please Wait. . .",e.fadeIn="fadeIn",e.disable=!0,e.loading=!0,e.profile){t.next=26;break}return t.prev=15,t.next=18,e.googleSignIn();case 18:e.loading=!1,t.next=24;break;case 21:t.prev=21,t.t0=t.catch(15),e.loading=!1;case 24:t.next=27;break;case 26:e.checkout({address:e.profile.address});case 27:case"end":return t.stop()}}),t,null,[[15,21]])})))()}})},h=(r(198),r(30)),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.profile?r("div",[r("div",{staticClass:"img1"},[r("img",{staticClass:"rounded",attrs:{src:e.profile.avatar}})]),e._v(" "),r("div",{staticClass:"card shadow-lg2 columns"},[r("div",{staticClass:"center"},[r("label",{attrs:{for:"login"}}),e._v(" "),e.profile?r("h5",[e._v(e._s(e.profile.name))]):e._e(),e._v(" "),r("h3",[e._v(e._s(e.profile.email))])])])]):e._e()}),[],!1,null,"464f703d",null);t.default=component.exports}}]);