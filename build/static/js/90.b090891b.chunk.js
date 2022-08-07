(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[90],{1185:function(e,t){function a(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=1185},1358:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(113),c=a(1361),r=a(58),o=a(1367),s=a(1368),d=a(1369),b=a(1356),j=a(1339),m=a(1351),p=a(1357),u=a(121),h=a(111),x=a(23),O=a(785),g=a(1365),f=a(1362),y=a(48),v=a(1355),w=a(52),k=a.n(w),S=a(1183),C=a.n(S),L=a(1182),F=a.n(L),B=a(1335),D=a(927),I=a(1089),_=a(3);const q=Object(h.a)(l.a)((e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",justifyContent:"center",margin:"24px !important",marginTop:"0px !important",[t.breakpoints.down("xl")]:{justifyContent:"flex-start"}}})),E=Object(h.a)(l.a)((()=>({display:"flex",alignItems:"center"}))),M=Object(h.a)(c.a)((e=>{let{theme:t}=e;return{width:"130px",marginRight:"10px",[t.breakpoints.down("sm")]:{fontSize:"12px"}}})),P=Object(h.a)(l.a)((e=>{let{theme:t}=e;return{position:"fixed",display:"flex",zIndex:200,backgroundColor:"#FFFFFF",alignItems:"center",width:"inherit",padding:".8rem 1.25rem",justifyContent:"space-between",borderBottom:"1px solid ".concat("rgba(".concat(Object(O.a)(t.palette.text.disabled),", 0.2)"))}})),Y=Object(h.a)(g.a)((e=>{let{theme:t}=e;return{[t.breakpoints.down("lg")]:{width:"70%",height:"60%"},[t.breakpoints.down("md")]:{width:"80%",height:"70%"},[t.breakpoints.down("sm")]:{width:"90vw",height:"85vh"}}})),z=Object(h.a)("img")((e=>{let{theme:t}=e;return{borderRadius:"4px",[t.breakpoints.down("sm")]:{width:"110%"}}})),H=Object(h.a)("div")((()=>({fontSize:"16px",fontWeight:"500",lineHeight:"1.5"}))),T=Object(h.a)("a")((()=>({display:"flex",color:"inherit"}))),V=Object(h.a)(l.a)((e=>{let{theme:t}=e;return{display:"flex",height:"100%",marginBottom:"-10px",flexDirection:"column",position:"relative",[t.breakpoints.down("md")]:{marginBottom:"20px"}}})),A=Object(h.a)(l.a)((e=>{let{theme:t}=e;return{color:"#696665",position:"absolute",width:"350px",bottom:"-8px",fontSize:"12px",[t.breakpoints.down("md")]:{bottom:"-8px"}}})),{RangePicker:N}=B.a,Q=e=>{let{currentLocation:t,open:a,handleClose:i}=e;const[c,h]=Object(n.useState)([]),[O,g]=Object(n.useState)("2018-03-01 00"),[w,S]=Object(n.useState)("2018-03-02 23"),{palette:L}=Object(x.a)(),B=Object(r.b)(),Q=L.text.primary,[R,J]=Object(n.useState)("Spectrogram"),[U,G]=Object(n.useState)("Spectrogram"),{initGraph:K}=Object(r.c)((e=>e.graph)),[W,$]=Object(n.useState)(!1),[X,Z]=Object(n.useState)(""),[ee,te]=Object(n.useState)(50),[ae,ne]=Object(n.useState)(""),ie=Object(n.useRef)(null);Object(n.useEffect)((()=>{$(!0),(async()=>{await B(Object(y.c)(O,w,t.replace(" ","_").toLowerCase()))})()}),[]),Object(n.useEffect)((()=>{if("Spectrogram"===R||"Octave Band"===R){if(0!==Object.keys(K).length){$(!1);const e=document.getElementById("outer"),t=document.createElement("div");return t.setAttribute("id","graphBox"),e.appendChild(t),window.Bokeh.embed.embed_item(K,"graphBox"),()=>{if(document.getElementById("graphBox")){document.getElementById("graphBox").remove()}}}}else if("SPDF"===R){$(!1);let e=K.image.split("'")[1];Z(e)}}),[K]);const le=()=>t+"-"+O+"-"+w,ce=()=>ee<1||ee>80;return Object(_.jsx)(v.a,{open:a,sx:{zIndex:101},children:Object(_.jsxs)(Y,{sx:{width:"60%",height:"65%",overflow:"scroll"},children:[Object(_.jsxs)(P,{children:[Object(_.jsxs)(H,{children:[t," Hydrophone Visualization"]}),Object(_.jsx)(o.a,{onClick:i,children:Object(_.jsx)(s.a,{sx:{color:Q},children:"close"})})]}),Object(_.jsxs)(f.a,{container:!0,spacing:1,p:4,pb:0,mt:7,mb:2,sx:{"& .MuiTextField-root":{width:"100%"}},children:[Object(_.jsx)(f.a,{item:!0,lg:4,md:6,sm:12,xs:12,display:"flex",alignItems:"center",pt:0,children:Object(_.jsxs)(V,{style:{width:"100%"},children:[Object(_.jsx)(N,{size:"large",showTime:{hideDisabledOptions:!0},defaultValue:[D(O),D(w)],value:[D(O),D(w)],format:"YYYY-MM-DD HH",onCalendarChange:(e,t,a)=>{if(""!==t[1]){const t=e[1].diff(e[0],"months");ne(t>=1?"error":"")}if(""===t[1]||t[0]!==O&&t[1]===w){const e=D(t[0]).add(1,"M").add(23,"hours"),a=D(e._d);g(t[0]),S(a.format("YYYY-MM-DD HH"))}else g(t[0]),S(t[1])},disabledDate:e=>e&&(e<D.utc([2015,0,14])||e>D.utc([2020,11,31])),allowClear:!1}),"Spectrogram"===U&&Object(_.jsx)(A,{children:"Time interval should not exceed 1 month to download CSV"})]})}),Object(_.jsx)(f.a,{item:!0,lg:3,md:3,sm:6,xs:12,children:Object(_.jsxs)(d.a,{fullWidth:!0,sx:{mb:1,width:"100%"},children:[Object(_.jsx)(b.a,{id:"demo-simple-select-label",children:"Type"}),Object(_.jsxs)(j.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:U,label:"Type",defaultValue:"Spectrogram",onChange:e=>{G(e.target.value)},children:[Object(_.jsx)(m.a,{value:"Spectrogram",children:"Spectrogram"}),Object(_.jsx)(m.a,{value:"SPDF",children:"SPDF"}),Object(_.jsx)(m.a,{value:"Octave Band",children:"Octave Band"})]})]})}),Object(_.jsx)(f.a,{item:!0,lg:3,md:3,sm:6,xs:12,children:Object(_.jsx)(p.a,{error:ce(),helperText:ce()&&"Frequency not in valid range",disabled:"Octave Band"!==U,required:!0,value:ee,id:"outlined-required",label:"Required frequency 1-80",onChange:e=>{te(e.target.value)}})})]}),Object(_.jsx)(f.a,{container:!0,spacing:1,p:4,pt:1,children:Object(_.jsx)(f.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:Object(_.jsxs)(E,{children:[Object(_.jsxs)(M,{disabled:ce(),variant:"contained",component:"span",onClick:()=>{$(!0),J(U);const e=t.replace(" ","_").toLowerCase();B(Object(y.d)(O,w,U,e,ee))},children:[Object(_.jsx)(F.a,{sx:{mr:1}}),"Update"]}),Object(_.jsxs)(M,{disabled:"error"===ae&&"Spectrogram"===U,variant:"contained",component:"span",onClick:()=>{const e=t.replace(" ","_").toLowerCase();$(!0),k.a.post("/api/downloads",{startDate:O,endDate:w,location:e,currType:R,frequency:ee}).then((e=>{$(!1),h(e.data.data),ie.current.link.click()}))},sx:{backgroundColor:"#008255"},children:[Object(_.jsx)(C.a,{sx:{mr:1}}),"CSV"]}),Object(_.jsx)(I.CSVLink,{data:c,filename:le(),className:"hidden",ref:ie,target:"_blank",headers:(()=>{switch(R){case"Octave Band":return[{label:"date",key:"date"},{label:"min",key:"min"},{label:"firstQuartile",key:"firstQuartile"},{label:"median",key:"median"},{label:"thirdQuartile",key:"thirdQuartile"},{label:"max",key:"max"}];case"SPDF":return[{label:"Frequency",key:"Frequency"},{label:"Level 1",key:"Level 1"},{label:"Level 5",key:"Level 5"},{label:"Level 10",key:"Level 10"},{label:"Level 50",key:"Level 50"},{label:"Level 90",key:"Level 90"},{label:"Level 95",key:"Level 95"},{label:"Level 99",key:"Level 99"}];default:return[{label:"time",key:"time"},{label:"frequency",key:"frequency"},{label:t,key:t.replace(" ","_").toLowerCase()}]}})()}),Object(_.jsx)(M,{disabled:"SPDF"!==R||!1!==W,variant:"contained",sx:{backgroundColor:"#008255"},children:Object(_.jsxs)(T,{href:"data:image/jpeg;base64,".concat(X),download:"".concat(le(),".jpg"),children:[Object(_.jsx)(C.a,{sx:{mr:1}}),"JPG"]})})]})})}),Object(_.jsxs)(f.a,{container:!0,children:[W&&Object(_.jsx)(f.a,{item:!0,lg:12,md:12,sm:12,xs:12,alignItems:"center",justifyContent:"center",textAlign:"center",mb:"20px",children:Object(_.jsx)(u.a,{size:24,className:"buttonProgress"})}),"SPDF"===R&&""!==X&&Object(_.jsx)(f.a,{item:!0,lg:12,md:12,sm:12,xs:12,children:Object(_.jsx)(q,{children:Object(_.jsx)(z,{src:"data:image/jpg;base64,".concat(X)})})})]}),Object(_.jsx)(f.a,{container:!0,children:Object(_.jsx)(f.a,{item:!0,lg:12,md:12,sm:12,xs:12,children:Object(_.jsx)(q,{style:{overflow:"auto"},children:("Spectrogram"===R||"Octave Band"===R)&&Object(_.jsx)(l.a,{id:"outer"})})})})]})})};var R=i.a.memo(Q);a(1208),a(1352),a(1347),a(1184);a(1203),a(1221);var J=a(1202),U=a(1204),G=a(335),K=a(1020),W=a(209);const $=Object(h.a)(l.a)((()=>({padding:0,margin:0,height:"100%",width:"100%"}))),X=[{location:"Slope Base",latitude:44.5153,longitude:-125.39},{location:"Axial Base",latitude:45.8168,longitude:-129.754},{location:"Southern Hydrate",latitude:44.5691,longitude:-125.1479},{location:"Central Caldera",latitude:45.9546,longitude:-130.0089},{location:"Eastern Caldera",latitude:45.9396,longitude:-129.9738}];var Z=function(){const e=Object(n.useRef)(null),{graphList:t=[]}=Object(r.c)((e=>e.graph)),[a,i]=Object(n.useState)(!1),[l,c]=Object(n.useState)("axial_base"),o=Object(r.b)(),s=Object(n.useCallback)(((e,t)=>{i(e),c(t)}),[]);return Object(n.useEffect)((()=>{if(e.current){G.a.apiKey="AAPK460c081ffc584c5090c2b383ede3366b1JA6FLMBYno7qMVVlHo12K6EOAtFnfYV_6UQH2_bUGzYM0qQIBxyfrSfrVF8mJM8";const t=new U.a({portalItem:{id:"aa1d3f80270146208328cf66d022e09c"},basemap:"arcgis-oceans"}),a=new K.a;t.add(a),X.forEach((e=>{const t={title:"Get Info",id:"show_popup",location:e.location},n={type:"point",longitude:e.longitude,latitude:e.latitude},i={title:"{Name}",content:"<div>I am a Hydrophone</div>",actions:[t]},l={Name:e.location,Description:"I am a hydrophone"},c=new W.a({geometry:n,symbol:{type:"simple-marker",color:[226,119,40],outline:{color:[255,255,255],width:1}},attributes:l,popupTemplate:i});a.add(c)}));new J.a({container:e.current,map:t,center:[-127,45],zoom:8}).popup.on("trigger-action",(e=>{"show_popup"===e.action.id&&(console.log(e.action.location),s(!0,"axial_base"),c("axial_base"))}))}}),[]),Object(_.jsxs)(n.Fragment,{children:[Object(_.jsx)($,{className:"mapDiv",ref:e}),a&&Object(_.jsx)(R,{currentLocation:l,graphData:t,handleClose:()=>{i(!1),o({type:y.a,payload:{}})},open:a})]})};t.default=()=>Object(_.jsx)(Z,{})},785:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a(1353);const n=e=>{if(e.match("rgba")){return e.slice(5).split(",").slice(0,-1).join(",")}let t;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(e))return t=e.substring(1).split(""),3===t.length&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),t="0x"+t.join(""),[t>>16&255,t>>8&255,255&t].join(",")}}}]);