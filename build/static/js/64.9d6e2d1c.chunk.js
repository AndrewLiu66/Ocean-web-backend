(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[64],{1214:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return me}));var o=n(134),r=n(492),i=n(466);function a(){const e=new Float32Array(4);return e[3]=1,e}Object.freeze(Object.defineProperty({__proto__:null,create:a,clone:function(e){const t=new Float32Array(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},fromValues:function(e,t,n,o){const r=new Float32Array(4);return r[0]=e,r[1]=t,r[2]=n,r[3]=o,r},createView:function(e,t){return new Float32Array(e,t,4)}},Symbol.toStringTag,{value:"Module"}));var s=n(205),c=n(320),l=n(239),u=n(169),f=n(920),d=n(860),b=n(921),p=n(145),y=n(147),h=n(143);const O=!0,j=0,g=10,w=10,m=12,T=16;function v(e,t,n){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,n+j,g)),version:t.getUint16(n+w,O),checksum:t.getUint32(n+m,O)}}const A=0,I=4,S=8,C=16,M=24,U=32,E=40,R=48,V=56,F=64,N=72,P=80,x=84,D=88;function L(e){const t=new DataView(e,0);let n=0;const{identifier:o,version:r}=v(e,t,n);if(n+=T,"LEPCC     "!==o)throw new p.a("lepcc-decode-error","Bad identifier");if(r>1)throw new p.a("lepcc-decode-error","Unknown version");const i=(s=n,{sizeLo:(a=t).getUint32(s+A,O),sizeHi:a.getUint32(s+I,O),minX:a.getFloat64(s+S,O),minY:a.getFloat64(s+C,O),minZ:a.getFloat64(s+M,O),maxX:a.getFloat64(s+U,O),maxY:a.getFloat64(s+E,O),maxZ:a.getFloat64(s+R,O),errorX:a.getFloat64(s+V,O),errorY:a.getFloat64(s+F,O),errorZ:a.getFloat64(s+N,O),count:a.getUint32(s+P,O),reserved:a.getUint32(s+x,O)});var a,s;if(n+=D,i.sizeHi*2**32+i.sizeLo!==e.byteLength)throw new p.a("lepcc-decode-error","Bad size");const c=new Float64Array(3*i.count),l=[],u=[],f=[],d=[];if(n=z(e,n,l),n=z(e,n,u),n=z(e,n,f),n=z(e,n,d),n!==e.byteLength)throw new p.a("lepcc-decode-error","Bad length");let b=0,y=0;for(let p=0;p<l.length;p++){y+=l[p];let e=0;for(let t=0;t<u[p];t++){e+=f[b];const t=d[b];c[3*b]=Math.min(i.maxX,i.minX+2*i.errorX*e),c[3*b+1]=Math.min(i.maxY,i.minY+2*i.errorY*y),c[3*b+2]=Math.min(i.maxZ,i.minZ+2*i.errorZ*t),b++}}return{errorX:i.errorX,errorY:i.errorY,errorZ:i.errorZ,result:c}}function z(e,t,n){const o=[];t=B(e,t,o);const r=[];for(let i=0;i<o.length;i++){r.length=0,t=B(e,t,r);for(let e=0;e<r.length;e++)n.push(r[e]+o[i])}return t}function B(e,t,n){const o=new DataView(e,t),r=o.getUint8(0),i=31&r,a=!!(32&r),s=(192&r)>>6;let c=0;if(0===s)c=o.getUint32(1,O),t+=5;else if(1===s)c=o.getUint16(1,O),t+=3;else{if(2!==s)throw new p.a("lepcc-decode-error","Bad count type");c=o.getUint8(1),t+=2}if(a)throw new p.a("lepcc-decode-error","LUT not implemented");const l=Math.ceil(c*i/8),u=new Uint8Array(e,t,l);let f=0,d=0,b=0;const y=-1>>>32-i;for(let p=0;p<c;p++){for(;d<i;)f|=u[b]<<d,d+=8,b+=1;n[p]=f&y,f>>>=i,d-=i,d+i>32&&(f|=u[b-1]>>8-d)}return t+b}const k=0,_=4,q=8,X=12,Y=14,Z=15,G=16;function K(e){const t=new DataView(e,0);let n=0;const{identifier:o,version:r}=v(e,t,n);if(n+=T,"ClusterRGB"!==o)throw new p.a("lepcc-decode-error","Bad identifier");if(r>1)throw new p.a("lepcc-decode-error","Unknown version");const i=(s=n,{sizeLo:(a=t).getUint32(s+k,O),sizeHi:a.getUint32(s+_,O),count:a.getUint32(s+q,O),colorMapCount:a.getUint16(s+X,O),lookupMethod:a.getUint8(s+Y),compressionMethod:a.getUint8(s+Z)});var a,s;if(n+=G,i.sizeHi*2**32+i.sizeLo!==e.byteLength)throw new p.a("lepcc-decode-error","Bad size");if((2===i.lookupMethod||1===i.lookupMethod)&&0===i.compressionMethod){if(3*i.colorMapCount+i.count+n!==e.byteLength||i.colorMapCount>256)throw new p.a("lepcc-decode-error","Bad count");const t=new Uint8Array(e,n,3*i.colorMapCount),o=new Uint8Array(e,n+3*i.colorMapCount,i.count),r=new Uint8Array(3*i.count);for(let e=0;e<i.count;e++){const n=o[e];r[3*e]=t[3*n],r[3*e+1]=t[3*n+1],r[3*e+2]=t[3*n+2]}return r}if(0===i.lookupMethod&&0===i.compressionMethod){if(3*i.count+n!==e.byteLength||0!==i.colorMapCount)throw new p.a("lepcc-decode-error","Bad count");return new Uint8Array(e,n).slice()}if(i.lookupMethod<=2&&1===i.compressionMethod){if(n+3!==e.byteLength||1!==i.colorMapCount)throw new p.a("lepcc-decode-error","Bad count");const o=t.getUint8(n),r=t.getUint8(n+1),a=t.getUint8(n+2),s=new Uint8Array(3*i.count);for(let e=0;e<i.count;e++)s[3*e]=o,s[3*e+1]=r,s[3*e+2]=a;return s}throw new p.a("lepcc-decode-error","Bad method "+i.lookupMethod+","+i.compressionMethod)}const H=0,J=4,W=8,Q=12,$=14,ee=15,te=16;function ne(e){const t=new DataView(e,0);let n=0;const{identifier:o,version:r}=v(e,t,n);if(n+=T,"Intensity "!==o)throw new p.a("lepcc-decode-error","Bad identifier");if(r>1)throw new p.a("lepcc-decode-error","Unknown version");const i=(s=n,{sizeLo:(a=t).getUint32(s+H,O),sizeHi:a.getUint32(s+J,O),count:a.getUint32(s+W,O),scaleFactor:a.getUint16(s+Q,O),bitsPerPoint:a.getUint8(s+$),reserved:a.getUint8(s+ee)});var a,s;if(n+=te,i.sizeHi*2**32+i.sizeLo!==e.byteLength)throw new p.a("lepcc-decode-error","Bad size");const c=new Uint16Array(i.count);if(8===i.bitsPerPoint){if(i.count+n!==e.byteLength)throw new p.a("lepcc-decode-error","Bad size");const t=new Uint8Array(e,n,i.count);for(let e=0;e<i.count;e++)c[e]=t[e]*i.scaleFactor}else if(16===i.bitsPerPoint){if(2*i.count+n!==e.byteLength)throw new p.a("lepcc-decode-error","Bad size");const t=new Uint16Array(e,n,i.count);for(let e=0;e<i.count;e++)c[e]=t[e]*i.scaleFactor}else{const t=[];if(B(e,n,t)!==e.byteLength)throw new p.a("lepcc-decode-error","Bad size");for(let e=0;e<i.count;e++)c[e]=t[e]*i.scaleFactor}return c}var oe=n(309);const re=h.a.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function ie(e,t,n){let o="",r=0;for(;r<n;){const i=e[t+r];if(i<128)o+=String.fromCharCode(i),r++;else if(i>=192&&i<224){if(r+1>=n)throw new p.a("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const a=(31&i)<<6|63&e[t+r+1];o+=String.fromCharCode(a),r+=2}else if(i>=224&&i<240){if(r+2>=n)throw new p.a("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(15&i)<<12|(63&e[t+r+1])<<6|63&e[t+r+2];o+=String.fromCharCode(a),r+=3}else{if(!(i>=240&&i<248))throw new p.a("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(r+3>=n)throw new p.a("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(7&i)<<18|(63&e[t+r+1])<<12|(63&e[t+r+2])<<6|63&e[t+r+3];if(a>=65536){const e=55296+(a-65536>>10),t=56320+(1023&a);o+=String.fromCharCode(e,t)}else o+=String.fromCharCode(a);r+=4}}}return o}function ae(e,t){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let o=0;for(let r=0;r<t.length;r++){const i=t[r],a=i.valueType||i.type,s=de[a];n.fields[i.property]=s(e,o),o+=fe[a].BYTES_PER_ELEMENT}return n.byteCount=o,n}function se(e,t){return new(0,fe[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function ce(e,t,n){if(t!==e&&re.error("Invalid ".concat(n," buffer size\n expected: ").concat(e,", actual: ").concat(t,")")),t<e)throw new p.a("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}const le={position:oe.a.POSITION,normal:oe.a.NORMAL,color:oe.a.COLOR,uv0:oe.a.UV0,region:oe.a.UVREGION};function ue(e,t,n){if("lepcc-rgb"===e.encoding)return K(t);if("lepcc-intensity"===e.encoding)return ne(t);if(null!=e.encoding&&""!==e.encoding)throw new p.a("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(re.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(re.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const o=function(e,t,n){const o=null!=t.header?ae(e,t.header):{byteOffset:0,byteCount:0,fields:{count:n}},r={header:o,byteOffset:o.byteCount,byteCount:0,entries:Object.create(null)};let i=o.byteCount;for(let a=0;a<t.ordering.length;a++){const e=t.ordering[a],n=Object(y.a)(t[e]);if(n.count=o.fields.count,"String"===n.valueType){if(n.byteOffset=i,n.byteCount=o.fields[e+"ByteCount"],"UTF-8"!==n.encoding)throw new p.a("unsupported-encoding","Unsupported String encoding.",{encoding:n.encoding})}else{if(!be(n.valueType))throw new p.a("unsupported-value-type","Unsupported binary valueType",{valueType:n.valueType});{const e=pe(n.valueType);i+=i%e!=0?e-i%e:0,n.byteOffset=i,n.byteCount=e*n.valuesPerElement*n.count}}i+=n.byteCount,r.entries[e]=n}return r.byteCount=i-r.byteOffset,r}(t,e,n);ce(o.byteOffset+o.byteCount,t.byteLength,"attribute");const r=o.entries.attributeValues||o.entries.objectIds;if(r){if("String"===r.valueType){const e=o.entries.attributeByteCounts,n=se(t,e),i=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,r);return function(e,t,n){const o=[];let r,i,a=0;for(i=0;i<e;i+=1){if(r=t[i],r>0){if(o.push(ie(n,a,r-1)),0!==n[a+r-1])throw new p.a("string-array-error","Invalid string array: missing null termination.")}else o.push(null);a+=r}return o}(e.count,n,i)}return se(t,r)}throw new p.a("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const fe={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},de={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function be(e){return fe.hasOwnProperty(e)}function pe(e){return be(e)?fe[e].BYTES_PER_ELEMENT:0}function ye(e,t){if(null==e.encoding||""===e.encoding){const n=function(e,t){const n=ae(e,t&&t.header);let o=n.byteCount;const r={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},i=n.fields,a=null!=i.vertexCount?i.vertexCount:i.count;for(const l of t.ordering){if(!t.vertexAttributes[l])continue;const e={...t.vertexAttributes[l],byteOffset:o,count:a},n=le[l]?le[l]:"_"+l;r.vertexAttributes[n]=e,o+=pe(e.valueType)*e.valuesPerElement*a}const s=i.faceCount;if(t.faces&&s){r.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const n={...t.faces[e],byteOffset:o,count:s};r.faces[e]=n,o+=pe(n.valueType)*n.valuesPerElement*s}}const c=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&c){r.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const n={...t.featureAttributes[e],byteOffset:o,count:c};r.featureAttributes[e]=n,o+=("UInt64"===n.valueType?8:pe(n.valueType))*n.valuesPerElement*c}}return ce(o,e.byteLength,"geometry"),r.byteCount=o-r.byteOffset,r}(t,e);if(Object(o.j)(n.vertexAttributes.position))return;const r=se(t,n.vertexAttributes.position),i=n.header.fields,a=[i.offsetX,i.offsetY,i.offsetZ],s=[i.scaleX,i.scaleY,i.scaleZ],c=r.length/3,l=new Float64Array(3*c);for(let e=0;e<c;e++)l[3*e]=r[3*e]*s[0]+a[0],l[3*e+1]=r[3*e+1]*s[1]+a[1],l[3*e+2]=r[3*e+2]*s[2]+a[2];return l}if("lepcc-xyz"===e.encoding)return L(t).result}function he(e,t,n){return Object(o.k)(e)&&e.attributeInfo.useElevation?function(e,t){const n=new Float64Array(t);for(let o=0;o<t;o++)n[o]=e[3*o+2];return n}(t,n):Object(o.k)(e)?ue(e.attributeInfo.storageInfo,e.buffer,n):null}function Oe(e){return null==e||"none"===e?null:"low-four-bit"===e?e=>15&e:"high-four-bit"===e?e=>(240&e)>>4:"absolute-value"===e?e=>Math.abs(e):"modulo-ten"===e?e=>e%10:null}function je(e){let t=0;for(const n of e||[])t|=1<<n;return t}class ge{transform(e){const t=this._transform(e),n=[t.points.buffer,t.rgb.buffer];Object(o.k)(t.pointIdFilterMap)&&n.push(t.pointIdFilterMap.buffer);for(const o of t.attributes)"buffer"in o.values&&Object(r.c)(o.values.buffer)&&o.values.buffer!==t.rgb.buffer&&n.push(o.values.buffer);return Promise.resolve({result:t,transferList:n})}_transform(e){const t=ye(e.schema,e.geometryBuffer);let n=t.length/3,r=null;const i=[],a=he(e.primaryAttributeData,t,n);Object(o.k)(e.primaryAttributeData)&&a&&i.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:a});const s=he(e.modulationAttributeData,t,n);Object(o.k)(e.modulationAttributeData)&&s&&i.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:s});let c=function(e,t,n,o){const{rendererJSON:r,isRGBRenderer:i}=e;let a=null,s=null;if(t&&i)a=t;else if(t&&"pointCloudUniqueValueRenderer"===r.type){s=b.a.fromJSON(r);const e=s.colorUniqueValueInfos;a=new Uint8Array(3*o);const n=Oe(s.fieldTransformType);for(let r=0;r<o;r++){const o=(n?n(t[r]):t[r])+"";for(let t=0;t<e.length;t++)if(e[t].values.includes(o)){a[3*r]=e[t].color.r,a[3*r+1]=e[t].color.g,a[3*r+2]=e[t].color.b;break}}}else if(t&&"pointCloudStretchRenderer"===r.type){s=d.a.fromJSON(r);const e=s.stops;a=new Uint8Array(3*o);const n=Oe(s.fieldTransformType);for(let r=0;r<o;r++){const o=n?n(t[r]):t[r],i=e.length-1;if(o<e[0].value)a[3*r]=e[0].color.r,a[3*r+1]=e[0].color.g,a[3*r+2]=e[0].color.b;else if(o>=e[i].value)a[3*r]=e[i].color.r,a[3*r+1]=e[i].color.g,a[3*r+2]=e[i].color.b;else for(let t=1;t<e.length;t++)if(o<e[t].value){const n=(o-e[t-1].value)/(e[t].value-e[t-1].value);a[3*r]=e[t].color.r*n+e[t-1].color.r*(1-n),a[3*r+1]=e[t].color.g*n+e[t-1].color.g*(1-n),a[3*r+2]=e[t].color.b*n+e[t-1].color.b*(1-n);break}}}else if(t&&"pointCloudClassBreaksRenderer"===r.type){s=f.a.fromJSON(r);const e=s.colorClassBreakInfos;a=new Uint8Array(3*o);const n=Oe(s.fieldTransformType);for(let r=0;r<o;r++){const o=n?n(t[r]):t[r];for(let t=0;t<e.length;t++)if(o>=e[t].minValue&&o<=e[t].maxValue){a[3*r]=e[t].color.r,a[3*r+1]=e[t].color.g,a[3*r+2]=e[t].color.b;break}}}else{a=new Uint8Array(3*o);for(let e=0;e<a.length;e++)a[e]=255}if(n&&s&&s.colorModulation){const e=s.colorModulation.minValue,t=s.colorModulation.maxValue,r=.3;for(let i=0;i<o;i++){const o=n[i],s=o>=t?1:o<=e?r:r+(1-r)*(o-e)/(t-e);a[3*i]=s*a[3*i],a[3*i+1]=s*a[3*i+1],a[3*i+2]=s*a[3*i+2]}}return a}(e.rendererInfo,a,s,n);if(e.filterInfo&&e.filterInfo.length>0&&Object(o.k)(e.filterAttributesData)){const o=e.filterAttributesData.map((e=>{const o=he(e,t,n),r={attributeInfo:e.attributeInfo,values:o};return i.push(r),r}));r=new Uint32Array(n),n=function(e,t,n,o,r){const i=e.length/3;let a=0;for(let s=0;s<i;s++){let i=!0;for(let e=0;e<o.length&&i;e++){const{filterJSON:t}=o[e],n=r[e].values[s];switch(t.type){case"pointCloudValueFilter":{const e="exclude"===t.mode;t.values.includes(n)===e&&(i=!1);break}case"pointCloudBitfieldFilter":{const e=je(t.requiredSetBits),o=je(t.requiredClearBits);(n&e)===e&&0==(n&o)||(i=!1);break}case"pointCloudReturnFilter":{const e=15&n,o=n>>>4&15,r=o>1,a=1===e,s=e===o;let c=!1;for(const n of t.includedReturns)if("last"===n&&s||"firstOfMany"===n&&a&&r||"lastOfMany"===n&&s&&r||"single"===n&&!r){c=!0;break}c||(i=!1);break}}}i&&(n[a]=s,e[3*a]=e[3*s],e[3*a+1]=e[3*s+1],e[3*a+2]=e[3*s+2],t[3*a]=t[3*s],t[3*a+1]=t[3*s+1],t[3*a+2]=t[3*s+2],a++)}return a}(t,c,r,e.filterInfo,o)}for(const o of e.userAttributesData){const e=he(o,t,n);i.push({attributeInfo:o.attributeInfo,values:e})}3*n<c.length&&(c=new Uint8Array(c.buffer.slice(0,3*n))),this._applyElevationOffsetInPlace(t,n,e.elevationOffset);const l=this._transformCoordinates(t,n,e.obb,u.a.fromJSON(e.inSR),u.a.fromJSON(e.outSR));return{obb:e.obb,points:l,rgb:c,attributes:i,pointIdFilterMap:r}}_transformCoordinates(e,t,n,o,r){if(!Object(l.h)(e,o,0,e,r,0,t))throw Error("Can't reproject");const a=Object(c.b)(n.center[0],n.center[1],n.center[2]),u=Object(c.a)(),f=Object(c.a)();Object(i.a)(we,n.quaternion);const d=new Float32Array(3*t);for(let i=0;i<t;i++)u[0]=e[3*i]-a[0],u[1]=e[3*i+1]-a[1],u[2]=e[3*i+2]-a[2],Object(s.s)(f,u,we),n.halfSize[0]=Math.max(n.halfSize[0],Math.abs(f[0])),n.halfSize[1]=Math.max(n.halfSize[1],Math.abs(f[1])),n.halfSize[2]=Math.max(n.halfSize[2],Math.abs(f[2])),d[3*i]=u[0],d[3*i+1]=u[1],d[3*i+2]=u[2];return d}_applyElevationOffsetInPlace(e,t,n){if(0!==n)for(let o=0;o<t;o++)e[3*o+2]+=n}}const we=a();function me(){return new ge}},302:function(e,t,n){"use strict";function o(){return[1,0,0,0,1,0,0,0,1]}function r(e,t){return new Float64Array(e,t,9)}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));Object.freeze(Object.defineProperty({__proto__:null,create:o,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},fromValues:function(e,t,n,o,r,i,a,s,c){return[e,t,n,o,r,i,a,s,c]},createView:r},Symbol.toStringTag,{value:"Module"}))},309:function(e,t,n){"use strict";var o;n.d(t,"a",(function(){return o})),function(e){e.POSITION="position",e.NORMAL="normal",e.UV0="uv0",e.AUXPOS1="auxpos1",e.AUXPOS2="auxpos2",e.MAPPOS="mapPos",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.TANGENT="tangent",e.OFFSET="offset",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.NORMALCOMPRESSED="normalCompressed",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.MODELORIGINHI="modelOriginHi",e.MODELORIGINLO="modelOriginLo",e.MODEL="model",e.MODELNORMAL="modelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMALA="normalA",e.NORMALB="normalB",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.U8PADDING="u8padding",e.U16PADDING="u16padding",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.EXTRUDE="extrude"}(o||(o={}))},320:function(e,t,n){"use strict";function o(){return new Float32Array(3)}function r(e,t,n){const o=new Float32Array(3);return o[0]=e,o[1]=t,o[2]=n,o}function i(){return o()}function a(){return r(1,1,1)}function s(){return r(1,0,0)}function c(){return r(0,1,0)}function l(){return r(0,0,1)}n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));const u=i(),f=a(),d=s(),b=c(),p=l();Object.freeze(Object.defineProperty({__proto__:null,create:o,clone:function(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},fromValues:r,createView:function(e,t){return new Float32Array(e,t,3)},zeros:i,ones:a,unitX:s,unitY:c,unitZ:l,ZEROS:u,ONES:f,UNIT_X:d,UNIT_Y:b,UNIT_Z:p},Symbol.toStringTag,{value:"Module"}))},363:function(e,t,n){"use strict";function o(){return[0,0,0,1]}function r(e){return[e[0],e[1],e[2],e[3]]}function i(e,t){return new Float64Array(e,t,4)}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return i}));const a=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:o,clone:r,fromValues:function(e,t,n,o){return[e,t,n,o]},createView:i,IDENTITY:a},Symbol.toStringTag,{value:"Module"}))},466:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return M})),n.d(t,"d",(function(){return y})),n.d(t,"e",(function(){return f})),n.d(t,"f",(function(){return l}));var o=n(302),r=n(363),i=n(194),a=n(409),s=n(205),c=n(368);function l(e,t,n){n*=.5;const o=Math.sin(n);return e[0]=o*t[0],e[1]=o*t[1],e[2]=o*t[2],e[3]=Math.cos(n),e}function u(e,t){const n=2*Math.acos(t[3]),o=Math.sin(n/2);return o>a.a?(e[0]=t[0]/o,e[1]=t[1]/o,e[2]=t[2]/o):(e[0]=1,e[1]=0,e[2]=0),n}function f(e,t,n){const o=t[0],r=t[1],i=t[2],a=t[3],s=n[0],c=n[1],l=n[2],u=n[3];return e[0]=o*u+a*s+r*l-i*c,e[1]=r*u+a*c+i*s-o*l,e[2]=i*u+a*l+o*c-r*s,e[3]=a*u-o*s-r*c-i*l,e}function d(e,t,n,o){const r=t[0],i=t[1],s=t[2],c=t[3];let l,u,f,d,b,p=n[0],y=n[1],h=n[2],O=n[3];return u=r*p+i*y+s*h+c*O,u<0&&(u=-u,p=-p,y=-y,h=-h,O=-O),1-u>a.a?(l=Math.acos(u),f=Math.sin(l),d=Math.sin((1-o)*l)/f,b=Math.sin(o*l)/f):(d=1-o,b=o),e[0]=d*r+b*p,e[1]=d*i+b*y,e[2]=d*s+b*h,e[3]=d*c+b*O,e}function b(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function p(e,t){const n=t[0]+t[4]+t[8];let o;if(n>0)o=Math.sqrt(n+1),e[3]=.5*o,o=.5/o,e[0]=(t[5]-t[7])*o,e[1]=(t[6]-t[2])*o,e[2]=(t[1]-t[3])*o;else{let n=0;t[4]>t[0]&&(n=1),t[8]>t[3*n+n]&&(n=2);const r=(n+1)%3,i=(n+2)%3;o=Math.sqrt(t[3*n+n]-t[3*r+r]-t[3*i+i]+1),e[n]=.5*o,o=.5/o,e[3]=(t[3*r+i]-t[3*i+r])*o,e[r]=(t[3*r+n]+t[3*n+r])*o,e[i]=(t[3*i+n]+t[3*n+i])*o}return e}function y(e,t,n,o){const r=.5*Math.PI/180;t*=r,n*=r,o*=r;const i=Math.sin(t),a=Math.cos(t),s=Math.sin(n),c=Math.cos(n),l=Math.sin(o),u=Math.cos(o);return e[0]=i*c*u-a*s*l,e[1]=a*s*u+i*c*l,e[2]=a*c*l-i*s*u,e[3]=a*c*u+i*s*l,e}const h=c.c,O=c.k,j=c.a,g=f,w=c.b,m=c.d,T=c.i,v=c.e,A=v,I=c.f,S=I,C=c.j,M=c.g,U=c.h;const E=Object(i.e)(),R=Object(i.g)(1,0,0),V=Object(i.g)(0,1,0);const F=Object(r.b)(),N=Object(r.b)();const P=Object(o.b)();Object.freeze(Object.defineProperty({__proto__:null,identity:function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},setAxisAngle:l,getAxisAngle:u,multiply:f,rotateX:function(e,t,n){n*=.5;const o=t[0],r=t[1],i=t[2],a=t[3],s=Math.sin(n),c=Math.cos(n);return e[0]=o*c+a*s,e[1]=r*c+i*s,e[2]=i*c-r*s,e[3]=a*c-o*s,e},rotateY:function(e,t,n){n*=.5;const o=t[0],r=t[1],i=t[2],a=t[3],s=Math.sin(n),c=Math.cos(n);return e[0]=o*c-i*s,e[1]=r*c+a*s,e[2]=i*c+o*s,e[3]=a*c-r*s,e},rotateZ:function(e,t,n){n*=.5;const o=t[0],r=t[1],i=t[2],a=t[3],s=Math.sin(n),c=Math.cos(n);return e[0]=o*c+r*s,e[1]=r*c-o*s,e[2]=i*c+a*s,e[3]=a*c-i*s,e},calculateW:function(e,t){const n=t[0],o=t[1],r=t[2];return e[0]=n,e[1]=o,e[2]=r,e[3]=Math.sqrt(Math.abs(1-n*n-o*o-r*r)),e},slerp:d,random:function(e){const t=Object(a.b)(),n=Object(a.b)(),o=Object(a.b)(),r=Math.sqrt(1-t),i=Math.sqrt(t);return e[0]=r*Math.sin(2*Math.PI*n),e[1]=r*Math.cos(2*Math.PI*n),e[2]=i*Math.sin(2*Math.PI*o),e[3]=i*Math.cos(2*Math.PI*o),e},invert:function(e,t){const n=t[0],o=t[1],r=t[2],i=t[3],a=n*n+o*o+r*r+i*i,s=a?1/a:0;return e[0]=-n*s,e[1]=-o*s,e[2]=-r*s,e[3]=i*s,e},conjugate:b,fromMat3:p,fromEuler:y,str:function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"},copy:h,set:O,add:j,mul:g,scale:w,dot:m,lerp:T,length:v,len:A,squaredLength:I,sqrLen:S,normalize:C,exactEquals:M,equals:U,rotationTo:function(e,t,n){const o=Object(s.g)(t,n);return o<-.999999?(Object(s.h)(E,R,t),Object(s.w)(E)<1e-6&&Object(s.h)(E,V,t),Object(s.p)(E,E),l(e,E,Math.PI),e):o>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):(Object(s.h)(E,t,n),e[0]=E[0],e[1]=E[1],e[2]=E[2],e[3]=1+o,C(e,e))},sqlerp:function(e,t,n,o,r,i){return d(F,t,r,i),d(N,n,o,i),d(e,F,N,2*i*(1-i)),e},setAxes:function(e,t,n,o){const r=P;return r[0]=n[0],r[3]=n[1],r[6]=n[2],r[1]=o[0],r[4]=o[1],r[7]=o[2],r[2]=-t[0],r[5]=-t[1],r[8]=-t[2],C(e,p(e,r))}},Symbol.toStringTag,{value:"Module"}))},489:function(e,t,n){"use strict";n.d(t,"a",(function(){return A}));var o,r=n(136),i=n(186),a=n(150),s=n(147),c=n(139),l=(n(138),n(137));n(141),n(135);let u=o=class extends a.a{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new o({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};Object(r.a)([Object(c.b)({type:String,json:{write:!0}})],u.prototype,"field",void 0),Object(r.a)([Object(c.b)({type:Number,nonNullable:!0,json:{write:!0}})],u.prototype,"minValue",void 0),Object(r.a)([Object(c.b)({type:Number,nonNullable:!0,json:{write:!0}})],u.prototype,"maxValue",void 0),u=o=Object(r.a)([Object(l.a)("esri.renderers.support.pointCloud.ColorModulation")],u);const f=u,d=new i.a({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let b=class extends a.a{};Object(r.a)([Object(c.b)({type:d.apiValues,readOnly:!0,nonNullable:!0,json:{type:d.jsonValues,read:!1,write:d.write}})],b.prototype,"type",void 0),b=Object(r.a)([Object(l.a)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],b);const p=b;var y,h=n(182);let O=y=class extends p{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new y({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};Object(r.a)([Object(h.a)({pointCloudFixedSizeAlgorithm:"fixed-size"})],O.prototype,"type",void 0),Object(r.a)([Object(c.b)({type:Number,nonNullable:!0,json:{write:!0}})],O.prototype,"size",void 0),Object(r.a)([Object(c.b)({type:Boolean,json:{write:!0}})],O.prototype,"useRealWorldSymbolSizes",void 0),O=y=Object(r.a)([Object(l.a)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],O);const j=O;var g;let w=g=class extends p{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new g({scaleFactor:this.scaleFactor})}};Object(r.a)([Object(h.a)({pointCloudSplatAlgorithm:"splat"})],w.prototype,"type",void 0),Object(r.a)([Object(c.b)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],w.prototype,"scaleFactor",void 0),w=g=Object(r.a)([Object(l.a)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],w);const m={key:"type",base:p,typeMap:{"fixed-size":j,splat:w}},T=Object(i.b)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let v=class extends a.a{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:Object(s.a)(this.pointSizeAlgorithm),colorModulation:Object(s.a)(this.colorModulation),pointsPerInch:Object(s.a)(this.pointsPerInch)}}};Object(r.a)([Object(c.b)({type:T.apiValues,readOnly:!0,nonNullable:!0,json:{type:T.jsonValues,read:!1,write:T.write}})],v.prototype,"type",void 0),Object(r.a)([Object(c.b)({types:m,json:{write:!0}})],v.prototype,"pointSizeAlgorithm",void 0),Object(r.a)([Object(c.b)({type:f,json:{write:!0}})],v.prototype,"colorModulation",void 0),Object(r.a)([Object(c.b)({json:{write:!0},nonNullable:!0,type:Number})],v.prototype,"pointsPerInch",void 0),v=Object(r.a)([Object(l.a)("esri.renderers.PointCloudRenderer")],v),(v||(v={})).fieldTransformTypeKebabDict=new i.a({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const A=v},860:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var o,r=n(136),i=n(147),a=n(139),s=(n(138),n(182)),c=n(137),l=n(489),u=n(459),f=n(721);let d=o=class extends l.a{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new o({...this.cloneProperties(),field:Object(i.a)(this.field),fieldTransformType:Object(i.a)(this.fieldTransformType),stops:Object(i.a)(this.stops),legendOptions:Object(i.a)(this.legendOptions)})}};Object(r.a)([Object(s.a)({pointCloudStretchRenderer:"point-cloud-stretch"})],d.prototype,"type",void 0),Object(r.a)([Object(a.b)({json:{write:!0},type:String})],d.prototype,"field",void 0),Object(r.a)([Object(a.b)({type:u.a,json:{write:!0}})],d.prototype,"legendOptions",void 0),Object(r.a)([Object(a.b)({type:l.a.fieldTransformTypeKebabDict.apiValues,json:{type:l.a.fieldTransformTypeKebabDict.jsonValues,read:l.a.fieldTransformTypeKebabDict.read,write:l.a.fieldTransformTypeKebabDict.write}})],d.prototype,"fieldTransformType",void 0),Object(r.a)([Object(a.b)({type:[f.a],json:{write:!0}})],d.prototype,"stops",void 0),d=o=Object(r.a)([Object(c.a)("esri.renderers.PointCloudStretchRenderer")],d);const b=d},920:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var o,r=n(136),i=n(147),a=n(139),s=n(138),c=n(182),l=n(137),u=n(489),f=n(459),d=n(179),b=n(150);let p=o=class extends b.a{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new o({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:Object(i.a)(this.color)})}};Object(r.a)([Object(a.b)({type:String,json:{write:!0}})],p.prototype,"description",void 0),Object(r.a)([Object(a.b)({type:String,json:{write:!0}})],p.prototype,"label",void 0),Object(r.a)([Object(a.b)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],p.prototype,"minValue",void 0),Object(r.a)([Object(a.b)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],p.prototype,"maxValue",void 0),Object(r.a)([Object(a.b)({type:d.a,json:{type:[s.a],write:!0}})],p.prototype,"color",void 0),p=o=Object(r.a)([Object(l.a)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],p);const y=p;var h;let O=h=class extends u.a{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new h({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:Object(i.a)(this.colorClassBreakInfos),legendOptions:Object(i.a)(this.legendOptions)})}};Object(r.a)([Object(c.a)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],O.prototype,"type",void 0),Object(r.a)([Object(a.b)({json:{write:!0},type:String})],O.prototype,"field",void 0),Object(r.a)([Object(a.b)({type:f.a,json:{write:!0}})],O.prototype,"legendOptions",void 0),Object(r.a)([Object(a.b)({type:u.a.fieldTransformTypeKebabDict.apiValues,json:{type:u.a.fieldTransformTypeKebabDict.jsonValues,read:u.a.fieldTransformTypeKebabDict.read,write:u.a.fieldTransformTypeKebabDict.write}})],O.prototype,"fieldTransformType",void 0),Object(r.a)([Object(a.b)({type:[y],json:{write:!0}})],O.prototype,"colorClassBreakInfos",void 0),O=h=Object(r.a)([Object(l.a)("esri.renderers.PointCloudClassBreaksRenderer")],O);const j=O},921:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var o,r=n(136),i=n(147),a=n(139),s=n(138),c=n(182),l=n(137),u=n(489),f=n(459),d=n(179),b=n(150);let p=o=class extends b.a{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new o({description:this.description,label:this.label,values:Object(i.a)(this.values),color:Object(i.a)(this.color)})}};Object(r.a)([Object(a.b)({type:String,json:{write:!0}})],p.prototype,"description",void 0),Object(r.a)([Object(a.b)({type:String,json:{write:!0}})],p.prototype,"label",void 0),Object(r.a)([Object(a.b)({type:[String],json:{write:!0}})],p.prototype,"values",void 0),Object(r.a)([Object(a.b)({type:d.a,json:{type:[s.a],write:!0}})],p.prototype,"color",void 0),p=o=Object(r.a)([Object(l.a)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],p);const y=p;var h;let O=h=class extends u.a{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new h({...this.cloneProperties(),field:Object(i.a)(this.field),fieldTransformType:Object(i.a)(this.fieldTransformType),colorUniqueValueInfos:Object(i.a)(this.colorUniqueValueInfos),legendOptions:Object(i.a)(this.legendOptions)})}};Object(r.a)([Object(c.a)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],O.prototype,"type",void 0),Object(r.a)([Object(a.b)({json:{write:!0},type:String})],O.prototype,"field",void 0),Object(r.a)([Object(a.b)({type:u.a.fieldTransformTypeKebabDict.apiValues,json:{type:u.a.fieldTransformTypeKebabDict.jsonValues,read:u.a.fieldTransformTypeKebabDict.read,write:u.a.fieldTransformTypeKebabDict.write}})],O.prototype,"fieldTransformType",void 0),Object(r.a)([Object(a.b)({type:[y],json:{write:!0}})],O.prototype,"colorUniqueValueInfos",void 0),Object(r.a)([Object(a.b)({type:f.a,json:{write:!0}})],O.prototype,"legendOptions",void 0),O=h=Object(r.a)([Object(l.a)("esri.renderers.PointCloudUniqueValueRenderer")],O);const j=O}}]);