"use strict";exports.id=2315,exports.ids=[2315],exports.modules={2315:(e,t,r)=>{r.r(t),r.d(t,{default:()=>UITextEditor});var l=r(997),s=r(8167),a=r.n(s),o=r(6689);function UITextEditor({id:e,error:t,isRequired:r,label:s,name:i,placeholder:n,style:d,formatedEditorConfig:u,defaultValue:x,onChange:c,instruction:m,cols:p,rows:h}){let f=(0,o.useRef)(null),j=(0,o.useMemo)(()=>({...u,statusbar:!1}),[]);return(0,l.jsxs)("div",{className:"texteditor",style:d,children:[s?(0,l.jsxs)("label",{htmlFor:e||"",className:"texteditor-label",children:[s," ",r?"*":""]}):null,u?l.jsx(a(),{config:j,ref:f,value:x??"",onBlur:e=>c&&c({target:{name:i??"TextEditor",value:e,required:r,type:"text"}}),className:`${t?"error":"normal"}`,onChange:e=>c&&c({target:{name:i??"TextEditor",value:e,required:r,type:"text"}})}):l.jsx("textarea",{placeholder:n,name:i,id:e,cols:p??30,rows:h??10,defaultValue:x??"",className:`texteditor-input ${t?"error":""}`,onChange:c,required:r}),t?l.jsx("span",{className:"texteditor-error",children:t}):null,m?l.jsx("p",{className:"texteditor-instruction",children:m}):null]})}}};