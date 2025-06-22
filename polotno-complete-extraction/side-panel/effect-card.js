var e,t,r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.EffectCard=void 0;const l=r(require("react")),a=r(require("../utils/styled")),i=require("../utils/filters"),f=(0,a.default)("div")`
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  width: calc(33% - 16px);
  gap: 8px;
  cursor: pointer;
`,s=(0,a.default)("span")`
  text-align: center;
`,d=(0,a.default)("div")`
  position: relative;
  border-radius: 10px;
  box-sizing: border-box;
  height: 90px;
`,n=(0,a.default)("img")`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`,u=(0,a.default)("div")`
  left: -4px;
  top: -4px;
  bottom: -4px;
  right: -4px;
  display: flex;
  position: absolute;
  border-radius: 15px;
  padding: 2px;
  transition: 0.2s border;
  border: 2px solid ${e=>e.active?"white":"transparent"};
`;exports.EffectCard=({title:e,imageSrc:t,effect:r,onClick:a,active:i})=>{const n=E(r);return l.default.createElement(f,{onClick:a},l.default.createElement(d,null,l.default.createElement(u,{active:i}),l.default.createElement(n,{src:t})),l.default.createElement(s,null,e))};const c=(0,a.default)(n)`
  filter: sepia(1);
`,o=(0,a.default)(n)`
  filter: grayscale(1);
`,p=(0,a.default)(n)`
  filter: ${null===(e=(0,i.shapeFilterToCSS)(i.Effects.warm))||void 0===e?void 0:e.filter};
`,x=e=>{const{html:t,filter:r}=(0,i.shapeFilterToCSS)(i.Effects.cold);return l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{style:{display:"none"},dangerouslySetInnerHTML:{__html:t}}),l.default.createElement(n,Object.assign({style:{filter:r}},e)))},m=(0,a.default)(n)`
  filter: ${null===(t=(0,i.shapeFilterToCSS)(i.Effects.natural))||void 0===t?void 0:t.filter};
`,E=e=>{switch(e){case i.Effects.sepia:return c;case i.Effects.grayscale:return o;case i.Effects.warm:return p;case i.Effects.cold:return x;case i.Effects.natural:return m;default:return n}};