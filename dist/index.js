"use strict";var c=function(e,i){return function(){return i||e((i={exports:{}}).exports,i),i.exports}};var y=c(function(D,x){
var m=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-abs/dist');function O(e,i,n,o){var v,u,t,s,a,r,f;if(v=i.data,u=i.accessors[0],e===1||n===0)return r=q(u(v,o)),m(r)?NaN:0;for(a=o,f=0;f<e&&(r=q(u(v,a)),r!==r);f++)a+=n;if(f===e)return NaN;for(s=r,t=s,f+=1,f;f<e;f++)a+=n,r=q(u(v,a)),!m(r)&&(r<s?s=r:r>t&&(t=r));return t-s}x.exports=O
});var l=c(function(E,p){
var P=require('@stdlib/array-base-arraylike2object/dist'),g=require('@stdlib/math-base-assert-is-nan/dist'),b=require('@stdlib/math-base-special-abs/dist'),R=y();function d(e,i,n,o){var v,u,t,s,a,r;if(e<=0)return NaN;if(s=P(i),s.accessorProtocol)return R(e,s,n,o);if(e===1||n===0)return a=b(i[o]),g(a)?NaN:0;for(t=o,r=0;r<e&&(a=b(i[t]),a!==a);r++)t+=n;if(r===e)return NaN;for(u=a,v=u,r+=1,r;r<e;r++)t+=n,a=b(i[t]),!g(a)&&(a<u?u=a:a>v&&(v=a));return v-u}p.exports=d
});var j=c(function(F,k){
var h=require('@stdlib/strided-base-stride2offset/dist'),w=l();function z(e,i,n){return w(e,i,n,h(e,n))}k.exports=z
});var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),N=j(),B=l();A(N,"ndarray",B);module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
