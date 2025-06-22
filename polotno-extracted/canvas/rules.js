var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.TopRules=void 0,exports.LeftRules=function(){return t.default.createElement("div",null,t.default.createElement("h1",null,"Top rules"))};const t=e(require("react")),l=require("../utils/math"),o=require("../utils/unit"),r=require("mobx-react-lite"),i=require("../utils/goober"),d=(0,i.styled)("div",t.default.forwardRef)`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`,a=(0,i.styled)("div",t.default.forwardRef)`
  height: 14px;
  position: sticky;
  font-size: 8px;
  line-height: 14px;
  top: 0;
  left: 0;
  color: grey;
  border-bottom: 1px solid grey;
  background-color: #e8e8e8;
  overflow: hidden;
`,s=(0,i.styled)("div",t.default.forwardRef)`
  left: 0;
  width: 14px;
  position: sticky;
  font-size: 8px;
  line-height: 14px;
  color: grey;
  border-right: 1px solid grey;
  background-color: #e8e8e8;
  overflow: hidden;
`,n=(0,i.styled)("div",t.default.forwardRef)`
  position: absolute;
  border-left: 1px solid grey;
  padding-left: 2px;
`,u=(0,i.styled)("div",t.default.forwardRef)`
  position: absolute;
  left: 14px;
  border-left: 1px solid grey;
  padding-left: 2px;
  transform: rotate(90deg);
  transform-origin: left top;
  overflow: hidden;
`,p=[.1,.2,.5,1,2,5,10,20,25,50,100,200,500,1e3,2e3,5e3,1e4];exports.TopRules=(0,r.observer)((({store:e,width:r,height:i})=>{const f=t.default.useRef(null);if(!e.activePage){return null}const c=e.activePage,h=(e.bleedVisible&&c.bleed,c.computedWidth*e.scale),x=c.computedHeight*e.scale,g=(r-h)/2,y=(m=t=>(0,o.unitToPx)({unitVal:t,dpi:e.dpi,unit:e.unit})*e.scale,p.find((e=>m(e)>30))||1e4);var m;const b=(0,o.unitToPx)({unitVal:y,dpi:e.dpi,unit:e.unit})*e.scale,v=Math.round(h/b)+1,w=Math.round(x/b)+1,R=(0,l.getTotalClientRect)(e.selectedShapes);return t.default.createElement(d,{ref:f,className:"polotno-rulers"},t.default.createElement(a,{style:{width:r+"px"},className:"polotno-x-ruler"},[...Array(v)].map(((l,o)=>t.default.createElement(n,{key:o,style:{left:g+o*b+"px",width:b+"px"}},"px"===e.unit||y>=1?Math.round(y*o):(y*o).toFixed(1)))),!!e.selectedShapes.length&&t.default.createElement("div",{style:{position:"absolute",left:g+R.x*e.scale+"px",height:"14px",width:R.width*e.scale,backgroundColor:"rgba(0,0,0,0.15)"}})),e.pages.map(((l,o)=>{var r;const d=l.computedHeight*e.scale,a=(i-d)/2;return t.default.createElement(s,{key:l.id,style:{height:i+"px"},className:"polotno-y-ruler"},[...Array(w)].map(((l,o)=>t.default.createElement(u,{key:o,style:{top:a+o*b-14+"px",width:b+"px"}},"px"===e.unit||y>=1?Math.round(y*o):(y*o).toFixed(1)))),(null===(r=e.selectedShapes[0])||void 0===r?void 0:r.page)===l&&t.default.createElement("div",{style:{position:"absolute",top:a+R.y*e.scale-14+"px",width:"14px",height:R.height*e.scale,backgroundColor:"rgba(0,0,0,0.15)"}}))})))}));