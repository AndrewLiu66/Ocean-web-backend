(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[35],{1064:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return J}));var i=a(156),r=a(6),n=a(143),l=a(144),o=a(145),c=a(146),s=a(155),u=a.n(s),h=a(149),v=a(187),p=a(160),b=a(157),f=a(147),d=a(273),y=a(164),m=a(184),O=a(152),j=a(154),g=(a(148),a(151),a(191)),w=a(150),_=a(616),k=a(287),S=a(632),T=a(444),x=a(305),L=a(308),A=a(261),D=a(60),z=a(458),C=a(422),I=b.a.getLogger("esri.core.workers.WorkerHandle"),q=function(){function e(t,a,i,l){var o=this,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};Object(n.a)(this,e),this._mainMethod=a,this._transferLists=i,this._listeners=[],this._promise=Object(C.b)(t,Object(r.a)(Object(r.a)({},c),{},{schedule:l})).then((function(e){if(void 0===o._thread){o._thread=e,o._promise=null,c.hasInitialize&&o.broadcast({},"initialize");var t,a=Object(D.a)(o._listeners);try{for(a.s();!(t=a.n()).done;){var i=t.value;o._connectListener(i)}}catch(r){a.e(r)}finally{a.f()}}else e.close()})),this._promise.catch((function(e){return I.error("Failed to initialize ".concat(t," worker: ").concat(e))}))}return Object(l.a)(e,[{key:"on",value:function(e,t){var a=this,i={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(i),this._connectListener(i),Object(z.b)((function(){i.removed=!0,Object(j.i)(a._listeners,i),a._thread&&Object(f.k)(i.threadHandle)&&i.threadHandle.remove()}))}},{key:"destroy",value:function(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null}},{key:"invoke",value:function(e,t){return this.invokeMethod(this._mainMethod,e,t)}},{key:"invokeMethod",value:function(e,t,a){var i=this;if(this._thread){var r=this._transferLists[e],n=r?r(t):[];return this._thread.invoke(e,t,{transferList:n,signal:a})}return this._promise?this._promise.then((function(){return Object(y.p)(a),i.invokeMethod(e,t,a)})):Promise.reject(null)}},{key:"broadcast",value:function(e,t){var a=this;return this._thread?Promise.all(this._thread.broadcast(t,e)).then((function(){})):this._promise?this._promise.then((function(){return a.broadcast(e,t)})):Promise.reject()}},{key:"promise",get:function(){return this._promise}},{key:"_connectListener",value:function(e){this._thread&&this._thread.on(e.eventName,e.callback).then((function(t){e.removed||(e.threadHandle=t)}))}}]),e}(),E=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(n.a)(this,a),(e=t.call(this,"LercWorker","_decode",{_decode:function(e){return[e.buffer]}},i,{strategy:"dedicated"})).schedule=i,e.ref=0,e}return Object(l.a)(a,[{key:"decode",value:function(e,t,a){return e&&0!==e.byteLength?this.invoke({buffer:e,options:t},a):Promise.resolve(null)}},{key:"release",value:function(){var e=this;--this.ref<=0&&(M.forEach((function(t,a){t===e&&M.delete(a)})),this.destroy())}}]),a}(q),M=new Map;function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=M.get(Object(f.q)(e));return t||(Object(f.k)(e)?(t=new E((function(t){return e.schedule(t)})),M.set(e,t)):(t=new E,M.set(null,t))),++t.ref,t}var P=b.a.getLogger("esri.layers.ElevationLayer"),U=function(e){Object(o.a)(s,e);var t=Object(c.a)(s);function s(){var e;Object(n.a)(this,s);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).copyright=null,e.heightModelInfo=null,e.path=null,e.opacity=1,e.operationalLayerType="ArcGISTiledElevationServiceLayer",e.sourceJSON=null,e.type="elevation",e.url=null,e.version=null,e._lercDecoder=N(),e}return Object(l.a)(s,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(r.a)({url:e},t):e}},{key:"destroy",value:function(){this._lercDecoder=Object(f.o)(this._lercDecoder)}},{key:"minScale",get:function(){},set:function(e){this.constructed&&P.warn("".concat(this.declaredClass,".minScale support has been removed (since 4.5)"))}},{key:"maxScale",get:function(){},set:function(e){this.constructed&&P.warn("".concat(this.declaredClass,".maxScale support has been removed (since 4.5)"))}},{key:"readVersion",value:function(e,t){var a=t.currentVersion;return a||(a=9.3),a}},{key:"load",value:function(e){var t=this,a=Object(f.k)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:function(e){for(var t=0;t<e.typeKeywords.length;t++)if("elevation 3d layer"===e.typeKeywords[t].toLowerCase())return!0;throw new p.a("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(y.o).then((function(){return t._fetchImageService(a)}))),Promise.resolve(this)}},{key:"fetchTile",value:function(e,t,a,i){var r=this,n=Object(f.k)((i=i||{signal:null}).signal)?i.signal:i.signal=(new AbortController).signal,l={responseType:"array-buffer",signal:n},o={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then((function(){return r._fetchTileAvailability(e,t,a,i)})).then((function(){return Object(v.default)(r.getTileUrl(e,t,a),l)})).then((function(e){return r._lercDecoder.decode(e.data,o,n)})).then((function(e){return{values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue}}))}},{key:"getTileUrl",value:function(e,t,a){var i=!this.tilemapCache&&this.supportsBlankTile,n=Object(m.G)(Object(r.a)(Object(r.a)({},this.parsedUrl.query),{},{blankTile:!i&&null}));return"".concat(this.parsedUrl.path,"/tile/").concat(e,"/").concat(t,"/").concat(a).concat(n?"?"+n:"")}},{key:"queryElevation",value:function(){var e=Object(i.a)(u.a.mark((function e(t,i){var r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(17).then(a.bind(null,1366));case 2:return r=e.sent,n=r.ElevationQuery,Object(y.p)(i),e.abrupt("return",(new n).query(this,t,i));case 6:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"createElevationSampler",value:function(){var e=Object(i.a)(u.a.mark((function e(t,i){var r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.e(17).then(a.bind(null,1366));case 2:return r=e.sent,n=r.ElevationQuery,Object(y.p)(i),e.abrupt("return",(new n).createSampler(this,t,i));case 6:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"_fetchTileAvailability",value:function(e,t,a,i){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,t,a,i):Promise.resolve("unknown")}},{key:"_fetchImageService",value:function(){var e=Object(i.a)(u.a.mark((function e(t){var a,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.sourceJSON){e.next=2;break}return e.abrupt("return",this.sourceJSON);case 2:return a={query:Object(r.a)({f:"json"},this.parsedUrl.query),responseType:"json",signal:t},e.next=5,Object(v.default)(this.parsedUrl.path,a);case 5:(i=e.sent).ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=i.data,this.read(i.data,{origin:"service",url:this.parsedUrl});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"hasOverriddenFetchTile",get:function(){return!this.fetchTile.__isDefault__}}]),s}(Object(S.a)(Object(T.a)(Object(x.a)(Object(L.a)(Object(d.a)(k.a))))));Object(h.a)([Object(O.b)({json:{read:{source:"copyrightText"}}})],U.prototype,"copyright",void 0),Object(h.a)([Object(O.b)({readOnly:!0,type:_.a})],U.prototype,"heightModelInfo",void 0),Object(h.a)([Object(O.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],U.prototype,"path",void 0),Object(h.a)([Object(O.b)({type:["show","hide"]})],U.prototype,"listMode",void 0),Object(h.a)([Object(O.b)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],U.prototype,"minScale",null),Object(h.a)([Object(O.b)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],U.prototype,"maxScale",null),Object(h.a)([Object(O.b)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],U.prototype,"opacity",void 0),Object(h.a)([Object(O.b)({type:["ArcGISTiledElevationServiceLayer"]})],U.prototype,"operationalLayerType",void 0),Object(h.a)([Object(O.b)()],U.prototype,"sourceJSON",void 0),Object(h.a)([Object(O.b)({json:{read:!1},value:"elevation",readOnly:!0})],U.prototype,"type",void 0),Object(h.a)([Object(O.b)(A.o)],U.prototype,"url",void 0),Object(h.a)([Object(O.b)()],U.prototype,"version",void 0),Object(h.a)([Object(g.a)("version",["currentVersion"])],U.prototype,"readVersion",null),(U=Object(h.a)([Object(w.a)("esri.layers.ElevationLayer")],U)).prototype.fetchTile.__isDefault__=!0;var J=U},523:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return n}));var i=a(6),r=a(297),n={type:r.a,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:l}}}}};function l(e,t,a,n){if(!e)return null;var l=t.minScale,o=t.maxScale,c=t.minLOD,s=t.maxLOD;if(null!=c&&null!=s)return n&&n.ignoreMinMaxLOD?r.a.fromJSON(e):r.a.fromJSON(Object(i.a)(Object(i.a)({},e),{},{lods:e.lods.filter((function(e){var t=e.level;return null!=t&&t>=c&&t<=s}))}));if(0!==l&&0!==o){var u=function(e){return Math.round(1e4*e)/1e4},h=l?u(l):1/0,v=o?u(o):-1/0;return r.a.fromJSON(Object(i.a)(Object(i.a)({},e),{},{lods:e.lods.filter((function(e){var t=u(e.scale);return t<=h&&t>=v}))}))}return r.a.fromJSON(e)}},532:function(e,t,a){"use strict";a.d(t,"a",(function(){return I}));var i,r=a(156),n=a(6),l=a(143),o=a(144),c=a(145),s=a(146),u=a(155),h=a.n(u),v=a(149),p=a(187),b=a(182),f=a(475),d=a(160),y=a(218),m=a(157),O=a(410),j=a(455),g=a(164),w=a(176),_=a(369),k=a(184),S=a(152),T=a(154),x=(a(148),a(250)),L=a(150),A=a(162),D=function(){function e(){Object(l.a)(this,e),this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}return Object(o.a)(e,[{key:"getAvailability",value:function(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;var a=(e-this.location.top)*this.location.width+(t-this.location.left),i=a%8,r=a>>3,n=this._tileAvailabilityBitSet;return r<0||r>n.length?"unknown":n[r]&1<<i?"available":"unavailable"}},{key:"_updateFromData",value:function(e){for(var t=this.location.width,a=this.location.height,i=!0,r=!0,n=Math.ceil(t*a/8),l=new Uint8Array(n),o=0,c=0;c<e.length;c++){var s=c%8;e[c]?(r=!1,l[o]|=1<<s):i=!1,7===s&&++o}r?this._allAvailability="unavailable":i?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=l,this.byteSize+=l.length)}}],[{key:"fromDefinition",value:function(t,a){var i=t.service.request||p.default,r=t.row,l=t.col,o=t.width,c=t.height,s={query:{f:"json"}};return a=a?Object(n.a)(Object(n.a)({},s),a):s,i(function(e){var t;if("vector-tile"===e.service.type)t="".concat(e.service.url,"/tilemap/").concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height);else{var a=e.service.tileServers;t="".concat(a&&a.length?a[e.row%a.length]:e.service.url,"/tilemap/").concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height)}var i=e.service.query;return i&&(t="".concat(t,"?").concat(i)),t}(t),a).then((function(e){return e.data})).catch((function(e){if(e&&e.details&&422===e.details.httpStatus)return{location:{top:r,left:l,width:o,height:c},valid:!0,data:Object(T.b)(o*c,0)};throw e})).then((function(t){if(t.location&&(t.location.top!==r||t.location.left!==l||t.location.width!==o||t.location.height!==c))throw new d.a("tilemap:location-mismatch","Tilemap response for different location than requested",{response:t,definition:{top:r,left:l,width:o,height:c}});return e.fromJSON(t)}))}},{key:"fromJSON",value:function(t){e._validateJSON(t);var a=new e;return a.location=Object.freeze(Object(A.a)(t.location)),a._updateFromData(t.data),Object.freeze(a)}},{key:"_validateJSON",value:function(e){if(!e||!e.location)throw new d.a("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new d.a("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new d.a("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new d.a("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new d.a("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}]),e}();function z(e){return"".concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height)}var C=m.a.getLogger("esri.layers.support.TilemapCache"),I=i=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e))._pendingTilemapRequests={},i._availableLevels={},i.levels=5,i.cacheByteSize=2*f.a.MEGABYTES,i.request=p.default,i._prefetchingEnabled=!0,i}return Object(o.a)(a,[{key:"initialize",value:function(){var e=this;this._tilemapCache=new O.a(this.cacheByteSize),this.own([Object(w.e)((function(){var t=e.layer;return[null===t||void 0===t?void 0:t.parsedUrl,null===t||void 0===t?void 0:t.tileServers,null===t||void 0===t?void 0:t.apiKey,null===t||void 0===t?void 0:t.customParameters]}),(function(){return e._initializeTilemapDefinition()})),Object(w.e)((function(){var t,a;return null===(t=e.layer)||void 0===t||null===(a=t.tileInfo)||void 0===a?void 0:a.lods}),(function(t){return e._initializeAvailableLevels(t)}),w.d)]),this._initializeTilemapDefinition()}},{key:"castLevels",value:function(e){return e<=2?(C.error("Minimum levels for Tilemap is 3, but got ",e),3):e}},{key:"size",get:function(){return 1<<this.levels}},{key:"fetchTilemap",value:function(e,t,a,i){var r=this;if(!this._availableLevels[e])return Promise.reject(new d.a("tilemap-cache:level-unavailable","Level ".concat(e," is unavailable in the service")));var l=this._tmpTilemapDefinition,o=this._tilemapFromCache(e,t,a,l);if(o)return Promise.resolve(o);var c=i&&i.signal;return i=Object(n.a)(Object(n.a)({},i),{},{signal:null}),new Promise((function(e,t){Object(g.m)(c,(function(){return t(Object(g.b)())}));var a=z(l),n=r._pendingTilemapRequests[a];if(!n){n=D.fromDefinition(l,i).then((function(e){return r._tilemapCache.put(a,e,e.byteSize),e}));var o=function(){return delete r._pendingTilemapRequests[a]};r._pendingTilemapRequests[a]=n,n.then(o,o)}n.then(e,t)}))}},{key:"getAvailability",value:function(e,t,a){if(!this._availableLevels[e])return"unavailable";var i=this._tilemapFromCache(e,t,a,this._tmpTilemapDefinition);return i?i.getAvailability(t,a):"unknown"}},{key:"fetchAvailability",value:function(e,t,a,i){return this._availableLevels[e]?this.fetchTilemap(e,t,a,i).catch((function(e){return e})).then((function(i){if(i instanceof D){var r=i.getAvailability(t,a);if("unavailable"===r)throw new d.a("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:a});return r}if(Object(g.j)(i))throw i;return"unknown"})):Promise.reject(new d.a("tilemap-cache:level-unavailable","Level ".concat(e," is unavailable in the service")))}},{key:"fetchAvailabilityUpsample",value:function(e,t,a,i,r){var n=this;i.level=e,i.row=t,i.col=a;var l=this.layer.tileInfo;l.updateTileInfo(i);var o=this.fetchAvailability(e,t,a,r).catch((function(e){if(Object(g.j)(e))throw e;if(l.upsampleTile(i))return n.fetchAvailabilityUpsample(i.level,i.row,i.col,i);throw e}));return this._fetchAvailabilityUpsamplePrefetch(i.id,e,t,a,r,o),o}},{key:"_fetchAvailabilityUpsamplePrefetch",value:function(){var e=Object(r.a)(h.a.mark((function e(t,a,r,l,o,c){var s,u,v,p,b,f,d,y,m,O=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._prefetchingEnabled){e.next=2;break}return e.abrupt("return");case 2:if(s="prefetch-".concat(t),!this.handles.has(s)){e.next=5;break}return e.abrupt("return");case 5:return u=new AbortController,c.then((function(){return u.abort()}),(function(){return u.abort()})),v=!1,p={remove:function(){v||(v=!0,u.abort())}},this.handles.add(p,s),e.next=12,Object(_.c)(10,u.signal).catch((function(){}));case 12:if(v||(v=!0,this.handles.remove(s)),!Object(g.k)(u)){e.next=15;break}return e.abrupt("return");case 15:for(b={id:t,level:a,row:r,col:l},f=Object(n.a)(Object(n.a)({},o),{},{signal:u.signal}),d=this.layer.tileInfo,y=function(e){var t=O.fetchAvailability(b.level,b.row,b.col,f);i._prefetches.push(t);var a=function(){i._prefetches.removeUnordered(t)};t.then(a,a)},m=0;i._prefetches.length<i._maxPrefetch&&d.upsampleTile(b);++m)y();case 18:case"end":return e.stop()}}),e,this)})));return function(t,a,i,r,n,l){return e.apply(this,arguments)}}()},{key:"_initializeTilemapDefinition",value:function(){var e;if(this.layer.parsedUrl){var t=this.layer,a=t.parsedUrl,i=t.apiKey,r=t.customParameters;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:a.path,query:Object(k.G)(Object(n.a)(Object(n.a)(Object(n.a)({},a.query),r),{},{token:null!==i&&void 0!==i?i:null===(e=a.query)||void 0===e?void 0:e.token})),tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}}},{key:"_tilemapFromCache",value:function(e,t,a,i){i.level=e,i.row=t-t%this.size,i.col=a-a%this.size;var r=z(i);return this._tilemapCache.get(r)}},{key:"_initializeAvailableLevels",value:function(e){var t=this;this._availableLevels={},e&&e.forEach((function(e){return t._availableLevels[e.level]=!0}))}},{key:"test",get:function(){var e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:function(t,a,i){return!!e._tilemapFromCache(t,a,i,e._tmpTilemapDefinition)}}}}]),a}(Object(y.b)(b.a));I._maxPrefetch=4,I._prefetches=new j.a({initialSize:i._maxPrefetch}),Object(v.a)([Object(S.b)({constructOnly:!0,type:Number})],I.prototype,"levels",void 0),Object(v.a)([Object(x.a)("levels")],I.prototype,"castLevels",null),Object(v.a)([Object(S.b)({readOnly:!0,type:Number})],I.prototype,"size",null),Object(v.a)([Object(S.b)({constructOnly:!0,type:Number})],I.prototype,"cacheByteSize",void 0),Object(v.a)([Object(S.b)({constructOnly:!0})],I.prototype,"layer",void 0),Object(v.a)([Object(S.b)({constructOnly:!0})],I.prototype,"request",void 0),I=i=Object(v.a)([Object(L.a)("esri.layers.support.TilemapCache")],I)},632:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var i=a(143),r=a(144),n=a(145),l=a(146),o=a(149),c=(a(178),a(152)),s=(a(154),a(148),a(151),a(191)),u=a(150),h=a(523),v=a(532),p=a(186),b=function(e){var t=function(e){Object(n.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.apply(this,arguments)).copyright=null,e.minScale=0,e.maxScale=0,e.spatialReference=null,e.tileInfo=null,e.tilemapCache=null,e}return Object(r.a)(a,[{key:"readMinScale",value:function(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}},{key:"readMaxScale",value:function(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}},{key:"supportsBlankTile",get:function(){return this.version>=10.2}},{key:"readTilemapCache",value:function(e,t){return t.capabilities&&t.capabilities.includes("Tilemap")?new v.a({layer:this}):null}}]),a}(e);return Object(o.a)([Object(c.b)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(o.a)([Object(c.b)()],t.prototype,"minScale",void 0),Object(o.a)([Object(s.a)("service","minScale")],t.prototype,"readMinScale",null),Object(o.a)([Object(c.b)()],t.prototype,"maxScale",void 0),Object(o.a)([Object(s.a)("service","maxScale")],t.prototype,"readMaxScale",null),Object(o.a)([Object(c.b)({type:p.a})],t.prototype,"spatialReference",void 0),Object(o.a)([Object(c.b)({readOnly:!0})],t.prototype,"supportsBlankTile",null),Object(o.a)([Object(c.b)(h.b)],t.prototype,"tileInfo",void 0),Object(o.a)([Object(c.b)()],t.prototype,"tilemapCache",void 0),Object(o.a)([Object(s.a)("service","tilemapCache",["capabilities"])],t.prototype,"readTilemapCache",null),Object(o.a)([Object(c.b)()],t.prototype,"version",void 0),t=Object(o.a)([Object(u.a)("esri.layers.mixins.ArcGISCachedService")],t)}}}]);