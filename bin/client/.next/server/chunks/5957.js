"use strict";exports.id=5957,exports.ids=[5957],exports.modules={5957:(s,e,t)=>{t.r(e),t.d(e,{default:()=>SalesItemsTable});var l=t(997),a=t(6698),r=t(1383);let d=[{name:"title",display:"Title"},{name:"amount",display:"Amount"},{name:"quantity",display:"Quantity"},{name:"total",display:"Sub Total"}];function SalesItemsTable({data:s,onClose:e}){return l.jsx(r.Z,{onClose:e,children:(0,l.jsxs)("div",{className:"sales-insert",children:[l.jsx("h2",{className:"sales-insert--heading",children:"Sales Details"}),s.sales.member&&l.jsx("table",{className:"product-stock--grid",width:"30%",children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[l.jsx("th",{children:"Name"}),l.jsx("td",{children:s.sales.member.fullName})]}),(0,l.jsxs)("tr",{children:[l.jsx("th",{children:"Address"}),l.jsx("td",{children:s.sales.member.address})]}),(0,l.jsxs)("tr",{children:[l.jsx("th",{children:"Phone"}),l.jsx("td",{children:s.sales.member.phone})]})]})}),l.jsx(a.Z,{disableControls:!0,headings:d,exportSchema:["title","quantity","amount","total"],rawData:s.items.map((s,e)=>({title:{value:s.title},amount:{value:s.amount},quantity:{value:s.quantity},total:{value:+s.quantity*+s.amount}}))}),l.jsx("table",{className:"product-stock--grid",width:"40%",children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[l.jsx("th",{children:"Summery:"}),l.jsx("td",{})]}),(0,l.jsxs)("tr",{children:[l.jsx("th",{children:"Sales ID"}),l.jsx("td",{children:s.sales.id})]}),(0,l.jsxs)("tr",{children:[l.jsx("th",{children:"Sales Date"}),l.jsx("td",{children:new Date(s.sales.date).toUTCString()})]}),(0,l.jsxs)("tr",{children:[l.jsx("th",{children:"Payment Method"}),l.jsx("td",{children:s.sales.type})]}),(0,l.jsxs)("tr",{children:[l.jsx("th",{children:"Sub Total"}),(0,l.jsxs)("td",{children:["Rs.",s.sales.amount]})]}),(0,l.jsxs)("tr",{children:[l.jsx("th",{children:"Discount"}),(0,l.jsxs)("td",{children:["Rs.",s.sales.discount]})]}),(0,l.jsxs)("tr",{children:[l.jsx("th",{children:"Total Amount"}),(0,l.jsxs)("td",{children:["Rs.",+s.sales.amount-+s.sales.discount]})]})]})}),s.sales.remark&&(0,l.jsxs)("p",{className:"sales-insert--panel__right-notice",children:["Remarks: ",s.sales.remark]})]})})}}};