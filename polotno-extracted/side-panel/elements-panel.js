var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ElementsPanel=exports.Shapes=exports.setDefaultColor=exports.NounprojectPanel=void 0;const t=e(require("react")),r=require("mobx-state-tree"),a=require("@blueprintjs/core"),i=require("@blueprintjs/icons"),s=require("./images-grid"),o=require("../utils/svg"),l=require("../utils/figure-to-svg"),n=e(require("../utils/styled")),d=require("../utils/l10n"),u=require("../utils/use-api"),c=require("../utils/api"),h=async e=>{const t=await fetch(c.URLS.nounProjectDownload(e)),r=await t.text();return await(0,o.svgToURL)(r)},g=(0,n.default)("div")`
  height: 100%;
  overflow: hidden;

  .bp5-dark & img {
    filter: invert(1);
  }
`;exports.NounprojectPanel=({store:e,query:a})=>{const{data:i,isLoading:o,loadMore:l,setQuery:n,hasMore:d}=(0,u.useInfiniteAPI)({defaultQuery:a,getAPI:({page:e,query:t})=>c.URLS.nounProjectList({query:t,page:e,limit:50}),getSize:e=>e.pagesNumber});return t.default.useEffect((()=>{n(a)}),[a]),t.default.createElement(g,null,t.default.createElement(s.ImagesGrid,{shadowEnabled:!1,images:null==i?void 0:i.map((e=>e.icons)).flat(),getPreview:e=>e.preview_url_84,isLoading:o,onSelect:async(t,a,i)=>{if(i&&"image"===i.type&&i.contentEditable){const e=await h(t.id);i.set({clipSrc:e})}else if(i&&"video"===i.type&&i.contentEditable){const e=await h(t.id);i.set({clipSrc:e})}else{e.history.transaction((async()=>{var i;const s=((null==a?void 0:a.x)||e.width/2)-100,o=((null==a?void 0:a.y)||e.height/2)-100,l=null===(i=e.activePage)||void 0===i?void 0:i.addElement({type:"svg",width:200,height:200,x:s,y:o}),n=await h(t.id);(0,r.isAlive)(l)&&await l.set({src:n})}))}},rowsNumber:4,loadMore:d&&l}))};const p=[{preview:o.svgToURL`
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="16">
  <path stroke="#C0BFBF" strokeWidth="4" d="M 1 8 L 30 8"></path>
</svg>
`,data:{}},{preview:o.svgToURL`
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="16">
  <path stroke="#C0BFBF" strokeWidth="4" stroke-dasharray="4 2" d="M 1 8 L 30 8"></path>
</svg>
`,data:{dash:[4,2]}},{preview:o.svgToURL`
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="16">
  <path stroke="#C0BFBF" strokeWidth="4" stroke-dasharray="1 1" d="M 1 8 L 30 8"></path>
</svg>
`,data:{dash:[1,1]}},{preview:o.svgToURL`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16">
    <path
      stroke="#C0BFBF"
      strokeWidth="2"
      d="M 25 6 L 29 8 L 25 10"
      fill="none"
      strokeLinejoin="round"
      strokeLinecap="round"
    ></path>
    <path
      stroke="#C0BFBF"
      strokeWidth="4" d="M 1 8 L 29 8"
      strokeLinejoin="round"
      strokeLinecap="round"
    ></path>
  </svg>
`,data:{endHead:"arrow"}},{preview:o.svgToURL`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16">
    <path
      stroke="#C0BFBF"
      strokeWidth="2"
      d="M 25 6 L 29 8 L 25 10 Z"
      fill="#C0BFBF"
      strokeLinejoin="round"
      strokeLinecap="round"
    ></path>
    <path
      stroke="#C0BFBF"
      strokeWidth="4" d="M 1 8 L 29 8"
      strokeLinejoin="round"
      strokeLinecap="round"
    ></path>
    <circle cx="3" cy="8" r="2" fill="#C0BFBF"></circle>
  </svg>
`,data:{startHead:"circle",endHead:"triangle"}},{preview:o.svgToURL`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16">
    <path
      stroke="#C0BFBF"
      strokeWidth="2"
      d="M 1 6 L 5 6 L 5 10 L 1 10 Z"
      fill="#C0BFBF"
      strokeLinejoin="round"
      strokeLinecap="round"
    ></path>
    <path
      stroke="#C0BFBF"
      strokeWidth="4" d="M 1 8 L 29 8"
      strokeLinejoin="round"
      strokeLinecap="round"
      stroke-dasharray="2 1"
    ></path>
    <path
      stroke="#C0BFBF"
      strokeWidth="4" d="M 29 6 L 29 10"
      strokeLinejoin="round"
      strokeLinecap="round"
    ></path>
  </svg>
`,data:{startHead:"square",endHead:"bar",dash:[2,1]}}];let v="rgba(191, 191, 191, 100)";exports.setDefaultColor=e=>{v=e};const w=({store:e})=>t.default.createElement(s.ImagesGrid,{shadowEnabled:!1,rowsNumber:3,images:p,getPreview:e=>e.preview,itemHeight:50,isLoading:!1,onSelect:async(t,r,a)=>{const i=e.activePage.computedWidth/3;e.activePage.addElement(Object.assign({type:"line",x:r?r.x:e.activePage.computedWidth/2-i/2,y:r?r.y:e.activePage.computedHeight/2,color:v,width:i},t.data))}}),f=Object.keys(l.TYPES),m=[{width:300,height:300,fill:"rgba(191, 191, 191, 100)",stroke:"#0c0c0c",strokeWidth:0,url:""}],L=[];f.forEach((e=>{m.forEach((t=>{L.push(Object.assign({subType:e},t))}))})),L.forEach((e=>{e.url=(0,o.svgToURL)((0,l.figureToSvg)(e))}));const k=(0,n.default)("div")`
  height: 220px;
`,y=({store:e})=>{const r=Math.ceil(L.length/4)||1;return t.default.createElement(k,{style:{height:110*r+"px"}},t.default.createElement(s.ImagesGrid,{shadowEnabled:!1,rowsNumber:4,images:L,getPreview:e=>e.url,isLoading:!1,itemHeight:100,onSelect:async(t,r,a)=>{var i;if(a&&"image"===a.type&&a.contentEditable){return void a.set({clipSrc:t.url})}if(a&&"video"===a.type&&a.contentEditable){return void a.set({clipSrc:t.url})}const s=(e.activePage.computedWidth+e.activePage.computedHeight)/2160,o=t.width*s,l=t.height*s,n=((null==r?void 0:r.x)||e.activePage.computedWidth/2)-o/2,d=((null==r?void 0:r.y)||e.activePage.computedHeight/2)-l/2;null===(i=e.activePage)||void 0===i||i.addElement(Object.assign(Object.assign({type:"figure"},t),{x:n,y:d,width:o,height:l,fill:v}))}}))},x=(0,n.default)("div")`
  height: 220px;
`;exports.Shapes=({store:e})=>t.default.createElement("div",{style:{display:"flex",flexDirection:"column",height:"100%",overflow:"auto"}},t.default.createElement("p",null,(0,d.t)("sidePanel.lines")),t.default.createElement(x,null,t.default.createElement(w,{store:e})),t.default.createElement("p",null,(0,d.t)("sidePanel.shapes")),t.default.createElement(y,{store:e})),exports.ElementsPanel=({store:e})=>{const r=t.default.useRef(),[s,o]=t.default.useState(""),[l,n]=t.default.useState(s);t.default.useEffect((()=>(r.current=setTimeout((()=>{n(s)}),500),()=>{clearTimeout(r.current)})),[s]);const u=!!l;return t.default.createElement("div",{style:{height:"100%",display:"flex",flexDirection:"column"}},t.default.createElement(a.InputGroup,{leftIcon:t.default.createElement(i.Search,null),placeholder:(0,d.t)("sidePanel.searchPlaceholder"),onChange:e=>{o(e.target.value)},style:{marginBottom:"20px"},type:"search"}),u&&t.default.createElement(exports.NounprojectPanel,{query:l,store:e}),!u&&t.default.createElement(exports.Shapes,{store:e}))};