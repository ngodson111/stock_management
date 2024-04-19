(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[426],{8941:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stocks/edit",function(){return i(2247)}])},2006:function(e,t,i){"use strict";i.d(t,{Z:function(){return useForm}});var n=i(7115),r=i(7784),l=i(7294);function useForm(e){let{schema:t,data:i}=e,[a,s]=(0,l.useState)(1),[o,c]=(0,l.useState)({}),[d,u]=(0,l.useState)({});(0,l.useEffect)(()=>{i&&c(i)},[i]);let handleValidation=e=>{try{var i;let l=(0,r.Fv)(e,t);if(console.log(l),null===(i=l.errors)||void 0===i?void 0:i.hasError){(0,n.Jc)("Please verify indicated fields"),u(l.errors.error);return}return l.data}catch(e){(0,n.Jc)("Something went wrong with validation")}},g=(0,l.useCallback)(e=>{{let t=e.target.name,i=e.target.type,n=e.target.required,l=(0,r.Hc)(i,e),a=null!=l&&""!==l;c(e=>({...e,[t]:a?l:void 0})),n&&a&&u(e=>({...e,[t]:""}))}},[]);return{state:o,error:d,formKey:a,setState:c,setError:u,setFormKey:s,handleInput:g,handleValidation,handleSubmit:e=>{let t=handleValidation(o);t&&e(t)},resetForm:e=>{c(null!=i?i:{}),u({}),s(e=>e+1),e&&(0,n.Qm)(e)}}}},2247:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return EditProduct}});var n=i(5893),r=i(2006),l=i(7115),a=i(5506),s=i(5382),o=i(470),c=i(7945),d=i(3104),u=i(2361),g=i(9091),m=i(8699),h=i(5152),p=i.n(h),f=i(7294);let v=p()(()=>Promise.all([i.e(326),i.e(911),i.e(315)]).then(i.bind(i,2315)),{loadableGenerated:{webpack:()=>[2315]},ssr:!1});function EditProduct(e){let{onClose:t,theme:i,data:h}=e,p=(0,a.TL)(),[x,b]=(0,f.useState)(!1),{error:j,state:y,formKey:N,handleInput:C,handleSubmit:k,resetForm:P}=(0,r.Z)({schema:o.xs,data:h}),_=(0,f.useCallback)(()=>{b(e=>!e)},[]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g.Z,{onClose:t,children:(0,n.jsxs)("div",{className:"product-edit",children:[(0,n.jsx)("h2",{className:"product-edit--heading",children:"Edit Product"}),(0,n.jsx)("div",{className:"product-edit--form",children:(0,n.jsxs)("div",{className:"product-edit--form",children:[(0,n.jsxs)("div",{className:"product-edit--form__left",children:[(0,n.jsx)("h4",{className:"product-edit--heading",children:"Basic Information:"}),(0,n.jsxs)("div",{className:"product-insert--group",children:[(0,n.jsx)(u.Z,{id:"code",isRequired:!0,label:"Product Code",placeholder:"eg. 328434-2873..",name:"code",onChange:C,defaultValue:y.code,error:j.code}),(0,n.jsx)(u.Z,{id:"rack",isRequired:!0,label:"Rack Information",placeholder:"eg. A3",name:"rack",onChange:C,defaultValue:y.rack,error:j.rack})]}),(0,n.jsx)(u.Z,{id:"title",isRequired:!0,label:"Product Name",placeholder:"eg. Dairy Milk 100g..",name:"title",onChange:C,defaultValue:y.title,error:j.title}),(0,n.jsx)(m.Z,{placeholder:"eg. Chocolate,Bars",label:"Tags",isRequired:!0,defaultValue:y.tags,error:j.tags,onChange:C,id:"tags",name:"tags",joinString:",",instruction:"* Tags are used for searching where it helps in making product search variation."},y.tags),(0,n.jsx)(u.Z,{id:"buyingPrice",isRequired:!0,label:"Buying Price",placeholder:"eg. 1500",name:"buyingPrice",onChange:C,defaultValue:y.buyingPrice,error:j.buyingPrice}),(0,n.jsx)(u.Z,{id:"sellingPrice",isRequired:!0,label:"Selling Price",placeholder:"eg. 2000",name:"sellingPrice",onChange:C,defaultValue:y.sellingPrice,error:j.sellingPrice})]}),(0,n.jsxs)("div",{className:"product-edit--form__right",children:[(0,n.jsx)("h4",{className:"product-edit--heading",children:"Description: *"}),(0,n.jsx)(v,{id:"description",formatedEditorConfig:{theme:i,readonly:!1,height:350},isRequired:!0,name:"description",onChange:C,defaultValue:y.description,error:j.description})]})]})},N),(0,n.jsx)("div",{className:"product-edit--actions",children:(0,n.jsx)(c.Z,{label:"Save",type:"primary",onClick:_,style:{minWidth:"13rem"}})})]})}),x?(0,n.jsx)(d.Z,{cancel:_,confirm:()=>{k(e=>{p((0,s.zG)({data:e,callback:()=>{_(),(0,l.Qm)("Product edited")}}))})},title:"Confirm Edit",message:"Are you sure you want to save changes?"}):null]})}},3232:function(e,t,i){"use strict";i.d(t,{G5:function(){return stringField},v3:function(){return positiveNumberString}});var n=i(1604);let positiveNumberString=e=>n.z.string().refine(e=>!isNaN(parseFloat(e)),{message:"".concat(e," must be a positive number.")}),stringField=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2?arguments[2]:void 0;return n.z.string({required_error:"".concat(e," is required"),invalid_type_error:"Provide valid type"}).min(t,{message:"".concat(e," is too short")}).refine(e=>!i||e.length<=i,"".concat(e," is too long"))};n.z.string({invalid_type_error:"Provide valid type"}).optional().nullable(),n.z.number({invalid_type_error:"Provide valid type"}).optional().nullable(),n.z.boolean({invalid_type_error:"Provide valid type"}).optional().nullable(),n.z.string().refine(e=>!e||!isNaN(+e),{message:"Field must be a positive integer."}).optional()},470:function(e,t,i){"use strict";i.d(t,{Gu:function(){return a},xs:function(){return l}});var n=i(1604),r=i(3232);let l=n.z.object({id:(0,r.G5)("ID"),code:(0,r.G5)("Code"),title:(0,r.G5)("Title"),buyingPrice:(0,r.v3)("Buying Price"),sellingPrice:(0,r.v3)("Selling Price"),description:(0,r.G5)("Description"),tags:(0,r.G5)("Tags"),rack:(0,r.G5)("Rack"),quantity:(0,r.v3)("Quantity"),inserted:(0,r.G5)("Inserted"),updated:(0,r.G5)("Updated")}),a=l.omit({id:!0,inserted:!0,updated:!0,quantity:!0});l.pick({id:!0})},7945:function(e,t,i){"use strict";i.d(t,{Z:function(){return UIButton}});var n=i(5893),r=i(1664),l=i.n(r);function UIButton(e){let{href:t,id:i,label:r,onClick:a,style:s,type:o,className:c,target:d}=e;return t?(0,n.jsx)(l(),{id:i,href:t,className:"btn btn-".concat(o||"link"),style:s,target:d,children:r}):(0,n.jsx)("button",{id:i,className:"btn btn-".concat(o||"plain"," ").concat(c||""),style:s,onClick:a,children:r})}},3104:function(e,t,i){"use strict";i.d(t,{Z:function(){return UIDialogBox}});var n=i(5893),r=i(5506),l=i(7945),a=i(9091),s=i(8515),o=i(7294);let setupDialogueHotKeys=(e,t)=>{s.Z.setScope("dialogue"),Object.entries({"ctrl+enter":e,"ctrl+esc":t}).forEach(e=>{let[t,i]=e;(0,s.Z)(t,"dialogue",(e,t)=>{console.log(e),e.preventDefault(),i()})})};function UIDialogBox(e){let{cancel:t,confirm:i,message:c,title:d,cancelName:u,confirmName:g,scope:m}=e;return(0,r.TL)(),(0,r.CG)(e=>e.system),(0,o.useEffect)(()=>(setupDialogueHotKeys(i,t),()=>{s.Z.deleteScope("dialogue"),m&&s.Z.setScope(m)}),[]),(0,n.jsx)(a.Z,{onClose:t,showAnimation:!0,children:(0,n.jsxs)("div",{className:"dialogbox",children:[(0,n.jsx)("h2",{className:"dialogbox-heading",children:d}),(0,n.jsx)("p",{className:"dialogbox-message",children:c}),(0,n.jsxs)("div",{className:"dialogbox-actions",children:[(0,n.jsx)(l.Z,{label:null!=g?g:"Confirm",type:"primary",className:"dialogbox-actions--btn",onClick:i}),(0,n.jsx)(l.Z,{label:null!=u?u:"Cancel",type:"error",className:"dialogbox-actions--btn cancel duotone",onClick:t})]})]})})}},2361:function(e,t,i){"use strict";i.d(t,{Z:function(){return UIInput}});var n=i(5893),r=i(7294);function UIInput(e){let{id:t,label:i,name:l,isRequired:a,placeholder:s,type:o,style:c,onClick:d,onChange:u,onBlur:g,onFocus:m,error:h,defaultValue:p,instruction:f,disabled:v,autoComplete:x,max:b,min:j,autoFocus:y}=e,[N,C]=(0,r.useState)(!1);return(0,n.jsxs)("div",{className:"inputfield",style:c,children:[i?(0,n.jsxs)("label",{htmlFor:t||"",className:"inputfield-label",children:[i," ",a?"*":""]}):null,(0,n.jsx)("input",{type:"password"===o?N?"text":"password":o,id:t,name:l,className:"inputfield-input ".concat(h?"error":""),placeholder:s,onClick:d,onChange:u,onBlur:g,onFocus:m,defaultValue:null!=p?p:"",required:a,disabled:v,autoComplete:null!=x?x:l,min:j,max:b,autoFocus:y}),h?(0,n.jsx)("span",{className:"inputfield-error",children:h}):null,"password"===o?(0,n.jsx)("i",{className:"fa-regular fa-eye".concat(N?"":"-slash"),onClick:()=>C(e=>!e),style:{bottom:i&&!h?"35%":!i&&h?"65%":"50%"}}):null,f?(0,n.jsx)("p",{className:"inputfield-instruction",children:f}):null]})}},9091:function(e,t,i){"use strict";i.d(t,{Z:function(){return UIModal}});var n=i(5893),r=i(7294);function UIModal(e){let{children:t,onClose:i,style:l,showAnimation:a}=e,s=(0,r.useRef)(null);return(0,n.jsxs)("div",{className:"uimodal",children:[(0,n.jsx)("div",{className:"uimodal-overlay"}),(0,n.jsxs)("div",{className:"uimodal-content",style:l,ref:s,children:[(0,n.jsx)("div",{className:"uimodal-content--cross",onClick:()=>{var e;if(!a)return null==i?void 0:i();null===(e=s.current)||void 0===e||e.classList.add("hide"),setTimeout(()=>null==i?void 0:i(),700)},children:(0,n.jsx)("i",{className:"fa-regular fa-times"})}),t]})]})}},8699:function(e,t,i){"use strict";i.d(t,{Z:function(){return UITagEditor}});var n=i(5893),r=i(7294);function UITagEditor(e){let{id:t,error:i,isRequired:l,label:a,name:s,placeholder:o,style:c,defaultValue:d,onChange:u,instruction:g,joinString:m}=e,[h,p]=(0,r.useState)(d?"string"==typeof d?d.split(null!=m?m:","):d:[]),[f,v]=(0,r.useState)(""),handleRemoveItemFromState=e=>{let t=h.filter((t,i)=>i!==e);p(t),x(t)},x=(0,r.useCallback)(e=>{null==u||u({target:{value:m?e.join(m):e,name:null!=s?s:"TagEditor",required:null!=l&&l,type:"string"==typeof d?"text":"list"}})},[m,s,l,d,u]),b=(0,r.useCallback)(()=>{if(!f)return;let e=[...h,f];p(e),v(""),x(e)},[f]);return(0,n.jsxs)("div",{className:"tageditor",style:c,children:[a?(0,n.jsxs)("label",{htmlFor:t||"",className:"tageditor-label",children:[a," ",l?"*":""]}):null,(0,n.jsxs)("div",{className:"tageditor-wrapper ".concat(i?"error":""),children:[h.map((e,t)=>(0,n.jsxs)("div",{className:"tageditor-wrapper--item",children:[(0,n.jsx)("span",{children:e}),(0,n.jsx)("i",{className:"fa-regular fa-times",onClick:()=>handleRemoveItemFromState(t)})]},t)),(0,n.jsx)("input",{type:"text",placeholder:h.length<1?o:"",id:t,name:s,onChange:e=>{v(e.currentTarget.value)},onKeyUp:e=>{let t=e.currentTarget.value.trim();if("Backspace"===e.code&&h.length>0&&0===t.length){let e=h[h.length-1];e&&v(e),p(e=>e.slice(0,-1));return}if("Enter"===e.code&&t.length>0){let e=[...h,t];p(e),v(""),x(e);return}},onBlur:b,value:f})]}),i?(0,n.jsx)("span",{className:"tageditor-error",children:i}):null,g?(0,n.jsx)("p",{className:"tageditor-instruction",children:g}):null]})}}},function(e){e.O(0,[664,458,774,888,179],function(){return e(e.s=8941)}),_N_E=e.O()}]);