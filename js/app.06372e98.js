(function(t){function e(e){for(var r,o,l=e[0],i=e[1],c=e[2],v=0,f=[];v<l.length;v++)o=l[v],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,l=1;l<a.length;l++){var i=a[l];0!==n[i]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},s=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/billiard-score-board-online/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=i;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("8a23"),n=a.n(r);n.a},4580:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],o=(a("034f"),a("2877")),l={},i=Object(o["a"])(l,n,s,!1,null,null,null),c=i.exports,u=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("h1",[t._v("This is an main menu page")]),a("p",[a("router-link",{attrs:{to:"/survival_game"}},[t._v("간편 경기(서바이벌)")])],1),a("p",[a("router-link",{attrs:{to:"/vuetify_example"}},[t._v("Vuetify Example")])],1),a("p",[a("router-link",{attrs:{to:"/vuetify_test"}},[t._v("Vuetify Test 하는 페이지")])],1)])},f=[],p={},m=Object(o["a"])(p,v,f,!1,null,null,null),d=m.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-container",{staticClass:"grey lighten-5 _container"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"5"}},[a("Player",{attrs:{player:t.players[0]},on:{score:t.onScore}})],1),a("v-col",{attrs:{cols:"2"}},[a("v-card",{staticClass:"pa-2 _timer-panel",attrs:{outlined:"",tile:""}},[t._v("타이머")])],1),a("v-col",{attrs:{cols:"5"}},[a("Player",{attrs:{player:t.players[1]},on:{score:t.onScore}})],1)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"5"}},[a("Player",{attrs:{player:t.players[2]},on:{score:t.onScore}})],1),a("v-col",{attrs:{cols:"2"}},[a("v-card",{staticClass:"pa-2 _control-panel",attrs:{outlined:"",tile:""}},[a("v-btn",{attrs:{color:"success",dark:"",large:""},on:{click:t.nextTurn}},[t._v("턴 넘기기")])],1)],1),a("v-col",{attrs:{cols:"5"}},[a("Player",{attrs:{player:t.players[3]},on:{score:t.onScore}})],1)],1)],1)],1)},h=[],b=(a("4de4"),a("c740"),a("4160"),a("b0c0"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"pa-2 _user-panel",class:{_active:t.player.turnOn},attrs:{outlined:"",tile:""}},[a("v-list-item",[a("v-list-item-avatar",{attrs:{color:"gray"}}),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(t.player.name))])],1),t.player.live&&t.player.turnOn?a("v-list-item-avatar",{attrs:{color:t.player.ballColor}}):t._e()],1),a("v-card-text",{staticClass:"_current-score"},[a("span",[t._v(t._s(t.player.live?t.currentScore:"다이"))])]),a("v-card-actions",[a("v-row",[a("v-col",{attrs:{cols:"7"}},[a("div",[a("v-btn",{attrs:{small:"",outlined:"",color:"pink"},on:{click:function(e){return t.increaseScore(1)}}},[t._v("+1")]),a("v-btn",{attrs:{small:"",outlined:"",color:"pink"},on:{click:function(e){return t.increaseScore(2)}}},[t._v("+2")]),a("v-btn",{attrs:{small:"",outlined:"",color:"pink"},on:{click:function(e){return t.increaseScore(3)}}},[t._v("+3")])],1)]),a("v-col",{staticStyle:{"font-size":"9pt"},attrs:{cols:"5"}},[a("div",[t._v(" 이닝 : "),a("span",[t._v(t._s(t.player.hr))]),t._v(" / 득점 : "),a("span",[t._v(t._s(t.player.getScore))])]),a("div",[t._v(" 에버리지 : "),a("span",[t._v(t._s(t.player.hr?(t.player.getScore/t.player.hr).toFixed(2):0))])])])],1)],1)],1)}),_=[],g={name:"Player",props:{player:{type:Object,default:null}},data:function(){return{}},computed:{currentScore:function(){return this.player.score}},methods:{increaseScore:function(t){this.$emit("score",this.player.name,t)}}},x=g,C=(a("9eb1"),a("6544")),w=a.n(C),k=a("8336"),V=a("b0af"),j=a("99d9"),O=a("62ad"),S=a("da13"),P=a("8270"),E=a("5d23"),L=a("0fd9"),B=Object(o["a"])(x,b,_,!1,null,"9a005c20",null),I=B.exports;w()(B,{VBtn:k["a"],VCard:V["a"],VCardActions:j["a"],VCardText:j["b"],VCol:O["a"],VListItem:S["a"],VListItemAvatar:P["a"],VListItemContent:E["a"],VListItemTitle:E["b"],VRow:L["a"]});var T={name:"score",components:{Player:I},data:function(){return{players:[{live:!0,turnOn:!0,name:"이범희",score:20,getScore:0,avatarUrl:"",ballColor:"yellow",hr:0},{live:!0,turnOn:!1,name:"허석",score:30,getScore:0,avatarUrl:"",ballColor:"white",hr:0},{live:!0,turnOn:!1,name:"이상원",score:30,getScore:0,avatarUrl:"",ballColor:"white",hr:0},{live:!0,turnOn:!1,name:"임정인",score:20,getScore:0,avatarUrl:"",ballColor:"white",hr:0}]}},methods:{getLivePlayers:function(){return this.players.filter((function(t){return t.live}))},onScore:function(t,e){var a=this.getLivePlayers(),r=a.filter((function(e){return e.name===t}))[0];if(r.live&&r.turnOn){var n=a.filter((function(e){return e.name!==t}));if(0!==n.length){var s=0;n.forEach((function(t){var a=e;t.score<e&&(a=Math.abs(t.score)),t.score-=a,s+=a})),r.score+=s,r.getScore+=e,n.forEach((function(t){0===t.score&&(t.live=!1,t.turnOn=!1)}))}}else alert(r.name+"님의 턴이 아닙니다.")},nextTurn:function(){var t=this.getLivePlayers(),e=t.findIndex((function(t){return t.turnOn})),a=(e+1)%t.length;t[e].turnOn=!1,t[e].hr+=1,t[a].turnOn=!0;var r=t[e].ballColor,n="yellow"===r?"white":"yellow";t.forEach((function(t){return t.ballColor=r})),t[a].ballColor=n}}},$=T,A=(a("b909"),a("7496")),M=a("a523"),W=Object(o["a"])($,y,h,!1,null,"589d0aca",null),F=W.exports;w()(W,{VApp:A["a"],VBtn:k["a"],VCard:V["a"],VCol:O["a"],VContainer:M["a"],VRow:L["a"]});var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),a("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),a("v-spacer"),a("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[a("span",{staticClass:"mr-2"},[t._v("Latest Release")]),a("v-icon",[t._v("mdi-open-in-new")])],1)],1),a("v-content",[a("HelloWorld")],1)],1)},R=[],U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{"text-center":"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),r("v-flex",{attrs:{"mb-4":""}},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Welcome to Vuetify")]),r("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),r("br"),t._v("please join our online "),r("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),r("v-flex",{attrs:{"mb-5":"",xs12:""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),r("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,(function(e,a){return r("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.text))])})),0)],1),r("v-flex",{attrs:{xs12:"","mb-5":""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),r("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,(function(e,a){return r("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.text))])})),0)],1),r("v-flex",{attrs:{xs12:"","mb-5":""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),r("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,(function(e,a){return r("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(t._s(e.text))])})),0)],1)],1)],1)},q=[],H={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},D=H,J=a("0e8f"),z=a("adda"),Q=a("a722"),G=Object(o["a"])(D,U,q,!1,null,null,null),K=G.exports;w()(G,{VContainer:M["a"],VFlex:J["a"],VImg:z["a"],VLayout:Q["a"]});var X={name:"home",components:{HelloWorld:K}},Y=X,Z=a("40dc"),tt=a("a75b"),et=a("132d"),at=a("2fa4"),rt=Object(o["a"])(Y,N,R,!1,null,null,null),nt=rt.exports;w()(rt,{VApp:A["a"],VAppBar:Z["a"],VBtn:k["a"],VContent:tt["a"],VIcon:et["a"],VImg:z["a"],VSpacer:at["a"]});var st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"text-center"},[a("div",{staticClass:"my-2"},[a("v-btn",{attrs:{"x-small":"",color:"secondary",dark:""}},[t._v("Extra small Button")])],1),a("div",{staticClass:"my-2"},[a("v-btn",{attrs:{small:"",color:"primary",dark:""}},[t._v("Small Button")])],1),a("div",{staticClass:"my-2"},[a("v-btn",{attrs:{color:"warning",dark:""}},[t._v("Normal Button")])],1),a("div",{staticClass:"my-2"},[a("v-btn",{attrs:{color:"error",dark:"",large:""}},[t._v("Large Button")])],1),a("div",{staticClass:"my-2"},[a("v-btn",{attrs:{"x-large":"",color:"success",dark:""}},[t._v("Extra large Button")])],1)])]),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"text-center"},[a("div",{staticClass:"my-2"},[a("v-btn",{attrs:{color:"secondary",fab:"","x-small":"",dark:""}},[a("v-icon",[t._v("mdi-television")])],1)],1),a("div",{staticClass:"my-2"},[a("v-btn",{attrs:{color:"primary",fab:"",small:"",dark:""}},[a("v-icon",[t._v("mdi-pencil")])],1)],1),a("div",{staticClass:"my-2"},[a("v-btn",{attrs:{color:"warning",fab:"",dark:""}},[a("v-icon",[t._v("mdi-account-circle")])],1)],1),a("div",{staticClass:"my-2"},[a("v-btn",{attrs:{color:"error",fab:"",large:"",dark:""}},[a("v-icon",[t._v("mdi-alarm")])],1)],1),a("div",{staticClass:"my-2"},[a("v-btn",{attrs:{color:"success",fab:"","x-large":"",dark:""}},[a("v-icon",[t._v("mdi-domain")])],1)],1)])])],1)],1)],1)},ot=[],lt={},it=Object(o["a"])(lt,st,ot,!1,null,null,null),ct=it.exports;w()(it,{VApp:A["a"],VBtn:k["a"],VCol:O["a"],VContainer:M["a"],VIcon:et["a"],VRow:L["a"]}),r["a"].use(u["a"]);var ut=[{path:"/",name:"main",component:d},{path:"/survival_game",name:"survival_game",component:F},{path:"/vuetify_example",name:"vuetify_example",component:nt},{path:"/vuetify_test",name:"vuetify_test",component:ct}],vt=new u["a"]({routes:ut}),ft=vt,pt=a("2f62");r["a"].use(pt["a"]);var mt=new pt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),dt=a("f309");r["a"].use(dt["a"]);var yt=new dt["a"]({theme:{dark:!0}});r["a"].config.productionTip=!1,new r["a"]({router:ft,store:mt,vuetify:yt,render:function(t){return t(c)}}).$mount("#app")},"8a23":function(t,e,a){},"96a3":function(t,e,a){},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"},"9eb1":function(t,e,a){"use strict";var r=a("96a3"),n=a.n(r);n.a},b909:function(t,e,a){"use strict";var r=a("4580"),n=a.n(r);n.a}});
//# sourceMappingURL=app.06372e98.js.map