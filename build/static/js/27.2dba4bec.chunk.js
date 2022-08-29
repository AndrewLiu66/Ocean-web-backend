(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[27],{1061:function(t,e,n){"use strict";n.r(e),n.d(e,"EdgeProcessingWorker",(function(){return q})),n.d(e,"default",(function(){return Rt})),n.d(e,"extract",(function(){return J})),n.d(e,"extractComponentsEdgeLocationsLayout",(function(){return At})),n.d(e,"extractEdgeLocationsLayout",(function(){return Tt}));var E=n(856);function r(t,e,n){const E=e/3,r=new Uint32Array(n+1),_=new Uint32Array(n+1),i=(t,e)=>{t<e?r[t+1]++:_[e+1]++};for(let I=0;I<E;I++){const e=t[3*I],n=t[3*I+1],E=t[3*I+2];i(e,n),i(n,E),i(E,e)}let T=0,A=0;for(let I=0;I<n;I++){const t=r[I+1],e=_[I+1];r[I+1]=T,_[I+1]=A,T+=t,A+=e}const R=new Uint32Array(6*E),o=r[n],s=(t,e,n)=>{if(t<e){const E=r[t+1]++;R[2*E]=e,R[2*E+1]=n}else{const E=_[e+1]++;R[2*o+2*E]=t,R[2*o+2*E+1]=n}};for(let I=0;I<E;I++){const e=t[3*I],n=t[3*I+1],E=t[3*I+2];s(e,n,I),s(n,E,I),s(E,e,I)}const N=(t,e)=>{const n=2*t,E=e-t;for(let r=1;r<E;r++){const t=R[n+2*r],e=R[n+2*r+1];let E=r-1;for(;E>=0&&R[n+2*E]>t;E--)R[n+2*E+2]=R[n+2*E],R[n+2*E+3]=R[n+2*E+1];R[n+2*E+2]=t,R[n+2*E+3]=e}};for(let I=0;I<n;I++)N(r[I],r[I+1]),N(o+_[I],o+_[I+1]);const c=new Int32Array(3*E),u=(e,n)=>e===t[3*n]?0:e===t[3*n+1]?1:e===t[3*n+2]?2:-1,O=(t,e)=>{const n=u(t,e);c[3*e+n]=-1},a=(t,e,n,E)=>{const r=u(t,e);c[3*e+r]=E;const _=u(n,E);c[3*E+_]=e};for(let I=0;I<n;I++){let t=r[I];const e=r[I+1];let n=_[I];const E=_[I+1];for(;t<e&&n<E;){const e=R[2*t],E=R[2*o+2*n];e===E?(a(I,R[2*t+1],E,R[2*o+2*n+1]),t++,n++):e<E?(O(I,R[2*t+1]),t++):(O(E,R[2*o+2*n+1]),n++)}for(;t<e;)O(I,R[2*t+1]),t++;for(;n<E;)O(R[2*o+2*n],R[2*o+2*n+1]),n++}return c}var _=n(619),i=n(414);function T(t,e){return e.push(t.buffer),{buffer:t.buffer,layout:A(t.layout)}}function A(t){const e=new Array;return t.fields.forEach(((t,n)=>{const E={...t,constructor:o(t.constructor)};e.push([n,E])})),{stride:t.stride,fields:e,fieldNames:t.fieldNames}}const R=[i.a,i.m,i.u,i.C,i.f,i.h,i.b,i.n,i.v,i.D,i.g,i.i,i.l,i.t,i.B,i.J,i.j,i.r,i.z,i.H,i.k,i.s,i.A,i.I,i.e,i.q,i.y,i.G,i.c,i.o,i.w,i.E,i.d,i.p,i.x,i.F];function o(t){return"".concat(t.ElementType,"_").concat(t.ElementCount)}const s=new Map;R.forEach((t=>s.set(o(t),t)));var N=n(309),c=n(141),u=n(200);function O(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const n=t.stride;return t.fieldNames.filter((e=>{const n=t.fields.get(e).optional;return!(n&&n.glPadding)})).map((E=>{const r=t.fields.get(E),_=r.constructor.ElementCount,i=a(r.constructor.ElementType),T=r.offset,A=!(!r.optional||!r.optional.glNormalized);return new u.a(E,_,i,T,n,A,e)}))}function a(t){const e=I[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}const I={u8:c.k.UNSIGNED_BYTE,u16:c.k.UNSIGNED_SHORT,u32:c.k.UNSIGNED_INT,i8:c.k.BYTE,i16:c.k.SHORT,i32:c.k.INT,f32:c.k.FLOAT},S=Object(_.a)().vec3f(N.a.POSITION).u16(N.a.COMPONENTINDEX).u16(N.a.U16PADDING),f=(O(Object(_.a)().vec2u8(N.a.SIDENESS)),Object(_.a)().vec3f(N.a.POSITION0).vec3f(N.a.POSITION1).u16(N.a.COMPONENTINDEX).u8(N.a.VARIANTOFFSET,{glNormalized:!0}).u8(N.a.VARIANTSTROKE).u8(N.a.VARIANTEXTENSION,{glNormalized:!0}).u8(N.a.U8PADDING,{glPadding:!0}).u16(N.a.U16PADDING,{glPadding:!0})),C=f.clone().vec3f(N.a.NORMAL),l=f.clone().vec3f(N.a.NORMALA).vec3f(N.a.NORMALB);new Map([[N.a.POSITION0,0],[N.a.POSITION1,1],[N.a.COMPONENTINDEX,2],[N.a.VARIANTOFFSET,3],[N.a.VARIANTSTROKE,4],[N.a.VARIANTEXTENSION,5],[N.a.NORMAL,6],[N.a.NORMALA,6],[N.a.NORMALB,7],[N.a.SIDENESS,8]]);var L=n(229),D=n(206),d=n(195);class U{updateSettings(t){this.settings=t,this.edgeHashFunction=t.reducedPrecision?B:G}write(t,e,n){const E=this.edgeHashFunction(n);m.seed=E;const r=m.getIntRange(0,255),_=m.getIntRange(0,this.settings.variants-1),i=m.getFloat(),T=255*(.5*function(t,e){const n=t<0?-1:1;return Math.abs(t)**e*n}(-(1-Math.min(i/.7,1))+Math.max(0,i-.7)/(1-.7),1.2)+.5);t.position0.setVec(e,n.position0),t.position1.setVec(e,n.position1),t.componentIndex.set(e,n.componentIndex),t.variantOffset.set(e,r),t.variantStroke.set(e,_),t.variantExtension.set(e,T)}trim(t,e){return t.slice(0,e)}}const M=new Float32Array(6),P=new Uint32Array(M.buffer),F=new Uint32Array(1);function G(t){const e=M;e[0]=t.position0[0],e[1]=t.position0[1],e[2]=t.position0[2],e[3]=t.position1[0],e[4]=t.position1[1],e[5]=t.position1[2],F[0]=5381;for(let n=0;n<P.length;n++)F[0]=31*F[0]+P[n];return F[0]}function B(t){const e=M;e[0]=h(t.position0[0]),e[1]=h(t.position0[1]),e[2]=h(t.position0[2]),e[3]=h(t.position1[0]),e[4]=h(t.position1[1]),e[5]=h(t.position1[2]),F[0]=5381;for(let n=0;n<P.length;n++)F[0]=31*F[0]+P[n];return F[0]}function h(t){return Math.round(1e4*t)/1e4}class p{constructor(){this.commonWriter=new U}updateSettings(t){this.commonWriter.updateSettings(t)}allocate(t){return C.createBuffer(t)}write(t,e,n){this.commonWriter.write(t,e,n),Object(D.c)(H,n.faceNormal0,n.faceNormal1),Object(D.p)(H,H),t.normal.setVec(e,H)}trim(t,e){return this.commonWriter.trim(t,e)}}p.Layout=C,p.glLayout=O(C,1);class g{constructor(){this.commonWriter=new U}updateSettings(t){this.commonWriter.updateSettings(t)}allocate(t){return l.createBuffer(t)}write(t,e,n){this.commonWriter.write(t,e,n),t.normalA.setVec(e,n.faceNormal0),t.normalB.setVec(e,n.faceNormal1)}trim(t,e){return this.commonWriter.trim(t,e)}}g.Layout=l,g.glLayout=O(l,1);const H=Object(d.e)(),m=new L.a;var b=n(142),V=n(176),v=n(492);const w=-1;var y,X;function Y(t,e,n){let E=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Q;const r=t.vertices.position,_=t.vertices.componentIndex,i=Object(V.f)(E.anglePlanar),T=Object(V.f)(E.angleSignificantEdge),A=Math.cos(T),R=Math.cos(i),o=Z.edge,s=o.position0,N=o.position1,c=o.faceNormal0,u=o.faceNormal1,O=K(t),a=k(t),I=a.length/4,S=e.allocate(I);let f=0;const C=I,l=n.allocate(C);let L=0,d=0,U=0;const M=Object(b.h)(0,I),P=new Float32Array(I);Object(v.b)(P,((t,e,n)=>{r.getVec(a[4*e+0],s),r.getVec(a[4*e+1],N),n[e]=Object(D.k)(s,N)})),M.sort(((t,e)=>P[e]-P[t]));const F=new Array,G=new Array;for(let p=0;p<I;p++){const t=M[p],E=P[t],T=a[4*t+0],I=a[4*t+1],C=a[4*t+2],B=a[4*t+3],h=B===w;if(r.getVec(T,s),r.getVec(I,N),h)Object(D.u)(c,O[3*C+0],O[3*C+1],O[3*C+2]),Object(D.e)(u,c),o.componentIndex=_.get(T),o.cosAngle=Object(D.g)(c,u);else{if(Object(D.u)(c,O[3*C+0],O[3*C+1],O[3*C+2]),Object(D.u)(u,O[3*B+0],O[3*B+1],O[3*B+2]),o.componentIndex=_.get(T),o.cosAngle=Object(D.g)(c,u),x(o,R))continue;o.cosAngle<-.9999&&Object(D.e)(u,c)}d+=E,U++,h||j(o,A)?(e.write(S,f++,o),F.push(E)):W(o,i)&&(n.write(l,L++,o),G.push(E))}const B=new Float32Array(F.reverse()),h=new Float32Array(G.reverse());return{regular:{instancesData:e.trim(S,f),lodInfo:{lengths:B}},silhouette:{instancesData:n.trim(l,L),lodInfo:{lengths:h}},averageEdgeLength:d/U}}function j(t,e){return t.cosAngle<e}function x(t,e){return t.cosAngle>e}function W(t,e){const n=Object(V.a)(t.cosAngle),E=Z.fwd,r=Z.ortho;return Object(D.t)(E,t.position1,t.position0),n*(Object(D.g)(Object(D.h)(r,t.faceNormal0,t.faceNormal1),E)>0?-1:1)>e}function k(t){const e=t.faces.length/3,n=t.faces,E=t.neighbors;let r=0;for(let T=0;T<e;T++){const t=E[3*T+0],e=E[3*T+1],_=E[3*T+2],i=n[3*T+0],A=n[3*T+1],R=n[3*T+2];r+=t===w||i<A?1:0,r+=e===w||A<R?1:0,r+=_===w||R<i?1:0}const _=new Int32Array(4*r);let i=0;for(let T=0;T<e;T++){const t=E[3*T+0],e=E[3*T+1],r=E[3*T+2],A=n[3*T+0],R=n[3*T+1],o=n[3*T+2];(t===w||A<R)&&(_[i++]=A,_[i++]=R,_[i++]=T,_[i++]=t),(e===w||R<o)&&(_[i++]=R,_[i++]=o,_[i++]=T,_[i++]=e),(r===w||o<A)&&(_[i++]=o,_[i++]=A,_[i++]=T,_[i++]=r)}return _}function K(t){const e=t.faces.length/3,n=t.vertices.position,E=t.faces,r=z.v0,_=z.v1,i=z.v2,T=new Float32Array(3*e);for(let A=0;A<e;A++){const t=E[3*A+0],e=E[3*A+1],R=E[3*A+2];n.getVec(t,r),n.getVec(e,_),n.getVec(R,i),Object(D.d)(_,_,r),Object(D.d)(i,i,r),Object(D.h)(r,_,i),Object(D.p)(r,r),T[3*A+0]=r[0],T[3*A+1]=r[1],T[3*A+2]=r[2]}return T}(X=y||(y={}))[X.SOLID=0]="SOLID",X[X.SKETCH=1]="SKETCH";const Z={edge:{position0:Object(d.e)(),position1:Object(d.e)(),faceNormal0:Object(d.e)(),faceNormal1:Object(d.e)(),componentIndex:0,cosAngle:0},ortho:Object(d.e)(),fwd:Object(d.e)()},z={v0:Object(d.e)(),v1:Object(d.e)(),v2:Object(d.e)()},Q={anglePlanar:4,angleSignificantEdge:35};class q{async extract(t){const e=$(t),n=J(e),E=[e.data.buffer];return{result:tt(n,E),transferList:E}}async extractComponentsEdgeLocations(t){const e=$(t),n=[];return{result:T(Y(et(e.data,e.skipDeduplicate,e.indices,e.indicesLength),_t,it).regular.instancesData,n),transferList:n}}async extractEdgeLocations(t){const e=$(t),n=[];return{result:T(Y(et(e.data,e.skipDeduplicate,e.indices,e.indicesLength),rt,it).regular.instancesData,n),transferList:n}}}function J(t){const e=et(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return nt.updateSettings(t.writerSettings),Et.updateSettings(t.writerSettings),Y(e,nt,Et)}function $(t){return{data:S.createView(t.dataBuffer),indices:"Uint32Array"===t.indicesType?new Uint32Array(t.indicesBuffer):"Uint16Array"===t.indicesType?new Uint16Array(t.indicesBuffer):void 0,indicesLength:t.indicesLength,writerSettings:t.writerSettings,skipDeduplicate:t.skipDeduplicate}}function tt(t,e){return e.push(t.regular.lodInfo.lengths.buffer),e.push(t.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:T(t.regular.instancesData,e),lodInfo:{lengths:t.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:T(t.silhouette.instancesData,e),lodInfo:{lengths:t.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:t.averageEdgeLength}}function et(t,e,n,_){if(e)return{faces:n,facesLength:_,neighbors:r(n,_,t.count),vertices:t};const i=Object(E.a)(t.buffer,t.stride/4,{originalIndices:n,originalIndicesLength:_}),T=r(i.indices,_,i.uniqueCount);return{faces:i.indices,facesLength:i.indices.length,neighbors:T,vertices:S.createView(i.buffer)}}const nt=new p,Et=new g;const rt=new class{allocate(t){return Tt.createBuffer(t)}trim(t,e){return t.slice(0,e)}write(t,e,n){t.position0.setVec(e,n.position0),t.position1.setVec(e,n.position1)}},_t=new class{allocate(t){return At.createBuffer(t)}trim(t,e){return t.slice(0,e)}write(t,e,n){t.position0.setVec(e,n.position0),t.position1.setVec(e,n.position1),t.componentIndex.set(e,n.componentIndex)}},it={allocate:()=>null,write:()=>{},trim:()=>null},Tt=Object(_.a)().vec3f(N.a.POSITION0).vec3f(N.a.POSITION1),At=Object(_.a)().vec3f(N.a.POSITION0).vec3f(N.a.POSITION1).u16(N.a.COMPONENTINDEX).u16(N.a.U16PADDING,{glPadding:!0});function Rt(){return new q}},141:function(t,e,n){"use strict";var E,r,_,i,T,A,R,o,s,N,c,u,O,a,I,S,f,C,l,L,D,d;n.d(e,"a",(function(){return U})),n.d(e,"b",(function(){return _})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return T})),n.d(e,"e",(function(){return E})),n.d(e,"f",(function(){return g})),n.d(e,"g",(function(){return P})),n.d(e,"h",(function(){return s})),n.d(e,"i",(function(){return G})),n.d(e,"j",(function(){return R})),n.d(e,"k",(function(){return o})),n.d(e,"l",(function(){return F})),n.d(e,"m",(function(){return d})),n.d(e,"n",(function(){return A})),n.d(e,"o",(function(){return L})),n.d(e,"p",(function(){return a})),n.d(e,"q",(function(){return S})),n.d(e,"r",(function(){return r})),n.d(e,"s",(function(){return f})),n.d(e,"t",(function(){return M})),n.d(e,"u",(function(){return l})),n.d(e,"v",(function(){return I})),n.d(e,"w",(function(){return N})),n.d(e,"x",(function(){return H})),n.d(e,"y",(function(){return D})),n.d(e,"z",(function(){return c})),n.d(e,"A",(function(){return O})),n.d(e,"B",(function(){return u})),n.d(e,"C",(function(){return B})),n.d(e,"D",(function(){return C})),function(t){t[t.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",t[t.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",t[t.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(E||(E={})),function(t){t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(r||(r={})),function(t){t[t.ZERO=0]="ZERO",t[t.ONE=1]="ONE",t[t.SRC_COLOR=768]="SRC_COLOR",t[t.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",t[t.SRC_ALPHA=770]="SRC_ALPHA",t[t.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",t[t.DST_ALPHA=772]="DST_ALPHA",t[t.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",t[t.DST_COLOR=774]="DST_COLOR",t[t.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",t[t.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",t[t.CONSTANT_COLOR=32769]="CONSTANT_COLOR",t[t.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",t[t.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",t[t.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(_||(_={})),function(t){t[t.ADD=32774]="ADD",t[t.SUBTRACT=32778]="SUBTRACT",t[t.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(i||(i={})),function(t){t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",t[t.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",t[t.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",t[t.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",t[t.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",t[t.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(T||(T={})),function(t){t[t.FRONT=1028]="FRONT",t[t.BACK=1029]="BACK",t[t.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(A||(A={})),function(t){t[t.CW=2304]="CW",t[t.CCW=2305]="CCW"}(R||(R={})),function(t){t[t.BYTE=5120]="BYTE",t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.SHORT=5122]="SHORT",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.INT=5124]="INT",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.FLOAT=5126]="FLOAT"}(o||(o={})),function(t){t[t.NEVER=512]="NEVER",t[t.LESS=513]="LESS",t[t.EQUAL=514]="EQUAL",t[t.LEQUAL=515]="LEQUAL",t[t.GREATER=516]="GREATER",t[t.NOTEQUAL=517]="NOTEQUAL",t[t.GEQUAL=518]="GEQUAL",t[t.ALWAYS=519]="ALWAYS"}(s||(s={})),function(t){t[t.ZERO=0]="ZERO",t[t.KEEP=7680]="KEEP",t[t.REPLACE=7681]="REPLACE",t[t.INCR=7682]="INCR",t[t.DECR=7683]="DECR",t[t.INVERT=5386]="INVERT",t[t.INCR_WRAP=34055]="INCR_WRAP",t[t.DECR_WRAP=34056]="DECR_WRAP"}(N||(N={})),function(t){t[t.NEAREST=9728]="NEAREST",t[t.LINEAR=9729]="LINEAR",t[t.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",t[t.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",t[t.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",t[t.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(c||(c={})),function(t){t[t.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",t[t.REPEAT=10497]="REPEAT",t[t.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(u||(u={})),function(t){t[t.TEXTURE_2D=3553]="TEXTURE_2D",t[t.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",t[t.TEXTURE_3D=32879]="TEXTURE_3D",t[t.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",t[t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",t[t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",t[t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",t[t.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(O||(O={})),function(t){t[t.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t[t.ALPHA=6406]="ALPHA",t[t.RGB=6407]="RGB",t[t.RGBA=6408]="RGBA",t[t.LUMINANCE=6409]="LUMINANCE",t[t.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",t[t.RED=6403]="RED",t[t.RG=33319]="RG",t[t.RED_INTEGER=36244]="RED_INTEGER",t[t.RG_INTEGER=33320]="RG_INTEGER",t[t.RGB_INTEGER=36248]="RGB_INTEGER",t[t.RGBA_INTEGER=36249]="RGBA_INTEGER"}(a||(a={})),function(t){t[t.RGBA4=32854]="RGBA4",t[t.R16F=33325]="R16F",t[t.RG16F=33327]="RG16F",t[t.RGB32F=34837]="RGB32F",t[t.RGBA16F=34842]="RGBA16F",t[t.R32F=33326]="R32F",t[t.RG32F=33328]="RG32F",t[t.RGBA32F=34836]="RGBA32F",t[t.R11F_G11F_B10F=35898]="R11F_G11F_B10F",t[t.RGB8=32849]="RGB8",t[t.RGBA8=32856]="RGBA8",t[t.RGB5_A1=32855]="RGB5_A1",t[t.R8=33321]="R8",t[t.RG8=33323]="RG8",t[t.R8I=33329]="R8I",t[t.R8UI=33330]="R8UI",t[t.R16I=33331]="R16I",t[t.R16UI=33332]="R16UI",t[t.R32I=33333]="R32I",t[t.R32UI=33334]="R32UI",t[t.RG8I=33335]="RG8I",t[t.RG8UI=33336]="RG8UI",t[t.RG16I=33337]="RG16I",t[t.RG16UI=33338]="RG16UI",t[t.RG32I=33339]="RG32I",t[t.RG32UI=33340]="RG32UI",t[t.RGB16F=34843]="RGB16F",t[t.RGB9_E5=35901]="RGB9_E5",t[t.SRGB8=35905]="SRGB8",t[t.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",t[t.RGB565=36194]="RGB565",t[t.RGBA32UI=36208]="RGBA32UI",t[t.RGB32UI=36209]="RGB32UI",t[t.RGBA16UI=36214]="RGBA16UI",t[t.RGB16UI=36215]="RGB16UI",t[t.RGBA8UI=36220]="RGBA8UI",t[t.RGB8UI=36221]="RGB8UI",t[t.RGBA32I=36226]="RGBA32I",t[t.RGB32I=36227]="RGB32I",t[t.RGBA16I=36232]="RGBA16I",t[t.RGB16I=36233]="RGB16I",t[t.RGBA8I=36238]="RGBA8I",t[t.RGB8I=36239]="RGB8I",t[t.R8_SNORM=36756]="R8_SNORM",t[t.RG8_SNORM=36757]="RG8_SNORM",t[t.RGB8_SNORM=36758]="RGB8_SNORM",t[t.RGBA8_SNORM=36759]="RGBA8_SNORM",t[t.RGB10_A2=32857]="RGB10_A2",t[t.RGB10_A2UI=36975]="RGB10_A2UI"}(I||(I={})),function(t){t[t.FLOAT=5126]="FLOAT",t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",t[t.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",t[t.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",t[t.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",t[t.BYTE=5120]="BYTE",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.SHORT=5122]="SHORT",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.INT=5124]="INT",t[t.HALF_FLOAT=5131]="HALF_FLOAT",t[t.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",t[t.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",t[t.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",t[t.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(S||(S={})),function(t){t[t.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",t[t.STENCIL_INDEX8=36168]="STENCIL_INDEX8",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t[t.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",t[t.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",t[t.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",t[t.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(f||(f={})),function(t){t[t.STATIC_DRAW=35044]="STATIC_DRAW",t[t.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",t[t.STREAM_DRAW=35040]="STREAM_DRAW",t[t.STATIC_READ=35045]="STATIC_READ",t[t.DYNAMIC_READ=35049]="DYNAMIC_READ",t[t.STREAM_READ=35041]="STREAM_READ",t[t.STATIC_COPY=35046]="STATIC_COPY",t[t.DYNAMIC_COPY=35050]="DYNAMIC_COPY",t[t.STREAM_COPY=35042]="STREAM_COPY"}(C||(C={})),function(t){t[t.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",t[t.VERTEX_SHADER=35633]="VERTEX_SHADER"}(l||(l={})),function(t){t[t.FRAMEBUFFER=36160]="FRAMEBUFFER",t[t.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",t[t.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(L||(L={})),function(t){t[t.TEXTURE=0]="TEXTURE",t[t.RENDER_BUFFER=1]="RENDER_BUFFER",t[t.CUBEMAP=2]="CUBEMAP"}(D||(D={})),function(t){t[t.NONE=0]="NONE",t[t.DEPTH_RENDER_BUFFER=1]="DEPTH_RENDER_BUFFER",t[t.STENCIL_RENDER_BUFFER=2]="STENCIL_RENDER_BUFFER",t[t.DEPTH_STENCIL_RENDER_BUFFER=3]="DEPTH_STENCIL_RENDER_BUFFER",t[t.DEPTH_STENCIL_TEXTURE=4]="DEPTH_STENCIL_TEXTURE"}(d||(d={}));const U=33984;var M,P;!function(t){t[t.Texture=0]="Texture",t[t.BufferObject=1]="BufferObject",t[t.VertexArrayObject=2]="VertexArrayObject",t[t.Shader=3]="Shader",t[t.Program=4]="Program",t[t.FramebufferObject=5]="FramebufferObject",t[t.Renderbuffer=6]="Renderbuffer",t[t.Sync=7]="Sync",t[t.COUNT=8]="COUNT"}(M||(M={})),function(t){t[t.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",t[t.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",t[t.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",t[t.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",t[t.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",t[t.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",t[t.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",t[t.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",t[t.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",t[t.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",t[t.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",t[t.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",t[t.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",t[t.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",t[t.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",t[t.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(P||(P={}));const F=33306;var G,B,h,p,g,H,m;!function(t){t[t.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",t[t.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",t[t.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",t[t.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",t[t.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",t[t.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",t[t.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",t[t.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",t[t.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(G||(G={})),function(t){t[t.FLOAT=5126]="FLOAT",t[t.FLOAT_VEC2=35664]="FLOAT_VEC2",t[t.FLOAT_VEC3=35665]="FLOAT_VEC3",t[t.FLOAT_VEC4=35666]="FLOAT_VEC4",t[t.INT=5124]="INT",t[t.INT_VEC2=35667]="INT_VEC2",t[t.INT_VEC3=35668]="INT_VEC3",t[t.INT_VEC4=35669]="INT_VEC4",t[t.BOOL=35670]="BOOL",t[t.BOOL_VEC2=35671]="BOOL_VEC2",t[t.BOOL_VEC3=35672]="BOOL_VEC3",t[t.BOOL_VEC4=35673]="BOOL_VEC4",t[t.FLOAT_MAT2=35674]="FLOAT_MAT2",t[t.FLOAT_MAT3=35675]="FLOAT_MAT3",t[t.FLOAT_MAT4=35676]="FLOAT_MAT4",t[t.SAMPLER_2D=35678]="SAMPLER_2D",t[t.SAMPLER_CUBE=35680]="SAMPLER_CUBE",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",t[t.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",t[t.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",t[t.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",t[t.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",t[t.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",t[t.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",t[t.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",t[t.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",t[t.SAMPLER_3D=35679]="SAMPLER_3D",t[t.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",t[t.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",t[t.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",t[t.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",t[t.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",t[t.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",t[t.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",t[t.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",t[t.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",t[t.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",t[t.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",t[t.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(B||(B={})),function(t){t[t.OBJECT_TYPE=37138]="OBJECT_TYPE",t[t.SYNC_CONDITION=37139]="SYNC_CONDITION",t[t.SYNC_STATUS=37140]="SYNC_STATUS",t[t.SYNC_FLAGS=37141]="SYNC_FLAGS"}(h||(h={})),function(t){t[t.UNSIGNALED=37144]="UNSIGNALED",t[t.SIGNALED=37145]="SIGNALED"}(p||(p={})),function(t){t[t.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",t[t.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",t[t.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",t[t.WAIT_FAILED=37149]="WAIT_FAILED"}(g||(g={})),function(t){t[t.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(H||(H={})),function(t){t[t.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(m||(m={}))},200:function(t,e,n){"use strict";n.d(e,"a",(function(){return E}));class E{constructor(t,e,n,E,r){let _=arguments.length>5&&void 0!==arguments[5]&&arguments[5],i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;this.name=t,this.count=e,this.type=n,this.offset=E,this.stride=r,this.normalized=_,this.divisor=i}}},309:function(t,e,n){"use strict";var E;n.d(e,"a",(function(){return E})),function(t){t.POSITION="position",t.NORMAL="normal",t.UV0="uv0",t.AUXPOS1="auxpos1",t.AUXPOS2="auxpos2",t.MAPPOS="mapPos",t.COLOR="color",t.SYMBOLCOLOR="symbolColor",t.SIZE="size",t.TANGENT="tangent",t.OFFSET="offset",t.SUBDIVISIONFACTOR="subdivisionFactor",t.COLORFEATUREATTRIBUTE="colorFeatureAttribute",t.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",t.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",t.DISTANCETOSTART="distanceToStart",t.UVMAPSPACE="uvMapSpace",t.BOUNDINGRECT="boundingRect",t.UVREGION="uvRegion",t.NORMALCOMPRESSED="normalCompressed",t.PROFILERIGHT="profileRight",t.PROFILEUP="profileUp",t.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",t.FEATUREVALUE="featureValue",t.MODELORIGINHI="modelOriginHi",t.MODELORIGINLO="modelOriginLo",t.MODEL="model",t.MODELNORMAL="modelNormal",t.INSTANCECOLOR="instanceColor",t.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",t.LOCALTRANSFORM="localTransform",t.GLOBALTRANSFORM="globalTransform",t.BOUNDINGSPHERE="boundingSphere",t.MODELORIGIN="modelOrigin",t.MODELSCALEFACTORS="modelScaleFactors",t.FEATUREATTRIBUTE="featureAttribute",t.STATE="state",t.LODLEVEL="lodLevel",t.POSITION0="position0",t.POSITION1="position1",t.NORMALA="normalA",t.NORMALB="normalB",t.COMPONENTINDEX="componentIndex",t.VARIANTOFFSET="variantOffset",t.VARIANTSTROKE="variantStroke",t.VARIANTEXTENSION="variantExtension",t.U8PADDING="u8padding",t.U16PADDING="u16padding",t.SIDENESS="sideness",t.START="start",t.END="end",t.UP="up",t.EXTRUDE="extrude"}(E||(E={}))},619:function(t,e,n){"use strict";n.d(e,"a",(function(){return T}));var E=n(414),r=n(620);class _{constructor(t,e){this.layout=t,this.buffer="number"==typeof e?new ArrayBuffer(e*t.stride):e;for(const n of t.fieldNames){const e=t.fields.get(n);this[n]=new e.constructor(this.buffer,e.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(t,e){const n=this[t];return n&&n.elementCount===e.ElementCount&&n.elementType===e.ElementType?n:null}slice(t,e){return new _(this.layout,this.buffer.slice(t*this.stride,e*this.stride))}copyFrom(t,e,n,E){const r=this.stride;if(r%4==0){const _=new Uint32Array(t.buffer,e*r,E*r/4);new Uint32Array(this.buffer,n*r,E*r/4).set(_)}else{const _=new Uint8Array(t.buffer,e*r,E*r);new Uint8Array(this.buffer,n*r,E*r).set(_)}}}class i{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(t,e){return this._appendField(t,E.m,e),this}vec2f64(t,e){return this._appendField(t,E.n,e),this}vec3f(t,e){return this._appendField(t,E.u,e),this}vec3f64(t,e){return this._appendField(t,E.v,e),this}vec4f(t,e){return this._appendField(t,E.C,e),this}vec4f64(t,e){return this._appendField(t,E.D,e),this}mat3f(t,e){return this._appendField(t,E.f,e),this}mat3f64(t,e){return this._appendField(t,E.g,e),this}mat4f(t,e){return this._appendField(t,E.h,e),this}mat4f64(t,e){return this._appendField(t,E.i,e),this}vec4u8(t,e){return this._appendField(t,E.J,e),this}f32(t,e){return this._appendField(t,E.a,e),this}f64(t,e){return this._appendField(t,E.b,e),this}u8(t,e){return this._appendField(t,E.l,e),this}u16(t,e){return this._appendField(t,E.j,e),this}i8(t,e){return this._appendField(t,E.e,e),this}vec2i8(t,e){return this._appendField(t,E.q,e),this}vec2i16(t,e){return this._appendField(t,E.o,e),this}vec2u8(t,e){return this._appendField(t,E.t,e),this}vec4u16(t,e){return this._appendField(t,E.H,e),this}u32(t,e){return this._appendField(t,E.k,e),this}_appendField(t,e,n){const E=e.ElementCount*Object(r.a)(e.ElementType),_=this.stride;this.fields.set(t,{size:E,constructor:e,offset:_,optional:n}),this.stride+=E,this.fieldNames.push(t)}alignTo(t){return this.stride=Math.floor((this.stride+t-1)/t)*t,this}hasField(t){return this.fieldNames.includes(t)}createBuffer(t){return new _(this,t)}createView(t){return new _(this,t)}clone(){const t=new i;return t.stride=this.stride,t.fields=new Map,this.fields.forEach(((e,n)=>t.fields.set(n,e))),t.fieldNames=this.fieldNames.slice(),t.BufferType=this.BufferType,t}}function T(){return new i}},620:function(t,e,n){"use strict";n.d(e,"a",(function(){return E})),n.d(e,"b",(function(){return _})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return i}));n(136);function E(t){switch(t){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8;default:return}}function r(t){switch(t){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function _(t){switch(t){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function i(t){switch(t){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}},856:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var E=n(176);function r(t,e,n){var r;const R=t.byteLength/(4*e),o=new Uint32Array(t,0,R*e);let s=new Uint32Array(R);const N=null!==(r=null===n||void 0===n?void 0:n.minReduction)&&void 0!==r?r:0,c=(null===n||void 0===n?void 0:n.originalIndices)||null,u=c?c.length:0,O=(null===n||void 0===n?void 0:n.componentOffsets)||null;let a=0;if(O)for(let E=0;E<O.length-1;E++){const t=O[E+1]-O[E];t>a&&(a=t)}else a=R;const I=Math.floor(1.1*a)+1;(null==A||A.length<2*I)&&(A=new Uint32Array(Object(E.j)(2*I)));for(let E=0;E<2*I;E++)A[E]=0;let S=0;const f=!!O&&!!c,C=f?u:R,l=f?new Uint32Array(u):null,L=1.96;let D=0!==N?Math.ceil(4*L*L/(N*N)*N*(1-N)):C,d=1,U=O?O[1]:C;for(let E=0;E<C;E++){if(E===D){const t=1-S/E;if(t+L*Math.sqrt(t*(1-t)/E)<N)return null;D*=2}if(E===U){for(let t=0;t<2*I;t++)A[t]=0;if(c)for(let t=O[d-1];t<O[d];t++)l[t]=s[c[t]];U=O[++d]}const t=f?c[E]:E,n=t*e,r=T(o,n,e);let i=r%I,R=S;for(;0!==A[2*i+1];){if(A[2*i]===r){const t=A[2*i+1]-1;if(_(o,n,t*e,e)){R=s[t];break}}i++,i>=I&&(i-=I)}R===S&&(A[2*i]=r,A[2*i+1]=t+1,S++),s[t]=R}if(0!==N&&1-S/R<N)return null;if(f){for(let t=O[d-1];t<l.length;t++)l[t]=s[c[t]];s=l}const M=new Uint32Array(e*S);S=0;for(let E=0;E<C;E++)s[E]===S&&(i(o,(f?c[E]:E)*e,M,S*e,e),S++);if(c&&!f){const t=new Uint32Array(u);for(let e=0;e<t.length;e++)t[e]=s[c[e]];s=t}return{buffer:M.buffer,indices:s,uniqueCount:S}}function _(t,e,n,E){for(let r=0;r<E;r++)if(t[e+r]!==t[n+r])return!1;return!0}function i(t,e,n,E,r){for(let _=0;_<r;_++)n[E+_]=t[e+_]}function T(t,e,n){let E=0;for(let r=0;r<n;r++)E=t[e+r]+E|0,E=E+(E<<11)+(E>>>2)|0;return E>>>0}let A=null}}]);