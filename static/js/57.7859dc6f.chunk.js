(this.webpackJsonpnetex=this.webpackJsonpnetex||[]).push([[57],{543:function(e,t,n){"use strict";n.r(t);var c=n(5),a=n(64),i=n(199),s=n(203),r=n(327),l=n(202),o=n(489),j=n(204),d=n(1),x=n(221),m=n(42),b=n(33),h=n(8),u=n(80),O=n(4);t.default=function(e){var t=e.t,n=f(),c=Object(b.b)(),j=Object(h.g)(),g=Object(b.c)((function(e){return e.internalReducer})),p=g.internalList,v=g.isLoading,y=Object(d.useState)([]),N=Object(a.a)(y,2),w=N[0],I=N[1],C=Object(d.useState)([]),B=Object(a.a)(C,2),F=B[0],E=B[1];return Object(d.useEffect)((function(){c(Object(m.e)()),c(Object(m.g)(null))}),[]),Object(d.useEffect)((function(){if(Array.isArray(null===p||void 0===p?void 0:p.data)){var e,t,n=null===p||void 0===p||null===(e=p.data)||void 0===e?void 0:e.filter((function(e){return e.status})),c=null===p||void 0===p||null===(t=p.data)||void 0===t?void 0:t.filter((function(e){return!e.status}));I(n),E(c)}}),[p]),Object(O.jsxs)("section",{children:[v&&Object(O.jsx)(u.a,{}),Object(O.jsxs)(i.a,{maxWidth:"lg",children:[Object(O.jsx)(x.a,{style:{marginBottom:16},children:t("allFundsReceived")}),Object(O.jsx)(s.a,{variant:"h5",className:"red",children:t("newFunds")}),Object(O.jsxs)(r.a,{mt:"16px",children:[Object(O.jsxs)(l.a,{container:!0,className:n.grid,children:[Object(O.jsx)(l.a,{item:!0,xs:4,container:!0,justifyContent:"center",alignItems:"center",children:Object(O.jsx)(s.a,{variant:"h5",className:n.title,children:t("fromWhom")})}),Object(O.jsx)(l.a,{item:!0,xs:4,container:!0,justifyContent:"center",alignItems:"center",children:Object(O.jsx)(s.a,{variant:"h5",className:n.title,children:t("date")})}),Object(O.jsx)(l.a,{item:!0,xs:4,container:!0,justifyContent:"center",alignItems:"center",children:Object(O.jsx)(s.a,{variant:"h5",className:n.title,children:t("amount")})})]}),null===F||void 0===F?void 0:F.map((function(e){return Object(O.jsxs)(r.a,{className:n.boxItem,children:[Object(O.jsxs)(l.a,{container:!0,className:n.box,children:[Object(O.jsx)(l.a,{item:!0,xs:4,container:!0,justifyContent:"center",alignItems:"center",children:Object(O.jsx)(x.a,{className:n.text,children:e.owner})}),Object(O.jsx)(l.a,{item:!0,xs:4,container:!0,justifyContent:"center",alignItems:"center",children:Object(O.jsx)(x.a,{className:n.text,children:e.create_at})}),Object(O.jsx)(l.a,{item:!0,xs:4,container:!0,justifyContent:"center",alignItems:"center",children:Object(O.jsxs)(x.a,{className:n.text,children:[e.sum_with_commission," ",e.currency]})})]}),Object(O.jsx)(o.a,{variant:"contained",onClick:function(){j.push("/dashboard/transaction/get/".concat(e.id))},color:"primary",children:t("acceptFunds")})]})}))]}),Object(O.jsxs)(r.a,{mt:"16px",className:n.boxWithBd,children:[Object(O.jsx)(s.a,{variant:"h5",style:{color:"#000"},children:t("oldFunds")}),Object(O.jsxs)(l.a,{container:!0,className:n.grid,children:[Object(O.jsx)(l.a,{item:!0,xs:4,container:!0,justifyContent:"center",alignItems:"center",children:Object(O.jsx)(s.a,{variant:"h5",className:n.title,children:t("fromWhom")})}),Object(O.jsx)(l.a,{item:!0,xs:4,container:!0,justifyContent:"center",alignItems:"center",children:Object(O.jsx)(s.a,{variant:"h5",className:n.title,children:t("date")})}),Object(O.jsx)(l.a,{item:!0,xs:4,container:!0,justifyContent:"center",alignItems:"center",children:Object(O.jsx)(s.a,{variant:"h5",className:n.title,children:t("amount")})})]}),null===w||void 0===w?void 0:w.map((function(e){return Object(O.jsxs)(r.a,{className:n.boxItem,children:[Object(O.jsxs)(l.a,{container:!0,className:n.box,children:[Object(O.jsx)(l.a,{item:!0,xs:4,container:!0,justifyContent:"center",alignItems:"center",children:Object(O.jsx)(x.a,{className:n.text,style:{color:"#64748B"},children:e.owner})}),Object(O.jsx)(l.a,{item:!0,xs:4,container:!0,justifyContent:"center",alignItems:"center",children:Object(O.jsx)(x.a,{className:n.text,style:{color:"#64748B"},children:e.create_at})}),Object(O.jsx)(l.a,{item:!0,xs:4,container:!0,justifyContent:"center",alignItems:"center",children:Object(O.jsx)(x.a,{className:n.text,style:{color:"#64748B"},children:e.sum_with_commission})})]}),Object(O.jsx)(o.a,{variant:"contained",color:"primary",disabled:!0,children:t("acceptedFunds")})]})}))]})]})]})};var f=Object(j.a)((function(e){return{title:{color:"#64748B"},boxWithBd:{paddingTop:24,marginTop:24,borderTop:"1px solid #E7EAEE"},boxItem:Object(c.a)({marginBottom:8,display:"flex","& button":{width:187,height:60,marginLeft:16}},e.breakpoints.down(992),{flexDirection:"column","& button":{width:"100%",margin:"16px 0 0 0"}}),text:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},grid:Object(c.a)({marginBottom:16,width:"84%"},e.breakpoints.down(992),{width:"100%"}),box:{background:"#FFF",boxShadow:" 0px 1px 0px #E2E8F0",borderRadius:8,padding:"16px ",height:"60px","&:last-child":{marginBottom:0}}}}))}}]);
//# sourceMappingURL=57.7859dc6f.chunk.js.map