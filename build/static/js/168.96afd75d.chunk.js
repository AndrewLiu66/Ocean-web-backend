(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[168],{1028:function(e,n,t){"use strict";t.r(n),t.d(n,"hydratedAdapter",(function(){return c}));var a=t(161),o=t(321),r=t(182),s=t(205),i=t(271);const c={convertToGEGeometry:function(e,n){if(null==n)return null;let t="cache"in n?n.cache._geVersion:void 0;return null==t&&(t=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=t)),t},exportPoint:function(e,n,t){const a=e.hasZ(n),o=e.hasM(n),s=new r.a({x:e.getPointX(n),y:e.getPointY(n),spatialReference:t});return a&&(s.z=e.getPointZ(n)),o&&(s.m=e.getPointM(n)),s.cache._geVersion=n,s},exportPolygon:function(e,n,t){const a=new s.a({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return a.cache._geVersion=n,a},exportPolyline:function(e,n,t){const a=new i.a({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return a.cache._geVersion=n,a},exportMultipoint:function(e,n,t){const a=new o.a({hasZ:e.hasZ(n),hasM:e.hasM(n),points:e.exportPoints(n),spatialReference:t});return a.cache._geVersion=n,a},exportExtent:function(e,n,t){const o=e.hasZ(n),r=e.hasM(n),s=new a.a({xmin:e.getXMin(n),ymin:e.getYMin(n),xmax:e.getXMax(n),ymax:e.getYMax(n),spatialReference:t});if(o){const t=e.getZExtent(n);s.zmin=t.vmin,s.zmax=t.vmax}if(r){const t=e.getMExtent(n);s.mmin=t.vmin,s.mmax=t.vmax}return s.cache._geVersion=n,s}}}}]);