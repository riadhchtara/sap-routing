/**
 * @license
 * lodash 3.10.1 (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./lodash.js`
 */
;(function(){function n(n,t){if(n!==t){var r=null===n,e=n===w,u=n===n,o=null===t,i=t===w,f=t===t;if(n>t&&!o||!u||r&&!i&&f||e&&f)return 1;if(n<t&&!r||!f||o&&!e&&u||i&&u)return-1}return 0}function t(n,t,r){for(var e=n.length,u=r?e:-1;r?u--:++u<e;)if(t(n[u],u,n))return u;return-1}function r(n,t,r){if(t!==t)return p(n,r);r-=1;for(var e=n.length;++r<e;)if(n[r]===t)return r;return-1}function e(n){return typeof n=="function"||false}function u(n){return null==n?"":n+""}function o(n,t){for(var r=-1,e=n.length;++r<e&&-1<t.indexOf(n.charAt(r)););
return r}function i(n,t){for(var r=n.length;r--&&-1<t.indexOf(n.charAt(r)););return r}function f(t,r){return n(t.a,r.a)||t.b-r.b}function a(n){return Nn[n]}function c(n){return Tn[n]}function l(n,t,r){return t?n=Bn[n]:r&&(n=Dn[n]),"\\"+n}function s(n){return"\\"+Dn[n]}function p(n,t,r){var e=n.length;for(t+=r?0:-1;r?t--:++t<e;){var u=n[t];if(u!==u)return t}return-1}function h(n){return!!n&&typeof n=="object"}function _(n){return 160>=n&&9<=n&&13>=n||32==n||160==n||5760==n||6158==n||8192<=n&&(8202>=n||8232==n||8233==n||8239==n||8287==n||12288==n||65279==n);
}function v(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;)n[r]===t&&(n[r]=z,o[++u]=r);return o}function g(n){for(var t=-1,r=n.length;++t<r&&_(n.charCodeAt(t)););return t}function y(n){for(var t=n.length;t--&&_(n.charCodeAt(t)););return t}function d(n){return Ln[n]}function m(_){function Nn(n){if(h(n)&&!(Oo(n)||n instanceof zn)){if(n instanceof Ln)return n;if(nu.call(n,"__chain__")&&nu.call(n,"__wrapped__"))return Mr(n)}return new Ln(n)}function Tn(){}function Ln(n,t,r){this.__wrapped__=n,this.__actions__=r||[],
this.__chain__=!!t}function zn(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=Ru,this.__views__=[]}function Bn(){this.__data__={}}function Dn(n){var t=n?n.length:0;for(this.data={hash:gu(null),set:new lu};t--;)this.push(n[t])}function Mn(n,t){var r=n.data;return(typeof t=="string"||ge(t)?r.set.has(t):r.hash[t])?0:-1}function qn(n,t){var r=-1,e=n.length;for(t||(t=Be(e));++r<e;)t[r]=n[r];return t}function Pn(n,t){for(var r=-1,e=n.length;++r<e&&false!==t(n[r],r,n););
return n}function Kn(n,t){for(var r=-1,e=n.length;++r<e;)if(!t(n[r],r,n))return false;return true}function Vn(n,t){for(var r=-1,e=n.length,u=-1,o=[];++r<e;){var i=n[r];t(i,r,n)&&(o[++u]=i)}return o}function Gn(n,t){for(var r=-1,e=n.length,u=Be(e);++r<e;)u[r]=t(n[r],r,n);return u}function Jn(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function Xn(n,t,r,e){var u=-1,o=n.length;for(e&&o&&(r=n[++u]);++u<o;)r=t(r,n[u],u,n);return r}function Hn(n,t){for(var r=-1,e=n.length;++r<e;)if(t(n[r],r,n))return true;
return false}function Qn(n,t,r,e){return n!==w&&nu.call(e,r)?n:t}function nt(n,t,r){for(var e=-1,u=zo(t),o=u.length;++e<o;){var i=u[e],f=n[i],a=r(f,t[i],i,n,t);(a===a?a===f:f!==f)&&(f!==w||i in n)||(n[i]=a)}return n}function tt(n,t){return null==t?n:et(t,zo(t),n)}function rt(n,t){for(var r=-1,e=null==n,u=!e&&Er(n),o=u?n.length:0,i=t.length,f=Be(i);++r<i;){var a=t[r];f[r]=u?Cr(a,o)?n[a]:w:e?w:n[a]}return f}function et(n,t,r){r||(r={});for(var e=-1,u=t.length;++e<u;){var o=t[e];r[o]=n[o]}return r}function ut(n,t,r){
var e=typeof n;return"function"==e?t===w?n:Bt(n,t,r):null==n?Fe:"object"==e?bt(n):t===w?ze(n):xt(n,t)}function ot(n,t,r,e,u,o,i){var f;if(r&&(f=u?r(n,e,u):r(n)),f!==w)return f;if(!ge(n))return n;if(e=Oo(n)){if(f=kr(n),!t)return qn(n,f)}else{var a=ru.call(n),c=a==K;if(a!=Z&&a!=B&&(!c||u))return Fn[a]?Rr(n,a,t):u?n:{};if(f=Ir(c?{}:n),!t)return tt(f,n)}for(o||(o=[]),i||(i=[]),u=o.length;u--;)if(o[u]==n)return i[u];return o.push(n),i.push(f),(e?Pn:_t)(n,function(e,u){f[u]=ot(e,t,r,u,n,o,i)}),f}function it(n,t,r){
if(typeof n!="function")throw new Ge(L);return su(function(){n.apply(w,r)},t)}function ft(n,t){var e=n?n.length:0,u=[];if(!e)return u;var o=-1,i=xr(),f=i===r,a=f&&t.length>=F&&gu&&lu?new Dn(t):null,c=t.length;a&&(i=Mn,f=false,t=a);n:for(;++o<e;)if(a=n[o],f&&a===a){for(var l=c;l--;)if(t[l]===a)continue n;u.push(a)}else 0>i(t,a,0)&&u.push(a);return u}function at(n,t){var r=true;return Su(n,function(n,e,u){return r=!!t(n,e,u)}),r}function ct(n,t,r,e){var u=e,o=u;return Su(n,function(n,i,f){i=+t(n,i,f),(r(i,u)||i===e&&i===o)&&(u=i,
o=n)}),o}function lt(n,t){var r=[];return Su(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function st(n,t,r,e){var u;return r(n,function(n,r,o){return t(n,r,o)?(u=e?r:n,false):void 0}),u}function pt(n,t,r,e){e||(e=[]);for(var u=-1,o=n.length;++u<o;){var i=n[u];h(i)&&Er(i)&&(r||Oo(i)||pe(i))?t?pt(i,t,r,e):Jn(e,i):r||(e[e.length]=i)}return e}function ht(n,t){Nu(n,t,Re)}function _t(n,t){return Nu(n,t,zo)}function vt(n,t){return Tu(n,t,zo)}function gt(n,t){for(var r=-1,e=t.length,u=-1,o=[];++r<e;){var i=t[r];
ve(n[i])&&(o[++u]=i)}return o}function yt(n,t,r){if(null!=n){r!==w&&r in Br(n)&&(t=[r]),r=0;for(var e=t.length;null!=n&&r<e;)n=n[t[r++]];return r&&r==e?n:w}}function dt(n,t,r,e,u,o){if(n===t)n=true;else if(null==n||null==t||!ge(n)&&!h(t))n=n!==n&&t!==t;else n:{var i=dt,f=Oo(n),a=Oo(t),c=D,l=D;f||(c=ru.call(n),c==B?c=Z:c!=Z&&(f=xe(n))),a||(l=ru.call(t),l==B?l=Z:l!=Z&&xe(t));var s=c==Z,a=l==Z,l=c==l;if(!l||f||s){if(!e&&(c=s&&nu.call(n,"__wrapped__"),a=a&&nu.call(t,"__wrapped__"),c||a)){n=i(c?n.value():n,a?t.value():t,r,e,u,o);
break n}if(l){for(u||(u=[]),o||(o=[]),c=u.length;c--;)if(u[c]==n){n=o[c]==t;break n}u.push(n),o.push(t),n=(f?yr:mr)(n,t,i,r,e,u,o),u.pop(),o.pop()}else n=false}else n=dr(n,t,c)}return n}function mt(n,t,r){var e=t.length,u=e,o=!r;if(null==n)return!u;for(n=Br(n);e--;){var i=t[e];if(o&&i[2]?i[1]!==n[i[0]]:!(i[0]in n))return false}for(;++e<u;){var i=t[e],f=i[0],a=n[f],c=i[1];if(o&&i[2]){if(a===w&&!(f in n))return false}else if(i=r?r(a,c,f):w,i===w?!dt(c,a,r,true):!i)return false}return true}function wt(n,t){var r=-1,e=Er(n)?Be(n.length):[];
return Su(n,function(n,u,o){e[++r]=t(n,u,o)}),e}function bt(n){var t=Ar(n);if(1==t.length&&t[0][2]){var r=t[0][0],e=t[0][1];return function(n){return null==n?false:n[r]===e&&(e!==w||r in Br(n))}}return function(n){return mt(n,t)}}function xt(n,t){var r=Oo(n),e=Wr(n)&&t===t&&!ge(t),u=n+"";return n=Dr(n),function(o){if(null==o)return false;var i=u;if(o=Br(o),!(!r&&e||i in o)){if(o=1==n.length?o:yt(o,Et(n,0,-1)),null==o)return false;i=Zr(n),o=Br(o)}return o[i]===t?t!==w||i in o:dt(t,o[i],w,true)}}function At(n,t,r,e,u){
if(!ge(n))return n;var o=Er(t)&&(Oo(t)||xe(t)),i=o?w:zo(t);return Pn(i||t,function(f,a){if(i&&(a=f,f=t[a]),h(f)){e||(e=[]),u||(u=[]);n:{for(var c=a,l=e,s=u,p=l.length,_=t[c];p--;)if(l[p]==_){n[c]=s[p];break n}var p=n[c],v=r?r(p,_,c,n,t):w,g=v===w;g&&(v=_,Er(_)&&(Oo(_)||xe(_))?v=Oo(p)?p:Er(p)?qn(p):[]:me(_)||pe(_)?v=pe(p)?ke(p):me(p)?p:{}:g=false),l.push(_),s.push(v),g?n[c]=At(v,_,r,l,s):(v===v?v!==p:p===p)&&(n[c]=v)}}else c=n[a],l=r?r(c,f,a,n,t):w,(s=l===w)&&(l=f),l===w&&(!o||a in n)||!s&&(l===l?l===c:c!==c)||(n[a]=l);
}),n}function jt(n){return function(t){return null==t?w:t[n]}}function kt(n){var t=n+"";return n=Dr(n),function(r){return yt(r,n,t)}}function It(n,t){for(var r=n?t.length:0;r--;){var e=t[r];if(e!=u&&Cr(e)){var u=e;pu.call(n,e,1)}}}function Rt(n,t){return n+yu(ku()*(t-n+1))}function Ot(n,t,r,e,u){return u(n,function(n,u,o){r=e?(e=false,n):t(r,n,u,o)}),r}function Et(n,t,r){var e=-1,u=n.length;for(t=null==t?0:+t||0,0>t&&(t=-t>u?0:u+t),r=r===w||r>u?u:+r||0,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Be(u);++e<u;)r[e]=n[e+t];
return r}function Ct(n,t){var r;return Su(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function Ut(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function Wt(t,r,e){var u=wr(),o=-1;return r=Gn(r,function(n){return u(n)}),t=wt(t,function(n){return{a:Gn(r,function(t){return t(n)}),b:++o,c:n}}),Ut(t,function(t,r){var u;n:{for(var o=-1,i=t.a,f=r.a,a=i.length,c=e.length;++o<a;)if(u=n(i[o],f[o])){if(o>=c)break n;o=e[o],u*="asc"===o||true===o?1:-1;break n}u=t.b-r.b}return u})}function $t(n,t){
var r=0;return Su(n,function(n,e,u){r+=+t(n,e,u)||0}),r}function St(n,t){var e=-1,u=xr(),o=n.length,i=u===r,f=i&&o>=F,a=f&&gu&&lu?new Dn(void 0):null,c=[];a?(u=Mn,i=false):(f=false,a=t?[]:c);n:for(;++e<o;){var l=n[e],s=t?t(l,e,n):l;if(i&&l===l){for(var p=a.length;p--;)if(a[p]===s)continue n;t&&a.push(s),c.push(l)}else 0>u(a,s,0)&&((t||f)&&a.push(s),c.push(l))}return c}function Ft(n,t){for(var r=-1,e=t.length,u=Be(e);++r<e;)u[r]=n[t[r]];return u}function Nt(n,t,r,e){for(var u=n.length,o=e?u:-1;(e?o--:++o<u)&&t(n[o],o,n););
return r?Et(n,e?0:o,e?o+1:u):Et(n,e?o+1:0,e?u:o)}function Tt(n,t){var r=n;r instanceof zn&&(r=r.value());for(var e=-1,u=t.length;++e<u;)var o=t[e],r=o.func.apply(o.thisArg,Jn([r],o.args));return r}function Lt(n,t,r){var e=0,u=n?n.length:e;if(typeof t=="number"&&t===t&&u<=Eu){for(;e<u;){var o=e+u>>>1,i=n[o];(r?i<=t:i<t)&&null!==i?e=o+1:u=o}return u}return zt(n,t,Fe,r)}function zt(n,t,r,e){t=r(t);for(var u=0,o=n?n.length:0,i=t!==t,f=null===t,a=t===w;u<o;){var c=yu((u+o)/2),l=r(n[c]),s=l!==w,p=l===l;
(i?p||e:f?p&&s&&(e||null!=l):a?p&&(e||s):null==l?0:e?l<=t:l<t)?u=c+1:o=c}return xu(o,Ou)}function Bt(n,t,r){if(typeof n!="function")return Fe;if(t===w)return n;switch(r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,o){return n.call(t,r,e,u,o)};case 5:return function(r,e,u,o,i){return n.call(t,r,e,u,o,i)}}return function(){return n.apply(t,arguments)}}function Dt(n){var t=new ou(n.byteLength);return new hu(t).set(new hu(n)),
t}function Mt(n,t,r){for(var e=r.length,u=-1,o=bu(n.length-e,0),i=-1,f=t.length,a=Be(f+o);++i<f;)a[i]=t[i];for(;++u<e;)a[r[u]]=n[u];for(;o--;)a[i++]=n[u++];return a}function qt(n,t,r){for(var e=-1,u=r.length,o=-1,i=bu(n.length-u,0),f=-1,a=t.length,c=Be(i+a);++o<i;)c[o]=n[o];for(i=o;++f<a;)c[i+f]=t[f];for(;++e<u;)c[i+r[e]]=n[o++];return c}function Pt(n,t){return function(r,e,u){var o=t?t():{};if(e=wr(e,u,3),Oo(r)){u=-1;for(var i=r.length;++u<i;){var f=r[u];n(o,f,e(f,u,r),r)}}else Su(r,function(t,r,u){
n(o,t,e(t,r,u),u)});return o}}function Kt(n){return le(function(t,r){var e=-1,u=null==t?0:r.length,o=2<u?r[u-2]:w,i=2<u?r[2]:w,f=1<u?r[u-1]:w;for(typeof o=="function"?(o=Bt(o,f,5),u-=2):(o=typeof f=="function"?f:w,u-=o?1:0),i&&Ur(r[0],r[1],i)&&(o=3>u?w:o,u=1);++e<u;)(i=r[e])&&n(t,i,o);return t})}function Vt(n,t){return function(r,e){var u=r?Bu(r):0;if(!Sr(u))return n(r,e);for(var o=t?u:-1,i=Br(r);(t?o--:++o<u)&&false!==e(i[o],o,i););return r}}function Zt(n){return function(t,r,e){var u=Br(t);e=e(t);for(var o=e.length,i=n?o:-1;n?i--:++i<o;){
var f=e[i];if(false===r(u[f],f,u))break}return t}}function Yt(n,t){function r(){return(this&&this!==Zn&&this instanceof r?e:n).apply(t,arguments)}var e=Jt(n);return r}function Gt(n){return function(t){var r=-1;t=$e(Ce(t));for(var e=t.length,u="";++r<e;)u=n(u,t[r],r);return u}}function Jt(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:
return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=$u(n.prototype),t=n.apply(r,t);return ge(t)?t:r}}function Xt(n){function t(r,e,u){return u&&Ur(r,e,u)&&(e=w),r=gr(r,n,w,w,w,w,w,e),r.placeholder=t.placeholder,r}return t}function Ht(n,t){return le(function(r){var e=r[0];return null==e?e:(r.push(t),n.apply(w,r))})}function Qt(n,t){return function(r,e,u){if(u&&Ur(r,e,u)&&(e=w),e=wr(e,u,3),1==e.length){
u=r=Oo(r)?r:zr(r);for(var o=e,i=-1,f=u.length,a=t,c=a;++i<f;){var l=u[i],s=+o(l);n(s,a)&&(a=s,c=l)}if(u=c,!r.length||u!==t)return u}return ct(r,e,n,t)}}function nr(n,r){return function(e,u,o){return u=wr(u,o,3),Oo(e)?(u=t(e,u,r),-1<u?e[u]:w):st(e,u,n)}}function tr(n){return function(r,e,u){return r&&r.length?(e=wr(e,u,3),t(r,e,n)):-1}}function rr(n){return function(t,r,e){return r=wr(r,e,3),st(t,r,n,true)}}function er(n){return function(){for(var t,r=arguments.length,e=n?r:-1,u=0,o=Be(r);n?e--:++e<r;){
var i=o[u++]=arguments[e];if(typeof i!="function")throw new Ge(L);!t&&Ln.prototype.thru&&"wrapper"==br(i)&&(t=new Ln([],true))}for(e=t?-1:r;++e<r;){var i=o[e],u=br(i),f="wrapper"==u?zu(i):w;t=f&&$r(f[0])&&f[1]==(E|k|R|C)&&!f[4].length&&1==f[9]?t[br(f[0])].apply(t,f[3]):1==i.length&&$r(i)?t[u]():t.thru(i)}return function(){var n=arguments,e=n[0];if(t&&1==n.length&&Oo(e)&&e.length>=F)return t.plant(e).value();for(var u=0,n=r?o[u].apply(this,n):e;++u<r;)n=o[u].call(this,n);return n}}}function ur(n,t){
return function(r,e,u){return typeof e=="function"&&u===w&&Oo(r)?n(r,e):t(r,Bt(e,u,3))}}function or(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),n(t,r,Re)}}function ir(n){return function(t,r,e){return(typeof r!="function"||e!==w)&&(r=Bt(r,e,3)),n(t,r)}}function fr(n){return function(t,r,e){var u={};return r=wr(r,e,3),_t(t,function(t,e,o){o=r(t,e,o),e=n?o:e,t=n?t:o,u[e]=t}),u}}function ar(n){return function(t,r,e){return t=u(t),(n?t:"")+pr(t,r,e)+(n?"":t)}}function cr(n){
var t=le(function(r,e){var u=v(e,t.placeholder);return gr(r,n,w,e,u)});return t}function lr(n,t){return function(r,e,u,o){var i=3>arguments.length;return typeof e=="function"&&o===w&&Oo(r)?n(r,e,u,i):Ot(r,wr(e,o,4),u,i,t)}}function sr(n,t,r,e,u,o,i,f,a,c){function l(){for(var m=arguments.length,b=m,j=Be(m);b--;)j[b]=arguments[b];if(e&&(j=Mt(j,e,u)),o&&(j=qt(j,o,i)),_||y){var b=l.placeholder,k=v(j,b),m=m-k.length;if(m<c){var I=f?qn(f):w,m=bu(c-m,0),E=_?k:w,k=_?w:k,C=_?j:w,j=_?w:j;return t|=_?R:O,t&=~(_?O:R),
g||(t&=~(x|A)),j=[n,t,r,C,E,j,k,I,a,m],I=sr.apply(w,j),$r(n)&&Du(I,j),I.placeholder=b,I}}if(b=p?r:this,I=h?b[n]:n,f)for(m=j.length,E=xu(f.length,m),k=qn(j);E--;)C=f[E],j[E]=Cr(C,m)?k[C]:w;return s&&a<j.length&&(j.length=a),this&&this!==Zn&&this instanceof l&&(I=d||Jt(n)),I.apply(b,j)}var s=t&E,p=t&x,h=t&A,_=t&k,g=t&j,y=t&I,d=h?w:Jt(n);return l}function pr(n,t,r){return n=n.length,t=+t,n<t&&mu(t)?(t-=n,r=null==r?" ":r+"",Ue(r,vu(t/r.length)).slice(0,t)):""}function hr(n,t,r,e){function u(){for(var t=-1,f=arguments.length,a=-1,c=e.length,l=Be(c+f);++a<c;)l[a]=e[a];
for(;f--;)l[a++]=arguments[++t];return(this&&this!==Zn&&this instanceof u?i:n).apply(o?r:this,l)}var o=t&x,i=Jt(n);return u}function _r(n){var t=Pe[n];return function(n,r){return(r=r===w?0:+r||0)?(r=au(10,r),t(n*r)/r):t(n)}}function vr(n){return function(t,r,e,u){var o=wr(e);return null==e&&o===ut?Lt(t,r,n):zt(t,r,o(e,u,1),n)}}function gr(n,t,r,e,u,o,i,f){var a=t&A;if(!a&&typeof n!="function")throw new Ge(L);var c=e?e.length:0;if(c||(t&=~(R|O),e=u=w),c-=u?u.length:0,t&O){var l=e,s=u;e=u=w}var p=a?w:zu(n);
return r=[n,t,r,e,u,l,s,o,i,f],p&&(e=r[1],t=p[1],f=e|t,u=t==E&&e==k||t==E&&e==C&&r[7].length<=p[8]||t==(E|C)&&e==k,(f<E||u)&&(t&x&&(r[2]=p[2],f|=e&x?0:j),(e=p[3])&&(u=r[3],r[3]=u?Mt(u,e,p[4]):qn(e),r[4]=u?v(r[3],z):qn(p[4])),(e=p[5])&&(u=r[5],r[5]=u?qt(u,e,p[6]):qn(e),r[6]=u?v(r[5],z):qn(p[6])),(e=p[7])&&(r[7]=qn(e)),t&E&&(r[8]=null==r[8]?p[8]:xu(r[8],p[8])),null==r[9]&&(r[9]=p[9]),r[0]=p[0],r[1]=f),t=r[1],f=r[9]),r[9]=null==f?a?0:n.length:bu(f-c,0)||0,(p?Lu:Du)(t==x?Yt(r[0],r[2]):t!=R&&t!=(x|R)||r[4].length?sr.apply(w,r):hr.apply(w,r),r);
}function yr(n,t,r,e,u,o,i){var f=-1,a=n.length,c=t.length;if(a!=c&&(!u||c<=a))return false;for(;++f<a;){var l=n[f],c=t[f],s=e?e(u?c:l,u?l:c,f):w;if(s!==w){if(s)continue;return false}if(u){if(!Hn(t,function(n){return l===n||r(l,n,e,u,o,i)}))return false}else if(l!==c&&!r(l,c,e,u,o,i))return false}return true}function dr(n,t,r){switch(r){case M:case q:return+n==+t;case P:return n.name==t.name&&n.message==t.message;case V:return n!=+n?t!=+t:n==+t;case Y:case G:return n==t+""}return false}function mr(n,t,r,e,u,o,i){var f=zo(n),a=f.length,c=zo(t).length;
if(a!=c&&!u)return false;for(c=a;c--;){var l=f[c];if(!(u?l in t:nu.call(t,l)))return false}for(var s=u;++c<a;){var l=f[c],p=n[l],h=t[l],_=e?e(u?h:p,u?p:h,l):w;if(_===w?!r(p,h,e,u,o,i):!_)return false;s||(s="constructor"==l)}return s||(r=n.constructor,e=t.constructor,!(r!=e&&"constructor"in n&&"constructor"in t)||typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)?true:false}function wr(n,t,r){var e=Nn.callback||Se,e=e===Se?ut:e;return r?e(n,t,r):e}function br(n){for(var t=n.name+"",r=Wu[t],e=r?r.length:0;e--;){
var u=r[e],o=u.func;if(null==o||o==n)return u.name}return t}function xr(n,t,e){var u=Nn.indexOf||Vr,u=u===Vr?r:u;return n?u(n,t,e):u}function Ar(n){n=Oe(n);for(var t=n.length;t--;){var r=n[t][1];n[t][2]=r===r&&!ge(r)}return n}function jr(n,t){var r=null==n?w:n[t];return ye(r)?r:w}function kr(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&nu.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ir(n){return n=n.constructor,typeof n=="function"&&n instanceof n||(n=Ve),
new n}function Rr(n,t,r){var e=n.constructor;switch(t){case J:return Dt(n);case M:case q:return new e(+n);case X:case H:case Q:case nn:case tn:case rn:case en:case un:case on:return t=n.buffer,new e(r?Dt(t):t,n.byteOffset,n.length);case V:case G:return new e(n);case Y:var u=new e(n.source,kn.exec(n));u.lastIndex=n.lastIndex}return u}function Or(n,t,r){return null==n||Wr(t,n)||(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),t=Zr(t)),t=null==n?n:n[t],null==t?w:t.apply(n,r)}function Er(n){return null!=n&&Sr(Bu(n));
}function Cr(n,t){return n=typeof n=="number"||On.test(n)?+n:-1,t=null==t?Cu:t,-1<n&&0==n%1&&n<t}function Ur(n,t,r){if(!ge(r))return false;var e=typeof t;return("number"==e?Er(r)&&Cr(t,r.length):"string"==e&&t in r)?(t=r[t],n===n?n===t:t!==t):false}function Wr(n,t){var r=typeof n;return"string"==r&&dn.test(n)||"number"==r?true:Oo(n)?false:!yn.test(n)||null!=t&&n in Br(t)}function $r(n){var t=br(n),r=Nn[t];return typeof r=="function"&&t in zn.prototype?n===r?true:(t=zu(r),!!t&&n===t[0]):false}function Sr(n){return typeof n=="number"&&-1<n&&0==n%1&&n<=Cu;
}function Fr(n,t){return n===w?t:Eo(n,t,Fr)}function Nr(n,t){n=Br(n);for(var r=-1,e=t.length,u={};++r<e;){var o=t[r];o in n&&(u[o]=n[o])}return u}function Tr(n,t){var r={};return ht(n,function(n,e,u){t(n,e,u)&&(r[e]=n)}),r}function Lr(n){for(var t=Re(n),r=t.length,e=r&&n.length,u=!!e&&Sr(e)&&(Oo(n)||pe(n)),o=-1,i=[];++o<r;){var f=t[o];(u&&Cr(f,e)||nu.call(n,f))&&i.push(f)}return i}function zr(n){return null==n?[]:Er(n)?ge(n)?n:Ve(n):Ee(n)}function Br(n){return ge(n)?n:Ve(n)}function Dr(n){if(Oo(n))return n;
var t=[];return u(n).replace(mn,function(n,r,e,u){t.push(e?u.replace(An,"$1"):r||n)}),t}function Mr(n){return n instanceof zn?n.clone():new Ln(n.__wrapped__,n.__chain__,qn(n.__actions__))}function qr(n,t,r){return n&&n.length?((r?Ur(n,t,r):null==t)&&(t=1),Et(n,0>t?0:t)):[]}function Pr(n,t,r){var e=n?n.length:0;return e?((r?Ur(n,t,r):null==t)&&(t=1),t=e-(+t||0),Et(n,0,0>t?0:t)):[]}function Kr(n){return n?n[0]:w}function Vr(n,t,e){var u=n?n.length:0;if(!u)return-1;if(typeof e=="number")e=0>e?bu(u+e,0):e;else if(e)return e=Lt(n,t),
e<u&&(t===t?t===n[e]:n[e]!==n[e])?e:-1;return r(n,t,e||0)}function Zr(n){var t=n?n.length:0;return t?n[t-1]:w}function Yr(n){return qr(n,1)}function Gr(n,t,e,u){if(!n||!n.length)return[];null!=t&&typeof t!="boolean"&&(u=e,e=Ur(n,t,u)?w:t,t=false);var o=wr();if((null!=e||o!==ut)&&(e=o(e,u,3)),t&&xr()===r){t=e;var i;e=-1,u=n.length;for(var o=-1,f=[];++e<u;){var a=n[e],c=t?t(a,e,n):a;e&&i===c||(i=c,f[++o]=a)}n=f}else n=St(n,e);return n}function Jr(n){if(!n||!n.length)return[];var t=-1,r=0;n=Vn(n,function(n){
return Er(n)?(r=bu(n.length,r),true):void 0});for(var e=Be(r);++t<r;)e[t]=Gn(n,jt(t));return e}function Xr(n,t,r){return n&&n.length?(n=Jr(n),null==t?n:(t=Bt(t,r,4),Gn(n,function(n){return Xn(n,t,w,true)}))):[]}function Hr(n,t){var r=-1,e=n?n.length:0,u={};for(!e||t||Oo(n[0])||(t=[]);++r<e;){var o=n[r];t?u[o]=t[r]:o&&(u[o[0]]=o[1])}return u}function Qr(n){return n=Nn(n),n.__chain__=true,n}function ne(n,t,r){return t.call(r,n)}function te(n,t,r){var e=Oo(n)?Kn:at;return r&&Ur(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=wr(t,r,3)),
e(n,t)}function re(n,t,r){var e=Oo(n)?Vn:lt;return t=wr(t,r,3),e(n,t)}function ee(n,t,r,e){var u=n?Bu(n):0;return Sr(u)||(n=Ee(n),u=n.length),r=typeof r!="number"||e&&Ur(t,r,e)?0:0>r?bu(u+r,0):r||0,typeof n=="string"||!Oo(n)&&be(n)?r<=u&&-1<n.indexOf(t,r):!!u&&-1<xr(n,t,r)}function ue(n,t,r){var e=Oo(n)?Gn:wt;return t=wr(t,r,3),e(n,t)}function oe(n,t,r){if(r?Ur(n,t,r):null==t){n=zr(n);var e=n.length;return 0<e?n[Rt(0,e-1)]:w}r=-1,n=je(n);var e=n.length,u=e-1;for(t=xu(0>t?0:+t||0,e);++r<t;){var e=Rt(r,u),o=n[e];
n[e]=n[r],n[r]=o}return n.length=t,n}function ie(n,t,r){var e=Oo(n)?Hn:Ct;return r&&Ur(n,t,r)&&(t=w),(typeof t!="function"||r!==w)&&(t=wr(t,r,3)),e(n,t)}function fe(n,t){var r;if(typeof t!="function"){if(typeof n!="function")throw new Ge(L);var e=n;n=t,t=e}return function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=w),r}}function ae(n,t,r){function e(t,r){r&&iu(r),a=p=h=w,t&&(_=ho(),c=n.apply(s,f),p||a||(f=s=w))}function u(){var n=t-(ho()-l);0>=n||n>t?e(h,a):p=su(u,n)}function o(){e(g,p);
}function i(){if(f=arguments,l=ho(),s=this,h=g&&(p||!y),false===v)var r=y&&!p;else{a||y||(_=l);var e=v-(l-_),i=0>=e||e>v;i?(a&&(a=iu(a)),_=l,c=n.apply(s,f)):a||(a=su(o,e))}return i&&p?p=iu(p):p||t===v||(p=su(u,t)),r&&(i=true,c=n.apply(s,f)),!i||p||a||(f=s=w),c}var f,a,c,l,s,p,h,_=0,v=false,g=true;if(typeof n!="function")throw new Ge(L);if(t=0>t?0:+t||0,true===r)var y=true,g=false;else ge(r)&&(y=!!r.leading,v="maxWait"in r&&bu(+r.maxWait||0,t),g="trailing"in r?!!r.trailing:g);return i.cancel=function(){p&&iu(p),a&&iu(a),
_=0,a=p=h=w},i}function ce(n,t){function r(){var e=arguments,u=t?t.apply(this,e):e[0],o=r.cache;return o.has(u)?o.get(u):(e=n.apply(this,e),r.cache=o.set(u,e),e)}if(typeof n!="function"||t&&typeof t!="function")throw new Ge(L);return r.cache=new ce.Cache,r}function le(n,t){if(typeof n!="function")throw new Ge(L);return t=bu(t===w?n.length-1:+t||0,0),function(){for(var r=arguments,e=-1,u=bu(r.length-t,0),o=Be(u);++e<u;)o[e]=r[t+e];switch(t){case 0:return n.call(this,o);case 1:return n.call(this,r[0],o);
case 2:return n.call(this,r[0],r[1],o)}for(u=Be(t+1),e=-1;++e<t;)u[e]=r[e];return u[t]=o,n.apply(this,u)}}function se(n,t){return n>t}function pe(n){return h(n)&&Er(n)&&nu.call(n,"callee")&&!cu.call(n,"callee")}function he(n,t,r,e){return e=(r=typeof r=="function"?Bt(r,e,3):w)?r(n,t):w,e===w?dt(n,t,r):!!e}function _e(n){return h(n)&&typeof n.message=="string"&&ru.call(n)==P}function ve(n){return ge(n)&&ru.call(n)==K}function ge(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function ye(n){
return null==n?false:ve(n)?uu.test(Qe.call(n)):h(n)&&Rn.test(n)}function de(n){return typeof n=="number"||h(n)&&ru.call(n)==V}function me(n){var t;if(!h(n)||ru.call(n)!=Z||pe(n)||!(nu.call(n,"constructor")||(t=n.constructor,typeof t!="function"||t instanceof t)))return false;var r;return ht(n,function(n,t){r=t}),r===w||nu.call(n,r)}function we(n){return ge(n)&&ru.call(n)==Y}function be(n){return typeof n=="string"||h(n)&&ru.call(n)==G}function xe(n){return h(n)&&Sr(n.length)&&!!Sn[ru.call(n)]}function Ae(n,t){
return n<t}function je(n){var t=n?Bu(n):0;return Sr(t)?t?qn(n):[]:Ee(n)}function ke(n){return et(n,Re(n))}function Ie(n){return gt(n,Re(n))}function Re(n){if(null==n)return[];ge(n)||(n=Ve(n));for(var t=n.length,t=t&&Sr(t)&&(Oo(n)||pe(n))&&t||0,r=n.constructor,e=-1,r=typeof r=="function"&&r.prototype===n,u=Be(t),o=0<t;++e<t;)u[e]=e+"";for(var i in n)o&&Cr(i,t)||"constructor"==i&&(r||!nu.call(n,i))||u.push(i);return u}function Oe(n){n=Br(n);for(var t=-1,r=zo(n),e=r.length,u=Be(e);++t<e;){var o=r[t];
u[t]=[o,n[o]]}return u}function Ee(n){return Ft(n,zo(n))}function Ce(n){return(n=u(n))&&n.replace(En,a).replace(xn,"")}function Ue(n,t){var r="";if(n=u(n),t=+t,1>t||!n||!mu(t))return r;do t%2&&(r+=n),t=yu(t/2),n+=n;while(t);return r}function We(n,t,r){var e=n;return(n=u(n))?(r?Ur(e,t,r):null==t)?n.slice(g(n),y(n)+1):(t+="",n.slice(o(n,t),i(n,t)+1)):n}function $e(n,t,r){return r&&Ur(n,t,r)&&(t=w),n=u(n),n.match(t||Wn)||[]}function Se(n,t,r){return r&&Ur(n,t,r)&&(t=w),h(n)?Ne(n):ut(n,t)}function Fe(n){
return n}function Ne(n){return bt(ot(n,true))}function Te(n,t,r){if(null==r){var e=ge(t),u=e?zo(t):w;((u=u&&u.length?gt(t,u):w)?u.length:e)||(u=false,r=t,t=n,n=this)}u||(u=gt(t,zo(t)));var o=true,e=-1,i=ve(n),f=u.length;false===r?o=false:ge(r)&&"chain"in r&&(o=r.chain);for(;++e<f;){r=u[e];var a=t[r];n[r]=a,i&&(n.prototype[r]=function(t){return function(){var r=this.__chain__;if(o||r){var e=n(this.__wrapped__);return(e.__actions__=qn(this.__actions__)).push({func:t,args:arguments,thisArg:n}),e.__chain__=r,e}return t.apply(n,Jn([this.value()],arguments));
}}(a))}return n}function Le(){}function ze(n){return Wr(n)?jt(n):kt(n)}_=_?Yn.defaults(Zn.Object(),_,Yn.pick(Zn,$n)):Zn;var Be=_.Array,De=_.Date,Me=_.Error,qe=_.Function,Pe=_.Math,Ke=_.Number,Ve=_.Object,Ze=_.RegExp,Ye=_.String,Ge=_.TypeError,Je=Be.prototype,Xe=Ve.prototype,He=Ye.prototype,Qe=qe.prototype.toString,nu=Xe.hasOwnProperty,tu=0,ru=Xe.toString,eu=Zn._,uu=Ze("^"+Qe.call(nu).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ou=_.ArrayBuffer,iu=_.clearTimeout,fu=_.parseFloat,au=Pe.pow,cu=Xe.propertyIsEnumerable,lu=jr(_,"Set"),su=_.setTimeout,pu=Je.splice,hu=_.Uint8Array,_u=jr(_,"WeakMap"),vu=Pe.ceil,gu=jr(Ve,"create"),yu=Pe.floor,du=jr(Be,"isArray"),mu=_.isFinite,wu=jr(Ve,"keys"),bu=Pe.max,xu=Pe.min,Au=jr(De,"now"),ju=_.parseInt,ku=Pe.random,Iu=Ke.NEGATIVE_INFINITY,Ru=Ke.POSITIVE_INFINITY,Ou=4294967294,Eu=2147483647,Cu=9007199254740991,Uu=_u&&new _u,Wu={};
Nn.support={},Nn.templateSettings={escape:_n,evaluate:vn,interpolate:gn,variable:"",imports:{_:Nn}};var $u=function(){function n(){}return function(t){if(ge(t)){n.prototype=t;var r=new n;n.prototype=w}return r||{}}}(),Su=Vt(_t),Fu=Vt(vt,true),Nu=Zt(),Tu=Zt(true),Lu=Uu?function(n,t){return Uu.set(n,t),n}:Fe,zu=Uu?function(n){return Uu.get(n)}:Le,Bu=jt("length"),Du=function(){var n=0,t=0;return function(r,e){var u=ho(),o=S-(u-t);if(t=u,0<o){if(++n>=$)return r}else n=0;return Lu(r,e)}}(),Mu=le(function(n,t){
return h(n)&&Er(n)?ft(n,pt(t,false,true)):[]}),qu=tr(),Pu=tr(true),Ku=le(function(n){for(var t=n.length,e=t,u=Be(l),o=xr(),i=o===r,f=[];e--;){var a=n[e]=Er(a=n[e])?a:[];u[e]=i&&120<=a.length&&gu&&lu?new Dn(e&&a):null}var i=n[0],c=-1,l=i?i.length:0,s=u[0];n:for(;++c<l;)if(a=i[c],0>(s?Mn(s,a):o(f,a,0))){for(e=t;--e;){var p=u[e];if(0>(p?Mn(p,a):o(n[e],a,0)))continue n}s&&s.push(a),f.push(a)}return f}),Vu=le(function(t,r){r=pt(r);var e=rt(t,r);return It(t,r.sort(n)),e}),Zu=vr(),Yu=vr(true),Gu=le(function(n){return St(pt(n,false,true));
}),Ju=le(function(n,t){return Er(n)?ft(n,t):[]}),Xu=le(Jr),Hu=le(function(n){var t=n.length,r=2<t?n[t-2]:w,e=1<t?n[t-1]:w;return 2<t&&typeof r=="function"?t-=2:(r=1<t&&typeof e=="function"?(--t,e):w,e=w),n.length=t,Xr(n,r,e)}),Qu=le(function(n){return n=pt(n),this.thru(function(t){t=Oo(t)?t:[Br(t)];for(var r=n,e=-1,u=t.length,o=-1,i=r.length,f=Be(u+i);++e<u;)f[e]=t[e];for(;++o<i;)f[e++]=r[o];return f})}),no=le(function(n,t){return rt(n,pt(t))}),to=Pt(function(n,t,r){nu.call(n,r)?++n[r]:n[r]=1}),ro=nr(Su),eo=nr(Fu,true),uo=ur(Pn,Su),oo=ur(function(n,t){
for(var r=n.length;r--&&false!==t(n[r],r,n););return n},Fu),io=Pt(function(n,t,r){nu.call(n,r)?n[r].push(t):n[r]=[t]}),fo=Pt(function(n,t,r){n[r]=t}),ao=le(function(n,t,r){var e=-1,u=typeof t=="function",o=Wr(t),i=Er(n)?Be(n.length):[];return Su(n,function(n){var f=u?t:o&&null!=n?n[t]:w;i[++e]=f?f.apply(n,r):Or(n,t,r)}),i}),co=Pt(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),lo=lr(Xn,Su),so=lr(function(n,t,r,e){var u=n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r},Fu),po=le(function(n,t){
if(null==n)return[];var r=t[2];return r&&Ur(t[0],t[1],r)&&(t.length=1),Wt(n,pt(t),[])}),ho=Au||function(){return(new De).getTime()},_o=le(function(n,t,r){var e=x;if(r.length)var u=v(r,_o.placeholder),e=e|R;return gr(n,e,t,r,u)}),vo=le(function(n,t){t=t.length?pt(t):Ie(n);for(var r=-1,e=t.length;++r<e;){var u=t[r];n[u]=gr(n[u],x,n)}return n}),go=le(function(n,t,r){var e=x|A;if(r.length)var u=v(r,go.placeholder),e=e|R;return gr(t,e,n,r,u)}),yo=Xt(k),mo=Xt(I),wo=le(function(n,t){return it(n,1,t)}),bo=le(function(n,t,r){
return it(n,t,r)}),xo=er(),Ao=er(true),jo=le(function(n,t){if(t=pt(t),typeof n!="function"||!Kn(t,e))throw new Ge(L);var r=t.length;return le(function(e){for(var u=xu(e.length,r);u--;)e[u]=t[u](e[u]);return n.apply(this,e)})}),ko=cr(R),Io=cr(O),Ro=le(function(n,t){return gr(n,C,w,w,w,pt(t))}),Oo=du||function(n){return h(n)&&Sr(n.length)&&ru.call(n)==D},Eo=Kt(At),Co=Kt(function(n,t,r){return r?nt(n,t,r):tt(n,t)}),Uo=Ht(Co,function(n,t){return n===w?t:n}),Wo=Ht(Eo,Fr),$o=rr(_t),So=rr(vt),Fo=or(Nu),No=or(Tu),To=ir(_t),Lo=ir(vt),zo=wu?function(n){
var t=null==n?w:n.constructor;return typeof t=="function"&&t.prototype===n||typeof n!="function"&&Er(n)?Lr(n):ge(n)?wu(n):[]}:Lr,Bo=fr(true),Do=fr(),Mo=le(function(n,t){if(null==n)return{};if("function"!=typeof t[0])return t=Gn(pt(t),Ye),Nr(n,ft(Re(n),t));var r=Bt(t[0],t[1],3);return Tr(n,function(n,t,e){return!r(n,t,e)})}),qo=le(function(n,t){return null==n?{}:"function"==typeof t[0]?Tr(n,Bt(t[0],t[1],3)):Nr(n,pt(t))}),Po=Gt(function(n,t,r){return t=t.toLowerCase(),n+(r?t.charAt(0).toUpperCase()+t.slice(1):t);
}),Ko=Gt(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Vo=ar(),Zo=ar(true),Yo=Gt(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Go=Gt(function(n,t,r){return n+(r?" ":"")+(t.charAt(0).toUpperCase()+t.slice(1))}),Jo=le(function(n,t){try{return n.apply(w,t)}catch(r){return _e(r)?r:new Me(r)}}),Xo=le(function(n,t){return function(r){return Or(r,n,t)}}),Ho=le(function(n,t){return function(r){return Or(n,r,t)}}),Qo=_r("ceil"),ni=_r("floor"),ti=Qt(se,Iu),ri=Qt(Ae,Ru),ei=_r("round");return Nn.prototype=Tn.prototype,
Ln.prototype=$u(Tn.prototype),Ln.prototype.constructor=Ln,zn.prototype=$u(Tn.prototype),zn.prototype.constructor=zn,Bn.prototype["delete"]=function(n){return this.has(n)&&delete this.__data__[n]},Bn.prototype.get=function(n){return"__proto__"==n?w:this.__data__[n]},Bn.prototype.has=function(n){return"__proto__"!=n&&nu.call(this.__data__,n)},Bn.prototype.set=function(n,t){return"__proto__"!=n&&(this.__data__[n]=t),this},Dn.prototype.push=function(n){var t=this.data;typeof n=="string"||ge(n)?t.set.add(n):t.hash[n]=true;
},ce.Cache=Bn,Nn.after=function(n,t){if(typeof t!="function"){if(typeof n!="function")throw new Ge(L);var r=n;n=t,t=r}return n=mu(n=+n)?n:0,function(){return 1>--n?t.apply(this,arguments):void 0}},Nn.ary=function(n,t,r){return r&&Ur(n,t,r)&&(t=w),t=n&&null==t?n.length:bu(+t||0,0),gr(n,E,w,w,w,w,t)},Nn.assign=Co,Nn.at=no,Nn.before=fe,Nn.bind=_o,Nn.bindAll=vo,Nn.bindKey=go,Nn.callback=Se,Nn.chain=Qr,Nn.chunk=function(n,t,r){t=(r?Ur(n,t,r):null==t)?1:bu(yu(t)||1,1),r=0;for(var e=n?n.length:0,u=-1,o=Be(vu(e/t));r<e;)o[++u]=Et(n,r,r+=t);
return o},Nn.compact=function(n){for(var t=-1,r=n?n.length:0,e=-1,u=[];++t<r;){var o=n[t];o&&(u[++e]=o)}return u},Nn.constant=function(n){return function(){return n}},Nn.countBy=to,Nn.create=function(n,t,r){var e=$u(n);return r&&Ur(n,t,r)&&(t=w),t?tt(e,t):e},Nn.curry=yo,Nn.curryRight=mo,Nn.debounce=ae,Nn.defaults=Uo,Nn.defaultsDeep=Wo,Nn.defer=wo,Nn.delay=bo,Nn.difference=Mu,Nn.drop=qr,Nn.dropRight=Pr,Nn.dropRightWhile=function(n,t,r){return n&&n.length?Nt(n,wr(t,r,3),true,true):[]},Nn.dropWhile=function(n,t,r){
return n&&n.length?Nt(n,wr(t,r,3),true):[]},Nn.fill=function(n,t,r,e){var u=n?n.length:0;if(!u)return[];for(r&&typeof r!="number"&&Ur(n,t,r)&&(r=0,e=u),u=n.length,r=null==r?0:+r||0,0>r&&(r=-r>u?0:u+r),e=e===w||e>u?u:+e||0,0>e&&(e+=u),u=r>e?0:e>>>0,r>>>=0;r<u;)n[r++]=t;return n},Nn.filter=re,Nn.flatten=function(n,t,r){var e=n?n.length:0;return r&&Ur(n,t,r)&&(t=false),e?pt(n,t):[]},Nn.flattenDeep=function(n){return n&&n.length?pt(n,true):[]},Nn.flow=xo,Nn.flowRight=Ao,Nn.forEach=uo,Nn.forEachRight=oo,Nn.forIn=Fo,
Nn.forInRight=No,Nn.forOwn=To,Nn.forOwnRight=Lo,Nn.functions=Ie,Nn.groupBy=io,Nn.indexBy=fo,Nn.initial=function(n){return Pr(n,1)},Nn.intersection=Ku,Nn.invert=function(n,t,r){r&&Ur(n,t,r)&&(t=w),r=-1;for(var e=zo(n),u=e.length,o={};++r<u;){var i=e[r],f=n[i];t?nu.call(o,f)?o[f].push(i):o[f]=[i]:o[f]=i}return o},Nn.invoke=ao,Nn.keys=zo,Nn.keysIn=Re,Nn.map=ue,Nn.mapKeys=Bo,Nn.mapValues=Do,Nn.matches=Ne,Nn.matchesProperty=function(n,t){return xt(n,ot(t,true))},Nn.memoize=ce,Nn.merge=Eo,Nn.method=Xo,Nn.methodOf=Ho,
Nn.mixin=Te,Nn.modArgs=jo,Nn.negate=function(n){if(typeof n!="function")throw new Ge(L);return function(){return!n.apply(this,arguments)}},Nn.omit=Mo,Nn.once=function(n){return fe(2,n)},Nn.pairs=Oe,Nn.partial=ko,Nn.partialRight=Io,Nn.partition=co,Nn.pick=qo,Nn.pluck=function(n,t){return ue(n,ze(t))},Nn.property=ze,Nn.propertyOf=function(n){return function(t){return yt(n,Dr(t),t+"")}},Nn.pull=function(){var n=arguments,t=n[0];if(!t||!t.length)return t;for(var r=0,e=xr(),u=n.length;++r<u;)for(var o=0,i=n[r];-1<(o=e(t,i,o));)pu.call(t,o,1);
return t},Nn.pullAt=Vu,Nn.range=function(n,t,r){r&&Ur(n,t,r)&&(t=r=w),n=+n||0,r=null==r?1:+r||0,null==t?(t=n,n=0):t=+t||0;var e=-1;t=bu(vu((t-n)/(r||1)),0);for(var u=Be(t);++e<t;)u[e]=n,n+=r;return u},Nn.rearg=Ro,Nn.reject=function(n,t,r){var e=Oo(n)?Vn:lt;return t=wr(t,r,3),e(n,function(n,r,e){return!t(n,r,e)})},Nn.remove=function(n,t,r){var e=[];if(!n||!n.length)return e;var u=-1,o=[],i=n.length;for(t=wr(t,r,3);++u<i;)r=n[u],t(r,u,n)&&(e.push(r),o.push(u));return It(n,o),e},Nn.rest=Yr,Nn.restParam=le,
Nn.set=function(n,t,r){if(null==n)return n;var e=t+"";t=null!=n[e]||Wr(t,n)?[e]:Dr(t);for(var e=-1,u=t.length,o=u-1,i=n;null!=i&&++e<u;){var f=t[e];ge(i)&&(e==o?i[f]=r:null==i[f]&&(i[f]=Cr(t[e+1])?[]:{})),i=i[f]}return n},Nn.shuffle=function(n){return oe(n,Ru)},Nn.slice=function(n,t,r){var e=n?n.length:0;return e?(r&&typeof r!="number"&&Ur(n,t,r)&&(t=0,r=e),Et(n,t,r)):[]},Nn.sortBy=function(n,t,r){if(null==n)return[];r&&Ur(n,t,r)&&(t=w);var e=-1;return t=wr(t,r,3),n=wt(n,function(n,r,u){return{a:t(n,r,u),
b:++e,c:n}}),Ut(n,f)},Nn.sortByAll=po,Nn.sortByOrder=function(n,t,r,e){return null==n?[]:(e&&Ur(t,r,e)&&(r=w),Oo(t)||(t=null==t?[]:[t]),Oo(r)||(r=null==r?[]:[r]),Wt(n,t,r))},Nn.spread=function(n){if(typeof n!="function")throw new Ge(L);return function(t){return n.apply(this,t)}},Nn.take=function(n,t,r){return n&&n.length?((r?Ur(n,t,r):null==t)&&(t=1),Et(n,0,0>t?0:t)):[]},Nn.takeRight=function(n,t,r){var e=n?n.length:0;return e?((r?Ur(n,t,r):null==t)&&(t=1),t=e-(+t||0),Et(n,0>t?0:t)):[]},Nn.takeRightWhile=function(n,t,r){
return n&&n.length?Nt(n,wr(t,r,3),false,true):[]},Nn.takeWhile=function(n,t,r){return n&&n.length?Nt(n,wr(t,r,3)):[]},Nn.tap=function(n,t,r){return t.call(r,n),n},Nn.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new Ge(L);return false===r?e=false:ge(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),ae(n,t,{leading:e,maxWait:+t,trailing:u})},Nn.thru=ne,Nn.times=function(n,t,r){if(n=yu(n),1>n||!mu(n))return[];var e=-1,u=Be(xu(n,4294967295));for(t=Bt(t,r,1);++e<n;)4294967295>e?u[e]=t(e):t(e);
return u},Nn.toArray=je,Nn.toPlainObject=ke,Nn.transform=function(n,t,r,e){var u=Oo(n)||xe(n);return t=wr(t,e,4),null==r&&(u||ge(n)?(e=n.constructor,r=u?Oo(n)?new e:[]:$u(ve(e)?e.prototype:w)):r={}),(u?Pn:_t)(n,function(n,e,u){return t(r,n,e,u)}),r},Nn.union=Gu,Nn.uniq=Gr,Nn.unzip=Jr,Nn.unzipWith=Xr,Nn.values=Ee,Nn.valuesIn=function(n){return Ft(n,Re(n))},Nn.where=function(n,t){return re(n,bt(t))},Nn.without=Ju,Nn.wrap=function(n,t){return t=null==t?Fe:t,gr(t,R,w,[n],[])},Nn.xor=function(){for(var n=-1,t=arguments.length;++n<t;){
var r=arguments[n];if(Er(r))var e=e?Jn(ft(e,r),ft(r,e)):r}return e?St(e):[]},Nn.zip=Xu,Nn.zipObject=Hr,Nn.zipWith=Hu,Nn.backflow=Ao,Nn.collect=ue,Nn.compose=Ao,Nn.each=uo,Nn.eachRight=oo,Nn.extend=Co,Nn.iteratee=Se,Nn.methods=Ie,Nn.object=Hr,Nn.select=re,Nn.tail=Yr,Nn.unique=Gr,Te(Nn,Nn),Nn.add=function(n,t){return(+n||0)+(+t||0)},Nn.attempt=Jo,Nn.camelCase=Po,Nn.capitalize=function(n){return(n=u(n))&&n.charAt(0).toUpperCase()+n.slice(1)},Nn.ceil=Qo,Nn.clone=function(n,t,r,e){return t&&typeof t!="boolean"&&Ur(n,t,r)?t=false:typeof t=="function"&&(e=r,
r=t,t=false),typeof r=="function"?ot(n,t,Bt(r,e,3)):ot(n,t)},Nn.cloneDeep=function(n,t,r){return typeof t=="function"?ot(n,true,Bt(t,r,3)):ot(n,true)},Nn.deburr=Ce,Nn.endsWith=function(n,t,r){n=u(n),t+="";var e=n.length;return r=r===w?e:xu(0>r?0:+r||0,e),r-=t.length,0<=r&&n.indexOf(t,r)==r},Nn.escape=function(n){return(n=u(n))&&hn.test(n)?n.replace(sn,c):n},Nn.escapeRegExp=function(n){return(n=u(n))&&bn.test(n)?n.replace(wn,l):n||"(?:)"},Nn.every=te,Nn.find=ro,Nn.findIndex=qu,Nn.findKey=$o,Nn.findLast=eo,
Nn.findLastIndex=Pu,Nn.findLastKey=So,Nn.findWhere=function(n,t){return ro(n,bt(t))},Nn.first=Kr,Nn.floor=ni,Nn.get=function(n,t,r){return n=null==n?w:yt(n,Dr(t),t+""),n===w?r:n},Nn.gt=se,Nn.gte=function(n,t){return n>=t},Nn.has=function(n,t){if(null==n)return false;var r=nu.call(n,t);if(!r&&!Wr(t)){if(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),null==n)return false;t=Zr(t),r=nu.call(n,t)}return r||Sr(n.length)&&Cr(t,n.length)&&(Oo(n)||pe(n))},Nn.identity=Fe,Nn.includes=ee,Nn.indexOf=Vr,Nn.inRange=function(n,t,r){
return t=+t||0,r===w?(r=t,t=0):r=+r||0,n>=xu(t,r)&&n<bu(t,r)},Nn.isArguments=pe,Nn.isArray=Oo,Nn.isBoolean=function(n){return true===n||false===n||h(n)&&ru.call(n)==M},Nn.isDate=function(n){return h(n)&&ru.call(n)==q},Nn.isElement=function(n){return!!n&&1===n.nodeType&&h(n)&&!me(n)},Nn.isEmpty=function(n){return null==n?true:Er(n)&&(Oo(n)||be(n)||pe(n)||h(n)&&ve(n.splice))?!n.length:!zo(n).length},Nn.isEqual=he,Nn.isError=_e,Nn.isFinite=function(n){return typeof n=="number"&&mu(n)},Nn.isFunction=ve,Nn.isMatch=function(n,t,r,e){
return r=typeof r=="function"?Bt(r,e,3):w,mt(n,Ar(t),r)},Nn.isNaN=function(n){return de(n)&&n!=+n},Nn.isNative=ye,Nn.isNull=function(n){return null===n},Nn.isNumber=de,Nn.isObject=ge,Nn.isPlainObject=me,Nn.isRegExp=we,Nn.isString=be,Nn.isTypedArray=xe,Nn.isUndefined=function(n){return n===w},Nn.kebabCase=Ko,Nn.last=Zr,Nn.lastIndexOf=function(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=e;if(typeof r=="number")u=(0>r?bu(e+r,0):xu(r||0,e-1))+1;else if(r)return u=Lt(n,t,true)-1,n=n[u],(t===t?t===n:n!==n)?u:-1;
if(t!==t)return p(n,u,true);for(;u--;)if(n[u]===t)return u;return-1},Nn.lt=Ae,Nn.lte=function(n,t){return n<=t},Nn.max=ti,Nn.min=ri,Nn.noConflict=function(){return Zn._=eu,this},Nn.noop=Le,Nn.now=ho,Nn.pad=function(n,t,r){n=u(n),t=+t;var e=n.length;return e<t&&mu(t)?(e=(t-e)/2,t=yu(e),e=vu(e),r=pr("",e,r),r.slice(0,t)+n+r):n},Nn.padLeft=Vo,Nn.padRight=Zo,Nn.parseInt=function(n,t,r){return(r?Ur(n,t,r):null==t)?t=0:t&&(t=+t),n=We(n),ju(n,t||(In.test(n)?16:10))},Nn.random=function(n,t,r){r&&Ur(n,t,r)&&(t=r=w);
var e=null==n,u=null==t;return null==r&&(u&&typeof n=="boolean"?(r=n,n=1):typeof t=="boolean"&&(r=t,u=true)),e&&u&&(t=1,u=false),n=+n||0,u?(t=n,n=0):t=+t||0,r||n%1||t%1?(r=ku(),xu(n+r*(t-n+fu("1e-"+((r+"").length-1))),t)):Rt(n,t)},Nn.reduce=lo,Nn.reduceRight=so,Nn.repeat=Ue,Nn.result=function(n,t,r){var e=null==n?w:n[t];return e===w&&(null==n||Wr(t,n)||(t=Dr(t),n=1==t.length?n:yt(n,Et(t,0,-1)),e=null==n?w:n[Zr(t)]),e=e===w?r:e),ve(e)?e.call(n):e},Nn.round=ei,Nn.runInContext=m,Nn.size=function(n){var t=n?Bu(n):0;
return Sr(t)?t:zo(n).length},Nn.snakeCase=Yo,Nn.some=ie,Nn.sortedIndex=Zu,Nn.sortedLastIndex=Yu,Nn.startCase=Go,Nn.startsWith=function(n,t,r){return n=u(n),r=null==r?0:xu(0>r?0:+r||0,n.length),n.lastIndexOf(t,r)==r},Nn.sum=function(n,t,r){if(r&&Ur(n,t,r)&&(t=w),t=wr(t,r,3),1==t.length){n=Oo(n)?n:zr(n),r=n.length;for(var e=0;r--;)e+=+t(n[r])||0;n=e}else n=$t(n,t);return n},Nn.template=function(n,t,r){var e=Nn.templateSettings;r&&Ur(n,t,r)&&(t=r=w),n=u(n),t=nt(tt({},r||t),e,Qn),r=nt(tt({},t.imports),e.imports,Qn);
var o,i,f=zo(r),a=Ft(r,f),c=0;r=t.interpolate||Cn;var l="__p+='";r=Ze((t.escape||Cn).source+"|"+r.source+"|"+(r===gn?jn:Cn).source+"|"+(t.evaluate||Cn).source+"|$","g");var p="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,u,f,a){return e||(e=u),l+=n.slice(c,a).replace(Un,s),r&&(o=true,l+="'+__e("+r+")+'"),f&&(i=true,l+="';"+f+";\n__p+='"),e&&(l+="'+((__t=("+e+"))==null?'':__t)+'"),c=a+t.length,t}),l+="';",(t=t.variable)||(l="with(obj){"+l+"}"),l=(i?l.replace(fn,""):l).replace(an,"$1").replace(cn,"$1;"),
l="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(o?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}",t=Jo(function(){return qe(f,p+"return "+l).apply(w,a)}),t.source=l,_e(t))throw t;return t},Nn.trim=We,Nn.trimLeft=function(n,t,r){var e=n;return(n=u(n))?n.slice((r?Ur(e,t,r):null==t)?g(n):o(n,t+"")):n},Nn.trimRight=function(n,t,r){var e=n;return(n=u(n))?(r?Ur(e,t,r):null==t)?n.slice(0,y(n)+1):n.slice(0,i(n,t+"")+1):n;
},Nn.trunc=function(n,t,r){r&&Ur(n,t,r)&&(t=w);var e=U;if(r=W,null!=t)if(ge(t)){var o="separator"in t?t.separator:o,e="length"in t?+t.length||0:e;r="omission"in t?u(t.omission):r}else e=+t||0;if(n=u(n),e>=n.length)return n;if(e-=r.length,1>e)return r;if(t=n.slice(0,e),null==o)return t+r;if(we(o)){if(n.slice(e).search(o)){var i,f=n.slice(0,e);for(o.global||(o=Ze(o.source,(kn.exec(o)||"")+"g")),o.lastIndex=0;n=o.exec(f);)i=n.index;t=t.slice(0,null==i?e:i)}}else n.indexOf(o,e)!=e&&(o=t.lastIndexOf(o),
-1<o&&(t=t.slice(0,o)));return t+r},Nn.unescape=function(n){return(n=u(n))&&pn.test(n)?n.replace(ln,d):n},Nn.uniqueId=function(n){var t=++tu;return u(n)+t},Nn.words=$e,Nn.all=te,Nn.any=ie,Nn.contains=ee,Nn.eq=he,Nn.detect=ro,Nn.foldl=lo,Nn.foldr=so,Nn.head=Kr,Nn.include=ee,Nn.inject=lo,Te(Nn,function(){var n={};return _t(Nn,function(t,r){Nn.prototype[r]||(n[r]=t)}),n}(),false),Nn.sample=oe,Nn.prototype.sample=function(n){return this.__chain__||null!=n?this.thru(function(t){return oe(t,n)}):oe(this.value());
},Nn.VERSION=b,Pn("bind bindKey curry curryRight partial partialRight".split(" "),function(n){Nn[n].placeholder=Nn}),Pn(["drop","take"],function(n,t){zn.prototype[n]=function(r){var e=this.__filtered__;if(e&&!t)return new zn(this);r=null==r?1:bu(yu(r)||0,0);var u=this.clone();return e?u.__takeCount__=xu(u.__takeCount__,r):u.__views__.push({size:r,type:n+(0>u.__dir__?"Right":"")}),u},zn.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),Pn(["filter","map","takeWhile"],function(n,t){
var r=t+1,e=r!=T;zn.prototype[n]=function(n,t){var u=this.clone();return u.__iteratees__.push({iteratee:wr(n,t,1),type:r}),u.__filtered__=u.__filtered__||e,u}}),Pn(["first","last"],function(n,t){var r="take"+(t?"Right":"");zn.prototype[n]=function(){return this[r](1).value()[0]}}),Pn(["initial","rest"],function(n,t){var r="drop"+(t?"":"Right");zn.prototype[n]=function(){return this.__filtered__?new zn(this):this[r](1)}}),Pn(["pluck","where"],function(n,t){var r=t?"filter":"map",e=t?bt:ze;zn.prototype[n]=function(n){
return this[r](e(n))}}),zn.prototype.compact=function(){return this.filter(Fe)},zn.prototype.reject=function(n,t){return n=wr(n,t,1),this.filter(function(t){return!n(t)})},zn.prototype.slice=function(n,t){n=null==n?0:+n||0;var r=this;return r.__filtered__&&(0<n||0>t)?new zn(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==w&&(t=+t||0,r=0>t?r.dropRight(-t):r.take(t-n)),r)},zn.prototype.takeRightWhile=function(n,t){return this.reverse().takeWhile(n,t).reverse()},zn.prototype.toArray=function(){return this.take(Ru);
},_t(zn.prototype,function(n,t){var r=/^(?:filter|map|reject)|While$/.test(t),e=/^(?:first|last)$/.test(t),u=Nn[e?"take"+("last"==t?"Right":""):t];u&&(Nn.prototype[t]=function(){function t(n){return e&&i?u(n,1)[0]:u.apply(w,Jn([n],o))}var o=e?[1]:arguments,i=this.__chain__,f=this.__wrapped__,a=!!this.__actions__.length,c=f instanceof zn,l=o[0],s=c||Oo(f);return s&&r&&typeof l=="function"&&1!=l.length&&(c=s=false),l={func:ne,args:[t],thisArg:w},a=c&&!a,e&&!i?a?(f=f.clone(),f.__actions__.push(l),n.call(f)):u.call(w,this.value())[0]:!e&&s?(f=a?f:new zn(this),
f=n.apply(f,o),f.__actions__.push(l),new Ln(f,i)):this.thru(t)})}),Pn("join pop push replace shift sort splice split unshift".split(" "),function(n){var t=(/^(?:replace|split)$/.test(n)?He:Je)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:join|pop|replace|shift)$/.test(n);Nn.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),_t(zn.prototype,function(n,t){var r=Nn[t];if(r){var e=r.name+"";(Wu[e]||(Wu[e]=[])).push({
name:t,func:r})}}),Wu[sr(w,A).name]=[{name:"wrapper",func:w}],zn.prototype.clone=function(){var n=new zn(this.__wrapped__);return n.__actions__=qn(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=qn(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=qn(this.__views__),n},zn.prototype.reverse=function(){if(this.__filtered__){var n=new zn(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n},zn.prototype.value=function(){
var n,t=this.__wrapped__.value(),r=this.__dir__,e=Oo(t),u=0>r,o=e?t.length:0;n=o;for(var i=this.__views__,f=0,a=-1,c=i.length;++a<c;){var l=i[a],s=l.size;switch(l.type){case"drop":f+=s;break;case"dropRight":n-=s;break;case"take":n=xu(n,f+s);break;case"takeRight":f=bu(f,n-s)}}if(n={start:f,end:n},i=n.start,f=n.end,n=f-i,u=u?f:i-1,i=this.__iteratees__,f=i.length,a=0,c=xu(n,this.__takeCount__),!e||o<F||o==n&&c==n)return Tt(t,this.__actions__);e=[];n:for(;n--&&a<c;){for(u+=r,o=-1,l=t[u];++o<f;){var p=i[o],s=p.type,p=p.iteratee(l);
if(s==T)l=p;else if(!p){if(s==N)continue n;break n}}e[a++]=l}return e},Nn.prototype.chain=function(){return Qr(this)},Nn.prototype.commit=function(){return new Ln(this.value(),this.__chain__)},Nn.prototype.concat=Qu,Nn.prototype.plant=function(n){for(var t,r=this;r instanceof Tn;){var e=Mr(r);t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},Nn.prototype.reverse=function(){function n(n){return n.reverse()}var t=this.__wrapped__;return t instanceof zn?(this.__actions__.length&&(t=new zn(this)),
t=t.reverse(),t.__actions__.push({func:ne,args:[n],thisArg:w}),new Ln(t,this.__chain__)):this.thru(n)},Nn.prototype.toString=function(){return this.value()+""},Nn.prototype.run=Nn.prototype.toJSON=Nn.prototype.valueOf=Nn.prototype.value=function(){return Tt(this.__wrapped__,this.__actions__)},Nn.prototype.collect=Nn.prototype.map,Nn.prototype.head=Nn.prototype.first,Nn.prototype.select=Nn.prototype.filter,Nn.prototype.tail=Nn.prototype.rest,Nn}var w,b="3.10.1",x=1,A=2,j=4,k=8,I=16,R=32,O=64,E=128,C=256,U=30,W="...",$=150,S=16,F=200,N=1,T=2,L="Expected a function",z="__lodash_placeholder__",B="[object Arguments]",D="[object Array]",M="[object Boolean]",q="[object Date]",P="[object Error]",K="[object Function]",V="[object Number]",Z="[object Object]",Y="[object RegExp]",G="[object String]",J="[object ArrayBuffer]",X="[object Float32Array]",H="[object Float64Array]",Q="[object Int8Array]",nn="[object Int16Array]",tn="[object Int32Array]",rn="[object Uint8Array]",en="[object Uint8ClampedArray]",un="[object Uint16Array]",on="[object Uint32Array]",fn=/\b__p\+='';/g,an=/\b(__p\+=)''\+/g,cn=/(__e\(.*?\)|\b__t\))\+'';/g,ln=/&(?:amp|lt|gt|quot|#39|#96);/g,sn=/[&<>"'`]/g,pn=RegExp(ln.source),hn=RegExp(sn.source),_n=/<%-([\s\S]+?)%>/g,vn=/<%([\s\S]+?)%>/g,gn=/<%=([\s\S]+?)%>/g,yn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,dn=/^\w*$/,mn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,wn=/^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,bn=RegExp(wn.source),xn=/[\u0300-\u036f\ufe20-\ufe23]/g,An=/\\(\\)?/g,jn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,kn=/\w*$/,In=/^0[xX]/,Rn=/^\[object .+?Constructor\]$/,On=/^\d+$/,En=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,Cn=/($^)/,Un=/['\n\r\u2028\u2029\\]/g,Wn=RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+","g"),$n="Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout isFinite parseFloat parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap".split(" "),Sn={};
Sn[X]=Sn[H]=Sn[Q]=Sn[nn]=Sn[tn]=Sn[rn]=Sn[en]=Sn[un]=Sn[on]=true,Sn[B]=Sn[D]=Sn[J]=Sn[M]=Sn[q]=Sn[P]=Sn[K]=Sn["[object Map]"]=Sn[V]=Sn[Z]=Sn[Y]=Sn["[object Set]"]=Sn[G]=Sn["[object WeakMap]"]=false;var Fn={};Fn[B]=Fn[D]=Fn[J]=Fn[M]=Fn[q]=Fn[X]=Fn[H]=Fn[Q]=Fn[nn]=Fn[tn]=Fn[V]=Fn[Z]=Fn[Y]=Fn[G]=Fn[rn]=Fn[en]=Fn[un]=Fn[on]=true,Fn[P]=Fn[K]=Fn["[object Map]"]=Fn["[object Set]"]=Fn["[object WeakMap]"]=false;var Nn={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a",
"\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y",
"\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss"},Tn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Ln={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},zn={"function":true,object:true},Bn={0:"x30",1:"x31",2:"x32",3:"x33",4:"x34",5:"x35",6:"x36",7:"x37",8:"x38",9:"x39",A:"x41",B:"x42",C:"x43",D:"x44",E:"x45",F:"x46",a:"x61",b:"x62",c:"x63",d:"x64",e:"x65",f:"x66",n:"x6e",r:"x72",t:"x74",u:"x75",v:"x76",x:"x78"},Dn={"\\":"\\",
"'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Mn=zn[typeof exports]&&exports&&!exports.nodeType&&exports,qn=zn[typeof module]&&module&&!module.nodeType&&module,Pn=zn[typeof self]&&self&&self.Object&&self,Kn=zn[typeof window]&&window&&window.Object&&window,Vn=qn&&qn.exports===Mn&&Mn,Zn=Mn&&qn&&typeof global=="object"&&global&&global.Object&&global||Kn!==(this&&this.window)&&Kn||Pn||this,Yn=m();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Zn._=Yn, define(function(){
return Yn})):Mn&&qn?Vn?(qn.exports=Yn)._=Yn:Mn._=Yn:Zn._=Yn}).call(this);
/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

sap.ui.define([
		'jquery.sap.global', 
		'sap/ui/model/ChangeReason', 'sap/ui/model/Filter', 'sap/ui/model/FilterType', 'sap/ui/model/ListBinding', 'sap/ui/model/Sorter', 
		'sap/ui/model/odata/ODataUtils', 'sap/ui/model/odata/CountMode'
	], function(jQuery, ChangeReason, Filter, FilterType, ListBinding, Sorter, ODataUtils, CountMode) {
	"use strict";

	var AdapterListBinding = ListBinding.extend("sap.marmolata.AdapterListBinding", {
	
		constructor : function(oModel, sPath, oContext, aSorters, aFilters, mParameters) {
			ListBinding.apply(this, arguments);
			this.sFilterParams = null;
			this.sSortParams = null;
			this.sRangeParams = null;
			this.sCustomParams = this.oModel.createCustomParams(this.mParameters);
			this.iStartIndex = 0;
			this.bPendingChange = false;
			this.bInitial = true;
			this.sCountMode = (mParameters && mParameters.countMode) || this.oModel.sDefaultCountMode;
			this.bRefresh = false;
			this.bNeedsUpdate = false;
			this.bDataAvailable = false;
			this.bIgnoreSuspend = false;

            this.consoleLog = oModel.consoleLog

			// load the entity type for the collection only once and not e.g. every time when filtering
			if (!this.oModel.getServiceMetadata()) {
				var that = this,
				fnCallback = function(oEvent) {
					that.bInitial = false;
					//that._initSortersFilters();
					that.oModel.detachMetadataLoaded(fnCallback);
				};
				this.oModel.attachMetadataLoaded(this, fnCallback);
			} else {
				this.bInitial = false;
				//this._initSortersFilters();
			}
	
			// if nested list is already available and no filters or sorters are set, 
			// use the data and don't send additional requests
			// TODO: what if nested list is not complete, because it was too large?
			var oRef = this.oModel._getObject(this.sPath, this.oContext);
			this.aExpandRefs = oRef;
			if (jQuery.isArray(oRef) && !aSorters && !aFilters) {
				this.aKeys = oRef;
				this.iLength = oRef.length;
				this.bLengthFinal = true;
				this.bDataAvailable = true;
			} else if (oRef === null && this.oModel.resolve(this.sPath, this.oContext)) { // means that expanded data has no data available e.g. for 0..n relations
				this.aKeys = [];
				this.iLength = 0;
				this.bLengthFinal = true;
				this.bDataAvailable = true;
			}	else {
				// call getLength when metadata is already loaded or don't do anything
				// if the the metadata gets loaded it will call a refresh on all bindings
				if (this.oModel.getServiceMetadata()) {
					this.resetData();
				}
			}
	
		}
	
	});
	
	/**
	 * Return contexts for the list
	 *
	 * @param {int} [iStartIndex=0] the start index of the requested contexts
	 * @param {int} [iLength] the requested amount of contexts
	 * @param {int} [iThreshold=0]
	 * @return {sap.ui.model.Context[]} the array of contexts for each row of the bound list
	 * @protected
	 */
	AdapterListBinding.prototype.getContexts = function(iStartIndex, iLength, iThreshold) {

	    this.consoleLog("getContexts", iStartIndex, iLength, iThreshold);

		if (this.bInitial) {
			return [];
		}

    	return this._getContexts(iStartIndex, iLength);

/*		this.iLastLength = iLength;
		this.iLastStartIndex = iStartIndex;
		this.iLastThreshold = iThreshold;
		
		//	Set default values if startindex, threshold or length are not defined
		if (!iStartIndex) {
			iStartIndex = 0;
		}
		if (!iLength) {
			iLength = this.oModel.iSizeLimit;
			if (this.bLengthFinal && this.iLength < iLength) {
				iLength = this.iLength;
			}
		}
		if (!iThreshold) {
			iThreshold = 0;
		}
	
		var bLoadContexts = true,
			aContexts = this._getContexts(iStartIndex, iLength),
			oContextData = {},
			oSection;
	
		oSection = this.calculateSection(iStartIndex, iLength, iThreshold, aContexts);
		bLoadContexts = aContexts.length != iLength && !(this.bLengthFinal && aContexts.length >= this.iLength - iStartIndex);
		
		// check if metadata are already available
		if (this.oModel.getServiceMetadata()) {
			// If rows are missing send a request
			if (!this.bPendingRequest && oSection.length > 0 && (bLoadContexts || iLength < oSection.length)) {
				this.loadData(oSection.startIndex, oSection.length);
				aContexts.dataRequested = true;
			}
		}
		
		if (this.bRefresh) {
			// if refreshing and length is 0, pretend a request to be fired to make a refresh with
			// with preceding $count request look like a request with $inlinecount=allpages
			if (this.bLengthFinal && this.iLength == 0) {
				this.loadData(oSection.startIndex, oSection.length, true);
				aContexts.dataRequested = true;
			}
			this.bRefresh = false;
		} else {
			// Do not create context data and diff in case of refresh, only if real data has been received
			// The current behaviour is wrong and makes diff detection useless for OData in case of refresh
			for (var i = 0; i < aContexts.length; i++) {
				oContextData[aContexts[i].getPath()] = aContexts[i].getObject();
			}
		
			if (this.bUseExtendedChangeDetection) {
				//Check diff
				if (this.aLastContexts && iStartIndex < this.iLastEndIndex) {
					var that = this;
					var aDiff = jQuery.sap.arrayDiff(this.aLastContexts, aContexts, function(oOldContext, oNewContext) {
						return jQuery.sap.equal(
								oOldContext && that.oLastContextData && that.oLastContextData[oOldContext.getPath()],
								oNewContext && oContextData && oContextData[oNewContext.getPath()]
							);
					}, true);
					aContexts.diff = aDiff;
				}
			}
		
			this.iLastEndIndex = iStartIndex + iLength;
			this.aLastContexts = aContexts.slice(0);
			this.oLastContextData = jQuery.sap.extend(true, {}, oContextData);
		}
		
		return aContexts;*/
	};

	AdapterListBinding.prototype.getCurrentContexts = function() {
		return this.aLastContexts || [];
	};
	
	/**
	 * Return contexts for the list
	 *
	 * @param {int} [iStartIndex=0] the start index of the requested contexts
	 * @param {int} [iLength] the requested amount of contexts
	 *
	 * @return {Array} the contexts array
	 * @private
	 */
	AdapterListBinding.prototype._getContexts = function(iStartIndex, iLength) {

		var aContexts = [],
			oContext,
			sKey;
		
		if (!iStartIndex) {
			iStartIndex = 0;
		}
		if (!iLength) {
			iLength = this.oModel.iSizeLimit;
			if (this.bLengthFinal && this.iLength < iLength) {
				iLength = this.iLength;
			}
		}
		
		//	Loop through known data and check whether we already have all rows loaded
		for (var i = iStartIndex; i < iStartIndex + iLength; i++) {
			//sKey = this.aKeys[i];
			//if (!sKey) {
			//	break;
			//}
			sKey = i;
			oContext = this.oModel.getContext('/' + sKey);
			aContexts.push(oContext);
		}

		return aContexts;
	};
	
	/*
	 * @private
	 */
	AdapterListBinding.prototype.calculateSection = function(iStartIndex, iLength, iThreshold, aContexts) {
	    debugger;

		var iSectionLength,
			iSectionStartIndex,
			iPreloadedSubsequentIndex,
			iPreloadedPreviousIndex,
			iRemainingEntries,
			oSection = {},
			sKey;
	
		iSectionStartIndex = iStartIndex;
		iSectionLength = 0;
	
		// check which data exists before startindex; If all necessary data is loaded iPreloadedPreviousIndex stays undefined
		for (var i = iStartIndex; i >= Math.max(iStartIndex - iThreshold,0); i--) {
			sKey = this.aKeys[i];
			if (!sKey) {
				iPreloadedPreviousIndex = i + 1;
				break;
			}
		}
		// check which data is already loaded after startindex; If all necessary data is loaded iPreloadedSubsequentIndex stays undefined
		for (var j = iStartIndex + iLength; j < iStartIndex + iLength + iThreshold; j++) {
			sKey = this.aKeys[j];
			if (!sKey) {
				iPreloadedSubsequentIndex = j;
				break;
			}
		}
		
		// calculate previous remaining entries
		iRemainingEntries = iStartIndex - iPreloadedPreviousIndex;
		if (iPreloadedPreviousIndex && iStartIndex > iThreshold && iRemainingEntries < iThreshold) {
			if (aContexts.length != iLength) {
				iSectionStartIndex = iStartIndex - iThreshold;
			} else {
				iSectionStartIndex = iPreloadedPreviousIndex - iThreshold;
			}
			iSectionLength = iThreshold;
		}
		
		// prevent iSectionStartIndex to become negative
		iSectionStartIndex = Math.max(iSectionStartIndex, 0);
		
		// No negative preload needed; move startindex if we already have some data
		if (iSectionStartIndex == iStartIndex) {
			iSectionStartIndex += aContexts.length;
		}
		
		//read the rest of the requested data
		if (aContexts.length != iLength) {
			iSectionLength += iLength - aContexts.length;
		}
		
		//calculate subsequent remaining entries
		iRemainingEntries = iPreloadedSubsequentIndex - iStartIndex - iLength;
		
		if (iRemainingEntries == 0) {
			iSectionLength += iThreshold;
		}
		
		if (iPreloadedSubsequentIndex && iRemainingEntries < iThreshold && iRemainingEntries > 0) {
				//check if we need to load previous entries; If not we can move the startindex
				if (iSectionStartIndex > iStartIndex) {
					iSectionStartIndex = iPreloadedSubsequentIndex;
					iSectionLength += iThreshold;
				}
				
		}
		
		//check final length and adapt sectionLength if needed.
		if (this.bLengthFinal && this.iLength < (iSectionLength + iSectionStartIndex)) {
			iSectionLength = this.iLength - iSectionStartIndex;
		}
		
		oSection.startIndex = iSectionStartIndex;
		oSection.length = iSectionLength;
		
		return oSection;
	};
	
	/**
	 * Setter for context
	 * @param {Object} oContext the new context object
	 */
	AdapterListBinding.prototype.setContext = function(oContext) {
		if (this.oContext != oContext) {
			this.oContext = oContext;

			// TODO check what this code path does
			if (this.isRelative()) {
			    debugger;

				// get new entity type with new context and init filters now correctly
				this._initSortersFilters();
	
/*
				if (!this.bInitial) {
					// if nested list is already available, use the data and don't send additional requests
					// TODO: what if nested list is not complete, because it was too large?
					var oRef = this.oModel._getObject(this.sPath, this.oContext);
					this.aExpandRefs = oRef;
					if (jQuery.isArray(oRef) && !this.aSorters.length > 0 && !this.aFilters.length > 0) {
						this.aKeys = oRef;
						this.iLength = oRef.length;
						this.bLengthFinal = true;
						this._fireChange();
					} else if (!this.oModel.resolve(this.sPath, this.oContext) || oRef === null){ 
						// if path does not resolve, or data is known to be null (e.g. expanded list)
						this.aKeys = [];
						this.iLength = 0;
						this.bLengthFinal = true;
						this._fireChange();
					} else {
						this.refresh();
					}
				}
*/
			}
		}
	};
	
	/**
	 * Get a download URL with the specified format considering the
	 * sort/filter/custom parameters.
	 *
	 * @param {string} sFormat Value for the $format Parameter
	 * @return {string} URL which can be used for downloading
	 * @since 1.24
	 * @public
	 */
	AdapterListBinding.prototype.getDownloadUrl = function(sFormat) {
	    debugger;

		var aParams = [],
			sPath;
		
		if (sFormat) {
			aParams.push("$format=" + encodeURIComponent(sFormat));
		}
		if (this.sSortParams) {
			aParams.push(this.sSortParams);
		}
		if (this.sFilterParams) {
			aParams.push(this.sFilterParams);
		}
		if (this.sCustomParams) {
			aParams.push(this.sCustomParams);
		}
		
		sPath = this.oModel.resolve(this.sPath,this.oContext);

		if (sPath) {
			return this.oModel._createRequestUrl(sPath, null, aParams);
		}
	};
	
	/**
	 * Load list data from the server
	 */
	AdapterListBinding.prototype.loadData = function(iStartIndex, iLength, bPretend) {
		    debugger;

		var that = this,
			bInlineCountRequested = false;
	
		// create range parameters and store start index for sort/filter requests
		if (iStartIndex || iLength) {
			this.sRangeParams = "$skip=" + iStartIndex + "&$top=" + iLength;
			this.iStartIndex = iStartIndex;
		} else {
			iStartIndex = this.iStartIndex;
		}
	
		// create the request url
		var aParams = [];
		if (this.sRangeParams) {
			aParams.push(this.sRangeParams);
		}
		if (this.sSortParams) {
			aParams.push(this.sSortParams);
		}
		if (this.sFilterParams) {
			aParams.push(this.sFilterParams);
		}
		if (this.sCustomParams) {
			aParams.push(this.sCustomParams);
		}
		if (!this.bLengthFinal &&
			(this.sCountMode == CountMode.Inline ||
			this.sCountMode == CountMode.Both)) {
			aParams.push("$inlinecount=allpages");
			bInlineCountRequested = true;
		}
		
		function fnSuccess(oData) {
	
			// Collecting contexts
			jQuery.each(oData.results, function(i, entry) {
				that.aKeys[iStartIndex + i] = that.oModel._getKey(entry);
			});
	
			// update iLength (only when the inline count was requested and is available)
			if (bInlineCountRequested && oData.__count) {
				that.iLength = parseInt(oData.__count, 10);
				that.bLengthFinal = true;
			}
	
			// if we got data and the results + startindex is larger than the
			// length we just apply this value to the length and add the requested
			// length again to enable paging/scrolling
			if (that.iLength < iStartIndex + oData.results.length) {
				that.iLength = iStartIndex + oData.results.length;
				that.bLengthFinal = false;
			}
	
			// if less entries are returned than have been requested
			// set length accordingly
			if (oData.results.length < iLength || iLength === undefined) {
				that.iLength = iStartIndex + oData.results.length;
				that.bLengthFinal = true;
			}
	
			// check if there are any results at all...
			if (iStartIndex == 0 && oData.results.length == 0) {
				that.iLength = 0;
				that.bLengthFinal = true;
			}
			
			that.oRequestHandle = null;
			that.bPendingRequest = false;
			
			// If request is originating from this binding, change must be fired afterwards
			that.bNeedsUpdate = true;
			
			that.bIgnoreSuspend = true;
		}
		
		function fnCompleted(oData) {
			that.fireDataReceived({data: oData});
		}
		
		function fnError(oError, bAborted) {
			that.oRequestHandle = null;
			that.bPendingRequest = false;
			if (!bAborted) {
				// reset data and trigger update
				that.aKeys = [];
				that.iLength = 0;
				that.bLengthFinal = true;
				that.bDataAvailable = true;
				that._fireChange({reason: ChangeReason.Change});
			}
			that.fireDataReceived();
		}
		
		function fnUpdateHandle(oHandle) {
			that.oRequestHandle = oHandle;
		}
		
		var sPath = this.sPath,
			oContext = this.oContext;
			
		if (this.isRelative()) {
			sPath = this.oModel.resolve(sPath,oContext);
		}
		if (sPath) {
			if (bPretend) {
				// Pretend to send a request by firing the appropriate events
				var sUrl = this.oModel._createRequestUrl(sPath, null, aParams);
				this.fireDataRequested();
				this.oModel.fireRequestSent({url: sUrl, method: "GET", async: true});
				setTimeout(function() {
					// If request is originating from this binding, change must be fired afterwards
					that.bNeedsUpdate = true;
					that.checkUpdate();
					that.oModel.fireRequestCompleted({url: sUrl, method: "GET", async: true, success: true});
					that.fireDataReceived();
				}, 0);
			} else {
				// Execute the request and use the metadata if available
				this.bPendingRequest = true;
				this.fireDataRequested();
				this.oModel._loadData(sPath, aParams, fnSuccess, fnError, false, fnUpdateHandle, fnCompleted);
			}
		}
	
	};
	
	/**
	 * @see sap.ui.model.ListBinding.prototype.getLength
	 *
	 */
	AdapterListBinding.prototype.getLength = function() {
    	this.consoleLog("getLength", this.iLength);
		// If length is not final and larger than zero, add some additional length to enable 
		// scrolling/paging for controls that only do this if more items are available
		if (this.bLengthFinal || this.iLength == 0) {
			return this.iLength;
		} else {
			var iAdditionalLength = this.iLastThreshold || this.iLastLength || 10;
			return this.iLength + iAdditionalLength;
		}
	};

	/**
	 * @see sap.ui.model.ListBinding.prototype.isLengthFinal
	 *
	 */
	AdapterListBinding.prototype.isLengthFinal = function() {
	    this.consoleLog("isLengthFinal?", this.bLengthFinal);
		return this.bLengthFinal;
	};

	/**
	 * Return the length of the list
	 *
	 * @return {number} the length
	 */
	AdapterListBinding.prototype._getLength = function() {
		    debugger;

		var that = this;
	
		// create a request object for the data request
		var aParams = [];
		if (this.sFilterParams) {
			aParams.push(this.sFilterParams);
		}
		
		// use only custom params for count and not expand,select params
		if (this.mParameters && this.mParameters.custom) {
			var oCust = { custom: {}};
			jQuery.each(this.mParameters.custom, function (sParam, oValue){
				oCust.custom[sParam] = oValue;
			});
			aParams.push(this.oModel.createCustomParams(oCust));
		}
		
		function _handleSuccess(oData) {
			that.iLength = parseInt(oData, 10);
			that.bLengthFinal = true;
		}
	
		function _handleError(oError) {
			var sErrorMsg = "Request for $count failed: " + oError.message;
			if (oError.response) {
				sErrorMsg += ", " + oError.response.statusCode + ", " + oError.response.statusText + ", " + oError.response.body;
			}
			jQuery.sap.log.warning(sErrorMsg);
		}
		
		// Use context and check for relative binding
		var sPath = this.oModel.resolve(this.sPath, this.oContext);
	
		// Only send request, if path is defined
		if (sPath) {
			var sUrl = this.oModel._createRequestUrl(sPath + "/$count", null, aParams);
			var oRequest = this.oModel._createRequest(sUrl, "GET", false);
			// count needs other accept header
			oRequest.headers["Accept"] = "text/plain, */*;q=0.5";
		
			// execute the request and use the metadata if available
			// (since $count requests are synchronous we skip the withCredentials here)
			this.oModel._request(oRequest, _handleSuccess, _handleError, undefined, undefined, this.oModel.getServiceMetadata());
		}
	};
	
	/**
	 * Refreshes the binding, check whether the model data has been changed and fire change event
	 * if this is the case. For server side models this should refetch the data from the server.
	 * To update a control, even if no data has been changed, e.g. to reset a control after failed
	 * validation, please use the parameter bForceUpdate.
	 * 
	 * @param {boolean} [bForceUpdate] Update the bound control even if no data has been changed
	 * @public
	 */
	AdapterListBinding.prototype.refresh = function(bForceUpdate, mChangedEntities, mEntityTypes) {
	    this.consoleLog("list binding refresh", bForceUpdate, mChangedEntities, mEntityTypes);
		this.iLength = this.oModel.iNumRows;
		this._fireRefresh({reason: ChangeReason.Refresh});
	    return true;

		var bChangeDetected = false;
		
		if (bForceUpdate || bChangeDetected) {
			this.abortPendingRequest();
			this.resetData();
			this._fireRefresh({reason: ChangeReason.Refresh});
		}
	};
	
	/**
	 * fireRefresh
	 */
	AdapterListBinding.prototype._fireRefresh = function(mArguments) {
		 if (this.oModel.resolve(this.sPath, this.oContext)) {
		     this.consoleLog("_fireRefresh");
			 this.bRefresh = true;
			 this.fireEvent("refresh", mArguments);
		 }
	};
	
	/**
	 * Initialize binding. Fires a change if data is already available ($expand) or a refresh.
	 * If metadata is not yet available, do nothing, method will be called again when
	 * metadata is loaded.
	 *  
	 * @public
	 */
	AdapterListBinding.prototype.initialize = function() {
	    this.consoleLog("initialize");
		if (this.oModel.oMetadata.isLoaded()) {
			if (this.bDataAvailable) {
				this._fireChange({reason: ChangeReason.Change});
			} else {
				this._fireRefresh({reason: ChangeReason.Refresh});
			}
		}
	};
	
	/**
	 * Check whether this Binding would provide new values and in case it changed,
	 * inform interested parties about this.
	 *
	 * @param {boolean} bForceUpdate
	 * @param {object} mChangedEntities
	 */
	AdapterListBinding.prototype.checkUpdate = function(bForceUpdate, mChangedEntities) {
		var bChangeReason = this.sChangeReason ? this.sChangeReason : ChangeReason.Change,
			bChangeDetected = false,
			oLastData, oCurrentData,
			that = this,
			oRef,
			bRefChanged;
		
		if (this.bSuspended && !this.bIgnoreSuspend) {
			return;
		}

		// check for need to update

		if (bForceUpdate || bChangeDetected || this.bNeedsUpdate) {
			this.bNeedsUpdate = false;
			this._fireChange({reason: bChangeReason});
		}
		this.sChangeReason = undefined;
		this.bIgnoreSuspend = false;
	};
	
	AdapterListBinding.prototype.resetData = function() {
		this.iLength = 0;
		this.bLengthFinal = false;
		this.sChangeReason = undefined;
		this.bDataAvailable = false;
		if (this.oModel.isCountSupported() &&
			(this.sCountMode == CountMode.Request ||
			this.sCountMode == CountMode.Both)) {
			this._getLength();
		}
	};
	
	AdapterListBinding.prototype.abortPendingRequest = function() {
	};
	
	AdapterListBinding.prototype.sort = function(aSorters, bReturnSuccess) {
	    this.consoleLog("sort", aSorters, bReturnSuccess);
	    var sorters = _.map(aSorters, function(s) {
                var colIndex = _.parseInt(s.sPath);
	            return { colIndex: colIndex, descending: s.bDescending };
	        });
	    this.oModel.fSortCallback(sorters);
	};
	
	AdapterListBinding.prototype.filter = function(aFilters, sFilterType, bReturnSuccess) {
        this.consoleLog("filter", aFilters, sFilterType, bReturnSuccess);
	    var filters = _.map(aFilters, function(f) {
                var colIndex = _.parseInt(f.sPath);
	            return { colIndex: colIndex, operator: f.sOperator, value1: f.oValue1, value2: f.oValue2 };
	        });
	    this.oModel.fFilterCallback(filters);
	};

	AdapterListBinding.prototype._getEntityType = function(){
	    this.consoleLog("_getEntityType");
		return undefined;
	};
	
	AdapterListBinding.prototype.resume = function() {
		this.bIgnoreSuspend = false;
		ListBinding.prototype.resume.apply(this, arguments);
	};
	
	return AdapterListBinding;

});
jQuery.sap.declare("sap.marmolata.AdapterListBinding");
/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
// Provides class sap.ui.model.odata.AdapterMetadata
if (typeof jQuery !== "undefined") {
sap.ui.define(['jquery.sap.global', 'sap/ui/base/EventProvider', 'sap/ui/thirdparty/datajs'],
	function(jQuery, EventProvider, OData) {
	"use strict";

	/**
	 * Constructor for a new AdapterMetadata.
	 *
	 * @param {string} sMetadataURI needs the correct metadata uri including $metadata
	 * @param {object} [mParams] optional map of parameters.
	 * @param {boolean} [mParams.async=true] request is per default async
	 * @param {string} [mParams.user] user for the service,
	 * @param {string} [mParams.password] password for service
	 * @param {object} [mParams.headers] (optional) map of custom headers which should be set with the request.
	 *
	 * @class
	 * Implementation to access oData metadata
	 *
	 * @author SAP SE
	 * @version 1.34.0
	 *
	 * @constructor
	 * @public
	 * @alias sap.ui.model.odata.AdapterMetadata
	 * @extends sap.ui.base.EventProvider
	 */
	var AdapterMetadata = EventProvider.extend("sap.marmolata.AdapterMetadata", /** @lends sap.ui.model.odata.AdapterMetadata.prototype */ {

		constructor : function(sMetadataURI, mParams) {
			EventProvider.apply(this, arguments);

			this.bLoaded = true;
			this.bFailed = false;
			this.mEntityTypes = {};
			this.sUrl = sMetadataURI;
			this.bAsync = mParams.async;
			this.sUser = mParams.user;
			this.bWithCredentials = mParams.withCredentials;
			this.sPassword = mParams.password;
			this.mHeaders = mParams.headers;
			this.oLoadEvent = null;
			this.oFailedEvent = null;
			this.oMetadata = null;
			var that = this;
			this.fnResolve;
			// global promise
			this.pLoaded = new Promise(function(resolve, reject) {
					that.fnResolve = resolve;
			});

		},

		metadata : {
			publicMethods : ["getServiceMetadata", "attachFailed", "detachFailed", "attachLoaded", "detachLoaded", "refresh"]
		}

	});

	AdapterMetadata.prototype.refresh = function(){
	};

	/**
	 * Return the metadata object
	 *
	 * @return {Object} metdata object
	 * @public
	 */
	AdapterMetadata.prototype.getServiceMetadata = function() {
		return this.oMetadata;
	};

	/**
	 * Checks whether metadata is available
	 *
	 * @public
	 * @returns {boolean} returns whether metadata is already loaded
	 */
	AdapterMetadata.prototype.isLoaded = function() {
		return this.bLoaded;
	};

	/**
	 * Returns a promise for the loaded state of the metadata
	 *
	 * @public
	 * @returns {Promise} returns a promise on metadata loaded state
	 */
	AdapterMetadata.prototype.loaded = function() {
		return this.pLoaded;
	};

	/**
	 * Checks whether metadata loading has already failed
	 *
	 * @public
	 * @returns {boolean} returns whether metadata request has failed
	 */
	AdapterMetadata.prototype.isFailed = function() {
		return this.bFailed;
	};

	/**
	 * Fire event loaded to attached listeners.
	 *
	 * @return {sap.ui.model.odata.AdapterMetadata} <code>this</code> to allow method chaining
	 * @protected
	 */
	AdapterMetadata.prototype.fireLoaded = function(mParams) {
		this.bLoaded = true;
		this.fireEvent("loaded", mParams);
		jQuery.sap.log.debug(this + " - loaded was fired");
		return this;
	};

	/**
	 * Attach event-handler <code>fnFunction</code> to the 'loaded' event of this <code>sap.ui.model.odata.AdapterMetadata</code>.
	 *
	 *
	 * @param {object}
	 *            [oData] The object, that should be passed along with the event-object when firing the event.
	 * @param {function}
	 *            fnFunction The function to call, when the event occurs. This function will be called on the
	 *            oListener-instance (if present) or in a 'static way'.
	 * @param {object}
	 *            [oListener] Object on which to call the given function. If empty, the global context (window) is used.
	 *
	 * @return {sap.ui.model.odata.AdapterMetadata} <code>this</code> to allow method chaining
	 * @public
	 */
	AdapterMetadata.prototype.attachLoaded = function(oData, fnFunction, oListener) {
		this.attachEvent("loaded", oData, fnFunction, oListener);
		return this;
	};

	/**
	 * Detach event-handler <code>fnFunction</code> from the 'loaded' event of this <code>sap.ui.model.odata.AdapterMetadata</code>.
	 *
	 * The passed function and listener object must match the ones previously used for event registration.
	 *
	 * @param {function}
	 *            fnFunction The function to call, when the event occurs.
	 * @param {object}
	 *            oListener Object on which the given function had to be called.
	 * @return {sap.ui.model.odata.AdapterMetadata} <code>this</code> to allow method chaining
	 * @public
	 */
	AdapterMetadata.prototype.detachLoaded = function(fnFunction, oListener) {
		this.detachEvent("loaded", fnFunction, oListener);
		return this;
	};


	/**
	 * Fire event failed to attached listeners.
	 *
	 * @param {object} [mArguments] the arguments to pass along with the event.
	 * @param {string} [mArguments.message]  A text that describes the failure.
	 * @param {string} [mArguments.statusCode]  HTTP status code returned by the request (if available)
	 * @param {string} [mArguments.statusText] The status as a text, details not specified, intended only for diagnosis output
	 * @param {string} [mArguments.responseText] Response that has been received for the request ,as a text string
	 *
	 * @return {sap.ui.model.odata.AdapterMetadata} <code>this</code> to allow method chaining
	 * @protected
	 */
	AdapterMetadata.prototype.fireFailed = function(mArguments) {
		this.bFailed = true;
		this.fireEvent("failed", mArguments);
		return this;
	};


	/**
	 * Attach event-handler <code>fnFunction</code> to the 'failed' event of this <code>sap.ui.model.odata.AdapterMetadata</code>.
	 *
	 *
	 * @param {object}
	 *            [oData] The object, that should be passed along with the event-object when firing the event.
	 * @param {function}
	 *            fnFunction The function to call, when the event occurs. This function will be called on the
	 *            oListener-instance (if present) or in a 'static way'.
	 * @param {object}
	 *            [oListener] Object on which to call the given function. If empty, the global context (window) is used.
	 *
	 * @return {sap.ui.model.odata.AdapterMetadata} <code>this</code> to allow method chaining
	 * @public
	 */
	AdapterMetadata.prototype.attachFailed = function(oData, fnFunction, oListener) {
		this.attachEvent("failed", oData, fnFunction, oListener);
		return this;
	};

	/**
	 * Detach event-handler <code>fnFunction</code> from the 'failed' event of this <code>sap.ui.model.odata.AdapterMetadata</code>.
	 *
	 * The passed function and listener object must match the ones previously used for event registration.
	 *
	 * @param {function}
	 *            fnFunction The function to call, when the event occurs.
	 * @param {object}
	 *            oListener Object on which the given function had to be called.
	 * @return {sap.ui.model.odata.AdapterMetadata} <code>this</code> to allow method chaining
	 * @public
	 */
	AdapterMetadata.prototype.detachFailed = function(fnFunction, oListener) {
		this.detachEvent("failed", fnFunction, oListener);
		return this;
	};


	/**
	 * Extract the entity type name of a given sPath. Also navigation properties in the path will be followed to get the right entity type for that property.
	 * eg.
	 * /Categories(1)/Products(1)/Category --> will get the Categories entity type
	 * /Products --> will get the Products entity type
	 * @return {object} the entity type or null if not found
	 */
	AdapterMetadata.prototype._getEntityTypeByPath = function(sPath) {
    	console.log("_getEntityTypeByPath", sPath);
		if (!sPath) {
			jQuery.sap.assert(undefined, "sPath not defined!");
			return null;
		}
		if (!this.oMetadata || jQuery.isEmptyObject(this.oMetadata)) {
			jQuery.sap.assert(undefined, "No metadata loaded!");
			return null;
		}

		if (this.mEntityTypes[sPath]) {
			return this.mEntityTypes[sPath];
		}

		// remove starting and trailing /
		var sCandidate = sPath.replace(/^\/|\/$/g, ""),
			aParts = sCandidate.split("/"),
			iLength = aParts.length,
			oParentEntityType,
			aEntityTypeName,
			oEntityType,
			oResultEntityType,
			that = this;

		// remove key from first path segment if any (e.g. Products(555) --> Products)
		if (aParts[0].indexOf("(") != -1) {
			aParts[0] = aParts[0].substring(0,aParts[0].indexOf("("));
		}

		if (iLength > 1 ) {
			// check if navigation property is used
			// e.g. Categories(1)/Products(1)/Category --> Category is a navigation property so we need the collection Categories

			oParentEntityType = that._getEntityTypeByPath(aParts[0]);

			for (var i = 1; i < aParts.length; i++ ) {
				if (oParentEntityType) {
					// remove key from current part if any
					if (aParts[i].indexOf("(") != -1) {
						aParts[i] = aParts[i].substring(0,aParts[i].indexOf("("));
					}
					// check for navigation properties
					// if no navigation property found we assume that the current part is a normal property so we return the current oParentEntityType
					// which is the parent entity type of that property
					oResultEntityType = that._getEntityTypeByNavProperty(oParentEntityType, aParts[i]);
					if (oResultEntityType) {
						oParentEntityType = oResultEntityType;
					}

					oEntityType = oParentEntityType;

				}
			}
		} else {
			// if only one part exists it should be the name of the collection and we can get the entity type for it
			aEntityTypeName = this._splitName(this._getEntityTypeName(aParts[0]));
			oEntityType = this._getObjectMetadata("entityType", aEntityTypeName[0], aEntityTypeName[1]);
			if (oEntityType) {
				// store the type name also in the oEntityType
				oEntityType.entityType = this._getEntityTypeName(aParts[0]);
			}
		}

		// check for function imports
		if (!oEntityType) {
			var sFuncCandName = aParts[aParts.length - 1]; // last segment is always a function import
			var oFuncType = this._getFunctionImportMetadata(sFuncCandName, "GET");
			if (!oFuncType) {
				oFuncType = this._getFunctionImportMetadata(sFuncCandName, "POST");
			}
			if (oFuncType && oFuncType.entitySet) { // only collections supported which have an entitySet
				oEntityType = this._getEntityTypeByPath(oFuncType.entitySet);
				if (oEntityType) {
					// store the type name also in the oEntityType
					oEntityType.entityType = this._getEntityTypeName(oFuncType.entitySet);
				}
			}
		}

		if (oEntityType) {
			this.mEntityTypes[sPath] = oEntityType;
		}

		//jQuery.sap.assert(oEntityType, "EntityType for path " + sPath + " could not be found!");
		return oEntityType;
	};

	/**
	 * Extract the entity type from a given sName. Retrieved types will be cached
	 * so further calls must not iterate the metadata structure again.
	 *
	 * #/Category/CategoryName --> will get the Category entity type
	 * @param {string} sName the qualified or unqualified name of the entity
	 * @return {object} the entity type or null if not found
	 */
	AdapterMetadata.prototype._getEntityTypeByName = function(sName) {
    	console.log("_getEntityTypeByName", sPath);
		var oEntityType, that = this, sEntityName, sNamespace, iSeparator;

		if (!sName) {
			jQuery.sap.assert(undefined, "sName not defined!");
			return null;
		}
		iSeparator = sName.indexOf(".");
		if (iSeparator > 0) {
			sNamespace = sName.substr(0, iSeparator);
			sEntityName = sName.substr(iSeparator + 1);
		} else {
			sEntityName = sName;
		}
		if (!this.oMetadata || jQuery.isEmptyObject(this.oMetadata)) {
			jQuery.sap.assert(undefined, "No metadata loaded!");
			return null;
		}
		if (this.mEntityTypes[sName]) {
			oEntityType = this.mEntityTypes[sName];
		} else {
			jQuery.each(this.oMetadata.dataServices.schema, function(i, oSchema) {
				if (oSchema.entityType && (!sNamespace || oSchema.namespace === sNamespace)) {
					jQuery.each(oSchema.entityType, function(k, oEntity) {
						if (oEntity.name === sEntityName) {
							oEntityType = oEntity;
							that.mEntityTypes[sName] = oEntityType;
							oEntityType.namespace = oSchema.namespace;
							return false;
						}
					});
				}
			});
		}
		return oEntityType;
	};

	/**
	 * Extracts an Annotation from given path parts
	 * @param {array} aMetaParts
	 * @returns {any}
	 * @private
	 */
	AdapterMetadata.prototype._getAnnotation = function(sPath) {
    	console.log("_getAnnotation", sPath);

		var oNode, aParts, sMetaPath, aMetaParts, oEntityType, sPropertyPath, oProperty;

		aParts = sPath.split('/#');
		aMetaParts = aParts[1].split('/');

		//check if we have an absolute meta binding
		if (!aParts[0]) {
			// first part must be the entityType
			oEntityType = this._getEntityTypeByName(aMetaParts[0]);

			jQuery.sap.assert(oEntityType, aMetaParts[0] + " is not a valid EnityType");

			if (!oEntityType) {
				return;
			}

			//extract property
			sPropertyPath = aParts[1].substr(aParts[1].indexOf('/') + 1);
			oProperty = this._getPropertyMetadata(oEntityType,sPropertyPath);

			jQuery.sap.assert(oProperty, sPropertyPath + " is not a valid property path");
			if (!oProperty) {
				return;
			}

			sMetaPath = sPropertyPath.substr(sPropertyPath.indexOf(oProperty.name));
			sMetaPath = sMetaPath.substr(sMetaPath.indexOf('/') + 1);
		} else {
			//getentityType from data Path
			oEntityType = this._getEntityTypeByPath(aParts[0]);

			jQuery.sap.assert(oEntityType, aParts[0] + " is not a valid path");

			if (!oEntityType) {
				return;
			}

			//extract property
			sPath = aParts[0].replace(/^\/|\/$/g, "");
			sPropertyPath = sPath.substr(sPath.indexOf('/') + 1);
			oProperty = this._getPropertyMetadata(oEntityType,sPropertyPath);

			jQuery.sap.assert(oProperty, sPropertyPath + " is not a valid property path");
			if (!oProperty) {
				return;
			}

			sMetaPath = aMetaParts.join('/');
		}



		oNode = this._getAnnotationObject(oEntityType, oProperty, sMetaPath);

		return oNode;
	};

	/**
	 * Extract the Annotation Object from a given oProperty and a metadata path
	 *
	 * @return {object} the annotation object/value
	 */
	AdapterMetadata.prototype._getAnnotationObject = function(oEntityType, oObject, sMetaDataPath) {
    	console.log("_getAnnotationObject", oEntityType, oObject, sMetaDataPath);
		var aAnnotationParts, aParts, oAnnotation, oNode, sAnnotation;

		if (!oObject) {
			return;
		}

		oNode = oObject;
		aParts = sMetaDataPath.split('/');

		//V4 annotation
		if (aParts[0].indexOf('.') > -1) {
			return this._getV4AnnotationObject(oEntityType, oObject, aParts);
		} else {
			if (aParts.length > 1) {
				//TODO:namespace handling
				oNode = oNode[aParts[0]];
				if (!oNode && oObject.extensions) {
					for (var i = 0; i < oObject.extensions.length; i++) {
						var oExtension = oObject.extensions[i];
						if (oExtension.name == aParts[0]) {
							oNode = oExtension;
							break;
						}
					}
				}
				sMetaDataPath = aParts.splice(0,1);
				oAnnotation = this._getAnnotationObject(oEntityType, oNode, aParts.join('/'));
			} else {
				//handle attributes
				if (aParts[0].indexOf('@') > -1) {
					sAnnotation = aParts[0].substr(1);
					aAnnotationParts = sAnnotation.split(':');
					oAnnotation = oNode[aAnnotationParts[0]];
					if (!oAnnotation && oNode.extensions) {
						for (var i = 0; i < oNode.extensions.length; i++) {
							var oExtension = oNode.extensions[i];
							if (oExtension.name === aAnnotationParts[1] && oExtension.namespace === this.mNamespaces[aAnnotationParts[0]]) {
								oAnnotation = oExtension.value;
								break;
							}
						}
					}
				} else { // handle nodes
					aAnnotationParts = aParts[0].split(':');
					oAnnotation = oNode[aAnnotationParts[0]];
					oAnnotation = oNode[aParts[0]];
					if (!oAnnotation && oNode.extensions) {
						for (var i = 0; i < oNode.extensions.length; i++) {
							var oExtension = oNode.extensions[i];
							if (oExtension.name === aAnnotationParts[1] && oExtension.namespace === this.mNamespaces[aAnnotationParts[0]]) {
								oAnnotation = oExtension;
								break;
							}
						}
					}
				}
			}
		}
		return oAnnotation;
	};

	/*
	 * @private
	 */
	AdapterMetadata.prototype._getV4AnnotationObject = function(oEntityType, oObject, aParts) {
    	console.log("_getV4AnnotationObject", oEntityType, oObject, sMetaDataPath);
		var oAnnotationNode, aAnnotations = [];

		if (aParts.length > 1) {
			jQuery.sap.assert(aParts.length == 1, "'" + aParts.join('/') + "' is not a valid annotation path");
			return;
		}

		var sTargetName = oEntityType.namespace ? oEntityType.namespace + "." : "";
		sTargetName += oEntityType.name + "/" + oObject.name;

		jQuery.each(this.oMetadata.dataServices.schema, function(i, oSchema) {
			if (oSchema.annotations) {
				jQuery.each(oSchema.annotations, function(k, oObject) {
					//we do not support qualifiers on target level
					if (oObject.target === sTargetName && !oObject.qualifier) {
						aAnnotations.push(oObject.annotation);
						return false;
					}
				});
			}
		});
		if (aAnnotations) {
			jQuery.each(aAnnotations, function(i, aAnnotation) {
				jQuery.each(aAnnotation, function(j, oAnnotation) {
					if (oAnnotation.term === aParts[0]) {
						oAnnotationNode = oAnnotation;
					}
				});
			});
		}
		return oAnnotationNode;
	};

	/**
	 * splits a name e.g. Namespace.Name into [Name, Namespace]
	 */
	AdapterMetadata.prototype._splitName = function(sFullName) {
		var aParts = [];
		if (sFullName) {
			var iSepIdx = sFullName.lastIndexOf(".");
			aParts[0] = sFullName.substr(iSepIdx + 1);
			aParts[1] = sFullName.substr(0, iSepIdx);
		}
		return aParts;
	};


	/**
	*  search metadata for specified collection name (= entity set name)
	*/
	AdapterMetadata.prototype._getEntityTypeName = function(sCollection) {
    	console.log("_getEntityTypeName", sCollection);
		var sEntityTypeName;
		if (sCollection) {
			jQuery.each(this.oMetadata.dataServices.schema, function(i, oSchema) {
				if (oSchema.entityContainer) {
					jQuery.each(oSchema.entityContainer, function(k, oEntityContainer) {
						if (oEntityContainer.entitySet) {
							jQuery.each(oEntityContainer.entitySet, function(j, oEntitySet) {
								if (oEntitySet.name === sCollection) {
									sEntityTypeName = oEntitySet.entityType;
									return false;
								}
							});
						}
					});
				}
			});
		}
		//jQuery.sap.assert(sEntityTypeName, "EntityType name of EntitySet "+ sCollection + " not found!");
		return sEntityTypeName;
	};

	/**
	 * get the object of a specified type name and namespace
	 */
	AdapterMetadata.prototype._getObjectMetadata = function(sObjectType, sObjectName, sNamespace) {
    	console.log("_getObjectMetadata", sObjectType, sObjectName, sNamespace);
		var oObject;
		if (sObjectName && sNamespace) {
			// search in all schemas for the sObjectName
			jQuery.each(this.oMetadata.dataServices.schema, function(i, oSchema) {
				// check if we found the right schema which will contain the sObjectName
				if (oSchema[sObjectType] && oSchema.namespace === sNamespace) {
					jQuery.each(oSchema[sObjectType], function(j, oCurrentObject) {
						if (oCurrentObject.name === sObjectName) {
							oObject = oCurrentObject;
							oObject.namespace = oSchema.namespace;
							return false;
						}
					});
					return !oObject;
				}
			});
		}
		//jQuery.sap.assert(oObject, "ObjectType " + sObjectType + " for name " + sObjectName + " not found!");
		return oObject;
	};

	/**
	 * Get the the use-batch extension value if any
	 * @return {boolean} true/false
	 * @public
	 */
	AdapterMetadata.prototype.getUseBatch = function() {
    	console.log("getUseBatch");
		var bUseBatch = false;
		// search in all schemas for the use batch extension
		jQuery.each(this.oMetadata.dataServices.schema, function(i, oSchema) {
			if (oSchema.entityContainer) {
				jQuery.each(oSchema.entityContainer, function(k, oEntityContainer) {
					if (oEntityContainer.extensions) {
						jQuery.each(oEntityContainer.extensions, function(l, oExtension) {
							if (oExtension.name === "use-batch" && oExtension.namespace === "http://www.sap.com/Protocols/SAPData") {
								bUseBatch = (typeof oExtension.value === 'string') ? (oExtension.value.toLowerCase() === 'true') : !!oExtension.value;
								return false;
							}
						});
					}
				});
			}
		});
		return bUseBatch;
	};

	/**
	 * Retrieve the function import metadata for a name and a method.
	 *
	 * @param {string} sFunctionName The name of the function import to look up
	 * @param {string} sMethod The HTTP Method for which this function is requested
	 */
	AdapterMetadata.prototype._getFunctionImportMetadata = function(sFunctionName, sMethod) {
    	console.log("_getFunctionImportMetadata", sFunctionName, sMethod);
		var oObject = null;
		if (sFunctionName.indexOf("/") > -1) {
			sFunctionName = sFunctionName.substr(sFunctionName.indexOf("/") + 1);
		}
		// search in all schemas for the sObjectName
		jQuery.each(this.oMetadata.dataServices.schema, function(i, oSchema) {
			// check if we found the right schema which will contain the sObjectName
			if (oSchema["entityContainer"]) {
				jQuery.each(oSchema["entityContainer"], function(j,oEntityContainer) {
					if (oEntityContainer["functionImport"]) {
						jQuery.each(oEntityContainer["functionImport"], function(k,oFunctionImport) {
							if (oFunctionImport.name === sFunctionName && oFunctionImport.httpMethod === sMethod) {
								oObject = oFunctionImport;
								return false;
							}
						});
					}
					return !oObject;
				});
			}
			return !oObject;
		});
		return oObject;
	};


	AdapterMetadata.prototype._getEntityTypeByNavProperty = function(oEntityType, sNavPropertyName) {
    	console.log("_getEntityTypeByNavProperty", oEntityType, sNavPropertyName);
		var that = this, aAssociationName, oAssociation, aEntityTypeName, oNavEntityType;
		if (!oEntityType.navigationProperty) {
			return undefined;
		}
		jQuery.each(oEntityType.navigationProperty, function(k, oNavigationProperty) {
			if (oNavigationProperty.name === sNavPropertyName) {
				// get association for navigation property and then the collection name
				aAssociationName = that._splitName(oNavigationProperty.relationship);
				oAssociation = that._getObjectMetadata("association", aAssociationName[0], aAssociationName[1]);
				if (oAssociation) {
					var oEnd = oAssociation.end[0];
					if (oEnd.role !== oNavigationProperty.toRole) {
						oEnd = oAssociation.end[1];
					}
					aEntityTypeName = that._splitName(oEnd.type);
					oNavEntityType = that._getObjectMetadata("entityType", aEntityTypeName[0], aEntityTypeName[1]);
					if (oNavEntityType) {
						// store the type name also in the oEntityType
						oNavEntityType.entityType = oEnd.type;
					}
					return false;
				}
			}
		});
		return oNavEntityType;
	};

	/**
	 * get all navigation property names in an array by the specified entity type
	 */
	AdapterMetadata.prototype._getNavigationPropertyNames = function(oEntityType) {
    	console.log("_getNavigationPropertyNames", oEntityType);
		var aNavProps = [];
		if (oEntityType.navigationProperty) {
			jQuery.each(oEntityType.navigationProperty, function(k, oNavigationProperty) {
				aNavProps.push(oNavigationProperty.name);
			});
		}
		return aNavProps;
	};

	/**
	*  extract the property metadata of a specified property of a entity type out of the metadata document
	*/
	AdapterMetadata.prototype._getPropertyMetadata = function(oEntityType, sProperty) {
    	console.log("_getPropertyMetadata", oEntityType, sProperty);
		var oPropertyMetadata, that = this;

		if (!oEntityType) {
			return;
		}

		// remove starting/trailing /
		sProperty = sProperty.replace(/^\/|\/$/g, "");
		var aParts = sProperty.split("/"); // path could point to a complex type

		jQuery.each(oEntityType.property, function(k, oProperty) {
			if (oProperty.name === aParts[0]) {
				oPropertyMetadata = oProperty;
				return false;
			}
		});

		// check if complex type
		if (oPropertyMetadata && aParts.length > 1 && !jQuery.sap.startsWith(oPropertyMetadata.type.toLowerCase(), "edm.")) {
			var aName = this._splitName(oPropertyMetadata.type);
			oPropertyMetadata = this._getPropertyMetadata(this._getObjectMetadata("complexType", aName[0], aName[1]), aParts[1]);
		}

		// check if navigation property
		if (!oPropertyMetadata && aParts.length > 1) {
			var oParentEntityType = this._getEntityTypeByNavProperty(oEntityType, aParts[0]);
			if (oParentEntityType) {
				oPropertyMetadata = that._getPropertyMetadata(oParentEntityType, aParts[1]);
			}
		}

		//jQuery.sap.assert(oPropertyMetadata, "PropertyType for property "+ aParts[0]+ " of EntityType " + oEntityType.name + " not found!");
		return oPropertyMetadata;
	};

	AdapterMetadata.prototype.destroy = function() {
		delete this.oMetadata;
		var that = this;

		if (!!this.oLoadEvent) {
			jQuery.sap.clearDelayedCall(this.oLoadEvent);
		}
		if (!!this.oFailedEvent) {
			jQuery.sap.clearDelayedCall(this.oFailedEvent);
		}

		EventProvider.prototype.destroy.apply(this, arguments);
	};

	/**
	 * creation of a request object for changes
	 *
	 * @return {object} request object
	 * @private
	 */
	AdapterMetadata.prototype._createRequest = function(sUrl) {
    	console.log("_createRequest", sUrl);

		var oHeaders = {}, oLangHeader = {"Accept-Language" : sap.ui.getCore().getConfiguration().getLanguage()};

		jQuery.extend(oHeaders, this.mHeaders, oLangHeader);


		var oRequest = {
				headers : oHeaders,
				requestUri : sUrl,
				method : 'GET',
				user: this.sUser,
				password: this.sPassword,
				async: this.bAsync
		};

		if (this.bAsync) {
			oRequest.withCredentials = this.bWithCredentials;
		}

		return oRequest;
	};

	/**
	 * Returns the entity set to which the given entity path belongs
	 *
	 * @param {string} sEntityPath The path to the entity
	 * @return {map|undefined} The EntitySet to which the path belongs or undefined if none
	 */
	AdapterMetadata.prototype._getEntitySetByPath = function(sEntityPath) {
    	console.log("_getEntitySetByPath", sEntityPath);

		if (!this._entitySetMap) {
			// Cache results of entity set lookup
			this._entitySetMap = {};
			this.oMetadata.dataServices.schema.forEach(function(mShema) {
				if (mShema.entityContainer) {
					mShema.entityContainer.forEach(function(mContainer) {
						if (mContainer.entitySet) {
							mContainer.entitySet.forEach(function(mEntitySet) {
								this._entitySetMap[mEntitySet.entityType] = mEntitySet;
							}, this);
						}
					}, this);
				}
			}, this);
		}

		var oEntityType = this._getEntityTypeByPath(sEntityPath);

		if (oEntityType) {
			return this._entitySetMap[oEntityType.entityType];
		}

		return;
	};

	/**
	 * Add metadata url: The response will be merged with the existing metadata object
	 *
	 * @param string | array vUrl Either one URL as string or an array or Uri strings
	 * @returns Promise The Promise for metadata loading
	 * @private
	 */
	AdapterMetadata.prototype._addUrl = function(vUrl) {
    	console.log("_addUrl", vUrl);
		var aUrls = [].concat(vUrl),
			that = this;
	};

	/**
	 * merges two metadata objects
	 * @param {object} oTarget Target metadata object
	 * @param {object} oSource Source metadata object
	 * @param {array} aEntitySets An array where the entitySets (metadata objects) from the source objects will 
	 * 								be collected and returned.
	 * @return {object} oTarget The merged metadata object
	 * @private
	 */
	AdapterMetadata.prototype.merge = function(oTarget, oSource, aEntitySets) {
    	console.log("merge", oTarget, oSource, aEntitySets);
		var that = this;
		jQuery.each(oTarget.dataServices.schema, function(i, oTargetSchema) {
			// find schema
			jQuery.each(oSource.dataServices.schema, function(j, oSourceSchema) {
				if (oSourceSchema.namespace === oTargetSchema.namespace) {
					//merge entityTypes
					if (oSourceSchema.entityType) {
						//cache entityType names
						if (!that.mEntityTypeNames) {
							that.mEntityTypeNames = {};
							oTargetSchema.entityType.map(function(o) {
								that.mEntityTypeNames[o.name] = true;
							});
						}
						oTargetSchema.entityType = !oTargetSchema.entityType ? [] : oTargetSchema.entityType;
						for (var i = 0; i < oSourceSchema.entityType.length; i++) {
							if (!(oSourceSchema.entityType[i].name in that.mEntityTypeNames)) {
								oTargetSchema.entityType.push(oSourceSchema.entityType[i]);
								that.mEntityTypeNames[oSourceSchema.entityType[i].name] = true;
							}
						}
					}
					//find EntityContainer if any
					if (oTargetSchema.entityContainer && oSourceSchema.entityContainer) {
						jQuery.each(oTargetSchema.entityContainer, function(k, oTargetContainer) {
							//merge entitySets
							jQuery.each(oSourceSchema.entityContainer, function(l, oSourceContainer) {
								if (oSourceContainer.entitySet) {
									if (oSourceContainer.name === oTargetContainer.name) {
										//cache entitySet names
										if (!that.mEntitySetNames) {
											that.mEntitySetNames = {};
											oTargetContainer.entitySet.map(function(o) {
												that.mEntitySetNames[o.name] = true;
											});
										}
										oTargetContainer.entitySet = !oTargetContainer.entitySet ? [] : oTargetContainer.entitySet;
										for (var i = 0; i < oSourceContainer.entitySet.length; i++) {
											if (!(oSourceContainer.entitySet[i].name in that.mEntitySetNames)) {
												oTargetContainer.entitySet.push(oSourceContainer.entitySet[i]);
												that.mEntitySetNames[oSourceContainer.entitySet[i].name] = true;
											}
										}
										oSourceContainer.entitySet.forEach(function(oElement) {
											aEntitySets.push(oElement);
										});
									}
								}
							});
						});
					}
					//merge Annotations
					if (oSourceSchema.annotations) {
						oTargetSchema.annotations = !oTargetSchema.annotations ? [] : oTargetSchema.annotations;
						oTargetSchema.annotations = oTargetSchema.annotations.concat(oSourceSchema.annotations);
					}
				}
			});
		});
		return oTarget;
	};

	/**
	 * Returns the first EntitySet from all EntityContainers that matches the namespace and name of the given EntityType
	 *
	 * @param {map} mEntityType - The EntityType object
	 * @return {map|null} Retuns the EntitySet object or null if not found
	 */
	AdapterMetadata.prototype._getEntitySetByType = function(mEntityType) {
    	console.log("_getEntitySetByType", mEntityType);

		var sEntityType = mEntityType.namespace + "." + mEntityType.name;
		
		var aSchema = this.oMetadata.dataServices.schema;
		for (var i = 0; i < aSchema.length; ++i) {
			var aContainers = aSchema[i].entityContainer;
			if (aContainers) {
				for (var n = 0; n < aContainers.length; ++n) {
					var aSets = aContainers[n].entitySet;
					if (aSets) {
						for (var m = 0; m < aSets.length; ++m) {
							if (aSets[m].entityType === sEntityType) {
								return aSets[m];
							}
						}
					}
				}
			}
		}
		return null;
	};
	
	return AdapterMetadata;

});
jQuery.sap.declare("sap.marmolata.AdapterMetadata");
}
"use strict";

(function() {
  if (typeof jQuery !== 'undefined') {
    jQuery.sap.require("sap.m.NavContainer");


    sap.m.NavContainer.transitions["slideRight"] = {

      to: function(oFromPage, oToPage, fCallback) {
        sap.m.NavContainer.transitions["slide"].back(oFromPage, oToPage, fCallback);
      },

      back: function(oFromPage, oToPage, fCallback) {
        sap.m.NavContainer.transitions["slide"].to(oFromPage, oToPage, fCallback);
      }
    };

    sap.m.NavContainer.transitions["slideLeft"] = {

      to: function(oFromPage, oToPage, fCallback) {
        sap.m.NavContainer.transitions["slide"].to(oFromPage, oToPage, fCallback);
      },

      back: function(oFromPage, oToPage, fCallback) {
        sap.m.NavContainer.transitions["slide"].back(oFromPage, oToPage, fCallback);
      }
    };
  }
})()

if (typeof jQuery !== "undefined") {

sap.ui.define(
  ["sap/ui/core/Control"],
  function (Control) {

    "use strict";

    let Canvas = Control.extend("sap.marmolata.ui.Canvas", {

      metadata: {
        properties: {
          "width": { type: "sap.ui.core.CSSSize", group: "Appearance", defaultValue: null },
          "height": { type: "sap.ui.core.CSSSize", group: "Appearance", defaultValue: null },
          "backgroundColor": { type: "sap.ui.core.CSSColor", defaultValue: "white" }
        }
      },

      renderer: function (oRm, oControl) {
        //first up, render a div for the ShadowBox
        oRm.write("<canvas");

        //next, render the control information, this handles your sId (you must do this for your control to be properly tracked by ui5).
        oRm.writeControlData(oControl);
        if (typeof oControl.aCustomStyleClasses !== "undefined") {
            oRm.write("class='" + oControl.aCustomStyleClasses.join(" ") + "'");
        }

        oRm.write("style='position:relative;background-color:" +
          oControl.getBackgroundColor() + ";'");
        oRm.write(">");

        oRm.write("</canvas>");
      },

      onAfterRendering: function () {
        if (sap.ui.core.Control.prototype.onAfterRendering) {
          sap.ui.core.Control.prototype.onAfterRendering.apply(this, arguments);
        }
      }
    });

    Canvas.prototype.doWithContext = function (f) {
      var self;
      self = this;
      setTimeout(function () {
        if (!self.getDomRef()) throw "Canvas internal not found. Canvas needs to be rendered before being used";
        f(self.getDomRef().getContext("2d"));
      }, 0);
    }

    Canvas.prototype.clear = function () {
      var self = this;

      setTimeout(function () {
        if (!self.getDomRef())
          throw "Canvas internal not found. Canvas needs to be rendered before being used";
        var ctx = self.getDomRef().getContext("2d");
        ctx.clearRect(0, 0, self.getDomRef().width, self.getDomRef().height)
      }, 0);
    }

    return Canvas;
  }
);

jQuery.sap.declare("sap.marmolata.ui.Canvas");
}

var DatePeriodParser = (function(){
  var periodParser = {}; // the singleton object to be created, also: return value of this function
  var delimiter = "-";
  var periodDelimiter = "/";
  var numWords = {"two": 2, "three": 3, "four":4, "five":5, "six":6, "seven":7, "eight":8, "nine":9, "ten":10};
  var regexNumWord = new RegExp("^\\s*("+Object.keys(numWords).join("|")+")\\s*");
  var regexYear = /^\s*(\d{4})(?:(\D)?(\d{1,2})(?:\2(\d{1,2})(?:\s+(\d{2}:\d{2}:\d{2}))?)?)?\s*$/;
  var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
  var periodData = {};

  var rangeText = function(range) {
    return dateRangeText(range.from, range.to);
  };

  var dateText = function(date) {
    return date.toDateString();
  };

  var dateRangeText = function(d1, d2) {
    return [dateText(d1),  delimiter, dateText(d2)].join(" ");
  };

  var month_range = function(month) {
    if(!month) {
      month = 0;
    }
    return function(diff, base) {
      var date = new Date();
      date.setMonth(month);
      if(diff) {
        date.setFullYear(date.getFullYear() + diff);
      }
      if(base) {
        date.setFullYear(base);
      }
      return {
        from : new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0),
        to   : new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59, 999)
      };
    };
  };


  var first = function() {
    return 1;
  };

  var second = function() {
    return 2;
  };

  var third = function() {
    return 3;
  };

  var fourth = function() {
    return 4;
  };

  var previous = function(arg) {
    return -arg || -1;
  };

  var next = function(arg) {
    return arg || 1;
  };

  var current = function() {
    return 0;
  };


  var quarter = function(diff, base) {
    var date = new Date();
    var year = date.getFullYear();
    var start = Math.floor(date.getMonth()/3)*3;
    var end = start + 3;
    if(diff < 0) {
      end = start;
      start = start + 3 * diff;
    } else if (diff > 0) {
      // 1st 2nd etc, NOT ''next 5 quarters'
      start = (diff - 1) * 3;
      end = diff * 3;
    }
    if(base) {
      year = base;
    }

    return {
      from : new Date(year, start, 1, 0, 0, 0, 0),
      to   : new Date(year, end, 0, 23, 59, 59, 999)
    };
  };

  var month = function(diff, base) {
    var date = new Date();
    var start = date.getMonth();
    var end = start;
    var year = date.getFullYear();

    if(diff > 0) {
      start = start + 1;
      end = start + diff;
    } else if(diff < 0 ){
      start = start + diff;
    } else {
      end = end + 1;
    }
    if(base) {
      year = base;
    }
    return {
      from : new Date(year, start, 1, 0, 0, 0, 0),
      to   : new Date(year, end, 0, 23, 59, 59, 999)
    };
  };

  var year = function(diff, base) {
    var date = new Date();
    var start = date.getFullYear();
    var end = start;

    if(diff) {
      if(diff<0) {
        start = start + diff;
        end = end - 1;
      } else {
        end = end + diff;
      }
    }

    return {
      from : new Date(start, 0, 1, 0, 0, 0, 0),
      to   : new Date(end, 11, 31, 23, 59, 59, 999)
    };
  };

  var week = function(diff, base) {
    var date = new Date();
    var offset = date.getDay(); // day of week - 0 is sunday!
    var start = date.getDate() - offset + 1; // we start on monday
    var end = start + 6;

    if(diff) {
      if(diff>0) {
        start = end + 1;
        end = end + 7 * diff;
      } else {
        end = start;
        start = start + 7 * diff;
      }
    }
    // does something like 'last 5 weeks 2012' or 'last week 2012' make sense?
    // if(base) {
    //   date.setFullYear(base);
    // }
    return {
      from : new Date(date.getFullYear(), date.getMonth(), start, 0, 0, 0, 0),
      to   : new Date(date.getFullYear(), date.getMonth(), end, 23, 59, 59, 999)
    };
  };

  var argNum = function(num) {
    if( num ) {
      if (num.search(/^\d+$/) !== -1) {
        return num;
      } else {
        var m = regexNumWord.exec(num);
        if(m) {
          return numWords[m[1]];
        }
      }
      return false;
    } else {
      return [2,3,4,5];
    }
  };

  var word = function(words, func, chop, month, checkArg) {
    if(typeof checkArg !== 'function') {
      checkArg = function(arg) { return false; };
    }
    if(chop) {
      if(typeof chop !== 'function') {
        chop = function(s) { return s.slice(0, -1); };
      }
    } else {
      chop = function(s) { return s; };
    }
    return {
      words: words,
      function: func,
      chop: chop,
      month: month,
      checkArg: checkArg
    };
  };

  // "grammar" -> "localization" here
  var specials = [ word(['first', '1st'], first),
                   word(['second', '2nd'], second),
                   word(['third', '3rd'], third),
                   word(['fourth', '4th'], fourth) ];
  var prefixes = [ word(['this', 'current'], current),
                   word(['last', 'previous'], previous, false, false, argNum)];
  var nouns = [ word(['quarters'], quarter, true),
                word(['years'], year, true),
                word(['months'], month, true),
                word(['weeks'], week, true)];
  months.forEach(function(month, index){
    nouns.push(word([month], month_range(index), false, true));
  });

  // shortcut for specials array
  var quarters = [nouns[0]];

  var startsWith = function(s, w) {
    return s.slice(0, w.length) === w;
  };

  var equals = function(s, w) {
    return s === w;
  };

  // check if input equals word;
  // takes care of 's' extensions in 'quarters' etc.
  // var checkword = function(input, word, type) {
  //   return (input === word || (type.chop && input === word.slice(0, -1)));
  // };

  var forEachWord = function(types, fun) {
    return types.reduce(function(found, type) {
      return type.words.reduce(function(found, word) {
        var rc = fun(word, type);
        return (rc === undefined ? true : rc) || found;
      }, found);
    }, false);
  };

  var forEachWordCheck = function(check) {
    return function(types, input, fun) {
      return forEachWord(types, function(word, type){
        if(check(word, input)){
          return fun(word, type);
        }
        return false;
      });
    };
  };

  var forEachWordStartsWith = forEachWordCheck(startsWith);

  var forEachWordEquals =  forEachWordCheck(equals);

  //  var forEachWordStartsWith = function(types, input, fun) {
  //   return forEachWord(types, function(word, type){
  //     if(startsWith(word, input)){
  //       return fun(word, type);
  //     }
  //     return false;
  //   });
  // };

  // var forEachWordEquals = function(types, input, fun) {
  //   return forEachWord(types, function(word, type){
  //     if(input === type.chop(word)){
  //       return fun(word, type);
  //     }
  //     return false;
  //   });
  // };

  var createSuggestions = function(suggestions, from) {
    return function(words, range) {
      var text1 = words.join(" ");
      if (text1 == "1st quarter" || text1 == "first quarter")
        return;
      if (text1  == "2nd quarter" || text1 == "second quarter")
        return;
      if (text1 == "3rd quarter" || text1 == "third quarter")
        return;
      if (text1  == "4th quarter" || text1 == "fourth quarter")
        return;

      // only use from if it starts later than our suggestion
      if(from) {
        if(from.from > range.from) return;
        // equals compares objects, so we need to compare time values
        if(from.from.getTime() === range.from.getTime() && from.to.getTime() === range.to.getTime()) return;
        range.from = from.from;
        text1 = [from.text1, delimiter, text1].join(" ");
      }
      if(range.from < range.to) {
        suggestions.push({type: "daterange",
                          subtype: "natural",
                          from: range.from,
                          to: range.to,
                          text1: text1,
                          text2: rangeText(range)});
      }
    };
  };

  var suggestDates = function(inputs, companyCode, from) {
    var suggestions = [];
    if(!from || (from && from.type === "daterange")) {
      var createSuggestion = createSuggestions(suggestions, from);
      var found;

      if(inputs.length==1) {
        // special case for 1st/2nd/3rd/4th quarter
        found = forEachWordStartsWith(specials, inputs[0], function(sword, special){
          forEachWord(quarters, function(qword, quarter){
            createSuggestion([sword, quarter.chop(qword)], quarter.function(special.function()));
          });
        });

        // <prefix> [<arg>] <word>
        found = forEachWordStartsWith(prefixes, inputs[0], function(pword, prefix){
          forEachWord(nouns, function(nword, noun) {
            // <prefix> <word>
            createSuggestion([pword, noun.chop(nword)], noun.function(prefix.function()));
            // <prefix> <arg> <word> - months do not make sense here
            var args = prefix.checkArg();
            if(args && !noun.month) {
                args.forEach(function(arg){
                  createSuggestion([pword, arg, nword], noun.function(prefix.function(arg)));
                });
            }
          });
        });

        // [<prefix>] <word>
        if(!found) {
          forEachWordStartsWith(nouns, inputs[0], function(nword, noun){
            // <word>
            createSuggestion([noun.chop(nword)], noun.function());
            // <prefix> <word>
            prefixes.forEach(function(prefix) {
              var r = noun.function(prefix.function());
              prefix.words.forEach(function(pword) {
                createSuggestion([pword, noun.chop(nword)], r);
              });
            });
          });
        }

      } else if(inputs.length==2){
        //  <prefix> <arg> -> <prefix> <arg> <word>
        //  <prefix> <word> -> <prefix> (<arg>) <word>
        //  <word> <postfix> -> <word> <postfix>

        var y = (new Date()).getFullYear();
        // special case for 1st/2nd/3rd/4th quarter
        forEachWordStartsWith(specials, inputs[0], function(word, special){
          forEachWordEquals(quarters, inputs[1], function(qword, quarter){
            createSuggestion([word, quarter.chop(qword)], quarter.function(special.function()));
            for(var j=y; j>y-5; j--) {
              createSuggestion([word, qword, j], quarter.function(special.function(), j));
            }
          });
        });

        // check prefixes - only full matches
        found = forEachWordEquals(prefixes, inputs[0], function(pword, prefix){
          // <prefix> <arg> <word>
          var arg = prefix.checkArg(inputs[1]);
          if(arg) {
            forEachWord(nouns, function(nword, noun){
              if(!noun.month) {
                // use original input for suggestion; arg only for computation (case: "ten" -> 10)
                createSuggestion([pword, inputs[1], nword], noun.function(prefix.function(arg)));
              }
            });
          } else {
            // <prefix> <word> [<arg>]
            forEachWordStartsWith(nouns, inputs[1], function(nword, noun) {
              // <prefix> <word>
              createSuggestion([pword, noun.chop(nword)], noun.function(prefix.function()));
              // <prefix> <word> <arg> - months do not make sense here
              var args = prefix.checkArg();
              if( args && !noun.month) {
                args.forEach(function(arg){
                  createSuggestion([pword, arg, nword], noun.function(prefix.function(arg)));
                });
              }
            });
          }
        });

        if(!found) {
          // <word> <postfix>
          forEachWordEquals(nouns, inputs[0], function(nword, noun){
            createSuggestion([noun.chop(nword), inputs[1]], noun.function(null, inputs[1]));
          });
        }

      } else if(inputs.length===3){
        //  <prefix> <arg> <word> -> <prefix> <arg> <word> [<postfix>]
        //  makes no sense for now: <prefix> <word> <postfix> -> <prefix> <word> <postfix>

        // special case for 1st/2nd/3rd/4th quarter
        forEachWordEquals(specials, inputs[0], function(sword, special){
          forEachWordEquals(quarters, inputs[1], function(qword, quarter){
            createSuggestion([sword, quarter.chop(qword), inputs[2]],  quarter.function(special.function(), inputs[2]));
          });
        });

        forEachWordEquals(prefixes, inputs[0], function(pword, prefix) {
          var arg = prefix.checkArg(inputs[1]);
          if(arg) {
            // <prefix> <arg> <word> [<postfix>]
            forEachWordStartsWith(nouns, inputs[2], function(nword, noun) {
              if(!noun.month) {
                createSuggestion([pword, inputs[1], noun.chop(nword)], noun.function(prefix.function(arg)));
              }
            });
          }
          //  else {
          //   // <prefix> <word> <postfix>
          //   forEachWordEquals(nouns, inputs[1], function(nword, noun) {
          //     createSuggestion([pword, nword, inputs[2]],   noun.function(prefix.function(), inputs[2]));
          //   });
          // }
        });
      }
    }

    return suggestions;
  };

  var suggestYears = function(inputs, companyCode, from) {
    var suggestions = [];
    if(!from || (from && from.type === "daterange")) {
      // Js parses 1-12 as month, 13-99 is invalid date, 100 - x>100 as year
      if(inputs.length<=1){
        var s = inputs[0]; // we can suggest years for empty string such as current year
        var length = s.length;
        var today = new Date();
        var displaycount = 3;
        // check if number is prefix of current year an if, suggest it
        var curyear = today.getFullYear()+"";
        // only check for years if we start with a digit or empty string
        if(!s || s.search(/^\d+/) !== -1) {
          if(length<4) {
            if(s === "" || curyear.lastIndexOf(s)===0){
              //s is a prefix of current year
              var nfrom;
              var to;
              var text1;
              // last digit(s) missing, suggest current + last 2 years
              if(from && from.from) {
                // also display from year as range
                for(var i=0; i<displaycount+1; i++){
                  nfrom = from.from;
                  to = new Date(nfrom.getFullYear()+i, 12, 0, 23, 59, 59, 999);
                  if(i===0) {
                    text1 = nfrom.getFullYear();
                  } else {
                    text1 = nfrom.getFullYear() + " - " + to.getFullYear();
                  }
                  suggestions.push({type : "daterange", from : nfrom, to : to, text1: text1, text2 :  dateRangeText(nfrom, to)});
                }
              } else {
                // suggest single years
                for(var i=0; i<displaycount; i++){
                  nfrom = new Date(today.getFullYear()-i, 0, 1, 0, 0, 0);
                  to = new Date(today.getFullYear()-i, 12, 0, 23, 59, 59, 999);
                  text1 = nfrom.getFullYear();
                  suggestions.push({type : "daterange", from : nfrom, to : to, text1: text1, text2 :  dateRangeText(nfrom, to)});
                }
                // suggest ranges - separated for proper order
                for(var i=0; i<displaycount; i++){
                  if(!from){
                    nfrom = new Date(today.getFullYear()-(i+1), 0, 1, 0, 0, 0);
                    to = new Date(today.getFullYear(), 12, 0, 23, 59, 59, 999);
                    text1 = nfrom.getFullYear() + " - " + to.getFullYear();
                    suggestions.push({type : "daterange", from : nfrom, to : to, text1: text1, text2 :  dateRangeText(nfrom, to)});
                  }
                }
              }
            }
          } else {
            var d = periodParser.parseDate(s);
            if (d && !isNaN(d.getTime())) {
              var nfrom;
              var to;
              var text1;
              nfrom = new Date(d);
              // year, return it
              var year = nfrom.getFullYear();
              to = new Date(nfrom);
              to.setMonth(12);
              to.setSeconds(-1);
              text1 = year;
              if(!from){
                suggestions.push({type : "daterange", from : nfrom, to : to, text1: text1, text2 :  dateRangeText(nfrom, to)});
                if(length<3) {
                  // month, suggest current and last 2 years
                  year = today.getFullYear();
                  for(var i=0; i<displaycount; i++){
                    nfrom.setFullYear(year-i);
                    to = new Date(nfrom);
                    to.setMonth(nfrom.getMonth()+1);
                    to.setSeconds(-1);
                    text1 = (nfrom.getMonth()+1)+"/"+nfrom.getFullYear();
                    suggestions.push({type : "daterange", from : nfrom, to : to, text1: text1, text2 :  dateRangeText(nfrom, to)});
                  }
                } else {
                  // add ranges for next years as well
                  for(var i=0; i<displaycount; i++){
                    to = new Date(nfrom);
                    to.setFullYear(year+i+1);
                    to.setMonth(12);
                    to.setSeconds(-1);
                    text1 = year + " - " + to.getFullYear();
                    suggestions.push({type : "daterange", from : nfrom, to : to, text1: text1, text2 :  dateRangeText(nfrom, to)});
                  }
                }
              } else if( from.from && length >=4 ) {
                nfrom = from.from;
                to = new Date(d);
                to.setMonth(12);
                to.setSeconds(-1);
                text1 = nfrom.getFullYear() + " - " + to.getFullYear();
                suggestions.push({type : "daterange", from : nfrom, to : to, text1: text1, text2 :  dateRangeText(nfrom, to)});
              }
            }
          }
        }
      }
    }
    return suggestions;
  };

  var suggestQuarters = function(words, CompanyCode, from) {
    var suggestions = [];
    if (from && (from.type !== "period") && (from.type !== "quarter"))
      return suggestions;

    var quarters = [
      ["1st", "first", "Q1", "q1"],
      ["2nd", "second", "Q2", "q2"],
      ["3rd", "third", "Q3", "q3"],
      ["4th", "fourth", "Q4", "q4"]
    ];

    //var periods_for_company_code = period_data.filter(function(period) {return (CompanyCode === period.CompanyCode);});
    var periods_for_company_code = periodData[CompanyCode] || {};

    var fiscalYears = Object.keys(periods_for_company_code).map(
      function(fiscalYear){
        var min = Math.min.apply(null, Object.keys(periods_for_company_code[fiscalYear]));
        var max = Math.max.apply(null, Object.keys(periods_for_company_code[fiscalYear]));
        return {fiscalYear : fiscalYear, from : min, to : max};
      });


    if (from)
      fiscalYears = fiscalYears.reverse();

    fiscalYears.forEach(function(fiscalYear) {
      quarters.forEach(function(quarter, i) {
        var j = 0;
        var chkwrd = function(word) {
          if (word === "")
            return true;
          if (!isNaN(word)) {
            // case: word represents a number
            // word = parseInt(word, 10).toString();
            if (word.length <= 4 && fiscalYear.fiscalYear.slice(0, word.length) === word)
              return true;
            else if (word.length === 2 && fiscalYear.fiscalYear.slice(2, 2 + word.length) === word)
              return true;
            else if (word.length === 1 && fiscalYear.fiscalYear.slice(3, 3 + word.length) === word)
              return true;
          } else {
            if ("quarter".slice(0, word.length) === word)
              return true;
            for (var i in quarter) {
              if (quarter[i].slice(0, word.length) === word) {
                j = i;
                return true;
              }
            }
          }
          return false;
        };

        if (words.every(chkwrd)) {
          var period = periodData[CompanyCode][fiscalYear.fiscalYear];
          if(period && period[fiscalYear.from] && period[fiscalYear.to]) {
            //FIXME: compute actual quarters
            var step = Math.floor((fiscalYear.to-fiscalYear.from)/4);
//            for(var i = fiscalYear.from; i<=fiscalYear.to; i+=step) {
              // var lfrom = period[i][0];
              // var lto = period[i+step-1][1];
            var lfrom = period[fiscalYear.from][0];
            var lto = period[fiscalYear.to][1];
              var text1 = "";
              if (!from) {
                text1 =  quarter[j] + " " + ((j >= 2) ? " " : " quarter ") + fiscalYear.fiscalYear;
              } else if (from.from < from) {
                lfrom = from.from;
                text1 = from.text1 + " - " + quarter[j] + " " + ((j >= 2) ? " " : " quarter ") + fiscalYear.fiscalYear;
              }
              //only add a suggestion if we have one -
              if(text1) {
                suggestions.push({
                  type  : "period",
                  subtype  : "quarter",
                  from  : lfrom,
                  to    : lto,
                  text1 : text1,
                  text2 : "Fiscal Period: " + dateRangeText(lfrom, lto)
                });
              }
            //}
          }
        }
      });
    });

    //FIXME: check for "last quarter"?
    //TODO: fix 'dis sh1t
    // if (words.every(function(word) {return "last".slice(0, word.length) === word || "quarter".slice(0, word.length) === word;}))
    //   suggestions.push({
    //     type  : "period",
    //     subtype : "quarter",
    //     from  : {FiscalYear : "2010", FiscalPeriod : "1"},
    //     to    : {FiscalYear : "2010", FiscalPeriod : "3"},
    //     text1 : "last quarter",
    //     text2 : "Fiscal Period"
    //   });

    return suggestions;
  };

  var suggestPeriods = function(words, CompanyCode, from) {
    var suggestions = [];
    if (from && (from.type !== "period"))
      return suggestions;

    var chkperiod = function (fiscalYear, fiscalPeriod) {
      var chkwrd = function(word) {
        if (word === "")
          return true;
        if (!isNaN(word)) {
          // case: word represents a number
          // word = parseInt(word, 10).toString();
          if (word.length <= 4 && fiscalYear.slice(0, word.length) === word)
            return true;
          else if (word.length <= 2 && fiscalYear.slice(2, 2 + word.length) === word)
            return true;
          else if (word.length <= 3 && fiscalPeriod.slice(0, word.length) === word)
            return true;
        } else {
          // case: word does not represent a number
          if ("period".slice(0, word.length) === word)
            return true;
          var words_of_word = word.split(periodDelimiter);
          if (words_of_word.length === 2 && words_of_word[0].length <= 3 && words_of_word[1].length <= 4) {
            var iperiod = words_of_word[0];
            iperiod = iperiod === "" ? "" : parseInt(iperiod, 10).toString();
            var iyear = words_of_word[1];
            iyear = iyear === "" ? "" : parseInt(iyear, 10).toString();
            if ((iperiod === "" || iperiod === fiscalPeriod) && (iyear === "" || fiscalYear.slice(0, iyear.length) === iyear || fiscalYear.slice(2, 2 + iyear.length) === iyear))
              return true;
          }
        }
        return false;
      };
      return words.every(chkwrd);
    };

    Object.keys(periodData[CompanyCode]).forEach(function(fiscalYear) {
      Object.keys(periodData[CompanyCode][fiscalYear]).forEach(function(fiscalPeriod) {
        if(chkperiod(fiscalYear, fiscalPeriod)) {
          var range = periodData[CompanyCode][fiscalYear][fiscalPeriod];
          var text1 = "";
          if(from) {
            if(from.from < range[1]) {
              text1 = [from.text1, " ", delimiter, " ", fiscalPeriod, periodDelimiter, fiscalYear].join("");
              range[0] = from.from;
            }
          } else {
            text1 = [fiscalPeriod, periodDelimiter, fiscalYear].join("");
          }
          // only add suggestion if it really is one
          if(text1) {
            suggestions.push({type: "period", from: range[0], to: range[1], text1: text1, text2: "Fiscal Period: " + dateRangeText(range[0], range[1])});
          }
        }
      });
    });


    return suggestions;
  };

  var sortSuggestions = function(date) {
    if(!date) {
      date = new Date();
    }
    return function(x, y) {
      // sort based on from distance to 'now' by year
      var a = Math.abs(x.from.getFullYear()-date.getFullYear());
      var b = Math.abs(y.from.getFullYear()-date.getFullYear());
      // same distance: order based on total from distance
      if(a===b) {
        a = Math.abs(x.from.getTime()-date.getTime());
        b = Math.abs(y.from.getTime()-date.getTime());
        // same distance: oder base on time of distance
        if(a===b) {
          a = x.to.getTime() - x.from.getTime();
          b = y.to.getTime() - y.from.getTime();
          // last resort: pick smaller from date
          if(a===b) {
            a = x.from.getFullYear();
            b = y.from.getFullYear();
          }
        }
      }
      return (a>b)-(a<b);
    };
  };
  var dateSorter = sortSuggestions();

  var fromToSuggestor = function(suggestor) {
    var retVal = function(input, CompanyCode) {
      return suggestor(input.fromStrs, CompanyCode).map(function(from){
        return !input.toStrs ? from : suggestor(input.toStrs, CompanyCode, from);
      }).reduce(function(a,b){
        return a.concat(b);
      }, []);
    };
    return retVal;
  };

  var cmp_a = function(a, b) {
    if(a === b) return true;
    return a.every(function (e, i) {
      return e === b[i];
    });
  };
  
  var prepareInputString = function(input) {
    var rc = {
      fromStrs: [""],
      toStrs: undefined,
      compare: function(other) {
        return cmp_a(other.fromStrs, this.fromStrs) && cmp_a(other.toStrs, this.toStrs);
      }
    };
    if(input) {
      var strs = input.toLowerCase().split(delimiter);
      // alway at least an empty string
      rc.fromStrs = strs[0].trim().split(/\s+/);
      if(strs[1]) {
        rc.toStrs = strs[1].trim().split(/\s+/);
      }
    }
    return rc;
  };

  var getUniqify = function(obj) {
    var uniq = obj || {};
    return function(suggestion) {
      if(!uniq[suggestion.text2]) {
        uniq[suggestion.text2] = true;
        return true;
      }
      return false;
    };
  };

  var flatten = function(suggestions) {
    return suggestions.reduce(function(suggestions, suggestion){
        return suggestions.concat(suggestion);
    }, []);
  };

  periodParser.suggest = function(s, limit, uniq) {

    // input string preparation
    var strs = prepareInputString(s);
    // get suggestions
    var suggestions = [];
    suggestions.push(fromToSuggestor(suggestDates)(strs));
    suggestions.push(fromToSuggestor(suggestYears)(strs));
    var periods = [];
    var quarters = [];
    suggestions.push(periods);
    suggestions.push(quarters);
    Object.keys(periodData).forEach(function(companyCode) {
      Array.prototype.push.apply(periods, fromToSuggestor(suggestPeriods)(strs, companyCode));
      Array.prototype.push.apply(quarters, fromToSuggestor(suggestQuarters)(strs, companyCode));
    });

    // uniq elements globally - undefined equals true
    if(uniq || uniq === undefined){
      // get uniq function
      var uniqify = getUniqify();
      suggestions = suggestions.map(function(suggestion){ return suggestion.filter(uniqify);});
    }
    // sort elements per group
    suggestions = suggestions.map(function(suggestion){
      return suggestion.sort(dateSorter);
    });
    // get lengths of groups
    var slength = suggestions.map(function(suggestion){
      return suggestion.length;
    });

    // get total number of (uniq) suggestions
    var total = slength.reduce(function(a, b) { return a + b; });

    if(total<=limit) {
      return flatten(suggestions);
    } else {
      // suggestions per group
      var cnt = Math.floor(limit/suggestions.length);
      // real suggestions per group
      slength = suggestions.map(function(suggestion){
        return Math.min(suggestion.length, cnt);
      });
      // increase count per group until we hit limit
      // -> we can overshoot limit by n-1 for n groups....
      while(slength.reduce(function(a, b) { return a + b; }) < limit){
        cnt++;
        slength = suggestions.map(function(suggestion){
          return Math.min(suggestion.length, cnt);
        });
      }
      return flatten(suggestions.map(function(suggestion, index){
        return suggestion.slice(0, slength[index]);
      }));
    }
  };

  periodParser.parse = function(s) {
    var strs = prepareInputString(s);
    var type = "invalid";
    var text1 = "";
    var text2 = "";

    // check *all* suggestions for exact text match
    var suggestions = [].concat(fromToSuggestor(suggestDates)(strs));
    Object.keys(periodData).forEach(function(companyCode) {
      suggestions = suggestions.concat(fromToSuggestor(suggestQuarters)(strs, companyCode));
      suggestions = suggestions.concat(fromToSuggestor(suggestPeriods)(strs, companyCode));
    });

    if(suggestions.length){
      var found = suggestions.find(function(suggestion, index, array) {
        return strs.compare(prepareInputString(suggestion.text1));
      });
      if(found) return found;
    }

    // fallback: check if we have parseable dates
    var from = this.parseDate(strs.fromStrs.join(" ")); // regexes work with arrays as well
    var to = this.parseDate(strs.toStrs ? strs.toStrs.join(" ") : strs.fromStrs.join(" "), true);
    if(from.getTime() && to.getTime()) {
      type = "daterange";
      text1 = strs.toStrs ? [strs.fromStrs.join(" "), delimiter, strs.toStrs.join(" ")].join(" ") : strs.fromStrs.join(" ");
      text2 = dateRangeText(from, to);
    }
    return {type : type, from : from, to : to, text1 : text1, text2 : text2};
  };

  periodParser.setPeriodData = function(data) {
    if (typeof data !== 'object') {
      throw new TypeError("PeriodData is not of type: object[year][period] = [ from<Date>, to<Date> ]");
    }
    periodData = data;
  };

  periodParser.setDateSorter = function(sorter) {
    if (typeof sorter !== 'function') {
      throw new TypeError("DateSorter is not of type: function(a, b)");
    }
    dateSorter = sorter;
  };

  periodParser.parseDate = function(str, extendRange) {
    // append UTC if we have more than just the year but less than hours because no timezone adjustments are made in this case
    var date;
    var fixDate = false;
    var m = regexYear.exec(str);
    // some prepocessing
    if(m) {
      switch (m[2]) {
      case "-":
        // dashes somehow alter the base value of the date object
        str = str + " UTC";
        fixDate = true;
        break;
      case undefined:
        // only digits -> convert so Date() understands
        //FIXME: "0001" as year is parsed as 2001 -> artifact of Date() parser not really sure how to handle and/or why at all
        str = [m[1], m[3], m[4]].map(function(s){ return s ? s : "01";}).join("/") + (m[5] ? " "+m[5]: " 00:00:00");
        break;
      }
    }
    date = new Date(str);
    // adjust for timezone in case of dashes or only year
    if(fixDate) {
      date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    }
    if(extendRange){
      // going from highest to least precise date component
      // extend every zero to its max value until we find a non-zero component
      var bs = (!date.getMilliseconds()) << (!date.getSeconds()) << (!date.getMinutes()) << (!date.getHours());
      if(m) {
        bs = bs << (!m[4]) << (!m[3]);
      }
      switch(bs) {
      case 32:
        date.setMonth(12);
        date.setMilliseconds(-1);
        break;
      case 16:
        date.setMonth(date.getMonth()+1);
        date.setMilliseconds(-1);
        break;
      case 8:
        date.setHours(23);
      case 4:
        date.setMinutes(59);
      case 2:
        date.setSeconds(59);
      case 1:
        date.setMilliseconds(999);
      default:
        break;
      }
    }
    return date;
  };

  return periodParser;
})();

/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

if (typeof jQuery !== 'undefined') {
    jQuery.sap.declare("sap.marmolata.DatePeriodPicker", true);

    sap.ui.define(["sap/m/ComboBox"],
        function(ComboBox) {
        "use strict";

        var DatePeriodPickerModel = ComboBox.extend("sap.marmolata.DatePeriodPicker", {

            metadata : {
                properties: {
                         "showSuggestion": {type: "boolean", group: "Behavior", defaultValue: true},
                         "filterSuggests": {type: "boolean", group: "Behavior", defaultValue: false},
                         "placeholder": {type: "string", group: "Misc", defaultValue: "Enter Date or Period"},
                         "periodURL": {type: "string", group: "period"},
                         "sapclient": {type: "string", group: "Misc", defaultValue: "001"},
                         "inputFn": {type: "function", group: "Behavior"}
                     }
            },

            renderer:{},

            events: {
                inputChange: {
                    parameters : {
                        value: {type: "string"}
                    }
                }
            },

            constructor: function(datePeriodPickerProps){
                ComboBox.apply(this, arguments);
                var that = this;
            }
        });

        DatePeriodPickerModel.prototype.fireInputChange = function(evt) {
            this.fireEvent("inputChange", evt);
            return this;
        };


        DatePeriodPickerModel.prototype.oninput = function(event) {
            this.fireInputChange({value: event.target.value});
            ComboBox.prototype.oninput.call(this, event);
            return this;
        };

        DatePeriodPickerModel.prototype.attachInputChange = function(fnFunction, oListener) {
            this.attachEvent("inputChange", fnFunction, oListener);
            return this;
        };

        DatePeriodPickerModel.prototype.detachInputChange = function(fnFunction, oListener) {
            this.detachEvent("inputChange", fnFunction, oListener);
            return this;
        };

        sap.marmolata.DatePeriodPicker = DatePeriodPickerModel;

        return DatePeriodPickerModel;

    });
} else {
    console.log("Cannot declare sap.marmolata.DatePeriodPicker because of lacking jQuery");
}

/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
if (typeof jQuery !== "undefined") {
sap.ui.define(['jquery.sap.global', 'sap/ui/model/Model', 'sap/ui/model/odata/ODataUtils', 'sap/ui/model/odata/CountMode', 'sap/ui/model/odata/ODataContextBinding', 'sap/marmolata/AdapterListBinding', 'sap/marmolata/AdapterMetadata', 'sap/ui/model/odata/ODataPropertyBinding', 'sap/ui/model/odata/ODataTreeBinding', 'sap/ui/model/odata/ODataMetaModel', 'sap/ui/thirdparty/URI'],
	function(jQuery, Model, ODataUtils, CountMode, ODataContextBinding, ODataListBinding, ODataMetadata, ODataPropertyBinding, ODataTreeBinding, ODataMetaModel, URI) {
	"use strict";

	var AdapterModel = Model.extend("sap.marmolata.AdapterModel", {

		constructor : function(adapterModelProps) {
			Model.apply(this, arguments);

			var that = this;
			
			this.consoleLog = function(a) {
			    //console.log(arguments);
			}

			this.sDefaultBindingMode = sap.ui.model.BindingMode.OneWay;
			this.mSupportedBindingModes = {"OneWay": true, "OneTime": true, "TwoWay":true};
			this.bCountSupported = true;

			if (!_.isUndefined(adapterModelProps)) {
                this.iNumRows = adapterModelProps.iNumRows;
              	this.fRowCallback = adapterModelProps.fRowCallback;
              	this.fSortCallback = adapterModelProps.fSortCallback;
              	this.fFilterCallback = adapterModelProps.fFilterCallback;
            }

            if (_.isUndefined(this.fSortCallback)) this.fSortCallback = function(){}
            if (_.isUndefined(this.fFilterCallback)) this.fFilterCallback = function(){}

            var sMetadataUrl = "";
			this.oMetadata = new sap.marmolata.AdapterMetadata(sMetadataUrl, {
                             					async: false, //this.bLoadMetadataAsync,
                             					user: null, //this.sUser,
                             					password: null, //this.sPassword,
                             					headers: null, //this.mCustomHeaders,
                             					namespaces: null, //mMetadataNamespaces,
                             					withCredentials: false //this.bWithCredentials
                             				});

			this.initialize();

			this.consoleLog("AdapterModel initialized");


		},
		metadata : {

			publicMethods : ["create", "remove", "update", "submitChanges", "getServiceMetadata", "read", "hasPendingChanges", "refresh", "refreshMetadata", "resetChanges",
							 "isCountSupported", "setCountSupported", "setDefaultCountMode", "getDefaultCountMode", "forceNoCache", "setProperty",
							 "getSecurityToken", "refreshSecurityToken", "setHeaders", "getHeaders", "setUseBatch"]
		}
	});

	//
	AdapterModel.M_EVENTS = {
			RejectChange: "rejectChange",
			/**
			 * Event is fired if the metadata document was successfully loaded
			 */
			MetadataLoaded: "metadataLoaded",

			/**
			 * Event is fired if the metadata document has failed to load
			 */
			MetadataFailed: "metadataFailed",

			/**
			 * Event is fired if the annotations document was successfully loaded
			 */
			AnnotationsLoaded: "annotationsLoaded",

			/**
			 * Event is fired if the annotations document has failed to load
			 */
			AnnotationsFailed: "annotationsFailed"

	};


	AdapterModel.prototype.fireRejectChange = function(mArguments) {
		this.fireEvent("rejectChange", mArguments);
		return this;
	};

	AdapterModel.prototype.attachRejectChange = function(oData, fnFunction, oListener) {
		this.attachEvent("rejectChange", oData, fnFunction, oListener);
		return this;
	};

	AdapterModel.prototype.detachRejectChange = function(fnFunction, oListener) {
		this.detachEvent("rejectChange", fnFunction, oListener);
		return this;
	};

	AdapterModel.prototype.fireAnnotationsLoaded = function(mArguments) {
		this.fireEvent("annotationsLoaded", mArguments);
		return this;
	};

	AdapterModel.prototype.attachAnnotationsLoaded = function(oData, fnFunction, oListener) {
		this.attachEvent("annotationsLoaded", oData, fnFunction, oListener);
		return this;
	};

	AdapterModel.prototype.detachAnnotationsLoaded = function(fnFunction, oListener) {
		this.detachEvent("annotationsLoaded", fnFunction, oListener);
		return this;
	};

	AdapterModel.prototype.fireAnnotationsFailed = function(mArguments) {
		this.fireEvent("annotationsFailed", mArguments);
		jQuery.sap.log.debug("ODataModel fired annotationsfailed");
		return this;
	};

	AdapterModel.prototype.attachAnnotationsFailed = function(oData, fnFunction, oListener) {
		this.attachEvent("annotationsFailed", oData, fnFunction, oListener);
		return this;
	};

	AdapterModel.prototype.detachAnnotationsFailed = function(fnFunction, oListener) {
		this.detachEvent("annotationsFailed", fnFunction, oListener);
		return this;
	};

	AdapterModel.prototype.fireMetadataLoaded = function(mArguments) {
		this.fireEvent("metadataLoaded", mArguments);
		return this;
	};

	AdapterModel.prototype.attachMetadataLoaded = function(oData, fnFunction, oListener) {
		this.attachEvent("metadataLoaded", oData, fnFunction, oListener);
		return this;
	};

	AdapterModel.prototype.detachMetadataLoaded = function(fnFunction, oListener) {
		this.detachEvent("metadataLoaded", fnFunction, oListener);
		return this;
	};

	AdapterModel.prototype.fireMetadataFailed = function(mArguments) {
		this.fireEvent("metadataFailed", mArguments);
		return this;
	};

	AdapterModel.prototype.attachMetadataFailed = function(oData, fnFunction, oListener) {
		this.attachEvent("metadataFailed", oData, fnFunction, oListener);
		return this;
	};

	AdapterModel.prototype.detachMetadataFailed = function(fnFunction, oListener) {
		this.detachEvent("metadataFailed", fnFunction, oListener);
		return this;
	};

	AdapterModel.prototype.refreshMetadata = function(){
		if (this.oMetadata && this.oMetadata.refresh){
			this.oMetadata.refresh();
		}
	};

	AdapterModel.prototype._loadData = function(sPath, aParams, fnSuccess, fnError, bCache, fnHandleUpdate, fnCompleted){

        this.consoleLog("_loadData");
	};

	AdapterModel.prototype.setNumRows = function(iNumRows){
	    this.consoleLog("setNumRows", iNumRows);
        this.iNumRows = iNumRows;
	};

	AdapterModel.prototype.setSortCallback = function(fSortCallback){
    	    this.consoleLog("setting sort callback");
            this.fSortCallback = fSortCallback;
    	};

	AdapterModel.prototype.removeData = function(){
		this.oData = {};
	};

	AdapterModel.prototype.initialize = function() {
	    this.consoleLog("initialize", this.aBindings);
		// Call initialize on all bindings in case metadata was not available when they were created
		var aBindings = this.aBindings.slice(0);
		jQuery.each(aBindings, function(iIndex, oBinding) {
			oBinding.initialize();
		});
	};

	AdapterModel.prototype.refresh = function(bForceUpdate, bRemoveData) {
	    this.consoleLog("refresh");
		// Call refresh on all bindings instead of checkUpdate to properly reset cached data in bindings
		if (bRemoveData) {
			this.removeData();
		}
		this._refresh(bForceUpdate);
	};

	AdapterModel.prototype._refresh = function(bForceUpdate, mChangedEntities, mEntityTypes) {
		// Call refresh on all bindings instead of checkUpdate to properly reset cached data in bindings
		var aBindings = this.aBindings.slice(0);
		jQuery.each(aBindings, function(iIndex, oBinding) {
			oBinding.refresh(bForceUpdate, mChangedEntities, mEntityTypes);
		});
	};


	AdapterModel.prototype.checkUpdate = function(bForceUpdate, bAsync, mChangedEntities, bMetaModelOnly) {
	    this.consoleLog("checkUpdate");
		if (bAsync) {
			if (!this.sUpdateTimer) {
				this.sUpdateTimer = jQuery.sap.delayedCall(0, this, function() {
					this.checkUpdate(bForceUpdate, false, mChangedEntities);
				});
			}
			return;
		}
		if (this.sUpdateTimer) {
			jQuery.sap.clearDelayedCall(this.sUpdateTimer);
			this.sUpdateTimer = null;
		}
		var aBindings = this.aBindings.slice(0);
		jQuery.each(aBindings, function(iIndex, oBinding) {
			if (!bMetaModelOnly || this.isMetaModelPath(oBinding.getPath())) {
				oBinding.checkUpdate(bForceUpdate, mChangedEntities);
			}
		}.bind(this));
	};

	AdapterModel.prototype.bindProperty = function(sPath, oContext, mParameters) {
	    this.consoleLog("bindProperty", sPath, oContext, mParameters);
		var oBinding = new ODataPropertyBinding(this, sPath, oContext, mParameters);
		return oBinding;
	};

	AdapterModel.prototype.bindList = function(sPath, oContext, aSorters, aFilters, mParameters) {
	    this.consoleLog("bindList", sPath, oContext, aSorters, aFilters, mParameters);
		var oBinding = new ODataListBinding(this, sPath, oContext, aSorters, aFilters, mParameters);
		return oBinding;
	};

	AdapterModel.prototype.bindTree = function(sPath, oContext, aFilters, mParameters) {
	    this.consoleLog("bindTree");
		var oBinding = new ODataTreeBinding(this, sPath, oContext, aFilters, mParameters);
		return oBinding;
	};

	AdapterModel.prototype.createBindingContext = function(sPath, oContext, mParameters, fnCallBack, bReload) {
	    this.consoleLog("createBindingContext");
	    return;
		var bReload = !!bReload,
			sFullPath = this.resolve(sPath, oContext);
		// optional parameter handling
		if (typeof oContext == "function") {
			fnCallBack = oContext;
			oContext = null;
		}
		if (typeof mParameters == "function") {
			fnCallBack = mParameters;
			mParameters = null;
		}

		// if path cannot be resolved, call the callback function and return null
		if (!sFullPath) {
			if (fnCallBack) {
				fnCallBack(null);
			}
			return null;
		}

		// try to resolve path, send a request to the server if data is not available yet
		// if we have set forceUpdate in mParameters we send the request even if the data is available
		var oData = this._getObject(sPath, oContext),
			sKey,
			oNewContext,
			that = this;

		if (!bReload) {
			bReload = this._isReloadNeeded(sFullPath, oData, mParameters);
		}

		if (!bReload) {
			sKey = this._getKey(oData);
			oNewContext = this.getContext('/' + sKey);
			if (fnCallBack) {
				fnCallBack(oNewContext);
			}
			return oNewContext;
		}

		if (fnCallBack) {
			var bIsRelative = !jQuery.sap.startsWith(sPath, "/");
			if (sFullPath) {
				var aParams = [],
					sCustomParams = this.createCustomParams(mParameters);
				if (sCustomParams) {
					aParams.push(sCustomParams);
				}
				this._loadData(sFullPath, aParams, function(oData) {
					sKey = oData ? that._getKey(oData) : undefined;
					if (sKey && oContext && bIsRelative) {
						var sContextPath = oContext.getPath();
						// remove starting slash
						sContextPath = sContextPath.substr(1);
						// when model is refreshed, parent entity might not be available yet
						if (that.oData[sContextPath]) {
							that.oData[sContextPath][sPath] = {__ref: sKey};
						}
					}
					oNewContext = that.getContext('/' + sKey);
					fnCallBack(oNewContext);
				}, function() {
					fnCallBack(null); // error - notify to recreate contexts
				});
			} else {
				fnCallBack(null); // error - notify to recreate contexts
			}
		}
	};

	AdapterModel.prototype._isReloadNeeded = function(sFullPath, oData, mParameters) {
        this.consoleLog("isReloadNeeded");
		return false;
	};

	AdapterModel.prototype.destroyBindingContext = function(oContext) {
	};

	AdapterModel.prototype.createCustomParams = function(mParameters) {
	    this.consoleLog("createCustomParams");
	};

	AdapterModel.prototype.bindContext = function(sPath, oContext, mParameters) {
		var oBinding = new ODataContextBinding(this, sPath, oContext, mParameters);
		return oBinding;
	};

	AdapterModel.prototype.setCountSupported = function(bCountSupported) {
		this.bCountSupported = bCountSupported;
	};

	AdapterModel.prototype.isCountSupported = function() {
		return this.bCountSupported;
	};

	AdapterModel.prototype.setDefaultCountMode = function(sCountMode) {
		this.sDefaultCountMode = sCountMode;
	};

	AdapterModel.prototype.getDefaultCountMode = function() {
		return this.sDefaultCountMode;
	};


	AdapterModel.prototype._getKey = function(oObject, bDecode) {
		var sKey, sURI;
		if (oObject instanceof sap.ui.model.Context) {
			sKey = oObject.getPath().substr(1);
		} else if (oObject && oObject.__metadata && oObject.__metadata.uri) {
			sURI = oObject.__metadata.uri;
			sKey = sURI.substr(sURI.lastIndexOf("/") + 1);
		}
		if (bDecode) {
			sKey = decodeURIComponent(sKey);
		}
		return sKey;
	};

	AdapterModel.prototype.getKey = function(oObject, bDecode) {
	    this.consoleLog("getKey", oObject, bDecode);
		return this._getKey(oObject, bDecode);
	};

	AdapterModel.prototype.createKey = function(sCollection, oKeyProperties, bDecode) {
	    this.consoleLog("createKey");
	};

	AdapterModel.prototype.getProperty = function(sPath, oContext, bIncludeExpandEntries) {
	    //console.log("getProperty");
	    return this._getObject(sPath, oContext);
	};

	AdapterModel.prototype._getObject = function(sPath, oContext) {
	    //console.log('Getting object', sPath, oContext)
	    //this.consoleLog("_getObject", sPath, oContext);
	    //var values = _.range(10000).map(function(i) { return _.range(4).map(function(j) { return "R"+i+"C"+j; } ); } );
        //this.consoleLog("values", values);
        // var dataLength = values.length

	    if(sPath=='/') {
	        //console.log("SLASH!!!" + this.iNumRows);
	        var dataLength = this.iNumRows;

        var f = function(target, name) {
            if (name == "length" || name == "size")
               return dataLength

            if (Number.isInteger(name) && name < dataLength) {
              return [name]
            }
            else {
              if (name in target) return target[name]
            }
        }

        return new Proxy([], { get: f })
    		//return _.range(dataLength).map(function(i) { return [i] } );
		}
		else {
		    if(_.isUndefined(oContext) || _.isNull(oContext)) {
		        return null;
		    }
		    var rowIndex = _.parseInt(_(oContext.sPath).trimLeft('/'))
		    if(_.isFinite(rowIndex) && rowIndex < this.iNumRows) {
                return rowIndex;
		    } else {
		        //console.log("rowIndex is NaN ?");
		        return null;
		    }
    		//return values[rowIndex][colIndex];
		}
	};

	AdapterModel.prototype.updateSecurityToken = function() {
	    this.consoleLog("updateSecurityToken");
	};

	AdapterModel.prototype.resetSecurityToken = function() {
	    this.consoleLog("resetSecurityToken");
	};

	AdapterModel.prototype.getSecurityToken = function() {
	    this.consoleLog("getSecurityToken");
	};

	AdapterModel.prototype.refreshSecurityToken = function(fnSuccess, fnError, bAsync) {
	    this.consoleLog("refreshSecurityToken");
	};

	AdapterModel.prototype._submitRequest = function(oRequest, bBatch, fnSuccess, fnError, bHandleBatchErrors, bImportData){
        this.consoleLog("submitRequest");
	};

	AdapterModel.prototype._createBatchRequest = function(aBatchRequests, bAsync) {
	    this.consoleLog("createBatchRequest");
	};

	AdapterModel.prototype._handleETag = function(oRequest, oResponse, bBatch) {
        this.consoleLog("handleETag");
	};

	AdapterModel.prototype._handleBatchErrors = function(oResponse, oData) {
        this.consoleLog("handleBatchErrors");

	};

	AdapterModel.prototype._getBatchErrors = function(oData) {
        this.consoleLog("getBatchErrors");
	};

	AdapterModel.prototype._handleError = function(oError) {
	    this.consoleLog("handleError");

		var mParameters = {};
		var sErrorMsg = "The following problem occurred: " + oError.message;

		mParameters.message = oError.message;
		jQuery.sap.log.fatal(sErrorMsg);

		return mParameters;
	};

	AdapterModel.prototype.getData = function(sPath, oContext, bIncludeExpandEntries) {
		return this.getProperty(sPath, oContext, bIncludeExpandEntries);
	};

	AdapterModel.prototype._getETag = function(sPath, oPayload, sETag) {
    	this.consoleLog("getEtag");
	};

	AdapterModel.prototype._createRequest = function(sUrl, sMethod, bAsync, oPayload, sETag) {
	    this.consoleLog("createRequest");
	};

	AdapterModel.prototype._isRefreshNeeded = function(oRequest, oResponse) {
	    this.consoleLog("isRefreshNeeded");
	};

	AdapterModel.prototype.update = function(sPath, oData, mParameters) {
		var fnSuccess, fnError, bMerge, oRequest, sUrl, oContext, sETag, oRequestHandle,
			oBatchRequest, oStoredEntry, sKey,
			mUrlParams,
			bAsync = false;

	//ensure compatibility, check for old or new declaration of parameters
		if (mParameters instanceof sap.ui.model.Context || arguments.length > 3) {
			oContext  = mParameters;
			fnSuccess = arguments[3];
			fnError = arguments[4];
			bMerge = arguments[5];
		} else {
			//we are using the new parameters
			// For API compatibility, we also allow the "old" hungarian syntax
			oContext  = mParameters.context || mParameters.oContext;
			fnSuccess = mParameters.success || mParameters.fnSuccess;
			fnError   = mParameters.error   || mParameters.fnError;
			sETag     = mParameters.eTag    || mParameters.sETag;
			bMerge    = typeof (mParameters.merge) == "undefined"
				? mParameters.bMerge === true
				: mParameters.merge  === true;
			bAsync    = typeof (mParameters.async) == "undefined"
				? mParameters.bAsync === true
				: mParameters.async  === true;
			mUrlParams = mParameters.urlParameters;
		}

        this.consoleLog("update");
	};

	AdapterModel.prototype.create = function(sPath, oData, mParameters) {
		var oRequest, oBatchRequest, sUrl, oRequestHandle, oEntityMetadata,
			oContext, fnSuccess, fnError, bAsync = false, mUrlParams;

		if (mParameters && typeof (mParameters) == "object" && !(mParameters instanceof sap.ui.model.Context)) {
			// The object parameter syntax has been used.
			oContext	= mParameters.context;
			fnSuccess	= mParameters.success;
			mUrlParams	= mParameters.urlParameters;
			fnError		= mParameters.error;
			bAsync		= mParameters.async === true;
		} else {
			// Legacy parameter syntax is used
			oContext	= mParameters;
			fnSuccess	= arguments[3];
			fnError		= arguments[4];
		}

        this.consoleLog("create");
		//return oRequestHandle;
	};

	AdapterModel.prototype.remove = function(sPath, mParameters) {
		var oContext, sEntry, oStoredEntry, fnSuccess, fnError, oRequest, sUrl,
			sETag, sKey, oPayload, _fnSuccess, oBatchRequest, oRequestHandle,
			mUrlParams,
			bAsync = false,
			that = this;

		// maintain compatibility, check if the old or new function parameters are used and set values accordingly:
		if ((mParameters && mParameters instanceof sap.ui.model.Context) || arguments[2]) {
			oContext  = mParameters;
			fnSuccess = arguments[2];
			fnError   = arguments[3];
		} else if (mParameters) {
			oContext  = mParameters.context || mParameters.oContext;
			fnSuccess = mParameters.success || mParameters.fnSuccess;
			fnError   = mParameters.error   || mParameters.fnError;
			sETag     = mParameters.eTag    || mParameters.sETag;
			oPayload  = mParameters.payload || mParameters.oPayload;
			bAsync    = typeof (mParameters.async) == "undefined"
				? mParameters.bAsync === true
				: mParameters.async === true;
			mUrlParams = mParameters.urlParameters;
		}

        this.consoleLog("remove", mParameters);

		//return oRequestHandle;

	};

	AdapterModel.prototype.callFunction = function (sFunctionName, mParameters) {
	    this.consoleLog("callFunction");
	};

	AdapterModel.prototype.read = function(sPath, mParameters) {
		var oRequest, sUrl, oRequestHandle, oBatchRequest,
			oContext, mUrlParams, bAsync, fnSuccess, fnError,
			aFilters, aSorters, sFilterParams, sSorterParams,
			oEntityType, sResolvedPath,
			aUrlParams;

		if (mParameters && typeof (mParameters) == "object" && !(mParameters instanceof sap.ui.model.Context)) {
			// The object parameter syntax has been used.
			oContext   = mParameters.context;
			mUrlParams = mParameters.urlParameters;
			bAsync     = mParameters.async !== false; // Defaults to true...
			fnSuccess  = mParameters.success;
			fnError    = mParameters.error;
			aFilters   = mParameters.filters;
			aSorters   = mParameters.sorters;
		} else {
			// Legacy parameter syntax is used
			oContext   = mParameters;
			mUrlParams = arguments[2];
			bAsync     = arguments[3] !== false; // Defaults to true...
			fnSuccess  = arguments[4];
			fnError    = arguments[5];
		}

        this.consoleLog("read", mParameters);

		//return oRequestHandle;
	};

	AdapterModel.prototype.createBatchOperation = function(sPath, sMethod, oData, oParameters) {
	    this.consoleLog("createBatchOperation");
		//return oRequest;
	};

	AdapterModel.prototype.addBatchReadOperations = function(aReadOperations) {
	    this.consoleLog("addBatchReadOperations");
	};

	AdapterModel.prototype.addBatchChangeOperations = function(aChangeOperations) {
	    this.consoleLog("addBatchChangeOperations");
	};

	AdapterModel.prototype.clearBatch = function() {
        this.consoleLog("clearBatch");
	};

	AdapterModel.prototype.submitBatch = function(fnSuccess, fnError, bAsync, bImportData) {
	    this.consoleLog("submitBatch");
	};

	AdapterModel.prototype.getServiceMetadata = function() {
	    this.consoleLog("getServiceMetadata");
	    return true;
	};

	AdapterModel.prototype.getServiceAnnotations = function() {
	    this.consoleLog("getServiceAnnotations");
	};

	AdapterModel.prototype.submitChanges = function(fnSuccess, fnError, oParameters) {
	    this.consoleLog("submitChanges");
	};

	AdapterModel.prototype.resetChanges = function(fnSuccess, fnError) {
	    this.consoleLog("resetChanges");
	};

	AdapterModel.prototype.setProperty = function(sPath, oValue, oContext, bAsyncUpdate) {
        this.consoleLog("setProperty");
	};

	AdapterModel.prototype.setHeaders = function(mHeaders) {
    	this.consoleLog("setHeaders");
	};

	AdapterModel.prototype.getHeaders = function() {
    	this.consoleLog("getHeaders");
	};

	AdapterModel.prototype.updateBindings = function(bForceUpdate) {
		this.checkUpdate(bForceUpdate);
	};

	AdapterModel.prototype.formatValue = function(vValue, sType) {
	    this.consoleLog("formatValue");
		return ODataUtils.formatValue(vValue, sType);
	};

	AdapterModel.prototype.deleteCreatedEntry = function(oContext) {
        this.consoleLog("deleteCreatedEntry");
	};


	AdapterModel.prototype.createEntry = function(sPath, vProperties) {
        this.consoleLog("createEntry");
		return this.getContext("/" + sKey); // context wants a path
	};

	AdapterModel.prototype._createPropertyValue = function(sType) {
    	return this._getDefaultPropertyValue(sTypeName,sNamespace);
	};

	AdapterModel.prototype._getDefaultPropertyValue = function(sType, sNamespace) {
		return undefined;
	};

	AdapterModel.prototype._normalizePath = function(sPath, oContext) {

		// remove query params from path if any
		if (sPath && sPath.indexOf('?') != -1 ) {
			sPath = sPath.substr(0, sPath.indexOf('?'));
		}

		if (!oContext && !jQuery.sap.startsWith(sPath,"/")) {
			// we need to add a / due to compatibility reasons; but only if there is no context
			sPath = '/' + sPath;
			jQuery.sap.log.warning(this + " path " + sPath + " should be absolute if no Context is set");
		}
		return this.resolve(sPath, oContext);
	};

	AdapterModel.prototype.isList = function(sPath, oContext) {
		var sPath = this.resolve(sPath, oContext);
		return sPath && sPath.substr(sPath.lastIndexOf("/")).indexOf("(") === -1;
	};

	AdapterModel.prototype.isMetaModelPath = function(sPath) {
		return sPath.indexOf("##") == 0 || sPath.indexOf("/##") > -1;
	};

	AdapterModel.prototype.destroy = function() {
	    this.consoleLog("destroy");
		this.bDestroyed = true;

		Model.prototype.destroy.apply(this, arguments);
	};


	AdapterModel.prototype.getMetaModel = function() {
	    this.consoleLog("getMetaModel");
	};

	return AdapterModel;

});
}
!function(){function n(n){return n&&(n.ownerDocument||n.document||n).documentElement}function t(n){return n&&(n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView)}function e(n,t){return t>n?-1:n>t?1:n>=t?0:NaN}function r(n){return null===n?NaN:+n}function u(n){return!isNaN(n)}function i(n){return{left:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)<0?r=i+1:u=i}return r},right:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n(t[i],e)>0?u=i:r=i+1}return r}}}function a(n){return n.length}function o(n){for(var t=1;n*t%1;)t*=10;return t}function l(n,t){for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}function c(){this._=Object.create(null)}function s(n){return(n+="")===xa||n[0]===ba?ba+n:n}function f(n){return(n+="")[0]===ba?n.slice(1):n}function h(n){return s(n)in this._}function g(n){return(n=s(n))in this._&&delete this._[n]}function p(){var n=[];for(var t in this._)n.push(f(t));return n}function v(){var n=0;for(var t in this._)++n;return n}function d(){for(var n in this._)return!1;return!0}function m(){this._=Object.create(null)}function y(n){return n}function M(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function x(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e=0,r=_a.length;r>e;++e){var u=_a[e]+t;if(u in n)return u}}function b(){}function _(){}function w(n){function t(){for(var t,r=e,u=-1,i=r.length;++u<i;)(t=r[u].on)&&t.apply(this,arguments);return n}var e=[],r=new c;return t.on=function(t,u){var i,a=r.get(t);return arguments.length<2?a&&a.on:(a&&(a.on=null,e=e.slice(0,i=e.indexOf(a)).concat(e.slice(i+1)),r.remove(t)),u&&e.push(r.set(t,{on:u})),n)},t}function S(){oa.event.preventDefault()}function k(){for(var n,t=oa.event;n=t.sourceEvent;)t=n;return t}function N(n){for(var t=new _,e=0,r=arguments.length;++e<r;)t[arguments[e]]=w(t);return t.of=function(e,r){return function(u){try{var i=u.sourceEvent=oa.event;u.target=n,oa.event=u,t[u.type].apply(e,r)}finally{oa.event=i}}},t}function E(n){return Sa(n,Aa),n}function A(n){return"function"==typeof n?n:function(){return ka(n,this)}}function C(n){return"function"==typeof n?n:function(){return Na(n,this)}}function z(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function u(){this.setAttribute(n,t)}function i(){this.setAttributeNS(n.space,n.local,t)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=oa.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?o:a:n.local?i:u}function L(n){return n.trim().replace(/\s+/g," ")}function q(n){return new RegExp("(?:^|\\s+)"+oa.requote(n)+"(?:\\s+|$)","g")}function T(n){return(n+"").trim().split(/^|\s+/)}function R(n,t){function e(){for(var e=-1;++e<u;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<u;)n[e](this,r)}n=T(n).map(D);var u=n.length;return"function"==typeof t?r:e}function D(n){var t=q(n);return function(e,r){if(u=e.classList)return r?u.add(n):u.remove(n);var u=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(u)||e.setAttribute("class",L(u+" "+n))):e.setAttribute("class",L(u.replace(t," ")))}}function P(n,t,e){function r(){this.style.removeProperty(n)}function u(){this.style.setProperty(n,t,e)}function i(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?i:u}function U(n,t){function e(){delete this[n]}function r(){this[n]=t}function u(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?u:r}function j(n){function t(){var t=this.ownerDocument,e=this.namespaceURI;return e===Ca&&t.documentElement.namespaceURI===Ca?t.createElement(n):t.createElementNS(e,n)}function e(){return this.ownerDocument.createElementNS(n.space,n.local)}return"function"==typeof n?n:(n=oa.ns.qualify(n)).local?e:t}function F(){var n=this.parentNode;n&&n.removeChild(this)}function H(n){return{__data__:n}}function O(n){return function(){return Ea(this,n)}}function I(n){return arguments.length||(n=e),function(t,e){return t&&e?n(t.__data__,e.__data__):!t-!e}}function Y(n,t){for(var e=0,r=n.length;r>e;e++)for(var u,i=n[e],a=0,o=i.length;o>a;a++)(u=i[a])&&t(u,a,e);return n}function Z(n){return Sa(n,La),n}function V(n){var t,e;return function(r,u,i){var a,o=n[i].update,l=o.length;for(i!=e&&(e=i,t=0),u>=t&&(t=u+1);!(a=o[t])&&++t<l;);return a}}function X(n,t,e){function r(){var t=this[a];t&&(this.removeEventListener(n,t,t.$),delete this[a])}function u(){var u=l(t,ca(arguments));r.call(this),this.addEventListener(n,this[a]=u,u.$=e),u._=t}function i(){var t,e=new RegExp("^__on([^.]+)"+oa.requote(n)+"$");for(var r in this)if(t=r.match(e)){var u=this[r];this.removeEventListener(t[1],u,u.$),delete this[r]}}var a="__on"+n,o=n.indexOf("."),l=$;o>0&&(n=n.slice(0,o));var c=qa.get(n);return c&&(n=c,l=B),o?t?u:r:t?b:i}function $(n,t){return function(e){var r=oa.event;oa.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{oa.event=r}}}function B(n,t){var e=$(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function W(e){var r=".dragsuppress-"+ ++Ra,u="click"+r,i=oa.select(t(e)).on("touchmove"+r,S).on("dragstart"+r,S).on("selectstart"+r,S);if(null==Ta&&(Ta="onselectstart"in e?!1:x(e.style,"userSelect")),Ta){var a=n(e).style,o=a[Ta];a[Ta]="none"}return function(n){if(i.on(r,null),Ta&&(a[Ta]=o),n){var t=function(){i.on(u,null)};i.on(u,function(){S(),t()},!0),setTimeout(t,0)}}}function J(n,e){e.changedTouches&&(e=e.changedTouches[0]);var r=n.ownerSVGElement||n;if(r.createSVGPoint){var u=r.createSVGPoint();if(0>Da){var i=t(n);if(i.scrollX||i.scrollY){r=oa.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var a=r[0][0].getScreenCTM();Da=!(a.f||a.e),r.remove()}}return Da?(u.x=e.pageX,u.y=e.pageY):(u.x=e.clientX,u.y=e.clientY),u=u.matrixTransform(n.getScreenCTM().inverse()),[u.x,u.y]}var o=n.getBoundingClientRect();return[e.clientX-o.left-n.clientLeft,e.clientY-o.top-n.clientTop]}function G(){return oa.event.changedTouches[0].identifier}function K(n){return n>0?1:0>n?-1:0}function Q(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function nn(n){return n>1?0:-1>n?ja:Math.acos(n)}function tn(n){return n>1?Oa:-1>n?-Oa:Math.asin(n)}function en(n){return((n=Math.exp(n))-1/n)/2}function rn(n){return((n=Math.exp(n))+1/n)/2}function un(n){return((n=Math.exp(2*n))-1)/(n+1)}function an(n){return(n=Math.sin(n/2))*n}function on(){}function ln(n,t,e){return this instanceof ln?(this.h=+n,this.s=+t,void(this.l=+e)):arguments.length<2?n instanceof ln?new ln(n.h,n.s,n.l):_n(""+n,wn,ln):new ln(n,t,e)}function cn(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?i+(a-i)*n/60:180>n?a:240>n?i+(a-i)*(240-n)/60:i}function u(n){return Math.round(255*r(n))}var i,a;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,a=.5>=e?e*(1+t):e+t-e*t,i=2*e-a,new yn(u(n+120),u(n),u(n-120))}function sn(n,t,e){return this instanceof sn?(this.h=+n,this.c=+t,void(this.l=+e)):arguments.length<2?n instanceof sn?new sn(n.h,n.c,n.l):n instanceof hn?pn(n.l,n.a,n.b):pn((n=Sn((n=oa.rgb(n)).r,n.g,n.b)).l,n.a,n.b):new sn(n,t,e)}function fn(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),new hn(e,Math.cos(n*=Ia)*t,Math.sin(n)*t)}function hn(n,t,e){return this instanceof hn?(this.l=+n,this.a=+t,void(this.b=+e)):arguments.length<2?n instanceof hn?new hn(n.l,n.a,n.b):n instanceof sn?fn(n.h,n.c,n.l):Sn((n=yn(n)).r,n.g,n.b):new hn(n,t,e)}function gn(n,t,e){var r=(n+16)/116,u=r+t/500,i=r-e/200;return u=vn(u)*Qa,r=vn(r)*no,i=vn(i)*to,new yn(mn(3.2404542*u-1.5371385*r-.4985314*i),mn(-.969266*u+1.8760108*r+.041556*i),mn(.0556434*u-.2040259*r+1.0572252*i))}function pn(n,t,e){return n>0?new sn(Math.atan2(e,t)*Ya,Math.sqrt(t*t+e*e),n):new sn(NaN,NaN,n)}function vn(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function dn(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function mn(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function yn(n,t,e){return this instanceof yn?(this.r=~~n,this.g=~~t,void(this.b=~~e)):arguments.length<2?n instanceof yn?new yn(n.r,n.g,n.b):_n(""+n,yn,cn):new yn(n,t,e)}function Mn(n){return new yn(n>>16,n>>8&255,255&n)}function xn(n){return Mn(n)+""}function bn(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function _n(n,t,e){var r,u,i,a=0,o=0,l=0;if(r=/([a-z]+)\((.*)\)/.exec(n=n.toLowerCase()))switch(u=r[2].split(","),r[1]){case"hsl":return e(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case"rgb":return t(Nn(u[0]),Nn(u[1]),Nn(u[2]))}return(i=uo.get(n))?t(i.r,i.g,i.b):(null==n||"#"!==n.charAt(0)||isNaN(i=parseInt(n.slice(1),16))||(4===n.length?(a=(3840&i)>>4,a=a>>4|a,o=240&i,o=o>>4|o,l=15&i,l=l<<4|l):7===n.length&&(a=(16711680&i)>>16,o=(65280&i)>>8,l=255&i)),t(a,o,l))}function wn(n,t,e){var r,u,i=Math.min(n/=255,t/=255,e/=255),a=Math.max(n,t,e),o=a-i,l=(a+i)/2;return o?(u=.5>l?o/(a+i):o/(2-a-i),r=n==a?(t-e)/o+(e>t?6:0):t==a?(e-n)/o+2:(n-t)/o+4,r*=60):(r=NaN,u=l>0&&1>l?0:r),new ln(r,u,l)}function Sn(n,t,e){n=kn(n),t=kn(t),e=kn(e);var r=dn((.4124564*n+.3575761*t+.1804375*e)/Qa),u=dn((.2126729*n+.7151522*t+.072175*e)/no),i=dn((.0193339*n+.119192*t+.9503041*e)/to);return hn(116*u-16,500*(r-u),200*(u-i))}function kn(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function Nn(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function En(n){return"function"==typeof n?n:function(){return n}}function An(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),Cn(t,e,n,r)}}function Cn(n,t,e,r){function u(){var n,t=l.status;if(!t&&Ln(l)||t>=200&&300>t||304===t){try{n=e.call(i,l)}catch(r){return void a.error.call(i,r)}a.load.call(i,n)}else a.error.call(i,l)}var i={},a=oa.dispatch("beforesend","progress","load","error"),o={},l=new XMLHttpRequest,c=null;return!this.XDomainRequest||"withCredentials"in l||!/^(http(s)?:)?\/\//.test(n)||(l=new XDomainRequest),"onload"in l?l.onload=l.onerror=u:l.onreadystatechange=function(){l.readyState>3&&u()},l.onprogress=function(n){var t=oa.event;oa.event=n;try{a.progress.call(i,l)}finally{oa.event=t}},i.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?o[n]:(null==t?delete o[n]:o[n]=t+"",i)},i.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",i):t},i.responseType=function(n){return arguments.length?(c=n,i):c},i.response=function(n){return e=n,i},["get","post"].forEach(function(n){i[n]=function(){return i.send.apply(i,[n].concat(ca(arguments)))}}),i.send=function(e,r,u){if(2===arguments.length&&"function"==typeof r&&(u=r,r=null),l.open(e,n,!0),null==t||"accept"in o||(o.accept=t+",*/*"),l.setRequestHeader)for(var s in o)l.setRequestHeader(s,o[s]);return null!=t&&l.overrideMimeType&&l.overrideMimeType(t),null!=c&&(l.responseType=c),null!=u&&i.on("error",u).on("load",function(n){u(null,n)}),a.beforesend.call(i,l),l.send(null==r?null:r),i},i.abort=function(){return l.abort(),i},oa.rebind(i,a,"on"),null==r?i:i.get(zn(r))}function zn(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function Ln(n){var t=n.responseType;return t&&"text"!==t?n.response:n.responseText}function qn(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var u=e+t,i={c:n,t:u,n:null};return ao?ao.n=i:io=i,ao=i,oo||(lo=clearTimeout(lo),oo=1,co(Tn)),i}function Tn(){var n=Rn(),t=Dn()-n;t>24?(isFinite(t)&&(clearTimeout(lo),lo=setTimeout(Tn,t)),oo=0):(oo=1,co(Tn))}function Rn(){for(var n=Date.now(),t=io;t;)n>=t.t&&t.c(n-t.t)&&(t.c=null),t=t.n;return n}function Dn(){for(var n,t=io,e=1/0;t;)t.c?(t.t<e&&(e=t.t),t=(n=t).n):t=n?n.n=t.n:io=t.n;return ao=n,e}function Pn(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Un(n,t){var e=Math.pow(10,3*Ma(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function jn(n){var t=n.decimal,e=n.thousands,r=n.grouping,u=n.currency,i=r&&e?function(n,t){for(var u=n.length,i=[],a=0,o=r[0],l=0;u>0&&o>0&&(l+o+1>t&&(o=Math.max(1,t-l)),i.push(n.substring(u-=o,u+o)),!((l+=o+1)>t));)o=r[a=(a+1)%r.length];return i.reverse().join(e)}:y;return function(n){var e=fo.exec(n),r=e[1]||" ",a=e[2]||">",o=e[3]||"-",l=e[4]||"",c=e[5],s=+e[6],f=e[7],h=e[8],g=e[9],p=1,v="",d="",m=!1,y=!0;switch(h&&(h=+h.substring(1)),(c||"0"===r&&"="===a)&&(c=r="0",a="="),g){case"n":f=!0,g="g";break;case"%":p=100,d="%",g="f";break;case"p":p=100,d="%",g="r";break;case"b":case"o":case"x":case"X":"#"===l&&(v="0"+g.toLowerCase());case"c":y=!1;case"d":m=!0,h=0;break;case"s":p=-1,g="r"}"$"===l&&(v=u[0],d=u[1]),"r"!=g||h||(g="g"),null!=h&&("g"==g?h=Math.max(1,Math.min(21,h)):("e"==g||"f"==g)&&(h=Math.max(0,Math.min(20,h)))),g=ho.get(g)||Fn;var M=c&&f;return function(n){var e=d;if(m&&n%1)return"";var u=0>n||0===n&&0>1/n?(n=-n,"-"):"-"===o?"":o;if(0>p){var l=oa.formatPrefix(n,h);n=l.scale(n),e=l.symbol+d}else n*=p;n=g(n,h);var x,b,_=n.lastIndexOf(".");if(0>_){var w=y?n.lastIndexOf("e"):-1;0>w?(x=n,b=""):(x=n.substring(0,w),b=n.substring(w))}else x=n.substring(0,_),b=t+n.substring(_+1);!c&&f&&(x=i(x,1/0));var S=v.length+x.length+b.length+(M?0:u.length),k=s>S?new Array(S=s-S+1).join(r):"";return M&&(x=i(k+x,k.length?s-b.length:1/0)),u+=v,n=x+b,("<"===a?u+n+k:">"===a?k+u+n:"^"===a?k.substring(0,S>>=1)+u+n+k.substring(S):u+(M?n:k+n))+e}}}function Fn(n){return n+""}function Hn(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function On(n,t,e){function r(t){var e=n(t),r=i(e,1);return r-t>t-e?e:r}function u(e){return t(e=n(new po(e-1)),1),e}function i(n,e){return t(n=new po(+n),e),n}function a(n,r,i){var a=u(n),o=[];if(i>1)for(;r>a;)e(a)%i||o.push(new Date(+a)),t(a,1);else for(;r>a;)o.push(new Date(+a)),t(a,1);return o}function o(n,t,e){try{po=Hn;var r=new Hn;return r._=n,a(r,t,e)}finally{po=Date}}n.floor=n,n.round=r,n.ceil=u,n.offset=i,n.range=a;var l=n.utc=In(n);return l.floor=l,l.round=In(r),l.ceil=In(u),l.offset=In(i),l.range=o,n}function In(n){return function(t,e){try{po=Hn;var r=new Hn;return r._=t,n(r,e)._}finally{po=Date}}}function Yn(n){function t(n){function t(t){for(var e,u,i,a=[],o=-1,l=0;++o<r;)37===n.charCodeAt(o)&&(a.push(n.slice(l,o)),null!=(u=mo[e=n.charAt(++o)])&&(e=n.charAt(++o)),(i=A[e])&&(e=i(t,null==u?"e"===e?" ":"0":u)),a.push(e),l=o+1);return a.push(n.slice(l,o)),a.join("")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},u=e(r,n,t,0);if(u!=t.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var i=null!=r.Z&&po!==Hn,a=new(i?Hn:po);return"j"in r?a.setFullYear(r.y,0,r.j):"W"in r||"U"in r?("w"in r||(r.w="W"in r?1:0),a.setFullYear(r.y,0,1),a.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(a.getDay()+5)%7:r.w+7*r.U-(a.getDay()+6)%7)):a.setFullYear(r.y,r.m,r.d),a.setHours(r.H+(r.Z/100|0),r.M+r.Z%100,r.S,r.L),i?a._:a},t.toString=function(){return n},t}function e(n,t,e,r){for(var u,i,a,o=0,l=t.length,c=e.length;l>o;){if(r>=c)return-1;if(u=t.charCodeAt(o++),37===u){if(a=t.charAt(o++),i=C[a in mo?t.charAt(o++):a],!i||(r=i(n,e,r))<0)return-1}else if(u!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){_.lastIndex=0;var r=_.exec(t.slice(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){x.lastIndex=0;var r=x.exec(t.slice(e));return r?(n.w=b.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){N.lastIndex=0;var r=N.exec(t.slice(e));return r?(n.m=E.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,e){S.lastIndex=0;var r=S.exec(t.slice(e));return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,r){return e(n,A.c.toString(),t,r)}function l(n,t,r){return e(n,A.x.toString(),t,r)}function c(n,t,r){return e(n,A.X.toString(),t,r)}function s(n,t,e){var r=M.get(t.slice(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var f=n.dateTime,h=n.date,g=n.time,p=n.periods,v=n.days,d=n.shortDays,m=n.months,y=n.shortMonths;t.utc=function(n){function e(n){try{po=Hn;var t=new po;return t._=n,r(t)}finally{po=Date}}var r=t(n);return e.parse=function(n){try{po=Hn;var t=r.parse(n);return t&&t._}finally{po=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=ct;var M=oa.map(),x=Vn(v),b=Xn(v),_=Vn(d),w=Xn(d),S=Vn(m),k=Xn(m),N=Vn(y),E=Xn(y);p.forEach(function(n,t){M.set(n.toLowerCase(),t)});var A={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return y[n.getMonth()]},B:function(n){return m[n.getMonth()]},c:t(f),d:function(n,t){return Zn(n.getDate(),t,2)},e:function(n,t){return Zn(n.getDate(),t,2)},H:function(n,t){return Zn(n.getHours(),t,2)},I:function(n,t){return Zn(n.getHours()%12||12,t,2)},j:function(n,t){return Zn(1+go.dayOfYear(n),t,3)},L:function(n,t){return Zn(n.getMilliseconds(),t,3)},m:function(n,t){return Zn(n.getMonth()+1,t,2)},M:function(n,t){return Zn(n.getMinutes(),t,2)},p:function(n){return p[+(n.getHours()>=12)]},S:function(n,t){return Zn(n.getSeconds(),t,2)},U:function(n,t){return Zn(go.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return Zn(go.mondayOfYear(n),t,2)},x:t(h),X:t(g),y:function(n,t){return Zn(n.getFullYear()%100,t,2)},Y:function(n,t){return Zn(n.getFullYear()%1e4,t,4)},Z:ot,"%":function(){return"%"}},C={a:r,A:u,b:i,B:a,c:o,d:tt,e:tt,H:rt,I:rt,j:et,L:at,m:nt,M:ut,p:s,S:it,U:Bn,w:$n,W:Wn,x:l,X:c,y:Gn,Y:Jn,Z:Kn,"%":lt};return t}function Zn(n,t,e){var r=0>n?"-":"",u=(r?-n:n)+"",i=u.length;return r+(e>i?new Array(e-i+1).join(t)+u:u)}function Vn(n){return new RegExp("^(?:"+n.map(oa.requote).join("|")+")","i")}function Xn(n){for(var t=new c,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function $n(n,t,e){yo.lastIndex=0;var r=yo.exec(t.slice(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function Bn(n,t,e){yo.lastIndex=0;var r=yo.exec(t.slice(e));return r?(n.U=+r[0],e+r[0].length):-1}function Wn(n,t,e){yo.lastIndex=0;var r=yo.exec(t.slice(e));return r?(n.W=+r[0],e+r[0].length):-1}function Jn(n,t,e){yo.lastIndex=0;var r=yo.exec(t.slice(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Gn(n,t,e){yo.lastIndex=0;var r=yo.exec(t.slice(e,e+2));return r?(n.y=Qn(+r[0]),e+r[0].length):-1}function Kn(n,t,e){return/^[+-]\d{4}$/.test(t=t.slice(e,e+5))?(n.Z=-t,e+5):-1}function Qn(n){return n+(n>68?1900:2e3)}function nt(n,t,e){yo.lastIndex=0;var r=yo.exec(t.slice(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function tt(n,t,e){yo.lastIndex=0;var r=yo.exec(t.slice(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function et(n,t,e){yo.lastIndex=0;var r=yo.exec(t.slice(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function rt(n,t,e){yo.lastIndex=0;var r=yo.exec(t.slice(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function ut(n,t,e){yo.lastIndex=0;var r=yo.exec(t.slice(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function it(n,t,e){yo.lastIndex=0;var r=yo.exec(t.slice(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function at(n,t,e){yo.lastIndex=0;var r=yo.exec(t.slice(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function ot(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=Ma(t)/60|0,u=Ma(t)%60;return e+Zn(r,"0",2)+Zn(u,"0",2)}function lt(n,t,e){Mo.lastIndex=0;var r=Mo.exec(t.slice(e,e+1));return r?e+r[0].length:-1}function ct(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function st(){}function ft(n,t,e){var r=e.s=n+t,u=r-n,i=r-u;e.t=n-i+(t-u)}function ht(n,t){n&&wo.hasOwnProperty(n.type)&&wo[n.type](n,t)}function gt(n,t,e){var r,u=-1,i=n.length-e;for(t.lineStart();++u<i;)r=n[u],t.point(r[0],r[1],r[2]);t.lineEnd()}function pt(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)gt(n[e],t,1);t.polygonEnd()}function vt(){function n(n,t){n*=Ia,t=t*Ia/2+ja/4;var e=n-r,a=e>=0?1:-1,o=a*e,l=Math.cos(t),c=Math.sin(t),s=i*c,f=u*l+s*Math.cos(o),h=s*a*Math.sin(o);ko.add(Math.atan2(h,f)),r=n,u=l,i=c}var t,e,r,u,i;No.point=function(a,o){No.point=n,r=(t=a)*Ia,u=Math.cos(o=(e=o)*Ia/2+ja/4),i=Math.sin(o)},No.lineEnd=function(){n(t,e)}}function dt(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function mt(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function yt(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Mt(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function xt(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function bt(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function _t(n){return[Math.atan2(n[1],n[0]),tn(n[2])]}function wt(n,t){return Ma(n[0]-t[0])<Pa&&Ma(n[1]-t[1])<Pa}function St(n,t){n*=Ia;var e=Math.cos(t*=Ia);kt(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function kt(n,t,e){++Eo,Co+=(n-Co)/Eo,zo+=(t-zo)/Eo,Lo+=(e-Lo)/Eo}function Nt(){function n(n,u){n*=Ia;var i=Math.cos(u*=Ia),a=i*Math.cos(n),o=i*Math.sin(n),l=Math.sin(u),c=Math.atan2(Math.sqrt((c=e*l-r*o)*c+(c=r*a-t*l)*c+(c=t*o-e*a)*c),t*a+e*o+r*l);Ao+=c,qo+=c*(t+(t=a)),To+=c*(e+(e=o)),Ro+=c*(r+(r=l)),kt(t,e,r)}var t,e,r;jo.point=function(u,i){u*=Ia;var a=Math.cos(i*=Ia);t=a*Math.cos(u),e=a*Math.sin(u),r=Math.sin(i),jo.point=n,kt(t,e,r)}}function Et(){jo.point=St}function At(){function n(n,t){n*=Ia;var e=Math.cos(t*=Ia),a=e*Math.cos(n),o=e*Math.sin(n),l=Math.sin(t),c=u*l-i*o,s=i*a-r*l,f=r*o-u*a,h=Math.sqrt(c*c+s*s+f*f),g=r*a+u*o+i*l,p=h&&-nn(g)/h,v=Math.atan2(h,g);Do+=p*c,Po+=p*s,Uo+=p*f,Ao+=v,qo+=v*(r+(r=a)),To+=v*(u+(u=o)),Ro+=v*(i+(i=l)),kt(r,u,i)}var t,e,r,u,i;jo.point=function(a,o){t=a,e=o,jo.point=n,a*=Ia;var l=Math.cos(o*=Ia);r=l*Math.cos(a),u=l*Math.sin(a),i=Math.sin(o),kt(r,u,i)},jo.lineEnd=function(){n(t,e),jo.lineEnd=Et,jo.point=St}}function Ct(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function zt(){return!0}function Lt(n,t,e,r,u){var i=[],a=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(wt(e,r)){u.lineStart();for(var o=0;t>o;++o)u.point((e=n[o])[0],e[1]);return void u.lineEnd()}var l=new Tt(e,n,null,!0),c=new Tt(e,null,l,!1);l.o=c,i.push(l),a.push(c),l=new Tt(r,n,null,!1),c=new Tt(r,null,l,!0),l.o=c,i.push(l),a.push(c)}}),a.sort(t),qt(i),qt(a),i.length){for(var o=0,l=e,c=a.length;c>o;++o)a[o].e=l=!l;for(var s,f,h=i[0];;){for(var g=h,p=!0;g.v;)if((g=g.n)===h)return;s=g.z,u.lineStart();do{if(g.v=g.o.v=!0,g.e){if(p)for(var o=0,c=s.length;c>o;++o)u.point((f=s[o])[0],f[1]);else r(g.x,g.n.x,1,u);g=g.n}else{if(p){s=g.p.z;for(var o=s.length-1;o>=0;--o)u.point((f=s[o])[0],f[1])}else r(g.x,g.p.x,-1,u);g=g.p}g=g.o,s=g.z,p=!p}while(!g.v);u.lineEnd()}}}function qt(n){if(t=n.length){for(var t,e,r=0,u=n[0];++r<t;)u.n=e=n[r],e.p=u,u=e;u.n=e=n[0],e.p=u}}function Tt(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Rt(n,t,e,r){return function(u,i){function a(t,e){var r=u(t,e);n(t=r[0],e=r[1])&&i.point(t,e)}function o(n,t){var e=u(n,t);d.point(e[0],e[1])}function l(){y.point=o,d.lineStart()}function c(){y.point=a,d.lineEnd()}function s(n,t){v.push([n,t]);var e=u(n,t);x.point(e[0],e[1])}function f(){x.lineStart(),v=[]}function h(){s(v[0][0],v[0][1]),x.lineEnd();var n,t=x.clean(),e=M.buffer(),r=e.length;if(v.pop(),p.push(v),v=null,r)if(1&t){n=e[0];var u,r=n.length-1,a=-1;if(r>0){for(b||(i.polygonStart(),b=!0),i.lineStart();++a<r;)i.point((u=n[a])[0],u[1]);i.lineEnd()}}else r>1&&2&t&&e.push(e.pop().concat(e.shift())),g.push(e.filter(Dt))}var g,p,v,d=t(i),m=u.invert(r[0],r[1]),y={point:a,lineStart:l,lineEnd:c,polygonStart:function(){y.point=s,y.lineStart=f,y.lineEnd=h,g=[],p=[]},polygonEnd:function(){y.point=a,y.lineStart=l,y.lineEnd=c,g=oa.merge(g);var n=Ot(m,p);g.length?(b||(i.polygonStart(),b=!0),Lt(g,Ut,n,e,i)):n&&(b||(i.polygonStart(),b=!0),i.lineStart(),e(null,null,1,i),i.lineEnd()),b&&(i.polygonEnd(),b=!1),g=p=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}},M=Pt(),x=t(M),b=!1;return y}}function Dt(n){return n.length>1}function Pt(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:b,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function Ut(n,t){return((n=n.x)[0]<0?n[1]-Oa-Pa:Oa-n[1])-((t=t.x)[0]<0?t[1]-Oa-Pa:Oa-t[1])}function jt(n){var t,e=NaN,r=NaN,u=NaN;return{lineStart:function(){n.lineStart(),t=1},point:function(i,a){var o=i>0?ja:-ja,l=Ma(i-e);Ma(l-ja)<Pa?(n.point(e,r=(r+a)/2>0?Oa:-Oa),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(o,r),n.point(i,r),t=0):u!==o&&l>=ja&&(Ma(e-u)<Pa&&(e-=u*Pa),Ma(i-o)<Pa&&(i-=o*Pa),r=Ft(e,r,i,a),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(o,r),t=0),n.point(e=i,r=a),u=o},lineEnd:function(){n.lineEnd(),e=r=NaN},clean:function(){return 2-t}}}function Ft(n,t,e,r){var u,i,a=Math.sin(n-e);return Ma(a)>Pa?Math.atan((Math.sin(t)*(i=Math.cos(r))*Math.sin(e)-Math.sin(r)*(u=Math.cos(t))*Math.sin(n))/(u*i*a)):(t+r)/2}function Ht(n,t,e,r){var u;if(null==n)u=e*Oa,r.point(-ja,u),r.point(0,u),r.point(ja,u),r.point(ja,0),r.point(ja,-u),r.point(0,-u),r.point(-ja,-u),r.point(-ja,0),r.point(-ja,u);else if(Ma(n[0]-t[0])>Pa){var i=n[0]<t[0]?ja:-ja;u=e*i/2,r.point(-i,u),r.point(0,u),r.point(i,u)}else r.point(t[0],t[1])}function Ot(n,t){var e=n[0],r=n[1],u=[Math.sin(e),-Math.cos(e),0],i=0,a=0;ko.reset();for(var o=0,l=t.length;l>o;++o){var c=t[o],s=c.length;if(s)for(var f=c[0],h=f[0],g=f[1]/2+ja/4,p=Math.sin(g),v=Math.cos(g),d=1;;){d===s&&(d=0),n=c[d];var m=n[0],y=n[1]/2+ja/4,M=Math.sin(y),x=Math.cos(y),b=m-h,_=b>=0?1:-1,w=_*b,S=w>ja,k=p*M;if(ko.add(Math.atan2(k*_*Math.sin(w),v*x+k*Math.cos(w))),i+=S?b+_*Fa:b,S^h>=e^m>=e){var N=yt(dt(f),dt(n));bt(N);var E=yt(u,N);bt(E);var A=(S^b>=0?-1:1)*tn(E[2]);(r>A||r===A&&(N[0]||N[1]))&&(a+=S^b>=0?1:-1)}if(!d++)break;h=m,p=M,v=x,f=n}}return(-Pa>i||Pa>i&&0>ko)^1&a}function It(n){function t(n,t){return Math.cos(n)*Math.cos(t)>i}function e(n){var e,i,l,c,s;return{lineStart:function(){c=l=!1,s=1},point:function(f,h){var g,p=[f,h],v=t(f,h),d=a?v?0:u(f,h):v?u(f+(0>f?ja:-ja),h):0;if(!e&&(c=l=v)&&n.lineStart(),v!==l&&(g=r(e,p),(wt(e,g)||wt(p,g))&&(p[0]+=Pa,p[1]+=Pa,v=t(p[0],p[1]))),v!==l)s=0,v?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(o&&e&&a^v){var m;d&i||!(m=r(p,e,!0))||(s=0,a?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1])))}!v||e&&wt(e,p)||n.point(p[0],p[1]),e=p,l=v,i=d},lineEnd:function(){l&&n.lineEnd(),e=null},clean:function(){return s|(c&&l)<<1}}}function r(n,t,e){var r=dt(n),u=dt(t),a=[1,0,0],o=yt(r,u),l=mt(o,o),c=o[0],s=l-c*c;if(!s)return!e&&n;var f=i*l/s,h=-i*c/s,g=yt(a,o),p=xt(a,f),v=xt(o,h);Mt(p,v);var d=g,m=mt(p,d),y=mt(d,d),M=m*m-y*(mt(p,p)-1);if(!(0>M)){var x=Math.sqrt(M),b=xt(d,(-m-x)/y);if(Mt(b,p),b=_t(b),!e)return b;var _,w=n[0],S=t[0],k=n[1],N=t[1];w>S&&(_=w,w=S,S=_);var E=S-w,A=Ma(E-ja)<Pa,C=A||Pa>E;if(!A&&k>N&&(_=k,k=N,N=_),C?A?k+N>0^b[1]<(Ma(b[0]-w)<Pa?k:N):k<=b[1]&&b[1]<=N:E>ja^(w<=b[0]&&b[0]<=S)){var z=xt(d,(-m+x)/y);return Mt(z,p),[b,_t(z)]}}}function u(t,e){var r=a?n:ja-n,u=0;return-r>t?u|=1:t>r&&(u|=2),-r>e?u|=4:e>r&&(u|=8),u}var i=Math.cos(n),a=i>0,o=Ma(i)>Pa,l=ve(n,6*Ia);return Rt(t,e,l,a?[0,-n]:[-ja,n-ja])}function Yt(n,t,e,r){return function(u){var i,a=u.a,o=u.b,l=a.x,c=a.y,s=o.x,f=o.y,h=0,g=1,p=s-l,v=f-c;if(i=n-l,p||!(i>0)){if(i/=p,0>p){if(h>i)return;g>i&&(g=i)}else if(p>0){if(i>g)return;i>h&&(h=i)}if(i=e-l,p||!(0>i)){if(i/=p,0>p){if(i>g)return;i>h&&(h=i)}else if(p>0){if(h>i)return;g>i&&(g=i)}if(i=t-c,v||!(i>0)){if(i/=v,0>v){if(h>i)return;g>i&&(g=i)}else if(v>0){if(i>g)return;i>h&&(h=i)}if(i=r-c,v||!(0>i)){if(i/=v,0>v){if(i>g)return;i>h&&(h=i)}else if(v>0){if(h>i)return;g>i&&(g=i)}return h>0&&(u.a={x:l+h*p,y:c+h*v}),1>g&&(u.b={x:l+g*p,y:c+g*v}),u}}}}}}function Zt(n,t,e,r){function u(r,u){return Ma(r[0]-n)<Pa?u>0?0:3:Ma(r[0]-e)<Pa?u>0?2:1:Ma(r[1]-t)<Pa?u>0?1:0:u>0?3:2}function i(n,t){return a(n.x,t.x)}function a(n,t){var e=u(n,1),r=u(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(o){function l(n){for(var t=0,e=d.length,r=n[1],u=0;e>u;++u)for(var i,a=1,o=d[u],l=o.length,c=o[0];l>a;++a)i=o[a],c[1]<=r?i[1]>r&&Q(c,i,n)>0&&++t:i[1]<=r&&Q(c,i,n)<0&&--t,c=i;return 0!==t}function c(i,o,l,c){var s=0,f=0;if(null==i||(s=u(i,l))!==(f=u(o,l))||a(i,o)<0^l>0){do c.point(0===s||3===s?n:e,s>1?r:t);while((s=(s+l+4)%4)!==f)}else c.point(o[0],o[1])}function s(u,i){return u>=n&&e>=u&&i>=t&&r>=i}function f(n,t){s(n,t)&&o.point(n,t)}function h(){C.point=p,d&&d.push(m=[]),S=!0,w=!1,b=_=NaN}function g(){v&&(p(y,M),x&&w&&E.rejoin(),v.push(E.buffer())),C.point=f,w&&o.lineEnd()}function p(n,t){n=Math.max(-Ho,Math.min(Ho,n)),t=Math.max(-Ho,Math.min(Ho,t));var e=s(n,t);if(d&&m.push([n,t]),S)y=n,M=t,x=e,S=!1,e&&(o.lineStart(),o.point(n,t));else if(e&&w)o.point(n,t);else{var r={a:{x:b,y:_},b:{x:n,y:t}};A(r)?(w||(o.lineStart(),o.point(r.a.x,r.a.y)),o.point(r.b.x,r.b.y),e||o.lineEnd(),k=!1):e&&(o.lineStart(),o.point(n,t),k=!1)}b=n,_=t,w=e}var v,d,m,y,M,x,b,_,w,S,k,N=o,E=Pt(),A=Yt(n,t,e,r),C={point:f,lineStart:h,lineEnd:g,polygonStart:function(){o=E,v=[],d=[],k=!0},polygonEnd:function(){o=N,v=oa.merge(v);var t=l([n,r]),e=k&&t,u=v.length;(e||u)&&(o.polygonStart(),e&&(o.lineStart(),c(null,null,1,o),o.lineEnd()),u&&Lt(v,i,t,c,o),o.polygonEnd()),v=d=m=null}};return C}}function Vt(n){var t=0,e=ja/3,r=oe(n),u=r(t,e);return u.parallels=function(n){return arguments.length?r(t=n[0]*ja/180,e=n[1]*ja/180):[t/ja*180,e/ja*180]},u}function Xt(n,t){function e(n,t){var e=Math.sqrt(i-2*u*Math.sin(t))/u;return[e*Math.sin(n*=u),a-e*Math.cos(n)]}var r=Math.sin(n),u=(r+Math.sin(t))/2,i=1+r*(2*u-r),a=Math.sqrt(i)/u;return e.invert=function(n,t){var e=a-t;return[Math.atan2(n,e)/u,tn((i-(n*n+e*e)*u*u)/(2*u))]},e}function $t(){function n(n,t){Io+=u*n-r*t,r=n,u=t}var t,e,r,u;$o.point=function(i,a){$o.point=n,t=r=i,e=u=a},$o.lineEnd=function(){n(t,e)}}function Bt(n,t){Yo>n&&(Yo=n),n>Vo&&(Vo=n),Zo>t&&(Zo=t),t>Xo&&(Xo=t)}function Wt(){function n(n,t){a.push("M",n,",",t,i)}function t(n,t){a.push("M",n,",",t),o.point=e}function e(n,t){a.push("L",n,",",t)}function r(){o.point=n}function u(){a.push("Z")}var i=Jt(4.5),a=[],o={point:n,lineStart:function(){o.point=t},lineEnd:r,polygonStart:function(){o.lineEnd=u},polygonEnd:function(){o.lineEnd=r,o.point=n},pointRadius:function(n){return i=Jt(n),o},result:function(){if(a.length){var n=a.join("");return a=[],n}}};return o}function Jt(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function Gt(n,t){Co+=n,zo+=t,++Lo}function Kt(){function n(n,r){var u=n-t,i=r-e,a=Math.sqrt(u*u+i*i);qo+=a*(t+n)/2,To+=a*(e+r)/2,Ro+=a,Gt(t=n,e=r)}var t,e;Wo.point=function(r,u){Wo.point=n,Gt(t=r,e=u)}}function Qt(){Wo.point=Gt}function ne(){function n(n,t){var e=n-r,i=t-u,a=Math.sqrt(e*e+i*i);qo+=a*(r+n)/2,To+=a*(u+t)/2,Ro+=a,a=u*n-r*t,Do+=a*(r+n),Po+=a*(u+t),Uo+=3*a,Gt(r=n,u=t)}var t,e,r,u;Wo.point=function(i,a){Wo.point=n,Gt(t=r=i,e=u=a)},Wo.lineEnd=function(){n(t,e)}}function te(n){function t(t,e){n.moveTo(t+a,e),n.arc(t,e,a,0,Fa)}function e(t,e){n.moveTo(t,e),o.point=r}function r(t,e){n.lineTo(t,e)}function u(){o.point=t}function i(){n.closePath()}var a=4.5,o={point:t,lineStart:function(){o.point=e},lineEnd:u,polygonStart:function(){o.lineEnd=i},polygonEnd:function(){o.lineEnd=u,o.point=t},pointRadius:function(n){return a=n,o},result:b};return o}function ee(n){function t(n){return(o?r:e)(n)}function e(t){return ie(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){M=NaN,S.point=i,t.lineStart()}function i(e,r){var i=dt([e,r]),a=n(e,r);u(M,x,y,b,_,w,M=a[0],x=a[1],y=e,b=i[0],_=i[1],w=i[2],o,t),t.point(M,x)}function a(){S.point=e,t.lineEnd()}function l(){
r(),S.point=c,S.lineEnd=s}function c(n,t){i(f=n,h=t),g=M,p=x,v=b,d=_,m=w,S.point=i}function s(){u(M,x,y,b,_,w,g,p,f,v,d,m,o,t),S.lineEnd=a,a()}var f,h,g,p,v,d,m,y,M,x,b,_,w,S={point:e,lineStart:r,lineEnd:a,polygonStart:function(){t.polygonStart(),S.lineStart=l},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function u(t,e,r,o,l,c,s,f,h,g,p,v,d,m){var y=s-t,M=f-e,x=y*y+M*M;if(x>4*i&&d--){var b=o+g,_=l+p,w=c+v,S=Math.sqrt(b*b+_*_+w*w),k=Math.asin(w/=S),N=Ma(Ma(w)-1)<Pa||Ma(r-h)<Pa?(r+h)/2:Math.atan2(_,b),E=n(N,k),A=E[0],C=E[1],z=A-t,L=C-e,q=M*z-y*L;(q*q/x>i||Ma((y*z+M*L)/x-.5)>.3||a>o*g+l*p+c*v)&&(u(t,e,r,o,l,c,A,C,N,b/=S,_/=S,w,d,m),m.point(A,C),u(A,C,N,b,_,w,s,f,h,g,p,v,d,m))}}var i=.5,a=Math.cos(30*Ia),o=16;return t.precision=function(n){return arguments.length?(o=(i=n*n)>0&&16,t):Math.sqrt(i)},t}function re(n){var t=ee(function(t,e){return n([t*Ya,e*Ya])});return function(n){return le(t(n))}}function ue(n){this.stream=n}function ie(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function ae(n){return oe(function(){return n})()}function oe(n){function t(n){return n=o(n[0]*Ia,n[1]*Ia),[n[0]*h+l,c-n[1]*h]}function e(n){return n=o.invert((n[0]-l)/h,(c-n[1])/h),n&&[n[0]*Ya,n[1]*Ya]}function r(){o=Ct(a=fe(m,M,x),i);var n=i(v,d);return l=g-n[0]*h,c=p+n[1]*h,u()}function u(){return s&&(s.valid=!1,s=null),t}var i,a,o,l,c,s,f=ee(function(n,t){return n=i(n,t),[n[0]*h+l,c-n[1]*h]}),h=150,g=480,p=250,v=0,d=0,m=0,M=0,x=0,b=Fo,_=y,w=null,S=null;return t.stream=function(n){return s&&(s.valid=!1),s=le(b(a,f(_(n)))),s.valid=!0,s},t.clipAngle=function(n){return arguments.length?(b=null==n?(w=n,Fo):It((w=+n)*Ia),u()):w},t.clipExtent=function(n){return arguments.length?(S=n,_=n?Zt(n[0][0],n[0][1],n[1][0],n[1][1]):y,u()):S},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(v=n[0]%360*Ia,d=n[1]%360*Ia,r()):[v*Ya,d*Ya]},t.rotate=function(n){return arguments.length?(m=n[0]%360*Ia,M=n[1]%360*Ia,x=n.length>2?n[2]%360*Ia:0,r()):[m*Ya,M*Ya,x*Ya]},oa.rebind(t,f,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&e,r()}}function le(n){return ie(n,function(t,e){n.point(t*Ia,e*Ia)})}function ce(n,t){return[n,t]}function se(n,t){return[n>ja?n-Fa:-ja>n?n+Fa:n,t]}function fe(n,t,e){return n?t||e?Ct(ge(n),pe(t,e)):ge(n):t||e?pe(t,e):se}function he(n){return function(t,e){return t+=n,[t>ja?t-Fa:-ja>t?t+Fa:t,e]}}function ge(n){var t=he(n);return t.invert=he(-n),t}function pe(n,t){function e(n,t){var e=Math.cos(t),o=Math.cos(n)*e,l=Math.sin(n)*e,c=Math.sin(t),s=c*r+o*u;return[Math.atan2(l*i-s*a,o*r-c*u),tn(s*i+l*a)]}var r=Math.cos(n),u=Math.sin(n),i=Math.cos(t),a=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),o=Math.cos(n)*e,l=Math.sin(n)*e,c=Math.sin(t),s=c*i-l*a;return[Math.atan2(l*i+c*a,o*r+s*u),tn(s*r-o*u)]},e}function ve(n,t){var e=Math.cos(n),r=Math.sin(n);return function(u,i,a,o){var l=a*t;null!=u?(u=de(e,u),i=de(e,i),(a>0?i>u:u>i)&&(u+=a*Fa)):(u=n+a*Fa,i=n-.5*l);for(var c,s=u;a>0?s>i:i>s;s-=l)o.point((c=_t([e,-r*Math.cos(s),-r*Math.sin(s)]))[0],c[1])}}function de(n,t){var e=dt(t);e[0]-=n,bt(e);var r=nn(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Pa)%(2*Math.PI)}function me(n,t,e){var r=oa.range(n,t-Pa,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function ye(n,t,e){var r=oa.range(n,t-Pa,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function Me(n){return n.source}function xe(n){return n.target}function be(n,t,e,r){var u=Math.cos(t),i=Math.sin(t),a=Math.cos(r),o=Math.sin(r),l=u*Math.cos(n),c=u*Math.sin(n),s=a*Math.cos(e),f=a*Math.sin(e),h=2*Math.asin(Math.sqrt(an(r-t)+u*a*an(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*l+t*s,u=e*c+t*f,a=e*i+t*o;return[Math.atan2(u,r)*Ya,Math.atan2(a,Math.sqrt(r*r+u*u))*Ya]}:function(){return[n*Ya,t*Ya]};return p.distance=h,p}function _e(){function n(n,u){var i=Math.sin(u*=Ia),a=Math.cos(u),o=Ma((n*=Ia)-t),l=Math.cos(o);Jo+=Math.atan2(Math.sqrt((o=a*Math.sin(o))*o+(o=r*i-e*a*l)*o),e*i+r*a*l),t=n,e=i,r=a}var t,e,r;Go.point=function(u,i){t=u*Ia,e=Math.sin(i*=Ia),r=Math.cos(i),Go.point=n},Go.lineEnd=function(){Go.point=Go.lineEnd=b}}function we(n,t){function e(t,e){var r=Math.cos(t),u=Math.cos(e),i=n(r*u);return[i*u*Math.sin(t),i*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),u=t(r),i=Math.sin(u),a=Math.cos(u);return[Math.atan2(n*i,r*a),Math.asin(r&&e*i/r)]},e}function Se(n,t){function e(n,t){a>0?-Oa+Pa>t&&(t=-Oa+Pa):t>Oa-Pa&&(t=Oa-Pa);var e=a/Math.pow(u(t),i);return[e*Math.sin(i*n),a-e*Math.cos(i*n)]}var r=Math.cos(n),u=function(n){return Math.tan(ja/4+n/2)},i=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(u(t)/u(n)),a=r*Math.pow(u(n),i)/i;return i?(e.invert=function(n,t){var e=a-t,r=K(i)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/i,2*Math.atan(Math.pow(a/r,1/i))-Oa]},e):Ne}function ke(n,t){function e(n,t){var e=i-t;return[e*Math.sin(u*n),i-e*Math.cos(u*n)]}var r=Math.cos(n),u=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),i=r/u+n;return Ma(u)<Pa?ce:(e.invert=function(n,t){var e=i-t;return[Math.atan2(n,e)/u,i-K(u)*Math.sqrt(n*n+e*e)]},e)}function Ne(n,t){return[n,Math.log(Math.tan(ja/4+t/2))]}function Ee(n){var t,e=ae(n),r=e.scale,u=e.translate,i=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=u.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var a=i.apply(e,arguments);if(a===e){if(t=null==n){var o=ja*r(),l=u();i([[l[0]-o,l[1]-o],[l[0]+o,l[1]+o]])}}else t&&(a=null);return a},e.clipExtent(null)}function Ae(n,t){return[Math.log(Math.tan(ja/4+t/2)),-n]}function Ce(n){return n[0]}function ze(n){return n[1]}function Le(n){for(var t=n.length,e=[0,1],r=2,u=2;t>u;u++){for(;r>1&&Q(n[e[r-2]],n[e[r-1]],n[u])<=0;)--r;e[r++]=u}return e.slice(0,r)}function qe(n,t){return n[0]-t[0]||n[1]-t[1]}function Te(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Re(n,t,e,r){var u=n[0],i=e[0],a=t[0]-u,o=r[0]-i,l=n[1],c=e[1],s=t[1]-l,f=r[1]-c,h=(o*(l-c)-f*(u-i))/(f*a-o*s);return[u+h*a,l+h*s]}function De(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function Pe(){rr(this),this.edge=this.site=this.circle=null}function Ue(n){var t=cl.pop()||new Pe;return t.site=n,t}function je(n){Be(n),al.remove(n),cl.push(n),rr(n)}function Fe(n){var t=n.circle,e=t.x,r=t.cy,u={x:e,y:r},i=n.P,a=n.N,o=[n];je(n);for(var l=i;l.circle&&Ma(e-l.circle.x)<Pa&&Ma(r-l.circle.cy)<Pa;)i=l.P,o.unshift(l),je(l),l=i;o.unshift(l),Be(l);for(var c=a;c.circle&&Ma(e-c.circle.x)<Pa&&Ma(r-c.circle.cy)<Pa;)a=c.N,o.push(c),je(c),c=a;o.push(c),Be(c);var s,f=o.length;for(s=1;f>s;++s)c=o[s],l=o[s-1],nr(c.edge,l.site,c.site,u);l=o[0],c=o[f-1],c.edge=Ke(l.site,c.site,null,u),$e(l),$e(c)}function He(n){for(var t,e,r,u,i=n.x,a=n.y,o=al._;o;)if(r=Oe(o,a)-i,r>Pa)o=o.L;else{if(u=i-Ie(o,a),!(u>Pa)){r>-Pa?(t=o.P,e=o):u>-Pa?(t=o,e=o.N):t=e=o;break}if(!o.R){t=o;break}o=o.R}var l=Ue(n);if(al.insert(t,l),t||e){if(t===e)return Be(t),e=Ue(t.site),al.insert(l,e),l.edge=e.edge=Ke(t.site,l.site),$e(t),void $e(e);if(!e)return void(l.edge=Ke(t.site,l.site));Be(t),Be(e);var c=t.site,s=c.x,f=c.y,h=n.x-s,g=n.y-f,p=e.site,v=p.x-s,d=p.y-f,m=2*(h*d-g*v),y=h*h+g*g,M=v*v+d*d,x={x:(d*y-g*M)/m+s,y:(h*M-v*y)/m+f};nr(e.edge,c,p,x),l.edge=Ke(c,n,null,x),e.edge=Ke(n,p,null,x),$e(t),$e(e)}}function Oe(n,t){var e=n.site,r=e.x,u=e.y,i=u-t;if(!i)return r;var a=n.P;if(!a)return-(1/0);e=a.site;var o=e.x,l=e.y,c=l-t;if(!c)return o;var s=o-r,f=1/i-1/c,h=s/c;return f?(-h+Math.sqrt(h*h-2*f*(s*s/(-2*c)-l+c/2+u-i/2)))/f+r:(r+o)/2}function Ie(n,t){var e=n.N;if(e)return Oe(e,t);var r=n.site;return r.y===t?r.x:1/0}function Ye(n){this.site=n,this.edges=[]}function Ze(n){for(var t,e,r,u,i,a,o,l,c,s,f=n[0][0],h=n[1][0],g=n[0][1],p=n[1][1],v=il,d=v.length;d--;)if(i=v[d],i&&i.prepare())for(o=i.edges,l=o.length,a=0;l>a;)s=o[a].end(),r=s.x,u=s.y,c=o[++a%l].start(),t=c.x,e=c.y,(Ma(r-t)>Pa||Ma(u-e)>Pa)&&(o.splice(a,0,new tr(Qe(i.site,s,Ma(r-f)<Pa&&p-u>Pa?{x:f,y:Ma(t-f)<Pa?e:p}:Ma(u-p)<Pa&&h-r>Pa?{x:Ma(e-p)<Pa?t:h,y:p}:Ma(r-h)<Pa&&u-g>Pa?{x:h,y:Ma(t-h)<Pa?e:g}:Ma(u-g)<Pa&&r-f>Pa?{x:Ma(e-g)<Pa?t:f,y:g}:null),i.site,null)),++l)}function Ve(n,t){return t.angle-n.angle}function Xe(){rr(this),this.x=this.y=this.arc=this.site=this.cy=null}function $e(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,u=n.site,i=e.site;if(r!==i){var a=u.x,o=u.y,l=r.x-a,c=r.y-o,s=i.x-a,f=i.y-o,h=2*(l*f-c*s);if(!(h>=-Ua)){var g=l*l+c*c,p=s*s+f*f,v=(f*g-c*p)/h,d=(l*p-s*g)/h,f=d+o,m=sl.pop()||new Xe;m.arc=n,m.site=u,m.x=v+a,m.y=f+Math.sqrt(v*v+d*d),m.cy=f,n.circle=m;for(var y=null,M=ll._;M;)if(m.y<M.y||m.y===M.y&&m.x<=M.x){if(!M.L){y=M.P;break}M=M.L}else{if(!M.R){y=M;break}M=M.R}ll.insert(y,m),y||(ol=m)}}}}function Be(n){var t=n.circle;t&&(t.P||(ol=t.N),ll.remove(t),sl.push(t),rr(t),n.circle=null)}function We(n){for(var t,e=ul,r=Yt(n[0][0],n[0][1],n[1][0],n[1][1]),u=e.length;u--;)t=e[u],(!Je(t,n)||!r(t)||Ma(t.a.x-t.b.x)<Pa&&Ma(t.a.y-t.b.y)<Pa)&&(t.a=t.b=null,e.splice(u,1))}function Je(n,t){var e=n.b;if(e)return!0;var r,u,i=n.a,a=t[0][0],o=t[1][0],l=t[0][1],c=t[1][1],s=n.l,f=n.r,h=s.x,g=s.y,p=f.x,v=f.y,d=(h+p)/2,m=(g+v)/2;if(v===g){if(a>d||d>=o)return;if(h>p){if(i){if(i.y>=c)return}else i={x:d,y:l};e={x:d,y:c}}else{if(i){if(i.y<l)return}else i={x:d,y:c};e={x:d,y:l}}}else if(r=(h-p)/(v-g),u=m-r*d,-1>r||r>1)if(h>p){if(i){if(i.y>=c)return}else i={x:(l-u)/r,y:l};e={x:(c-u)/r,y:c}}else{if(i){if(i.y<l)return}else i={x:(c-u)/r,y:c};e={x:(l-u)/r,y:l}}else if(v>g){if(i){if(i.x>=o)return}else i={x:a,y:r*a+u};e={x:o,y:r*o+u}}else{if(i){if(i.x<a)return}else i={x:o,y:r*o+u};e={x:a,y:r*a+u}}return n.a=i,n.b=e,!0}function Ge(n,t){this.l=n,this.r=t,this.a=this.b=null}function Ke(n,t,e,r){var u=new Ge(n,t);return ul.push(u),e&&nr(u,n,t,e),r&&nr(u,t,n,r),il[n.i].edges.push(new tr(u,n,t)),il[t.i].edges.push(new tr(u,t,n)),u}function Qe(n,t,e){var r=new Ge(n,null);return r.a=t,r.b=e,ul.push(r),r}function nr(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function tr(n,t,e){var r=n.a,u=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(u.x-r.x,r.y-u.y):Math.atan2(r.x-u.x,u.y-r.y)}function er(){this._=null}function rr(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function ur(n,t){var e=t,r=t.R,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function ir(n,t){var e=t,r=t.L,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function ar(n){for(;n.L;)n=n.L;return n}function or(n,t){var e,r,u,i=n.sort(lr).pop();for(ul=[],il=new Array(n.length),al=new er,ll=new er;;)if(u=ol,i&&(!u||i.y<u.y||i.y===u.y&&i.x<u.x))(i.x!==e||i.y!==r)&&(il[i.i]=new Ye(i),He(i),e=i.x,r=i.y),i=n.pop();else{if(!u)break;Fe(u.arc)}t&&(We(t),Ze(t));var a={cells:il,edges:ul};return al=ll=ul=il=null,a}function lr(n,t){return t.y-n.y||t.x-n.x}function cr(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function sr(n){return n.x}function fr(n){return n.y}function hr(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function gr(n,t,e,r,u,i){if(!n(t,e,r,u,i)){var a=.5*(e+u),o=.5*(r+i),l=t.nodes;l[0]&&gr(n,l[0],e,r,a,o),l[1]&&gr(n,l[1],a,r,u,o),l[2]&&gr(n,l[2],e,o,a,i),l[3]&&gr(n,l[3],a,o,u,i)}}function pr(n,t,e,r,u,i,a){var o,l=1/0;return function c(n,s,f,h,g){if(!(s>i||f>a||r>h||u>g)){if(p=n.point){var p,v=t-n.x,d=e-n.y,m=v*v+d*d;if(l>m){var y=Math.sqrt(l=m);r=t-y,u=e-y,i=t+y,a=e+y,o=p}}for(var M=n.nodes,x=.5*(s+h),b=.5*(f+g),_=t>=x,w=e>=b,S=w<<1|_,k=S+4;k>S;++S)if(n=M[3&S])switch(3&S){case 0:c(n,s,f,x,b);break;case 1:c(n,x,f,h,b);break;case 2:c(n,s,b,x,g);break;case 3:c(n,x,b,h,g)}}}(n,r,u,i,a),o}function vr(n,t){n=oa.rgb(n),t=oa.rgb(t);var e=n.r,r=n.g,u=n.b,i=t.r-e,a=t.g-r,o=t.b-u;return function(n){return"#"+bn(Math.round(e+i*n))+bn(Math.round(r+a*n))+bn(Math.round(u+o*n))}}function dr(n,t){var e,r={},u={};for(e in n)e in t?r[e]=Mr(n[e],t[e]):u[e]=n[e];for(e in t)e in n||(u[e]=t[e]);return function(n){for(e in r)u[e]=r[e](n);return u}}function mr(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function yr(n,t){var e,r,u,i=hl.lastIndex=gl.lastIndex=0,a=-1,o=[],l=[];for(n+="",t+="";(e=hl.exec(n))&&(r=gl.exec(t));)(u=r.index)>i&&(u=t.slice(i,u),o[a]?o[a]+=u:o[++a]=u),(e=e[0])===(r=r[0])?o[a]?o[a]+=r:o[++a]=r:(o[++a]=null,l.push({i:a,x:mr(e,r)})),i=gl.lastIndex;return i<t.length&&(u=t.slice(i),o[a]?o[a]+=u:o[++a]=u),o.length<2?l[0]?(t=l[0].x,function(n){return t(n)+""}):function(){return t}:(t=l.length,function(n){for(var e,r=0;t>r;++r)o[(e=l[r]).i]=e.x(n);return o.join("")})}function Mr(n,t){for(var e,r=oa.interpolators.length;--r>=0&&!(e=oa.interpolators[r](n,t)););return e}function xr(n,t){var e,r=[],u=[],i=n.length,a=t.length,o=Math.min(n.length,t.length);for(e=0;o>e;++e)r.push(Mr(n[e],t[e]));for(;i>e;++e)u[e]=n[e];for(;a>e;++e)u[e]=t[e];return function(n){for(e=0;o>e;++e)u[e]=r[e](n);return u}}function br(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function _r(n){return function(t){return 1-n(1-t)}}function wr(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function Sr(n){return n*n}function kr(n){return n*n*n}function Nr(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function Er(n){return function(t){return Math.pow(t,n)}}function Ar(n){return 1-Math.cos(n*Oa)}function Cr(n){return Math.pow(2,10*(n-1))}function zr(n){return 1-Math.sqrt(1-n*n)}function Lr(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/Fa*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*Fa/t)}}function qr(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function Tr(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Rr(n,t){n=oa.hcl(n),t=oa.hcl(t);var e=n.h,r=n.c,u=n.l,i=t.h-e,a=t.c-r,o=t.l-u;return isNaN(a)&&(a=0,r=isNaN(r)?t.c:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return fn(e+i*n,r+a*n,u+o*n)+""}}function Dr(n,t){n=oa.hsl(n),t=oa.hsl(t);var e=n.h,r=n.s,u=n.l,i=t.h-e,a=t.s-r,o=t.l-u;return isNaN(a)&&(a=0,r=isNaN(r)?t.s:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return cn(e+i*n,r+a*n,u+o*n)+""}}function Pr(n,t){n=oa.lab(n),t=oa.lab(t);var e=n.l,r=n.a,u=n.b,i=t.l-e,a=t.a-r,o=t.b-u;return function(n){return gn(e+i*n,r+a*n,u+o*n)+""}}function Ur(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function jr(n){var t=[n.a,n.b],e=[n.c,n.d],r=Hr(t),u=Fr(t,e),i=Hr(Or(e,t,-u))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,u*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Ya,this.translate=[n.e,n.f],this.scale=[r,i],this.skew=i?Math.atan2(u,i)*Ya:0}function Fr(n,t){return n[0]*t[0]+n[1]*t[1]}function Hr(n){var t=Math.sqrt(Fr(n,n));return t&&(n[0]/=t,n[1]/=t),t}function Or(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Ir(n){return n.length?n.pop()+",":""}function Yr(n,t,e,r){if(n[0]!==t[0]||n[1]!==t[1]){var u=e.push("translate(",null,",",null,")");r.push({i:u-4,x:mr(n[0],t[0])},{i:u-2,x:mr(n[1],t[1])})}else(t[0]||t[1])&&e.push("translate("+t+")")}function Zr(n,t,e,r){n!==t?(n-t>180?t+=360:t-n>180&&(n+=360),r.push({i:e.push(Ir(e)+"rotate(",null,")")-2,x:mr(n,t)})):t&&e.push(Ir(e)+"rotate("+t+")")}function Vr(n,t,e,r){n!==t?r.push({i:e.push(Ir(e)+"skewX(",null,")")-2,x:mr(n,t)}):t&&e.push(Ir(e)+"skewX("+t+")")}function Xr(n,t,e,r){if(n[0]!==t[0]||n[1]!==t[1]){var u=e.push(Ir(e)+"scale(",null,",",null,")");r.push({i:u-4,x:mr(n[0],t[0])},{i:u-2,x:mr(n[1],t[1])})}else(1!==t[0]||1!==t[1])&&e.push(Ir(e)+"scale("+t+")")}function $r(n,t){var e=[],r=[];return n=oa.transform(n),t=oa.transform(t),Yr(n.translate,t.translate,e,r),Zr(n.rotate,t.rotate,e,r),Vr(n.skew,t.skew,e,r),Xr(n.scale,t.scale,e,r),n=t=null,function(n){for(var t,u=-1,i=r.length;++u<i;)e[(t=r[u]).i]=t.x(n);return e.join("")}}function Br(n,t){return t=(t-=n=+n)||1/t,function(e){return(e-n)/t}}function Wr(n,t){return t=(t-=n=+n)||1/t,function(e){return Math.max(0,Math.min(1,(e-n)/t))}}function Jr(n){for(var t=n.source,e=n.target,r=Kr(t,e),u=[t];t!==r;)t=t.parent,u.push(t);for(var i=u.length;e!==r;)u.splice(i,0,e),e=e.parent;return u}function Gr(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Kr(n,t){if(n===t)return n;for(var e=Gr(n),r=Gr(t),u=e.pop(),i=r.pop(),a=null;u===i;)a=u,u=e.pop(),i=r.pop();return a}function Qr(n){n.fixed|=2}function nu(n){n.fixed&=-7}function tu(n){n.fixed|=4,n.px=n.x,n.py=n.y}function eu(n){n.fixed&=-5}function ru(n,t,e){var r=0,u=0;if(n.charge=0,!n.leaf)for(var i,a=n.nodes,o=a.length,l=-1;++l<o;)i=a[l],null!=i&&(ru(i,t,e),n.charge+=i.charge,r+=i.charge*i.cx,u+=i.charge*i.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var c=t*e[n.point.index];n.charge+=n.pointCharge=c,r+=c*n.point.x,u+=c*n.point.y}n.cx=r/n.charge,n.cy=u/n.charge}function uu(n,t){return oa.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=su,n}function iu(n,t){for(var e=[n];null!=(n=e.pop());)if(t(n),(u=n.children)&&(r=u.length))for(var r,u;--r>=0;)e.push(u[r])}function au(n,t){for(var e=[n],r=[];null!=(n=e.pop());)if(r.push(n),(i=n.children)&&(u=i.length))for(var u,i,a=-1;++a<u;)e.push(i[a]);for(;null!=(n=r.pop());)t(n)}function ou(n){return n.children}function lu(n){return n.value}function cu(n,t){return t.value-n.value}function su(n){return oa.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function fu(n){return n.x}function hu(n){return n.y}function gu(n,t,e){n.y0=t,n.y=e}function pu(n){return oa.range(n.length)}function vu(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function du(n){for(var t,e=1,r=0,u=n[0][1],i=n.length;i>e;++e)(t=n[e][1])>u&&(r=e,u=t);return r}function mu(n){return n.reduce(yu,0)}function yu(n,t){return n+t[1]}function Mu(n,t){return xu(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function xu(n,t){for(var e=-1,r=+n[0],u=(n[1]-r)/t,i=[];++e<=t;)i[e]=u*e+r;return i}function bu(n){return[oa.min(n),oa.max(n)]}function _u(n,t){return n.value-t.value}function wu(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function Su(n,t){n._pack_next=t,t._pack_prev=n}function ku(n,t){var e=t.x-n.x,r=t.y-n.y,u=n.r+t.r;return.999*u*u>e*e+r*r}function Nu(n){function t(n){s=Math.min(n.x-n.r,s),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(c=e.length)){var e,r,u,i,a,o,l,c,s=1/0,f=-(1/0),h=1/0,g=-(1/0);if(e.forEach(Eu),r=e[0],r.x=-r.r,r.y=0,t(r),c>1&&(u=e[1],u.x=u.r,u.y=0,t(u),c>2))for(i=e[2],zu(r,u,i),t(i),wu(r,i),r._pack_prev=i,wu(i,u),u=r._pack_next,a=3;c>a;a++){zu(r,u,i=e[a]);var p=0,v=1,d=1;for(o=u._pack_next;o!==u;o=o._pack_next,v++)if(ku(o,i)){p=1;break}if(1==p)for(l=r._pack_prev;l!==o._pack_prev&&!ku(l,i);l=l._pack_prev,d++);p?(d>v||v==d&&u.r<r.r?Su(r,u=o):Su(r=l,u),a--):(wu(r,i),u=i,t(i))}var m=(s+f)/2,y=(h+g)/2,M=0;for(a=0;c>a;a++)i=e[a],i.x-=m,i.y-=y,M=Math.max(M,i.r+Math.sqrt(i.x*i.x+i.y*i.y));n.r=M,e.forEach(Au)}}function Eu(n){n._pack_next=n._pack_prev=n}function Au(n){delete n._pack_next,delete n._pack_prev}function Cu(n,t,e,r){var u=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,u)for(var i=-1,a=u.length;++i<a;)Cu(u[i],t,e,r)}function zu(n,t,e){var r=n.r+e.r,u=t.x-n.x,i=t.y-n.y;if(r&&(u||i)){var a=t.r+e.r,o=u*u+i*i;a*=a,r*=r;var l=.5+(r-a)/(2*o),c=Math.sqrt(Math.max(0,2*a*(r+o)-(r-=o)*r-a*a))/(2*o);e.x=n.x+l*u+c*i,e.y=n.y+l*i-c*u}else e.x=n.x+r,e.y=n.y}function Lu(n,t){return n.parent==t.parent?1:2}function qu(n){var t=n.children;return t.length?t[0]:n.t}function Tu(n){var t,e=n.children;return(t=e.length)?e[t-1]:n.t}function Ru(n,t,e){var r=e/(t.i-n.i);t.c-=r,t.s+=e,n.c+=r,t.z+=e,t.m+=e}function Du(n){for(var t,e=0,r=0,u=n.children,i=u.length;--i>=0;)t=u[i],t.z+=e,t.m+=e,e+=t.s+(r+=t.c)}function Pu(n,t,e){return n.a.parent===t.parent?n.a:e}function Uu(n){return 1+oa.max(n,function(n){return n.y})}function ju(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Fu(n){var t=n.children;return t&&t.length?Fu(t[0]):n}function Hu(n){var t,e=n.children;return e&&(t=e.length)?Hu(e[t-1]):n}function Ou(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Iu(n,t){var e=n.x+t[3],r=n.y+t[0],u=n.dx-t[1]-t[3],i=n.dy-t[0]-t[2];return 0>u&&(e+=u/2,u=0),0>i&&(r+=i/2,i=0),{x:e,y:r,dx:u,dy:i}}function Yu(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Zu(n){return n.rangeExtent?n.rangeExtent():Yu(n.range())}function Vu(n,t,e,r){var u=e(n[0],n[1]),i=r(t[0],t[1]);return function(n){return i(u(n))}}function Xu(n,t){var e,r=0,u=n.length-1,i=n[r],a=n[u];return i>a&&(e=r,r=u,u=e,e=i,i=a,a=e),n[r]=t.floor(i),n[u]=t.ceil(a),n}function $u(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:Sl}function Bu(n,t,e,r){var u=[],i=[],a=0,o=Math.min(n.length,t.length)-1;for(n[o]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++a<=o;)u.push(e(n[a-1],n[a])),i.push(r(t[a-1],t[a]));return function(t){var e=oa.bisect(n,t,1,o)-1;return i[e](u[e](t))}}function Wu(n,t,e,r){function u(){var u=Math.min(n.length,t.length)>2?Bu:Vu,l=r?Wr:Br;return a=u(n,t,l,e),o=u(t,n,l,Mr),i}function i(n){return a(n)}var a,o;return i.invert=function(n){return o(n)},i.domain=function(t){return arguments.length?(n=t.map(Number),u()):n},i.range=function(n){return arguments.length?(t=n,u()):t},i.rangeRound=function(n){return i.range(n).interpolate(Ur)},i.clamp=function(n){return arguments.length?(r=n,u()):r},i.interpolate=function(n){return arguments.length?(e=n,u()):e},i.ticks=function(t){return Qu(n,t)},i.tickFormat=function(t,e){return ni(n,t,e)},i.nice=function(t){return Gu(n,t),u()},i.copy=function(){return Wu(n,t,e,r)},u()}function Ju(n,t){return oa.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Gu(n,t){return Xu(n,$u(Ku(n,t)[2])),Xu(n,$u(Ku(n,t)[2])),n}function Ku(n,t){null==t&&(t=10);var e=Yu(n),r=e[1]-e[0],u=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),i=t/r*u;return.15>=i?u*=10:.35>=i?u*=5:.75>=i&&(u*=2),e[0]=Math.ceil(e[0]/u)*u,e[1]=Math.floor(e[1]/u)*u+.5*u,e[2]=u,e}function Qu(n,t){return oa.range.apply(oa,Ku(n,t))}function ni(n,t,e){var r=Ku(n,t);if(e){var u=fo.exec(e);if(u.shift(),"s"===u[8]){var i=oa.formatPrefix(Math.max(Ma(r[0]),Ma(r[1])));return u[7]||(u[7]="."+ti(i.scale(r[2]))),u[8]="f",e=oa.format(u.join("")),function(n){return e(i.scale(n))+i.symbol}}u[7]||(u[7]="."+ei(u[8],r)),e=u.join("")}else e=",."+ti(r[2])+"f";return oa.format(e)}function ti(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function ei(n,t){var e=ti(t[2]);return n in kl?Math.abs(e-ti(Math.max(Ma(t[0]),Ma(t[1]))))+ +("e"!==n):e-2*("%"===n)}function ri(n,t,e,r){function u(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function i(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function a(t){return n(u(t))}return a.invert=function(t){return i(n.invert(t))},a.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(u)),a):r},a.base=function(e){return arguments.length?(t=+e,n.domain(r.map(u)),a):t},a.nice=function(){var t=Xu(r.map(u),e?Math:El);return n.domain(t),r=t.map(i),a},a.ticks=function(){var n=Yu(r),a=[],o=n[0],l=n[1],c=Math.floor(u(o)),s=Math.ceil(u(l)),f=t%1?2:t;if(isFinite(s-c)){if(e){for(;s>c;c++)for(var h=1;f>h;h++)a.push(i(c)*h);a.push(i(c))}else for(a.push(i(c));c++<s;)for(var h=f-1;h>0;h--)a.push(i(c)*h);for(c=0;a[c]<o;c++);for(s=a.length;a[s-1]>l;s--);a=a.slice(c,s)}return a},a.tickFormat=function(n,e){if(!arguments.length)return Nl;arguments.length<2?e=Nl:"function"!=typeof e&&(e=oa.format(e));var r=Math.max(1,t*n/a.ticks().length);return function(n){var a=n/i(Math.round(u(n)));return t-.5>a*t&&(a*=t),r>=a?e(n):""}},a.copy=function(){return ri(n.copy(),t,e,r)},Ju(a,n)}function ui(n,t,e){function r(t){return n(u(t))}var u=ii(t),i=ii(1/t);return r.invert=function(t){return i(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(u)),r):e},r.ticks=function(n){return Qu(e,n)},r.tickFormat=function(n,t){return ni(e,n,t)},r.nice=function(n){return r.domain(Gu(e,n))},r.exponent=function(a){return arguments.length?(u=ii(t=a),i=ii(1/t),n.domain(e.map(u)),r):t},r.copy=function(){return ui(n.copy(),t,e)},Ju(r,n)}function ii(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function ai(n,t){function e(e){return i[((u.get(e)||("range"===t.t?u.set(e,n.push(e)):NaN))-1)%i.length]}function r(t,e){return oa.range(n.length).map(function(n){return t+e*n})}var u,i,a;return e.domain=function(r){if(!arguments.length)return n;n=[],u=new c;for(var i,a=-1,o=r.length;++a<o;)u.has(i=r[a])||u.set(i,n.push(i));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(i=n,a=0,t={t:"range",a:arguments},e):i},e.rangePoints=function(u,o){arguments.length<2&&(o=0);var l=u[0],c=u[1],s=n.length<2?(l=(l+c)/2,0):(c-l)/(n.length-1+o);return i=r(l+s*o/2,s),a=0,t={t:"rangePoints",a:arguments},e},e.rangeRoundPoints=function(u,o){arguments.length<2&&(o=0);var l=u[0],c=u[1],s=n.length<2?(l=c=Math.round((l+c)/2),0):(c-l)/(n.length-1+o)|0;return i=r(l+Math.round(s*o/2+(c-l-(n.length-1+o)*s)/2),s),a=0,t={t:"rangeRoundPoints",a:arguments},e},e.rangeBands=function(u,o,l){arguments.length<2&&(o=0),arguments.length<3&&(l=o);var c=u[1]<u[0],s=u[c-0],f=u[1-c],h=(f-s)/(n.length-o+2*l);return i=r(s+h*l,h),c&&i.reverse(),a=h*(1-o),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(u,o,l){arguments.length<2&&(o=0),arguments.length<3&&(l=o);var c=u[1]<u[0],s=u[c-0],f=u[1-c],h=Math.floor((f-s)/(n.length-o+2*l));return i=r(s+Math.round((f-s-(n.length-o)*h)/2),h),c&&i.reverse(),a=Math.round(h*(1-o)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return a},e.rangeExtent=function(){return Yu(t.a[0])},e.copy=function(){return ai(n,t)},e.domain(n)}function oi(n,t){function i(){var e=0,r=t.length;for(o=[];++e<r;)o[e-1]=oa.quantile(n,e/r);return a}function a(n){return isNaN(n=+n)?void 0:t[oa.bisect(o,n)]}var o;return a.domain=function(t){return arguments.length?(n=t.map(r).filter(u).sort(e),i()):n},a.range=function(n){return arguments.length?(t=n,i()):t},a.quantiles=function(){return o},a.invertExtent=function(e){return e=t.indexOf(e),0>e?[NaN,NaN]:[e>0?o[e-1]:n[0],e<o.length?o[e]:n[n.length-1]]},a.copy=function(){return oi(n,t)},i()}function li(n,t,e){function r(t){return e[Math.max(0,Math.min(a,Math.floor(i*(t-n))))]}function u(){return i=e.length/(t-n),a=e.length-1,r}var i,a;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],u()):[n,t]},r.range=function(n){return arguments.length?(e=n,u()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?NaN:t/i+n,[t,t+1/i]},r.copy=function(){return li(n,t,e)},u()}function ci(n,t){function e(e){return e>=e?t[oa.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return ci(n,t)},e}function si(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Qu(n,t)},t.tickFormat=function(t,e){return ni(n,t,e)},t.copy=function(){return si(n)},t}function fi(){return 0}function hi(n){return n.innerRadius}function gi(n){return n.outerRadius}function pi(n){return n.startAngle}function vi(n){return n.endAngle}function di(n){return n&&n.padAngle}function mi(n,t,e,r){return(n-e)*t-(t-r)*n>0?0:1}function yi(n,t,e,r,u){var i=n[0]-t[0],a=n[1]-t[1],o=(u?r:-r)/Math.sqrt(i*i+a*a),l=o*a,c=-o*i,s=n[0]+l,f=n[1]+c,h=t[0]+l,g=t[1]+c,p=(s+h)/2,v=(f+g)/2,d=h-s,m=g-f,y=d*d+m*m,M=e-r,x=s*g-h*f,b=(0>m?-1:1)*Math.sqrt(Math.max(0,M*M*y-x*x)),_=(x*m-d*b)/y,w=(-x*d-m*b)/y,S=(x*m+d*b)/y,k=(-x*d+m*b)/y,N=_-p,E=w-v,A=S-p,C=k-v;return N*N+E*E>A*A+C*C&&(_=S,w=k),[[_-l,w-c],[_*e/M,w*e/M]]}function Mi(n){function t(t){function a(){c.push("M",i(n(s),o))}for(var l,c=[],s=[],f=-1,h=t.length,g=En(e),p=En(r);++f<h;)u.call(this,l=t[f],f)?s.push([+g.call(this,l,f),+p.call(this,l,f)]):s.length&&(a(),s=[]);return s.length&&a(),c.length?c.join(""):null}var e=Ce,r=ze,u=zt,i=xi,a=i.key,o=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(u=n,t):u},t.interpolate=function(n){return arguments.length?(a="function"==typeof n?i=n:(i=Tl.get(n)||xi).key,t):a},t.tension=function(n){return arguments.length?(o=n,t):o},t}function xi(n){return n.length>1?n.join("L"):n+"Z"}function bi(n){return n.join("L")+"Z"}function _i(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&u.push("H",r[0]),u.join("")}function wi(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("V",(r=n[t])[1],"H",r[0]);return u.join("")}function Si(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r=n[t])[0],"V",r[1]);return u.join("")}function ki(n,t){return n.length<4?xi(n):n[1]+Ai(n.slice(1,-1),Ci(n,t))}function Ni(n,t){return n.length<3?bi(n):n[0]+Ai((n.push(n[0]),n),Ci([n[n.length-2]].concat(n,[n[1]]),t))}function Ei(n,t){return n.length<3?xi(n):n[0]+Ai(n,Ci(n,t))}function Ai(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return xi(n);var e=n.length!=t.length,r="",u=n[0],i=n[1],a=t[0],o=a,l=1;if(e&&(r+="Q"+(i[0]-2*a[0]/3)+","+(i[1]-2*a[1]/3)+","+i[0]+","+i[1],u=n[1],l=2),t.length>1){o=t[1],i=n[l],l++,r+="C"+(u[0]+a[0])+","+(u[1]+a[1])+","+(i[0]-o[0])+","+(i[1]-o[1])+","+i[0]+","+i[1];for(var c=2;c<t.length;c++,l++)i=n[l],o=t[c],r+="S"+(i[0]-o[0])+","+(i[1]-o[1])+","+i[0]+","+i[1]}if(e){var s=n[l];r+="Q"+(i[0]+2*o[0]/3)+","+(i[1]+2*o[1]/3)+","+s[0]+","+s[1]}return r}function Ci(n,t){for(var e,r=[],u=(1-t)/2,i=n[0],a=n[1],o=1,l=n.length;++o<l;)e=i,i=a,a=n[o],r.push([u*(a[0]-e[0]),u*(a[1]-e[1])]);return r}function zi(n){if(n.length<3)return xi(n);var t=1,e=n.length,r=n[0],u=r[0],i=r[1],a=[u,u,u,(r=n[1])[0]],o=[i,i,i,r[1]],l=[u,",",i,"L",Ri(Pl,a),",",Ri(Pl,o)];for(n.push(n[e-1]);++t<=e;)r=n[t],a.shift(),a.push(r[0]),o.shift(),o.push(r[1]),Di(l,a,o);return n.pop(),l.push("L",r),l.join("")}function Li(n){if(n.length<4)return xi(n);for(var t,e=[],r=-1,u=n.length,i=[0],a=[0];++r<3;)t=n[r],i.push(t[0]),a.push(t[1]);for(e.push(Ri(Pl,i)+","+Ri(Pl,a)),--r;++r<u;)t=n[r],i.shift(),i.push(t[0]),a.shift(),a.push(t[1]),Di(e,i,a);return e.join("")}function qi(n){for(var t,e,r=-1,u=n.length,i=u+4,a=[],o=[];++r<4;)e=n[r%u],a.push(e[0]),o.push(e[1]);for(t=[Ri(Pl,a),",",Ri(Pl,o)],--r;++r<i;)e=n[r%u],a.shift(),a.push(e[0]),o.shift(),o.push(e[1]),Di(t,a,o);return t.join("")}function Ti(n,t){var e=n.length-1;if(e)for(var r,u,i=n[0][0],a=n[0][1],o=n[e][0]-i,l=n[e][1]-a,c=-1;++c<=e;)r=n[c],u=c/e,r[0]=t*r[0]+(1-t)*(i+u*o),r[1]=t*r[1]+(1-t)*(a+u*l);return zi(n)}function Ri(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function Di(n,t,e){n.push("C",Ri(Rl,t),",",Ri(Rl,e),",",Ri(Dl,t),",",Ri(Dl,e),",",Ri(Pl,t),",",Ri(Pl,e))}function Pi(n,t){return(t[1]-n[1])/(t[0]-n[0])}function Ui(n){for(var t=0,e=n.length-1,r=[],u=n[0],i=n[1],a=r[0]=Pi(u,i);++t<e;)r[t]=(a+(a=Pi(u=i,i=n[t+1])))/2;return r[t]=a,r}function ji(n){for(var t,e,r,u,i=[],a=Ui(n),o=-1,l=n.length-1;++o<l;)t=Pi(n[o],n[o+1]),Ma(t)<Pa?a[o]=a[o+1]=0:(e=a[o]/t,r=a[o+1]/t,u=e*e+r*r,u>9&&(u=3*t/Math.sqrt(u),a[o]=u*e,a[o+1]=u*r));for(o=-1;++o<=l;)u=(n[Math.min(l,o+1)][0]-n[Math.max(0,o-1)][0])/(6*(1+a[o]*a[o])),i.push([u||0,a[o]*u||0]);return i}function Fi(n){return n.length<3?xi(n):n[0]+Ai(n,ji(n))}function Hi(n){for(var t,e,r,u=-1,i=n.length;++u<i;)t=n[u],e=t[0],r=t[1]-Oa,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function Oi(n){function t(t){function l(){v.push("M",o(n(m),f),s,c(n(d.reverse()),f),"Z")}for(var h,g,p,v=[],d=[],m=[],y=-1,M=t.length,x=En(e),b=En(u),_=e===r?function(){
return g}:En(r),w=u===i?function(){return p}:En(i);++y<M;)a.call(this,h=t[y],y)?(d.push([g=+x.call(this,h,y),p=+b.call(this,h,y)]),m.push([+_.call(this,h,y),+w.call(this,h,y)])):d.length&&(l(),d=[],m=[]);return d.length&&l(),v.length?v.join(""):null}var e=Ce,r=Ce,u=0,i=ze,a=zt,o=xi,l=o.key,c=o,s="L",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(u=i=n,t):i},t.y0=function(n){return arguments.length?(u=n,t):u},t.y1=function(n){return arguments.length?(i=n,t):i},t.defined=function(n){return arguments.length?(a=n,t):a},t.interpolate=function(n){return arguments.length?(l="function"==typeof n?o=n:(o=Tl.get(n)||xi).key,c=o.reverse||o,s=o.closed?"M":"L",t):l},t.tension=function(n){return arguments.length?(f=n,t):f},t}function Ii(n){return n.radius}function Yi(n){return[n.x,n.y]}function Zi(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]-Oa;return[e*Math.cos(r),e*Math.sin(r)]}}function Vi(){return 64}function Xi(){return"circle"}function $i(n){var t=Math.sqrt(n/ja);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Bi(n){return function(){var t,e,r;(t=this[n])&&(r=t[e=t.active])&&(r.timer.c=null,r.timer.t=NaN,--t.count?delete t[e]:delete this[n],t.active+=.5,r.event&&r.event.interrupt.call(this,this.__data__,r.index))}}function Wi(n,t,e){return Sa(n,Yl),n.namespace=t,n.id=e,n}function Ji(n,t,e,r){var u=n.id,i=n.namespace;return Y(n,"function"==typeof e?function(n,a,o){n[i][u].tween.set(t,r(e.call(n,n.__data__,a,o)))}:(e=r(e),function(n){n[i][u].tween.set(t,e)}))}function Gi(n){return null==n&&(n=""),function(){this.textContent=n}}function Ki(n){return null==n?"__transition__":"__transition_"+n+"__"}function Qi(n,t,e,r,u){function i(n){var t=v.delay;return s.t=t+l,n>=t?a(n-t):void(s.c=a)}function a(e){var u=p.active,i=p[u];i&&(i.timer.c=null,i.timer.t=NaN,--p.count,delete p[u],i.event&&i.event.interrupt.call(n,n.__data__,i.index));for(var a in p)if(r>+a){var c=p[a];c.timer.c=null,c.timer.t=NaN,--p.count,delete p[a]}s.c=o,qn(function(){return s.c&&o(e||1)&&(s.c=null,s.t=NaN),1},0,l),p.active=r,v.event&&v.event.start.call(n,n.__data__,t),g=[],v.tween.forEach(function(e,r){(r=r.call(n,n.__data__,t))&&g.push(r)}),h=v.ease,f=v.duration}function o(u){for(var i=u/f,a=h(i),o=g.length;o>0;)g[--o].call(n,a);return i>=1?(v.event&&v.event.end.call(n,n.__data__,t),--p.count?delete p[r]:delete n[e],1):void 0}var l,s,f,h,g,p=n[e]||(n[e]={active:0,count:0}),v=p[r];v||(l=u.time,s=qn(i,0,l),v=p[r]={tween:new c,time:l,timer:s,delay:u.delay,duration:u.duration,ease:u.ease,index:t},u=null,++p.count)}function na(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate("+(isFinite(r)?r:e(n))+",0)"})}function ta(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate(0,"+(isFinite(r)?r:e(n))+")"})}function ea(n){return n.toISOString()}function ra(n,t,e){function r(t){return n(t)}function u(n,e){var r=n[1]-n[0],u=r/e,i=oa.bisect(Kl,u);return i==Kl.length?[t.year,Ku(n.map(function(n){return n/31536e6}),e)[2]]:i?t[u/Kl[i-1]<Kl[i]/u?i-1:i]:[tc,Ku(n,e)[2]]}return r.invert=function(t){return ua(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(ua)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,ua(+e+1),t).length}var i=r.domain(),a=Yu(i),o=null==n?u(a,10):"number"==typeof n&&u(a,n);return o&&(n=o[0],t=o[1]),r.domain(Xu(i,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=ua(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=ua(+t+1);return t}}:n))},r.ticks=function(n,t){var e=Yu(r.domain()),i=null==n?u(e,10):"number"==typeof n?u(e,n):!n.range&&[{range:n},t];return i&&(n=i[0],t=i[1]),n.range(e[0],ua(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return ra(n.copy(),t,e)},Ju(r,n)}function ua(n){return new Date(n)}function ia(n){return JSON.parse(n.responseText)}function aa(n){var t=sa.createRange();return t.selectNode(sa.body),t.createContextualFragment(n.responseText)}var oa={version:"3.5.16"},la=[].slice,ca=function(n){return la.call(n)},sa=this.document;if(sa)try{ca(sa.documentElement.childNodes)[0].nodeType}catch(fa){ca=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}if(Date.now||(Date.now=function(){return+new Date}),sa)try{sa.createElement("DIV").style.setProperty("opacity",0,"")}catch(ha){var ga=this.Element.prototype,pa=ga.setAttribute,va=ga.setAttributeNS,da=this.CSSStyleDeclaration.prototype,ma=da.setProperty;ga.setAttribute=function(n,t){pa.call(this,n,t+"")},ga.setAttributeNS=function(n,t,e){va.call(this,n,t,e+"")},da.setProperty=function(n,t,e){ma.call(this,n,t+"",e)}}oa.ascending=e,oa.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:NaN},oa.min=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i;)if(null!=(r=n[u])&&r>=r){e=r;break}for(;++u<i;)null!=(r=n[u])&&e>r&&(e=r)}else{for(;++u<i;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=r;break}for(;++u<i;)null!=(r=t.call(n,n[u],u))&&e>r&&(e=r)}return e},oa.max=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i;)if(null!=(r=n[u])&&r>=r){e=r;break}for(;++u<i;)null!=(r=n[u])&&r>e&&(e=r)}else{for(;++u<i;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=r;break}for(;++u<i;)null!=(r=t.call(n,n[u],u))&&r>e&&(e=r)}return e},oa.extent=function(n,t){var e,r,u,i=-1,a=n.length;if(1===arguments.length){for(;++i<a;)if(null!=(r=n[i])&&r>=r){e=u=r;break}for(;++i<a;)null!=(r=n[i])&&(e>r&&(e=r),r>u&&(u=r))}else{for(;++i<a;)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=u=r;break}for(;++i<a;)null!=(r=t.call(n,n[i],i))&&(e>r&&(e=r),r>u&&(u=r))}return[e,u]},oa.sum=function(n,t){var e,r=0,i=n.length,a=-1;if(1===arguments.length)for(;++a<i;)u(e=+n[a])&&(r+=e);else for(;++a<i;)u(e=+t.call(n,n[a],a))&&(r+=e);return r},oa.mean=function(n,t){var e,i=0,a=n.length,o=-1,l=a;if(1===arguments.length)for(;++o<a;)u(e=r(n[o]))?i+=e:--l;else for(;++o<a;)u(e=r(t.call(n,n[o],o)))?i+=e:--l;return l?i/l:void 0},oa.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),u=+n[r-1],i=e-r;return i?u+i*(n[r]-u):u},oa.median=function(n,t){var i,a=[],o=n.length,l=-1;if(1===arguments.length)for(;++l<o;)u(i=r(n[l]))&&a.push(i);else for(;++l<o;)u(i=r(t.call(n,n[l],l)))&&a.push(i);return a.length?oa.quantile(a.sort(e),.5):void 0},oa.variance=function(n,t){var e,i,a=n.length,o=0,l=0,c=-1,s=0;if(1===arguments.length)for(;++c<a;)u(e=r(n[c]))&&(i=e-o,o+=i/++s,l+=i*(e-o));else for(;++c<a;)u(e=r(t.call(n,n[c],c)))&&(i=e-o,o+=i/++s,l+=i*(e-o));return s>1?l/(s-1):void 0},oa.deviation=function(){var n=oa.variance.apply(this,arguments);return n?Math.sqrt(n):n};var ya=i(e);oa.bisectLeft=ya.left,oa.bisect=oa.bisectRight=ya.right,oa.bisector=function(n){return i(1===n.length?function(t,r){return e(n(t),r)}:n)},oa.shuffle=function(n,t,e){(i=arguments.length)<3&&(e=n.length,2>i&&(t=0));for(var r,u,i=e-t;i;)u=Math.random()*i--|0,r=n[i+t],n[i+t]=n[u+t],n[u+t]=r;return n},oa.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},oa.pairs=function(n){for(var t,e=0,r=n.length-1,u=n[0],i=new Array(0>r?0:r);r>e;)i[e]=[t=u,u=n[++e]];return i},oa.transpose=function(n){if(!(u=n.length))return[];for(var t=-1,e=oa.min(n,a),r=new Array(e);++t<e;)for(var u,i=-1,o=r[t]=new Array(u);++i<u;)o[i]=n[i][t];return r},oa.zip=function(){return oa.transpose(arguments)},oa.keys=function(n){var t=[];for(var e in n)t.push(e);return t},oa.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},oa.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},oa.merge=function(n){for(var t,e,r,u=n.length,i=-1,a=0;++i<u;)a+=n[i].length;for(e=new Array(a);--u>=0;)for(r=n[u],t=r.length;--t>=0;)e[--a]=r[t];return e};var Ma=Math.abs;oa.range=function(n,t,e){if(arguments.length<3&&(e=1,arguments.length<2&&(t=n,n=0)),(t-n)/e===1/0)throw new Error("infinite range");var r,u=[],i=o(Ma(e)),a=-1;if(n*=i,t*=i,e*=i,0>e)for(;(r=n+e*++a)>t;)u.push(r/i);else for(;(r=n+e*++a)<t;)u.push(r/i);return u},oa.map=function(n,t){var e=new c;if(n instanceof c)n.forEach(function(n,t){e.set(n,t)});else if(Array.isArray(n)){var r,u=-1,i=n.length;if(1===arguments.length)for(;++u<i;)e.set(u,n[u]);else for(;++u<i;)e.set(t.call(n,r=n[u],u),r)}else for(var a in n)e.set(a,n[a]);return e};var xa="__proto__",ba="\x00";l(c,{has:h,get:function(n){return this._[s(n)]},set:function(n,t){return this._[s(n)]=t},remove:g,keys:p,values:function(){var n=[];for(var t in this._)n.push(this._[t]);return n},entries:function(){var n=[];for(var t in this._)n.push({key:f(t),value:this._[t]});return n},size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,f(t),this._[t])}}),oa.nest=function(){function n(t,a,o){if(o>=i.length)return r?r.call(u,a):e?a.sort(e):a;for(var l,s,f,h,g=-1,p=a.length,v=i[o++],d=new c;++g<p;)(h=d.get(l=v(s=a[g])))?h.push(s):d.set(l,[s]);return t?(s=t(),f=function(e,r){s.set(e,n(t,r,o))}):(s={},f=function(e,r){s[e]=n(t,r,o)}),d.forEach(f),s}function t(n,e){if(e>=i.length)return n;var r=[],u=a[e++];return n.forEach(function(n,u){r.push({key:n,values:t(u,e)})}),u?r.sort(function(n,t){return u(n.key,t.key)}):r}var e,r,u={},i=[],a=[];return u.map=function(t,e){return n(e,t,0)},u.entries=function(e){return t(n(oa.map,e,0),0)},u.key=function(n){return i.push(n),u},u.sortKeys=function(n){return a[i.length-1]=n,u},u.sortValues=function(n){return e=n,u},u.rollup=function(n){return r=n,u},u},oa.set=function(n){var t=new m;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},l(m,{has:h,add:function(n){return this._[s(n+="")]=!0,n},remove:g,values:p,size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,f(t))}}),oa.behavior={},oa.rebind=function(n,t){for(var e,r=1,u=arguments.length;++r<u;)n[e=arguments[r]]=M(n,t,t[e]);return n};var _a=["webkit","ms","moz","Moz","o","O"];oa.dispatch=function(){for(var n=new _,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=w(n);return n},_.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.slice(e+1),n=n.slice(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},oa.event=null,oa.requote=function(n){return n.replace(wa,"\\$&")};var wa=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,Sa={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},ka=function(n,t){return t.querySelector(n)},Na=function(n,t){return t.querySelectorAll(n)},Ea=function(n,t){var e=n.matches||n[x(n,"matchesSelector")];return(Ea=function(n,t){return e.call(n,t)})(n,t)};"function"==typeof Sizzle&&(ka=function(n,t){return Sizzle(n,t)[0]||null},Na=Sizzle,Ea=Sizzle.matchesSelector),oa.selection=function(){return oa.select(sa.documentElement)};var Aa=oa.selection.prototype=[];Aa.select=function(n){var t,e,r,u,i=[];n=A(n);for(var a=-1,o=this.length;++a<o;){i.push(t=[]),t.parentNode=(r=this[a]).parentNode;for(var l=-1,c=r.length;++l<c;)(u=r[l])?(t.push(e=n.call(u,u.__data__,l,a)),e&&"__data__"in u&&(e.__data__=u.__data__)):t.push(null)}return E(i)},Aa.selectAll=function(n){var t,e,r=[];n=C(n);for(var u=-1,i=this.length;++u<i;)for(var a=this[u],o=-1,l=a.length;++o<l;)(e=a[o])&&(r.push(t=ca(n.call(e,e.__data__,o,u))),t.parentNode=e);return E(r)};var Ca="http://www.w3.org/1999/xhtml",za={svg:"http://www.w3.org/2000/svg",xhtml:Ca,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};oa.ns={prefix:za,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&"xmlns"!==(e=n.slice(0,t))&&(n=n.slice(t+1)),za.hasOwnProperty(e)?{space:za[e],local:n}:n}},Aa.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=oa.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(z(t,n[t]));return this}return this.each(z(n,t))},Aa.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=T(n)).length,u=-1;if(t=e.classList){for(;++u<r;)if(!t.contains(n[u]))return!1}else for(t=e.getAttribute("class");++u<r;)if(!q(n[u]).test(t))return!1;return!0}for(t in n)this.each(R(t,n[t]));return this}return this.each(R(n,t))},Aa.style=function(n,e,r){var u=arguments.length;if(3>u){if("string"!=typeof n){2>u&&(e="");for(r in n)this.each(P(r,n[r],e));return this}if(2>u){var i=this.node();return t(i).getComputedStyle(i,null).getPropertyValue(n)}r=""}return this.each(P(n,e,r))},Aa.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(U(t,n[t]));return this}return this.each(U(n,t))},Aa.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},Aa.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},Aa.append=function(n){return n=j(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},Aa.insert=function(n,t){return n=j(n),t=A(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},Aa.remove=function(){return this.each(F)},Aa.data=function(n,t){function e(n,e){var r,u,i,a=n.length,f=e.length,h=Math.min(a,f),g=new Array(f),p=new Array(f),v=new Array(a);if(t){var d,m=new c,y=new Array(a);for(r=-1;++r<a;)(u=n[r])&&(m.has(d=t.call(u,u.__data__,r))?v[r]=u:m.set(d,u),y[r]=d);for(r=-1;++r<f;)(u=m.get(d=t.call(e,i=e[r],r)))?u!==!0&&(g[r]=u,u.__data__=i):p[r]=H(i),m.set(d,!0);for(r=-1;++r<a;)r in y&&m.get(y[r])!==!0&&(v[r]=n[r])}else{for(r=-1;++r<h;)u=n[r],i=e[r],u?(u.__data__=i,g[r]=u):p[r]=H(i);for(;f>r;++r)p[r]=H(e[r]);for(;a>r;++r)v[r]=n[r]}p.update=g,p.parentNode=g.parentNode=v.parentNode=n.parentNode,o.push(p),l.push(g),s.push(v)}var r,u,i=-1,a=this.length;if(!arguments.length){for(n=new Array(a=(r=this[0]).length);++i<a;)(u=r[i])&&(n[i]=u.__data__);return n}var o=Z([]),l=E([]),s=E([]);if("function"==typeof n)for(;++i<a;)e(r=this[i],n.call(r,r.parentNode.__data__,i));else for(;++i<a;)e(r=this[i],n);return l.enter=function(){return o},l.exit=function(){return s},l},Aa.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},Aa.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=O(n));for(var i=0,a=this.length;a>i;i++){u.push(t=[]),t.parentNode=(e=this[i]).parentNode;for(var o=0,l=e.length;l>o;o++)(r=e[o])&&n.call(r,r.__data__,o,i)&&t.push(r)}return E(u)},Aa.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],u=r.length-1,i=r[u];--u>=0;)(e=r[u])&&(i&&i!==e.nextSibling&&i.parentNode.insertBefore(e,i),i=e);return this},Aa.sort=function(n){n=I.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},Aa.each=function(n){return Y(this,function(t,e,r){n.call(t,t.__data__,e,r)})},Aa.call=function(n){var t=ca(arguments);return n.apply(t[0]=this,t),this},Aa.empty=function(){return!this.node()},Aa.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,u=e.length;u>r;r++){var i=e[r];if(i)return i}return null},Aa.size=function(){var n=0;return Y(this,function(){++n}),n};var La=[];oa.selection.enter=Z,oa.selection.enter.prototype=La,La.append=Aa.append,La.empty=Aa.empty,La.node=Aa.node,La.call=Aa.call,La.size=Aa.size,La.select=function(n){for(var t,e,r,u,i,a=[],o=-1,l=this.length;++o<l;){r=(u=this[o]).update,a.push(t=[]),t.parentNode=u.parentNode;for(var c=-1,s=u.length;++c<s;)(i=u[c])?(t.push(r[c]=e=n.call(u.parentNode,i.__data__,c,o)),e.__data__=i.__data__):t.push(null)}return E(a)},La.insert=function(n,t){return arguments.length<2&&(t=V(this)),Aa.insert.call(this,n,t)},oa.select=function(t){var e;return"string"==typeof t?(e=[ka(t,sa)],e.parentNode=sa.documentElement):(e=[t],e.parentNode=n(t)),E([e])},oa.selectAll=function(n){var t;return"string"==typeof n?(t=ca(Na(n,sa)),t.parentNode=sa.documentElement):(t=ca(n),t.parentNode=null),E([t])},Aa.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(X(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(X(n,t,e))};var qa=oa.map({mouseenter:"mouseover",mouseleave:"mouseout"});sa&&qa.forEach(function(n){"on"+n in sa&&qa.remove(n)});var Ta,Ra=0;oa.mouse=function(n){return J(n,k())};var Da=this.navigator&&/WebKit/.test(this.navigator.userAgent)?-1:0;oa.touch=function(n,t,e){if(arguments.length<3&&(e=t,t=k().changedTouches),t)for(var r,u=0,i=t.length;i>u;++u)if((r=t[u]).identifier===e)return J(n,r)},oa.behavior.drag=function(){function n(){this.on("mousedown.drag",i).on("touchstart.drag",a)}function e(n,t,e,i,a){return function(){function o(){var n,e,r=t(h,v);r&&(n=r[0]-M[0],e=r[1]-M[1],p|=n|e,M=r,g({type:"drag",x:r[0]+c[0],y:r[1]+c[1],dx:n,dy:e}))}function l(){t(h,v)&&(m.on(i+d,null).on(a+d,null),y(p),g({type:"dragend"}))}var c,s=this,f=oa.event.target.correspondingElement||oa.event.target,h=s.parentNode,g=r.of(s,arguments),p=0,v=n(),d=".drag"+(null==v?"":"-"+v),m=oa.select(e(f)).on(i+d,o).on(a+d,l),y=W(f),M=t(h,v);u?(c=u.apply(s,arguments),c=[c.x-M[0],c.y-M[1]]):c=[0,0],g({type:"dragstart"})}}var r=N(n,"drag","dragstart","dragend"),u=null,i=e(b,oa.mouse,t,"mousemove","mouseup"),a=e(G,oa.touch,y,"touchmove","touchend");return n.origin=function(t){return arguments.length?(u=t,n):u},oa.rebind(n,r,"on")},oa.touches=function(n,t){return arguments.length<2&&(t=k().touches),t?ca(t).map(function(t){var e=J(n,t);return e.identifier=t.identifier,e}):[]};var Pa=1e-6,Ua=Pa*Pa,ja=Math.PI,Fa=2*ja,Ha=Fa-Pa,Oa=ja/2,Ia=ja/180,Ya=180/ja,Za=Math.SQRT2,Va=2,Xa=4;oa.interpolateZoom=function(n,t){var e,r,u=n[0],i=n[1],a=n[2],o=t[0],l=t[1],c=t[2],s=o-u,f=l-i,h=s*s+f*f;if(Ua>h)r=Math.log(c/a)/Za,e=function(n){return[u+n*s,i+n*f,a*Math.exp(Za*n*r)]};else{var g=Math.sqrt(h),p=(c*c-a*a+Xa*h)/(2*a*Va*g),v=(c*c-a*a-Xa*h)/(2*c*Va*g),d=Math.log(Math.sqrt(p*p+1)-p),m=Math.log(Math.sqrt(v*v+1)-v);r=(m-d)/Za,e=function(n){var t=n*r,e=rn(d),o=a/(Va*g)*(e*un(Za*t+d)-en(d));return[u+o*s,i+o*f,a*e/rn(Za*t+d)]}}return e.duration=1e3*r,e},oa.behavior.zoom=function(){function n(n){n.on(L,f).on(Ba+".zoom",g).on("dblclick.zoom",p).on(R,h)}function e(n){return[(n[0]-k.x)/k.k,(n[1]-k.y)/k.k]}function r(n){return[n[0]*k.k+k.x,n[1]*k.k+k.y]}function u(n){k.k=Math.max(A[0],Math.min(A[1],n))}function i(n,t){t=r(t),k.x+=n[0]-t[0],k.y+=n[1]-t[1]}function a(t,e,r,a){t.__chart__={x:k.x,y:k.y,k:k.k},u(Math.pow(2,a)),i(d=e,r),t=oa.select(t),C>0&&(t=t.transition().duration(C)),t.call(n.event)}function o(){b&&b.domain(x.range().map(function(n){return(n-k.x)/k.k}).map(x.invert)),w&&w.domain(_.range().map(function(n){return(n-k.y)/k.k}).map(_.invert))}function l(n){z++||n({type:"zoomstart"})}function c(n){o(),n({type:"zoom",scale:k.k,translate:[k.x,k.y]})}function s(n){--z||(n({type:"zoomend"}),d=null)}function f(){function n(){o=1,i(oa.mouse(u),h),c(a)}function r(){f.on(q,null).on(T,null),g(o),s(a)}var u=this,a=D.of(u,arguments),o=0,f=oa.select(t(u)).on(q,n).on(T,r),h=e(oa.mouse(u)),g=W(u);Il.call(u),l(a)}function h(){function n(){var n=oa.touches(p);return g=k.k,n.forEach(function(n){n.identifier in d&&(d[n.identifier]=e(n))}),n}function t(){var t=oa.event.target;oa.select(t).on(x,r).on(b,o),_.push(t);for(var e=oa.event.changedTouches,u=0,i=e.length;i>u;++u)d[e[u].identifier]=null;var l=n(),c=Date.now();if(1===l.length){if(500>c-M){var s=l[0];a(p,s,d[s.identifier],Math.floor(Math.log(k.k)/Math.LN2)+1),S()}M=c}else if(l.length>1){var s=l[0],f=l[1],h=s[0]-f[0],g=s[1]-f[1];m=h*h+g*g}}function r(){var n,t,e,r,a=oa.touches(p);Il.call(p);for(var o=0,l=a.length;l>o;++o,r=null)if(e=a[o],r=d[e.identifier]){if(t)break;n=e,t=r}if(r){var s=(s=e[0]-n[0])*s+(s=e[1]-n[1])*s,f=m&&Math.sqrt(s/m);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+r[0])/2,(t[1]+r[1])/2],u(f*g)}M=null,i(n,t),c(v)}function o(){if(oa.event.touches.length){for(var t=oa.event.changedTouches,e=0,r=t.length;r>e;++e)delete d[t[e].identifier];for(var u in d)return void n()}oa.selectAll(_).on(y,null),w.on(L,f).on(R,h),N(),s(v)}var g,p=this,v=D.of(p,arguments),d={},m=0,y=".zoom-"+oa.event.changedTouches[0].identifier,x="touchmove"+y,b="touchend"+y,_=[],w=oa.select(p),N=W(p);t(),l(v),w.on(L,null).on(R,t)}function g(){var n=D.of(this,arguments);y?clearTimeout(y):(Il.call(this),v=e(d=m||oa.mouse(this)),l(n)),y=setTimeout(function(){y=null,s(n)},50),S(),u(Math.pow(2,.002*$a())*k.k),i(d,v),c(n)}function p(){var n=oa.mouse(this),t=Math.log(k.k)/Math.LN2;a(this,n,e(n),oa.event.shiftKey?Math.ceil(t)-1:Math.floor(t)+1)}var v,d,m,y,M,x,b,_,w,k={x:0,y:0,k:1},E=[960,500],A=Wa,C=250,z=0,L="mousedown.zoom",q="mousemove.zoom",T="mouseup.zoom",R="touchstart.zoom",D=N(n,"zoomstart","zoom","zoomend");return Ba||(Ba="onwheel"in sa?($a=function(){return-oa.event.deltaY*(oa.event.deltaMode?120:1)},"wheel"):"onmousewheel"in sa?($a=function(){return oa.event.wheelDelta},"mousewheel"):($a=function(){return-oa.event.detail},"MozMousePixelScroll")),n.event=function(n){n.each(function(){var n=D.of(this,arguments),t=k;Hl?oa.select(this).transition().each("start.zoom",function(){k=this.__chart__||{x:0,y:0,k:1},l(n)}).tween("zoom:zoom",function(){var e=E[0],r=E[1],u=d?d[0]:e/2,i=d?d[1]:r/2,a=oa.interpolateZoom([(u-k.x)/k.k,(i-k.y)/k.k,e/k.k],[(u-t.x)/t.k,(i-t.y)/t.k,e/t.k]);return function(t){var r=a(t),o=e/r[2];this.__chart__=k={x:u-r[0]*o,y:i-r[1]*o,k:o},c(n)}}).each("interrupt.zoom",function(){s(n)}).each("end.zoom",function(){s(n)}):(this.__chart__=k,l(n),c(n),s(n))})},n.translate=function(t){return arguments.length?(k={x:+t[0],y:+t[1],k:k.k},o(),n):[k.x,k.y]},n.scale=function(t){return arguments.length?(k={x:k.x,y:k.y,k:null},u(+t),o(),n):k.k},n.scaleExtent=function(t){return arguments.length?(A=null==t?Wa:[+t[0],+t[1]],n):A},n.center=function(t){return arguments.length?(m=t&&[+t[0],+t[1]],n):m},n.size=function(t){return arguments.length?(E=t&&[+t[0],+t[1]],n):E},n.duration=function(t){return arguments.length?(C=+t,n):C},n.x=function(t){return arguments.length?(b=t,x=t.copy(),k={x:0,y:0,k:1},n):b},n.y=function(t){return arguments.length?(w=t,_=t.copy(),k={x:0,y:0,k:1},n):w},oa.rebind(n,D,"on")};var $a,Ba,Wa=[0,1/0];oa.color=on,on.prototype.toString=function(){return this.rgb()+""},oa.hsl=ln;var Ja=ln.prototype=new on;Ja.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),new ln(this.h,this.s,this.l/n)},Ja.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new ln(this.h,this.s,n*this.l)},Ja.rgb=function(){return cn(this.h,this.s,this.l)},oa.hcl=sn;var Ga=sn.prototype=new on;Ga.brighter=function(n){return new sn(this.h,this.c,Math.min(100,this.l+Ka*(arguments.length?n:1)))},Ga.darker=function(n){return new sn(this.h,this.c,Math.max(0,this.l-Ka*(arguments.length?n:1)))},Ga.rgb=function(){return fn(this.h,this.c,this.l).rgb()},oa.lab=hn;var Ka=18,Qa=.95047,no=1,to=1.08883,eo=hn.prototype=new on;eo.brighter=function(n){return new hn(Math.min(100,this.l+Ka*(arguments.length?n:1)),this.a,this.b)},eo.darker=function(n){return new hn(Math.max(0,this.l-Ka*(arguments.length?n:1)),this.a,this.b)},eo.rgb=function(){return gn(this.l,this.a,this.b)},oa.rgb=yn;var ro=yn.prototype=new on;ro.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,u=30;return t||e||r?(t&&u>t&&(t=u),e&&u>e&&(e=u),r&&u>r&&(r=u),new yn(Math.min(255,t/n),Math.min(255,e/n),Math.min(255,r/n))):new yn(u,u,u)},ro.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new yn(n*this.r,n*this.g,n*this.b)},ro.hsl=function(){return wn(this.r,this.g,this.b)},ro.toString=function(){return"#"+bn(this.r)+bn(this.g)+bn(this.b)};var uo=oa.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});uo.forEach(function(n,t){uo.set(n,Mn(t))}),oa.functor=En,oa.xhr=An(y),oa.dsv=function(n,t){function e(n,e,i){arguments.length<3&&(i=e,e=null);var a=Cn(n,t,null==e?r:u(e),i);return a.row=function(n){return arguments.length?a.response(null==(e=n)?r:u(n)):e},a}function r(n){return e.parse(n.responseText)}function u(n){return function(t){return e.parse(t.responseText,n)}}function i(t){return t.map(a).join(n)}function a(n){return o.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var o=new RegExp('["'+n+"\n]"),l=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var u=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(u(n),e)}:u})},e.parseRows=function(n,t){function e(){if(s>=c)return a;if(u)return u=!1,i;var t=s;if(34===n.charCodeAt(t)){for(var e=t;e++<c;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}s=e+2;var r=n.charCodeAt(e+1);return 13===r?(u=!0,10===n.charCodeAt(e+2)&&++s):10===r&&(u=!0),n.slice(t+1,e).replace(/""/g,'"')}for(;c>s;){var r=n.charCodeAt(s++),o=1;if(10===r)u=!0;else if(13===r)u=!0,10===n.charCodeAt(s)&&(++s,++o);else if(r!==l)continue;return n.slice(t,s-o)}return n.slice(t)}for(var r,u,i={},a={},o=[],c=n.length,s=0,f=0;(r=e())!==a;){for(var h=[];r!==i&&r!==a;)h.push(r),r=e();t&&null==(h=t(h,f++))||o.push(h)}return o},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new m,u=[];return t.forEach(function(n){for(var t in n)r.has(t)||u.push(r.add(t))}),[u.map(a).join(n)].concat(t.map(function(t){return u.map(function(n){return a(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(i).join("\n")},e},oa.csv=oa.dsv(",","text/csv"),oa.tsv=oa.dsv("	","text/tab-separated-values");var io,ao,oo,lo,co=this[x(this,"requestAnimationFrame")]||function(n){setTimeout(n,17)};oa.timer=function(){qn.apply(this,arguments)},oa.timer.flush=function(){Rn(),Dn()},oa.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var so=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(Un);oa.formatPrefix=function(n,t){var e=0;return(n=+n)&&(0>n&&(n*=-1),t&&(n=oa.round(n,Pn(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),so[8+e/3]};var fo=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,ho=oa.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=oa.round(n,Pn(n,t))).toFixed(Math.max(0,Math.min(20,Pn(n*(1+1e-15),t))))}}),go=oa.time={},po=Date;Hn.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){vo.setUTCDate.apply(this._,arguments)},setDay:function(){vo.setUTCDay.apply(this._,arguments)},setFullYear:function(){vo.setUTCFullYear.apply(this._,arguments)},setHours:function(){vo.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){vo.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){vo.setUTCMinutes.apply(this._,arguments)},setMonth:function(){vo.setUTCMonth.apply(this._,arguments)},setSeconds:function(){vo.setUTCSeconds.apply(this._,arguments)},setTime:function(){vo.setTime.apply(this._,arguments)}};var vo=Date.prototype;go.year=On(function(n){return n=go.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),go.years=go.year.range,go.years.utc=go.year.utc.range,go.day=On(function(n){var t=new po(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),go.days=go.day.range,go.days.utc=go.day.utc.range,go.dayOfYear=function(n){var t=go.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var e=go[n]=On(function(n){return(n=go.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=go.year(n).getDay();return Math.floor((go.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});go[n+"s"]=e.range,go[n+"s"].utc=e.utc.range,go[n+"OfYear"]=function(n){var e=go.year(n).getDay();return Math.floor((go.dayOfYear(n)+(e+t)%7)/7)}}),go.week=go.sunday,go.weeks=go.sunday.range,go.weeks.utc=go.sunday.utc.range,go.weekOfYear=go.sundayOfYear;var mo={"-":"",_:" ",0:"0"},yo=/^\s*\d+/,Mo=/^%/;oa.locale=function(n){return{numberFormat:jn(n),timeFormat:Yn(n)}};var xo=oa.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});oa.format=xo.numberFormat,oa.geo={},st.prototype={s:0,t:0,add:function(n){ft(n,this.t,bo),ft(bo.s,this.s,this),this.s?this.t+=bo.t:this.s=bo.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var bo=new st;oa.geo.stream=function(n,t){n&&_o.hasOwnProperty(n.type)?_o[n.type](n,t):ht(n,t)};var _o={Feature:function(n,t){ht(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,u=e.length;++r<u;)ht(e[r].geometry,t)}},wo={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){gt(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)gt(e[r],t,0)},Polygon:function(n,t){pt(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)pt(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,u=e.length;++r<u;)ht(e[r],t)}};oa.geo.area=function(n){return So=0,oa.geo.stream(n,No),So};var So,ko=new st,No={sphere:function(){So+=4*ja},point:b,lineStart:b,lineEnd:b,polygonStart:function(){ko.reset(),No.lineStart=vt},polygonEnd:function(){var n=2*ko;So+=0>n?4*ja+n:n,No.lineStart=No.lineEnd=No.point=b}};oa.geo.bounds=function(){function n(n,t){M.push(x=[s=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,e){var r=dt([t*Ia,e*Ia]);if(m){var u=yt(m,r),i=[u[1],-u[0],0],a=yt(i,u);bt(a),a=_t(a);var l=t-p,c=l>0?1:-1,v=a[0]*Ya*c,d=Ma(l)>180;if(d^(v>c*p&&c*t>v)){var y=a[1]*Ya;y>g&&(g=y)}else if(v=(v+360)%360-180,d^(v>c*p&&c*t>v)){var y=-a[1]*Ya;f>y&&(f=y)}else f>e&&(f=e),e>g&&(g=e);d?p>t?o(s,t)>o(s,h)&&(h=t):o(t,h)>o(s,h)&&(s=t):h>=s?(s>t&&(s=t),t>h&&(h=t)):t>p?o(s,t)>o(s,h)&&(h=t):o(t,h)>o(s,h)&&(s=t)}else n(t,e);m=r,p=t}function e(){b.point=t}function r(){x[0]=s,x[1]=h,b.point=n,m=null}function u(n,e){if(m){var r=n-p;y+=Ma(r)>180?r+(r>0?360:-360):r}else v=n,d=e;No.point(n,e),t(n,e)}function i(){No.lineStart()}function a(){u(v,d),No.lineEnd(),Ma(y)>Pa&&(s=-(h=180)),x[0]=s,x[1]=h,m=null}function o(n,t){return(t-=n)<0?t+360:t}function l(n,t){return n[0]-t[0]}function c(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var s,f,h,g,p,v,d,m,y,M,x,b={point:n,lineStart:e,lineEnd:r,polygonStart:function(){b.point=u,b.lineStart=i,b.lineEnd=a,y=0,No.polygonStart()},polygonEnd:function(){No.polygonEnd(),b.point=n,b.lineStart=e,b.lineEnd=r,0>ko?(s=-(h=180),f=-(g=90)):y>Pa?g=90:-Pa>y&&(f=-90),x[0]=s,x[1]=h}};return function(n){g=h=-(s=f=1/0),M=[],oa.geo.stream(n,b);var t=M.length;if(t){M.sort(l);for(var e,r=1,u=M[0],i=[u];t>r;++r)e=M[r],c(e[0],u)||c(e[1],u)?(o(u[0],e[1])>o(u[0],u[1])&&(u[1]=e[1]),o(e[0],u[1])>o(u[0],u[1])&&(u[0]=e[0])):i.push(u=e);for(var a,e,p=-(1/0),t=i.length-1,r=0,u=i[t];t>=r;u=e,++r)e=i[r],(a=o(u[1],e[0]))>p&&(p=a,s=e[0],h=u[1])}return M=x=null,s===1/0||f===1/0?[[NaN,NaN],[NaN,NaN]]:[[s,f],[h,g]]}}(),oa.geo.centroid=function(n){Eo=Ao=Co=zo=Lo=qo=To=Ro=Do=Po=Uo=0,oa.geo.stream(n,jo);var t=Do,e=Po,r=Uo,u=t*t+e*e+r*r;return Ua>u&&(t=qo,e=To,r=Ro,Pa>Ao&&(t=Co,e=zo,r=Lo),u=t*t+e*e+r*r,Ua>u)?[NaN,NaN]:[Math.atan2(e,t)*Ya,tn(r/Math.sqrt(u))*Ya]};var Eo,Ao,Co,zo,Lo,qo,To,Ro,Do,Po,Uo,jo={sphere:b,point:St,lineStart:Nt,lineEnd:Et,polygonStart:function(){jo.lineStart=At},polygonEnd:function(){jo.lineStart=Nt}},Fo=Rt(zt,jt,Ht,[-ja,-ja/2]),Ho=1e9;oa.geo.clipExtent=function(){var n,t,e,r,u,i,a={stream:function(n){return u&&(u.valid=!1),u=i(n),u.valid=!0,u},extent:function(o){return arguments.length?(i=Zt(n=+o[0][0],t=+o[0][1],e=+o[1][0],r=+o[1][1]),u&&(u.valid=!1,u=null),a):[[n,t],[e,r]]}};return a.extent([[0,0],[960,500]])},(oa.geo.conicEqualArea=function(){return Vt(Xt)}).raw=Xt,oa.geo.albers=function(){return oa.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},oa.geo.albersUsa=function(){function n(n){var i=n[0],a=n[1];return t=null,e(i,a),t||(r(i,a),t)||u(i,a),t}var t,e,r,u,i=oa.geo.albers(),a=oa.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),o=oa.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),l={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=i.scale(),e=i.translate(),r=(n[0]-e[0])/t,u=(n[1]-e[1])/t;return(u>=.12&&.234>u&&r>=-.425&&-.214>r?a:u>=.166&&.234>u&&r>=-.214&&-.115>r?o:i).invert(n)},n.stream=function(n){var t=i.stream(n),e=a.stream(n),r=o.stream(n);return{point:function(n,u){t.point(n,u),e.point(n,u),r.point(n,u)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(i.precision(t),a.precision(t),o.precision(t),n):i.precision()},n.scale=function(t){return arguments.length?(i.scale(t),a.scale(.35*t),o.scale(t),n.translate(i.translate())):i.scale()},n.translate=function(t){if(!arguments.length)return i.translate();var c=i.scale(),s=+t[0],f=+t[1];return e=i.translate(t).clipExtent([[s-.455*c,f-.238*c],[s+.455*c,f+.238*c]]).stream(l).point,r=a.translate([s-.307*c,f+.201*c]).clipExtent([[s-.425*c+Pa,f+.12*c+Pa],[s-.214*c-Pa,f+.234*c-Pa]]).stream(l).point,u=o.translate([s-.205*c,f+.212*c]).clipExtent([[s-.214*c+Pa,f+.166*c+Pa],[s-.115*c-Pa,f+.234*c-Pa]]).stream(l).point,n},n.scale(1070)};var Oo,Io,Yo,Zo,Vo,Xo,$o={point:b,lineStart:b,lineEnd:b,polygonStart:function(){Io=0,$o.lineStart=$t},polygonEnd:function(){$o.lineStart=$o.lineEnd=$o.point=b,Oo+=Ma(Io/2)}},Bo={point:Bt,lineStart:b,lineEnd:b,polygonStart:b,polygonEnd:b},Wo={point:Gt,lineStart:Kt,lineEnd:Qt,polygonStart:function(){Wo.lineStart=ne},polygonEnd:function(){Wo.point=Gt,Wo.lineStart=Kt,Wo.lineEnd=Qt}};oa.geo.path=function(){function n(n){return n&&("function"==typeof o&&i.pointRadius(+o.apply(this,arguments)),a&&a.valid||(a=u(i)),oa.geo.stream(n,a)),i.result()}function t(){return a=null,n}var e,r,u,i,a,o=4.5;return n.area=function(n){return Oo=0,oa.geo.stream(n,u($o)),Oo},n.centroid=function(n){return Co=zo=Lo=qo=To=Ro=Do=Po=Uo=0,oa.geo.stream(n,u(Wo)),Uo?[Do/Uo,Po/Uo]:Ro?[qo/Ro,To/Ro]:Lo?[Co/Lo,zo/Lo]:[NaN,NaN]},n.bounds=function(n){return Vo=Xo=-(Yo=Zo=1/0),oa.geo.stream(n,u(Bo)),[[Yo,Zo],[Vo,Xo]]},n.projection=function(n){return arguments.length?(u=(e=n)?n.stream||re(n):y,t()):e},n.context=function(n){return arguments.length?(i=null==(r=n)?new Wt:new te(n),"function"!=typeof o&&i.pointRadius(o),t()):r},n.pointRadius=function(t){return arguments.length?(o="function"==typeof t?t:(i.pointRadius(+t),+t),n):o},n.projection(oa.geo.albersUsa()).context(null)},oa.geo.transform=function(n){return{stream:function(t){var e=new ue(t);for(var r in n)e[r]=n[r];return e}}},ue.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},oa.geo.projection=ae,oa.geo.projectionMutator=oe,(oa.geo.equirectangular=function(){return ae(ce)}).raw=ce.invert=ce,oa.geo.rotation=function(n){function t(t){return t=n(t[0]*Ia,t[1]*Ia),t[0]*=Ya,t[1]*=Ya,t}return n=fe(n[0]%360*Ia,n[1]*Ia,n.length>2?n[2]*Ia:0),t.invert=function(t){return t=n.invert(t[0]*Ia,t[1]*Ia),t[0]*=Ya,t[1]*=Ya,t},t},se.invert=ce,oa.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=fe(-n[0]*Ia,-n[1]*Ia,0).invert,u=[];return e(null,null,1,{point:function(n,e){u.push(n=t(n,e)),n[0]*=Ya,n[1]*=Ya}}),{type:"Polygon",coordinates:[u]}}var t,e,r=[0,0],u=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=ve((t=+r)*Ia,u*Ia),n):t},n.precision=function(r){return arguments.length?(e=ve(t*Ia,(u=+r)*Ia),n):u},n.angle(90)},oa.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Ia,u=n[1]*Ia,i=t[1]*Ia,a=Math.sin(r),o=Math.cos(r),l=Math.sin(u),c=Math.cos(u),s=Math.sin(i),f=Math.cos(i);return Math.atan2(Math.sqrt((e=f*a)*e+(e=c*s-l*f*o)*e),l*s+c*f*o)},oa.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return oa.range(Math.ceil(i/d)*d,u,d).map(h).concat(oa.range(Math.ceil(c/m)*m,l,m).map(g)).concat(oa.range(Math.ceil(r/p)*p,e,p).filter(function(n){return Ma(n%d)>Pa}).map(s)).concat(oa.range(Math.ceil(o/v)*v,a,v).filter(function(n){return Ma(n%m)>Pa}).map(f))}var e,r,u,i,a,o,l,c,s,f,h,g,p=10,v=p,d=90,m=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(i).concat(g(l).slice(1),h(u).reverse().slice(1),g(c).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(i=+t[0][0],u=+t[1][0],c=+t[0][1],l=+t[1][1],i>u&&(t=i,i=u,u=t),c>l&&(t=c,c=l,l=t),n.precision(y)):[[i,c],[u,l]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],o=+t[0][1],a=+t[1][1],r>e&&(t=r,r=e,e=t),o>a&&(t=o,o=a,a=t),n.precision(y)):[[r,o],[e,a]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],m=+t[1],n):[d,m]},n.minorStep=function(t){return arguments.length?(p=+t[0],v=+t[1],n):[p,v]},n.precision=function(t){return arguments.length?(y=+t,s=me(o,a,90),f=ye(r,e,y),h=me(c,l,90),g=ye(i,u,y),n):y},n.majorExtent([[-180,-90+Pa],[180,90-Pa]]).minorExtent([[-180,-80-Pa],[180,80+Pa]])},oa.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||u.apply(this,arguments)]}}var t,e,r=Me,u=xe;return n.distance=function(){return oa.geo.distance(t||r.apply(this,arguments),e||u.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(u=t,e="function"==typeof t?null:t,n):u},n.precision=function(){return arguments.length?n:0},n},oa.geo.interpolate=function(n,t){return be(n[0]*Ia,n[1]*Ia,t[0]*Ia,t[1]*Ia)},oa.geo.length=function(n){return Jo=0,oa.geo.stream(n,Go),Jo};var Jo,Go={sphere:b,point:b,lineStart:_e,lineEnd:b,polygonStart:b,polygonEnd:b},Ko=we(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(oa.geo.azimuthalEqualArea=function(){return ae(Ko)}).raw=Ko;var Qo=we(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},y);(oa.geo.azimuthalEquidistant=function(){return ae(Qo)}).raw=Qo,(oa.geo.conicConformal=function(){return Vt(Se)}).raw=Se,(oa.geo.conicEquidistant=function(){return Vt(ke)}).raw=ke;var nl=we(function(n){return 1/n},Math.atan);(oa.geo.gnomonic=function(){return ae(nl)}).raw=nl,Ne.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Oa]},(oa.geo.mercator=function(){return Ee(Ne)}).raw=Ne;var tl=we(function(){return 1},Math.asin);(oa.geo.orthographic=function(){return ae(tl)}).raw=tl;var el=we(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(oa.geo.stereographic=function(){return ae(el)}).raw=el,Ae.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-Oa]},(oa.geo.transverseMercator=function(){var n=Ee(Ae),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[n[1],-n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},e([0,0,90])}).raw=Ae,oa.geom={},oa.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,u=En(e),i=En(r),a=n.length,o=[],l=[];for(t=0;a>t;t++)o.push([+u.call(this,n[t],t),+i.call(this,n[t],t),t]);for(o.sort(qe),t=0;a>t;t++)l.push([o[t][0],-o[t][1]]);var c=Le(o),s=Le(l),f=s[0]===c[0],h=s[s.length-1]===c[c.length-1],g=[];for(t=c.length-1;t>=0;--t)g.push(n[o[c[t]][2]]);for(t=+f;t<s.length-h;++t)g.push(n[o[s[t]][2]]);return g}var e=Ce,r=ze;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},oa.geom.polygon=function(n){return Sa(n,rl),n};var rl=oa.geom.polygon.prototype=[];rl.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],u=0;++t<e;)n=r,r=this[t],u+=n[1]*r[0]-n[0]*r[1];return.5*u},rl.centroid=function(n){var t,e,r=-1,u=this.length,i=0,a=0,o=this[u-1];for(arguments.length||(n=-1/(6*this.area()));++r<u;)t=o,o=this[r],e=t[0]*o[1]-o[0]*t[1],i+=(t[0]+o[0])*e,a+=(t[1]+o[1])*e;return[i*n,a*n]},rl.clip=function(n){for(var t,e,r,u,i,a,o=De(n),l=-1,c=this.length-De(this),s=this[c-1];++l<c;){for(t=n.slice(),n.length=0,u=this[l],i=t[(r=t.length-o)-1],e=-1;++e<r;)a=t[e],Te(a,s,u)?(Te(i,s,u)||n.push(Re(i,a,s,u)),n.push(a)):Te(i,s,u)&&n.push(Re(i,a,s,u)),i=a;o&&n.push(n[0]),s=u}return n};var ul,il,al,ol,ll,cl=[],sl=[];Ye.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(Ve),t.length},tr.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},er.prototype={insert:function(n,t){var e,r,u;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=ar(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(u=r.R,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.R&&(ur(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ir(this,r))):(u=r.L,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.L&&(ir(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ur(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,u=n.U,i=n.L,a=n.R;if(e=i?a?ar(a):i:a,u?u.L===n?u.L=e:u.R=e:this._=e,i&&a?(r=e.C,e.C=n.C,e.L=i,i.U=e,e!==a?(u=e.U,e.U=n.U,n=e.R,u.L=n,e.R=a,a.U=e):(e.U=u,u=e,n=e.R)):(r=n.C,n=e),n&&(n.U=u),!r){if(n&&n.C)return void(n.C=!1);do{if(n===this._)break;if(n===u.L){if(t=u.R,t.C&&(t.C=!1,u.C=!0,ur(this,u),t=u.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,ir(this,t),t=u.R),t.C=u.C,u.C=t.R.C=!1,ur(this,u),n=this._;break}}else if(t=u.L,t.C&&(t.C=!1,u.C=!0,ir(this,u),t=u.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,ur(this,t),t=u.L),t.C=u.C,u.C=t.L.C=!1,ir(this,u),n=this._;break}t.C=!0,n=u,u=u.U}while(!n.C);n&&(n.C=!1)}}},oa.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=o[0][0],u=o[0][1],i=o[1][0],a=o[1][1];return or(e(n),o).cells.forEach(function(e,o){var l=e.edges,c=e.site,s=t[o]=l.length?l.map(function(n){var t=n.start();return[t.x,t.y]}):c.x>=r&&c.x<=i&&c.y>=u&&c.y<=a?[[r,a],[i,a],[i,u],[r,u]]:[];s.point=n[o]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(i(n,t)/Pa)*Pa,y:Math.round(a(n,t)/Pa)*Pa,i:t}})}var r=Ce,u=ze,i=r,a=u,o=fl;return n?t(n):(t.links=function(n){return or(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return or(e(n)).cells.forEach(function(e,r){for(var u,i,a=e.site,o=e.edges.sort(Ve),l=-1,c=o.length,s=o[c-1].edge,f=s.l===a?s.r:s.l;++l<c;)u=s,i=f,s=o[l].edge,f=s.l===a?s.r:s.l,r<i.i&&r<f.i&&cr(a,i,f)<0&&t.push([n[r],n[i.i],n[f.i]])}),t},t.x=function(n){return arguments.length?(i=En(r=n),t):r},t.y=function(n){return arguments.length?(a=En(u=n),t):u},t.clipExtent=function(n){return arguments.length?(o=null==n?fl:n,t):o===fl?null:o},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):o===fl?null:o&&o[1]},t)};var fl=[[-1e6,-1e6],[1e6,1e6]];oa.geom.delaunay=function(n){return oa.geom.voronoi().triangles(n)},oa.geom.quadtree=function(n,t,e,r,u){function i(n){function i(n,t,e,r,u,i,a,o){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var l=n.x,s=n.y;if(null!=l)if(Ma(l-e)+Ma(s-r)<.01)c(n,t,e,r,u,i,a,o);else{var f=n.point;n.x=n.y=n.point=null,c(n,f,l,s,u,i,a,o),c(n,t,e,r,u,i,a,o)}else n.x=e,n.y=r,n.point=t}else c(n,t,e,r,u,i,a,o)}function c(n,t,e,r,u,a,o,l){var c=.5*(u+o),s=.5*(a+l),f=e>=c,h=r>=s,g=h<<1|f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=hr()),f?u=c:o=c,h?a=s:l=s,i(n,t,e,r,u,a,o,l)}var s,f,h,g,p,v,d,m,y,M=En(o),x=En(l);if(null!=t)v=t,d=e,m=r,y=u;else if(m=y=-(v=d=1/0),f=[],h=[],p=n.length,a)for(g=0;p>g;++g)s=n[g],s.x<v&&(v=s.x),s.y<d&&(d=s.y),s.x>m&&(m=s.x),s.y>y&&(y=s.y),f.push(s.x),h.push(s.y);else for(g=0;p>g;++g){var b=+M(s=n[g],g),_=+x(s,g);v>b&&(v=b),d>_&&(d=_),b>m&&(m=b),_>y&&(y=_),f.push(b),h.push(_)}var w=m-v,S=y-d;w>S?y=d+w:m=v+S;var k=hr();if(k.add=function(n){i(k,n,+M(n,++g),+x(n,g),v,d,m,y)},k.visit=function(n){gr(n,k,v,d,m,y)},k.find=function(n){return pr(k,n[0],n[1],v,d,m,y)},g=-1,null==t){for(;++g<p;)i(k,n[g],f[g],h[g],v,d,m,y);--g}else n.forEach(k.add);return f=h=n=s=null,k}var a,o=Ce,l=ze;return(a=arguments.length)?(o=sr,l=fr,3===a&&(u=e,r=t,e=t=0),i(n)):(i.x=function(n){return arguments.length?(o=n,i):o},i.y=function(n){return arguments.length?(l=n,i):l},i.extent=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],u=+n[1][1]),i):null==t?null:[[t,e],[r,u]]},i.size=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=e=0,r=+n[0],u=+n[1]),i):null==t?null:[r-t,u-e]},i)},oa.interpolateRgb=vr,oa.interpolateObject=dr,oa.interpolateNumber=mr,oa.interpolateString=yr;var hl=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,gl=new RegExp(hl.source,"g");oa.interpolate=Mr,oa.interpolators=[function(n,t){var e=typeof t;return("string"===e?uo.has(t.toLowerCase())||/^(#|rgb\(|hsl\()/i.test(t)?vr:yr:t instanceof on?vr:Array.isArray(t)?xr:"object"===e&&isNaN(t)?dr:mr)(n,t)}],oa.interpolateArray=xr;var pl=function(){return y},vl=oa.map({linear:pl,poly:Er,quad:function(){return Sr},cubic:function(){return kr},sin:function(){return Ar},exp:function(){return Cr},circle:function(){return zr},elastic:Lr,back:qr,bounce:function(){return Tr}}),dl=oa.map({"in":y,out:_r,"in-out":wr,"out-in":function(n){return wr(_r(n))}});oa.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.slice(0,t):n,r=t>=0?n.slice(t+1):"in";return e=vl.get(e)||pl,r=dl.get(r)||y,br(r(e.apply(null,la.call(arguments,1))))},oa.interpolateHcl=Rr,oa.interpolateHsl=Dr,oa.interpolateLab=Pr,oa.interpolateRound=Ur,oa.transform=function(n){var t=sa.createElementNS(oa.ns.prefix.svg,"g");return(oa.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new jr(e?e.matrix:ml)})(n)},jr.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var ml={a:1,b:0,c:0,d:1,e:0,f:0};oa.interpolateTransform=$r,oa.layout={},oa.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Jr(n[e]));return t}},oa.layout.chord=function(){function n(){var n,c,f,h,g,p={},v=[],d=oa.range(i),m=[];for(e=[],r=[],n=0,h=-1;++h<i;){for(c=0,g=-1;++g<i;)c+=u[h][g];v.push(c),m.push(oa.range(i)),n+=c}for(a&&d.sort(function(n,t){return a(v[n],v[t])}),o&&m.forEach(function(n,t){n.sort(function(n,e){return o(u[t][n],u[t][e])})}),n=(Fa-s*i)/n,c=0,h=-1;++h<i;){for(f=c,g=-1;++g<i;){var y=d[h],M=m[y][g],x=u[y][M],b=c,_=c+=x*n;p[y+"-"+M]={index:y,subindex:M,startAngle:b,endAngle:_,value:x}}r[y]={index:y,startAngle:f,endAngle:c,value:v[y]},c+=s}for(h=-1;++h<i;)for(g=h-1;++g<i;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}l&&t()}function t(){e.sort(function(n,t){return l((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,u,i,a,o,l,c={},s=0;return c.matrix=function(n){return arguments.length?(i=(u=n)&&u.length,e=r=null,c):u},c.padding=function(n){return arguments.length?(s=n,e=r=null,c):s},c.sortGroups=function(n){return arguments.length?(a=n,e=r=null,c):a},c.sortSubgroups=function(n){return arguments.length?(o=n,e=null,c):o},c.sortChords=function(n){return arguments.length?(l=n,e&&t(),c):l},c.chords=function(){return e||n(),e},c.groups=function(){return r||n(),r},c},oa.layout.force=function(){function n(n){return function(t,e,r,u){if(t.point!==n){var i=t.cx-n.x,a=t.cy-n.y,o=u-e,l=i*i+a*a;if(l>o*o/m){if(v>l){var c=t.charge/l;n.px-=i*c,n.py-=a*c}return!0}if(t.point&&l&&v>l){var c=t.pointCharge/l;n.px-=i*c,n.py-=a*c}}return!t.charge}}function t(n){n.px=oa.event.x,n.py=oa.event.y,l.resume()}var e,r,u,i,a,o,l={},c=oa.dispatch("start","tick","end"),s=[1,1],f=.9,h=yl,g=Ml,p=-30,v=xl,d=.1,m=.64,M=[],x=[];return l.tick=function(){if((u*=.99)<.005)return e=null,c.end({type:"end",alpha:u=0}),!0;var t,r,l,h,g,v,m,y,b,_=M.length,w=x.length;for(r=0;w>r;++r)l=x[r],h=l.source,g=l.target,y=g.x-h.x,b=g.y-h.y,(v=y*y+b*b)&&(v=u*a[r]*((v=Math.sqrt(v))-i[r])/v,y*=v,b*=v,g.x-=y*(m=h.weight+g.weight?h.weight/(h.weight+g.weight):.5),g.y-=b*m,h.x+=y*(m=1-m),h.y+=b*m);if((m=u*d)&&(y=s[0]/2,b=s[1]/2,r=-1,m))for(;++r<_;)l=M[r],l.x+=(y-l.x)*m,l.y+=(b-l.y)*m;if(p)for(ru(t=oa.geom.quadtree(M),u,o),r=-1;++r<_;)(l=M[r]).fixed||t.visit(n(l));for(r=-1;++r<_;)l=M[r],l.fixed?(l.x=l.px,l.y=l.py):(l.x-=(l.px-(l.px=l.x))*f,l.y-=(l.py-(l.py=l.y))*f);c.tick({type:"tick",alpha:u})},l.nodes=function(n){return arguments.length?(M=n,l):M},l.links=function(n){return arguments.length?(x=n,l):x},l.size=function(n){return arguments.length?(s=n,l):s},l.linkDistance=function(n){return arguments.length?(h="function"==typeof n?n:+n,l):h},l.distance=l.linkDistance,l.linkStrength=function(n){return arguments.length?(g="function"==typeof n?n:+n,l):g},l.friction=function(n){return arguments.length?(f=+n,l):f},l.charge=function(n){return arguments.length?(p="function"==typeof n?n:+n,l):p},l.chargeDistance=function(n){return arguments.length?(v=n*n,l):Math.sqrt(v)},l.gravity=function(n){return arguments.length?(d=+n,l):d},l.theta=function(n){return arguments.length?(m=n*n,l):Math.sqrt(m)},l.alpha=function(n){return arguments.length?(n=+n,u?n>0?u=n:(e.c=null,e.t=NaN,e=null,c.end({type:"end",alpha:u=0})):n>0&&(c.start({type:"start",alpha:u=n}),e=qn(l.tick)),l):u},l.start=function(){function n(n,r){if(!e){for(e=new Array(u),l=0;u>l;++l)e[l]=[];for(l=0;c>l;++l){var i=x[l];e[i.source.index].push(i.target),e[i.target.index].push(i.source)}}for(var a,o=e[t],l=-1,s=o.length;++l<s;)if(!isNaN(a=o[l][n]))return a;return Math.random()*r}var t,e,r,u=M.length,c=x.length,f=s[0],v=s[1];for(t=0;u>t;++t)(r=M[t]).index=t,r.weight=0;for(t=0;c>t;++t)r=x[t],"number"==typeof r.source&&(r.source=M[r.source]),"number"==typeof r.target&&(r.target=M[r.target]),++r.source.weight,++r.target.weight;for(t=0;u>t;++t)r=M[t],isNaN(r.x)&&(r.x=n("x",f)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(i=[],"function"==typeof h)for(t=0;c>t;++t)i[t]=+h.call(this,x[t],t);else for(t=0;c>t;++t)i[t]=h;if(a=[],"function"==typeof g)for(t=0;c>t;++t)a[t]=+g.call(this,x[t],t);else for(t=0;c>t;++t)a[t]=g;if(o=[],"function"==typeof p)for(t=0;u>t;++t)o[t]=+p.call(this,M[t],t);else for(t=0;u>t;++t)o[t]=p;return l.resume()},l.resume=function(){return l.alpha(.1)},l.stop=function(){return l.alpha(0)},l.drag=function(){return r||(r=oa.behavior.drag().origin(y).on("dragstart.force",Qr).on("drag.force",t).on("dragend.force",nu)),arguments.length?void this.on("mouseover.force",tu).on("mouseout.force",eu).call(r):r},oa.rebind(l,c,"on")};var yl=20,Ml=1,xl=1/0;oa.layout.hierarchy=function(){function n(u){var i,a=[u],o=[];for(u.depth=0;null!=(i=a.pop());)if(o.push(i),(c=e.call(n,i,i.depth))&&(l=c.length)){for(var l,c,s;--l>=0;)a.push(s=c[l]),s.parent=i,s.depth=i.depth+1;r&&(i.value=0),i.children=c}else r&&(i.value=+r.call(n,i,i.depth)||0),delete i.children;return au(u,function(n){var e,u;t&&(e=n.children)&&e.sort(t),r&&(u=n.parent)&&(u.value+=n.value)}),o}var t=cu,e=ou,r=lu;return n.sort=function(e){return arguments.length?(t=e,n):t},n.children=function(t){return arguments.length?(e=t,n):e},n.value=function(t){return arguments.length?(r=t,n):r},n.revalue=function(t){return r&&(iu(t,function(n){n.children&&(n.value=0)}),au(t,function(t){var e;t.children||(t.value=+r.call(n,t,t.depth)||0),(e=t.parent)&&(e.value+=t.value)})),t},n},oa.layout.partition=function(){function n(t,e,r,u){var i=t.children;if(t.x=e,t.y=t.depth*u,t.dx=r,t.dy=u,i&&(a=i.length)){var a,o,l,c=-1;for(r=t.value?r/t.value:0;++c<a;)n(o=i[c],e,l=o.value*r,u),e+=l}}function t(n){var e=n.children,r=0;if(e&&(u=e.length))for(var u,i=-1;++i<u;)r=Math.max(r,t(e[i]));return 1+r}function e(e,i){var a=r.call(this,e,i);return n(a[0],0,u[0],u[1]/t(a[0])),a}var r=oa.layout.hierarchy(),u=[1,1];return e.size=function(n){return arguments.length?(u=n,e):u},uu(e,r)},oa.layout.pie=function(){function n(a){var o,l=a.length,c=a.map(function(e,r){return+t.call(n,e,r)}),s=+("function"==typeof r?r.apply(this,arguments):r),f=("function"==typeof u?u.apply(this,arguments):u)-s,h=Math.min(Math.abs(f)/l,+("function"==typeof i?i.apply(this,arguments):i)),g=h*(0>f?-1:1),p=oa.sum(c),v=p?(f-l*g)/p:0,d=oa.range(l),m=[];return null!=e&&d.sort(e===bl?function(n,t){return c[t]-c[n]}:function(n,t){return e(a[n],a[t])}),d.forEach(function(n){m[n]={data:a[n],value:o=c[n],startAngle:s,endAngle:s+=o*v+g,padAngle:h}}),m}var t=Number,e=bl,r=0,u=Fa,i=0;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(u=t,n):u},n.padAngle=function(t){return arguments.length?(i=t,n):i},n};var bl={};oa.layout.stack=function(){function n(o,l){if(!(h=o.length))return o;var c=o.map(function(e,r){return t.call(n,e,r)}),s=c.map(function(t){return t.map(function(t,e){return[i.call(n,t,e),a.call(n,t,e)]})}),f=e.call(n,s,l);c=oa.permute(c,f),s=oa.permute(s,f);var h,g,p,v,d=r.call(n,s,l),m=c[0].length;for(p=0;m>p;++p)for(u.call(n,c[0][p],v=d[p],s[0][p][1]),g=1;h>g;++g)u.call(n,c[g][p],v+=s[g-1][p][1],s[g][p][1]);return o}var t=y,e=pu,r=vu,u=gu,i=fu,a=hu;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:_l.get(t)||pu,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:wl.get(t)||vu,n):r},n.x=function(t){return arguments.length?(i=t,n):i},n.y=function(t){return arguments.length?(a=t,n):a},n.out=function(t){return arguments.length?(u=t,n):u},n};var _l=oa.map({"inside-out":function(n){var t,e,r=n.length,u=n.map(du),i=n.map(mu),a=oa.range(r).sort(function(n,t){return u[n]-u[t]}),o=0,l=0,c=[],s=[];for(t=0;r>t;++t)e=a[t],l>o?(o+=i[e],c.push(e)):(l+=i[e],s.push(e));return s.reverse().concat(c)},reverse:function(n){return oa.range(n.length).reverse()},"default":pu}),wl=oa.map({silhouette:function(n){var t,e,r,u=n.length,i=n[0].length,a=[],o=0,l=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];r>o&&(o=r),a.push(r)}for(e=0;i>e;++e)l[e]=(o-a[e])/2;return l},wiggle:function(n){var t,e,r,u,i,a,o,l,c,s=n.length,f=n[0],h=f.length,g=[];for(g[0]=l=c=0,e=1;h>e;++e){for(t=0,u=0;s>t;++t)u+=n[t][e][1];for(t=0,i=0,o=f[e][0]-f[e-1][0];s>t;++t){for(r=0,a=(n[t][e][1]-n[t][e-1][1])/(2*o);t>r;++r)a+=(n[r][e][1]-n[r][e-1][1])/o;i+=a*n[t][e][1]}g[e]=l-=u?i/u*o:0,c>l&&(c=l)}for(e=0;h>e;++e)g[e]-=c;return g},expand:function(n){var t,e,r,u=n.length,i=n[0].length,a=1/u,o=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];if(r)for(t=0;u>t;t++)n[t][e][1]/=r;else for(t=0;u>t;t++)n[t][e][1]=a}for(e=0;i>e;++e)o[e]=0;return o},zero:vu});oa.layout.histogram=function(){function n(n,i){for(var a,o,l=[],c=n.map(e,this),s=r.call(this,c,i),f=u.call(this,s,c,i),i=-1,h=c.length,g=f.length-1,p=t?1:1/h;++i<g;)a=l[i]=[],a.dx=f[i+1]-(a.x=f[i]),a.y=0;if(g>0)for(i=-1;++i<h;)o=c[i],o>=s[0]&&o<=s[1]&&(a=l[oa.bisect(f,o,1,g)-1],a.y+=p,a.push(n[i]));return l}var t=!0,e=Number,r=bu,u=Mu;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=En(t),n):r},n.bins=function(t){return arguments.length?(u="number"==typeof t?function(n){return xu(n,t)}:En(t),n):u},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},oa.layout.pack=function(){function n(n,i){var a=e.call(this,n,i),o=a[0],l=u[0],c=u[1],s=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(o.x=o.y=0,au(o,function(n){n.r=+s(n.value)}),au(o,Nu),r){var f=r*(t?1:Math.max(2*o.r/l,2*o.r/c))/2;au(o,function(n){n.r+=f}),au(o,Nu),au(o,function(n){n.r-=f})}return Cu(o,l/2,c/2,t?1:1/Math.max(2*o.r/l,2*o.r/c)),a}var t,e=oa.layout.hierarchy().sort(_u),r=0,u=[1,1];return n.size=function(t){return arguments.length?(u=t,n):u},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},uu(n,e)},oa.layout.tree=function(){function n(n,u){var s=a.call(this,n,u),f=s[0],h=t(f);if(au(h,e),h.parent.m=-h.z,iu(h,r),c)iu(f,i);else{var g=f,p=f,v=f;iu(f,function(n){n.x<g.x&&(g=n),n.x>p.x&&(p=n),n.depth>v.depth&&(v=n)});var d=o(g,p)/2-g.x,m=l[0]/(p.x+o(p,g)/2+d),y=l[1]/(v.depth||1);iu(f,function(n){n.x=(n.x+d)*m,n.y=n.depth*y})}return s}function t(n){for(var t,e={A:null,children:[n]},r=[e];null!=(t=r.pop());)for(var u,i=t.children,a=0,o=i.length;o>a;++a)r.push((i[a]=u={_:i[a],parent:t,children:(u=i[a].children)&&u.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:a}).a=u);return e.children[0]}function e(n){var t=n.children,e=n.parent.children,r=n.i?e[n.i-1]:null;if(t.length){Du(n);var i=(t[0].z+t[t.length-1].z)/2;r?(n.z=r.z+o(n._,r._),n.m=n.z-i):n.z=i}else r&&(n.z=r.z+o(n._,r._));n.parent.A=u(n,r,n.parent.A||e[0])}function r(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function u(n,t,e){if(t){for(var r,u=n,i=n,a=t,l=u.parent.children[0],c=u.m,s=i.m,f=a.m,h=l.m;a=Tu(a),u=qu(u),a&&u;)l=qu(l),i=Tu(i),i.a=n,r=a.z+f-u.z-c+o(a._,u._),r>0&&(Ru(Pu(a,n,e),n,r),c+=r,s+=r),f+=a.m,c+=u.m,h+=l.m,s+=i.m;a&&!Tu(i)&&(i.t=a,i.m+=f-s),u&&!qu(l)&&(l.t=u,l.m+=c-h,e=n)}return e}function i(n){n.x*=l[0],n.y=n.depth*l[1]}var a=oa.layout.hierarchy().sort(null).value(null),o=Lu,l=[1,1],c=null;return n.separation=function(t){return arguments.length?(o=t,n):o},n.size=function(t){return arguments.length?(c=null==(l=t)?i:null,n):c?null:l},n.nodeSize=function(t){return arguments.length?(c=null==(l=t)?null:i,n):c?l:null},uu(n,a)},oa.layout.cluster=function(){function n(n,i){var a,o=t.call(this,n,i),l=o[0],c=0;au(l,function(n){var t=n.children;t&&t.length?(n.x=ju(t),n.y=Uu(t)):(n.x=a?c+=e(n,a):0,n.y=0,a=n)});var s=Fu(l),f=Hu(l),h=s.x-e(s,f)/2,g=f.x+e(f,s)/2;return au(l,u?function(n){n.x=(n.x-l.x)*r[0],n.y=(l.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(l.y?n.y/l.y:1))*r[1]}),o}var t=oa.layout.hierarchy().sort(null).value(null),e=Lu,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},uu(n,t)},oa.layout.treemap=function(){function n(n,t){for(var e,r,u=-1,i=n.length;++u<i;)r=(e=n[u]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var i=e.children;if(i&&i.length){var a,o,l,c=f(e),s=[],h=i.slice(),p=1/0,v="slice"===g?c.dx:"dice"===g?c.dy:"slice-dice"===g?1&e.depth?c.dy:c.dx:Math.min(c.dx,c.dy);for(n(h,c.dx*c.dy/e.value),s.area=0;(l=h.length)>0;)s.push(a=h[l-1]),s.area+=a.area,"squarify"!==g||(o=r(s,v))<=p?(h.pop(),p=o):(s.area-=s.pop().area,u(s,v,c,!1),v=Math.min(c.dx,c.dy),s.length=s.area=0,p=1/0);s.length&&(u(s,v,c,!0),s.length=s.area=0),i.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var i,a=f(t),o=r.slice(),l=[];for(n(o,a.dx*a.dy/t.value),l.area=0;i=o.pop();)l.push(i),l.area+=i.area,null!=i.z&&(u(l,i.z?a.dx:a.dy,a,!o.length),l.length=l.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,u=0,i=1/0,a=-1,o=n.length;++a<o;)(e=n[a].area)&&(i>e&&(i=e),e>u&&(u=e));return r*=r,t*=t,r?Math.max(t*u*p/r,r/(t*i*p)):1/0}function u(n,t,e,r){var u,i=-1,a=n.length,o=e.x,c=e.y,s=t?l(n.area/t):0;
if(t==e.dx){for((r||s>e.dy)&&(s=e.dy);++i<a;)u=n[i],u.x=o,u.y=c,u.dy=s,o+=u.dx=Math.min(e.x+e.dx-o,s?l(u.area/s):0);u.z=!0,u.dx+=e.x+e.dx-o,e.y+=s,e.dy-=s}else{for((r||s>e.dx)&&(s=e.dx);++i<a;)u=n[i],u.x=o,u.y=c,u.dx=s,c+=u.dy=Math.min(e.y+e.dy-c,s?l(u.area/s):0);u.z=!1,u.dy+=e.y+e.dy-c,e.x+=s,e.dx-=s}}function i(r){var u=a||o(r),i=u[0];return i.x=i.y=0,i.value?(i.dx=c[0],i.dy=c[1]):i.dx=i.dy=0,a&&o.revalue(i),n([i],i.dx*i.dy/i.value),(a?e:t)(i),h&&(a=u),u}var a,o=oa.layout.hierarchy(),l=Math.round,c=[1,1],s=null,f=Ou,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return i.size=function(n){return arguments.length?(c=n,i):c},i.padding=function(n){function t(t){var e=n.call(i,t,t.depth);return null==e?Ou(t):Iu(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Iu(t,n)}if(!arguments.length)return s;var r;return f=null==(s=n)?Ou:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,i},i.round=function(n){return arguments.length?(l=n?Math.round:Number,i):l!=Number},i.sticky=function(n){return arguments.length?(h=n,a=null,i):h},i.ratio=function(n){return arguments.length?(p=n,i):p},i.mode=function(n){return arguments.length?(g=n+"",i):g},uu(i,o)},oa.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,u;do e=2*Math.random()-1,r=2*Math.random()-1,u=e*e+r*r;while(!u||u>1);return n+t*e*Math.sqrt(-2*Math.log(u)/u)}},logNormal:function(){var n=oa.random.normal.apply(oa,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=oa.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},oa.scale={};var Sl={floor:y,ceil:y};oa.scale.linear=function(){return Wu([0,1],[0,1],Mr,!1)};var kl={s:1,g:1,p:1,r:1,e:1};oa.scale.log=function(){return ri(oa.scale.linear().domain([0,1]),10,!0,[1,10])};var Nl=oa.format(".0e"),El={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};oa.scale.pow=function(){return ui(oa.scale.linear(),1,[0,1])},oa.scale.sqrt=function(){return oa.scale.pow().exponent(.5)},oa.scale.ordinal=function(){return ai([],{t:"range",a:[[]]})},oa.scale.category10=function(){return oa.scale.ordinal().range(Al)},oa.scale.category20=function(){return oa.scale.ordinal().range(Cl)},oa.scale.category20b=function(){return oa.scale.ordinal().range(zl)},oa.scale.category20c=function(){return oa.scale.ordinal().range(Ll)};var Al=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(xn),Cl=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(xn),zl=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(xn),Ll=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(xn);oa.scale.quantile=function(){return oi([],[])},oa.scale.quantize=function(){return li(0,1,[0,1])},oa.scale.threshold=function(){return ci([.5],[0,1])},oa.scale.identity=function(){return si([0,1])},oa.svg={},oa.svg.arc=function(){function n(){var n=Math.max(0,+e.apply(this,arguments)),c=Math.max(0,+r.apply(this,arguments)),s=a.apply(this,arguments)-Oa,f=o.apply(this,arguments)-Oa,h=Math.abs(f-s),g=s>f?0:1;if(n>c&&(p=c,c=n,n=p),h>=Ha)return t(c,g)+(n?t(n,1-g):"")+"Z";var p,v,d,m,y,M,x,b,_,w,S,k,N=0,E=0,A=[];if((m=(+l.apply(this,arguments)||0)/2)&&(d=i===ql?Math.sqrt(n*n+c*c):+i.apply(this,arguments),g||(E*=-1),c&&(E=tn(d/c*Math.sin(m))),n&&(N=tn(d/n*Math.sin(m)))),c){y=c*Math.cos(s+E),M=c*Math.sin(s+E),x=c*Math.cos(f-E),b=c*Math.sin(f-E);var C=Math.abs(f-s-2*E)<=ja?0:1;if(E&&mi(y,M,x,b)===g^C){var z=(s+f)/2;y=c*Math.cos(z),M=c*Math.sin(z),x=b=null}}else y=M=0;if(n){_=n*Math.cos(f-N),w=n*Math.sin(f-N),S=n*Math.cos(s+N),k=n*Math.sin(s+N);var L=Math.abs(s-f+2*N)<=ja?0:1;if(N&&mi(_,w,S,k)===1-g^L){var q=(s+f)/2;_=n*Math.cos(q),w=n*Math.sin(q),S=k=null}}else _=w=0;if(h>Pa&&(p=Math.min(Math.abs(c-n)/2,+u.apply(this,arguments)))>.001){v=c>n^g?0:1;var T=p,R=p;if(ja>h){var D=null==S?[_,w]:null==x?[y,M]:Re([y,M],[S,k],[x,b],[_,w]),P=y-D[0],U=M-D[1],j=x-D[0],F=b-D[1],H=1/Math.sin(Math.acos((P*j+U*F)/(Math.sqrt(P*P+U*U)*Math.sqrt(j*j+F*F)))/2),O=Math.sqrt(D[0]*D[0]+D[1]*D[1]);R=Math.min(p,(n-O)/(H-1)),T=Math.min(p,(c-O)/(H+1))}if(null!=x){var I=yi(null==S?[_,w]:[S,k],[y,M],c,T,g),Y=yi([x,b],[_,w],c,T,g);p===T?A.push("M",I[0],"A",T,",",T," 0 0,",v," ",I[1],"A",c,",",c," 0 ",1-g^mi(I[1][0],I[1][1],Y[1][0],Y[1][1]),",",g," ",Y[1],"A",T,",",T," 0 0,",v," ",Y[0]):A.push("M",I[0],"A",T,",",T," 0 1,",v," ",Y[0])}else A.push("M",y,",",M);if(null!=S){var Z=yi([y,M],[S,k],n,-R,g),V=yi([_,w],null==x?[y,M]:[x,b],n,-R,g);p===R?A.push("L",V[0],"A",R,",",R," 0 0,",v," ",V[1],"A",n,",",n," 0 ",g^mi(V[1][0],V[1][1],Z[1][0],Z[1][1]),",",1-g," ",Z[1],"A",R,",",R," 0 0,",v," ",Z[0]):A.push("L",V[0],"A",R,",",R," 0 0,",v," ",Z[0])}else A.push("L",_,",",w)}else A.push("M",y,",",M),null!=x&&A.push("A",c,",",c," 0 ",C,",",g," ",x,",",b),A.push("L",_,",",w),null!=S&&A.push("A",n,",",n," 0 ",L,",",1-g," ",S,",",k);return A.push("Z"),A.join("")}function t(n,t){return"M0,"+n+"A"+n+","+n+" 0 1,"+t+" 0,"+-n+"A"+n+","+n+" 0 1,"+t+" 0,"+n}var e=hi,r=gi,u=fi,i=ql,a=pi,o=vi,l=di;return n.innerRadius=function(t){return arguments.length?(e=En(t),n):e},n.outerRadius=function(t){return arguments.length?(r=En(t),n):r},n.cornerRadius=function(t){return arguments.length?(u=En(t),n):u},n.padRadius=function(t){return arguments.length?(i=t==ql?ql:En(t),n):i},n.startAngle=function(t){return arguments.length?(a=En(t),n):a},n.endAngle=function(t){return arguments.length?(o=En(t),n):o},n.padAngle=function(t){return arguments.length?(l=En(t),n):l},n.centroid=function(){var n=(+e.apply(this,arguments)+ +r.apply(this,arguments))/2,t=(+a.apply(this,arguments)+ +o.apply(this,arguments))/2-Oa;return[Math.cos(t)*n,Math.sin(t)*n]},n};var ql="auto";oa.svg.line=function(){return Mi(y)};var Tl=oa.map({linear:xi,"linear-closed":bi,step:_i,"step-before":wi,"step-after":Si,basis:zi,"basis-open":Li,"basis-closed":qi,bundle:Ti,cardinal:Ei,"cardinal-open":ki,"cardinal-closed":Ni,monotone:Fi});Tl.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var Rl=[0,2/3,1/3,0],Dl=[0,1/3,2/3,0],Pl=[0,1/6,2/3,1/6];oa.svg.line.radial=function(){var n=Mi(Hi);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},wi.reverse=Si,Si.reverse=wi,oa.svg.area=function(){return Oi(y)},oa.svg.area.radial=function(){var n=Oi(Hi);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},oa.svg.chord=function(){function n(n,o){var l=t(this,i,n,o),c=t(this,a,n,o);return"M"+l.p0+r(l.r,l.p1,l.a1-l.a0)+(e(l,c)?u(l.r,l.p1,l.r,l.p0):u(l.r,l.p1,c.r,c.p0)+r(c.r,c.p1,c.a1-c.a0)+u(c.r,c.p1,l.r,l.p0))+"Z"}function t(n,t,e,r){var u=t.call(n,e,r),i=o.call(n,u,r),a=l.call(n,u,r)-Oa,s=c.call(n,u,r)-Oa;return{r:i,a0:a,a1:s,p0:[i*Math.cos(a),i*Math.sin(a)],p1:[i*Math.cos(s),i*Math.sin(s)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>ja)+",1 "+t}function u(n,t,e,r){return"Q 0,0 "+r}var i=Me,a=xe,o=Ii,l=pi,c=vi;return n.radius=function(t){return arguments.length?(o=En(t),n):o},n.source=function(t){return arguments.length?(i=En(t),n):i},n.target=function(t){return arguments.length?(a=En(t),n):a},n.startAngle=function(t){return arguments.length?(l=En(t),n):l},n.endAngle=function(t){return arguments.length?(c=En(t),n):c},n},oa.svg.diagonal=function(){function n(n,u){var i=t.call(this,n,u),a=e.call(this,n,u),o=(i.y+a.y)/2,l=[i,{x:i.x,y:o},{x:a.x,y:o},a];return l=l.map(r),"M"+l[0]+"C"+l[1]+" "+l[2]+" "+l[3]}var t=Me,e=xe,r=Yi;return n.source=function(e){return arguments.length?(t=En(e),n):t},n.target=function(t){return arguments.length?(e=En(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},oa.svg.diagonal.radial=function(){var n=oa.svg.diagonal(),t=Yi,e=n.projection;return n.projection=function(n){return arguments.length?e(Zi(t=n)):t},n},oa.svg.symbol=function(){function n(n,r){return(Ul.get(t.call(this,n,r))||$i)(e.call(this,n,r))}var t=Xi,e=Vi;return n.type=function(e){return arguments.length?(t=En(e),n):t},n.size=function(t){return arguments.length?(e=En(t),n):e},n};var Ul=oa.map({circle:$i,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*Fl)),e=t*Fl;return"M0,"+-t+"L"+e+",0 0,"+t+" "+-e+",0Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/jl),e=t*jl/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/jl),e=t*jl/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});oa.svg.symbolTypes=Ul.keys();var jl=Math.sqrt(3),Fl=Math.tan(30*Ia);Aa.transition=function(n){for(var t,e,r=Hl||++Zl,u=Ki(n),i=[],a=Ol||{time:Date.now(),ease:Nr,delay:0,duration:250},o=-1,l=this.length;++o<l;){i.push(t=[]);for(var c=this[o],s=-1,f=c.length;++s<f;)(e=c[s])&&Qi(e,s,u,r,a),t.push(e)}return Wi(i,u,r)},Aa.interrupt=function(n){return this.each(null==n?Il:Bi(Ki(n)))};var Hl,Ol,Il=Bi(Ki()),Yl=[],Zl=0;Yl.call=Aa.call,Yl.empty=Aa.empty,Yl.node=Aa.node,Yl.size=Aa.size,oa.transition=function(n,t){return n&&n.transition?Hl?n.transition(t):n:oa.selection().transition(n)},oa.transition.prototype=Yl,Yl.select=function(n){var t,e,r,u=this.id,i=this.namespace,a=[];n=A(n);for(var o=-1,l=this.length;++o<l;){a.push(t=[]);for(var c=this[o],s=-1,f=c.length;++s<f;)(r=c[s])&&(e=n.call(r,r.__data__,s,o))?("__data__"in r&&(e.__data__=r.__data__),Qi(e,s,i,u,r[i][u]),t.push(e)):t.push(null)}return Wi(a,i,u)},Yl.selectAll=function(n){var t,e,r,u,i,a=this.id,o=this.namespace,l=[];n=C(n);for(var c=-1,s=this.length;++c<s;)for(var f=this[c],h=-1,g=f.length;++h<g;)if(r=f[h]){i=r[o][a],e=n.call(r,r.__data__,h,c),l.push(t=[]);for(var p=-1,v=e.length;++p<v;)(u=e[p])&&Qi(u,p,o,a,i),t.push(u)}return Wi(l,o,a)},Yl.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=O(n));for(var i=0,a=this.length;a>i;i++){u.push(t=[]);for(var e=this[i],o=0,l=e.length;l>o;o++)(r=e[o])&&n.call(r,r.__data__,o,i)&&t.push(r)}return Wi(u,this.namespace,this.id)},Yl.tween=function(n,t){var e=this.id,r=this.namespace;return arguments.length<2?this.node()[r][e].tween.get(n):Y(this,null==t?function(t){t[r][e].tween.remove(n)}:function(u){u[r][e].tween.set(n,t)})},Yl.attr=function(n,t){function e(){this.removeAttribute(o)}function r(){this.removeAttributeNS(o.space,o.local)}function u(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(o);return e!==n&&(t=a(e,n),function(n){this.setAttribute(o,t(n))})})}function i(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(o.space,o.local);return e!==n&&(t=a(e,n),function(n){this.setAttributeNS(o.space,o.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var a="transform"==n?$r:Mr,o=oa.ns.qualify(n);return Ji(this,"attr."+n,t,o.local?i:u)},Yl.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(u));return r&&function(n){this.setAttribute(u,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(u.space,u.local));return r&&function(n){this.setAttributeNS(u.space,u.local,r(n))}}var u=oa.ns.qualify(n);return this.tween("attr."+n,u.local?r:e)},Yl.style=function(n,e,r){function u(){this.style.removeProperty(n)}function i(e){return null==e?u:(e+="",function(){var u,i=t(this).getComputedStyle(this,null).getPropertyValue(n);return i!==e&&(u=Mr(i,e),function(t){this.style.setProperty(n,u(t),r)})})}var a=arguments.length;if(3>a){if("string"!=typeof n){2>a&&(e="");for(r in n)this.style(r,n[r],e);return this}r=""}return Ji(this,"style."+n,e,i)},Yl.styleTween=function(n,e,r){function u(u,i){var a=e.call(this,u,i,t(this).getComputedStyle(this,null).getPropertyValue(n));return a&&function(t){this.style.setProperty(n,a(t),r)}}return arguments.length<3&&(r=""),this.tween("style."+n,u)},Yl.text=function(n){return Ji(this,"text",n,Gi)},Yl.remove=function(){var n=this.namespace;return this.each("end.transition",function(){var t;this[n].count<2&&(t=this.parentNode)&&t.removeChild(this)})},Yl.ease=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].ease:("function"!=typeof n&&(n=oa.ease.apply(oa,arguments)),Y(this,function(r){r[e][t].ease=n}))},Yl.delay=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].delay:Y(this,"function"==typeof n?function(r,u,i){r[e][t].delay=+n.call(r,r.__data__,u,i)}:(n=+n,function(r){r[e][t].delay=n}))},Yl.duration=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].duration:Y(this,"function"==typeof n?function(r,u,i){r[e][t].duration=Math.max(1,n.call(r,r.__data__,u,i))}:(n=Math.max(1,n),function(r){r[e][t].duration=n}))},Yl.each=function(n,t){var e=this.id,r=this.namespace;if(arguments.length<2){var u=Ol,i=Hl;try{Hl=e,Y(this,function(t,u,i){Ol=t[r][e],n.call(t,t.__data__,u,i)})}finally{Ol=u,Hl=i}}else Y(this,function(u){var i=u[r][e];(i.event||(i.event=oa.dispatch("start","end","interrupt"))).on(n,t)});return this},Yl.transition=function(){for(var n,t,e,r,u=this.id,i=++Zl,a=this.namespace,o=[],l=0,c=this.length;c>l;l++){o.push(n=[]);for(var t=this[l],s=0,f=t.length;f>s;s++)(e=t[s])&&(r=e[a][u],Qi(e,s,a,i,{time:r.time,ease:r.ease,delay:r.delay+r.duration,duration:r.duration})),n.push(e)}return Wi(o,a,i)},oa.svg.axis=function(){function n(n){n.each(function(){var n,c=oa.select(this),s=this.__chart__||e,f=this.__chart__=e.copy(),h=null==l?f.ticks?f.ticks.apply(f,o):f.domain():l,g=null==t?f.tickFormat?f.tickFormat.apply(f,o):y:t,p=c.selectAll(".tick").data(h,f),v=p.enter().insert("g",".domain").attr("class","tick").style("opacity",Pa),d=oa.transition(p.exit()).style("opacity",Pa).remove(),m=oa.transition(p.order()).style("opacity",1),M=Math.max(u,0)+a,x=Zu(f),b=c.selectAll(".domain").data([0]),_=(b.enter().append("path").attr("class","domain"),oa.transition(b));v.append("line"),v.append("text");var w,S,k,N,E=v.select("line"),A=m.select("line"),C=p.select("text").text(g),z=v.select("text"),L=m.select("text"),q="top"===r||"left"===r?-1:1;if("bottom"===r||"top"===r?(n=na,w="x",k="y",S="x2",N="y2",C.attr("dy",0>q?"0em":".71em").style("text-anchor","middle"),_.attr("d","M"+x[0]+","+q*i+"V0H"+x[1]+"V"+q*i)):(n=ta,w="y",k="x",S="y2",N="x2",C.attr("dy",".32em").style("text-anchor",0>q?"end":"start"),_.attr("d","M"+q*i+","+x[0]+"H0V"+x[1]+"H"+q*i)),E.attr(N,q*u),z.attr(k,q*M),A.attr(S,0).attr(N,q*u),L.attr(w,0).attr(k,q*M),f.rangeBand){var T=f,R=T.rangeBand()/2;s=f=function(n){return T(n)+R}}else s.rangeBand?s=f:d.call(n,f,s);v.call(n,s,f),m.call(n,f,f)})}var t,e=oa.scale.linear(),r=Vl,u=6,i=6,a=3,o=[10],l=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Xl?t+"":Vl,n):r},n.ticks=function(){return arguments.length?(o=ca(arguments),n):o},n.tickValues=function(t){return arguments.length?(l=t,n):l},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(u=+t,i=+arguments[e-1],n):u},n.innerTickSize=function(t){return arguments.length?(u=+t,n):u},n.outerTickSize=function(t){return arguments.length?(i=+t,n):i},n.tickPadding=function(t){return arguments.length?(a=+t,n):a},n.tickSubdivide=function(){return arguments.length&&n},n};var Vl="bottom",Xl={top:1,right:1,bottom:1,left:1};oa.svg.brush=function(){function n(t){t.each(function(){var t=oa.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",i).on("touchstart.brush",i),a=t.selectAll(".background").data([0]);a.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),t.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var o=t.selectAll(".resize").data(v,y);o.exit().remove(),o.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return $l[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),o.style("display",n.empty()?"none":null);var l,f=oa.transition(t),h=oa.transition(a);c&&(l=Zu(c),h.attr("x",l[0]).attr("width",l[1]-l[0]),r(f)),s&&(l=Zu(s),h.attr("y",l[0]).attr("height",l[1]-l[0]),u(f)),e(f)})}function e(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+f[+/e$/.test(n)]+","+h[+/^s/.test(n)]+")"})}function r(n){n.select(".extent").attr("x",f[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",f[1]-f[0])}function u(n){n.select(".extent").attr("y",h[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",h[1]-h[0])}function i(){function i(){32==oa.event.keyCode&&(C||(M=null,L[0]-=f[1],L[1]-=h[1],C=2),S())}function v(){32==oa.event.keyCode&&2==C&&(L[0]+=f[1],L[1]+=h[1],C=0,S())}function d(){var n=oa.mouse(b),t=!1;x&&(n[0]+=x[0],n[1]+=x[1]),C||(oa.event.altKey?(M||(M=[(f[0]+f[1])/2,(h[0]+h[1])/2]),L[0]=f[+(n[0]<M[0])],L[1]=h[+(n[1]<M[1])]):M=null),E&&m(n,c,0)&&(r(k),t=!0),A&&m(n,s,1)&&(u(k),t=!0),t&&(e(k),w({type:"brush",mode:C?"move":"resize"}))}function m(n,t,e){var r,u,i=Zu(t),l=i[0],c=i[1],s=L[e],v=e?h:f,d=v[1]-v[0];return C&&(l-=s,c-=d+s),r=(e?p:g)?Math.max(l,Math.min(c,n[e])):n[e],C?u=(r+=s)+d:(M&&(s=Math.max(l,Math.min(c,2*M[e]-r))),r>s?(u=r,r=s):u=s),v[0]!=r||v[1]!=u?(e?o=null:a=null,v[0]=r,v[1]=u,!0):void 0}function y(){d(),k.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),oa.select("body").style("cursor",null),q.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),z(),w({type:"brushend"})}var M,x,b=this,_=oa.select(oa.event.target),w=l.of(b,arguments),k=oa.select(b),N=_.datum(),E=!/^(n|s)$/.test(N)&&c,A=!/^(e|w)$/.test(N)&&s,C=_.classed("extent"),z=W(b),L=oa.mouse(b),q=oa.select(t(b)).on("keydown.brush",i).on("keyup.brush",v);if(oa.event.changedTouches?q.on("touchmove.brush",d).on("touchend.brush",y):q.on("mousemove.brush",d).on("mouseup.brush",y),k.interrupt().selectAll("*").interrupt(),C)L[0]=f[0]-L[0],L[1]=h[0]-L[1];else if(N){var T=+/w$/.test(N),R=+/^n/.test(N);x=[f[1-T]-L[0],h[1-R]-L[1]],L[0]=f[T],L[1]=h[R]}else oa.event.altKey&&(M=L.slice());k.style("pointer-events","none").selectAll(".resize").style("display",null),oa.select("body").style("cursor",_.style("cursor")),w({type:"brushstart"}),d()}var a,o,l=N(n,"brushstart","brush","brushend"),c=null,s=null,f=[0,0],h=[0,0],g=!0,p=!0,v=Bl[0];return n.event=function(n){n.each(function(){var n=l.of(this,arguments),t={x:f,y:h,i:a,j:o},e=this.__chart__||t;this.__chart__=t,Hl?oa.select(this).transition().each("start.brush",function(){a=e.i,o=e.j,f=e.x,h=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=xr(f,t.x),r=xr(h,t.y);return a=o=null,function(u){f=t.x=e(u),h=t.y=r(u),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){a=t.i,o=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,v=Bl[!c<<1|!s],n):c},n.y=function(t){return arguments.length?(s=t,v=Bl[!c<<1|!s],n):s},n.clamp=function(t){return arguments.length?(c&&s?(g=!!t[0],p=!!t[1]):c?g=!!t:s&&(p=!!t),n):c&&s?[g,p]:c?g:s?p:null},n.extent=function(t){var e,r,u,i,l;return arguments.length?(c&&(e=t[0],r=t[1],s&&(e=e[0],r=r[0]),a=[e,r],c.invert&&(e=c(e),r=c(r)),e>r&&(l=e,e=r,r=l),(e!=f[0]||r!=f[1])&&(f=[e,r])),s&&(u=t[0],i=t[1],c&&(u=u[1],i=i[1]),o=[u,i],s.invert&&(u=s(u),i=s(i)),u>i&&(l=u,u=i,i=l),(u!=h[0]||i!=h[1])&&(h=[u,i])),n):(c&&(a?(e=a[0],r=a[1]):(e=f[0],r=f[1],c.invert&&(e=c.invert(e),r=c.invert(r)),e>r&&(l=e,e=r,r=l))),s&&(o?(u=o[0],i=o[1]):(u=h[0],i=h[1],s.invert&&(u=s.invert(u),i=s.invert(i)),u>i&&(l=u,u=i,i=l))),c&&s?[[e,u],[r,i]]:c?[e,r]:s&&[u,i])},n.clear=function(){return n.empty()||(f=[0,0],h=[0,0],a=o=null),n},n.empty=function(){return!!c&&f[0]==f[1]||!!s&&h[0]==h[1]},oa.rebind(n,l,"on")};var $l={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Bl=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Wl=go.format=xo.timeFormat,Jl=Wl.utc,Gl=Jl("%Y-%m-%dT%H:%M:%S.%LZ");Wl.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?ea:Gl,ea.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},ea.toString=Gl.toString,go.second=On(function(n){return new po(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),go.seconds=go.second.range,go.seconds.utc=go.second.utc.range,go.minute=On(function(n){return new po(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),go.minutes=go.minute.range,go.minutes.utc=go.minute.utc.range,go.hour=On(function(n){var t=n.getTimezoneOffset()/60;return new po(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),go.hours=go.hour.range,go.hours.utc=go.hour.utc.range,go.month=On(function(n){return n=go.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),go.months=go.month.range,go.months.utc=go.month.utc.range;var Kl=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Ql=[[go.second,1],[go.second,5],[go.second,15],[go.second,30],[go.minute,1],[go.minute,5],[go.minute,15],[go.minute,30],[go.hour,1],[go.hour,3],[go.hour,6],[go.hour,12],[go.day,1],[go.day,2],[go.week,1],[go.month,1],[go.month,3],[go.year,1]],nc=Wl.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",zt]]),tc={range:function(n,t,e){return oa.range(Math.ceil(n/e)*e,+t,e).map(ua)},floor:y,ceil:y};Ql.year=go.year,go.scale=function(){return ra(oa.scale.linear(),Ql,nc)};var ec=Ql.map(function(n){return[n[0].utc,n[1]]}),rc=Jl.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",zt]]);ec.year=go.year.utc,go.scale.utc=function(){return ra(oa.scale.linear(),ec,rc)},oa.text=An(function(n){return n.responseText}),oa.json=function(n,t){return Cn(n,"application/json",ia,t)},oa.html=function(n,t){return Cn(n,"text/html",aa,t)},oa.xml=An(function(n){return n.responseXML}),"function"==typeof define&&define.amd?(this.d3=oa,define(oa)):"object"==typeof module&&module.exports?module.exports=oa:this.d3=oa}();
