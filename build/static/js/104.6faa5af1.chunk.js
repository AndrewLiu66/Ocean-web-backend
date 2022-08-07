/*! For license information please see 104.6faa5af1.chunk.js.LICENSE.txt */
(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[104],{1359:function(t,e,n){"use strict";n.r(e),n.d(e,"CalciteSwitch",(function(){return v})),n.d(e,"defineCustomElement",(function(){return k}));var i=n(471),a=n(515),o=n(846);const r="hidden-form-input";function c(t){return"checked"in t}const l=new WeakMap,s=new WeakSet;function d(t){const{el:e,value:n}=t,i=Object(a.d)(e,"form");if(!i||function(t,e){const n="calciteInternalFormComponentRegister";let i=!1;return t.addEventListener(n,(t=>{i=t.composedPath().some((t=>s.has(t))),t.stopPropagation()}),{once:!0}),e.dispatchEvent(new CustomEvent(n,{bubbles:!0,composed:!0})),i}(i,e))return;t.formEl=i,t.defaultValue=n,c(t)&&(t.defaultChecked=t.checked);const o=(t.onFormReset||u).bind(t);i.addEventListener("reset",o),l.set(t.el,o),s.add(e)}function u(){c(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function h(t,e,n){var i;const{defaultValue:a,disabled:o,name:r,required:l}=t;e.defaultValue=a,e.disabled=o,e.name=r,e.required=l,e.tabIndex=-1,c(t)?(e.defaultChecked=t.defaultChecked,e.value=t.checked?n||"on":"",o||t.checked||(e.disabled=!0)):e.value=n||"",null===(i=t.syncHiddenFormInput)||void 0===i||i.call(t,e)}const m=t=>{let{component:e}=t;return function(t){const{el:e,formEl:n,name:i,value:a}=t,{ownerDocument:o}=e,c=e.querySelectorAll('input[slot="'.concat(r,'"]'));if(!n||!i)return void c.forEach((t=>t.remove()));const l=Array.isArray(a)?a:[a],s=[],d=new Set;let u;c.forEach((e=>{const n=l.find((t=>t==e.value));null!=n?(d.add(n),h(t,e,n)):s.push(e)})),l.forEach((e=>{if(d.has(e))return;let n=s.pop();n||(n=o.createElement("input"),n.slot=r),u||(u=o.createDocumentFragment()),u.append(n),h(t,n,e)})),u&&e.append(u),s.forEach((t=>t.remove()))}(e),Object(i.g)("slot",{name:r})};function b(){}const f=Object(i.h)(class extends i.b{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteSwitchChange=Object(i.d)(this,"calciteSwitchChange",7),this.disabled=!1,this.scale="m",this.switched=!1,this.checked=!1,this.keyDownHandler=t=>{const e=t.key;this.disabled||" "!==e&&"Enter"!==e||(this.toggle(),t.preventDefault())},this.clickHandler=()=>{this.toggle()},this.setSwitchEl=t=>{this.switchEl=t}}switchedWatcher(t){this.checked=t}async setFocus(){Object(a.e)(this.switchEl)}onLabelClick(){this.disabled||(this.toggle(),this.setFocus())}toggle(){this.checked=!this.checked,this.calciteSwitchChange.emit({switched:this.checked})}connectedCallback(){const t=this.checked||this.switched;t&&(this.switched=this.checked=t),Object(o.b)(this),d(this)}disconnectedCallback(){Object(o.c)(this),function(t){const{el:e,formEl:n}=t;if(!n)return;const i=l.get(e);n.removeEventListener("reset",i),l.delete(e),t.formEl=null,s.delete(e)}(this)}componentDidRender(){!function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t.disabled)return t.el.setAttribute("tabindex","-1"),t.el.setAttribute("aria-disabled","true"),t.el.contains(document.activeElement)&&document.activeElement.blur(),void(t.el.click=b);t.el.click=HTMLElement.prototype.click,"function"===typeof e?t.el.setAttribute("tabindex",e.call(t)?"0":"-1"):!0===e?t.el.setAttribute("tabindex","0"):!1===e&&t.el.removeAttribute("tabindex"),t.el.removeAttribute("aria-disabled")}(this)}render(){return Object(i.g)(i.c,{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},Object(i.g)("div",{"aria-checked":Object(a.g)(this.checked),"aria-label":Object(o.d)(this),class:"container",ref:this.setSwitchEl,role:"switch",tabIndex:0},Object(i.g)("div",{class:"track"},Object(i.g)("div",{class:"handle"})),Object(i.g)(m,{component:this})))}get el(){return this}static get watchers(){return{switched:["switchedWatcher"]}}static get style(){return"@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:root{--calcite-popper-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]) .container{height:0.75rem}:host([scale=s]) .track{height:0.75rem;width:1.5rem}:host([scale=s]) .handle{height:0.5rem;width:0.5rem}:host([scale=m]) .container{height:1rem}:host([scale=m]) .track{height:1rem;width:2rem}:host([scale=m]) .handle{height:0.75rem;width:0.75rem}:host([scale=l]) .container{height:1.5rem}:host([scale=l]) .track{height:1.5rem;width:3rem}:host([scale=l]) .handle{height:1.25rem;width:1.25rem}:host{position:relative;display:inline-block;width:auto;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;tap-highlight-color:transparent}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host{width:auto;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.track{pointer-events:none;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);background-color:var(--calcite-ui-foreground-2);vertical-align:top;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.handle{pointer-events:none;position:absolute;display:block;border-radius:9999px;border-width:2px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);top:-1px;inset-inline:-1px auto}:host(:hover) .handle,:host(:focus) .handle{border-color:var(--calcite-ui-brand);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([checked]) .track{border-color:var(--calcite-ui-brand-hover);background-color:var(--calcite-ui-brand)}:host([checked]) .handle{border-color:var(--calcite-ui-brand);inset-inline:auto -1px}:host([checked]:hover) .track{border-color:var(--calcite-ui-brand-hover);background-color:var(--calcite-ui-brand)}:host([checked]:hover) .handle{border-color:var(--calcite-ui-brand-hover);-webkit-box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover)}@media (forced-colors: active){:host([checked]) .track{background-color:canvasText}}.container:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}::slotted(input[slot=hidden-form-input]){bottom:0 !important;left:0 !important;margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;right:0 !important;top:0 !important;-webkit-transform:none !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}"}},[1,"calcite-switch",{disabled:[516],label:[1],name:[513],scale:[513],switched:[1028],checked:[1540],value:[8],setFocus:[64]}]);function p(){if("undefined"===typeof customElements)return;["calcite-switch"].forEach((t=>{if("calcite-switch"===t)customElements.get(t)||customElements.define(t,f)}))}p();const v=f,k=p},515:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return h})),n.d(e,"g",(function(){return m}));function i(t){const e=c(t,"[".concat("dir","]"));return e?e.getAttribute("dir"):"ltr"}function a(t){return t.getRootNode()}function o(t){return t.host||null}function r(t,e){let{selector:n,id:i}=e;return function t(e){if(!e)return null;e.assignedSlot&&(e=e.assignedSlot);const r=a(e),c=i?"getElementById"in r?r.getElementById(i):null:n?r.querySelector(n):null,l=o(r);return c||(l?t(l):null)}(t)}function c(t,e){return function t(n){return n?n.closest(e)||t(o(a(n))):null}(t)}async function l(t){if(t)return function(t){return"function"===typeof(null===t||void 0===t?void 0:t.setFocus)}(t)?t.setFocus():t.focus()}const s=":not([slot])";function d(t,e,n){e&&!Array.isArray(e)&&"string"!==typeof e&&(n=e,e=null);const i=e?Array.isArray(e)?e.map((t=>'[slot="'.concat(t,'"]'))).join(","):'[slot="'.concat(e,'"]'):s;return(null===n||void 0===n?void 0:n.all)?function(t,e,n){let i=e===s?u(t,s):Array.from(t.querySelectorAll(e));i=n&&!1===n.direct?i:i.filter((e=>e.parentElement===t)),i=(null===n||void 0===n?void 0:n.matches)?i.filter((t=>null===t||void 0===t?void 0:t.matches(n.matches))):i;const a=null===n||void 0===n?void 0:n.selector;return a?i.map((t=>Array.from(t.querySelectorAll(a)))).reduce(((t,e)=>[...t,...e]),[]).filter((t=>!!t)):i}(t,i,n):function(t,e,n){let i=e===s?u(t,s)[0]||null:t.querySelector(e);i=n&&!1===n.direct||(null===i||void 0===i?void 0:i.parentElement)===t?i:null,i=(null===n||void 0===n?void 0:n.matches)?(null===i||void 0===i?void 0:i.matches(n.matches))?i:null:i;const a=null===n||void 0===n?void 0:n.selector;return a?null===i||void 0===i?void 0:i.querySelector(a):i}(t,i,n)}function u(t,e){return t?Array.from(t.children||[]).filter((t=>null===t||void 0===t?void 0:t.matches(e))):[]}function h(t,e,n){return"string"===typeof e&&""!==e?e:""===e?t[n]:void 0}function m(t){return(!!t).toString()}},846:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return m})),n.d(e,"c",(function(){return b})),n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return o}));var i=n(515);const a="calciteInternalLabelClick",o="calciteInternalLabelConnected",r="calciteInternaLabelDisconnected",c="calcite-label",l=new WeakMap,s=new WeakMap,d=new WeakMap,u=new Set,h=t=>{const{id:e}=t,n=e&&Object(i.c)(t,{selector:"".concat(c,'[for="').concat(e,'"]')});if(n)return n;const a=Object(i.d)(t,c);return!a||function(t,e){let n;const i="custom-element-ancestor-check",a=i=>{i.stopImmediatePropagation();const a=i.composedPath();n=a.slice(a.indexOf(e),a.indexOf(t))};t.addEventListener(i,a,{once:!0}),e.dispatchEvent(new CustomEvent(i,{composed:!0,bubbles:!0})),t.removeEventListener(i,a);return n.filter((n=>n!==e&&n!==t)).filter((t=>{var e;return null===(e=t.tagName)||void 0===e?void 0:e.includes("-")})).length>0}(a,t)?null:a};function m(t){const e=h(t.el);if(l.has(e)||!e&&u.has(t))return;const n=k.bind(t);if(e){t.labelEl=e;const i=p.bind(t);l.set(t.labelEl,i),t.labelEl.addEventListener(a,i),u.delete(t),document.removeEventListener(o,s.get(t)),d.set(t,n),document.addEventListener(r,n)}else u.has(t)||(n(),document.removeEventListener(r,d.get(t)))}function b(t){if(u.delete(t),document.removeEventListener(o,s.get(t)),document.removeEventListener(r,d.get(t)),s.delete(t),d.delete(t),!t.labelEl)return;const e=l.get(t.labelEl);t.labelEl.removeEventListener(a,e),l.delete(t.labelEl)}function f(t){var e,n;return t.label||(null===(n=null===(e=t.labelEl)||void 0===e?void 0:e.textContent)||void 0===n?void 0:n.trim())||""}function p(t){if(this.disabled)return;this.el.contains(t.detail.sourceEvent.target)||this.onLabelClick(t)}function v(){u.has(this)&&m(this)}function k(){u.add(this);const t=s.get(this)||v.bind(this);s.set(this,t),document.addEventListener(o,t)}}}]);