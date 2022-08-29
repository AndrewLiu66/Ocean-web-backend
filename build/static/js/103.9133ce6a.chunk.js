(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[103,113],{1313:function(e,t,a){"use strict";a.r(t),a.d(t,"getPatternDescriptor",(function(){return N})),a.d(t,"getSizeFromOptions",(function(){return T})),a.d(t,"getSymbolLayerFill",(function(){return D})),a.d(t,"previewSymbol3D",(function(){return W}));var r=a(6),n=a(156),l=a(155),i=a.n(l),s=a(346),c=a(575),o=(a(148),a(160)),u=a(157),p=a(147),h=a(164),m=a(168),b=a(700),f=a(937),y=a(941),v=a(621),d=a(766),j=a(611),O=a(840),g=v.a.size,k=v.a.maxSize,x=v.a.maxOutlineSize,w=v.a.lineWidth,M=v.a.tallSymbolWidth,L=u.a.getLogger("esri.symbols.support.previewSymbol3D");function S(e){var t=e.outline,a=Object(p.k)(e.material)?e.material.color:null,r=Object(p.k)(a)?a.toHex():null;if(Object(p.j)(t)||"pattern"in t&&Object(p.k)(t.pattern)&&"style"===t.pattern.type&&"none"===t.pattern.style)return"fill"===e.type&&"#ffffff"===r?{color:"#bdc3c7",width:.75}:null;var n=Object(m.c)(t.size)||0;return{color:"rgba("+(Object(p.k)(t.color)?t.color.toRgba():"255,255,255,1")+")",width:Math.min(n,x),style:"pattern"in t&&Object(p.k)(t.pattern)&&"style"===t.pattern.type?Object(b.b)(t.pattern.style):null,join:"butt",cap:"patternCap"in t?t.patternCap:"butt"}}function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=e.a,r=Object(c.a)(e),n=r.h,l=r.s/t,i=100-(100-r.v)/t,s=Object(c.d)({h:n,s:l,v:i}),o=s.r,u=s.g,p=s.b;return[o,u,p,a]}function P(e){return"water"===e.type?Object(p.j)(e.color)?null:e.color:Object(p.j)(e.material)||Object(p.j)(e.material.color)?null:e.material.color}function D(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=P(e);if(!a){if("fill"===e.type)return null;var r=b.a.r,n=Object(v.c)(r,t);return[n,n,n,100]}for(var l=a.toRgba(),i=0;i<3;i++)l[i]=Object(v.c)(l[i],t);return l}function N(e,t){return I.apply(this,arguments)}function I(){return(I=Object(n.a)(i.a.mark((function e(t,a){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("none"!==(r=t.style)){e.next=3;break}return e.abrupt("return",null);case 3:return e.next=5,Object(b.d)(Object(s.a)("esri/symbols/patterns/".concat(r,".png")),a.toCss(!0));case 5:return e.t0=e.sent,e.abrupt("return",{type:"pattern",x:0,y:0,src:e.t0,width:5,height:5});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e){return e.outline?S(e):{color:"rgba(0, 0, 0, 1)",width:1.5}}function $(e,t){var a=P(e);if(!a)return null;var r="rgba(";return r+=Object(v.c)(a.r,t)+",",r+=Object(v.c)(a.g,t)+",",(r+=Object(v.c)(a.b,t)+",")+a.a+");"}function q(e,t){var a=$(e,t);return a?"pattern"in e&&Object(p.k)(e.pattern)&&"style"===e.pattern.type&&"none"===e.pattern.style?null:{color:a,width:Math.min(e.size?Object(m.c)(e.size):.75,x),style:"pattern"in e&&Object(p.k)(e.pattern)&&"style"===e.pattern.type?Object(b.b)(e.pattern.style):null,cap:"cap"in e?e.cap:null,join:"join"in e?"miter"===e.join?Object(m.c)(2):e.join:null}:{}}function C(e,t,a){var r=.75*a;return{type:"linear",x1:r?.25*r:0,y1:r?.5*r:0,x2:r||4,y2:r?.5*r:4,colors:[{color:e,offset:0},{color:t,offset:1}]}}function T(e){var t="number"==typeof(null===e||void 0===e?void 0:e.size)?null===e||void 0===e?void 0:e.size:null;return t?Object(m.c)(t):null}function E(e,t){var a,r=T(t),n=t&&t.maxSize?Object(m.c)(t.maxSize):null,l=t&&t.disableUpsampling,i=e.symbolLayers,c=[],o=0,u=0,p=i.getItemAt(i.length-1);return p&&"icon"===p.type&&(a=p.size&&Object(m.c)(p.size)),i.forEach((function(i){if("icon"===i.type||"object"===i.type){var p="icon"===i.type?i.size&&Object(m.c)(i.size):0,h=r||p?Math.ceil(Math.min(r||p,n||k)):g;if(i&&i.resource&&i.resource.href){var b=function(e,t){var a=t&&t.resource,r=a&&a.href;if(e.thumbnail&&e.thumbnail.url)return Promise.resolve(e.thumbnail.url);if(r&&"object"!==t.type)return Promise.resolve(Object(j.g)(e,t));var n=Object(s.a)("esri/images/Legend/legend3dsymboldefault.png");return e.styleOrigin&&(e.styleOrigin.styleName||e.styleOrigin.styleUrl)?Object(O.resolveWebStyleSymbol)(e.styleOrigin,{portal:e.styleOrigin.portal},"webRef").catch((function(e){return e})).then((function(e){var t;return(null===e||void 0===e||null===(t=e.thumbnail)||void 0===t?void 0:t.url)||n})):Promise.resolve(n)}(e,i).then((function(e){var t=i.get("material.color"),a=function(e){return"icon"===e.type?"multiply":"tint"}(i);return Object(d.b)(e,h,t,a,l)})).then((function(e){var t=e.width,a=e.height;return o=Math.max(o,t),u=Math.max(u,a),[{shape:{type:"image",x:0,y:0,width:t,height:a,src:e.url},fill:null,stroke:null}]}));c.push(b)}else{var x,w=h;"icon"===i.type&&a&&r&&(w=h*(p/a));var L="tall"===(null===t||void 0===t?void 0:t.symbolConfig)||(null===t||void 0===t||null===(x=t.symbolConfig)||void 0===x?void 0:x.isTall)||"object"===i.type&&function(e){var t=e.depth,a=e.height,r=e.width;return r&&t&&a&&r===t&&r<a}(i);o=Math.max(o,L?M:w),u=Math.max(u,w),c.push(Promise.resolve(function(e,t,a){var r=[];if(!e)return r;switch(e.type){case"icon":var n=t,l=t;switch(e.resource&&e.resource.primitive||f.b){case"circle":r.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:D(e,0),stroke:S(e)});break;case"square":r.push({shape:{type:"path",path:[{command:"M",values:[0,l]},{command:"L",values:[0,0]},{command:"L",values:[n,0]},{command:"L",values:[n,l]},{command:"Z",values:[]}]},fill:D(e,0),stroke:S(e)});break;case"triangle":r.push({shape:{type:"path",path:[{command:"M",values:[0,l]},{command:"L",values:[.5*n,0]},{command:"L",values:[n,l]},{command:"Z",values:[]}]},fill:D(e,0),stroke:S(e)});break;case"cross":r.push({shape:{type:"path",path:[{command:"M",values:[.5*n,0]},{command:"L",values:[.5*n,l]},{command:"M",values:[0,.5*l]},{command:"L",values:[n,.5*l]}]},stroke:U(e)});break;case"x":r.push({shape:{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[n,l]},{command:"M",values:[n,0]},{command:"L",values:[0,l]}]},stroke:U(e)});break;case"kite":r.push({shape:{type:"path",path:[{command:"M",values:[0,.5*l]},{command:"L",values:[.5*n,0]},{command:"L",values:[n,.5*l]},{command:"L",values:[.5*n,l]},{command:"Z",values:[]}]},fill:D(e,0),stroke:S(e)})}break;case"object":switch(e.resource&&e.resource.primitive||y.b){case"cone":var i=C(D(e,0),D(e,-.6),a?M:t),s=Object(v.d)(t,a);r.push({shape:s[0],fill:i}),r.push({shape:s[1],fill:i});break;case"inverted-cone":var c=D(e,0),o=C(c,D(e,-.6),t),u=Object(v.i)(t);r.push({shape:u[0],fill:o}),r.push({shape:u[1],fill:c});break;case"cube":var p=Object(v.e)(t,a);r.push({shape:p[0],fill:D(e,0)}),r.push({shape:p[1],fill:D(e,-.3)}),r.push({shape:p[2],fill:D(e,-.5)});break;case"cylinder":var h=C(D(e,0),D(e,-.6),a?M:t),m=Object(v.f)(t,a);r.push({shape:m[0],fill:h}),r.push({shape:m[1],fill:h}),r.push({shape:m[2],fill:D(e,0)});break;case"diamond":var b=Object(v.g)(t);r.push({shape:b[0],fill:D(e,-.3)}),r.push({shape:b[1],fill:D(e,0)}),r.push({shape:b[2],fill:D(e,-.3)}),r.push({shape:b[3],fill:D(e,-.7)});break;case"sphere":var d=C(D(e,0),D(e,-.6));d.x1=0,d.y1=0,d.x2=.25*t,d.y2=.25*t,r.push({shape:{type:"circle",cx:0,cy:0,r:.5*t},fill:d});break;case"tetrahedron":var j=Object(v.k)(t);r.push({shape:j[0],fill:D(e,-.3)}),r.push({shape:j[1],fill:D(e,0)}),r.push({shape:j[2],fill:D(e,-.6)})}}return r}(i,w,L)))}}})),Object(h.g)(c).then((function(e){var a=[];return e.forEach((function(e){e.value?a.push(e.value):e.error&&L.warn("error while building swatchInfo!",e.error)})),Object(d.a)(a,[o,u],{node:t&&t.node,scale:!1,opacity:t&&t.opacity})}))}function R(){return(R=Object(n.a)(i.a.mark((function e(t,a){var n,l,s,c,o,u,h,b,f,y,j,O,x,w,M,L,I,U,$,C,E,R,W,F,Z,A,H,J,B,G,K,Q,V;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n="mesh-3d"===t.type,l=t.symbolLayers,s=T(a),c=a&&a.maxSize?Object(m.c)(a.maxSize):null,o=s||g,u=[],h=0,b=0,f=!1,y=0;case 3:if(!(y<l.length)){e.next=42;break}if(j=l.getItemAt(y),O=[],!n||"fill"===j.type){e.next=7;break}return e.abrupt("continue",39);case 7:x=v.m.fill[0],e.t0=j.type,e.next="fill"===e.t0?11:"line"===e.t0?22:"extrude"===e.t0?28:"water"===e.t0?33:38;break;case 11:if(w=S(j),M=Math.min(o,c||k),h=Math.max(h,M),b=Math.max(b,M),f=!0,L=D(j,0),I="pattern"in j&&j.pattern,U=P(j),e.t1=!n&&Object(p.k)(I)&&"style"===I.type&&"solid"!==I.style&&U,!e.t1){e.next=20;break}return e.next=19,N(I,U);case 19:L=e.sent;case 20:return O.push({shape:x,fill:L,stroke:w}),e.abrupt("break",38);case 22:if($=q(j,0),!Object(p.j)($)){e.next=25;break}return e.abrupt("break",38);case 25:return C={stroke:$,shape:x},h=Math.max(h,g),b=Math.max(b,g),O.push(C),e.abrupt("break",38);case 28:return E=Object(r.a)({join:"round",width:1},q(j,-.4)),R=D(j,0),W=D(j,-.2),F=Math.min(o,c||k),Z=Object(v.h)(F),E.width=1,O.push({shape:Z[0],fill:W,stroke:E}),O.push({shape:Z[1],fill:W,stroke:E}),O.push({shape:Z[2],fill:R,stroke:E}),A=g,H=.7*g+.5*F,h=Math.max(h,A),b=Math.max(b,H),e.abrupt("break",38);case 33:return J=P(j),B=z(J),G=z(J,2),K=z(J,3),Q=Object(v.l)(),f=!0,O.push({shape:Q[0],fill:B}),O.push({shape:Q[1],fill:G}),O.push({shape:Q[2],fill:K}),V=Math.min(o,c||k),h=Math.max(h,V),b=Math.max(b,V),e.abrupt("break",38);case 38:u.push(O);case 39:y++,e.next=3;break;case 42:return e.abrupt("return",Object(d.a)(u,[h,b],{node:a&&a.node,scale:f,opacity:a&&a.opacity}));case 43:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e,t){if(0===e.symbolLayers.length)return Promise.reject(new o.a("symbolPreview: renderPreviewHTML3D","No symbolLayers in the symbol."));switch(e.type){case"point-3d":return E(e,t);case"line-3d":return function(e,t){var a,n=e.symbolLayers,l=[],i=Object(j.h)(e),s=T(t),c=(t&&t.maxSize?Object(m.c)(t.maxSize):null)||x,o=0,u=0;return n.forEach((function(e,t){if(e&&("line"===e.type||"path"===e.type)){var n=[];switch(e.type){case"line":var i=q(e,0);if(Object(p.j)(i))break;var h=i&&i.width||0;0===t&&(a=h);var m=Math.min(s||h,c),b=0===t?m:s?m*(h/a):m,f=b>w/2?2*b:w;u=Math.max(u,b),o=Math.max(o,f),i.width=b,n.push({shape:{type:"path",path:[{command:"M",values:[0,.5*u]},{command:"L",values:[o,.5*u]}]},stroke:i});break;case"path":var y=Math.min(s||g,c),d=D(e,0),j=D(e,-.2),O=$(e,-.4),k=O?{color:O,width:1}:{};if("quad"===e.profile){var x=e.width,M=e.height,L=Object(v.j)(x&&M?x/M:1,0===M,0===x),S=Object(r.a)(Object(r.a)({},k),{},{join:"bevel"});n.push({shape:L[0],fill:j,stroke:S}),n.push({shape:L[1],fill:j,stroke:S}),n.push({shape:L[2],fill:d,stroke:S})}else n.push({shape:v.m.pathSymbol3DLayer[0],fill:j,stroke:k}),n.push({shape:v.m.pathSymbol3DLayer[1],fill:d,stroke:k});u=Math.max(u,y),o=u}l.push(n)}})),Promise.resolve(Object(d.a)(l,[o,u],{node:t&&t.node,scale:i,opacity:t&&t.opacity}))}(e,t);case"polygon-3d":case"mesh-3d":return function(e,t){return R.apply(this,arguments)}(e,t)}return Promise.reject(new o.a("symbolPreview: swatchInfo3D","symbol not supported."))}},293:function(e,t,a){"use strict";function r(e){return e=e||globalThis.location.hostname,o.some((function(t){var a;return null!=(null===(a=e)||void 0===a?void 0:a.match(t))}))}function n(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(l)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(i)||null!=t.match(c)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));var l=/^devext.arcgis.com$/,i=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,c=/^[\w-]*\.mapsqa.arcgis.com$/,o=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,l,i,/^jsapps.esri.com$/,s,c]},840:function(e,t,a){"use strict";a.r(t),a.d(t,"fetchSymbolFromStyle",(function(){return f})),a.d(t,"resolveWebStyleSymbol",(function(){return b}));var r=a(267),n=a(293),l=a(160),i=a(147),s=a(184),c=a(276),o=a(288),u=a(763),p=a(786),h=a(407),m=a(689);function b(e,t,a,r){return e.name?e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?function(e,t,a){var r=h.a.replace(/\{SymbolName\}/gi,e.name),n=Object(i.k)(t.portal)?t.portal:c.a.getDefault();return Object(h.d)(r,a).then((function(e){var t=Object(h.c)(e.data);return Object(u.a)(t,{portal:n,url:Object(s.M)(Object(s.I)(r)),origin:"portal-item"})}))}(e,t,r):Object(h.b)(e,t,r).then((function(n){return f(n,e.name,t,a,r)})):Promise.reject(new l.a("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function f(e,t,a,b,f){var y=e.data,v=a&&Object(i.k)(a.portal)?a.portal:c.a.getDefault(),d={portal:v,url:Object(s.M)(e.baseUrl),origin:"portal-item"},j=y.items.find((function(e){return e.name===t}));if(!j){var O="The symbol name '".concat(t,"' could not be found");return Promise.reject(new l.a("symbolstyleutils:symbol-name-not-found",O,{symbolName:t}))}var g=Object(o.c)(Object(h.e)(j,b),d),k=j.thumbnail&&j.thumbnail.href,x=j.thumbnail&&j.thumbnail.imageData;Object(n.b)()&&(g=Object(n.a)(g),k=Object(n.a)(k));var w={portal:v,url:Object(s.M)(Object(s.I)(g)),origin:"portal-item"};return Object(h.d)(g,f).then((function(n){var l="cimRef"===b?Object(h.c)(n.data):n.data,i=Object(u.a)(l,w);if(i&&Object(r.c)(i)){if(k){var s=Object(o.c)(k,d);i.thumbnail=new m.a({url:s})}else x&&(i.thumbnail=new m.a({url:"data:image/png;base64,".concat(x)}));e.styleUrl?i.styleOrigin=new p.a({portal:a.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(i.styleOrigin=new p.a({portal:a.portal,styleName:e.styleName,name:t}))}return i}))}}}]);