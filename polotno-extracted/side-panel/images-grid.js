var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ImagesGrid=void 0;const t=e(require("react")),r=e(require("../utils/styled")),l=require("@blueprintjs/core"),a=require("../utils/l10n"),o=require("../canvas/page"),i=require("../utils/screen"),n=(0,r.default)("div",t.default.forwardRef)`
  height: 100%;
  overflow: auto;
`,d=(0,r.default)("div")`
  width: 33%;
  float: left;
`,s=(0,r.default)("div")`
  padding: 5px;
  width: 100%;
  &:hover .credit {
    opacity: 1;
  }
  ${(0,i.mobileStyle)("\n    .credit {\n      opacity: 1;\n    }\n  ")}
`,u=(0,r.default)("div")`
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  box-shadow: ${e=>e["data-shadowenabled"]?"0 0 5px rgba(16, 22, 26, 0.3)":""};
`,c=(0,r.default)("img")`
  width: 100%;
  cursor: pointer;
  display: block;
  max-height: 300px;
  min-height: 50px;
  object-fit: contain;
`,g=(0,r.default)("div")`
  position: absolute;
  bottom: 0px;
  left: 0px;
  font-size: 10px;
  padding: 3px;
  padding-top: 10px;
  text-align: center;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.6)
  );
  width: 100%;
  opacity: 0;
  color: white;
`,f=(0,r.default)("p")`
  text-align: center;
  padding: 30px;
`,p=({url:e,credit:r,onSelect:l,crossOrigin:a,shadowEnabled:i,itemHeight:n,className:d,onLoad:f})=>{const p=null==i||i;return t.default.createElement(s,{onClick:()=>{l()},className:"polotno-close-panel"},t.default.createElement(u,{"data-shadowenabled":p},t.default.createElement(c,{className:d,style:{height:null!=n?n:"auto"},src:e,draggable:!0,loading:"lazy",crossOrigin:a,onDragStart:()=>{(0,o.registerNextDomDrop)((({x:e,y:t},r,a)=>{l({x:e,y:t},r,a)}))},onDragEnd:()=>{(0,o.registerNextDomDrop)(null)},onLoad:f}),r&&t.default.createElement(g,{className:"credit"},r)))};exports.ImagesGrid=({images:e,onSelect:r,isLoading:o,getPreview:i,loadMore:s,getCredit:u,getImageClassName:c,rowsNumber:g,crossOrigin:m="anonymous",shadowEnabled:h,itemHeight:v,error:x,hideNoResults:b=!1})=>{const w=g||2,y=t.default.useRef(null),E=[];for(var N=0;N<w;N++){E.push((e||[]).filter(((e,t)=>t%w===N)))}const S=t.default.useRef(null),q=()=>{var t,r,l;const a=(null===(t=y.current)||void 0===t?void 0:t.scrollHeight)>(null===(r=y.current)||void 0===r?void 0:r.offsetHeight)+5,i=e&&e.length,n=Array.from(null===(l=y.current)||void 0===l?void 0:l.querySelectorAll("img")).every((e=>e.complete));!a&&s&&!o&&i&&n&&(S.current||(S.current=window.setTimeout((()=>{S.current=null,s&&s()}),100)))},D=()=>{q()};return t.default.useEffect((()=>(q(),()=>{window.clearTimeout(S.current),S.current=null})),[e&&e.length,o]),t.default.createElement(n,{onScroll:e=>{const t=e.target.scrollHeight-e.target.scrollTop-e.target.offsetHeight;s&&!o&&t<200&&s()},ref:y},E.map(((e,a)=>t.default.createElement(d,{key:a,style:{width:100/w+"%"}},e.map(((e,l)=>t.default.createElement(p,{url:i(e),onSelect:(t,l,a)=>r(e,t,l,a),key:l,credit:u&&u(e),crossOrigin:m,shadowEnabled:h,itemHeight:v,className:c&&c(e),onLoad:D}))),o&&t.default.createElement("div",{style:{padding:"30px"}},t.default.createElement(l.Spinner,null))))),!o&&(!e||!e.length)&&!x&&!b&&t.default.createElement(f,null,(0,a.t)("sidePanel.noResults")),x&&t.default.createElement(f,null,(0,a.t)("sidePanel.error")))};