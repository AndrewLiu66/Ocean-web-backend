(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[102],{1065:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return W}));var a,o=r(156),n=r(6),i=r(143),c=r(144),p=r(145),s=r(146),u=r(155),b=r.n(u),l=r(149),O=r(160),j=r(351),y=r(147),f=r(273),d=r(164),v=r(176),h=r(152),m=(r(154),r(148),r(151),r(191)),g=r(150),S=r(557),x=r(287),w=r(481),k=r(444),I=r(305),T=r(308),N=r(309),R=r(669),M=r(261),U=r(652),_=r(60),F=r(187),P=r(197),A=r(161),J=r(184),L=(r(178),r(162)),D=r(426),B=r(193),C=r(257),z=r(217),G=a=function(e){Object(p.a)(r,e);var t=Object(s.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).geometry=null,a.type="clip",a}return Object(c.a)(r,[{key:"writeGeometry",value:function(e,t,r,a){if(a.layer&&a.layer.spatialReference&&!a.layer.spatialReference.equals(this.geometry.spatialReference)){if(!Object(C.a)(e.spatialReference,a.layer.spatialReference))return void(a&&a.messages&&a.messages.push(new D.a("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:a.layer.spatialReference,context:a})));var o=new z.a;Object(C.l)(e,o,a.layer.spatialReference),t[r]=o.toJSON(a)}else t[r]=e.toJSON(a);delete t[r].spatialReference}},{key:"clone",value:function(){return new a({geometry:Object(L.a)(this.geometry),type:this.type})}}]),r}(A.a);Object(l.a)([Object(h.b)({type:z.a}),Object(S.a)()],G.prototype,"geometry",void 0),Object(l.a)([Object(B.a)(["web-scene","portal-item"],"geometry")],G.prototype,"writeGeometry",null),Object(l.a)([Object(h.b)({type:["clip","mask","replace"],nonNullable:!0}),Object(S.a)()],G.prototype,"type",void 0);var K,V=G=a=Object(l.a)([Object(g.a)("esri.layers.support.SceneModification")],G),q=K=function(e){Object(p.a)(r,e);var t=Object(s.a)(r);function r(e){var a;return Object(i.a)(this,r),(a=t.call(this,e)).url=null,a}return Object(c.a)(r,[{key:"clone",value:function(){return new K({url:this.url,items:this.items.map((function(e){return e.clone()}))})}},{key:"toJSON",value:function(e){return this.toArray().map((function(t){return t.toJSON(e)})).filter((function(e){return!!e.geometry}))}}],[{key:"fromJSON",value:function(e,t){var r,a=new K,o=Object(_.a)(e);try{for(o.s();!(r=o.n()).done;){var n=r.value;a.add(V.fromJSON(n,t))}}catch(i){o.e(i)}finally{o.f()}return a}},{key:"fromUrl",value:function(){var e=Object(o.a)(b.a.mark((function e(t,r,a){var o,i,c,p,s,u,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={url:Object(J.M)(t),origin:"service"},e.next=3,Object(F.default)(t,{responseType:"json",signal:Object(y.i)(a,"signal")});case 3:i=e.sent,c=r.toJSON(),p=[],s=Object(_.a)(i.data);try{for(s.s();!(u=s.n()).done;)l=u.value,p.push(V.fromJSON(Object(n.a)(Object(n.a)({},l),{},{geometry:Object(n.a)(Object(n.a)({},l.geometry),{},{spatialReference:c})}),o))}catch(b){s.e(b)}finally{s.f()}return e.abrupt("return",new K({url:t,items:p}));case 9:case"end":return e.stop()}}),e)})));return function(t,r,a){return e.apply(this,arguments)}}()}]),r}(Object(A.b)(P.a.ofType(V)));Object(l.a)([Object(h.b)({type:String})],q.prototype,"url",void 0);var E=q=K=Object(l.a)([Object(g.a)("esri.layers.support.SceneModifications")],q),H=r(288),Q=function(e){Object(p.a)(r,e);var t=Object(s.a)(r);function r(){var e;Object(i.a)(this,r);for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o)))._handles=new j.a,e.geometryType="mesh",e.operationalLayerType="IntegratedMeshLayer",e.type="integrated-mesh",e.nodePages=null,e.materialDefinitions=null,e.textureSetDefinitions=null,e.geometryDefinitions=null,e.serviceUpdateTimeStamp=null,e.profile="mesh-pyramids",e.modifications=null,e._modificationsSource=null,e.elevationInfo=null,e.path=null,e}return Object(c.a)(r,[{key:"destroy",value:function(){this._handles.destroy()}},{key:"initialize",value:function(){var e=this;this._handles.add(Object(v.b)((function(){return e.modifications}),"after-changes",(function(){return e.modifications=e.modifications}),v.c))}},{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(n.a)({url:e},t):e}},{key:"readModifications",value:function(e,t,r){this._modificationsSource={url:Object(H.c)(e,r),context:r}}},{key:"load",value:function(){var e=Object(o.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(this.addResolvingPromise(this._doLoad(t)),this));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_doLoad",value:function(){var e=Object(o.a)(b.a.mark((function e(t){var r,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(y.i)(t,"signal"),e.prev=1,e.next=4,this.loadFromPortal({supportedTypes:["Scene Service"]},t);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),Object(d.o)(e.t0);case 9:return e.next=11,this._fetchService(r);case 11:if(!Object(y.k)(this._modificationsSource)){e.next=16;break}return e.next=14,E.fromUrl(this._modificationsSource.url,this.spatialReference,t);case 14:a=e.sent,this.setAtOrigin("modifications",a,this._modificationsSource.context.origin),this._modificationsSource=null;case 16:return e.next=18,this._fetchIndexAndUpdateExtent(this.nodePages,r);case 18:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()},{key:"beforeSave",value:function(){if(!Object(y.j)(this._modificationsSource))return this.load().then((function(){}),(function(){}))}},{key:"saveAs",value:function(){var e=Object(o.a)(b.a.mark((function e(t,r){var a=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._debouncedSaveOperations(R.a.SAVE_AS,Object(n.a)(Object(n.a)({},r),{},{getTypeKeywords:function(){return a._getTypeKeywords()},portalItemLayerType:"integrated-mesh"}),t));case 1:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"save",value:function(){var e=Object(o.a)(b.a.mark((function e(){var t,r=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={getTypeKeywords:function(){return r._getTypeKeywords()},portalItemLayerType:"integrated-mesh"},e.abrupt("return",this._debouncedSaveOperations(R.a.SAVE,t));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"validateLayer",value:function(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new O.a("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new O.a("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new O.a("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}},{key:"_getTypeKeywords",value:function(){return["IntegratedMeshLayer"]}}]),r}(Object(R.b)(Object(k.a)(Object(I.a)(Object(T.a)(Object(N.a)(Object(f.a)(Object(w.a)(x.a))))))));Object(l.a)([Object(h.b)({type:String,readOnly:!0})],Q.prototype,"geometryType",void 0),Object(l.a)([Object(h.b)({type:["show","hide"]})],Q.prototype,"listMode",void 0),Object(l.a)([Object(h.b)({type:["IntegratedMeshLayer"]})],Q.prototype,"operationalLayerType",void 0),Object(l.a)([Object(h.b)({json:{read:!1},readOnly:!0})],Q.prototype,"type",void 0),Object(l.a)([Object(h.b)({type:U.c,readOnly:!0})],Q.prototype,"nodePages",void 0),Object(l.a)([Object(h.b)({type:[U.b],readOnly:!0})],Q.prototype,"materialDefinitions",void 0),Object(l.a)([Object(h.b)({type:[U.d],readOnly:!0})],Q.prototype,"textureSetDefinitions",void 0),Object(l.a)([Object(h.b)({type:[U.a],readOnly:!0})],Q.prototype,"geometryDefinitions",void 0),Object(l.a)([Object(h.b)({readOnly:!0})],Q.prototype,"serviceUpdateTimeStamp",void 0),Object(l.a)([Object(h.b)({type:E}),Object(S.a)({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],Q.prototype,"modifications",void 0),Object(l.a)([Object(m.a)(["web-scene","portal-item"],"modifications")],Q.prototype,"readModifications",null),Object(l.a)([Object(h.b)(M.b)],Q.prototype,"elevationInfo",void 0),Object(l.a)([Object(h.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],Q.prototype,"path",void 0);var W=Q=Object(l.a)([Object(g.a)("esri.layers.IntegratedMeshLayer")],Q)},557:function(e,t,r){"use strict";r.d(t,"a",(function(){return S}));var a=r(156),o=r(6),n=r(60),i=r(155),c=r.n(i),p=r(147),s=r(711),u=r(184),b=r(569),l=r(513),O=r(362),j=r(152);function y(e){return f[function(e){return e instanceof Blob?e.type:function(e){var t=Object(u.p)(e);return h[t]||d}(e.url)}(e)]||v}var f={},d="text/plain",v=f[d],h={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(var m in h)f[h[m]]=m;var g=r(288);function S(e){var t=Object(p.k)(e)&&e.origins?e.origins:[void 0];return function(r,a){var i,c=function(e,t,r){if(Object(p.k)(e)&&"resource"===e.type)return function(e,t,r){var a=Object(l.b)(t,r);return{type:String,read:function(e,t,r){var o=Object(g.f)(e,t,r);return a.type===String?o:"function"==typeof a.type?new a.type({url:o}):void 0},write:{writer:function(t,n,i,c){if(!c||!c.resources)return"string"==typeof t?void(n[i]=Object(g.g)(t,c)):void(n[i]=t.write({},c));var b=function(e){return Object(p.j)(e)?null:"string"==typeof e?e:e.url}(t),l=b?Object(g.g)(b,Object(o.a)(Object(o.a)({},c),{},{verifyItemRelativeUrls:c&&c.verifyItemRelativeUrls?{writtenUrls:c.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null}),g.a.NO):null,j=a.type!==String&&(!Object(s.a)(this)||c&&c.origin&&this.originIdOf(r)>Object(O.e)(c.origin));c&&c.portalItem&&Object(p.k)(l)&&!Object(u.u)(l)?j?function(e,t,r,a,o,n,i,c){var p=i.portalItem.resourceFromPath(a),s=k(r,a,i);y(s)===Object(u.p)(p.path)?(w(e,t,p,s,i.resources.toUpdate),o[n]=a):x(e,t,r,a,o,n,i,c)}(this,r,t,l,n,i,c,e):function(e,t,r,a){a.resources.toKeep.push({resource:a.portalItem.resourceFromPath(e)}),t[r]=e}(l,n,i,c):c&&c.portalItem&&(Object(p.j)(l)||Object(p.k)(Object(g.d)(l))||Object(u.v)(l)||j)?x(this,r,t,l,n,i,c,e):n[i]=l}}}}(e,t,r);switch(Object(p.k)(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":return{read:g.e.read,write:g.e.write}}}(e,r,a),b=Object(n.a)(t);try{for(b.s();!(i=b.n()).done;){var f=i.value,d=Object(j.c)(r,f,a);for(var v in c)d[v]=c[v]}}catch(h){b.e(h)}finally{b.f()}}}function x(e,t,r,a,o,n,i,c){var s=Object(b.a)(),l=k(r,a,i),O=Object(u.B)(Object(p.i)(c,"prefix"),s),j="".concat(O,".").concat(y(l)),f=i.portalItem.resourceFromPath(j);Object(u.v)(a)&&i.resources.pendingOperations.push(function(e){return I.apply(this,arguments)}(a).then((function(e){f.path="".concat(O,".").concat(y(e)),o[n]=f.itemRelativeUrl})).catch((function(){}))),w(e,t,f,l,i.resources.toAdd),o[n]=f.itemRelativeUrl}function w(e,t,r,a,o){o.push({resource:r,content:a,finish:function(r){!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(e,t,r)}})}function k(e,t,r){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(r))],{type:"application/json"})}function I(){return(I=Object(a.a)(c.a.mark((function e(t){var a,o,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then(r.bind(null,187));case 2:return a=e.sent.default,e.next=5,a(t,{responseType:"blob"});case 5:return o=e.sent,n=o.data,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},652:function(e,t,r){"use strict";r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return y})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return d}));var a=r(144),o=r(143),n=r(145),i=r(146),c=r(149),p=r(161),s=r(152),u=(r(154),r(148),r(151),r(196)),b=r(150),l=function(e){Object(n.a)(r,e);var t=Object(i.a)(r);function r(){var e;return Object(o.a)(this,r),(e=t.apply(this,arguments)).nodesPerPage=null,e.rootIndex=0,e.lodSelectionMetricType=null,e}return Object(a.a)(r)}(p.a);Object(c.a)([Object(s.b)({type:Number})],l.prototype,"nodesPerPage",void 0),Object(c.a)([Object(s.b)({type:Number})],l.prototype,"rootIndex",void 0),Object(c.a)([Object(s.b)({type:String})],l.prototype,"lodSelectionMetricType",void 0),l=Object(c.a)([Object(b.a)("esri.layer.support.I3SNodePageDefinition")],l);var O=function(e){Object(n.a)(r,e);var t=Object(i.a)(r);function r(){var e;return Object(o.a)(this,r),(e=t.apply(this,arguments)).factor=1,e}return Object(a.a)(r)}(p.a);Object(c.a)([Object(s.b)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],O.prototype,"id",void 0),Object(c.a)([Object(s.b)({type:Number})],O.prototype,"factor",void 0),O=Object(c.a)([Object(b.a)("esri.layer.support.I3SMaterialTexture")],O);var j=function(e){Object(n.a)(r,e);var t=Object(i.a)(r);function r(){var e;return Object(o.a)(this,r),(e=t.apply(this,arguments)).baseColorFactor=[1,1,1,1],e.baseColorTexture=null,e.metallicRoughnessTexture=null,e.metallicFactor=1,e.roughnessFactor=1,e}return Object(a.a)(r)}(p.a);Object(c.a)([Object(s.b)({type:[Number]})],j.prototype,"baseColorFactor",void 0),Object(c.a)([Object(s.b)({type:O})],j.prototype,"baseColorTexture",void 0),Object(c.a)([Object(s.b)({type:O})],j.prototype,"metallicRoughnessTexture",void 0),Object(c.a)([Object(s.b)({type:Number})],j.prototype,"metallicFactor",void 0),Object(c.a)([Object(s.b)({type:Number})],j.prototype,"roughnessFactor",void 0),j=Object(c.a)([Object(b.a)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],j);var y=function(e){Object(n.a)(r,e);var t=Object(i.a)(r);function r(){var e;return Object(o.a)(this,r),(e=t.apply(this,arguments)).alphaMode="opaque",e.alphaCutoff=.25,e.doubleSided=!1,e.cullFace="none",e.normalTexture=null,e.occlusionTexture=null,e.emissiveTexture=null,e.emissiveFactor=null,e.pbrMetallicRoughness=null,e}return Object(a.a)(r)}(p.a);Object(c.a)([Object(u.a)({opaque:"opaque",mask:"mask",blend:"blend"})],y.prototype,"alphaMode",void 0),Object(c.a)([Object(s.b)({type:Number})],y.prototype,"alphaCutoff",void 0),Object(c.a)([Object(s.b)({type:Boolean})],y.prototype,"doubleSided",void 0),Object(c.a)([Object(u.a)({none:"none",back:"back",front:"front"})],y.prototype,"cullFace",void 0),Object(c.a)([Object(s.b)({type:O})],y.prototype,"normalTexture",void 0),Object(c.a)([Object(s.b)({type:O})],y.prototype,"occlusionTexture",void 0),Object(c.a)([Object(s.b)({type:O})],y.prototype,"emissiveTexture",void 0),Object(c.a)([Object(s.b)({type:[Number]})],y.prototype,"emissiveFactor",void 0),Object(c.a)([Object(s.b)({type:j})],y.prototype,"pbrMetallicRoughness",void 0),y=Object(c.a)([Object(b.a)("esri.layer.support.I3SMaterialDefinition")],y);var f=function(e){Object(n.a)(r,e);var t=Object(i.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r)}(p.a);Object(c.a)([Object(s.b)({type:String,json:{read:{source:["name","index"],reader:function(e,t){return null!=e?e:"".concat(t.index)}}}})],f.prototype,"name",void 0),Object(c.a)([Object(u.a)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],f.prototype,"format",void 0),f=Object(c.a)([Object(b.a)("esri.layer.support.I3STextureFormat")],f);var d=function(e){Object(n.a)(r,e);var t=Object(i.a)(r);function r(){var e;return Object(o.a)(this,r),(e=t.apply(this,arguments)).atlas=!1,e}return Object(a.a)(r)}(p.a);Object(c.a)([Object(s.b)({type:[f]})],d.prototype,"formats",void 0),Object(c.a)([Object(s.b)({type:Boolean})],d.prototype,"atlas",void 0),d=Object(c.a)([Object(b.a)("esri.layer.support.I3STextureSetDefinition")],d);var v=function(e){Object(n.a)(r,e);var t=Object(i.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r)}(p.a);Object(c.a)([Object(u.a)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],v.prototype,"type",void 0),Object(c.a)([Object(s.b)({type:Number})],v.prototype,"component",void 0),v=Object(c.a)([Object(b.a)("esri.layer.support.I3SGeometryAttribute")],v);var h=function(e){Object(n.a)(r,e);var t=Object(i.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r)}(p.a);Object(c.a)([Object(u.a)({draco:"draco"})],h.prototype,"encoding",void 0),Object(c.a)([Object(s.b)({type:[String]})],h.prototype,"attributes",void 0),h=Object(c.a)([Object(b.a)("esri.layer.support.I3SGeometryCompressedAttributes")],h);var m=function(e){Object(n.a)(r,e);var t=Object(i.a)(r);function r(){var e;return Object(o.a)(this,r),(e=t.apply(this,arguments)).offset=0,e}return Object(a.a)(r)}(p.a);Object(c.a)([Object(s.b)({type:Number})],m.prototype,"offset",void 0),Object(c.a)([Object(s.b)({type:v})],m.prototype,"position",void 0),Object(c.a)([Object(s.b)({type:v})],m.prototype,"normal",void 0),Object(c.a)([Object(s.b)({type:v})],m.prototype,"uv0",void 0),Object(c.a)([Object(s.b)({type:v})],m.prototype,"color",void 0),Object(c.a)([Object(s.b)({type:v})],m.prototype,"uvRegion",void 0),Object(c.a)([Object(s.b)({type:v})],m.prototype,"featureId",void 0),Object(c.a)([Object(s.b)({type:v})],m.prototype,"faceRange",void 0),Object(c.a)([Object(s.b)({type:h})],m.prototype,"compressedAttributes",void 0),m=Object(c.a)([Object(b.a)("esri.layer.support.I3SGeometryBuffer")],m);var g=function(e){Object(n.a)(r,e);var t=Object(i.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r)}(p.a);Object(c.a)([Object(u.a)({triangle:"triangle"})],g.prototype,"topology",void 0),Object(c.a)([Object(s.b)()],g.prototype,"geometryBuffers",void 0),g=Object(c.a)([Object(b.a)("esri.layer.support.I3SGeometryDefinition")],g)}}]);