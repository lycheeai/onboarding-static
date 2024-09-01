import{K as Zt,N as Yt,O as fn,Q as pn,T as hn,V as Ft,l as Qt,X as ot,Y as Ae,Z as Kt,i as mn,_ as gn,$ as yn,a0 as Jt,a1 as vn,a2 as bn,a3 as xn,a4 as wn,a5 as Fn,a6 as En,q as j,f as ut,A as _,C as v,j as l,L as Sn,b as Tn,R as $n,P as _n,a7 as Cn,W as An,e as jn,M as On,S as kn,G as Dn,D as Rn,a as In}from"./GoogleFontInject-XrcYwXTo.js";import{g as te,r as y,R as Vn}from"./index-RYns6xqu.js";import{P as Ln,I as Mn}from"./ImageSplash-CMh1dVPY.js";import{c as Re,k as lt,g as Nn,a as Xt,b as qn,d as er,e as Pn,i as Un,f as Gn,h as Bn,j as Et,_ as tr,I as zn}from"./Input-8rYo_VgG.js";import{z as Hn,u as rr,_ as nr}from"./_baseAssignValue-CsafdTDe.js";import{t as ct}from"./toString-BOixDalF.js";import{h as Wn,i as Zn,A as Yn,e as Qn,f as ir,Q as Kn,a as Jn}from"./useDebounce-BTZgvQhJ.js";import{I as Xn}from"./InfoTooltip-Di7fLzUw.js";import"./index-D16Yfzz8.js";import"./index-DNUR7M9R.js";import"./isObjectLike-CC4gzjQa.js";import"./isFunction-Bz83i0dB.js";function ei(t,e){return t&&Re(e,Zt(e),t)}function ti(t,e){return t&&Re(e,lt(e),t)}function ri(t,e){return Re(t,Yt(t),e)}var ni=Object.getOwnPropertySymbols,ar=ni?function(t){for(var e=[];t;)pn(e,Yt(t)),t=Nn(t);return e}:fn;function ii(t,e){return Re(t,ar(t),e)}function ai(t){return hn(t,lt,ar)}var si=Object.prototype,oi=si.hasOwnProperty;function ui(t){var e=t.length,r=new t.constructor(e);return e&&typeof t[0]=="string"&&oi.call(t,"index")&&(r.index=t.index,r.input=t.input),r}function li(t,e){var r=e?Xt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}var ci=/\w*$/;function di(t){var e=new t.constructor(t.source,ci.exec(t));return e.lastIndex=t.lastIndex,e}var St=Ft?Ft.prototype:void 0,Tt=St?St.valueOf:void 0;function fi(t){return Tt?Object(Tt.call(t)):{}}var pi="[object Boolean]",hi="[object Date]",mi="[object Map]",gi="[object Number]",yi="[object RegExp]",vi="[object Set]",bi="[object String]",xi="[object Symbol]",wi="[object ArrayBuffer]",Fi="[object DataView]",Ei="[object Float32Array]",Si="[object Float64Array]",Ti="[object Int8Array]",$i="[object Int16Array]",_i="[object Int32Array]",Ci="[object Uint8Array]",Ai="[object Uint8ClampedArray]",ji="[object Uint16Array]",Oi="[object Uint32Array]";function ki(t,e,r){var n=t.constructor;switch(e){case wi:return Xt(t);case pi:case hi:return new n(+t);case Fi:return li(t,r);case Ei:case Si:case Ti:case $i:case _i:case Ci:case Ai:case ji:case Oi:return qn(t,r);case mi:return new n;case gi:case bi:return new n(t);case yi:return di(t);case vi:return new n;case xi:return fi(t)}}var Di="[object Map]";function Ri(t){return Qt(t)&&ot(t)==Di}var $t=Ae&&Ae.isMap,Ii=$t?Kt($t):Ri,Vi="[object Set]";function Li(t){return Qt(t)&&ot(t)==Vi}var _t=Ae&&Ae.isSet,Mi=_t?Kt(_t):Li,Ni=1,qi=2,Pi=4,sr="[object Arguments]",Ui="[object Array]",Gi="[object Boolean]",Bi="[object Date]",zi="[object Error]",or="[object Function]",Hi="[object GeneratorFunction]",Wi="[object Map]",Zi="[object Number]",ur="[object Object]",Yi="[object RegExp]",Qi="[object Set]",Ki="[object String]",Ji="[object Symbol]",Xi="[object WeakMap]",ea="[object ArrayBuffer]",ta="[object DataView]",ra="[object Float32Array]",na="[object Float64Array]",ia="[object Int8Array]",aa="[object Int16Array]",sa="[object Int32Array]",oa="[object Uint8Array]",ua="[object Uint8ClampedArray]",la="[object Uint16Array]",ca="[object Uint32Array]",k={};k[sr]=k[Ui]=k[ea]=k[ta]=k[Gi]=k[Bi]=k[ra]=k[na]=k[ia]=k[aa]=k[sa]=k[Wi]=k[Zi]=k[ur]=k[Yi]=k[Qi]=k[Ki]=k[Ji]=k[oa]=k[ua]=k[la]=k[ca]=!0;k[zi]=k[or]=k[Xi]=!1;function ye(t,e,r,n,i,a){var s,u=e&Ni,d=e&qi,h=e&Pi;if(s!==void 0)return s;if(!mn(t))return t;var m=Jt(t);if(m){if(s=ui(t),!u)return er(t,s)}else{var f=ot(t),c=f==or||f==Hi;if(gn(t))return Pn(t,u);if(f==ur||f==sr||c&&!i){if(s=d||c?{}:Un(t),!u)return d?ii(t,ti(s,t)):ri(t,ei(s,t))}else{if(!k[f])return i?t:{};s=ki(t,f,u)}}a||(a=new yn);var p=a.get(t);if(p)return p;a.set(t,s),Mi(t)?t.forEach(function(C){s.add(ye(C,e,r,C,t,a))}):Ii(t)&&t.forEach(function(C,S){s.set(S,ye(C,e,r,S,t,a))});var E=h?d?ai:vn:d?lt:Zt,$=m?void 0:E(t);return Gn($||t,function(C,S){$&&(S=C,C=t[S]),Bn(s,S,ye(C,e,r,S,t,a))}),s}var da=4;function Ct(t){return ye(t,da)}var fa=1,pa=4;function Te(t){return ye(t,fa|pa)}function lr(t){return Jt(t)?bn(t,En):xn(t)?[t]:er(wn(Fn(t)))}var ha=function(e){return ma(e)&&!ga(e)};function ma(t){return!!t&&typeof t=="object"}function ga(t){var e=Object.prototype.toString.call(t);return e==="[object RegExp]"||e==="[object Date]"||ba(t)}var ya=typeof Symbol=="function"&&Symbol.for,va=ya?Symbol.for("react.element"):60103;function ba(t){return t.$$typeof===va}function xa(t){return Array.isArray(t)?[]:{}}function je(t,e){return e.clone!==!1&&e.isMergeableObject(t)?ve(xa(t),t,e):t}function wa(t,e,r){return t.concat(e).map(function(n){return je(n,r)})}function Fa(t,e,r){var n={};return r.isMergeableObject(t)&&Object.keys(t).forEach(function(i){n[i]=je(t[i],r)}),Object.keys(e).forEach(function(i){!r.isMergeableObject(e[i])||!t[i]?n[i]=je(e[i],r):n[i]=ve(t[i],e[i],r)}),n}function ve(t,e,r){r=r||{},r.arrayMerge=r.arrayMerge||wa,r.isMergeableObject=r.isMergeableObject||ha;var n=Array.isArray(e),i=Array.isArray(t),a=n===i;return a?n?r.arrayMerge(t,e,r):Fa(t,e,r):je(e,r)}ve.all=function(e,r){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(n,i){return ve(n,i,r)},{})};var Qe=ve,At=Array.isArray,jt=Object.keys,Ea=Object.prototype.hasOwnProperty,Sa=typeof Element<"u";function Ke(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var r=At(t),n=At(e),i,a,s;if(r&&n){if(a=t.length,a!=e.length)return!1;for(i=a;i--!==0;)if(!Ke(t[i],e[i]))return!1;return!0}if(r!=n)return!1;var u=t instanceof Date,d=e instanceof Date;if(u!=d)return!1;if(u&&d)return t.getTime()==e.getTime();var h=t instanceof RegExp,m=e instanceof RegExp;if(h!=m)return!1;if(h&&m)return t.toString()==e.toString();var f=jt(t);if(a=f.length,a!==jt(e).length)return!1;for(i=a;i--!==0;)if(!Ea.call(e,f[i]))return!1;if(Sa&&t instanceof Element&&e instanceof Element)return t===e;for(i=a;i--!==0;)if(s=f[i],!(s==="_owner"&&t.$$typeof)&&!Ke(t[s],e[s]))return!1;return!0}return t!==t&&e!==e}var Ta=function(e,r){try{return Ke(e,r)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||n.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}};const J=te(Ta);function I(){return I=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},I.apply(this,arguments)}function cr(t,e){if(t==null)return{};var r={},n=Object.keys(t),i,a;for(a=0;a<n.length;a++)i=n[a],!(e.indexOf(i)>=0)&&(r[i]=t[i]);return r}var Ie=y.createContext(void 0);Ie.displayName="FormikContext";Ie.Provider;Ie.Consumer;function $a(){var t=y.useContext(Ie);return t}var z=function(e){return typeof e=="function"},Ve=function(e){return e!==null&&typeof e=="object"},_a=function(e){return String(Math.floor(Number(e)))===e},He=function(e){return Object.prototype.toString.call(e)==="[object String]"},We=function(e){return Ve(e)&&z(e.then)};function N(t,e,r,n){n===void 0&&(n=0);for(var i=lr(e);t&&n<i.length;)t=t[i[n++]];return n!==i.length&&!t||t===void 0?r:t}function ee(t,e,r){for(var n=Ct(t),i=n,a=0,s=lr(e);a<s.length-1;a++){var u=s[a],d=N(t,s.slice(0,a+1));if(d&&(Ve(d)||Array.isArray(d)))i=i[u]=Ct(d);else{var h=s[a+1];i=i[u]=_a(h)&&Number(h)>=0?[]:{}}}return(a===0?t:i)[s[a]]===r?t:(r===void 0?delete i[s[a]]:i[s[a]]=r,a===0&&r===void 0&&delete n[s[a]],n)}function dr(t,e,r,n){r===void 0&&(r=new WeakMap),n===void 0&&(n={});for(var i=0,a=Object.keys(t);i<a.length;i++){var s=a[i],u=t[s];Ve(u)?r.get(u)||(r.set(u,!0),n[s]=Array.isArray(u)?[]:{},dr(u,e,r,n[s])):n[s]=e}return n}function Ca(t,e){switch(e.type){case"SET_VALUES":return I({},t,{values:e.payload});case"SET_TOUCHED":return I({},t,{touched:e.payload});case"SET_ERRORS":return J(t.errors,e.payload)?t:I({},t,{errors:e.payload});case"SET_STATUS":return I({},t,{status:e.payload});case"SET_ISSUBMITTING":return I({},t,{isSubmitting:e.payload});case"SET_ISVALIDATING":return I({},t,{isValidating:e.payload});case"SET_FIELD_VALUE":return I({},t,{values:ee(t.values,e.payload.field,e.payload.value)});case"SET_FIELD_TOUCHED":return I({},t,{touched:ee(t.touched,e.payload.field,e.payload.value)});case"SET_FIELD_ERROR":return I({},t,{errors:ee(t.errors,e.payload.field,e.payload.value)});case"RESET_FORM":return I({},t,e.payload);case"SET_FORMIK_STATE":return e.payload(t);case"SUBMIT_ATTEMPT":return I({},t,{touched:dr(t.values,!0),isSubmitting:!0,submitCount:t.submitCount+1});case"SUBMIT_FAILURE":return I({},t,{isSubmitting:!1});case"SUBMIT_SUCCESS":return I({},t,{isSubmitting:!1});default:return t}}var K={},$e={};function Aa(t){var e=t.validateOnChange,r=e===void 0?!0:e,n=t.validateOnBlur,i=n===void 0?!0:n,a=t.validateOnMount,s=a===void 0?!1:a,u=t.isInitialValid,d=t.enableReinitialize,h=d===void 0?!1:d,m=t.onSubmit,f=cr(t,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),c=I({validateOnChange:r,validateOnBlur:i,validateOnMount:s,onSubmit:m},f),p=y.useRef(c.initialValues),E=y.useRef(c.initialErrors||K),$=y.useRef(c.initialTouched||$e),C=y.useRef(c.initialStatus),S=y.useRef(!1),A=y.useRef({});y.useEffect(function(){return S.current=!0,function(){S.current=!1}},[]);var D=y.useState(0),V=D[1],P=y.useRef({values:Te(c.initialValues),errors:Te(c.initialErrors)||K,touched:Te(c.initialTouched)||$e,status:Te(c.initialStatus),isSubmitting:!1,isValidating:!1,submitCount:0}),w=P.current,F=y.useCallback(function(o){var g=P.current;P.current=Ca(g,o),g!==P.current&&V(function(b){return b+1})},[]),Y=y.useCallback(function(o,g){return new Promise(function(b,x){var T=c.validate(o,g);T==null?b(K):We(T)?T.then(function(O){b(O||K)},function(O){x(O)}):b(T)})},[c.validate]),ne=y.useCallback(function(o,g){var b=c.validationSchema,x=z(b)?b(g):b,T=g&&x.validateAt?x.validateAt(g,o):Oa(o,x);return new Promise(function(O,R){T.then(function(){O(K)},function(Z){Z.name==="ValidationError"?O(ja(Z)):R(Z)})})},[c.validationSchema]),fe=y.useCallback(function(o,g){return new Promise(function(b){return b(A.current[o].validate(g))})},[]),we=y.useCallback(function(o){var g=Object.keys(A.current).filter(function(x){return z(A.current[x].validate)}),b=g.length>0?g.map(function(x){return fe(x,N(o,x))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(b).then(function(x){return x.reduce(function(T,O,R){return O==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||O&&(T=ee(T,g[R],O)),T},{})})},[fe]),Me=y.useCallback(function(o){return Promise.all([we(o),c.validationSchema?ne(o):{},c.validate?Y(o):{}]).then(function(g){var b=g[0],x=g[1],T=g[2],O=Qe.all([b,x,T],{arrayMerge:ka});return O})},[c.validate,c.validationSchema,we,Y,ne]),L=U(function(o){return o===void 0&&(o=w.values),F({type:"SET_ISVALIDATING",payload:!0}),Me(o).then(function(g){return S.current&&(F({type:"SET_ISVALIDATING",payload:!1}),F({type:"SET_ERRORS",payload:g})),g})});y.useEffect(function(){s&&S.current===!0&&J(p.current,c.initialValues)&&L(p.current)},[s,L]);var B=y.useCallback(function(o){var g=o&&o.values?o.values:p.current,b=o&&o.errors?o.errors:E.current?E.current:c.initialErrors||{},x=o&&o.touched?o.touched:$.current?$.current:c.initialTouched||{},T=o&&o.status?o.status:C.current?C.current:c.initialStatus;p.current=g,E.current=b,$.current=x,C.current=T;var O=function(){F({type:"RESET_FORM",payload:{isSubmitting:!!o&&!!o.isSubmitting,errors:b,touched:x,status:T,values:g,isValidating:!!o&&!!o.isValidating,submitCount:o&&o.submitCount&&typeof o.submitCount=="number"?o.submitCount:0}})};if(c.onReset){var R=c.onReset(w.values,xt);We(R)?R.then(O):O()}else O()},[c.initialErrors,c.initialStatus,c.initialTouched,c.onReset]);y.useEffect(function(){S.current===!0&&!J(p.current,c.initialValues)&&h&&(p.current=c.initialValues,B(),s&&L(p.current))},[h,c.initialValues,B,s,L]),y.useEffect(function(){h&&S.current===!0&&!J(E.current,c.initialErrors)&&(E.current=c.initialErrors||K,F({type:"SET_ERRORS",payload:c.initialErrors||K}))},[h,c.initialErrors]),y.useEffect(function(){h&&S.current===!0&&!J($.current,c.initialTouched)&&($.current=c.initialTouched||$e,F({type:"SET_TOUCHED",payload:c.initialTouched||$e}))},[h,c.initialTouched]),y.useEffect(function(){h&&S.current===!0&&!J(C.current,c.initialStatus)&&(C.current=c.initialStatus,F({type:"SET_STATUS",payload:c.initialStatus}))},[h,c.initialStatus,c.initialTouched]);var ie=U(function(o){if(A.current[o]&&z(A.current[o].validate)){var g=N(w.values,o),b=A.current[o].validate(g);return We(b)?(F({type:"SET_ISVALIDATING",payload:!0}),b.then(function(x){return x}).then(function(x){F({type:"SET_FIELD_ERROR",payload:{field:o,value:x}}),F({type:"SET_ISVALIDATING",payload:!1})})):(F({type:"SET_FIELD_ERROR",payload:{field:o,value:b}}),Promise.resolve(b))}else if(c.validationSchema)return F({type:"SET_ISVALIDATING",payload:!0}),ne(w.values,o).then(function(x){return x}).then(function(x){F({type:"SET_FIELD_ERROR",payload:{field:o,value:N(x,o)}}),F({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Ne=y.useCallback(function(o,g){var b=g.validate;A.current[o]={validate:b}},[]),Fe=y.useCallback(function(o){delete A.current[o]},[]),pe=U(function(o,g){F({type:"SET_TOUCHED",payload:o});var b=g===void 0?i:g;return b?L(w.values):Promise.resolve()}),Ee=y.useCallback(function(o){F({type:"SET_ERRORS",payload:o})},[]),he=U(function(o,g){var b=z(o)?o(w.values):o;F({type:"SET_VALUES",payload:b});var x=g===void 0?r:g;return x?L(b):Promise.resolve()}),Se=y.useCallback(function(o,g){F({type:"SET_FIELD_ERROR",payload:{field:o,value:g}})},[]),ae=U(function(o,g,b){F({type:"SET_FIELD_VALUE",payload:{field:o,value:g}});var x=b===void 0?r:b;return x?L(ee(w.values,o,g)):Promise.resolve()}),mt=y.useCallback(function(o,g){var b=g,x=o,T;if(!He(o)){o.persist&&o.persist();var O=o.target?o.target:o.currentTarget,R=O.type,Z=O.name,Be=O.id,ze=O.value,cn=O.checked,ll=O.outerHTML,wt=O.options,dn=O.multiple;b=g||Z||Be,x=/number|range/.test(R)?(T=parseFloat(ze),isNaN(T)?"":T):/checkbox/.test(R)?Ra(N(w.values,b),cn,ze):wt&&dn?Da(wt):ze}b&&ae(b,x)},[ae,w.values]),qe=U(function(o){if(He(o))return function(g){return mt(g,o)};mt(o)}),se=U(function(o,g,b){g===void 0&&(g=!0),F({type:"SET_FIELD_TOUCHED",payload:{field:o,value:g}});var x=b===void 0?i:b;return x?L(w.values):Promise.resolve()}),gt=y.useCallback(function(o,g){o.persist&&o.persist();var b=o.target,x=b.name,T=b.id,O=b.outerHTML,R=g||x||T;se(R,!0)},[se]),Pe=U(function(o){if(He(o))return function(g){return gt(g,o)};gt(o)}),yt=y.useCallback(function(o){z(o)?F({type:"SET_FORMIK_STATE",payload:o}):F({type:"SET_FORMIK_STATE",payload:function(){return o}})},[]),vt=y.useCallback(function(o){F({type:"SET_STATUS",payload:o})},[]),bt=y.useCallback(function(o){F({type:"SET_ISSUBMITTING",payload:o})},[]),Ue=U(function(){return F({type:"SUBMIT_ATTEMPT"}),L().then(function(o){var g=o instanceof Error,b=!g&&Object.keys(o).length===0;if(b){var x;try{if(x=rn(),x===void 0)return}catch(T){throw T}return Promise.resolve(x).then(function(T){return S.current&&F({type:"SUBMIT_SUCCESS"}),T}).catch(function(T){if(S.current)throw F({type:"SUBMIT_FAILURE"}),T})}else if(S.current&&(F({type:"SUBMIT_FAILURE"}),g))throw o})}),tn=U(function(o){o&&o.preventDefault&&z(o.preventDefault)&&o.preventDefault(),o&&o.stopPropagation&&z(o.stopPropagation)&&o.stopPropagation(),Ue().catch(function(g){console.warn("Warning: An unhandled error was caught from submitForm()",g)})}),xt={resetForm:B,validateForm:L,validateField:ie,setErrors:Ee,setFieldError:Se,setFieldTouched:se,setFieldValue:ae,setStatus:vt,setSubmitting:bt,setTouched:pe,setValues:he,setFormikState:yt,submitForm:Ue},rn=U(function(){return m(w.values,xt)}),nn=U(function(o){o&&o.preventDefault&&z(o.preventDefault)&&o.preventDefault(),o&&o.stopPropagation&&z(o.stopPropagation)&&o.stopPropagation(),B()}),an=y.useCallback(function(o){return{value:N(w.values,o),error:N(w.errors,o),touched:!!N(w.touched,o),initialValue:N(p.current,o),initialTouched:!!N($.current,o),initialError:N(E.current,o)}},[w.errors,w.touched,w.values]),sn=y.useCallback(function(o){return{setValue:function(b,x){return ae(o,b,x)},setTouched:function(b,x){return se(o,b,x)},setError:function(b){return Se(o,b)}}},[ae,se,Se]),on=y.useCallback(function(o){var g=Ve(o),b=g?o.name:o,x=N(w.values,b),T={name:b,value:x,onChange:qe,onBlur:Pe};if(g){var O=o.type,R=o.value,Z=o.as,Be=o.multiple;O==="checkbox"?R===void 0?T.checked=!!x:(T.checked=!!(Array.isArray(x)&&~x.indexOf(R)),T.value=R):O==="radio"?(T.checked=x===R,T.value=R):Z==="select"&&Be&&(T.value=T.value||[],T.multiple=!0)}return T},[Pe,qe,w.values]),Ge=y.useMemo(function(){return!J(p.current,w.values)},[p.current,w.values]),un=y.useMemo(function(){return typeof u<"u"?Ge?w.errors&&Object.keys(w.errors).length===0:u!==!1&&z(u)?u(c):u:w.errors&&Object.keys(w.errors).length===0},[u,Ge,w.errors,c]),ln=I({},w,{initialValues:p.current,initialErrors:E.current,initialTouched:$.current,initialStatus:C.current,handleBlur:Pe,handleChange:qe,handleReset:nn,handleSubmit:tn,resetForm:B,setErrors:Ee,setFormikState:yt,setFieldTouched:se,setFieldValue:ae,setFieldError:Se,setStatus:vt,setSubmitting:bt,setTouched:pe,setValues:he,submitForm:Ue,validateForm:L,validateField:ie,isValid:un,dirty:Ge,unregisterField:Fe,registerField:Ne,getFieldProps:on,getFieldMeta:an,getFieldHelpers:sn,validateOnBlur:i,validateOnChange:r,validateOnMount:s});return ln}function ja(t){var e={};if(t.inner){if(t.inner.length===0)return ee(e,t.path,t.message);for(var i=t.inner,r=Array.isArray(i),n=0,i=r?i:i[Symbol.iterator]();;){var a;if(r){if(n>=i.length)break;a=i[n++]}else{if(n=i.next(),n.done)break;a=n.value}var s=a;N(e,s.path)||(e=ee(e,s.path,s.message))}}return e}function Oa(t,e,r,n){r===void 0&&(r=!1);var i=Je(t);return e[r?"validateSync":"validate"](i,{abortEarly:!1,context:i})}function Je(t){var e=Array.isArray(t)?[]:{};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var n=String(r);Array.isArray(t[n])===!0?e[n]=t[n].map(function(i){return Array.isArray(i)===!0||Et(i)?Je(i):i!==""?i:void 0}):Et(t[n])?e[n]=Je(t[n]):e[n]=t[n]!==""?t[n]:void 0}return e}function ka(t,e,r){var n=t.slice();return e.forEach(function(a,s){if(typeof n[s]>"u"){var u=r.clone!==!1,d=u&&r.isMergeableObject(a);n[s]=d?Qe(Array.isArray(a)?[]:{},a,r):a}else r.isMergeableObject(a)?n[s]=Qe(t[s],a,r):t.indexOf(a)===-1&&n.push(a)}),n}function Da(t){return Array.from(t).filter(function(e){return e.selected}).map(function(e){return e.value})}function Ra(t,e,r){if(typeof t=="boolean")return!!e;var n=[],i=!1,a=-1;if(Array.isArray(t))n=t,a=t.indexOf(r),i=a>=0;else if(!r||r=="true"||r=="false")return!!e;return e&&r&&!i?n.concat(r):i?n.slice(0,a).concat(n.slice(a+1)):n}var Ia=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?y.useLayoutEffect:y.useEffect;function U(t){var e=y.useRef(t);return Ia(function(){e.current=t}),y.useCallback(function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return e.current.apply(void 0,n)},[])}var Va=y.forwardRef(function(t,e){var r=t.action,n=cr(t,["action"]),i=r??"#",a=$a(),s=a.handleReset,u=a.handleSubmit;return y.createElement("form",I({onSubmit:u,ref:e,onReset:s,action:i},n))});Va.displayName="Form";var Xe;try{Xe=Map}catch{}var et;try{et=Set}catch{}function fr(t,e,r){if(!t||typeof t!="object"||typeof t=="function")return t;if(t.nodeType&&"cloneNode"in t)return t.cloneNode(!0);if(t instanceof Date)return new Date(t.getTime());if(t instanceof RegExp)return new RegExp(t);if(Array.isArray(t))return t.map(tt);if(Xe&&t instanceof Xe)return new Map(Array.from(t.entries()));if(et&&t instanceof et)return new Set(Array.from(t.values()));if(t instanceof Object){e.push(t);var n=Object.create(t);r.push(n);for(var i in t){var a=e.findIndex(function(s){return s===t[i]});n[i]=a>-1?r[a]:fr(t[i],e,r)}return n}return t}function tt(t){return fr(t,[],[])}const La=Object.prototype.toString,Ma=Error.prototype.toString,Na=RegExp.prototype.toString,qa=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",Pa=/^Symbol\((.*)\)(.*)$/;function Ua(t){return t!=+t?"NaN":t===0&&1/t<0?"-0":""+t}function Ot(t,e=!1){if(t==null||t===!0||t===!1)return""+t;const r=typeof t;if(r==="number")return Ua(t);if(r==="string")return e?`"${t}"`:t;if(r==="function")return"[Function "+(t.name||"anonymous")+"]";if(r==="symbol")return qa.call(t).replace(Pa,"Symbol($1)");const n=La.call(t).slice(8,-1);return n==="Date"?isNaN(t.getTime())?""+t:t.toISOString(t):n==="Error"||t instanceof Error?"["+Ma.call(t)+"]":n==="RegExp"?Na.call(t):null}function be(t,e){let r=Ot(t,e);return r!==null?r:JSON.stringify(t,function(n,i){let a=Ot(this[n],e);return a!==null?a:i},2)}let X={default:"${path} is invalid",required:"${path} is a required field",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:t,type:e,value:r,originalValue:n})=>{let i=n!=null&&n!==r,a=`${t} must be a \`${e}\` type, but the final value was: \`${be(r,!0)}\``+(i?` (cast from the value \`${be(n,!0)}\`).`:".");return r===null&&(a+='\n If "null" is intended as an empty value be sure to mark the schema as `.nullable()`'),a},defined:"${path} must be defined"},H={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},Ga={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},rt={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},Ba={isValue:"${path} field must be ${value}"},nt={noUnknown:"${path} field has unspecified keys: ${unknown}"},za={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"};Object.assign(Object.create(null),{mixed:X,string:H,number:Ga,date:rt,object:nt,array:za,boolean:Ba});var Ha=Object.prototype,Wa=Ha.hasOwnProperty;function Za(t,e){return t!=null&&Wa.call(t,e)}var Ya=Za,Qa=Ya,Ka=Hn;function Ja(t,e){return t!=null&&Ka(t,e,Qa)}var Xa=Ja;const Oe=te(Xa),pr=t=>t&&t.__isYupSchema__;class es{constructor(e,r){if(this.fn=void 0,this.refs=e,this.refs=e,typeof r=="function"){this.fn=r;return}if(!Oe(r,"is"))throw new TypeError("`is:` is required for `when()` conditions");if(!r.then&&!r.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:n,then:i,otherwise:a}=r,s=typeof n=="function"?n:(...u)=>u.every(d=>d===n);this.fn=function(...u){let d=u.pop(),h=u.pop(),m=s(...u)?i:a;if(m)return typeof m=="function"?m(h):h.concat(m.resolve(d))}}resolve(e,r){let n=this.refs.map(a=>a.getValue(r==null?void 0:r.value,r==null?void 0:r.parent,r==null?void 0:r.context)),i=this.fn.apply(e,n.concat(e,r));if(i===void 0||i===e)return e;if(!pr(i))throw new TypeError("conditions must return a schema object");return i.resolve(r)}}function hr(t){return t==null?[]:[].concat(t)}function it(){return it=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},it.apply(this,arguments)}let ts=/\$\{\s*(\w+)\s*\}/g;class q extends Error{static formatError(e,r){const n=r.label||r.path||"this";return n!==r.path&&(r=it({},r,{path:n})),typeof e=="string"?e.replace(ts,(i,a)=>be(r[a])):typeof e=="function"?e(r):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,r,n,i){super(),this.value=void 0,this.path=void 0,this.type=void 0,this.errors=void 0,this.params=void 0,this.inner=void 0,this.name="ValidationError",this.value=r,this.path=n,this.type=i,this.errors=[],this.inner=[],hr(e).forEach(a=>{q.isError(a)?(this.errors.push(...a.errors),this.inner=this.inner.concat(a.inner.length?a.inner:a)):this.errors.push(a)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0],Error.captureStackTrace&&Error.captureStackTrace(this,q)}}const rs=t=>{let e=!1;return(...r)=>{e||(e=!0,t(...r))}};function at(t,e){let{endEarly:r,tests:n,args:i,value:a,errors:s,sort:u,path:d}=t,h=rs(e),m=n.length;const f=[];if(s=s||[],!m)return s.length?h(new q(s,a,d)):h(null,a);for(let c=0;c<n.length;c++){const p=n[c];p(i,function($){if($){if(!q.isError($))return h($,a);if(r)return $.value=a,h($,a);f.push($)}if(--m<=0){if(f.length&&(u&&f.sort(u),s.length&&f.push(...s),s=f),s.length){h(new q(s,a,d),a);return}h(null,a)}})}}var ns=nr,is=tr,as=rr;function ss(t,e){var r={};return e=as(e),is(t,function(n,i,a){ns(r,i,e(n,i,a))}),r}var os=ss;const mr=te(os);function re(t){this._maxSize=t,this.clear()}re.prototype.clear=function(){this._size=0,this._values=Object.create(null)};re.prototype.get=function(t){return this._values[t]};re.prototype.set=function(t,e){return this._size>=this._maxSize&&this.clear(),t in this._values||this._size++,this._values[t]=e};var us=/[^.^\]^[]+|(?=\[\]|\.\.)/g,gr=/^\d+$/,ls=/^\d/,cs=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,ds=/^\s*(['"]?)(.*?)(\1)\s*$/,dt=512,kt=new re(dt),Dt=new re(dt),Rt=new re(dt),Le={Cache:re,split:st,normalizePath:Ze,setter:function(t){var e=Ze(t);return Dt.get(t)||Dt.set(t,function(n,i){for(var a=0,s=e.length,u=n;a<s-1;){var d=e[a];if(d==="__proto__"||d==="constructor"||d==="prototype")return n;u=u[e[a++]]}u[e[a]]=i})},getter:function(t,e){var r=Ze(t);return Rt.get(t)||Rt.set(t,function(i){for(var a=0,s=r.length;a<s;)if(i!=null||!e)i=i[r[a++]];else return;return i})},join:function(t){return t.reduce(function(e,r){return e+(ft(r)||gr.test(r)?"["+r+"]":(e?".":"")+r)},"")},forEach:function(t,e,r){fs(Array.isArray(t)?t:st(t),e,r)}};function Ze(t){return kt.get(t)||kt.set(t,st(t).map(function(e){return e.replace(ds,"$2")}))}function st(t){return t.match(us)||[""]}function fs(t,e,r){var n=t.length,i,a,s,u;for(a=0;a<n;a++)i=t[a],i&&(ms(i)&&(i='"'+i+'"'),u=ft(i),s=!u&&/^\d+$/.test(i),e.call(r,i,u,s,a,t))}function ft(t){return typeof t=="string"&&t&&["'",'"'].indexOf(t.charAt(0))!==-1}function ps(t){return t.match(ls)&&!t.match(gr)}function hs(t){return cs.test(t)}function ms(t){return!ft(t)&&(ps(t)||hs(t))}const _e={context:"$",value:"."};class Q{constructor(e,r={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===_e.context,this.isValue=this.key[0]===_e.value,this.isSibling=!this.isContext&&!this.isValue;let n=this.isContext?_e.context:this.isValue?_e.value:"";this.path=this.key.slice(n.length),this.getter=this.path&&Le.getter(this.path,!0),this.map=r.map}getValue(e,r,n){let i=this.isContext?n:this.isValue?e:r;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(e,r){return this.getValue(e,r==null?void 0:r.parent,r==null?void 0:r.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}Q.prototype.__isYupRef=!0;function ke(){return ke=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},ke.apply(this,arguments)}function gs(t,e){if(t==null)return{};var r={},n=Object.keys(t),i,a;for(a=0;a<n.length;a++)i=n[a],!(e.indexOf(i)>=0)&&(r[i]=t[i]);return r}function Ce(t){function e(r,n){let{value:i,path:a="",label:s,options:u,originalValue:d,sync:h}=r,m=gs(r,["value","path","label","options","originalValue","sync"]);const{name:f,test:c,params:p,message:E}=t;let{parent:$,context:C}=u;function S(w){return Q.isRef(w)?w.getValue(i,$,C):w}function A(w={}){const F=mr(ke({value:i,originalValue:d,label:s,path:w.path||a},p,w.params),S),Y=new q(q.formatError(w.message||E,F),i,F.path,w.type||f);return Y.params=F,Y}let D=ke({path:a,parent:$,type:f,createError:A,resolve:S,options:u,originalValue:d},m);if(!h){try{Promise.resolve(c.call(D,i,D)).then(w=>{q.isError(w)?n(w):w?n(null,w):n(A())}).catch(n)}catch(w){n(w)}return}let V;try{var P;if(V=c.call(D,i,D),typeof((P=V)==null?void 0:P.then)=="function")throw new Error(`Validation test of type: "${D.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`)}catch(w){n(w);return}q.isError(V)?n(V):V?n(null,V):n(A())}return e.OPTIONS=t,e}let ys=t=>t.substr(0,t.length-1).substr(1);function vs(t,e,r,n=r){let i,a,s;return e?(Le.forEach(e,(u,d,h)=>{let m=d?ys(u):u;if(t=t.resolve({context:n,parent:i,value:r}),t.innerType){let f=h?parseInt(m,10):0;if(r&&f>=r.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${u}, in the path: ${e}. because there is no value at that index. `);i=r,r=r&&r[f],t=t.innerType}if(!h){if(!t.fields||!t.fields[m])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${s} which is a type: "${t._type}")`);i=r,r=r&&r[m],t=t.fields[m]}a=m,s=d?"["+u+"]":"."+u}),{schema:t,parent:i,parentPath:a}):{parent:i,parentPath:e,schema:t}}class De{constructor(){this.list=void 0,this.refs=void 0,this.list=new Set,this.refs=new Map}get size(){return this.list.size+this.refs.size}describe(){const e=[];for(const r of this.list)e.push(r);for(const[,r]of this.refs)e.push(r.describe());return e}toArray(){return Array.from(this.list).concat(Array.from(this.refs.values()))}resolveAll(e){return this.toArray().reduce((r,n)=>r.concat(Q.isRef(n)?e(n):n),[])}add(e){Q.isRef(e)?this.refs.set(e.key,e):this.list.add(e)}delete(e){Q.isRef(e)?this.refs.delete(e.key):this.list.delete(e)}clone(){const e=new De;return e.list=new Set(this.list),e.refs=new Map(this.refs),e}merge(e,r){const n=this.clone();return e.list.forEach(i=>n.add(i)),e.refs.forEach(i=>n.add(i)),r.list.forEach(i=>n.delete(i)),r.refs.forEach(i=>n.delete(i)),n}}function G(){return G=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},G.apply(this,arguments)}class M{constructor(e){this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this._typeError=void 0,this._whitelist=new De,this._blacklist=new De,this.exclusiveTests=Object.create(null),this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(X.notType)}),this.type=(e==null?void 0:e.type)||"mixed",this.spec=G({strip:!1,strict:!1,abortEarly:!0,recursive:!0,nullable:!1,presence:"optional"},e==null?void 0:e.spec)}get _type(){return this.type}_typeCheck(e){return!0}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const r=Object.create(Object.getPrototypeOf(this));return r.type=this.type,r._typeError=this._typeError,r._whitelistError=this._whitelistError,r._blacklistError=this._blacklistError,r._whitelist=this._whitelist.clone(),r._blacklist=this._blacklist.clone(),r.exclusiveTests=G({},this.exclusiveTests),r.deps=[...this.deps],r.conditions=[...this.conditions],r.tests=[...this.tests],r.transforms=[...this.transforms],r.spec=tt(G({},this.spec,e)),r}label(e){let r=this.clone();return r.spec.label=e,r}meta(...e){if(e.length===0)return this.spec.meta;let r=this.clone();return r.spec.meta=Object.assign(r.spec.meta||{},e[0]),r}withMutation(e){let r=this._mutate;this._mutate=!0;let n=e(this);return this._mutate=r,n}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let r=this,n=e.clone();const i=G({},r.spec,n.spec);return n.spec=i,n._typeError||(n._typeError=r._typeError),n._whitelistError||(n._whitelistError=r._whitelistError),n._blacklistError||(n._blacklistError=r._blacklistError),n._whitelist=r._whitelist.merge(e._whitelist,e._blacklist),n._blacklist=r._blacklist.merge(e._blacklist,e._whitelist),n.tests=r.tests,n.exclusiveTests=r.exclusiveTests,n.withMutation(a=>{e.tests.forEach(s=>{a.test(s.OPTIONS)})}),n.transforms=[...r.transforms,...n.transforms],n}isType(e){return this.spec.nullable&&e===null?!0:this._typeCheck(e)}resolve(e){let r=this;if(r.conditions.length){let n=r.conditions;r=r.clone(),r.conditions=[],r=n.reduce((i,a)=>a.resolve(i,e),r),r=r.resolve(e)}return r}cast(e,r={}){let n=this.resolve(G({value:e},r)),i=n._cast(e,r);if(e!==void 0&&r.assert!==!1&&n.isType(i)!==!0){let a=be(e),s=be(i);throw new TypeError(`The value of ${r.path||"field"} could not be cast to a value that satisfies the schema type: "${n._type}". 

attempted value: ${a} 
`+(s!==a?`result of cast: ${s}`:""))}return i}_cast(e,r){let n=e===void 0?e:this.transforms.reduce((i,a)=>a.call(this,i,e,this),e);return n===void 0&&(n=this.getDefault()),n}_validate(e,r={},n){let{sync:i,path:a,from:s=[],originalValue:u=e,strict:d=this.spec.strict,abortEarly:h=this.spec.abortEarly}=r,m=e;d||(m=this._cast(m,G({assert:!1},r)));let f={value:m,path:a,options:r,originalValue:u,schema:this,label:this.spec.label,sync:i,from:s},c=[];this._typeError&&c.push(this._typeError);let p=[];this._whitelistError&&p.push(this._whitelistError),this._blacklistError&&p.push(this._blacklistError),at({args:f,value:m,path:a,sync:i,tests:c,endEarly:h},E=>{if(E)return void n(E,m);at({tests:this.tests.concat(p),args:f,path:a,sync:i,value:m,endEarly:h},n)})}validate(e,r,n){let i=this.resolve(G({},r,{value:e}));return typeof n=="function"?i._validate(e,r,n):new Promise((a,s)=>i._validate(e,r,(u,d)=>{u?s(u):a(d)}))}validateSync(e,r){let n=this.resolve(G({},r,{value:e})),i;return n._validate(e,G({},r,{sync:!0}),(a,s)=>{if(a)throw a;i=s}),i}isValid(e,r){return this.validate(e,r).then(()=>!0,n=>{if(q.isError(n))return!1;throw n})}isValidSync(e,r){try{return this.validateSync(e,r),!0}catch(n){if(q.isError(n))return!1;throw n}}_getDefault(){let e=this.spec.default;return e==null?e:typeof e=="function"?e.call(this):tt(e)}getDefault(e){return this.resolve(e||{})._getDefault()}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){let r=this.clone();return r.spec.strict=e,r}_isPresent(e){return e!=null}defined(e=X.defined){return this.test({message:e,name:"defined",exclusive:!0,test(r){return r!==void 0}})}required(e=X.required){return this.clone({presence:"required"}).withMutation(r=>r.test({message:e,name:"required",exclusive:!0,test(n){return this.schema._isPresent(n)}}))}notRequired(){let e=this.clone({presence:"optional"});return e.tests=e.tests.filter(r=>r.OPTIONS.name!=="required"),e}nullable(e=!0){return this.clone({nullable:e!==!1})}transform(e){let r=this.clone();return r.transforms.push(e),r}test(...e){let r;if(e.length===1?typeof e[0]=="function"?r={test:e[0]}:r=e[0]:e.length===2?r={name:e[0],test:e[1]}:r={name:e[0],message:e[1],test:e[2]},r.message===void 0&&(r.message=X.default),typeof r.test!="function")throw new TypeError("`test` is a required parameters");let n=this.clone(),i=Ce(r),a=r.exclusive||r.name&&n.exclusiveTests[r.name]===!0;if(r.exclusive&&!r.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return r.name&&(n.exclusiveTests[r.name]=!!r.exclusive),n.tests=n.tests.filter(s=>!(s.OPTIONS.name===r.name&&(a||s.OPTIONS.test===i.OPTIONS.test))),n.tests.push(i),n}when(e,r){!Array.isArray(e)&&typeof e!="string"&&(r=e,e=".");let n=this.clone(),i=hr(e).map(a=>new Q(a));return i.forEach(a=>{a.isSibling&&n.deps.push(a.key)}),n.conditions.push(new es(i,r)),n}typeError(e){let r=this.clone();return r._typeError=Ce({message:e,name:"typeError",test(n){return n!==void 0&&!this.schema.isType(n)?this.createError({params:{type:this.schema._type}}):!0}}),r}oneOf(e,r=X.oneOf){let n=this.clone();return e.forEach(i=>{n._whitelist.add(i),n._blacklist.delete(i)}),n._whitelistError=Ce({message:r,name:"oneOf",test(i){if(i===void 0)return!0;let a=this.schema._whitelist,s=a.resolveAll(this.resolve);return s.includes(i)?!0:this.createError({params:{values:a.toArray().join(", "),resolved:s}})}}),n}notOneOf(e,r=X.notOneOf){let n=this.clone();return e.forEach(i=>{n._blacklist.add(i),n._whitelist.delete(i)}),n._blacklistError=Ce({message:r,name:"notOneOf",test(i){let a=this.schema._blacklist,s=a.resolveAll(this.resolve);return s.includes(i)?this.createError({params:{values:a.toArray().join(", "),resolved:s}}):!0}}),n}strip(e=!0){let r=this.clone();return r.spec.strip=e,r}describe(){const e=this.clone(),{label:r,meta:n}=e.spec;return{meta:n,label:r,type:e.type,oneOf:e._whitelist.describe(),notOneOf:e._blacklist.describe(),tests:e.tests.map(a=>({name:a.OPTIONS.name,params:a.OPTIONS.params})).filter((a,s,u)=>u.findIndex(d=>d.name===a.name)===s)}}}M.prototype.__isYupSchema__=!0;for(const t of["validate","validateSync"])M.prototype[`${t}At`]=function(e,r,n={}){const{parent:i,parentPath:a,schema:s}=vs(this,e,r,n.context);return s[t](i&&i[a],G({},n,{parent:i,path:e}))};for(const t of["equals","is"])M.prototype[t]=M.prototype.oneOf;for(const t of["not","nope"])M.prototype[t]=M.prototype.notOneOf;M.prototype.optional=M.prototype.notRequired;const bs=M;bs.prototype;const W=t=>t==null;let xs=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,ws=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,Fs=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,Es=t=>W(t)||t===t.trim(),Ss={}.toString();function oe(){return new yr}class yr extends M{constructor(){super({type:"string"}),this.withMutation(()=>{this.transform(function(e){if(this.isType(e)||Array.isArray(e))return e;const r=e!=null&&e.toString?e.toString():e;return r===Ss?e:r})})}_typeCheck(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}_isPresent(e){return super._isPresent(e)&&!!e.length}length(e,r=H.length){return this.test({message:r,name:"length",exclusive:!0,params:{length:e},test(n){return W(n)||n.length===this.resolve(e)}})}min(e,r=H.min){return this.test({message:r,name:"min",exclusive:!0,params:{min:e},test(n){return W(n)||n.length>=this.resolve(e)}})}max(e,r=H.max){return this.test({name:"max",exclusive:!0,message:r,params:{max:e},test(n){return W(n)||n.length<=this.resolve(e)}})}matches(e,r){let n=!1,i,a;return r&&(typeof r=="object"?{excludeEmptyString:n=!1,message:i,name:a}=r:i=r),this.test({name:a||"matches",message:i||H.matches,params:{regex:e},test:s=>W(s)||s===""&&n||s.search(e)!==-1})}email(e=H.email){return this.matches(xs,{name:"email",message:e,excludeEmptyString:!0})}url(e=H.url){return this.matches(ws,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=H.uuid){return this.matches(Fs,{name:"uuid",message:e,excludeEmptyString:!1})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=H.trim){return this.transform(r=>r!=null?r.trim():r).test({message:e,name:"trim",test:Es})}lowercase(e=H.lowercase){return this.transform(r=>W(r)?r:r.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,test:r=>W(r)||r===r.toLowerCase()})}uppercase(e=H.uppercase){return this.transform(r=>W(r)?r:r.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,test:r=>W(r)||r===r.toUpperCase()})}}oe.prototype=yr.prototype;var Ts=/^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;function $s(t){var e=[1,4,5,6,7,10,11],r=0,n,i;if(i=Ts.exec(t)){for(var a=0,s;s=e[a];++a)i[s]=+i[s]||0;i[2]=(+i[2]||1)-1,i[3]=+i[3]||1,i[7]=i[7]?String(i[7]).substr(0,3):0,(i[8]===void 0||i[8]==="")&&(i[9]===void 0||i[9]==="")?n=+new Date(i[1],i[2],i[3],i[4],i[5],i[6],i[7]):(i[8]!=="Z"&&i[9]!==void 0&&(r=i[10]*60+i[11],i[9]==="+"&&(r=0-r)),n=Date.UTC(i[1],i[2],i[3],i[4],i[5]+r,i[6],i[7]))}else n=Date.parse?Date.parse(t):NaN;return n}let vr=new Date(""),_s=t=>Object.prototype.toString.call(t)==="[object Date]";class br extends M{constructor(){super({type:"date"}),this.withMutation(()=>{this.transform(function(e){return this.isType(e)?e:(e=$s(e),isNaN(e)?vr:new Date(e))})})}_typeCheck(e){return _s(e)&&!isNaN(e.getTime())}prepareParam(e,r){let n;if(Q.isRef(e))n=e;else{let i=this.cast(e);if(!this._typeCheck(i))throw new TypeError(`\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`);n=i}return n}min(e,r=rt.min){let n=this.prepareParam(e,"min");return this.test({message:r,name:"min",exclusive:!0,params:{min:e},test(i){return W(i)||i>=this.resolve(n)}})}max(e,r=rt.max){let n=this.prepareParam(e,"max");return this.test({message:r,name:"max",exclusive:!0,params:{max:e},test(i){return W(i)||i<=this.resolve(n)}})}}br.INVALID_DATE=vr;br.prototype;function Cs(t,e,r,n){var i=-1,a=t==null?0:t.length;for(n&&a&&(r=t[++i]);++i<a;)r=e(r,t[i],i,t);return r}var As=Cs;function js(t){return function(e){return t==null?void 0:t[e]}}var Os=js,ks=Os,Ds={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Rs=ks(Ds),Is=Rs,Vs=Is,Ls=ct,Ms=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ns="\\u0300-\\u036f",qs="\\ufe20-\\ufe2f",Ps="\\u20d0-\\u20ff",Us=Ns+qs+Ps,Gs="["+Us+"]",Bs=RegExp(Gs,"g");function zs(t){return t=Ls(t),t&&t.replace(Ms,Vs).replace(Bs,"")}var Hs=zs,Ws=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Zs(t){return t.match(Ws)||[]}var Ys=Zs,Qs=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Ks(t){return Qs.test(t)}var Js=Ks,xr="\\ud800-\\udfff",Xs="\\u0300-\\u036f",eo="\\ufe20-\\ufe2f",to="\\u20d0-\\u20ff",ro=Xs+eo+to,wr="\\u2700-\\u27bf",Fr="a-z\\xdf-\\xf6\\xf8-\\xff",no="\\xac\\xb1\\xd7\\xf7",io="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ao="\\u2000-\\u206f",so=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Er="A-Z\\xc0-\\xd6\\xd8-\\xde",oo="\\ufe0e\\ufe0f",Sr=no+io+ao+so,Tr="['’]",It="["+Sr+"]",uo="["+ro+"]",$r="\\d+",lo="["+wr+"]",_r="["+Fr+"]",Cr="[^"+xr+Sr+$r+wr+Fr+Er+"]",co="\\ud83c[\\udffb-\\udfff]",fo="(?:"+uo+"|"+co+")",po="[^"+xr+"]",Ar="(?:\\ud83c[\\udde6-\\uddff]){2}",jr="[\\ud800-\\udbff][\\udc00-\\udfff]",ue="["+Er+"]",ho="\\u200d",Vt="(?:"+_r+"|"+Cr+")",mo="(?:"+ue+"|"+Cr+")",Lt="(?:"+Tr+"(?:d|ll|m|re|s|t|ve))?",Mt="(?:"+Tr+"(?:D|LL|M|RE|S|T|VE))?",Or=fo+"?",kr="["+oo+"]?",go="(?:"+ho+"(?:"+[po,Ar,jr].join("|")+")"+kr+Or+")*",yo="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",vo="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",bo=kr+Or+go,xo="(?:"+[lo,Ar,jr].join("|")+")"+bo,wo=RegExp([ue+"?"+_r+"+"+Lt+"(?="+[It,ue,"$"].join("|")+")",mo+"+"+Mt+"(?="+[It,ue+Vt,"$"].join("|")+")",ue+"?"+Vt+"+"+Lt,ue+"+"+Mt,vo,yo,$r,xo].join("|"),"g");function Fo(t){return t.match(wo)||[]}var Eo=Fo,So=Ys,To=Js,$o=ct,_o=Eo;function Co(t,e,r){return t=$o(t),e=r?void 0:e,e===void 0?To(t)?_o(t):So(t):t.match(e)||[]}var Ao=Co,jo=As,Oo=Hs,ko=Ao,Do="['’]",Ro=RegExp(Do,"g");function Io(t){return function(e){return jo(ko(Oo(e).replace(Ro,"")),t,"")}}var Dr=Io,Vo=Dr,Lo=Vo(function(t,e,r){return t+(r?"_":"")+e.toLowerCase()}),Mo=Lo;const Nt=te(Mo);var No=ct,qo=Wn;function Po(t){return qo(No(t).toLowerCase())}var Uo=Po,Go=Uo,Bo=Dr,zo=Bo(function(t,e,r){return e=e.toLowerCase(),t+(r?Go(e):e)}),Ho=zo;const Wo=te(Ho);var Zo=nr,Yo=tr,Qo=rr;function Ko(t,e){var r={};return e=Qo(e),Yo(t,function(n,i,a){Zo(r,e(n,i,a),n)}),r}var Jo=Ko;const Xo=te(Jo);var pt={exports:{}};pt.exports=function(t){return Rr(eu(t),t)};pt.exports.array=Rr;function Rr(t,e){var r=t.length,n=new Array(r),i={},a=r,s=tu(e),u=ru(t);for(e.forEach(function(h){if(!u.has(h[0])||!u.has(h[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});a--;)i[a]||d(t[a],a,new Set);return n;function d(h,m,f){if(f.has(h)){var c;try{c=", node was:"+JSON.stringify(h)}catch{c=""}throw new Error("Cyclic dependency"+c)}if(!u.has(h))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(h));if(!i[m]){i[m]=!0;var p=s.get(h)||new Set;if(p=Array.from(p),m=p.length){f.add(h);do{var E=p[--m];d(E,u.get(E),f)}while(m);f.delete(h)}n[--r]=h}}}function eu(t){for(var e=new Set,r=0,n=t.length;r<n;r++){var i=t[r];e.add(i[0]),e.add(i[1])}return Array.from(e)}function tu(t){for(var e=new Map,r=0,n=t.length;r<n;r++){var i=t[r];e.has(i[0])||e.set(i[0],new Set),e.has(i[1])||e.set(i[1],new Set),e.get(i[0]).add(i[1])}return e}function ru(t){for(var e=new Map,r=0,n=t.length;r<n;r++)e.set(t[r],r);return e}var nu=pt.exports;const iu=te(nu);function au(t,e=[]){let r=[],n=new Set,i=new Set(e.map(([s,u])=>`${s}-${u}`));function a(s,u){let d=Le.split(s)[0];n.add(d),i.has(`${u}-${d}`)||r.push([u,d])}for(const s in t)if(Oe(t,s)){let u=t[s];n.add(s),Q.isRef(u)&&u.isSibling?a(u.path,s):pr(u)&&"deps"in u&&u.deps.forEach(d=>a(d,s))}return iu.array(Array.from(n),r).reverse()}function qt(t,e){let r=1/0;return t.some((n,i)=>{var a;if(((a=e.path)==null?void 0:a.indexOf(n))!==-1)return r=i,!0}),r}function Ir(t){return(e,r)=>qt(t,e)-qt(t,r)}function ce(){return ce=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},ce.apply(this,arguments)}let Pt=t=>Object.prototype.toString.call(t)==="[object Object]";function su(t,e){let r=Object.keys(t.fields);return Object.keys(e).filter(n=>r.indexOf(n)===-1)}const ou=Ir([]);class Vr extends M{constructor(e){super({type:"object"}),this.fields=Object.create(null),this._sortErrors=ou,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{this.transform(function(n){if(typeof n=="string")try{n=JSON.parse(n)}catch{n=null}return this.isType(n)?n:null}),e&&this.shape(e)})}_typeCheck(e){return Pt(e)||typeof e=="function"}_cast(e,r={}){var n;let i=super._cast(e,r);if(i===void 0)return this.getDefault();if(!this._typeCheck(i))return i;let a=this.fields,s=(n=r.stripUnknown)!=null?n:this.spec.noUnknown,u=this._nodes.concat(Object.keys(i).filter(f=>this._nodes.indexOf(f)===-1)),d={},h=ce({},r,{parent:d,__validating:r.__validating||!1}),m=!1;for(const f of u){let c=a[f],p=Oe(i,f);if(c){let E,$=i[f];h.path=(r.path?`${r.path}.`:"")+f,c=c.resolve({value:$,context:r.context,parent:d});let C="spec"in c?c.spec:void 0,S=C==null?void 0:C.strict;if(C!=null&&C.strip){m=m||f in i;continue}E=!r.__validating||!S?c.cast(i[f],h):i[f],E!==void 0&&(d[f]=E)}else p&&!s&&(d[f]=i[f]);d[f]!==i[f]&&(m=!0)}return m?d:i}_validate(e,r={},n){let i=[],{sync:a,from:s=[],originalValue:u=e,abortEarly:d=this.spec.abortEarly,recursive:h=this.spec.recursive}=r;s=[{schema:this,value:u},...s],r.__validating=!0,r.originalValue=u,r.from=s,super._validate(e,r,(m,f)=>{if(m){if(!q.isError(m)||d)return void n(m,f);i.push(m)}if(!h||!Pt(f)){n(i[0]||null,f);return}u=u||f;let c=this._nodes.map(p=>(E,$)=>{let C=p.indexOf(".")===-1?(r.path?`${r.path}.`:"")+p:`${r.path||""}["${p}"]`,S=this.fields[p];if(S&&"validate"in S){S.validate(f[p],ce({},r,{path:C,from:s,strict:!0,parent:f,originalValue:u[p]}),$);return}$(null)});at({sync:a,tests:c,value:f,errors:i,endEarly:d,sort:this._sortErrors,path:r.path},n)})}clone(e){const r=super.clone(e);return r.fields=ce({},this.fields),r._nodes=this._nodes,r._excludedEdges=this._excludedEdges,r._sortErrors=this._sortErrors,r}concat(e){let r=super.concat(e),n=r.fields;for(let[i,a]of Object.entries(this.fields)){const s=n[i];s===void 0?n[i]=a:s instanceof M&&a instanceof M&&(n[i]=a.concat(s))}return r.withMutation(()=>r.shape(n,this._excludedEdges))}getDefaultFromShape(){let e={};return this._nodes.forEach(r=>{const n=this.fields[r];e[r]="default"in n?n.getDefault():void 0}),e}_getDefault(){if("default"in this.spec)return super._getDefault();if(this._nodes.length)return this.getDefaultFromShape()}shape(e,r=[]){let n=this.clone(),i=Object.assign(n.fields,e);return n.fields=i,n._sortErrors=Ir(Object.keys(i)),r.length&&(Array.isArray(r[0])||(r=[r]),n._excludedEdges=[...n._excludedEdges,...r]),n._nodes=au(i,n._excludedEdges),n}pick(e){const r={};for(const n of e)this.fields[n]&&(r[n]=this.fields[n]);return this.clone().withMutation(n=>(n.fields={},n.shape(r)))}omit(e){const r=this.clone(),n=r.fields;r.fields={};for(const i of e)delete n[i];return r.withMutation(()=>r.shape(n))}from(e,r,n){let i=Le.getter(e,!0);return this.transform(a=>{if(a==null)return a;let s=a;return Oe(a,e)&&(s=ce({},a),n||delete s[e],s[r]=i(a)),s})}noUnknown(e=!0,r=nt.noUnknown){typeof e=="string"&&(r=e,e=!0);let n=this.test({name:"noUnknown",exclusive:!0,message:r,test(i){if(i==null)return!0;const a=su(this.schema,i);return!e||a.length===0||this.createError({params:{unknown:a.join(", ")}})}});return n.spec.noUnknown=e,n}unknown(e=!0,r=nt.noUnknown){return this.noUnknown(!e,r)}transformKeys(e){return this.transform(r=>r&&Xo(r,(n,i)=>e(i)))}camelCase(){return this.transformKeys(Wo)}snakeCase(){return this.transformKeys(Nt)}constantCase(){return this.transformKeys(e=>Nt(e).toUpperCase())}describe(){let e=super.describe();return e.fields=mr(this.fields,r=>r.describe()),e}}function Lr(t){return new Vr(t)}Lr.prototype=Vr.prototype;const Mr=y.createContext({createShop:async()=>!1});function uu(){return Vn.useContext(Mr)}const lu="data:image/svg+xml,%3csvg%20width='21'%20height='20'%20viewBox='0%200%2021%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_88181_86185)'%3e%3cg%20clip-path='url(%23clip1_88181_86185)'%3e%3cpath%20d='M20.0818%205.08784C19.8523%204.20996%2019.1739%203.51871%2018.3136%203.28369C16.7545%202.85742%2010.5%202.85742%2010.5%202.85742C10.5%202.85742%204.24545%202.85742%202.68636%203.28369C1.82614%203.51871%201.14773%204.20996%200.918182%205.08784C0.5%206.68%200.5%2010.0003%200.5%2010.0003C0.5%2010.0003%200.5%2013.3206%200.918182%2014.9127C1.14773%2015.7906%201.82614%2016.4818%202.68636%2016.7169C4.24659%2017.1431%2010.5%2017.1431%2010.5%2017.1431C10.5%2017.1431%2016.7545%2017.1431%2018.3136%2016.7169C19.1739%2016.4818%2019.8523%2015.7906%2020.0818%2014.9127C20.5%2013.3217%2020.5%2010.0003%2020.5%2010.0003C20.5%2010.0003%2020.5%206.68%2020.0818%205.08784Z'%20fill='%23FF0000'/%3e%3cpath%20d='M8.45459%2013.0153L13.6819%2010.0003L8.45459%206.98535V13.0153Z'%20fill='white'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_88181_86185'%3e%3crect%20width='20'%20height='20'%20fill='white'%20transform='translate(0.5)'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1_88181_86185'%3e%3crect%20width='20'%20height='14.2857'%20fill='white'%20transform='translate(0.5%202.85742)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",cu="data:image/svg+xml,%3csvg%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20.8215%2011.1429L17.3929%2014.5715H13.9643L10.9643%2017.5715V14.5715H7.10718V1.71436H20.8215V11.1429Z'%20fill='white'/%3e%3cpath%20d='M6.25007%200L1.96436%204.28571V19.7143H7.10721V24L11.3929%2019.7143H14.8215L22.5358%2012V0H6.25007ZM20.8215%2011.1429L17.3929%2014.5714H13.9644L10.9644%2017.5714V14.5714H7.10721V1.71429H20.8215V11.1429Z'%20fill='%239146FF'/%3e%3cpath%20d='M18.2499%204.71436H16.5356V9.85721H18.2499V4.71436Z'%20fill='%239146FF'/%3e%3cpath%20d='M13.5358%204.71436H11.8215V9.85721H13.5358V4.71436Z'%20fill='%239146FF'/%3e%3c/svg%3e",du="/onboarding-static/assets/tiktok-BNNLC_TM.svg",fu="/onboarding-static/assets/instagram-Qb0D8Hu9.svg",pu="data:image/svg+xml,%3csvg%20width='16'%20height='15'%20viewBox='0%200%2016%2015'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.5%207.39062H4.5M8%204V11M8%2014.0625C11.6244%2014.0625%2014.5625%2011.1244%2014.5625%207.5C14.5625%203.87563%2011.6244%200.9375%208%200.9375C4.37563%200.9375%201.4375%203.87563%201.4375%207.5C1.4375%2011.1244%204.37563%2014.0625%208%2014.0625Z'%20stroke='%236F6F69'/%3e%3c/svg%3e";class hu extends Yn{constructor(){super(...arguments),this.getPages=({shop_id:e,theme_id:r})=>this.get(`/shops/${e}/themes/${r}/pages`),this.getPageLayout=(e,r,n)=>this.get(`/shops/${e}/themes/${r}/pages/${n}`),this.updateSettingSection=(e,r,n,i,a)=>this.put(`/shops/${e}/themes/${r}/pages/${n}/sections/${i}/settings`,a),this.getAvailableSectionList=(e,r,n)=>{const i=new URLSearchParams({block_id:n}).toString();return this.get(`/shops/${e}/themes/${r}/sections?${i}`)},this.getPage=({shop_id:e,page_id:r})=>this.get(`/shops/${e}/pages/${r}`),this.createPage=({shop_id:e},r)=>this.post(`/shops/${e}/pages`,r),this.updatePageSettings=({shop_id:e,page_id:r},n)=>this.put(`/shops/${e}/pages/${r}`,n),this.removePage=({shop_id:e,page_id:r})=>this.delete(`/shops/${e}/pages/${r}`),this.createLayoutSection=({shop_id:e,theme_id:r,page_id:n,block_id:i},a)=>this.post(`/shops/${e}/themes/${r}/pages/${n}/blocks/${i}/sections`,a),this.removeLayoutSection=({shop_id:e,theme_id:r,section_id:n})=>this.delete(`/shops/${e}/themes/${r}/sections/${n}`),this.updateLayoutSectionOrder=(e,r)=>this.post(`/shops/${e.shop_id}/themes/${e.theme_id}/sections/${e.section_id}/reorder`,r),this.updateSectionVisibility=({shop_id:e,theme_id:r,page_id:n,section_id:i},a)=>this.put(`/shops/${e}/themes/${r}/pages/${n}/sections/${i}/visibility`,a),this.getNavigations=e=>this.get(`/shops/${e}/navigations`),this.createNavigationLink=({shop_id:e,navigation_handle:r},n)=>this.post(`/shops/${e}/navigations/${r}/links`,n),this.updateNavigationLink=({shop_id:e,navigation_handle:r,link_id:n},i)=>this.put(`/shops/${e}/navigations/${r}/links/${n}`,i),this.removeNavigationLink=(e,r,n)=>this.delete(`/shops/${e}/navigations/${r}/links/${n}`),this.getSocialNetworks=e=>this.get(`/shops/${e}/social_networks`),this.updateSocialNetwork=(e,r,n)=>this.patch(`/shops/${e}/social_networks/${r}`,n),this.deleteSocialNetwork=(e,r)=>this.delete(`/shops/${e}/social_networks/${r}`),this.searchSocialNetworks=(e,r,n)=>this.get(`/shops/${e}/social_networks/${r}/search?handle=${n}`),this.createTiktokIntegration=(e,r)=>this.post(`/shops/${e}/integrations/tiktok`,r),this.getTiktokIntegration=e=>this.get(`/shops/${e}/integrations/tiktok`),this.removeTiktokIntegration=e=>this.delete(`/shops/${e}/integrations/tiktok`),this.updateTiktokIntegration=(e,r)=>this.put(`/shops/${e}/integrations/tiktok`,r),this.createInstagramIntegration=(e,r)=>this.post(`/shops/${e}/integrations/instagram`,r),this.getInstagramIntegration=e=>this.get(`/shops/${e}/integrations/instagram`),this.removeInstagramIntegration=e=>this.delete(`/shops/${e}/integrations/instagram`),this.duplicateTheme=(e,r)=>this.post(`/shops/${e}/themes/${r}/copy`),this.renameTheme=(e,r,n)=>this.put(`/shops/${e}/themes/${r}`,n),this.deleteTheme=(e,r)=>this.delete(`/shops/${e}/themes/${r}`),this.getShop=({shop_id:e})=>this.get(`/shops/${e}`),this.updateShop=({shop_id:e},r)=>this.put(`/shops/${e}`,r),this.updateSection=({shop_id:e,theme_id:r,section_id:n},i)=>this.put(`/shops/${e}/themes/${r}/sections/${n}`,i),this.getThemeChangelog=({theme_handle:e,theme_version:r})=>this.get(`/public/themes/${e}/${r}/changelog`),this.getSection=({shop_id:e,theme_id:r,section_key:n})=>this.get(`/shops/${e}/themes/${r}/sections/${n}`),this.updateSectionSettings=({shop_id:e,theme_id:r,section_id:n},i)=>this.put(`/shops/${e}/themes/${r}/sections/${n}/settings`,i),this.getSectionSchema=e=>this.get(`/shops/${e.shop_id}/section_schemas/themes/${e.theme_id}/sections/${e.section_id}`),this.getSectionSchemas=(e,r)=>this.get(`/shops/${e.shop_id}/section_schemas/themes/${e.theme_id}`,r),this.searchPublicSocialNetworks=(e,r)=>this.get(`/public/social_networks/${e.social_network_name}/search`,r),this.getIcons=e=>this.get(`/shops/${e.shop_id}/icons`),this.getMembershipsPostTypes=e=>this.get(`/shops/${e.shop_id}/memberships/types/posts`),this.getMembershipsPostTags=e=>this.get(`/shops/${e.shop_id}/memberships/tags/posts`),this.getMembershipsVideoSeries=e=>this.get(`/shops/${e.shop_id}/memberships/series/posts`),this.getMembershipsPostAccess=e=>this.get(`/shops/${e.shop_id}/memberships/access/posts`),this.getLinkables=(e,r)=>this.get(`/shops/${e.shop_id}/navigations/linkables`,r),this.disablePageTemplates=(e,r)=>this.put(`/shops/${e.shop_id}/theme_page_templates/disable`,r),this.enablePageTemplates=(e,r)=>this.put(`/shops/${e.shop_id}/theme_page_templates/enable`,r),this.createSection=(e,r)=>this.post(`/shops/${e.shop_id}/themes/${e.theme_id}/sections`,r)}}const mu=new hu(Zn("api")),gu=Qn(mu.searchPublicSocialNetworks,{queryKey:["socialNetworks"]}),yu=({initialSearchParams:t})=>{var h,m;const[e,r]=y.useState(null),[n,i]=y.useState(t),a=ir(n,300),{socialNetworksQuery:s}=gu([{social_network_name:(a==null?void 0:a.platformValue)||""},{handle:(a==null?void 0:a.searchValue)||""}],{enabled:!!n&&!!(a!=null&&a.searchValue.length),retry:2}),u=((h=s.data)==null?void 0:h.results.map(({handle:f="",name:c="",image:p="",publicUrl:E=""})=>({handle:f,name:c,imageUrl:p,channelUrl:E})))||[],d=f=>{const c=u.find(({handle:p})=>p===f)||null;c&&(r(c),i(p=>({platformValue:(p==null?void 0:p.platformValue)||"",searchValue:c.name})))};return{options:u,selectedChannel:e,searchValue:(n==null?void 0:n.searchValue)||"",socialNetworkError:s.error,isLoading:!!((m=a==null?void 0:a.searchValue)!=null&&m.length)&&s.isLoading||(a==null?void 0:a.platformValue)!==(n==null?void 0:n.platformValue),onSearch:i,onSelect:d}},vu=(t,e)=>{y.useEffect(()=>{const r=n=>{!t.current||t.current.contains(n.target)||e(n)};return document.addEventListener("mousedown",r),document.addEventListener("touchstart",r),()=>{document.removeEventListener("mousedown",r),document.removeEventListener("touchstart",r)}},[t,e])},bu=j.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  background: none;
  cursor: pointer;

  ${ut.laptop} {
    height: 56px;
  }

  ${({active:t})=>t&&_`
      background: ${v.GS200};
    `}

  &:hover {
    background: ${v.GS200};
  }
`,Nr=({active:t,value:e,children:r,onClick:n})=>{const i=y.useRef(null);return y.useEffect(()=>{var a;t&&((a=i==null?void 0:i.current)==null||a.scrollIntoView())},[t]),l.jsx(bu,{ref:i,active:t,onClick:()=>n(e),children:r})};Nr.__docgenInfo={description:"",methods:[],displayName:"Option",props:{active:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!0,tsType:{name:"any"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: ReactNode) => void",signature:{arguments:[{type:{name:"ReactNode"},name:"value"}],return:{name:"void"}}},description:""}}};const xu=j.div`
  position: absolute;
  left: 0;
  bottom: ${({transform:t})=>`${t}px`};
  width: 100%;
  background: white;
  border: 1px solid ${v.GS500};
  max-height: 200px;
  z-index: 10;
  padding: 4px 0;
  overflow: auto;
  box-shadow: rgba(100, 100, 111, 0.2) 0px -7px 29px 0px;

  ${ut.laptop} {
    max-height: 220px;
    padding: 8px 0;
    bottom: auto;
    top: ${({transform:t})=>`${t}px`};
    box-shadow: none;
  }
`,qr=_`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`,wu=j.div`
  ${qr};
`,Fu=j.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,Eu=j.div`
  ${qr};
  text-align: center;
`,Pr=({isLoading:t,emptyState:e,value:r,options:n,activeOptionIndex:i,inputRef:a,innerRef:s,onSelect:u})=>{var c;const d=y.useRef(null),h=ir(r,300);if(!a.current||!t&&!e&&!n.length||!(r!=null&&r.length))return null;const{height:m}=(c=a.current)==null?void 0:c.getBoundingClientRect(),f=()=>t||!h?l.jsx(wu,{children:l.jsx(Sn,{})}):!n.length&&e?l.jsx(Eu,{children:e}):l.jsx(Fu,{children:n.map((p,E)=>l.jsx(Nr,{active:E===i,value:p.value,onClick:u,children:p.component},E))});return l.jsx("div",{ref:s,children:l.jsx(xu,{ref:d,transform:m+12,children:f()})})};Pr.__docgenInfo={description:"",methods:[],displayName:"AutoCompleteBox",props:{activeOptionIndex:{required:!1,tsType:{name:"number"},description:""},inputRef:{required:!0,tsType:{name:"MutableRefObject",elements:[{name:"any"}],raw:"MutableRefObject<any>"},description:""},innerRef:{required:!1,tsType:{name:"MutableRefObject",elements:[{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]}],raw:"MutableRefObject<HTMLDivElement | null>"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: any
  component: ReactNode
}`,signature:{properties:[{key:"value",value:{name:"any",required:!0}},{key:"component",value:{name:"ReactNode",required:!0}}]}}],raw:`{
  value: any
  component: ReactNode
}[]`},description:""},emptyState:{required:!1,tsType:{name:"ReactNode"},description:""},value:{required:!1,tsType:{name:"string"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: ReactNode) => void",signature:{arguments:[{type:{name:"ReactNode"},name:"value"}],return:{name:"void"}}},description:""}}};var le=(t=>(t[t.ArrowDown=40]="ArrowDown",t[t.ArrowUp=38]="ArrowUp",t[t.Escape=27]="Escape",t[t.Enter=13]="Enter",t[t.Tab=9]="Tab",t))(le||{});const Su="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.82444%2011.1267V12.6467M6.83333%207.25289C6.83333%206.37316%207.54649%205.66%208.42622%205.66H9.22267C10.1024%205.66%2010.8156%206.37316%2010.8156%207.25289C10.8156%208.13262%2010.1024%208.84578%209.22267%208.84578H8.82444V10.0404M9%2016.5C13.1421%2016.5%2016.5%2013.1421%2016.5%209C16.5%204.85786%2013.1421%201.5%209%201.5C4.85786%201.5%201.5%204.85786%201.5%209C1.5%2013.1421%204.85786%2016.5%209%2016.5Z'%20stroke='%236F6F69'%20stroke-width='1.5'/%3e%3c/svg%3e",Tu=j.div(({withPadding:t,fluid:e,width:r})=>_`
    position: relative;
    z-index: 1;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    border: 1px solid ${v.GS700};
    background-color: ${v.GS1000};
    color: ${v.GS100};

    ${t&&_`
      padding: 5px 8px;
    `}

    ${e&&_`
      width: auto;
    `}

    ${r?_`
          width: ${r}px;
        `:_`
          max-width: 250px;
        `}
  `),$u=({placement:t})=>{if(t!=null&&t.includes("bottom"))return _`
      top: -5px;
    `;if(t!=null&&t.includes("top"))return _`
      top: calc(100% - 4px);
    `;if(t!=null&&t.includes("left"))return _`
      right: -4px;
    `;if(t!=null&&t.includes("right"))return _`
      left: -5px;
    `},_u=({placement:t})=>{if(t!=null&&t.includes("bottom"))return _`
      border-top: 1px solid ${v.GS700};
      border-left: 1px solid ${v.GS700};
    `;if(t!=null&&t.includes("top"))return _`
      border-bottom: 1px solid ${v.GS700};
      border-right: 1px solid ${v.GS700};
    `;if(t!=null&&t.includes("left"))return _`
      border-top: 1px solid ${v.GS700};
      border-right: 1px solid ${v.GS700};
    `;if(t!=null&&t.includes("right"))return _`
      border-bottom: 1px solid ${v.GS700};
      border-left: 1px solid ${v.GS700};
    `},Cu=j.div`
  ${$u};

  &,
  &::before {
    position: absolute;
    width: 8px;
    height: 8px;
    z-index: -1;
  }

  &::before {
    content: '';
    transform: rotate(45deg);
    background: ${v.GS1000};
    ${_u};
  }
`,de=({children:t})=>l.jsx(Tn,{children:t}),Au=({children:t})=>{const e=({ref:r})=>l.jsx("div",{ref:r,children:t});return l.jsx($n,{children:e})},ju=({placement:t="bottom",strategy:e="absolute",offset:r=[0,10],width:n,withPadding:i=!0,fluid:a=!1,arrow:s=!1,children:u})=>{const d=y.useRef(null);y.useLayoutEffect(()=>{d.current&&d.current()},[u]);const h=({ref:m,style:f,placement:c,update:p,arrowProps:E})=>(d.current=p,l.jsxs(Tu,{ref:m,placement:c,withPadding:i,width:n,fluid:a,style:f,children:[u,s&&l.jsx(Cu,{ref:E.ref,placement:c,style:{...E.style}})]}));return l.jsx("div",{style:{zIndex:10},children:l.jsx(_n,{placement:t,strategy:e,modifiers:[{name:"offset",options:{offset:r}},{name:"preventOverflow",options:{padding:8}}],children:h})})};de.Body=ju;de.Reference=Au;de.__docgenInfo={description:"",methods:[{name:"Body",docblock:null,modifiers:["static"],params:[{name:`{
  placement = 'bottom',
  strategy = 'absolute',
  offset = [0, 10],
  width,
  withPadding = true,
  fluid = false,
  arrow = false,
  children,
}: TooltipStaticBodyProps`,optional:!1,type:{name:"signature",type:"object",raw:`{
  placement?: Placement
  strategy?: 'absolute' | 'fixed'
  offset?: [number, number]
  width?: number
  withPadding?: boolean
  fluid?: boolean
  arrow?: boolean
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
| 'left-end'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-start'"},{name:"literal",value:"'right-end'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-start'"},{name:"literal",value:"'left-end'"}],required:!1}},{key:"strategy",value:{name:"union",raw:"'absolute' | 'fixed'",elements:[{name:"literal",value:"'absolute'"},{name:"literal",value:"'fixed'"}],required:!1}},{key:"offset",value:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}],required:!1}},{key:"width",value:{name:"number",required:!1}},{key:"withPadding",value:{name:"boolean",required:!1}},{key:"fluid",value:{name:"boolean",required:!1}},{key:"arrow",value:{name:"boolean",required:!1}},{key:"children",value:{name:"ReactNode",required:!0}}]},alias:"TooltipStaticBodyProps"}}],returns:null},{name:"Reference",docblock:null,modifiers:["static"],params:[{name:"{ children }: TooltipStaticReferenceProps",optional:!1,type:{name:"signature",type:"object",raw:`{
  children: ReactNode
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}}]},alias:"TooltipStaticReferenceProps"}}],returns:null}],displayName:"TooltipStatic",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Ur=({reference:t,placement:e="bottom",strategy:r="absolute",offset:n=[0,10],width:i,withPadding:a=!0,fluid:s=!1,arrow:u=!1,children:d})=>{const[h,m]=y.useState(!1);return l.jsx(de,{children:l.jsxs("div",{onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),onTouchStart:()=>m(!0),onTouchEnd:()=>m(!1),"data-testid":"Tooltip",children:[l.jsx(de.Reference,{children:t}),h&&l.jsx(de.Body,{placement:e,strategy:r,offset:n,width:i,withPadding:a,fluid:s,arrow:u,children:d})]})})};Ur.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{reference:{required:!0,tsType:{name:"ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:`| 'top'
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
| 'left-end'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'top-start'"},{name:"literal",value:"'top-end'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-start'"},{name:"literal",value:"'right-end'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottom-start'"},{name:"literal",value:"'bottom-end'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-start'"},{name:"literal",value:"'left-end'"}]},description:"",defaultValue:{value:"'bottom'",computed:!1}},strategy:{required:!1,tsType:{name:"union",raw:"'absolute' | 'fixed'",elements:[{name:"literal",value:"'absolute'"},{name:"literal",value:"'fixed'"}]},description:"",defaultValue:{value:"'absolute'",computed:!1}},offset:{required:!1,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:"",defaultValue:{value:"[0, 10]",computed:!1}},width:{required:!1,tsType:{name:"number"},description:""},withPadding:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},fluid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},arrow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Ou=`
  height: 56px;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  border: 1px solid ${v.GS500};
  font-size: 16px;
  border-radius: 0;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${v.GS600};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${v.GS600};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${v.GS600};
  }

  &:focus {
    outline: none;
    border-color: ${v.GS1000};
  }

  &:disabled {
    background: ${v.GS200};
    border: 1px solid ${v.GS500};
  }
`,ku=j.div`
  ${({error:t})=>t&&_`
      input,
      textarea {
        border-color: ${v.R300};
      }
    `}
`,Ut=j.input`
  ${Ou};
`,Du=j.div`
  height: 100%;
  width: 100%;
  position: relative;

  ${({hasLabel:t})=>t&&_`
      input {
        padding-top: 18px;
      }
    `}

  ${({rightContent:t})=>t&&_`
      input {
        padding-right: 48px;
      }
    `}

  ${({leftContent:t})=>t&&_`
      input {
        padding-left: 48px;
      }
    `}
`,Ru=j.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`,Gr=_`
  position: absolute;
  top: 0;
  height: 100%;
  padding: 16px;
  max-width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,Iu=j.div`
  ${Gr};
  right: 0;

  ${({clickable:t})=>t&&_`
      cursor: pointer;
    `}
`,Vu=j.div`
  ${Gr};
  left: 0;
`,Lu=j.div`
  position: absolute;
  bottom: 7px;
  left: 17px;
  font-size: inherit;
  color: ${v.GS600};
  pointer-events: none;
  white-space: nowrap;
  width: calc(100% - 34px);
  overflow: hidden;

  ${({rightContent:t})=>t&&_`
      width: calc(100% - 65px);
    `}
  span {
    visibility: hidden;
  }
`,Br=j.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: ${v.GS600};
  pointer-events: none;
  font-size: 16px;
  padding-left: 16px;
  padding-right: 16px;
  white-space: nowrap;

  user-select: none;

  ${({hasValue:t})=>_`
    height: 56px;
    line-height: 56px;

    ${t&&_`
      font-size: 12px;
      line-height: 34px;
    `}
  `}

  ${({size:t,hasValue:e})=>t==="medium"&&_`
      height: 48px;
      line-height: 48px;

      ${e&&_`
        font-size: 12px;
        line-height: 30px;
      `}
    `}

  ${({size:t,hasValue:e})=>t==="small"&&_`
      height: 40px;
      line-height: 40px;

      ${e&&_`
        display: none;
      `}
    `}

  ${({disabled:t})=>t&&_`
      color: ${v.GS600};
    `}

  ${({leftSpacing:t})=>t&&_`
      padding-left: 48px;
    `}

  ${({rightSpacing:t})=>t&&_`
      padding-right: 48px;
    `}
`,zr=j.p`
  font-size: 14px;
  line-height: 150%;
  color: ${v.R300};
  margin-top: 4px;
`,Hr=j.p`
  font-size: 14px;
  line-height: 150%;
  color: ${v.GS550};
  margin-top: 4px;
`,xe=({name:t,clean:e,value:r,isSubmitted:n,autocomplete:i,register:a,rules:s,error:u,errors:d,className:h,maxLength:m,label:f,type:c="text",tooltip:p,leftContent:E,rightContent:$,tooltipWidth:C=250,message:S,suffix:A,disabled:D,required:V=!1,onRightContentClick:P,onChange:w,onBlur:F,onFocus:Y,onKeyDown:ne,onPaste:fe,...we})=>{var he;const[Me,L]=y.useState(!1),B=d&&((he=d[t])==null?void 0:he.message)||u,ie=!!B,Ne=!!(r!=null&&r.length),Fe=()=>{F&&F(),L(!1)},pe=()=>{Y&&Y(),L(!0)},Ee=()=>e?l.jsx(Ut,{autoComplete:i,name:t,value:r,type:c,"aria-invalid":ie,maxLength:m,disabled:D,required:V,onChange:w,onFocus:pe,onBlur:Fe,onKeyDown:ne,onPaste:fe}):l.jsx(Ut,{autoComplete:i,name:t,"aria-invalid":ie,maxLength:m,disabled:D,type:c,...we,...a&&a(t,s),required:V,onFocus:pe,onBlur:Fe,onKeyDown:ne,onPaste:fe});return l.jsxs(ku,{error:ie,children:[l.jsxs(Du,{rightContent:!!(p!=null&&p.length)||!!$,leftContent:!!E,hasLabel:!!f,children:[f&&l.jsx(Br,{leftSpacing:!!E,rightSpacing:!!(p!=null&&p.length)||!!$,hasValue:Ne||Me,children:f}),Ee(),!!(A!=null&&A.length)&&!!r&&!!r.length&&l.jsxs(Lu,{rightContent:!!(p!=null&&p.length),children:[l.jsx("span",{children:r}),A]}),(p==null?void 0:p.length)&&!$&&l.jsx(Ru,{children:l.jsx(Ur,{placement:"top",width:C,reference:l.jsx("img",{src:Su}),children:p})}),E&&l.jsx(Vu,{children:E}),$&&l.jsx(Iu,{clickable:!!P,onClick:P,children:$})]}),S&&l.jsx(Hr,{children:S}),!!(B!=null&&B.length)&&l.jsx(zr,{children:B})]})};xe.Error=zr;xe.Label=Br;xe.Message=Hr;xe.__docgenInfo={description:"",methods:[],displayName:"Input",props:{name:{required:!0,tsType:{name:"Path",elements:[{name:"TFormValues"}],raw:"Path<TFormValues>"},description:""},rules:{required:!1,tsType:{name:"RegisterOptions"},description:""},register:{required:!1,tsType:{name:"UseFormRegister",elements:[{name:"TFormValues"}],raw:"UseFormRegister<TFormValues>"},description:""},errors:{required:!1,tsType:{name:"union",raw:"Partial<DeepMap<TFormValues, FieldError>> | FieldErrorsImpl<DeepRequired<TFormValues>>",elements:[{name:"Partial",elements:[{name:"DeepMap",elements:[{name:"TFormValues"},{name:"FieldError"}],raw:"DeepMap<TFormValues, FieldError>"}],raw:"Partial<DeepMap<TFormValues, FieldError>>"},{name:"FieldErrorsImpl",elements:[{name:"DeepRequired",elements:[{name:"TFormValues"}],raw:"DeepRequired<TFormValues>"}],raw:"FieldErrorsImpl<DeepRequired<TFormValues>>"}]},description:""},type:{defaultValue:{value:"'text'",computed:!1},required:!1},tooltipWidth:{defaultValue:{value:"250",computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1}}};const Wr=({name:t,label:e,disabled:r,isLoading:n,emptyState:i,errors:a,tooltip:s,leftContent:u,options:d,searchValue:h,onChangeSearchValue:m,onOptionSelect:f,onPaste:c})=>{const p=y.useRef(null),E=y.useRef(null),{laptop:$}=Cn(),[C,S]=y.useState(!1),[A,D]=y.useState(null);vu(E,()=>{S(!1)}),y.useEffect(()=>{if($)return window.addEventListener("blur",()=>S(!1)),()=>{window.removeEventListener("blur",()=>S(!1))}},[$]),y.useEffect(()=>{C||D(null)},[C]);const V=F=>{f(F),S(!1)},P=F=>{m(F.target.value)},w=F=>{switch(F.keyCode){case le.ArrowDown:F.preventDefault(),D(A===null||A+1>d.length-1?0:A+1);break;case le.ArrowUp:F.preventDefault(),D(A===null||A-1<0?d.length-1:A-1);break;case le.Escape:F.preventDefault(),S(!1);break;case le.Tab:C&&d.length&&(F.preventDefault(),D(A===null||A+1>d.length-1?0:A+1));break;case le.Enter:A!==null&&(F.preventDefault(),V(d[A].value));break}};return l.jsxs("div",{style:{position:"relative"},ref:E,children:[l.jsx("div",{ref:p,onClick:()=>{C||S(!0)},children:l.jsx(xe,{autocomplete:"off",clean:!0,label:e,disabled:r,name:t,tooltip:s,errors:a,leftContent:u,value:h,onChange:P,onKeyDown:w,onFocus:()=>{setTimeout(()=>S(!0),0)},onPaste:c})}),C&&!r&&l.jsx(Pr,{emptyState:i,isLoading:n,value:h,options:d,inputRef:p,activeOptionIndex:A!==null?A:void 0,onSelect:V})]})};Wr.__docgenInfo={description:"",methods:[],displayName:"AutoCompleteInput",props:{name:{required:!0,tsType:{name:"Path",elements:[{name:"TFormValues"}],raw:"Path<TFormValues>"},description:""},errors:{required:!1,tsType:{name:"union",raw:"Partial<DeepMap<TFormValues, FieldError>> | FieldErrorsImpl<DeepRequired<TFormValues>>",elements:[{name:"Partial",elements:[{name:"DeepMap",elements:[{name:"TFormValues"},{name:"FieldError"}],raw:"DeepMap<TFormValues, FieldError>"}],raw:"Partial<DeepMap<TFormValues, FieldError>>"},{name:"FieldErrorsImpl",elements:[{name:"DeepRequired",elements:[{name:"TFormValues"}],raw:"DeepRequired<TFormValues>"}],raw:"FieldErrorsImpl<DeepRequired<TFormValues>>"}]},description:""},isLoading:{required:!0,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!0,tsType:{name:"string"},description:""},tooltip:{required:!1,tsType:{name:"string"},description:""},leftContent:{required:!1,tsType:{name:"ReactNode"},description:""},error:{required:!1,tsType:{name:"string"},description:""},emptyState:{required:!1,tsType:{name:"ReactNode"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:""},searchValue:{required:!0,tsType:{name:"string"},description:""},onChangeSearchValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onOptionSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},onPaste:{required:!1,tsType:{name:"ClipboardEventHandler",elements:[{name:"HTMLInputElement"}],raw:"ClipboardEventHandler<HTMLInputElement>"},description:""}}};const Mu="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M24.0002%2024.1L18%2013.7L14.4%2018.3L12%2016.6L7.8%2024.1H24.0002ZM9%208.1C8.5%208.1%208.1%208.5%208.1%209C8.1%209.5%208.5%209.9%209%209.9C9.5%209.9%209.9%209.5%209.9%209C9.9%208.5%209.5%208.1%209%208.1Z'%20stroke='%23CDCCCA'%20stroke-width='1.5'/%3e%3cpath%20d='M1%201H31V31H1V1Z'%20stroke='%23CDCCCA'%20stroke-width='1.5'/%3e%3c/svg%3e",Nu=An`
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`,qu=j.div`
  height: 100%;
  width: 100%;
  background: ${v.GS300};
  position: relative;
`,Pu=j.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Uu=j.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(-45deg, ${v.GS300}, ${v.GS200}, ${v.GS300});
  background-size: 300% 300%;
  animation: ${Nu} 2s ease-in-out infinite alternate;
`,Gu=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`,Zr=({src:t,alt:e})=>{const[r,n]=y.useState(!1),[i,a]=y.useState(!0),s=()=>r?l.jsx(Gu,{children:l.jsx("img",{src:Mu,width:"16px"})}):l.jsx(Pu,{src:t,alt:e,onLoad:()=>a(!1),onError:()=>{n(!0),a(!1)}}),u=()=>i?l.jsx(Uu,{}):null;return l.jsxs(qu,{children:[s(),u()]})};Zr.__docgenInfo={description:"",methods:[],displayName:"Image",props:{src:{required:!0,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""}}};const Bu=j.div`
  padding: 0 16px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`,zu=j.div`
  height: 32px;
  width: 32px;
  border-radius: 100%;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${ut.laptop} {
    height: 36px;
    width: 36px;
  }
`,Hu=j.p`
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,Yr=({img:t,name:e})=>l.jsxs(Bu,{children:[l.jsx(zu,{children:l.jsx(Zr,{src:t,alt:e})}),l.jsx(Hu,{children:e})]});Yr.__docgenInfo={description:"",methods:[],displayName:"SocialNetworkLink",props:{img:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""}}};const Wu=j.button`
  color: inherit;
  background: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;

  ${({disabled:t})=>t?_`
          cursor: default;
          opacity: 0.4;
        `:_`
          &:hover,
          &:focus {
            color: ${v.GS1000};

            svg path {
              stroke: ${v.GS1000};
            }
          }

          &:active {
            color: ${v.GS800};

            svg path {
              stroke: ${v.GS800};
            }
          }
        `};

  &:hover {
    text-decoration: underline;
  }
`,ht=({children:t,href:e,className:r,disabled:n=!1,analytics:i,target:a,onClick:s=void 0})=>l.jsx(Wu,{as:e?"a":"button",type:"button",className:r,href:e,disabled:n,"data-analytics":i,target:a,onClick:s,children:t});ht.__docgenInfo={description:"",methods:[],displayName:"ButtonClean",props:{children:{required:!0,tsType:{name:"union",raw:"ReactNode | string",elements:[{name:"ReactNode"},{name:"string"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},href:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},analytics:{required:!1,tsType:{name:"string"},description:""},target:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"",defaultValue:{value:"undefined",computed:!0}}}};const Zu=j.div`
  font-size: 16px;
  line-height: 150%;

  span {
    font-size: 14px;
    color: ${v.GS600};
    font-weight: 500;
  }
`,me=t=>{const{searchValue:e,options:r,isLoading:n,onSearch:i,onSelect:a}=yu({}),s=r.map(u=>({id:u.handle,value:u.handle,content:u.handle,component:l.jsx(Yr,{name:u.name,img:u.imageUrl})}))||[];return l.jsx(Wr,{name:t.platform,label:t.label,leftContent:t.logo,isLoading:n,options:s,searchValue:e,disabled:t.disabled,emptyState:l.jsxs(Zu,{children:["No channels found. ",l.jsx("br",{}),l.jsxs("span",{children:["Try different search term or"," ",l.jsx(ht,{onClick:()=>{},children:"type URL manually"}),"."]})]}),onChangeSearchValue:u=>{i({platformValue:t.platform,searchValue:u})},onOptionSelect:u=>{a(u),t.setValue(u)}})};me.__docgenInfo={description:"",methods:[],displayName:"SplashAutocomplete",props:{platform:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},logo:{required:!0,tsType:{name:"ReactNode"},description:""},disabled:{required:!0,tsType:{name:"boolean"},description:""},setValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""}}};const Yu=({fullwidth:t})=>{if(t)return"100%"},Ye=({appearance:t,$inverted:e,mode:r})=>{if(t==="primary")return e?v.B500:v.GS0;if(t==="secondary")return r==="dark"?v.GS0:v.GS1000},Qu=({appearance:t,mode:e})=>t==="secondary"&&e==="dark"?`1px solid ${v.GS600}`:"none",Gt=({appearance:t,$inverted:e,mode:r})=>{if(t==="dark")return v.GS800;if(t==="primary")return e?v.GS0:v.B500;if(t==="secondary")return r==="dark"?v.GS1000:v.GS300},Ku=({appearance:t,$inverted:e,mode:r})=>{if(t==="primary")return e?v.GS200:v.B600;if(t==="secondary")return r==="dark"?v.GS800:v.GS400},Ju=({appearance:t,$inverted:e,mode:r})=>{if(t==="primary")return e?v.GS0:v.B700;if(t==="secondary")return r==="dark"?v.GS700:v.GS300},Xu=({size:t})=>{if(t==="small")return 40;if(t==="medium")return 46;if(t==="large")return 56},Bt=({size:t})=>{if(t==="small")return 16;if(t==="medium")return 20;if(t==="large")return 24},el=j.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${Yu};
  position: relative;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  white-space: nowrap;
  cursor: pointer;

  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  color: ${Ye};
  border: ${Qu};
  background-color: ${Gt};

  height: ${Xu}px;
  padding-left: ${Bt}px;
  padding-right: ${Bt}px;
  transition: background-color 0.2s linear;

  &:hover,
  &:focus {
    background-color: ${Ku};
    color: ${Ye};
  }

  &:active {
    background-color: ${Ju};
    color: ${Ye};
  }

  ${({disabled:t,appearance:e,$inverted:r,mode:n})=>t&&_`
      cursor: default;
      opacity: 0.4;

      &:hover,
      &:focus {
        background-color: ${Gt({appearance:e,$inverted:r,mode:n})};
      }
    `};
`,tl=j.span`
  display: flex;
  align-items: center;

  ${({isLoading:t})=>t&&_`
      visibility: hidden;
    `}
`,rl=j.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`,nl={primary:v.GS1000,secondary:v.GS0},il=j.div`
  > svg {
    animation: 1.4s ease-in-out -1.05s infinite normal both running rotation;

    path {
      stroke: ${({appearance:t="primary"})=>nl[t]};
    }
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(359deg);
    }
  }
`,al="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.5%2012c0%205.799%204.701%2010.5%2010.5%2010.5S22.5%2017.799%2022.5%2012%2017.799%201.5%2012%201.5'%20stroke='currentColor'%20stroke-width='2'/%3e%3c/svg%3e",Qr=({appearance:t="primary"})=>l.jsx(il,{appearance:t,children:l.jsx("img",{src:al})});Qr.__docgenInfo={description:"",methods:[],displayName:"Loader",props:{appearance:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}}}};const Kr=({appearance:t="primary",children:e,fullwidth:r,href:n,$inverted:i=!1,size:a="medium",isLoading:s=!1,type:u="button",mode:d="light",to:h,disabled:m=!1,analytics:f,name:c,value:p,autoFocus:E=!1,onClick:$=void 0})=>l.jsxs(el,{as:n?"a":"button",appearance:t,to:h,href:n,size:a,fullwidth:r,$inverted:i,type:u,mode:d,disabled:m||s,"data-analytics":f,name:c,value:p,autoFocus:E,onClick:$,children:[l.jsx(tl,{isLoading:s,children:e}),s&&l.jsx(rl,{children:l.jsx(Qr,{appearance:"secondary"})})]});Kr.__docgenInfo={description:"",methods:[],displayName:"Button",props:{appearance:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'dark'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'dark'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},children:{required:!0,tsType:{name:"union",raw:"ReactNode | string",elements:[{name:"ReactNode"},{name:"string"}]},description:""},fullwidth:{required:!1,tsType:{name:"boolean"},description:""},href:{required:!1,tsType:{name:"union",raw:"string | URL",elements:[{name:"string"},{name:"URL"}]},description:""},$inverted:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset' | undefined",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"},{name:"undefined"}]},description:"",defaultValue:{value:"'button'",computed:!1}},mode:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"",defaultValue:{value:"'light'",computed:!1}},to:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},analytics:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},autoFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"",defaultValue:{value:"undefined",computed:!0}}}};const Jr=()=>{const{createShop:t}=uu(),e=Aa({initialValues:{name:""},validationSchema:Lr().shape({name:oe().required("This field is required."),youtube:oe(),twitch:oe(),tiktok:oe(),instagram:oe()}),onSubmit:(r,{setSubmitting:n})=>{t(r.name,{youtube:r.youtube,twitch:r.twitch,tiktok:r.tiktok,instagram:r.instagram}),n(!1)}});return l.jsx("form",{onSubmit:e.handleSubmit,children:l.jsx("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"70px",height:"100%"},children:l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[l.jsx("h2",{children:"Enter your details"}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[l.jsx(zn,{label:"Your name/nickname",disabled:e.isSubmitting,error:e.touched.name&&e.errors.name||void 0,...e.getFieldProps("name"),actionIcon:l.jsx(Xn,{appearance:"secondary",content:"Enter your name."})}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[l.jsx("b",{children:"Enter your social channels"}),l.jsx("p",{style:{color:v.GS600},children:"This helps us personalize your experience"})]}),l.jsx(me,{platform:"youtube",label:"YouTube channel (e.g. MKBHD)",logo:l.jsx("img",{src:lu}),disabled:e.isSubmitting,setValue:r=>e.setFieldValue("youtube",r)}),l.jsx(me,{platform:"twitch",label:"Twitch channel (e.g. willneff)",logo:l.jsx("img",{src:cu}),disabled:e.isSubmitting,setValue:r=>e.setFieldValue("twitch",r)}),l.jsx(me,{platform:"twitch",label:"TikTok account (e.g. @mad_mitch)",logo:l.jsx("img",{src:du}),disabled:e.isSubmitting,setValue:r=>e.setFieldValue("tiktok",r)}),l.jsx(me,{platform:"instagram",label:"Instagram profile (e.g. madsmitch)",logo:l.jsx("img",{src:fu}),disabled:e.isSubmitting,setValue:r=>e.setFieldValue("instagram",r)}),l.jsx("div",{children:l.jsx(ht,{href:"#",children:l.jsxs("div",{style:{display:"flex",gap:"8px",color:v.GS600,textDecoration:"none"},children:[l.jsx("img",{src:pu})," Add another channel"]})})})]}),l.jsx("div",{children:l.jsx(Kr,{type:"submit",appearance:"primary",size:"large",fullwidth:!0,isLoading:e.isSubmitting,children:"Continue"})})]})]})})})};Jr.__docgenInfo={description:"",methods:[],displayName:"EnterDetails"};const sl=j.img`
  width: auto;
  height: 20px;
  object-fit: cover;
`,Xr=()=>l.jsx(Ln,{logo:l.jsx(sl,{src:jn}),left:l.jsx(Mn,{}),right:l.jsx(Jr,{})}),en=Xr;Xr.__docgenInfo={description:"",methods:[],displayName:"PreOnboardingDetails"};const Fl={title:"CreatorOnboarding/PreOnboardingDetails",component:en},ol=new Kn({defaultOptions:{queries:{refetchOnWindowFocus:!1}}}),ul=t=>{const e=y.useMemo(()=>({createShop:async(r,n)=>{alert(JSON.stringify({name:r,socials:n},null,2))}}),[]);return l.jsxs(On,{children:[l.jsx(kn,{}),l.jsx(Dn,{fonts:Rn.flatMap(r=>r.fonts.flatMap(n=>[n.heading,n.text]))}),l.jsx(In,{}),l.jsx(Jn,{client:ol,children:l.jsx(Mr.Provider,{value:e,children:l.jsx(en,{...t})})})]})},ge=ul.bind({});ge.args={};var zt,Ht,Wt;ge.parameters={...ge.parameters,docs:{...(zt=ge.parameters)==null?void 0:zt.docs,source:{originalSource:`args => {
  const contextValue = useMemo(() => ({
    createShop: async (name, socials) => {
      alert(JSON.stringify({
        name,
        socials
      }, null, 2));
    }
  }), []);
  return <MediaQueryProvider>
      <SuisseIntlFont />
      <GoogleFontInject fonts={DEFAULT_FONTS.flatMap(f => f.fonts.flatMap(ff => [ff.heading, ff.text]))} />
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <ShopCreationContext.Provider value={contextValue}>
          <PreOnboardingDetails {...args} />
        </ShopCreationContext.Provider>
      </QueryClientProvider>
    </MediaQueryProvider>;
}`,...(Wt=(Ht=ge.parameters)==null?void 0:Ht.docs)==null?void 0:Wt.source}}};const El=["Default"];export{ge as Default,El as __namedExportsOrder,Fl as default};
