"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[78],{2006:function(e,i,r){r.d(i,{Z:function(){return useForm}});var t=r(7115),n=r(7784),a=r(7294);function useForm(e){let{schema:i,data:r}=e,[l,s]=(0,a.useState)(1),[o,d]=(0,a.useState)({}),[c,u]=(0,a.useState)({});(0,a.useEffect)(()=>{r&&d(r)},[r]);let handleValidation=e=>{try{var r;let a=(0,n.Fv)(e,i);if(console.log(a),null===(r=a.errors)||void 0===r?void 0:r.hasError){(0,t.Jc)("Please verify indicated fields"),u(a.errors.error);return}return a.data}catch(e){(0,t.Jc)("Something went wrong with validation")}},g=(0,a.useCallback)(e=>{{let i=e.target.name,r=e.target.type,t=e.target.required,a=(0,n.Hc)(r,e),l=null!=a&&""!==a;d(e=>({...e,[i]:l?a:void 0})),t&&l&&u(e=>({...e,[i]:""}))}},[]);return{state:o,error:c,formKey:l,setState:d,setError:u,setFormKey:s,handleInput:g,handleValidation,handleSubmit:e=>{let i=handleValidation(o);i&&e(i)},resetForm:e=>{d(null!=r?r:{}),u({}),s(e=>e+1),e&&(0,t.Qm)(e)}}}},6078:function(e,i,r){r.r(i),r.d(i,{default:function(){return InsertProduct}});var t=r(5893),n=r(2006),a=r(7115),l=r(5506),s=r(5382),o=r(470),d=r(7945),c=r(3104),u=r(2361),g=r(9091),m=r(8699),h=r(5152),p=r.n(h),v=r(7294);let f=p()(()=>Promise.all([r.e(326),r.e(911),r.e(315)]).then(r.bind(r,2315)),{loadableGenerated:{webpack:()=>[2315]},ssr:!1});function InsertProduct(e){var i,r;let{onClose:h,theme:p}=e,x=(0,l.TL)(),[b,j]=(0,v.useState)(!1),{error:y,state:N,formKey:C,handleInput:k,handleSubmit:P,resetForm:S}=(0,n.Z)({schema:o.Gu}),Z=(0,v.useCallback)(()=>{j(e=>!e)},[]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g.Z,{onClose:h,children:(0,t.jsxs)("div",{className:"product-insert",children:[(0,t.jsx)("h2",{className:"product-insert--heading",children:"Insert Product"}),(0,t.jsx)("div",{className:"product-insert--form",children:(0,t.jsxs)("div",{className:"product-insert--form",children:[(0,t.jsxs)("div",{className:"product-insert--form__left",children:[(0,t.jsx)("h4",{className:"product-insert--heading",children:"Basic Information:"}),(0,t.jsxs)("div",{className:"product-insert--group",children:[(0,t.jsx)(u.Z,{id:"code",isRequired:!0,label:"Product Code",placeholder:"eg. 328434-2873..",name:"code",onChange:k,defaultValue:N.code,error:y.code}),(0,t.jsx)(u.Z,{id:"rack",isRequired:!0,label:"Rack Information",placeholder:"eg. A3",name:"rack",onChange:k,defaultValue:N.rack,error:y.rack})]}),(0,t.jsx)(u.Z,{id:"title",isRequired:!0,label:"Product Name",placeholder:"eg. Dairy Milk 100g..",name:"title",onChange:k,defaultValue:N.title,error:y.title}),(0,t.jsx)(m.Z,{placeholder:"eg. Chocolate,Bars",label:"Tags",isRequired:!0,defaultValue:N.tags,error:y.tags,onChange:k,id:"tags",name:"tags",joinString:",",instruction:"* Tags are used for searching where it helps in making product search variation."}),(0,t.jsx)(u.Z,{id:"buyingPrice",isRequired:!0,label:"Buying Price",placeholder:"eg. 1500",name:"buyingPrice",onChange:k,defaultValue:null===(i=N.buyingPrice)||void 0===i?void 0:i.toString(),error:y.buyingPrice}),(0,t.jsx)(u.Z,{id:"sellingPrice",isRequired:!0,label:"Selling Price",placeholder:"eg. 2000",name:"sellingPrice",onChange:k,defaultValue:null===(r=N.sellingPrice)||void 0===r?void 0:r.toString(),error:y.sellingPrice})]}),(0,t.jsxs)("div",{className:"product-insert--form__right",children:[(0,t.jsx)("h4",{className:"product-insert--heading",children:"Description: *"}),(0,t.jsx)(f,{id:"description",formatedEditorConfig:{theme:p,readonly:!1,height:350},isRequired:!0,name:"description",onChange:k,defaultValue:N.description,error:y.description})]})]})},C),(0,t.jsx)("div",{className:"product-insert--actions",children:(0,t.jsx)(d.Z,{label:"Save",type:"primary",onClick:Z,style:{minWidth:"13rem"}})})]})}),b?(0,t.jsx)(c.Z,{cancel:Z,confirm:()=>{P(e=>{x((0,s.dN)({data:e,callback:()=>{Z(),S(),(0,a.Qm)("Product inserted")}}))})},title:"Confirm Insert",message:"Are you sure you want to add this item to list?"}):null]})}},3232:function(e,i,r){r.d(i,{G5:function(){return stringField},v3:function(){return positiveNumberString}});var t=r(1604);let positiveNumberString=e=>t.z.string().refine(e=>!isNaN(parseFloat(e)),{message:"".concat(e," must be a positive number.")}),stringField=function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2?arguments[2]:void 0;return t.z.string({required_error:"".concat(e," is required"),invalid_type_error:"Provide valid type"}).min(i,{message:"".concat(e," is too short")}).refine(e=>!r||e.length<=r,"".concat(e," is too long"))};t.z.string({invalid_type_error:"Provide valid type"}).optional().nullable(),t.z.number({invalid_type_error:"Provide valid type"}).optional().nullable(),t.z.boolean({invalid_type_error:"Provide valid type"}).optional().nullable(),t.z.string().refine(e=>!e||!isNaN(+e),{message:"Field must be a positive integer."}).optional()},470:function(e,i,r){r.d(i,{Gu:function(){return l},xs:function(){return a}});var t=r(1604),n=r(3232);let a=t.z.object({id:(0,n.G5)("ID"),code:(0,n.G5)("Code"),title:(0,n.G5)("Title"),buyingPrice:(0,n.v3)("Buying Price"),sellingPrice:(0,n.v3)("Selling Price"),description:(0,n.G5)("Description"),tags:(0,n.G5)("Tags"),rack:(0,n.G5)("Rack"),quantity:(0,n.v3)("Quantity"),inserted:(0,n.G5)("Inserted"),updated:(0,n.G5)("Updated")}),l=a.omit({id:!0,inserted:!0,updated:!0,quantity:!0});a.pick({id:!0})},3104:function(e,i,r){r.d(i,{Z:function(){return UIDialogBox}});var t=r(5893),n=r(7945),a=r(9091);function UIDialogBox(e){let{cancel:i,confirm:r,message:l,title:s,cancelName:o,confirmName:d}=e;return(0,t.jsx)(a.Z,{onClose:i,showAnimation:!0,children:(0,t.jsxs)("div",{className:"dialogbox",children:[(0,t.jsx)("h2",{className:"dialogbox-heading",children:s}),(0,t.jsx)("p",{className:"dialogbox-message",children:l}),(0,t.jsxs)("div",{className:"dialogbox-actions",children:[(0,t.jsx)(n.Z,{label:null!=d?d:"Confirm",type:"primary",className:"dialogbox-actions--btn",onClick:r}),(0,t.jsx)(n.Z,{label:null!=o?o:"Cancel",type:"error",className:"dialogbox-actions--btn cancel duotone",onClick:i})]})]})})}},9091:function(e,i,r){r.d(i,{Z:function(){return UIModal}});var t=r(5893),n=r(7294);function UIModal(e){let{children:i,onClose:r,style:a,showAnimation:l}=e,s=(0,n.useRef)(null);return(0,t.jsxs)("div",{className:"uimodal",children:[(0,t.jsx)("div",{className:"uimodal-overlay"}),(0,t.jsxs)("div",{className:"uimodal-content",style:a,ref:s,children:[(0,t.jsx)("div",{className:"uimodal-content--cross",onClick:()=>{var e;if(!l)return null==r?void 0:r();null===(e=s.current)||void 0===e||e.classList.add("hide"),setTimeout(()=>null==r?void 0:r(),700)},children:(0,t.jsx)("i",{className:"fa-regular fa-times"})}),i]})]})}},8699:function(e,i,r){r.d(i,{Z:function(){return UITagEditor}});var t=r(5893),n=r(7294);function UITagEditor(e){let{id:i,error:r,isRequired:a,label:l,name:s,placeholder:o,style:d,defaultValue:c,onChange:u,instruction:g,joinString:m}=e,[h,p]=(0,n.useState)(c?"string"==typeof c?c.split(null!=m?m:","):c:[]),[v,f]=(0,n.useState)(""),handleRemoveItemFromState=e=>{let i=h.filter((i,r)=>r!==e);p(i),x(i)},x=(0,n.useCallback)(e=>{null==u||u({target:{value:m?e.join(m):e,name:null!=s?s:"TagEditor",required:null!=a&&a,type:"string"==typeof c?"text":"list"}})},[m,s,a,c,u]),b=(0,n.useCallback)(()=>{if(!v)return;let e=[...h,v];p(e),f(""),x(e)},[v]);return(0,t.jsxs)("div",{className:"tageditor",style:d,children:[l?(0,t.jsxs)("label",{htmlFor:i||"",className:"tageditor-label",children:[l," ",a?"*":""]}):null,(0,t.jsxs)("div",{className:"tageditor-wrapper ".concat(r?"error":""),children:[h.map((e,i)=>(0,t.jsxs)("div",{className:"tageditor-wrapper--item",children:[(0,t.jsx)("span",{children:e}),(0,t.jsx)("i",{className:"fa-regular fa-times",onClick:()=>handleRemoveItemFromState(i)})]},i)),(0,t.jsx)("input",{type:"text",placeholder:h.length<1?o:"",id:i,name:s,onChange:e=>{f(e.currentTarget.value)},onKeyUp:e=>{let i=e.currentTarget.value.trim();if("Backspace"===e.code&&h.length>0&&0===i.length){let e=h[h.length-1];e&&f(e),p(e=>e.slice(0,-1));return}if("Enter"===e.code&&i.length>0){let e=[...h,i];p(e),f(""),x(e);return}},onBlur:b,value:v})]}),r?(0,t.jsx)("span",{className:"tageditor-error",children:r}):null,g?(0,t.jsx)("p",{className:"tageditor-instruction",children:g}):null]})}}}]);