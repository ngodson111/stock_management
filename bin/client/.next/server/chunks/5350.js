"use strict";exports.id=5350,exports.ids=[5350],exports.modules={5946:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.d(t,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var r=a(6689),l=a(1163),n=a(7813),i=a(4006),c=a(9031),d=a(5502),u=e([n,i,d]);[n,i,d]=u.then?(await u)():u;let __WEBPACK_DEFAULT_EXPORT__=({children:e})=>{let t=(0,l.useRouter)(),a=(0,n.TL)(),s=(0,n.CG)(e=>e.auth);return((0,r.useEffect)(()=>{t.asPath.indexOf("[")>-1||(s.token&&s.isLoggedIn?a((0,i.c)({})):t.push(`/?redirect=${encodeURIComponent(t.asPath)}`))},[s.token,a,t]),addEventListener("storage",e=>{if(e.key&&0>e.key.indexOf(c.$u))return;let t=e.newValue?JSON.parse(JSON.parse(e.newValue).auth):null;t&&a((0,d.Vp)(t))}),s.token&&s.isLoggedIn)?e:(t.push(`/?redirect=${encodeURIComponent(t.asPath)}`),null)};s()}catch(e){s(e)}})},8352:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.d(t,{Z:()=>NavBar});var r=a(997),l=a(4841),n=a(5502),i=a(4503),c=a(7813),d=a(5675),u=a.n(d),o=a(1163),h=e([n,c]);function NavBar({name:e,showBars:t,back:a}){let s=(0,o.useRouter)(),d=(0,c.TL)(),h=(0,c.CG)(e=>e.system);return(0,r.jsxs)("div",{className:"navbar",children:[(0,r.jsxs)("div",{className:"navbar-left",children:[a?r.jsx("i",{className:"fa-regular fa-chevron-left navbar-left--icon__back",onClick:()=>a()}):null,t?r.jsx("i",{className:"navbar-left--icon__bar fa-light fa-bars",onClick:e=>d((0,i.js)())}):null,r.jsx("h2",{className:"navbar-left--text",children:e})]}),r.jsx("div",{className:"navbar-right",children:(0,r.jsxs)("div",{className:"navbar-right",children:[r.jsx("div",{className:"navbar-right--item",onClick:e=>{d((0,i.Lr)("dark"===h.theme?"light":"dark"))},children:r.jsx("i",{className:`fa-regular fa-${"dark"===h.theme?"moon":"sun-bright"}`})}),r.jsx("div",{onClick:e=>{d((0,n.kS)()),s.replace("/")},className:"navbar-right--item navbar-right--item__logout",children:r.jsx("i",{className:"fa-regular fa-arrow-right-from-bracket"})}),r.jsx("div",{className:"navbar-right--profile",children:r.jsx(u(),{src:l.dd,alt:"User profile"})}),r.jsx("div",{className:"navbar-right--name",children:"Valid Till: 2025-01-01"})]})})]})}[n,c]=h.then?(await h)():h,s()}catch(e){s(e)}})},4828:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.d(t,{Z:()=>InsertPurchase});var r=a(997),l=a(3401),n=a(7115),i=a(365),c=a(7813),d=a(5382),u=a(7945),o=a(3104),h=a(2361),m=a(9091),p=a(4200),x=a(6689),j=a(3554),b=a(7784),f=a(6078),y=a(8463),v=a(8580),g=a(647),N=a(1091),I=a(8139),S=a.n(I),C=e([n,i,c,d,o,j,b,f,y,v,g]);[n,i,c,d,o,j,b,f,y,v,g]=C.then?(await C)():C;let k=[{name:"title",display:"Title"},{name:"amount",display:"Amount"},{name:"quantity",display:"Quantity"},{name:"subtotal",display:"Sub Total"},{name:"actions",display:"Actions"}],setupPurchaseHotkeys=(e,t)=>{S().setScope("purchase"),Object.entries({"ctrl+esc":e,"ctrl+enter":t}).forEach(([e,t])=>{S()(e,"purchase",(e,a)=>{e.preventDefault(),t()})})};function InsertPurchase({onClose:e,scope:t}){let a=(0,c.TL)(),s=(0,c.CG)(e=>e.system),l=(0,c.CG)(e=>e.vendor),I=(0,c.CG)(e=>e.product),C=(0,c.CG)(e=>e.stock),[k,P]=(0,x.useState)(1),[w,q]=(0,x.useState)(!1),[_,Z]=(0,x.useState)(!1),[V,R]=(0,x.useState)(""),[D,O]=(0,x.useState)(null),[$,T]=(0,x.useState)(new Date),[A,E]=(0,x.useState)({});(0,x.useEffect)(()=>(setupPurchaseHotkeys(e,()=>{Z(!0)}),()=>{S().deleteScope("purchase"),t&&S().setScope(t)}),[]);let handleVendorInsert=()=>a((0,j.jb)(!l.insert)),handleProductInsert=()=>a((0,i.US)(!I.insert));(0,x.useEffect)(()=>{(!I.expires||I.expires&&I.expires-Date.now()<0)&&a((0,d.Xp)())},[I.expires,a]),(0,x.useEffect)(()=>{(!l.expires||l.expires&&l.expires-Date.now()<0)&&a((0,y.wZ)())},[l.expires,a]);let handleBillNumber=e=>{R(e)},handlePurchaseDate=e=>{let t=new Date(e);t instanceof Date&&T(t)},handleVendorDetails=e=>{let t=l.data.find(t=>t.id===e);if(!t)return(0,n.Iv)("Vendor not found");O(t)},resetItems=()=>{E({}),O(null),q(!1)};return(0,r.jsxs)(r.Fragment,{children:[r.jsx(m.Z,{onClose:e,children:(0,r.jsxs)("div",{className:"purchase-insert fixed",children:[r.jsx("h2",{className:"purchase-insert--heading",children:"Purchase Bill"}),(0,r.jsxs)("div",{className:"purchase-insert--actions",children:[r.jsx(u.Z,{label:(0,r.jsxs)("span",{children:[r.jsx("i",{className:"fa-regular fa-plus"})," Create"]}),type:"primary",style:{minWidth:"10rem"},onClick:()=>Z(!0)}),r.jsx(u.Z,{label:"Reset",type:"error",className:"duotone",style:{minWidth:"10rem"},onClick:()=>q(!0)})]}),r.jsx("table",{className:"purchase-stock--grid",width:"70%",children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[r.jsx("th",{children:"Bill Number:"}),r.jsx("td",{children:r.jsx(h.Z,{isRequired:!0,autoFocus:!0,id:"billNumber",name:"billNumber",placeholder:"eg. 0005",style:{width:"30rem"},defaultValue:V,onChange:e=>handleBillNumber(e.target.value)})})]}),(0,r.jsxs)("tr",{children:[r.jsx("th",{children:"Purchase Date:"}),r.jsx("td",{children:r.jsx(h.Z,{isRequired:!0,type:"date",id:"date",name:"date",style:{width:"30rem"},defaultValue:(0,b.zM)($),max:(0,b.zM)(new Date),onChange:e=>handlePurchaseDate(e.target.value)})})]}),(0,r.jsxs)("tr",{children:[r.jsx("th",{children:"Vendor:"}),r.jsx("td",{children:(0,r.jsxs)("div",{style:{display:"flex",gap:".3rem",alignItems:"flex-end"},children:[r.jsx(p.Z,{isRequired:!0,placeholder:"Select Vendor",showSearch:!0,options:l.data.map(e=>({value:e.id,displayValue:`${e.name} (${e.contact})`,search:`${e.name} ${e.address} ${e.contact}`})),style:{width:"30rem"},onChange:e=>handleVendorDetails(e.target.value),defaultValue:D?.id}),r.jsx(u.Z,{label:r.jsx("span",{children:r.jsx("i",{className:"fa-regular fa-plus"})}),type:"primary",style:{minWidth:"4rem"},onClick:()=>handleVendorInsert()})]})})]})]})}),r.jsx(CurrentPurchaseBillTable,{data:Object.values(A),products:I.data,addProduct:e=>{let t=I.data.find(t=>t.id===e);if(!t)return(0,n.Iv)("Item not found");let a=A[t.id];a?E(e=>({...e,[t.id]:{...a,quantity:(+a.quantity+1).toString(),subtotal:(+a.amount*(+a.quantity+1)).toString()}})):E(e=>({...e,[t.id]:{amount:t.buyingPrice,quantity:"1",subtotal:t.buyingPrice,title:t.title,productId:t.id,limit:t.quantity}}))},handleProductInsert:handleProductInsert,changeItemAmount:(e,t)=>{let a=A[e];E(s=>({...s,[e]:{...a,amount:t.toString(),subtotal:(t*+a.quantity).toString()}}))},decreaseItemQuantity:e=>{let t=A[e];if(!t||1>=+t.quantity)return;let a=+t.quantity-1;E(s=>({...s,[e]:{...t,quantity:a.toString(),subtotal:(+a*+t.amount).toString()}}))},increaseItemQuantity:(e,t)=>{let a=A[e];if(!a)return;let s=t??+a.quantity+1;E(t=>({...t,[e]:{...a,quantity:s.toString(),subtotal:(+s*+a.amount).toString()}}))},removeItem:e=>{E(t=>{let a={...t};return delete a[e],a})}},Object.keys(A).length),r.jsx("br",{}),r.jsx("table",{className:"product-stock--grid",width:"70%",children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[r.jsx("th",{children:"Summery:"}),r.jsx("td",{})]}),(0,r.jsxs)("tr",{children:[r.jsx("th",{children:"Sales Date:"}),r.jsx("td",{children:(0,b.zM)($)})]}),(0,r.jsxs)("tr",{children:[r.jsx("th",{children:"Total Amount"}),(0,r.jsxs)("td",{children:["Rs.",Object.values(A).reduce((e,t)=>e=+e+ +t.subtotal,0)," ","(",Object.keys(A).length," Item/s)"]})]}),D&&(0,r.jsxs)("tr",{children:[r.jsx("th",{children:"Vendor"}),(0,r.jsxs)("td",{children:[D.name," (",D.address,")"]})]})]})})]},k)}),I.insert?r.jsx(f.default,{scope:"purchase",onClose:handleProductInsert,theme:s.theme}):null,l.insert?r.jsx(v.default,{scope:"purchase",onClose:handleVendorInsert}):null,w?r.jsx(o.Z,{cancel:()=>q(!1),confirm:resetItems,title:"Confirm Reset",scope:"purchase",message:"Are you sure you want to reset current pruchase?"}):null,_?r.jsx(o.Z,{cancel:()=>Z(!1),confirm:()=>{if(!V)return Z(!1),(0,n.Iv)("Bill number is required");if(!D)return Z(!1),(0,n.Iv)("Please select vendor");if(!$)return Z(!1),(0,n.Iv)("Date is required");if(Object.keys(A).length<1)return Z(!1),(0,n.Iv)("Atlease one item is required");let e=Object.values(A).map(e=>({rate:e.amount.toString(),productId:e.productId,quantity:e.quantity}));a((0,g.QO)({data:{billNumber:V,date:$.toISOString(),products:e,vendorId:D.id},callback:()=>{resetItems(),O(null),R(""),Z(!1),P(e=>e+1),(0,n.Qm)("Purchase bill created"),setTimeout(()=>{a((0,i.Fw)(e.map(e=>({id:e.productId,quantity:+e.quantity}))))},500)}}))},title:"Place Order",scope:"purchase",message:"Are you sure you want to place purchase order?"}):null,I.loading||I.loading||l.loading||C.loading?r.jsx(N.Z,{overlay:!0}):null]})}let CurrentPurchaseBillTable=({data:e,products:t,addProduct:a,handleProductInsert:s,changeItemAmount:n,decreaseItemQuantity:i,increaseItemQuantity:c,removeItem:d})=>r.jsx(r.Fragment,{children:r.jsx(l.Z,{overflow:"visible",disableControls:!0,headings:k,rawData:[...e.map((e,t)=>({title:{value:e.title},amount:{value:"Rs."+e.amount,display:r.jsx(h.Z,{style:{width:"10rem"},type:"number",defaultValue:e.amount,onBlur:t=>n(e.productId,+t.target.value)})},quantity:{value:e.quantity,display:(0,r.jsxs)("div",{className:"table-content--actions",children:[r.jsx(u.Z,{label:r.jsx("i",{className:"fa-regular fa-minus"}),type:"primary",className:"table-content--actions__btn duotone",onClick:()=>i(e.productId)}),r.jsx(h.Z,{style:{width:"5rem"},type:"number",defaultValue:e.quantity,onBlur:t=>c(e.productId,+t.target.value)}),r.jsx(u.Z,{label:r.jsx("i",{className:"fa-regular fa-plus"}),type:"primary",className:"table-content--actions__btn duotone",onClick:()=>c(e.productId)})]})},subtotal:{value:"Rs."+e.subtotal},actions:{value:"",display:r.jsx("div",{className:"table-content--actions",children:r.jsx(u.Z,{label:r.jsx("i",{className:"fa-regular fa-times"}),type:"error",className:"table-content--actions__btn duotone",onClick:()=>d(e.productId)})})}})),{title:{value:"",display:(0,r.jsxs)("div",{style:{display:"flex",gap:".3rem",alignItems:"flex-end"},children:[r.jsx(p.Z,{isRequired:!0,placeholder:"Select Product",showSearch:!0,options:t.map(e=>({value:e.id,displayValue:`${e.title} (${e.code})`,search:`${e.title} ${e.code} ${e.tags}`})),style:{width:"30rem"},onChange:e=>a(e.target.value)}),r.jsx(u.Z,{label:r.jsx("span",{children:r.jsx("i",{className:"fa-regular fa-plus"})}),type:"primary",style:{minWidth:"4rem"},onClick:()=>s()})]})},amount:{value:"Rs."+e.reduce((e,t)=>e=+e+ +t.amount,0)},quantity:{value:e.reduce((e,t)=>e=+e+ +t.quantity,0)+" Qty"},subtotal:{value:"Rs."+e.reduce((e,t)=>e=+e+ +t.subtotal,0)},actions:{value:"N/A"}}]})});s()}catch(e){s(e)}})},8913:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.d(t,{Z:()=>Sidebar});var r=a(997);a(4841);var l=a(7965),n=a(4503),i=a(7813),c=a(1664),d=a.n(c),u=a(1163),o=a(4828),h=a(6689),m=a(8139),p=a.n(m),x=e([l,i,o]);[l,i,o]=x.then?(await x)():x;let j=[{href:"/vendors",title:"Vendors",iconName:"fa-users-rays",shortcut:"control+shift+v"},{href:"/members",title:"Customers",iconName:"fa-users",shortcut:"control+shift+c"},{href:"/stocks",title:"Stocks",iconName:"fa-boxes-stacked",shortcut:"control+shift+s"},{href:"/sales",title:"Sales Report",iconName:"fa-file-chart-column",shortcut:"control+shift+r"}],setupSidebarHotkeys=(e,t)=>{p().setScope("sidebar"),Object.entries({"ctrl+r":()=>e.push("/sales"),"ctrl+v":()=>e.push("/vendors"),"ctrl+s":()=>e.push("/stocks"),"ctrl+p":t,"ctrl+h":()=>e.push("/dashboard"),"ctrl+c":()=>e.push("/members")}).forEach(([e,t])=>{p()(e,"sidebar",(e,a)=>{e.preventDefault(),t()})})};function Sidebar(){let e=(0,u.useRouter)(),t=(0,i.TL)(),a=(0,i.CG)(e=>e.system),handlePurchase=()=>{t((0,n.QU)(!a.purchase))};return(0,h.useEffect)(()=>{setupSidebarHotkeys(e,handlePurchase)},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"sidebar",style:{width:a.menu?"15%":"max-content"},children:[(0,r.jsxs)("div",{className:"sidebar-top",children:[r.jsx("div",{className:"sidebar-top--logo",children:r.jsx("h2",{className:"navbar-right--name",children:"MUUSS ERP"})}),(0,r.jsxs)("ul",{className:"sidebar-top--menu",children:[r.jsx(MenuItem,{href:"/dashboard",title:"Home",isActive:"/dashboard"===e.pathname,iconName:"fa-home",showLabel:a.menu}),r.jsx(MenuItem,{action:handlePurchase,href:"",title:"Create Purchase",isActive:!1,iconName:"fa-file-invoice",showLabel:a.menu}),j.map((t,s)=>r.jsx(MenuItem,{href:t.href,title:t.title,isActive:e.pathname===t.href,iconName:t.iconName,showLabel:a.menu},s))]})]}),r.jsx("div",{className:"sidebar-bottom",children:r.jsx("div",{className:"sidebar-bottom--actions",children:(0,r.jsxs)(d(),{href:"/sales",className:"sidebar-bottom--actions__item",onClick:()=>setTimeout(()=>{t((0,l.US)(!0))},500),children:[r.jsx("i",{className:"fa-regular fa-plus"}),a.menu?r.jsx("span",{children:"Create Order"}):null]})})})]}),a.purchase?r.jsx(o.Z,{scope:"sidebar",onClose:()=>handlePurchase()}):null]})}let MenuItem=({href:e,action:t,iconName:a,title:s,isActive:l,showLabel:n})=>r.jsx("li",{className:`sidebar-top--menu__item${l?" active":""} ${n?"open":"close"}`,children:t?(0,r.jsxs)("span",{tabIndex:0,onClick:t,title:s,style:{cursor:"pointer"},children:[r.jsx("i",{className:`fa-solid ${a}`}),n?r.jsx("span",{children:s}):null]}):(0,r.jsxs)(d(),{href:e,title:s,children:[r.jsx("i",{className:`fa-solid ${a}`}),n?r.jsx("span",{children:s}):null]})});s()}catch(e){s(e)}})}};