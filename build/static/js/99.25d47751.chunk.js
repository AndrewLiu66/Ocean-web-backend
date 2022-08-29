(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[99],{377:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));const o={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},378:function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return p})),r.d(e,"d",(function(){return a}));var o=r(136),i=r(148),s=r(377),n=r(346);function a(t){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?n.a:"esriGeometryPolyline"===t?n.c:n.b}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let c=1;function l(t,e){if(Object(o.a)("esri-csp-restrictions"))return()=>({[e]:null,...t});try{let r="this.".concat(e," = null;");for(const e in t)r+="this".concat(u.test(e)?".".concat(e):'["'.concat(e,'"]')," = ").concat(JSON.stringify(t[e]),";");const o=new Function("\n      return class AttributesClass$".concat(c++," {\n        constructor() {\n          ").concat(r,";\n        }\n      }\n    "))();return()=>new o}catch(r){return()=>({[e]:null,...t})}}function p(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:Object(i.a)(t)}}]}function d(t,e){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:e,supportsDelete:e,supportsEditing:e,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:e,supportsExceedsLimitStatistics:!0},query:s.a,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:e,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},672:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return F}));var o=r(137),i=(r(164),r(146)),s=r(135),n=r(168),a=r(140),u=(r(142),r(136)),c=(r(139),r(174)),l=r(138),p=r(381),d=r(328),y=r(149),h=r(434),b=r(274),O=r(161);let m=class extends d.a{constructor(t){super(t),this.type="csv",this.refresh=Object(y.f)((async t=>{await this.load();const{extent:e,timeExtent:r}=await this._connection.invoke("refresh",t);return this.sourceJSON.extent=e,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}))}load(t){const e=Object(s.k)(t)?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){var t;null!==(t=this._connection)&&void 0!==t&&t.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};await this.load(e);const r=await this._connection.invoke("queryFeatures",t?t.toJSON():null,e);return b.default.fromJSON(r)}async queryFeaturesJSON(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(e),this._connection.invoke("queryFeatures",t?t.toJSON():null,e)}async queryFeatureCount(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(e),this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e)}async queryObjectIds(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(e),this._connection.invoke("queryObjectIds",t?t.toJSON():null,e)}async queryExtent(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};await this.load(e);const r=await this._connection.invoke("queryExtent",t?t.toJSON():null,e);return{count:r.count,extent:O.a.fromJSON(r.extent)}}async querySnapping(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(e),this._connection.invoke("querySnapping",t,e)}async _startWorker(t){this._connection=await Object(h.b)("CSVSourceWorker",{strategy:Object(u.a)("feature-layers-workers")?"dedicated":"local",signal:t});const{url:e,delimiter:r,fields:o,latitudeField:i,longitudeField:s,spatialReference:n,timeInfo:a}=this.loadOptions,c=await this._connection.invoke("load",{url:e,customParameters:this.customParameters,parsingOptions:{delimiter:r,fields:null===o||void 0===o?void 0:o.map((t=>t.toJSON())),latitudeField:i,longitudeField:s,spatialReference:null===n||void 0===n?void 0:n.toJSON(),timeInfo:null===a||void 0===a?void 0:a.toJSON()}},{signal:t});this.locationInfo=c.locationInfo,this.sourceJSON=c.layerDefinition,this.delimiter=c.delimiter}};Object(o.a)([Object(a.b)()],m.prototype,"type",void 0),Object(o.a)([Object(a.b)()],m.prototype,"loadOptions",void 0),Object(o.a)([Object(a.b)()],m.prototype,"customParameters",void 0),Object(o.a)([Object(a.b)()],m.prototype,"locationInfo",void 0),Object(o.a)([Object(a.b)()],m.prototype,"sourceJSON",void 0),Object(o.a)([Object(a.b)()],m.prototype,"delimiter",void 0),m=Object(o.a)([Object(l.a)("esri.layers.graphics.sources.CSVSource")],m);var f=r(378),g=r(251),j=r(272),v=r(170);function w(t,e){throw new i.a(e,"CSVLayer (title: ".concat(t.title,", id: ").concat(t.id,") cannot be saved to a portal item"))}let S=class extends p.default{constructor(){super(...arguments),this.capabilities=Object(f.a)(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.portalItem=null,this.spatialReference=v.a.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(t,e){return"string"==typeof t?{url:t,...e}:t}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(t,e){return null!=e.showLabels?e.showLabels:!!(e.layerDefinition&&e.layerDefinition.drawingInfo&&e.layerDefinition.drawingInfo.labelingInfo)}set url(t){if(!t)return void this._set("url",t);const e=Object(n.M)(t);this._set("url",e.path),e.query&&(this.customParameters={...this.customParameters,...e.query})}async createGraphicsSource(t){const e=new m({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url},customParameters:this.customParameters});return this._set("source",e),await e.load({signal:t}),this.read({locationInfo:e.locationInfo,columnDelimiter:e.delimiter},{origin:"service",url:this.parsedUrl}),e}queryFeatures(t,e){return this.load().then((()=>this.source.queryFeatures(g.a.from(t)||this.createQuery()))).then((t=>{if(null!==t&&void 0!==t&&t.features)for(const e of t.features)e.layer=e.sourceLayer=this;return t}))}queryObjectIds(t,e){return this.load().then((()=>this.source.queryObjectIds(g.a.from(t)||this.createQuery())))}queryFeatureCount(t,e){return this.load().then((()=>this.source.queryFeatureCount(g.a.from(t)||this.createQuery())))}queryExtent(t,e){return this.load().then((()=>this.source.queryExtent(g.a.from(t)||this.createQuery())))}write(t,e){return super.write(t,{...e,writeLayerSchema:!0})}clone(){throw new i.a("csv-layer:clone","CSVLayer (title: ".concat(this.title,", id: ").concat(this.id,") cannot be cloned"))}async save(t){return w(this,"csv-layer:save")}async saveAs(t,e){return w(this,"csv-layer:save-as")}async hasDataChanged(){try{const{dataChanged:t,updates:e}=await this.source.refresh(this.customParameters);return Object(s.k)(e)&&this.read(e,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),t}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};Object(o.a)([Object(a.b)({readOnly:!0,json:{read:!1,write:!1}})],S.prototype,"capabilities",void 0),Object(o.a)([Object(a.b)({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],S.prototype,"delimiter",void 0),Object(o.a)([Object(a.b)({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],S.prototype,"editingEnabled",void 0),Object(o.a)([Object(a.b)({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],S.prototype,"fields",void 0),Object(o.a)([Object(a.b)({type:Boolean,readOnly:!0})],S.prototype,"isTable",null),Object(o.a)([Object(c.a)("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],S.prototype,"readWebMapLabelsVisible",null),Object(o.a)([Object(a.b)({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],S.prototype,"latitudeField",void 0),Object(o.a)([Object(a.b)({type:["show","hide"]})],S.prototype,"listMode",void 0),Object(o.a)([Object(a.b)({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],S.prototype,"locationType",void 0),Object(o.a)([Object(a.b)({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],S.prototype,"longitudeField",void 0),Object(o.a)([Object(a.b)({type:["CSV"]})],S.prototype,"operationalLayerType",void 0),Object(o.a)([Object(a.b)()],S.prototype,"outFields",void 0),Object(o.a)([Object(a.b)({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],S.prototype,"path",void 0),Object(o.a)([Object(a.b)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],S.prototype,"portalItem",void 0),Object(o.a)([Object(a.b)({json:{read:!1},cast:null,type:m,readOnly:!0})],S.prototype,"source",void 0),Object(o.a)([Object(a.b)({json:{read:!1},value:"csv",readOnly:!0})],S.prototype,"type",void 0),Object(o.a)([Object(a.b)({json:{read:j.f,write:{isRequired:!0,ignoreOrigin:!0,writer:j.h}}})],S.prototype,"url",null),S=Object(o.a)([Object(l.a)("esri.layers.CSVLayer")],S);const F=S}}]);