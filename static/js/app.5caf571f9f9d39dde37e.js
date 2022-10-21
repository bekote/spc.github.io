webpackJsonp([1],{MGcz:function(e,t){e.exports={themeColor:"#06A3DA",themeColorDark:"#091E3E",themeColorBright:"#f57f57",themeColorLight:"#C1E8F6",themeColorLightFore:"#6B6A75",themeFont:"'Merriweather'",themeColorBrightL:"#f55771",themeColorBrightR:"#f5c157"}},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),i=s("mtWM"),a=s.n(i),o=s("XLwt"),r=s("MGcz"),l=s.n(r);s("R+Pz")(document,window);var c={style:l.a},u=s("//Fk"),p=s.n(u),m={name:"chart",props:["value"],data:function(){return{theme:this.$theme,mychart:null}},mounted:function(){var e=document.getElementById("chart");this.myChart=this.$echarts.init(e),this.option&&this.myChart.setOption(this.option)},watch:{value:function(){this.option&&this.myChart.setOption(this.option)}},computed:{option:function(){for(var e=[],t=[],s=0;s<this.value.length;s++)-1!=this.value[s]&&(e.push(s+1),t.push(this.value[s]));var n,i=document.getElementsByClassName("cc-result");i.length>0&&(n=window.getComputedStyle(i[0]));var a=16,o=this.$theme.style.themeFont,r=600,l=this.$theme.style.themeColorDark;return n&&(a=parseFloat(n.fontSize),o=n.fontFamily,r=n.fontWeight,l=n.color),{color:this.$theme.style.themeColorBright,textStyle:{fontSize:a,fontFamily:o,fontWeight:r,color:l},title:{text:"For reference only",left:"right",bottom:0,textStyle:{color:this.$theme.style.themeColorLightFore+"88",fontStyle:"italic",fontSize:.9*a,fontWeight:400}},grid:{containLabel:!0,left:a,top:3*a,bottom:2.5*a},xAxis:{type:"category",data:e,name:"Year",nameTextStyle:{align:"center",verticalAlign:"top",padding:[.5*a,.8*a,0,0]},axisTick:{alignWithLabel:!0},axisLine:{lineStyle:{color:this.$theme.style.themeColor,width:3,shadowColor:"#84a2ad",shadowBlur:4,shadowOffsetY:2,shadowOffsetX:2}},axisLabel:{color:l}},yAxis:{type:"value",name:"Survival probability(%)",nameTextStyle:{padding:[0,0,a,-2*a],align:"left"},min:0,max:100,axisLabel:{color:l}},series:[{data:t,type:"line",smooth:!0,label:{show:!0,color:"inherit",fontSize:.8*a,formatter:function(e){return e.dataIndex%2?"{lb|"+e.data+"%}":e.data+"%"},rich:{lb:{padding:[0,0,3*-a,0],fontSize:.8*a}},textShadowColor:"#f0ccc2",textShadowBlur:3,textShadowOffsetY:2,textShadowOffsetX:2},symbolSize:8,lineStyle:{width:5,color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:this.$theme.style.themeColorBrightL},{offset:1,color:this.$theme.style.themeColorBrightR}],global:!1}}},{type:"line",color:this.$theme.style.themeColorLight,markArea:{data:[[{yAxis:"20"},{yAxis:"40"}]],silent:!0}},{type:"line",color:this.$theme.style.themeColorLight,markArea:{data:[[{yAxis:"60"},{yAxis:"80"}]],silent:!0}}]}}},methods:{hexToHsl:function(e){}}},d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"chart-container"},[t("div",{attrs:{id:"chart"}})])}]};var h={components:{chart:s("VU/8")(m,d,!1,function(e){s("uhOx")},"data-v-c14e6c46",null).exports},data:function(){return{theme:this.$theme.style,point_scores:[],scores:[],survprob:0,cals:[[],[],[],[],[]],load:!1,limits:[0,93,81,69,57,45],mychart:null}},created:function(){for(var e=[this.initScores()],t=1;t<=5;t++)e.push(this.initCal(t));var s=this;p.a.all(e).then(function(){for(var e=[],t=1;t<=5;t++)e.push(s.caculate(t));s.probs=e,s.load=!0})},watch:{scores:function(){this.load&&this.updateProbs()},survprob:function(){this.load&&this.updateProbs()}},methods:{initScores:function(){var e=this;return new p.a(function(t,s){e.$axios.get("./static/data/pointscore.json").then(function(s){e.point_scores=s.data;for(var n=0;n<e.point_scores.length;n++){var i=e.point_scores[n];e.scores.push(i.points[0].value)}t()})})},initCal:function(e){var t=this;return new p.a(function(s,n){t.$axios.get("./static/data/"+e+"ycalculator.json").then(function(n){t.cals[e]=n.data,s()})})},showProb:function(e){var t=this.probs[e-1];return-1==t?"":t+"%"},updateProbs:function(){for(var e=[],t=1;t<=5;t++)e.push(this.caculate(t));this.probs=e},caculate:function(e){if(this.survprob>this.limits[e])return-1;for(var t=0,s=0;s<this.scores.length;s++)t+=this.scores[s];for(var n="survprob"+this.survprob,i=0;i<this.cals[e].length&&!(this.cals[e][i].points>=t);i++);i>0&&t-this.cals[e][i-1].points<this.cals[e][i].points-t&&(i-=1);var a=this.cals[e][i][n];return a*=100,a=Math.round(100*a)/100}},computed:{months:function(){for(var e=[],t=0;t<=93;t+=3)e.push(t);return e}}},v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a-row",{staticClass:"cc-header",attrs:{type:"flex",justify:"center"}},[n("a-col",{attrs:{xxl:20,md:22,span:24}},[n("div",{staticClass:"cc-main title"},[n("div",[e._v("Colon Cancer")]),e._v(" "),n("div",[e._v("Dynamic Survival Calculator")])]),e._v(" "),n("img",{staticClass:"himg",attrs:{src:s("vfCL")}})])],1),e._v(" "),n("a-row",{staticClass:"cc-body",attrs:{type:"flex",justify:"center"}},[n("a-col",{attrs:{xxl:20,md:22,span:24}},[n("div",{staticClass:"cc-main"},[e.load?n("a-row",{attrs:{gutter:16}},[n("a-col",{staticStyle:{"min-width":"400px"},attrs:{md:12,span:24}},[n("a-form",{staticClass:"cc-form",attrs:{layout:"vertical"}},[n("a-form-item",[e._t("label",function(){return[n("div",{staticClass:"form-lbl"},[n("div",{staticClass:"rect"}),e._v("\n                    Survival time since diagnosis\n                  ")])]}),e._v(" "),n("a-select",{model:{value:e.survprob,callback:function(t){e.survprob=t},expression:"survprob"}},e._l(e.months,function(t){return n("a-select-option",{key:t,attrs:{value:t}},[e._v("\n                    "+e._s(t)+" months\n                  ")])}),1)],2),e._v(" "),e._l(e.point_scores,function(t,s){return n("a-form-item",{key:t.type},[e._t("label",function(){return[n("div",{staticClass:"form-lbl"},[n("div",{staticClass:"rect"}),e._v("\n                    "+e._s(t.type)+"\n                  ")])]}),e._v(" "),n("a-radio-group",{model:{value:e.scores[s],callback:function(t){e.$set(e.scores,s,t)},expression:"scores[index]"}},e._l(t.points,function(t){return n("a-radio-button",{key:t.label,attrs:{value:t.value}},[e._v("\n                    "+e._s(t.label)+"\n                  ")])}),1)],2)})],2)],1),e._v(" "),n("a-col",{staticStyle:{"min-width":"400px"},attrs:{md:12,span:24}},[n("div",{staticClass:"cc-result"},[n("div",{staticClass:"dline"}),e._v(" "),n("div",{staticClass:"info-area"},[n("div",{staticClass:"info"},[n("div",{staticClass:"circ"},[e._v("1")]),e._v("\n                  -year survival probability: "),n("span",{staticClass:"res"},[e._v(e._s(e.showProb(1)))])]),e._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"circ"},[e._v("3")]),e._v("\n                  -year survival probability: "),n("span",{staticClass:"res"},[e._v(e._s(e.showProb(3)))])]),e._v(" "),n("div",{staticClass:"info"},[n("div",{staticClass:"circ"},[e._v("5")]),e._v("\n                  -year survival probability: "),n("span",{staticClass:"res"},[e._v(e._s(e.showProb(5)))])])]),e._v(" "),n("div",{staticClass:"chart-area"},[n("div",{staticClass:"circ"},[n("a-icon",{staticClass:"label",attrs:{type:"line-chart"}})],1),e._v(" "),n("chart",{attrs:{value:e.probs}})],1)])])],1):n("a-row",[n("a-col",[n("a-result",{attrs:{title:"Page loading, please wait a moment!"},scopedSlots:e._u([{key:"icon",fn:function(){return[n("a-icon",{style:{color:e.theme.themeColor},attrs:{type:"sync",spin:""}})]},proxy:!0}])})],1)],1)],1)])],1)],1)},staticRenderFns:[]};var j=s("VU/8")(h,v,!1,function(e){s("z6Xz")},"data-v-f832ba5a",null).exports,b=s("2vhu");n.a.prototype.$axios=a.a,n.a.prototype.$echarts=o,n.a.config.productionTip=!1,n.a.prototype.$theme=c,n.a.use(b.a),new n.a({el:"#app",components:{App:j},template:"<App/>"})},"R+Pz":function(e,t){e.exports=function(e,t){var s=t.document.documentElement,n="orientationchange"in window?"orientationchange":"resize",i=function(){var n,i=t.innerWidth||e.documentElement.clientWidth||e.body.clientWidth;i&&(n=i>=1600?20:i>=768?16:14,console.log(i,n),s.style.fontSize=n+"px")};e.addEventListener&&(t.addEventListener(n,i,!1),e.addEventListener("DOMContentLoaded",i,!1),i())}},XN5v:function(e,t){e.exports={name:"ant-design-vue",version:"1.7.8",title:"Ant Design Vue",description:"An enterprise-class UI design language and Vue-based implementation",keywords:["ant","design","antd","vue","vueComponent","component","components","ui","framework","frontend"],main:"lib/index.js",module:"es/index.js",typings:"types/index.d.ts",files:["dist","lib","es","types","scripts"],scripts:{dev:"webpack-dev-server",start:"cross-env NODE_ENV=development webpack-dev-server --config webpack.config.js",test:"cross-env NODE_ENV=test jest --config .jest.js",compile:"node antd-tools/cli/run.js compile",pub:"node antd-tools/cli/run.js pub","pub-with-ci":"node antd-tools/cli/run.js pub-with-ci",prepublish:"node antd-tools/cli/run.js guard","pre-publish":"node ./scripts/prepub",prettier:"prettier -c --write '**/*'","pretty-quick":"pretty-quick",dist:"node antd-tools/cli/run.js dist",lint:"eslint -c ./.eslintrc --fix --ext .jsx,.js,.vue ./components","lint:site":"eslint -c ./.eslintrc --fix --ext .jsx,.js,.vue ./antdv-demo","lint:docs":"eslint -c ./.eslintrc --fix --ext .jsx,.js,.vue,.md ./antdv-demo/docs/**/demo/**","lint:style":'stylelint "{site,components}/**/*.less" --syntax less',codecov:"codecov",postinstall:'node scripts/postinstall || echo "ignore"'},repository:{type:"git",url:"git+https://github.com/vueComponent/ant-design-vue.git"},license:"MIT",bugs:{url:"https://github.com/vueComponent/ant-design-vue/issues"},homepage:"https://www.antdv.com/",peerDependencies:{vue:"^2.6.0","vue-template-compiler":"^2.6.0"},devDependencies:{"@commitlint/cli":"^8.0.0","@commitlint/config-conventional":"^8.0.0","@octokit/rest":"^16.0.0","@vue/cli-plugin-eslint":"^4.0.0","@vue/server-test-utils":"1.0.0-beta.16","@vue/test-utils":"1.0.0-beta.16",acorn:"^7.0.0",autoprefixer:"^9.6.0",axios:"^0.19.0","babel-cli":"^6.26.0","babel-core":"^6.26.0","babel-eslint":"^10.0.1","babel-helper-vue-jsx-merge-props":"^2.0.3","babel-jest":"^23.6.0","babel-loader":"^7.1.2","babel-plugin-import":"^1.1.1","babel-plugin-inline-import-data-uri":"^1.0.1","babel-plugin-istanbul":"^6.0.0","babel-plugin-syntax-dynamic-import":"^6.18.0","babel-plugin-syntax-jsx":"^6.18.0","babel-plugin-transform-class-properties":"^6.24.1","babel-plugin-transform-decorators":"^6.24.1","babel-plugin-transform-decorators-legacy":"^1.3.4","babel-plugin-transform-es3-member-expression-literals":"^6.22.0","babel-plugin-transform-es3-property-literals":"^6.22.0","babel-plugin-transform-object-assign":"^6.22.0","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-plugin-transform-runtime":"~6.23.0","babel-plugin-transform-vue-jsx":"^3.7.0","babel-polyfill":"^6.26.0","babel-preset-env":"^1.6.1","case-sensitive-paths-webpack-plugin":"^2.1.2",chalk:"^3.0.0",cheerio:"^1.0.0-rc.2",codecov:"^3.0.0",colorful:"^2.1.0",commander:"^4.0.0","compare-versions":"^3.3.0","cross-env":"^7.0.0","css-loader":"^3.0.0","deep-assign":"^2.0.0","enquire-js":"^0.2.1",eslint:"^6.8.0","eslint-config-prettier":"^6.10.1","eslint-plugin-html":"^6.0.0","eslint-plugin-markdown":"^2.0.0-alpha.0","eslint-plugin-vue":"^6.2.2","fetch-jsonp":"^1.1.3","fs-extra":"^8.0.0",glob:"^7.1.2",gulp:"^4.0.1","gulp-babel":"^7.0.0","gulp-strip-code":"^0.1.4","html-webpack-plugin":"^3.2.0",husky:"^4.0.0","istanbul-instrumenter-loader":"^3.0.0",jest:"^24.0.0","jest-serializer-vue":"^2.0.0","jest-transform-stub":"^2.0.0","js-base64":"^3.0.0","json-templater":"^1.2.0",jsonp:"^0.2.1",less:"^3.9.0","less-loader":"^6.0.0","less-plugin-npm-import":"^2.1.0","lint-staged":"^10.0.0",marked:"0.3.18",merge2:"^1.2.1","mini-css-extract-plugin":"^0.10.0",minimist:"^1.2.0",mkdirp:"^0.5.1",mockdate:"^2.0.2",nprogress:"^0.2.0","optimize-css-assets-webpack-plugin":"^5.0.1",postcss:"^7.0.6","postcss-loader":"^3.0.0",prettier:"^1.18.2","pretty-quick":"^2.0.0",querystring:"^0.2.0","raw-loader":"^4.0.0",reqwest:"^2.0.5",rimraf:"^3.0.0","rucksack-css":"^1.0.2","selenium-server":"^3.0.1",semver:"^7.0.0","style-loader":"^1.0.0",stylelint:"^13.0.0","stylelint-config-prettier":"^8.0.0","stylelint-config-standard":"^19.0.0","terser-webpack-plugin":"^3.0.3",through2:"^3.0.0","url-loader":"^3.0.0",vue:"^2.6.11","vue-antd-md-loader":"^1.1.0","vue-clipboard2":"0.3.1","vue-draggable-resizable":"^2.1.0","vue-eslint-parser":"^7.0.0","vue-i18n":"^8.3.2","vue-infinite-scroll":"^2.0.2","vue-jest":"^2.5.0","vue-loader":"^15.6.2","vue-router":"^3.0.1","vue-server-renderer":"^2.6.11","vue-template-compiler":"^2.6.11","vue-virtual-scroller":"^1.0.0",vuex:"^3.1.0",webpack:"^4.28.4","webpack-cli":"^3.2.1","webpack-dev-server":"^3.1.14","webpack-merge":"^4.1.1",webpackbar:"^4.0.0","xhr-mock":"^2.5.1"},dependencies:{"@ant-design/icons":"^2.1.1","@ant-design/icons-vue":"^2.0.0","@simonwep/pickr":"~1.7.0","add-dom-event-listener":"^1.0.2","array-tree-filter":"^2.1.0","async-validator":"^3.0.3","babel-helper-vue-jsx-merge-props":"^2.0.3","babel-runtime":"6.x",classnames:"^2.2.5","component-classes":"^1.2.6","dom-align":"^1.10.4","dom-closest":"^0.2.0","dom-scroll-into-view":"^2.0.0","enquire.js":"^2.1.6",intersperse:"^1.0.0","is-mobile":"^2.2.1","is-negative-zero":"^2.0.0",ismobilejs:"^1.0.0",json2mq:"^0.2.0",lodash:"^4.17.5",moment:"^2.21.0","mutationobserver-shim":"^0.3.2","node-emoji":"^1.10.0","omit.js":"^1.0.0",raf:"^3.4.0","resize-observer-polyfill":"^1.5.1","shallow-equal":"^1.0.0",shallowequal:"^1.0.2","vue-ref":"^2.0.0",warning:"^4.0.0"},sideEffects:["site/*","components/style.js","components/**/style/*","*.vue","*.md","dist/*","es/**/style/*","lib/**/style/*","*.less"]}},uhOx:function(e,t){},uslO:function(e,t,s){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn-bd":"1C9R","./bn-bd.js":"1C9R","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-in":"yJfC","./en-in.js":"yJfC","./en-nz":"dyB6","./en-nz.js":"dyB6","./en-sg":"NYST","./en-sg.js":"NYST","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-mx":"USNP","./es-mx.js":"USNP","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fil":"rMbQ","./fil.js":"rMbQ","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-deva":"VGQH","./gom-deva.js":"VGQH","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./oc-lnc":"KOFO","./oc-lnc.js":"KOFO","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tk":"+WRH","./tk.js":"+WRH","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-mo":"+WA1","./zh-mo.js":"+WA1","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function i(e){return s(a(e))}function a(e){var t=n[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}i.keys=function(){return Object.keys(n)},i.resolve=a,e.exports=i,i.id="uslO"},vfCL:function(e,t,s){e.exports=s.p+"static/img/himg.beff20a.png"},z6Xz:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.5caf571f9f9d39dde37e.js.map