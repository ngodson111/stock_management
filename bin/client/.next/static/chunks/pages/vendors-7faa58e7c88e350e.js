(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[487],{3029:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vendors",function(){return s(5383)}])},6277:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return VendorTable}});var t=s(2322),l=s(6698),a=s(590);let d=[{name:"name",display:"Name"},{name:"address",display:"Address"},{name:"contact",display:"Contact"},{name:"ledger",display:"Ledger Details"},{name:"updated",display:"Updated At"},{name:"inserted",display:"Created At"},{name:"actions",display:"Actions"}];function VendorTable(e){let{handleLedger:n,handleInsert:s,handleDelete:r,handleEdit:i,data:c}=e;return(0,t.jsx)(l.Z,{customActions:(0,t.jsx)(a.Z,{label:(0,t.jsxs)("span",{children:[(0,t.jsx)("i",{className:"fa-regular fa-plus"})," Create"]}),type:"primary",style:{minWidth:"10rem"},onClick:s}),headings:d,exportSchema:["name","address","contact","updated","inserted"],rawData:c.map((e,s)=>({name:{value:e.name},address:{value:e.address},contact:{value:e.contact},ledger:{value:e.id,display:(0,t.jsx)(a.Z,{label:"Open Ledger",type:"primary",onClick:()=>n(e)})},updated:{value:new Date(e.updated).toUTCString()},inserted:{value:new Date(e.inserted).toUTCString()},actions:{value:e.id,display:(0,t.jsxs)("div",{className:"table-content--actions",children:[(0,t.jsx)(a.Z,{label:(0,t.jsx)("i",{className:"fa-regular fa-edit"}),type:"primary",className:"table-content--actions__btn",onClick:()=>i(e)}),(0,t.jsx)(a.Z,{label:(0,t.jsx)("i",{className:"fa-regular fa-trash"}),type:"error",className:"table-content--actions__btn duotone",onClick:()=>r(e)})]})}}))})}},1785:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return EditVendor}});var t=s(2322),l=s(566),a=s(9638),d=s(8039),r=s(1812),i=s(1410),c=s(590),o=s(725),h=s(570),u=s(1383),x=s(2784);function EditVendor(e){let{onClose:n,data:s}=e,j=(0,d.TL)(),[m,p]=(0,x.useState)(!1),{error:f,state:g,formKey:v,handleInput:y,handleSubmit:N,resetForm:b}=(0,l.Z)({data:s,schema:i.LE}),C=(0,x.useCallback)(()=>{p(e=>!e)},[]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.Z,{onClose:n,children:(0,t.jsxs)("div",{className:"vendor-edit",children:[(0,t.jsx)("h2",{className:"vendor-edit--heading",children:"Edit Vendor"}),(0,t.jsx)("div",{className:"vendor-edit--form",children:(0,t.jsxs)("div",{className:"vendor-edit--form",children:[(0,t.jsx)("h4",{className:"vendor-edit--heading",children:"Basic Information:"}),(0,t.jsx)(h.Z,{id:"name",isRequired:!0,label:"Name",placeholder:"eg. Naran Suppliers..",name:"name",onChange:y,defaultValue:g.name,error:f.name}),(0,t.jsx)(h.Z,{id:"address",isRequired:!0,label:"Address",placeholder:"eg. Kathmandu, Nepal..",name:"address",onChange:y,defaultValue:g.address,error:f.address}),(0,t.jsx)(h.Z,{id:"contact",isRequired:!0,label:"Contact",placeholder:"eg. 98XXXXXXXX or example@..",name:"contact",onChange:y,defaultValue:g.contact,error:f.contact})]})},v),(0,t.jsx)("div",{className:"vendor-edit--actions",children:(0,t.jsx)(c.Z,{label:"Save",type:"primary",onClick:C,style:{minWidth:"13rem"}})})]})}),m?(0,t.jsx)(o.Z,{cancel:C,confirm:()=>{N(e=>{j((0,r.Bx)({data:e,callback:()=>{C(),b(),(0,a.Qm)("Vendor edited")}}))})},title:"Confirm Edit",message:"Are you sure you want to save changes?"}):null]})}},5383:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return Vendors}});var t=s(2322),l=s(831),a=s(3444),d=s(3412),r=s(8039),i=s(7729),c=s.n(i),o=s(725),h=s(9934),u=s(9638),x=s(2784),j=s(5098),m=s(1812),p=s(967),f=s(6277),g=s(9803),v=s(1785),y=s(2810),N=s(3985),b=s(9159),C=s(70);function Vendors(){let e=(0,r.TL)(),n=(0,r.CG)(e=>e.stock),s=(0,r.CG)(e=>e.vendor),i=(0,r.CG)(e=>e.auth),[k,S]=(0,x.useState)(null);(0,x.useEffect)(()=>{(!s.expires||s.expires&&s.expires-Date.now()<0)&&e((0,m.wZ)())},[s.expires,e]);let handleByBills=n=>e((0,N.Rd)(n)),handleInsert=()=>e((0,p.US)(!s.insert)),handleDelete=n=>e((0,p.Qu)(n)),handleEdit=n=>{e((0,p.mb)(n))},Z=(0,x.useCallback)(()=>{s.delete&&i.token&&e((0,m.vr)({id:s.delete.id,callback:()=>{handleDelete(null),(0,u.Qm)("Vendor deleted")}}))},[s.delete,i.token,e,handleDelete]);return(0,t.jsxs)(l.Z,{children:[(0,t.jsxs)(c(),{children:[(0,t.jsx)("title",{children:"Vendor"}),(0,t.jsx)("meta",{name:"description",content:"Stock Management System"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,t.jsx)("link",{rel:"icon",href:j.us.src})]}),(0,t.jsxs)("main",{children:[(0,t.jsxs)("div",{className:"framecontainer",children:[(0,t.jsx)(d.Z,{}),(0,t.jsx)("div",{className:"framecontainer-content",children:(0,t.jsxs)("div",{className:"vendor",children:[(0,t.jsx)(a.Z,{name:"Vendors",showBars:!0}),s.delete?(0,t.jsx)(o.Z,{cancel:()=>handleDelete(null),confirm:Z,message:"Are you sure you want to delete this item?",title:"Confirm Delete"}):null,k&&s.seeLedger&&i.token?(0,t.jsx)(y.default,{handleStockFetch:n=>{e((0,b.R$)(n.id))},onClose:()=>(S(null),(0,p.R0)(null)),vendor:k,bills:s.seeLedger}):null,n.byBills&&i.token?(0,t.jsx)(C.default,{onClose:()=>handleByBills(null),data:n.byBills}):null,s.insert&&i.token?(0,t.jsx)(g.default,{onClose:handleInsert}):null,s.edit&&i.token?(0,t.jsx)(v.default,{onClose:()=>handleEdit(null),data:s.edit}):null,(0,t.jsx)(f.default,{data:s.data,handleLedger:n=>{S(n),e((0,m.Un)(n.id))},handleDelete:handleDelete,handleEdit:handleEdit,handleInsert:handleInsert})]})})]}),s.loading?(0,t.jsx)(h.Z,{overlay:!0}):null,n.loading?(0,t.jsx)(h.Z,{overlay:!0}):null]})]})}},2810:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return SeeLedger}});var t=s(2322),l=s(1383);function SeeLedger(e){let{onClose:n,vendor:s,bills:a,handleStockFetch:d}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(l.Z,{onClose:n,children:(0,t.jsxs)("div",{className:"vendor-stocks",children:[(0,t.jsx)("h1",{className:"vendor-stocks--heading",style:{textAlign:"center"},children:s.name}),(0,t.jsxs)("h4",{className:"vendor-stocks--heading",style:{textAlign:"center"},children:["Address: ",s.address,", Contact: ",s.contact]}),(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"SN."}),(0,t.jsx)("th",{children:"Date"}),(0,t.jsx)("th",{children:"Particular"}),(0,t.jsx)("th",{children:"DR"}),(0,t.jsx)("th",{children:"CR"})]})}),(0,t.jsxs)("tbody",{children:[a.length>0?a.map((e,n)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:n+1}),(0,t.jsx)("td",{children:new Date(e.date).toLocaleDateString()}),(0,t.jsx)("td",{children:(0,t.jsxs)("strong",{className:"table-content--link",onClick:()=>d(e),children:["Goods Purchased (#",e.billNumber,")"]})}),(0,t.jsxs)("td",{children:["Rs.",e.amount]}),(0,t.jsx)("td",{children:"-"})]},n)):(0,t.jsx)("tr",{children:(0,t.jsx)("td",{colSpan:100,children:(0,t.jsx)("p",{className:"noresult",children:"No Entry Found"})})}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Balance"})}),(0,t.jsx)("td",{children:(0,t.jsxs)("strong",{children:["Rs.",a.reduce((e,n)=>e+=+n.amount,0)]})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Rs.0"})})]})]})]})]})})})}},70:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return StockItemsTable}});var t=s(2322),l=s(1383);function StockItemsTable(e){let{onClose:n,data:s}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(l.Z,{onClose:n,children:(0,t.jsxs)("div",{className:"vendor-stocks",children:[(0,t.jsx)("h2",{className:"vendor-stocks--heading",children:"Manage Stocks"}),(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"SN."}),(0,t.jsx)("th",{children:"Date"}),(0,t.jsx)("th",{children:"Particular"}),(0,t.jsx)("th",{children:"DR"}),(0,t.jsx)("th",{children:"CR"})]})}),(0,t.jsxs)("tbody",{children:[s.length>0?s.map((e,n)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:n+1}),(0,t.jsx)("td",{children:new Date(e.date).toLocaleDateString()}),(0,t.jsxs)("td",{style:{width:"40%"},children:["Purchase of"," ",(0,t.jsxs)("span",{className:"primary-color",children:[e.product.title,"(x",e.quantity,")"]})," ","from"," ",(0,t.jsx)("span",{className:"primary-color",children:e.vendor.name})]}),(0,t.jsxs)("td",{children:["Rs.",+e.amount*+e.quantity]}),(0,t.jsx)("td",{children:"-"})]},n)):(0,t.jsx)("tr",{children:(0,t.jsx)("td",{colSpan:100,children:(0,t.jsx)("p",{className:"noresult",children:"No Entry Found"})})}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Balance"})}),(0,t.jsx)("td",{children:(0,t.jsxs)("strong",{children:["Rs.",s.reduce((e,n)=>e+=+n.amount*+n.quantity,0)]})}),(0,t.jsx)("td",{children:(0,t.jsx)("strong",{children:"Rs.0"})})]})]})]})]})})})}}},function(e){e.O(0,[97,291,698,705,217,774,888,179],function(){return e(e.s=3029)}),_N_E=e.O()}]);