(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[63],{1213:function(t,e,n){"use strict";n.r(e),n.d(e,"SceneLayerSnappingSourceWorker",(function(){return tt})),n.d(e,"default",(function(){return et}));var i=n(136),r=n(134),o=n(148),c=(n(143),n(138),n(141),n(135),n(221),n(137)),s=n(205),u=n(194),a=n(863),h=n(543),d=n(917),l=n(343),b=n(438),f=n(470),O=(n(354),n(368),n(357)),_=n(534);n(407);function j(t){return t?{ray:Object(_.c)(t.ray),c0:t.c0,c1:t.c1}:{ray:Object(_.c)(),c0:0,c1:Number.MAX_VALUE}}new f.a((()=>({c0:0,c1:0,ray:null})));n(175),n(575);Object(u.e)(),Object(u.e)(),Object(u.e)(),Object(u.e)(),Object(u.e)();Object(u.e)(),Object(u.e)(),Object(u.e)(),Object(u.e)(),Object(u.e)();var g,m;(m=g||(g={}))[m.NONE=0]="NONE",m[m.CLAMP=1]="CLAMP",m[m.INFINITE_MIN=4]="INFINITE_MIN",m[m.INFINITE_MAX=8]="INFINITE_MAX";g.INFINITE_MIN,g.INFINITE_MAX,g.INFINITE_MAX;function T(t,e){for(let n=0;n<N.NUM;n++){const i=t[n];if(i[0]*e[0]+i[1]*e[1]+i[2]*e[2]+i[3]>=e[3])return!1}return!0}var p,E,M;(M=p||(p={}))[M.LEFT=0]="LEFT",M[M.RIGHT=1]="RIGHT",M[M.BOTTOM=2]="BOTTOM",M[M.TOP=3]="TOP",M[M.NEAR=4]="NEAR",M[M.FAR=5]="FAR",function(t){t[t.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",t[t.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",t[t.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",t[t.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",t[t.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",t[t.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",t[t.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",t[t.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(E||(E={}));E.FAR_BOTTOM_RIGHT,E.NEAR_BOTTOM_RIGHT,E.NEAR_BOTTOM_LEFT,E.FAR_BOTTOM_LEFT,E.NEAR_BOTTOM_LEFT,E.NEAR_BOTTOM_RIGHT,E.NEAR_TOP_RIGHT,E.NEAR_TOP_LEFT,E.FAR_BOTTOM_RIGHT,E.FAR_BOTTOM_LEFT,E.FAR_TOP_LEFT,E.FAR_TOP_RIGHT,E.NEAR_BOTTOM_RIGHT,E.FAR_BOTTOM_RIGHT,E.FAR_TOP_RIGHT,E.NEAR_TOP_RIGHT,E.FAR_BOTTOM_LEFT,E.NEAR_BOTTOM_LEFT,E.NEAR_TOP_LEFT,E.FAR_TOP_LEFT,E.FAR_TOP_LEFT,E.NEAR_TOP_LEFT,E.NEAR_TOP_RIGHT,E.FAR_TOP_RIGHT;var N,A;!function(t){t[t.NUM=6]="NUM"}(N||(N={})),function(t){t[t.NUM=8]="NUM"}(A||(A={}));Object(O.c)(-1,-1,-1,1),Object(O.c)(1,-1,-1,1),Object(O.c)(1,1,-1,1),Object(O.c)(-1,1,-1,1),Object(O.c)(-1,-1,1,1),Object(O.c)(1,-1,1,1),Object(O.c)(1,1,1,1),Object(O.c)(-1,1,1,1),new f.a(j),Object(u.e)(),Object(u.e)(),Object(u.e)(),Object(u.e)(),Object(u.e)(),Object(u.e)(),Object(u.e)(),Object(u.e)();var R=n(506);class S{constructor(t,e){this._objectToBoundingSphere=t,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new v,this._objectCount=0,e&&(void 0!==e.maximumObjectsPerNode&&(this._maximumObjectsPerNode=e.maximumObjectsPerNode),void 0!==e.maximumDepth&&(this._maximumDepth=e.maximumDepth))}get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}destroy(){this._degenerateObjects.clear(),v.clearPool(),D[0]=null,q.prune(),Z.prune()}add(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.length;this._objectCount+=e,this._grow(t,e);const n=v.acquire();for(let i=0;i<e;i++){const e=t[i];this._isDegenerate(e)?this._degenerateObjects.add(e):(n.init(this._root),this._add(e,n))}v.release(n)}remove(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._objectCount-=t.length;const n=v.acquire();for(const i of t){const t=Object(r.k)(e)?e:Object(h.a)(this._objectToBoundingSphere(i),X);y(t[3])?(n.init(this._root),this._remove(i,t,n)):this._degenerateObjects.delete(i)}v.release(n),this._shrink()}update(t,e){if(!y(e[3])&&this._isDegenerate(t))return;const n=function(t){return D[0]=t,D}(t);this.remove(n,e),this.add(n)}forEachAlongRay(t,e,n){const i=Object(_.e)(t,e);this._forEachNode(this._root,(t=>{if(!this._intersectsNode(i,t))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObject(i,t)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObject(i,t)&&n(t)})),!0}))}forEachAlongRayWithVerticalOffset(t,e,n,i){const r=Object(_.e)(t,e);this._forEachNode(this._root,(t=>{if(!this._intersectsNodeWithOffset(r,t,i))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObjectWithOffset(r,t,i)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObjectWithOffset(r,t,i)&&n(t)})),!0}))}forEach(t){this._forEachNode(this._root,(e=>{const n=e.node;return n.terminals.forAll(t),null!==n.residents&&n.residents.forAll(t),!0})),this._degenerateObjects.forEach(t)}forEachDegenerateObject(t){this._degenerateObjects.forEach(t)}findClosest(t,e,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:()=>!0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1/0,o=1/0,c=1/0,u=null;const a=B(t,e),d=s=>{if(--r,!i(s))return;const a=this._objectToBoundingSphere(s);if(!T(n,a))return;const d=w(t,e,Object(h.e)(a)),l=d-a[3],b=d+a[3];l<o&&(o=l,c=b,u=s)};return this._forEachNodeDepthOrdered(this._root,(i=>{if(r<=0||!T(n,i.bounds))return!1;if(Object(s.i)(G,a,i.halfSize),Object(s.c)(G,G,i.bounds),w(t,e,G)>c)return!1;const o=i.node;return o.terminals.forAll((t=>d(t))),null!==o.residents&&o.residents.forAll((t=>d(t))),!0}),t,e),u}forEachInDepthRange(t,e,n,i,r,o,c){let u=-1/0,a=1/0;const d={setRange:t=>{n===S.DepthOrder.FRONT_TO_BACK?(u=Math.max(u,t.near),a=Math.min(a,t.far)):(u=Math.max(u,-t.far),a=Math.min(a,-t.near))}};d.setRange(i);const l=w(e,n,t),b=B(e,n),f=B(e,-n),O=t=>{if(!c(t))return;const i=this._objectToBoundingSphere(t),s=Object(h.e)(i),b=w(e,n,s)-l,f=b-i[3],O=b+i[3];f>a||O<u||!T(o,i)||r(t,d)};this._forEachNodeDepthOrdered(this._root,(t=>{if(!T(o,t.bounds))return!1;if(Object(s.i)(G,b,t.halfSize),Object(s.c)(G,G,t.bounds),w(e,n,G)-l>a)return!1;if(Object(s.i)(G,f,t.halfSize),Object(s.c)(G,G,t.bounds),w(e,n,G)-l<u)return!1;const i=t.node;return i.terminals.forAll((t=>O(t))),null!==i.residents&&i.residents.forAll((t=>O(t))),!0}),e,n)}forEachNode(t){this._forEachNode(this._root,(e=>t(e.node,e.bounds,e.halfSize)))}forEachNeighbor(t,e){const n=Object(h.c)(e),i=Object(h.e)(e),r=e=>{const r=this._objectToBoundingSphere(e),o=Object(h.c)(r),c=n+o;Object(s.f)(Object(h.e)(r),i)-c*c<=0&&t(e)};this._forEachNode(this._root,(t=>{const e=Object(h.c)(t.bounds),o=n+e;if(Object(s.f)(Object(h.e)(t.bounds),i)-o*o>0)return!1;const c=t.node;return c.terminals.forAll((t=>r(t))),null!==c.residents&&c.residents.forAll((t=>r(t))),!0})),this.forEachDegenerateObject(r)}_intersectsNode(t,e){return P(e.bounds,2*-e.halfSize,k),P(e.bounds,2*e.halfSize,H),Object(R.b)(t.origin,t.direction,k,H)}_intersectsNodeWithOffset(t,e,n){return P(e.bounds,2*-e.halfSize,k),P(e.bounds,2*e.halfSize,H),n.applyToMinMax(k,H),Object(R.b)(t.origin,t.direction,k,H)}_intersectsObject(t,e){const n=this._objectToBoundingSphere(e);return!(n[3]>0)||Object(h.f)(n,t)}_intersectsObjectWithOffset(t,e,n){const i=this._objectToBoundingSphere(e);return!(i[3]>0)||Object(h.f)(n.applyToBoundingSphere(i),t)}_forEachNode(t,e){let n=v.acquire().init(t);const i=[n];for(;0!==i.length;){if(n=i.pop(),e(n)&&!n.isLeaf())for(let t=0;t<n.node.children.length;t++)n.node.children[t]&&i.push(v.acquire().init(n).advance(t));v.release(n)}}_forEachNodeDepthOrdered(t,e,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:S.DepthOrder.FRONT_TO_BACK,r=v.acquire().init(t);const o=[r];for(function(t,e,n){if(!Z.length)for(let i=0;i<8;++i)Z.push({index:0,distance:0});for(let i=0;i<8;++i){const n=L[i];Z.data[i].index=i,Z.data[i].distance=w(t,e,n)}Z.sort(((t,e)=>t.distance-e.distance));for(let i=0;i<8;++i)n[i]=Z.data[i].index}(n,i,J);0!==o.length;){if(r=o.pop(),e(r)&&!r.isLeaf())for(let t=7;t>=0;--t){const e=J[t];r.node.children[e]&&o.push(v.acquire().init(r).advance(e))}v.release(r)}}_remove(t,e,n){q.clear();const i=n.advanceTo(e,((t,e)=>{q.push(t.node),q.push(e)}))?n.node.terminals:n.node.residents;if(i.removeUnordered(t),0===i.length)for(let r=q.length-2;r>=0;r-=2){const t=q.data[r],e=q.data[r+1];if(!this._purge(t,e))break}}_nodeIsEmpty(t){if(0!==t.terminals.length)return!1;if(null!==t.residents)return 0===t.residents.length;for(let e=0;e<t.children.length;e++)if(t.children[e])return!1;return!0}_purge(t,e){return e>=0&&(t.children[e]=null),!!this._nodeIsEmpty(t)&&(null===t.residents&&(t.residents=new b.a({shrink:!0})),!0)}_add(t,e){e.advanceTo(this._objectToBoundingSphere(t))?e.node.terminals.push(t):(e.node.residents.push(t),e.node.residents.length>this._maximumObjectsPerNode&&e.depth<this._maximumDepth&&this._split(e))}_split(t){const e=t.node.residents;t.node.residents=null;for(let n=0;n<e.length;n++){const i=v.acquire().init(t);this._add(e.getItemAt(n),i),v.release(i)}}_grow(t,e){if(0!==e&&(x(t,e,(t=>this._objectToBoundingSphere(t)),W),y(W[3])&&!this._fitsInsideTree(W)))if(this._nodeIsEmpty(this._root.node))Object(h.a)(W,this._root.bounds),this._root.halfSize=1.25*W[3];else{const t=this._rootBoundsForRootAsSubNode(W);this._placingRootViolatesMaxDepth(t)?this._rebuildTree(W,t):this._growRootAsSubNode(t),v.release(t)}}_rebuildTree(t,e){Object(s.e)(K,e.bounds),K[3]=e.halfSize,x([t,K],2,(t=>t),U);const n=v.acquire().init(this._root);this._root.initFrom(null,U,1.25*U[3]),this._forEachNode(n,(t=>(this.add(t.node.terminals.data,t.node.terminals.length),null!==t.node.residents&&this.add(t.node.residents.data,t.node.residents.length),!0))),v.release(n)}_placingRootViolatesMaxDepth(t){const e=Math.log(t.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return this._forEachNode(this._root,(t=>(n=Math.max(n,t.depth),n+e<=this._maximumDepth))),n+e>this._maximumDepth}_rootBoundsForRootAsSubNode(t){const e=t[3],n=t;let i=-1/0;const r=this._root.bounds,o=this._root.halfSize;for(let c=0;c<3;c++){const t=r[c]-o-(n[c]-e),s=n[c]+e-(r[c]+o),u=Math.max(0,Math.ceil(t/(2*o))),a=Math.max(0,Math.ceil(s/(2*o)))+1,h=2**Math.ceil(Math.log(u+a)*Math.LOG2E);i=Math.max(i,h),Y[c].min=u,Y[c].max=a}for(let c=0;c<3;c++){let t=Y[c].min,e=Y[c].max;const n=(i-(t+e))/2;t+=Math.ceil(n),e+=Math.floor(n);const s=r[c]-o-t*o*2;V[c]=s+(e+t)*o}return V[3]=i*o*C,v.acquire().initFrom(null,V,i*o,0)}_growRootAsSubNode(t){const e=this._root.node;Object(s.e)(W,this._root.bounds),W[3]=this._root.halfSize,this._root.init(t),t.advanceTo(W,null,!0),t.node.children=e.children,t.node.residents=e.residents,t.node.terminals=e.terminals}_shrink(){for(;;){const t=this._findShrinkIndex();if(-1===t)break;this._root.advance(t),this._root.depth=0}}_findShrinkIndex(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;let t=null;const e=this._root.node.children;let n=0,i=0;for(;i<e.length&&null==t;)n=i++,t=e[n];for(;i<e.length;)if(e[i++])return-1;return n}_isDegenerate(t){return!y(this._objectToBoundingSphere(t)[3])}_fitsInsideTree(t){const e=this._root.bounds,n=this._root.halfSize;return t[3]<=n&&t[0]>=e[0]-n&&t[0]<=e[0]+n&&t[1]>=e[1]-n&&t[1]<=e[1]+n&&t[2]>=e[2]-n&&t[2]<=e[2]+n}}class v{constructor(){this.bounds=Object(h.b)(),this.halfSize=0,this.initFrom(null,null,0,0)}init(t){return this.initFrom(t.node,t.bounds,t.halfSize,t.depth)}initFrom(t,e,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.depth;return this.node=Object(r.k)(t)?t:v.createEmptyNode(),Object(r.k)(e)&&Object(h.a)(e,this.bounds),this.halfSize=n,this.depth=i,this}advance(t){let e=this.node.children[t];e||(e=v.createEmptyNode(),this.node.children[t]=e),this.node=e,this.halfSize/=2,this.depth++;const n=L[t];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.bounds[3]=this.halfSize*C,this}advanceTo(t,e){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];for(;;){if(this.isTerminalFor(t))return e&&e(this,-1),!0;if(this.isLeaf()){if(!n)return e&&e(this,-1),!1;this.node.residents=null}const i=this._childIndex(t);e&&e(this,i),this.advance(i)}}isLeaf(){return null!=this.node.residents}isTerminalFor(t){return t[3]>this.halfSize/2}_childIndex(t){const e=this.bounds;return(e[0]<t[0]?1:0)+(e[1]<t[1]?2:0)+(e[2]<t[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new b.a({shrink:!0}),residents:new b.a({shrink:!0})}}static acquire(){return v._pool.acquire()}static release(t){v._pool.release(t)}static clearPool(){v._pool.prune()}}function F(t,e){t[0]=Math.min(t[0],e[0]-e[3]),t[1]=Math.min(t[1],e[1]-e[3]),t[2]=Math.min(t[2],e[2]-e[3])}function I(t,e){t[0]=Math.max(t[0],e[0]+e[3]),t[1]=Math.max(t[1],e[1]+e[3]),t[2]=Math.max(t[2],e[2]+e[3])}function P(t,e,n){n[0]=t[0]+e,n[1]=t[1]+e,n[2]=t[2]+e}function x(t,e,n,i){if(1===e){const e=n(t[0]);Object(h.a)(e,i)}else{k[0]=1/0,k[1]=1/0,k[2]=1/0,H[0]=-1/0,H[1]=-1/0,H[2]=-1/0;for(let i=0;i<e;i++){const e=n(t[i]);y(e[3])&&(F(k,e),I(H,e))}Object(s.j)(i,k,H,.5),i[3]=Math.max(H[0]-k[0],H[1]-k[1],H[2]-k[2])/2}}function B(t,e){let n=1/0,i=null;for(let r=0;r<8;++r){const o=w(t,e,z[r]);o<n&&(n=o,i=z[r])}return i}function w(t,e,n){return e*(t[0]*n[0]+t[1]*n[1]+t[2]*n[2])}function y(t){return!isNaN(t)&&t!==-1/0&&t!==1/0&&t>0}v._pool=new l.a(v),function(t){var e;(e=t.DepthOrder||(t.DepthOrder={}))[e.FRONT_TO_BACK=1]="FRONT_TO_BACK",e[e.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(S||(S={}));const L=[Object(u.g)(-1,-1,-1),Object(u.g)(1,-1,-1),Object(u.g)(-1,1,-1),Object(u.g)(1,1,-1),Object(u.g)(-1,-1,1),Object(u.g)(1,-1,1),Object(u.g)(-1,1,1),Object(u.g)(1,1,1)],z=[Object(u.g)(-1,-1,-1),Object(u.g)(-1,-1,1),Object(u.g)(-1,1,-1),Object(u.g)(-1,1,1),Object(u.g)(1,-1,-1),Object(u.g)(1,-1,1),Object(u.g)(1,1,-1),Object(u.g)(1,1,1)],C=Math.sqrt(3),D=[null];const V=Object(h.b)(),G=Object(u.e)(),k=Object(u.e)(),H=Object(u.e)(),q=new b.a,X=Object(h.b)(),W=Object(h.b)(),K=Object(h.b)(),U=Object(h.b)(),Y=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],Z=new b.a,J=[0,0,0,0,0,0,0,0],Q=S;var $=n(1063);let tt=class{constructor(){this._idToComponent=new Map,this._components=new Q((t=>t.bounds)),this._edges=new Q((t=>t.bounds)),this._tmpLineSegment=Object(a.a)(),this._tmpP1=Object(u.e)(),this._tmpP2=Object(u.e)(),this._tmpP3=Object(u.e)(),this.remoteClient=null}async fetchCandidates(t,e){await Promise.resolve(),Object(o.p)(e),await this._ensureEdgeLocations(t,e);const n=[];return this._edges.forEachNeighbor((e=>this._addCandidates(t,e,n)),t.bounds),{result:{candidates:n}}}async _ensureEdgeLocations(t,e){const n=[];if(this._components.forEachNeighbor((t=>{if(Object(r.j)(t.info)){const{id:e,uid:i}=t;n.push({id:e,uid:i})}}),t.bounds),!n.length)return;const i={components:n},o=await this.remoteClient.invoke("fetchAllEdgeLocations",i,Object(r.r)(e,{}));for(const r of o.components)this._setFetchEdgeLocations(r)}async add(t){const e=new nt(t.id,t.bounds);return this._idToComponent.set(e.id,e),this._components.add([e]),{result:{}}}async remove(t){const e=this._idToComponent.get(t.id);if(e){const t=[];this._edges.forEachNeighbor((n=>{n.component===e&&t.push(n)}),e.bounds),this._edges.remove(t),this._components.remove([e]),this._idToComponent.delete(e.id)}return{result:{}}}_setFetchEdgeLocations(t){const e=this._idToComponent.get(t.id);if(Object(r.j)(e)||t.uid!==e.uid)return;const n=$.extractComponentsEdgeLocationsLayout.createView(t.locations),i=new Array(n.count),o=Object(u.e)(),c=Object(u.e)();for(let r=0;r<n.count;r++){const u=Object(h.b)(),a=Object(h.e)(u);n.position0.getVec(r,o),n.position1.getVec(r,c),Object(s.a)(a,a,o,.5),Object(s.a)(a,a,c,.5),Object(s.c)(a,a,t.origin),u[3]=Object(s.k)(a,o);const d=new it(e,r,u);i[r]=d}this._edges.add(i);const{objectIds:a,origin:d}=t;e.info={locations:n,objectIds:a,origin:d}}_addCandidates(t,e,n){const{locations:i,origin:r,objectIds:o}=e.component.info,c=i.position0.getVec(e.index,this._tmpP1),u=i.position1.getVec(e.index,this._tmpP2);Object(s.c)(c,c,r),Object(s.c)(u,u,r);const a=o[i.componentIndex.get(e.index)];this._addEdgeCandidate(t,a,c,u,n),this._addVertexCandidate(t,a,c,n),this._addVertexCandidate(t,a,u,n)}_addEdgeCandidate(t,e,n,i,r){if(!(t.types&d.b.EDGE))return;const o=Object(h.e)(t.bounds),c=Object(a.c)(n,i,this._tmpLineSegment),l=Object(a.e)(c,o,this._tmpP3);if(!Object(h.g)(t.bounds,l))return null;r.push({type:"edge",objectId:e,target:Object(u.c)(l),distance:Object(s.k)(o,l),start:Object(u.c)(n),end:Object(u.c)(i)})}_addVertexCandidate(t,e,n,i){if(!(t.types&d.b.VERTEX))return;const r=Object(h.e)(t.bounds);if(!Object(h.g)(t.bounds,n))return null;i.push({type:"vertex",objectId:e,target:Object(u.c)(n),distance:Object(s.k)(r,n)})}};function et(){return new tt}tt=Object(i.a)([Object(c.a)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],tt);class nt{constructor(t,e){this.id=t,this.bounds=e,this.info=null,this.uid=++nt.uid}}nt.uid=0;class it{constructor(t,e,n){this.component=t,this.index=e,this.bounds=n}}},302:function(t,e,n){"use strict";function i(){return[1,0,0,0,1,0,0,0,1]}function r(t,e){return new Float64Array(t,e,9)}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));Object.freeze(Object.defineProperty({__proto__:null,create:i,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},fromValues:function(t,e,n,i,r,o,c,s,u){return[t,e,n,i,r,o,c,s,u]},createView:r},Symbol.toStringTag,{value:"Module"}))},310:function(t,e,n){"use strict";function i(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function r(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}function o(t,e){return new Float64Array(t,e,16)}n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return i}));const c=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:i,clone:r,fromValues:function(t,e,n,i,r,o,c,s,u,a,h,d,l,b,f,O){return[t,e,n,i,r,o,c,s,u,a,h,d,l,b,f,O]},createView:o,IDENTITY:c},Symbol.toStringTag,{value:"Module"}))},363:function(t,e,n){"use strict";function i(){return[0,0,0,1]}function r(t){return[t[0],t[1],t[2],t[3]]}function o(t,e){return new Float64Array(t,e,4)}n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return o}));const c=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:i,clone:r,fromValues:function(t,e,n,i){return[t,e,n,i]},createView:o,IDENTITY:c},Symbol.toStringTag,{value:"Module"}))},407:function(t,e,n){"use strict";n.d(e,"a",(function(){return O})),n.d(e,"b",(function(){return b})),n.d(e,"c",(function(){return f}));var i=n(457),r=n(494),o=n(302),c=n(310),s=n(363),u=n(215),a=n(194),h=n(357);class d{constructor(t,e,n){this.itemByteSize=t,this.itemCreate=e,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(n/this.itemByteSize)}get(){0===this._itemsPtr&&Object(r.a)((()=>this._reset()));const t=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=t;){const t=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize);for(let e=0;e<this._itemsPerBuffer;++e)this._items.push(this.itemCreate(t,e*this.itemByteSize));this._buffers.push(t)}return this._items[this._itemsPtr++]}_reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return new d(16,u.c,t)}static createVec3f64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return new d(24,a.d,t)}static createVec4f64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return new d(32,h.a,t)}static createMat3f64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return new d(72,o.a,t)}static createMat4f64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return new d(128,c.b,t)}static createQuatf64(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return new d(32,s.d,t)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}const l=4*i.a.KILOBYTES,b=(d.createVec2f64(),d.createVec3f64()),f=d.createVec4f64(),O=(d.createMat3f64(),d.createMat4f64());d.createQuatf64()},470:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(494);class r{constructor(t){this.allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&Object(i.a)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*o);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,o));t++)this._items.push(this.allocator())}}const o=1024},506:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return s}));n(215),n(368);var i=n(357);Object(i.b)();class r{constructor(t){this.message=t}toString(){return"AssertException: ".concat(this.message)}}function o(t,e){if(!t)throw e=e||"assert",console.log(new Error(e).stack),new r(e)}function c(t,e,n,i){let r,o=(n[0]-t[0])/e[0],c=(i[0]-t[0])/e[0];o>c&&(r=o,o=c,c=r);let s=(n[1]-t[1])/e[1],u=(i[1]-t[1])/e[1];if(s>u&&(r=s,s=u,u=r),o>u||s>c)return!1;s>o&&(o=s),u<c&&(c=u);let a=(n[2]-t[2])/e[2],h=(i[2]-t[2])/e[2];return a>h&&(r=a,a=h,h=r),!(o>h||a>c)&&(h<c&&(c=h),!(c<0))}function s(t,e,n,i){t[12]=e,t[13]=n,t[14]=i}},534:function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return s}));n(141);var i=n(470),r=n(205),o=n(194);n(407);function c(t){return t?{origin:Object(o.c)(t.origin),direction:Object(o.c)(t.direction)}:{origin:Object(o.e)(),direction:Object(o.e)()}}function s(t,e){const n=d.get();return n.origin=t,n.direction=e,n}function u(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c();return a(t.origin,t.direction,e)}function a(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c();return Object(r.e)(n.origin,t),Object(r.e)(n.direction,e),n}function h(t,e,n){const i=Object(r.g)(t.direction,Object(r.d)(n,e,t.origin));return Object(r.c)(n,t.origin,Object(r.i)(n,t.direction,i)),n}const d=new i.a((function(){return{origin:null,direction:null}}))},543:function(t,e,n){"use strict";n.d(e,"a",(function(){return g})),n.d(e,"b",(function(){return j})),n.d(e,"c",(function(){return m})),n.d(e,"d",(function(){return p})),n.d(e,"e",(function(){return T})),n.d(e,"f",(function(){return N})),n.d(e,"g",(function(){return P}));n(135);var i,r,o=n(143),c=n(175),s=n(134),u=n(354),a=n(205),h=n(194),d=n(368),l=n(357);(r=i||(i={}))[r.X=0]="X",r[r.Y=1]="Y",r[r.Z=2]="Z";var b=n(534),f=n(575),O=n(407);const _=o.a.getLogger("esri.geometry.support.sphere");function j(){return Object(l.b)()}function g(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j();return Object(d.c)(e,t)}function m(t){return t[3]}function T(t){return t}function p(t,e,n,i){return Object(l.c)(t,e,n,i)}function E(t,e,n){if(Object(s.j)(e))return!1;const{origin:i,direction:r}=e,o=M;o[0]=i[0]-t[0],o[1]=i[1]-t[1],o[2]=i[2]-t[2];const c=r[0]*r[0]+r[1]*r[1]+r[2]*r[2],u=2*(r[0]*o[0]+r[1]*o[1]+r[2]*o[2]),a=u*u-4*c*(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-t[3]*t[3]);if(a<0)return!1;const h=Math.sqrt(a);let d=(-u-h)/(2*c);const l=(-u+h)/(2*c);return(d<0||l<d&&l>0)&&(d=l),!(d<0)&&(n&&(n[0]=i[0]+r[0]*d,n[1]=i[1]+r[1]*d,n[2]=i[2]+r[2]*d),!0)}const M=Object(h.e)();function N(t,e){return E(t,e,null)}function A(t,e,n){const i=O.b.get(),r=O.a.get();Object(a.h)(i,e.origin,e.direction);const o=m(t);Object(a.h)(n,i,e.origin),Object(a.i)(n,n,1/Object(a.n)(n)*o);const c=S(t,e.origin),s=Object(f.a)(e.origin,n);return Object(u.c)(r,s+c,i),Object(a.o)(n,n,r),n}function R(t,e,n){const i=Object(a.d)(O.b.get(),e,t),r=Object(a.i)(O.b.get(),i,t[3]/Object(a.n)(i));return Object(a.c)(n,r,t)}function S(t,e){const n=Object(a.d)(O.b.get(),e,t),i=Object(a.n)(n),r=m(t),o=r+Math.abs(r-i);return Object(c.a)(r/o)}const v=Object(h.e)();function F(t,e,n,r){const o=Object(a.d)(v,e,t);switch(n){case i.X:{const t=Object(c.c)(o,v)[2];return Object(a.u)(r,-Math.sin(t),Math.cos(t),0)}case i.Y:{const t=Object(c.c)(o,v),e=t[1],n=t[2],i=Math.sin(e);return Object(a.u)(r,-i*Math.cos(n),-i*Math.sin(n),Math.cos(e))}case i.Z:return Object(a.p)(r,o);default:return}}function I(t,e){const n=Object(a.d)(x,e,t);return Object(a.n)(n)-t[3]}function P(t,e){const n=Object(a.f)(t,e),i=m(t);return n<=i*i}const x=Object(h.e)(),B=j();Object.freeze(Object.defineProperty({__proto__:null,create:j,copy:g,fromCenterAndRadius:function(t,e){return Object(l.c)(t[0],t[1],t[2],e)},wrap:function(t){return t},clear:function(t){t[0]=t[1]=t[2]=t[3]=0},fromRadius:function(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t},getRadius:m,getCenter:T,fromValues:p,elevate:function(t,e,n){return t!==n&&Object(a.e)(n,t),n[3]=t[3]+e,n},setExtent:function(t,e,n){return _.error("sphere.setExtent is not yet supported"),t===n?n:g(t,n)},intersectRay:E,intersectsRay:N,intersectRayClosestSilhouette:function(t,e,n){if(E(t,e,n))return n;const i=A(t,e,O.b.get());return Object(a.c)(n,e.origin,Object(a.i)(O.b.get(),e.direction,Object(a.k)(e.origin,i)/Object(a.n)(e.direction))),n},closestPointOnSilhouette:A,closestPoint:function(t,e,n){return E(t,e,n)?n:(Object(b.a)(e,t,n),R(t,n,n))},projectPoint:R,distanceToSilhouette:function(t,e){const n=Object(a.d)(O.b.get(),e,t),i=Object(a.r)(n),r=t[3]*t[3];return Math.sqrt(Math.abs(i-r))},angleToSilhouette:S,axisAt:F,altitudeAt:I,setAltitudeAt:function(t,e,n,r){const o=I(t,e),c=F(t,e,i.Z,x),s=Object(a.i)(x,c,n-o);return Object(a.c)(r,e,s)},containsPoint:P,tmpSphere:B},Symbol.toStringTag,{value:"Module"}))},575:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return c}));var i=n(175),r=n(205),o=n(194);function c(t,e){return Object(r.g)(t,e)/Object(r.n)(t)}function s(t,e){const n=Object(r.g)(t,e)/(Object(r.n)(t)*Object(r.n)(e));return-Object(i.a)(n)}Object(o.e)(),Object(o.e)()},863:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return h})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return l}));var i=n(175),r=n(470),o=n(205),c=n(194),s=n(407);function u(t){return t?{origin:Object(c.c)(t.origin),vector:Object(c.c)(t.vector)}:{origin:Object(c.e)(),vector:Object(c.e)()}}function a(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u();return Object(o.e)(n.origin,t),Object(o.e)(n.vector,e),n}function h(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u();return Object(o.e)(n.origin,t),Object(o.d)(n.vector,e,t),n}function d(t,e){const n=Object(o.d)(s.b.get(),e,t.origin),r=Object(o.g)(t.vector,n),c=Object(o.g)(t.vector,t.vector),u=Object(i.d)(r/c,0,1),a=Object(o.d)(s.b.get(),Object(o.i)(s.b.get(),t.vector,u),n);return Object(o.g)(a,a)}function l(t,e,n){return function(t,e,n,r,c){const{vector:u,origin:a}=t,h=Object(o.d)(s.b.get(),e,a),d=Object(o.g)(u,h)/Object(o.r)(u);return Object(o.i)(c,u,Object(i.d)(d,n,r)),Object(o.c)(c,c,t.origin)}(t,e,0,1,n)}Object(c.e)(),Object(c.e)(),new r.a((()=>({origin:null,vector:null})))}}]);