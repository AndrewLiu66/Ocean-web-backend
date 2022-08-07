(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[34],{1059:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var i=r(136),a=r(166),l=r(148),s=r(167),o=r(733),n=r(139),c=(r(141),r(135),r(138),r(173)),u=r(137),y=r(161),d=r(169),p=r(241);const b=e=>{let t=class extends e{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0}readCapabilities(e,t){var r,i;const a=t.capabilities&&t.capabilities.split(",").map((e=>e.toLowerCase().trim()));if(!a)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const l=this.type,s=a.includes("data"),n=a.includes("query"),c=a.includes("map"),u=!!t.exportTilesAllowed,y=a.includes("tilemap"),d="tile"!==l&&!!t.supportsDynamicLayers,p="tile"!==l&&(!t.tileInfo||d),b="tile"!==l&&(!t.tileInfo||d),f="tile"!==l,h=t.cimVersion&&o.a.parse(t.cimVersion),O=null!==(r=null===h||void 0===h?void 0:h.since(1,4))&&void 0!==r&&r,g=null!==(i=null===h||void 0===h?void 0:h.since(2,0))&&void 0!==i&&i;return{operations:{supportsExportMap:c,supportsExportTiles:u,supportsIdentify:n,supportsQuery:s,supportsTileMap:y},exportMap:c?{supportsArcadeExpressionForLabeling:O,supportsSublayersChanges:f,supportsDynamicLayers:d,supportsSublayerVisibility:p,supportsSublayerDefinitionExpression:b,supportsCIMSymbols:g}:null,exportTiles:u?{maxExportTilesCount:+t.maxExportTilesCount}:null}}readVersion(e,t){let r=t.currentVersion;return r||(r=t.hasOwnProperty("capabilities")||t.hasOwnProperty("tables")?10:t.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),r}async fetchSublayerInfo(e,t){return await this.fetchAllLayersAndTables(t),this._allLayersAndTablesMap.get(e)}async fetchAllLayersAndTables(e){await this.load(e),this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=Object(a.default)(Object(s.M)(this.url).path+"/layers",{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then((e=>{this._allLayersAndTablesMap=new Map;for(const t of e.data.layers)this._allLayersAndTablesMap.set(t.id,t);return{result:e.data}}),(e=>({error:e}))));const t=await this._allLayersAndTablesPromise;if(Object(l.p)(e),"result"in t)return t.result;throw t.error}};return Object(i.a)([Object(n.b)({readOnly:!0})],t.prototype,"capabilities",void 0),Object(i.a)([Object(c.a)("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],t.prototype,"readCapabilities",null),Object(i.a)([Object(n.b)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(i.a)([Object(n.b)({type:y.a})],t.prototype,"fullExtent",void 0),Object(i.a)([Object(n.b)(p.c)],t.prototype,"id",void 0),Object(i.a)([Object(n.b)({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],t.prototype,"legendEnabled",void 0),Object(i.a)([Object(n.b)(p.k)],t.prototype,"popupEnabled",void 0),Object(i.a)([Object(n.b)({type:d.a})],t.prototype,"spatialReference",void 0),Object(i.a)([Object(n.b)({readOnly:!0})],t.prototype,"version",void 0),Object(i.a)([Object(c.a)("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],t.prototype,"readVersion",null),t=Object(i.a)([Object(u.a)("esri.layers.mixins.ArcGISMapService")],t),t}},1060:function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));var i=r(136),a=r(185),l=r(444),s=r(145),o=r(143),n=r(158),c=r(139),u=(r(141),r(135),r(367)),y=(r(138),r(137)),d=r(344),p=r(899),b=r(577);const f=o.a.getLogger("esri.layers.TileLayer");const h=a.a.ofType(p.a);function O(e,t){e&&e.forEach((e=>{t(e),e.sublayers&&e.sublayers.length&&O(e.sublayers,t)}))}const g=e=>{let t=class extends e{constructor(){super(...arguments),this.allSublayers=new l.a({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.sublayersSourceJSON={[d.a.SERVICE]:{},[d.a.PORTAL_ITEM]:{},[d.a.WEB_SCENE]:{},[d.a.WEB_MAP]:{}},this.own(Object(n.f)((()=>this.sublayers),((e,t)=>this._handleSublayersChange(e,t)),n.d))}readSublayers(e,t){if(!t||!e)return;const{sublayersSourceJSON:r}=this,i=Object(d.e)(t.origin);if(i<d.a.SERVICE)return;if(r[i]={context:t,visibleLayers:e.visibleLayers||r[i].visibleLayers,layers:e.layers||r[i].layers},i>d.a.SERVICE)return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:a,origin:l}=this.createSublayersForOrigin("web-document"),s=Object(u.a)(this);s.setDefaultOrigin(l),this._set("sublayers",new h(a)),s.setDefaultOrigin("user")}findSublayerById(e){return this.allSublayers.find((t=>t.id===e))}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(e){const t=Object(d.e)("web-document"===e?"web-map":e);let r=d.a.SERVICE,i=this.sublayersSourceJSON[d.a.SERVICE].layers,a=this.sublayersSourceJSON[d.a.SERVICE].context,l=null;const s=[d.a.PORTAL_ITEM,d.a.WEB_SCENE,d.a.WEB_MAP].filter((e=>e<=t));for(const d of s){const e=this.sublayersSourceJSON[d];Object(b.b)(e.layers)&&(r=d,i=e.layers,a=e.context,e.visibleLayers&&(l={visibleLayers:e.visibleLayers,context:e.context}))}const o=[d.a.PORTAL_ITEM,d.a.WEB_SCENE,d.a.WEB_MAP].filter((e=>e>r&&e<=t));let n=null;for(const d of o){const{layers:e,visibleLayers:t,context:r}=this.sublayersSourceJSON[d];e&&(n={layers:e,context:r}),t&&(l={visibleLayers:t,context:r})}const c=function(e,t){const r=[],i={};return e?(e.forEach((e=>{const a=new p.a;if(a.read(e,t),i[a.id]=a,null!=e.parentLayerId&&-1!==e.parentLayerId){const t=i[e.parentLayerId];t.sublayers||(t.sublayers=[]),t.sublayers.unshift(a)}else r.unshift(a)})),r):r}(i,a),u=new Map,y=new Set;if(n)for(const d of n.layers)u.set(d.id,d);if(l)for(const d of l.visibleLayers)y.add(d);return O(c,(e=>{n&&e.read(u.get(e.id),n.context),l&&e.read({defaultVisibility:y.has(e.id)},l.context)})),{origin:Object(d.c)(r),sublayers:new h({items:c})}}read(e,t){super.read(e,t),this.readSublayers(e,t)}_handleSublayersChange(e,t){t&&(t.forEach((e=>{e.parent=null,e.layer=null})),this.handles.remove("sublayers-owner")),e&&(e.forEach((e=>{e.parent=this,e.layer=this})),this.handles.add([e.on("after-add",(e=>{let{item:t}=e;t.parent=this,t.layer=this})),e.on("after-remove",(e=>{let{item:t}=e;t.parent=null,t.layer=null}))],"sublayers-owner"),"tile"===this.type&&this.handles.add(e.on("before-changes",(e=>{f.error(new s.a("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),e.preventDefault()})),"sublayers-owner"))}};return Object(i.a)([Object(c.b)({readOnly:!0})],t.prototype,"allSublayers",void 0),Object(i.a)([Object(c.b)({readOnly:!0,type:a.a.ofType(p.a)})],t.prototype,"serviceSublayers",void 0),Object(i.a)([Object(c.b)({value:null,type:h,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],t.prototype,"sublayers",void 0),Object(i.a)([Object(c.b)({readOnly:!0})],t.prototype,"sublayersSourceJSON",void 0),t=Object(i.a)([Object(y.a)("esri.layers.mixins.SublayersOwner")],t),t}},577:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return l}));var i=r(134),a=r(344);function l(e,t,r){const i=t.flatten((e=>{let{sublayers:t}=e;return t})).length;return i!==e.length||(!!e.some((e=>e.originIdOf("minScale")>r||e.originIdOf("maxScale")>r||e.originIdOf("renderer")>r||e.originIdOf("labelingInfo")>r||e.originIdOf("opacity")>r||e.originIdOf("labelsVisible")>r||e.originIdOf("source")>r))||!o(e,t))}function s(e,t,r){return!!e.some((e=>{const t=e.source;return!(!t||"map-layer"===t.type&&t.mapLayerId===e.id&&(Object(i.j)(t.gdbVersion)||t.gdbVersion===r))||e.originIdOf("renderer")>a.a.SERVICE||e.originIdOf("labelingInfo")>a.a.SERVICE||e.originIdOf("opacity")>a.a.SERVICE||e.originIdOf("labelsVisible")>a.a.SERVICE}))||!o(e,t)}function o(e,t){if(!e||!e.length||Object(i.j)(t))return!0;const r=t.slice().reverse().flatten((e=>{let{sublayers:t}=e;return t&&t.toArray().reverse()})).map((e=>e.id)).toArray();if(e.length>r.length)return!1;let a=0;const l=r.length;for(const{id:i}of e){for(;a<l&&r[a]!==i;)a++;if(a>=l)return!1}return!0}function n(e){return!!e&&e.some((e=>null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale))}},899:function(e,t,r){"use strict";r.d(t,"a",(function(){return X}));var i,a=r(136),l=(r(163),r(255)),s=(r(371),r(424),r(439),r(440),r(436),r(346),r(412),r(389),r(403),r(445)),o=r(166),n=r(244),c=r(185),u=r(145),y=r(201),d=r(264),p=r(147),b=r(328),f=r(143),h=r(134),O=r(248),g=r(404),j=r(167),m=r(139),v=r(367),S=r(217),I=r(173),w=r(137),E=r(176),L=r(138),x=r(344),D=r(325),P=r(606),T=r(338),_=r(304),F=r(472),V=r(837),M=r(512),A=r(997),C=r(251),N=r(446),R=r(161);function k(e){return e&&"esriSMS"===e.type}function U(e,t,r){var i;const a=this.originIdOf(t)>=Object(x.e)(r.origin);return{ignoreOrigin:!0,allowNull:a,enabled:!!r&&"map-image"===(null===(i=r.layer)||void 0===i?void 0:i.type)&&(r.writeSublayerStructure||a)}}function J(e,t,r){var i;return{enabled:!!r&&"tile"===(null===(i=r.layer)||void 0===i?void 0:i.type)&&this._isOverridden(t)}}function B(e,t,r){return{ignoreOrigin:!0,enabled:r&&r.writeSublayerStructure||!1}}function q(e,t,r){return{ignoreOrigin:!0,enabled:!!r&&(r.writeSublayerStructure||this.originIdOf(t)>=Object(x.e)(r.origin))}}const Q=f.a.getLogger("esri.layers.support.Sublayer");let W=0;const G=new Set;G.add("layer"),G.add("parent"),G.add("loaded"),G.add("loadStatus"),G.add("loadError"),G.add("loadWarnings");let K=i=class extends(Object(y.b)(Object(O.a)(Object(d.a)(b.a)))){constructor(e){super(e),this.capabilities=void 0,this.fields=null,this.fullExtent=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.types=null}async load(e){return this.addResolvingPromise((async()=>{var t;if(!this.layer&&!this.url)throw new u.a("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});let r=null;if(!this.layer||this.originIdOf("url")>x.a.SERVICE||"data-layer"===(null===(t=this.source)||void 0===t?void 0:t.type))r=(await Object(o.default)(this.url,{responseType:"json",query:{f:"json"},...e})).data;else{var i;let t=this.id;"map-layer"===(null===(i=this.source)||void 0===i?void 0:i.type)&&(t=this.source.mapLayerId),r=await this.layer.fetchSublayerInfo(t,e)}r&&(this.sourceJSON=r,this.read({layerDefinition:r},{origin:"service"}))})()),this}readCapabilities(e,t){const r=(e=(t=t.layerDefinition||t).capabilities||e)?e.toLowerCase().split(",").map((e=>e.trim())):[],i=this.url?Object(D.f)(this.url):null,a=r.includes(Object(h.k)(i)&&"MapServer"===i.serverType?"data":"query");return{exportMap:{supportsModification:!!t.canModifyLayer},operations:{supportsQuery:a}}}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get fieldsIndex(){return new _.a(this.fields||[])}set floorInfo(e){this._setAndNotifyLayer("floorInfo",e)}readGlobalIdFieldFromService(e,t){if((t=t.layerDefinition||t).globalIdField)return t.globalIdField;if(t.fields)for(const r of t.fields)if("esriFieldTypeGlobalID"===r.type)return r.name}get id(){const e=this._get("id");return null==e?W++:e}set id(e){this._get("id")!==e&&(!1!==this.get("layer.capabilities.exportMap.supportsDynamicLayers")?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,t,r,i){e&&e.length&&(t.layerDefinition={drawingInfo:{labelingInfo:e.map((e=>e.write({},i)))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((t=>t.layer=e))}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,t){return t.minScale||t.layerDefinition&&t.layerDefinition.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,t){return t.maxScale||t.layerDefinition&&t.layerDefinition.maxScale||0}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}readObjectIdFieldFromService(e,t){if((t=t.layerDefinition||t).objectIdField)return t.objectIdField;if(t.fields)for(const r of t.fields)if("esriFieldTypeOID"===r.type)return r.name}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,t){const r=t.layerDefinition;return 1-.01*(null!=r.transparency?r.transparency:r.drawingInfo.transparency)}writeOpacity(e,t,r,i){t.layerDefinition={drawingInfo:{transparency:100-100*e}}}writeParent(e,t){this.parent&&this.parent!==this.layer?t.parentLayerId=Object(L.e)(this.parent.id):t.parentLayerId=-1}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){if(e)for(const t of e.getSymbols())if(Object(n.c)(t)){Q.warn("Sublayer renderer should use 2D symbols");break}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new A.a({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return Object(L.m)(c.a.ofType(i),e)}writeSublayers(e,t,r){this.get("sublayers.length")&&(t[r]=this.sublayers.map((e=>e.id)).toArray().reverse())}readTypeIdField(e,t){let r=(t=t.layerDefinition||t).typeIdField;if(r&&t.fields){r=r.toLowerCase();const e=t.fields.find((e=>e.name.toLowerCase()===r));e&&(r=e.name)}return null}get url(){var e,t;const r=null!==(e=null===(t=this.layer)||void 0===t?void 0:t.parsedUrl)&&void 0!==e?e:this._lastParsedUrl,i=this.source;if(!r)return null;if(this._lastParsedUrl=r,"map-layer"===(null===i||void 0===i?void 0:i.type))return"".concat(r.path,"/").concat(i.mapLayerId);const a={layer:JSON.stringify({source:this.source})};return"".concat(r.path,"/dynamicLayer?").concat(Object(j.G)(a))}set url(e){e?this._override("url",e):this._clearOverride("url")}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,t,r,i){t[r]=this.getAtOrigin("defaultVisibility","service")||e}clone(){const{store:e}=Object(v.a)(this),t=new i;return Object(v.a)(t).store=e.clone(G),this.commitProperty("url"),t._lastParsedUrl=this._lastParsedUrl,t}createPopupTemplate(e){return Object(N.a)(this,e)}createQuery(){return new C.a({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var e,t;if(this.hasOwnProperty("sublayers"))return null;const i=null===(e=this.layer)||void 0===e?void 0:e.parsedUrl,a=new(0,(await Promise.resolve().then(r.bind(null,381))).default)({url:i.path});return i&&this.source&&("map-layer"===this.source.type?a.layerId=this.source.mapLayerId:a.dynamicDataSource=this.source),null!=this.layer.refreshInterval&&(a.refreshInterval=this.layer.refreshInterval),this.definitionExpression&&(a.definitionExpression=this.definitionExpression),this.floorInfo&&(a.floorInfo=Object(p.a)(this.floorInfo)),this.originIdOf("labelingInfo")>x.a.SERVICE&&(a.labelingInfo=Object(p.a)(this.labelingInfo)),this.originIdOf("labelsVisible")>x.a.DEFAULTS&&(a.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>x.a.DEFAULTS&&(a.legendEnabled=this.legendEnabled),this.originIdOf("visible")>x.a.DEFAULTS&&(a.visible=this.visible),this.originIdOf("minScale")>x.a.DEFAULTS&&(a.minScale=this.minScale),this.originIdOf("maxScale")>x.a.DEFAULTS&&(a.maxScale=this.maxScale),this.originIdOf("opacity")>x.a.DEFAULTS&&(a.opacity=this.opacity),this.originIdOf("popupTemplate")>x.a.DEFAULTS&&(a.popupTemplate=Object(p.a)(this.popupTemplate)),this.originIdOf("renderer")>x.a.SERVICE&&(a.renderer=Object(p.a)(this.renderer)),"data-layer"===(null===(t=this.source)||void 0===t?void 0:t.type)&&(a.dynamicDataSource=this.source.clone()),this.originIdOf("title")>x.a.DEFAULTS&&(a.title=this.title),"map-image"===this.layer.type&&this.layer.originIdOf("customParameters")>x.a.DEFAULTS&&(a.customParameters=this.layer.customParameters),"tile"===this.layer.type&&this.layer.originIdOf("customParameters")>x.a.DEFAULTS&&(a.customParameters=this.layer.customParameters),a}getField(e){return this.fieldsIndex.get(e)}getFeatureType(e){const{typeIdField:t,types:r}=this;if(!t||!e)return null;const i=e.attributes?e.attributes[t]:void 0;if(null==i)return null;let a=null;return r.some((e=>{const{id:t}=e;return null!=t&&(t.toString()===i.toString()&&(a=e),!!a)})),a}getFieldDomain(e,t){const r=t&&t.feature,i=this.getFeatureType(r);if(i){const t=i.domains&&i.domains[e];if(t&&"inherited"!==t.type)return t}return this._getLayerDomain(e)}async queryFeatures(){var e,t,i,a,l,s;let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.createQuery(),n=arguments.length>1?arguments[1]:void 0;if(await this.load(),null===(e=this.capabilities)||void 0===e||null===(t=e.operations)||void 0===t||!t.supportsQuery)throw new u.a("Sublayer.queryFeatures","this layer doesn't support queries.");const[{executeQuery:c},{default:y}]=await Promise.all([Promise.resolve().then(r.bind(null,394)),Promise.resolve().then(r.bind(null,273))]),d=await c(this.url,C.a.from(o),null!==(i=null===(a=this.layer)||void 0===a?void 0:a.spatialReference)&&void 0!==i?i:null,{...n,query:{...null===(l=this.layer)||void 0===l?void 0:l.customParameters,token:null===(s=this.layer)||void 0===s?void 0:s.apiKey}}),p=y.fromJSON(d.data);if(null!==p&&void 0!==p&&p.features)for(const r of p.features)r.sourceLayer=this;return p}toExportImageJSON(e){var t;const r={id:this.id,source:(null===(t=this.source)||void 0===t?void 0:t.toJSON())||{mapLayerId:this.id,type:"mapLayer"}},i=Object(g.b)(e,this.definitionExpression);Object(h.k)(i)&&(r.definitionExpression=i);const a=["renderer","labelingInfo","opacity","labelsVisible"].reduce(((e,t)=>(e[t]=this.originIdOf(t),e)),{}),l=Object.keys(a).some((e=>a[e]>x.a.SERVICE));if(l){const e=r.drawingInfo={};a.renderer>x.a.SERVICE&&(e.renderer=this.renderer?this.renderer.toJSON():null),a.labelsVisible>x.a.SERVICE&&(e.showLabels=this.labelsVisible),this.labelsVisible&&a.labelingInfo>x.a.SERVICE&&(e.labelingInfo=this.labelingInfo?this.labelingInfo.map((e=>e.write({},{origin:"service",layer:this.layer}))):null,e.showLabels=!0),a.opacity>x.a.SERVICE&&(e.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(e.renderer)}return r}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,(e=>{e.color||"esriSMSX"!==e.style&&"esriSMSCross"!==e.style||(e.outline&&e.outline.color?e.color=e.outline.color:e.color=[0,0,0,0])}))}_forEachSimpleMarkerSymbols(e,t){if(e){const r="uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:[];for(const e of r)k(e.symbol)&&t(e.symbol);"symbol"in e&&k(e.symbol)&&t(e.symbol),"defaultSymbol"in e&&k(e.defaultSymbol)&&t(e.defaultSymbol)}}_setAndNotifyLayer(e,t){const r=this.layer,i=this._get(e);let a,l;switch(e){case"definitionExpression":case"floorInfo":a="supportsSublayerDefinitionExpression";case"minScale":case"maxScale":case"visible":a="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":a="supportsDynamicLayers",l="supportsModification"}const s=Object(v.a)(this).getDefaultOrigin();if("service"!==s){if(a&&!1===this.get("layer.capabilities.exportMap.".concat(a)))return void this._logLockedError(e,"capability not available 'layer.capabilities.exportMap.".concat(a,"'"));if(l&&!1===this.get("capabilities.exportMap.".concat(l)))return void this._logLockedError(e,"capability not available 'capabilities.exportMap.".concat(l,"'"))}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,t),"service"!==s&&i!==t&&r&&r.emit&&r.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,t){t&&(t.forEach((e=>{e.parent=null,e.layer=null})),this.handles.removeAll()),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this.handles.add([e.on("after-add",(e=>{let{item:t}=e;t.parent=this,t.layer=this.layer})),e.on("after-remove",(e=>{let{item:t}=e;t.parent=null,t.layer=null})),e.on("before-changes",(e=>{const t=this.get("layer.capabilities.exportMap.supportsSublayersChanges");null==t||t||(Q.error(new u.a("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),e.preventDefault())}))]))}_logLockedError(e,t){Q.error(new u.a("sublayer:locked","Property '".concat(String(e),"' can't be changed on Sublayer from the layer '").concat(this.layer.id,"'"),{reason:t,sublayer:this,layer:this.layer}))}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};K.test={isMapImageLayerOverridePolicy:e=>e===B||e===U,isTileImageLayerOverridePolicy:e=>e===J},Object(a.a)([Object(m.b)({readOnly:!0})],K.prototype,"capabilities",void 0),Object(a.a)([Object(I.a)("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],K.prototype,"readCapabilities",null),Object(a.a)([Object(m.b)({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:U}}})],K.prototype,"definitionExpression",null),Object(a.a)([Object(m.b)({type:[T.a],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],K.prototype,"fields",void 0),Object(a.a)([Object(m.b)({readOnly:!0})],K.prototype,"fieldsIndex",null),Object(a.a)([Object(m.b)({type:V.a,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:U},origins:{"web-scene":{read:!1,write:!1}}}})],K.prototype,"floorInfo",null),Object(a.a)([Object(m.b)({type:R.a,json:{read:{source:"layerDefinition.extent"}}})],K.prototype,"fullExtent",void 0),Object(a.a)([Object(m.b)({type:String})],K.prototype,"globalIdField",void 0),Object(a.a)([Object(I.a)("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],K.prototype,"readGlobalIdFieldFromService",null),Object(a.a)([Object(m.b)({type:L.a,json:{write:{ignoreOrigin:!0}}})],K.prototype,"id",null),Object(a.a)([Object(m.b)({value:null,type:[F.a],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:B}}})],K.prototype,"labelingInfo",null),Object(a.a)([Object(E.a)("labelingInfo")],K.prototype,"writeLabelingInfo",null),Object(a.a)([Object(m.b)({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:B}}})],K.prototype,"labelsVisible",null),Object(a.a)([Object(m.b)({value:null})],K.prototype,"layer",null),Object(a.a)([Object(m.b)({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:q}}})],K.prototype,"legendEnabled",void 0),Object(a.a)([Object(m.b)({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],K.prototype,"listMode",null),Object(a.a)([Object(m.b)({type:Number,value:0,json:{write:{overridePolicy:B}}})],K.prototype,"minScale",null),Object(a.a)([Object(I.a)("minScale",["minScale","layerDefinition.minScale"])],K.prototype,"readMinScale",null),Object(a.a)([Object(m.b)({type:Number,value:0,json:{write:{overridePolicy:B}}})],K.prototype,"maxScale",null),Object(a.a)([Object(I.a)("maxScale",["maxScale","layerDefinition.maxScale"])],K.prototype,"readMaxScale",null),Object(a.a)([Object(m.b)({readOnly:!0})],K.prototype,"effectiveScaleRange",null),Object(a.a)([Object(m.b)({type:String})],K.prototype,"objectIdField",void 0),Object(a.a)([Object(I.a)("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],K.prototype,"readObjectIdFieldFromService",null),Object(a.a)([Object(m.b)({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:B}}})],K.prototype,"opacity",null),Object(a.a)([Object(I.a)("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],K.prototype,"readOpacity",null),Object(a.a)([Object(E.a)("opacity")],K.prototype,"writeOpacity",null),Object(a.a)([Object(m.b)({json:{type:L.a,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:B}}})],K.prototype,"parent",void 0),Object(a.a)([Object(E.a)("parent")],K.prototype,"writeParent",null),Object(a.a)([Object(m.b)({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,t)=>!t.disablePopup},write:{target:"disablePopup",overridePolicy:q,writer(e,t,r){t[r]=!e}}}})],K.prototype,"popupEnabled",void 0),Object(a.a)([Object(m.b)({type:l.a,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:q}}})],K.prototype,"popupTemplate",void 0),Object(a.a)([Object(m.b)({readOnly:!0})],K.prototype,"defaultPopupTemplate",null),Object(a.a)([Object(m.b)({types:s.a,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:B},origins:{"web-scene":{types:s.b,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:B}}}}})],K.prototype,"renderer",null),Object(a.a)([Object(m.b)({types:{key:"type",base:null,typeMap:{"data-layer":M.a,"map-layer":A.a}},cast(e){if(e){if("mapLayerId"in e)return Object(L.d)(A.a,e);if("dataSource"in e)return Object(L.d)(M.a,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:B}}})],K.prototype,"source",null),Object(a.a)([Object(m.b)()],K.prototype,"sourceJSON",void 0),Object(a.a)([Object(m.b)({value:null,json:{type:[L.a],write:{target:"subLayerIds",allowNull:!0,overridePolicy:B}}})],K.prototype,"sublayers",null),Object(a.a)([Object(S.a)("sublayers")],K.prototype,"castSublayers",null),Object(a.a)([Object(E.a)("sublayers")],K.prototype,"writeSublayers",null),Object(a.a)([Object(m.b)({type:String,json:{name:"name",write:{overridePolicy:q}}})],K.prototype,"title",void 0),Object(a.a)([Object(m.b)({type:String})],K.prototype,"typeIdField",void 0),Object(a.a)([Object(I.a)("typeIdField",["layerDefinition.typeIdField"])],K.prototype,"readTypeIdField",null),Object(a.a)([Object(m.b)({type:[P.a],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],K.prototype,"types",void 0),Object(a.a)([Object(m.b)({type:String,json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:J}}})],K.prototype,"url",null),Object(a.a)([Object(m.b)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:B}}})],K.prototype,"visible",null),Object(a.a)([Object(E.a)("visible")],K.prototype,"writeVisible",null),K=i=Object(a.a)([Object(w.a)("esri.layers.support.Sublayer")],K);const X=K}}]);