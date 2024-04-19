"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{5946:function(e,t,a){var s=a(7294),r=a(1163),n=a(5506),l=a(4006),i=a(4007),c=a(5502);t.Z=e=>{let{children:t}=e,a=(0,r.useRouter)(),d=(0,n.TL)(),o=(0,n.CG)(e=>e.auth);return((0,s.useEffect)(()=>{a.asPath.indexOf("[")>-1||(o.token&&o.isLoggedIn?d((0,l.c)({})):a.push("/?redirect=".concat(encodeURIComponent(a.asPath))))},[o.token,d,a]),addEventListener("storage",e=>{if(e.key&&0>e.key.indexOf(i.$u))return;let t=e.newValue?JSON.parse(JSON.parse(e.newValue).auth):null;t&&d((0,c.Vp)(t))}),o.token&&o.isLoggedIn)?t:(a.push("/?redirect=".concat(encodeURIComponent(a.asPath))),null)}},8352:function(e,t,a){a.d(t,{Z:function(){return NavBar}});var s=a(5893),r=a(4841),n=a(5502),l=a(4503),i=a(5506),c=a(5675),d=a.n(c),o=a(1163);function NavBar(e){let{name:t,showBars:a,back:c}=e,u=(0,o.useRouter)(),h=(0,i.TL)(),m=(0,i.CG)(e=>e.system);return(0,s.jsxs)("div",{className:"navbar",children:[(0,s.jsxs)("div",{className:"navbar-left",children:[c?(0,s.jsx)("i",{className:"fa-regular fa-chevron-left navbar-left--icon__back",onClick:()=>c()}):null,a?(0,s.jsx)("i",{className:"navbar-left--icon__bar fa-light fa-bars",onClick:e=>h((0,l.js)())}):null,(0,s.jsx)("h2",{className:"navbar-left--text",children:t})]}),(0,s.jsx)("div",{className:"navbar-right",children:(0,s.jsxs)("div",{className:"navbar-right",children:[(0,s.jsx)("div",{className:"navbar-right--item",onClick:e=>{h((0,l.Lr)("dark"===m.theme?"light":"dark"))},children:(0,s.jsx)("i",{className:"fa-regular fa-".concat("dark"===m.theme?"moon":"sun-bright")})}),(0,s.jsx)("div",{onClick:e=>{h((0,n.kS)()),u.replace("/")},className:"navbar-right--item navbar-right--item__logout",children:(0,s.jsx)("i",{className:"fa-regular fa-arrow-right-from-bracket"})}),(0,s.jsx)("div",{className:"navbar-right--profile",children:(0,s.jsx)(d(),{src:r.dd,alt:"User profile"})}),(0,s.jsx)("div",{className:"navbar-right--name",children:"Valid Till: 2025-01-01"})]})})]})}},2259:function(e,t,a){a.d(t,{Z:function(){return Sidebar}});var s=a(5893);a(4841);var r=a(7965),n=a(4503),l=a(5506),i=a(1664),c=a.n(i),d=a(1163),o=a(3401),u=a(7115),h=a(365),m=a(5382),p=a(7945),f=a(3104),x=a(2361),j=a(9091),b=a(4200),v=a(7294),g=a(3554),y=a(7784),A=a(6078),N=a(8463),I=a(8580),C=a(647),S=a(1091),k=a(8515);let w=[{name:"title",display:"Title"},{name:"amount",display:"Amount"},{name:"quantity",display:"Quantity"},{name:"subtotal",display:"Sub Total"},{name:"actions",display:"Actions"}],setupPurchaseHotkeys=(e,t)=>{k.Z.setScope("purchase"),Object.entries({"ctrl+esc":e,"ctrl+enter":t}).forEach(e=>{let[t,a]=e;(0,k.Z)(t,"purchase",(e,t)=>{e.preventDefault(),a()})})};function InsertPurchase(e){let{onClose:t,scope:a}=e,r=(0,l.TL)(),n=(0,l.CG)(e=>e.system),i=(0,l.CG)(e=>e.vendor),c=(0,l.CG)(e=>e.product),d=(0,l.CG)(e=>e.stock),[o,w]=(0,v.useState)(1),[Z,V]=(0,v.useState)(!1),[P,q]=(0,v.useState)(!1),[R,O]=(0,v.useState)(""),[U,E]=(0,v.useState)(null),[D,B]=(0,v.useState)(new Date),[_,G]=(0,v.useState)({});(0,v.useEffect)(()=>(setupPurchaseHotkeys(t,()=>{q(!0)}),()=>{k.Z.deleteScope("purchase"),a&&k.Z.setScope(a)}),[]);let handleVendorInsert=()=>r((0,g.jb)(!i.insert)),handleProductInsert=()=>r((0,h.US)(!c.insert));(0,v.useEffect)(()=>{(!c.expires||c.expires&&c.expires-Date.now()<0)&&r((0,m.Xp)())},[c.expires,r]),(0,v.useEffect)(()=>{(!i.expires||i.expires&&i.expires-Date.now()<0)&&r((0,N.wZ)())},[i.expires,r]);let handleBillNumber=e=>{O(e)},handlePurchaseDate=e=>{let t=new Date(e);t instanceof Date&&B(t)},handleVendorDetails=e=>{let t=i.data.find(t=>t.id===e);if(!t)return(0,u.Iv)("Vendor not found");E(t)},resetItems=()=>{G({}),E(null),V(!1)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(j.Z,{onClose:t,children:(0,s.jsxs)("div",{className:"purchase-insert fixed",children:[(0,s.jsx)("h2",{className:"purchase-insert--heading",children:"Purchase Bill"}),(0,s.jsxs)("div",{className:"purchase-insert--actions",children:[(0,s.jsx)(p.Z,{label:(0,s.jsxs)("span",{children:[(0,s.jsx)("i",{className:"fa-regular fa-plus"})," Create"]}),type:"primary",style:{minWidth:"10rem"},onClick:()=>q(!0)}),(0,s.jsx)(p.Z,{label:"Reset",type:"error",className:"duotone",style:{minWidth:"10rem"},onClick:()=>V(!0)})]}),(0,s.jsx)("table",{className:"purchase-stock--grid",width:"70%",children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Bill Number:"}),(0,s.jsx)("td",{children:(0,s.jsx)(x.Z,{isRequired:!0,autoFocus:!0,id:"billNumber",name:"billNumber",placeholder:"eg. 0005",style:{width:"30rem"},defaultValue:R,onChange:e=>handleBillNumber(e.target.value)})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Purchase Date:"}),(0,s.jsx)("td",{children:(0,s.jsx)(x.Z,{isRequired:!0,type:"date",id:"date",name:"date",style:{width:"30rem"},defaultValue:(0,y.zM)(D),max:(0,y.zM)(new Date),onChange:e=>handlePurchaseDate(e.target.value)})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Vendor:"}),(0,s.jsx)("td",{children:(0,s.jsxs)("div",{style:{display:"flex",gap:".3rem",alignItems:"flex-end"},children:[(0,s.jsx)(b.Z,{isRequired:!0,placeholder:"Select Vendor",showSearch:!0,options:i.data.map(e=>({value:e.id,displayValue:"".concat(e.name," (").concat(e.contact,")"),search:"".concat(e.name," ").concat(e.address," ").concat(e.contact)})),style:{width:"30rem"},onChange:e=>handleVendorDetails(e.target.value),defaultValue:null==U?void 0:U.id}),(0,s.jsx)(p.Z,{label:(0,s.jsx)("span",{children:(0,s.jsx)("i",{className:"fa-regular fa-plus"})}),type:"primary",style:{minWidth:"4rem"},onClick:()=>handleVendorInsert()})]})})]})]})}),(0,s.jsx)(CurrentPurchaseBillTable,{data:Object.values(_),products:c.data,addProduct:e=>{let t=c.data.find(t=>t.id===e);if(!t)return(0,u.Iv)("Item not found");let a=_[t.id];a?G(e=>({...e,[t.id]:{...a,quantity:(+a.quantity+1).toString(),subtotal:(+a.amount*(+a.quantity+1)).toString()}})):G(e=>({...e,[t.id]:{amount:t.buyingPrice,quantity:"1",subtotal:t.buyingPrice,title:t.title,productId:t.id,limit:t.quantity}}))},handleProductInsert:handleProductInsert,changeItemAmount:(e,t)=>{let a=_[e];G(s=>({...s,[e]:{...a,amount:t.toString(),subtotal:(t*+a.quantity).toString()}}))},decreaseItemQuantity:e=>{let t=_[e];if(!t||1>=+t.quantity)return;let a=+t.quantity-1;G(s=>({...s,[e]:{...t,quantity:a.toString(),subtotal:(+a*+t.amount).toString()}}))},increaseItemQuantity:(e,t)=>{let a=_[e];if(!a)return;let s=null!=t?t:+a.quantity+1;G(t=>({...t,[e]:{...a,quantity:s.toString(),subtotal:(+s*+a.amount).toString()}}))},removeItem:e=>{G(t=>{let a={...t};return delete a[e],a})}},Object.keys(_).length),(0,s.jsx)("br",{}),(0,s.jsx)("table",{className:"product-stock--grid",width:"70%",children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Summery:"}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Sales Date:"}),(0,s.jsx)("td",{children:(0,y.zM)(D)})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Total Amount"}),(0,s.jsxs)("td",{children:["Rs.",Object.values(_).reduce((e,t)=>e=+e+ +t.subtotal,0)," ","(",Object.keys(_).length," Item/s)"]})]}),U&&(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Vendor"}),(0,s.jsxs)("td",{children:[U.name," (",U.address,")"]})]})]})})]},o)}),c.insert?(0,s.jsx)(A.default,{scope:"purchase",onClose:handleProductInsert,theme:n.theme}):null,i.insert?(0,s.jsx)(I.default,{scope:"purchase",onClose:handleVendorInsert}):null,Z?(0,s.jsx)(f.Z,{cancel:()=>V(!1),confirm:resetItems,title:"Confirm Reset",scope:"purchase",message:"Are you sure you want to reset current pruchase?"}):null,P?(0,s.jsx)(f.Z,{cancel:()=>q(!1),confirm:()=>{if(!R)return q(!1),(0,u.Iv)("Bill number is required");if(!U)return q(!1),(0,u.Iv)("Please select vendor");if(!D)return q(!1),(0,u.Iv)("Date is required");if(Object.keys(_).length<1)return q(!1),(0,u.Iv)("Atlease one item is required");let e=Object.values(_).map(e=>({rate:e.amount.toString(),productId:e.productId,quantity:e.quantity}));r((0,C.QO)({data:{billNumber:R,date:D.toISOString(),products:e,vendorId:U.id},callback:()=>{resetItems(),E(null),O(""),q(!1),w(e=>e+1),(0,u.Qm)("Purchase bill created"),setTimeout(()=>{r((0,h.Fw)(e.map(e=>({id:e.productId,quantity:+e.quantity}))))},500)}}))},title:"Place Order",scope:"purchase",message:"Are you sure you want to place purchase order?"}):null,c.loading||c.loading||i.loading||d.loading?(0,s.jsx)(S.Z,{overlay:!0}):null]})}let CurrentPurchaseBillTable=e=>{let{data:t,products:a,addProduct:r,handleProductInsert:n,changeItemAmount:l,decreaseItemQuantity:i,increaseItemQuantity:c,removeItem:d}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(o.Z,{overflow:"visible",disableControls:!0,headings:w,rawData:[...t.map((e,t)=>({title:{value:e.title},amount:{value:"Rs."+e.amount,display:(0,s.jsx)(x.Z,{style:{width:"10rem"},type:"number",defaultValue:e.amount,onBlur:t=>l(e.productId,+t.target.value)})},quantity:{value:e.quantity,display:(0,s.jsxs)("div",{className:"table-content--actions",children:[(0,s.jsx)(p.Z,{label:(0,s.jsx)("i",{className:"fa-regular fa-minus"}),type:"primary",className:"table-content--actions__btn duotone",onClick:()=>i(e.productId)}),(0,s.jsx)(x.Z,{style:{width:"5rem"},type:"number",defaultValue:e.quantity,onBlur:t=>c(e.productId,+t.target.value)}),(0,s.jsx)(p.Z,{label:(0,s.jsx)("i",{className:"fa-regular fa-plus"}),type:"primary",className:"table-content--actions__btn duotone",onClick:()=>c(e.productId)})]})},subtotal:{value:"Rs."+e.subtotal},actions:{value:"",display:(0,s.jsx)("div",{className:"table-content--actions",children:(0,s.jsx)(p.Z,{label:(0,s.jsx)("i",{className:"fa-regular fa-times"}),type:"error",className:"table-content--actions__btn duotone",onClick:()=>d(e.productId)})})}})),{title:{value:"",display:(0,s.jsxs)("div",{style:{display:"flex",gap:".3rem",alignItems:"flex-end"},children:[(0,s.jsx)(b.Z,{isRequired:!0,placeholder:"Select Product",showSearch:!0,options:a.map(e=>({value:e.id,displayValue:"".concat(e.title," (").concat(e.code,")"),search:"".concat(e.title," ").concat(e.code," ").concat(e.tags)})),style:{width:"30rem"},onChange:e=>r(e.target.value)}),(0,s.jsx)(p.Z,{label:(0,s.jsx)("span",{children:(0,s.jsx)("i",{className:"fa-regular fa-plus"})}),type:"primary",style:{minWidth:"4rem"},onClick:()=>n()})]})},amount:{value:"Rs."+t.reduce((e,t)=>e=+e+ +t.amount,0)},quantity:{value:t.reduce((e,t)=>e=+e+ +t.quantity,0)+" Qty"},subtotal:{value:"Rs."+t.reduce((e,t)=>e=+e+ +t.subtotal,0)},actions:{value:"N/A"}}]})})},Z=[{href:"/vendors",title:"Vendors",iconName:"fa-users-rays",shortcut:"control+shift+v"},{href:"/members",title:"Customers",iconName:"fa-users",shortcut:"control+shift+c"},{href:"/stocks",title:"Stocks",iconName:"fa-boxes-stacked",shortcut:"control+shift+s"},{href:"/sales",title:"Sales Report",iconName:"fa-file-chart-column",shortcut:"control+shift+r"}],setupSidebarHotkeys=(e,t)=>{k.Z.setScope("sidebar"),Object.entries({"ctrl+r":()=>e.push("/sales"),"ctrl+v":()=>e.push("/vendors"),"ctrl+s":()=>e.push("/stocks"),"ctrl+p":t,"ctrl+h":()=>e.push("/dashboard"),"ctrl+c":()=>e.push("/members")}).forEach(e=>{let[t,a]=e;(0,k.Z)(t,"sidebar",(e,t)=>{e.preventDefault(),a()})})};function Sidebar(){let e=(0,d.useRouter)(),t=(0,l.TL)(),a=(0,l.CG)(e=>e.system),handlePurchase=()=>{t((0,n.QU)(!a.purchase))};return(0,v.useEffect)(()=>{setupSidebarHotkeys(e,handlePurchase)},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"sidebar",style:{width:a.menu?"15%":"max-content"},children:[(0,s.jsxs)("div",{className:"sidebar-top",children:[(0,s.jsx)("div",{className:"sidebar-top--logo",children:(0,s.jsx)("h2",{className:"navbar-right--name",children:"MUUSS ERP"})}),(0,s.jsxs)("ul",{className:"sidebar-top--menu",children:[(0,s.jsx)(MenuItem,{href:"/dashboard",title:"Home",isActive:"/dashboard"===e.pathname,iconName:"fa-home",showLabel:a.menu}),(0,s.jsx)(MenuItem,{action:handlePurchase,href:"",title:"Create Purchase",isActive:!1,iconName:"fa-file-invoice",showLabel:a.menu}),Z.map((t,r)=>(0,s.jsx)(MenuItem,{href:t.href,title:t.title,isActive:e.pathname===t.href,iconName:t.iconName,showLabel:a.menu},r))]})]}),(0,s.jsx)("div",{className:"sidebar-bottom",children:(0,s.jsx)("div",{className:"sidebar-bottom--actions",children:(0,s.jsxs)(c(),{href:"/sales",className:"sidebar-bottom--actions__item",onClick:()=>setTimeout(()=>{t((0,r.US)(!0))},500),children:[(0,s.jsx)("i",{className:"fa-regular fa-plus"}),a.menu?(0,s.jsx)("span",{children:"Create Order"}):null]})})})]}),a.purchase?(0,s.jsx)(InsertPurchase,{scope:"sidebar",onClose:()=>handlePurchase()}):null]})}let MenuItem=e=>{let{href:t,action:a,iconName:r,title:n,isActive:l,showLabel:i}=e;return(0,s.jsx)("li",{className:"sidebar-top--menu__item".concat(l?" active":""," ").concat(i?"open":"close"),children:a?(0,s.jsxs)("span",{tabIndex:0,onClick:a,title:n,style:{cursor:"pointer"},children:[(0,s.jsx)("i",{className:"fa-solid ".concat(r)}),i?(0,s.jsx)("span",{children:n}):null]}):(0,s.jsxs)(c(),{href:t,title:n,children:[(0,s.jsx)("i",{className:"fa-solid ".concat(r)}),i?(0,s.jsx)("span",{children:n}):null]})})}},4841:function(e,t,a){a.d(t,{dd:function(){return r},us:function(){return s}});var s={src:"/_next/static/media/logo.32536b1a.png",height:286,width:872,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Afi2UjgEBAML6On79I9d7/oXNgED9A4SzQnp7f8BAQEAAfa1UiAIBwUQ4OH6B51j7AUOMQEF/vsA8wABAfoAAgEBAfe1UyUGBgER3d769KWPAfwPHQAA/Pf8Dv719+kA/v/+1/MrMie6a3wAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3},r={src:"/_next/static/media/dummy-profile.27683932.png",height:300,width:300,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAATUlEQVR42hXKMQ6AIBAF0X//OynswnZqNDGRSGFJqyR0yCpTTh68WOeseAiFUk4S8KJ/G8FErVUvA55bPwwZ9vs5RgGFnFKOhOntuK0fl1U3Nfnv7PMAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},8580:function(e,t,a){a.r(t),a.d(t,{default:function(){return InsertVendor}});var s=a(5893),r=a(2006),n=a(7115),l=a(5506),i=a(8463),c=a(7679),d=a(7945),o=a(3104),u=a(2361),h=a(9091),m=a(8515),p=a(7294);let setupVendorInsertHotkeys=(e,t)=>{m.Z.setScope("vendorInsert"),Object.entries({"ctrl+esc":e,"ctrl+enter":t}).forEach(e=>{let[t,a]=e;(0,m.Z)(t,"vendorInsert",(e,t)=>{e.preventDefault(),a()})})};function InsertVendor(e){let{onClose:t,scope:a}=e,f=(0,l.TL)(),[x,j]=(0,p.useState)(!1),{error:b,state:v,formKey:g,handleInput:y,handleSubmit:A,resetForm:N}=(0,r.Z)({schema:c.mK});(0,p.useEffect)(()=>(setupVendorInsertHotkeys(t,()=>j(!0)),()=>{m.Z.deleteScope("vendorInsert"),a&&m.Z.setScope(a)}),[]);let I=(0,p.useCallback)(()=>{j(e=>!e)},[]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(h.Z,{onClose:t,children:(0,s.jsxs)("div",{className:"vendor-insert",children:[(0,s.jsx)("h2",{className:"vendor-insert--heading",children:"Insert Vendor"}),(0,s.jsx)("div",{className:"vendor-insert--form",children:(0,s.jsxs)("div",{className:"vendor-insert--form",children:[(0,s.jsx)("h4",{className:"vendor-insert--heading",children:"Basic Information:"}),(0,s.jsx)(u.Z,{id:"name",isRequired:!0,label:"Name",placeholder:"eg. Naran Suppliers..",name:"name",onChange:y,defaultValue:v.name,error:b.name,autoFocus:!0}),(0,s.jsx)(u.Z,{id:"address",isRequired:!0,label:"Address",placeholder:"eg. Kathmandu, Nepal..",name:"address",onChange:y,defaultValue:v.address,error:b.address}),(0,s.jsx)(u.Z,{id:"contact",isRequired:!0,label:"Contact",placeholder:"eg. 98XXXXXXXX or example@..",name:"contact",onChange:y,defaultValue:v.contact,error:b.contact})]})},g),(0,s.jsx)("div",{className:"vendor-insert--actions",children:(0,s.jsx)(d.Z,{label:"Save",type:"primary",onClick:I,style:{minWidth:"13rem"}})})]})}),x?(0,s.jsx)(o.Z,{cancel:I,confirm:()=>{A(e=>{f((0,i.G1)({data:e,callback:()=>{I(),N(),(0,n.Qm)("Vendor inserted")}}))})},title:"Confirm Insert",message:"Are you sure you want to add this item to list?"}):null]})}},7679:function(e,t,a){a.d(t,{LE:function(){return n},mK:function(){return l}});var s=a(1604),r=a(3232);let n=s.z.object({id:(0,r.G5)("ID"),name:(0,r.G5)("Name"),address:(0,r.G5)("Address"),contact:(0,r.G5)("Contact"),inserted:(0,r.G5)("Inserted"),updated:(0,r.G5)("Updated")}),l=n.omit({id:!0,inserted:!0,updated:!0});n.pick({id:!0})},1091:function(e,t,a){a.d(t,{Z:function(){return UILoader}});var s=a(5893);function UILoader(e){let{overlay:t}=e;return(0,s.jsxs)("div",{className:"uiloader",children:[t?(0,s.jsx)("div",{className:"uiloader-overlay"}):null,(0,s.jsxs)("div",{className:"uiloader-wrapper",children:[(0,s.jsx)("div",{className:"uiloader-item"}),(0,s.jsx)("div",{className:"uiloader-shadow"})]})]})}}}]);