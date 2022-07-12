(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[6],{147:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return d})),a.d(t,"d",(function(){return j}));var n=a(34),i=(a(0),a(35)),o=a(236),c=a(2);const s=Object(i.a)(o.a)((e=>{let{theme:t,textTransformStyle:a,ellipsis:n}=e;return{textTransform:a||"none",whiteSpace:n?"nowrap":"normal",overflow:n?"hidden":"",textOverflow:n?"ellipsis":""}})),l=e=>{let{children:t,className:a,ellipsis:i,textTransform:o,...l}=e;return Object(c.jsx)(s,{textTransformStyle:o,ellipsis:i,className:Object(n.a)({[a||""]:!0}),component:"h3",mb:0,mt:0,fontSize:"18px",fontWeight:"500",lineHeight:"1.5",...l,children:t})},r=e=>{let{children:t,className:a,ellipsis:i,textTransform:o,...l}=e;return Object(c.jsx)(s,{textTransformStyle:o,ellipsis:i,className:Object(n.a)({[a||""]:!0}),component:"h4",mb:0,mt:0,fontSize:"16px",fontWeight:"500",lineHeight:"1.5",...l,children:t})},d=e=>{let{children:t,className:a,ellipsis:i,textTransform:o,...l}=e;return Object(c.jsx)(s,{textTransformStyle:o,ellipsis:i,className:Object(n.a)({[a||""]:!0}),component:"p",mb:0,mt:0,fontSize:"14px",...l,children:t})},j=e=>{let{children:t,className:a,ellipsis:i,textTransform:o,...l}=e;return Object(c.jsx)(s,{textTransformStyle:o,ellipsis:i,className:Object(n.a)({[a||""]:!0}),component:"span",lineHeight:"1.5",...l,children:t})}},153:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a(183);const n=e=>{if(e.match("rgba")){return e.slice(5).split(",").slice(0,-1).join(",")}let t;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(e))return t=e.substring(1).split(""),3===t.length&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),t="0x"+t.join(""),[t>>16&255,t>>8&255,255&t].join(",")}},265:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(109),c=a(263),s=a(57),l=a(269),r=a(270),d=a(259),j=a(273),m=a(260),p=a(252),b=a(256),x=a(117),u=a(107),h=a(24),g=a(153),O=a(267),f=a(262),w=a(147),y=a(251),S=a(195),v=a(250),_=a(42),k=a(261),C=a(43),D=a.n(C),T=a(184),N=a.n(T),A=a(2);const z=Object(u.a)(o.a)((()=>({display:"flex",alignItems:"center",justifyContent:"center",margin:"24px !important",marginTop:"0px !important"}))),B=Object(u.a)(o.a)((e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",width:"100%",padding:".8rem 1.25rem",justifyContent:"space-between",borderBottom:"1px solid ".concat("rgba(".concat(Object(g.a)(t.palette.text.disabled),", 0.2)"))}})),I=Object(u.a)(O.a)((e=>{let{theme:t}=e;return{[t.breakpoints.down("sm")]:{maxWidth:460}}})),M=Object(u.a)("img")((()=>({width:"100%",borderRadius:"4px"})));var E=e=>{let{currentLocation:t,open:a,handleClose:i}=e;const[u,g]=Object(n.useState)(new Date(2018,1,1)),[O,C]=Object(n.useState)(new Date(2018,1,3)),{palette:T}=Object(h.a)(),E=Object(s.b)(),L=T.text.primary,[F,H]=Object(n.useState)("Spectrogram"),[P,G]=Object(n.useState)("Spectrogram"),{initGraph:W}=Object(s.c)((e=>e.graph)),[V,J]=Object(n.useState)(!1),[Y,R]=Object(n.useState)("");Object(n.useEffect)((()=>{J(!0);const e=t.replace(" ","_").toLowerCase();!async function(){await E(Object(_.d)(u,O,e))}()}),[]),Object(n.useEffect)((()=>{if("Spectrogram"===F){if(0!==Object.keys(W).length){J(!1);const e=document.getElementById("outer"),t=document.createElement("div");return t.setAttribute("id","graphBox"),e.appendChild(t),window.Bokeh.embed.embed_item(W,"graphBox"),()=>{if(document.getElementById("graphBox")){document.getElementById("graphBox").remove()}}}}else if("SPDF"===F){J(!1);let e=W.image.split("'")[1];R(e)}}),[W]);const Z=e=>e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate();return Object(A.jsx)(k.a,{open:a,sx:{zIndex:101},children:Object(A.jsxs)(I,{sx:{maxWidth:"50%"},children:[Object(A.jsxs)(B,{children:[Object(A.jsxs)(w.a,{children:[t," Hydrophone Visualization"]}),Object(A.jsx)(l.a,{onClick:i,children:Object(A.jsx)(r.a,{sx:{color:L},children:"close"})})]}),Object(A.jsxs)(f.a,{container:!0,spacing:2,p:4,pb:0,children:[Object(A.jsx)(f.a,{item:!0,md:3,sm:12,xs:12,children:Object(A.jsx)(S.a,{dateAdapter:y.a,children:Object(A.jsx)(v.a,{label:"Start Date",value:u,onChange:e=>{g(e)},minDate:new Date(2015,0,14),maxDate:new Date(2020,11,31),renderInput:e=>Object(A.jsx)(d.a,{...e})})})}),Object(A.jsx)(f.a,{item:!0,md:3,sm:12,xs:12,children:Object(A.jsx)(S.a,{dateAdapter:y.a,children:Object(A.jsx)(v.a,{label:"End Date",value:O,onChange:e=>{C(e)},minDate:new Date(2015,0,14),maxDate:new Date(2020,11,31),renderInput:e=>Object(A.jsx)(d.a,{...e})})})}),Object(A.jsx)(f.a,{item:!0,md:3,sm:12,xs:12,children:Object(A.jsx)(o.a,{children:Object(A.jsxs)(j.a,{fullWidth:!0,children:[Object(A.jsx)(m.a,{id:"demo-simple-select-label",children:"Type"}),Object(A.jsxs)(p.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:P,label:"Type",defaultValue:"Spectrogram",onChange:e=>{G(e.target.value)},children:[Object(A.jsx)(b.a,{value:"Spectrogram",children:"Spectrogram"}),Object(A.jsx)(b.a,{value:"SPDF",children:"SPDF"}),Object(A.jsx)(b.a,{value:"Octave Band Median/Mean",children:"Octave Band Median/Mean"})]})]})})}),Object(A.jsx)(f.a,{item:!0,md:3,sm:12,xs:12,children:Object(A.jsx)(c.a,{variant:"contained",component:"span",onClick:()=>{J(!0),H(P);let e=u.getFullYear()+"-"+(u.getMonth()+1)+"-"+u.getDate(),a=O.getFullYear()+"-"+(O.getMonth()+1)+"-"+O.getDate();const n=t.replace(" ","_").toLowerCase();E(Object(_.e)(e,a,P,n))},sx:{mt:1},children:"Update Graph"})}),Object(A.jsxs)(f.a,{item:!0,md:12,sm:12,xs:12,children:[Object(A.jsx)(c.a,{variant:"contained",component:"span",onClick:()=>(()=>{const e=t.replace(" ","_").toLowerCase();D.a.post("/api/downloads",{startDate:u,endDate:O,location:e},{responseType:"blob"}).then((e=>{N()(e.data,"".concat(t+"-"+F+"-"+Z(u)+"-"+Z(O),".zip"))}))})(),sx:{mt:1,backgroundColor:"#21b6ae"},children:"Download .zip"}),"SPDF"===F&&Object(A.jsx)(c.a,{variant:"contained",sx:{backgroundColor:"#21b6ae",mt:1,ml:1},children:Object(A.jsx)("a",{href:"data:image/jpeg;base64,".concat(Y),download:"".concat(t+"-"+F+"-"+Z(u)+"-"+Z(O),".jpg"),children:"Download .jpg"})}),"Octave Band Median/Mean"===F&&Object(A.jsx)(c.a,{variant:"contained",sx:{backgroundColor:"#21b6ae",mt:1,ml:1},children:Object(A.jsx)("a",{href:"data:image/jpeg;base64,".concat(Y),download:"".concat(t+"-"+F+"-"+Z(u)+"-"+Z(O),".jpg"),children:"Download .jpg"})})]}),Object(A.jsx)(f.a,{item:!0,md:3,sm:12,xs:12}),V&&Object(A.jsx)(f.a,{item:!0,md:12,sm:12,xs:12,alignItems:"center",justifyContent:"center",textAlign:"center",ml:"-18px",children:Object(A.jsx)(x.a,{size:24,className:"buttonProgress"})}),Object(A.jsx)(f.a,{item:!0,md:12,sm:12,xs:12,children:"SPDF"===F&&""!==Y&&Object(A.jsx)(z,{children:Object(A.jsx)(M,{src:"data:image/jpg;base64,".concat(Y)})})})]}),"Spectrogram"===F&&Object(A.jsx)(z,{sx:{overflow:"auto"},id:"outer"})]})})},L=a(194),F=a(191),H=a.n(F),P=a(257),G=a(253);const W=i.a.forwardRef((function(e,t){return Object(A.jsx)(G.a,{elevation:6,ref:t,variant:"filled",...e})})),V=[{location:"Slope Base",image:"http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg",latitude:44.5153,longitude:-125.39},{location:"Axial Base",image:"http://upload.wikimedia.org/wikipedia/commons/thumb/5/57/LA_Skyline_Mountains2.jpg/240px-LA_Skyline_Mountains2.jpg",latitude:45.8168,longitude:-129.754},{location:"Southern Hydrate",image:"http://upload.wikimedia.org/wikipedia/commons/thumb/8/85/2008-06-10_3000x1000_chicago_skyline.jpg/240px-2008-06-10_3000x1000_chicago_skyline.jpg",latitude:44.5691,longitude:-125.1479},{location:"Central Caldera",image:"http://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg/240px-Aerial_views_of_the_Houston%2C_Texas%2C_28005u.jpg",latitude:45.9546,longitude:-130.0089},{location:"Eastern Caldera",image:"http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Downtown_Phoenix_Aerial_Looking_Northeast.jpg/207px-Downtown_Phoenix_Aerial_Looking_Northeast.jpg",latitude:45.9396,longitude:-129.9738}],J={id:"10m-bathymetry-81bsvj",type:"fill",source:"10m-bathymetry-81bsvj","source-layer":"10m-bathymetry-81bsvj",layout:{},paint:{"fill-outline-color":"hsla(337, 82%, 62%, 0)","fill-color":["interpolate",["cubic-bezier",0,.5,1,.5],["get","DEPTH"],200,"#78bced",9e3,"#15659f"]}};var Y=function(){const[e,t]=Object(n.useState)(null),{graphList:a=[]}=Object(s.c)((e=>e.graph)),[l,r]=Object(n.useState)(!1),[d,j]=Object(n.useState)("axial_base"),m=Object(s.b)(),[p,b]=i.a.useState(!0),x=Object(n.useMemo)((()=>V.map(((e,a)=>Object(A.jsx)(L.d,{longitude:e.longitude,latitude:e.latitude,anchor:"bottom",onClick:a=>{a.originalEvent.stopPropagation(),t(e)},children:Object(A.jsx)(H.a,{sx:{color:"#35068c"},fontSize:"large"})},"marker-".concat(a))))),[]);return Object(A.jsxs)(L.i,{initialViewState:{latitude:46.1651,longitude:-123.9237,zoom:6,bearing:0,pitch:0},mapStyle:"mapbox://styles/mapbox/streets-v11",mapboxAccessToken:"pk.eyJ1IjoiYW5kcmV3bGl1MTIzNCIsImEiOiJjbDVjNTZpa2swZTBsM2NtdGludmRqNGN3In0.3WcKjr2AOAzmio8bLvV_kg",children:[Object(A.jsx)(L.h,{id:"10m-bathymetry-81bsvj",type:"vector",url:"mapbox://mapbox.9tm8dx88",children:Object(A.jsx)(L.c,{...J})}),Object(A.jsx)(L.b,{position:"top-left"}),Object(A.jsx)(L.a,{position:"top-left"}),Object(A.jsx)(L.e,{position:"top-left"}),Object(A.jsx)(L.g,{}),Object(A.jsx)(P.a,{open:p,autoHideDuration:1e4,onClose:(e,t)=>{b(!1)},children:Object(A.jsx)(W,{children:"Click 1 of the 5 pins to explore the Hydrophone!"})}),x,e&&Object(A.jsxs)(n.Fragment,{children:[Object(A.jsxs)(L.f,{anchor:"top",longitude:Number(e.longitude),latitude:Number(e.latitude),onClose:()=>t(null),children:[Object(A.jsx)(o.a,{sx:{fontSize:"16px"},children:"Loction:"}),Object(A.jsx)(o.a,{sx:{fontSize:"14px"},children:e.location}),Object(A.jsx)(c.a,{variant:"contained",color:"primary",size:"small",onClick:()=>((e,t)=>{r(e),j(t)})(!0,e.location),children:"Explore"})]}),l&&Object(A.jsx)(E,{currentLocation:d,graphData:a,handleClose:()=>{r(!1),m({type:_.b,payload:{}})},open:l})]})]})};t.default=()=>Object(A.jsx)(Y,{})}}]);