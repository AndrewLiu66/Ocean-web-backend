(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[65],{1211:function(t,e,n){"use strict";n.r(e),n.d(e,"destroyContext",(function(){return w})),n.d(e,"dracoDecompressPointCloudData",(function(){return y})),n.d(e,"filterObbsForModifications",(function(){return j})),n.d(e,"filterObbsForModificationsSync",(function(){return A})),n.d(e,"initialize",(function(){return L})),n.d(e,"interpretObbModificationResults",(function(){return S})),n.d(e,"process",(function(){return O})),n.d(e,"setLegacySchema",(function(){return p})),n.d(e,"setModifications",(function(){return _})),n.d(e,"setModificationsSync",(function(){return E})),n.d(e,"test",(function(){return B}));var r,i,o,c=n(135),s=n(492);(o=r||(r={}))[o.None=0]="None",o[o.Int16=1]="Int16",o[o.Int32=2]="Int32",function(t){t[t.Replace=0]="Replace",t[t.Outside=1]="Outside",t[t.Inside=2]="Inside",t[t.Finished=3]="Finished"}(i||(i={}));var u=n(323);function f(t){return Object(u.a)("esri/libs/i3s/".concat(t))}let a;var l,d,b,h,m,g;n(543);(g=l||(l={}))[g.Unmodified=0]="Unmodified",g[g.Culled=1]="Culled",g[g.NotChecked=2]="NotChecked",function(t){t[t.Unmodified=0]="Unmodified",t[t.PotentiallyModified=1]="PotentiallyModified",t[t.Culled=2]="Culled",t[t.Unknown=3]="Unknown",t[t.NotChecked=4]="NotChecked"}(d||(d={}));!function(t){t[t.Unknown=0]="Unknown",t[t.Uncached=1]="Uncached",t[t.Cached=2]="Cached"}(b||(b={})),function(t){t[t.None=0]="None",t[t.MaxScreenThreshold=1]="MaxScreenThreshold",t[t.ScreenSpaceRelative=2]="ScreenSpaceRelative",t[t.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",t[t.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(h||(h={})),function(t){t[t.Hole=0]="Hole",t[t.Leaf=1]="Leaf"}(m||(m={}));async function O(t){await L();const e=[t.geometryBuffer];return{result:v(t,e),transferList:e}}async function y(t){var e;await L();const n=[t.geometryBuffer],{geometryBuffer:r}=t,i=r.byteLength,o=M._malloc(i),c=new Uint8Array(M.HEAPU8.buffer,o,i);c.set(new Uint8Array(r));const u=M.dracoDecompressPointCloudData(o,c.byteLength);if(M._free(o),u.error.length>0)throw"i3s.wasm: ".concat(u.error);const f=(null===(e=u.featureIds)||void 0===e?void 0:e.length)>0?Object(s.m)(u.featureIds):null,a=Object(s.m)(u.positions);return f&&n.push(f.buffer),n.push(a.buffer),{result:{positions:a,featureIds:f},transferList:n}}async function j(t){await L(),A(t);const e={buffer:t.buffer};return{result:e,transferList:[e.buffer]}}async function _(t){await L(),E(t)}async function p(t){await L(),M.setLegacySchema(t.context,t.jsonSchema)}function w(t){T(t)}let P,M;function E(t){const e=t.modifications,n=M._malloc(8*e.length),r=new Float64Array(M.HEAPU8.buffer,n,e.length);for(let i=0;i<e.length;++i)r[i]=e[i];M.setModifications(t.context,n,e.length,t.isGeodetic),M._free(n)}function v(t,e){if(!M)return null;const{context:n,localOrigin:i,globalTrafo:o,mbs:u,obb:f,elevationOffset:a,geometryBuffer:l,geometryDescriptor:d,indexToVertexProjector:b,vertexToRenderProjector:h}=t,m=M._malloc(l.byteLength),g=M._malloc(33*Float64Array.BYTES_PER_ELEMENT),O=new Uint8Array(M.HEAPU8.buffer,m,l.byteLength);O.set(new Uint8Array(l));const y=new Float64Array(M.HEAPU8.buffer,g,33);I(y,i);let j=y.byteOffset+3*y.BYTES_PER_ELEMENT,_=new Float64Array(y.buffer,j);I(_,o),j+=16*y.BYTES_PER_ELEMENT,_=new Float64Array(y.buffer,j),I(_,u),j+=4*y.BYTES_PER_ELEMENT,Object(c.k)(f)&&(_=new Float64Array(y.buffer,j),I(_,f.center),j+=3*y.BYTES_PER_ELEMENT,_=new Float64Array(y.buffer,j),I(_,f.halfSize),j+=3*y.BYTES_PER_ELEMENT,_=new Float64Array(y.buffer,j),I(_,f.quaternion));const p=d,w={isDraco:!1,isLegacy:!1,color:t.layouts.some((t=>t.some((t=>"color"===t.name)))),normal:t.needNormals&&t.layouts.some((t=>t.some((t=>"normalCompressed"===t.name)))),uv0:t.layouts.some((t=>t.some((t=>"uv0"===t.name)))),uvRegion:t.layouts.some((t=>t.some((t=>"uvRegion"===t.name)))),featureIndex:p.featureIndex},P=M.process(n,!!t.obb,m,O.byteLength,p,w,g,a,b,h,t.normalReferenceFrame);if(M._free(g),M._free(m),P.error.length>0)throw"i3s.wasm: ".concat(P.error);if(P.discarded)return null;const E=P.componentOffsets.length>0?Object(s.m)(P.componentOffsets):null,v=P.featureIds.length>0?Object(s.m)(P.featureIds):null,S=Object(s.m)(P.interleavedVertedData).buffer,A=P.indicesType===r.Int16?Object(s.m)(new Uint16Array(P.indices.buffer,P.indices.byteOffset,P.indices.byteLength/2)):Object(s.m)(new Uint32Array(P.indices.buffer,P.indices.byteOffset,P.indices.byteLength/4)),T=Object(s.m)(P.positions),L=P.positionIndicesType===r.Int16?Object(s.m)(new Uint16Array(P.positionIndices.buffer,P.positionIndices.byteOffset,P.positionIndices.byteLength/2)):Object(s.m)(new Uint32Array(P.positionIndices.buffer,P.positionIndices.byteOffset,P.positionIndices.byteLength/4)),B={layout:t.layouts[0],interleavedVertexData:S,indices:A,hasColors:P.hasColors,hasModifications:P.hasModifications,positionData:{data:T,indices:L}};return v&&e.push(v.buffer),E&&e.push(E.buffer),e.push(S),e.push(A.buffer),e.push(T.buffer),e.push(L.buffer),{componentOffsets:E,featureIds:v,transformedGeometry:B,obb:P.obb}}function S(t){return 0===t?d.Unmodified:1===t?d.PotentiallyModified:2===t?d.Culled:d.Unknown}function A(t){const{context:e,buffer:n}=t,r=M._malloc(n.byteLength),i=n.byteLength/Float64Array.BYTES_PER_ELEMENT,o=new Float64Array(M.HEAPU8.buffer,r,i),c=new Float64Array(n);o.set(c),M.filterOBBs(e,r,i),c.set(o),M._free(r)}function T(t){M&&M.destroy(t)}function I(t,e){for(let n=0;n<e.length;++n)t[n]=e[n]}function L(){return M?Promise.resolve():(P||(P=(a||(a=new Promise((t=>n.e(142).then(n.bind(null,1324)).then((t=>t.i)).then((e=>{let{default:n}=e;const r=n({locateFile:f,onRuntimeInitialized:()=>t(r)});delete r.then})))).catch((t=>{throw t}))),a).then((t=>{M=t,P=null}))),P)}const B={transform:v,destroy:T}},302:function(t,e,n){"use strict";function r(){return[1,0,0,0,1,0,0,0,1]}function i(t,e){return new Float64Array(t,e,9)}n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},fromValues:function(t,e,n,r,i,o,c,s,u){return[t,e,n,r,i,o,c,s,u]},createView:i},Symbol.toStringTag,{value:"Module"}))},310:function(t,e,n){"use strict";function r(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function i(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}function o(t,e){return new Float64Array(t,e,16)}n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return r}));const c=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:i,fromValues:function(t,e,n,r,i,o,c,s,u,f,a,l,d,b,h,m){return[t,e,n,r,i,o,c,s,u,f,a,l,d,b,h,m]},createView:o,IDENTITY:c},Symbol.toStringTag,{value:"Module"}))},362:function(t,e,n){"use strict";function r(){return[0,0,0,1]}function i(t){return[t[0],t[1],t[2],t[3]]}function o(t,e){return new Float64Array(t,e,4)}n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return o}));const c=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:i,fromValues:function(t,e,n,r){return[t,e,n,r]},createView:o,IDENTITY:c},Symbol.toStringTag,{value:"Module"}))},407:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return b})),n.d(e,"c",(function(){return h}));var r=n(457),i=n(494),o=n(302),c=n(310),s=n(362),u=n(216),f=n(195),a=n(356);class l{constructor(t,e,n){this.itemByteSize=t,this.itemCreate=e,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(n/this.itemByteSize)}get(){0===this._itemsPtr&&Object(i.a)((()=>this._reset()));const t=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=t;){const t=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize);for(let e=0;e<this._itemsPerBuffer;++e)this._items.push(this.itemCreate(t,e*this.itemByteSize));this._buffers.push(t)}return this._items[this._itemsPtr++]}_reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return new l(16,u.c,t)}static createVec3f64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return new l(24,f.d,t)}static createVec4f64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return new l(32,a.a,t)}static createMat3f64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return new l(72,o.a,t)}static createMat4f64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return new l(128,c.b,t)}static createQuatf64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return new l(32,s.d,t)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}const d=4*r.a.KILOBYTES,b=(l.createVec2f64(),l.createVec3f64()),h=l.createVec4f64(),m=(l.createMat3f64(),l.createMat4f64());l.createQuatf64()},470:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(494);class i{constructor(t){this.allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&Object(r.a)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*o);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,o));t++)this._items.push(this.allocator())}}const o=1024},534:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return s}));n(142);var r=n(470),i=n(206),o=n(195);n(407);function c(t){return t?{origin:Object(o.c)(t.origin),direction:Object(o.c)(t.direction)}:{origin:Object(o.e)(),direction:Object(o.e)()}}function s(t,e){const n=l.get();return n.origin=t,n.direction=e,n}function u(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c();return f(t.origin,t.direction,e)}function f(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c();return Object(i.e)(n.origin,t),Object(i.e)(n.direction,e),n}function a(t,e,n){const r=Object(i.g)(t.direction,Object(i.d)(n,e,t.origin));return Object(i.c)(n,t.origin,Object(i.i)(n,t.direction,r)),n}const l=new r.a((function(){return{origin:null,direction:null}}))},543:function(t,e,n){"use strict";n.d(e,"a",(function(){return y})),n.d(e,"b",(function(){return O})),n.d(e,"c",(function(){return j})),n.d(e,"d",(function(){return p})),n.d(e,"e",(function(){return _})),n.d(e,"f",(function(){return M})),n.d(e,"g",(function(){return L}));n(136);var r,i,o=n(144),c=n(176),s=n(135),u=n(353),f=n(206),a=n(195),l=n(368),d=n(356);(i=r||(r={}))[i.X=0]="X",i[i.Y=1]="Y",i[i.Z=2]="Z";var b=n(534),h=n(575),m=n(407);const g=o.a.getLogger("esri.geometry.support.sphere");function O(){return Object(d.b)()}function y(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O();return Object(l.c)(e,t)}function j(t){return t[3]}function _(t){return t}function p(t,e,n,r){return Object(d.c)(t,e,n,r)}function w(t,e,n){if(Object(s.j)(e))return!1;const{origin:r,direction:i}=e,o=P;o[0]=r[0]-t[0],o[1]=r[1]-t[1],o[2]=r[2]-t[2];const c=i[0]*i[0]+i[1]*i[1]+i[2]*i[2],u=2*(i[0]*o[0]+i[1]*o[1]+i[2]*o[2]),f=u*u-4*c*(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-t[3]*t[3]);if(f<0)return!1;const a=Math.sqrt(f);let l=(-u-a)/(2*c);const d=(-u+a)/(2*c);return(l<0||d<l&&d>0)&&(l=d),!(l<0)&&(n&&(n[0]=r[0]+i[0]*l,n[1]=r[1]+i[1]*l,n[2]=r[2]+i[2]*l),!0)}const P=Object(a.e)();function M(t,e){return w(t,e,null)}function E(t,e,n){const r=m.b.get(),i=m.a.get();Object(f.h)(r,e.origin,e.direction);const o=j(t);Object(f.h)(n,r,e.origin),Object(f.i)(n,n,1/Object(f.n)(n)*o);const c=S(t,e.origin),s=Object(h.a)(e.origin,n);return Object(u.c)(i,s+c,r),Object(f.o)(n,n,i),n}function v(t,e,n){const r=Object(f.d)(m.b.get(),e,t),i=Object(f.i)(m.b.get(),r,t[3]/Object(f.n)(r));return Object(f.c)(n,i,t)}function S(t,e){const n=Object(f.d)(m.b.get(),e,t),r=Object(f.n)(n),i=j(t),o=i+Math.abs(i-r);return Object(c.a)(i/o)}const A=Object(a.e)();function T(t,e,n,i){const o=Object(f.d)(A,e,t);switch(n){case r.X:{const t=Object(c.c)(o,A)[2];return Object(f.u)(i,-Math.sin(t),Math.cos(t),0)}case r.Y:{const t=Object(c.c)(o,A),e=t[1],n=t[2],r=Math.sin(e);return Object(f.u)(i,-r*Math.cos(n),-r*Math.sin(n),Math.cos(e))}case r.Z:return Object(f.p)(i,o);default:return}}function I(t,e){const n=Object(f.d)(B,e,t);return Object(f.n)(n)-t[3]}function L(t,e){const n=Object(f.f)(t,e),r=j(t);return n<=r*r}const B=Object(a.e)(),R=O();Object.freeze(Object.defineProperty({__proto__:null,create:O,copy:y,fromCenterAndRadius:function(t,e){return Object(d.c)(t[0],t[1],t[2],e)},wrap:function(t){return t},clear:function(t){t[0]=t[1]=t[2]=t[3]=0},fromRadius:function(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t},getRadius:j,getCenter:_,fromValues:p,elevate:function(t,e,n){return t!==n&&Object(f.e)(n,t),n[3]=t[3]+e,n},setExtent:function(t,e,n){return g.error("sphere.setExtent is not yet supported"),t===n?n:y(t,n)},intersectRay:w,intersectsRay:M,intersectRayClosestSilhouette:function(t,e,n){if(w(t,e,n))return n;const r=E(t,e,m.b.get());return Object(f.c)(n,e.origin,Object(f.i)(m.b.get(),e.direction,Object(f.k)(e.origin,r)/Object(f.n)(e.direction))),n},closestPointOnSilhouette:E,closestPoint:function(t,e,n){return w(t,e,n)?n:(Object(b.a)(e,t,n),v(t,n,n))},projectPoint:v,distanceToSilhouette:function(t,e){const n=Object(f.d)(m.b.get(),e,t),r=Object(f.r)(n),i=t[3]*t[3];return Math.sqrt(Math.abs(r-i))},angleToSilhouette:S,axisAt:T,altitudeAt:I,setAltitudeAt:function(t,e,n,i){const o=I(t,e),c=T(t,e,r.Z,B),s=Object(f.i)(B,c,n-o);return Object(f.c)(i,e,s)},containsPoint:L,tmpSphere:R},Symbol.toStringTag,{value:"Module"}))},575:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return c}));var r=n(176),i=n(206),o=n(195);function c(t,e){return Object(i.g)(t,e)/Object(i.n)(t)}function s(t,e){const n=Object(i.g)(t,e)/(Object(i.n)(t)*Object(i.n)(e));return-Object(r.a)(n)}Object(o.e)(),Object(o.e)()}}]);