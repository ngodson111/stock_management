(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[308],{1281:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vendors/insert",function(){return t(9803)}])},566:function(e,n,t){"use strict";t.d(n,{Z:function(){return useForm}});var r=t(9638),i=t(1044),a=t(2784);function useForm(e){let{schema:n,data:t}=e,[s,l]=(0,a.useState)(1),[o,d]=(0,a.useState)({}),[c,u]=(0,a.useState)({});(0,a.useEffect)(()=>{t&&d(t)},[t]);let handleValidation=e=>{try{var t;let a=(0,i.Fv)(e,n);if(console.log(a),null===(t=a.errors)||void 0===t?void 0:t.hasError){(0,r.Jc)("Please verify indicated fields"),u(a.errors.error);return}return a.data}catch(e){(0,r.Jc)("Something went wrong with validation")}},m=(0,a.useCallback)(e=>{{let n=e.target.name,t=e.target.type,r=e.target.required,a=(0,i.Hc)(t,e),s=null!=a&&""!==a;d(e=>({...e,[n]:s?a:void 0})),r&&s&&u(e=>({...e,[n]:""}))}},[]);return{state:o,error:c,formKey:s,setState:d,setError:u,setFormKey:l,handleInput:m,handleValidation,handleSubmit:e=>{let n=handleValidation(o);n&&e(n)},resetForm:e=>{d(null!=t?t:{}),u({}),l(e=>e+1),e&&(0,r.Qm)(e)}}}},9803:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return InsertVendor}});var r=t(2322),i=t(566),a=t(9638),s=t(8039),l=t(1812),o=t(1410),d=t(590),c=t(725),u=t(570),m=t(1383),f=t(2784);function InsertVendor(e){let{onClose:n}=e,t=(0,s.TL)(),[h,v]=(0,f.useState)(!1),{error:p,state:g,formKey:x,handleInput:b,handleSubmit:N,resetForm:j}=(0,i.Z)({schema:o.mK}),y=(0,f.useCallback)(()=>{v(e=>!e)},[]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.Z,{onClose:n,children:(0,r.jsxs)("div",{className:"vendor-insert",children:[(0,r.jsx)("h2",{className:"vendor-insert--heading",children:"Insert Vendor"}),(0,r.jsx)("div",{className:"vendor-insert--form",children:(0,r.jsxs)("div",{className:"vendor-insert--form",children:[(0,r.jsx)("h4",{className:"vendor-insert--heading",children:"Basic Information:"}),(0,r.jsx)(u.Z,{id:"name",isRequired:!0,label:"Name",placeholder:"eg. Naran Suppliers..",name:"name",onChange:b,defaultValue:g.name,error:p.name}),(0,r.jsx)(u.Z,{id:"address",isRequired:!0,label:"Address",placeholder:"eg. Kathmandu, Nepal..",name:"address",onChange:b,defaultValue:g.address,error:p.address}),(0,r.jsx)(u.Z,{id:"contact",isRequired:!0,label:"Contact",placeholder:"eg. 98XXXXXXXX or example@..",name:"contact",onChange:b,defaultValue:g.contact,error:p.contact})]})},x),(0,r.jsx)("div",{className:"vendor-insert--actions",children:(0,r.jsx)(d.Z,{label:"Save",type:"primary",onClick:y,style:{minWidth:"13rem"}})})]})}),h?(0,r.jsx)(c.Z,{cancel:y,confirm:()=>{N(e=>{t((0,l.G1)({data:e,callback:()=>{y(),j(),(0,a.Qm)("Vendor inserted")}}))})},title:"Confirm Insert",message:"Are you sure you want to add this item to list?"}):null]})}},3467:function(e,n,t){"use strict";t.d(n,{G5:function(){return stringField},v3:function(){return positiveNumberString}});var r=t(195);let positiveNumberString=e=>r.z.string().refine(e=>!isNaN(parseFloat(e)),{message:"".concat(e," must be a positive number.")}),stringField=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2?arguments[2]:void 0;return r.z.string({required_error:"".concat(e," is required"),invalid_type_error:"Provide valid type"}).min(n,{message:"".concat(e," is too short")}).refine(e=>!t||e.length<=t,"".concat(e," is too long"))};r.z.string({invalid_type_error:"Provide valid type"}).optional().nullable(),r.z.number({invalid_type_error:"Provide valid type"}).optional().nullable(),r.z.boolean({invalid_type_error:"Provide valid type"}).optional().nullable(),r.z.string().refine(e=>!e||!isNaN(+e),{message:"Field must be a positive integer."}).optional()},1410:function(e,n,t){"use strict";t.d(n,{LE:function(){return a},mK:function(){return s}});var r=t(195),i=t(3467);let a=r.z.object({id:(0,i.G5)("ID"),name:(0,i.G5)("Name"),address:(0,i.G5)("Address"),contact:(0,i.G5)("Contact"),inserted:(0,i.G5)("Inserted"),updated:(0,i.G5)("Updated")}),s=a.omit({id:!0,inserted:!0,updated:!0});a.pick({id:!0})},590:function(e,n,t){"use strict";t.d(n,{Z:function(){return UIButton}});var r=t(2322),i=t(9097),a=t.n(i);function UIButton(e){let{href:n,id:t,label:i,onClick:s,style:l,type:o,className:d,target:c}=e;return n?(0,r.jsx)(a(),{id:t,href:n,className:"btn btn-".concat(o||"link"),style:l,target:c,children:i}):(0,r.jsx)("button",{id:t,className:"btn btn-".concat(o||"plain"," ").concat(d||""),style:l,onClick:s,children:i})}},725:function(e,n,t){"use strict";t.d(n,{Z:function(){return UIDialogBox}});var r=t(2322),i=t(590),a=t(1383);function UIDialogBox(e){let{cancel:n,confirm:t,message:s,title:l,cancelName:o,confirmName:d}=e;return(0,r.jsx)(a.Z,{onClose:n,showAnimation:!0,children:(0,r.jsxs)("div",{className:"dialogbox",children:[(0,r.jsx)("h2",{className:"dialogbox-heading",children:l}),(0,r.jsx)("p",{className:"dialogbox-message",children:s}),(0,r.jsxs)("div",{className:"dialogbox-actions",children:[(0,r.jsx)(i.Z,{label:null!=d?d:"Confirm",type:"primary",className:"dialogbox-actions--btn",onClick:t}),(0,r.jsx)(i.Z,{label:null!=o?o:"Cancel",type:"error",className:"dialogbox-actions--btn cancel duotone",onClick:n})]})]})})}},570:function(e,n,t){"use strict";t.d(n,{Z:function(){return UIInput}});var r=t(2322),i=t(2784);function UIInput(e){let{id:n,label:t,name:a,isRequired:s,placeholder:l,type:o,style:d,onClick:c,onChange:u,onBlur:m,error:f,defaultValue:h,instruction:v,disabled:p,autoComplete:g,max:x,min:b}=e,[N,j]=(0,i.useState)(!1);return(0,r.jsxs)("div",{className:"inputfield",style:d,children:[t?(0,r.jsxs)("label",{htmlFor:n||"",className:"inputfield-label",children:[t," ",s?"*":""]}):null,(0,r.jsx)("input",{type:"password"===o?N?"text":"password":o,id:n,name:a,className:"inputfield-input ".concat(f?"error":""),placeholder:l,onClick:c,onChange:u,onBlur:m,defaultValue:null!=h?h:"",required:s,disabled:p,autoComplete:null!=g?g:a,min:b,max:x}),f?(0,r.jsx)("span",{className:"inputfield-error",children:f}):null,"password"===o?(0,r.jsx)("i",{className:"fa-regular fa-eye".concat(N?"":"-slash"),onClick:()=>j(e=>!e),style:{bottom:t&&!f?"35%":!t&&f?"65%":"50%"}}):null,v?(0,r.jsx)("p",{className:"inputfield-instruction",children:v}):null]})}},1383:function(e,n,t){"use strict";t.d(n,{Z:function(){return UIModal}});var r=t(2322),i=t(2784);function UIModal(e){let{children:n,onClose:t,style:a,showAnimation:s}=e,l=(0,i.useRef)(null);return(0,r.jsxs)("div",{className:"uimodal",children:[(0,r.jsx)("div",{className:"uimodal-overlay"}),(0,r.jsxs)("div",{className:"uimodal-content",style:a,ref:l,children:[(0,r.jsx)("div",{className:"uimodal-content--cross",onClick:()=>{var e;if(!s)return null==t?void 0:t();null===(e=l.current)||void 0===e||e.classList.add("hide"),setTimeout(()=>null==t?void 0:t(),700)},children:(0,r.jsx)("i",{className:"fa-regular fa-times"})}),n]})]})}}},function(e){e.O(0,[97,774,888,179],function(){return e(e.s=1281)}),_N_E=e.O()}]);