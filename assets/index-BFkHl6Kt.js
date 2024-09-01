import{q as i,g as o,C as n,t as x,j as t,I as f,n as E,x as B,A as s,c as H}from"./GoogleFontInject-XrcYwXTo.js";import{R as L}from"./index-RYns6xqu.js";import{I as P}from"./InfoTooltip-Di7fLzUw.js";const u=({size:e})=>{if(e==="small")return 20;if(e==="medium")return 24;if(e==="large")return 32},M=({theme:e})=>{var r,a,l;return(a=(r=e.automated)==null?void 0:r.styles)!=null&&a.colorPrimary?x((l=e.automated)==null?void 0:l.styles.colorPrimary).setAlpha(.4).toString():x(n.B500).setAlpha(.4).toString()},v=i.div`
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${u}px;
  min-width: ${u}px;
  height: ${u}px;
  min-height: ${u}px;
  background: ${o("paleBackground",n.GS0)};
  border: 1px solid ${o("paleBackground",n.GS500)};
  color: transparent;

  input:checked + & {
    background: ${o("colorPrimary",n.B500)};
    border-color: ${o("colorPrimary",n.B500)};
    color: ${o("colorOnPrimary",n.GS100)};
  }

  input:disabled + & {
    cursor: not-allowed;
    background: ${n.GS400};
    border-color: ${n.GS500};
  }

  input:checked:disabled + & {
    background: ${n.GS400};
    color: ${n.GS500};
  }

  input:focus-visible + & {
    outline: 2px solid ${M};
    outline-offset: 1px;
  }

  input:indeterminate + & {
    background: ${o("colorPrimary",n.B500)};
    border-color: ${o("colorPrimary",n.B500)};
    color: ${o("colorOnPrimary",n.GS100)};
  }
`,y={small:10,medium:12,large:16},b=({size:e="medium",indeterminate:r})=>t.jsx(v,{size:e,"aria-hidden":"true",children:r?t.jsx(f,{component:E,height:y[e]}):t.jsx(f,{component:B,height:y[e]})}),_=L.memo(b);b.__docgenInfo={description:"",methods:[],displayName:"CheckboxIconComponent",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:""}}};const N=i.label(({$disabled:e})=>s`
    display: flex;

    position: relative;

    user-select: none;

    & > * + * {
      margin-left: 12px;
    }

    ${!e&&s`
      cursor: pointer;

      &:hover {
        ${v} {
          border-color: ${o("paleTextColor",n.GS600)};
        }
      }
    `}

    ${e&&s`
      cursor: not-allowed;
    `}
  `),A=i.input`
  clip: rect(1px, 1px, 1px, 1px);

  position: absolute;
`,F=i.div`
  position: relative;
  top: 1px;
`,O=i.div`
  display: flex;
  align-items: center;

  font-size: 16px;
  line-height: 150%;

  color: ${o("colorOnBackground",n.GS1000)};

  ${({$disabled:e})=>e&&s`
      color: ${o("paleTextColor",n.GS600)};
    `}
`,R=i.div`
  color: ${n.GS600};
  font-size: 14px;
  line-height: 150%;

  a {
    text-decoration: underline;

    &:hover {
      color: ${n.B500};
    }
  }
`,z=i.div`
  margin-left: 6px;
`,C=({label:e,description:r,tooltip:a,size:l="medium",indeterminate:T,id:k,name:$,value:d,checked:q,disabled:m,native:S,onChange:p,onValueChange:g,onBlur:h})=>{const j=c=>{p&&p(c),g&&g(c.target.checked)},I=c=>{h&&h(c)},w=()=>a?t.jsx(z,{children:t.jsx(P,{content:a,dark:!0})}):null,G=()=>S?q:typeof d=="boolean"?d:void 0;return t.jsxs(N,{$disabled:m,"data-testid":"Checkbox",children:[t.jsxs("div",{children:[t.jsx(A,{type:"checkbox",id:k,name:$,value:typeof d=="string"?d:void 0,checked:G(),disabled:m,onChange:j,onBlur:I}),t.jsx(_,{size:l,indeterminate:T})]}),(e||r)&&t.jsxs(F,{children:[e&&t.jsxs(O,{$disabled:m,children:[e,w()]}),r&&t.jsx(R,{children:r})]})]})},W=H(C);C.__docgenInfo={description:"",methods:[],displayName:"CheckboxComponent",props:{label:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:""},description:{required:!1,tsType:{name:"string"},description:""},tooltip:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"union",raw:"boolean | string",elements:[{name:"boolean"},{name:"string"}]},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},native:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLInputElement"}],raw:"FocusEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""}}};const V=i.div`
  padding: 18px 20px;
  outline: 2px solid ${n.GS200};

  ${e=>e.checked&&`outline: 2px solid ${n.GS1000};`}

  &:hover {
    background-color: ${n.GS200};
  }

  ${e=>!e.checked&&s`
      &:hover {
        outline: 2px solid ${n.GS500};
      }
    `}
`,D=i.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
`,K=i.div`
  font-size: 14px;
  font-weight: 500;
  color: ${n.GS600};
`,Z=e=>t.jsx(V,{checked:e.checked,onMouseEnter:()=>e.onHoverChange(!0),onMouseLeave:()=>e.onHoverChange(!1),children:t.jsxs(D,{children:[t.jsx(W,{size:"large",label:t.jsx("p",{style:{fontSize:"16px",fontWeight:"bold"},children:e.label}),description:e.description,value:e.checked,onChange:r=>e.onChange(r.target.checked)}),e.fillerText&&t.jsx(K,{children:e.fillerText})]})});Z.__docgenInfo={description:"",methods:[],displayName:"WrappedCheckbox",props:{label:{required:!0,tsType:{name:"string"},description:""},description:{required:!0,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},onHoverChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(hovered: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"hovered"}],return:{name:"void"}}},description:""},fillerText:{required:!1,tsType:{name:"string"},description:""}}};export{Z as W};
