(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[988],{1298:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sales/data",function(){return t(879)}])},879:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return SalesTable}});var n=t(5893),l=t(3401),i=t(7945);let r=[{name:"date",display:"Date"},{name:"type",display:"Payment Type"},{name:"amount",display:"Amount"},{name:"discount",display:"Discount"},{name:"member",display:"Member Details"},{name:"items",display:"Details"},{name:"entryDate",display:"Entry Date"}];function SalesTable(e){let{handleInsert:a,handleItems:t,data:s}=e;return(0,n.jsx)(l.Z,{customActions:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i.Z,{label:(0,n.jsxs)("span",{children:[(0,n.jsx)("i",{className:"fa-regular fa-plus"})," Create Order"]}),type:"primary",style:{minWidth:"10rem"},onClick:a})}),headings:r,exportSchema:["date","type","amount","discount","member","remark","entryDate"],rawData:s.map((e,a)=>{var l,r,s;return{date:{value:new Date(e.date).toUTCString()},type:{value:e.type},amount:{value:"Rs."+e.amount},discount:{value:"Rs."+e.discount},items:{value:e.id,display:(0,n.jsx)(i.Z,{label:"View Items",type:"primary",onClick:()=>t(e)})},member:{value:null!==(r=null===(l=e.member)||void 0===l?void 0:l.fullName)&&void 0!==r?r:"N/A"},remark:{value:null!==(s=e.remark)&&void 0!==s?s:"N/A"},entryDate:{value:new Date(e.inserted).toUTCString()}}})})}}},function(e){e.O(0,[664,401,774,888,179],function(){return e(e.s=1298)}),_N_E=e.O()}]);