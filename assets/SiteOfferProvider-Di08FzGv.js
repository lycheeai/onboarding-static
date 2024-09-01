import{q as O,A as P,g as L,C as f,t as B,j as S,L as ce,d as I}from"./GoogleFontInject-BcCD-NBc.js";import{r as c,R as de}from"./index-RYns6xqu.js";import"./index-D16Yfzz8.js";/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},j.apply(this,arguments)}var W;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(W||(W={}));function v(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function V(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Q(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}var F;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(F||(F={}));function fe(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function me(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?Q(e):e;return{pathname:r?r.startsWith("/")?r:he(r,t):t,search:ge(n),hash:ve(a)}}function he(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function U(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function pe(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Y(e,t){let r=pe(e);return t?r.map((n,a)=>a===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Z(e,t,r,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=Q(e):(a=j({},e),v(!a.pathname||!a.pathname.includes("?"),U("?","pathname","search",a)),v(!a.pathname||!a.pathname.includes("#"),U("#","pathname","hash",a)),v(!a.search||!a.search.includes("#"),U("#","search","hash",a)));let i=e===""||a.pathname==="",s=i?"/":a.pathname,l;if(s==null)l=r;else{let h=t.length-1;if(!n&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),h-=1;a.pathname=p.join("/")}l=h>=0?t[h]:"/"}let u=me(a,l),d=s&&s!=="/"&&s.endsWith("/"),m=(i||s===".")&&r.endsWith("/");return!u.pathname.endsWith("/")&&(d||m)&&(u.pathname+="/"),u}const ee=e=>e.join("/").replace(/\/\/+/g,"/"),ge=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ve=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,te=["post","put","patch","delete"];new Set(te);const ye=["get",...te];new Set(ye);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},q.apply(this,arguments)}const re=c.createContext(null),w=c.createContext(null),ne=c.createContext(null),T=c.createContext({outlet:null,matches:[],isDataRoute:!1});function be(e,t){let{relative:r}=t===void 0?{}:t;_()||v(!1);let{basename:n,navigator:a}=c.useContext(w),{hash:i,pathname:s,search:l}=ie(e,{relative:r}),u=s;return n!=="/"&&(u=s==="/"?n:ee([n,s])),a.createHref({pathname:u,search:l,hash:i})}function _(){return c.useContext(ne)!=null}function A(){return _()||v(!1),c.useContext(ne).location}function ae(e){c.useContext(w).static||c.useLayoutEffect(e)}function Se(){let{isDataRoute:e}=c.useContext(T);return e?Re():xe()}function xe(){_()||v(!1);let e=c.useContext(re),{basename:t,future:r,navigator:n}=c.useContext(w),{matches:a}=c.useContext(T),{pathname:i}=A(),s=JSON.stringify(Y(a,r.v7_relativeSplatPath)),l=c.useRef(!1);return ae(()=>{l.current=!0}),c.useCallback(function(d,m){if(m===void 0&&(m={}),!l.current)return;if(typeof d=="number"){n.go(d);return}let h=Z(d,JSON.parse(s),i,m.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:ee([t,h.pathname])),(m.replace?n.replace:n.push)(h,m.state,m)},[t,n,s,i,e])}function ie(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=c.useContext(w),{matches:a}=c.useContext(T),{pathname:i}=A(),s=JSON.stringify(Y(a,n.v7_relativeSplatPath));return c.useMemo(()=>Z(e,JSON.parse(s),i,r==="path"),[e,s,i,r])}var se=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(se||{}),oe=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(oe||{});function Ce(e){let t=c.useContext(re);return t||v(!1),t}function Pe(e){let t=c.useContext(T);return t||v(!1),t}function we(e){let t=Pe(),r=t.matches[t.matches.length-1];return r.route.id||v(!1),r.route.id}function Re(){let{router:e}=Ce(se.UseNavigateStable),t=we(oe.UseNavigateStable),r=c.useRef(!1);return ae(()=>{r.current=!0}),c.useCallback(function(a,i){i===void 0&&(i={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,q({fromRouteId:t},i)))},[e,t])}new Promise(()=>{});/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},N.apply(this,arguments)}function Le(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,i;for(i=0;i<n.length;i++)a=n[i],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function Be(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Oe(e,t){return e.button===0&&(!t||t==="_self")&&!Be(e)}const Te=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],$e="6";try{window.__reactRouterVersion=$e}catch{}const ke=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ee=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ue=c.forwardRef(function(t,r){let{onClick:n,relative:a,reloadDocument:i,replace:s,state:l,target:u,to:d,preventScrollReset:m,unstable_viewTransition:h}=t,p=Le(t,Te),{basename:x}=c.useContext(w),b,R=!1;if(typeof d=="string"&&Ee.test(d)&&(b=d,ke))try{let g=new URL(window.location.href),C=d.startsWith("//")?new URL(g.protocol+d):new URL(d),G=fe(C.pathname,x);C.origin===g.origin&&G!=null?d=G+C.search+C.hash:R=!0}catch{}let $=be(d,{relative:a}),k=je(d,{replace:s,state:l,target:u,preventScrollReset:m,relative:a,unstable_viewTransition:h});function E(g){n&&n(g),g.defaultPrevented||k(g)}return c.createElement("a",N({},p,{href:b||$,onClick:R||i?n:E,ref:r,target:u}))});var D;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(D||(D={}));var J;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(J||(J={}));function je(e,t){let{target:r,replace:n,state:a,preventScrollReset:i,relative:s,unstable_viewTransition:l}=t===void 0?{}:t,u=Se(),d=A(),m=ie(e,{relative:s});return c.useCallback(h=>{if(Oe(h,r)){h.preventDefault();let p=n!==void 0?n:V(d)===V(m);u(e,{replace:p,state:a,preventScrollReset:i,relative:s,unstable_viewTransition:l})}},[d,u,m,n,a,r,e,i,s,l])}var o=(e=>(e.Primary="primary",e.Secondary="secondary",e.Destructive="destructive",e.DestructiveInverted="destructive-inverted",e))(o||{}),y=(e=>(e.Small="small",e.Medium="medium",e.Large="large",e))(y||{}),le=(e=>(e.Button="button",e.Submit="submit",e.Reset="reset",e))(le||{});const qe=({$fullwidth:e})=>{if(e)return"100%"},H=({size:e})=>{if(e===y.Small)return 40;if(e===y.Medium)return 48;if(e===y.Large)return 56},K=({size:e})=>{if(e===y.Small)return 16;if(e===y.Medium)return 20;if(e===y.Large)return 24},ue=({appearance:e,theme:t})=>{var r,n,a,i,s,l,u;if(e===o.Primary&&((n=(r=t.automated)==null?void 0:r.styles)!=null&&n.colorPrimary))return(i=(a=t.automated)==null?void 0:a.styles)==null?void 0:i.colorPrimary;if(e===o.Primary)return f.B500;if(e===o.Secondary&&((l=(s=t.automated)==null?void 0:s.styles)!=null&&l.buttonBackground))return(u=t.automated)==null?void 0:u.styles.buttonBackground;if(e===o.Secondary)return f.GS300;if(e===o.Destructive)return f.R300;if(e==="destructive-inverted")return f.GS0},z=({appearance:e,theme:t})=>{var r,n,a,i,s,l,u;if(e===o.Primary&&((n=(r=t.automated)==null?void 0:r.styles)!=null&&n.colorOnPrimary))return(i=(a=t.automated)==null?void 0:a.styles)==null?void 0:i.colorOnPrimary;if(e===o.Primary)return f.GS0;if(e===o.Secondary&&((l=(s=t.automated)==null?void 0:s.styles)!=null&&l.colorOnBackground))return(u=t.automated)==null?void 0:u.styles.colorOnBackground;if(e===o.Secondary)return f.GS1000;if(e===o.Destructive)return f.GS0;if(e==="destructive-inverted")return f.R300},Ne=({appearance:e,theme:t})=>{var r,n,a,i,s,l,u;if(e===o.Primary&&((n=(r=t.automated)==null?void 0:r.styles)!=null&&n.palePrimaryLight))return(i=(a=t.automated)==null?void 0:a.styles)==null?void 0:i.palePrimaryLight;if(e===o.Primary)return f.B600;if(e===o.Secondary&&((l=(s=t.automated)==null?void 0:s.styles)!=null&&l.buttonBackgroundHover))return(u=t.automated)==null?void 0:u.styles.buttonBackgroundHover;if(e===o.Secondary)return f.GS400;if(e===o.Destructive)return f.R500;if(e==="destructive-inverted")return f.GS400},Me=({appearance:e,theme:t})=>{var r,n,a,i;if(e===o.Primary&&((n=(r=t.automated)==null?void 0:r.styles)!=null&&n.palePrimaryLight))return(i=(a=t.automated)==null?void 0:a.styles)==null?void 0:i.palePrimaryLight;if(e===o.Primary)return f.B700;if(e===o.Secondary)return f.GS1000;if(e===o.Destructive)return f.R500;if(e==="destructive-inverted")return f.GS400},_e=({appearance:e})=>{if(e===o.Secondary)return f.GS0},X=({appearance:e,theme:t})=>{var r,n,a,i,s,l,u,d;if(e===o.Primary&&((n=(r=t.automated)==null?void 0:r.styles)!=null&&n.colorPrimary))return(i=(a=t.automated)==null?void 0:a.styles)==null?void 0:i.colorPrimary;if(e===o.Primary)return f.B500;if(e===o.Secondary&&((l=(s=t.automated)==null?void 0:s.styles)!=null&&l.colorOnBackground))return B.mix((u=t.automated)==null?void 0:u.styles.colorBackground,(d=t.automated)==null?void 0:d.styles.colorOnBackground,10).toHexString();if(e===o.Secondary)return f.GS300;if(e===o.Destructive)return f.R300;if(e==="destructive-inverted")return f.GS0},Ae=({appearance:e,theme:t})=>{var r,n,a,i,s,l,u,d;if(e===o.Primary&&((n=(r=t.automated)==null?void 0:r.styles)!=null&&n.colorOnPrimary))return(i=(a=t.automated)==null?void 0:a.styles)==null?void 0:i.colorOnPrimary;if(e===o.Secondary&&((l=(s=t.automated)==null?void 0:s.styles)!=null&&l.colorOnBackground))return(d=(u=t.automated)==null?void 0:u.styles)==null?void 0:d.colorOnBackground;if(e===o.Secondary)return f.GS1000},Ge=e=>B(ue(e)).setAlpha(.4).toRgbString(),Ie=({appearance:e,theme:t})=>{var r,n,a,i;return(n=(r=t.automated)==null?void 0:r.styles)!=null&&n.colorOnPrimary?B.mix((a=t.automated)==null?void 0:a.styles.colorBackground,(i=t.automated)==null?void 0:i.styles.colorOnPrimary,40).toHexString():e===o.Secondary?B(f.GS1000).setAlpha(.4).toRgbString():f.GS100},We=O.button(({$loading:e,$multiline:t})=>P`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${qe};
    height: ${H}px;
    padding-left: ${K}px;
    padding-right: ${K}px;
    background: ${ue};
    outline: none;
    position: relative;

    border-radius: ${L("buttonCornerRadius")};

    white-space: nowrap;

    font-weight: ${L("fontWeightBaseBold","600")};
    text-transform: ${L("textTransformBase")};

    font-size: 16px;
    font-family: inherit;
    line-height: 24px;
    color: ${z};

    appearance: none !important; // NOTE: Required for Safari.

    ${t&&P`
      height: auto;
      min-height: ${H}px;

      white-space: normal;
      word-break: break-all;
    `}
    ${!e&&P`
      &:hover {
        background: ${Ne};

        color: ${z};
      }

      &:active {
        background: ${Me};

        color: ${_e};
      }

      &:focus {
        background: ${X};

        color: ${Ae};

        &:after {
          content: '';
          position: absolute;
          padding: 2px;
          border: 1px solid ${X};
          width: 100%;
          height: 100%;
          border-radius: ${L("buttonCornerRadius")};
        }
      }
    `}
    &:disabled {
      cursor: not-allowed;

      ${!e&&P`
        background: ${Ge};
        color: ${Ie};
      `}
    }
  `),M=O.div`
  display: flex;
  align-self: center;

  ${({color:e})=>e&&P`
      color: ${e};
    `}

  + span {
    padding-left: 10px;
  }
`,Ve=O.span`
  display: flex;

  > span + ${M} {
    padding-left: 10px;
  }

  ${({$loading:e})=>e&&P`
      visibility: hidden;
    `}
`,Fe=O.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`,De=({to:e,href:t,disabled:r})=>!r&&e?Ue:!r&&t?"a":"button",Je=e=>e===o.Secondary?"secondary":"primary",He=({style:e,forwardedRef:t,label:r,appearance:n=o.Secondary,size:a="medium",icon:i,leftIcon:s,iconColor:l,to:u,state:d,href:m,target:h,download:p,disabled:x=!1,loading:b=!1,fullWidth:R=!1,multiline:$=!1,type:k=le.Button,className:E,analytics:g,onClick:C})=>S.jsxs(We,{style:e,ref:t,as:De({to:u,href:m,disabled:x}),role:"button",appearance:n,size:a,to:x?void 0:u,state:d,href:x?void 0:m,target:h,download:p,disabled:x||b,$loading:b,$fullwidth:R,$multiline:$,type:k,onClick:C,className:E,"data-analytics":g,"data-testid":"button",children:[S.jsxs(Ve,{$loading:b,children:[s&&S.jsx(M,{color:l,"aria-hidden":"true",children:s}),r&&S.jsx("span",{children:r}),i&&S.jsx(M,{color:l,"aria-hidden":"true",children:i})]}),b&&S.jsx(Fe,{children:S.jsx(ce,{appearance:Je(n),size:a===y.Small?I.Medium:I.Large})})]});He.__docgenInfo={description:"",methods:[],displayName:"Button",props:{style:{required:!1,tsType:{name:"CSSProperties"},description:""},forwardedRef:{required:!1,tsType:{name:"MutableRefObject",elements:[{name:"union",raw:"HTMLButtonElement | null",elements:[{name:"HTMLButtonElement"},{name:"null"}]}],raw:"MutableRefObject<HTMLButtonElement | null>"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},appearance:{required:!1,tsType:{name:"union",raw:"Appearance | 'primary' | 'secondary' | 'destructive' | 'destructive-inverted'",elements:[{name:"Appearance"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'destructive'"},{name:"literal",value:"'destructive-inverted'"}]},description:"",defaultValue:{value:"Appearance.Secondary",computed:!0}},size:{required:!1,tsType:{name:"union",raw:"Size | 'small' | 'medium' | 'large'",elements:[{name:"Size"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},icon:{required:!1,tsType:{name:"ReactElement"},description:""},leftIcon:{required:!1,tsType:{name:"ReactElement"},description:""},iconColor:{required:!1,tsType:{name:"string"},description:""},to:{required:!1,tsType:{name:"LinkProps['to']",raw:"LinkProps['to']"},description:""},state:{required:!1,tsType:{name:"LinkProps['state']",raw:"LinkProps['state']"},description:""},href:{required:!1,tsType:{name:"string"},description:""},target:{required:!1,tsType:{name:"union",raw:"'_blank' | '_self' | '_parent' | '_top' | string",elements:[{name:"literal",value:"'_blank'"},{name:"literal",value:"'_self'"},{name:"literal",value:"'_parent'"},{name:"literal",value:"'_top'"},{name:"string"}]},description:""},download:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},multiline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"Type | 'button' | 'submit' | 'reset'",elements:[{name:"Type"},{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"",defaultValue:{value:"Type.Button",computed:!0}},className:{required:!1,tsType:{name:"string"},description:""},analytics:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>"},description:""}}};const Ke=c.createContext({shop:!1,setShop:()=>{},donations:!1,setDonations:()=>{},memberships:!1,setMemberships:()=>{}});function Ye(){return de.useContext(Ke)}export{o as A,He as B,Ue as L,y as S,Ye as u};
