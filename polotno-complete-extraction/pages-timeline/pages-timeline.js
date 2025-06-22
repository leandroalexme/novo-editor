var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.PagesTimeline=exports.Pages=void 0;const t=require("mobx-react-lite"),a=e(require("react")),n=require("mobx-state-tree"),o=require("@blueprintjs/core"),l=require("@blueprintjs/icons"),i=require("react-sortablejs"),r=require("../utils/flags"),s=e(require("../utils/styled")),d=require("../utils/l10n"),u=require("../utils/deep-equal"),c=(0,s.default)("div")`
  position: relative;
  height: 0px;
`,p=(0,s.default)("div")`
  position: absolute;
  bottom: 5px;
  width: auto;
  left: 5px;
  overflow: hidden;
  box-shadow: 0 0 4px lightgrey;
  border-radius: 5px;
  z-index: 1;
`,m=(0,s.default)("div",a.default.forwardRef)`
  display: flex;
  position: relative;
  border-radius: 15px;

  &:hover {
    .polotno-page-menu {
      opacity: 1;
      pointer-events: auto;
    }
  }
`,f=(0,s.default)("div")`
  position: relative;

  &:hover {
    .polotno-audio-menu {
      opacity: 1;
      pointer-events: auto;
    }
  }
`,g=(0,s.default)("div")`
  position: absolute;
  z-index: 20;
  top: 5px;
  right: 5px;
  opacity: 0;
  pointer-events: none;

  &:hover {
    display: block;
  }
`,h=(0,s.default)("div")`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #09f;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,x=(0,s.default)("div")`
  position: absolute;
  z-index: 20;
  top: -5px;
  right: 8px;
  opacity: 0;
  pointer-events: none;

  &:hover {
    display: block;
  }
`;let v=[],b=!1;const E=async()=>{if(b||0===v.length){return}b=!0;const{page:e,setPreview:t}=v.shift();try{t(await e.store.toDataURL({pageId:e.id,pixelRatio:.1,quickMode:!0}))}catch(a){if(a.message.includes("Canvas was unmounted.")){return}throw a}b=!1,E()},w=(0,t.observer)((({page:e,scale:t})=>{const[i,s]=a.default.useState(null),c=e.store.activePage===e,p=e.store,f=a.default.useRef(!1);a.default.useEffect((()=>{const t=()=>{v.push({page:e,setPreview:s}),E()};let a=null,o=null,l=Date.now();const i=()=>{a&&clearTimeout(a),f.current&&(o||(o=setTimeout((()=>{Date.now()-l>=6e3&&(t(),l=Date.now(),o=null)}),6e3)),a=setTimeout((()=>{t(),l=Date.now(),a=null,o&&(clearTimeout(o),o=null)}),300))};let r=null;const d=(0,n.onSnapshot)(e,(e=>{(0,u.deepEqual)(r,e)||(i(),r=e)})),c=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?(f.current=!0,i()):(a&&clearTimeout(a),o&&clearTimeout(o),f.current=!1)}))}),{threshold:.1});return x.current&&c.observe(x.current),()=>{c.disconnect(),a&&clearTimeout(a),o&&clearTimeout(o),d(),v=v.filter((t=>t.page!==e))}}),[]);const x=a.default.useRef(null),b=60/e.computedHeight*e.computedWidth,w=r.flags.animationsEnabled?e.duration*t:b,y=p.pages.length>1;return a.default.createElement(m,{style:{width:w+"px",marginRight:r.flags.animationsEnabled?"0px":"10px",height:"60px"},ref:x,className:"polotno-page-container"},a.default.createElement("div",{style:{width:"100%",height:"100%",borderRadius:"15px",backgroundImage:i?`url("${i}")`:"none",backgroundRepeat:"repeat-x",backgroundSize:"auto 100%",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center"},onClick:()=>{e.store.selectPage(e.id)}},!i&&a.default.createElement(h,null)),a.default.createElement("div",{style:{position:"absolute",top:"0",left:"0px",bottom:"0px",right:"0px",borderRadius:"15px",border:c?"2px solid rgb(0, 161, 255, 0.9)":"2px solid lightgrey",zIndex:1,pointerEvents:"none"}}),r.flags.animationsEnabled&&a.default.createElement("div",{style:{position:"absolute",zIndex:1,bottom:"5px",left:"5px",backgroundColor:"rgba(0, 0, 0, 0.5)",color:"white",padding:"2px 7px",textAlign:"center",borderRadius:"4rem"}},(e.duration/1e3).toFixed(1),"s"),r.flags.animationsEnabled&&a.default.createElement("div",{style:{position:"absolute",zIndex:1,top:"50%",right:"0px",width:"8px",height:"50%",transform:"translateY(-50%) translateX(-3px)",borderRadius:"5px",border:"1px solid rgb(255, 255, 255, 0.6)",backgroundColor:"rgb(0, 0, 0, 0.6)",cursor:"ew-resize"},onMouseDown:t=>{(t=>{t.preventDefault();const a=t=>{t.preventDefault();const{clientX:a}=t,{left:n,width:o}=x.current.getBoundingClientRect(),l=(a-n- -7)/o;e.set({duration:Math.max(1e3,l*e.duration)})};window.addEventListener("mousemove",a),window.addEventListener("mouseup",(()=>{window.removeEventListener("mousemove",a)}))})(t)}}),a.default.createElement(g,{className:"polotno-page-menu",onClick:e=>{e.stopPropagation()}},a.default.createElement(o.Popover,{content:a.default.createElement(o.Menu,{style:{width:"100px"}},a.default.createElement(o.MenuItem,{icon:a.default.createElement(l.Duplicate,null),text:(0,d.t)("pagesTimeline.duplicatePage"),onClick:()=>{e.clone()}}),a.default.createElement(o.MenuItem,{icon:a.default.createElement(l.Insert,null),text:(0,d.t)("pagesTimeline.addPage"),onClick:()=>{var t,a,n;const o=p.addPage({bleed:(null===(t=p.activePage)||void 0===t?void 0:t.bleed)||0,width:(null===(a=p.activePage)||void 0===a?void 0:a.width)||"auto",height:(null===(n=p.activePage)||void 0===n?void 0:n.height)||"auto"}),l=p.pages.indexOf(e);o.setZIndex(l+1)}}),y&&a.default.createElement(o.MenuItem,{icon:a.default.createElement(l.Trash,null),text:(0,d.t)("pagesTimeline.removePage"),onClick:()=>{e.store.deletePages([e.id])}})),position:o.Position.TOP},a.default.createElement(o.Button,{icon:a.default.createElement(l.More,null),style:{minHeight:"20px",borderRadius:"10px"}}))))})),y=(0,t.observer)((({store:e,scale:t})=>{var n;const o=e.isPlaying?e.currentTime:(null===(n=e.activePage)||void 0===n?void 0:n.startTime)||0;return a.default.createElement("div",{style:{position:"absolute",left:o*t+"px",top:"-5px",width:"2px",height:"calc(100% + 10px)",backgroundColor:"rgb(0, 161, 255, 0.9)"}})}));exports.Pages=(0,t.observer)((({store:e,scale:t})=>{const n=e.pages.map((e=>({id:e.id})));return a.default.createElement(a.default.Fragment,null,a.default.createElement(i.ReactSortable,{list:n,setList:t=>{t.forEach((({id:t},a)=>{const n=e.pages.find((e=>e.id===t));e.pages.indexOf(n)!==a&&n.setZIndex(a)}))},direction:"horizontal",style:{display:"flex",flexDirection:"row"},delay:500,delayOnTouchOnly:!0,className:"polotno-pages-container"},n.map((({id:n})=>{const o=e.pages.find((e=>e.id===n));return a.default.createElement(w,{page:o,scale:t,key:n})}))))}));const P=(0,t.observer)((({audio:e,scale:t,store:n,index:i})=>{const r=n.duration*t-e.delay*t,s=Math.min((e.endTime-e.startTime)*e.duration*t,r),u=e.delay*t,{data:c,isLoading:p}=function(e){const[t,n]=a.default.useState(null),[o,l]=a.default.useState(!1),[i,r]=a.default.useState(null);return a.default.useEffect((()=>{var t;e?(l(!0),(t=e,new Promise((e=>{const a=new AudioContext;fetch(t).then((e=>e.arrayBuffer())).then((e=>a.decodeAudioData(e))).then((t=>{const a=t.getChannelData(0),n=Math.max(1,Math.floor(a.length/100)),o=[];for(let e=0;e<a.length;e+=n){let t=0;for(let o=0;o<n&&e+o<a.length;o++){t=Math.max(t,Math.abs(a[e+o]))}o.push(t)}e(o)}))}))).then((e=>{n(e),l(!1)})).catch((e=>{console.error("Error generating waveform:",e),r(e),l(!1)}))):n(null)}),[e]),{data:t,isLoading:o,error:i}}(e.src),m=function(e,t,n,o,l=20){const[i,r]=a.default.useState("");return a.default.useEffect((()=>{r(e&&t>0?function(e,t,a,n,o){let l="";const i=t/2,r=Math.floor(e.length*n),s=Math.ceil(e.length*o),d=e.slice(r,s);if(0===d.length){return""}d.forEach(((e,t)=>{const n=t/(d.length-1)*a,o=i-e*i;l+=0===t?`M ${n},${o}`:` L ${n},${o}`}));for(let u=d.length-1;u>=0;u--){const e=u/(d.length-1)*a,t=i+d[u]*i;l+=` L ${e},${t}`}return l+=" Z",l}(e,l,t,n,o):"")}),[e,t,l,n,o]),i}(c,s,e.startTime,e.endTime,20),g=e=>{const a=n.pages;let o=e;for(const n of a){const a=n.startTime,l=n.startTime+n.duration;if(Math.abs(e-a)<10/t){return o=a,o}if(Math.abs(e-l)<10/t){return o=l,o}}return null},v=(a,n)=>{a.stopPropagation(),a.preventDefault();const o=a.clientX,l=u,i=s,r=e.endTime,d=e.startTime,c=a=>{a.preventDefault();const s=(a.clientX-o)/t;if("start"===n){let a=Math.max(0,l/t+s);a=g(a)||a;const n=s/e.duration,o=Math.min(e.endTime-.1,Math.max(0,d+n));e.set({delay:a,startTime:o})}else{const a=l/t+i/t;let n=a+s;n=g(n)||n;const o=(n-a)/e.duration,d=Math.min(1,Math.max(e.startTime+.1,r+o));e.set({endTime:d})}},p=()=>{window.removeEventListener("mousemove",c),window.removeEventListener("mouseup",p)};window.addEventListener("mousemove",c),window.addEventListener("mouseup",p)};return a.default.createElement(f,{style:{position:"absolute",left:`${u}px`,top:20*i+"px",width:`${s}px`,height:"20px",backgroundColor:"rgba(0, 161, 255, 0.5)",borderRadius:"8px",cursor:"move"},onMouseDown:a=>{const n=a.clientX,o=u;a.preventDefault();const l=a=>{a.preventDefault();const l=(a.clientX-n)/t;let i=o/t+l;const r=(e.endTime-e.startTime)*e.duration,s=i+r,d=g(i),u=g(s),c=Math.abs(i-d),p=Math.abs(s-u);let m;m=null!==d&&c<p?Math.max(0,d):null!==u?Math.max(0,u-r):Math.max(0,i),e.set({delay:m})},i=()=>{window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",i)};window.addEventListener("mousemove",l),window.addEventListener("mouseup",i)},className:"polotno-audio-container"},m&&a.default.createElement("svg",{width:"100%",height:"100%",viewBox:`0 0 ${s} 20`,preserveAspectRatio:"none"},a.default.createElement("path",{d:m,fill:"rgba(255, 255, 255, 0.5)"})),p&&a.default.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}},a.default.createElement(h,null)),a.default.createElement("div",{style:{position:"absolute",left:"0",top:"0",width:"10px",height:"100%",cursor:"ew-resize"},onMouseDown:e=>v(e,"start")}),a.default.createElement("div",{style:{position:"absolute",right:"0",top:"0",width:"10px",height:"100%",cursor:"ew-resize"},onMouseDown:e=>v(e,"end")}),a.default.createElement(x,{className:"polotno-audio-menu",onClick:e=>{e.stopPropagation()}},a.default.createElement(o.Popover,{content:a.default.createElement(o.Menu,{style:{width:"100px"}},a.default.createElement(o.MenuItem,{icon:a.default.createElement(l.Trash,null),text:(0,d.t)("pagesTimeline.removeAudio"),onClick:()=>{n.removeAudio(e.id)}})),position:o.Position.TOP},a.default.createElement(o.Button,{icon:a.default.createElement(l.More,null),style:{minHeight:"20px",borderRadius:"10px",padding:"0px"}}))))})),T=(0,t.observer)((({store:e,scale:t})=>a.default.createElement("div",{style:{position:"absolute",bottom:"-15px",paddingTop:"5px"},className:"polotno-audios-container"},e.audios.map(((n,o)=>a.default.createElement(P,{key:n.id,audio:n,scale:t,store:e,index:o})))))),M=e=>{const t=Math.floor(e/6e4),a=Math.floor(e%6e4/1e3);return`${t.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`},k=(0,s.default)("div")`
  position: absolute;
  top: 5px;
  left: 5px;
  padding-right: 8px;
  z-index: 2;
  width: 100px;
  text-align: center;
`,C=(0,t.observer)((({store:e})=>a.default.createElement(k,{className:"polotno-play-button-container"},a.default.createElement(o.Button,{icon:e.isPlaying?a.default.createElement(l.Pause,{size:25}):a.default.createElement(l.Play,{size:25}),onClick:()=>{var t;if(e.isPlaying){const t=e.activePage;e.stop(),t&&e.selectPage(t.id)}else{e.play({startTime:(null===(t=e.activePage)||void 0===t?void 0:t.startTime)||0})}},style:{width:"60px",height:"60px",borderRadius:"50px"}}),a.default.createElement("div",{style:{paddingTop:"5px"}},M(e.currentTime)," / ",M(e.duration)))));exports.PagesTimeline=(0,t.observer)((({store:e,defaultOpened:t=!1})=>{const n=.02,[i,s]=a.default.useState(t),u=r.flags.animationsEnabled?10*e.audios.length+90:90;return a.default.createElement(a.default.Fragment,null,a.default.createElement(c,null,a.default.createElement(p,null,a.default.createElement(o.Navbar,{style:{height:"35px",padding:"0 5px"}},a.default.createElement(o.Navbar.Group,{style:{height:"35px"}},a.default.createElement(o.Button,{minimal:!0,onClick:()=>{s(!i)},icon:r.flags.animationsEnabled&&!i?a.default.createElement(l.Play,null):null},(0,d.t)("pagesTimeline.pages")))))),a.default.createElement(o.Navbar,{style:{padding:"5px",height:"auto",zIndex:1,display:i?"block":"none"},className:"polotno-pages-timeline"},a.default.createElement("div",{style:{width:"100%",position:"relative",height:u}},a.default.createElement("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,overflowX:"auto",padding:"5px",zIndex:1,display:"flex"}},a.default.createElement("div",{style:{height:"60px",display:"flex"}},r.flags.animationsEnabled&&a.default.createElement("div",{style:{width:"90px",paddingRight:"5px",paddingLeft:"60px"}}),a.default.createElement("div",{style:{position:"relative"}},a.default.createElement(exports.Pages,{store:e,scale:n}),r.flags.animationsEnabled&&a.default.createElement(y,{store:e,scale:n}),r.flags.animationsEnabled&&a.default.createElement(T,{store:e,scale:n})),a.default.createElement(o.Button,{icon:a.default.createElement(l.Plus,null),style:{width:"60px"},onClick:()=>{var t;e.addPage({bleed:(null===(t=e.activePage)||void 0===t?void 0:t.bleed)||0})},minimal:!0}))),r.flags.animationsEnabled&&a.default.createElement(C,{store:e}))))}));