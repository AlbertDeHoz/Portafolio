function k(){}const F=t=>t;function w(t,n){for(const e in n)t[e]=n[e];return t}function E(t){return t()}function M(){return Object.create(null)}function j(t){t.forEach(E)}function S(t){return typeof t=="function"}function A(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let l;function B(t,n){return t===n?!0:(l||(l=document.createElement("a")),l.href=n,t===l.href)}function D(t){return Object.keys(t).length===0}function q(t,...n){if(t==null){for(const r of n)r(void 0);return k}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function P(t,n,e){t.$$.on_destroy.push(q(n,e))}function U(t,n,e,r){if(t){const o=y(t,n,e,r);return t[0](o)}}function y(t,n,e,r){return t[1]&&r?w(e.ctx.slice(),t[1](r(n))):e.ctx}function G(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const a=[],d=Math.max(n.dirty.length,o.length);for(let u=0;u<d;u+=1)a[u]=n.dirty[u]|o[u];return a}return n.dirty|o}return n.dirty}function H(t,n,e,r,o,a){if(o){const d=y(n,e,r,a);t.p(d,o)}}function I(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function J(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function K(t,n){const e={};n=new Set(n);for(const r in t)!n.has(r)&&r[0]!=="$"&&(e[r]=t[r]);return e}function L(t){const n=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return n?[parseFloat(n[1]),n[2]||"px"]:[t,"px"]}let f;function h(t){f=t}function _(){if(!f)throw new Error("Function called outside component initialization");return f}function N(t){_().$$.on_mount.push(t)}function Q(t){_().$$.after_update.push(t)}function R(t,n){return _().$$.context.set(t,n),n}function T(t){return _().$$.context.get(t)}const i=[],b=[];let s=[];const m=[],x=Promise.resolve();let g=!1;function C(){g||(g=!0,x.then(v))}function V(){return C(),x}function O(t){s.push(t)}const p=new Set;let c=0;function v(){if(c!==0)return;const t=f;do{try{for(;c<i.length;){const n=i[c];c++,h(n),z(n.$$)}}catch(n){throw i.length=0,c=0,n}for(h(null),i.length=0,c=0;b.length;)b.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];p.has(e)||(p.add(e),e())}s.length=0}while(i.length);for(;m.length;)m.pop()();g=!1,p.clear(),h(t)}function z(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(O)}}function W(t){const n=[],e=[];s.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),s=n}export{f as A,h as B,E as C,i as D,C as E,Q as a,b,U as c,G as d,P as e,w as f,I as g,J as h,L as i,O as j,T as k,R as l,B as m,k as n,N as o,K as p,S as q,j as r,A as s,V as t,H as u,F as v,M as w,v as x,D as y,W as z};