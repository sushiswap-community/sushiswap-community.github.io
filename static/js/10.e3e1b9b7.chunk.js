(this.webpackJsonp=this.webpackJsonp||[]).push([[10],{1207:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(23),o=a(41),s=a(321),i=a(88),c=a(81);t.a=function(e){var t=Object(o.a)().accent;return r.a.createElement(i.a,{style:{alignItems:"flex-end",height:32,marginBottom:e.disabled?0:l.g.small}},r.a.createElement(c.a,{medium:!0,fontWeight:e.fontWeight||"bold",disabled:e.disabled,style:[{flex:1,fontSize:l.d?24:18,paddingBottom:l.g.tiny},e.style]},e.text),e.buttonText&&r.a.createElement(s.a,{type:"clear",size:"small",title:e.buttonText,onPress:e.onPressButton,color:t,buttonStyle:{paddingHorizontal:l.g.tiny}}))}},1210:function(e,t,a){"use strict";var n=a(21),r=a.n(n),l=a(0),o=a.n(l),s=a(50),i=a(5),c=a(41),u=a(24);t.a=function(e){var t=Object(c.a)().backgroundLight,n=Object(l.useState)(!1),d=r()(n,2),m=d[0],g=d[1],b=e.small?22:27,f=a(1235),k=a(1236),p=e.replaceWETH&&Object(u.k)(e.token)?k:{uri:e.token.logoURI};return o.a.createElement(i.a,{style:[{width:b,height:b,backgroundColor:e.disabled?t:"white",borderRadius:b/2},e.style]},o.a.createElement(s.a,{source:!e.token.logoURI||m?f:p,onError:function(){return g(!0)},style:{width:"100%",height:"100%",borderRadius:b/2,opacity:e.disabled?.5:1}}))}},1213:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(5),o=a(23),s=a(41);t.a=function(e){var t=Object(s.a)().border;return r.a.createElement(l.a,{style:{height:1,width:"100%",backgroundColor:t,marginTop:e.small?o.g.tiny:o.g.small,marginBottom:e.small?o.g.tiny:o.g.small+o.g.tiny}})}},1222:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(90),o=a(23);t.a=function(){return r.a.createElement(l.a,{size:"large",style:{marginVertical:o.g.large}})}},1226:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(23),o=a(81);t.a=function(e){return r.a.createElement(o.a,{medium:!0,caption:!0,disabled:e.disabled,style:{marginLeft:l.g.tiny}},e.token.symbol)}},1231:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(23),o=a(24),s=a(81);t.a=function(e){return r.a.createElement(s.a,{caption:l.d,disabled:e.disabled,style:e.style},Object(o.d)(e.amount||e.token.balance,e.token.decimals,8))}},1232:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(23),o=a(81);t.a=function(e){return r.a.createElement(o.a,{caption:!0,numberOfLines:1,ellipsizeMode:"tail",style:{marginLeft:l.g.small,width:180},disabled:e.disabled},l.d?e.token.name:e.token.symbol)}},1235:function(e,t,a){e.exports=a.p+"static/media/empty-token.e8aa64c5.png"},1236:function(e,t,a){e.exports=a.p+"static/media/ETH.ab794f02.png"},1238:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(24),o=a(81);t.a=function(e){return r.a.createElement(o.a,{note:!0,fontWeight:"light",disabled:e.disabled,style:e.style},Object(l.f)(e.token.priceUSD||0,4))}},1239:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(24),o=a(81);t.a=function(e){return r.a.createElement(o.a,{note:!0,fontWeight:"light",disabled:e.disabled,style:e.style},Object(l.f)(e.token.valueUSD||0,4))}},1394:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(240),o=a(12),s=a(54),i=a(5),c=a(74),u=a(33),d=a(414),m=a(1213),g=a(411),b=a(412),f=a(88),k=a(1207),p=a(1222),E=a(81),y=a(413),h=a(1231),v=a(1210),x=a(1232),O=a(1238),j=a(1226),w=a(1239),T=a(417),S=a(23),P=a(56),I=a(41),L=a(3),B=a.n(L),D=a(21),W=a.n(D),z=a(123),C=a.n(z),H=a(139),U=a.n(H),A=a(157),R=a(24),q=a(322),V=a(416),Z=function(){var e=Object(n.useContext)(P.b),t=e.provider,a=e.signer,r=e.address,l=e.tokens,o=Object(n.useState)(),s=W()(o,2),i=s[0],c=s[1],u=Object(n.useState)(),d=W()(u,2),m=d[0],g=d[1],b=Object(n.useState)(!0),f=W()(b,2),k=f[0],p=f[1],E=Object(n.useState)(!0),y=W()(E,2),h=y[0],v=y[1],x=Object(V.a)().getPair;return Object(n.useEffect)((function(){c(void 0),g(void 0),p(!0),v(!0)}),[r]),U()((function(){var e,n,r;return B.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(e=l.find((function(e){return Object(R.k)(e)})),!(t&&a&&e&&l&&l.length>0)){o.next=30;break}return p(!0),o.t0=A.a,o.t1=String,o.next=7,B.a.awrap(C.a.weth.price());case 7:return o.t2=o.sent,o.t3=(0,o.t1)(o.t2),n=o.t0.parse.call(o.t0,o.t3),o.t4=B.a,o.t5=q.b,o.next=14,B.a.awrap(a.getAddress());case 14:return o.t6=o.sent,o.t7=l,o.t8=t,o.t9=(0,o.t5)(o.t6,o.t7,o.t8),o.next=20,o.t4.awrap.call(o.t4,o.t9);case 20:return r=o.sent,o.prev=21,o.t10=c,o.next=25,B.a.awrap(Promise.all(r.map((function(a){return Object(q.a)(a,e,n,x,t)}))));case 25:o.t11=o.sent,(0,o.t10)(o.t11);case 27:return o.prev=27,p(!1),o.finish(27);case 30:case"end":return o.stop()}}),null,null,[[21,,27,30]],Promise)}),[x,t,a,l]),U()((function(){var e,n,r;return B.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(e=l.find((function(e){return Object(R.k)(e)})),!(t&&a&&e&&l&&l.length>0&&i)){o.next=30;break}return v(!0),o.t0=A.a,o.t1=String,o.next=7,B.a.awrap(C.a.weth.price());case 7:return o.t2=o.sent,o.t3=(0,o.t1)(o.t2),n=o.t0.parse.call(o.t0,o.t3),o.t4=B.a,o.t5=q.d,o.next=14,B.a.awrap(a.getAddress());case 14:return o.t6=o.sent,o.t7=l,o.t8=t,o.t9=(0,o.t5)(o.t6,o.t7,o.t8),o.next=20,o.t4.awrap.call(o.t4,o.t9);case 20:return r=o.sent,o.prev=21,o.t10=g,o.next=25,B.a.awrap(Promise.all(r.map((function(a){return Object(q.a)(a,e,n,x,t)}))));case 25:o.t11=o.sent,(0,o.t10)(o.t11);case 27:return o.prev=27,v(!1),o.finish(27);case 30:case"end":return o.stop()}}),null,null,[[21,,27,30]],Promise)}),[x,t,a,l,i]),{loadingLPTokens:k,loadingPools:h,tokens:l,lpTokens:i,pools:m}},J=a(156),M=a(64),F=a(415),_=function(e){var t=e.state;return r.a.createElement(i.a,{style:{marginTop:S.d?S.g.large:S.g.normal}},r.a.createElement(G,{state:t}),r.a.createElement(i.a,{style:{height:S.g.large}}),r.a.createElement(K,{state:t}),r.a.createElement(i.a,{style:{height:S.g.large}}),r.a.createElement(N,{state:t}))},G=function(e){e.state;var t=Object(M.a)(),a=Object(n.useContext)(P.b),l=a.loadingTokens,o=a.tokens,s=Object(J.a)("/swap","Swap");return r.a.createElement(i.a,null,r.a.createElement(k.a,{text:t("tokens"),buttonText:t("manage"),onPressButton:s}),r.a.createElement(Q,{loading:l,tokens:o,TokenItem:Y}))},K=function(e){var t=e.state,a=Object(M.a)(),n=Object(J.a)("/liquidity/remove","RemoveLiquidity");return r.a.createElement(i.a,null,r.a.createElement(k.a,{text:a("liquidity"),buttonText:a("manage"),onPressButton:n}),r.a.createElement(Q,{loading:t.loadingLPTokens,tokens:t.lpTokens,TokenItem:$}))},N=function(e){var t=e.state,a=Object(M.a)(),n=Object(J.a)("/farming","Farming");return r.a.createElement(i.a,null,r.a.createElement(k.a,{text:a("farms"),buttonText:a("manage"),onPressButton:n}),r.a.createElement(Q,{loading:t.loadingPools,tokens:t.pools,TokenItem:$}))},Q=function(e){var t=Object(n.useCallback)((function(t){var a=t.item;return r.a.createElement(e.TokenItem,{key:a.address,token:a})}),[]),a=Object(n.useMemo)((function(){return(e.tokens||[]).filter((function(e){return!(e.amountDeposited?e.amountDeposited.isZero():e.balance.isZero())})).sort((function(e,t){return(t.valueUSD||0)-(e.valueUSD||0)}))}),[e.tokens]);return e.loading?r.a.createElement(p.a,null):0===a.length?r.a.createElement(X,null):r.a.createElement(l.a,{keyExtractor:function(e){return e.address},data:a,renderItem:t,ItemSeparatorComponent:function(){return r.a.createElement(m.a,{small:!0})}})},X=function(){var e=Object(M.a)();return r.a.createElement(i.a,{style:{margin:S.g.normal}},r.a.createElement(E.a,{disabled:!0,style:{textAlign:"center",width:"100%"}},e("you-dont-have-assets")))},Y=function(e){return r.a.createElement(f.a,{style:{alignItems:"center",paddingHorizontal:S.g.tiny,paddingVertical:4}},r.a.createElement(v.a,{token:e.token,disabled:e.disabled}),r.a.createElement(i.a,null,r.a.createElement(O.a,{token:e.token,disabled:e.disabled,style:{marginLeft:S.g.small}}),r.a.createElement(x.a,{token:e.token,disabled:e.disabled})),r.a.createElement(i.a,{style:{flex:1,alignItems:"flex-end"}},r.a.createElement(w.a,{token:e.token,disabled:e.disabled}),r.a.createElement(f.a,null,r.a.createElement(h.a,{token:e.token,disabled:e.disabled}),S.d&&r.a.createElement(j.a,{token:e.token,disabled:e.disabled}))),r.a.createElement(ee,{path:"/tokens/"+e.token.address}))},$=function(e){return r.a.createElement(f.a,{style:{alignItems:"center",paddingHorizontal:S.g.tiny,paddingVertical:4}},r.a.createElement(v.a,{token:e.token.tokenA,small:!0,replaceWETH:!0}),r.a.createElement(v.a,{token:e.token.tokenB,small:!0,replaceWETH:!0,style:{marginLeft:4}}),r.a.createElement(E.a,{medium:!0,caption:!0,style:{marginLeft:S.g.tiny}},e.token.tokenA.symbol,"-",e.token.tokenB.symbol),r.a.createElement(i.a,{style:{flex:1,alignItems:"flex-end"}},r.a.createElement(w.a,{token:e.token,disabled:e.disabled}),r.a.createElement(f.a,null,r.a.createElement(h.a,{token:e.token,amount:e.token.amountDeposited,disabled:e.disabled}))),r.a.createElement(ee,{path:"/pairs/"+e.token.address}))},ee=function(e){var t=e.path,a=Object(I.a)(),n=a.textDark,l=a.disabled,o=t.endsWith(u.ethers.constants.AddressZero);return r.a.createElement(s.a,{onPress:function(){return window.open("https://sushiswapanalytics.com/"+t.toLowerCase(),"_blank")},disabled:o},r.a.createElement(c.b,{type:"evilicon",name:"external-link",color:o?l:n,style:{marginLeft:S.g.tiny}}))},te=function(e){return e?e.reduce((function(e,t){return e+(t.valueUSD||0)}),0):0};t.default=function(){var e=Object(M.a)(),t=Z(),a=Object(n.useContext)(P.b).loadingTokens||t.loadingLPTokens||t.loadingPools,l=te(t.tokens)+te(t.lpTokens)+te(t.pools);return r.a.createElement(F.a,null,r.a.createElement(g.a,null,r.a.createElement(d.a,null),r.a.createElement(b.a,{style:{paddingBottom:S.g.huge}},r.a.createElement(y.a,{text:e("total-value"),style:{flex:1,marginTop:S.g.normal}}),r.a.createElement(y.a,{text:a?e("fetching"):Object(R.f)(l,4),fontWeight:"light",disabled:a,style:{fontSize:S.d?32:24}}),r.a.createElement(_,{state:t})),"web"===o.a.OS&&r.a.createElement(T.a,null)))}}}]);
//# sourceMappingURL=10.e3e1b9b7.chunk.js.map