(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,76895,e=>{var t=e.i(18050);let s=`
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
`;e.s(["Y",0,function({spec:e}){let s=e.rows.length+(e.blankRowsAfter??0),a=[];for(let t of e.rows)a.push({kind:"filled",row:t});for(let t=0;t<(e.blankRowsAfter??0);t++)a.push({kind:"blank"});return(0,t.jsxs)("article",{className:"worksheet",children:[(0,t.jsxs)("header",{className:"ws-header",children:[(0,t.jsxs)("div",{className:"ws-titles",children:[(0,t.jsxs)("h1",{children:[e.titleEn,(0,t.jsx)("span",{className:"ws-title-sep",children:" / "}),(0,t.jsx)("span",{className:"ws-title-es",children:e.titleEs})]}),e.pageNote&&(0,t.jsx)("div",{className:"ws-page-note",children:e.pageNote})]}),(0,t.jsxs)("div",{className:"ws-instructions",children:[(0,t.jsx)("p",{className:"ws-en",children:e.instructionsEn}),(0,t.jsx)("p",{className:"ws-es",children:e.instructionsEs})]}),(e.rulesEn?.length||e.rulesEs?.length)&&(0,t.jsxs)("div",{className:"ws-rules",children:[(0,t.jsx)("div",{className:"ws-rules-title",children:"Rules / Reglas"}),(0,t.jsx)("ul",{children:(e.rulesEn??[]).map((s,a)=>(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{className:"ws-en",children:s}),e.rulesEs?.[a]&&(0,t.jsxs)("span",{className:"ws-es",children:[" — ",e.rulesEs[a]]})]},`en-${a}`))})]}),(0,t.jsxs)("div",{className:"ws-date",children:[(0,t.jsx)("span",{children:"Date / Fecha:"}),(0,t.jsx)("span",{className:"ws-blank"})]})]}),(0,t.jsxs)("table",{className:"ws-table",children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{children:e.columns.map(e=>(0,t.jsxs)("th",{style:e.width?{width:e.width}:void 0,children:[(0,t.jsx)("div",{className:"ws-col-en",children:e.en}),e.es&&(0,t.jsx)("div",{className:"ws-col-es",children:e.es})]},e.key))})}),(0,t.jsxs)("tbody",{children:[e.exampleRow&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("tr",{className:"ws-example-label",children:(0,t.jsx)("td",{colSpan:e.columns.length,children:"EXAMPLE / EJEMPLO — already filled in, for reference only · solo de referencia"})}),(0,t.jsx)("tr",{className:"ws-example-row",children:e.columns.map(s=>(0,t.jsx)("td",{children:e.exampleRow?.[s.key]??""},s.key))})]}),a.map((s,a)=>(0,t.jsx)("tr",{children:e.columns.map(e=>(0,t.jsx)("td",{children:"filled"===s.kind?s.row[e.key]??"":""},e.key))},a)),0===s&&(0,t.jsx)("tr",{children:(0,t.jsx)("td",{colSpan:e.columns.length,className:"ws-empty",children:"(no rows)"})})]}),e.totalsRow&&(0,t.jsx)("tfoot",{children:(0,t.jsx)("tr",{className:"ws-total-row",children:e.columns.map(s=>(0,t.jsx)("td",{children:e.totalsRow?.[s.key]??""},s.key))})})]}),(e.footerEn||e.footerEs)&&(0,t.jsxs)("footer",{className:"ws-footer",children:[e.footerEn&&(0,t.jsxs)("div",{children:[e.footerEn," ",(0,t.jsx)("span",{className:"ws-blank"})]}),e.footerEs&&(0,t.jsxs)("div",{className:"ws-es",children:[e.footerEs," ",(0,t.jsx)("span",{className:"ws-blank"})]})]})]})},"H",0,s])},96574,e=>{var t=e.i(18050),s=e.i(71645),a=e.i(22016),o=e.i(76552),r=e.i(26291),i=e.i(34251),n=e.i(37828),l=e.i(63745),c=e.i(66796),d=e.i(3974),p=e.i(42439),h=e.i(48831),m=e.i(76895),w=e.i(15615);let f={all:"All marketplaces",amazon:"Amazon",walmart:"Walmart"},u={amazon:"Amazon",walmart:"Walmart"},x=[{key:"sku",en:"SKU",es:"SKU",width:"15%"},{key:"product",en:"Product",es:"Producto",width:"28%"},{key:"qr",en:"QR Label",es:"Etiqueta QR",width:"13%"},{key:"box_size",en:"Box Size",es:"Tamaño de caja",width:"12%"},{key:"units",en:"Units per Box",es:"Unidades por caja",width:"12%"},{key:"boxes",en:"# Boxes",es:"# Cajas",width:"10%"},{key:"bags",en:"# Bags",es:"# Bolsas",width:"10%"}],g=[{key:"sku",en:"SKU",es:"SKU",width:"12%"},{key:"product",en:"Product",es:"Producto",width:"22%"},{key:"qr",en:"QR Label",es:"Etiqueta QR",width:"10%"},{key:"box_size",en:"Box Size",es:"Tamaño de caja",width:"10%"},{key:"dims",en:"Box Dimensions",es:"Dimensiones de caja",width:"13%"},{key:"weight",en:"Weight",es:"Peso",width:"9%"},{key:"units",en:"Units per Box",es:"Unidades por caja",width:"9%"},{key:"boxes",en:"# Boxes",es:"# Cajas",width:"8%"},{key:"bags",en:"# Bags",es:"# Bolsas",width:"7%"}];e.s(["default",0,function(){let[e,b]=(0,s.useState)(!1),[k,y]=(0,s.useState)([]),[j,v]=(0,s.useState)({}),[S,N]=(0,s.useState)("all"),[z,E]=(0,s.useState)("amazon"),[P,R]=(0,s.useState)(!0),[B,U]=(0,s.useState)(null);if((0,s.useEffect)(()=>{b(!0);let e=new URLSearchParams(window.location.search),t=e.get("mp");("amazon"===t||"walmart"===t)&&N(t);let s=e.get("format");if(("amazon"===s||"walmart"===s)&&E(s),w.E){let t=e.get("plan");if(t)try{v(JSON.parse(t))}catch{}}(async()=>{try{let[e,t]=await Promise.all([fetch(w.E?(0,w.P)("third-party-sellers"):"/api/third-party-sellers"),w.E?null:fetch("/api/third-party-sellers/plan")]),s=await e.json();if(!s.success)throw Error(s.error||"Failed to load specs");if(y(s.products),t){let e=await t.json();e.success&&v(e.boxes||{})}}catch(e){U(e.message)}finally{R(!1)}})()},[]),!e)return null;let C=k.filter(e=>(j[e.SKU]||0)>0&&"Yes"!==e.Archived&&("all"===S||"amazon"===S&&"Yes"===e["Sell on Amazon"]||"walmart"===S&&"Yes"===e["Sell on Walmart"])).sort((e,t)=>e.SKU.localeCompare(t.SKU)),K=C.reduce((e,t)=>e+(j[t.SKU]||0),0),M=C.reduce((e,t)=>{let s=parseFloat(t["Carton Qty"]);return e+(j[t.SKU]||0)*(Number.isFinite(s)?s:0)},0),A=new Date().toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),L={titleEn:"Shipment Pack Sheet",titleEs:"Hoja de empaque de envío",instructionsEn:"walmart"===z?"Pull each SKU below and pack the number of boxes shown, using the box size listed. Record the box dimensions and weight for each carton. Bags = total units across those boxes.":"Pull each SKU below and pack the number of boxes shown, using the box size listed. Bags = total units across those boxes.",instructionsEs:"walmart"===z?"Recoge cada SKU de abajo y empaca el número de cajas indicado, usando el tamaño de caja listado. Anota las dimensiones y el peso de cada caja. Bolsas = unidades totales en esas cajas.":"Recoge cada SKU de abajo y empaca el número de cajas indicado, usando el tamaño de caja listado. Bolsas = unidades totales en esas cajas.",columns:"walmart"===z?g:x,rows:C.map(e=>{let t,s=j[e.SKU]||0,a=parseFloat(e["Carton Qty"]),o=Number.isFinite(a)?a:0;return{sku:e.SKU,product:e["Common Name"],qr:e["QR Tag"]||"—",box_size:e["Box Size"]||"—",dims:(t=[e["Carton Length"],e["Carton Width"],e["Carton Height"]].map(e=>(e||"").trim())).every(Boolean)?t.join(" × "):"—",weight:(e["Carton Weight"]||"").trim()||"—",units:o||"—",boxes:s,bags:o>0?s*o:"—"}}),totalsRow:{sku:"",product:`TOTAL — ${C.length} SKU${1===C.length?"":"s"}`,qr:"",box_size:"",dims:"",weight:"",units:"",boxes:K.toLocaleString(),bags:M.toLocaleString()},footerEn:"Packed by:",footerEs:"Empacado por:",pageNote:`${u[z]} pack sheet \xb7 ${f[S]} \xb7 ${A}`};return(0,t.jsxs)(o.f,{className:"worksheet-page",children:[(0,t.jsx)("style",{children:m.H}),(0,t.jsxs)(o.f,{className:"no-print",children:[(0,t.jsxs)(r.f,{sx:{mb:1},children:[(0,t.jsx)(a.default,{href:"/dashboard/third-party-sellers",style:{color:"inherit",textDecoration:"none"},children:"3rd Party Sellers"}),(0,t.jsx)(c.f,{color:"text.primary",children:"Pack Sheet"})]}),(0,t.jsxs)(l.f,{direction:{xs:"column",sm:"row"},justifyContent:"space-between",alignItems:{sm:"center"},sx:{mb:3},children:[(0,t.jsxs)(o.f,{children:[(0,t.jsx)(c.f,{variant:"h4",sx:{fontWeight:600},children:"Shipment Pack Sheet"}),(0,t.jsxs)(c.f,{variant:"body2",color:"text.secondary",children:[u[z]," format — the current order, every SKU with a box count. Scope: ",f[S],". Print and hand to the warehouse."]})]}),(0,t.jsxs)(l.f,{direction:"row",spacing:1,children:[(0,t.jsx)(i.f,{variant:"outlined",startIcon:(0,t.jsx)(p.f,{}),component:a.default,href:"/dashboard/third-party-sellers",children:"Back"}),(0,t.jsx)(i.f,{variant:"contained",startIcon:(0,t.jsx)(h.f,{}),onClick:()=>window.print(),disabled:0===C.length,children:"Print"})]})]}),B&&(0,t.jsx)(d.f,{severity:"error",sx:{mb:2},children:B}),P?(0,t.jsx)(o.f,{sx:{display:"flex",justifyContent:"center",py:6},children:(0,t.jsx)(n.f,{})}):0===C.length?(0,t.jsxs)(d.f,{severity:"info",children:["No SKUs planned","all"!==S?` for ${f[S]}`:""," yet — add box counts on the 3rd Party Sellers page first."]}):null]}),!P&&C.length>0&&(0,t.jsx)("div",{className:"worksheet-list",children:(0,t.jsx)(m.Y,{spec:L})})]})}])},42439,e=>{var t=e.i(55742),s=e.i(18050);let a=(0,t.f)((0,s.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");e.s(["f",0,a])},48831,e=>{var t=e.i(55742),s=e.i(18050);let a=(0,t.f)((0,s.jsx)("path",{d:"M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3m-3 11H8v-5h8zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m-1-9H6v4h12z"}),"Print");e.s(["f",0,a])},26291,e=>{var t=e.i(71645),s=e.i(7670),a=e.i(19130),o=e.i(5538),r=e.i(40799),i=e.i(94425),n=e.i(26863),l=e.i(67239),c=e.i(75149),d=e.i(54624),p=e.i(18050);let h=(0,d.f)((0,p.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");var m=e.i(54033);let w=(0,r.f)(m.f,{name:"MuiBreadcrumbCollapsed"})((0,c.f)(({theme:e})=>({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`,..."light"===e.palette.mode?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},borderRadius:2,"&:hover, &:focus":{..."light"===e.palette.mode?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}},"&:active":{boxShadow:e.shadows[0],..."light"===e.palette.mode?{backgroundColor:(0,l.r)(e.palette.grey[200],.12)}:{backgroundColor:(0,l.r)(e.palette.grey[600],.12)}}}))),f=(0,r.f)(h)({width:24,height:16}),u=function(e){let{slots:t={},slotProps:s={},...a}=e;return(0,p.jsx)("li",{children:(0,p.jsx)(w,{focusRipple:!0,...a,ownerState:e,children:(0,p.jsx)(f,{as:t.CollapsedIcon,ownerState:e,...s.collapsedIcon})})})};var x=e.i(40672),g=e.i(19727);function b(e){return(0,g.f)("MuiBreadcrumbs",e)}let k=(0,x.f)("MuiBreadcrumbs",["root","ol","li","separator"]),y=(0,r.f)(n.f,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,t)=>[{[`& .${k.li}`]:t.li},t.root]})({}),j=(0,r.f)("ol",{name:"MuiBreadcrumbs",slot:"Ol"})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),v=(0,r.f)("li",{name:"MuiBreadcrumbs",slot:"Separator"})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8}),S=t.forwardRef(function(e,r){var n,l;let c=(0,i.f)({props:e,name:"MuiBreadcrumbs"}),{children:d,className:h,component:m="nav",slots:w={},slotProps:f={},expandText:x="Show path",itemsAfterCollapse:g=1,itemsBeforeCollapse:k=1,maxItems:S=8,separator:N="/",...z}=c,[E,P]=t.useState(!1),R={...c,component:m,expanded:E,expandText:x,itemsAfterCollapse:g,itemsBeforeCollapse:k,maxItems:S,separator:N},B=(e=>{let{classes:t}=e;return(0,a.f)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},b,t)})(R),U=(0,o.f)({elementType:w.CollapsedIcon,externalSlotProps:f.collapsedIcon,ownerState:R}),C=t.useRef(null),K=t.Children.toArray(d).filter(e=>t.isValidElement(e)).map((e,t)=>(0,p.jsx)("li",{className:B.li,children:e},`child-${t}`));return(0,p.jsx)(y,{ref:r,component:m,color:"textSecondary",className:(0,s.U)(B.root,h),ownerState:R,...z,children:(0,p.jsx)(j,{className:B.ol,ref:C,ownerState:R,children:(n=E||S&&K.length<=S||k+g>=K.length?K:[...K.slice(0,k),(0,p.jsx)(u,{"aria-label":x,slots:{CollapsedIcon:w.CollapsedIcon},slotProps:{collapsedIcon:U},onClick:()=>{P(!0);let e=C.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis"),...K.slice(K.length-g,K.length)],l=B.separator,n.reduce((e,t,s)=>(s<n.length-1?e=e.concat(t,(0,p.jsx)(v,{"aria-hidden":!0,className:l,ownerState:R,children:N},`separator-${s}`)):e.push(t),e),[]))})})});e.s(["f",0,S],26291)},63745,e=>{var t=e.i(71645),s=e.i(7670),a=e.i(76423),o=e.i(19727),r=e.i(19130),i=e.i(1434),n=e.i(84429),l=e.i(39416),c=e.i(17494),d=e.i(43982),p=e.i(10900),h=e.i(18050);let m=(0,c.f)(),w=(0,i.f)("div",{name:"MuiStack",slot:"Root"});function f(e){return(0,n.f)({props:e,name:"MuiStack",defaultTheme:m})}let u=({ownerState:e,theme:t})=>{let s={display:"flex",flexDirection:"column",...(0,d.K)({theme:t},(0,d.P)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e}))};if(e.spacing){let o=(0,p.e)(t),r=Object.keys(t.breakpoints.values).reduce((t,s)=>(("object"==typeof e.spacing&&null!=e.spacing[s]||"object"==typeof e.direction&&null!=e.direction[s])&&(t[s]=!0),t),{}),i=(0,d.P)({values:e.direction,base:r}),n=(0,d.P)({values:e.spacing,base:r});"object"==typeof i&&Object.keys(i).forEach((e,t,s)=>{if(!i[e]){let a=t>0?i[s[t-1]]:"column";i[e]=a}}),s=(0,a.U)(s,(0,d.K)({theme:t},n,(t,s)=>e.useFlexGap?{gap:(0,p.U)(o,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[s?i[s]:e.direction]}`]:(0,p.U)(o,t)}}))}return(0,d.O)(t.breakpoints,s)};var x=e.i(12178),g=e.i(94425);let b=function(e={}){let{createStyledComponent:a=w,useThemeProps:i=f,componentName:n="MuiStack"}=e,c=a(u);return t.forwardRef(function(e,a){let d,p=i(e),{component:m="div",direction:w="column",spacing:f=0,divider:u,children:x,className:g,useFlexGap:b=!1,...k}=(0,l.f)(p),y=(0,r.f)({root:["root"]},e=>(0,o.f)(n,e),{});return(0,h.jsx)(c,{as:m,ownerState:{direction:w,spacing:f,useFlexGap:b},ref:a,className:(0,s.U)(y.root,g),...k,children:u?(d=t.Children.toArray(x).filter(Boolean)).reduce((e,s,a)=>(e.push(s),a<d.length-1&&e.push(t.cloneElement(u,{key:`separator-${a}`})),e),[]):x})})}({createStyledComponent:(0,x.f)("div",{name:"MuiStack",slot:"Root"}),useThemeProps:e=>(0,g.f)({props:e,name:"MuiStack"})});e.s(["f",0,b],63745)},1434,e=>{let t=(0,e.i(16506).U)();e.s(["f",0,t])},84429,94231,e=>{var t=e.i(12678);function s(e){let{theme:s,name:a,props:o}=e;return s&&s.components&&s.components[a]&&s.components[a].defaultProps?(0,t.f)(s.components[a].defaultProps,o):o}e.s(["f",0,s],94231);var a=e.i(61801);e.s(["f",0,function({props:e,name:t,defaultTheme:o,themeId:r}){let i=(0,a.f)(o);return r&&(i=i[r]||i),s({theme:i,name:t,props:e})}],84429)}])})();