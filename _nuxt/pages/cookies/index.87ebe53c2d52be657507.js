webpackJsonp([8],{Az6U:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("rUij"),i=s("al+f"),n=s("VU/8")(a.a,i.a,!1,null,null,null);e.default=n.exports},"al+f":function(t,e,s){"use strict";var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("page",{attrs:{navbar:"navbar-sm",title:this.post.title}},[e("section",{staticClass:"hero"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container is-desktop"},[e("h1",{staticClass:"title is-2 has-text-centered"},[this._v("\n                    "+this._s(this.post.title)+"\n                ")]),e("article",{staticClass:"is-post",domProps:{innerHTML:this._s(this.post.body)}})])])])])},staticRenderFns:[]};e.a=a},rUij:function(t,e,s){"use strict";var a=s("Xxa5"),i=s.n(a),n=s("exGp"),r=s.n(n),o=s("mtWM"),c=s.n(o);e.a={name:"Cookies",head:function(){return{title:this.post.metaTitle||"SaleTag: Cookie Policy",meta:[{hid:"description",name:"description",content:this.post.metaDescription||""}]}},asyncData:function(){var t=r()(i.a.mark(function t(e){var s,a,n;e.params;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s="https://api.saletag.co.uk/api/v1/getPageData",t.next=4,c.a.post(s,{view:"post",slug:"cookies"});case 4:return a=t.sent,n=a.data,t.abrupt("return",{post:n.post});case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}},t,this,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()}}});