var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.SectionTab=void 0;const t=e(require("react")),i=e(require("../utils/styled")),n=require("../utils/screen"),a=(0,i.default)("div")`
  width: 100%;
  height: 72px;
  padding-top: 15px;
  padding-left: 5px;
  padding-right: 5px;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
  white-space: pre;

  .bp5-dark &:hover,
  .bp5-dark &.active {
    color: #48aff0 !important;
  }

  &:hover,
  &.active {
    background-color: rgba(19, 124, 189, 0.2);
  }

  ${(0,n.mobileStyle)("\n    height: 54px;\n    padding-top: 9px;\n    min-width: 72px;\n    width: min-content;\n  ")}
`;exports.SectionTab=({children:e,name:i,onClick:n,active:r,iconSize:o})=>t.default.createElement(a,{onClick:n,className:"polotno-side-panel-tab"+(r?" active":"")},t.default.createElement("div",{style:{fontSize:(o||14)+"px"}},e),t.default.createElement("div",{style:{paddingTop:"5px"}},i));