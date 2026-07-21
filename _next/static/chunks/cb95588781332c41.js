(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,748831,e=>{"use strict";var t=e.i(454624),a=e.i(843476);let s=(0,t.default)((0,a.jsx)("path",{d:"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3m-3 11H8v-5h8zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-1-9H6v4h12z"}),"Print");e.s(["default",0,s])},984429,294231,e=>{"use strict";var t=e.i(912678);function a(e){let{theme:a,name:s,props:o}=e;return a&&a.components&&a.components[s]&&a.components[s].defaultProps?(0,t.default)(a.components[s].defaultProps,o):o}e.s(["default",()=>a],294231);var s=e.i(61801);function o({props:e,name:t,defaultTheme:o,themeId:r}){let i=(0,s.default)(o);return r&&(i=i[r]||i),a({theme:i,name:t,props:e})}e.s(["default",()=>o],984429)},501434,e=>{"use strict";let t=(0,e.i(916506).default)();e.s(["default",0,t])},563745,e=>{"use strict";e.i(247167);var t=e.i(271645),a=e.i(207670),s=e.i(576423),o=e.i(319727),r=e.i(519130),i=e.i(501434),l=e.i(984429),n=e.i(139416),d=e.i(817494),c=e.i(643982),p=e.i(110900),h=e.i(843476);let m=(0,d.default)(),u=(0,i.default)("div",{name:"MuiStack",slot:"Root"});function w(e){return(0,l.default)({props:e,name:"MuiStack",defaultTheme:m})}let f=({ownerState:e,theme:t})=>{let a={display:"flex",flexDirection:"column",...(0,c.handleBreakpoints)({theme:t},(0,c.resolveBreakpointValues)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e}))};if(e.spacing){let o=(0,p.createUnarySpacing)(t),r=Object.keys(t.breakpoints.values).reduce((t,a)=>(("object"==typeof e.spacing&&null!=e.spacing[a]||"object"==typeof e.direction&&null!=e.direction[a])&&(t[a]=!0),t),{}),i=(0,c.resolveBreakpointValues)({values:e.direction,base:r}),l=(0,c.resolveBreakpointValues)({values:e.spacing,base:r});"object"==typeof i&&Object.keys(i).forEach((e,t,a)=>{if(!i[e]){let s=t>0?i[a[t-1]]:"column";i[e]=s}}),a=(0,s.default)(a,(0,c.handleBreakpoints)({theme:t},l,(t,a)=>e.useFlexGap?{gap:(0,p.getValue)(o,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[a?i[a]:e.direction]}`]:(0,p.getValue)(o,t)}}))}return(0,c.mergeBreakpointsInOrder)(t.breakpoints,a)};var x=e.i(912178),g=e.i(594425);let b=function(e={}){let{createStyledComponent:s=u,useThemeProps:i=w,componentName:l="MuiStack"}=e,d=s(f);return t.forwardRef(function(e,s){let c,p=i(e),{component:m="div",direction:u="column",spacing:w=0,divider:f,children:x,className:g,useFlexGap:b=!1,...k}=(0,n.extendSxProp)(p),y=(0,r.default)({root:["root"]},e=>(0,o.default)(l,e),{});return(0,h.jsx)(d,{as:m,ownerState:{direction:u,spacing:w,useFlexGap:b},ref:s,className:(0,a.default)(y.root,g),...k,children:f?(c=t.Children.toArray(x).filter(Boolean)).reduce((e,a,s)=>(e.push(a),s<c.length-1&&e.push(t.cloneElement(f,{key:`separator-${s}`})),e),[]):x})})}({createStyledComponent:(0,x.default)("div",{name:"MuiStack",slot:"Root"}),useThemeProps:e=>(0,g.useDefaultProps)({props:e,name:"MuiStack"})});e.s(["Stack",0,b],563745)},826291,e=>{"use strict";e.i(247167);var t=e.i(271645),a=e.i(207670),s=e.i(519130),o=e.i(705538),r=e.i(940799),i=e.i(594425),l=e.i(126863),n=e.i(667239),d=e.i(75149),c=e.i(454624),p=e.i(843476);let h=(0,c.default)((0,p.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");var m=e.i(154033);let u=(0,r.styled)(m.default,{name:"MuiBreadcrumbCollapsed"})((0,d.default)(({theme:e})=>({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`,..."light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},borderRadius:2,"&:hover, &:focus":{..."light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}},"&:active":{boxShadow:e.shadows[0],..."light"===e.palette.mode?{backgroundColor:(0,n.emphasize)(e.palette.grey[200],.12)}:{backgroundColor:(0,n.emphasize)(e.palette.grey[600],.12)}}}))),w=(0,r.styled)(h)({width:24,height:16}),f=function(e){let{slots:t={},slotProps:a={},...s}=e;return(0,p.jsx)("li",{children:(0,p.jsx)(u,{focusRipple:!0,...s,ownerState:e,children:(0,p.jsx)(w,{as:t.CollapsedIcon,ownerState:e,...a.collapsedIcon})})})};var x=e.i(540672),g=e.i(319727);function b(e){return(0,g.default)("MuiBreadcrumbs",e)}let k=(0,x.default)("MuiBreadcrumbs",["root","ol","li","separator"]),y=(0,r.styled)(l.default,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,t)=>[{[`& .${k.li}`]:t.li},t.root]})({}),j=(0,r.styled)("ol",{name:"MuiBreadcrumbs",slot:"Ol"})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),S=(0,r.styled)("li",{name:"MuiBreadcrumbs",slot:"Separator"})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8}),v=t.forwardRef(function(e,r){var l,n;let d=(0,i.useDefaultProps)({props:e,name:"MuiBreadcrumbs"}),{children:c,className:h,component:m="nav",slots:u={},slotProps:w={},expandText:x="Show path",itemsAfterCollapse:g=1,itemsBeforeCollapse:k=1,maxItems:v=8,separator:B="/",...N}=d,[z,E]=t.useState(!1),P={...d,component:m,expanded:z,expandText:x,itemsAfterCollapse:g,itemsBeforeCollapse:k,maxItems:v,separator:B},R=(e=>{let{classes:t}=e;return(0,s.default)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},b,t)})(P),C=(0,o.default)({elementType:u.CollapsedIcon,externalSlotProps:w.collapsedIcon,ownerState:P}),U=t.useRef(null),K=t.Children.toArray(c).filter(e=>t.isValidElement(e)).map((e,t)=>(0,p.jsx)("li",{className:R.li,children:e},`child-${t}`));return(0,p.jsx)(y,{ref:r,component:m,color:"textSecondary",className:(0,a.default)(R.root,h),ownerState:P,...N,children:(0,p.jsx)(j,{className:R.ol,ref:U,ownerState:P,children:(l=z||v&&K.length<=v||k+g>=K.length?K:[...K.slice(0,k),(0,p.jsx)(f,{"aria-label":x,slots:{CollapsedIcon:u.CollapsedIcon},slotProps:{collapsedIcon:C},onClick:()=>{E(!0);let e=U.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...K.slice(K.length-g,K.length)],n=R.separator,l.reduce((e,t,a)=>(a<l.length-1?e=e.concat(t,(0,p.jsx)(S,{"aria-hidden":!0,className:n,ownerState:P,children:B},`separator-${a}`)):e.push(t),e),[]))})})});e.s(["Breadcrumbs",0,v],826291)},442439,e=>{"use strict";var t=e.i(454624),a=e.i(843476);let s=(0,t.default)((0,a.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");e.s(["default",0,s])},176895,e=>{"use strict";var t=e.i(843476);function a({spec:e}){let a=e.rows.length+(e.blankRowsAfter??0),s=[];for(let t of e.rows)s.push({kind:"filled",row:t});for(let t=0;t<(e.blankRowsAfter??0);t++)s.push({kind:"blank"});return(0,t.jsxs)("article",{className:"worksheet",children:[(0,t.jsxs)("header",{className:"ws-header",children:[(0,t.jsxs)("div",{className:"ws-titles",children:[(0,t.jsxs)("h1",{children:[e.titleEn,(0,t.jsx)("span",{className:"ws-title-sep",children:" / "}),(0,t.jsx)("span",{className:"ws-title-es",children:e.titleEs})]}),e.pageNote&&(0,t.jsx)("div",{className:"ws-page-note",children:e.pageNote})]}),(0,t.jsxs)("div",{className:"ws-instructions",children:[(0,t.jsx)("p",{className:"ws-en",children:e.instructionsEn}),(0,t.jsx)("p",{className:"ws-es",children:e.instructionsEs})]}),(e.rulesEn?.length||e.rulesEs?.length)&&(0,t.jsxs)("div",{className:"ws-rules",children:[(0,t.jsx)("div",{className:"ws-rules-title",children:"Rules / Reglas"}),(0,t.jsx)("ul",{children:(e.rulesEn??[]).map((a,s)=>(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{className:"ws-en",children:a}),e.rulesEs?.[s]&&(0,t.jsxs)("span",{className:"ws-es",children:[" — ",e.rulesEs[s]]})]},`en-${s}`))})]}),(0,t.jsxs)("div",{className:"ws-date",children:[(0,t.jsx)("span",{children:"Date / Fecha:"}),(0,t.jsx)("span",{className:"ws-blank"})]})]}),(0,t.jsxs)("table",{className:"ws-table",children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{children:e.columns.map(e=>(0,t.jsxs)("th",{style:e.width?{width:e.width}:void 0,children:[(0,t.jsx)("div",{className:"ws-col-en",children:e.en}),e.es&&(0,t.jsx)("div",{className:"ws-col-es",children:e.es})]},e.key))})}),(0,t.jsxs)("tbody",{children:[e.exampleRow&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("tr",{className:"ws-example-label",children:(0,t.jsx)("td",{colSpan:e.columns.length,children:"EXAMPLE / EJEMPLO — already filled in, for reference only · solo de referencia"})}),(0,t.jsx)("tr",{className:"ws-example-row",children:e.columns.map(a=>(0,t.jsx)("td",{children:e.exampleRow?.[a.key]??""},a.key))})]}),s.map((a,s)=>(0,t.jsx)("tr",{children:e.columns.map(e=>(0,t.jsx)("td",{children:"filled"===a.kind?a.row[e.key]??"":""},e.key))},s)),0===a&&(0,t.jsx)("tr",{children:(0,t.jsx)("td",{colSpan:e.columns.length,className:"ws-empty",children:"(no rows)"})})]}),e.totalsRow&&(0,t.jsx)("tfoot",{children:(0,t.jsx)("tr",{className:"ws-total-row",children:e.columns.map(a=>(0,t.jsx)("td",{children:e.totalsRow?.[a.key]??""},a.key))})})]}),(e.footerEn||e.footerEs)&&(0,t.jsxs)("footer",{className:"ws-footer",children:[e.footerEn&&(0,t.jsxs)("div",{children:[e.footerEn," ",(0,t.jsx)("span",{className:"ws-blank"})]}),e.footerEs&&(0,t.jsxs)("div",{className:"ws-es",children:[e.footerEs," ",(0,t.jsx)("span",{className:"ws-blank"})]})]})]})}let s=`
/* ── Screen preview ──────────────────────────────────────────────── */
.worksheet-page { padding: 0; }
.worksheet {
  background: #fff;
  color: #111;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  padding: 24px 28px;
  margin: 0 auto 24px;
  max-width: 8in;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 12px;
  line-height: 1.4;
}
.worksheet .ws-header { margin-bottom: 14px; }
.worksheet .ws-titles {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
}
.worksheet h1 {
  margin: 0 0 6px 0;
  font-size: 16pt;
  font-weight: 700;
  line-height: 1.2;
}
.worksheet .ws-title-sep { color: #888; font-weight: 400; }
.worksheet .ws-title-es { font-style: italic; font-weight: 600; }
.worksheet .ws-page-note { font-size: 10pt; color: #555; white-space: nowrap; }
.worksheet .ws-instructions {
  background: #f6f6f6;
  border-left: 3px solid #999;
  padding: 8px 12px;
  margin: 8px 0;
}
.worksheet .ws-instructions p { margin: 4px 0; }
.worksheet .ws-instructions .ws-es { font-style: italic; color: #444; }
.worksheet .ws-rules {
  border: 1px solid #c00;
  background: #fff6f6;
  padding: 6px 12px 6px 12px;
  margin: 8px 0;
}
.worksheet .ws-rules-title {
  font-weight: 700;
  font-size: 10.5pt;
  color: #b00000;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: 2px;
}
.worksheet .ws-rules ul { margin: 0; padding-left: 18px; }
.worksheet .ws-rules li { margin: 2px 0; }
.worksheet .ws-rules .ws-es { font-style: italic; color: #444; }
.worksheet .ws-date {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 6px 0 14px;
  font-size: 11pt;
}
.worksheet .ws-date .ws-blank {
  display: inline-block;
  border-bottom: 1px solid #555;
  width: 2in;
  height: 1.1em;
}
.worksheet .ws-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
}
.worksheet .ws-table th,
.worksheet .ws-table td {
  border: 1px solid #555;
  padding: 6px 8px;
  text-align: left;
  vertical-align: top;
}
.worksheet .ws-table th {
  background: #eee;
  font-size: 10.5pt;
}
.worksheet .ws-table .ws-col-en { font-weight: 700; }
.worksheet .ws-table .ws-col-es {
  font-size: 9pt;
  font-style: italic;
  font-weight: 400;
  color: #555;
}
.worksheet .ws-table td {
  font-size: 11pt;
  height: 1.5em;
}
.worksheet .ws-table .ws-empty {
  text-align: center;
  color: #888;
  font-style: italic;
}
.worksheet .ws-table tfoot .ws-total-row td {
  background: #eee;
  font-weight: 700;
  font-size: 11pt;
}
.worksheet .ws-table .ws-example-label td {
  background: #e8eef7;
  font-weight: 700;
  font-size: 8.5pt;
  letter-spacing: 0.03em;
  color: #1a3a6b;
  text-align: center;
  padding: 2px 6px;
  height: auto;
}
.worksheet .ws-table .ws-example-row td {
  background: #f3f7fd;
  font-style: italic;
  color: #1a3a6b;
}
.worksheet .ws-footer {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 11pt;
}
.worksheet .ws-footer .ws-blank {
  display: inline-block;
  border-bottom: 1px solid #555;
  min-width: 3in;
  height: 1.1em;
  margin-left: 6px;
}
.worksheet .ws-footer .ws-es {
  font-style: italic;
  color: #444;
}

/* ── Print ───────────────────────────────────────────────────────── */
@media print {
  /* Reset the dashboard layout shells the same way the SOP / cheat-sheet
     export pages do, otherwise the printer sees one viewport-tall page. */
  html, body {
    height: auto !important;
    min-height: 0 !important;
    overflow: visible !important;
    background: #fff !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  body > div, body > div > div, body > div > div > div, .MuiBox-root {
    display: block !important;
    flex: none !important;
    min-height: 0 !important;
    height: auto !important;
    overflow: visible !important;
    margin: 0 !important;
    padding: 0 !important;
    width: auto !important;
    max-width: none !important;
    background: transparent !important;
  }
  main {
    display: block !important;
    flex: none !important;
    min-height: 0 !important;
    height: auto !important;
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    background: #fff !important;
  }
  nav, .MuiAppBar-root, .MuiDrawer-root, .no-print {
    display: none !important;
  }

  @page { size: letter; margin: 0.4in; }

  .worksheet-page, .worksheet-list { display: block !important; }

  .worksheet {
    border: none !important;
    border-radius: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    max-width: none !important;
    page-break-after: always;
    break-after: page;
  }
  .worksheet:last-child {
    page-break-after: auto;
    break-after: auto;
  }

  /* Tighter print typography so a typical day fits one page. */
  .worksheet h1 { font-size: 16pt !important; }
  .worksheet .ws-instructions { background: #f3f3f3 !important; }
  .worksheet .ws-table th, .worksheet .ws-table td {
    border-color: #000 !important;
  }
  .worksheet .ws-table td { height: 0.32in !important; }

  /* Force the example-row shading to actually render on paper. */
  .worksheet .ws-table .ws-example-label td,
  .worksheet .ws-table .ws-example-row td {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  .worksheet .ws-table .ws-example-row td { height: 0.32in !important; }

  /* Keep the totals row shaded and readable on paper. */
  .worksheet .ws-table tfoot .ws-total-row td {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    height: 0.32in !important;
  }
}
`;e.s(["PrintableWorksheet",()=>a,"WORKSHEET_STYLES",0,s])},796574,e=>{"use strict";var t=e.i(843476),a=e.i(271645),s=e.i(522016),o=e.i(776552),r=e.i(826291),i=e.i(234251),l=e.i(237828),n=e.i(563745),d=e.i(866796),c=e.i(303974),p=e.i(442439),h=e.i(748831),m=e.i(176895),u=e.i(815615);let w={all:"All marketplaces",amazon:"Amazon",walmart:"Walmart"},f={amazon:"Amazon",walmart:"Walmart"},x=[{key:"sku",en:"SKU",es:"SKU",width:"15%"},{key:"product",en:"Product",es:"Producto",width:"28%"},{key:"qr",en:"QR Label",es:"Etiqueta QR",width:"13%"},{key:"box_size",en:"Box Size",es:"Tamaño de caja",width:"12%"},{key:"units",en:"Units per Box",es:"Unidades por caja",width:"12%"},{key:"boxes",en:"# Boxes",es:"# Cajas",width:"10%"},{key:"bags",en:"# Bags",es:"# Bolsas",width:"10%"}],g=[{key:"sku",en:"SKU",es:"SKU",width:"12%"},{key:"product",en:"Product",es:"Producto",width:"22%"},{key:"qr",en:"QR Label",es:"Etiqueta QR",width:"10%"},{key:"box_size",en:"Box Size",es:"Tamaño de caja",width:"10%"},{key:"dims",en:"Box Dimensions",es:"Dimensiones de caja",width:"13%"},{key:"weight",en:"Weight",es:"Peso",width:"9%"},{key:"units",en:"Units per Box",es:"Unidades por caja",width:"9%"},{key:"boxes",en:"# Boxes",es:"# Cajas",width:"8%"},{key:"bags",en:"# Bags",es:"# Bolsas",width:"7%"}];function b(){let[e,b]=(0,a.useState)(!1),[k,y]=(0,a.useState)([]),[j,S]=(0,a.useState)({}),[v,B]=(0,a.useState)("all"),[N,z]=(0,a.useState)("amazon"),[E,P]=(0,a.useState)(!0),[R,C]=(0,a.useState)(null);if((0,a.useEffect)(()=>{b(!0);let e=new URLSearchParams(window.location.search),t=e.get("mp");("amazon"===t||"walmart"===t)&&B(t);let a=e.get("format");if(("amazon"===a||"walmart"===a)&&z(a),u.isLite){let t=e.get("plan");if(t)try{S(JSON.parse(t))}catch{}}(async()=>{try{let[e,t]=await Promise.all([fetch(u.isLite?(0,u.liteDataUrl)("third-party-sellers"):"/api/third-party-sellers"),u.isLite?null:fetch("/api/third-party-sellers/plan")]),a=await e.json();if(!a.success)throw Error(a.error||"Failed to load specs");if(y(a.products),t){let e=await t.json();e.success&&S(e.boxes||{})}}catch(e){C(e.message)}finally{P(!1)}})()},[]),!e)return null;let U=k.filter(e=>(j[e.SKU]||0)>0&&"Yes"!==e.Archived&&("all"===v||"amazon"===v&&"Yes"===e["Sell on Amazon"]||"walmart"===v&&"Yes"===e["Sell on Walmart"])).sort((e,t)=>e.SKU.localeCompare(t.SKU)),K=U.reduce((e,t)=>e+(j[t.SKU]||0),0),M=U.reduce((e,t)=>{let a=parseFloat(t["Carton Qty"]);return e+(j[t.SKU]||0)*(Number.isFinite(a)?a:0)},0),L=new Date().toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),T={titleEn:"Shipment Pack Sheet",titleEs:"Hoja de empaque de envío",instructionsEn:"walmart"===N?"Pull each SKU below and pack the number of boxes shown, using the box size listed. Record the box dimensions and weight for each carton. Bags = total units across those boxes.":"Pull each SKU below and pack the number of boxes shown, using the box size listed. Bags = total units across those boxes.",instructionsEs:"walmart"===N?"Recoge cada SKU de abajo y empaca el número de cajas indicado, usando el tamaño de caja listado. Anota las dimensiones y el peso de cada caja. Bolsas = unidades totales en esas cajas.":"Recoge cada SKU de abajo y empaca el número de cajas indicado, usando el tamaño de caja listado. Bolsas = unidades totales en esas cajas.",columns:"walmart"===N?g:x,rows:U.map(e=>{let t,a=j[e.SKU]||0,s=parseFloat(e["Carton Qty"]),o=Number.isFinite(s)?s:0;return{sku:e.SKU,product:e["Common Name"],qr:e["QR Tag"]||"—",box_size:e["Box Size"]||"—",dims:(t=[e["Carton Length"],e["Carton Width"],e["Carton Height"]].map(e=>(e||"").trim())).every(Boolean)?t.join(" × "):"—",weight:(e["Carton Weight"]||"").trim()||"—",units:o||"—",boxes:a,bags:o>0?a*o:"—"}}),totalsRow:{sku:"",product:`TOTAL — ${U.length} SKU${1===U.length?"":"s"}`,qr:"",box_size:"",dims:"",weight:"",units:"",boxes:K.toLocaleString(),bags:M.toLocaleString()},footerEn:"Packed by:",footerEs:"Empacado por:",pageNote:`${f[N]} pack sheet \xb7 ${w[v]} \xb7 ${L}`};return(0,t.jsxs)(o.Box,{className:"worksheet-page",children:[(0,t.jsx)("style",{children:m.WORKSHEET_STYLES}),(0,t.jsxs)(o.Box,{className:"no-print",children:[(0,t.jsxs)(r.Breadcrumbs,{sx:{mb:1},children:[(0,t.jsx)(s.default,{href:"/dashboard/third-party-sellers",style:{color:"inherit",textDecoration:"none"},children:"3rd Party Sellers"}),(0,t.jsx)(d.Typography,{color:"text.primary",children:"Pack Sheet"})]}),(0,t.jsxs)(n.Stack,{direction:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:{sm:"center"},sx:{mb:3},children:[(0,t.jsxs)(o.Box,{children:[(0,t.jsx)(d.Typography,{variant:"h4",sx:{fontWeight:600},children:"Shipment Pack Sheet"}),(0,t.jsxs)(d.Typography,{variant:"body2",color:"text.secondary",children:[f[N]," format — the current order, every SKU with a box count. Scope: ",w[v],". Print and hand to the warehouse."]})]}),(0,t.jsxs)(n.Stack,{direction:"row",spacing:1,children:[(0,t.jsx)(i.Button,{variant:"outlined",startIcon:(0,t.jsx)(p.default,{}),component:s.default,href:"/dashboard/third-party-sellers",children:"Back"}),(0,t.jsx)(i.Button,{variant:"contained",startIcon:(0,t.jsx)(h.default,{}),onClick:()=>window.print(),disabled:0===U.length,children:"Print"})]})]}),R&&(0,t.jsx)(c.Alert,{severity:"error",sx:{mb:2},children:R}),E?(0,t.jsx)(o.Box,{sx:{display:"flex",justifyContent:"center",py:6},children:(0,t.jsx)(l.CircularProgress,{})}):0===U.length?(0,t.jsxs)(c.Alert,{severity:"info",children:["No SKUs planned","all"!==v?` for ${w[v]}`:""," yet — add box counts on the 3rd Party Sellers page first."]}):null]}),!E&&U.length>0&&(0,t.jsx)("div",{className:"worksheet-list",children:(0,t.jsx)(m.PrintableWorksheet,{spec:T})})]})}e.s(["default",()=>b])}]);