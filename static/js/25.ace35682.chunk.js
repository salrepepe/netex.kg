(this.webpackJsonpnetex=this.webpackJsonpnetex||[]).push([[25],{230:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(5),a=n(25),o=n(327),r=Object(a.a)((function(e){return{root:Object(i.a)({background:" #FFFFFF",boxShadow:"0px 1px 0px #E2E8F0",borderRadius:8,height:167,display:"flex",justifyContent:"flex-start",alignItems:"center",padding:"30px",transition:"all 0.2s linear","&:hover":{boxShadow:"0px 0px 6px 2px #E2E8F0"}},e.breakpoints.down(576),{display:"flex",flexDirection:"column"})}}))(o.a)},244:function(e,t,n){"use strict";t.a=n.p+"static/media/commissionDark.c1451589.svg"},275:function(e,t,n){"use strict";n(1);var i=n(319),a=n.n(i),o=n(4);t.a=function(e){var t=e.height,n=e.color,i=e.tooltip,r=e.rates,s={options:{chart:{type:"area",stacked:!1,sparkline:{enabled:!0},toolbar:{autoSelected:"zoom"},background:"transparent"},theme:{mode:"dark",monochrome:{enabled:!1,color:"#fff",shadeTo:"dark",shadeIntensity:.65}},markers:{size:0,style:"hollow"},stroke:{curve:"straight"},tooltip:{enabled:i},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.7,opacityTo:.9,stops:[0,100]}},colors:[n],xaxis:{categories:r&&r.map((function(e){return e.date}))}},series:[{name:"price",data:r&&r.map((function(e){return e.price}))}]};return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(a.a,{options:s.options,series:s.series,type:"area",height:t})})}},280:function(e,t,n){"use strict";t.a=n.p+"static/media/coin.f1bea9ad.svg"},323:function(e,t,n){"use strict";t.a=n.p+"static/media/timer.bd2a34ce.svg"},590:function(e,t,n){"use strict";n.r(t);var i=n(5),a=n(0),o=n(64),r=n(1),s=n.n(r),c=n(234),l=n(496),d=n(598),u=n(203),j=n(199),b=n(202),m=n(327),p=n(593),x=n(489),O=n(179),h=n(204),f=n(8),v=n(230),g=n(323),y=n(244),C=n(280),D=n(33),B=n(41),k=n(571),T=n(422),w=n(408),S=n(4),A=function(e){var t,n,i,c,l,j,b,m,p=e.t,h=N(),v=Object(D.b)(),g=Object(f.g)(),y=Object(D.c)((function(e){return e.BuyReducer})),C=y.answerCreateBuy,A=y.answerBuyConfirm,E=Object(r.useState)(!1),F=Object(o.a)(E,2),W=F[0],R=F[1],z=s.a.useRef(!0);return s.a.useLayoutEffect((function(){z.current?z.current=!1:(200===A.severity&&(setTimeout((function(){v(Object(B.e)(Object(a.a)(Object(a.a)({},alert),{},{open:!1}))),v(Object(B.f)(Object(a.a)(Object(a.a)({},alert),{},{open:!1,severity:null})))}),500),setTimeout((function(){g.push("/dashboard/history")}),1300)),A.severity&&R(!1))}),[null===A||void 0===A?void 0:A.severity]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(d.a,{open:A.open&&200!==A.severity,anchorOrigin:{vertical:"top",horizontal:"center"},onClose:function(){return v(Object(B.e)(Object(a.a)(Object(a.a)({},alert),{},{open:!1})))},children:Object(S.jsx)(k.a,{onClose:function(){return v(Object(B.e)(Object(a.a)(Object(a.a)({},alert),{},{open:!1,message:A.message})))},severity:200===A.severity?"success":"error",variant:"filled",children:200===A.severity?"":A.message&&A.message.messages})}),Object(S.jsx)(T.a,{open:200===C.severity,onClose:function(){return v(Object(B.f)(Object(a.a)(Object(a.a)({},alert),{},{open:!1,severity:null,message:C.message})))},classes:{paper:h.paper},children:Object(S.jsxs)(w.a,{className:h.DialogContent,children:[Object(S.jsx)(u.a,{variant:"h2",className:h.title,children:p("payment\u0421onfirmation")}),Object(S.jsxs)("ul",{style:{listStyle:"none"},children:[Object(S.jsxs)(u.a,{variant:"h5",component:"li",children:[p("amountToBeCredited"),Object(S.jsx)("div",{}),Object(S.jsxs)("span",{children:[null===C||void 0===C||null===(t=C.message)||void 0===t||null===(n=t.confirm)||void 0===n?void 0:n.debit," ",null===C||void 0===C||null===(i=C.message)||void 0===i||null===(c=i.confirm)||void 0===c?void 0:c.currency]})]}),Object(S.jsxs)(u.a,{variant:"h5",component:"li",children:[p("amountToPay"),Object(S.jsx)("div",{}),Object(S.jsxs)("span",{children:[null===C||void 0===C||null===(l=C.message)||void 0===l||null===(j=l.confirm)||void 0===j?void 0:j.amount," USDT"]})]}),Object(S.jsxs)(u.a,{variant:"h5",component:"li",children:[p("Commission"),Object(S.jsx)("div",{}),Object(S.jsxs)("span",{children:[null===C||void 0===C||null===(b=C.message)||void 0===b||null===(m=b.confirm)||void 0===m?void 0:m.commission," USDT"]})]})]}),Object(S.jsx)(x.a,{onClick:function(){return function(){var e,t;v(Object(B.d)(null===C||void 0===C||null===(e=C.message)||void 0===e||null===(t=e.confirm)||void 0===t?void 0:t.id)),R(!0)}()},disabled:W,children:W?Object(S.jsx)(O.a,{className:"progress",color:"red"}):p("confirm")})]})})]})},N=Object(h.a)((function(e){var t,n;return{paper:{borderRadius:16,width:"100%"},DialogContent:(t={padding:"40px 31px !important",display:"flex",justifyContent:"center",flexDirection:"column"},Object(i.a)(t,e.breakpoints.down(992),{padding:"16px"}),Object(i.a)(t,"& ul",{"& li":{fontWeight:300,marginBottom:16,display:"flex",justifyContent:"space-between",whiteSpace:"nowrap",alignItems:"baseline","& div":{width:"100%",height:"fit-content",borderBottom:"2px dotted #B8C0CC",margin:"0 3px"},"& span":{fontWeight:500}}}),Object(i.a)(t,"& button",{width:"100%",height:56,marginTop:16,background:"#FCE34D",borderRadius:"8px",border:"none",fontSize:18,fontWeight:500}),t),close:{position:"absolute",top:0,right:0},title:(n={textAlign:"center",color:"#000",fontWeight:500,letterSpacing:"-0.04em",lineHeight:"56px",marginBottom:24},Object(i.a)(n,e.breakpoints.down(992),{fontSize:48}),Object(i.a)(n,e.breakpoints.down(768),{fontSize:34,lineHeight:"40px"}),n),subtitle:{color:"#64748B",marginLeft:10}}})),E=n(77),F=n(289),W=n(317),R=n(76),z=(n(316),n(275),t.default=function(e){var t,n,s,h=e.t,T=Object(D.b)(),w=Object(c.a)(),N=Object(f.i)().parameter,I=Object(f.g)(),L=Object(l.a)(w.breakpoints.up("md")),U=Object(D.c)((function(e){return e.BuyReducer})),_=U.BuyByParameterCoin,P=U.answerCreateBuy,q=Object(D.c)((function(e){return e.\u0421urrenciesReducer})).\u0421urrenciesList,M=Object(D.c)((function(e){return e.orders})).order_data,H=Object(r.useState)(!1),J=Object(o.a)(H,2),K=J[0],V=J[1],G=Object(r.useState)("market"),Q=Object(o.a)(G,2),X=Q[0];Q[1];Object(r.useEffect)((function(){T(Object(B.c)(N))}),[]);var Y=q.filter((function(e){return e.currency===N}))[0],Z=q.filter((function(e){return"USDT"===e.currency}))[0],$=Object(r.useState)({AmountToCredited:"",WriteOffAmount:"",price:null===Y||void 0===Y?void 0:Y.rate}),ee=Object(o.a)($,2),te=ee[0],ne=ee[1];Object(r.useEffect)((function(){ne("limit"===X?Object(a.a)(Object(a.a)({},te),{},{price:null===Y||void 0===Y?void 0:Y.rate}):Object(a.a)(Object(a.a)({},te),{},{price:null===Y||void 0===Y?void 0:Y.rate,limit:null===Y||void 0===Y?void 0:Y.rate}))}),[Y,X]);var ie=function(e){var t=e.target,n=t.value,o=t.name;ne((function(e){return Object(a.a)(Object(a.a)({},e),{},Object(i.a)({},o,n))}))},ae=te.AmountToCredited/(null===te||void 0===te?void 0:te.price),oe=ae-ae*(null===_||void 0===_||null===(t=_.parameters)||void 0===t?void 0:t.commission)/100;Object(r.useEffect)((function(){P.severity&&V(!1)}),[P.severity]),Object(r.useEffect)((function(){V(!1),200===M.severity&&setTimeout((function(){I.push("/dashboard/orders")}),1e3)}),[M]);var re=z();return Object(S.jsx)(S.Fragment,{children:400===_.status?Object(S.jsx)(E.a,{}):Object(S.jsxs)("section",{children:[Object(S.jsx)(d.a,{open:P.open,anchorOrigin:{vertical:"top",horizontal:"center"},onClose:function(){return T(Object(B.f)(Object(a.a)(Object(a.a)({},alert),{},{open:!1,severity:P.severity,message:P.message})))},children:Object(S.jsx)(k.a,{onClose:function(){return T(Object(B.f)(Object(a.a)(Object(a.a)({},alert),{},{open:!1})))},severity:200===P.severity?"success":"error",variant:"filled",children:200===P.severity?"":P.message&&P.message.messages})}),Object(S.jsx)(F.a,{}),Object(S.jsx)(A,{t:h}),Object(S.jsxs)(u.a,{variant:"h2",style:{color:"#000",marginTop:32,textAlign:"center"},children:[h("buy")," ",null===Y||void 0===Y?void 0:Y.name," ",h("atRate")]}),Object(S.jsxs)(u.a,{variant:"h3",style:{color:"#64748B",textAlign:"center",fontWeight:300,margin:"24px 0 56px"},children:["1.00 ",null===Y||void 0===Y?void 0:Y.name," = ",null===Y||void 0===Y?void 0:Y.rate,"\xa0USDT"]}),Object(S.jsxs)(j.a,{children:[Object(S.jsxs)(b.a,{container:!0,spacing:2,style:{marginTop:40},justifyContent:"center",children:[Object(S.jsx)(b.a,{xs:12,sm:6,md:3,item:!0,children:Object(S.jsxs)(v.a,{style:{height:210,flexDirection:"column"},children:[Object(S.jsx)("img",{className:re.img,src:g.a,alt:"time-icon"}),Object(S.jsx)(u.a,{variant:"h5",className:re.BuyDetailsBlockSupTitle,children:h("DueDate")}),Object(S.jsx)(u.a,{variant:"h4",className:re.BuyDetailsBlockTitle,children:h("Instantly")})]})}),Object(S.jsx)(b.a,{xs:12,sm:6,md:3,item:!0,children:Object(S.jsxs)(v.a,{style:{height:210,flexDirection:"column"},children:[Object(S.jsx)("img",{className:re.img,src:C.a,alt:"Coin-icon"}),Object(S.jsx)(u.a,{variant:"h5",className:re.BuyDetailsBlockSupTitle,children:h("MinAmount")}),Object(S.jsxs)(u.a,{variant:"h4",className:re.BuyDetailsBlockTitle,children:[null===_||void 0===_||null===(n=_.parameters)||void 0===n?void 0:n.min_qty," ",null===Y||void 0===Y?void 0:Y.currency]})]})}),Object(S.jsx)(b.a,{xs:12,sm:6,md:3,item:!0,children:Object(S.jsxs)(v.a,{style:{height:210,flexDirection:"column"},children:[Object(S.jsx)("img",{className:re.img,src:y.a,alt:"Commission-icon"}),Object(S.jsx)(u.a,{variant:"h5",className:re.BuyDetailsBlockSupTitle,children:h("Commission")}),Object(S.jsxs)(u.a,{variant:"h4",className:re.BuyDetailsBlockTitle,children:[null===_||void 0===_||null===(s=_.parameters)||void 0===s?void 0:s.commission," %"]})]})})]}),Object(S.jsxs)(b.a,{style:{marginTop:40},container:!0,spacing:2,children:[Object(S.jsxs)(b.a,{item:!0,md:6,xs:12,children:[Object(S.jsx)(m.a,{display:"flex",justifyContent:"space-between",style:{flexDirection:!L&&"column"},children:Object(S.jsxs)(u.a,{className:re.BuyDetailsTitle,onClick:function(){return ne((function(e){return Object(a.a)(Object(a.a)({},e),{},{AmountToCredited:null===Z||void 0===Z?void 0:Z.balance})}))},children:[Object(S.jsx)("span",{style:{fontWeight:400},children:h("balance")}),":\xa0",Object(S.jsxs)("span",{className:re.balanceAmount,children:[null===Z||void 0===Z?void 0:Z.balance," "]}),"USDT"]})}),Object(S.jsx)(W.a,{order:X,classes:re,parameter:N,t:h,form:te,handleValueChange:ie}),Object(S.jsxs)(m.a,{display:"flex",children:[Object(S.jsx)(m.a,{className:re.DetailsLabel,children:"USDT"}),Object(S.jsx)(p.a,{label:L?"0.00":h("AmountDispatch"),type:"text",InputProps:{inputProps:{pattern:"\\d*.\\d*"}},onKeyPress:function(e){/[0-9.]/.test(e.key)||e.preventDefault()},variant:"outlined",name:"AmountToCredited",value:te.AmountToCredited,className:re.DetailsInput,onChange:ie})]})]}),Object(S.jsxs)(b.a,{item:!0,md:6,xs:12,children:[Object(S.jsx)(m.a,{display:"flex",justifyContent:"space-between",style:{flexDirection:!L&&"column"},children:Object(S.jsxs)(u.a,{className:re.BuyDetailsTitle,children:[Object(S.jsx)("span",{style:{fontWeight:400},children:h("balance")}),":\xa0",null===Y||void 0===Y?void 0:Y.balance," ",null===Y||void 0===Y?void 0:Y.currency]})}),Object(S.jsxs)(m.a,{display:"flex",children:[Object(S.jsx)(m.a,{className:re.DetailsLabel,children:null===Y||void 0===Y?void 0:Y.currency}),Object(S.jsx)(p.a,{label:L?"0.000000":h("AmountToCredited"),variant:"outlined",className:re.DetailsInput,value:oe.toFixed(null===Y||void 0===Y?void 0:Y.decimal),onChange:ie,disabled:!0})]})]})]}),Object(S.jsx)(x.a,{variant:"contained",size:"large",color:"primary",className:re.button,onClick:function(){return function(){if(V(!0),"market"!==X){var e={order_type:X,order_side:"buy",currency:N,stop_price:te.stop,price:te.price,amount:te.AmountToCredited,quantity:oe};T(Object(R.b)(e))}else{var t={sum:te.AmountToCredited,currency:N};T(Object(B.a)(t))}}()},disabled:(null===Y||void 0===Y?void 0:Y.min_qty)>=oe||K,children:K?Object(S.jsx)(O.a,{className:"progress",color:"primary"}):h("Continue")})]})]})})},Object(h.a)((function(e){return{BuyDetailsDate:{backgroundColor:"#fff",boxShadow:"0px 1px 0px #E2E8F0",borderRadius:8,marginBottom:10,maxWidth:240,marginRight:40},BuyDetailsDateText:{color:"#64748B",fontSize:23,fontWeight:300},BuyDetailsBlockSupTitle:Object(i.a)({color:"#323A46",fontWeight:300,margin:"22px 0 8px",textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},e.breakpoints.down("md"),{fontSize:23}),BuyDetailsBlockTitle:{color:"#323A46",fontWeight:600},DetailsLabel:{color:"#000000",fontWeight:600,display:"flex",flexDirection:"column",alignItems:"center !important",justifyContent:"center",padding:"0 18px",backgroundColor:"#E7EAEE",borderRadius:"8px 0 0 8px",boxShadow:"0px 1px 0px #E2E8F0",minWidth:"70px"},DetailsInput:{"& .MuiOutlinedInput-input":{backgroundColor:"#fff",transition:"all 0.2s linear",borderRadius:"0 8px 8px 0!important"},"& .MuiOutlinedInput-notchedOutline":{borderRadius:"0 8px 8px 0!important"}},img:{width:66,height:66},BuyDetailsTitle:Object(i.a)({color:"#323A46",marginBottom:16,fontSize:23,fontWeight:600},e.breakpoints.down("md"),{fontSize:23}),balanceAmount:{transition:"all .3s",cursor:"pointer","&:hover":{borderBottom:"2px solid #000"}},button:Object(i.a)({margin:"30px auto",display:"block"},e.breakpoints.down(992),{width:"100%"})}})))}}]);
//# sourceMappingURL=25.ace35682.chunk.js.map