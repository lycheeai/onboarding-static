import{q as r,C as y,f as v,j as e,W as L}from"./GoogleFontInject-BcCD-NBc.js";const U=r.div`
  display: flex;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`,C=r.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: calc(100vw - 580px);
  background-color: ${y.GS200};
`,b=r.div`
  flex-shrink: 0;
  width: 580px;
`,I=r.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 48px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;

  ${v.laptop} {
    height: 64px;
    padding: 0 32px;
  }
`,N=r.a`
  position: relative;
  width: 120px;

  ${v.laptop} {
    width: 140px;
    top: -5px;
  }
`,$=r.main`
  overflow-y: auto;
  height: 100vh;
`,q=t=>e.jsxs(U,{children:[e.jsx(C,{children:e.jsxs($,{children:[e.jsx(I,{children:e.jsx(N,{href:"#",children:t.logo})}),t.left]})}),e.jsx(b,{children:t.right})]});q.__docgenInfo={description:"",methods:[],displayName:"PreOnboardingLayout",props:{logo:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},left:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},right:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const o=""+new URL("r11-DGqUyCoY.png",import.meta.url).href,i=""+new URL("r12-CGhrwt5Z.png",import.meta.url).href,a=""+new URL("r13-CG7-SCsU.png",import.meta.url).href,s=""+new URL("r14-DPIB-ysc.png",import.meta.url).href,c=""+new URL("r21-C2fwpVNj.png",import.meta.url).href,l=""+new URL("r22-CMRcjlDM.png",import.meta.url).href,d=""+new URL("r23-exuqYDM4.png",import.meta.url).href,p=""+new URL("r24-CQAtGBQP.png",import.meta.url).href,h=""+new URL("r31-wlopogJK.png",import.meta.url).href,m=""+new URL("r32-W7F7sJjK.png",import.meta.url).href,g=""+new URL("r33-D2ZrUvHb.png",import.meta.url).href,f=""+new URL("r34-DAK5dlRf.png",import.meta.url).href,P=L`
  0% { transform: translateX(-25%); }
  100% { transform: translateX(0%); }
`,D=r.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`,G=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  margin-top: -100px;
  transform: rotate(-30deg);
  width: 100%;
  height: 100vh;
`,x=r.div`
  display: flex;
  margin-top: 32px;
  width: max-content;
  animation: ${P} ${t=>t.speed}s linear infinite;
  animation-direction: ${t=>t.direction==="left"?"reverse":"normal"};
`,R=r.div`
  width: 500px;
  height: 340px;
  margin: 0 10px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,w=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,u=[o,i,a,s,o,i,a,s,o,i,a,s,o,i,a,s],j=[c,l,d,p,c,l,d,p,c,l,d,p,c,l,d,p],W=[h,m,g,f,h,m,g,f,h,m,g,f,h,m,g,f],k=()=>e.jsx(D,{children:e.jsxs(G,{children:[e.jsx(x,{direction:"left",speed:50,children:u.map((t,n)=>e.jsx(R,{direction:"left",children:e.jsx(w,{src:t,alt:`Image ${n}`})},n))}),e.jsx(x,{direction:"right",speed:40,children:j.map((t,n)=>e.jsx(R,{direction:"right",children:e.jsx(w,{src:t,alt:`Image ${n+u.length}`})},n))}),e.jsx(x,{direction:"left",speed:40,children:W.map((t,n)=>e.jsx(R,{direction:"left",children:e.jsx(w,{src:t,alt:`Image ${n+u.length+j.length}`})},n))})]})});k.__docgenInfo={description:"",methods:[],displayName:"ImageSplash"};export{k as I,q as P};
