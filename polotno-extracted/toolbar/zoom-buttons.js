var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ZoomButtons=exports.ZoomGroup=void 0;const t=e(require("react")),l=require("@blueprintjs/core"),o=require("@blueprintjs/core"),r=e(require("../utils/styled")),a=require("mobx-react-lite"),n=require("../utils/l10n"),u=require("../utils/screen"),s=require("@blueprintjs/icons"),i=(0,r.default)("div")`
  position: relative;
  height: 0px;
`,c=(0,r.default)("div")`
  position: absolute;
  bottom: 5px;
  width: auto;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 4px lightgrey;

  ${(0,u.mobileStyle)("\n    display: none;\n  ")}
`,d=[.1,.25,.5,.75,1,1.5,2,3,5],m=d[d.length-1],p=d[0];exports.ZoomGroup=(0,a.observer)((({store:e})=>{const r=Math.max(m,e.scaleToFit),a=Math.min(p,e.scaleToFit),u=e.scale<r,i=e.scale>a;return t.default.createElement(l.Navbar.Group,{style:{height:"35px"}},t.default.createElement(l.Button,{icon:t.default.createElement(s.ZoomOut,null),minimal:!0,onClick:()=>{e.setScale(e.scale/1.2)},disabled:!i}),t.default.createElement(o.Popover,{content:t.default.createElement(l.Menu,{style:{minWidth:"80px"}},d.map((o=>t.default.createElement(l.MenuItem,{key:o,text:Math.round(100*o)+"%",onClick:async()=>{e.setScale(o)}}))),t.default.createElement(l.MenuItem,{text:(0,n.t)("scale.reset"),onClick:async()=>{e.setScale(e.scaleToFit)}}))},t.default.createElement(l.Button,{minimal:!0},Math.round(100*e.scale)+"%")),t.default.createElement(l.Button,{icon:t.default.createElement(s.ZoomIn,null),minimal:!0,onClick:()=>{e.setScale(1.2*e.scale)},disabled:!u}))})),exports.ZoomButtons=(0,a.observer)((({store:e})=>t.default.createElement(i,null,t.default.createElement(c,null,t.default.createElement(l.Navbar,{style:{height:"35px",padding:"0 5px"}},t.default.createElement(exports.ZoomGroup,{store:e})))))),exports.default=exports.ZoomButtons;