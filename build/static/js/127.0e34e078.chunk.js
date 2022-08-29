(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[127],{1331:function(e,t,n){"use strict";n.r(t),n.d(t,"registerFunctions",(function(){return b}));var r=n(156),a=n(155),c=n.n(a),u=n(412),o=n(339),i=n(371);function s(e){return e&&e.domain?"coded-value"===e.domain.type||"codedValue"===e.domain.type?u.a.convertObjectToArcadeDictionary({type:"codedValue",name:e.domain.name,dataType:i.l[e.field.type],codedValues:e.domain.codedValues.map((function(e){return{name:e.name,code:e.code}}))}):u.a.convertObjectToArcadeDictionary({type:"range",name:e.domain.name,dataType:i.l[e.field.type],min:e.domain.min,max:e.domain.max}):null}function b(e){"async"===e.mode&&(e.functions.domain=function(t,n){return e.standardFunctionAsync(t,n,function(){var e=Object(r.a)(c.a.mark((function e(t,n,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(o.R)(r,2,3),!Object(o.U)(r[0])){e.next=2;break}return e.abrupt("return",s(Object(o.u)(r[0],Object(o.J)(r[1]),void 0===r[2]?void 0:Object(o.H)(r[2]))));case 2:if(!Object(o.ab)(r[0])){e.next=6;break}return e.next=5,r[0]._ensureLoaded();case 5:return e.abrupt("return",s(Object(o.A)(Object(o.J)(r[1]),r[0],null,void 0===r[2]?void 0:Object(o.H)(r[2]))));case 6:throw new Error("Invalid Parameter");case 7:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}())},e.functions.subtypes=function(t,n){return e.standardFunctionAsync(t,n,function(){var e=Object(r.a)(c.a.mark((function e(t,n,r){var a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(o.R)(r,1,1),!Object(o.U)(r[0])){e.next=3;break}return a=Object(o.r)(r[0]),e.abrupt("return",a?u.a.convertObjectToArcadeDictionary(a):null);case 3:if(!Object(o.ab)(r[0])){e.next=8;break}return e.next=6,r[0]._ensureLoaded();case 6:return i=r[0].subtypes(),e.abrupt("return",i?u.a.convertObjectToArcadeDictionary(i):null);case 8:throw new Error("Invalid Parameter");case 9:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}())},e.functions.domainname=function(t,n){return e.standardFunctionAsync(t,n,function(){var e=Object(r.a)(c.a.mark((function e(t,n,r){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(o.R)(r,2,4),!Object(o.U)(r[0])){e.next=2;break}return e.abrupt("return",Object(o.v)(r[0],Object(o.J)(r[1]),r[2],void 0===r[3]?void 0:Object(o.H)(r[3])));case 2:if(!Object(o.ab)(r[0])){e.next=7;break}return e.next=5,r[0]._ensureLoaded();case 5:return a=Object(o.A)(Object(o.J)(r[1]),r[0],null,void 0===r[3]?void 0:Object(o.H)(r[3])),e.abrupt("return",Object(o.B)(a,r[2]));case 7:throw new Error("Invalid Parameter");case 8:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}())},e.signatures.push({name:"domainname",min:"2",max:"4"}),e.functions.domaincode=function(t,n){return e.standardFunctionAsync(t,n,function(){var e=Object(r.a)(c.a.mark((function e(t,n,r){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(o.R)(r,2,4),!Object(o.U)(r[0])){e.next=2;break}return e.abrupt("return",Object(o.w)(r[0],Object(o.J)(r[1]),r[2],void 0===r[3]?void 0:Object(o.H)(r[3])));case 2:if(!Object(o.ab)(r[0])){e.next=7;break}return e.next=5,r[0]._ensureLoaded();case 5:return a=Object(o.A)(Object(o.J)(r[1]),r[0],null,void 0===r[3]?void 0:Object(o.H)(r[3])),e.abrupt("return",Object(o.a)(a,r[2]));case 7:throw new Error("Invalid Parameter");case 8:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}())},e.signatures.push({name:"domaincode",min:"2",max:"4"})),e.functions.text=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(Object(o.R)(n,1,2),!Object(o.ab)(n[0]))return Object(o.V)(n[0],n[1]);var r=Object(o.d)(n[1],"");return""===r?n[0].castToText():"schema"===r.toLowerCase()?n[0].convertToText("schema",e.abortSignal):"featureset"===r.toLowerCase()?n[0].convertToText("featureset",e.abortSignal):void 0}))},e.functions.gdbversion=function(t,n){return e.standardFunctionAsync(t,n,function(){var e=Object(r.a)(c.a.mark((function e(t,n,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(o.R)(r,1,1),!Object(o.U)(r[0])){e.next=2;break}return e.abrupt("return",r[0].gdbVersion());case 2:if(!Object(o.ab)(r[0])){e.next=6;break}return e.next=5,r[0].load();case 5:return e.abrupt("return",e.sent.gdbVersion);case 6:throw new Error("Invalid Parameter");case 7:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}())},e.functions.schema=function(t,n){return e.standardFunctionAsync(t,n,function(){var e=Object(r.a)(c.a.mark((function e(t,n,r){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(o.R)(r,1,1),!Object(o.ab)(r[0])){e.next=4;break}return e.next=3,r[0].load();case 3:return e.abrupt("return",u.a.convertObjectToArcadeDictionary(r[0].schema()));case 4:if(!Object(o.U)(r[0])){e.next=7;break}return a=Object(o.q)(r[0]),e.abrupt("return",a?u.a.convertObjectToArcadeDictionary(a):null);case 7:throw new Error("Invalid Parameter");case 8:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}())}}}}]);