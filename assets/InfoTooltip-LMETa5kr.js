import{q as f,A as c,C as m,j as t,b as g,R as x,P as T,I as w,m as q,h as R,w as S}from"./GoogleFontInject-BcCD-NBc.js";import{r as p}from"./index-RYns6xqu.js";const j=f.div(({withPadding:e,fluid:a})=>c`
    position: relative;
    z-index: 1;

    width: auto;
    max-width: 250px;
    border: 1px solid ${m.GS700};
    background-color: ${m.GS1000};

    color: ${m.GS100};
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-transform: none;
    white-space: normal;
    text-align: left;

    ${e&&c`
      padding: 5px 8px;
    `}

    ${a&&c`
      width: auto;
    `}
  `),d=({children:e})=>t.jsx(g,{children:e}),k=({children:e})=>t.jsx(x,{children:({ref:a})=>t.jsx("div",{ref:a,children:e})}),I=({placement:e="bottom",strategy:a="absolute",offset:i=[0,10],withPadding:l=!0,fluid:r=!1,children:s})=>{const n=p.useRef(null);p.useLayoutEffect(()=>{n.current&&n.current()},[s]);const u=({ref:o,style:b,placement:h,update:y})=>(n.current=y,t.jsx(j,{ref:o,placement:h,withPadding:l,fluid:r,style:b,role:"tooltip",children:s}));return t.jsx(T,{placement:e,strategy:a,modifiers:[{name:"offset",options:{offset:i}},{name:"preventOverflow",options:{padding:8}}],children:u})};d.Body=I;d.Reference=k;d.__docgenInfo={description:"",methods:[{name:"Body",docblock:null,modifiers:["static"],params:[{name:`{
  placement = 'bottom',
  strategy = 'absolute',
  offset = [0, 10],
  withPadding = true,
  fluid = false,
  children,
}: TooltipStaticBodyProps`,optional:!1,type:{name:"signature",type:"object",raw:`{
  placement?: Placement
  strategy?: 'absolute' | 'fixed'
  offset?: [number, number]
  withPadding?: boolean
  fluid?: boolean
  children: ReactNode
}`,signature:{properties:[{key:"placement",value:{name:"union",raw:`| 'top'
| 'top-start'
| 'top-end'
| 'right'
| 'right-start'
| 'right-end'
| 'bottom'
| 'bottom-start'
| 'bottom-end'
| 'left'
| 'left-start'
| 'left-end'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-start'"},{name:"literal",value:"'right-end'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-start'"},{name:"literal",value:"'left-end'"}],required:!1}},{key:"strategy",value:{name:"union",raw:"'absolute' | 'fixed'",elements:[{name:"literal",value:"'absolute'"},{name:"literal",value:"'fixed'"}],required:!1}},{key:"offset",value:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}],required:!1}},{key:"withPadding",value:{name:"boolean",required:!1}},{key:"fluid",value:{name:"boolean",required:!1}},{key:"children",value:{name:"ReactNode",required:!0}}]},alias:"TooltipStaticBodyProps"}}],returns:null},{name:"Reference",docblock:null,modifiers:["static"],params:[{name:"{ children }: TooltipStaticReferenceProps",optional:!1,type:{name:"signature",type:"object",raw:`{
  children: ReactNode
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}}]},alias:"TooltipStaticReferenceProps"}}],returns:null}],displayName:"TooltipStatic",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const v=({reference:e,placement:a="bottom",strategy:i="absolute",offset:l=[0,10],withPadding:r=!0,fluid:s=!1,children:n})=>{const[u,o]=p.useState(!1);return t.jsx(d,{children:t.jsxs("div",{onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),onTouchStart:()=>o(!0),onTouchEnd:()=>o(!1),"data-testid":"Tooltip",children:[t.jsx(d.Reference,{children:e}),u&&n&&t.jsx(d.Body,{placement:a,strategy:i,offset:l,withPadding:r,fluid:s,children:n})]})})};v.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{reference:{required:!0,tsType:{name:"ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:`| 'top'
| 'top-start'
| 'top-end'
| 'right'
| 'right-start'
| 'right-end'
| 'bottom'
| 'bottom-start'
| 'bottom-end'
| 'left'
| 'left-start'
| 'left-end'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-start'"},{name:"literal",value:"'right-end'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-start'"},{name:"literal",value:"'left-end'"}]},description:"",defaultValue:{value:"'bottom'",computed:!1}},strategy:{required:!1,tsType:{name:"union",raw:"'absolute' | 'fixed'",elements:[{name:"literal",value:"'absolute'"},{name:"literal",value:"'fixed'"}]},description:"",defaultValue:{value:"'absolute'",computed:!1}},offset:{required:!1,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:"",defaultValue:{value:"[0, 10]",computed:!1}},withPadding:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},fluid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const N=({appearance:e,isOpen:a,theme:i})=>{var l,r;if(e==="primary")return a?m.GS1000:((r=(l=i.automated)==null?void 0:l.styles)==null?void 0:r.colorOnBackground)||m.GS1000;if(e==="secondary")return m.GS600},P=f.div`
  color: ${N};
  cursor: pointer;
`,V=e=>{switch(e){case"xsmall":return 12;case"small":return 15;case"medium":default:return 18}},B=({appearance:e="primary",dark:a,size:i="small",content:l,placement:r,fluid:s=!1})=>{const[n,u]=p.useState(!1),o=()=>n?a?q:R:S;return l?t.jsx(P,{isOpen:n,appearance:e,onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),"data-testid":"InfoTooltip",children:t.jsx(v,{reference:t.jsx(w,{component:o(),height:V(i)}),fluid:s,strategy:"fixed",placement:r,children:l})}):null};B.__docgenInfo={description:"",methods:[],displayName:"InfoTooltip",props:{dark:{required:!1,tsType:{name:"boolean"},description:""},appearance:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xsmall' | 'small' | 'medium'",elements:[{name:"literal",value:"'xsmall'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},content:{required:!1,tsType:{name:"ReactNode"},description:""},fluid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placement:{required:!1,tsType:{name:"union",raw:`| 'top'
| 'top-start'
| 'top-end'
| 'right'
| 'right-start'
| 'right-end'
| 'bottom'
| 'bottom-start'
| 'bottom-end'
| 'left'
| 'left-start'
| 'left-end'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-start'"},{name:"literal",value:"'right-end'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-start'"},{name:"literal",value:"'left-end'"}]},description:""}}};export{B as I};
