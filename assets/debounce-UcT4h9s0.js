import{g as C}from"./index-RYns6xqu.js";import{i as O}from"./isFunction-Bz83i0dB.js";import{c as j}from"./isObjectLike-CC4gzjQa.js";import{i as A}from"./toString-BOixDalF.js";var L=j,M=function(){return L.Date.now()},B=M,F=/\s/;function R(e){for(var n=e.length;n--&&F.test(e.charAt(n)););return n}var D=R,H=D,P=/^\s+/;function U(e){return e&&e.slice(0,H(e)+1).replace(P,"")}var X=U,q=X,y=O,w=A,_=NaN,z=/^[-+]0x[0-9a-f]+$/i,G=/^0b[01]+$/i,J=/^0o[0-7]+$/i,K=parseInt;function Q(e){if(typeof e=="number")return e;if(w(e))return _;if(y(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=y(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=q(e);var t=G.test(e);return t||J.test(e)?K(e.slice(2),t?2:8):z.test(e)?_:+e}var V=Q,Y=O,T=B,$=V,Z="Expected a function",ee=Math.max,re=Math.min;function ne(e,n,t){var o,s,l,u,i,f,m=0,I=!1,d=!1,b=!0;if(typeof e!="function")throw new TypeError(Z);n=$(n)||0,Y(t)&&(I=!!t.leading,d="maxWait"in t,l=d?ee($(t.maxWait)||0,n):l,b="trailing"in t?!!t.trailing:b);function g(r){var a=o,c=s;return o=s=void 0,m=r,u=e.apply(c,a),u}function S(r){return m=r,i=setTimeout(v,n),I?g(r):u}function k(r){var a=r-f,c=r-m,E=n-a;return d?re(E,l-c):E}function p(r){var a=r-f,c=r-m;return f===void 0||a>=n||a<0||d&&c>=l}function v(){var r=T();if(p(r))return h(r);i=setTimeout(v,k(r))}function h(r){return i=void 0,b&&o?g(r):(o=s=void 0,u)}function N(){i!==void 0&&clearTimeout(i),m=0,o=f=s=i=void 0}function W(){return i===void 0?u:h(T())}function x(){var r=T(),a=p(r);if(o=arguments,s=this,f=r,a){if(i===void 0)return S(f);if(d)return clearTimeout(i),i=setTimeout(v,n),g(f)}return i===void 0&&(i=setTimeout(v,n)),u}return x.cancel=N,x.flush=W,x}var ie=ne;const ue=C(ie);export{ie as a,ue as d};
