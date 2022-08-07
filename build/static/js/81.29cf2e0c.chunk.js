(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[81],{537:function(e,t,r){"use strict";function a(e){var t;const r=e.layer;return"floorInfo"in r&&null!==(t=r.floorInfo)&&void 0!==t&&t.floorField&&"floors"in e.view?s(e.view.floors,r.floorInfo.floorField):null}function i(e,t){var r;return"floorInfo"in t&&null!==(r=t.floorInfo)&&void 0!==r&&r.floorField?s(e,t.floorInfo.floorField):null}function s(e,t){if(null===e||void 0===e||!e.length)return null;const r=e.filter((e=>""!==e)).map((e=>"'".concat(e,"'")));return r.push("''"),"".concat(t," IN (").concat(r.join(","),") OR ").concat(t," IS NULL")}r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return i}))},576:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return i}));var a=r(230);function i(e,t){const r=t||e.extent,i=e.width,s=Object(a.c)(r&&r.spatialReference);return r&&i?r.width/i*s*a.g*96:0}function s(e,t){return e/(Object(a.c)(t)*a.g*96)}},639:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return V}));var a=r(136),i=r(166),s=r(370),o=r(145),n=r(201),l=r(528),c=r(134),b=r(248),y=r(148),u=r(139),p=(r(141),r(135),r(138)),h=r(173),d=r(137),m=r(176),O=r(344),j=r(161),f=r(576),g=r(260),v=r(463),S=r(1059),x=r(425),I=r(318),w=r(464),L=r(281),E=r(285),P=r(386),N=r(286),D=r(1060),J=r(478),F=r(241),T=r(870),M=r(899),R=r(577),k=r(838);let U=class extends(Object(I.a)(Object(J.a)(Object(N.a)(Object(D.a)(Object(S.a)(Object(x.a)(Object(L.a)(Object(E.a)(Object(b.a)(Object(P.a)(Object(v.a)(Object(w.a)(Object(n.b)(g.a)))))))))))))){constructor(){super(...arguments),this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=Object(c.k)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(y.o).then((()=>this._fetchService(t)))),Promise.resolve(this)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("PNG32")?"png32":"png24"}writeSublayers(e,t,r,a){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten((e=>{let{sublayers:t}=e;return t&&t.toArray().reverse()})).toArray();let s=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e=Object(O.e)(a.origin);if(e===O.a.PORTAL_ITEM){const e=this.createSublayersForOrigin("service").sublayers;s=Object(R.c)(i,e,O.a.SERVICE)}else if(e>O.a.PORTAL_ITEM){const e=this.createSublayersForOrigin("portal-item");s=Object(R.c)(i,e.sublayers,Object(O.e)(e.origin))}}const o=[],n={writeSublayerStructure:s,...a};let l=s;i.forEach((e=>{const t=e.write({},n);o.push(t),l=l||"user"===e.originOf("visible")})),o.some((e=>Object.keys(e).length>1))&&(t.layers=o),l&&(t.visibleLayers=i.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,t,r,a){const i=a&&a.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const s=new T.a({layer:this,floors:null===a||void 0===a?void 0:a.floors,scale:Object(f.b)({extent:e,width:t})*i}),o=s.toJSON();s.destroy();const n=!a||!a.rotation||this.version<10.3?{}:{rotation:-a.rotation},l=e&&e.spatialReference,c=l.wkid||JSON.stringify(l.toJSON());o.dpi*=i;const b={};if(null!==a&&void 0!==a&&a.timeExtent){const{start:e,end:t}=a.timeExtent.toJSON();b.time=e&&t&&e===t?""+e:"".concat(null==e?"null":e,",").concat(null==t?"null":t)}else this.timeInfo&&!this.timeInfo.hasLiveData&&(b.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:c,imageSR:c,size:t+","+r,...o,...n,...b}}async fetchImage(e,t,r,a){var s;const n={responseType:"image",signal:null!==(s=null===a||void 0===a?void 0:a.signal)&&void 0!==s?s:null,query:{...this.parsedUrl.query,...this.createExportImageParameters(e,t,r,a),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},l=this.parsedUrl.path+"/export";if(null!=n.query.dynamicLayers&&!this.capabilities.exportMap.supportsDynamicLayers)throw new o.a("mapimagelayer:dynamiclayer-not-supported","service ".concat(this.url," doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source."),{query:n.query});return Object(i.default)(l,n).then((e=>e.data)).catch((e=>{if(Object(y.j)(e))throw e;throw new o.a("mapimagelayer:image-fetch-error","Unable to load image: ".concat(l),{error:e})}))}async fetchRecomputedExtents(){const e={...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:t}=await Object(i.default)(this.url,e),{extent:r,fullExtent:a,timeExtent:o}=t,n=r||a;return{fullExtent:n&&j.a.fromJSON(n),timeExtent:o&&s.a.fromJSON({start:o[0],end:o[1]})}}loadAll(){return Object(l.a)(this,(e=>{e(this.allSublayers)}))}serviceSupportsSpatialReference(e){return Object(k.a)(this,e)}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:r}=await Object(i.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});r&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};Object(a.a)([Object(u.b)({type:Boolean})],U.prototype,"datesInUnknownTimezone",void 0),Object(a.a)([Object(u.b)()],U.prototype,"dpi",void 0),Object(a.a)([Object(u.b)()],U.prototype,"gdbVersion",void 0),Object(a.a)([Object(u.b)()],U.prototype,"imageFormat",void 0),Object(a.a)([Object(h.a)("imageFormat",["supportedImageFormatTypes"])],U.prototype,"readImageFormat",null),Object(a.a)([Object(u.b)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],U.prototype,"imageMaxHeight",void 0),Object(a.a)([Object(u.b)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],U.prototype,"imageMaxWidth",void 0),Object(a.a)([Object(u.b)()],U.prototype,"imageTransparency",void 0),Object(a.a)([Object(u.b)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],U.prototype,"isReference",void 0),Object(a.a)([Object(u.b)({json:{read:!1,write:!1}})],U.prototype,"labelsVisible",void 0),Object(a.a)([Object(u.b)({type:["ArcGISMapServiceLayer"]})],U.prototype,"operationalLayerType",void 0),Object(a.a)([Object(u.b)({json:{read:!1,write:!1}})],U.prototype,"popupEnabled",void 0),Object(a.a)([Object(u.b)()],U.prototype,"sourceJSON",void 0),Object(a.a)([Object(u.b)({json:{write:{ignoreOrigin:!0}}})],U.prototype,"sublayers",void 0),Object(a.a)([Object(m.a)("sublayers",{layers:{type:[M.a]},visibleLayers:{type:[p.a]}})],U.prototype,"writeSublayers",null),Object(a.a)([Object(u.b)({type:["show","hide","hide-children"]})],U.prototype,"listMode",void 0),Object(a.a)([Object(u.b)({json:{read:!1},readOnly:!0,value:"map-image"})],U.prototype,"type",void 0),Object(a.a)([Object(u.b)(F.o)],U.prototype,"url",void 0),U=Object(a.a)([Object(d.a)("esri.layers.MapImageLayer")],U);const V=U},870:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var a=r(136),i=r(162),s=r(201),o=r(134),n=r(404),l=r(139),c=(r(141),r(135),r(138),r(137)),b=r(241),y=r(537),u=r(577);const p={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let h=class extends(Object(s.b)(i.a)){constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const t=Object(y.b)(this.floors,e);return e.toExportImageJSON(t)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&Object(u.a)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(p[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){var e;const t=!(null===(e=this.floors)||void 0===e||!e.length),r=this.visibleSublayers.filter((e=>null!=e.definitionExpression||t&&null!=e.floorInfo));return r.length?JSON.stringify(r.reduce(((e,t)=>{const r=Object(y.b)(this.floors,t),a=Object(n.b)(r,t.definitionExpression);return Object(o.k)(a)&&(e[t.id]=a),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,r=t=>{const a=this.scale,i=0===a,s=0===t.minScale||a<=t.minScale,o=0===t.maxScale||a>=t.maxScale;t.visible&&(i||s&&o)&&(t.sublayers?t.sublayers.forEach(r):e.unshift(t))};t&&t.forEach(r);const a=this._get("visibleSublayers");return!a||a.length!==e.length||a.some(((t,r)=>e[r]!==t))?e:a}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};Object(a.a)([Object(l.b)({readOnly:!0})],h.prototype,"dynamicLayers",null),Object(a.a)([Object(l.b)()],h.prototype,"floors",void 0),Object(a.a)([Object(l.b)({readOnly:!0})],h.prototype,"hasDynamicLayers",null),Object(a.a)([Object(l.b)()],h.prototype,"layer",null),Object(a.a)([Object(l.b)({readOnly:!0})],h.prototype,"layers",null),Object(a.a)([Object(l.b)({readOnly:!0})],h.prototype,"layerDefs",null),Object(a.a)([Object(l.b)({type:Number})],h.prototype,"scale",void 0),Object(a.a)([Object(l.b)(b.a)],h.prototype,"timeExtent",void 0),Object(a.a)([Object(l.b)({readOnly:!0})],h.prototype,"version",null),Object(a.a)([Object(l.b)({readOnly:!0})],h.prototype,"visibleSublayers",null),h=Object(a.a)([Object(c.a)("esri.layers.mixins.ExportImageParameters")],h)}}]);