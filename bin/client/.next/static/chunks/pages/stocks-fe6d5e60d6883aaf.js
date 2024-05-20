(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[170],{1088:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stocks",function(){return a(8194)}])},3634:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ProductTable}});var n=a(5893),l=a(3401),i=a(7945),s=a(7784);let r=[{name:"title",display:"Title"},{name:"rack",display:"Rack Info."},{name:"tags",display:"Tags"},{name:"buyingPrice",display:"Buying Price"},{name:"sellingPrice",display:"Selling Price"},{name:"profitOrLoss",display:"Profit/Loss"},{name:"quantity",display:"Quantity"},{name:"updated",display:"Updated At"},{name:"inserted",display:"Created At"},{name:"actions",display:"Actions"}];function ProductTable(e){let{handleInsert:t,handleDelete:a,handleEdit:d,handleStock:c,data:o}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(l.Z,{customActions:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{label:(0,n.jsxs)("span",{children:[(0,n.jsx)("i",{className:"fa-regular fa-plus"})," Create Product"]}),type:"secondary",onClick:t}),(0,n.jsx)(i.Z,{label:"Manage Stock",type:"primary",style:{minWidth:"10rem"},onClick:()=>c("general")})]}),headings:r,exportSchema:["title","rack","tags","quantity","buyingPrice","sellingPrice","profitOrLoss","updated","inserted"],rawData:o.map((e,t)=>{var l;let r=+e.sellingPrice-+e.buyingPrice;return{code:{value:e.code},title:{value:e.title,display:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("strong",{className:"table-content--link",onClick:()=>(0,s.vQ)(e.title),children:e.title})," ",(0,n.jsxs)("span",{className:"table-content--link",onClick:()=>(0,s.vQ)(e.code),children:["(",e.code,")"]})]})},rack:{value:e.rack||"N/A"},tags:{value:e.tags||"N/A",display:(0,n.jsx)("div",{style:{display:"flex",columnGap:".2rem"},children:null===(l=e.tags)||void 0===l?void 0:l.split(",").map(e=>(0,n.jsx)("span",{className:"table-content--label",children:e},e))})},quantity:{value:e.quantity,display:(0,n.jsx)(i.Z,{label:e.quantity+" In Stock",type:10>+e.quantity?"error":"success",onClick:()=>c(e)})},buyingPrice:{value:"Rs."+e.buyingPrice},sellingPrice:{value:"Rs."+e.sellingPrice},profitOrLoss:{value:r,display:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("strong",{className:"".concat(r<0?"error":"success","-color"),children:["Rs.",r]})})},updated:{value:new Date(e.updated).toUTCString()},inserted:{value:new Date(e.inserted).toUTCString()},actions:{value:e.id,display:(0,n.jsxs)("div",{className:"table-content--actions",children:[(0,n.jsx)(i.Z,{label:(0,n.jsx)("i",{className:"fa-regular fa-edit"}),type:"primary",className:"table-content--actions__btn",onClick:()=>d(e)}),(0,n.jsx)(i.Z,{label:(0,n.jsx)("i",{className:"fa-regular fa-trash"}),type:"error",className:"table-content--actions__btn duotone",onClick:()=>a(e)})]})}}})})})}},2247:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return EditProduct}});var n=a(5893),l=a(2006),i=a(7115),s=a(5506),r=a(5382),d=a(470),c=a(7945),o=a(3104),u=a(2361),m=a(9091),h=a(8699),g=a(5152),p=a.n(g),x=a(7294);let y=p()(()=>Promise.all([a.e(326),a.e(911),a.e(315)]).then(a.bind(a,2315)),{loadableGenerated:{webpack:()=>[2315]},ssr:!1});function EditProduct(e){var t,a;let{onClose:g,theme:p,data:j}=e,f=(0,s.TL)(),[v,k]=(0,x.useState)(!1),{error:b,state:P,formKey:N,handleInput:C,handleSubmit:S,resetForm:Z}=(0,l.Z)({schema:d.xs,data:j}),D=(0,x.useCallback)(()=>{k(e=>!e)},[]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m.Z,{onClose:g,children:(0,n.jsxs)("div",{className:"product-edit",children:[(0,n.jsx)("h2",{className:"product-edit--heading",children:"Edit Product"}),(0,n.jsx)("div",{className:"product-edit--form",children:(0,n.jsxs)("div",{className:"product-edit--form",children:[(0,n.jsxs)("div",{className:"product-edit--form__left",children:[(0,n.jsx)("h4",{className:"product-edit--heading",children:"Basic Information:"}),(0,n.jsxs)("div",{className:"product-edit--group",children:[(0,n.jsx)(u.Z,{id:"code",isRequired:!0,label:"Product Code",placeholder:"eg. 328434-2873..",name:"code",onChange:C,defaultValue:P.code,error:b.code,autoFocus:!0}),(0,n.jsx)(u.Z,{id:"rack",label:"Rack Information",placeholder:"eg. A3",name:"rack",onChange:C,defaultValue:P.rack,error:b.rack})]}),(0,n.jsx)(u.Z,{id:"title",isRequired:!0,label:"Product Name",placeholder:"eg. Dairy Milk 100g..",name:"title",onChange:C,defaultValue:P.title,error:b.title}),(0,n.jsxs)("div",{className:"product-edit--group",children:[(0,n.jsx)(u.Z,{id:"buyingPrice",isRequired:!0,label:"Buying Price",placeholder:"eg. 1500",name:"buyingPrice",onChange:C,defaultValue:null===(t=P.buyingPrice)||void 0===t?void 0:t.toString(),error:b.buyingPrice}),(0,n.jsx)(u.Z,{id:"sellingPrice",isRequired:!0,label:"Selling Price",placeholder:"eg. 2000",name:"sellingPrice",onChange:C,defaultValue:null===(a=P.sellingPrice)||void 0===a?void 0:a.toString(),error:b.sellingPrice})]}),(0,n.jsx)(h.Z,{placeholder:"eg. Chocolate,Bars",label:"Tags",defaultValue:P.tags||void 0,error:b.tags,onChange:C,id:"tags",name:"tags",joinString:",",instruction:"* Tags are used for searching where it helps in making product search variation."})]}),(0,n.jsxs)("div",{className:"product-edit--form__right",children:[(0,n.jsx)("h4",{className:"product-edit--heading",children:"Description:"}),(0,n.jsx)(y,{id:"description",formatedEditorConfig:{theme:p,readonly:!1,height:300},name:"description",onChange:C,defaultValue:P.description,error:b.description})]})]})},N),(0,n.jsx)("div",{className:"product-edit--actions",children:(0,n.jsx)(c.Z,{label:"Save",type:"primary",onClick:D,style:{minWidth:"13rem"}})})]})}),v?(0,n.jsx)(o.Z,{cancel:D,confirm:()=>{S(e=>{f((0,r.zG)({data:e,callback:()=>{D(),g(),(0,i.Qm)("Product edited")}}))})},title:"Confirm Edit",message:"Are you sure you want to save changes?"}):null]})}},8194:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Products}});var n=a(5893),l=a(5946),i=a(8352),s=a(2259),r=a(5506),d=a(9008),c=a.n(d),o=a(3104),u=a(1091),m=a(7115),h=a(7294),g=a(4841),p=a(365),x=a(5382),y=a(3634),j=a(6078),f=a(2247),v=a(9329);function Products(){let e=(0,r.TL)(),t=(0,r.CG)(e=>e.product),a=(0,r.CG)(e=>e.auth),d=(0,r.CG)(e=>e.system);(0,h.useEffect)(()=>{(!t.expires||t.expires&&t.expires-Date.now()<0)&&e((0,x.Xp)())},[t.expires,e]);let handleStock=t=>e((0,p.y)("string"==typeof t?t:null!=t?t:null)),handleInsert=()=>e((0,p.US)(!t.insert)),handleDelete=t=>e((0,p.Qu)(t)),handleEdit=t=>{e((0,p.mb)(t))},k=(0,h.useCallback)(()=>{t.delete&&a.token&&e((0,x.Ir)({id:t.delete.id,callback:()=>{handleDelete(null),(0,m.Qm)("Product deleted")}}))},[t.delete,a.token,e,handleDelete]);return(0,n.jsxs)(l.Z,{children:[(0,n.jsxs)(c(),{children:[(0,n.jsx)("title",{children:"Product"}),(0,n.jsx)("meta",{name:"description",content:"Stock Management System"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:g.us.src})]}),(0,n.jsxs)("main",{children:[(0,n.jsxs)("div",{className:"framecontainer",children:[(0,n.jsx)(s.Z,{}),(0,n.jsx)("div",{className:"framecontainer-content",children:(0,n.jsxs)("div",{className:"product",children:[(0,n.jsx)(i.Z,{name:"Stocks",showBars:!0}),t.delete?(0,n.jsx)(o.Z,{cancel:()=>handleDelete(null),confirm:k,message:"Are you sure you want to delete this item?",title:"Confirm Delete"}):null,t.stock&&a.token?(0,n.jsx)(v.default,{onClose:()=>handleStock(null),selectedProduct:"string"!=typeof t.stock&&t.stock?t.stock:void 0}):null,t.insert&&a.token?(0,n.jsx)(j.default,{theme:d.theme,onClose:handleInsert}):null,t.edit&&a.token?(0,n.jsx)(f.default,{onClose:()=>handleEdit(null),data:{...t.edit,quantity:t.edit.quantity.toString(),sellingPrice:t.edit.sellingPrice.toString(),buyingPrice:t.edit.buyingPrice.toString()},theme:d.theme}):null,(0,n.jsx)(y.default,{data:t.data,handleDelete:handleDelete,handleEdit:handleEdit,handleInsert:handleInsert,handleStock:handleStock})]})})]}),t.loading?(0,n.jsx)(u.Z,{overlay:!0}):null]})]})}},9329:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ManageStock}});var n=a(5893),l=a(5506),i=a(9091),s=a(7294),r=a(647),d=a(84),c=a(4001),o=a(1091);function ManageStock(e){let{onClose:t,selectedProduct:a}=e,u=(0,l.TL)(),m=(0,l.CG)(e=>e.stock);return(0,s.useEffect)(()=>(a?u((0,r.gj)(a.id)):u((0,r.Sn)()),()=>{u((0,c.a_)([]))}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{onClose:t,children:(0,n.jsxs)("div",{className:"product-stock",children:[(0,n.jsx)("h2",{className:"product-stock--heading",children:a?a.title:"Manage Stocks"}),(0,n.jsx)(d.default,{data:m.data,handleInsert:()=>u((0,c.US)(!m.insert))})]})}),m.loading?(0,n.jsx)(o.Z,{overlay:!0}):null]})}},84:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return StockTable}});var n=a(5893),l=a(3401);let i=[{name:"date",display:"Date"},{name:"billNumber",display:"Bill Number"},{name:"vendor",display:"Vendor"},{name:"product",display:"Product"},{name:"per",display:"Price"},{name:"quantity",display:"Quantity"},{name:"totalAmount",display:"Total Amount"},{name:"entryDate",display:"Entry Date"}];function StockTable(e){let{data:t,handleInsert:a}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{headings:i,exportSchema:["date","vendor","product","quantity","totalAmount","entryDate"],rawData:t.map((e,t)=>{var a,l;return{date:{value:new Date(e.date).toLocaleDateString()},billNumber:{value:e.bill.billNumber},vendor:{value:null!==(a=e.vendor.name)&&void 0!==a?a:e.vendor.id},product:{value:null!==(l=e.product.title)&&void 0!==l?l:e.product.id},quantity:{value:e.quantity,display:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("strong",{className:"".concat(0>+e.quantity?"error":"success","-color"),children:"".concat(0>+e.quantity?"":"+").concat(e.quantity)})})},per:{value:"Rs."+(+e.amount).toFixed(2)},totalAmount:{value:"Rs."+(+e.amount*+e.quantity).toFixed(2)},entryDate:{value:new Date(e.inserted).toLocaleDateString()}}})}),(0,n.jsx)("table",{className:"product-stock--grid",width:"30%",children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Summery:"}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Total Entries"}),(0,n.jsx)("td",{children:t.length})]})]})})]})}}},function(e){e.O(0,[664,458,345,401,78,301,774,888,179],function(){return e(e.s=1088)}),_N_E=e.O()}]);