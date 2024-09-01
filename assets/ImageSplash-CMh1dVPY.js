import{q as s,C as v,f as u,j as t,W as y}from"./GoogleFontInject-XrcYwXTo.js";const C=s.div`
  display: flex;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`,I=s.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: calc(100vw - 580px);
  background-color: ${v.GS200};
`,N=s.div`
  flex-shrink: 0;
  width: 580px;
`,$=s.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 48px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;

  ${u.laptop} {
    height: 64px;
    padding: 0 32px;
  }
`,q=s.a`
  position: relative;
  width: 120px;

  ${u.laptop} {
    width: 140px;
    top: -5px;
  }
`,P=s.main`
  overflow-y: auto;
  height: 100vh;
`,D=e=>t.jsxs(C,{children:[t.jsx(I,{children:t.jsxs(P,{children:[t.jsx($,{children:t.jsx(q,{href:"#",children:e.logo})}),e.left]})}),t.jsx(N,{children:e.right})]});D.__docgenInfo={description:"",methods:[],displayName:"PreOnboardingLayout",props:{logo:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},left:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},right:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const o="/onboarding-static/assets/r11-DGqUyCoY.png",i="/onboarding-static/assets/r12-CGhrwt5Z.png",a="/onboarding-static/assets/r13-CG7-SCsU.png",r="/onboarding-static/assets/r14-DPIB-ysc.png",c="/onboarding-static/assets/r21-C2fwpVNj.png",d="/onboarding-static/assets/r22-CMRcjlDM.png",l="/onboarding-static/assets/r23-exuqYDM4.png",p="/onboarding-static/assets/r24-CQAtGBQP.png",g="/onboarding-static/assets/r31-wlopogJK.png",h="/onboarding-static/assets/r32-W7F7sJjK.png",x="/onboarding-static/assets/r33-D2ZrUvHb.png",m="/onboarding-static/assets/r34-DAK5dlRf.png",G=y`
  0% { transform: translateX(-25%); }
  100% { transform: translateX(0%); }
`,L=s.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`,W=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  margin-top: -100px;
  transform: rotate(-30deg);
  width: 100%;
  height: 100vh;
`,f=s.div`
  display: flex;
  margin-top: 32px;
  width: max-content;
  animation: ${G} ${e=>e.speed}s linear infinite;
  animation-direction: ${e=>e.direction==="left"?"reverse":"normal"};
`,R=s.div`
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
`,w=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,b=[o,i,a,r,o,i,a,r,o,i,a,r,o,i,a,r],j=[c,d,l,p,c,d,l,p,c,d,l,p,c,d,l,p],k=[g,h,x,m,g,h,x,m,g,h,x,m,g,h,x,m],A=()=>t.jsx(L,{children:t.jsxs(W,{children:[t.jsx(f,{direction:"left",speed:50,children:b.map((e,n)=>t.jsx(R,{direction:"left",children:t.jsx(w,{src:e,alt:`Image ${n}`})},n))}),t.jsx(f,{direction:"right",speed:40,children:j.map((e,n)=>t.jsx(R,{direction:"right",children:t.jsx(w,{src:e,alt:`Image ${n+b.length}`})},n))}),t.jsx(f,{direction:"left",speed:40,children:k.map((e,n)=>t.jsx(R,{direction:"left",children:t.jsx(w,{src:e,alt:`Image ${n+b.length+j.length}`})},n))})]})});A.__docgenInfo={description:"",methods:[],displayName:"ImageSplash"};export{A as I,D as P};
