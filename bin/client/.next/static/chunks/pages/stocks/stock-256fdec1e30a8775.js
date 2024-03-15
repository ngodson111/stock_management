(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[279],{7177:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stocks/stock",function(){return a(9329)}])},9329:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ManageStock}});var n=a(5893),l=a(5506),r=a(9091),s=a(7294),i=a(647),d=a(84),o=a(4001),u=a(1091);function ManageStock(e){let{onClose:t,selectedProduct:a}=e,c=(0,l.TL)(),m=(0,l.CG)(e=>e.stock);return(0,s.useEffect)(()=>(a?c((0,i.gj)(a.id)):c((0,i.Sn)()),()=>{c((0,o.a_)([]))}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Z,{onClose:t,children:(0,n.jsxs)("div",{className:"product-stock",children:[(0,n.jsx)("h2",{className:"product-stock--heading",children:a?a.title:"Manage Stocks"}),(0,n.jsx)(d.default,{data:m.data,handleInsert:()=>c((0,o.US)(!m.insert))})]})}),m.loading?(0,n.jsx)(u.Z,{overlay:!0}):null]})}},84:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return StockTable}});var n=a(5893),l=a(3401);let r=[{name:"date",display:"Date"},{name:"billNumber",display:"Bill Number"},{name:"vendor",display:"Vendor"},{name:"product",display:"Product"},{name:"per",display:"Price"},{name:"quantity",display:"Quantity"},{name:"totalAmount",display:"Total Amount"},{name:"entryDate",display:"Entry Date"}];function StockTable(e){let{data:t,handleInsert:a}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{headings:r,exportSchema:["date","vendor","product","quantity","totalAmount","entryDate"],rawData:t.map((e,t)=>{var a,l;return{date:{value:new Date(e.date).toLocaleDateString()},billNumber:{value:e.bill.billNumber},vendor:{value:null!==(a=e.vendor.name)&&void 0!==a?a:e.vendor.id},product:{value:null!==(l=e.product.title)&&void 0!==l?l:e.product.id},quantity:{value:e.quantity,display:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("strong",{className:"".concat(0>+e.quantity?"error":"success","-color"),children:"".concat(0>+e.quantity?"":"+").concat(e.quantity)})})},per:{value:"Rs."+(+e.amount).toFixed(2)},totalAmount:{value:"Rs."+(+e.amount*+e.quantity).toFixed(2)},entryDate:{value:new Date(e.inserted).toLocaleDateString()}}})}),(0,n.jsx)("table",{className:"product-stock--grid",width:"30%",children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Summery:"}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Total Entries"}),(0,n.jsx)("td",{children:t.length})]})]})})]})}},1091:function(e,t,a){"use strict";a.d(t,{Z:function(){return UILoader}});var n=a(5893);function UILoader(e){let{overlay:t}=e;return(0,n.jsxs)("div",{className:"uiloader",children:[t?(0,n.jsx)("div",{className:"uiloader-overlay"}):null,(0,n.jsxs)("div",{className:"uiloader-wrapper",children:[(0,n.jsx)("div",{className:"uiloader-item"}),(0,n.jsx)("div",{className:"uiloader-shadow"})]})]})}},9091:function(e,t,a){"use strict";a.d(t,{Z:function(){return UIModal}});var n=a(5893),l=a(7294);function UIModal(e){let{children:t,onClose:a,style:r,showAnimation:s}=e,i=(0,l.useRef)(null);return(0,n.jsxs)("div",{className:"uimodal",children:[(0,n.jsx)("div",{className:"uimodal-overlay"}),(0,n.jsxs)("div",{className:"uimodal-content",style:r,ref:i,children:[(0,n.jsx)("div",{className:"uimodal-content--cross",onClick:()=>{var e;if(!s)return null==a?void 0:a();null===(e=i.current)||void 0===e||e.classList.add("hide"),setTimeout(()=>null==a?void 0:a(),700)},children:(0,n.jsx)("i",{className:"fa-regular fa-times"})}),t]})]})}}},function(e){e.O(0,[664,401,774,888,179],function(){return e(e.s=7177)}),_N_E=e.O()}]);