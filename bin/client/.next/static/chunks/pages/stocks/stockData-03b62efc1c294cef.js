(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76],{7047:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stocks/stockData",function(){return n(84)}])},84:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return StockTable}});var a=n(5893),r=n(3401);let l=[{name:"date",display:"Date"},{name:"billNumber",display:"Bill Number"},{name:"vendor",display:"Vendor"},{name:"product",display:"Product"},{name:"per",display:"Price"},{name:"quantity",display:"Quantity"},{name:"totalAmount",display:"Total Amount"},{name:"entryDate",display:"Entry Date"}];function StockTable(t){let{data:e,handleInsert:n}=t;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Z,{headings:l,exportSchema:["date","vendor","product","quantity","totalAmount","entryDate"],rawData:e.map((t,e)=>{var n,r;return{date:{value:new Date(t.date).toLocaleDateString()},billNumber:{value:t.bill.billNumber},vendor:{value:null!==(n=t.vendor.name)&&void 0!==n?n:t.vendor.id},product:{value:null!==(r=t.product.title)&&void 0!==r?r:t.product.id},quantity:{value:t.quantity,display:(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("strong",{className:"".concat(0>+t.quantity?"error":"success","-color"),children:"".concat(0>+t.quantity?"":"+").concat(t.quantity)})})},per:{value:"Rs."+(+t.amount).toFixed(2)},totalAmount:{value:"Rs."+(+t.amount*+t.quantity).toFixed(2)},entryDate:{value:new Date(t.inserted).toLocaleDateString()}}})}),(0,a.jsx)("table",{className:"product-stock--grid",width:"30%",children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Summery:"}),(0,a.jsx)("td",{})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Total Entries"}),(0,a.jsx)("td",{children:e.length})]})]})})]})}}},function(t){t.O(0,[664,401,774,888,179],function(){return t(t.s=7047)}),_N_E=t.O()}]);