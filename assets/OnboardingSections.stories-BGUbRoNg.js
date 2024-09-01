import{j as e,M as v,S as f,G as h,D as b,a as S}from"./GoogleFontInject-BcCD-NBc.js";import{r as c}from"./index-RYns6xqu.js";import{u as y,a as C,b as P,O as j,c as M,C as O,N as T,S as F,U as I,d as N,T as V}from"./CleanFrame-Dx-XCU5G.js";import{W as w}from"./index-DHbrQyX7.js";import{Q as L,a as Q}from"./useDebounce-BTZgvQhJ.js";import"./index-D16Yfzz8.js";import"./index-DNUR7M9R.js";import"./SiteOfferProvider-Di08FzGv.js";import"./InfoTooltip-LMETa5kr.js";import"./toString-BOixDalF.js";import"./isObjectLike-CC4gzjQa.js";const u=()=>{const{sections:r,enabledSections:i,setEnabledSection:s,recommendedSections:d}=y(),{setScrollSection:n}=C(),{navigate:a}=P();return e.jsx(j,{nav:e.jsx(M,{continue:()=>{a("/admin/creator-onboarding/styling")}}),children:e.jsx("div",{style:{paddingLeft:"70px",paddingRight:"70px",paddingTop:"70px",paddingBottom:"70px"},children:e.jsxs("div",{style:{gap:"32px",width:"100%"},children:[e.jsx("h2",{style:{fontSize:"32px",fontWeight:"bold"},children:"What do you want your homepage to feature?"}),e.jsx("div",{style:{gap:"16px",width:"100%"},children:r.map((o,p)=>{const l=i[o.key]||!1;return e.jsx("div",{style:{marginTop:"20px"},children:e.jsx(w,{label:o.label,description:"",checked:l,onHoverChange:()=>{},fillerText:d.includes(o.key)?"Recommended":void 0,onChange:()=>{s(o.key,!l),n(l?null:o.key)}},p)})})})]})})})};u.__docgenInfo={description:"",methods:[],displayName:"OnboardingSections"};const H={title:"CreatorOnboarding/OnboardingSections",component:u},D=new L({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),G=r=>{const i=c.useMemo(()=>({navigate:n=>{alert(`Going to ${n}`)},location:"/admin/creator-onboarding/sections"}),[]),s=c.useMemo(()=>({sandbox:{"clean-frame":O},isLoading:!1}),[]),d=c.useMemo(()=>({youtubeData:{},youtubeLoading:!1,shopName:"My Shop",recentVideos:[]}),[]);return e.jsxs(v,{children:[e.jsx(f,{}),e.jsx(h,{fonts:b.flatMap(n=>n.fonts.flatMap(a=>[a.heading,a.text]))}),e.jsx(S,{}),e.jsx(T.Provider,{value:i,children:e.jsx(Q,{client:D,children:e.jsx(F,{children:e.jsx(I.Provider,{value:d,children:e.jsx(N.Provider,{value:s,children:e.jsx(V,{children:e.jsx(u,{...r})})})})})})})]})},t=G.bind({});t.args={};var x,g,m;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const navigationContextValue = useMemo(() => ({
    navigate: url => {
      alert(\`Going to \${url}\`);
    },
    location: '/admin/creator-onboarding/sections'
  }), []);
  const sandboxValue = useMemo(() => ({
    sandbox: {
      'clean-frame': (CleanFrame as string)
    },
    isLoading: false
  }), []);
  const userInfoValue = useMemo(() => ({
    youtubeData: {},
    youtubeLoading: false,
    shopName: 'My Shop',
    recentVideos: []
  }), []);
  return <MediaQueryProvider>
      <SuisseIntlFont />
      <GoogleFontInject fonts={DEFAULT_FONTS.flatMap(f => f.fonts.flatMap(ff => [ff.heading, ff.text]))} />
      <GlobalStyle />
      <NavigationContext.Provider value={navigationContextValue}>
        <QueryClientProvider client={queryClient}>
          <StageSettingsProvider>
            <UserInfoContext.Provider value={userInfoValue}>
              <SandboxContext.Provider value={sandboxValue}>
                <ThemePreviewProvider>
                  <OnboardingSections {...args} />
                </ThemePreviewProvider>
              </SandboxContext.Provider>
            </UserInfoContext.Provider>
          </StageSettingsProvider>
        </QueryClientProvider>
      </NavigationContext.Provider>
    </MediaQueryProvider>;
}`,...(m=(g=t.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};const J=["Default"];export{t as Default,J as __namedExportsOrder,H as default};
