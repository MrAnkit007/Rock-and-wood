(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{186:function(t,r,e){},199:function(t,r,e){"use strict";var n=e(186);e.n(n).a},215:function(t,r,e){"use strict";e.r(r);e(70),e(23),e(24),e(14),e(52);var n=e(31),o=e(39);function c(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}var l={data:function(){return{loading:!1}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(r){Object(n.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}({go:function(t,r){r&&!this.user?this.googleSignIn():this.$router.push(t)}},Object(o.b)({googleSignIn:"auth/googleSignIn"})),computed:{user:function(){return(this.$store.state.auth||{}).user||null}}},v=(e(199),e(30)),component=Object(v.a)(l,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("nav",{staticClass:"navbar header has-shadow is-primary",attrs:{role:"navigation","aria-label":"main navigation"}},[e("div",{staticClass:"headeralign"},[e("div",{staticClass:"navbar-brand"},[e("a",{staticClass:"navbar-item a1"},[e("router-link",{attrs:{to:"/"}},[e("img",{staticClass:"logo",attrs:{src:"/logo.png",alt:"FoodFire",height:"28"}})])],1)]),t._v(" "),e("div",{staticClass:"header-text"},[t._v("Rock and Wood\n\n  ")]),t._v(" "),e("div",{staticClass:"header-right navbar-item fx"},[e("a",{attrs:{role:"button",href:""}},[t._v("\n        ⭐\n      ")]),t._v(" "),e("a",{attrs:{role:"button","aria-label":"menu"}},[t.user?e("img",{attrs:{src:t.user.avatar},on:{click:function(r){return t.go("/my/profile")}}}):e("img",{staticClass:"img",attrs:{src:"/person.svg"},on:{click:function(r){return t.googleSignIn()}}})]),t._v(" "),e("a",{attrs:{role:"button","aria-label":"menu"},on:{click:function(r){return t.go("/cart",!1)}}},[e("img",{attrs:{src:"/bag.svg"}})]),t._v(" "),t.user?e("a",{attrs:{role:"button","aria-label":"menu"},on:{click:function(r){return t.go("/my/orders",!0)}}},[e("img",{attrs:{src:"/orderstatus.svg"}})]):t._e()])])])}),[],!1,null,"4f2a7647",null);r.default=component.exports}}]);