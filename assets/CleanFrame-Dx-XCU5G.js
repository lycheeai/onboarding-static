import{q as I,A as Rt,C as B,j as m,I as Xt,D as Ot,f as Qt,e as Rr,F as Or,H as Ir,J as Jt}from"./GoogleFontInject-BcCD-NBc.js";import{r as v,R as se,c as It}from"./index-RYns6xqu.js";import{S as Ur,s as zr,g as Pr,n as $t,p as Br,u as Vr,b as Hr,c as Gr,d as jr,A as er,e as tr,f as Yr}from"./useDebounce-BTZgvQhJ.js";import{L as Zr,u as Wr,B as we}from"./SiteOfferProvider-Di08FzGv.js";class Kr extends Ur{constructor(e,a){super(),this.client=e,this.setOptions(a),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var a;const o=this.options;this.options=this.client.defaultMutationOptions(e),zr(o,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(a=this.currentMutation)==null||a.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.currentMutation)==null||e.removeObserver(this)}}onMutationUpdate(e){this.updateResult();const a={listeners:!0};e.type==="success"?a.onSuccess=!0:e.type==="error"&&(a.onError=!0),this.notify(a)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,a){return this.mutateOptions=a,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof e<"u"?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const e=this.currentMutation?this.currentMutation.state:Pr(),a={...e,isLoading:e.status==="loading",isSuccess:e.status==="success",isError:e.status==="error",isIdle:e.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=a}notify(e){$t.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(e.onSuccess){var a,o,s,n;(a=(o=this.mutateOptions).onSuccess)==null||a.call(o,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(s=(n=this.mutateOptions).onSettled)==null||s.call(n,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(e.onError){var u,_,d,b;(u=(_=this.mutateOptions).onError)==null||u.call(_,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(d=(b=this.mutateOptions).onSettled)==null||d.call(b,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}e.listeners&&this.listeners.forEach(({listener:w})=>{w(this.currentResult)})})}}function rr(r,e,a){const o=Br(r,e),s=Vr({context:o.context}),[n]=v.useState(()=>new Kr(s,o));v.useEffect(()=>{n.setOptions(o)},[n,o]);const u=Hr(v.useCallback(d=>n.subscribe($t.batchCalls(d)),[n]),()=>n.getCurrentResult(),()=>n.getCurrentResult()),_=v.useCallback((d,b)=>{n.mutate(d,b).catch(Xr)},[n]);if(u.error&&Gr(n.options.useErrorBoundary,[u.error]))throw u.error;return{...u,mutate:_,mutateAsync:u.mutate}}function Xr(){}const Qr=({appearance:r,theme:e})=>{var a,o,s;return(o=(a=e.automated)==null?void 0:a.styles)!=null&&o.paleTextColor?(s=e.automated)==null?void 0:s.styles.paleTextColor:r==="primary"?B.GS1000:r==="destructive"?B.R300:B.GS600},ar=I.div`
  position: relative;
  top: -1px;
  display: flex;
  align-self: center;
  padding-right: 8px;
`,Ut=({disabled:r,appearance:e,theme:a})=>{var o,s,n;if(!r)return(s=(o=a.automated)==null?void 0:o.styles)!=null&&s.colorOnBackground?(n=a.automated)==null?void 0:n.styles.colorOnBackground:e==="primary"?B.B500:e==="destructive"?B.R500:B.GS1000},Jr=I.button`
  display: inline-flex;

  font-weight: inherit;
  font-size: inherit;
  font-family: inherit;
  line-height: 150%;
  color: ${Qr};

  appearance: none !important; // NOTE: Required for Safari.

  &:hover,
  &:active,
  &:focus {
    color: ${Ut};
  }

  &:hover {
    ${ar} {
      svg > path {
        stroke: ${Ut};
      }
    }
  }

  ${({$withUnderline:r})=>r&&Rt`
      text-decoration-line: underline;
    `}

  ${({disabled:r})=>r&&Rt`
      cursor: not-allowed;
    `}
`,$r=({to:r,href:e})=>r?Zr:e?"a":"button",ot=({appearance:r="primary",ariaLabel:e,analyticsKey:a,to:o,state:s,href:n,target:u,label:_,title:d,icon:b,withUnderline:w=!0,disabled:h=!1,type:p="button",onClick:y})=>m.jsxs(Jr,{appearance:r,as:$r({to:o,href:n}),to:o||void 0,state:s,href:n||void 0,target:u||void 0,title:d,$withUnderline:w,disabled:h,onClick:y||void 0,type:p,"aria-label":e,"data-testid":"ButtonClean.Container","data-analytics":a,children:[b&&m.jsx(ar,{"data-testid":"ButtonClean.Icon","aria-hidden":"true",children:m.jsx(Xt,{component:b,height:12})}),_]});ot.__docgenInfo={description:"",methods:[],displayName:"ButtonClean",props:{ariaLabel:{required:!1,tsType:{name:"string"},description:""},appearance:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'destructive'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'destructive'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},href:{required:!1,tsType:{name:"string"},description:""},target:{required:!1,tsType:{name:"literal",value:"'_blank'"},description:""},analyticsKey:{required:!1,tsType:{name:"string"},description:""},to:{required:!1,tsType:{name:"LinkProps['to']",raw:"LinkProps['to']"},description:""},state:{required:!1,tsType:{name:"LinkProps['state']",raw:"LinkProps['state']"},description:""},label:{required:!0,tsType:{name:"union",raw:"ReactElement | string",elements:[{name:"ReactElement"},{name:"string"}]},description:""},title:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: SVGAttributes<SVGElement> & { alt?: string }) => JSX.Element",signature:{arguments:[{type:{name:"intersection",raw:"SVGAttributes<SVGElement> & { alt?: string }",elements:[{name:"SVGAttributes",elements:[{name:"SVGElement"}],raw:"SVGAttributes<SVGElement>"},{name:"signature",type:"object",raw:"{ alt?: string }",signature:{properties:[{key:"alt",value:{name:"string",required:!1}}]}}]},name:"props"}],return:{name:"JSX.Element"}}},description:""},withUnderline:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"",defaultValue:{value:"'button'",computed:!1}},onClick:{required:!1,tsType:{name:"MouseEventHandler",elements:[{name:"HTMLButtonElement"}],raw:"MouseEventHandler<HTMLButtonElement>"},description:""}}};const ea=v.createContext({navigate:async()=>{},location:""});function ta(){return se.useContext(ea)}const ra=I.div`
  display: flex;
  gap: 4px;
`,aa=I.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;

  outline: none;

  color: ${({isActive:r})=>r?B.GS1000:B.GS600};
  background-color: ${({isActive:r})=>r?B.GS0:"none"};
  border-radius: 2px;

  box-shadow: ${({isActive:r})=>r?"0px 4px 6px 0px #0000000D":"none"};

  &:hover {
    background-color: ${B.GS300};
  }
`,or=({items:r,value:e,onChange:a})=>{if(r.length===0)return null;const o=({label:s,value:n,icon:u})=>{const _=n===e,d=()=>{_||a(n)};return m.jsx(aa,{isActive:_,type:"button",onClick:d,children:m.jsx(Xt,{component:u,height:16,alt:s})},n)};return m.jsx(ra,{children:r.map(o)})};or.__docgenInfo={description:"",methods:[],displayName:"IconSwitch",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string
  value: string
  icon: IconComponent
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"icon",value:{name:"IconComponent",required:!0}}]}}],raw:"Item[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};function Fo(r,e){return r["color-background"]===e["color-background"]&&r["color-primary"]===e["color-primary"]&&r["color-secondary"]===e["color-secondary"]&&r["color-on-background"]===e["color-on-background"]&&r["color-on-primary"]===e["color-on-primary"]&&r["color-on-secondary"]===e["color-on-secondary"]}function D(r){return{...r}}const qe=[{key:"Monochromatic",colors:[D({"color-background":"#F0F0F0","color-on-background":"#333333","color-primary":"#A0A0A0","color-on-primary":"#FFFFFF","color-secondary":"#606060","color-on-secondary":"#FFFFFF"}),D({"color-background":"#F5F0E8","color-on-background":"#4A3F2F","color-primary":"#D9C7A7","color-on-primary":"#2F2A20","color-secondary":"#8C7A5B","color-on-secondary":"#FFFFFF"}),D({"color-background":"#E6EEF5","color-on-background":"#1A2633","color-primary":"#4A77A8","color-on-primary":"#FFFFFF","color-secondary":"#1E3F66","color-on-secondary":"#FFFFFF"}),D({"color-background":"#E6EEF1","color-on-background":"#1A2633","color-primary":"#4A77A8","color-on-primary":"#FFFFFF","color-secondary":"#1E3F66","color-on-secondary":"#FFFFFF"})]},{key:"Neutral",colors:[D({"color-background":"#F2F0ED","color-on-background":"#333333","color-primary":"#B8AFA0","color-on-primary":"#FFFFFF","color-secondary":"#5C5853","color-on-secondary":"#FFFFFF"}),D({"color-background":"#E8E6E4","color-on-background":"#333333","color-primary":"#A69F98","color-on-primary":"#FFFFFF","color-secondary":"#4D4A47","color-on-secondary":"#FFFFFF"}),D({"color-background":"#F0EDE9","color-on-background":"#333333","color-primary":"#B0A798","color-on-primary":"#FFFFFF","color-secondary":"#6B665C","color-on-secondary":"#FFFFFF"}),D({"color-background":"#F0EDE1","color-on-background":"#333333","color-primary":"#B0A798","color-on-primary":"#FFFFFF","color-secondary":"#6B665C","color-on-secondary":"#FFFFFF"})]},{key:"Bright",colors:[D({"color-background":"#FFF5E1","color-on-background":"#333333","color-primary":"#FF6B6B","color-on-primary":"#FFFFFF","color-secondary":"#4ECDC4","color-on-secondary":"#FFFFFF"}),D({"color-background":"#F0F7EE","color-on-background":"#333333","color-primary":"#FFD166","color-on-primary":"#333333","color-secondary":"#06D6A0","color-on-secondary":"#FFFFFF"}),D({"color-background":"#E6F3FF","color-on-background":"#333333","color-primary":"#FF9A8B","color-on-primary":"#FFFFFF","color-secondary":"#8A5AFF","color-on-secondary":"#FFFFFF"}),D({"color-background":"#E6F3F1","color-on-background":"#333333","color-primary":"#FF9A8B","color-on-primary":"#FFFFFF","color-secondary":"#8A5AFF","color-on-secondary":"#FFFFFF"})]},{key:"Bold",colors:[D({"color-background":"#FFFFFF","color-on-background":"#333333","color-primary":"#3D5AFE","color-on-primary":"#FFFFFF","color-secondary":"#FF4081","color-on-secondary":"#FFFFFF"}),D({"color-background":"#F5F5F5","color-on-background":"#333333","color-primary":"#FF6D00","color-on-primary":"#FFFFFF","color-secondary":"#00BFA5","color-on-secondary":"#FFFFFF"}),D({"color-background":"#FAFAFA","color-on-background":"#333333","color-primary":"#FFD600","color-on-primary":"#333333","color-secondary":"#2979FF","color-on-secondary":"#FFFFFF"}),D({"color-background":"#FAFAF1","color-on-background":"#333333","color-primary":"#FFD600","color-on-primary":"#333333","color-secondary":"#2979FF","color-on-secondary":"#FFFFFF"})]}],ir="clean-frame",zt={"bold-minimalist":{hero:"fw-section-hero-1722976686","featured-collection":"fw-section-featured-collection-0","rich-text":"fw-section-rich-text-1722976668","image-with-text":"fw-section-image-with-text-1722976678","links-list":"fw-section-links-list-1722976693",tiers:"fw-section-tiers-1722976699","recent-posts":"fw-section-recent-posts-1722976706","recent-videos":"fw-section-recent-videos-1722976712","instagram-feed":"fw-section-instagram-feed-1722976718",donations:"fw-section-donations-1722976728",newsletter:"fw-section-newsletter-1722976733"},"modern-vivid":{hero:"fw-section-hero-0","featured-collection":"fw-section-featured-collection-0","rich-text":"fw-section-rich-text-1722977098","image-with-text":"fw-section-image-with-text-1722977108","links-list":"fw-section-links-list-1722977115",tiers:"fw-section-tiers-1722977121","recent-posts":"fw-section-recent-posts-1722977126","recent-videos":"fw-section-recent-videos-1722977131","instagram-feed":"fw-section-instagram-feed-1722977137",donations:"fw-section-donations-1722977141",newsletter:"fw-section-newsletter-1722977162"},"digital-throwback":{hero:"fw-section-hero-1722977612","featured-collection":"fw-section-featured-collection-0","rich-text":"fw-section-rich-text-1722977600","image-with-text":"fw-section-image-with-text-1722977605","links-list":"fw-section-links-list-1722977617",tiers:"fw-section-tiers-1722977625","recent-posts":"fw-section-recent-posts-1722977630","recent-videos":"fw-section-recent-videos-1722977634","instagram-feed":"fw-section-instagram-feed-1722977640",donations:"fw-section-donations-1722977644",newsletter:"fw-section-newsletter-1722977648"},"lively-classic":{hero:"fw-section-hero-0","featured-collection":"fw-section-featured-collection-0","rich-text":"fw-section-rich-text-1722977851","image-with-text":"fw-section-image-with-text-1722977860","links-list":"fw-section-links-list-1722977867",tiers:"fw-section-tiers-1722977871","recent-posts":"fw-section-recent-posts-1722977875","recent-videos":"fw-section-recent-videos-1722977879","instagram-feed":"fw-section-instagram-feed-1722977884",donations:"fw-section-donations-1722977888",newsletter:"fw-section-newsletter-1722977892"},freestyle:{hero:"fw-section-hero-0","featured-collection":"fw-section-featured-collection-0","rich-text":"fw-section-rich-text-0","image-with-text":"fw-section-image-with-text-1722978067","links-list":"fw-section-links-list-1722978076",tiers:"fw-section-tiers-1722978086","recent-posts":"fw-section-recent-posts-1722978091","recent-videos":"fw-section-recent-videos-1722978096","instagram-feed":"fw-section-instagram-feed-1722978101",donations:"fw-section-donations-1722978105",newsletter:"fw-section-newsletter-1722978109"},"playful-vibes":{hero:"fw-section-hero-0","featured-collection":"fw-section-featured-collection-0","rich-text":"fw-section-rich-text-1722978349","image-with-text":"fw-section-image-with-text-1722978357","links-list":"fw-section-links-list-1722978363",tiers:"fw-section-tiers-1722978374","recent-posts":"fw-section-recent-posts-1722978380","recent-videos":"fw-section-recent-videos-1722978384","instagram-feed":"fw-section-instagram-feed-1722978389",donations:"fw-section-donations-1722978394",newsletter:"fw-section-newsletter-1722978399"},"clean-frame":{hero:"fw-section-hero-1722978594","featured-collection":"fw-section-featured-collection-0","rich-text":"fw-section-rich-text-1722978587","image-with-text":"fw-section-image-with-text-1722978612","links-list":"fw-section-links-list-1722978608",tiers:"fw-section-tiers-1722978619","recent-posts":"fw-section-recent-posts-1722978624","recent-videos":"fw-section-recent-videos-1722978632","instagram-feed":"fw-section-instagram-feed-1722978636",donations:"fw-section-donations-1722978641",newsletter:"fw-section-newsletter-1722978645"},"art-gallery":{hero:"fw-section-hero-1722978879","featured-collection":"fw-section-featured-collection-0","rich-text":"fw-section-rich-text-1722978868","image-with-text":"fw-section-image-with-text-1722978872","links-list":"fw-section-links-list-1722978896",tiers:"fw-section-tiers-1722978901","recent-posts":"fw-section-recent-posts-1722978905","recent-videos":"fw-section-recent-videos-1722978911","instagram-feed":"fw-section-instagram-feed-1722978915",donations:"fw-section-donations-1722978919",newsletter:"fw-section-newsletter-1722978925"},oasis:{hero:"fw-section-hero-0","featured-collection":"fw-section-featured-collection-0","rich-text":"fw-section-rich-text-1722979172","image-with-text":"fw-section-image-with-text-1722979180","links-list":"fw-section-links-list-1722979188",tiers:"fw-section-tiers-1722979199","recent-posts":"fw-section-recent-posts-1722979206","recent-videos":"fw-section-recent-videos-1722979216","instagram-feed":"fw-section-instagram-feed-1722979221",donations:"fw-section-donations-1722979226",newsletter:"fw-section-newsletter-1722979237"}},oa=new DOMParser,ia=new XMLSerializer;function sa(r,e,a,o,s,n,u,_){const d=oa.parseFromString(r,"text/html");d.querySelectorAll("script").forEach(h=>{h.remove()});for(const[h,p]of Object.entries(o))a[h]||d.querySelectorAll(`#${p}`).forEach(y=>{y.remove()});if(a["announcement-bar"]||d.querySelectorAll(".announcement-bar").forEach(h=>{h.remove()}),!u)d.querySelectorAll(".text-logo").forEach(h=>{h.innerHTML=e});else{const h=d.querySelector(".header__logo");if(h){h.innerHTML="";const f=d.createElement("img");f.src=u,f.alt="Logo",f.className="header__logo-image",h.appendChild(f)}const p=d.querySelector(".sidebar__logo");if(p){p.innerHTML="";const f=d.createElement("img");f.src=u,f.alt="Logo",f.className="sidebar__logo-image",p.appendChild(f)}const y=d.querySelector(".bar__logo");if(y){y.innerHTML="";const f=d.createElement("img");f.src=u,f.alt="Logo",f.className="bar__logo-image",y.appendChild(f)}const k=d.querySelector(".footer__logo");if(k){k.innerHTML="";const f=d.createElement("img");f.src=u,f.alt="Logo",f.className="footer__logo-image",k.appendChild(f)}}d.querySelectorAll(".video-tile").forEach((h,p)=>{const y=_[p];if(!y){h.remove();return}const k=h.querySelector(".image__object img");k&&(k.src=y.defaultThumbnail.url,k.alt=y.title);const f=h.querySelector(".video-tile__title");f&&(f.innerHTML=y.title)}),d.querySelectorAll(".instagram-feed__grid .grid").forEach(h=>{h.style.position="relative";const p=d.createElement("div");p.style.position="absolute",p.style.top="0",p.style.left="0",p.style.width="100%",p.style.height="100%",p.style.display="flex",p.style.justifyContent="center",p.style.alignItems="center",p.style.color="#fff",p.style.fontSize="1.5rem",p.style.fontFamily="Suisse Intl, sans-serif",p.style.backgroundColor="rgba(0, 0, 0, 0.5)",p.innerHTML="You will need to connect your Instagram Feed",h.appendChild(p)});for(const h of Object.values(s||{})){const p=d.createElement("link");p.rel="stylesheet",p.href=`https://fonts.googleapis.com/css2?family=${h}`,d.head.appendChild(p)}const b=n||qe[0].colors[0];d.querySelectorAll(".hero__heading,.hero__text,.hero__socials").forEach(h=>{h.style.color=b["color-on-background"]});const w=d.documentElement;return w.style.setProperty("--color-primary",b["color-primary"]),w.style.setProperty("--color-secondary",b["color-secondary"]),w.style.setProperty("--color-background",b["color-background"]),w.style.setProperty("--color-on-primary",b["color-on-primary"]),w.style.setProperty("--color-on-secondary",b["color-on-secondary"]),w.style.setProperty("--color-on-background",b["color-on-background"]),w.style.setProperty("--font-family-base",(s==null?void 0:s.text)||"Roboto"),w.style.setProperty("--font-family-heading",(s==null?void 0:s.heading)||"Roboto"),w.style.setProperty("--text-transform-heading","none"),w.style.setProperty("--text-transform-base","none"),ia.serializeToString(d)}class na extends er{constructor(){super(...arguments),this.getSandboxTheme=e=>this.get(`/suggestions/creator-dashboard/sandbox/${e.theme}`),this.getUserInfo=e=>this.get(`/suggestions/creator-dashboard/user-info?youtube=${e.youtube}`),this.createInstall=e=>this.post("/suggestions/creator-dashboard/installs",e),this.commitInstall=e=>this.put(`/suggestions/creator-dashboard/installs/${e.id}/commit`),this.shopCreate=e=>this.post("/suggestions/creator-dashboard/shops",e)}}const sr=new na(jr()),la=()=>{const r=rr({mutationFn:async e=>{const{data:a}=await sr.createInstall({themeHandle:e.themeHandle,settings:e.settings,sections:e.sections});return a}});return{createInstall:r,isLoading:r.isLoading}},ca=()=>({commitInstall:rr({mutationFn:async e=>{const{data:a,status:o}=await sr.commitInstall({id:e});return o!==200?null:a}})}),da={label:"Announcement bar",key:"announcement-bar"},ua={label:"Image banner",key:"hero"},pa={label:"Featured collections",key:"featured-collection"},ma={label:"Links list",key:"links-list"},ha={label:"Membership Tiers",key:"tiers"},fa={label:"Recent posts",key:"recent-posts"},ga={label:"Youtube feed",key:"recent-videos"},va={label:"Instagram feed",key:"instagram-feed"},_a={label:"Donations",key:"donations"},ba={label:"Newsletter",key:"newsletter"},Pt=[da,ua,pa,ma,fa,ha,_a,ga,va,ba],nr=v.createContext({theme:ir,setTheme:()=>{},createInstall:async()=>"",installing:!1,sections:[],enabledSections:{},recommendedSections:[],setEnabledSection:()=>{},logoImage:null,setLogoImage:()=>{},allColors:[],selectedColor:qe[0].colors[0],setColors:()=>{},allFonts:[],selectedFont:null,setFonts:()=>{},mobile:!1,setMobile:()=>{}}),wa=r=>{const[e,a]=v.useState(ir),{shop:o,donations:s,memberships:n}=Wr(),[u,_]=v.useState(!1),d=Pt,b=v.useMemo(()=>["hero","featured-collection",...s?["donations"]:[],...n?["tiers","recent-posts"]:[]],[o,s,n]),[w,h]=v.useState({hero:!0,"featured-collection":!0}),p=v.useCallback((de,X)=>{h(Me=>({...Me,[de]:X}))},[h]);v.useEffect(()=>{o&&p("featured-collection",!0),s&&p("donations",!0),n&&(p("tiers",!0),p("recent-posts",!0))},[o,s,n,p]);const[y,k]=v.useState(null),[f,$]=v.useState(qe[0].colors[0]),[U,j]=v.useState(Ot[0].fonts[0]),{createInstall:Y,isLoading:A}=la(),K=v.useCallback(async()=>{const{id:de}=await Y.mutateAsync({themeHandle:e,sections:Pt.map(X=>X.key).filter(X=>!!w[X]),settings:{type_heading_font:U.headingKey,type_base_font:U.textKey,color_background:f["color-background"],color_on_background:f["color-on-background"],color_primary:f["color-primary"],color_on_primary:f["color-on-primary"],color_secondary:f["color-secondary"],color_on_secondary:f["color-on-secondary"]}});return de},[e,Y,f,U,w]),ce=v.useMemo(()=>({theme:e,setTheme:a,createInstall:K,installing:A,sections:d,enabledSections:w,setEnabledSection:p,recommendedSections:b,logoImage:y,setLogoImage:k,allColors:qe,selectedColor:f,setColors:$,allFonts:Ot,selectedFont:U,setFonts:j,mobile:u,setMobile:_}),[e,a,K,A,d,w,p,b,y,k,f,$,U,j,u,_]);return m.jsx(nr.Provider,{value:ce,children:r.children})},De=()=>v.useContext(nr);wa.__docgenInfo={description:"",methods:[],displayName:"StageSettingsProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};var Le={},Ne={};Object.defineProperty(Ne,"__esModule",{value:!0});Ne.bodyRegExps={xml:/&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,html4:/&notin;|&(?:nbsp|iexcl|cent|pound|curren|yen|brvbar|sect|uml|copy|ordf|laquo|not|shy|reg|macr|deg|plusmn|sup2|sup3|acute|micro|para|middot|cedil|sup1|ordm|raquo|frac14|frac12|frac34|iquest|Agrave|Aacute|Acirc|Atilde|Auml|Aring|AElig|Ccedil|Egrave|Eacute|Ecirc|Euml|Igrave|Iacute|Icirc|Iuml|ETH|Ntilde|Ograve|Oacute|Ocirc|Otilde|Ouml|times|Oslash|Ugrave|Uacute|Ucirc|Uuml|Yacute|THORN|szlig|agrave|aacute|acirc|atilde|auml|aring|aelig|ccedil|egrave|eacute|ecirc|euml|igrave|iacute|icirc|iuml|eth|ntilde|ograve|oacute|ocirc|otilde|ouml|divide|oslash|ugrave|uacute|ucirc|uuml|yacute|thorn|yuml|quot|amp|lt|gt|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g,html5:/&centerdot;|&copysr;|&divideontimes;|&gtcc;|&gtcir;|&gtdot;|&gtlPar;|&gtquest;|&gtrapprox;|&gtrarr;|&gtrdot;|&gtreqless;|&gtreqqless;|&gtrless;|&gtrsim;|&ltcc;|&ltcir;|&ltdot;|&lthree;|&ltimes;|&ltlarr;|&ltquest;|&ltrPar;|&ltri;|&ltrie;|&ltrif;|&notin;|&notinE;|&notindot;|&notinva;|&notinvb;|&notinvc;|&notni;|&notniva;|&notnivb;|&notnivc;|&parallel;|&timesb;|&timesbar;|&timesd;|&(?:AElig|AMP|Aacute|Acirc|Agrave|Aring|Atilde|Auml|COPY|Ccedil|ETH|Eacute|Ecirc|Egrave|Euml|GT|Iacute|Icirc|Igrave|Iuml|LT|Ntilde|Oacute|Ocirc|Ograve|Oslash|Otilde|Ouml|QUOT|REG|THORN|Uacute|Ucirc|Ugrave|Uuml|Yacute|aacute|acirc|acute|aelig|agrave|amp|aring|atilde|auml|brvbar|ccedil|cedil|cent|copy|curren|deg|divide|eacute|ecirc|egrave|eth|euml|frac12|frac14|frac34|gt|iacute|icirc|iexcl|igrave|iquest|iuml|laquo|lt|macr|micro|middot|nbsp|not|ntilde|oacute|ocirc|ograve|ordf|ordm|oslash|otilde|ouml|para|plusmn|pound|quot|raquo|reg|sect|shy|sup1|sup2|sup3|szlig|thorn|times|uacute|ucirc|ugrave|uml|uuml|yacute|yen|yuml|#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);?/g};Ne.namedReferences={xml:{entities:{"&lt;":"<","&gt;":">","&quot;":'"',"&apos;":"'","&amp;":"&"},characters:{"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;","&":"&amp;"}},html4:{entities:{"&apos;":"'","&nbsp":" ","&nbsp;":" ","&iexcl":"¡","&iexcl;":"¡","&cent":"¢","&cent;":"¢","&pound":"£","&pound;":"£","&curren":"¤","&curren;":"¤","&yen":"¥","&yen;":"¥","&brvbar":"¦","&brvbar;":"¦","&sect":"§","&sect;":"§","&uml":"¨","&uml;":"¨","&copy":"©","&copy;":"©","&ordf":"ª","&ordf;":"ª","&laquo":"«","&laquo;":"«","&not":"¬","&not;":"¬","&shy":"­","&shy;":"­","&reg":"®","&reg;":"®","&macr":"¯","&macr;":"¯","&deg":"°","&deg;":"°","&plusmn":"±","&plusmn;":"±","&sup2":"²","&sup2;":"²","&sup3":"³","&sup3;":"³","&acute":"´","&acute;":"´","&micro":"µ","&micro;":"µ","&para":"¶","&para;":"¶","&middot":"·","&middot;":"·","&cedil":"¸","&cedil;":"¸","&sup1":"¹","&sup1;":"¹","&ordm":"º","&ordm;":"º","&raquo":"»","&raquo;":"»","&frac14":"¼","&frac14;":"¼","&frac12":"½","&frac12;":"½","&frac34":"¾","&frac34;":"¾","&iquest":"¿","&iquest;":"¿","&Agrave":"À","&Agrave;":"À","&Aacute":"Á","&Aacute;":"Á","&Acirc":"Â","&Acirc;":"Â","&Atilde":"Ã","&Atilde;":"Ã","&Auml":"Ä","&Auml;":"Ä","&Aring":"Å","&Aring;":"Å","&AElig":"Æ","&AElig;":"Æ","&Ccedil":"Ç","&Ccedil;":"Ç","&Egrave":"È","&Egrave;":"È","&Eacute":"É","&Eacute;":"É","&Ecirc":"Ê","&Ecirc;":"Ê","&Euml":"Ë","&Euml;":"Ë","&Igrave":"Ì","&Igrave;":"Ì","&Iacute":"Í","&Iacute;":"Í","&Icirc":"Î","&Icirc;":"Î","&Iuml":"Ï","&Iuml;":"Ï","&ETH":"Ð","&ETH;":"Ð","&Ntilde":"Ñ","&Ntilde;":"Ñ","&Ograve":"Ò","&Ograve;":"Ò","&Oacute":"Ó","&Oacute;":"Ó","&Ocirc":"Ô","&Ocirc;":"Ô","&Otilde":"Õ","&Otilde;":"Õ","&Ouml":"Ö","&Ouml;":"Ö","&times":"×","&times;":"×","&Oslash":"Ø","&Oslash;":"Ø","&Ugrave":"Ù","&Ugrave;":"Ù","&Uacute":"Ú","&Uacute;":"Ú","&Ucirc":"Û","&Ucirc;":"Û","&Uuml":"Ü","&Uuml;":"Ü","&Yacute":"Ý","&Yacute;":"Ý","&THORN":"Þ","&THORN;":"Þ","&szlig":"ß","&szlig;":"ß","&agrave":"à","&agrave;":"à","&aacute":"á","&aacute;":"á","&acirc":"â","&acirc;":"â","&atilde":"ã","&atilde;":"ã","&auml":"ä","&auml;":"ä","&aring":"å","&aring;":"å","&aelig":"æ","&aelig;":"æ","&ccedil":"ç","&ccedil;":"ç","&egrave":"è","&egrave;":"è","&eacute":"é","&eacute;":"é","&ecirc":"ê","&ecirc;":"ê","&euml":"ë","&euml;":"ë","&igrave":"ì","&igrave;":"ì","&iacute":"í","&iacute;":"í","&icirc":"î","&icirc;":"î","&iuml":"ï","&iuml;":"ï","&eth":"ð","&eth;":"ð","&ntilde":"ñ","&ntilde;":"ñ","&ograve":"ò","&ograve;":"ò","&oacute":"ó","&oacute;":"ó","&ocirc":"ô","&ocirc;":"ô","&otilde":"õ","&otilde;":"õ","&ouml":"ö","&ouml;":"ö","&divide":"÷","&divide;":"÷","&oslash":"ø","&oslash;":"ø","&ugrave":"ù","&ugrave;":"ù","&uacute":"ú","&uacute;":"ú","&ucirc":"û","&ucirc;":"û","&uuml":"ü","&uuml;":"ü","&yacute":"ý","&yacute;":"ý","&thorn":"þ","&thorn;":"þ","&yuml":"ÿ","&yuml;":"ÿ","&quot":'"',"&quot;":'"',"&amp":"&","&amp;":"&","&lt":"<","&lt;":"<","&gt":">","&gt;":">","&OElig;":"Œ","&oelig;":"œ","&Scaron;":"Š","&scaron;":"š","&Yuml;":"Ÿ","&circ;":"ˆ","&tilde;":"˜","&ensp;":" ","&emsp;":" ","&thinsp;":" ","&zwnj;":"‌","&zwj;":"‍","&lrm;":"‎","&rlm;":"‏","&ndash;":"–","&mdash;":"—","&lsquo;":"‘","&rsquo;":"’","&sbquo;":"‚","&ldquo;":"“","&rdquo;":"”","&bdquo;":"„","&dagger;":"†","&Dagger;":"‡","&permil;":"‰","&lsaquo;":"‹","&rsaquo;":"›","&euro;":"€","&fnof;":"ƒ","&Alpha;":"Α","&Beta;":"Β","&Gamma;":"Γ","&Delta;":"Δ","&Epsilon;":"Ε","&Zeta;":"Ζ","&Eta;":"Η","&Theta;":"Θ","&Iota;":"Ι","&Kappa;":"Κ","&Lambda;":"Λ","&Mu;":"Μ","&Nu;":"Ν","&Xi;":"Ξ","&Omicron;":"Ο","&Pi;":"Π","&Rho;":"Ρ","&Sigma;":"Σ","&Tau;":"Τ","&Upsilon;":"Υ","&Phi;":"Φ","&Chi;":"Χ","&Psi;":"Ψ","&Omega;":"Ω","&alpha;":"α","&beta;":"β","&gamma;":"γ","&delta;":"δ","&epsilon;":"ε","&zeta;":"ζ","&eta;":"η","&theta;":"θ","&iota;":"ι","&kappa;":"κ","&lambda;":"λ","&mu;":"μ","&nu;":"ν","&xi;":"ξ","&omicron;":"ο","&pi;":"π","&rho;":"ρ","&sigmaf;":"ς","&sigma;":"σ","&tau;":"τ","&upsilon;":"υ","&phi;":"φ","&chi;":"χ","&psi;":"ψ","&omega;":"ω","&thetasym;":"ϑ","&upsih;":"ϒ","&piv;":"ϖ","&bull;":"•","&hellip;":"…","&prime;":"′","&Prime;":"″","&oline;":"‾","&frasl;":"⁄","&weierp;":"℘","&image;":"ℑ","&real;":"ℜ","&trade;":"™","&alefsym;":"ℵ","&larr;":"←","&uarr;":"↑","&rarr;":"→","&darr;":"↓","&harr;":"↔","&crarr;":"↵","&lArr;":"⇐","&uArr;":"⇑","&rArr;":"⇒","&dArr;":"⇓","&hArr;":"⇔","&forall;":"∀","&part;":"∂","&exist;":"∃","&empty;":"∅","&nabla;":"∇","&isin;":"∈","&notin;":"∉","&ni;":"∋","&prod;":"∏","&sum;":"∑","&minus;":"−","&lowast;":"∗","&radic;":"√","&prop;":"∝","&infin;":"∞","&ang;":"∠","&and;":"∧","&or;":"∨","&cap;":"∩","&cup;":"∪","&int;":"∫","&there4;":"∴","&sim;":"∼","&cong;":"≅","&asymp;":"≈","&ne;":"≠","&equiv;":"≡","&le;":"≤","&ge;":"≥","&sub;":"⊂","&sup;":"⊃","&nsub;":"⊄","&sube;":"⊆","&supe;":"⊇","&oplus;":"⊕","&otimes;":"⊗","&perp;":"⊥","&sdot;":"⋅","&lceil;":"⌈","&rceil;":"⌉","&lfloor;":"⌊","&rfloor;":"⌋","&lang;":"〈","&rang;":"〉","&loz;":"◊","&spades;":"♠","&clubs;":"♣","&hearts;":"♥","&diams;":"♦"},characters:{"'":"&apos;"," ":"&nbsp;","¡":"&iexcl;","¢":"&cent;","£":"&pound;","¤":"&curren;","¥":"&yen;","¦":"&brvbar;","§":"&sect;","¨":"&uml;","©":"&copy;",ª:"&ordf;","«":"&laquo;","¬":"&not;","­":"&shy;","®":"&reg;","¯":"&macr;","°":"&deg;","±":"&plusmn;","²":"&sup2;","³":"&sup3;","´":"&acute;",µ:"&micro;","¶":"&para;","·":"&middot;","¸":"&cedil;","¹":"&sup1;",º:"&ordm;","»":"&raquo;","¼":"&frac14;","½":"&frac12;","¾":"&frac34;","¿":"&iquest;",À:"&Agrave;",Á:"&Aacute;",Â:"&Acirc;",Ã:"&Atilde;",Ä:"&Auml;",Å:"&Aring;",Æ:"&AElig;",Ç:"&Ccedil;",È:"&Egrave;",É:"&Eacute;",Ê:"&Ecirc;",Ë:"&Euml;",Ì:"&Igrave;",Í:"&Iacute;",Î:"&Icirc;",Ï:"&Iuml;",Ð:"&ETH;",Ñ:"&Ntilde;",Ò:"&Ograve;",Ó:"&Oacute;",Ô:"&Ocirc;",Õ:"&Otilde;",Ö:"&Ouml;","×":"&times;",Ø:"&Oslash;",Ù:"&Ugrave;",Ú:"&Uacute;",Û:"&Ucirc;",Ü:"&Uuml;",Ý:"&Yacute;",Þ:"&THORN;",ß:"&szlig;",à:"&agrave;",á:"&aacute;",â:"&acirc;",ã:"&atilde;",ä:"&auml;",å:"&aring;",æ:"&aelig;",ç:"&ccedil;",è:"&egrave;",é:"&eacute;",ê:"&ecirc;",ë:"&euml;",ì:"&igrave;",í:"&iacute;",î:"&icirc;",ï:"&iuml;",ð:"&eth;",ñ:"&ntilde;",ò:"&ograve;",ó:"&oacute;",ô:"&ocirc;",õ:"&otilde;",ö:"&ouml;","÷":"&divide;",ø:"&oslash;",ù:"&ugrave;",ú:"&uacute;",û:"&ucirc;",ü:"&uuml;",ý:"&yacute;",þ:"&thorn;",ÿ:"&yuml;",'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;",Œ:"&OElig;",œ:"&oelig;",Š:"&Scaron;",š:"&scaron;",Ÿ:"&Yuml;","ˆ":"&circ;","˜":"&tilde;"," ":"&ensp;"," ":"&emsp;"," ":"&thinsp;","‌":"&zwnj;","‍":"&zwj;","‎":"&lrm;","‏":"&rlm;","–":"&ndash;","—":"&mdash;","‘":"&lsquo;","’":"&rsquo;","‚":"&sbquo;","“":"&ldquo;","”":"&rdquo;","„":"&bdquo;","†":"&dagger;","‡":"&Dagger;","‰":"&permil;","‹":"&lsaquo;","›":"&rsaquo;","€":"&euro;",ƒ:"&fnof;",Α:"&Alpha;",Β:"&Beta;",Γ:"&Gamma;",Δ:"&Delta;",Ε:"&Epsilon;",Ζ:"&Zeta;",Η:"&Eta;",Θ:"&Theta;",Ι:"&Iota;",Κ:"&Kappa;",Λ:"&Lambda;",Μ:"&Mu;",Ν:"&Nu;",Ξ:"&Xi;",Ο:"&Omicron;",Π:"&Pi;",Ρ:"&Rho;",Σ:"&Sigma;",Τ:"&Tau;",Υ:"&Upsilon;",Φ:"&Phi;",Χ:"&Chi;",Ψ:"&Psi;",Ω:"&Omega;",α:"&alpha;",β:"&beta;",γ:"&gamma;",δ:"&delta;",ε:"&epsilon;",ζ:"&zeta;",η:"&eta;",θ:"&theta;",ι:"&iota;",κ:"&kappa;",λ:"&lambda;",μ:"&mu;",ν:"&nu;",ξ:"&xi;",ο:"&omicron;",π:"&pi;",ρ:"&rho;",ς:"&sigmaf;",σ:"&sigma;",τ:"&tau;",υ:"&upsilon;",φ:"&phi;",χ:"&chi;",ψ:"&psi;",ω:"&omega;",ϑ:"&thetasym;",ϒ:"&upsih;",ϖ:"&piv;","•":"&bull;","…":"&hellip;","′":"&prime;","″":"&Prime;","‾":"&oline;","⁄":"&frasl;","℘":"&weierp;",ℑ:"&image;",ℜ:"&real;","™":"&trade;",ℵ:"&alefsym;","←":"&larr;","↑":"&uarr;","→":"&rarr;","↓":"&darr;","↔":"&harr;","↵":"&crarr;","⇐":"&lArr;","⇑":"&uArr;","⇒":"&rArr;","⇓":"&dArr;","⇔":"&hArr;","∀":"&forall;","∂":"&part;","∃":"&exist;","∅":"&empty;","∇":"&nabla;","∈":"&isin;","∉":"&notin;","∋":"&ni;","∏":"&prod;","∑":"&sum;","−":"&minus;","∗":"&lowast;","√":"&radic;","∝":"&prop;","∞":"&infin;","∠":"&ang;","∧":"&and;","∨":"&or;","∩":"&cap;","∪":"&cup;","∫":"&int;","∴":"&there4;","∼":"&sim;","≅":"&cong;","≈":"&asymp;","≠":"&ne;","≡":"&equiv;","≤":"&le;","≥":"&ge;","⊂":"&sub;","⊃":"&sup;","⊄":"&nsub;","⊆":"&sube;","⊇":"&supe;","⊕":"&oplus;","⊗":"&otimes;","⊥":"&perp;","⋅":"&sdot;","⌈":"&lceil;","⌉":"&rceil;","⌊":"&lfloor;","⌋":"&rfloor;","〈":"&lang;","〉":"&rang;","◊":"&loz;","♠":"&spades;","♣":"&clubs;","♥":"&hearts;","♦":"&diams;"}},html5:{entities:{"&AElig":"Æ","&AElig;":"Æ","&AMP":"&","&AMP;":"&","&Aacute":"Á","&Aacute;":"Á","&Abreve;":"Ă","&Acirc":"Â","&Acirc;":"Â","&Acy;":"А","&Afr;":"𝔄","&Agrave":"À","&Agrave;":"À","&Alpha;":"Α","&Amacr;":"Ā","&And;":"⩓","&Aogon;":"Ą","&Aopf;":"𝔸","&ApplyFunction;":"⁡","&Aring":"Å","&Aring;":"Å","&Ascr;":"𝒜","&Assign;":"≔","&Atilde":"Ã","&Atilde;":"Ã","&Auml":"Ä","&Auml;":"Ä","&Backslash;":"∖","&Barv;":"⫧","&Barwed;":"⌆","&Bcy;":"Б","&Because;":"∵","&Bernoullis;":"ℬ","&Beta;":"Β","&Bfr;":"𝔅","&Bopf;":"𝔹","&Breve;":"˘","&Bscr;":"ℬ","&Bumpeq;":"≎","&CHcy;":"Ч","&COPY":"©","&COPY;":"©","&Cacute;":"Ć","&Cap;":"⋒","&CapitalDifferentialD;":"ⅅ","&Cayleys;":"ℭ","&Ccaron;":"Č","&Ccedil":"Ç","&Ccedil;":"Ç","&Ccirc;":"Ĉ","&Cconint;":"∰","&Cdot;":"Ċ","&Cedilla;":"¸","&CenterDot;":"·","&Cfr;":"ℭ","&Chi;":"Χ","&CircleDot;":"⊙","&CircleMinus;":"⊖","&CirclePlus;":"⊕","&CircleTimes;":"⊗","&ClockwiseContourIntegral;":"∲","&CloseCurlyDoubleQuote;":"”","&CloseCurlyQuote;":"’","&Colon;":"∷","&Colone;":"⩴","&Congruent;":"≡","&Conint;":"∯","&ContourIntegral;":"∮","&Copf;":"ℂ","&Coproduct;":"∐","&CounterClockwiseContourIntegral;":"∳","&Cross;":"⨯","&Cscr;":"𝒞","&Cup;":"⋓","&CupCap;":"≍","&DD;":"ⅅ","&DDotrahd;":"⤑","&DJcy;":"Ђ","&DScy;":"Ѕ","&DZcy;":"Џ","&Dagger;":"‡","&Darr;":"↡","&Dashv;":"⫤","&Dcaron;":"Ď","&Dcy;":"Д","&Del;":"∇","&Delta;":"Δ","&Dfr;":"𝔇","&DiacriticalAcute;":"´","&DiacriticalDot;":"˙","&DiacriticalDoubleAcute;":"˝","&DiacriticalGrave;":"`","&DiacriticalTilde;":"˜","&Diamond;":"⋄","&DifferentialD;":"ⅆ","&Dopf;":"𝔻","&Dot;":"¨","&DotDot;":"⃜","&DotEqual;":"≐","&DoubleContourIntegral;":"∯","&DoubleDot;":"¨","&DoubleDownArrow;":"⇓","&DoubleLeftArrow;":"⇐","&DoubleLeftRightArrow;":"⇔","&DoubleLeftTee;":"⫤","&DoubleLongLeftArrow;":"⟸","&DoubleLongLeftRightArrow;":"⟺","&DoubleLongRightArrow;":"⟹","&DoubleRightArrow;":"⇒","&DoubleRightTee;":"⊨","&DoubleUpArrow;":"⇑","&DoubleUpDownArrow;":"⇕","&DoubleVerticalBar;":"∥","&DownArrow;":"↓","&DownArrowBar;":"⤓","&DownArrowUpArrow;":"⇵","&DownBreve;":"̑","&DownLeftRightVector;":"⥐","&DownLeftTeeVector;":"⥞","&DownLeftVector;":"↽","&DownLeftVectorBar;":"⥖","&DownRightTeeVector;":"⥟","&DownRightVector;":"⇁","&DownRightVectorBar;":"⥗","&DownTee;":"⊤","&DownTeeArrow;":"↧","&Downarrow;":"⇓","&Dscr;":"𝒟","&Dstrok;":"Đ","&ENG;":"Ŋ","&ETH":"Ð","&ETH;":"Ð","&Eacute":"É","&Eacute;":"É","&Ecaron;":"Ě","&Ecirc":"Ê","&Ecirc;":"Ê","&Ecy;":"Э","&Edot;":"Ė","&Efr;":"𝔈","&Egrave":"È","&Egrave;":"È","&Element;":"∈","&Emacr;":"Ē","&EmptySmallSquare;":"◻","&EmptyVerySmallSquare;":"▫","&Eogon;":"Ę","&Eopf;":"𝔼","&Epsilon;":"Ε","&Equal;":"⩵","&EqualTilde;":"≂","&Equilibrium;":"⇌","&Escr;":"ℰ","&Esim;":"⩳","&Eta;":"Η","&Euml":"Ë","&Euml;":"Ë","&Exists;":"∃","&ExponentialE;":"ⅇ","&Fcy;":"Ф","&Ffr;":"𝔉","&FilledSmallSquare;":"◼","&FilledVerySmallSquare;":"▪","&Fopf;":"𝔽","&ForAll;":"∀","&Fouriertrf;":"ℱ","&Fscr;":"ℱ","&GJcy;":"Ѓ","&GT":">","&GT;":">","&Gamma;":"Γ","&Gammad;":"Ϝ","&Gbreve;":"Ğ","&Gcedil;":"Ģ","&Gcirc;":"Ĝ","&Gcy;":"Г","&Gdot;":"Ġ","&Gfr;":"𝔊","&Gg;":"⋙","&Gopf;":"𝔾","&GreaterEqual;":"≥","&GreaterEqualLess;":"⋛","&GreaterFullEqual;":"≧","&GreaterGreater;":"⪢","&GreaterLess;":"≷","&GreaterSlantEqual;":"⩾","&GreaterTilde;":"≳","&Gscr;":"𝒢","&Gt;":"≫","&HARDcy;":"Ъ","&Hacek;":"ˇ","&Hat;":"^","&Hcirc;":"Ĥ","&Hfr;":"ℌ","&HilbertSpace;":"ℋ","&Hopf;":"ℍ","&HorizontalLine;":"─","&Hscr;":"ℋ","&Hstrok;":"Ħ","&HumpDownHump;":"≎","&HumpEqual;":"≏","&IEcy;":"Е","&IJlig;":"Ĳ","&IOcy;":"Ё","&Iacute":"Í","&Iacute;":"Í","&Icirc":"Î","&Icirc;":"Î","&Icy;":"И","&Idot;":"İ","&Ifr;":"ℑ","&Igrave":"Ì","&Igrave;":"Ì","&Im;":"ℑ","&Imacr;":"Ī","&ImaginaryI;":"ⅈ","&Implies;":"⇒","&Int;":"∬","&Integral;":"∫","&Intersection;":"⋂","&InvisibleComma;":"⁣","&InvisibleTimes;":"⁢","&Iogon;":"Į","&Iopf;":"𝕀","&Iota;":"Ι","&Iscr;":"ℐ","&Itilde;":"Ĩ","&Iukcy;":"І","&Iuml":"Ï","&Iuml;":"Ï","&Jcirc;":"Ĵ","&Jcy;":"Й","&Jfr;":"𝔍","&Jopf;":"𝕁","&Jscr;":"𝒥","&Jsercy;":"Ј","&Jukcy;":"Є","&KHcy;":"Х","&KJcy;":"Ќ","&Kappa;":"Κ","&Kcedil;":"Ķ","&Kcy;":"К","&Kfr;":"𝔎","&Kopf;":"𝕂","&Kscr;":"𝒦","&LJcy;":"Љ","&LT":"<","&LT;":"<","&Lacute;":"Ĺ","&Lambda;":"Λ","&Lang;":"⟪","&Laplacetrf;":"ℒ","&Larr;":"↞","&Lcaron;":"Ľ","&Lcedil;":"Ļ","&Lcy;":"Л","&LeftAngleBracket;":"⟨","&LeftArrow;":"←","&LeftArrowBar;":"⇤","&LeftArrowRightArrow;":"⇆","&LeftCeiling;":"⌈","&LeftDoubleBracket;":"⟦","&LeftDownTeeVector;":"⥡","&LeftDownVector;":"⇃","&LeftDownVectorBar;":"⥙","&LeftFloor;":"⌊","&LeftRightArrow;":"↔","&LeftRightVector;":"⥎","&LeftTee;":"⊣","&LeftTeeArrow;":"↤","&LeftTeeVector;":"⥚","&LeftTriangle;":"⊲","&LeftTriangleBar;":"⧏","&LeftTriangleEqual;":"⊴","&LeftUpDownVector;":"⥑","&LeftUpTeeVector;":"⥠","&LeftUpVector;":"↿","&LeftUpVectorBar;":"⥘","&LeftVector;":"↼","&LeftVectorBar;":"⥒","&Leftarrow;":"⇐","&Leftrightarrow;":"⇔","&LessEqualGreater;":"⋚","&LessFullEqual;":"≦","&LessGreater;":"≶","&LessLess;":"⪡","&LessSlantEqual;":"⩽","&LessTilde;":"≲","&Lfr;":"𝔏","&Ll;":"⋘","&Lleftarrow;":"⇚","&Lmidot;":"Ŀ","&LongLeftArrow;":"⟵","&LongLeftRightArrow;":"⟷","&LongRightArrow;":"⟶","&Longleftarrow;":"⟸","&Longleftrightarrow;":"⟺","&Longrightarrow;":"⟹","&Lopf;":"𝕃","&LowerLeftArrow;":"↙","&LowerRightArrow;":"↘","&Lscr;":"ℒ","&Lsh;":"↰","&Lstrok;":"Ł","&Lt;":"≪","&Map;":"⤅","&Mcy;":"М","&MediumSpace;":" ","&Mellintrf;":"ℳ","&Mfr;":"𝔐","&MinusPlus;":"∓","&Mopf;":"𝕄","&Mscr;":"ℳ","&Mu;":"Μ","&NJcy;":"Њ","&Nacute;":"Ń","&Ncaron;":"Ň","&Ncedil;":"Ņ","&Ncy;":"Н","&NegativeMediumSpace;":"​","&NegativeThickSpace;":"​","&NegativeThinSpace;":"​","&NegativeVeryThinSpace;":"​","&NestedGreaterGreater;":"≫","&NestedLessLess;":"≪","&NewLine;":`
`,"&Nfr;":"𝔑","&NoBreak;":"⁠","&NonBreakingSpace;":" ","&Nopf;":"ℕ","&Not;":"⫬","&NotCongruent;":"≢","&NotCupCap;":"≭","&NotDoubleVerticalBar;":"∦","&NotElement;":"∉","&NotEqual;":"≠","&NotEqualTilde;":"≂̸","&NotExists;":"∄","&NotGreater;":"≯","&NotGreaterEqual;":"≱","&NotGreaterFullEqual;":"≧̸","&NotGreaterGreater;":"≫̸","&NotGreaterLess;":"≹","&NotGreaterSlantEqual;":"⩾̸","&NotGreaterTilde;":"≵","&NotHumpDownHump;":"≎̸","&NotHumpEqual;":"≏̸","&NotLeftTriangle;":"⋪","&NotLeftTriangleBar;":"⧏̸","&NotLeftTriangleEqual;":"⋬","&NotLess;":"≮","&NotLessEqual;":"≰","&NotLessGreater;":"≸","&NotLessLess;":"≪̸","&NotLessSlantEqual;":"⩽̸","&NotLessTilde;":"≴","&NotNestedGreaterGreater;":"⪢̸","&NotNestedLessLess;":"⪡̸","&NotPrecedes;":"⊀","&NotPrecedesEqual;":"⪯̸","&NotPrecedesSlantEqual;":"⋠","&NotReverseElement;":"∌","&NotRightTriangle;":"⋫","&NotRightTriangleBar;":"⧐̸","&NotRightTriangleEqual;":"⋭","&NotSquareSubset;":"⊏̸","&NotSquareSubsetEqual;":"⋢","&NotSquareSuperset;":"⊐̸","&NotSquareSupersetEqual;":"⋣","&NotSubset;":"⊂⃒","&NotSubsetEqual;":"⊈","&NotSucceeds;":"⊁","&NotSucceedsEqual;":"⪰̸","&NotSucceedsSlantEqual;":"⋡","&NotSucceedsTilde;":"≿̸","&NotSuperset;":"⊃⃒","&NotSupersetEqual;":"⊉","&NotTilde;":"≁","&NotTildeEqual;":"≄","&NotTildeFullEqual;":"≇","&NotTildeTilde;":"≉","&NotVerticalBar;":"∤","&Nscr;":"𝒩","&Ntilde":"Ñ","&Ntilde;":"Ñ","&Nu;":"Ν","&OElig;":"Œ","&Oacute":"Ó","&Oacute;":"Ó","&Ocirc":"Ô","&Ocirc;":"Ô","&Ocy;":"О","&Odblac;":"Ő","&Ofr;":"𝔒","&Ograve":"Ò","&Ograve;":"Ò","&Omacr;":"Ō","&Omega;":"Ω","&Omicron;":"Ο","&Oopf;":"𝕆","&OpenCurlyDoubleQuote;":"“","&OpenCurlyQuote;":"‘","&Or;":"⩔","&Oscr;":"𝒪","&Oslash":"Ø","&Oslash;":"Ø","&Otilde":"Õ","&Otilde;":"Õ","&Otimes;":"⨷","&Ouml":"Ö","&Ouml;":"Ö","&OverBar;":"‾","&OverBrace;":"⏞","&OverBracket;":"⎴","&OverParenthesis;":"⏜","&PartialD;":"∂","&Pcy;":"П","&Pfr;":"𝔓","&Phi;":"Φ","&Pi;":"Π","&PlusMinus;":"±","&Poincareplane;":"ℌ","&Popf;":"ℙ","&Pr;":"⪻","&Precedes;":"≺","&PrecedesEqual;":"⪯","&PrecedesSlantEqual;":"≼","&PrecedesTilde;":"≾","&Prime;":"″","&Product;":"∏","&Proportion;":"∷","&Proportional;":"∝","&Pscr;":"𝒫","&Psi;":"Ψ","&QUOT":'"',"&QUOT;":'"',"&Qfr;":"𝔔","&Qopf;":"ℚ","&Qscr;":"𝒬","&RBarr;":"⤐","&REG":"®","&REG;":"®","&Racute;":"Ŕ","&Rang;":"⟫","&Rarr;":"↠","&Rarrtl;":"⤖","&Rcaron;":"Ř","&Rcedil;":"Ŗ","&Rcy;":"Р","&Re;":"ℜ","&ReverseElement;":"∋","&ReverseEquilibrium;":"⇋","&ReverseUpEquilibrium;":"⥯","&Rfr;":"ℜ","&Rho;":"Ρ","&RightAngleBracket;":"⟩","&RightArrow;":"→","&RightArrowBar;":"⇥","&RightArrowLeftArrow;":"⇄","&RightCeiling;":"⌉","&RightDoubleBracket;":"⟧","&RightDownTeeVector;":"⥝","&RightDownVector;":"⇂","&RightDownVectorBar;":"⥕","&RightFloor;":"⌋","&RightTee;":"⊢","&RightTeeArrow;":"↦","&RightTeeVector;":"⥛","&RightTriangle;":"⊳","&RightTriangleBar;":"⧐","&RightTriangleEqual;":"⊵","&RightUpDownVector;":"⥏","&RightUpTeeVector;":"⥜","&RightUpVector;":"↾","&RightUpVectorBar;":"⥔","&RightVector;":"⇀","&RightVectorBar;":"⥓","&Rightarrow;":"⇒","&Ropf;":"ℝ","&RoundImplies;":"⥰","&Rrightarrow;":"⇛","&Rscr;":"ℛ","&Rsh;":"↱","&RuleDelayed;":"⧴","&SHCHcy;":"Щ","&SHcy;":"Ш","&SOFTcy;":"Ь","&Sacute;":"Ś","&Sc;":"⪼","&Scaron;":"Š","&Scedil;":"Ş","&Scirc;":"Ŝ","&Scy;":"С","&Sfr;":"𝔖","&ShortDownArrow;":"↓","&ShortLeftArrow;":"←","&ShortRightArrow;":"→","&ShortUpArrow;":"↑","&Sigma;":"Σ","&SmallCircle;":"∘","&Sopf;":"𝕊","&Sqrt;":"√","&Square;":"□","&SquareIntersection;":"⊓","&SquareSubset;":"⊏","&SquareSubsetEqual;":"⊑","&SquareSuperset;":"⊐","&SquareSupersetEqual;":"⊒","&SquareUnion;":"⊔","&Sscr;":"𝒮","&Star;":"⋆","&Sub;":"⋐","&Subset;":"⋐","&SubsetEqual;":"⊆","&Succeeds;":"≻","&SucceedsEqual;":"⪰","&SucceedsSlantEqual;":"≽","&SucceedsTilde;":"≿","&SuchThat;":"∋","&Sum;":"∑","&Sup;":"⋑","&Superset;":"⊃","&SupersetEqual;":"⊇","&Supset;":"⋑","&THORN":"Þ","&THORN;":"Þ","&TRADE;":"™","&TSHcy;":"Ћ","&TScy;":"Ц","&Tab;":"	","&Tau;":"Τ","&Tcaron;":"Ť","&Tcedil;":"Ţ","&Tcy;":"Т","&Tfr;":"𝔗","&Therefore;":"∴","&Theta;":"Θ","&ThickSpace;":"  ","&ThinSpace;":" ","&Tilde;":"∼","&TildeEqual;":"≃","&TildeFullEqual;":"≅","&TildeTilde;":"≈","&Topf;":"𝕋","&TripleDot;":"⃛","&Tscr;":"𝒯","&Tstrok;":"Ŧ","&Uacute":"Ú","&Uacute;":"Ú","&Uarr;":"↟","&Uarrocir;":"⥉","&Ubrcy;":"Ў","&Ubreve;":"Ŭ","&Ucirc":"Û","&Ucirc;":"Û","&Ucy;":"У","&Udblac;":"Ű","&Ufr;":"𝔘","&Ugrave":"Ù","&Ugrave;":"Ù","&Umacr;":"Ū","&UnderBar;":"_","&UnderBrace;":"⏟","&UnderBracket;":"⎵","&UnderParenthesis;":"⏝","&Union;":"⋃","&UnionPlus;":"⊎","&Uogon;":"Ų","&Uopf;":"𝕌","&UpArrow;":"↑","&UpArrowBar;":"⤒","&UpArrowDownArrow;":"⇅","&UpDownArrow;":"↕","&UpEquilibrium;":"⥮","&UpTee;":"⊥","&UpTeeArrow;":"↥","&Uparrow;":"⇑","&Updownarrow;":"⇕","&UpperLeftArrow;":"↖","&UpperRightArrow;":"↗","&Upsi;":"ϒ","&Upsilon;":"Υ","&Uring;":"Ů","&Uscr;":"𝒰","&Utilde;":"Ũ","&Uuml":"Ü","&Uuml;":"Ü","&VDash;":"⊫","&Vbar;":"⫫","&Vcy;":"В","&Vdash;":"⊩","&Vdashl;":"⫦","&Vee;":"⋁","&Verbar;":"‖","&Vert;":"‖","&VerticalBar;":"∣","&VerticalLine;":"|","&VerticalSeparator;":"❘","&VerticalTilde;":"≀","&VeryThinSpace;":" ","&Vfr;":"𝔙","&Vopf;":"𝕍","&Vscr;":"𝒱","&Vvdash;":"⊪","&Wcirc;":"Ŵ","&Wedge;":"⋀","&Wfr;":"𝔚","&Wopf;":"𝕎","&Wscr;":"𝒲","&Xfr;":"𝔛","&Xi;":"Ξ","&Xopf;":"𝕏","&Xscr;":"𝒳","&YAcy;":"Я","&YIcy;":"Ї","&YUcy;":"Ю","&Yacute":"Ý","&Yacute;":"Ý","&Ycirc;":"Ŷ","&Ycy;":"Ы","&Yfr;":"𝔜","&Yopf;":"𝕐","&Yscr;":"𝒴","&Yuml;":"Ÿ","&ZHcy;":"Ж","&Zacute;":"Ź","&Zcaron;":"Ž","&Zcy;":"З","&Zdot;":"Ż","&ZeroWidthSpace;":"​","&Zeta;":"Ζ","&Zfr;":"ℨ","&Zopf;":"ℤ","&Zscr;":"𝒵","&aacute":"á","&aacute;":"á","&abreve;":"ă","&ac;":"∾","&acE;":"∾̳","&acd;":"∿","&acirc":"â","&acirc;":"â","&acute":"´","&acute;":"´","&acy;":"а","&aelig":"æ","&aelig;":"æ","&af;":"⁡","&afr;":"𝔞","&agrave":"à","&agrave;":"à","&alefsym;":"ℵ","&aleph;":"ℵ","&alpha;":"α","&amacr;":"ā","&amalg;":"⨿","&amp":"&","&amp;":"&","&and;":"∧","&andand;":"⩕","&andd;":"⩜","&andslope;":"⩘","&andv;":"⩚","&ang;":"∠","&ange;":"⦤","&angle;":"∠","&angmsd;":"∡","&angmsdaa;":"⦨","&angmsdab;":"⦩","&angmsdac;":"⦪","&angmsdad;":"⦫","&angmsdae;":"⦬","&angmsdaf;":"⦭","&angmsdag;":"⦮","&angmsdah;":"⦯","&angrt;":"∟","&angrtvb;":"⊾","&angrtvbd;":"⦝","&angsph;":"∢","&angst;":"Å","&angzarr;":"⍼","&aogon;":"ą","&aopf;":"𝕒","&ap;":"≈","&apE;":"⩰","&apacir;":"⩯","&ape;":"≊","&apid;":"≋","&apos;":"'","&approx;":"≈","&approxeq;":"≊","&aring":"å","&aring;":"å","&ascr;":"𝒶","&ast;":"*","&asymp;":"≈","&asympeq;":"≍","&atilde":"ã","&atilde;":"ã","&auml":"ä","&auml;":"ä","&awconint;":"∳","&awint;":"⨑","&bNot;":"⫭","&backcong;":"≌","&backepsilon;":"϶","&backprime;":"‵","&backsim;":"∽","&backsimeq;":"⋍","&barvee;":"⊽","&barwed;":"⌅","&barwedge;":"⌅","&bbrk;":"⎵","&bbrktbrk;":"⎶","&bcong;":"≌","&bcy;":"б","&bdquo;":"„","&becaus;":"∵","&because;":"∵","&bemptyv;":"⦰","&bepsi;":"϶","&bernou;":"ℬ","&beta;":"β","&beth;":"ℶ","&between;":"≬","&bfr;":"𝔟","&bigcap;":"⋂","&bigcirc;":"◯","&bigcup;":"⋃","&bigodot;":"⨀","&bigoplus;":"⨁","&bigotimes;":"⨂","&bigsqcup;":"⨆","&bigstar;":"★","&bigtriangledown;":"▽","&bigtriangleup;":"△","&biguplus;":"⨄","&bigvee;":"⋁","&bigwedge;":"⋀","&bkarow;":"⤍","&blacklozenge;":"⧫","&blacksquare;":"▪","&blacktriangle;":"▴","&blacktriangledown;":"▾","&blacktriangleleft;":"◂","&blacktriangleright;":"▸","&blank;":"␣","&blk12;":"▒","&blk14;":"░","&blk34;":"▓","&block;":"█","&bne;":"=⃥","&bnequiv;":"≡⃥","&bnot;":"⌐","&bopf;":"𝕓","&bot;":"⊥","&bottom;":"⊥","&bowtie;":"⋈","&boxDL;":"╗","&boxDR;":"╔","&boxDl;":"╖","&boxDr;":"╓","&boxH;":"═","&boxHD;":"╦","&boxHU;":"╩","&boxHd;":"╤","&boxHu;":"╧","&boxUL;":"╝","&boxUR;":"╚","&boxUl;":"╜","&boxUr;":"╙","&boxV;":"║","&boxVH;":"╬","&boxVL;":"╣","&boxVR;":"╠","&boxVh;":"╫","&boxVl;":"╢","&boxVr;":"╟","&boxbox;":"⧉","&boxdL;":"╕","&boxdR;":"╒","&boxdl;":"┐","&boxdr;":"┌","&boxh;":"─","&boxhD;":"╥","&boxhU;":"╨","&boxhd;":"┬","&boxhu;":"┴","&boxminus;":"⊟","&boxplus;":"⊞","&boxtimes;":"⊠","&boxuL;":"╛","&boxuR;":"╘","&boxul;":"┘","&boxur;":"└","&boxv;":"│","&boxvH;":"╪","&boxvL;":"╡","&boxvR;":"╞","&boxvh;":"┼","&boxvl;":"┤","&boxvr;":"├","&bprime;":"‵","&breve;":"˘","&brvbar":"¦","&brvbar;":"¦","&bscr;":"𝒷","&bsemi;":"⁏","&bsim;":"∽","&bsime;":"⋍","&bsol;":"\\","&bsolb;":"⧅","&bsolhsub;":"⟈","&bull;":"•","&bullet;":"•","&bump;":"≎","&bumpE;":"⪮","&bumpe;":"≏","&bumpeq;":"≏","&cacute;":"ć","&cap;":"∩","&capand;":"⩄","&capbrcup;":"⩉","&capcap;":"⩋","&capcup;":"⩇","&capdot;":"⩀","&caps;":"∩︀","&caret;":"⁁","&caron;":"ˇ","&ccaps;":"⩍","&ccaron;":"č","&ccedil":"ç","&ccedil;":"ç","&ccirc;":"ĉ","&ccups;":"⩌","&ccupssm;":"⩐","&cdot;":"ċ","&cedil":"¸","&cedil;":"¸","&cemptyv;":"⦲","&cent":"¢","&cent;":"¢","&centerdot;":"·","&cfr;":"𝔠","&chcy;":"ч","&check;":"✓","&checkmark;":"✓","&chi;":"χ","&cir;":"○","&cirE;":"⧃","&circ;":"ˆ","&circeq;":"≗","&circlearrowleft;":"↺","&circlearrowright;":"↻","&circledR;":"®","&circledS;":"Ⓢ","&circledast;":"⊛","&circledcirc;":"⊚","&circleddash;":"⊝","&cire;":"≗","&cirfnint;":"⨐","&cirmid;":"⫯","&cirscir;":"⧂","&clubs;":"♣","&clubsuit;":"♣","&colon;":":","&colone;":"≔","&coloneq;":"≔","&comma;":",","&commat;":"@","&comp;":"∁","&compfn;":"∘","&complement;":"∁","&complexes;":"ℂ","&cong;":"≅","&congdot;":"⩭","&conint;":"∮","&copf;":"𝕔","&coprod;":"∐","&copy":"©","&copy;":"©","&copysr;":"℗","&crarr;":"↵","&cross;":"✗","&cscr;":"𝒸","&csub;":"⫏","&csube;":"⫑","&csup;":"⫐","&csupe;":"⫒","&ctdot;":"⋯","&cudarrl;":"⤸","&cudarrr;":"⤵","&cuepr;":"⋞","&cuesc;":"⋟","&cularr;":"↶","&cularrp;":"⤽","&cup;":"∪","&cupbrcap;":"⩈","&cupcap;":"⩆","&cupcup;":"⩊","&cupdot;":"⊍","&cupor;":"⩅","&cups;":"∪︀","&curarr;":"↷","&curarrm;":"⤼","&curlyeqprec;":"⋞","&curlyeqsucc;":"⋟","&curlyvee;":"⋎","&curlywedge;":"⋏","&curren":"¤","&curren;":"¤","&curvearrowleft;":"↶","&curvearrowright;":"↷","&cuvee;":"⋎","&cuwed;":"⋏","&cwconint;":"∲","&cwint;":"∱","&cylcty;":"⌭","&dArr;":"⇓","&dHar;":"⥥","&dagger;":"†","&daleth;":"ℸ","&darr;":"↓","&dash;":"‐","&dashv;":"⊣","&dbkarow;":"⤏","&dblac;":"˝","&dcaron;":"ď","&dcy;":"д","&dd;":"ⅆ","&ddagger;":"‡","&ddarr;":"⇊","&ddotseq;":"⩷","&deg":"°","&deg;":"°","&delta;":"δ","&demptyv;":"⦱","&dfisht;":"⥿","&dfr;":"𝔡","&dharl;":"⇃","&dharr;":"⇂","&diam;":"⋄","&diamond;":"⋄","&diamondsuit;":"♦","&diams;":"♦","&die;":"¨","&digamma;":"ϝ","&disin;":"⋲","&div;":"÷","&divide":"÷","&divide;":"÷","&divideontimes;":"⋇","&divonx;":"⋇","&djcy;":"ђ","&dlcorn;":"⌞","&dlcrop;":"⌍","&dollar;":"$","&dopf;":"𝕕","&dot;":"˙","&doteq;":"≐","&doteqdot;":"≑","&dotminus;":"∸","&dotplus;":"∔","&dotsquare;":"⊡","&doublebarwedge;":"⌆","&downarrow;":"↓","&downdownarrows;":"⇊","&downharpoonleft;":"⇃","&downharpoonright;":"⇂","&drbkarow;":"⤐","&drcorn;":"⌟","&drcrop;":"⌌","&dscr;":"𝒹","&dscy;":"ѕ","&dsol;":"⧶","&dstrok;":"đ","&dtdot;":"⋱","&dtri;":"▿","&dtrif;":"▾","&duarr;":"⇵","&duhar;":"⥯","&dwangle;":"⦦","&dzcy;":"џ","&dzigrarr;":"⟿","&eDDot;":"⩷","&eDot;":"≑","&eacute":"é","&eacute;":"é","&easter;":"⩮","&ecaron;":"ě","&ecir;":"≖","&ecirc":"ê","&ecirc;":"ê","&ecolon;":"≕","&ecy;":"э","&edot;":"ė","&ee;":"ⅇ","&efDot;":"≒","&efr;":"𝔢","&eg;":"⪚","&egrave":"è","&egrave;":"è","&egs;":"⪖","&egsdot;":"⪘","&el;":"⪙","&elinters;":"⏧","&ell;":"ℓ","&els;":"⪕","&elsdot;":"⪗","&emacr;":"ē","&empty;":"∅","&emptyset;":"∅","&emptyv;":"∅","&emsp13;":" ","&emsp14;":" ","&emsp;":" ","&eng;":"ŋ","&ensp;":" ","&eogon;":"ę","&eopf;":"𝕖","&epar;":"⋕","&eparsl;":"⧣","&eplus;":"⩱","&epsi;":"ε","&epsilon;":"ε","&epsiv;":"ϵ","&eqcirc;":"≖","&eqcolon;":"≕","&eqsim;":"≂","&eqslantgtr;":"⪖","&eqslantless;":"⪕","&equals;":"=","&equest;":"≟","&equiv;":"≡","&equivDD;":"⩸","&eqvparsl;":"⧥","&erDot;":"≓","&erarr;":"⥱","&escr;":"ℯ","&esdot;":"≐","&esim;":"≂","&eta;":"η","&eth":"ð","&eth;":"ð","&euml":"ë","&euml;":"ë","&euro;":"€","&excl;":"!","&exist;":"∃","&expectation;":"ℰ","&exponentiale;":"ⅇ","&fallingdotseq;":"≒","&fcy;":"ф","&female;":"♀","&ffilig;":"ﬃ","&fflig;":"ﬀ","&ffllig;":"ﬄ","&ffr;":"𝔣","&filig;":"ﬁ","&fjlig;":"fj","&flat;":"♭","&fllig;":"ﬂ","&fltns;":"▱","&fnof;":"ƒ","&fopf;":"𝕗","&forall;":"∀","&fork;":"⋔","&forkv;":"⫙","&fpartint;":"⨍","&frac12":"½","&frac12;":"½","&frac13;":"⅓","&frac14":"¼","&frac14;":"¼","&frac15;":"⅕","&frac16;":"⅙","&frac18;":"⅛","&frac23;":"⅔","&frac25;":"⅖","&frac34":"¾","&frac34;":"¾","&frac35;":"⅗","&frac38;":"⅜","&frac45;":"⅘","&frac56;":"⅚","&frac58;":"⅝","&frac78;":"⅞","&frasl;":"⁄","&frown;":"⌢","&fscr;":"𝒻","&gE;":"≧","&gEl;":"⪌","&gacute;":"ǵ","&gamma;":"γ","&gammad;":"ϝ","&gap;":"⪆","&gbreve;":"ğ","&gcirc;":"ĝ","&gcy;":"г","&gdot;":"ġ","&ge;":"≥","&gel;":"⋛","&geq;":"≥","&geqq;":"≧","&geqslant;":"⩾","&ges;":"⩾","&gescc;":"⪩","&gesdot;":"⪀","&gesdoto;":"⪂","&gesdotol;":"⪄","&gesl;":"⋛︀","&gesles;":"⪔","&gfr;":"𝔤","&gg;":"≫","&ggg;":"⋙","&gimel;":"ℷ","&gjcy;":"ѓ","&gl;":"≷","&glE;":"⪒","&gla;":"⪥","&glj;":"⪤","&gnE;":"≩","&gnap;":"⪊","&gnapprox;":"⪊","&gne;":"⪈","&gneq;":"⪈","&gneqq;":"≩","&gnsim;":"⋧","&gopf;":"𝕘","&grave;":"`","&gscr;":"ℊ","&gsim;":"≳","&gsime;":"⪎","&gsiml;":"⪐","&gt":">","&gt;":">","&gtcc;":"⪧","&gtcir;":"⩺","&gtdot;":"⋗","&gtlPar;":"⦕","&gtquest;":"⩼","&gtrapprox;":"⪆","&gtrarr;":"⥸","&gtrdot;":"⋗","&gtreqless;":"⋛","&gtreqqless;":"⪌","&gtrless;":"≷","&gtrsim;":"≳","&gvertneqq;":"≩︀","&gvnE;":"≩︀","&hArr;":"⇔","&hairsp;":" ","&half;":"½","&hamilt;":"ℋ","&hardcy;":"ъ","&harr;":"↔","&harrcir;":"⥈","&harrw;":"↭","&hbar;":"ℏ","&hcirc;":"ĥ","&hearts;":"♥","&heartsuit;":"♥","&hellip;":"…","&hercon;":"⊹","&hfr;":"𝔥","&hksearow;":"⤥","&hkswarow;":"⤦","&hoarr;":"⇿","&homtht;":"∻","&hookleftarrow;":"↩","&hookrightarrow;":"↪","&hopf;":"𝕙","&horbar;":"―","&hscr;":"𝒽","&hslash;":"ℏ","&hstrok;":"ħ","&hybull;":"⁃","&hyphen;":"‐","&iacute":"í","&iacute;":"í","&ic;":"⁣","&icirc":"î","&icirc;":"î","&icy;":"и","&iecy;":"е","&iexcl":"¡","&iexcl;":"¡","&iff;":"⇔","&ifr;":"𝔦","&igrave":"ì","&igrave;":"ì","&ii;":"ⅈ","&iiiint;":"⨌","&iiint;":"∭","&iinfin;":"⧜","&iiota;":"℩","&ijlig;":"ĳ","&imacr;":"ī","&image;":"ℑ","&imagline;":"ℐ","&imagpart;":"ℑ","&imath;":"ı","&imof;":"⊷","&imped;":"Ƶ","&in;":"∈","&incare;":"℅","&infin;":"∞","&infintie;":"⧝","&inodot;":"ı","&int;":"∫","&intcal;":"⊺","&integers;":"ℤ","&intercal;":"⊺","&intlarhk;":"⨗","&intprod;":"⨼","&iocy;":"ё","&iogon;":"į","&iopf;":"𝕚","&iota;":"ι","&iprod;":"⨼","&iquest":"¿","&iquest;":"¿","&iscr;":"𝒾","&isin;":"∈","&isinE;":"⋹","&isindot;":"⋵","&isins;":"⋴","&isinsv;":"⋳","&isinv;":"∈","&it;":"⁢","&itilde;":"ĩ","&iukcy;":"і","&iuml":"ï","&iuml;":"ï","&jcirc;":"ĵ","&jcy;":"й","&jfr;":"𝔧","&jmath;":"ȷ","&jopf;":"𝕛","&jscr;":"𝒿","&jsercy;":"ј","&jukcy;":"є","&kappa;":"κ","&kappav;":"ϰ","&kcedil;":"ķ","&kcy;":"к","&kfr;":"𝔨","&kgreen;":"ĸ","&khcy;":"х","&kjcy;":"ќ","&kopf;":"𝕜","&kscr;":"𝓀","&lAarr;":"⇚","&lArr;":"⇐","&lAtail;":"⤛","&lBarr;":"⤎","&lE;":"≦","&lEg;":"⪋","&lHar;":"⥢","&lacute;":"ĺ","&laemptyv;":"⦴","&lagran;":"ℒ","&lambda;":"λ","&lang;":"⟨","&langd;":"⦑","&langle;":"⟨","&lap;":"⪅","&laquo":"«","&laquo;":"«","&larr;":"←","&larrb;":"⇤","&larrbfs;":"⤟","&larrfs;":"⤝","&larrhk;":"↩","&larrlp;":"↫","&larrpl;":"⤹","&larrsim;":"⥳","&larrtl;":"↢","&lat;":"⪫","&latail;":"⤙","&late;":"⪭","&lates;":"⪭︀","&lbarr;":"⤌","&lbbrk;":"❲","&lbrace;":"{","&lbrack;":"[","&lbrke;":"⦋","&lbrksld;":"⦏","&lbrkslu;":"⦍","&lcaron;":"ľ","&lcedil;":"ļ","&lceil;":"⌈","&lcub;":"{","&lcy;":"л","&ldca;":"⤶","&ldquo;":"“","&ldquor;":"„","&ldrdhar;":"⥧","&ldrushar;":"⥋","&ldsh;":"↲","&le;":"≤","&leftarrow;":"←","&leftarrowtail;":"↢","&leftharpoondown;":"↽","&leftharpoonup;":"↼","&leftleftarrows;":"⇇","&leftrightarrow;":"↔","&leftrightarrows;":"⇆","&leftrightharpoons;":"⇋","&leftrightsquigarrow;":"↭","&leftthreetimes;":"⋋","&leg;":"⋚","&leq;":"≤","&leqq;":"≦","&leqslant;":"⩽","&les;":"⩽","&lescc;":"⪨","&lesdot;":"⩿","&lesdoto;":"⪁","&lesdotor;":"⪃","&lesg;":"⋚︀","&lesges;":"⪓","&lessapprox;":"⪅","&lessdot;":"⋖","&lesseqgtr;":"⋚","&lesseqqgtr;":"⪋","&lessgtr;":"≶","&lesssim;":"≲","&lfisht;":"⥼","&lfloor;":"⌊","&lfr;":"𝔩","&lg;":"≶","&lgE;":"⪑","&lhard;":"↽","&lharu;":"↼","&lharul;":"⥪","&lhblk;":"▄","&ljcy;":"љ","&ll;":"≪","&llarr;":"⇇","&llcorner;":"⌞","&llhard;":"⥫","&lltri;":"◺","&lmidot;":"ŀ","&lmoust;":"⎰","&lmoustache;":"⎰","&lnE;":"≨","&lnap;":"⪉","&lnapprox;":"⪉","&lne;":"⪇","&lneq;":"⪇","&lneqq;":"≨","&lnsim;":"⋦","&loang;":"⟬","&loarr;":"⇽","&lobrk;":"⟦","&longleftarrow;":"⟵","&longleftrightarrow;":"⟷","&longmapsto;":"⟼","&longrightarrow;":"⟶","&looparrowleft;":"↫","&looparrowright;":"↬","&lopar;":"⦅","&lopf;":"𝕝","&loplus;":"⨭","&lotimes;":"⨴","&lowast;":"∗","&lowbar;":"_","&loz;":"◊","&lozenge;":"◊","&lozf;":"⧫","&lpar;":"(","&lparlt;":"⦓","&lrarr;":"⇆","&lrcorner;":"⌟","&lrhar;":"⇋","&lrhard;":"⥭","&lrm;":"‎","&lrtri;":"⊿","&lsaquo;":"‹","&lscr;":"𝓁","&lsh;":"↰","&lsim;":"≲","&lsime;":"⪍","&lsimg;":"⪏","&lsqb;":"[","&lsquo;":"‘","&lsquor;":"‚","&lstrok;":"ł","&lt":"<","&lt;":"<","&ltcc;":"⪦","&ltcir;":"⩹","&ltdot;":"⋖","&lthree;":"⋋","&ltimes;":"⋉","&ltlarr;":"⥶","&ltquest;":"⩻","&ltrPar;":"⦖","&ltri;":"◃","&ltrie;":"⊴","&ltrif;":"◂","&lurdshar;":"⥊","&luruhar;":"⥦","&lvertneqq;":"≨︀","&lvnE;":"≨︀","&mDDot;":"∺","&macr":"¯","&macr;":"¯","&male;":"♂","&malt;":"✠","&maltese;":"✠","&map;":"↦","&mapsto;":"↦","&mapstodown;":"↧","&mapstoleft;":"↤","&mapstoup;":"↥","&marker;":"▮","&mcomma;":"⨩","&mcy;":"м","&mdash;":"—","&measuredangle;":"∡","&mfr;":"𝔪","&mho;":"℧","&micro":"µ","&micro;":"µ","&mid;":"∣","&midast;":"*","&midcir;":"⫰","&middot":"·","&middot;":"·","&minus;":"−","&minusb;":"⊟","&minusd;":"∸","&minusdu;":"⨪","&mlcp;":"⫛","&mldr;":"…","&mnplus;":"∓","&models;":"⊧","&mopf;":"𝕞","&mp;":"∓","&mscr;":"𝓂","&mstpos;":"∾","&mu;":"μ","&multimap;":"⊸","&mumap;":"⊸","&nGg;":"⋙̸","&nGt;":"≫⃒","&nGtv;":"≫̸","&nLeftarrow;":"⇍","&nLeftrightarrow;":"⇎","&nLl;":"⋘̸","&nLt;":"≪⃒","&nLtv;":"≪̸","&nRightarrow;":"⇏","&nVDash;":"⊯","&nVdash;":"⊮","&nabla;":"∇","&nacute;":"ń","&nang;":"∠⃒","&nap;":"≉","&napE;":"⩰̸","&napid;":"≋̸","&napos;":"ŉ","&napprox;":"≉","&natur;":"♮","&natural;":"♮","&naturals;":"ℕ","&nbsp":" ","&nbsp;":" ","&nbump;":"≎̸","&nbumpe;":"≏̸","&ncap;":"⩃","&ncaron;":"ň","&ncedil;":"ņ","&ncong;":"≇","&ncongdot;":"⩭̸","&ncup;":"⩂","&ncy;":"н","&ndash;":"–","&ne;":"≠","&neArr;":"⇗","&nearhk;":"⤤","&nearr;":"↗","&nearrow;":"↗","&nedot;":"≐̸","&nequiv;":"≢","&nesear;":"⤨","&nesim;":"≂̸","&nexist;":"∄","&nexists;":"∄","&nfr;":"𝔫","&ngE;":"≧̸","&nge;":"≱","&ngeq;":"≱","&ngeqq;":"≧̸","&ngeqslant;":"⩾̸","&nges;":"⩾̸","&ngsim;":"≵","&ngt;":"≯","&ngtr;":"≯","&nhArr;":"⇎","&nharr;":"↮","&nhpar;":"⫲","&ni;":"∋","&nis;":"⋼","&nisd;":"⋺","&niv;":"∋","&njcy;":"њ","&nlArr;":"⇍","&nlE;":"≦̸","&nlarr;":"↚","&nldr;":"‥","&nle;":"≰","&nleftarrow;":"↚","&nleftrightarrow;":"↮","&nleq;":"≰","&nleqq;":"≦̸","&nleqslant;":"⩽̸","&nles;":"⩽̸","&nless;":"≮","&nlsim;":"≴","&nlt;":"≮","&nltri;":"⋪","&nltrie;":"⋬","&nmid;":"∤","&nopf;":"𝕟","&not":"¬","&not;":"¬","&notin;":"∉","&notinE;":"⋹̸","&notindot;":"⋵̸","&notinva;":"∉","&notinvb;":"⋷","&notinvc;":"⋶","&notni;":"∌","&notniva;":"∌","&notnivb;":"⋾","&notnivc;":"⋽","&npar;":"∦","&nparallel;":"∦","&nparsl;":"⫽⃥","&npart;":"∂̸","&npolint;":"⨔","&npr;":"⊀","&nprcue;":"⋠","&npre;":"⪯̸","&nprec;":"⊀","&npreceq;":"⪯̸","&nrArr;":"⇏","&nrarr;":"↛","&nrarrc;":"⤳̸","&nrarrw;":"↝̸","&nrightarrow;":"↛","&nrtri;":"⋫","&nrtrie;":"⋭","&nsc;":"⊁","&nsccue;":"⋡","&nsce;":"⪰̸","&nscr;":"𝓃","&nshortmid;":"∤","&nshortparallel;":"∦","&nsim;":"≁","&nsime;":"≄","&nsimeq;":"≄","&nsmid;":"∤","&nspar;":"∦","&nsqsube;":"⋢","&nsqsupe;":"⋣","&nsub;":"⊄","&nsubE;":"⫅̸","&nsube;":"⊈","&nsubset;":"⊂⃒","&nsubseteq;":"⊈","&nsubseteqq;":"⫅̸","&nsucc;":"⊁","&nsucceq;":"⪰̸","&nsup;":"⊅","&nsupE;":"⫆̸","&nsupe;":"⊉","&nsupset;":"⊃⃒","&nsupseteq;":"⊉","&nsupseteqq;":"⫆̸","&ntgl;":"≹","&ntilde":"ñ","&ntilde;":"ñ","&ntlg;":"≸","&ntriangleleft;":"⋪","&ntrianglelefteq;":"⋬","&ntriangleright;":"⋫","&ntrianglerighteq;":"⋭","&nu;":"ν","&num;":"#","&numero;":"№","&numsp;":" ","&nvDash;":"⊭","&nvHarr;":"⤄","&nvap;":"≍⃒","&nvdash;":"⊬","&nvge;":"≥⃒","&nvgt;":">⃒","&nvinfin;":"⧞","&nvlArr;":"⤂","&nvle;":"≤⃒","&nvlt;":"<⃒","&nvltrie;":"⊴⃒","&nvrArr;":"⤃","&nvrtrie;":"⊵⃒","&nvsim;":"∼⃒","&nwArr;":"⇖","&nwarhk;":"⤣","&nwarr;":"↖","&nwarrow;":"↖","&nwnear;":"⤧","&oS;":"Ⓢ","&oacute":"ó","&oacute;":"ó","&oast;":"⊛","&ocir;":"⊚","&ocirc":"ô","&ocirc;":"ô","&ocy;":"о","&odash;":"⊝","&odblac;":"ő","&odiv;":"⨸","&odot;":"⊙","&odsold;":"⦼","&oelig;":"œ","&ofcir;":"⦿","&ofr;":"𝔬","&ogon;":"˛","&ograve":"ò","&ograve;":"ò","&ogt;":"⧁","&ohbar;":"⦵","&ohm;":"Ω","&oint;":"∮","&olarr;":"↺","&olcir;":"⦾","&olcross;":"⦻","&oline;":"‾","&olt;":"⧀","&omacr;":"ō","&omega;":"ω","&omicron;":"ο","&omid;":"⦶","&ominus;":"⊖","&oopf;":"𝕠","&opar;":"⦷","&operp;":"⦹","&oplus;":"⊕","&or;":"∨","&orarr;":"↻","&ord;":"⩝","&order;":"ℴ","&orderof;":"ℴ","&ordf":"ª","&ordf;":"ª","&ordm":"º","&ordm;":"º","&origof;":"⊶","&oror;":"⩖","&orslope;":"⩗","&orv;":"⩛","&oscr;":"ℴ","&oslash":"ø","&oslash;":"ø","&osol;":"⊘","&otilde":"õ","&otilde;":"õ","&otimes;":"⊗","&otimesas;":"⨶","&ouml":"ö","&ouml;":"ö","&ovbar;":"⌽","&par;":"∥","&para":"¶","&para;":"¶","&parallel;":"∥","&parsim;":"⫳","&parsl;":"⫽","&part;":"∂","&pcy;":"п","&percnt;":"%","&period;":".","&permil;":"‰","&perp;":"⊥","&pertenk;":"‱","&pfr;":"𝔭","&phi;":"φ","&phiv;":"ϕ","&phmmat;":"ℳ","&phone;":"☎","&pi;":"π","&pitchfork;":"⋔","&piv;":"ϖ","&planck;":"ℏ","&planckh;":"ℎ","&plankv;":"ℏ","&plus;":"+","&plusacir;":"⨣","&plusb;":"⊞","&pluscir;":"⨢","&plusdo;":"∔","&plusdu;":"⨥","&pluse;":"⩲","&plusmn":"±","&plusmn;":"±","&plussim;":"⨦","&plustwo;":"⨧","&pm;":"±","&pointint;":"⨕","&popf;":"𝕡","&pound":"£","&pound;":"£","&pr;":"≺","&prE;":"⪳","&prap;":"⪷","&prcue;":"≼","&pre;":"⪯","&prec;":"≺","&precapprox;":"⪷","&preccurlyeq;":"≼","&preceq;":"⪯","&precnapprox;":"⪹","&precneqq;":"⪵","&precnsim;":"⋨","&precsim;":"≾","&prime;":"′","&primes;":"ℙ","&prnE;":"⪵","&prnap;":"⪹","&prnsim;":"⋨","&prod;":"∏","&profalar;":"⌮","&profline;":"⌒","&profsurf;":"⌓","&prop;":"∝","&propto;":"∝","&prsim;":"≾","&prurel;":"⊰","&pscr;":"𝓅","&psi;":"ψ","&puncsp;":" ","&qfr;":"𝔮","&qint;":"⨌","&qopf;":"𝕢","&qprime;":"⁗","&qscr;":"𝓆","&quaternions;":"ℍ","&quatint;":"⨖","&quest;":"?","&questeq;":"≟","&quot":'"',"&quot;":'"',"&rAarr;":"⇛","&rArr;":"⇒","&rAtail;":"⤜","&rBarr;":"⤏","&rHar;":"⥤","&race;":"∽̱","&racute;":"ŕ","&radic;":"√","&raemptyv;":"⦳","&rang;":"⟩","&rangd;":"⦒","&range;":"⦥","&rangle;":"⟩","&raquo":"»","&raquo;":"»","&rarr;":"→","&rarrap;":"⥵","&rarrb;":"⇥","&rarrbfs;":"⤠","&rarrc;":"⤳","&rarrfs;":"⤞","&rarrhk;":"↪","&rarrlp;":"↬","&rarrpl;":"⥅","&rarrsim;":"⥴","&rarrtl;":"↣","&rarrw;":"↝","&ratail;":"⤚","&ratio;":"∶","&rationals;":"ℚ","&rbarr;":"⤍","&rbbrk;":"❳","&rbrace;":"}","&rbrack;":"]","&rbrke;":"⦌","&rbrksld;":"⦎","&rbrkslu;":"⦐","&rcaron;":"ř","&rcedil;":"ŗ","&rceil;":"⌉","&rcub;":"}","&rcy;":"р","&rdca;":"⤷","&rdldhar;":"⥩","&rdquo;":"”","&rdquor;":"”","&rdsh;":"↳","&real;":"ℜ","&realine;":"ℛ","&realpart;":"ℜ","&reals;":"ℝ","&rect;":"▭","&reg":"®","&reg;":"®","&rfisht;":"⥽","&rfloor;":"⌋","&rfr;":"𝔯","&rhard;":"⇁","&rharu;":"⇀","&rharul;":"⥬","&rho;":"ρ","&rhov;":"ϱ","&rightarrow;":"→","&rightarrowtail;":"↣","&rightharpoondown;":"⇁","&rightharpoonup;":"⇀","&rightleftarrows;":"⇄","&rightleftharpoons;":"⇌","&rightrightarrows;":"⇉","&rightsquigarrow;":"↝","&rightthreetimes;":"⋌","&ring;":"˚","&risingdotseq;":"≓","&rlarr;":"⇄","&rlhar;":"⇌","&rlm;":"‏","&rmoust;":"⎱","&rmoustache;":"⎱","&rnmid;":"⫮","&roang;":"⟭","&roarr;":"⇾","&robrk;":"⟧","&ropar;":"⦆","&ropf;":"𝕣","&roplus;":"⨮","&rotimes;":"⨵","&rpar;":")","&rpargt;":"⦔","&rppolint;":"⨒","&rrarr;":"⇉","&rsaquo;":"›","&rscr;":"𝓇","&rsh;":"↱","&rsqb;":"]","&rsquo;":"’","&rsquor;":"’","&rthree;":"⋌","&rtimes;":"⋊","&rtri;":"▹","&rtrie;":"⊵","&rtrif;":"▸","&rtriltri;":"⧎","&ruluhar;":"⥨","&rx;":"℞","&sacute;":"ś","&sbquo;":"‚","&sc;":"≻","&scE;":"⪴","&scap;":"⪸","&scaron;":"š","&sccue;":"≽","&sce;":"⪰","&scedil;":"ş","&scirc;":"ŝ","&scnE;":"⪶","&scnap;":"⪺","&scnsim;":"⋩","&scpolint;":"⨓","&scsim;":"≿","&scy;":"с","&sdot;":"⋅","&sdotb;":"⊡","&sdote;":"⩦","&seArr;":"⇘","&searhk;":"⤥","&searr;":"↘","&searrow;":"↘","&sect":"§","&sect;":"§","&semi;":";","&seswar;":"⤩","&setminus;":"∖","&setmn;":"∖","&sext;":"✶","&sfr;":"𝔰","&sfrown;":"⌢","&sharp;":"♯","&shchcy;":"щ","&shcy;":"ш","&shortmid;":"∣","&shortparallel;":"∥","&shy":"­","&shy;":"­","&sigma;":"σ","&sigmaf;":"ς","&sigmav;":"ς","&sim;":"∼","&simdot;":"⩪","&sime;":"≃","&simeq;":"≃","&simg;":"⪞","&simgE;":"⪠","&siml;":"⪝","&simlE;":"⪟","&simne;":"≆","&simplus;":"⨤","&simrarr;":"⥲","&slarr;":"←","&smallsetminus;":"∖","&smashp;":"⨳","&smeparsl;":"⧤","&smid;":"∣","&smile;":"⌣","&smt;":"⪪","&smte;":"⪬","&smtes;":"⪬︀","&softcy;":"ь","&sol;":"/","&solb;":"⧄","&solbar;":"⌿","&sopf;":"𝕤","&spades;":"♠","&spadesuit;":"♠","&spar;":"∥","&sqcap;":"⊓","&sqcaps;":"⊓︀","&sqcup;":"⊔","&sqcups;":"⊔︀","&sqsub;":"⊏","&sqsube;":"⊑","&sqsubset;":"⊏","&sqsubseteq;":"⊑","&sqsup;":"⊐","&sqsupe;":"⊒","&sqsupset;":"⊐","&sqsupseteq;":"⊒","&squ;":"□","&square;":"□","&squarf;":"▪","&squf;":"▪","&srarr;":"→","&sscr;":"𝓈","&ssetmn;":"∖","&ssmile;":"⌣","&sstarf;":"⋆","&star;":"☆","&starf;":"★","&straightepsilon;":"ϵ","&straightphi;":"ϕ","&strns;":"¯","&sub;":"⊂","&subE;":"⫅","&subdot;":"⪽","&sube;":"⊆","&subedot;":"⫃","&submult;":"⫁","&subnE;":"⫋","&subne;":"⊊","&subplus;":"⪿","&subrarr;":"⥹","&subset;":"⊂","&subseteq;":"⊆","&subseteqq;":"⫅","&subsetneq;":"⊊","&subsetneqq;":"⫋","&subsim;":"⫇","&subsub;":"⫕","&subsup;":"⫓","&succ;":"≻","&succapprox;":"⪸","&succcurlyeq;":"≽","&succeq;":"⪰","&succnapprox;":"⪺","&succneqq;":"⪶","&succnsim;":"⋩","&succsim;":"≿","&sum;":"∑","&sung;":"♪","&sup1":"¹","&sup1;":"¹","&sup2":"²","&sup2;":"²","&sup3":"³","&sup3;":"³","&sup;":"⊃","&supE;":"⫆","&supdot;":"⪾","&supdsub;":"⫘","&supe;":"⊇","&supedot;":"⫄","&suphsol;":"⟉","&suphsub;":"⫗","&suplarr;":"⥻","&supmult;":"⫂","&supnE;":"⫌","&supne;":"⊋","&supplus;":"⫀","&supset;":"⊃","&supseteq;":"⊇","&supseteqq;":"⫆","&supsetneq;":"⊋","&supsetneqq;":"⫌","&supsim;":"⫈","&supsub;":"⫔","&supsup;":"⫖","&swArr;":"⇙","&swarhk;":"⤦","&swarr;":"↙","&swarrow;":"↙","&swnwar;":"⤪","&szlig":"ß","&szlig;":"ß","&target;":"⌖","&tau;":"τ","&tbrk;":"⎴","&tcaron;":"ť","&tcedil;":"ţ","&tcy;":"т","&tdot;":"⃛","&telrec;":"⌕","&tfr;":"𝔱","&there4;":"∴","&therefore;":"∴","&theta;":"θ","&thetasym;":"ϑ","&thetav;":"ϑ","&thickapprox;":"≈","&thicksim;":"∼","&thinsp;":" ","&thkap;":"≈","&thksim;":"∼","&thorn":"þ","&thorn;":"þ","&tilde;":"˜","&times":"×","&times;":"×","&timesb;":"⊠","&timesbar;":"⨱","&timesd;":"⨰","&tint;":"∭","&toea;":"⤨","&top;":"⊤","&topbot;":"⌶","&topcir;":"⫱","&topf;":"𝕥","&topfork;":"⫚","&tosa;":"⤩","&tprime;":"‴","&trade;":"™","&triangle;":"▵","&triangledown;":"▿","&triangleleft;":"◃","&trianglelefteq;":"⊴","&triangleq;":"≜","&triangleright;":"▹","&trianglerighteq;":"⊵","&tridot;":"◬","&trie;":"≜","&triminus;":"⨺","&triplus;":"⨹","&trisb;":"⧍","&tritime;":"⨻","&trpezium;":"⏢","&tscr;":"𝓉","&tscy;":"ц","&tshcy;":"ћ","&tstrok;":"ŧ","&twixt;":"≬","&twoheadleftarrow;":"↞","&twoheadrightarrow;":"↠","&uArr;":"⇑","&uHar;":"⥣","&uacute":"ú","&uacute;":"ú","&uarr;":"↑","&ubrcy;":"ў","&ubreve;":"ŭ","&ucirc":"û","&ucirc;":"û","&ucy;":"у","&udarr;":"⇅","&udblac;":"ű","&udhar;":"⥮","&ufisht;":"⥾","&ufr;":"𝔲","&ugrave":"ù","&ugrave;":"ù","&uharl;":"↿","&uharr;":"↾","&uhblk;":"▀","&ulcorn;":"⌜","&ulcorner;":"⌜","&ulcrop;":"⌏","&ultri;":"◸","&umacr;":"ū","&uml":"¨","&uml;":"¨","&uogon;":"ų","&uopf;":"𝕦","&uparrow;":"↑","&updownarrow;":"↕","&upharpoonleft;":"↿","&upharpoonright;":"↾","&uplus;":"⊎","&upsi;":"υ","&upsih;":"ϒ","&upsilon;":"υ","&upuparrows;":"⇈","&urcorn;":"⌝","&urcorner;":"⌝","&urcrop;":"⌎","&uring;":"ů","&urtri;":"◹","&uscr;":"𝓊","&utdot;":"⋰","&utilde;":"ũ","&utri;":"▵","&utrif;":"▴","&uuarr;":"⇈","&uuml":"ü","&uuml;":"ü","&uwangle;":"⦧","&vArr;":"⇕","&vBar;":"⫨","&vBarv;":"⫩","&vDash;":"⊨","&vangrt;":"⦜","&varepsilon;":"ϵ","&varkappa;":"ϰ","&varnothing;":"∅","&varphi;":"ϕ","&varpi;":"ϖ","&varpropto;":"∝","&varr;":"↕","&varrho;":"ϱ","&varsigma;":"ς","&varsubsetneq;":"⊊︀","&varsubsetneqq;":"⫋︀","&varsupsetneq;":"⊋︀","&varsupsetneqq;":"⫌︀","&vartheta;":"ϑ","&vartriangleleft;":"⊲","&vartriangleright;":"⊳","&vcy;":"в","&vdash;":"⊢","&vee;":"∨","&veebar;":"⊻","&veeeq;":"≚","&vellip;":"⋮","&verbar;":"|","&vert;":"|","&vfr;":"𝔳","&vltri;":"⊲","&vnsub;":"⊂⃒","&vnsup;":"⊃⃒","&vopf;":"𝕧","&vprop;":"∝","&vrtri;":"⊳","&vscr;":"𝓋","&vsubnE;":"⫋︀","&vsubne;":"⊊︀","&vsupnE;":"⫌︀","&vsupne;":"⊋︀","&vzigzag;":"⦚","&wcirc;":"ŵ","&wedbar;":"⩟","&wedge;":"∧","&wedgeq;":"≙","&weierp;":"℘","&wfr;":"𝔴","&wopf;":"𝕨","&wp;":"℘","&wr;":"≀","&wreath;":"≀","&wscr;":"𝓌","&xcap;":"⋂","&xcirc;":"◯","&xcup;":"⋃","&xdtri;":"▽","&xfr;":"𝔵","&xhArr;":"⟺","&xharr;":"⟷","&xi;":"ξ","&xlArr;":"⟸","&xlarr;":"⟵","&xmap;":"⟼","&xnis;":"⋻","&xodot;":"⨀","&xopf;":"𝕩","&xoplus;":"⨁","&xotime;":"⨂","&xrArr;":"⟹","&xrarr;":"⟶","&xscr;":"𝓍","&xsqcup;":"⨆","&xuplus;":"⨄","&xutri;":"△","&xvee;":"⋁","&xwedge;":"⋀","&yacute":"ý","&yacute;":"ý","&yacy;":"я","&ycirc;":"ŷ","&ycy;":"ы","&yen":"¥","&yen;":"¥","&yfr;":"𝔶","&yicy;":"ї","&yopf;":"𝕪","&yscr;":"𝓎","&yucy;":"ю","&yuml":"ÿ","&yuml;":"ÿ","&zacute;":"ź","&zcaron;":"ž","&zcy;":"з","&zdot;":"ż","&zeetrf;":"ℨ","&zeta;":"ζ","&zfr;":"𝔷","&zhcy;":"ж","&zigrarr;":"⇝","&zopf;":"𝕫","&zscr;":"𝓏","&zwj;":"‍","&zwnj;":"‌"},characters:{Æ:"&AElig;","&":"&amp;",Á:"&Aacute;",Ă:"&Abreve;",Â:"&Acirc;",А:"&Acy;","𝔄":"&Afr;",À:"&Agrave;",Α:"&Alpha;",Ā:"&Amacr;","⩓":"&And;",Ą:"&Aogon;","𝔸":"&Aopf;","⁡":"&af;",Å:"&angst;","𝒜":"&Ascr;","≔":"&coloneq;",Ã:"&Atilde;",Ä:"&Auml;","∖":"&ssetmn;","⫧":"&Barv;","⌆":"&doublebarwedge;",Б:"&Bcy;","∵":"&because;",ℬ:"&bernou;",Β:"&Beta;","𝔅":"&Bfr;","𝔹":"&Bopf;","˘":"&breve;","≎":"&bump;",Ч:"&CHcy;","©":"&copy;",Ć:"&Cacute;","⋒":"&Cap;","ⅅ":"&DD;",ℭ:"&Cfr;",Č:"&Ccaron;",Ç:"&Ccedil;",Ĉ:"&Ccirc;","∰":"&Cconint;",Ċ:"&Cdot;","¸":"&cedil;","·":"&middot;",Χ:"&Chi;","⊙":"&odot;","⊖":"&ominus;","⊕":"&oplus;","⊗":"&otimes;","∲":"&cwconint;","”":"&rdquor;","’":"&rsquor;","∷":"&Proportion;","⩴":"&Colone;","≡":"&equiv;","∯":"&DoubleContourIntegral;","∮":"&oint;",ℂ:"&complexes;","∐":"&coprod;","∳":"&awconint;","⨯":"&Cross;","𝒞":"&Cscr;","⋓":"&Cup;","≍":"&asympeq;","⤑":"&DDotrahd;",Ђ:"&DJcy;",Ѕ:"&DScy;",Џ:"&DZcy;","‡":"&ddagger;","↡":"&Darr;","⫤":"&DoubleLeftTee;",Ď:"&Dcaron;",Д:"&Dcy;","∇":"&nabla;",Δ:"&Delta;","𝔇":"&Dfr;","´":"&acute;","˙":"&dot;","˝":"&dblac;","`":"&grave;","˜":"&tilde;","⋄":"&diamond;","ⅆ":"&dd;","𝔻":"&Dopf;","¨":"&uml;","⃜":"&DotDot;","≐":"&esdot;","⇓":"&dArr;","⇐":"&lArr;","⇔":"&iff;","⟸":"&xlArr;","⟺":"&xhArr;","⟹":"&xrArr;","⇒":"&rArr;","⊨":"&vDash;","⇑":"&uArr;","⇕":"&vArr;","∥":"&spar;","↓":"&downarrow;","⤓":"&DownArrowBar;","⇵":"&duarr;","̑":"&DownBreve;","⥐":"&DownLeftRightVector;","⥞":"&DownLeftTeeVector;","↽":"&lhard;","⥖":"&DownLeftVectorBar;","⥟":"&DownRightTeeVector;","⇁":"&rightharpoondown;","⥗":"&DownRightVectorBar;","⊤":"&top;","↧":"&mapstodown;","𝒟":"&Dscr;",Đ:"&Dstrok;",Ŋ:"&ENG;",Ð:"&ETH;",É:"&Eacute;",Ě:"&Ecaron;",Ê:"&Ecirc;",Э:"&Ecy;",Ė:"&Edot;","𝔈":"&Efr;",È:"&Egrave;","∈":"&isinv;",Ē:"&Emacr;","◻":"&EmptySmallSquare;","▫":"&EmptyVerySmallSquare;",Ę:"&Eogon;","𝔼":"&Eopf;",Ε:"&Epsilon;","⩵":"&Equal;","≂":"&esim;","⇌":"&rlhar;",ℰ:"&expectation;","⩳":"&Esim;",Η:"&Eta;",Ë:"&Euml;","∃":"&exist;","ⅇ":"&exponentiale;",Ф:"&Fcy;","𝔉":"&Ffr;","◼":"&FilledSmallSquare;","▪":"&squf;","𝔽":"&Fopf;","∀":"&forall;",ℱ:"&Fscr;",Ѓ:"&GJcy;",">":"&gt;",Γ:"&Gamma;",Ϝ:"&Gammad;",Ğ:"&Gbreve;",Ģ:"&Gcedil;",Ĝ:"&Gcirc;",Г:"&Gcy;",Ġ:"&Gdot;","𝔊":"&Gfr;","⋙":"&ggg;","𝔾":"&Gopf;","≥":"&geq;","⋛":"&gtreqless;","≧":"&geqq;","⪢":"&GreaterGreater;","≷":"&gtrless;","⩾":"&ges;","≳":"&gtrsim;","𝒢":"&Gscr;","≫":"&gg;",Ъ:"&HARDcy;","ˇ":"&caron;","^":"&Hat;",Ĥ:"&Hcirc;",ℌ:"&Poincareplane;",ℋ:"&hamilt;",ℍ:"&quaternions;","─":"&boxh;",Ħ:"&Hstrok;","≏":"&bumpeq;",Е:"&IEcy;",Ĳ:"&IJlig;",Ё:"&IOcy;",Í:"&Iacute;",Î:"&Icirc;",И:"&Icy;",İ:"&Idot;",ℑ:"&imagpart;",Ì:"&Igrave;",Ī:"&Imacr;","ⅈ":"&ii;","∬":"&Int;","∫":"&int;","⋂":"&xcap;","⁣":"&ic;","⁢":"&it;",Į:"&Iogon;","𝕀":"&Iopf;",Ι:"&Iota;",ℐ:"&imagline;",Ĩ:"&Itilde;",І:"&Iukcy;",Ï:"&Iuml;",Ĵ:"&Jcirc;",Й:"&Jcy;","𝔍":"&Jfr;","𝕁":"&Jopf;","𝒥":"&Jscr;",Ј:"&Jsercy;",Є:"&Jukcy;",Х:"&KHcy;",Ќ:"&KJcy;",Κ:"&Kappa;",Ķ:"&Kcedil;",К:"&Kcy;","𝔎":"&Kfr;","𝕂":"&Kopf;","𝒦":"&Kscr;",Љ:"&LJcy;","<":"&lt;",Ĺ:"&Lacute;",Λ:"&Lambda;","⟪":"&Lang;",ℒ:"&lagran;","↞":"&twoheadleftarrow;",Ľ:"&Lcaron;",Ļ:"&Lcedil;",Л:"&Lcy;","⟨":"&langle;","←":"&slarr;","⇤":"&larrb;","⇆":"&lrarr;","⌈":"&lceil;","⟦":"&lobrk;","⥡":"&LeftDownTeeVector;","⇃":"&downharpoonleft;","⥙":"&LeftDownVectorBar;","⌊":"&lfloor;","↔":"&leftrightarrow;","⥎":"&LeftRightVector;","⊣":"&dashv;","↤":"&mapstoleft;","⥚":"&LeftTeeVector;","⊲":"&vltri;","⧏":"&LeftTriangleBar;","⊴":"&trianglelefteq;","⥑":"&LeftUpDownVector;","⥠":"&LeftUpTeeVector;","↿":"&upharpoonleft;","⥘":"&LeftUpVectorBar;","↼":"&lharu;","⥒":"&LeftVectorBar;","⋚":"&lesseqgtr;","≦":"&leqq;","≶":"&lg;","⪡":"&LessLess;","⩽":"&les;","≲":"&lsim;","𝔏":"&Lfr;","⋘":"&Ll;","⇚":"&lAarr;",Ŀ:"&Lmidot;","⟵":"&xlarr;","⟷":"&xharr;","⟶":"&xrarr;","𝕃":"&Lopf;","↙":"&swarrow;","↘":"&searrow;","↰":"&lsh;",Ł:"&Lstrok;","≪":"&ll;","⤅":"&Map;",М:"&Mcy;"," ":"&MediumSpace;",ℳ:"&phmmat;","𝔐":"&Mfr;","∓":"&mp;","𝕄":"&Mopf;",Μ:"&Mu;",Њ:"&NJcy;",Ń:"&Nacute;",Ň:"&Ncaron;",Ņ:"&Ncedil;",Н:"&Ncy;","​":"&ZeroWidthSpace;","\n":"&NewLine;","𝔑":"&Nfr;","⁠":"&NoBreak;"," ":"&nbsp;",ℕ:"&naturals;","⫬":"&Not;","≢":"&nequiv;","≭":"&NotCupCap;","∦":"&nspar;","∉":"&notinva;","≠":"&ne;","≂̸":"&nesim;","∄":"&nexists;","≯":"&ngtr;","≱":"&ngeq;","≧̸":"&ngeqq;","≫̸":"&nGtv;","≹":"&ntgl;","⩾̸":"&nges;","≵":"&ngsim;","≎̸":"&nbump;","≏̸":"&nbumpe;","⋪":"&ntriangleleft;","⧏̸":"&NotLeftTriangleBar;","⋬":"&ntrianglelefteq;","≮":"&nlt;","≰":"&nleq;","≸":"&ntlg;","≪̸":"&nLtv;","⩽̸":"&nles;","≴":"&nlsim;","⪢̸":"&NotNestedGreaterGreater;","⪡̸":"&NotNestedLessLess;","⊀":"&nprec;","⪯̸":"&npreceq;","⋠":"&nprcue;","∌":"&notniva;","⋫":"&ntriangleright;","⧐̸":"&NotRightTriangleBar;","⋭":"&ntrianglerighteq;","⊏̸":"&NotSquareSubset;","⋢":"&nsqsube;","⊐̸":"&NotSquareSuperset;","⋣":"&nsqsupe;","⊂⃒":"&vnsub;","⊈":"&nsubseteq;","⊁":"&nsucc;","⪰̸":"&nsucceq;","⋡":"&nsccue;","≿̸":"&NotSucceedsTilde;","⊃⃒":"&vnsup;","⊉":"&nsupseteq;","≁":"&nsim;","≄":"&nsimeq;","≇":"&ncong;","≉":"&napprox;","∤":"&nsmid;","𝒩":"&Nscr;",Ñ:"&Ntilde;",Ν:"&Nu;",Œ:"&OElig;",Ó:"&Oacute;",Ô:"&Ocirc;",О:"&Ocy;",Ő:"&Odblac;","𝔒":"&Ofr;",Ò:"&Ograve;",Ō:"&Omacr;",Ω:"&ohm;",Ο:"&Omicron;","𝕆":"&Oopf;","“":"&ldquo;","‘":"&lsquo;","⩔":"&Or;","𝒪":"&Oscr;",Ø:"&Oslash;",Õ:"&Otilde;","⨷":"&Otimes;",Ö:"&Ouml;","‾":"&oline;","⏞":"&OverBrace;","⎴":"&tbrk;","⏜":"&OverParenthesis;","∂":"&part;",П:"&Pcy;","𝔓":"&Pfr;",Φ:"&Phi;",Π:"&Pi;","±":"&pm;",ℙ:"&primes;","⪻":"&Pr;","≺":"&prec;","⪯":"&preceq;","≼":"&preccurlyeq;","≾":"&prsim;","″":"&Prime;","∏":"&prod;","∝":"&vprop;","𝒫":"&Pscr;",Ψ:"&Psi;",'"':"&quot;","𝔔":"&Qfr;",ℚ:"&rationals;","𝒬":"&Qscr;","⤐":"&drbkarow;","®":"&reg;",Ŕ:"&Racute;","⟫":"&Rang;","↠":"&twoheadrightarrow;","⤖":"&Rarrtl;",Ř:"&Rcaron;",Ŗ:"&Rcedil;",Р:"&Rcy;",ℜ:"&realpart;","∋":"&niv;","⇋":"&lrhar;","⥯":"&duhar;",Ρ:"&Rho;","⟩":"&rangle;","→":"&srarr;","⇥":"&rarrb;","⇄":"&rlarr;","⌉":"&rceil;","⟧":"&robrk;","⥝":"&RightDownTeeVector;","⇂":"&downharpoonright;","⥕":"&RightDownVectorBar;","⌋":"&rfloor;","⊢":"&vdash;","↦":"&mapsto;","⥛":"&RightTeeVector;","⊳":"&vrtri;","⧐":"&RightTriangleBar;","⊵":"&trianglerighteq;","⥏":"&RightUpDownVector;","⥜":"&RightUpTeeVector;","↾":"&upharpoonright;","⥔":"&RightUpVectorBar;","⇀":"&rightharpoonup;","⥓":"&RightVectorBar;",ℝ:"&reals;","⥰":"&RoundImplies;","⇛":"&rAarr;",ℛ:"&realine;","↱":"&rsh;","⧴":"&RuleDelayed;",Щ:"&SHCHcy;",Ш:"&SHcy;",Ь:"&SOFTcy;",Ś:"&Sacute;","⪼":"&Sc;",Š:"&Scaron;",Ş:"&Scedil;",Ŝ:"&Scirc;",С:"&Scy;","𝔖":"&Sfr;","↑":"&uparrow;",Σ:"&Sigma;","∘":"&compfn;","𝕊":"&Sopf;","√":"&radic;","□":"&square;","⊓":"&sqcap;","⊏":"&sqsubset;","⊑":"&sqsubseteq;","⊐":"&sqsupset;","⊒":"&sqsupseteq;","⊔":"&sqcup;","𝒮":"&Sscr;","⋆":"&sstarf;","⋐":"&Subset;","⊆":"&subseteq;","≻":"&succ;","⪰":"&succeq;","≽":"&succcurlyeq;","≿":"&succsim;","∑":"&sum;","⋑":"&Supset;","⊃":"&supset;","⊇":"&supseteq;",Þ:"&THORN;","™":"&trade;",Ћ:"&TSHcy;",Ц:"&TScy;","	":"&Tab;",Τ:"&Tau;",Ť:"&Tcaron;",Ţ:"&Tcedil;",Т:"&Tcy;","𝔗":"&Tfr;","∴":"&therefore;",Θ:"&Theta;","  ":"&ThickSpace;"," ":"&thinsp;","∼":"&thksim;","≃":"&simeq;","≅":"&cong;","≈":"&thkap;","𝕋":"&Topf;","⃛":"&tdot;","𝒯":"&Tscr;",Ŧ:"&Tstrok;",Ú:"&Uacute;","↟":"&Uarr;","⥉":"&Uarrocir;",Ў:"&Ubrcy;",Ŭ:"&Ubreve;",Û:"&Ucirc;",У:"&Ucy;",Ű:"&Udblac;","𝔘":"&Ufr;",Ù:"&Ugrave;",Ū:"&Umacr;",_:"&lowbar;","⏟":"&UnderBrace;","⎵":"&bbrk;","⏝":"&UnderParenthesis;","⋃":"&xcup;","⊎":"&uplus;",Ų:"&Uogon;","𝕌":"&Uopf;","⤒":"&UpArrowBar;","⇅":"&udarr;","↕":"&varr;","⥮":"&udhar;","⊥":"&perp;","↥":"&mapstoup;","↖":"&nwarrow;","↗":"&nearrow;",ϒ:"&upsih;",Υ:"&Upsilon;",Ů:"&Uring;","𝒰":"&Uscr;",Ũ:"&Utilde;",Ü:"&Uuml;","⊫":"&VDash;","⫫":"&Vbar;",В:"&Vcy;","⊩":"&Vdash;","⫦":"&Vdashl;","⋁":"&xvee;","‖":"&Vert;","∣":"&smid;","|":"&vert;","❘":"&VerticalSeparator;","≀":"&wreath;"," ":"&hairsp;","𝔙":"&Vfr;","𝕍":"&Vopf;","𝒱":"&Vscr;","⊪":"&Vvdash;",Ŵ:"&Wcirc;","⋀":"&xwedge;","𝔚":"&Wfr;","𝕎":"&Wopf;","𝒲":"&Wscr;","𝔛":"&Xfr;",Ξ:"&Xi;","𝕏":"&Xopf;","𝒳":"&Xscr;",Я:"&YAcy;",Ї:"&YIcy;",Ю:"&YUcy;",Ý:"&Yacute;",Ŷ:"&Ycirc;",Ы:"&Ycy;","𝔜":"&Yfr;","𝕐":"&Yopf;","𝒴":"&Yscr;",Ÿ:"&Yuml;",Ж:"&ZHcy;",Ź:"&Zacute;",Ž:"&Zcaron;",З:"&Zcy;",Ż:"&Zdot;",Ζ:"&Zeta;",ℨ:"&zeetrf;",ℤ:"&integers;","𝒵":"&Zscr;",á:"&aacute;",ă:"&abreve;","∾":"&mstpos;","∾̳":"&acE;","∿":"&acd;",â:"&acirc;",а:"&acy;",æ:"&aelig;","𝔞":"&afr;",à:"&agrave;",ℵ:"&aleph;",α:"&alpha;",ā:"&amacr;","⨿":"&amalg;","∧":"&wedge;","⩕":"&andand;","⩜":"&andd;","⩘":"&andslope;","⩚":"&andv;","∠":"&angle;","⦤":"&ange;","∡":"&measuredangle;","⦨":"&angmsdaa;","⦩":"&angmsdab;","⦪":"&angmsdac;","⦫":"&angmsdad;","⦬":"&angmsdae;","⦭":"&angmsdaf;","⦮":"&angmsdag;","⦯":"&angmsdah;","∟":"&angrt;","⊾":"&angrtvb;","⦝":"&angrtvbd;","∢":"&angsph;","⍼":"&angzarr;",ą:"&aogon;","𝕒":"&aopf;","⩰":"&apE;","⩯":"&apacir;","≊":"&approxeq;","≋":"&apid;","'":"&apos;",å:"&aring;","𝒶":"&ascr;","*":"&midast;",ã:"&atilde;",ä:"&auml;","⨑":"&awint;","⫭":"&bNot;","≌":"&bcong;","϶":"&bepsi;","‵":"&bprime;","∽":"&bsim;","⋍":"&bsime;","⊽":"&barvee;","⌅":"&barwedge;","⎶":"&bbrktbrk;",б:"&bcy;","„":"&ldquor;","⦰":"&bemptyv;",β:"&beta;",ℶ:"&beth;","≬":"&twixt;","𝔟":"&bfr;","◯":"&xcirc;","⨀":"&xodot;","⨁":"&xoplus;","⨂":"&xotime;","⨆":"&xsqcup;","★":"&starf;","▽":"&xdtri;","△":"&xutri;","⨄":"&xuplus;","⤍":"&rbarr;","⧫":"&lozf;","▴":"&utrif;","▾":"&dtrif;","◂":"&ltrif;","▸":"&rtrif;","␣":"&blank;","▒":"&blk12;","░":"&blk14;","▓":"&blk34;","█":"&block;","=⃥":"&bne;","≡⃥":"&bnequiv;","⌐":"&bnot;","𝕓":"&bopf;","⋈":"&bowtie;","╗":"&boxDL;","╔":"&boxDR;","╖":"&boxDl;","╓":"&boxDr;","═":"&boxH;","╦":"&boxHD;","╩":"&boxHU;","╤":"&boxHd;","╧":"&boxHu;","╝":"&boxUL;","╚":"&boxUR;","╜":"&boxUl;","╙":"&boxUr;","║":"&boxV;","╬":"&boxVH;","╣":"&boxVL;","╠":"&boxVR;","╫":"&boxVh;","╢":"&boxVl;","╟":"&boxVr;","⧉":"&boxbox;","╕":"&boxdL;","╒":"&boxdR;","┐":"&boxdl;","┌":"&boxdr;","╥":"&boxhD;","╨":"&boxhU;","┬":"&boxhd;","┴":"&boxhu;","⊟":"&minusb;","⊞":"&plusb;","⊠":"&timesb;","╛":"&boxuL;","╘":"&boxuR;","┘":"&boxul;","└":"&boxur;","│":"&boxv;","╪":"&boxvH;","╡":"&boxvL;","╞":"&boxvR;","┼":"&boxvh;","┤":"&boxvl;","├":"&boxvr;","¦":"&brvbar;","𝒷":"&bscr;","⁏":"&bsemi;","\\":"&bsol;","⧅":"&bsolb;","⟈":"&bsolhsub;","•":"&bullet;","⪮":"&bumpE;",ć:"&cacute;","∩":"&cap;","⩄":"&capand;","⩉":"&capbrcup;","⩋":"&capcap;","⩇":"&capcup;","⩀":"&capdot;","∩︀":"&caps;","⁁":"&caret;","⩍":"&ccaps;",č:"&ccaron;",ç:"&ccedil;",ĉ:"&ccirc;","⩌":"&ccups;","⩐":"&ccupssm;",ċ:"&cdot;","⦲":"&cemptyv;","¢":"&cent;","𝔠":"&cfr;",ч:"&chcy;","✓":"&checkmark;",χ:"&chi;","○":"&cir;","⧃":"&cirE;","ˆ":"&circ;","≗":"&cire;","↺":"&olarr;","↻":"&orarr;","Ⓢ":"&oS;","⊛":"&oast;","⊚":"&ocir;","⊝":"&odash;","⨐":"&cirfnint;","⫯":"&cirmid;","⧂":"&cirscir;","♣":"&clubsuit;",":":"&colon;",",":"&comma;","@":"&commat;","∁":"&complement;","⩭":"&congdot;","𝕔":"&copf;","℗":"&copysr;","↵":"&crarr;","✗":"&cross;","𝒸":"&cscr;","⫏":"&csub;","⫑":"&csube;","⫐":"&csup;","⫒":"&csupe;","⋯":"&ctdot;","⤸":"&cudarrl;","⤵":"&cudarrr;","⋞":"&curlyeqprec;","⋟":"&curlyeqsucc;","↶":"&curvearrowleft;","⤽":"&cularrp;","∪":"&cup;","⩈":"&cupbrcap;","⩆":"&cupcap;","⩊":"&cupcup;","⊍":"&cupdot;","⩅":"&cupor;","∪︀":"&cups;","↷":"&curvearrowright;","⤼":"&curarrm;","⋎":"&cuvee;","⋏":"&cuwed;","¤":"&curren;","∱":"&cwint;","⌭":"&cylcty;","⥥":"&dHar;","†":"&dagger;",ℸ:"&daleth;","‐":"&hyphen;","⤏":"&rBarr;",ď:"&dcaron;",д:"&dcy;","⇊":"&downdownarrows;","⩷":"&eDDot;","°":"&deg;",δ:"&delta;","⦱":"&demptyv;","⥿":"&dfisht;","𝔡":"&dfr;","♦":"&diams;",ϝ:"&gammad;","⋲":"&disin;","÷":"&divide;","⋇":"&divonx;",ђ:"&djcy;","⌞":"&llcorner;","⌍":"&dlcrop;",$:"&dollar;","𝕕":"&dopf;","≑":"&eDot;","∸":"&minusd;","∔":"&plusdo;","⊡":"&sdotb;","⌟":"&lrcorner;","⌌":"&drcrop;","𝒹":"&dscr;",ѕ:"&dscy;","⧶":"&dsol;",đ:"&dstrok;","⋱":"&dtdot;","▿":"&triangledown;","⦦":"&dwangle;",џ:"&dzcy;","⟿":"&dzigrarr;",é:"&eacute;","⩮":"&easter;",ě:"&ecaron;","≖":"&eqcirc;",ê:"&ecirc;","≕":"&eqcolon;",э:"&ecy;",ė:"&edot;","≒":"&fallingdotseq;","𝔢":"&efr;","⪚":"&eg;",è:"&egrave;","⪖":"&eqslantgtr;","⪘":"&egsdot;","⪙":"&el;","⏧":"&elinters;",ℓ:"&ell;","⪕":"&eqslantless;","⪗":"&elsdot;",ē:"&emacr;","∅":"&varnothing;"," ":"&emsp13;"," ":"&emsp14;"," ":"&emsp;",ŋ:"&eng;"," ":"&ensp;",ę:"&eogon;","𝕖":"&eopf;","⋕":"&epar;","⧣":"&eparsl;","⩱":"&eplus;",ε:"&epsilon;","ϵ":"&varepsilon;","=":"&equals;","≟":"&questeq;","⩸":"&equivDD;","⧥":"&eqvparsl;","≓":"&risingdotseq;","⥱":"&erarr;",ℯ:"&escr;",η:"&eta;",ð:"&eth;",ë:"&euml;","€":"&euro;","!":"&excl;",ф:"&fcy;","♀":"&female;",ﬃ:"&ffilig;",ﬀ:"&fflig;",ﬄ:"&ffllig;","𝔣":"&ffr;",ﬁ:"&filig;",fj:"&fjlig;","♭":"&flat;",ﬂ:"&fllig;","▱":"&fltns;",ƒ:"&fnof;","𝕗":"&fopf;","⋔":"&pitchfork;","⫙":"&forkv;","⨍":"&fpartint;","½":"&half;","⅓":"&frac13;","¼":"&frac14;","⅕":"&frac15;","⅙":"&frac16;","⅛":"&frac18;","⅔":"&frac23;","⅖":"&frac25;","¾":"&frac34;","⅗":"&frac35;","⅜":"&frac38;","⅘":"&frac45;","⅚":"&frac56;","⅝":"&frac58;","⅞":"&frac78;","⁄":"&frasl;","⌢":"&sfrown;","𝒻":"&fscr;","⪌":"&gtreqqless;",ǵ:"&gacute;",γ:"&gamma;","⪆":"&gtrapprox;",ğ:"&gbreve;",ĝ:"&gcirc;",г:"&gcy;",ġ:"&gdot;","⪩":"&gescc;","⪀":"&gesdot;","⪂":"&gesdoto;","⪄":"&gesdotol;","⋛︀":"&gesl;","⪔":"&gesles;","𝔤":"&gfr;",ℷ:"&gimel;",ѓ:"&gjcy;","⪒":"&glE;","⪥":"&gla;","⪤":"&glj;","≩":"&gneqq;","⪊":"&gnapprox;","⪈":"&gneq;","⋧":"&gnsim;","𝕘":"&gopf;",ℊ:"&gscr;","⪎":"&gsime;","⪐":"&gsiml;","⪧":"&gtcc;","⩺":"&gtcir;","⋗":"&gtrdot;","⦕":"&gtlPar;","⩼":"&gtquest;","⥸":"&gtrarr;","≩︀":"&gvnE;",ъ:"&hardcy;","⥈":"&harrcir;","↭":"&leftrightsquigarrow;",ℏ:"&plankv;",ĥ:"&hcirc;","♥":"&heartsuit;","…":"&mldr;","⊹":"&hercon;","𝔥":"&hfr;","⤥":"&searhk;","⤦":"&swarhk;","⇿":"&hoarr;","∻":"&homtht;","↩":"&larrhk;","↪":"&rarrhk;","𝕙":"&hopf;","―":"&horbar;","𝒽":"&hscr;",ħ:"&hstrok;","⁃":"&hybull;",í:"&iacute;",î:"&icirc;",и:"&icy;",е:"&iecy;","¡":"&iexcl;","𝔦":"&ifr;",ì:"&igrave;","⨌":"&qint;","∭":"&tint;","⧜":"&iinfin;","℩":"&iiota;",ĳ:"&ijlig;",ī:"&imacr;",ı:"&inodot;","⊷":"&imof;",Ƶ:"&imped;","℅":"&incare;","∞":"&infin;","⧝":"&infintie;","⊺":"&intercal;","⨗":"&intlarhk;","⨼":"&iprod;",ё:"&iocy;",į:"&iogon;","𝕚":"&iopf;",ι:"&iota;","¿":"&iquest;","𝒾":"&iscr;","⋹":"&isinE;","⋵":"&isindot;","⋴":"&isins;","⋳":"&isinsv;",ĩ:"&itilde;",і:"&iukcy;",ï:"&iuml;",ĵ:"&jcirc;",й:"&jcy;","𝔧":"&jfr;","ȷ":"&jmath;","𝕛":"&jopf;","𝒿":"&jscr;",ј:"&jsercy;",є:"&jukcy;",κ:"&kappa;",ϰ:"&varkappa;",ķ:"&kcedil;",к:"&kcy;","𝔨":"&kfr;",ĸ:"&kgreen;",х:"&khcy;",ќ:"&kjcy;","𝕜":"&kopf;","𝓀":"&kscr;","⤛":"&lAtail;","⤎":"&lBarr;","⪋":"&lesseqqgtr;","⥢":"&lHar;",ĺ:"&lacute;","⦴":"&laemptyv;",λ:"&lambda;","⦑":"&langd;","⪅":"&lessapprox;","«":"&laquo;","⤟":"&larrbfs;","⤝":"&larrfs;","↫":"&looparrowleft;","⤹":"&larrpl;","⥳":"&larrsim;","↢":"&leftarrowtail;","⪫":"&lat;","⤙":"&latail;","⪭":"&late;","⪭︀":"&lates;","⤌":"&lbarr;","❲":"&lbbrk;","{":"&lcub;","[":"&lsqb;","⦋":"&lbrke;","⦏":"&lbrksld;","⦍":"&lbrkslu;",ľ:"&lcaron;",ļ:"&lcedil;",л:"&lcy;","⤶":"&ldca;","⥧":"&ldrdhar;","⥋":"&ldrushar;","↲":"&ldsh;","≤":"&leq;","⇇":"&llarr;","⋋":"&lthree;","⪨":"&lescc;","⩿":"&lesdot;","⪁":"&lesdoto;","⪃":"&lesdotor;","⋚︀":"&lesg;","⪓":"&lesges;","⋖":"&ltdot;","⥼":"&lfisht;","𝔩":"&lfr;","⪑":"&lgE;","⥪":"&lharul;","▄":"&lhblk;",љ:"&ljcy;","⥫":"&llhard;","◺":"&lltri;",ŀ:"&lmidot;","⎰":"&lmoustache;","≨":"&lneqq;","⪉":"&lnapprox;","⪇":"&lneq;","⋦":"&lnsim;","⟬":"&loang;","⇽":"&loarr;","⟼":"&xmap;","↬":"&rarrlp;","⦅":"&lopar;","𝕝":"&lopf;","⨭":"&loplus;","⨴":"&lotimes;","∗":"&lowast;","◊":"&lozenge;","(":"&lpar;","⦓":"&lparlt;","⥭":"&lrhard;","‎":"&lrm;","⊿":"&lrtri;","‹":"&lsaquo;","𝓁":"&lscr;","⪍":"&lsime;","⪏":"&lsimg;","‚":"&sbquo;",ł:"&lstrok;","⪦":"&ltcc;","⩹":"&ltcir;","⋉":"&ltimes;","⥶":"&ltlarr;","⩻":"&ltquest;","⦖":"&ltrPar;","◃":"&triangleleft;","⥊":"&lurdshar;","⥦":"&luruhar;","≨︀":"&lvnE;","∺":"&mDDot;","¯":"&strns;","♂":"&male;","✠":"&maltese;","▮":"&marker;","⨩":"&mcomma;",м:"&mcy;","—":"&mdash;","𝔪":"&mfr;","℧":"&mho;",µ:"&micro;","⫰":"&midcir;","−":"&minus;","⨪":"&minusdu;","⫛":"&mlcp;","⊧":"&models;","𝕞":"&mopf;","𝓂":"&mscr;",μ:"&mu;","⊸":"&mumap;","⋙̸":"&nGg;","≫⃒":"&nGt;","⇍":"&nlArr;","⇎":"&nhArr;","⋘̸":"&nLl;","≪⃒":"&nLt;","⇏":"&nrArr;","⊯":"&nVDash;","⊮":"&nVdash;",ń:"&nacute;","∠⃒":"&nang;","⩰̸":"&napE;","≋̸":"&napid;",ŉ:"&napos;","♮":"&natural;","⩃":"&ncap;",ň:"&ncaron;",ņ:"&ncedil;","⩭̸":"&ncongdot;","⩂":"&ncup;",н:"&ncy;","–":"&ndash;","⇗":"&neArr;","⤤":"&nearhk;","≐̸":"&nedot;","⤨":"&toea;","𝔫":"&nfr;","↮":"&nleftrightarrow;","⫲":"&nhpar;","⋼":"&nis;","⋺":"&nisd;",њ:"&njcy;","≦̸":"&nleqq;","↚":"&nleftarrow;","‥":"&nldr;","𝕟":"&nopf;","¬":"&not;","⋹̸":"&notinE;","⋵̸":"&notindot;","⋷":"&notinvb;","⋶":"&notinvc;","⋾":"&notnivb;","⋽":"&notnivc;","⫽⃥":"&nparsl;","∂̸":"&npart;","⨔":"&npolint;","↛":"&nrightarrow;","⤳̸":"&nrarrc;","↝̸":"&nrarrw;","𝓃":"&nscr;","⊄":"&nsub;","⫅̸":"&nsubseteqq;","⊅":"&nsup;","⫆̸":"&nsupseteqq;",ñ:"&ntilde;",ν:"&nu;","#":"&num;","№":"&numero;"," ":"&numsp;","⊭":"&nvDash;","⤄":"&nvHarr;","≍⃒":"&nvap;","⊬":"&nvdash;","≥⃒":"&nvge;",">⃒":"&nvgt;","⧞":"&nvinfin;","⤂":"&nvlArr;","≤⃒":"&nvle;","<⃒":"&nvlt;","⊴⃒":"&nvltrie;","⤃":"&nvrArr;","⊵⃒":"&nvrtrie;","∼⃒":"&nvsim;","⇖":"&nwArr;","⤣":"&nwarhk;","⤧":"&nwnear;",ó:"&oacute;",ô:"&ocirc;",о:"&ocy;",ő:"&odblac;","⨸":"&odiv;","⦼":"&odsold;",œ:"&oelig;","⦿":"&ofcir;","𝔬":"&ofr;","˛":"&ogon;",ò:"&ograve;","⧁":"&ogt;","⦵":"&ohbar;","⦾":"&olcir;","⦻":"&olcross;","⧀":"&olt;",ō:"&omacr;",ω:"&omega;",ο:"&omicron;","⦶":"&omid;","𝕠":"&oopf;","⦷":"&opar;","⦹":"&operp;","∨":"&vee;","⩝":"&ord;",ℴ:"&oscr;",ª:"&ordf;",º:"&ordm;","⊶":"&origof;","⩖":"&oror;","⩗":"&orslope;","⩛":"&orv;",ø:"&oslash;","⊘":"&osol;",õ:"&otilde;","⨶":"&otimesas;",ö:"&ouml;","⌽":"&ovbar;","¶":"&para;","⫳":"&parsim;","⫽":"&parsl;",п:"&pcy;","%":"&percnt;",".":"&period;","‰":"&permil;","‱":"&pertenk;","𝔭":"&pfr;",φ:"&phi;",ϕ:"&varphi;","☎":"&phone;",π:"&pi;",ϖ:"&varpi;",ℎ:"&planckh;","+":"&plus;","⨣":"&plusacir;","⨢":"&pluscir;","⨥":"&plusdu;","⩲":"&pluse;","⨦":"&plussim;","⨧":"&plustwo;","⨕":"&pointint;","𝕡":"&popf;","£":"&pound;","⪳":"&prE;","⪷":"&precapprox;","⪹":"&prnap;","⪵":"&prnE;","⋨":"&prnsim;","′":"&prime;","⌮":"&profalar;","⌒":"&profline;","⌓":"&profsurf;","⊰":"&prurel;","𝓅":"&pscr;",ψ:"&psi;"," ":"&puncsp;","𝔮":"&qfr;","𝕢":"&qopf;","⁗":"&qprime;","𝓆":"&qscr;","⨖":"&quatint;","?":"&quest;","⤜":"&rAtail;","⥤":"&rHar;","∽̱":"&race;",ŕ:"&racute;","⦳":"&raemptyv;","⦒":"&rangd;","⦥":"&range;","»":"&raquo;","⥵":"&rarrap;","⤠":"&rarrbfs;","⤳":"&rarrc;","⤞":"&rarrfs;","⥅":"&rarrpl;","⥴":"&rarrsim;","↣":"&rightarrowtail;","↝":"&rightsquigarrow;","⤚":"&ratail;","∶":"&ratio;","❳":"&rbbrk;","}":"&rcub;","]":"&rsqb;","⦌":"&rbrke;","⦎":"&rbrksld;","⦐":"&rbrkslu;",ř:"&rcaron;",ŗ:"&rcedil;",р:"&rcy;","⤷":"&rdca;","⥩":"&rdldhar;","↳":"&rdsh;","▭":"&rect;","⥽":"&rfisht;","𝔯":"&rfr;","⥬":"&rharul;",ρ:"&rho;",ϱ:"&varrho;","⇉":"&rrarr;","⋌":"&rthree;","˚":"&ring;","‏":"&rlm;","⎱":"&rmoustache;","⫮":"&rnmid;","⟭":"&roang;","⇾":"&roarr;","⦆":"&ropar;","𝕣":"&ropf;","⨮":"&roplus;","⨵":"&rotimes;",")":"&rpar;","⦔":"&rpargt;","⨒":"&rppolint;","›":"&rsaquo;","𝓇":"&rscr;","⋊":"&rtimes;","▹":"&triangleright;","⧎":"&rtriltri;","⥨":"&ruluhar;","℞":"&rx;",ś:"&sacute;","⪴":"&scE;","⪸":"&succapprox;",š:"&scaron;",ş:"&scedil;",ŝ:"&scirc;","⪶":"&succneqq;","⪺":"&succnapprox;","⋩":"&succnsim;","⨓":"&scpolint;",с:"&scy;","⋅":"&sdot;","⩦":"&sdote;","⇘":"&seArr;","§":"&sect;",";":"&semi;","⤩":"&tosa;","✶":"&sext;","𝔰":"&sfr;","♯":"&sharp;",щ:"&shchcy;",ш:"&shcy;","­":"&shy;",σ:"&sigma;",ς:"&varsigma;","⩪":"&simdot;","⪞":"&simg;","⪠":"&simgE;","⪝":"&siml;","⪟":"&simlE;","≆":"&simne;","⨤":"&simplus;","⥲":"&simrarr;","⨳":"&smashp;","⧤":"&smeparsl;","⌣":"&ssmile;","⪪":"&smt;","⪬":"&smte;","⪬︀":"&smtes;",ь:"&softcy;","/":"&sol;","⧄":"&solb;","⌿":"&solbar;","𝕤":"&sopf;","♠":"&spadesuit;","⊓︀":"&sqcaps;","⊔︀":"&sqcups;","𝓈":"&sscr;","☆":"&star;","⊂":"&subset;","⫅":"&subseteqq;","⪽":"&subdot;","⫃":"&subedot;","⫁":"&submult;","⫋":"&subsetneqq;","⊊":"&subsetneq;","⪿":"&subplus;","⥹":"&subrarr;","⫇":"&subsim;","⫕":"&subsub;","⫓":"&subsup;","♪":"&sung;","¹":"&sup1;","²":"&sup2;","³":"&sup3;","⫆":"&supseteqq;","⪾":"&supdot;","⫘":"&supdsub;","⫄":"&supedot;","⟉":"&suphsol;","⫗":"&suphsub;","⥻":"&suplarr;","⫂":"&supmult;","⫌":"&supsetneqq;","⊋":"&supsetneq;","⫀":"&supplus;","⫈":"&supsim;","⫔":"&supsub;","⫖":"&supsup;","⇙":"&swArr;","⤪":"&swnwar;",ß:"&szlig;","⌖":"&target;",τ:"&tau;",ť:"&tcaron;",ţ:"&tcedil;",т:"&tcy;","⌕":"&telrec;","𝔱":"&tfr;",θ:"&theta;",ϑ:"&vartheta;",þ:"&thorn;","×":"&times;","⨱":"&timesbar;","⨰":"&timesd;","⌶":"&topbot;","⫱":"&topcir;","𝕥":"&topf;","⫚":"&topfork;","‴":"&tprime;","▵":"&utri;","≜":"&trie;","◬":"&tridot;","⨺":"&triminus;","⨹":"&triplus;","⧍":"&trisb;","⨻":"&tritime;","⏢":"&trpezium;","𝓉":"&tscr;",ц:"&tscy;",ћ:"&tshcy;",ŧ:"&tstrok;","⥣":"&uHar;",ú:"&uacute;",ў:"&ubrcy;",ŭ:"&ubreve;",û:"&ucirc;",у:"&ucy;",ű:"&udblac;","⥾":"&ufisht;","𝔲":"&ufr;",ù:"&ugrave;","▀":"&uhblk;","⌜":"&ulcorner;","⌏":"&ulcrop;","◸":"&ultri;",ū:"&umacr;",ų:"&uogon;","𝕦":"&uopf;",υ:"&upsilon;","⇈":"&uuarr;","⌝":"&urcorner;","⌎":"&urcrop;",ů:"&uring;","◹":"&urtri;","𝓊":"&uscr;","⋰":"&utdot;",ũ:"&utilde;",ü:"&uuml;","⦧":"&uwangle;","⫨":"&vBar;","⫩":"&vBarv;","⦜":"&vangrt;","⊊︀":"&vsubne;","⫋︀":"&vsubnE;","⊋︀":"&vsupne;","⫌︀":"&vsupnE;",в:"&vcy;","⊻":"&veebar;","≚":"&veeeq;","⋮":"&vellip;","𝔳":"&vfr;","𝕧":"&vopf;","𝓋":"&vscr;","⦚":"&vzigzag;",ŵ:"&wcirc;","⩟":"&wedbar;","≙":"&wedgeq;","℘":"&wp;","𝔴":"&wfr;","𝕨":"&wopf;","𝓌":"&wscr;","𝔵":"&xfr;",ξ:"&xi;","⋻":"&xnis;","𝕩":"&xopf;","𝓍":"&xscr;",ý:"&yacute;",я:"&yacy;",ŷ:"&ycirc;",ы:"&ycy;","¥":"&yen;","𝔶":"&yfr;",ї:"&yicy;","𝕪":"&yopf;","𝓎":"&yscr;",ю:"&yucy;",ÿ:"&yuml;",ź:"&zacute;",ž:"&zcaron;",з:"&zcy;",ż:"&zdot;",ζ:"&zeta;","𝔷":"&zfr;",ж:"&zhcy;","⇝":"&zigrarr;","𝕫":"&zopf;","𝓏":"&zscr;","‍":"&zwj;","‌":"&zwnj;"}}};var it={};Object.defineProperty(it,"__esModule",{value:!0});it.numericUnicodeMap={0:65533,128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,156:339,158:382,159:376};var le={};Object.defineProperty(le,"__esModule",{value:!0});le.fromCodePoint=String.fromCodePoint||function(r){return String.fromCharCode(Math.floor((r-65536)/1024)+55296,(r-65536)%1024+56320)};le.getCodePoint=String.prototype.codePointAt?function(r,e){return r.codePointAt(e)}:function(r,e){return(r.charCodeAt(e)-55296)*1024+r.charCodeAt(e+1)-56320+65536};le.highSurrogateFrom=55296;le.highSurrogateTo=56319;var ne=It&&It.__assign||function(){return ne=Object.assign||function(r){for(var e,a=1,o=arguments.length;a<o;a++){e=arguments[a];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(r[s]=e[s])}return r},ne.apply(this,arguments)};Object.defineProperty(Le,"__esModule",{value:!0});var ye=Ne,ya=it,lr=le,st=ne(ne({},ye.namedReferences),{all:ye.namedReferences.html5});function cr(r,e,a){e.lastIndex=0;var o=e.exec(r),s;if(o){s="";var n=0;do{n!==o.index&&(s+=r.substring(n,o.index));var u=o[0];s+=a(u),n=o.index+u.length}while(o=e.exec(r));n!==r.length&&(s+=r.substring(n))}else s=r;return s}var xa={specialChars:/[<>'"&]/g,nonAscii:/[<>'"&\u0080-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,nonAsciiPrintable:/[<>'"&\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,nonAsciiPrintableOnly:/[\x01-\x08\x11-\x15\x17-\x1F\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g,extensive:/[\x01-\x0c\x0e-\x1f\x21-\x2c\x2e-\x2f\x3a-\x40\x5b-\x60\x7b-\x7d\x7f-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/g},ka={mode:"specialChars",level:"all",numeric:"decimal"};function Ea(r,e){var a=e===void 0?ka:e,o=a.mode,s=o===void 0?"specialChars":o,n=a.numeric,u=n===void 0?"decimal":n,_=a.level,d=_===void 0?"all":_;if(!r)return"";var b=xa[s],w=st[d].characters,h=u==="hexadecimal";return cr(r,b,function(p){var y=w[p];if(!y){var k=p.length>1?lr.getCodePoint(p,0):p.charCodeAt(0);y=(h?"&#x"+k.toString(16):"&#"+k)+";"}return y})}Le.encode=Ea;var Aa={scope:"body",level:"all"},We=/&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+);/g,Ke=/&(?:#\d+|#[xX][\da-fA-F]+|[0-9a-zA-Z]+)[;=]?/g,Bt={xml:{strict:We,attribute:Ke,body:ye.bodyRegExps.xml},html4:{strict:We,attribute:Ke,body:ye.bodyRegExps.html4},html5:{strict:We,attribute:Ke,body:ye.bodyRegExps.html5}},Ca=ne(ne({},Bt),{all:Bt.html5}),dr=String.fromCharCode,Ta=dr(65533),Sa={level:"all"};function ur(r,e,a,o){var s=r,n=r[r.length-1];if(a&&n==="=")s=r;else if(o&&n!==";")s=r;else{var u=e[r];if(u)s=u;else if(r[0]==="&"&&r[1]==="#"){var _=r[2],d=_=="x"||_=="X"?parseInt(r.substr(3),16):parseInt(r.substr(2));s=d>=1114111?Ta:d>65535?lr.fromCodePoint(d):dr(ya.numericUnicodeMap[d]||d)}}return s}function Fa(r,e){var a=(e===void 0?Sa:e).level,o=a===void 0?"all":a;return r?ur(r,st[o].entities,!1,!1):""}Le.decodeEntity=Fa;function qa(r,e){var a=e===void 0?Aa:e,o=a.level,s=o===void 0?"all":o,n=a.scope,u=n===void 0?s==="xml"?"strict":"body":n;if(!r)return"";var _=Ca[s][u],d=st[s].entities,b=u==="attribute",w=u==="strict";return cr(r,_,function(h){return ur(h,d,b,w)})}var Da=Le.decode=qa;/*! @license DOMPurify 3.1.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.6/LICENSE */const{entries:pr,setPrototypeOf:Vt,isFrozen:La,getPrototypeOf:Na,getOwnPropertyDescriptor:Ma}=Object;let{freeze:M,seal:z,create:mr}=Object,{apply:rt,construct:at}=typeof Reflect<"u"&&Reflect;M||(M=function(e){return e});z||(z=function(e){return e});rt||(rt=function(e,a,o){return e.apply(a,o)});at||(at=function(e,a){return new e(...a)});const Te=O(Array.prototype.forEach),Ht=O(Array.prototype.pop),fe=O(Array.prototype.push),Fe=O(String.prototype.toLowerCase),Xe=O(String.prototype.toString),Gt=O(String.prototype.match),ge=O(String.prototype.replace),Ra=O(String.prototype.indexOf),Oa=O(String.prototype.trim),P=O(Object.prototype.hasOwnProperty),N=O(RegExp.prototype.test),ve=Ia(TypeError);function O(r){return function(e){for(var a=arguments.length,o=new Array(a>1?a-1:0),s=1;s<a;s++)o[s-1]=arguments[s];return rt(r,e,o)}}function Ia(r){return function(){for(var e=arguments.length,a=new Array(e),o=0;o<e;o++)a[o]=arguments[o];return at(r,a)}}function g(r,e){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Fe;Vt&&Vt(r,null);let o=e.length;for(;o--;){let s=e[o];if(typeof s=="string"){const n=a(s);n!==s&&(La(e)||(e[o]=n),s=n)}r[s]=!0}return r}function Ua(r){for(let e=0;e<r.length;e++)P(r,e)||(r[e]=null);return r}function J(r){const e=mr(null);for(const[a,o]of pr(r))P(r,a)&&(Array.isArray(o)?e[a]=Ua(o):o&&typeof o=="object"&&o.constructor===Object?e[a]=J(o):e[a]=o);return e}function _e(r,e){for(;r!==null;){const o=Ma(r,e);if(o){if(o.get)return O(o.get);if(typeof o.value=="function")return O(o.value)}r=Na(r)}function a(){return null}return a}const jt=M(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Qe=M(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Je=M(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),za=M(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),$e=M(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Pa=M(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Yt=M(["#text"]),Zt=M(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),et=M(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Wt=M(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Se=M(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Ba=z(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Va=z(/<%[\w\W]*|[\w\W]*%>/gm),Ha=z(/\${[\w\W]*}/gm),Ga=z(/^data-[\-\w.\u00B7-\uFFFF]/),ja=z(/^aria-[\-\w]+$/),hr=z(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ya=z(/^(?:\w+script|data):/i),Za=z(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),fr=z(/^html$/i),Wa=z(/^[a-z][.\w]*(-[.\w]+)+$/i);var Kt=Object.freeze({__proto__:null,MUSTACHE_EXPR:Ba,ERB_EXPR:Va,TMPLIT_EXPR:Ha,DATA_ATTR:Ga,ARIA_ATTR:ja,IS_ALLOWED_URI:hr,IS_SCRIPT_OR_DATA:Ya,ATTR_WHITESPACE:Za,DOCTYPE_NAME:fr,CUSTOM_ELEMENT:Wa});const be={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Ka=function(){return typeof window>"u"?null:window},Xa=function(e,a){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let o=null;const s="data-tt-policy-suffix";a&&a.hasAttribute(s)&&(o=a.getAttribute(s));const n="dompurify"+(o?"#"+o:"");try{return e.createPolicy(n,{createHTML(u){return u},createScriptURL(u){return u}})}catch{return console.warn("TrustedTypes policy "+n+" could not be created."),null}};function gr(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ka();const e=c=>gr(c);if(e.version="3.1.6",e.removed=[],!r||!r.document||r.document.nodeType!==be.document)return e.isSupported=!1,e;let{document:a}=r;const o=a,s=o.currentScript,{DocumentFragment:n,HTMLTemplateElement:u,Node:_,Element:d,NodeFilter:b,NamedNodeMap:w=r.NamedNodeMap||r.MozNamedAttrMap,HTMLFormElement:h,DOMParser:p,trustedTypes:y}=r,k=d.prototype,f=_e(k,"cloneNode"),$=_e(k,"remove"),U=_e(k,"nextSibling"),j=_e(k,"childNodes"),Y=_e(k,"parentNode");if(typeof u=="function"){const c=a.createElement("template");c.content&&c.content.ownerDocument&&(a=c.content.ownerDocument)}let A,K="";const{implementation:ce,createNodeIterator:de,createDocumentFragment:X,getElementsByTagName:Me}=a,{importNode:xr}=o;let V={};e.isSupported=typeof pr=="function"&&typeof Y=="function"&&ce&&ce.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:Re,ERB_EXPR:Oe,TMPLIT_EXPR:Ie,DATA_ATTR:kr,ARIA_ATTR:Er,IS_SCRIPT_OR_DATA:Ar,ATTR_WHITESPACE:nt,CUSTOM_ELEMENT:Cr}=Kt;let{IS_ALLOWED_URI:lt}=Kt,C=null;const ct=g({},[...jt,...Qe,...Je,...$e,...Yt]);let T=null;const dt=g({},[...Zt,...et,...Wt,...Se]);let E=Object.seal(mr(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ue=null,Ue=null,ut=!0,ze=!0,pt=!1,mt=!0,ee=!1,Pe=!0,Q=!1,Be=!1,Ve=!1,te=!1,xe=!1,ke=!1,ht=!0,ft=!1;const Tr="user-content-";let He=!0,pe=!1,re={},ae=null;const gt=g({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let vt=null;const _t=g({},["audio","video","img","source","image","track"]);let Ge=null;const bt=g({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ee="http://www.w3.org/1998/Math/MathML",Ae="http://www.w3.org/2000/svg",Z="http://www.w3.org/1999/xhtml";let oe=Z,je=!1,Ye=null;const Sr=g({},[Ee,Ae,Z],Xe);let me=null;const Fr=["application/xhtml+xml","text/html"],qr="text/html";let S=null,ie=null;const Dr=a.createElement("form"),wt=function(t){return t instanceof RegExp||t instanceof Function},Ze=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(ie&&ie===t)){if((!t||typeof t!="object")&&(t={}),t=J(t),me=Fr.indexOf(t.PARSER_MEDIA_TYPE)===-1?qr:t.PARSER_MEDIA_TYPE,S=me==="application/xhtml+xml"?Xe:Fe,C=P(t,"ALLOWED_TAGS")?g({},t.ALLOWED_TAGS,S):ct,T=P(t,"ALLOWED_ATTR")?g({},t.ALLOWED_ATTR,S):dt,Ye=P(t,"ALLOWED_NAMESPACES")?g({},t.ALLOWED_NAMESPACES,Xe):Sr,Ge=P(t,"ADD_URI_SAFE_ATTR")?g(J(bt),t.ADD_URI_SAFE_ATTR,S):bt,vt=P(t,"ADD_DATA_URI_TAGS")?g(J(_t),t.ADD_DATA_URI_TAGS,S):_t,ae=P(t,"FORBID_CONTENTS")?g({},t.FORBID_CONTENTS,S):gt,ue=P(t,"FORBID_TAGS")?g({},t.FORBID_TAGS,S):{},Ue=P(t,"FORBID_ATTR")?g({},t.FORBID_ATTR,S):{},re=P(t,"USE_PROFILES")?t.USE_PROFILES:!1,ut=t.ALLOW_ARIA_ATTR!==!1,ze=t.ALLOW_DATA_ATTR!==!1,pt=t.ALLOW_UNKNOWN_PROTOCOLS||!1,mt=t.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ee=t.SAFE_FOR_TEMPLATES||!1,Pe=t.SAFE_FOR_XML!==!1,Q=t.WHOLE_DOCUMENT||!1,te=t.RETURN_DOM||!1,xe=t.RETURN_DOM_FRAGMENT||!1,ke=t.RETURN_TRUSTED_TYPE||!1,Ve=t.FORCE_BODY||!1,ht=t.SANITIZE_DOM!==!1,ft=t.SANITIZE_NAMED_PROPS||!1,He=t.KEEP_CONTENT!==!1,pe=t.IN_PLACE||!1,lt=t.ALLOWED_URI_REGEXP||hr,oe=t.NAMESPACE||Z,E=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&wt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(E.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&wt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(E.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(E.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ee&&(ze=!1),xe&&(te=!0),re&&(C=g({},Yt),T=[],re.html===!0&&(g(C,jt),g(T,Zt)),re.svg===!0&&(g(C,Qe),g(T,et),g(T,Se)),re.svgFilters===!0&&(g(C,Je),g(T,et),g(T,Se)),re.mathMl===!0&&(g(C,$e),g(T,Wt),g(T,Se))),t.ADD_TAGS&&(C===ct&&(C=J(C)),g(C,t.ADD_TAGS,S)),t.ADD_ATTR&&(T===dt&&(T=J(T)),g(T,t.ADD_ATTR,S)),t.ADD_URI_SAFE_ATTR&&g(Ge,t.ADD_URI_SAFE_ATTR,S),t.FORBID_CONTENTS&&(ae===gt&&(ae=J(ae)),g(ae,t.FORBID_CONTENTS,S)),He&&(C["#text"]=!0),Q&&g(C,["html","head","body"]),C.table&&(g(C,["tbody"]),delete ue.tbody),t.TRUSTED_TYPES_POLICY){if(typeof t.TRUSTED_TYPES_POLICY.createHTML!="function")throw ve('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof t.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw ve('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');A=t.TRUSTED_TYPES_POLICY,K=A.createHTML("")}else A===void 0&&(A=Xa(y,s)),A!==null&&typeof K=="string"&&(K=A.createHTML(""));M&&M(t),ie=t}},yt=g({},["mi","mo","mn","ms","mtext"]),xt=g({},["foreignobject","annotation-xml"]),Lr=g({},["title","style","font","a","script"]),kt=g({},[...Qe,...Je,...za]),Et=g({},[...$e,...Pa]),Nr=function(t){let i=Y(t);(!i||!i.tagName)&&(i={namespaceURI:oe,tagName:"template"});const l=Fe(t.tagName),x=Fe(i.tagName);return Ye[t.namespaceURI]?t.namespaceURI===Ae?i.namespaceURI===Z?l==="svg":i.namespaceURI===Ee?l==="svg"&&(x==="annotation-xml"||yt[x]):!!kt[l]:t.namespaceURI===Ee?i.namespaceURI===Z?l==="math":i.namespaceURI===Ae?l==="math"&&xt[x]:!!Et[l]:t.namespaceURI===Z?i.namespaceURI===Ae&&!xt[x]||i.namespaceURI===Ee&&!yt[x]?!1:!Et[l]&&(Lr[l]||!kt[l]):!!(me==="application/xhtml+xml"&&Ye[t.namespaceURI]):!1},H=function(t){fe(e.removed,{element:t});try{Y(t).removeChild(t)}catch{$(t)}},Ce=function(t,i){try{fe(e.removed,{attribute:i.getAttributeNode(t),from:i})}catch{fe(e.removed,{attribute:null,from:i})}if(i.removeAttribute(t),t==="is"&&!T[t])if(te||xe)try{H(i)}catch{}else try{i.setAttribute(t,"")}catch{}},At=function(t){let i=null,l=null;if(Ve)t="<remove></remove>"+t;else{const F=Gt(t,/^[\r\n\t ]+/);l=F&&F[0]}me==="application/xhtml+xml"&&oe===Z&&(t='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+t+"</body></html>");const x=A?A.createHTML(t):t;if(oe===Z)try{i=new p().parseFromString(x,me)}catch{}if(!i||!i.documentElement){i=ce.createDocument(oe,"template",null);try{i.documentElement.innerHTML=je?K:x}catch{}}const q=i.body||i.documentElement;return t&&l&&q.insertBefore(a.createTextNode(l),q.childNodes[0]||null),oe===Z?Me.call(i,Q?"html":"body")[0]:Q?i.documentElement:q},Ct=function(t){return de.call(t.ownerDocument||t,t,b.SHOW_ELEMENT|b.SHOW_COMMENT|b.SHOW_TEXT|b.SHOW_PROCESSING_INSTRUCTION|b.SHOW_CDATA_SECTION,null)},Tt=function(t){return t instanceof h&&(typeof t.nodeName!="string"||typeof t.textContent!="string"||typeof t.removeChild!="function"||!(t.attributes instanceof w)||typeof t.removeAttribute!="function"||typeof t.setAttribute!="function"||typeof t.namespaceURI!="string"||typeof t.insertBefore!="function"||typeof t.hasChildNodes!="function")},St=function(t){return typeof _=="function"&&t instanceof _},W=function(t,i,l){V[t]&&Te(V[t],x=>{x.call(e,i,l,ie)})},Ft=function(t){let i=null;if(W("beforeSanitizeElements",t,null),Tt(t))return H(t),!0;const l=S(t.nodeName);if(W("uponSanitizeElement",t,{tagName:l,allowedTags:C}),t.hasChildNodes()&&!St(t.firstElementChild)&&N(/<[/\w]/g,t.innerHTML)&&N(/<[/\w]/g,t.textContent)||t.nodeType===be.progressingInstruction||Pe&&t.nodeType===be.comment&&N(/<[/\w]/g,t.data))return H(t),!0;if(!C[l]||ue[l]){if(!ue[l]&&Dt(l)&&(E.tagNameCheck instanceof RegExp&&N(E.tagNameCheck,l)||E.tagNameCheck instanceof Function&&E.tagNameCheck(l)))return!1;if(He&&!ae[l]){const x=Y(t)||t.parentNode,q=j(t)||t.childNodes;if(q&&x){const F=q.length;for(let R=F-1;R>=0;--R){const G=f(q[R],!0);G.__removalCount=(t.__removalCount||0)+1,x.insertBefore(G,U(t))}}}return H(t),!0}return t instanceof d&&!Nr(t)||(l==="noscript"||l==="noembed"||l==="noframes")&&N(/<\/no(script|embed|frames)/i,t.innerHTML)?(H(t),!0):(ee&&t.nodeType===be.text&&(i=t.textContent,Te([Re,Oe,Ie],x=>{i=ge(i,x," ")}),t.textContent!==i&&(fe(e.removed,{element:t.cloneNode()}),t.textContent=i)),W("afterSanitizeElements",t,null),!1)},qt=function(t,i,l){if(ht&&(i==="id"||i==="name")&&(l in a||l in Dr))return!1;if(!(ze&&!Ue[i]&&N(kr,i))){if(!(ut&&N(Er,i))){if(!T[i]||Ue[i]){if(!(Dt(t)&&(E.tagNameCheck instanceof RegExp&&N(E.tagNameCheck,t)||E.tagNameCheck instanceof Function&&E.tagNameCheck(t))&&(E.attributeNameCheck instanceof RegExp&&N(E.attributeNameCheck,i)||E.attributeNameCheck instanceof Function&&E.attributeNameCheck(i))||i==="is"&&E.allowCustomizedBuiltInElements&&(E.tagNameCheck instanceof RegExp&&N(E.tagNameCheck,l)||E.tagNameCheck instanceof Function&&E.tagNameCheck(l))))return!1}else if(!Ge[i]){if(!N(lt,ge(l,nt,""))){if(!((i==="src"||i==="xlink:href"||i==="href")&&t!=="script"&&Ra(l,"data:")===0&&vt[t])){if(!(pt&&!N(Ar,ge(l,nt,"")))){if(l)return!1}}}}}}return!0},Dt=function(t){return t!=="annotation-xml"&&Gt(t,Cr)},Lt=function(t){W("beforeSanitizeAttributes",t,null);const{attributes:i}=t;if(!i)return;const l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:T};let x=i.length;for(;x--;){const q=i[x],{name:F,namespaceURI:R,value:G}=q,he=S(F);let L=F==="value"?G:Oa(G);if(l.attrName=he,l.attrValue=L,l.keepAttr=!0,l.forceKeepAttr=void 0,W("uponSanitizeAttribute",t,l),L=l.attrValue,Pe&&N(/((--!?|])>)|<\/(style|title)/i,L)){Ce(F,t);continue}if(l.forceKeepAttr||(Ce(F,t),!l.keepAttr))continue;if(!mt&&N(/\/>/i,L)){Ce(F,t);continue}ee&&Te([Re,Oe,Ie],Mt=>{L=ge(L,Mt," ")});const Nt=S(t.nodeName);if(qt(Nt,he,L)){if(ft&&(he==="id"||he==="name")&&(Ce(F,t),L=Tr+L),A&&typeof y=="object"&&typeof y.getAttributeType=="function"&&!R)switch(y.getAttributeType(Nt,he)){case"TrustedHTML":{L=A.createHTML(L);break}case"TrustedScriptURL":{L=A.createScriptURL(L);break}}try{R?t.setAttributeNS(R,F,L):t.setAttribute(F,L),Tt(t)?H(t):Ht(e.removed)}catch{}}}W("afterSanitizeAttributes",t,null)},Mr=function c(t){let i=null;const l=Ct(t);for(W("beforeSanitizeShadowDOM",t,null);i=l.nextNode();)W("uponSanitizeShadowNode",i,null),!Ft(i)&&(i.content instanceof n&&c(i.content),Lt(i));W("afterSanitizeShadowDOM",t,null)};return e.sanitize=function(c){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=null,l=null,x=null,q=null;if(je=!c,je&&(c="<!-->"),typeof c!="string"&&!St(c))if(typeof c.toString=="function"){if(c=c.toString(),typeof c!="string")throw ve("dirty is not a string, aborting")}else throw ve("toString is not a function");if(!e.isSupported)return c;if(Be||Ze(t),e.removed=[],typeof c=="string"&&(pe=!1),pe){if(c.nodeName){const G=S(c.nodeName);if(!C[G]||ue[G])throw ve("root node is forbidden and cannot be sanitized in-place")}}else if(c instanceof _)i=At("<!---->"),l=i.ownerDocument.importNode(c,!0),l.nodeType===be.element&&l.nodeName==="BODY"||l.nodeName==="HTML"?i=l:i.appendChild(l);else{if(!te&&!ee&&!Q&&c.indexOf("<")===-1)return A&&ke?A.createHTML(c):c;if(i=At(c),!i)return te?null:ke?K:""}i&&Ve&&H(i.firstChild);const F=Ct(pe?c:i);for(;x=F.nextNode();)Ft(x)||(x.content instanceof n&&Mr(x.content),Lt(x));if(pe)return c;if(te){if(xe)for(q=X.call(i.ownerDocument);i.firstChild;)q.appendChild(i.firstChild);else q=i;return(T.shadowroot||T.shadowrootmode)&&(q=xr.call(o,q,!0)),q}let R=Q?i.outerHTML:i.innerHTML;return Q&&C["!doctype"]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&N(fr,i.ownerDocument.doctype.name)&&(R="<!DOCTYPE "+i.ownerDocument.doctype.name+`>
`+R),ee&&Te([Re,Oe,Ie],G=>{R=ge(R,G," ")}),A&&ke?A.createHTML(R):R},e.setConfig=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ze(c),Be=!0},e.clearConfig=function(){ie=null,Be=!1},e.isValidAttribute=function(c,t,i){ie||Ze({});const l=S(c),x=S(t);return qt(l,x,i)},e.addHook=function(c,t){typeof t=="function"&&(V[c]=V[c]||[],fe(V[c],t))},e.removeHook=function(c){if(V[c])return Ht(V[c])},e.removeHooks=function(c){V[c]&&(V[c]=[])},e.removeAllHooks=function(){V={}},e}var Qa=gr();const Ja=r=>Qa.sanitize(r),tt=r=>Da(Ja(r),{scope:"strict"});class $a extends er{constructor(){super(...arguments),this.updateShop=(e,a)=>this.put(`/shops/${e}`,a),this.updateShopStatus=(e,a)=>this.put(`/shops/${e}/status`,a),this.updateOriginAddress=(e,a)=>this.put(`/shops/${e}/origin-address`,a),this.getCurrentShop=()=>this.get("/shops/current"),this.getCurrentPermissions=()=>this.get("/shops/permissions"),this.getConnectedShops=()=>this.get("/shops/connected"),this.getRecentContent=e=>this.get(`/shops/current/social-networks/${e.socialNetwork}/recent`),this.getCurrentShopConfig=()=>this.get("/v2/payment/shop/config"),this.setCurrentShopConfigChargeLimit=e=>this.put("/v2/payment/shop/config/charge-limit",e),this.updateCurrencySettings=(e,a)=>this.put(`/shops/${e.shopId}/settings/currency-setting`,a),this.updatePaymentSettings=(e,a)=>this.put(`/shops/${e.shopId}/settings/payment`,a),this.enableMemberships=(e,a)=>this.put(`/shops/${e.shopId}/settings/memberships`,a),this.setThemeEditorVisit=e=>this.put(`/shops/${e.shopId}/theme-editor-visit`),this.updateShopAnalytics=(e,a)=>this.put(`/shops/${e.shopId}/analytics`,a),this.createAdditionalShop=e=>this.post("/shops/additional",e)}}const vr=new $a,eo=tr(vr.getCurrentShop,{queryKey:["currentShop"],select:r=>(r.name=tt(r.name),r.creatorName=tt(r.creatorName),r.description=tt(r.description),r)}),to=r=>{const{currentShopQuery:e,invalidateCurrentShopQuery:a}=eo(void 0,r);return{currentShopQuery:e,invalidateCurrentShopQuery:a,currentShop:e.data,isLoading:e.isLoading}};tr(vr.getRecentContent,{queryKey:["recentContent"]});const ro=v.createContext({youtubeData:{},youtubeLoading:!1,shopName:"",recentVideos:[]}),ao=()=>v.useContext(ro),oo=v.createContext({sandbox:{},isLoading:!1});function io(){return se.useContext(oo)}const _r=v.createContext({themeLoading:!1,finalHTML:void 0,themePreviews:{},scrollSection:null,setScrollSection:()=>{}}),so=r=>{const[e,a]=v.useState({}),{shopName:o,recentVideos:s}=ao(),{theme:n,enabledSections:u,selectedFont:_,selectedColor:d,logoImage:b}=De(),w=Yr(d,500),{sandbox:h,isLoading:p}=io();v.useEffect(()=>{k(null)},[n]);const[y,k]=v.useState(null),f=v.useCallback(U=>{if(!U){k(null);return}const j=zt[n];k(j[U])},[n]);v.useEffect(()=>{const U=Object.entries(h).map(([j,Y])=>{const A=sa(Y||"",o,u||{},zt[j],_,w,b,s);return[j,A]});a(Object.fromEntries(U))},[h,u,_,w,b,o,s]);const $=v.useMemo(()=>({themeLoading:p,finalHTML:e[n],themePreviews:e,theme:n,scrollSection:y,setScrollSection:f}),[e,n,p,y,f]);return m.jsx(_r.Provider,{value:$,children:r.children})},no=()=>v.useContext(_r);so.__docgenInfo={description:"",methods:[],displayName:"ThemePreviewProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const lo=I.div`
  width: 100%;
  height: calc(100vh - 64px);

  display: flex;
  justify-content: center;
  align-items: center;
`,co=I.div`
  z-index: 100;
  pointer-events: none;
  position: absolute;
  width: 100%;
  background-color: #fff;

  ${r=>`
    transition: ${r.iframeLoading?"fadeIn 0.5s ease-in-out":"fadeOut 0.5s ease-in-out"};
    opacity: ${r.themeLoading||r.iframeLoading?1:0};
  `}
`,uo=I.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${r=>`
    opacity: ${r.iframeLoading?0:1},
  `}

  transition: opacity 0.5s ease-in-out;
`,br=.65,po=1/br,mo=()=>{const{finalHTML:r,themeLoading:e,scrollSection:a}=no(),{mobile:o}=De(),[s,n]=se.useState(!1),u=se.useRef(null),{location:_}=ta();return v.useEffect(()=>{n(!0),setTimeout(()=>{var w,h,p,y;const d=((w=u.current)==null?void 0:w.contentDocument)||((p=(h=u.current)==null?void 0:h.contentWindow)==null?void 0:p.document);a&&_==="/admin/creator-onboarding/sections"&&((y=d==null?void 0:d.getElementById(a))==null||y.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})),n(!1)},500)},[r,u,a,_]),m.jsxs(lo,{children:[m.jsx(co,{themeLoading:e,iframeLoading:s}),m.jsx(uo,{iframeLoading:s,children:m.jsx("iframe",{ref:u,width:o?"375px":"1440px",height:`${po*100}%`,srcDoc:r,style:{transform:`scale(${br})`,transformOrigin:"center",border:"none"}})})]})},ho=I.div`
  display: flex;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  height: 100vh;
`,fo=I.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: calc(100vw - 580px);
  background-color: ${B.GS200};
`,go=I.div`
  flex-shrink: 0;
  width: 580px;
  maxheight: 100%;
`,vo=I.div`
  height: 48px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;

  ${Qt.laptop} {
    height: 64px;
    padding: 0 32px;
  }
`,_o=I.a`
  flex: 1;
  position: relative;
  width: 120px;

  ${Qt.laptop} {
    width: 140px;
    top: -5px;
  }
`,bo=I.img`
  width: auto;
  height: 20px;
  object-fit: cover;
`,wo=r=>{const{mobile:e,setMobile:a}=De();return m.jsxs(ho,{children:[m.jsxs(fo,{children:[m.jsxs(vo,{children:[m.jsx(_o,{href:"#",children:m.jsx(bo,{src:Rr})}),m.jsx("div",{style:{display:"flex",justifyContent:"center"},children:m.jsx(or,{items:[{label:"Desktop",value:"desktop",icon:Or},{label:"Mobile",value:"mobile",icon:Ir}],value:e?"mobile":"desktop",onChange:o=>a(o==="mobile")})}),m.jsx("div",{style:{flex:"1"}})]}),m.jsx(mo,{})]}),m.jsxs(go,{children:[m.jsx("div",{style:{flexShrink:1,height:"calc(100% - 96px)",overflowY:"auto"},children:r.children}),r.nav]})]})};wo.__docgenInfo={description:"",methods:[],displayName:"OnboardingLayout",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},nav:{required:!0,tsType:{name:"ReactElement",elements:[{name:"OnboardingNav"}],raw:"ReactElement<typeof OnboardingNav>"},description:""}}};const wr=v.createContext({commitInstall:async()=>!1}),yr=r=>{const{installId:e}=r,{commitInstall:a}=ca(),o=v.useCallback(async()=>{if(e){try{if(await a.mutateAsync(e))return!0}catch(n){console.error(n)}return!1}return!1},[e,a]),s=v.useMemo(()=>({commitInstall:o}),[o]);return m.jsx(wr.Provider,{value:s,children:r.children})};function yo(){return se.useContext(wr)}yr.__docgenInfo={description:"",methods:[],displayName:"InstallationProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},installId:{required:!0,tsType:{name:"string"},description:""}}};const xo=3e3,ko=()=>{const{commitInstall:r}=yo(),{currentShop:e}=to();return v.useEffect(()=>{const o=setInterval(async()=>{await r()&&(window.location.href=`${e==null?void 0:e.baseUri}/admin/dashboard/store-design/layout/index/`)},xo);return()=>{clearInterval(o)}},[r,e]),m.jsxs("div",{style:{padding:"32px",display:"flex",height:"96px",alignItems:"center",justifyContent:"space-between"},children:[m.jsx(ot,{label:m.jsx("strong",{children:"Skip for now"}),withUnderline:!1,disabled:!0}),m.jsxs("div",{style:{display:"flex",gap:"16px"},children:[m.jsx(we,{disabled:!0,icon:m.jsx(Jt,{})}),m.jsx(we,{appearance:"primary",label:"Finish",loading:!0})]})]})},Eo=r=>{const{createInstall:e,installing:a}=De(),[o,s]=se.useState(null),n=async()=>{const u=await e();s(u)};return o?m.jsx(yr,{installId:o,children:m.jsx(ko,{})}):m.jsxs("div",{style:{padding:"32px",display:"flex",height:"96px",alignItems:"center",justifyContent:"space-between"},children:[m.jsx(ot,{label:m.jsx("strong",{children:"Skip for now"}),withUnderline:!1,href:"/admin/dashboard"}),m.jsxs("div",{style:{display:"flex",gap:"16px"},children:[r.back&&m.jsx(we,{onClick:r.back,icon:m.jsx(Jt,{})}),r.continue&&!r.finish&&m.jsx(we,{appearance:"primary",onClick:r.continue,label:"Continue"}),r.finish&&m.jsx(we,{appearance:"primary",label:"Finish",onClick:n,loading:a})]})]})};Eo.__docgenInfo={description:"",methods:[],displayName:"OnboardingNav",props:{back:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},continue:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},finish:{required:!1,tsType:{name:"boolean"},description:""}}};const qo=`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <meta content="width=device-width,initial-scale=1" name="viewport" />
    <link rel="canonical" href="https://clean-frame-sandbox-shop.fourthwall.com/" />

    <title>clean-frame-sandbox</title>

    



<meta name="description" content="The official website and shop of clean-frame-sandbox. Find the latest content, buy merch, and support your favorite creator." />
<meta property="og:site_name" content="clean-frame-sandbox">
<meta property="og:url" content="https://clean-frame-sandbox-shop.fourthwall.com/">
<meta property="og:title" content="clean-frame-sandbox">
<meta property="og:type" content="website">
<meta property="og:description" content="The official website and shop of clean-frame-sandbox. Find the latest content, buy merch, and support your favorite creator.">




  <meta property="og:image" content="https://imgproxy.fourthwall.com/uyf2YMIcUzZ9T59CrrkV0a9h1rG4ih1R3UV_qjQzMZ0/w:1200/sm:1/enc/ODQ3Y2MyNDUxMjll/YjliN-PEH_NhCs1-/PulzWxC6Rwq3HggY/zRT9DrEB0VuzlVWE/tinuM369d-RWJGAT/2WzHUzcVUekvxu15/ivZPHBE3R_-wTFBp/8gTdFqv8z4-o3x_-/PWORKq9zVLXE45zr/d6oikRAv8f5my1Yc/c8mmBZ6PBjC_osAD/Ney2mk_N-Wq8sMCs/av3mwjDe0y9u_G9a/SvoBgvnPU_N248zG/BOpEtGgjMhY.webp">
        <meta property="og:image:secure_url" content="https://imgproxy.fourthwall.com/uyf2YMIcUzZ9T59CrrkV0a9h1rG4ih1R3UV_qjQzMZ0/w:1200/sm:1/enc/ODQ3Y2MyNDUxMjll/YjliN-PEH_NhCs1-/PulzWxC6Rwq3HggY/zRT9DrEB0VuzlVWE/tinuM369d-RWJGAT/2WzHUzcVUekvxu15/ivZPHBE3R_-wTFBp/8gTdFqv8z4-o3x_-/PWORKq9zVLXE45zr/d6oikRAv8f5my1Yc/c8mmBZ6PBjC_osAD/Ney2mk_N-Wq8sMCs/av3mwjDe0y9u_G9a/SvoBgvnPU_N248zG/BOpEtGgjMhY.webp">
        <meta property="twitter:image" content="https://imgproxy.fourthwall.com/uyf2YMIcUzZ9T59CrrkV0a9h1rG4ih1R3UV_qjQzMZ0/w:1200/sm:1/enc/ODQ3Y2MyNDUxMjll/YjliN-PEH_NhCs1-/PulzWxC6Rwq3HggY/zRT9DrEB0VuzlVWE/tinuM369d-RWJGAT/2WzHUzcVUekvxu15/ivZPHBE3R_-wTFBp/8gTdFqv8z4-o3x_-/PWORKq9zVLXE45zr/d6oikRAv8f5my1Yc/c8mmBZ6PBjC_osAD/Ney2mk_N-Wq8sMCs/av3mwjDe0y9u_G9a/SvoBgvnPU_N248zG/BOpEtGgjMhY.webp">



  <meta name="twitter:site" content="@">
  <meta name="twitter:creator" content="@">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="clean-frame-sandbox">
<meta name="twitter:description" content="The official website and shop of clean-frame-sandbox. Find the latest content, buy merch, and support your favorite creator.">

    
    <link rel="shortcut icon" href="https://imgproxy.fourthwall.com/i6PwDLHUXQIbuZzoXVMhIlhCmvmZtGXn2zrYBAbhMF0/rs:fill:192:160/g:no/pd:32:0:0:0/bg:000000/sm:1/enc/ZTQ1ZDI4NzcxYzY5/NTYwYuv0ssVcjKtt/vDPKRslHSrMedm0J/YS8XGrLzTtlpIGba/O6pqwh3_Qt9DE-W9/LSFky9HcZG4ENh5q/naQKnAEZTHYE5aU8/3jnbfrit0mmJCtOG/2uLDXQadIJPt8VgK/-6Nf1X9NUHcmqUHi/pOweNh8a_9nsEEr1/UKjymUYTXxehVqR0.webp" sizes="96x96" type="image/png" />
<link rel="shortcut icon" href="https://imgproxy.fourthwall.com/i6PwDLHUXQIbuZzoXVMhIlhCmvmZtGXn2zrYBAbhMF0/rs:fill:192:160/g:no/pd:32:0:0:0/bg:000000/sm:1/enc/ZTQ1ZDI4NzcxYzY5/NTYwYuv0ssVcjKtt/vDPKRslHSrMedm0J/YS8XGrLzTtlpIGba/O6pqwh3_Qt9DE-W9/LSFky9HcZG4ENh5q/naQKnAEZTHYE5aU8/3jnbfrit0mmJCtOG/2uLDXQadIJPt8VgK/-6Nf1X9NUHcmqUHi/pOweNh8a_9nsEEr1/UKjymUYTXxehVqR0.webp" sizes="48x48" type="image/png" />


  <link rel="apple-touch-icon" href="https://imgproxy.fourthwall.com/i6PwDLHUXQIbuZzoXVMhIlhCmvmZtGXn2zrYBAbhMF0/rs:fill:192:160/g:no/pd:32:0:0:0/bg:000000/sm:1/enc/ZTQ1ZDI4NzcxYzY5/NTYwYuv0ssVcjKtt/vDPKRslHSrMedm0J/YS8XGrLzTtlpIGba/O6pqwh3_Qt9DE-W9/LSFky9HcZG4ENh5q/naQKnAEZTHYE5aU8/3jnbfrit0mmJCtOG/2uLDXQadIJPt8VgK/-6Nf1X9NUHcmqUHi/pOweNh8a_9nsEEr1/UKjymUYTXxehVqR0.webp" sizes="180x180" type="image/png" />


<meta content="#ffffff" name="msapplication-TileColor" />
<meta content="1.0.0" name="version" />


    <link rel="stylesheet" type="text/css" href="https://themes.fourthwall.com/themes-library/assets/598a81c6-d784-4417-9e89-9d318ca84d97/assets/vendor.css?v=b7fdac61a90ad1e625b76fc6f1342182af70842cac88754be5a33627c4de548e" media="all" />

    <link rel="stylesheet" type="text/css" href="https://themes.fourthwall.com/themes/assets/479bb29c-bfde-42fc-8b0a-b8c8cc9d83dc/assets/styles/css-variables.scss.css?v=da009232dd5aa11bf1282f628b007d74d9f22a96d93ab7c89adcc8b31ac06770" media="all" />
    <link rel="stylesheet" type="text/css" href="https://themes.fourthwall.com/themes/assets/479bb29c-bfde-42fc-8b0a-b8c8cc9d83dc/assets/styles/theme.scss.css?v=8faf1494de2a5d5a7542b3ad256d3531e37a7a70b7aac02a16e01ff388e98077" media="all" />
    
    <link rel="preconnect" href="https://imgproxy.fourthwall.com" crossorigin>
<link rel="preconnect" href="https://storage.googleapis.com" crossorigin>
<script src="/platform/geo/redirect.js"><\/script>
<script src="https://js.stripe.com/v3/" defer><\/script>
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/" hreflang="x-default" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-usd/" hreflang="en-AQ" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-usd/" hreflang="en-AS" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-usd/" hreflang="en-BQ" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-usd/" hreflang="en-EC" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-usd/" hreflang="en-FM" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-usd/" hreflang="en-GU" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-usd/" hreflang="en-IO" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-usd/" hreflang="en-MH" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-usd/" hreflang="en-MP" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-usd/" hreflang="en-PR" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-usd/" hreflang="en-PW" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-usd/" hreflang="en-SV" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-usd/" hreflang="en-TC" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-usd/" hreflang="en-UM" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-usd/" hreflang="en-US" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-usd/" hreflang="en-VG" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-usd/" hreflang="en-VI" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-usd/" hreflang="en-ZW" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-AD" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-AT" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-AX" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-BE" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-BL" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-CY" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-DE" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-EE" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-ES" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-FI" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-FR" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-GF" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-GP" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-GR" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-IE" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-IT" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-LT" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-LU" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-LV" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-MC" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-ME" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-MF" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-MQ" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-MT" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-NL" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-PM" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-PT" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-RE" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-SI" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-SK" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-SM" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-TF" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-VA" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-YT" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-eur/" hreflang="en-XK" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-cad/" hreflang="en-CA" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-gbp/" hreflang="en-GB" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-gbp/" hreflang="en-GG" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-gbp/" hreflang="en-GS" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-gbp/" hreflang="en-IM" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-gbp/" hreflang="en-JE" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-aud/" hreflang="en-AU" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-aud/" hreflang="en-CC" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-aud/" hreflang="en-CX" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-aud/" hreflang="en-HM" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-aud/" hreflang="en-KI" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-aud/" hreflang="en-NF" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-aud/" hreflang="en-NR" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-aud/" hreflang="en-TV" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-nzd/" hreflang="en-CK" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-nzd/" hreflang="en-NU" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-nzd/" hreflang="en-NZ" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-nzd/" hreflang="en-PN" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-nzd/" hreflang="en-TK" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-sek/" hreflang="en-SE" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-nok/" hreflang="en-BV" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-nok/" hreflang="en-NO" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-nok/" hreflang="en-SJ" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-dkk/" hreflang="en-DK" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-dkk/" hreflang="en-FO" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-dkk/" hreflang="en-GL" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-pln/" hreflang="en-PL" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-inr/" hreflang="en-IN" />
<link rel="alternate" href="https://clean-frame-sandbox-shop.fourthwall.com/en-jpy/" hreflang="en-JP" />
<script type='module' src="https://cdn.fourthwall.com/web-perf/instant.js" defer><\/script>
<script>
  window.shopName = 'clean-frame-sandbox';
  window.shopId = 'sh_dc132f90-8cbc-45a7-b769-8bb7ed91315d';
  window.cookie_policy = 'ShowInEu';
<\/script>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'/_c/mtg.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PV2BBNN');<\/script>
<!-- End Google Tag Manager -->
<script>window.creatorGa4Id = ''; window.creatorFbPixelId = ''; window.creatorTiktokAnalyticsId = ''; window.creatorKlaviyoAnalyticsId = '';<\/script>
<script type='text/javascript'>var eventsListenerScript = document.createElement('script');eventsListenerScript.async = true;eventsListenerScript.src = "https://cdn.fourthwall.com/shop-event-listener/shop-events-listener.js";document.getElementsByTagName('head')[0].appendChild(eventsListenerScript);<\/script>
<link rel="manifest" href="/manifest.json" />
<meta name='theme-color' content='#97abb5' />
<script type="application/ld+json">{"@context":"https://schema.org","@type":"Organization","name":"clean-frame-sandbox","description":"The official website and shop of clean-frame-sandbox. Find the latest content, buy merch, and support your favorite creator.","url":"https://clean-frame-sandbox-shop.fourthwall.com","sameAs":["https://youtube.com/channel/UCyEd6QBSgat5kkC6svyjudA","https://instagram.com/jurrchen"]}<\/script>

  </head>

  
  

  

  <body class="body">
 <!-- Google Tag Manager (noscript) -->
<noscript><iframe src='/_c/ns.html?id=GTM-PV2BBNN'
height='0' width='0' style='display:none;visibility:hidden'></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

    <div class="page">
      <header class="page__header">
        <div id="fw-section-announcement-bar-1725213468" class="fw-section"><section class="announcement-bar">
  <div class="wrapper">
    
    
    
    
    

    
      <div class="announcement-bar__inner">
    

    
      <div class="announcement-bar__label">
        Brand new summer drop
      </div>
    

    
      </div>
    
  </div>
</section>


</div><div id="fw-section-header" class="fw-section"><div data-testid="main.single.section" class="header">
  <div class="container wrapper">
    <div class="header__grid grid grid--middle">
      <div class="grid__column grid__column--2">
        <div class="hidden@sm">
          <button data-drawer-trigger-primary="mobile-menu" class="header__icon header__icon--hamburger">
            <svg class="svg-fill-current-color" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 3.75H20M0 10H20M0 16.25H20" vector-effect="non-scaling-stroke" stroke="currentColor" stroke-width="1.5"/>
</svg>

          </button>
        </div>
      </div>

      <div class="grid__column grid__column--8">
        
          <h1 class="header__logo">
        

        <a href="/" class="header__logo-link">
          
  <div class="text-logo">
    clean-frame-sandbox
  </div>


        </a>

        
          </h1>
        
      </div>

      <div class="grid__column grid__column--2">
        <div class="list list--horizontal list--end">
          <div class="list__item list__item--flex">
            
              <li class="header__list-item visible@sm">
                <a class="header__link header__link--icon">
                  USD

                  
                    <span class="header__link-icon">
                      <svg class="svg-fill-current-color" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" vector-effect="non-scaling-stroke"/>
</svg>

                    </span>
                  
                </a>

                
                  <div class="header__dropdown header__dropdown--content">
                    <ul class="header__dropdown-inner">
                      
                        <li class="header__dropdown-item">
                          <a class="header__dropdown-link" href="/localization?currency=USD&return_to=/">
                            USD
                          </a>
                        </li>
                      
                        <li class="header__dropdown-item">
                          <a class="header__dropdown-link" href="/localization?currency=EUR&return_to=/">
                            EUR
                          </a>
                        </li>
                      
                        <li class="header__dropdown-item">
                          <a class="header__dropdown-link" href="/localization?currency=CAD&return_to=/">
                            CAD
                          </a>
                        </li>
                      
                        <li class="header__dropdown-item">
                          <a class="header__dropdown-link" href="/localization?currency=GBP&return_to=/">
                            GBP
                          </a>
                        </li>
                      
                        <li class="header__dropdown-item">
                          <a class="header__dropdown-link" href="/localization?currency=AUD&return_to=/">
                            AUD
                          </a>
                        </li>
                      
                        <li class="header__dropdown-item">
                          <a class="header__dropdown-link" href="/localization?currency=NZD&return_to=/">
                            NZD
                          </a>
                        </li>
                      
                        <li class="header__dropdown-item">
                          <a class="header__dropdown-link" href="/localization?currency=SEK&return_to=/">
                            SEK
                          </a>
                        </li>
                      
                        <li class="header__dropdown-item">
                          <a class="header__dropdown-link" href="/localization?currency=NOK&return_to=/">
                            NOK
                          </a>
                        </li>
                      
                        <li class="header__dropdown-item">
                          <a class="header__dropdown-link" href="/localization?currency=DKK&return_to=/">
                            DKK
                          </a>
                        </li>
                      
                        <li class="header__dropdown-item">
                          <a class="header__dropdown-link" href="/localization?currency=PLN&return_to=/">
                            PLN
                          </a>
                        </li>
                      
                        <li class="header__dropdown-item">
                          <a class="header__dropdown-link" href="/localization?currency=INR&return_to=/">
                            INR
                          </a>
                        </li>
                      
                        <li class="header__dropdown-item">
                          <a class="header__dropdown-link" href="/localization?currency=JPY&return_to=/">
                            JPY
                          </a>
                        </li>
                      
                    </ul>
                  </div>
                
              </li>
            

            
              <li class="header__list-item visible@sm">
                <a href="/supporters" class="header__icon header__icon--account">
                  <svg class="svg-fill-current-color" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11 12.3393C13.9587 12.3393 16.3572 9.94081 16.3572 6.98214C16.3572 4.02347 13.9587 1.625 11 1.625C8.04135 1.625 5.64288 4.02347 5.64288 6.98214C5.64288 9.94081 8.04135 12.3393 11 12.3393ZM11 12.3393C5.8652 12.3393 1.625 15.2402 1.625 20.375H20.375C20.375 15.2402 16.1362 12.3393 11 12.3393Z" vector-effect="non-scaling-stroke" fill="none" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"/>
</svg>

                </a>
              </li>
            

            <a href="/cart" class="header__icon header__icon--cart">
              <div 
  data-cart-widget="widget"
  data-testid="cart.icon"
  class="cart-widget empty"
>
  <span data-cart-widget="quantity" class="cart-widget__items"></span>

  <svg class="svg-fill-current-color" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.8077 7H10H6.19231M13.8077 7H17.6154L19 19H1L2.38462 7H6.19231M13.8077 7V4.8077C13.8077 2.70476 12.1029 1 10 1V1C7.89707 1 6.19231 2.70476 6.19231 4.80769V7" vector-effect="non-scaling-stroke" fill="none" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
</svg>

</div>
            </a>
          </div>
        </div>
      </div>

      <div class="grid__column grid__column--2 grid__column--12@sm visible@sm">
        <nav class="header__nav">
          <ul class="list list--horizontal list--justify-center">
            
              <li class="header__list-item">
                <a
                  href="/"
                  class="header__link"
                >
                  Home

                  
                </a>

                
              </li>
            
              <li class="header__list-item">
                <a
                  href="/collections/all"
                  class="header__link"
                >
                  All Products

                  
                </a>

                
              </li>
            
          </ul>
        </nav>
      </div>
    </div>
  </div>
</div>

<aside 
  data-drawer="mobile-menu" 
  class="drawer hidden@sm"
>
  <div class="drawer__background" data-drawer-trigger-primary="mobile-menu"></div>
  <div class="drawer__content drawer__content--small mobile-menu">
    <div class="mobile-menu__section mobile-menu__section--header">
      <a href="#" class="mobile-menu__close" data-drawer-trigger-primary="mobile-menu">
        <svg class="svg-fill-current-color" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.25 18.75L18.75 1.25M18.75 18.75L1.25 1.25" vector-effect="non-scaling-stroke" stroke="currentColor" stroke-width="1.5" stroke-linejoin="bevel"/>
</svg>

      </a>
    </div>
    <div class="mobile-menu__section mobile-menu__section--body">
      <div class="mobile-menu__nav">
        <ul class="mobile-menu__list">
          
            <li class="mobile-menu__list-item">
              
                <a
                  href="/"
                  class="mobile-menu__link"
                >
                  Home
                </a>
              

              
            </li>
          
            <li class="mobile-menu__list-item">
              
                <a
                  href="/collections/all"
                  class="mobile-menu__link"
                >
                  All Products
                </a>
              

              
            </li>
          

          
            <li class="mobile-menu__list-item">
              <a for="input-drawer" class="mobile-menu__link" data-accordion="trigger">
                USD

                
                  <div class="mobile-menu__link-icon">
                    <svg class="svg-fill-current-color" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" vector-effect="non-scaling-stroke"/>
</svg>

                  </div>
                
              </a>

              
                <div class="mobile-menu__dropdown mobile-menu__dropdown--content">
                  <ul class="mobile-menu__dropdown-inner">
                    
                      <li class="mobile-menu__dropdown-item">
                        <a class="mobile-menu__dropdown-link" href="/localization?currency=USD&return_to=/">
                          USD
                        </a>
                      </li>
                    
                      <li class="mobile-menu__dropdown-item">
                        <a class="mobile-menu__dropdown-link" href="/localization?currency=EUR&return_to=/">
                          EUR
                        </a>
                      </li>
                    
                      <li class="mobile-menu__dropdown-item">
                        <a class="mobile-menu__dropdown-link" href="/localization?currency=CAD&return_to=/">
                          CAD
                        </a>
                      </li>
                    
                      <li class="mobile-menu__dropdown-item">
                        <a class="mobile-menu__dropdown-link" href="/localization?currency=GBP&return_to=/">
                          GBP
                        </a>
                      </li>
                    
                      <li class="mobile-menu__dropdown-item">
                        <a class="mobile-menu__dropdown-link" href="/localization?currency=AUD&return_to=/">
                          AUD
                        </a>
                      </li>
                    
                      <li class="mobile-menu__dropdown-item">
                        <a class="mobile-menu__dropdown-link" href="/localization?currency=NZD&return_to=/">
                          NZD
                        </a>
                      </li>
                    
                      <li class="mobile-menu__dropdown-item">
                        <a class="mobile-menu__dropdown-link" href="/localization?currency=SEK&return_to=/">
                          SEK
                        </a>
                      </li>
                    
                      <li class="mobile-menu__dropdown-item">
                        <a class="mobile-menu__dropdown-link" href="/localization?currency=NOK&return_to=/">
                          NOK
                        </a>
                      </li>
                    
                      <li class="mobile-menu__dropdown-item">
                        <a class="mobile-menu__dropdown-link" href="/localization?currency=DKK&return_to=/">
                          DKK
                        </a>
                      </li>
                    
                      <li class="mobile-menu__dropdown-item">
                        <a class="mobile-menu__dropdown-link" href="/localization?currency=PLN&return_to=/">
                          PLN
                        </a>
                      </li>
                    
                      <li class="mobile-menu__dropdown-item">
                        <a class="mobile-menu__dropdown-link" href="/localization?currency=INR&return_to=/">
                          INR
                        </a>
                      </li>
                    
                      <li class="mobile-menu__dropdown-item">
                        <a class="mobile-menu__dropdown-link" href="/localization?currency=JPY&return_to=/">
                          JPY
                        </a>
                      </li>
                    
                  </ul>
                </div>
              
            </li>
          
        </ul>
      </div>
    </div>
    <div class="mobile-menu__section mobile-menu__section--socials">
      <div class="mobile-menu__list-social">
        <ul class="mobile-menu__socials">
          



  
    <li class="mobile-menu__social">
      <a
        
          href="https://youtube.com/channel/UCyEd6QBSgat5kkC6svyjudA"
        
        target="_blank"
        class="mobile-menu__social-link"
      >
        
        <svg class="svg-fill-current-color" width="24" height="17" viewBox="0 0 24 17" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.062 0H3.938A3.944 3.944 0 0 0 0 3.939v9.121A3.944 3.944 0 0 0 3.938 17h16.125A3.944 3.944 0 0 0 24 13.06V3.939A3.944 3.944 0 0 0 20.062 0zm-3.524 8.531l-6.769 4.331a.504.504 0 0 1-.509.017.5.5 0 0 1-.26-.438V3.779a.502.502 0 0 1 .77-.422l6.769 4.332a.499.499 0 0 1-.001.842z" fill-rule="nonzero"/>
</svg>

        
      </a>
    </li>
  


  
    <li class="mobile-menu__social">
      <a
        
          href="https://instagram.com/jurrchen"
        
        target="_blank"
        class="mobile-menu__social-link"
      >
        
        <svg class="svg-fill-current-color" width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.495 0h11.01A5.494 5.494 0 0 1 22 5.495v11.01A5.494 5.494 0 0 1 16.505 22H5.495A5.494 5.494 0 0 1 0 16.505V5.495A5.494 5.494 0 0 1 5.495 0zM2.2 16.505A3.294 3.294 0 0 0 5.495 19.8h11.01a3.294 3.294 0 0 0 3.295-3.295V5.495A3.294 3.294 0 0 0 16.505 2.2H5.495A3.294 3.294 0 0 0 2.2 5.495v11.01zM5.5 11a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0zm8.8 0a3.3 3.3 0 1 0-6.6 0 3.3 3.3 0 0 0 6.6 0zm2.2-4.4a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2z" fill-rule="nonzero"/>
</svg>

        
      </a>
    </li>
  


        </ul>
      </div>
    </div>
  </div>
</aside>

<script>
  const currencyData = {
    locale: "en-US",
    currency: "USD"
  }
<\/script>


</div>
      </header>

      <div class="page__main">
        <div class="main">
  <div class="main__sections" data-testid="main.sections">
    <div id="fw-section-hero-1722978594" class="fw-section"><section data-section-id="fw-section-hero-1722978594" data-testid="main.single.section" class="hero hero--fw-section-hero-1722978594 hero--move-top">
  <div class="hero__container">
    <div class="section-background">
      
        <div
          class="section-background__image"
          style="background-image: url(https://imgproxy.fourthwall.com/1s0aGlV1owWsC2H9X_6NMIqQo7ZZWNqTxiFARdfB_jI/w:1920/sm:1/enc/MTAzMjA3YjMzMjhm/NDBkZFqXRVVrsSK_/i2PhD_DdsBI8d6-l/YQCVTteehsV9ad4W/CdeQgtc3ja29_HS_/SbRCp1WRAgpqAUqm/_TFDa-HKU4z28QdJ/_G0IrMW5g9Z9Lxlv/YycPU5ffxOorf3pC/ABHvZ1Q7Klb3HUbk/L55WOL8GIML6N-zi/tSuu2z7irINV4HU9/1ciz9D7N9KSN5PAT/8srww2qs6doNV-tq/ryTa5Bd5nmKctjfn/AegykUCCDKSH2neq/9GlItgSqteX_fUfv/h_nEDU7CcPXfjJIg/Z5JhgM38nNY1y171/_xBBZXgFuWPd9jCB/ATwK3LWN9fEKOZ3X/AmKiyg.webp);mix-blend-mode:normal;"
        ></div>
      

      
    </div>

    <div class="hero__inner">
      <div class="container wrapper">
        <div 
          class="hero__content hero__content--center hero__content--large"
          style="color:#000000;"
        >
          <h1
            class="hero__heading hero__heading--regular"
            style="color:#000000;"
          >
            My new collection is out now
          </h1>

          
            <p
              class="hero__text"
              style="color:#000000;"
            >
              Check out our new, amazing summer collection with brilliant hoodies, t-shirts, hats, shoes and blazers.
            </p>
          

          
            <div class="hero__cta-container hero__cta-container--center">
              
                
                    
                      <div class="hero__cta hero__cta--primary">
                        <a
                          href="/collections/all"
                          class="button button--primary button--expand"
                        >
                          
                          Browse new merch
                        </a>
                      </div>
                    
                
              
            </div>
          
        </div>
      </div>
    </div>

    
      <div class="hero__socials" style="color:#000000;">
        



  
    <li class="hero__social-item">
      <a
        
          href="https://youtube.com/channel/UCyEd6QBSgat5kkC6svyjudA"
        
        target="_blank"
        class="hero__social-link"
      >
        
        <svg class="svg-fill-current-color" width="24" height="17" viewBox="0 0 24 17" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.062 0H3.938A3.944 3.944 0 0 0 0 3.939v9.121A3.944 3.944 0 0 0 3.938 17h16.125A3.944 3.944 0 0 0 24 13.06V3.939A3.944 3.944 0 0 0 20.062 0zm-3.524 8.531l-6.769 4.331a.504.504 0 0 1-.509.017.5.5 0 0 1-.26-.438V3.779a.502.502 0 0 1 .77-.422l6.769 4.332a.499.499 0 0 1-.001.842z" fill-rule="nonzero"/>
</svg>

        
      </a>
    </li>
  


  
    <li class="hero__social-item">
      <a
        
          href="https://instagram.com/jurrchen"
        
        target="_blank"
        class="hero__social-link"
      >
        
        <svg class="svg-fill-current-color" width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.495 0h11.01A5.494 5.494 0 0 1 22 5.495v11.01A5.494 5.494 0 0 1 16.505 22H5.495A5.494 5.494 0 0 1 0 16.505V5.495A5.494 5.494 0 0 1 5.495 0zM2.2 16.505A3.294 3.294 0 0 0 5.495 19.8h11.01a3.294 3.294 0 0 0 3.295-3.295V5.495A3.294 3.294 0 0 0 16.505 2.2H5.495A3.294 3.294 0 0 0 2.2 5.495v11.01zM5.5 11a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0zm8.8 0a3.3 3.3 0 1 0-6.6 0 3.3 3.3 0 0 0 6.6 0zm2.2-4.4a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2z" fill-rule="nonzero"/>
</svg>

        
      </a>
    </li>
  


      </div>
    
  </div>
</section>


</div><div id="fw-section-featured-collection-0" class="fw-section">






<section data-section-id="fw-section-featured-collection-0" data-testid="main.single.section" class="featured-collection featured-collection--fw-section-featured-collection-0">
  <div class="collection">
    <div class="section-background"></div>

    <div class="collection__inner">
      <div class="container wrapper">
        

        <div class="collection__grid">
          <div class="grid grid--center">
            
              <div class="grid__column grid__column--6 grid__column--4@md">
                








<div class="product-tile" data-testid="product" data-product-available="true" data-id="8604">
  <a href="/products/launch-tee" class="tile tile--zoom">
    <div class="tile__image">
      <div class="image image--background-color">
        <div class="image__badges">
          
            
          

          
        </div>

        <div class="image__object">
          
            
            
              
                
                  <img
                    src="https://imgproxy.fourthwall.com/Fvo5Mw1bZUlDQvaZJ6lNffEz_XTl81aLbohD3WXhKko/w:720/sm:1/enc/ZWY5OGUzMWY5OGNm/ZTc5MuM5rDOq43No/aWRJIxomTrAGG9bW/M08V_z_l1Quqzksl/-8pvV0e9iYfIm78f/Q9wvlbSAwZvQ7aS7/fR6j5bmj9WrjW1h1/RMNh58bBKyQmPODt/VwU2trfVUWAPkBYU/mDcOS9L1hoTXyl_h/IJC5AUuRqOdHkPv2/CjSuFlZq89hKtxqr/GLZcJ89mYh5R5vqp/Be5U77ovHMg-gLT6/znKYp2y2fGY.webp"
                    alt="Launch tee product image (2)"
                    class="tile__item tile__item--1"
                    data-preview="first"
                  >
                    
                      <img
                        src="https://imgproxy.fourthwall.com/ojw4pEMZAnqAFz-OfQk22mgs7CBwIuTyXt6xd992vxE/w:720/sm:1/enc/MGZjYWRhOWZjNzE2/YTg2Yej-wpddmKfh/YCRMj-FPACozsKrV/kfRVeaiAqCV2KXoE/cZ-pSiJZnXKMeO9z/OvlbYXBfeixsLDSO/iFbc0WuzJK841_cZ/pik_-xZzLY_1VfwA/x_rQE00DZ5PaIRqC/aPBr628rzmTVcNOJ/XMFfgmmTGxyOY1iA/dqKRQ6b2Q1twdZdQ/dxoJJtQ6-4PaGMBh/z79xlZQBtJuMVEF1/94_LQBMj2nk.webp"
                        alt="Launch tee product image (6)"
                        class="tile__item tile__item--2"
                        data-preview="secondary"
                      >
                    
                  
                  
            
          
        </div>
      </div>
    </div>
  
    <div class="tile__description">
      <h3 class="tile__heading">
        Launch tee
      </h3>

      <div class="tile__prices">
        

        <span class="tile__price tile__price--original">
          $25.00
        </span>
      </div>
    </div>

    
      





<div class="tile__options">
  <div class="tile__option-color">
    
      
        
          
            
              <div class="tile__option-values tile__option-values--align tile__option-values--center">
                

                

                

                
                  

                  
                    
                      
                        <div class="tile__option-color__value">
                          <div class="color-swatch color-swatch--tile color-swatch--medium ">
                            <input
                              id="variant-Black_21ccb8e0-2f35-41a5-8d11-c549af348f82"
                              name="option1_2c6d18e4-1a13-4160-acbd-eba413e55503_8604"
                              type="radio"
                              value="Black"
                              data-index="option1_2c6d18e4-1a13-4160-acbd-eba413e55503_8604"
                              data-product="single-option"
                              data-product-option-type="COLOR"
                              class="color-swatch__input"
                              checked
                            >
                            <label
                              for="variant-Black_21ccb8e0-2f35-41a5-8d11-c549af348f82"
                              class="color-swatch__label"
                              title="Black"
                              src-first="https://imgproxy.fourthwall.com/Fvo5Mw1bZUlDQvaZJ6lNffEz_XTl81aLbohD3WXhKko/w:720/sm:1/enc/ZWY5OGUzMWY5OGNm/ZTc5MuM5rDOq43No/aWRJIxomTrAGG9bW/M08V_z_l1Quqzksl/-8pvV0e9iYfIm78f/Q9wvlbSAwZvQ7aS7/fR6j5bmj9WrjW1h1/RMNh58bBKyQmPODt/VwU2trfVUWAPkBYU/mDcOS9L1hoTXyl_h/IJC5AUuRqOdHkPv2/CjSuFlZq89hKtxqr/GLZcJ89mYh5R5vqp/Be5U77ovHMg-gLT6/znKYp2y2fGY.webp"
                              src-secondary="https://imgproxy.fourthwall.com/ojw4pEMZAnqAFz-OfQk22mgs7CBwIuTyXt6xd992vxE/w:720/sm:1/enc/MGZjYWRhOWZjNzE2/YTg2Yej-wpddmKfh/YCRMj-FPACozsKrV/kfRVeaiAqCV2KXoE/cZ-pSiJZnXKMeO9z/OvlbYXBfeixsLDSO/iFbc0WuzJK841_cZ/pik_-xZzLY_1VfwA/x_rQE00DZ5PaIRqC/aPBr628rzmTVcNOJ/XMFfgmmTGxyOY1iA/dqKRQ6b2Q1twdZdQ/dxoJJtQ6-4PaGMBh/z79xlZQBtJuMVEF1/94_LQBMj2nk.webp"
                              data-tile-color="1"
                            >
                              <span
                                class="color-swatch__color"
                                style="background-color:#080808;"
                              >
                              </span>
                            </label>
                          </div>
                        </div>
                        
                        
                  

                  
                
                  

                  
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                        <div class="tile__option-color__value">
                          <div class="color-swatch color-swatch--tile color-swatch--medium ">
                            <input
                              id="variant-Flo Blue_0a167f42-29d8-4e7c-8c8d-0fec2d8764b4"
                              name="option1_2c6d18e4-1a13-4160-acbd-eba413e55503_8604"
                              type="radio"
                              value="Flo Blue"
                              data-index="option1_2c6d18e4-1a13-4160-acbd-eba413e55503_8604"
                              data-product="single-option"
                              data-product-option-type="COLOR"
                              class="color-swatch__input"
                              
                            >
                            <label
                              for="variant-Flo Blue_0a167f42-29d8-4e7c-8c8d-0fec2d8764b4"
                              class="color-swatch__label"
                              title="Flo Blue"
                              src-first="https://imgproxy.fourthwall.com/KVnsjw01OO6jOvn2V159IC-Yy1iAFNRu1x16MWbphhU/w:720/sm:1/enc/MTVmMTljYjQyZmY5/MDRlNWoNa30CHwCK/v5fPZ1fIJ3GXR7Ph/epsXZJWOqei40ABJ/Rnevk5pome7MG566/sDtusRitX3oWR2W-/4w7Ade6SCbTTd50Z/yZdeNoIXgk4j7Y0G/8jHNESeJZ2SVxVRn/9lUgk94FSBnv63Bw/I4fS9YGMepcBOb1a/pw5YHsEw9bAOwAao/8kOfu1S60yixo7O_/LzKM6kzk8W6kh87F/HYJ84AF370M.webp"
                              src-secondary="https://imgproxy.fourthwall.com/HEPfWKywuJ1DPgpn_dBmKjVpCAZr2hX8qXDaLvn1U9M/w:720/sm:1/enc/OGQzNDYxMDQ1YzA1/YzU2OeKeXMA65O1h/msHYkr7p7b8ZrT7p/5pCv7nTU_s33Cx-E/J40jE5RERdiUku8T/WWR3IhU6Ok-uzIbG/UlDUGGYZqElpsfc6/QysiXIaIS-QL0kqj/kh4C-m6BoDGLcGay/IBN5NPqkBzlS1nAF/_8rX5gP8ZC83qEJi/sodVZJgHnZ69nAUM/zHWUWdvXngDotBsX/Sr0pNBdAFYm3doeG/sqCeev1QMp8.webp"
                              data-tile-color="1"
                            >
                              <span
                                class="color-swatch__color"
                                style="background-color:#5669be;"
                              >
                              </span>
                            </label>
                          </div>
                        </div>
                        
                        
                  

                  
                
                  

                  
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                        <div class="tile__option-color__value">
                          <div class="color-swatch color-swatch--tile color-swatch--medium ">
                            <input
                              id="variant-Pepper_19f38527-0a29-4ce2-994a-4fc81397c81d"
                              name="option1_2c6d18e4-1a13-4160-acbd-eba413e55503_8604"
                              type="radio"
                              value="Pepper"
                              data-index="option1_2c6d18e4-1a13-4160-acbd-eba413e55503_8604"
                              data-product="single-option"
                              data-product-option-type="COLOR"
                              class="color-swatch__input"
                              
                            >
                            <label
                              for="variant-Pepper_19f38527-0a29-4ce2-994a-4fc81397c81d"
                              class="color-swatch__label"
                              title="Pepper"
                              src-first="https://imgproxy.fourthwall.com/fo4sivEt9gLWyhR1MppBgY0ChyEZACDoLFTxlPLO6o0/w:720/sm:1/enc/NGMyMjA1NTBjZGNk/MGU4MeK8VwmUHEgx/6DIr_RIsq7GAEXku/2RBS_LMh4O-vkZP4/xN-XLxhO3zsIK8dD/fC7GYzB8rpHMVBuz/Vr4IGrpl8EV7qjUh/UJeSSaAK8A209-g4/321girJxzFR1UqmX/GCJN69n9XzgpAQf6/tAJNRZqr_skPZQQD/gZTuj8HT3VsbVXYB/zqmUs8eJVJ5JJp_P/_w1_bgxfp5snY4kA/yi96TARbywo.webp"
                              src-secondary="https://imgproxy.fourthwall.com/m8rwP4cmmtXI-Ai8iuZ2Npre--1V-RIaPZKldB_UqjE/w:720/sm:1/enc/MTg3ODVhNGJkODVh/MDkxMUnBwhKf2Lxn/lONG961dQ_t4Ttwb/GjLYu_WZkw1UYVLp/6yzpX6ofktzKRTdV/ZW_46TOwOLDadVIt/vn4wupkPObRsscZ6/L__k1rou2Gov6Yj7/4RRaTvE1iioFTf17/a9S8E5hEMy4vbQZl/LPgBnh6jkNGW5UXm/LAhlYFlUq2EtaMYH/vaTwiDC_yPL_43nj/_TJuQOUpUoOPe_Yh/_UlJfIXJAWk.webp"
                              data-tile-color="1"
                            >
                              <span
                                class="color-swatch__color"
                                style="background-color:#514f4c;"
                              >
                              </span>
                            </label>
                          </div>
                        </div>
                        
                        
                  

                  
                
                  

                  
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                    
                      
                        <div class="tile__option-color__value">
                          <div class="color-swatch color-swatch--tile color-swatch--medium ">
                            <input
                              id="variant-Violet_f05131b0-8d19-4f38-a0b6-c84b01d98478"
                              name="option1_2c6d18e4-1a13-4160-acbd-eba413e55503_8604"
                              type="radio"
                              value="Violet"
                              data-index="option1_2c6d18e4-1a13-4160-acbd-eba413e55503_8604"
                              data-product="single-option"
                              data-product-option-type="COLOR"
                              class="color-swatch__input"
                              
                            >
                            <label
                              for="variant-Violet_f05131b0-8d19-4f38-a0b6-c84b01d98478"
                              class="color-swatch__label"
                              title="Violet"
                              src-first="https://imgproxy.fourthwall.com/zTIwD09mxjgu-YMZkpOLToqV0Wo3gSFBg9PfZE-eTyQ/w:720/sm:1/enc/NzQzMDcxNmM3Mjk3/ZGZhMbafOQwFpE8k/WOrgqc5defEl23bG/ET_GnUTygMzdUI-X/Pz0gAhSC9HkjZwuu/ZdIxuVop-izgCOHm/wPUNjE-pnnp-XKwa/RmxShpI2r6JKIsJL/I7e2i9LVwMe43fHY/e7rQYFVSvi1s8U1B/1FVwIjBAErTnjKSv/SvTaXG5GYa0iuNSv/l9fzn9Z3NL5HVR5b/v4I2lrNfWcSrZXui/RzPe4G38NbY.webp"
                              src-secondary="https://imgproxy.fourthwall.com/YewwaQwXgSs1G-lKy5Ef9-ZLXiOOhEceAIr3O7EgO5E/w:720/sm:1/enc/NzFhMTY2ZGY0ZDlh/ZTU0YfqvBa9rpDvP/KtI33xT91ZfH3ICc/-MKuau7oWNPPBUxU/5UZmdPxYl2yFwLBc/NbMWkXIXkYVZzPmR/af5mcBGvfOrVG6I7/yXHDRLRBbRb-SMoC/NpIE6qQG8Ot9z3-V/QfwC1HtwIOxXuKiO/r2ASJeldp9F97ZUj/6wGqLTw4wef9hZ9C/eEa6YxzOBfCv_1An/8TKnpHryVYFQxg4K/Ndw-g7amXqo.webp"
                              data-tile-color="1"
                            >
                              <span
                                class="color-swatch__color"
                                style="background-color:#9a8ad2;"
                              >
                              </span>
                            </label>
                          </div>
                        </div>
                        
                        
                  

                  
                
              </div>
            
          
        
          
        
      
    
      
    
  </div>
</div>
    
  </a>
</div>

              </div>
            
              <div class="grid__column grid__column--6 grid__column--4@md">
                








<div class="product-tile" data-testid="product" data-product-available="true" data-id="8604">
  <a href="/products/launch-sweat" class="tile tile--zoom">
    <div class="tile__image">
      <div class="image image--background-color">
        <div class="image__badges">
          
            
          

          
        </div>

        <div class="image__object">
          
            
            
              
                
              
            
              
            
            
              
              
              
                <img
                  src="https://imgproxy.fourthwall.com/zeChlH-wQgjoxOVsm0rp3jO9huBJvIgVc-geaM9qeZo/w:720/sm:1/enc/OWY4ZWM5MGIzZmRi/OWFlZMSNSr7XHsd_/GLnG0PHGkJ61gkAT/_VMVFVDC86aZWtWG/1IO7NE4DFKyY_p60/kuN3y5tvbiPsrnV2/Kn8oFZhoqrr-QjSX/HcKnq0MedCcj2oHV/Ovv8AKvutewlK-_N/Wr7vhQP4ZODS958E/dSgvh14jjPCreFXU/05n94RMlhPF-6rDN/PvLFA6ypbVHlGl6M/jYnlAE315KGpzN3e/p43VgDVIFs4.webp"
                  alt="Launch sweat product image (1)"
                  class="tile__item tile__item--1"
                >
              
                <img
                  src="https://imgproxy.fourthwall.com/PGkpwWASJ5Jn1VJmG36bgPNAB_QzdMroSjMrVlLfpQE/w:720/sm:1/enc/ZGNmNmZhMWJmNmIw/YTY5MCXlXSqgvkCS/ylTzcX_t89d2O5lx/jKp5NdWXNj06dAQV/KMgfEchmFZi-q-S5/oGD-Q8loY08kHJ45/vKq0vsKOrjlOHDhh/EzCDezB0WOU3OrCg/4wqCXqN4P8MsB-T_/fyO5CvMB9bkRFNmY/e0WAK7s7KCqZDNkc/poK-6DlzWpFTMLDx/jZvDk9knI-5POSUy/ooWzfL4Wp9ECXN1H/sA5l3TNYzEc.webp"
                  alt="Launch sweat product image (2)"
                  class="tile__item tile__item--2"
                >
              
            
          
        </div>
      </div>
    </div>
  
    <div class="tile__description">
      <h3 class="tile__heading">
        Launch sweat
      </h3>

      <div class="tile__prices">
        

        <span class="tile__price tile__price--original">
          $34.00
        </span>
      </div>
    </div>

    
      





<div class="tile__options">
  <div class="tile__option-color">
    
      
        
          
            
          
        
          
        
      
    
      
    
  </div>
</div>
    
  </a>
</div>

              </div>
            
              <div class="grid__column grid__column--6 grid__column--4@md">
                








<div class="product-tile" data-testid="product" data-product-available="true" data-id="8604">
  <a href="/products/launch-hat" class="tile tile--zoom">
    <div class="tile__image">
      <div class="image image--background-color">
        <div class="image__badges">
          
            
          

          
        </div>

        <div class="image__object">
          
            
            
              
                
              
            
              
            
            
              
              
              
                <img
                  src="https://imgproxy.fourthwall.com/s1-t5cSA6fuYxRvFz1KdD9OVaDO9U5u3JzdObe2eCRs/w:720/sm:1/enc/MDcxODAzZDA2YWVj/NWZkNxac9zBiIG0E/D0mLyI9IrdFREhm6/QeAzBxfzZcZeK0De/4MjFgA7_uZ9K6-wU/1p0MOW_JGCwS-Y9_/Eh73NSH__gOEHjHy/p0uUqviZjel6k7vi/OHe1ZkatjjfjbN-8/r2NwLSpVfvUnmdE6/s5_1Y4XvzlB1Alny/RPbwNvfaw-uPfFc-/lH677XFcPhkmPw7C/85MiV3FyEjYh44bn/hm6iEEYqeAY.webp"
                  alt="Launch hat product image (1)"
                  class="tile__item tile__item--1"
                >
              
                <img
                  src="https://imgproxy.fourthwall.com/IKKCywQcnOHRfgx_ZxqhP2m0tQT56kW_tpe16woC5lg/w:720/sm:1/enc/OGY0ZGQxODRhNDU3/OGFlNnZTJ3lJ9Fbz/5T6I9DGv8-xbDFyM/KYnMlmBeT0Zilnbh/1DoROoM7oRhDVXSC/K32ChqCOpWhEuDEh/vwEftAP-cw6_IKEd/fvW0zv2MenU4HaM-/sgi2esrfecfQcYoe/kZODVlcDVEtxlg18/GrzCl3I39PtU9vDA/QfVEIyTcdB-66Chj/DIUSPJ9ZJN7b3kn4/SyxxCXGWqt2VfWkj/wQ-YdqMN6g8.webp"
                  alt="Launch hat product image (2)"
                  class="tile__item tile__item--2"
                >
              
            
          
        </div>
      </div>
    </div>
  
    <div class="tile__description">
      <h3 class="tile__heading">
        Launch hat
      </h3>

      <div class="tile__prices">
        

        <span class="tile__price tile__price--original">
          $23.00
        </span>
      </div>
    </div>

    
      





<div class="tile__options">
  <div class="tile__option-color">
    
      
        
          
            
          
        
          
        
      
    
      
    
  </div>
</div>
    
  </a>
</div>

              </div>
            
          </div>
        </div>

        
      </div>
    </div>
  </div>
</section>


</div><div id="fw-section-links-list-1722978608" class="fw-section"><section
  data-section-id="fw-section-links-list-1722978608"
  data-section-type="link-list"
  class="link-list link-list--fw-section-links-list-1722978608"
>
  <div class="link-list__inner">
    <div class="container wrapper">
      
        <div class="link-list__header link-list__header--center">
          <h2 class="link-list__heading">
            Handy links
          </h2>

          
        </div>
      
      <div class="link-list__container link-list__container--single-column">
        <div class="link-list__cta-container link-list__cta-container--single-column">
          
            
                <div class="link-list__cta">
                  <a href="https://www.fourthwall.com" class="button button--primary button--expand" target="_blank">
                    
                    Text
                  </a>
                </div>
            
          
        </div>
      </div>
    </div>
  </div>
</section>

</div><div id="fw-section-recent-posts-1722978624" class="fw-section">












<section recent-posts-ref data-section-id="fw-section-recent-posts-1722978624" data-testid="main.single.section" class="recent-posts recent-posts--fw-section-recent-posts-1722978624">
  <div class="container wrapper">
    <div class="recent-posts__inner">
      <div class="recent-posts__header">
        <div class="section-header">
          <h2 class="section-header__heading">Recent posts</h2>

          
            <div class="section-header__cta">
              <a href="/supporters" class="button button--outline button--small">
                Browse all
              </a>
            </div>
          
        </div>
      </div>

      <div class="recent-posts__grid">
        <div class="grid grid--waffle">
          
            
            

            

            
              <p class="post-tile__empty hidden" data-posts="none">No posts were found. Try adding posts or changing the section filters.</p>
            
          

          
            <p class="post-tile__empty hidden" data-posts="none">Please add posts on your Memberships feed.</p>
          

          
            <div class="grid__column grid__column--12 grid__column--6@sm grid__column--4@md" data-post-tile-skeleton>
              <div class="post-tile skeleton" data-post-type="Skeleton" data-post-tile-height>
  <a class="post-tile__link" href="/"></a>
  <div class="post-tile__container" data-post-tile-container-height>
    <div class="post-tile__image-container">
      
        <div class="post-tile__image">
          <div class="image image--video-thumbnail">
            <div class="image__object">
              
                <div class="post-tile__images post-tile__images--MISSING images.size">
                  
                </div>
              
            </div>
          </div>
        </div>
      

      <div class="post-tile__locked">
        <div class="button button--primary button--large">
          <svg class="svg-fill-current-color" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 7.5V5C4 4.07174 4.42143 3.1815 5.17157 2.52513C5.92172 1.86875 6.93913 1.5 8 1.5C9.06087 1.5 10.0783 1.86875 10.8284 2.52513C11.5786 3.1815 12 4.07174 12 5V7.5M8.17188 10.4844V13.2344M1.5 7.5H14.5V16.5H1.5001L1.5 7.5Z" stroke="currentColor" stroke-width="2"/>
</svg>

          
            Upgrade
          
        </div>
      </div>
    </div>

    <div class="post-tile__content">
      <div class="post-tile__header">
        
        
        
        
        
        
        

        

        <div class="post-tile__date"></div>

        <h4 class="post-tile__title-post">
          
        </h4>
      </div>

      
        
          <div class="post-tile__options" data-poll-status="MISSING status">
            
            

            <div class="post-tile__total-votes">
              <span>0 votes</span>
              <span>Final results</span>
            </div>

            
            
            
            
            
            
            
            

            

            

            

            <div class="post-tile__time">
              19967d 18 hours left
            </div>
          </div>
        
      

      <div class="post-tile__text">
        
          <div class="html-formatter">
            
          </div>
        

        <div class="post-tile__text--overlay hidden" data-post-tile-text-overlay>
          <p>...Continue reading</p>

          <div class="post-tile__feedback">
            <div class="post-tile__feedback-container">
              <div class="post-tile__item">
                <span class="post-tile__icon post-tile__icon--like">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18.748L2.00975 9.85845C0.571111 8.32335 0.214311 5.97875 1.12386 4.03706C1.80367 2.58739 3.09531 1.57463 4.59531 1.31512C6.09532 1.0556 7.62084 1.58097 8.69537 2.72712L10 4.11872L11.3046 2.72712C12.3792 1.58097 13.9047 1.0556 15.4047 1.31512C16.9047 1.57463 18.1963 2.58739 18.8761 4.03706C19.7857 5.97875 19.4289 8.32335 17.9902 9.85845L10 18.748Z" stroke="currentColor"/>
  </g>
</svg>
                </span>
                <span class="post-tile__count">MISSING likes_count</span>
              </div>

              <div class="post-tile__item">
                <span class="post-tile__icon post-tile__icon--comment">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g>
    <path d="M10 14.4593L4.375 18.75V14.4593C3.27752 14.4593 0.625 14.4593 0.625 14.4593V0.625L19.375 0.625047V14.4593H10Z" stroke="currentColor" stroke-linecap="round"/>
  </g>
</svg>

                </span>
                <span class="post-tile__count">MISSING comments_count</span>
              </div>
            </div>
          </div>
        </div>

        <div class="post-tile__feedback post-tile__feedback--space">
          <div class="post-tile__feedback-container">
            <div class="post-tile__item">
              <span class="post-tile__icon post-tile__icon--like">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18.748L2.00975 9.85845C0.571111 8.32335 0.214311 5.97875 1.12386 4.03706C1.80367 2.58739 3.09531 1.57463 4.59531 1.31512C6.09532 1.0556 7.62084 1.58097 8.69537 2.72712L10 4.11872L11.3046 2.72712C12.3792 1.58097 13.9047 1.0556 15.4047 1.31512C16.9047 1.57463 18.1963 2.58739 18.8761 4.03706C19.7857 5.97875 19.4289 8.32335 17.9902 9.85845L10 18.748Z" stroke="currentColor"/>
  </g>
</svg>
              </span>
              <span class="post-tile__count">MISSING likes_count</span>
            </div>

            <div class="post-tile__item">
              <span class="post-tile__icon post-tile__icon--comment">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g>
    <path d="M10 14.4593L4.375 18.75V14.4593C3.27752 14.4593 0.625 14.4593 0.625 14.4593V0.625L19.375 0.625047V14.4593H10Z" stroke="currentColor" stroke-linecap="round"/>
  </g>
</svg>

              </span>
              <span class="post-tile__count">MISSING comments_count</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
            </div>
          
            <div class="grid__column grid__column--12 grid__column--6@sm grid__column--4@md" data-post-tile-skeleton>
              <div class="post-tile skeleton" data-post-type="Skeleton" data-post-tile-height>
  <a class="post-tile__link" href="/"></a>
  <div class="post-tile__container" data-post-tile-container-height>
    <div class="post-tile__image-container">
      
        <div class="post-tile__image">
          <div class="image image--video-thumbnail">
            <div class="image__object">
              
                <div class="post-tile__images post-tile__images--MISSING images.size">
                  
                </div>
              
            </div>
          </div>
        </div>
      

      <div class="post-tile__locked">
        <div class="button button--primary button--large">
          <svg class="svg-fill-current-color" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 7.5V5C4 4.07174 4.42143 3.1815 5.17157 2.52513C5.92172 1.86875 6.93913 1.5 8 1.5C9.06087 1.5 10.0783 1.86875 10.8284 2.52513C11.5786 3.1815 12 4.07174 12 5V7.5M8.17188 10.4844V13.2344M1.5 7.5H14.5V16.5H1.5001L1.5 7.5Z" stroke="currentColor" stroke-width="2"/>
</svg>

          
            Upgrade
          
        </div>
      </div>
    </div>

    <div class="post-tile__content">
      <div class="post-tile__header">
        
        
        
        
        
        
        

        

        <div class="post-tile__date"></div>

        <h4 class="post-tile__title-post">
          
        </h4>
      </div>

      
        
          <div class="post-tile__options" data-poll-status="MISSING status">
            
            

            <div class="post-tile__total-votes">
              <span>0 votes</span>
              <span>Final results</span>
            </div>

            
            
            
            
            
            
            
            

            

            

            

            <div class="post-tile__time">
              19967d 18 hours left
            </div>
          </div>
        
      

      <div class="post-tile__text">
        
          <div class="html-formatter">
            
          </div>
        

        <div class="post-tile__text--overlay hidden" data-post-tile-text-overlay>
          <p>...Continue reading</p>

          <div class="post-tile__feedback">
            <div class="post-tile__feedback-container">
              <div class="post-tile__item">
                <span class="post-tile__icon post-tile__icon--like">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18.748L2.00975 9.85845C0.571111 8.32335 0.214311 5.97875 1.12386 4.03706C1.80367 2.58739 3.09531 1.57463 4.59531 1.31512C6.09532 1.0556 7.62084 1.58097 8.69537 2.72712L10 4.11872L11.3046 2.72712C12.3792 1.58097 13.9047 1.0556 15.4047 1.31512C16.9047 1.57463 18.1963 2.58739 18.8761 4.03706C19.7857 5.97875 19.4289 8.32335 17.9902 9.85845L10 18.748Z" stroke="currentColor"/>
  </g>
</svg>
                </span>
                <span class="post-tile__count">MISSING likes_count</span>
              </div>

              <div class="post-tile__item">
                <span class="post-tile__icon post-tile__icon--comment">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g>
    <path d="M10 14.4593L4.375 18.75V14.4593C3.27752 14.4593 0.625 14.4593 0.625 14.4593V0.625L19.375 0.625047V14.4593H10Z" stroke="currentColor" stroke-linecap="round"/>
  </g>
</svg>

                </span>
                <span class="post-tile__count">MISSING comments_count</span>
              </div>
            </div>
          </div>
        </div>

        <div class="post-tile__feedback post-tile__feedback--space">
          <div class="post-tile__feedback-container">
            <div class="post-tile__item">
              <span class="post-tile__icon post-tile__icon--like">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18.748L2.00975 9.85845C0.571111 8.32335 0.214311 5.97875 1.12386 4.03706C1.80367 2.58739 3.09531 1.57463 4.59531 1.31512C6.09532 1.0556 7.62084 1.58097 8.69537 2.72712L10 4.11872L11.3046 2.72712C12.3792 1.58097 13.9047 1.0556 15.4047 1.31512C16.9047 1.57463 18.1963 2.58739 18.8761 4.03706C19.7857 5.97875 19.4289 8.32335 17.9902 9.85845L10 18.748Z" stroke="currentColor"/>
  </g>
</svg>
              </span>
              <span class="post-tile__count">MISSING likes_count</span>
            </div>

            <div class="post-tile__item">
              <span class="post-tile__icon post-tile__icon--comment">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g>
    <path d="M10 14.4593L4.375 18.75V14.4593C3.27752 14.4593 0.625 14.4593 0.625 14.4593V0.625L19.375 0.625047V14.4593H10Z" stroke="currentColor" stroke-linecap="round"/>
  </g>
</svg>

              </span>
              <span class="post-tile__count">MISSING comments_count</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
            </div>
          
            <div class="grid__column grid__column--12 grid__column--6@sm grid__column--4@md" data-post-tile-skeleton>
              <div class="post-tile skeleton" data-post-type="Skeleton" data-post-tile-height>
  <a class="post-tile__link" href="/"></a>
  <div class="post-tile__container" data-post-tile-container-height>
    <div class="post-tile__image-container">
      
        <div class="post-tile__image">
          <div class="image image--video-thumbnail">
            <div class="image__object">
              
                <div class="post-tile__images post-tile__images--MISSING images.size">
                  
                </div>
              
            </div>
          </div>
        </div>
      

      <div class="post-tile__locked">
        <div class="button button--primary button--large">
          <svg class="svg-fill-current-color" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4 7.5V5C4 4.07174 4.42143 3.1815 5.17157 2.52513C5.92172 1.86875 6.93913 1.5 8 1.5C9.06087 1.5 10.0783 1.86875 10.8284 2.52513C11.5786 3.1815 12 4.07174 12 5V7.5M8.17188 10.4844V13.2344M1.5 7.5H14.5V16.5H1.5001L1.5 7.5Z" stroke="currentColor" stroke-width="2"/>
</svg>

          
            Upgrade
          
        </div>
      </div>
    </div>

    <div class="post-tile__content">
      <div class="post-tile__header">
        
        
        
        
        
        
        

        

        <div class="post-tile__date"></div>

        <h4 class="post-tile__title-post">
          
        </h4>
      </div>

      
        
          <div class="post-tile__options" data-poll-status="MISSING status">
            
            

            <div class="post-tile__total-votes">
              <span>0 votes</span>
              <span>Final results</span>
            </div>

            
            
            
            
            
            
            
            

            

            

            

            <div class="post-tile__time">
              19967d 18 hours left
            </div>
          </div>
        
      

      <div class="post-tile__text">
        
          <div class="html-formatter">
            
          </div>
        

        <div class="post-tile__text--overlay hidden" data-post-tile-text-overlay>
          <p>...Continue reading</p>

          <div class="post-tile__feedback">
            <div class="post-tile__feedback-container">
              <div class="post-tile__item">
                <span class="post-tile__icon post-tile__icon--like">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18.748L2.00975 9.85845C0.571111 8.32335 0.214311 5.97875 1.12386 4.03706C1.80367 2.58739 3.09531 1.57463 4.59531 1.31512C6.09532 1.0556 7.62084 1.58097 8.69537 2.72712L10 4.11872L11.3046 2.72712C12.3792 1.58097 13.9047 1.0556 15.4047 1.31512C16.9047 1.57463 18.1963 2.58739 18.8761 4.03706C19.7857 5.97875 19.4289 8.32335 17.9902 9.85845L10 18.748Z" stroke="currentColor"/>
  </g>
</svg>
                </span>
                <span class="post-tile__count">MISSING likes_count</span>
              </div>

              <div class="post-tile__item">
                <span class="post-tile__icon post-tile__icon--comment">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g>
    <path d="M10 14.4593L4.375 18.75V14.4593C3.27752 14.4593 0.625 14.4593 0.625 14.4593V0.625L19.375 0.625047V14.4593H10Z" stroke="currentColor" stroke-linecap="round"/>
  </g>
</svg>

                </span>
                <span class="post-tile__count">MISSING comments_count</span>
              </div>
            </div>
          </div>
        </div>

        <div class="post-tile__feedback post-tile__feedback--space">
          <div class="post-tile__feedback-container">
            <div class="post-tile__item">
              <span class="post-tile__icon post-tile__icon--like">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 18.748L2.00975 9.85845C0.571111 8.32335 0.214311 5.97875 1.12386 4.03706C1.80367 2.58739 3.09531 1.57463 4.59531 1.31512C6.09532 1.0556 7.62084 1.58097 8.69537 2.72712L10 4.11872L11.3046 2.72712C12.3792 1.58097 13.9047 1.0556 15.4047 1.31512C16.9047 1.57463 18.1963 2.58739 18.8761 4.03706C19.7857 5.97875 19.4289 8.32335 17.9902 9.85845L10 18.748Z" stroke="currentColor"/>
  </g>
</svg>
              </span>
              <span class="post-tile__count">MISSING likes_count</span>
            </div>

            <div class="post-tile__item">
              <span class="post-tile__icon post-tile__icon--comment">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g>
    <path d="M10 14.4593L4.375 18.75V14.4593C3.27752 14.4593 0.625 14.4593 0.625 14.4593V0.625L19.375 0.625047V14.4593H10Z" stroke="currentColor" stroke-linecap="round"/>
  </g>
</svg>

              </span>
              <span class="post-tile__count">MISSING comments_count</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
            </div>
          
        </div>
      </div>
    </div>
  </div>
</section>

<script type="text/javascript">var design_mode=false;<\/script>

</div><div id="fw-section-tiers-1722978619" class="fw-section"><section data-testid="main.single.section" data-section-id="fw-section-tiers-1722978619" class="tiers" id="tiers">
  <div class="tiers__inner">
    <div class="container wrapper">
      
        
          
            <div class="tiers__header">
              <h2 class="tiers__heading">Become a member</h2>
            </div>
          

          
            <div class="tiers__alternative-text">
              <a href="/supporters/sign_up">Start with a free account</a>
            </div>
          

          <div class="tiers__container tiers__container--two-columns">
            
              <div class="tiers__tier">
                <div class="tiers__tier-heading">
                  

                  <h3 class="tiers__tier-title">
                    basic
                  </h3>
                </div>

                

                <p class="tiers__tier-price">
                  
                    $20.00 per month
                  
                </p>

                

                <div class="tiers__tier-cta">
                  <a
                    href="/supporters/payments/checkout?plan=plan_91ErwWXR2pV5t6EDlg657k4p"
                    class="button button--primary button--small button--expand"
                  >
                    Join now
                  </a>
                </div>

                

                

                
                  <div class="tiers__tier-description">
                    basic tier
                  </div>
                

                
              </div>
            
              <div class="tiers__tier">
                <div class="tiers__tier-heading">
                  

                  <h3 class="tiers__tier-title">
                    premium
                  </h3>
                </div>

                

                <p class="tiers__tier-price">
                  
                    $40.00 per month
                  
                </p>

                

                <div class="tiers__tier-cta">
                  <a
                    href="/supporters/payments/checkout?plan=plan_QVE5pxab2K9XtpzXljG604OY"
                    class="button button--primary button--small button--expand"
                  >
                    Join now
                  </a>
                </div>

                

                

                
                  <div class="tiers__tier-description">
                    premium tier
                  </div>
                

                
              </div>
            
          </div>
        
      
    </div>
  </div>
</section>

<div data-modal="tiers" class="modal hidden">
  <div class="modal__background" data-modal-trigger-close="tiers"></div>
  <div data-modal-content="tiers" class="modal__content modal__content--gift modal__content--large hidden">
    <button data-modal-trigger-close="tiers" class="modal__close">
      <svg class="svg-fill-current-color" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.25 18.75L18.75 1.25M18.75 18.75L1.25 1.25" vector-effect="non-scaling-stroke" stroke="currentColor" stroke-width="1.5" stroke-linejoin="bevel"/>
</svg>

    </button>
    <div class="tiers-modal__content-inner">
      <div class="tiers-modal__gift">
        <div class="tiers-modal__section">
          <div class="tiers-modal__header">
            <p class="tiers-modal__title">Gift <span data-gift-tier="name"></span> membership</p>
            <p class="tiers-modal__text">Your gift will be given away live at <span><a href=""></a>!</span></p>
          </div>
        </div>
        <form
          action="/giveaways"
          method="post"
          data-turbo="false"
          class="tiers-modal__checkout-form"
          data-gift-tier="form"
        >
          <div class="tiers-modal__section">
            <div class="tiers-modal__item-info">
              <div class="tiers-modal__options-container" data-gift-tier="options">
                <p>Subscription length:</p>
                <div class="tiers-modal__options">
                  <input name="id" type="radio" id="monthly" class="tiers-modal__option-input hidden" data-gift-tier-monthly-price data-gift-tier="price-input">
                  <label for="monthly" class="tiers-modal__option-label">
                    <span>1 month</span>
                    <span id="monthly-price" class="tiers-modal__option-price" data-gift-tier="price-span"></span>
                  </label>
                  <input name="id" type="radio" id="annual" class="tiers-modal__option-input hidden" data-gift-tier-annual-price data-gift-tier="price-input">
                  <label for="annual" class="tiers-modal__option-label">
                    <span>1 year</span>
                    <span id="annual-price" class="tiers-modal__option-price" data-gift-tier="price-span"></span>
                  </label>
                </div>
              </div>
              <div class="tiers-modal__quantity">
                <p>Number of gifts:</p> 
                <div class="tiers-modal__quantity-container">
                  <div
                    data-select="container"
                    class="select-field select-field--base select-field--quantity select-field--non-transparent select-field--rounded select-field--expand"
                  >
                    <select data-gift-tier="quantity" name="quantity" class="select-field__select" data-trigger-input="more">
                      
                        
                          <option value="1">1</option>
                        
                      
                        
                          <option value="2">2</option>
                        
                      
                        
                          <option value="3">3</option>
                        
                      
                        
                          <option value="4">4</option>
                        
                      
                        
                          <option value="5">5</option>
                        
                      
                        
                          <option value="6">6</option>
                        
                      
                        
                          <option value="7">7</option>
                        
                      
                        
                          <option value="8">8</option>
                        
                      
                        
                          <option value="9">9</option>
                        
                      
                        
                          <option value="more">10+</option>
                        
                      
                    </select>
                    <span class="select-field__dropdown-icon">
                      <svg class="svg-fill-current-color" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
</svg>
                    </span>
                  </div>
                  <div
                    data-select-input="more"
                    class="input-field input-field--base input-field--quantity input-field--rounded input-field--expand hidden"
                  >
                    <input data-gift-tier="quantity" type="number" min="1" class="input-field__input" placeholder="Qty">
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="tiers-modal__section">
            <div class="tiers-modal__cta">
              <div class="tiers-modal__cta-item">
                <a 
                  href="#" 
                  class="tiers-modal__cancel"
                  data-modal-trigger-close="tiers"
                >
                  Cancel
                </a>
              </div>

              <div class="tiers-modal__checkout">
                <button
                  type="submit"
                  name="checkout"
                  class="button button--primary button--expand"
                >
                  Checkout <span data-gift-tier="total-price"></span>
                </button>
              </div>
            </div>
          </div>
          <p data-gift-tier="error" class="tiers-modal__error">Please choose the quantity.</p>
        </form>
      </div>
    </div>
  </div>
</div>

</div><div id="fw-section-donations-1722978641" class="fw-section">




<section data-section-id="fw-section-donations-1722978641" data-testid="main.single.section" class="donations donations--fw-section-donations-1722978641">
  <div class="donations__inner">
    <div class="container container--10 wrapper">
      <div class="grid grid--middle">
        <div class="grid__column grid__column--12 grid__column--6@md">
          <div class="donations__info">
            <div class="donations__header">
              <h2 class="donations__heading">Thank you for your support!</h2>
            </div>
            
            <div class="donations__text">
              <p>Thank you so much for your support. Leave a message with your donation and I'll try to reply!</p>
            </div>
          </div>
        </div>

        <div class="grid__column grid__column--12 grid__column--6@md">
          <div class="donations__form-container">

            

            

            

            <div class="donation-form">
  <form class="form" data-donation="form" method="GET" action="/donation/">
    <div class="form__section">
      <div data-input="container" class="input-field input-field--icon input-field--no-bottom-border-radius">
        <div class="input-field__icon">
          <svg class="svg-fill-current-color" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.24999 4.25C4.24999 3.50832 4.46992 2.7833 4.88198 2.16661C5.29403 1.54993 5.8797 1.06928 6.56493 0.785453C7.25015 0.501625 8.00415 0.427362 8.73158 0.572057C9.45901 0.716751 10.1272 1.0739 10.6516 1.59835C11.1761 2.1228 11.5332 2.79098 11.6779 3.51841C11.8226 4.24584 11.7484 4.99984 11.4645 5.68506C11.1807 6.37029 10.7001 6.95596 10.0834 7.36801C9.46669 7.78007 8.74167 8 7.99999 8C7.00543 8 6.0516 7.60491 5.34834 6.90165C4.64508 6.19839 4.24999 5.24456 4.24999 4.25ZM15.4175 14.4125L14 11.57C13.6883 10.9479 13.2096 10.4248 12.6175 10.0592C12.0254 9.69365 11.3433 9.50002 10.6475 9.5H5.35249C4.65665 9.50002 3.97454 9.69365 3.38247 10.0592C2.7904 10.4248 2.31172 10.9479 1.99999 11.57L0.582489 14.4125C0.524956 14.5267 0.497565 14.6537 0.502916 14.7814C0.508266 14.9091 0.546182 15.0334 0.613061 15.1423C0.67994 15.2513 0.773563 15.3414 0.885038 15.404C0.996514 15.4666 1.12214 15.4996 1.24999 15.5H14.75C14.8778 15.4996 15.0035 15.4666 15.1149 15.404C15.2264 15.3414 15.32 15.2513 15.3869 15.1423C15.4538 15.0334 15.4917 14.9091 15.4971 14.7814C15.5024 14.6537 15.475 14.5267 15.4175 14.4125Z"/>
</svg>
        </div>

        <input 
          id="donation-name"
          name="donor"
          data-donation="name"
          data-input="input"
          class="input-field__input"
          required
        >

        <label 
          for="donation-name" 
          class="input-field__label"
        >
          Your Name
        </label>
      </div>
      <div data-form-error="name" class="form__error"></div>
    </div>

    <div class="form__section form__section--space-s">
      <div data-input="container" class="input-field input-field--icon input-field--textarea input-field--no-top-border-radius">
        <div class="input-field__icon input-field__icon--shift-up">
          <svg class="svg-fill-current-color" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.5 0.5H3.5C2.70435 0.5 1.94129 0.816071 1.37868 1.37868C0.816071 1.94129 0.5 2.70435 0.5 3.5V15.125C0.5 15.2245 0.539509 15.3198 0.609835 15.3902C0.680161 15.4605 0.775544 15.5 0.875 15.5C0.924048 15.4997 0.972542 15.4896 1.01763 15.4703C1.06271 15.451 1.10347 15.4228 1.1375 15.3875L3.3875 13.1375C3.60075 12.9299 3.85308 12.7666 4.12987 12.6572C4.40667 12.5478 4.70242 12.4943 5 12.5H12.5C13.2957 12.5 14.0587 12.1839 14.6213 11.6213C15.1839 11.0587 15.5 10.2957 15.5 9.5V3.5C15.5 2.70435 15.1839 1.94129 14.6213 1.37868C14.0587 0.816071 13.2957 0.5 12.5 0.5ZM5.75 6.875C5.75 6.97446 5.71049 7.06984 5.64017 7.14017C5.56984 7.21049 5.47446 7.25 5.375 7.25H4.625C4.52554 7.25 4.43016 7.21049 4.35984 7.14017C4.28951 7.06984 4.25 6.97446 4.25 6.875V6.125C4.25 6.02554 4.28951 5.93016 4.35984 5.85984C4.43016 5.78951 4.52554 5.75 4.625 5.75H5.375C5.47446 5.75 5.56984 5.78951 5.64017 5.85984C5.71049 5.93016 5.75 6.02554 5.75 6.125V6.875ZM8.75 6.875C8.75 6.97446 8.71049 7.06984 8.64017 7.14017C8.56984 7.21049 8.47446 7.25 8.375 7.25H7.625C7.52555 7.25 7.43016 7.21049 7.35984 7.14017C7.28951 7.06984 7.25 6.97446 7.25 6.875V6.125C7.25 6.02554 7.28951 5.93016 7.35984 5.85984C7.43016 5.78951 7.52555 5.75 7.625 5.75H8.375C8.47446 5.75 8.56984 5.78951 8.64017 5.85984C8.71049 5.93016 8.75 6.02554 8.75 6.125V6.875ZM11.75 6.875C11.75 6.97446 11.7105 7.06984 11.6402 7.14017C11.5698 7.21049 11.4745 7.25 11.375 7.25H10.625C10.5255 7.25 10.4302 7.21049 10.3598 7.14017C10.2895 7.06984 10.25 6.97446 10.25 6.875V6.125C10.25 6.02554 10.2895 5.93016 10.3598 5.85984C10.4302 5.78951 10.5255 5.75 10.625 5.75H11.375C11.4745 5.75 11.5698 5.78951 11.6402 5.85984C11.7105 5.93016 11.75 6.02554 11.75 6.125V6.875Z"/>
</svg>

        </div>

        <textarea 
          id="donation-message"
          name="message"
          data-donation="message"
          data-input="input"
          rows="3"
          class="input-field__input"
          required
          maxlength="200"
        ></textarea>

        <label 
          for="donation-message" 
          class="input-field__label"
        >
          Message
        </label>
      </div>
      <div data-form-error="message" class="form__error"></div>
    </div>

    <div class="form__section">
      <div class="grid grid--waffle grid--small">
        
        <div class="grid__column grid__column--6 grid__column--3@sm">
          <div class="radio-button">
            <input 
              name="amount-radio"
              type="radio"
              id="amount1"
              data-donation="amount-radio"
              value="5.00"
              class="radio-button__input"
               checked
            >
            <label 
              for="amount1" 
              class="radio-button__label"
            >
              $5
            </label>
            <input type="hidden" name="donationOpts[]" value="5.00" />
          </div>
        </div>
        
        <div class="grid__column grid__column--6 grid__column--3@sm">
          <div class="radio-button">
            <input 
              name="amount-radio"
              type="radio"
              id="amount2"
              data-donation="amount-radio"
              value="10.00"
              class="radio-button__input"
              
            >
            <label 
              for="amount2" 
              class="radio-button__label"
            >
              $10
            </label>
            <input type="hidden" name="donationOpts[]" value="10.00" />
          </div>
        </div>
        
        <div class="grid__column grid__column--6 grid__column--3@sm">
          <div class="radio-button">
            <input 
              name="amount-radio"
              type="radio"
              id="amount3"
              data-donation="amount-radio"
              value="20.00"
              class="radio-button__input"
              
            >
            <label 
              for="amount3" 
              class="radio-button__label"
            >
              $20
            </label>
            <input type="hidden" name="donationOpts[]" value="20.00" />
          </div>
        </div>
        

        <div class="grid__column grid__column--6 grid__column--3@sm">
          <div 
            data-donation="amount-input-container"
            data-input="container" 
            class="input-field input-field--prefix input-field--as-button"
          >
            <input 
              id="donation-amount-custom"
              name="amount-custom" 
              type="number"
              data-donation="amount-input"
              data-input="input"
              class="input-field__input"
              min="1"
              step="0.01"
            >

            <label 
              for="donation-amount-custom" 
              class="input-field__label"
            >
              Custom
            </label>
            
            <span class="input-field__prefix">$</span>
          </div>
        </div>
      </div>
      <div data-form-error="amount" class="form__error"></div>
    </div>

    <div class="form__section">
      <input data-donation="amount" type="hidden" name="amount" value="" />
      <input type="hidden" name="currency" value="USD" />

      <button 
        type="submit"
        data-donation="submit"
        class="button button--primary button--expand"
      >
        Donate & Send Message
        <span class="button__spinner">
          <div class="spinner spinner--small"></div>
        </span>
      </button>
    </div>
  </form>
</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</div><div id="fw-section-recent-videos-1722978632" class="fw-section"><section data-section-id="fw-section-recent-videos-1722978632" data-testid="main.single.section" class="recent-videos recent-videos--fw-section-recent-videos-1722978632">
  <div class="container wrapper">
    
      <div class="recent-videos__header">
        <div class="section-header">
          <h2 class="section-header__heading">Recent videos</h2>

          <div class="section-header__cta">
            <a 
              href="https://www.youtube.com/channel/UCyEd6QBSgat5kkC6svyjudA" 
              target="_blank"
              class="button button--outline button--small"
            >
              Visit channel
            </a>
          </div>
        </div>
      </div>

      <div class="recent-videos__grid">
        <div class="grid grid--waffle">
          
            <div class="grid__column grid__column--12 grid__column--4@md">
              <div class="video-tile">
                <a 
                  href="https://www.youtube.com/watch?v=bgzyczSWOu8" 
                  target="_blank"
                  class="video-tile__link"
                >
                  <div class="video-tile__image-container">
                    <div class="video-tile__image">
                      <div class="image image--video-thumbnail">
                        <div class="image__object">
                          <img 
                            src="https://i.ytimg.com/vi/bgzyczSWOu8/maxresdefault.jpg"
                            alt="Unbelievable Japanese Food!! 🏔️ STONE BBQ in Mountains Japan!!"
                            class="image__image" 
                          />
                        </div>
                      </div>
                    </div>

                    <div class="video-tile__image-overlay"></div>

                    <div class="video-tile__icon">
                      <img 
                        src="https://themes.fourthwall.com/themes-library/assets/598a81c6-d784-4417-9e89-9d318ca84d97/assets/yt_icon.png?v=efb3f0dac77121383b036757455c96916485cb68e5d09739435912ddbd97086f" 
                        alt="Watch video"
                        class="video-tile__icon-image"
                      />
                    </div>
                  </div>

                  
                    <div class="video-tile__caption">
                      <h3 class="video-tile__title">
                        Unbelievable Japanese Food!! 🏔️ STONE BBQ in Mountains Japan!!
                      </h3>
                    </div>
                  
                </a>
              </div>
            </div>
          
            <div class="grid__column grid__column--12 grid__column--4@md">
              <div class="video-tile">
                <a 
                  href="https://www.youtube.com/watch?v=4MVYLU7UD94" 
                  target="_blank"
                  class="video-tile__link"
                >
                  <div class="video-tile__image-container">
                    <div class="video-tile__image">
                      <div class="image image--video-thumbnail">
                        <div class="image__object">
                          <img 
                            src="https://i.ytimg.com/vi/4MVYLU7UD94/maxresdefault.jpg"
                            alt="DEATH LEVEL RAMEN in Tokyo!! 🌶️ 💀 w/ Ramen Beast (He's Eaten 4,000 Bowls of Ramen!!)"
                            class="image__image" 
                          />
                        </div>
                      </div>
                    </div>

                    <div class="video-tile__image-overlay"></div>

                    <div class="video-tile__icon">
                      <img 
                        src="https://themes.fourthwall.com/themes-library/assets/598a81c6-d784-4417-9e89-9d318ca84d97/assets/yt_icon.png?v=efb3f0dac77121383b036757455c96916485cb68e5d09739435912ddbd97086f" 
                        alt="Watch video"
                        class="video-tile__icon-image"
                      />
                    </div>
                  </div>

                  
                    <div class="video-tile__caption">
                      <h3 class="video-tile__title">
                        DEATH LEVEL RAMEN in Tokyo!! 🌶️ 💀 w/ Ramen Beast (He's Eaten 4,000 Bowls of Ramen!!)
                      </h3>
                    </div>
                  
                </a>
              </div>
            </div>
          
            <div class="grid__column grid__column--12 grid__column--4@md">
              <div class="video-tile">
                <a 
                  href="https://www.youtube.com/watch?v=2s-m2XeTcH4" 
                  target="_blank"
                  class="video-tile__link"
                >
                  <div class="video-tile__image-container">
                    <div class="video-tile__image">
                      <div class="image image--video-thumbnail">
                        <div class="image__object">
                          <img 
                            src="https://i.ytimg.com/vi/2s-m2XeTcH4/maxresdefault.jpg"
                            alt="Best Japanese Food in Osaka!! 🇯🇵 300 Year Old Eel Restaurant! | Osaka, Japan"
                            class="image__image" 
                          />
                        </div>
                      </div>
                    </div>

                    <div class="video-tile__image-overlay"></div>

                    <div class="video-tile__icon">
                      <img 
                        src="https://themes.fourthwall.com/themes-library/assets/598a81c6-d784-4417-9e89-9d318ca84d97/assets/yt_icon.png?v=efb3f0dac77121383b036757455c96916485cb68e5d09739435912ddbd97086f" 
                        alt="Watch video"
                        class="video-tile__icon-image"
                      />
                    </div>
                  </div>

                  
                    <div class="video-tile__caption">
                      <h3 class="video-tile__title">
                        Best Japanese Food in Osaka!! 🇯🇵 300 Year Old Eel Restaurant! | Osaka, Japan
                      </h3>
                    </div>
                  
                </a>
              </div>
            </div>
          
        </div>
      </div>
    
  </div>
</section>

</div><div id="fw-section-instagram-feed-1722978636" class="fw-section">



<section data-section-id="fw-section-instagram-feed-1722978636" data-testid="main.single.section" class="instagram-feed instagram-feed--fw-section-instagram-feed-1722978636">
  <div class="container wrapper">
    
      
        <div class="instagram-feed__header">
          <div class="section-header">
            <h2 class="section-header__heading">Follow on Instagram</h2>

            <div class="section-header__cta">
              <a 
                href="https://instagram.com/jurrchen" 
                target="_blank"
                class="button button--outline button--small"
              >
                View profile
              </a>
            </div>
          </div>
        </div>
      

      <div class="instagram-feed__grid">
        <div class="grid grid--waffle grid--gapless">
          
            
              <div class="grid__column grid__column--4 grid__column--2@md">
                <a 
                  href="https://www.instagram.com/p/CeNeCeavkQj-qB_33__zsLUlEpFweAV3Ggi3bQ0/"
                  target="_blank"
                  class="instagram-feed__post"
                >
                  <img 
                    src="https://imgproxy.fourthwall.com/wcGnt-LCr1nAquVeZve3gf4TW1sTrrgPUSzKlEkMpE8/sm:1/enc/NDgyNGMzOWUyMzYw/OTVkYXIanqLgtuwb/UFaXHDtiYW5B3BDH/EEV8Npph085kpRI7/QEZmW7F1omg18TrI/OFD1XhBMYJ1jeT_v/ERB28WmYcQdtU2ZX/7-33T9QX10B4-gQ-/Ry2kFxaPvdaL75Eg/845gHRRsCEKN0-lv/ZERRsJPE5U0bYlgC/4mjS7rz2SokabwLa/Oua4WZtVu3SJ4XhL/UiDXzQ-wYZARN0Wn/LL-ziJQCnMM.webp" 
                    alt="Much belated Hang Tien pics. Such an amazing time with amazing people. 

#wemadeit #hangtiendude #onecavetoanother"
                    class="instagram-feed__image"
                  />
                </a>
              </div>
            
              <div class="grid__column grid__column--4 grid__column--2@md">
                <a 
                  href="https://www.instagram.com/p/CcZptxNPRNrNMGuhxla509j1jU5zY4EKMY2JNU0/"
                  target="_blank"
                  class="instagram-feed__post"
                >
                  <img 
                    src="https://imgproxy.fourthwall.com/ncQ7bZY_kNzwCbVH_65Kn5W-VAAkGvxzcGPTIl6HL8E/sm:1/enc/ZTBiYTA0YmUyYjJj/NWZkZMrR3KNEcLnR/KRCybVSPgzgYAtZY/f2Jr9-gpaZdwO9AH/WO57DfMQLTfSMC_B/Lv5JaMi9n160JJrg/gLrc4FtlyEiGKX3G/txvZ8hRHoPtOM5Me/N5bMwNdjM9HXRRld/lZVo-B-WwyuG8v7P/Oci401EJ9Ta5xHWg/1XnEwsriV4Mr2F3d/I71DrnUQ5QlZck_5/5dz2MlqNd-ppmXG8/-J79fFHNk4E.webp" 
                    alt="Unforgettable times. ♥️

❄️😎🤳
✂️👯‍♀️
🤍👦"
                    class="instagram-feed__image"
                  />
                </a>
              </div>
            
              <div class="grid__column grid__column--4 grid__column--2@md">
                <a 
                  href="https://www.instagram.com/p/CYiVLOelbz5gnie3yieRRQuHX6iAFuTZowgkCE0/"
                  target="_blank"
                  class="instagram-feed__post"
                >
                  <img 
                    src="https://imgproxy.fourthwall.com/z4l3V7WgZpK77yucqSc3iJfG4E2wnED-3rbGwpcwdLs/sm:1/enc/Mjc1NTdjZDBhOTZk/NWNiY5mPlmXONGhN/9lYFQJ1F6q9ZAu55/rCziqd432xfxiku1/amEooMjehMPtrQi6/Czf_sMFhqyOX1qlK/2bMQjSMYel4tZ0Ev/txV8aATl-7bbgedj/ojeJVqqzGu76BiEp/lP5WaHDBoEnVkVsS/mcaEJAPculU1Gr4k/YOF-GhHrXT-ooZqF/xii0jV4w9HN-SOjY/ODMV7dVhIWU7NBLy/4JTX1oLniKs.webp" 
                    alt="This was a lovely birthday surprise. 

Much thanks and love to Carica, Eddie, Fabio, Mark and all the staff at @evolvemma"
                    class="instagram-feed__image"
                  />
                </a>
              </div>
            
              <div class="grid__column grid__column--4 grid__column--2@md">
                <a 
                  href="https://www.instagram.com/p/B3YfUszF5s5770JFNGSyeD1eZF8jY8QBTIhcMc0/"
                  target="_blank"
                  class="instagram-feed__post"
                >
                  <img 
                    src="https://imgproxy.fourthwall.com/z-_R9cvfudlvu9i-TERNpfp2ymNK-Du6-yihkBSUsPI/sm:1/enc/YThlNjhhOTM4OTFm/ZDQ0MMoVGs9T8o5o/G6avrEgt_Oj6xWWx/te9rEZ5MXyDNOgC3/eUFEDTwMgGth6BhZ/Soi5zqc1TlCN94s9/IJb9D7J6vnrwdza7/5f3HN3vw1k-qs5-Z/BeQIG_TiMLGJgTh7/e-XpSXdYdjNA3ymH/xj-yYvQAHxCcn6nY/_-xAw0SPtfKCEkxl/QyKPga1--f0rA1FC/6nqwV2UtqVoPdqoR/6PCsXSM524g.webp" 
                    alt="Some Northern food discoveries

Bánh cuốn with egg in it. Freshly made. DOPE. Surprisingly I did not ask for an extra egg.

B..."
                    class="instagram-feed__image"
                  />
                </a>
              </div>
            
              <div class="grid__column grid__column--4 grid__column--2@md">
                <a 
                  href="https://www.instagram.com/p/B21lXjLFvV4M_ewepr6Ie-RC3M8cZSVa2wr8A80/"
                  target="_blank"
                  class="instagram-feed__post"
                >
                  <img 
                    src="https://imgproxy.fourthwall.com/rolfdD6kE_z9No0WtPU36N26AH5rOzHycwzzL4G4nU8/sm:1/enc/ZjY0MDcxNGI3M2I0/OGM3NYkrX1hyQiwH/ppkEMun4iEa_l_yg/MkKQdIywmg3tZVbk/VCaiDosh0So002Ia/_hnLqNM7eqQ2d5XF/VuXwQjtgjH776OGp/FSADMrzFMj8qjyib/IceCTwDp10jo27zL/x6TnNfB80X-UZTrO/I0rzv3V0hofxiCgi/-ELiVi2mt7LOKvei/KWS7MmyA-hwWqWK0/nEndFz-4yqPGNbUd/WdK83Rok6pA.webp" 
                    alt="牛肉面. #instantpot"
                    class="instagram-feed__image"
                  />
                </a>
              </div>
            
              <div class="grid__column grid__column--4 grid__column--2@md">
                <a 
                  href="https://www.instagram.com/p/B2yz26cFV8IU1ED6Qwp6Eml-IbSF4HrXSboASA0/"
                  target="_blank"
                  class="instagram-feed__post"
                >
                  <img 
                    src="https://imgproxy.fourthwall.com/gPQb8D6yVPmmEkgdfNFOpALXrXZQYFePFuQvnsujjtQ/sm:1/enc/YTBkNWY1NTllYzE0/MDc5MkYYpJ5Izxxe/5yuVSJ9fGFcjV8CQ/gWZtvvds-uCY3Equ/RVZ-EQObWe43V_uo/Nrs23OZAEl5sbgKt/K1FHNWDeoY4KxTx3/2dPZtMK8gWpySIqT/3YpQSA3QV9zTMMgq/b3CnnArmdlT2f0O6/GD1IuNkz24IJQJPU/k5ihfI9FAQvuYA5Q/jY0CpzTnd30yBayi/qF6So2lg35sAtc0h/j7zCiS61q6I.webp" 
                    alt="Muay Thai warm ups: devastating. Sushi by the quay: nourishing."
                    class="instagram-feed__image"
                  />
                </a>
              </div>
            
          
        </div>
      </div>
    
  </div>
</section>


</div><div id="fw-section-newsletter-1722978645" class="fw-section"><section data-section-id="fw-section-newsletter-1722978645" data-testid="main.single.section" class="newsletter">
  <div class="container wrapper">
    <div class="newsletter__content">
      <div class="newsletter__header">
        <h2 class="newsletter__heading">Join the newsletter</h2>
      </div>
      
      
        <p class="newsletter__text">
          Get sneak peeks of upcoming videos and much more!
        </p>
      

      <div class="newsletter__form">
        <div class="container container--4">
          <div class="newsletter-form">
  <div class="form" data-newsletter="form-container">
  <form action="/contact" method="post" data-turbo="false">

    <div class="form__section">
      <div class="newsletter-form__input-button-container">
        <div class="newsletter-form__input">
          <div data-input="container" class="input-field input-field--base">
            <input 
              id="newsletter-email"
              name="contact[email]"
              type="email"
              data-newsletter="email"
              data-input="input"
              class="input-field__input"
              placeholder=" example@example.com "
              required
            >
          </div>

          <div data-form-error="email" class="form__error"></div>
        </div>

        <div class="newsletter-form__button">
          <button 
            type="submit"
            data-newsletter="submit"
            class="button button--primary button--expand"
          >
             Subscribe 
            <span class="button__spinner">
              <div class="spinner spinner--small"></div>
            </span>
          </button>
        </div>
      </div>
    </div>

    <div class="form__response-container">
      <div
        data-form="response-success" 
        class="form__response"
      >
        <div class="alert alert--success">
          Thanks for subscribing!
        </div>
      </div>

      <div 
        data-form="response-error"
        class="form__response"
      >
        <div class="alert alert--error">
          <ul 
            data-form="response-error-content"
            class="alert__list"
          >
          </ul>
        </div>
      </div>
    </div>
  
</form>
  </div>
</div>
        </div>
      </div>      
    </div>
  </div>
</section>

</div><div id="fw-section-rich-text-1722978587" class="fw-section"><section 
  data-section-id="fw-section-rich-text-1722978587" 
  data-section-type="rich-text"
  data-testid="main.single.section"
  class="rich-text rich-text--fw-section-rich-text-1722978587" 
>
  <div class="rich-text__inner">
    <div class="container container--8 wrapper">
      
        <div class="rich-text__header">
          <h2 class="rich-text__heading">
            About
          </h2>
        </div>
      

      <div class="rich-text__text">
        <div class="html-formatter html-formatter--center">
          <p>This is a sample text about your amazing brand. Include as many details as you need! This is a sample text about your amazing brand. Include as many details as you need! This is a sample text about your amazing brand. Include as many details as you need!</p>
        </div>
      </div>
    </div>
  </div>
</section>


</div><div id="fw-section-image-with-text-1722978612" class="fw-section"><section data-testid="main.single.section" data-section-id="fw-section-image-with-text-1722978612" class="image-with-text">
    <div class="container wrapper">
      <div class="grid grid--middle">
        <div class="grid__column grid__column--12 grid__column--6@md">
          
            <div class="image-with-text__image-container">
              <img
                class="image-with-text__image"
                src="https://imgproxy.fourthwall.com/StkAAmPUYMyzbE5K8MuvUkX3G1xTeJSScWTOZZfshg0/w:1024/sm:1/enc/YTcwZmZmMTMxOTBh/MzFlMlyXylfYf2RD/Pc7Zt7yRxUEEyb93/yyGUBUkRF6IsxQTg/RjxoJ5QhFtH2f568/huYnFFMILy1BvQ2Y/3IghIKkfaE1ck8wc/pXjava_L4p7gBOBI/pGAjXh6V59ctuGtP/60UYPOeVQrllBClO/EK3SIWglHx44OYks/iopq5OqnQje8WfMT/vQG141syS17J4TdH/6WZliWsIy9RVnuMy/kWjZkURw8K8.webp"
              />
            </div>
          
        </div>

        <div class="grid__column grid__column--12 grid__column--6@md">
          <div class="image-with-text__content">
            <h2 class="image-with-text__heading">Image with text</h2>

            <div class="image-with-text__text">
              <div class="html-formatter">
                <p>Volutpat non odio pellentesque phasellus. In quis elit facilisis lectus eget vestibulum nisl fames. Nibh nibh viverra et facilisi pretium. Placerat egestas maecenas nunc urna elit elementum adipiscing.</p><p>Eget et enim, id faucibus ut mollis. Tristique iaculis faucibus duis pulvinar nulla tellus. In diam cursus nunc eget lorem nullam quisque. Nisl, erat viverra turpis morbi eget. Eget amet pulvinar dignissim viverra at amet ac.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</section>

</div>
  </div>
</div>

      </div>

      <footer class="page__footer">
        <div id="fw-section-footer" class="fw-section"><div data-testid="main.single.section" class="footer">
  <div class="footer__line"></div>
  <div class="container wrapper">
    <div class="footer__inner">
      <div class="footer__top">
        <div class="grid grid--middle">
          <div class="grid__column grid__column--12 grid__column--4@md">
            <div class="footer__socials">
              <ul class="footer__list footer__list--socials">
                



  
    <li class="footer__list-item footer__list-item--social">
      <a
        
          href="https://youtube.com/channel/UCyEd6QBSgat5kkC6svyjudA"
        
        target="_blank"
        class="footer__social-link"
      >
        
        <svg class="svg-fill-current-color" width="24" height="17" viewBox="0 0 24 17" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.062 0H3.938A3.944 3.944 0 0 0 0 3.939v9.121A3.944 3.944 0 0 0 3.938 17h16.125A3.944 3.944 0 0 0 24 13.06V3.939A3.944 3.944 0 0 0 20.062 0zm-3.524 8.531l-6.769 4.331a.504.504 0 0 1-.509.017.5.5 0 0 1-.26-.438V3.779a.502.502 0 0 1 .77-.422l6.769 4.332a.499.499 0 0 1-.001.842z" fill-rule="nonzero"/>
</svg>

        
      </a>
    </li>
  


  
    <li class="footer__list-item footer__list-item--social">
      <a
        
          href="https://instagram.com/jurrchen"
        
        target="_blank"
        class="footer__social-link"
      >
        
        <svg class="svg-fill-current-color" width="22" height="22" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.495 0h11.01A5.494 5.494 0 0 1 22 5.495v11.01A5.494 5.494 0 0 1 16.505 22H5.495A5.494 5.494 0 0 1 0 16.505V5.495A5.494 5.494 0 0 1 5.495 0zM2.2 16.505A3.294 3.294 0 0 0 5.495 19.8h11.01a3.294 3.294 0 0 0 3.295-3.295V5.495A3.294 3.294 0 0 0 16.505 2.2H5.495A3.294 3.294 0 0 0 2.2 5.495v11.01zM5.5 11a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0zm8.8 0a3.3 3.3 0 1 0-6.6 0 3.3 3.3 0 0 0 6.6 0zm2.2-4.4a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2z" fill-rule="nonzero"/>
</svg>

        
      </a>
    </li>
  


              </ul>
            </div>
          </div>

          <div class="grid__column grid__column--12 grid__column--8@md grid__column--first@md">
            <nav class="footer__nav">
              <ul class="footer__list footer__list--menu">
                
                  <li class="footer__list-item">
                    <a class="footer__menu-link footer__menu-link--icon">
                      USD
                      
                        <span class="footer__link-icon">
                          <svg class="svg-fill-current-color" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" vector-effect="non-scaling-stroke"/>
</svg>

                        </span>
                      
                    </a>
                    
                      <div class="footer__dropdown footer__dropdown--content">
                        <ul class="footer__dropdown-inner">
                          
                            <li class="footer__dropdown-item">
                              <a class="footer__dropdown-link" href="/localization?currency=USD&return_to=/">
                                USD
                              </a>
                            </li>
                          
                            <li class="footer__dropdown-item">
                              <a class="footer__dropdown-link" href="/localization?currency=EUR&return_to=/">
                                EUR
                              </a>
                            </li>
                          
                            <li class="footer__dropdown-item">
                              <a class="footer__dropdown-link" href="/localization?currency=CAD&return_to=/">
                                CAD
                              </a>
                            </li>
                          
                            <li class="footer__dropdown-item">
                              <a class="footer__dropdown-link" href="/localization?currency=GBP&return_to=/">
                                GBP
                              </a>
                            </li>
                          
                            <li class="footer__dropdown-item">
                              <a class="footer__dropdown-link" href="/localization?currency=AUD&return_to=/">
                                AUD
                              </a>
                            </li>
                          
                            <li class="footer__dropdown-item">
                              <a class="footer__dropdown-link" href="/localization?currency=NZD&return_to=/">
                                NZD
                              </a>
                            </li>
                          
                            <li class="footer__dropdown-item">
                              <a class="footer__dropdown-link" href="/localization?currency=SEK&return_to=/">
                                SEK
                              </a>
                            </li>
                          
                            <li class="footer__dropdown-item">
                              <a class="footer__dropdown-link" href="/localization?currency=NOK&return_to=/">
                                NOK
                              </a>
                            </li>
                          
                            <li class="footer__dropdown-item">
                              <a class="footer__dropdown-link" href="/localization?currency=DKK&return_to=/">
                                DKK
                              </a>
                            </li>
                          
                            <li class="footer__dropdown-item">
                              <a class="footer__dropdown-link" href="/localization?currency=PLN&return_to=/">
                                PLN
                              </a>
                            </li>
                          
                            <li class="footer__dropdown-item">
                              <a class="footer__dropdown-link" href="/localization?currency=INR&return_to=/">
                                INR
                              </a>
                            </li>
                          
                            <li class="footer__dropdown-item">
                              <a class="footer__dropdown-link" href="/localization?currency=JPY&return_to=/">
                                JPY
                              </a>
                            </li>
                          
                        </ul>
                      </div>
                    
                  </li>
                

                
                  <li class="footer__list-item">
                    <a href="/pages/contact" class="footer__menu-link">Contact</a>
                  </li>
                
                  <li class="footer__list-item">
                    <a href="/pages/terms-of-service" class="footer__menu-link">Terms of Service</a>
                  </li>
                
                  <li class="footer__list-item">
                    <a href="/pages/privacy-policy" class="footer__menu-link">Privacy Policy</a>
                  </li>
                
                  <li class="footer__list-item">
                    <a href="/pages/returns-faq" class="footer__menu-link">Returns &amp; FAQ</a>
                  </li>
                
              </ul>
            </nav>  
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <ul class="footer__list footer__list--bottom">
          <li class="footer__list-item">
            <div class="footer__copy">&copy; 2024 clean-frame-sandbox</div>
          </li>

          
            <li class="footer__list-item">
              <div class="footer__powered-by">
                Powered by <a href="https://fourthwall.com/?utm_source=footer&utm_medium=fourthwall&utm_campaign=poweredby" style="padding-left: 0;" target="_blank" rel="noopener">Fourthwall</a>
              </div>
            </li>
          
        </ul>
      </div>
    </div>
  </div>
</div>


</div>
      </footer>
    </div>

    <script>
  var fourthwallTheme = {
    strings: {
      addToCart: "Add to Cart",
      redeemGift: "Redeem Your Gift",
      viewCart: "View Cart",
      checkout: "Checkout",
      outOfStock: "Out of Stock",
      unavailable: "Not Available",
      soldOut: "Sold Out",
      soldOutSuffix: " - Sold Out",
      missingQuantityError: "Please choose the quantity.",
      generalError: "An error occurred. Please try refreshing the page.",
      item: "item",
      items: "items",
      startShopping: "Start Shopping",
      subtotal: "Subtotal",
      backToShopping: "Back to Shopping",
      cart: {
        heading: "[item_count] [item_count_label] in your cart for [total]",
        emptyHeading: "Your Shopping Cart is Empty",
        tableHeader: {
          item: "Item",
          quantity: "Quantity",
          price: "Price"
        },
        deleteModal: {
          heading: "Are you sure you want to remove [title] from your cart?",
          cancel: "Cancel",
          delete: "Delete"
        }
      },
      newsletter: {
        missingEmailError: 'Please enter your email.',
        invalidEmailError: 'Please enter a valid email.'
      },
      donation: {
        missingAmountError: 'Please select or enter the donation amount.',
        invalidAmountError: 'Please enter a valid donation amount.',
        missingNameError: 'Please enter your name.',
        missingMessageError: 'Please enter the message.'
      }
    },
    urls: {
      cart: "/cart",
      cartItemLocalizedPrefix: "",
      cartAddUrl: "/cart/add",
      cartChangeUrl: "/cart/change",
      allProductsCollection: "/collections/all",
    }
  };
<\/script>


    <script src="https://themes.fourthwall.com/themes-library/assets/598a81c6-d784-4417-9e89-9d318ca84d97/assets/theme.js?v=3aa4989036fcb97a8072b8f94b9eb7b0df92b2cf05f9dac091763dddf378b79c" rel="preload"><\/script>
    
    


  <div class="admin-bar-container hidden">
  <div id="admin-bar" class="admin-bar sticky hidden">
    <div class="wrapper">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
          <path fill="#FDFCFB" d="m11.947 6-.682 3.151H9.983c-1.61 0-1.964.081-2.237 1.195l-.136.733h3.246l-.683 3.178H6.928L4.5 25.692H0l2.428-11.435H.409l.682-3.178h1.991l.219-.923C4.01 6.706 5.7 6 9.628 6h2.319Zm3.525 5.08 1.936 9.913 1.718-9.914h4.637l1.69 9.914 1.938-9.914H32l-3.382 14.613h-5.21L21.446 14.91 19.48 25.692h-5.237L10.862 11.08h4.61Z"/>
        </svg>
      </div>
      <div class="actions">
        <div class='desktop'>
          <div class="dropdown">
            <button class="dropdown-button desktop-switcher pill" data-target="desktop-switcher">View as: </button>
            <div class="dropdown-content" id="desktop-switcher">
              <ul>
                <li class="dropdown-item" data-mode="creator">Admin</li>
                <li class="dropdown-item" data-mode="supporter">Supporter</li>
              </ul>
            </div>
          </div>
          <a href="/admin/dashboard/store-design/layout/index" class='pill edit-page' rel='noopener noreferrer'>Edit page</a>
          <a href="/admin/dashboard" rel="noopener noreferrer" class="pill dashboard-link">Go to dashboard</a>
        </div>

        <div class='mobile'>
          <div class="dropdown">
            <button class="dropdown-button pill mobile-switcher" data-target="mobile-switcher">View as</button>
            <div class="dropdown-content" id="mobile-switcher">
              <ul>
                <li class="dropdown-item" data-mode="creator">Admin</li>
                <li class="dropdown-item" data-mode="supporter">Supporter</li>
              </ul>
            </div>
          </div>

          <div class="dropdown mobile">
            <button class="dropdown-button pill" data-target="mobile-links">
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Dots horizontal">
                  <g>
                    <path d="M2.96875 7C2.96875 7.42284 2.62597 7.76562 2.20312 7.76562C1.78028 7.76562 1.4375 7.42284 1.4375 7C1.4375 6.57716 1.78028 6.23438 2.20312 6.23438C2.62597 6.23438 2.96875 6.57716 2.96875 7Z" stroke="#FDFCFB" stroke-width="1.5"/>
                    <path d="M8.76562 7C8.76562 7.42284 8.42284 7.76562 8 7.76562C7.57716 7.76562 7.23438 7.42284 7.23438 7C7.23438 6.57716 7.57716 6.23438 8 6.23438C8.42284 6.23438 8.76562 6.57716 8.76562 7Z" stroke="#FDFCFB" stroke-width="1.5"/>
                    <path d="M14.5625 7C14.5625 7.42284 14.2197 7.76562 13.7969 7.76562C13.374 7.76562 13.0312 7.42284 13.0312 7C13.0312 6.57716 13.374 6.23438 13.7969 6.23438C14.2197 6.23438 14.5625 6.57716 14.5625 7Z" stroke="#FDFCFB" stroke-width="1.5"/>
                  </g>
                </g>
              </svg>
            </button>
            <div class="dropdown-content" id="mobile-links">
              <a href="/admin/dashboard" rel="noopener noreferrer" class="dropdown-item">Go to dashboard</a>
            </div>
          </div>
        </div>

        <div class="pill close">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M0.875 13.125L13.125 0.875M13.125 13.125L0.875 0.875" stroke="#FDFCFB" stroke-width="1.5" stroke-linejoin="bevel"/>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>

  <div id="admin-bar-small" class="admin-bar-small sticky hidden">
    <div class="wrapper">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
          <path fill="#FDFCFB" d="m11.947 6-.682 3.151H9.983c-1.61 0-1.964.081-2.237 1.195l-.136.733h3.246l-.683 3.178H6.928L4.5 25.692H0l2.428-11.435H.409l.682-3.178h1.991l.219-.923C4.01 6.706 5.7 6 9.628 6h2.319Zm3.525 5.08 1.936 9.913 1.718-9.914h4.637l1.69 9.914 1.938-9.914H32l-3.382 14.613h-5.21L21.446 14.91 19.48 25.692h-5.237L10.862 11.08h4.61Z"/>
        </svg>
      </div>
    </div>
  </div>
</div>

<style>
  .admin-bar-container {
    height: 56px;
  }

  .hidden {
    display: none;
  }

  .admin-bar,
  .admin-bar-small {
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    height: 56px;
    width: 100%;
  }

  .admin-bar-small {
    width: 73px;
    cursor: pointer;
  }

  .sticky {
    position: fixed;
    bottom: 0;
  }

  .admin-bar a {
    color: #FDFCFB;
    padding: 14px;
    font-size: 14px;
    text-decoration: none;
  }

  .admin-bar button {
    padding: 14px;
    font-size: 14px;
  }

  .admin-bar .wrapper,
  .admin-bar-small .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }

  .admin-bar-small .wrapper {
    padding: 12px 20px;
  }

  .admin-bar .pill {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-transform: capitalize;

    padding: 6px 14px;
    border-radius: 100px;
    background: rgba(253, 252, 251, 0.12);

    cursor: pointer;
  }

  .admin-bar .pill:hover {
    background: rgba(253, 252, 251, 0.22);
  }

  .admin-bar .close {
    padding: 6px 11px;
  }

  .admin-bar .actions,
  .admin-bar .actions .desktop,
  .admin-bar .actions .mobile {
    display: flex;
    gap: 10px;
  }

  .admin-bar .actions .desktop,
  .admin-bar .actions .edit-page {
    display: none;
  }

  @media (min-width: 768px) {
    .admin-bar a,
    .admin-bar button {
      font-size: 16px;
    }

    .admin-bar .actions .desktop,
    .admin-bar .actions .edit-page {
      display: flex;
      gap: 10px;
    }

    .admin-bar .actions .mobile {
      display: none;
    }
  }

  .dropdown {
    position: relative;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: rgba(0,0,0,0.9);
    min-width: 130px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    bottom: 100%; /* Position above the button */
    border-radius: 10px;
    bottom: calc((100% + 8px) - 0px);
    right: 0;
  }

  /* Style for each list item */
  .dropdown-content .dropdown-item {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    white-space: nowrap;
    display: block;
    cursor: pointer;
    border-radius: 10px;
  }

  .dropdown-content .dropdown-item:hover {
    background-color: rgba(255,255,255,0.2)
  }

  /* Style for the button */
  .dropdown-button {
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    line-height: 24px;
  }
</style>

</body>
</html>
`;export{qo as C,ea as N,wo as O,wa as S,so as T,ro as U,no as a,ta as b,Eo as c,oo as d,Fo as e,De as u};
