webpackJsonp([2],{"+66z":function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},"+gg+":function(t,e,n){var r=n("TQ3y")["__core-js_shared__"];t.exports=r},"/GnY":function(t,e,n){var r=n("HT7L"),i=n("W529"),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return i(t);var e=[];for(var n in Object(t))a.call(t,n)&&"constructor"!=n&&e.push(n);return e}},"/I3N":function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},"16tV":function(t,e,n){var r=n("tO4o"),i=n("ktak");t.exports=function(t){for(var e=i(t),n=e.length;n--;){var a=e[n],o=t[a];e[n]=[a,o,r(o)]}return e}},"1Yb9":function(t,e,n){var r=n("mgnk"),i=n("UnEC"),a=Object.prototype,o=a.hasOwnProperty,s=a.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(t){return i(t)&&o.call(t,"callee")&&!s.call(t,"callee")};t.exports=c},"22B7":function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},"2AQ/":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"topic"},[n("div",{staticClass:"articles"},[n("div",{staticClass:"page-title"},[n("h1",[t._v(t._s(t.topic.name))]),t.topic.description?n("p",[t._v(t._s(t.topic.description))]):t._e()]),n("ArticleList",{attrs:{articles:t.topicArticles.articles}}),t.topicArticles.infiniteLoading&&t.topicArticles.articles.length>=10?n("InfiniteLoading",{ref:"infiniteLoading",attrs:{"on-infinite":t.moreArticles}}):t._e()],1),n("Sidebar",{attrs:{featuredArticles:t.$store.state.featuredArticles}})],1)};r._withStripped=!0;var i={render:r,staticRenderFns:[]};e.a=i},"2Hvv":function(t,e,n){var r=n("imBK");t.exports=function(t){return r(this.__data__,t)>-1}},"2X2u":function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}},"3Did":function(t,e,n){var r=n("uCi2");t.exports=function(t){return function(e){return r(e,t)}}},"3rbd":function(t,e,n){var r=n("NtoD");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("971dcee0",r,!1)},"5N57":function(t,e,n){var r=n("ICSD")(n("TQ3y"),"Set");t.exports=r},"5Zxu":function(t,e,n){var r=n("sBat");t.exports=function(t){var e=r(t),n=e%1;return e==e?n?e-n:e:0}},"6MiT":function(t,e,n){var r=n("aCM0"),i=n("UnEC"),a="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||i(t)&&r(t)==a}},"7YkW":function(t,e,n){var r=n("YeCl"),i=n("Cskv"),a=n("aQOO");function o(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new r;++e<n;)this.add(t[e])}o.prototype.add=o.prototype.push=i,o.prototype.has=a,t.exports=o},"7e4z":function(t,e,n){var r=n("uieL"),i=n("1Yb9"),a=n("NGEn"),o=n("ggOT"),s=n("ZGh9"),c=n("YsVG"),u=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=a(t),l=!n&&i(t),p=!n&&!l&&o(t),f=!n&&!l&&!p&&c(t),d=n||l||p||f,v=d?r(t.length,String):[],h=v.length;for(var x in t)!e&&!u.call(t,x)||d&&("length"==x||p&&("offset"==x||"parent"==x)||f&&("buffer"==x||"byteLength"==x||"byteOffset"==x)||s(x,h))||v.push(x);return v}},"94sX":function(t,e,n){var r=n("dCZQ");t.exports=function(){this.__data__=r?r(null):{},this.size=0}},"9FJk":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".spinner[data-v-71387d93]{width:40px;height:40px;position:relative;margin:64px auto}.double-bounce1[data-v-71387d93],.double-bounce2[data-v-71387d93]{width:100%;height:100%;border-radius:50%;background-color:#adadad;opacity:.6;position:absolute;top:0;left:0;-webkit-animation:sk-bounce-data-v-71387d93 2s infinite ease-in-out;animation:sk-bounce-data-v-71387d93 2s infinite ease-in-out}.double-bounce2[data-v-71387d93]{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-bounce-data-v-71387d93{0%,to{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes sk-bounce-data-v-71387d93{0%,to{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}.infinite-status-prompt[data-v-71387d93]{color:rgba(51,52,54,.65);font-size:12.8px;font-size:.8rem;font-family:Roboto,sans-serif;margin:64px auto;text-align:center}",""])},A9mX:function(t,e,n){var r=n("pTUa");t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},"Ai/T":function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},C0hh:function(t,e){t.exports=function(){return[]}},CW5P:function(t,e,n){var r=n("T/bE"),i=n("duB3"),a=n("POb3");t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||i),string:new r}}},Cskv:function(t,e){var n="__lodash_hash_undefined__";t.exports=function(t){return this.__data__.set(t,n),this}},Dc0G:function(t,e,n){(function(t){var r=n("blYT"),i="object"==typeof e&&e&&!e.nodeType&&e,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,o=a&&a.exports===i&&r.process,s=function(){try{return o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=s}).call(e,n("3IRH")(t))},Dp9x:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".infinite-status-prompt[data-v-1d6477fd]{position:relative}.infinite-status-prompt svg[data-v-1d6477fd]{display:block;fill:rgba(51,52,54,.45);width:40px;height:40px;position:relative;margin:64px auto}.infinite-status-prompt span[data-v-1d6477fd]{bottom:-26px;color:rgba(51,52,54,.65);font-size:14px;position:absolute;text-align:center;width:100%}",""])},Dv2r:function(t,e,n){var r=n("pTUa");t.exports=function(t,e){var n=r(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this}},E4Hj:function(t,e){t.exports=function(t){return this.__data__.get(t)}},EHRO:function(t,e,n){var r=n("NkRn"),i=n("qwTf"),a=n("22B7"),o=n("FhcP"),s=n("WFiI"),c=n("octw"),u=1,l=2,p="[object Boolean]",f="[object Date]",d="[object Error]",v="[object Map]",h="[object Number]",x="[object RegExp]",m="[object Set]",b="[object String]",g="[object Symbol]",y="[object ArrayBuffer]",_="[object DataView]",w=r?r.prototype:void 0,j=w?w.valueOf:void 0;t.exports=function(t,e,n,r,w,C,k){switch(n){case _:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case y:return!(t.byteLength!=e.byteLength||!C(new i(t),new i(e)));case p:case f:case h:return a(+t,+e);case d:return t.name==e.name&&t.message==e.message;case x:case b:return t==e+"";case v:var z=s;case m:var O=r&u;if(z||(z=c),t.size!=e.size&&!O)return!1;var L=k.get(t);if(L)return L==e;r|=l,k.set(t,e);var T=o(z(t),z(e),r,w,C,k);return k.delete(t),T;case g:if(j)return j.call(t)==j.call(e)}return!1}},"ESj+":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("KSxc"),i=n("2AQ/"),a=!1;var o=function(t){a||n("hYrw")},s=n("VU/8")(r.a,i.a,!1,o,"data-v-0488635c",null);s.options.__file="pages/topics/_topic.vue",e.default=s.exports},FCuZ:function(t,e,n){var r=n("uIr7"),i=n("NGEn");t.exports=function(t,e,n){var a=e(t);return i(t)?a:r(a,n(t))}},FhcP:function(t,e,n){var r=n("7YkW"),i=n("2X2u"),a=n("dmQx"),o=1,s=2;t.exports=function(t,e,n,c,u,l){var p=n&o,f=t.length,d=e.length;if(f!=d&&!(p&&d>f))return!1;var v=l.get(t);if(v&&l.get(e))return v==e;var h=-1,x=!0,m=n&s?new r:void 0;for(l.set(t,e),l.set(e,t);++h<f;){var b=t[h],g=e[h];if(c)var y=p?c(g,b,h,e,t,l):c(b,g,h,t,e,l);if(void 0!==y){if(y)continue;x=!1;break}if(m){if(!i(e,function(t,e){if(!a(m,e)&&(b===t||u(b,t,n,c,l)))return m.push(e)})){x=!1;break}}else if(b!==g&&!u(b,g,n,c,l)){x=!1;break}}return l.delete(t),l.delete(e),x}},G2xm:function(t,e){t.exports=function(t){return this.__data__.has(t)}},HT7L:function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}},HcGE:function(t,e,n){"use strict";var r=n("Jy8Z"),i=!1;var a=function(t){i||n("M7S3")},o=n("VU/8")(null,r.a,!1,a,"data-v-71387d93",null);o.options.__file="components/Spinner1.vue",e.a=o.exports},Hxdr:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}},ICSD:function(t,e,n){var r=n("ITwD"),i=n("mTAn");t.exports=function(t,e){var n=i(t,e);return r(n)?n:void 0}},IGcM:function(t,e,n){var r=n("bIjD"),i=n("1Yb9"),a=n("NGEn"),o=n("ZGh9"),s=n("Rh28"),c=n("Ubhr");t.exports=function(t,e,n){for(var u=-1,l=(e=r(e,t)).length,p=!1;++u<l;){var f=c(e[u]);if(!(p=null!=t&&n(t,f)))break;t=t[f]}return p||++u!=l?p:!!(l=null==t?0:t.length)&&s(l)&&o(f,l)&&(a(t)||i(t))}},ITwD:function(t,e,n){var r=n("gGqR"),i=n("eFps"),a=n("yCNF"),o=n("Ai/T"),s=/^\[object .+?Constructor\]$/,c=Function.prototype,u=Object.prototype,l=c.toString,p=u.hasOwnProperty,f=RegExp("^"+l.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||i(t))&&(r(t)?f:s).test(o(t))}},JBvZ:function(t,e,n){var r=n("imBK");t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},Jy8Z:function(t,e,n){"use strict";var r=function(){var t=this.$createElement;this._self._c;return this._m(0)};r._withStripped=!0;var i={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"spinner"},[e("div",{staticClass:"double-bounce1"}),e("div",{staticClass:"double-bounce2"})])}]};e.a=i},JyYQ:function(t,e,n){var r=n("d+aQ"),i=n("eKBv"),a=n("wSKX"),o=n("NGEn"),s=n("iL3P");t.exports=function(t){return"function"==typeof t?t:null==t?a:"object"==typeof t?o(t)?i(t[0],t[1]):r(t):s(t)}},KSxc:function(t,e,n){"use strict";var r=n("Xxa5"),i=n.n(r),a=n("exGp"),o=n.n(a),s=n("kbi+"),c=n.n(s),u=n("W+1R"),l=n("P8pZ"),p=n("tLe7");e.a={asyncData:function(){var t=o()(i.a.mark(function t(e){var n,r,a,o,s=e.app,u=e.store,l=e.params;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(u.state.featuredArticles.length){t.next=5;break}return t.next=3,s.$axios.get(u.state.wordpressAPI+"/wp/v2/posts?orderby=date&per_page=10&categories="+u.state.featuredID+"&_embed");case 3:n=t.sent,u.commit("setFeaturedArticles",n.data);case 5:if(u.state.topics){t.next=10;break}return t.next=8,s.$axios.get(u.state.wordpressAPI+"/wp/v2/categories?per_page=100");case 8:r=t.sent,u.commit("setTopics",r.data);case 10:if(c()(u.state.topicArticles,{slug:l.topic})){t.next=16;break}return a=c()(u.state.topics,{slug:l.topic}),t.next=14,s.$axios.get(u.state.wordpressAPI+"/wp/v2/posts?orderby=date&per_page=10&categories="+a.id+"&_embed");case 14:o=t.sent,u.commit("setTopicArticles",{slug:l.topic,articles:o.data,infiniteLoading:!0,page:1});case 16:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),components:{ArticleList:u.a,InfiniteLoading:l.a,Sidebar:p.a},computed:{topic:function(){return c()(this.$store.state.topics,{slug:this.$route.params.topic})},topicArticles:function(){return c()(this.$store.state.topicArticles,{slug:this.$route.params.topic})}},head:function(){return{title:this.topic.name+" | "+this.$store.state.meta.name,meta:[{description:this.$store.state.meta.description}]}},methods:{moreArticles:function(){var t=this;this.topicArticles.page++,this.$axios.get(this.$store.state.wordpressAPI+"/wp/v2/posts?orderby=date&per_page=10&categories="+this.topic.id+"&_embed&page="+this.topicArticles.page).then(function(e){t.topicArticles.articles=t.topicArticles.articles.concat(e.data),t.$refs.infiniteLoading.$emit("$InfiniteLoading:loaded")}).catch(function(){t.$refs.infiniteLoading.$emit("$InfiniteLoading:complete")})}}}},KgVm:function(t,e,n){var r=n("cdq7"),i=n("JyYQ"),a=n("5Zxu"),o=Math.max;t.exports=function(t,e,n){var s=null==t?0:t.length;if(!s)return-1;var c=null==n?0:a(n);return c<0&&(c=o(s+c,0)),r(t,i(e,3),c)}},KmWZ:function(t,e,n){var r=n("duB3");t.exports=function(){this.__data__=new r,this.size=0}},LYVu:function(t,e,n){var r=n("ioJO");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("2f3ed16c",r,!1)},"Li/N":function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"infinite-loading-container"},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.isLoading,expression:"isLoading"}]},[this._t("spinner",[e("Spinner1",{staticClass:"spinner-1"})])],2),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.isLoading&&this.isComplete&&this.isFirstLoad,expression:"!isLoading && isComplete && isFirstLoad"}],staticClass:"infinite-status-prompt"},[this._t("no-results",[e("div",[e("svg",{attrs:{fill:"#000000",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),e("path",{attrs:{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"}})]),e("span",[this._v("No more articles!")])])])],2),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.isLoading&&this.isComplete&&!this.isFirstLoad,expression:"!isLoading && isComplete && !isFirstLoad"}],staticClass:"infinite-status-prompt"},[this._t("no-more",[e("div",[e("svg",{attrs:{fill:"#000000",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),e("path",{attrs:{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"}})]),e("span",[this._v("No more articles!")])])])],2)])};r._withStripped=!0;var i={render:r,staticRenderFns:[]};e.a=i},M7S3:function(t,e,n){var r=n("9FJk");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("56f22472",r,!1)},MoMe:function(t,e,n){var r=n("FCuZ"),i=n("l9Lx"),a=n("ktak");t.exports=function(t){return r(t,a,i)}},NGEn:function(t,e){var n=Array.isArray;t.exports=n},NkRn:function(t,e,n){var r=n("TQ3y").Symbol;t.exports=r},NqZt:function(t,e){t.exports=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}},NtoD:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,'.article-list article+article[data-v-0994aea9]{border-top:1px dotted #65676a;margin-top:32px;padding-top:32px}.article-list .row[data-v-0994aea9]{display:-webkit-box;display:-ms-flexbox;display:flex}.article-list .row+.row[data-v-0994aea9]{margin-top:16px}.article-list .row .col[data-v-0994aea9]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.article-list .date[data-v-0994aea9]{font-family:Roboto,sans-serif;font-size:12px;font-size:.75rem;font-weight:400;margin-bottom:12px;text-transform:uppercase}.article-list .date .topic+.topic[data-v-0994aea9]{margin-left:8px}.article-list .date .topic+.topic[data-v-0994aea9]:before{content:", ";color:#333436;left:-7px;position:absolute}.article-list .date a[data-v-0994aea9]:hover{color:#384d66}.article-list h2[data-v-0994aea9]{color:#111;font-size:19.2px;font-size:1.2rem;margin-bottom:8px;margin-top:-6px}@media (max-width:500px){.article-list .excerpt[data-v-0994aea9]{display:none}}.article-list .lazy[data-v-0994aea9]{margin:0 22px 0 0}.article-list .lazy img[data-v-0994aea9]{display:block;height:144px;width:144px}@media (max-width:1200px){.article-list .lazy img[data-v-0994aea9]{height:96px;width:96px}}@media (max-width:500px){.article-list .lazy img[data-v-0994aea9]{height:64px;width:64px}}.article-list a[data-v-0994aea9]{color:#333436;-webkit-transition:.2s;transition:.2s;text-decoration:none}.article-list a[data-v-0994aea9]:hover{color:#000;-webkit-transform:translateX(4px);transform:translateX(4px)}.article-list p[data-v-0994aea9]{margin:0}',""])},P8pZ:function(t,e,n){"use strict";var r=n("fKce"),i=n("Li/N"),a=!1;var o=function(t){a||n("RJXg")},s=n("VU/8")(r.a,i.a,!1,o,"data-v-1d6477fd",null);s.options.__file="components/InfiniteLoading.vue",e.a=s.exports},POb3:function(t,e,n){var r=n("ICSD")(n("TQ3y"),"Map");t.exports=r},Pw45:function(t,e,n){"use strict";e.a={props:{articles:Array},mixins:{shortTimestamp:Function}}},Q7hp:function(t,e,n){var r=n("uCi2");t.exports=function(t,e,n){var i=null==t?void 0:r(t,e);return void 0===i?n:i}},RGrk:function(t,e,n){var r=n("dCZQ"),i=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:i.call(e,t)}},RJXg:function(t,e,n){var r=n("Dp9x");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("a3311c2a",r,!1)},RfZv:function(t,e,n){var r=n("SOZo"),i=n("IGcM");t.exports=function(t,e){return null!=t&&i(t,e,r)}},Rh28:function(t,e){var n=9007199254740991;t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}},S7p9:function(t,e){t.exports=function(t){return function(e){return t(e)}}},SGvv:function(t,e,n){"use strict";e.a={props:{featuredArticles:Array},mixins:{shortTimestamp:Function},methods:{featuredImage:function(t){var e=t._embedded["wp:featuredmedia"];if(e)return e[0].media_details.sizes.medium||!1}}}},SHWz:function(t,e,n){var r=n("MoMe"),i=1,a=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,o,s,c){var u=n&i,l=r(t),p=l.length;if(p!=r(e).length&&!u)return!1;for(var f=p;f--;){var d=l[f];if(!(u?d in e:a.call(e,d)))return!1}var v=c.get(t);if(v&&c.get(e))return v==e;var h=!0;c.set(t,e),c.set(e,t);for(var x=u;++f<p;){var m=t[d=l[f]],b=e[d];if(o)var g=u?o(b,m,d,e,t,c):o(m,b,d,t,e,c);if(!(void 0===g?m===b||s(m,b,n,o,c):g)){h=!1;break}x||(x="constructor"==d)}if(h&&!x){var y=t.constructor,_=e.constructor;y!=_&&"constructor"in t&&"constructor"in e&&!("function"==typeof y&&y instanceof y&&"function"==typeof _&&_ instanceof _)&&(h=!1)}return c.delete(t),c.delete(e),h}},SOZo:function(t,e){t.exports=function(t,e){return null!=t&&e in Object(t)}},SRt1:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,'aside[data-v-472a545e]{min-width:360px;-webkit-box-flex:1;-ms-flex:1;flex:1}@media (max-width:1000px){aside[data-v-472a545e]{display:none}}aside .inner-container[data-v-472a545e]{background-color:#fff;padding:32px}aside .inner-container h1[data-v-472a545e]{margin-top:0}aside .inner-container article div[data-v-472a545e]{font-weight:300}aside .inner-container article+article[data-v-472a545e]{border-top:1px dotted #65676a;margin-top:32px;padding-top:32px}aside .inner-container article .image[data-v-472a545e]{position:relative}aside .inner-container article .image .featured[data-v-472a545e]{overflow:hidden}aside .inner-container article .image .featured[data-v-472a545e]:before{background-color:transparent;content:"";height:100%;position:absolute;top:0;-webkit-transition:.4s;transition:.4s;width:100%;z-index:1}aside .inner-container article .image .featured img[data-v-472a545e]{-webkit-transition:.4s;transition:.4s}aside .inner-container article .image:hover .featured[data-v-472a545e]:before{background-color:rgba(0,0,0,.25)}aside .inner-container article .image:hover .featured img[data-v-472a545e]{-webkit-transform:scale(1.0125);transform:scale(1.0125)}aside .inner-container article .featured[data-v-472a545e]{background-position:50%;margin-bottom:12px}aside .inner-container article .featured img[data-v-472a545e]{position:absolute;top:0}aside .inner-container article .content[data-v-472a545e]{-webkit-transition:.2s;transition:.2s}aside .inner-container article .content .article[data-v-472a545e]{display:block;-webkit-transition:.2s;transition:.2s}aside .inner-container article .content .article[data-v-472a545e]:hover{-webkit-transform:translateX(4px);transform:translateX(4px)}aside .inner-container article .content .article:hover .excerpt[data-v-472a545e]{color:#000}aside .inner-container article .meta[data-v-472a545e]{font-family:Roboto,sans-serif;font-size:12px;font-size:.75rem;font-weight:400;margin-bottom:12px;text-transform:uppercase}aside .inner-container article .meta .topic+.topic[data-v-472a545e]{margin-left:8px}aside .inner-container article .meta .topic+.topic[data-v-472a545e]:before{content:", ";color:#333436;left:-7px;position:absolute}aside .inner-container article .meta a[data-v-472a545e]:hover{color:#384d66}aside .inner-container article h2[data-v-472a545e]{margin:12px 0}aside .inner-container article .content p[data-v-472a545e]{margin:0}',""])},"T/bE":function(t,e,n){var r=n("94sX"),i=n("ue/d"),a=n("eVIm"),o=n("RGrk"),s=n("Z2pD");function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=a,c.prototype.has=o,c.prototype.set=s,t.exports=c},TQ3y:function(t,e,n){var r=n("blYT"),i="object"==typeof self&&self&&self.Object===Object&&self,a=r||i||Function("return this")();t.exports=a},Ubhr:function(t,e,n){var r=n("6MiT"),i=1/0;t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-i?"-0":e}},UnEC:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},UnLw:function(t,e,n){var r=/^\./,i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,o=n("fMqj")(function(t){var e=[];return r.test(t)&&e.push(""),t.replace(i,function(t,n,r,i){e.push(r?i.replace(a,"$1"):n||t)}),e});t.exports=o},Uz1a:function(t,e,n){var r=n("bJWQ"),i=n("FhcP"),a=n("EHRO"),o=n("SHWz"),s=n("gHOb"),c=n("NGEn"),u=n("ggOT"),l=n("YsVG"),p=1,f="[object Arguments]",d="[object Array]",v="[object Object]",h=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,x,m,b){var g=c(t),y=c(e),_=g?d:s(t),w=y?d:s(e),j=(_=_==f?v:_)==v,C=(w=w==f?v:w)==v,k=_==w;if(k&&u(t)){if(!u(e))return!1;g=!0,j=!1}if(k&&!j)return b||(b=new r),g||l(t)?i(t,e,n,x,m,b):a(t,e,_,n,x,m,b);if(!(n&p)){var z=j&&h.call(t,"__wrapped__"),O=C&&h.call(e,"__wrapped__");if(z||O){var L=z?t.value():t,T=O?e.value():e;return b||(b=new r),m(L,T,n,x,b)}}return!!k&&(b||(b=new r),o(t,e,n,x,m,b))}},"W+1R":function(t,e,n){"use strict";var r=n("Pw45"),i=n("ozsG"),a=!1;var o=function(t){a||(n("3rbd"),n("LYVu"))},s=n("VU/8")(r.a,i.a,!1,o,"data-v-0994aea9",null);s.options.__file="components/ArticleList.vue",e.a=s.exports},W529:function(t,e,n){var r=n("f931")(Object.keys,Object);t.exports=r},WFiI:function(t,e){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}},WxI4:function(t,e){t.exports=function(){this.__data__=[],this.size=0}},YDHx:function(t,e,n){var r=n("Uz1a"),i=n("UnEC");t.exports=function t(e,n,a,o,s){return e===n||(null==e||null==n||!i(e)&&!i(n)?e!=e&&n!=n:r(e,n,a,o,t,s))}},YeCl:function(t,e,n){var r=n("CW5P"),i=n("A9mX"),a=n("v8Dt"),o=n("agim"),s=n("Dv2r");function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=a,c.prototype.has=o,c.prototype.set=s,t.exports=c},YsVG:function(t,e,n){var r=n("z4hc"),i=n("S7p9"),a=n("Dc0G"),o=a&&a.isTypedArray,s=o?i(o):r;t.exports=s},Z2pD:function(t,e,n){var r=n("dCZQ"),i="__lodash_hash_undefined__";t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?i:e,this}},ZGh9:function(t,e){var n=9007199254740991,r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){return!!(e=null==e?n:e)&&("number"==typeof t||r.test(t))&&t>-1&&t%1==0&&t<e}},ZT2e:function(t,e,n){var r=n("o2mx");t.exports=function(t){return null==t?"":r(t)}},aCM0:function(t,e,n){var r=n("NkRn"),i=n("uLhX"),a=n("+66z"),o="[object Null]",s="[object Undefined]",c=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?s:o:c&&c in Object(t)?i(t):a(t)}},aQOO:function(t,e){t.exports=function(t){return this.__data__.has(t)}},agim:function(t,e,n){var r=n("pTUa");t.exports=function(t){return r(this,t).has(t)}},bGc4:function(t,e,n){var r=n("gGqR"),i=n("Rh28");t.exports=function(t){return null!=t&&i(t.length)&&!r(t)}},bIbi:function(t,e,n){var r=n("ICSD")(n("TQ3y"),"WeakMap");t.exports=r},bIjD:function(t,e,n){var r=n("NGEn"),i=n("hIPy"),a=n("UnLw"),o=n("ZT2e");t.exports=function(t,e){return r(t)?t:i(t,e)?[t]:a(o(t))}},bJWQ:function(t,e,n){var r=n("duB3"),i=n("KmWZ"),a=n("NqZt"),o=n("E4Hj"),s=n("G2xm"),c=n("zpVT");function u(t){var e=this.__data__=new r(t);this.size=e.size}u.prototype.clear=i,u.prototype.delete=a,u.prototype.get=o,u.prototype.has=s,u.prototype.set=c,t.exports=u},bO0Y:function(t,e,n){var r=n("ICSD")(n("TQ3y"),"Promise");t.exports=r},blYT:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,n("DuR2"))},cdq7:function(t,e){t.exports=function(t,e,n,r){for(var i=t.length,a=n+(r?1:-1);r?a--:++a<i;)if(e(t[a],a,t))return a;return-1}},"d+aQ":function(t,e,n){var r=n("hbAh"),i=n("16tV"),a=n("sJvV");t.exports=function(t){var e=i(t);return 1==e.length&&e[0][2]?a(e[0][0],e[0][1]):function(n){return n===t||r(n,t,e)}}},d4US:function(t,e,n){var r=n("ICSD")(n("TQ3y"),"DataView");t.exports=r},dCZQ:function(t,e,n){var r=n("ICSD")(Object,"create");t.exports=r},dFpP:function(t,e,n){var r=n("imBK"),i=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0||(n==e.length-1?e.pop():i.call(e,n,1),--this.size,0))}},deUO:function(t,e,n){var r=n("imBK");t.exports=function(t,e){var n=this.__data__,i=r(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this}},dmQx:function(t,e){t.exports=function(t,e){return t.has(e)}},duB3:function(t,e,n){var r=n("WxI4"),i=n("dFpP"),a=n("JBvZ"),o=n("2Hvv"),s=n("deUO");function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=a,c.prototype.has=o,c.prototype.set=s,t.exports=c},eFps:function(t,e,n){var r,i=n("+gg+"),a=(r=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!a&&a in t}},"eG8/":function(t,e){t.exports=function(t){return function(e){return null==e?void 0:e[t]}}},eHwr:function(t,e,n){var r=n("JyYQ"),i=n("bGc4"),a=n("ktak");t.exports=function(t){return function(e,n,o){var s=Object(e);if(!i(e)){var c=r(n,3);e=a(e),n=function(t){return c(s[t],t,s)}}var u=t(e,n,o);return u>-1?s[c?e[u]:u]:void 0}}},eKBv:function(t,e,n){var r=n("YDHx"),i=n("Q7hp"),a=n("RfZv"),o=n("hIPy"),s=n("tO4o"),c=n("sJvV"),u=n("Ubhr"),l=1,p=2;t.exports=function(t,e){return o(t)&&s(e)?c(u(t),e):function(n){var o=i(n,t);return void 0===o&&o===e?a(n,t):r(e,o,l|p)}}},eVIm:function(t,e,n){var r=n("dCZQ"),i="__lodash_hash_undefined__",a=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return n===i?void 0:n}return a.call(e,t)?e[t]:void 0}},f931:function(t,e){t.exports=function(t,e){return function(n){return t(e(n))}}},fKce:function(t,e,n){"use strict";var r=n("HcGE");e.a={components:{Spinner1:r.a},data:function(){return{scrollParent:null,scrollHandler:null,isLoading:!1,isComplete:!1,isFirstLoad:!0}},props:{distance:{type:Number,default:100},onInfinite:Function,spinner:String,direction:{type:String,default:"bottom"}},mounted:function(){var t=this;this.scrollParent=function t(e){return"BODY"===e.tagName?window:["scroll","auto"].indexOf(getComputedStyle(e).overflowY)>-1?e:e.hasAttribute("infinite-wrapper")||e.hasAttribute("data-infinite-wrapper")?e:t(e.parentNode)}(this.$el),this.scrollHandler=function(){this.isLoading||this.attemptLoad()}.bind(this),setTimeout(this.scrollHandler,1),this.scrollParent.addEventListener("scroll",this.scrollHandler),this.$on("$InfiniteLoading:loaded",function(){t.isFirstLoad=!1,t.isLoading&&t.$nextTick(t.attemptLoad)}),this.$on("$InfiniteLoading:complete",function(){t.isLoading=!1,t.isComplete=!0,t.scrollParent.removeEventListener("scroll",t.scrollHandler)}),this.$on("$InfiniteLoading:reset",function(){t.isLoading=!1,t.isComplete=!1,t.isFirstLoad=!0,t.scrollParent.addEventListener("scroll",t.scrollHandler),setTimeout(t.scrollHandler,1)})},deactivated:function(){this.isLoading=!1,this.scrollParent.removeEventListener("scroll",this.scrollHandler)},activated:function(){this.scrollParent.addEventListener("scroll",this.scrollHandler)},methods:{attemptLoad:function(){var t,e,n=(t=this.scrollParent,e=this.$el,"top"===this.direction?isNaN(t.scrollTop)?t.pageYOffset:t.scrollTop:e.getBoundingClientRect().top-(t===window?window.innerHeight:t.getBoundingClientRect().bottom));!this.isComplete&&n<=this.distance?(this.isLoading=!0,this.onInfinite.call()):this.isLoading=!1}},destroyed:function(){this.isComplete||this.scrollParent.removeEventListener("scroll",this.scrollHandler)}}},fMqj:function(t,e,n){var r=n("zGZ6"),i=500;t.exports=function(t){var e=r(t,function(t){return n.size===i&&n.clear(),t}),n=e.cache;return e}},gGqR:function(t,e,n){var r=n("aCM0"),i=n("yCNF"),a="[object AsyncFunction]",o="[object Function]",s="[object GeneratorFunction]",c="[object Proxy]";t.exports=function(t){if(!i(t))return!1;var e=r(t);return e==o||e==s||e==a||e==c}},gHOb:function(t,e,n){var r=n("d4US"),i=n("POb3"),a=n("bO0Y"),o=n("5N57"),s=n("bIbi"),c=n("aCM0"),u=n("Ai/T"),l="[object Promise]",p="[object WeakMap]",f="[object DataView]",d=u(r),v=u(i),h=u(a),x=u(o),m=u(s),b=c;(r&&b(new r(new ArrayBuffer(1)))!=f||i&&"[object Map]"!=b(new i)||a&&b(a.resolve())!=l||o&&"[object Set]"!=b(new o)||s&&b(new s)!=p)&&(b=function(t){var e=c(t),n="[object Object]"==e?t.constructor:void 0,r=n?u(n):"";if(r)switch(r){case d:return f;case v:return"[object Map]";case h:return l;case x:return"[object Set]";case m:return p}return e}),t.exports=b},ggOT:function(t,e,n){(function(t){var r=n("TQ3y"),i=n("gwcX"),a="object"==typeof e&&e&&!e.nodeType&&e,o=a&&"object"==typeof t&&t&&!t.nodeType&&t,s=o&&o.exports===a?r.Buffer:void 0,c=(s?s.isBuffer:void 0)||i;t.exports=c}).call(e,n("3IRH")(t))},gwcX:function(t,e){t.exports=function(){return!1}},hIPy:function(t,e,n){var r=n("NGEn"),i=n("6MiT"),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o=/^\w*$/;t.exports=function(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!i(t))||o.test(t)||!a.test(t)||null!=e&&t in Object(e)}},hYrw:function(t,e,n){var r=n("kew9");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("4c05d53d",r,!1)},hbAh:function(t,e,n){var r=n("bJWQ"),i=n("YDHx"),a=1,o=2;t.exports=function(t,e,n,s){var c=n.length,u=c,l=!s;if(null==t)return!u;for(t=Object(t);c--;){var p=n[c];if(l&&p[2]?p[1]!==t[p[0]]:!(p[0]in t))return!1}for(;++c<u;){var f=(p=n[c])[0],d=t[f],v=p[1];if(l&&p[2]){if(void 0===d&&!(f in t))return!1}else{var h=new r;if(s)var x=s(d,v,f,t,e,h);if(!(void 0===x?i(v,d,a|o,s,h):x))return!1}}return!0}},iL3P:function(t,e,n){var r=n("eG8/"),i=n("3Did"),a=n("hIPy"),o=n("Ubhr");t.exports=function(t){return a(t)?r(o(t)):i(t)}},imBK:function(t,e,n){var r=n("22B7");t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},ioJO:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".article-list article .excerpt{font-weight:300}",""])},"kbi+":function(t,e,n){var r=n("eHwr")(n("KgVm"));t.exports=r},kew9:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".topic[data-v-0488635c]{display:-webkit-box;display:-ms-flexbox;display:flex}.topic .articles[data-v-0488635c]{background-color:#efefef;padding:0 32px;max-width:900px;width:100%}@media (max-width:1000px){.topic .articles[data-v-0488635c]{max-width:none}}@media (max-width:700px){.topic .articles[data-v-0488635c]{padding:0 16px}}.topic .articles .article-list[data-v-0488635c]{margin:32px 0}",""])},ktak:function(t,e,n){var r=n("7e4z"),i=n("/GnY"),a=n("bGc4");t.exports=function(t){return a(t)?r(t):i(t)}},kxzG:function(t,e,n){var r=n("yCNF"),i=n("6MiT"),a=NaN,o=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return a;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=c.test(t);return n||u.test(t)?l(t.slice(2),n?2:8):s.test(t)?a:+t}},l9Lx:function(t,e,n){var r=n("lb6C"),i=n("C0hh"),a=Object.prototype.propertyIsEnumerable,o=Object.getOwnPropertySymbols,s=o?function(t){return null==t?[]:(t=Object(t),r(o(t),function(e){return a.call(t,e)}))}:i;t.exports=s},lb6C:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,i=0,a=[];++n<r;){var o=t[n];e(o,n,t)&&(a[i++]=o)}return a}},mTAn:function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},mgnk:function(t,e,n){var r=n("aCM0"),i=n("UnEC"),a="[object Arguments]";t.exports=function(t){return i(t)&&r(t)==a}},o2mx:function(t,e,n){var r=n("NkRn"),i=n("Hxdr"),a=n("NGEn"),o=n("6MiT"),s=1/0,c=r?r.prototype:void 0,u=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(a(e))return i(e,t)+"";if(o(e))return u?u.call(e):"";var n=e+"";return"0"==n&&1/e==-s?"-0":n}},octw:function(t,e){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}},ozsG:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-list"},t._l(t.articles,function(e){return n("article",{key:e.id},[n("div",{staticClass:"date"},[n("span",{domProps:{innerHTML:t._s(t.shortTimestamp(e.date))}}),t._v("\n       – \n      "),n("span",{staticClass:"topics"},t._l(e._embedded["wp:term"][0],function(e){return n("nuxt-link",{key:e.id,staticClass:"topic fancy",attrs:{to:"/topics/"+e.slug},domProps:{innerHTML:t._s(e.name)}})}))]),n("nuxt-link",{staticClass:"row",attrs:{to:"/"+e.slug}},[n("div",{staticClass:"col"},[e._embedded["wp:featuredmedia"]?n("div",{staticClass:"lazy"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url,expression:"article._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url"}]})]):t._e()]),n("div",{staticClass:"col"},[n("h2",{domProps:{innerHTML:t._s(e.title.rendered)}}),n("div",{staticClass:"excerpt",domProps:{innerHTML:t._s(e.excerpt.rendered)}})])])],1)}))};r._withStripped=!0;var i={render:r,staticRenderFns:[]};e.a=i},pTUa:function(t,e,n){var r=n("/I3N");t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},qwTf:function(t,e,n){var r=n("TQ3y").Uint8Array;t.exports=r},sBat:function(t,e,n){var r=n("kxzG"),i=1/0,a=1.7976931348623157e308;t.exports=function(t){return t?(t=r(t))===i||t===-i?(t<0?-1:1)*a:t==t?t:0:0===t?t:0}},sJvV:function(t,e){t.exports=function(t,e){return function(n){return null!=n&&n[t]===e&&(void 0!==e||t in Object(n))}}},tLe7:function(t,e,n){"use strict";var r=n("SGvv"),i=n("wxSD"),a=!1;var o=function(t){a||n("tzl7")},s=n("VU/8")(r.a,i.a,!1,o,"data-v-472a545e",null);s.options.__file="components/Sidebar.vue",e.a=s.exports},tO4o:function(t,e,n){var r=n("yCNF");t.exports=function(t){return t==t&&!r(t)}},tzl7:function(t,e,n){var r=n("SRt1");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("2463f8ee",r,!1)},uCi2:function(t,e,n){var r=n("bIjD"),i=n("Ubhr");t.exports=function(t,e){for(var n=0,a=(e=r(e,t)).length;null!=t&&n<a;)t=t[i(e[n++])];return n&&n==a?t:void 0}},uIr7:function(t,e){t.exports=function(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}},uLhX:function(t,e,n){var r=n("NkRn"),i=Object.prototype,a=i.hasOwnProperty,o=i.toString,s=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(t){}var i=o.call(t);return r&&(e?t[s]=n:delete t[s]),i}},"ue/d":function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},uieL:function(t,e){t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},v8Dt:function(t,e,n){var r=n("pTUa");t.exports=function(t){return r(this,t).get(t)}},wSKX:function(t,e){t.exports=function(t){return t}},wxSD:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",[n("div",{staticClass:"inner-container"},[n("h1",[t._v("Top Articles")]),t._l(t.featuredArticles,function(e){return n("article",{key:e.id},[e._embedded["wp:featuredmedia"]?n("nuxt-link",{staticClass:"image",attrs:{to:"/"+e.slug}},[t.featuredImage(e)?n("div",{staticClass:"featured lazy"},[n("div",{staticClass:"image-height",style:{paddingTop:t.featuredImage(e).height/t.featuredImage(e).width*100+"%"}}),n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.featuredImage(e).source_url,expression:"featuredImage(article).source_url"}]})]):t._e()]):t._e(),n("div",{staticClass:"content"},[n("div",{staticClass:"meta"},[n("span",{domProps:{innerHTML:t._s(t.shortTimestamp(e.date))}}),t._v(" – "),t._l(e._embedded["wp:term"][0],function(e){return e.id!==t.$store.state.featuredID?n("nuxt-link",{key:e.id,staticClass:"topic fancy",attrs:{to:"/topics/"+e.slug},domProps:{innerHTML:t._s(e.name)}}):t._e()})],2),n("nuxt-link",{staticClass:"article",attrs:{to:"/"+e.slug}},[n("h2",{domProps:{innerHTML:t._s(e.title.rendered)}}),n("div",{staticClass:"excerpt",domProps:{innerHTML:t._s(e.excerpt.rendered)}})])],1)],1)})],2)])};r._withStripped=!0;var i={render:r,staticRenderFns:[]};e.a=i},yCNF:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},z4hc:function(t,e,n){var r=n("aCM0"),i=n("Rh28"),a=n("UnEC"),o={};o["[object Float32Array]"]=o["[object Float64Array]"]=o["[object Int8Array]"]=o["[object Int16Array]"]=o["[object Int32Array]"]=o["[object Uint8Array]"]=o["[object Uint8ClampedArray]"]=o["[object Uint16Array]"]=o["[object Uint32Array]"]=!0,o["[object Arguments]"]=o["[object Array]"]=o["[object ArrayBuffer]"]=o["[object Boolean]"]=o["[object DataView]"]=o["[object Date]"]=o["[object Error]"]=o["[object Function]"]=o["[object Map]"]=o["[object Number]"]=o["[object Object]"]=o["[object RegExp]"]=o["[object Set]"]=o["[object String]"]=o["[object WeakMap]"]=!1,t.exports=function(t){return a(t)&&i(t.length)&&!!o[r(t)]}},zGZ6:function(t,e,n){var r=n("YeCl"),i="Expected a function";function a(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(i);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=t.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(a.Cache||r),n}a.Cache=r,t.exports=a},zpVT:function(t,e,n){var r=n("duB3"),i=n("POb3"),a=n("YeCl"),o=200;t.exports=function(t,e){var n=this.__data__;if(n instanceof r){var s=n.__data__;if(!i||s.length<o-1)return s.push([t,e]),this.size=++n.size,this;n=this.__data__=new a(s)}return n.set(t,e),this.size=n.size,this}}});