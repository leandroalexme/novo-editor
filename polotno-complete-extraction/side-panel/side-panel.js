var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.SidePanel=exports.INTERNAL_SECTIONS=exports.DEFAULT_SECTIONS=exports.VideosSection=exports.SizeSection=exports.LayersSection=exports.PagesSection=exports.BackgroundSection=exports.UploadSection=exports.ElementsSection=exports.PhotosSection=exports.TextSection=exports.TemplatesSection=exports.ImagesGrid=exports.SectionTab=void 0;const t=e(require("react")),n=require("mobx-react-lite"),a=require("@blueprintjs/core"),l=require("@blueprintjs/icons"),o=e(require("../utils/styled")),r=require("../utils/screen"),i=require("../utils/flags"),s=e(require("@meronex/icons/fa/FaShapes")),c=e(require("@meronex/icons/fd/FdPageMultiple")),d=require("../utils/l10n"),p=require("./tab-button");var u=require("./tab-button");Object.defineProperty(exports,"SectionTab",{enumerable:!0,get:function(){return u.SectionTab}});var m=require("./images-grid");Object.defineProperty(exports,"ImagesGrid",{enumerable:!0,get:function(){return m.ImagesGrid}});const f=require("./text-panel"),b=require("./size-panel"),S=require("./upload-panel"),x=require("./photos-panel"),E=require("./background-panel"),P=require("./elements-panel"),g=require("./pages-panel"),h=require("./templates-panel"),v=require("./layers-panel"),T=require("./videos-panel"),w=require("./image-clip-panel"),y=require("./animations-panel"),q=require("./effects-panel");exports.TemplatesSection={name:"templates",Tab:(0,n.observer)((e=>t.default.createElement(p.SectionTab,Object.assign({name:(0,d.t)("sidePanel.templates")},e),t.default.createElement(a.Icon,{icon:t.default.createElement(l.Control,null)})))),Panel:({store:e})=>t.default.createElement(h.TemplatesPanel,{store:e})},exports.TextSection={name:"text",Tab:(0,n.observer)((e=>t.default.createElement(p.SectionTab,Object.assign({name:(0,d.t)("sidePanel.text")},e),t.default.createElement(a.Icon,{icon:t.default.createElement(l.NewTextBox,null)})))),Panel:({store:e})=>t.default.createElement(f.TextPanel,{store:e})},exports.PhotosSection={name:"photos",Tab:(0,n.observer)((e=>t.default.createElement(p.SectionTab,Object.assign({name:(0,d.t)("sidePanel.photos")},e),t.default.createElement(a.Icon,{icon:t.default.createElement(l.Media,null)})))),Panel:({store:e})=>t.default.createElement(x.PhotosPanel,{store:e})},exports.ElementsSection={name:"elements",Tab:(0,n.observer)((e=>t.default.createElement(p.SectionTab,Object.assign({name:(0,d.t)("sidePanel.elements"),iconSize:16},e),t.default.createElement("span",{className:"bp5-icon"},t.default.createElement(s.default,null))))),Panel:({store:e})=>t.default.createElement(P.ElementsPanel,{store:e})},exports.UploadSection={name:"upload",Tab:(0,n.observer)((e=>t.default.createElement(p.SectionTab,Object.assign({name:(0,d.t)("sidePanel.upload")},e),t.default.createElement(a.Icon,{icon:t.default.createElement(l.CloudUpload,null)})))),Panel:({store:e})=>t.default.createElement(S.UploadPanel,{store:e})},exports.BackgroundSection={name:"background",Tab:(0,n.observer)((e=>t.default.createElement(p.SectionTab,Object.assign({name:(0,d.t)("sidePanel.background")},e),t.default.createElement(a.Icon,{icon:t.default.createElement(l.LayoutGrid,null)})))),Panel:({store:e})=>t.default.createElement(E.BackgroundPanel,{store:e})},exports.PagesSection={name:"pages",Tab:(0,n.observer)((e=>t.default.createElement(p.SectionTab,Object.assign({name:(0,d.t)("sidePanel.pages")},e),t.default.createElement(c.default,null)))),Panel:({store:e})=>t.default.createElement(g.PagesPanel,{store:e}),visibleInList:!1},exports.LayersSection={name:"layers",Tab:(0,n.observer)((e=>t.default.createElement(p.SectionTab,Object.assign({name:(0,d.t)("sidePanel.layers")},e),t.default.createElement(a.Icon,{icon:t.default.createElement(l.Layers,null)})))),Panel:({store:e})=>t.default.createElement(v.LayersPanel,{store:e})},exports.SizeSection={name:"size",Tab:(0,n.observer)((e=>t.default.createElement(p.SectionTab,Object.assign({name:(0,d.t)("sidePanel.resize")},e),t.default.createElement(a.Icon,{icon:t.default.createElement(l.Fullscreen,null)})))),Panel:({store:e})=>t.default.createElement(b.SizePanel,{store:e})},exports.VideosSection={name:"videos",Tab:e=>t.default.createElement(p.SectionTab,Object.assign({name:(0,d.t)("sidePanel.videos")},e),t.default.createElement(l.Video,null)),Panel:T.VideosPanel},(0,n.observer)((e=>t.default.createElement(p.SectionTab,Object.assign({name:(0,d.t)("sidePanel.more")},e),t.default.createElement(a.Icon,{icon:t.default.createElement(l.More,null)})))),exports.DEFAULT_SECTIONS=[exports.TemplatesSection,exports.TextSection,exports.PhotosSection,exports.ElementsSection,exports.UploadSection,exports.BackgroundSection,exports.LayersSection,exports.SizeSection];const k={name:"image-clip",Tab:()=>null,Panel:w.ImageClipPanel},C={name:"effects",Tab:()=>null,Panel:q.EffectsPanel},I={name:"animation",Tab:()=>null,Panel:y.AnimationsPanel};exports.INTERNAL_SECTIONS=[k,C];const N=(0,o.default)("div")`
  display: flex;
  height: 100% !important;
  padding: 0px !important;
  position: relative;

  &.bp5-navbar {
    box-shadow: none;
  }

  ${(0,r.mobileStyle)("\n    height: auto !important;\n    width: 100%;\n    position: relative;\n  ")}
`,O=(0,o.default)("div",t.default.forwardRef)`
  @media screen and (min-width: 501px) {
    overflow-y: auto;
    overflow-x: hidden;
    min-width: 72px;
  }
  ${(0,r.mobileStyle)("\n    width: 100%;\n    overflow: auto;\n  ")}
`,L=(0,o.default)("div",t.default.forwardRef)`
  display: flex;
  flex-direction: column;

  ${(0,r.mobileStyle)("\n    flex-direction: row;\n    min-width: min-content;\n  ")}
`,j=(0,o.default)("div")`
  padding: 10px 10px 0px 10px !important;
  height: 100% !important;

  &.bp5-navbar {
    width: 350px;
  }

  &.bp5-navbar.collapsed {
    width: 0px;
  }

  ${(0,r.mobileStyle)("\n    &.bp5-navbar {\n      position: absolute;\n      bottom: 54px;\n      z-index: 100;\n      height: 50vh !important;\n      width: 100%;\n    }\n  ")}
`,_=(0,o.default)("div")`
  display: none;

  ${(0,r.mobileStyle)("\n    position: absolute;\n    bottom: 72px;\n    display: block;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.05);\n  ")}
`,z=(0,o.default)("div")`
  position: absolute;
  right: -14px;
  top: 50%;
  height: 96px;
  width: 15px;
  fill: white;
  cursor: pointer;
  z-index: 10;

  .bp5-dark & {
    right: -13px;
  }

  & .stroke {
    stroke: rgba(0, 0, 0, 0.3);
    fill: none;
  }

  & .fill {
    fill: white;
  }

  .bp5-dark & .fill {
    fill: #2f343c;
  }

  & .pointer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scaleY(2);
    font-size: 0.5rem;
    color: rgba(171, 179, 191, 0.6);
  }

  .bp5-dark & .pointer {
    color: rgba(171, 179, 191, 0.6);
  }

  &:hover .pointer {
    color: black;
  }

  .bp5-dark &:hover .pointer {
    color: white;
  }

  ${(0,r.mobileStyle)("\n    display: none;\n  ")}
`,M=({onClick:e})=>t.default.createElement(z,{onClick:e},t.default.createElement("svg",{width:"15",height:"96",viewBox:"0 0 16 96",xmlns:"http://www.w3.org/2000/svg"},t.default.createElement("path",{className:"fill stroke",d:"M 1 7 C 2 9 4 10 7.2 13.28 C 7.45 13.4625 7.6 13.6 7.7 13.8048 L 7.8 13.8 C 9.8 15.8 11.6 17.6 12.9 19.7 C 14 21.6 14.7 23.9 14.9 27 H 15 V 68 C 15 71.7 14.3 74.3 13 76.6 C 11.7 78.8 9.9 80.5 7.8 82.6344 L 7.79 82.6 C 7.6 82.8 7.4507 83 7.2729 83.2127 C 3.9102 86.5228 2 87 1 90"})),t.default.createElement("div",{className:"pointer"},"<"));exports.SidePanel=(0,n.observer)((({store:e,sections:n,defaultSection:a="photos"})=>{var l;(()=>{const n=t.default.useRef(!0);n.current&&(n.current=!1,e.openSidePanel(a))})();const o=(0,r.useMobile)();t.default.useLayoutEffect((()=>{o?e.openSidePanel(""):e.openSidePanel(a)}),[o]);const s=[...n||exports.DEFAULT_SECTIONS];if(exports.INTERNAL_SECTIONS.forEach((e=>{s.find((t=>t.name===e.name))||s.push(e)})),i.flags.animationsEnabled){if(!s.find((e=>"videos"===e.name))){const e=Math.floor(s.length/2);s.splice(e,0,exports.VideosSection)}if(!s.find((e=>"animations"===e.name))){const e=Math.floor(s.length/2);s.splice(e,0,I)}}const c=s.filter((e=>{var t;return null===(t=e.visibleInList)||void 0===t||t})),d=null===(l=s.find((t=>t.name===e.openedSidePanel)))||void 0===l?void 0:l.Panel,p=t.default.useRef(null);return t.default.createElement(N,{className:"bp5-navbar polotno-side-panel"+(e.openedSidePanel?"":" collapsed")},t.default.createElement(O,{ref:p,className:"polotno-side-tabs-container"},t.default.createElement(L,{className:"polotno-side-tabs-inner"},c.map((({name:n,Tab:a})=>t.default.createElement(a,{key:n,active:n===e.openedSidePanel,onClick:()=>{n===e.openedSidePanel&&o?e.openSidePanel(""):e.openSidePanel(n)}}))))),d&&t.default.createElement(j,{className:"bp5-navbar polotno-panel-container",onClick:t=>{const n=t.target.closest(".polotno-close-panel"),a=t.target.closest(".polotno-mobile");n&&(o||a)&&e.openSidePanel("")}},t.default.createElement(d,{store:e})),e.openedSidePanel&&t.default.createElement(_,{onClick:()=>e.openSidePanel("")}),e.openedSidePanel&&t.default.createElement(M,{onClick:()=>e.openSidePanel("")}))})),exports.default=exports.SidePanel;