(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[458],{8515:function(e,t,n){"use strict";n.d(t,{Z:function(){return hotkeys}});let o="undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>0;function addEvent(e,t,n,o){e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on".concat(t),n)}function removeEvent(e,t,n,o){e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on".concat(t),n)}function getMods(e,t){let n=t.slice(0,t.length-1);for(let t=0;t<n.length;t++)n[t]=e[n[t].toLowerCase()];return n}function getKeys(e){"string"!=typeof e&&(e=""),e=e.replace(/\s/g,"");let t=e.split(","),n=t.lastIndexOf("");for(;n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}let l={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":o?173:189,"=":o?61:187,";":o?59:186,"'":222,"[":219,"]":221,"\\":220},r={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,command:91},i={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},a={16:!1,18:!1,17:!1,91:!1},s={};for(let e=1;e<20;e++)l["f".concat(e)]=111+e;let d=[],u=null,c="all",f=new Map,code=e=>l[e.toLowerCase()]||r[e.toLowerCase()]||e.toUpperCase().charCodeAt(0),getKey=e=>Object.keys(l).find(t=>l[t]===e),getModifier=e=>Object.keys(r).find(t=>r[t]===e);function setScope(e){c=e||"all"}function getScope(){return c||"all"}function unbind(e){if(void 0===e)Object.keys(s).forEach(e=>{Array.isArray(s[e])&&s[e].forEach(e=>eachUnbind(e)),delete s[e]}),removeKeyEvent(null);else if(Array.isArray(e))e.forEach(e=>{e.key&&eachUnbind(e)});else if("object"==typeof e)e.key&&eachUnbind(e);else if("string"==typeof e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];let[l,r]=n;"function"==typeof l&&(r=l,l=""),eachUnbind({key:e,scope:l,method:r,splitKey:"+"})}}let eachUnbind=e=>{let{key:t,scope:n,method:o,splitKey:l="+"}=e,i=getKeys(t);i.forEach(e=>{let t=e.split(l),i=t.length,a=t[i-1],d="*"===a?"*":code(a);if(!s[d])return;n||(n=getScope());let u=i>1?getMods(r,t):[],c=[];s[d]=s[d].filter(e=>{let t=!o||e.method===o,l=t&&e.scope===n&&function(e,t){let n=e.length>=t.length?e:t,o=e.length>=t.length?t:e,l=!0;for(let e=0;e<n.length;e++)-1===o.indexOf(n[e])&&(l=!1);return l}(e.mods,u);return l&&c.push(e.element),!l}),c.forEach(e=>removeKeyEvent(e))})};function eventHandler(e,t,n,o){let l;if(t.element===o&&(t.scope===n||"all"===t.scope)){for(let e in l=t.mods.length>0,a)Object.prototype.hasOwnProperty.call(a,e)&&(!a[e]&&t.mods.indexOf(+e)>-1||a[e]&&-1===t.mods.indexOf(+e))&&(l=!1);(0!==t.mods.length||a[16]||a[18]||a[17]||a[91])&&!l&&"*"!==t.shortcut||(t.keys=[],t.keys=t.keys.concat(d),!1===t.method(e,t)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0)))}}function dispatch(e,t){let n=s["*"],o=e.keyCode||e.which||e.charCode;if(!hotkeys.filter.call(this,e))return;if((93===o||224===o)&&(o=91),-1===d.indexOf(o)&&229!==o&&d.push(o),["ctrlKey","altKey","shiftKey","metaKey"].forEach(t=>{let n=i[t];e[t]&&-1===d.indexOf(n)?d.push(n):!e[t]&&d.indexOf(n)>-1?d.splice(d.indexOf(n),1):"metaKey"===t&&e[t]&&3===d.length&&!(e.ctrlKey||e.shiftKey||e.altKey)&&(d=d.slice(d.indexOf(n)))}),o in a){for(let e in a[o]=!0,r)r[e]===o&&(hotkeys[e]=!0);if(!n)return}for(let t in a)Object.prototype.hasOwnProperty.call(a,t)&&(a[t]=e[i[t]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(-1===d.indexOf(17)&&d.push(17),-1===d.indexOf(18)&&d.push(18),a[17]=!0,a[18]=!0);let l=getScope();if(n)for(let o=0;o<n.length;o++)n[o].scope===l&&("keydown"===e.type&&n[o].keydown||"keyup"===e.type&&n[o].keyup)&&eventHandler(e,n[o],l,t);if(!(o in s))return;let u=s[o],c=u.length;for(let n=0;n<c;n++)if(("keydown"===e.type&&u[n].keydown||"keyup"===e.type&&u[n].keyup)&&u[n].key){let o=u[n],{splitKey:r}=o,i=o.key.split(r),a=[];for(let e=0;e<i.length;e++)a.push(code(i[e]));a.sort().join("")===d.sort().join("")&&eventHandler(e,o,l,t)}}function hotkeys(e,t,n){d=[];let o=getKeys(e),l=[],i="all",c=document,p=0,y=!1,h=!0,m="+",b=!1,g=!1;for(void 0===n&&"function"==typeof t&&(n=t),"[object Object]"===Object.prototype.toString.call(t)&&(t.scope&&(i=t.scope),t.element&&(c=t.element),t.keyup&&(y=t.keyup),void 0!==t.keydown&&(h=t.keydown),void 0!==t.capture&&(b=t.capture),"string"==typeof t.splitKey&&(m=t.splitKey),!0===t.single&&(g=!0)),"string"==typeof t&&(i=t),g&&unbind(e,i);p<o.length;p++)e=o[p].split(m),l=[],e.length>1&&(l=getMods(r,e)),(e="*"===(e=e[e.length-1])?"*":code(e))in s||(s[e]=[]),s[e].push({keyup:y,keydown:h,scope:i,mods:l,shortcut:o[p],method:n,key:o[p],splitKey:m,element:c});if(void 0!==c&&window){if(!f.has(c)){let keydownListener=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.event;return dispatch(e,c)},keyupListenr=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.event;dispatch(e,c),function(e){let t=e.keyCode||e.which||e.charCode,n=d.indexOf(t);if(n>=0&&d.splice(n,1),e.key&&"meta"===e.key.toLowerCase()&&d.splice(0,d.length),(93===t||224===t)&&(t=91),t in a)for(let e in a[t]=!1,r)r[e]===t&&(hotkeys[e]=!1)}(e)};f.set(c,{keydownListener,keyupListenr,capture:b}),addEvent(c,"keydown",keydownListener,b),addEvent(c,"keyup",keyupListenr,b)}if(!u){let listener=()=>{d=[]};u={listener,capture:b},addEvent(window,"focus",listener,b)}}}function removeKeyEvent(e){let t=Object.values(s).flat(),n=t.findIndex(t=>{let{element:n}=t;return n===e});if(n<0){let{keydownListener:t,keyupListenr:n,capture:o}=f.get(e)||{};t&&n&&(removeEvent(e,"keyup",n,o),removeEvent(e,"keydown",t,o),f.delete(e))}if(t.length<=0||f.size<=0){let e=Object.keys(f);if(e.forEach(e=>{let{keydownListener:t,keyupListenr:n,capture:o}=f.get(e)||{};t&&n&&(removeEvent(e,"keyup",n,o),removeEvent(e,"keydown",t,o),f.delete(e))}),f.clear(),Object.keys(s).forEach(e=>delete s[e]),u){let{listener:e,capture:t}=u;removeEvent(window,"focus",e,t),u=null}}}let p={getPressedKeyString:function(){return d.map(e=>getKey(e)||getModifier(e)||String.fromCharCode(e))},setScope,getScope,deleteScope:function(e,t){let n,o;for(let t in e||(e=getScope()),s)if(Object.prototype.hasOwnProperty.call(s,t))for(o=0,n=s[t];o<n.length;)if(n[o].scope===e){let e=n.splice(o,1);e.forEach(e=>{let{element:t}=e;return removeKeyEvent(t)})}else o++;getScope()===e&&setScope(t||"all")},getPressedKeyCodes:function(){return d.slice(0)},getAllKeyCodes:function(){let e=[];return Object.keys(s).forEach(t=>{s[t].forEach(t=>{let{key:n,scope:o,mods:l,shortcut:r}=t;e.push({scope:o,shortcut:r,mods:l,keys:n.split("+").map(e=>code(e))})})}),e},isPressed:function(e){return"string"==typeof e&&(e=code(e)),-1!==d.indexOf(e)},filter:function(e){let t=e.target||e.srcElement,{tagName:n}=t,o=!0,l="INPUT"===n&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(t.type);return(t.isContentEditable||(l||"TEXTAREA"===n||"SELECT"===n)&&!t.readOnly)&&(o=!1),o},trigger:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";Object.keys(s).forEach(n=>{let o=s[n].filter(n=>n.scope===t&&n.shortcut===e);o.forEach(e=>{e&&e.method&&e.method()})})},unbind,keyMap:l,modifier:r,modifierMap:i};for(let e in p)Object.prototype.hasOwnProperty.call(p,e)&&(hotkeys[e]=p[e]);if("undefined"!=typeof window){let e=window.hotkeys;hotkeys.noConflict=t=>(t&&window.hotkeys===hotkeys&&(window.hotkeys=e),hotkeys),window.hotkeys=hotkeys}},1342:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{noSSR:function(){return noSSR},default:function(){return dynamic}});let o=n(8754),l=(n(7294),o._(n(4304)));function convertModule(e){return{default:(null==e?void 0:e.default)||e}}function noSSR(e,t){return delete t.webpack,delete t.modules,e(t)}function dynamic(e,t){let n=l.default,o={loading:e=>{let{error:t,isLoading:n,pastDelay:o}=e;return null}};e instanceof Promise?o.loader=()=>e:"function"==typeof e?o.loader=e:"object"==typeof e&&(o={...o,...e}),o={...o,...t};let r=o.loader;return(o.loadableGenerated&&(o={...o,...o.loadableGenerated},delete o.loadableGenerated),"boolean"!=typeof o.ssr||o.ssr)?n({...o,loader:()=>null!=r?r().then(convertModule):Promise.resolve(convertModule(()=>null))}):(delete o.webpack,delete o.modules,noSSR(n,o))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},43:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return r}});let o=n(8754),l=o._(n(7294)),r=l.default.createContext(null)},4304:function(e,t,n){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let o=n(8754),l=o._(n(7294)),r=n(43),i=[],a=[],s=!1;function load(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}let LoadableSubscription=class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}};function Loadable(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),o=null;function init(){if(!o){let t=new LoadableSubscription(e,n);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()}if(!s){let e=n.webpack?n.webpack():n.modules;e&&a.push(t=>{for(let n of e)if(t.includes(n))return init()})}function LoadableComponent(e,t){!function(){init();let e=l.default.useContext(r.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}();let i=l.default.useSyncExternalStore(o.subscribe,o.getCurrentValue,o.getCurrentValue);return l.default.useImperativeHandle(t,()=>({retry:o.retry}),[]),l.default.useMemo(()=>{var t;return i.loading||i.error?l.default.createElement(n.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:o.retry}):i.loaded?l.default.createElement((t=i.loaded)&&t.default?t.default:t,e):null},[e,i])}return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",l.default.forwardRef(LoadableComponent)}(load,e)}function flushInitializers(e,t){let n=[];for(;e.length;){let o=e.pop();n.push(o(t))}return Promise.all(n).then(()=>{if(e.length)return flushInitializers(e,t)})}Loadable.preloadAll=()=>new Promise((e,t)=>{flushInitializers(i).then(e,t)}),Loadable.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let res=()=>(s=!0,t());flushInitializers(a,e).then(res,res)})),window.__NEXT_PRELOADREADY=Loadable.preloadReady;let d=Loadable},5152:function(e,t,n){e.exports=n(1342)}}]);