(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[188],{212:function(e,t,a){"use strict";a.r(t),a.d(t,"createSymbolSchema",(function(){return l}));var r=a(142),n=a(146);function s(e){var t;return"line-marker"===e.type?{type:"line-marker",color:null===(t=e.color)||void 0===t?void 0:t.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function c(e){return Object(n.j)(e)}function l(e,t,a){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return function(e,t,a){const l=Object(n.g)(r.d.FILL,t),o=a?c(l):l,i=e.clone(),h=i.outline,m=Object(n.k)(t.symbologyType);m||(i.outline=null);const u={materialKey:o,hash:i.hash(),...s(i)};if(m)return u;const y=[];if(y.push(u),h){const e=Object(n.g)(r.d.LINE,{...t,isOutline:!0}),l={materialKey:a?c(e):e,hash:h.hash(),...s(h)};y.push(l)}return{type:"composite-symbol",layers:y,hash:y.reduce(((e,t)=>t.hash+e),"")}}(e,t,a);case"simple-marker":case"picture-marker":return function(e,t,a){const l=Object(n.g)(r.d.MARKER,t),o=a?c(l):l,i=s(e);return{materialKey:o,hash:e.hash(),...i,angle:e.angle,maxVVSize:t.maxVVSize}}(e,t,a);case"simple-line":return function(e,t,a){const l=Object(n.k)(t.symbologyType)?r.e.DEFAULT:t.symbologyType,o=Object(n.g)(r.d.LINE,{...t,symbologyType:l}),i=a?c(o):o,h=e.clone(),m=h.marker;h.marker=null;const u=[];if(u.push({materialKey:i,hash:h.hash(),...s(h)}),m){var y;const e=Object(n.g)(r.d.MARKER,t),l=a?c(e):e;m.color=null!==(y=m.color)&&void 0!==y?y:h.color,u.push({materialKey:l,hash:m.hash(),lineWidth:h.width,...s(m)})}return{type:"composite-symbol",layers:u,hash:u.reduce(((e,t)=>t.hash+e),"")}}(e,t,a);case"text":return function(e,t,a){const l=Object(n.g)(r.d.TEXT,t),o=a?c(l):l,i=s(e);return{materialKey:o,hash:e.hash(),...i,angle:e.angle,maxVVSize:t.maxVVSize}}(e,t,a);case"label":return function(e,t,a){const s=e.toJSON(),l=Object(n.g)(r.d.LABEL,{...t,placement:s.labelPlacement});return{materialKey:a?c(l):l,hash:e.hash(),...s,labelPlacement:s.labelPlacement}}(e,t,a);case"cim":return{type:"cim",rendererKey:t.vvFlags,data:e.data,maxVVSize:t.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:t.vvFlags,data:e,maxVVSize:t.maxVVSize};case"web-style":return{...s(e),type:"web-style",hash:e.hash(),rendererKey:t.vvFlags,maxVVSize:t.maxVVSize};default:throw new Error("symbol not supported ".concat(e.type))}}}}]);