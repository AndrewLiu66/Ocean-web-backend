(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[6],{167:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a(372);const n=e=>{if(e.match("rgba")){return e.slice(5).split(",").slice(0,-1).join(",")}let t;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(e))return t=e.substring(1).split(""),3===t.length&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),t="0x"+t.join(""),[t>>16&255,t>>8&255,255&t].join(",")}},379:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(112),o=a(376),s=a(59),l=a(382),r=a(383),d=a(384),b=a(374),j=a(365),m=a(370),p=a(375),u=a(120),x=a(110),h=a(23),O=a(167),g=a(380),f=a(377),y=a(50),v=a(373),w=a(52),S=a.n(w),C=a(322),k=a.n(C),B=a(321),D=a.n(B),F=a(232),I=a(364),T=a(191),z=a(3);const E=Object(x.a)(c.a)((e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",justifyContent:"center",margin:"24px !important",marginTop:"0px !important",[t.breakpoints.down("xl")]:{justifyContent:"flex-start"}}})),H=Object(x.a)(c.a)((()=>({display:"flex",alignItems:"center"}))),P=Object(x.a)(o.a)((e=>{let{theme:t}=e;return{width:"130px",marginRight:"10px",[t.breakpoints.down("sm")]:{fontSize:"12px"}}})),L=Object(x.a)(c.a)((e=>{let{theme:t}=e;return{position:"fixed",display:"flex",zIndex:200,backgroundColor:"#FFFFFF",alignItems:"center",width:"inherit",padding:".8rem 1.25rem",justifyContent:"space-between",borderBottom:"1px solid ".concat("rgba(".concat(Object(O.a)(t.palette.text.disabled),", 0.2)"))}})),M=Object(x.a)(g.a)((e=>{let{theme:t}=e;return{[t.breakpoints.down("lg")]:{width:"70%",height:"60%"},[t.breakpoints.down("md")]:{width:"80%",height:"70%"},[t.breakpoints.down("sm")]:{width:"90vw",height:"85vh"}}})),Y=Object(x.a)("img")((e=>{let{theme:t}=e;return{borderRadius:"4px",[t.breakpoints.down("sm")]:{width:"110%"}}})),q=Object(x.a)("div")((()=>({fontSize:"16px",fontWeight:"500",lineHeight:"1.5"}))),A=Object(x.a)("a")((()=>({display:"flex",color:"inherit"}))),N=Object(x.a)(c.a)((e=>{let{theme:t}=e;return{display:"flex",height:"100%",marginBottom:"-10px",flexDirection:"column",position:"relative",[t.breakpoints.down("md")]:{marginBottom:"5px"}}})),{RangePicker:V}=I.a,_=e=>{let{currentLocation:t,open:a,handleClose:i}=e;const[o,x]=Object(n.useState)("2018-03-01 00:00"),[O,g]=Object(n.useState)("2018-03-02 00:00"),{palette:w}=Object(h.a)(),C=Object(s.b)(),B=w.text.primary,[I,_]=Object(n.useState)("Spectrogram"),[R,G]=Object(n.useState)("Spectrogram"),{initGraph:J}=Object(s.c)((e=>e.graph)),[W,K]=Object(n.useState)(!1),[Z,U]=Object(n.useState)(""),[$,Q]=Object(n.useState)(50),[X,ee]=Object(n.useState)("");Object(n.useEffect)((()=>{console.log("child")})),Object(n.useEffect)((()=>{console.log("chil1"),K(!0),(async()=>{await C(Object(y.c)(o,O,t.replace(" ","_").toLowerCase()))})()}),[]),Object(n.useEffect)((()=>{if("Spectrogram"===I||"Octave Band"===I){if(0!==Object.keys(J).length){K(!1);const e=document.getElementById("outer"),t=document.createElement("div");return t.setAttribute("id","graphBox"),e.appendChild(t),window.Bokeh.embed.embed_item(J,"graphBox"),()=>{if(document.getElementById("graphBox")){document.getElementById("graphBox").remove()}}}}else if("SPDF"===I){K(!1);let e=J.image.split("'")[1];U(e)}}),[J]);const te=()=>t+"-"+o+"-"+O,ae={fieldSeparator:",",filename:"".concat(I,"-").concat(te()),quoteStrings:'"',decimalSeparator:".",showLabels:!0,showTitle:!1,useTextFile:!1,useBom:!0,useKeysAsHeaders:!0},ne=()=>$<1||$>80;return Object(z.jsx)(v.a,{open:a,sx:{zIndex:101},children:Object(z.jsxs)(M,{sx:{width:"60%",height:"70%",overflow:"scroll"},children:[Object(z.jsxs)(L,{children:[Object(z.jsxs)(q,{children:[t," Hydrophone Visualization"]}),Object(z.jsx)(l.a,{onClick:i,children:Object(z.jsx)(r.a,{sx:{color:B},children:"close"})})]}),Object(z.jsxs)(f.a,{container:!0,spacing:1,p:4,pb:0,mt:7,mb:2,sx:{"& .MuiTextField-root":{width:"100%"}},children:[Object(z.jsx)(f.a,{item:!0,lg:5,md:6,sm:12,xs:12,display:"flex",alignItems:"center",pt:0,children:Object(z.jsxs)(N,{children:[Object(z.jsx)(V,{status:"".concat(X),size:"large",showTime:{hideDisabledOptions:!0},style:{width:"100%"},defaultValue:[T(o),T(O)],value:[T(o),T(O)],format:"YYYY-MM-DD HH:mm",onCalendarChange:(e,t)=>{if(""!==t[1]){const t=e[1].diff(e[0],"minutes");ee(t<15?"error":"")}if(""===t[1]||t[0]!==o){const e=T(t[0]).add(1,"M"),a=T(e._d);x(t[0]),g(a.format("YYYY-MM-DD HH:mm"))}else g(t[1])},disabledDate:e=>e&&(e<T.utc([2015,0,14])||e>T.utc([2020,11,31]))}),""!==X&&Object(z.jsx)(c.a,{sx:{color:"red",position:"absolute",bottom:"-5px"},children:"Time interval should be at least 15 min!"})]})}),Object(z.jsx)(f.a,{item:!0,lg:3,md:3,sm:6,xs:12,children:Object(z.jsxs)(d.a,{fullWidth:!0,sx:{mb:1,width:"100%"},children:[Object(z.jsx)(b.a,{id:"demo-simple-select-label",children:"Type"}),Object(z.jsxs)(j.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:R,label:"Type",defaultValue:"Spectrogram",onChange:e=>{G(e.target.value)},children:[Object(z.jsx)(m.a,{value:"Spectrogram",children:"Spectrogram"}),Object(z.jsx)(m.a,{value:"SPDF",children:"SPDF"}),Object(z.jsx)(m.a,{value:"Octave Band",children:"Octave Band"})]})]})}),Object(z.jsx)(f.a,{item:!0,lg:3,md:3,sm:6,xs:12,children:Object(z.jsx)(p.a,{error:ne(),helperText:ne()&&"Frequency not in valid range",disabled:"Octave Band"!==R,required:!0,value:$,id:"outlined-required",label:"Required frequency 1-80",onChange:e=>{Q(e.target.value)}})})]}),Object(z.jsx)(f.a,{container:!0,spacing:1,p:4,pt:1,children:Object(z.jsx)(f.a,{item:!0,lg:6,md:6,sm:12,xs:12,children:Object(z.jsxs)(H,{children:[Object(z.jsxs)(P,{disabled:ne()||""!==X,variant:"contained",component:"span",onClick:()=>{K(!0),_(R);const e=t.replace(" ","_").toLowerCase();C(Object(y.d)(o,O,R,e,$))},children:[Object(z.jsx)(D.a,{sx:{mr:1}}),"Update"]}),Object(z.jsxs)(P,{variant:"contained",component:"span",onClick:()=>(()=>{const e=t.replace(" ","_").toLowerCase();S.a.post("/api/downloads",{startDate:o,endDate:O,location:e,currType:I,frequency:$}).then((e=>{console.log(e.data.data),new F.ExportToCsv(ae).generateCsv(e.data.data)}))})(),sx:{backgroundColor:"#008255"},children:[Object(z.jsx)(k.a,{sx:{mr:1}}),"CSV"]}),Object(z.jsx)(P,{disabled:"SPDF"!==I||!1!==W,variant:"contained",sx:{backgroundColor:"#008255"},children:Object(z.jsxs)(A,{href:"data:image/jpeg;base64,".concat(Z),download:"".concat(te(),".jpg"),children:[Object(z.jsx)(k.a,{sx:{mr:1}}),"JPG"]})})]})})}),Object(z.jsxs)(f.a,{container:!0,children:[W&&Object(z.jsx)(f.a,{item:!0,lg:12,md:12,sm:12,xs:12,alignItems:"center",justifyContent:"center",textAlign:"center",mb:"20px",children:Object(z.jsx)(u.a,{size:24,className:"buttonProgress"})}),"SPDF"===I&&""!==Z&&Object(z.jsx)(f.a,{item:!0,lg:12,md:12,sm:12,xs:12,children:Object(z.jsx)(E,{children:Object(z.jsx)(Y,{src:"data:image/jpg;base64,".concat(Z)})})})]}),Object(z.jsx)(f.a,{container:!0,children:Object(z.jsx)(f.a,{item:!0,lg:12,md:12,sm:12,xs:12,children:Object(z.jsx)(E,{style:{overflow:"auto"},children:("Spectrogram"===I||"Octave Band"===I)&&Object(z.jsx)(c.a,{id:"outer"})})})})]})})};var R=i.a.memo(_),G=a(325),J=a(371),W=a(368),K=a(323),Z=a.n(K);const U=i.a.forwardRef((function(e,t){return Object(z.jsx)(W.a,{elevation:6,ref:t,variant:"filled",...e})})),$=[{location:"Slope Base",latitude:44.5153,longitude:-125.39},{location:"Axial Base",latitude:45.8168,longitude:-129.754},{location:"Southern Hydrate",latitude:44.5691,longitude:-125.1479},{location:"Central Caldera",latitude:45.9546,longitude:-130.0089},{location:"Eastern Caldera",latitude:45.9396,longitude:-129.9738}],Q={id:"10m-bathymetry-81bsvj",type:"fill",source:"10m-bathymetry-81bsvj","source-layer":"10m-bathymetry-81bsvj",layout:{},paint:{"fill-outline-color":"hsla(337, 82%, 62%, 0)","fill-color":["interpolate",["cubic-bezier",0,.5,1,.5],["get","DEPTH"],200,"#78bced",9e3,"#15659f"]}};var X=function(){const[e,t]=Object(n.useState)(null),{graphList:a=[]}=Object(s.c)((e=>e.graph)),[l,r]=Object(n.useState)(!1),[d,b]=Object(n.useState)("axial_base"),j=Object(s.b)(),[m,p]=i.a.useState(!0),u=Object(n.useCallback)(((e,t)=>{r(e),b(t)}),[]),x=Object(n.useMemo)((()=>$.map(((e,a)=>Object(z.jsx)(G.b,{longitude:e.longitude,latitude:e.latitude,anchor:"bottom",onClick:a=>{a.originalEvent.stopPropagation(),t(e)},children:Object(z.jsx)(Z.a,{fontSize:"large"})},"marker-".concat(a))))),[]);return Object(z.jsxs)(G.e,{style:{height:"100vh"},initialViewState:{latitude:46.1651,longitude:-123.9237,zoom:6,bearing:0,pitch:0},mapStyle:"mapbox://styles/mapbox/streets-v11",mapboxAccessToken:"pk.eyJ1IjoiYW5kcmV3bGl1MTIzNCIsImEiOiJjbDVjNTZpa2swZTBsM2NtdGludmRqNGN3In0.3WcKjr2AOAzmio8bLvV_kg",children:[Object(z.jsx)(G.d,{id:"10m-bathymetry-81bsvj",type:"vector",url:"mapbox://mapbox.9tm8dx88",children:Object(z.jsx)(G.a,{...Q})}),Object(z.jsx)(J.a,{open:m,autoHideDuration:4e3,onClose:(e,t)=>{p(!1)},children:Object(z.jsx)(U,{children:"Click 1 of the 5 pins to explore the Hydrophone!"})}),x,e&&Object(z.jsxs)(n.Fragment,{children:[Object(z.jsxs)(G.c,{anchor:"top",longitude:Number(e.longitude),latitude:Number(e.latitude),onClose:()=>t(null),children:[Object(z.jsx)(c.a,{sx:{fontSize:"16px",pb:1},children:"Location:"}),Object(z.jsx)(c.a,{sx:{fontSize:"14px",pb:1},children:e.location}),Object(z.jsx)(o.a,{variant:"contained",color:"primary",size:"small",onClick:()=>u(!0,e.location),children:"Explore"})]}),l&&Object(z.jsx)(R,{currentLocation:d,graphData:a,handleClose:()=>{r(!1),j({type:y.a,payload:{}})},open:l})]})]})};t.default=()=>Object(z.jsx)(X,{})}}]);