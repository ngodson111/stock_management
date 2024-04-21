"use strict";exports.id=6078,exports.ids=[6078],exports.modules={6078:(e,r,t)=>{t.a(e,async(e,s)=>{try{t.r(r),t.d(r,{default:()=>InsertProduct});var i=t(997),a=t(2006),n=t(7115),l=t(7813),c=t(5382),o=t(470),d=t(7945),u=t(3104),h=t(2361),g=t(9091),p=t(8699),m=t(8139),x=t.n(m),f=t(5152),j=t.n(f),b=t(6689),y=e([a,n,l,c,o,u]);[a,n,l,c,o,u]=y.then?(await y)():y;let P=j()(()=>t.e(2315).then(t.bind(t,2315)),{loadableGenerated:{modules:["stocks/insert.tsx -> @/ui/uieditor/index"]},ssr:!1}),setupVendorInsertHotkeys=(e,r)=>{x().setScope("productInsert"),Object.entries({"ctrl+esc":e,"ctrl+enter":r}).forEach(([e,r])=>{x()(e,"productInsert",(e,t)=>{e.preventDefault(),r()})})};function InsertProduct({onClose:e,theme:r,scope:t}){let s=(0,l.TL)(),[m,f]=(0,b.useState)(!1),{error:j,state:y,formKey:C,handleInput:k,handleSubmit:v,resetForm:N}=(0,a.Z)({schema:o.Gu});(0,b.useEffect)(()=>(setupVendorInsertHotkeys(e,()=>f(!0)),()=>{x().deleteScope("productInsert"),t&&x().setScope(t)}),[]);let I=(0,b.useCallback)(()=>{f(e=>!e)},[]);return(0,i.jsxs)(i.Fragment,{children:[i.jsx(g.Z,{onClose:e,children:(0,i.jsxs)("div",{className:"product-insert",children:[i.jsx("h2",{className:"product-insert--heading",children:"Insert Product"}),i.jsx("div",{className:"product-insert--form",children:(0,i.jsxs)("div",{className:"product-insert--form",children:[(0,i.jsxs)("div",{className:"product-insert--form__left",children:[i.jsx("h4",{className:"product-insert--heading",children:"Basic Information:"}),(0,i.jsxs)("div",{className:"product-insert--group",children:[i.jsx(h.Z,{id:"code",isRequired:!0,label:"Product Code",placeholder:"eg. 328434-2873..",name:"code",onChange:k,defaultValue:y.code,error:j.code,autoFocus:!0}),i.jsx(h.Z,{id:"rack",label:"Rack Information",placeholder:"eg. A3",name:"rack",onChange:k,defaultValue:y.rack,error:j.rack})]}),i.jsx(h.Z,{id:"title",isRequired:!0,label:"Product Name",placeholder:"eg. Dairy Milk 100g..",name:"title",onChange:k,defaultValue:y.title,error:j.title}),(0,i.jsxs)("div",{className:"product-insert--group",children:[i.jsx(h.Z,{id:"buyingPrice",isRequired:!0,label:"Buying Price",placeholder:"eg. 1500",name:"buyingPrice",onChange:k,defaultValue:y.buyingPrice?.toString(),error:j.buyingPrice}),i.jsx(h.Z,{id:"sellingPrice",isRequired:!0,label:"Selling Price",placeholder:"eg. 2000",name:"sellingPrice",onChange:k,defaultValue:y.sellingPrice?.toString(),error:j.sellingPrice})]}),i.jsx(p.Z,{placeholder:"eg. Chocolate,Bars",label:"Tags",defaultValue:y.tags||void 0,error:j.tags,onChange:k,id:"tags",name:"tags",joinString:",",instruction:"* Tags are used for searching where it helps in making product search variation."})]}),(0,i.jsxs)("div",{className:"product-insert--form__right",children:[i.jsx("h4",{className:"product-insert--heading",children:"Description:"}),i.jsx(P,{id:"description",formatedEditorConfig:{theme:r,readonly:!1,height:300},name:"description",onChange:k,defaultValue:y.description,error:j.description})]})]})},C),i.jsx("div",{className:"product-insert--actions",children:i.jsx(d.Z,{label:"Save",type:"primary",onClick:I,style:{minWidth:"13rem"}})})]})}),m?i.jsx(u.Z,{cancel:I,confirm:()=>{v(e=>{s((0,c.dN)({data:e,callback:()=>{I(),N(),(0,n.Qm)("Product inserted")}}))})},title:"Confirm Insert",message:"Are you sure you want to add this item to list?"}):null]})}s()}catch(e){s(e)}})}};