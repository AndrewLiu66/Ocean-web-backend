(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[115],{1218:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return M}));n(163);var i=n(166),s=n(145),r=n(143),o=n(148),a=n(167),l=n(239),u=n(305),c=n(170),d=n(294),p=n(329),f=n(197),y=n(676),h=n(265),m=n(530);const g=/^\s*"([\S\s]*)"\s*$/,F=/""/g,b=[","," ",";","|","\t"];function*_(e,t,n){let i=0;for(;i<=e.length;){const s=e.indexOf(t,i),r=e.substring(i,s>-1?s:void 0);i+=r.length+t.length,n&&!r.trim()||(yield r)}}function w(e){const t=e.includes("\r\n")?"\r\n":"\n";return _(e,t,!0)}function I(e,t){return _(e,t,!1)}function*N(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:()=>Object.create(null),s="",r="",o=0,a=i(),l=0;e:for(const u of e){const e=I(u,n);for(const u of e)if(s+=r+u,r="",o+=T(u),o%2==0){if(o>0){const e=g.exec(s);if(!e){a=i(),l=0,s="",o=0;continue e}a[t[l]]=e[1].replace(F,'"'),l++}else a[t[l]]=s,l++;s="",o=0}else r=n;0===o?(yield a,a=i(),l=0):r="\n"}}function T(e){let t=0,n=0;for(n=e.indexOf('"',n);n>=0;)t++,n=e.indexOf('"',n+1);return t}var x=n(378),v=n(827);function E(e){if(!e.length)return"string";const t=/[^+-.,0-9]/;return e.map((e=>{let n=!1;if(""!==e){if(t.test(e))n=!0;else{let t=j(e);if(!isNaN(t))return/[.,]/.test(e)||!Number.isInteger(t)||t>214783647||t<-214783648?"double":"integer";if(e.includes("E")){if(t=Number(e),!isNaN(t))return"double";if(e.includes(",")){if(e=e.replace(",","."),t=Number(e),!isNaN(t))return"double";n=!0}else n=!0}else n=!0}return n?/^[-]?\d*[.,]?\d*$/.test(e)?"string":O(new Date(e),e)?"date":"string":"string"}})).reduce(((e,t)=>void 0===e||e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0))}function O(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;let n=!0;if(!C&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,i=0;for(;!t&&i<=e.length;)t=!S.test(e[i]),i++;n=!t}}return n}const j=function(){const e=Object(v.a)(),t=new RegExp("^"+e.regexp+"$"),n=new RegExp("["+e.group+"\\s\\xa0]","g"),i=e.factor;return s=>{const r=t.exec(s);if(e.factor=i,!r)return NaN;let o=r[1];if(!r[1]){if(!r[2])return NaN;o=r[2],e.factor*=-1}return o=o.replace(n,"").replace(e.decimal,"."),+o*e.factor}}(),S=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,C=Number.isNaN(new Date("technology 10").getTime()),q=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point-y"],D=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point-x"];var k=n(304),P=n(234),A=n(169);const V=Object(x.d)("esriGeometryPoint"),G=["csv"],R=[0,0];class Q{constructor(e,t){this.x=e,this.y=t}}class M{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;null!==(e=this._queryEngine)&&void 0!==e&&e.destroy(),this._queryEngine=null}async load(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.loadOptions=e;const[i]=await Promise.all([this._fetch(n.signal),this._checkProjection(null===e||void 0===e||null===(t=e.parsingOptions)||void 0===t?void 0:t.spatialReference)]),r=function(e,t){const n=t.parsingOptions||{},i={delimiter:n.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:n.latitudeField,longitudeFieldName:n.longitudeField}},r=w(e);let o=r.next().value;if(!o)throw new s.a("csv-layer:empty-csv","CSV is empty",{csv:e});if(o=o.trim(),!n.delimiter){const e=function(e){const t=e.trim();let n=0,i="";for(const s of b){const e=t.split(s).length;e>n&&(n=e,i=s)}return""===i?null:i}(o);if(!e)throw new s.a("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV");i.delimiter=e}const l=o.split(i.delimiter).filter((e=>!!e)),u=i.layerDefinition={name:Object(a.m)(t.url,G)||"csv",drawingInfo:V,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:n.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:n.spatialReference||{wkid:102100}}};if(!n.latitudeField||!n.longitudeField){const e=function(e){const t=e.map((e=>e.toLowerCase()));return{longitudeFieldName:e[t.indexOf(D.find((e=>t.includes(e))))],latitudeFieldName:e[t.indexOf(q.find((e=>t.includes(e))))]}}(l);if(!n.longitudeField&&!e.longitudeFieldName||!n.latitudeField&&!e.latitudeFieldName)throw new s.a("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file");i.locationInfo={longitudeFieldName:n.longitudeField||e.longitudeFieldName,latitudeFieldName:n.latitudeField||e.latitudeFieldName}}const c=function(e,t,n,i){const s=[],r=N(e,n,t),o=[];for(const a of r){if(10===o.length)break;o.push(a)}for(const a of n)if(a===i.longitudeFieldName||a===i.latitudeFieldName)s.push({name:a,type:"esriFieldTypeDouble",alias:a});else{const e=E(o.map((e=>e[a]))),t={name:a,type:null,alias:a};switch(e){case"integer":t.type="esriFieldTypeInteger";break;case"double":t.type="esriFieldTypeDouble";break;case"date":t.type="esriFieldTypeDate",t.length=36;break;default:t.type="esriFieldTypeString",t.length=255}s.push(t)}return s}(r,i.delimiter,l,i.locationInfo);if(n.fields&&n.fields.length){const e=new Map;for(const t of n.fields)e.set(t.name.toLowerCase(),t);for(const t of c){const n=e.get(t.name.toLowerCase());if(n){const e=t.name;Object.assign(t,n),t.name=e}}}if(u.fields=c,!u.fields.some((e=>"esriFieldTypeOID"===e.type&&(u.objectIdField=e.name,!0)))){const e={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};u.objectIdField=e.name,u.fields.unshift(e)}if(u.timeInfo){const e=new k.a(u.fields),t=u.timeInfo;if(t.startTimeField){const n=e.get(t.startTimeField);n?(t.startTimeField=n.name,n.type="esriFieldTypeDate"):t.startTimeField=null}if(t.endTimeField){const n=e.get(t.endTimeField);n?(t.endTimeField=n.name,n.type="esriFieldTypeDate"):t.endTimeField=null}if(t.trackIdField){const n=e.get(t.trackIdField);t.trackIdField=n?n.name:null}t.startTimeField||t.endTimeField||(u.timeInfo=null)}return i}(i,e);this.locationInfo=r.locationInfo,this.delimiter=r.delimiter,this._queryEngine=this._createQueryEngine(r);const o=await this._createFeatures(i);if(this._queryEngine.featureStore.addMany(o),r.layerDefinition.extent=this._queryEngine.fullExtent,r.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;r.layerDefinition.timeInfo.timeExtent=[e,t]}return r}async applyEdits(){throw new s.a("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this.loadOptions.customParameters=e,null!==(t=this._snapshotTask)&&void 0!==t&&t.abort(),this._snapshotTask=Object(o.e)(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)}),(e=>{this._queryEngine.featureStore.clear(),Object(o.j)(e)||r.a.getLogger("esri.layers.CSVLayer").error(new s.a("csv-layer:refresh","An error occurred during refresh",{error:e}))})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:n}=this.loadOptions;if(!t)throw new s.a("csv-layer:invalid-source","url not defined");const r=Object(a.M)(t);return(await Object(i.default)(r.path,{query:{...r.query,...n},responseType:"text",signal:e})).data}_createQueryEngine(e){const{objectIdField:t,fields:n,extent:i,timeInfo:s}=e.layerDefinition,r=new y.a({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new m.a({fields:n,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:s,objectIdField:t,spatialReference:i.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:r})}async _createFeatures(e){const{latitudeFieldName:t,longitudeFieldName:n}=this.locationInfo,{objectIdField:i,fieldsIndex:s,spatialReference:r}=this._queryEngine;let o=[];const a=[],y=s.fields.filter((e=>e.name!==i)).map((e=>e.name));let h=0;const m=w(e);m.next();const g={};for(const l of s.fields)if("esriFieldTypeOID"!==l.type&&"esriFieldTypeGlobalID"!==l.type){const e=Object(P.o)(l);void 0!==e&&(g[l.name]=e)}const F=N(m,y,this.delimiter,Object(x.b)(g,i));for(const l of F){const e=this._parseCoordinateValue(l[t]),r=this._parseCoordinateValue(l[n]);if(null!=r&&null!=e&&!isNaN(e)&&!isNaN(r)){l[t]=e,l[n]=r;for(const e in l)if(e!==t&&e!==n)if(s.isDateField(e)){const t=new Date(l[e]);l[e]=O(t,l[e])?t.getTime():null}else if(s.isNumericField(e)){const t=j(l[e]);isNaN(t)?l[e]=null:l[e]=t}l[i]=h,h++,o.push(new Q(r,e)),a.push(l)}}if(!Object(c.d)({wkid:4326},r))if(Object(c.p)(r))for(const l of o)[l.x,l.y]=Object(d.c)(l.x,l.y,R);else o=Object(l.i)(u.a,o,A.a.WGS84,r,null,null);const b=[];for(let l=0;l<o.length;l++){const{x:e,y:t}=o[l],n=a[l];n[i]=l+1,b.push(new p.a(new f.a([],[e,t]),n,null,n[i]))}return b}_parseCoordinateValue(e){if(null==e||""===e)return null;let t=j(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}async _checkProjection(e){try{await Object(h.a)(c.b,e)}catch{throw new s.a("csv-layer:projection-not-supported","Projection not supported")}}}},378:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return a}));var i=n(135),s=n(147),r=n(377),o=n(347);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.a:"esriGeometryPolyline"===e?o.c:o.b}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let u=1;function c(e,t){if(Object(i.a)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let n="this.".concat(t," = null;");for(const t in e)n+="this".concat(l.test(t)?".".concat(t):'["'.concat(t,'"]')," = ").concat(JSON.stringify(e[t]),";");const i=new Function("\n      return class AttributesClass$".concat(u++," {\n        constructor() {\n          ").concat(n,";\n        }\n      }\n    "))();return()=>new i}catch(n){return()=>({[t]:null,...e})}}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:Object(s.a)(e)}}]}function p(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:r.a,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);