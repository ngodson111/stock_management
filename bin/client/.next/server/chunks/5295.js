"use strict";exports.id=5295,exports.ids=[5295],exports.modules={5295:(e,s,d)=>{d.r(s),d.d(s,{default:()=>SeeLedger});var n=d(997),t=d(9091);function SeeLedger({onClose:e,vendor:s,bills:d,handleStockFetch:r}){return n.jsx(n.Fragment,{children:n.jsx(t.Z,{onClose:e,children:(0,n.jsxs)("div",{className:"vendor-stocks",children:[n.jsx("h1",{className:"vendor-stocks--heading",style:{textAlign:"center"},children:s.name}),(0,n.jsxs)("h4",{className:"vendor-stocks--heading",style:{textAlign:"center"},children:["Address: ",s.address,", Contact: ",s.contact]}),(0,n.jsxs)("table",{children:[n.jsx("thead",{children:(0,n.jsxs)("tr",{children:[n.jsx("th",{children:"SN."}),n.jsx("th",{children:"Date"}),n.jsx("th",{children:"Particular"}),n.jsx("th",{children:"DR"}),n.jsx("th",{children:"CR"})]})}),(0,n.jsxs)("tbody",{children:[d.length>0?d.map((e,s)=>(0,n.jsxs)("tr",{children:[n.jsx("td",{children:s+1}),n.jsx("td",{children:new Date(e.date).toLocaleDateString()}),n.jsx("td",{children:(0,n.jsxs)("strong",{className:"table-content--link",onClick:()=>r(e),children:["Goods Purchased (#",e.billNumber,")"]})}),n.jsx("td",{children:"-"}),(0,n.jsxs)("td",{children:["Rs.",e.amount]})]},s)):n.jsx("tr",{children:n.jsx("td",{colSpan:100,children:n.jsx("p",{className:"noresult",children:"No Entry Found"})})}),(0,n.jsxs)("tr",{children:[n.jsx("td",{}),n.jsx("td",{}),n.jsx("td",{children:n.jsx("strong",{children:"Balance"})}),n.jsx("td",{children:n.jsx("strong",{children:"Rs.0"})}),n.jsx("td",{children:(0,n.jsxs)("strong",{children:["Rs.",d.reduce((e,s)=>e+=+s.amount,0)]})})]})]})]})]})})})}}};