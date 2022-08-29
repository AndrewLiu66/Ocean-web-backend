(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[93],{1048:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return J}));var i=a(6),r=a(143),n=a(144),l=a(145),c=a(146),o=a(149),s=a(187),u=a(160),p=a(218),h=a(147),v=a(273),b=a(164),f=a(184),d=a(152),y=(a(154),a(148),a(250)),O=a(191),j=a(150),m=a(193),g=a(186),_=a(287),w=a(481),S=a(632),k=a(1044),T=a(444),A=a(340),L=a(482),D=a(305),C=a(308),x=a(402),z=a(309),P=a(1045),N=a(374),R=a(261),U=a(890),M=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"],q=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(r.a)(this,a);for(var i=arguments.length,n=new Array(i),l=0;l<i;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).listMode="show",e.isReference=null,e.operationalLayerType="ArcGISTiledMapServiceLayer",e.resampling=!0,e.sourceJSON=null,e.spatialReference=null,e.path=null,e.sublayers=null,e.type="tile",e.url=null,e}return Object(n.a)(a,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?Object(i.a)({url:e},t):e}},{key:"load",value:function(e){var t=this,a=Object(h.k)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(b.o).then((function(){return t._fetchService(a)}))),Promise.resolve(this)}},{key:"attributionDataUrl",get:function(){var e,t=null===(e=this.parsedUrl)||void 0===e?void 0:e.path.toLowerCase();return t&&this._getDefaultAttribution(this._getMapName(t))}},{key:"readSpatialReference",value:function(e,t){return(e=e||t.tileInfo&&t.tileInfo.spatialReference)&&g.a.fromJSON(e)}},{key:"writeSublayers",value:function(e,t,a,r){if(this.loaded&&e){var n=e.slice().reverse().flatten((function(e){var t=e.sublayers;return t&&t.toArray().reverse()})).toArray(),l=[],c=Object(i.a)({writeSublayerStructure:!1},r);n.forEach((function(e){var t=e.write({},c);l.push(t)})),l.some((function(e){return Object.keys(e).length>1}))&&(t.layers=l)}}},{key:"tileServers",get:function(){return this._getDefaultTileServers(this.parsedUrl.path)}},{key:"castTileServers",value:function(e){return Array.isArray(e)?e.map((function(e){return Object(f.M)(e).path})):null}},{key:"fetchTile",value:function(e,t,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=r.signal,l=this.getTileUrl(e,t,a),c={responseType:"image",signal:n,query:Object(i.a)({},this.refreshParameters)};return Object(s.default)(l,c).then((function(e){return e.data}))}},{key:"getTileUrl",value:function(e,t,a){var r=!this.tilemapCache&&this.supportsBlankTile,n=Object(f.G)(Object(i.a)(Object(i.a)(Object(i.a)({},this.parsedUrl.query),{},{blankTile:!r&&null},this.customParameters),{},{token:this.apiKey})),l=this.tileServers;return"".concat(l&&l.length?l[t%l.length]:this.parsedUrl.path,"/tile/").concat(e,"/").concat(t,"/").concat(a).concat(n?"?"+n:"")}},{key:"_fetchService",value:function(e){var t=this;return new Promise((function(a,r){if(t.sourceJSON){if(null!=t.sourceJSON.bandCount&&null!=t.sourceJSON.pixelSizeX)throw new u.a("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");a({data:t.sourceJSON})}else{if(!t.parsedUrl)throw new u.a("tile-layer:undefined-url","layer's url is not defined");var n=Object(N.f)(t.parsedUrl.path);if(Object(h.k)(n)&&"ImageServer"===n.serverType)throw new u.a("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");Object(s.default)(t.parsedUrl.path,{query:Object(i.a)(Object(i.a)(Object(i.a)({f:"json"},t.parsedUrl.query),t.customParameters),{},{token:t.apiKey}),responseType:"json",signal:e}).then(a,r)}})).then((function(a){if(a.ssl&&(t.url=t.url.replace(/^http:/i,"https:")),t.sourceJSON=a.data,t.read(a.data,{origin:"service",url:t.parsedUrl}),10.1===t.version&&!Object(N.c)(t.url))return t._fetchServerVersion(t.url,e).then((function(e){t.read({currentVersion:e})})).catch((function(){}))}))}},{key:"_fetchServerVersion",value:function(e,t){if(!Object(N.b)(e))return Promise.reject();var a=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return Object(s.default)(a,{query:Object(i.a)(Object(i.a)({f:"json"},this.customParameters),{},{token:this.apiKey}),responseType:"json",signal:t}).then((function(e){if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new u.a("tile-layer:version-not-available")}))}},{key:"_getMapName",value:function(e){var t=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return t&&t[2]}},{key:"_getDefaultAttribution",value:function(e){if(e){var t;e=e.toLowerCase();for(var a=0,i=M.length;a<i;a++)if((t=M[a]).toLowerCase().includes(e))return Object(f.C)("//static.arcgis.com/attribution/"+t)}}},{key:"_getDefaultTileServers",value:function(e){var t=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),a=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return t||a?[e,e.replace(t?/server\.arcgisonline/i:/services\.arcgisonline/i,t?"services.arcgisonline":"server.arcgisonline")]:[]}},{key:"hasOverriddenFetchTile",get:function(){return!this.fetchTile.__isDefault__}}]),a}(Object(A.a)(Object(P.a)(Object(z.a)(Object(D.a)(Object(C.a)(Object(S.a)(Object(k.a)(Object(T.a)(Object(v.a)(Object(p.b)(Object(x.a)(Object(w.a)(Object(L.a)(_.a))))))))))))));Object(o.a)([Object(d.b)({readOnly:!0})],q.prototype,"attributionDataUrl",null),Object(o.a)([Object(d.b)({type:["show","hide","hide-children"]})],q.prototype,"listMode",void 0),Object(o.a)([Object(d.b)({json:{read:!0,write:!0}})],q.prototype,"blendMode",void 0),Object(o.a)([Object(d.b)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],q.prototype,"isReference",void 0),Object(o.a)([Object(d.b)({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],q.prototype,"operationalLayerType",void 0),Object(o.a)([Object(d.b)({type:Boolean})],q.prototype,"resampling",void 0),Object(o.a)([Object(d.b)()],q.prototype,"sourceJSON",void 0),Object(o.a)([Object(d.b)({type:g.a})],q.prototype,"spatialReference",void 0),Object(o.a)([Object(O.a)("spatialReference",["spatialReference","tileInfo"])],q.prototype,"readSpatialReference",null),Object(o.a)([Object(d.b)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],q.prototype,"path",void 0),Object(o.a)([Object(d.b)({readOnly:!0})],q.prototype,"sublayers",void 0),Object(o.a)([Object(m.a)("sublayers",{layers:{type:[U.a]}})],q.prototype,"writeSublayers",null),Object(o.a)([Object(d.b)({json:{read:!1,write:!1}})],q.prototype,"popupEnabled",void 0),Object(o.a)([Object(d.b)()],q.prototype,"tileServers",null),Object(o.a)([Object(y.a)("tileServers")],q.prototype,"castTileServers",null),Object(o.a)([Object(d.b)({readOnly:!0,json:{read:!1}})],q.prototype,"type",void 0),Object(o.a)([Object(d.b)(R.o)],q.prototype,"url",void 0),(q=Object(o.a)([Object(j.a)("esri.layers.TileLayer")],q)).prototype.fetchTile.__isDefault__=!0;var J=q},523:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return n}));var i=a(6),r=a(297),n={type:r.a,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:l}}}}};function l(e,t,a,n){if(!e)return null;var l=t.minScale,c=t.maxScale,o=t.minLOD,s=t.maxLOD;if(null!=o&&null!=s)return n&&n.ignoreMinMaxLOD?r.a.fromJSON(e):r.a.fromJSON(Object(i.a)(Object(i.a)({},e),{},{lods:e.lods.filter((function(e){var t=e.level;return null!=t&&t>=o&&t<=s}))}));if(0!==l&&0!==c){var u=function(e){return Math.round(1e4*e)/1e4},p=l?u(l):1/0,h=c?u(c):-1/0;return r.a.fromJSON(Object(i.a)(Object(i.a)({},e),{},{lods:e.lods.filter((function(e){var t=u(e.scale);return t<=p&&t>=h}))}))}return r.a.fromJSON(e)}},532:function(e,t,a){"use strict";a.d(t,"a",(function(){return P}));var i,r=a(156),n=a(6),l=a(143),c=a(144),o=a(145),s=a(146),u=a(155),p=a.n(u),h=a(149),v=a(187),b=a(182),f=a(475),d=a(160),y=a(218),O=a(157),j=a(410),m=a(455),g=a(164),_=a(176),w=a(369),S=a(184),k=a(152),T=a(154),A=(a(148),a(250)),L=a(150),D=a(162),C=function(){function e(){Object(l.a)(this,e),this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}return Object(c.a)(e,[{key:"getAvailability",value:function(e,t){if("unknown"!==this._allAvailability)return this._allAvailability;var a=(e-this.location.top)*this.location.width+(t-this.location.left),i=a%8,r=a>>3,n=this._tileAvailabilityBitSet;return r<0||r>n.length?"unknown":n[r]&1<<i?"available":"unavailable"}},{key:"_updateFromData",value:function(e){for(var t=this.location.width,a=this.location.height,i=!0,r=!0,n=Math.ceil(t*a/8),l=new Uint8Array(n),c=0,o=0;o<e.length;o++){var s=o%8;e[o]?(r=!1,l[c]|=1<<s):i=!1,7===s&&++c}r?this._allAvailability="unavailable":i?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=l,this.byteSize+=l.length)}}],[{key:"fromDefinition",value:function(t,a){var i=t.service.request||v.default,r=t.row,l=t.col,c=t.width,o=t.height,s={query:{f:"json"}};return a=a?Object(n.a)(Object(n.a)({},s),a):s,i(function(e){var t;if("vector-tile"===e.service.type)t="".concat(e.service.url,"/tilemap/").concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height);else{var a=e.service.tileServers;t="".concat(a&&a.length?a[e.row%a.length]:e.service.url,"/tilemap/").concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height)}var i=e.service.query;return i&&(t="".concat(t,"?").concat(i)),t}(t),a).then((function(e){return e.data})).catch((function(e){if(e&&e.details&&422===e.details.httpStatus)return{location:{top:r,left:l,width:c,height:o},valid:!0,data:Object(T.b)(c*o,0)};throw e})).then((function(t){if(t.location&&(t.location.top!==r||t.location.left!==l||t.location.width!==c||t.location.height!==o))throw new d.a("tilemap:location-mismatch","Tilemap response for different location than requested",{response:t,definition:{top:r,left:l,width:c,height:o}});return e.fromJSON(t)}))}},{key:"fromJSON",value:function(t){e._validateJSON(t);var a=new e;return a.location=Object.freeze(Object(D.a)(t.location)),a._updateFromData(t.data),Object.freeze(a)}},{key:"_validateJSON",value:function(e){if(!e||!e.location)throw new d.a("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new d.a("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new d.a("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new d.a("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new d.a("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}]),e}();function x(e){return"".concat(e.level,"/").concat(e.row,"/").concat(e.col,"/").concat(e.width,"/").concat(e.height)}var z=O.a.getLogger("esri.layers.support.TilemapCache"),P=i=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e))._pendingTilemapRequests={},i._availableLevels={},i.levels=5,i.cacheByteSize=2*f.a.MEGABYTES,i.request=v.default,i._prefetchingEnabled=!0,i}return Object(c.a)(a,[{key:"initialize",value:function(){var e=this;this._tilemapCache=new j.a(this.cacheByteSize),this.own([Object(_.e)((function(){var t=e.layer;return[null===t||void 0===t?void 0:t.parsedUrl,null===t||void 0===t?void 0:t.tileServers,null===t||void 0===t?void 0:t.apiKey,null===t||void 0===t?void 0:t.customParameters]}),(function(){return e._initializeTilemapDefinition()})),Object(_.e)((function(){var t,a;return null===(t=e.layer)||void 0===t||null===(a=t.tileInfo)||void 0===a?void 0:a.lods}),(function(t){return e._initializeAvailableLevels(t)}),_.d)]),this._initializeTilemapDefinition()}},{key:"castLevels",value:function(e){return e<=2?(z.error("Minimum levels for Tilemap is 3, but got ",e),3):e}},{key:"size",get:function(){return 1<<this.levels}},{key:"fetchTilemap",value:function(e,t,a,i){var r=this;if(!this._availableLevels[e])return Promise.reject(new d.a("tilemap-cache:level-unavailable","Level ".concat(e," is unavailable in the service")));var l=this._tmpTilemapDefinition,c=this._tilemapFromCache(e,t,a,l);if(c)return Promise.resolve(c);var o=i&&i.signal;return i=Object(n.a)(Object(n.a)({},i),{},{signal:null}),new Promise((function(e,t){Object(g.m)(o,(function(){return t(Object(g.b)())}));var a=x(l),n=r._pendingTilemapRequests[a];if(!n){n=C.fromDefinition(l,i).then((function(e){return r._tilemapCache.put(a,e,e.byteSize),e}));var c=function(){return delete r._pendingTilemapRequests[a]};r._pendingTilemapRequests[a]=n,n.then(c,c)}n.then(e,t)}))}},{key:"getAvailability",value:function(e,t,a){if(!this._availableLevels[e])return"unavailable";var i=this._tilemapFromCache(e,t,a,this._tmpTilemapDefinition);return i?i.getAvailability(t,a):"unknown"}},{key:"fetchAvailability",value:function(e,t,a,i){return this._availableLevels[e]?this.fetchTilemap(e,t,a,i).catch((function(e){return e})).then((function(i){if(i instanceof C){var r=i.getAvailability(t,a);if("unavailable"===r)throw new d.a("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:a});return r}if(Object(g.j)(i))throw i;return"unknown"})):Promise.reject(new d.a("tilemap-cache:level-unavailable","Level ".concat(e," is unavailable in the service")))}},{key:"fetchAvailabilityUpsample",value:function(e,t,a,i,r){var n=this;i.level=e,i.row=t,i.col=a;var l=this.layer.tileInfo;l.updateTileInfo(i);var c=this.fetchAvailability(e,t,a,r).catch((function(e){if(Object(g.j)(e))throw e;if(l.upsampleTile(i))return n.fetchAvailabilityUpsample(i.level,i.row,i.col,i);throw e}));return this._fetchAvailabilityUpsamplePrefetch(i.id,e,t,a,r,c),c}},{key:"_fetchAvailabilityUpsamplePrefetch",value:function(){var e=Object(r.a)(p.a.mark((function e(t,a,r,l,c,o){var s,u,h,v,b,f,d,y,O,j=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._prefetchingEnabled){e.next=2;break}return e.abrupt("return");case 2:if(s="prefetch-".concat(t),!this.handles.has(s)){e.next=5;break}return e.abrupt("return");case 5:return u=new AbortController,o.then((function(){return u.abort()}),(function(){return u.abort()})),h=!1,v={remove:function(){h||(h=!0,u.abort())}},this.handles.add(v,s),e.next=12,Object(w.c)(10,u.signal).catch((function(){}));case 12:if(h||(h=!0,this.handles.remove(s)),!Object(g.k)(u)){e.next=15;break}return e.abrupt("return");case 15:for(b={id:t,level:a,row:r,col:l},f=Object(n.a)(Object(n.a)({},c),{},{signal:u.signal}),d=this.layer.tileInfo,y=function(e){var t=j.fetchAvailability(b.level,b.row,b.col,f);i._prefetches.push(t);var a=function(){i._prefetches.removeUnordered(t)};t.then(a,a)},O=0;i._prefetches.length<i._maxPrefetch&&d.upsampleTile(b);++O)y();case 18:case"end":return e.stop()}}),e,this)})));return function(t,a,i,r,n,l){return e.apply(this,arguments)}}()},{key:"_initializeTilemapDefinition",value:function(){var e;if(this.layer.parsedUrl){var t=this.layer,a=t.parsedUrl,i=t.apiKey,r=t.customParameters;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:a.path,query:Object(S.G)(Object(n.a)(Object(n.a)(Object(n.a)({},a.query),r),{},{token:null!==i&&void 0!==i?i:null===(e=a.query)||void 0===e?void 0:e.token})),tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}}},{key:"_tilemapFromCache",value:function(e,t,a,i){i.level=e,i.row=t-t%this.size,i.col=a-a%this.size;var r=x(i);return this._tilemapCache.get(r)}},{key:"_initializeAvailableLevels",value:function(e){var t=this;this._availableLevels={},e&&e.forEach((function(e){return t._availableLevels[e.level]=!0}))}},{key:"test",get:function(){var e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:function(t,a,i){return!!e._tilemapFromCache(t,a,i,e._tmpTilemapDefinition)}}}}]),a}(Object(y.b)(b.a));P._maxPrefetch=4,P._prefetches=new m.a({initialSize:i._maxPrefetch}),Object(h.a)([Object(k.b)({constructOnly:!0,type:Number})],P.prototype,"levels",void 0),Object(h.a)([Object(A.a)("levels")],P.prototype,"castLevels",null),Object(h.a)([Object(k.b)({readOnly:!0,type:Number})],P.prototype,"size",null),Object(h.a)([Object(k.b)({constructOnly:!0,type:Number})],P.prototype,"cacheByteSize",void 0),Object(h.a)([Object(k.b)({constructOnly:!0})],P.prototype,"layer",void 0),Object(h.a)([Object(k.b)({constructOnly:!0})],P.prototype,"request",void 0),P=i=Object(h.a)([Object(L.a)("esri.layers.support.TilemapCache")],P)},632:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var i=a(143),r=a(144),n=a(145),l=a(146),c=a(149),o=(a(178),a(152)),s=(a(154),a(148),a(151),a(191)),u=a(150),p=a(523),h=a(532),v=a(186),b=function(e){var t=function(e){Object(n.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.apply(this,arguments)).copyright=null,e.minScale=0,e.maxScale=0,e.spatialReference=null,e.tileInfo=null,e.tilemapCache=null,e}return Object(r.a)(a,[{key:"readMinScale",value:function(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}},{key:"readMaxScale",value:function(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}},{key:"supportsBlankTile",get:function(){return this.version>=10.2}},{key:"readTilemapCache",value:function(e,t){return t.capabilities&&t.capabilities.includes("Tilemap")?new h.a({layer:this}):null}}]),a}(e);return Object(c.a)([Object(o.b)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(c.a)([Object(o.b)()],t.prototype,"minScale",void 0),Object(c.a)([Object(s.a)("service","minScale")],t.prototype,"readMinScale",null),Object(c.a)([Object(o.b)()],t.prototype,"maxScale",void 0),Object(c.a)([Object(s.a)("service","maxScale")],t.prototype,"readMaxScale",null),Object(c.a)([Object(o.b)({type:v.a})],t.prototype,"spatialReference",void 0),Object(c.a)([Object(o.b)({readOnly:!0})],t.prototype,"supportsBlankTile",null),Object(c.a)([Object(o.b)(p.b)],t.prototype,"tileInfo",void 0),Object(c.a)([Object(o.b)()],t.prototype,"tilemapCache",void 0),Object(c.a)([Object(s.a)("service","tilemapCache",["capabilities"])],t.prototype,"readTilemapCache",null),Object(c.a)([Object(o.b)()],t.prototype,"version",void 0),t=Object(c.a)([Object(u.a)("esri.layers.mixins.ArcGISCachedService")],t)}}}]);