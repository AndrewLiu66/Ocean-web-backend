(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[87],{1190:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return I}));var i=n(166),s=n(145),r=n(143),o=n(134),a=n(148),u=n(153),c=n(170),l=n(174),d=n(676),p=n(265),y=n(530),h=n(468),f=n(378),g=n(623),m=n(304),b=n(523),j=n(234);const _={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class I{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;null!==(e=this._queryEngine)&&void 0!==e&&e.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.loadOptions={url:e.url,customParameters:e.customParameters};const n=[];await this._checkProjection(e.spatialReference);let i=null;e.url&&(i=await this._fetch(null===t||void 0===t?void 0:t.signal));const r=Object(h.c)(i,{geometryType:e.geometryType}),o=e.fields||r.fields||[],a=null!=e.hasZ?e.hasZ:r.hasZ,u=r.geometryType,l=e.objectIdField||r.objectIdFieldName||"__OBJECTID",p=e.spatialReference||c.b;let g=e.timeInfo;o===r.fields&&r.unknownFields.length>0&&n.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:r.unknownFields}});let I=o.find((e=>e.name===l));I?("esriFieldTypeString"!==I.type&&(I.type="esriFieldTypeOID"),I.editable=!1,I.nullable=!1):(I={alias:l,name:l,type:"string"===r.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(I));const O={};for(const c of o){if(null==c.name&&(c.name=c.alias),null==c.alias&&(c.alias=c.name),!c.name)throw new s.a("geojson-layer:invalid-field-name","field name is missing",{field:c});if(!b.a.jsonValues.includes(c.type))throw new s.a("geojson-layer:invalid-field-type",'invalid type for field "'.concat(c.name,'"'),{field:c});if(c.name!==I.name){const e=Object(j.o)(c);void 0!==e&&(O[c.name]=e)}}this._fieldsIndex=new m.a(o);const w=this._fieldsIndex.requiredFields.indexOf(I);if(w>-1&&this._fieldsIndex.requiredFields.splice(w,1),g){if(g.startTimeField){const e=this._fieldsIndex.get(g.startTimeField);e?(g.startTimeField=e.name,e.type="esriFieldTypeDate"):g.startTimeField=null}if(g.endTimeField){const e=this._fieldsIndex.get(g.endTimeField);e?(g.endTimeField=e.name,e.type="esriFieldTypeDate"):g.endTimeField=null}if(g.trackIdField){const e=this._fieldsIndex.get(g.trackIdField);e?g.trackIdField=e.name:(g.trackIdField=null,n.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:g}}))}g.startTimeField||g.endTimeField||(n.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:g}}),g=null)}const F=u?Object(f.d)(u):null,E={warnings:n,featureErrors:[],layerDefinition:{..._,drawingInfo:F,templates:Object(f.c)(O),extent:null,geometryType:u,objectIdField:l,fields:o,hasZ:!!a,timeInfo:g}};this._queryEngine=new y.a({fields:o,geometryType:u,hasM:!1,hasZ:a,objectIdField:l,spatialReference:p,timeInfo:g,featureStore:new d.a({geometryType:u,hasM:!1,hasZ:a}),cacheSpatialQueries:!0}),this._createDefaultAttributes=Object(f.b)(O,l);const T=await this._createFeatures(i);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,T);const S=this._normalizeFeatures(T,E.warnings,E.featureErrors);if(this._queryEngine.featureStore.addMany(S),E.layerDefinition.extent=this._queryEngine.fullExtent,E.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;E.layerDefinition.timeInfo.timeExtent=[e,t]}return E}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Promise.all([Object(g.c)(t,n),Object(p.a)(e.adds,t),Object(p.a)(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this.loadOptions.customParameters=e,null!==(t=this._snapshotTask)&&void 0!==t&&t.abort(),this._snapshotTask=Object(a.e)(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,e);const t=this._normalizeFeatures(e);t&&this._queryEngine.featureStore.addMany(t)}),(e=>{this._queryEngine.featureStore.clear(),Object(a.j)(e)||r.a.getLogger("esri.layers.GeoJSONLayer").error(new s.a("geojson-layer:refresh","An error occurred during refresh",{error:e}))})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _createFeatures(e){const{geometryType:t,hasZ:n,objectIdField:i}=this._queryEngine,s=Object(h.a)(e,{geometryType:t,hasZ:n,objectIdField:i});if(!Object(c.d)(this._queryEngine.spatialReference,c.b))for(const r of s)Object(o.k)(r.geometry)&&(r.geometry=Object(l.d)(Object(p.b)(Object(l.k)(r.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),c.b,this._queryEngine.spatialReference)));return s}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:n}=this.loadOptions,s=(await Object(i.default)(t,{responseType:"json",query:{...n},signal:e})).data;return await Object(h.d)(s),s}_normalizeFeatures(e,t,n){const{objectIdField:i}=this._queryEngine,s=[];for(const r of e){const e=this._createDefaultAttributes(),o=Object(g.d)(this._fieldsIndex,e,r.attributes,!0,t);o?null===n||void 0===n||n.push(o):(this._assignObjectId(e,r.attributes,!0),r.attributes=e,r.objectId=e[i],s.push(r))}return s}_applyEdits(e){const{adds:t,updates:n,deletes:i}=e,s={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(s,t),n&&n.length&&this._applyUpdateEdits(s,n),i&&i.length){for(const e of i)s.deleteResults.push(Object(g.b)(e));this._queryEngine.featureStore.removeManyById(i)}return{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:s}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:i,hasM:s,hasZ:r,objectIdField:a,spatialReference:c,featureStore:d}=this._queryEngine,y=[];for(const l of t){if(l.geometry&&i!==Object(u.c)(l.geometry)){n.push(Object(g.a)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),s=Object(g.d)(this._fieldsIndex,t,l.attributes);if(s)n.push(s);else{if(this._assignObjectId(t,l.attributes),l.attributes=t,null!=l.uid){const t=l.attributes[a];e.uidToObjectId[l.uid]=t}Object(o.k)(l.geometry)&&(l.geometry=Object(p.b)(Object(g.e)(l.geometry,c),l.geometry.spatialReference,c)),y.push(l),n.push(Object(g.b)(l.attributes[a]))}}d.addMany(Object(l.c)([],y,i,r,s,a))}_applyUpdateEdits(e,t){let{updateResults:n}=e;const{geometryType:i,hasM:s,hasZ:r,objectIdField:a,spatialReference:c,featureStore:d}=this._queryEngine;for(const y of t){const{attributes:e,geometry:t}=y,h=e&&e[a];if(null==h){n.push(Object(g.a)("Identifier field ".concat(a," missing")));continue}if(!d.has(h)){n.push(Object(g.a)("Feature with object id ".concat(h," missing")));continue}const f=Object(l.i)(d.getFeature(h),i,r,s);if(Object(o.k)(t)){if(i!==Object(u.c)(t)){n.push(Object(g.a)("Incorrect geometry type."));continue}f.geometry=Object(p.b)(Object(g.e)(t,c),t.spatialReference,c)}if(e){const t=Object(g.d)(this._fieldsIndex,f.attributes,e);if(t){n.push(t);continue}}d.add(Object(l.a)(f,i,r,s,a)),n.push(Object(g.b)(h))}}_createObjectIdGenerator(e,t){const n=e.fieldsIndex.get(e.objectIdField);if("esriFieldTypeString"===n.type)return()=>n.name+"-"+Date.now().toString(16);let i=Number.NEGATIVE_INFINITY;for(const s of t)s.objectId&&(i=Math.max(i,s.objectId));return i=Math.max(0,i)+1,()=>i++}_assignObjectId(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const i=this._queryEngine.objectIdField;e[i]=n&&i in t?t[i]:this._objectIdGenerator()}async _checkProjection(e){try{await Object(p.a)(c.b,e)}catch{throw new s.a("geojson-layer","Projection not supported")}}}},378:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return a}));var i=n(135),s=n(147),r=n(377),o=n(347);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.a:"esriGeometryPolyline"===e?o.c:o.b}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let c=1;function l(e,t){if(Object(i.a)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let n="this.".concat(t," = null;");for(const t in e)n+="this".concat(u.test(t)?".".concat(t):'["'.concat(t,'"]')," = ").concat(JSON.stringify(e[t]),";");const i=new Function("\n      return class AttributesClass$".concat(c++," {\n        constructor() {\n          ").concat(n,";\n        }\n      }\n    "))();return()=>new i}catch(n){return()=>({[t]:null,...e})}}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:Object(s.a)(e)}}]}function p(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:r.a,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},468:function(e,t,n){"use strict";n.d(t,"a",(function(){return w})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return I}));var i=n(145),s=n(329),r=n(197),o=n(234);const a={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function u(e){return a[e]}function*c(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*l(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function d(e){for(const t of e)if(t.length>2)return!0;return!1}function p(e){let t=0;for(let n=0;n<e.length;n++){const i=e[n],s=e[(n+1)%e.length];t+=i[0]*s[1]-s[0]*i[1]}return t<=0}function y(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function h(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return m(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const i of t.coordinates)m(e,i,n);return e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const i of t.coordinates){f(e,i[0],n);for(let t=1;t<i.length;t++)g(e,i[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return j(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const i=t.coordinates;f(e,i[0],n);for(let s=1;s<i.length;s++)g(e,i[s],n);return e}(e,t,n)}}function f(e,t,n){const i=y(t);!function(e){return!p(e)}(i)?m(e,i,n):b(e,i,n)}function g(e,t,n){const i=y(t);!function(e){return p(e)}(i)?m(e,i,n):b(e,i,n)}function m(e,t,n){for(const i of t)j(e,i,n);e.lengths.push(t.length)}function b(e,t,n){for(let i=t.length-1;i>=0;i--)j(e,t[i],n);e.lengths.push(t.length)}function j(e,t,n){const[i,s,r]=t;e.coords.push(i,s),n.hasZ&&e.coords.push(r||0)}function _(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function I(e){if(!e)throw new i.a("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new i.a("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:t}=e;if(!t)return;const n="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,s=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!s.test(n))throw new i.a("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function O(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=[],i=new Set,s=new Set;let r,a=!1,p=null,y=!1,{geometryType:h=null}=t,f=!1;for(const o of c(e)){const{geometry:e,properties:t,id:c}=o;if((!e||(h||(h=u(e.type)),u(e.type)===h))&&(a||(a=d(l(e))),y||(y=null!=c,y&&(r=typeof c,p=Object.keys(t).filter((e=>t[e]===c)))),y&&null!=c&&(p.length>1?p=p.filter((e=>t[e]===c)):1===p.length&&(p=t[p[0]]===c?p:[])),!f&&t)){let e=!0;for(const r in t){if(i.has(r))continue;const o=t[r];if(null==o){e=!1,s.add(r);continue}const a=_(o);"unknown"!==a?(s.delete(r),i.add(r),n.push({name:r,alias:r,type:a})):s.add(r)}f=e}}const g=p&&1===p.length&&p[0]||null;if(g)for(const u of n)if(u.name===g&&Object(o.p)(u)){u.type="esriFieldTypeOID";break}return{fields:n,geometryType:h,hasZ:a,objectIdFieldName:g,objectIdFieldType:r,unknownFields:Array.from(s)}}function w(e,t){return Array.from(function*(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{geometryType:n,objectIdField:i}=t;for(const a of e){var o;const{geometry:e,properties:c,id:l}=a;if(e&&u(e.type)!==n)continue;const d=c||{};let p=null!==(o=d[i])&&void 0!==o?o:null;i&&null!=l&&!d[i]&&(d[i]=p=l);const y=new s.a(e?h(new r.a,e,t):null,d,null,p);yield y}}(c(e),t))}},623:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return g})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return f}));var i=n(134),s=n(170),r=n(234);class o{constructor(){this.code=null,this.description=null}}class a{constructor(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function u(e){return new a(e)}class c{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function l(e){return new c(e)}const d=new Set;function p(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=arguments.length>4?arguments[4]:void 0;d.clear();for(const o in n){const a=e.get(o);if(!a)continue;const c=n[o],l=y(a,c);if(l!==c&&s&&s.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:a,originalValue:c,sanitizedValue:l}}),d.add(a.name),a&&(i||a.editable)){const e=Object(r.v)(a,l);if(e)return u(Object(r.w)(e,a,l));t[a.name]=l}}for(const r of e.requiredFields)if(!d.has(r.name))return u('missing required field "'.concat(r.name,'"'));return null}function y(e,t){let n=t;return"string"==typeof t&&Object(r.p)(e)?n=parseFloat(t):null!=t&&Object(r.r)(e)&&"string"!=typeof t&&(n=String(t)),Object(r.t)(n)}let h;function f(e,t){if(!e||!Object(s.l)(t))return e;if("rings"in e||"paths"in e){if(Object(i.j)(h))throw new TypeError("geometry engine not loaded");return h.simplify(t,e)}return e}async function g(e,t){!Object(s.l)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return Object(i.j)(h)&&(h=await Promise.all([n.e(5),n.e(12)]).then(n.bind(null,535))),h}()}}}]);