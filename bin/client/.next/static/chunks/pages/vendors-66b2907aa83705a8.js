(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[487],{4430:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vendors",function(){return t(4623)}])},8032:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return VendorTable}});var s=t(5893),l=t(3401),a=t(7945);let d=[{name:"name",display:"Name"},{name:"address",display:"Address"},{name:"contact",display:"Contact"},{name:"ledger",display:"Ledger Details"},{name:"updated",display:"Updated At"},{name:"inserted",display:"Created At"},{name:"actions",display:"Actions"}];function VendorTable(e){let{handleLedger:n,handleInsert:t,handleDelete:r,handleEdit:i,data:c}=e;return(0,s.jsx)(l.Z,{customActions:(0,s.jsx)(a.Z,{label:(0,s.jsxs)("span",{children:[(0,s.jsx)("i",{className:"fa-regular fa-plus"})," Create"]}),type:"primary",style:{minWidth:"10rem"},onClick:t}),headings:d,exportSchema:["name","address","contact","updated","inserted"],rawData:c.map((e,t)=>({name:{value:e.name},address:{value:e.address},contact:{value:e.contact},ledger:{value:e.id,display:(0,s.jsx)(a.Z,{label:"Open Ledger",type:"primary",onClick:()=>n(e)})},updated:{value:new Date(e.updated).toUTCString()},inserted:{value:new Date(e.inserted).toUTCString()},actions:{value:e.id,display:(0,s.jsxs)("div",{className:"table-content--actions",children:[(0,s.jsx)(a.Z,{label:(0,s.jsx)("i",{className:"fa-regular fa-edit"}),type:"primary",className:"table-content--actions__btn",onClick:()=>i(e)}),(0,s.jsx)(a.Z,{label:(0,s.jsx)("i",{className:"fa-regular fa-trash"}),type:"error",className:"table-content--actions__btn duotone",onClick:()=>r(e)})]})}}))})}},2092:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return EditVendor}});var s=t(5893),l=t(2006),a=t(7115),d=t(5506),r=t(8463),i=t(7679),c=t(7945),o=t(3104),h=t(2361),u=t(9091),x=t(8515),j=t(7294);let setupVendorInsertHotkeys=(e,n)=>{x.Z.setScope("vendorEdit"),Object.entries({"ctrl+esc":e,"ctrl+enter":n}).forEach(e=>{let[n,t]=e;(0,x.Z)(n,"vendorEdit",(e,n)=>{e.preventDefault(),t()})})};function EditVendor(e){let{onClose:n,data:t,scope:m}=e,p=(0,d.TL)(),[f,g]=(0,j.useState)(!1),{error:v,state:y,formKey:N,handleInput:b,handleSubmit:k,resetForm:C}=(0,l.Z)({data:t,schema:i.LE});(0,j.useEffect)(()=>(setupVendorInsertHotkeys(n,()=>g(!0)),()=>{x.Z.deleteScope("vendorEdit"),m&&x.Z.setScope(m)}),[]);let S=(0,j.useCallback)(()=>{g(e=>!e)},[]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.Z,{onClose:n,children:(0,s.jsxs)("div",{className:"vendor-edit",children:[(0,s.jsx)("h2",{className:"vendor-edit--heading",children:"Edit Vendor"}),(0,s.jsx)("div",{className:"vendor-edit--form",children:(0,s.jsxs)("div",{className:"vendor-edit--form",children:[(0,s.jsx)("h4",{className:"vendor-edit--heading",children:"Basic Information:"}),(0,s.jsx)(h.Z,{id:"name",isRequired:!0,label:"Name",placeholder:"eg. Naran Suppliers..",name:"name",onChange:b,defaultValue:y.name,error:v.name}),(0,s.jsx)(h.Z,{id:"address",isRequired:!0,label:"Address",placeholder:"eg. Kathmandu, Nepal..",name:"address",onChange:b,defaultValue:y.address,error:v.address}),(0,s.jsx)(h.Z,{id:"contact",isRequired:!0,label:"Contact",placeholder:"eg. 98XXXXXXXX or example@..",name:"contact",onChange:b,defaultValue:y.contact,error:v.contact})]})},N),(0,s.jsx)("div",{className:"vendor-edit--actions",children:(0,s.jsx)(c.Z,{label:"Save",type:"primary",onClick:S,style:{minWidth:"13rem"}})})]})}),f?(0,s.jsx)(o.Z,{cancel:S,confirm:()=>{k(e=>{p((0,r.Bx)({data:e,callback:()=>{S(),C(),n(),(0,a.Qm)("Vendor edited")}}))})},title:"Confirm Edit",message:"Are you sure you want to save changes?"}):null]})}},4623:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Vendors}});var s=t(5893),l=t(5946),a=t(8352),d=t(2259),r=t(5506),i=t(9008),c=t.n(i),o=t(3104),h=t(1091),u=t(7115),x=t(7294),j=t(4841),m=t(8463),p=t(3554),f=t(8032),g=t(8580),v=t(2092),y=t(5295),N=t(4001),b=t(647),k=t(5549);function Vendors(){let e=(0,r.TL)(),n=(0,r.CG)(e=>e.stock),t=(0,r.CG)(e=>e.vendor),i=(0,r.CG)(e=>e.auth),[C,S]=(0,x.useState)(null);(0,x.useEffect)(()=>{(!t.expires||t.expires&&t.expires-Date.now()<0)&&e((0,m.wZ)())},[t.expires,e]);let handleByBills=n=>e((0,N.Rd)(n)),handleInsert=()=>e((0,p.US)(!t.insert)),handleDelete=n=>e((0,p.Qu)(n)),handleEdit=n=>{e((0,p.mb)(n))},Z=(0,x.useCallback)(()=>{t.delete&&i.token&&e((0,m.vr)({id:t.delete.id,callback:()=>{handleDelete(null),(0,u.Qm)("Vendor deleted")}}))},[t.delete,i.token,e,handleDelete]);return(0,s.jsxs)(l.Z,{children:[(0,s.jsxs)(c(),{children:[(0,s.jsx)("title",{children:"Accounts"}),(0,s.jsx)("meta",{name:"description",content:"Stock Management System"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,s.jsx)("link",{rel:"icon",href:j.us.src})]}),(0,s.jsxs)("main",{children:[(0,s.jsxs)("div",{className:"framecontainer",children:[(0,s.jsx)(d.Z,{}),(0,s.jsx)("div",{className:"framecontainer-content",children:(0,s.jsxs)("div",{className:"vendor",children:[(0,s.jsx)(a.Z,{name:"Vendors",showBars:!0}),t.delete?(0,s.jsx)(o.Z,{cancel:()=>handleDelete(null),confirm:Z,message:"Are you sure you want to delete this item?",title:"Confirm Delete"}):null,C&&t.seeLedger&&i.token?(0,s.jsx)(y.default,{handleStockFetch:n=>{e((0,b.R$)(n.id))},onClose:()=>(S(null),(0,p.R0)(null)),vendor:C,bills:t.seeLedger}):null,n.byBills&&i.token?(0,s.jsx)(k.default,{onClose:()=>handleByBills(null),data:n.byBills}):null,t.insert&&i.token?(0,s.jsx)(g.default,{onClose:handleInsert}):null,t.edit&&i.token?(0,s.jsx)(v.default,{onClose:()=>handleEdit(null),data:t.edit}):null,(0,s.jsx)(f.default,{data:t.data,handleLedger:n=>{S(n),e((0,m.Un)(n.id))},handleDelete:handleDelete,handleEdit:handleEdit,handleInsert:handleInsert})]})})]}),t.loading?(0,s.jsx)(h.Z,{overlay:!0}):null,n.loading?(0,s.jsx)(h.Z,{overlay:!0}):null]})]})}},5295:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return SeeLedger}});var s=t(5893),l=t(9091);function SeeLedger(e){let{onClose:n,vendor:t,bills:a,handleStockFetch:d}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l.Z,{onClose:n,children:(0,s.jsxs)("div",{className:"vendor-stocks",children:[(0,s.jsx)("h1",{className:"vendor-stocks--heading",style:{textAlign:"center"},children:t.name}),(0,s.jsxs)("h4",{className:"vendor-stocks--heading",style:{textAlign:"center"},children:["Address: ",t.address,", Contact: ",t.contact]}),(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"SN."}),(0,s.jsx)("th",{children:"Date"}),(0,s.jsx)("th",{children:"Particular"}),(0,s.jsx)("th",{children:"DR"}),(0,s.jsx)("th",{children:"CR"})]})}),(0,s.jsxs)("tbody",{children:[a.length>0?a.map((e,n)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:n+1}),(0,s.jsx)("td",{children:new Date(e.date).toLocaleDateString()}),(0,s.jsx)("td",{children:(0,s.jsxs)("strong",{className:"table-content--link",onClick:()=>d(e),children:["Goods Purchased (#",e.billNumber,")"]})}),(0,s.jsxs)("td",{children:["Rs.",e.amount]}),(0,s.jsx)("td",{children:"-"})]},n)):(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colSpan:100,children:(0,s.jsx)("p",{className:"noresult",children:"No Entry Found"})})}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)("strong",{children:"Balance"})}),(0,s.jsx)("td",{children:(0,s.jsxs)("strong",{children:["Rs.",a.reduce((e,n)=>e+=+n.amount,0)]})}),(0,s.jsx)("td",{children:(0,s.jsx)("strong",{children:"Rs.0"})})]})]})]})]})})})}},5549:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return StockItemsTable}});var s=t(5893),l=t(9091);function StockItemsTable(e){let{onClose:n,data:t}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l.Z,{onClose:n,children:(0,s.jsxs)("div",{className:"vendor-stocks",children:[(0,s.jsx)("h2",{className:"vendor-stocks--heading",children:"Manage Stocks"}),(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"SN."}),(0,s.jsx)("th",{children:"Date"}),(0,s.jsx)("th",{children:"Particular"}),(0,s.jsx)("th",{children:"DR"}),(0,s.jsx)("th",{children:"CR"})]})}),(0,s.jsxs)("tbody",{children:[t.length>0?t.map((e,n)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:n+1}),(0,s.jsx)("td",{children:new Date(e.date).toLocaleDateString()}),(0,s.jsxs)("td",{style:{width:"40%"},children:["Purchase of"," ",(0,s.jsxs)("span",{className:"primary-color",children:[e.product.title,"(x",e.quantity,")"]})," ","from"," ",(0,s.jsx)("span",{className:"primary-color",children:e.vendor.name})]}),(0,s.jsxs)("td",{children:["Rs.",+e.amount*+e.quantity]}),(0,s.jsx)("td",{children:"-"})]},n)):(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colSpan:100,children:(0,s.jsx)("p",{className:"noresult",children:"No Entry Found"})})}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)("strong",{children:"Balance"})}),(0,s.jsx)("td",{children:(0,s.jsxs)("strong",{children:["Rs.",t.reduce((e,n)=>e+=+n.amount*+n.quantity,0)]})}),(0,s.jsx)("td",{children:(0,s.jsx)("strong",{children:"Rs.0"})})]})]})]})]})})})}}},function(e){e.O(0,[664,458,345,401,78,301,774,888,179],function(){return e(e.s=4430)}),_N_E=e.O()}]);