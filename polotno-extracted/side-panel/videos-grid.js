var e,t=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var i=Object.getOwnPropertyDescriptor(t,r);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,i)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||(e=function(t){return e=Object.getOwnPropertyNames||function(e){var t=[];for(var r in e){Object.prototype.hasOwnProperty.call(e,r)&&(t[t.length]=r)}return t},e(t)},function(n){if(n&&n.__esModule){return n}var i={};if(null!=n){for(var a=e(n),l=0;l<a.length;l++){"default"!==a[l]&&t(i,n,a[l])}}return r(i,n),i}),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.VideosGrid=void 0;const a=n(require("react")),l=i(require("../utils/styled")),o=require("@blueprintjs/core"),u=require("../canvas/page"),d=(0,l.default)("div")`
  height: 100%;
  overflow: auto;
`,c=(0,l.default)("div")`
  width: 50%;
  float: left;
`,s=(0,l.default)("div")`
  padding: 5px;
  width: 100%;
  &:hover .video-grid__item-credit {
    opacity: 1;
  }
`,f=(0,l.default)("div")`
  position: relative;
`,p=(0,l.default)("video",a.default.forwardRef)`
  width: 100%;
  cursor: pointer;
  display: block;
  max-height: 300px;
  min-height: 50px;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(16, 22, 26, 0.3);
`,g=(0,l.default)("div")`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 2px 7px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
`,m=(0,l.default)("span")`
  font-size: 12px;
`,v=(0,l.default)("div",a.default.forwardRef)`
  padding: 3rem;
`,b=(0,l.default)("div")`
  position: absolute;
  opacity: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 3px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.6)
  );
  color: white;
  font-size: 10px;
  text-align: center;
`;exports.VideosGrid=({items:e,onSelect:t,loadMore:r,isLoading:n,error:i,getCredit:l})=>{const s=(0,a.useRef)(null),f=(0,a.useCallback)((e=>{n||(s.current&&s.current.disconnect(),s.current=new IntersectionObserver((e=>{e[0].isIntersecting&&r()})),e&&s.current.observe(e))}),[n]);if(i){return a.default.createElement("div",null,i.message)}if(!e||0===e.length){return null}const p=e.filter(((e,t)=>t%2==1)),g=e.filter(((e,t)=>t%2==0));return a.default.createElement(d,null,[p,g].map(((e,r)=>a.default.createElement(c,{key:r},e.map((e=>a.default.createElement(h,{key:e.id,item:e,onClick:()=>t(e),onDragStart:r=>{(0,u.registerNextDomDrop)(((r,n)=>{t(e,r,n)}))},onDragEnd:()=>(0,u.registerNextDomDrop)(null),getCredit:l}))),a.default.createElement(v,{ref:f},n&&a.default.createElement(o.Spinner,null))))))};const h=({item:e,onClick:t,onDragEnd:r,onDragStart:n,getCredit:i})=>{var l;const o=(0,a.useRef)(null),u=(null===(l=e.video_files.find((e=>"sd"===e.quality)))||void 0===l?void 0:l.link)||"";if(!u){return null}const d=new Date(1e3*e.duration).toISOString();let c;return c=e.duration>3600?d.substring(11,19):d.substring(14,19),a.default.createElement(s,null,a.default.createElement(f,{draggable:!0,onClick:t,onDragEnd:r,onDragStart:n,onMouseEnter:()=>{var e;null===(e=o.current.play())||void 0===e||e.catch((()=>{}))},onMouseLeave:()=>{var e;null===(e=o.current.pause())||void 0===e||e.catch((()=>{})),o.current.currentTime=0}},a.default.createElement(p,{poster:e.video_pictures[0].picture,controls:!1,ref:o,muted:!0,preload:"none",playsInline:!0},a.default.createElement("source",{src:u})),a.default.createElement(g,null,a.default.createElement(m,null,c)),i&&a.default.createElement(b,{className:"video-grid__item-credit"},i(e))))};