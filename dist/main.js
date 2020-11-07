(()=>{"use strict";function e(e,t){var n=function(e){for(var t=e.split(/([#.])/),n="",o="",i=[],a=0;a<t.length;a++){var r=t[a];"#"===r?o=t[++a]:"."===r?i.push(t[++a]):r.length&&(n=r)}return{tag:n||"div",id:o,className:i.join(" ")}}(e),o=n.tag,i=n.id,a=n.className,r=t?document.createElementNS(t,o):document.createElement(o);return i&&(r.id=i),a&&(t?r.setAttribute("class",a):r.className=a),r}function t(e,t){var o=h(e),i=h(t);return t===i&&i.__redom_view&&(t=i.__redom_view),i.parentNode&&(n(0,i,o),o.removeChild(i)),t}function n(e,t,n){var i=t.__redom_lifecycle;if(o(i))t.__redom_lifecycle={};else{var a=n;for(t.__redom_mounted&&l(t,"onunmount");a;){var r=a.__redom_lifecycle||{};for(var c in i)r[c]&&(r[c]-=i[c]);o(r)&&(a.__redom_lifecycle=null),a=a.parentNode}}}function o(e){if(null==e)return!0;for(var t in e)if(e[t])return!1;return!0}var i=["onmount","onremount","onunmount"],a="undefined"!=typeof window&&"ShadowRoot"in window;function r(e,t,o,r){var c=h(e),d=h(t);t===d&&d.__redom_view&&(t=d.__redom_view),t!==d&&(d.__redom_view=t);var s=d.__redom_mounted,u=d.parentNode;return s&&u!==c&&n(0,d,u),null!=o?r?c.replaceChild(d,h(o)):c.insertBefore(d,h(o)):c.appendChild(d),function(e,t,n,o){for(var r=t.__redom_lifecycle||(t.__redom_lifecycle={}),c=n===o,d=!1,s=0,u=i;s<u.length;s+=1){var m=u[s];c||e!==t&&m in e&&(r[m]=(r[m]||0)+1),r[m]&&(d=!0)}if(d){var f=n,p=!1;for((c||f&&f.__redom_mounted)&&(l(t,c?"onremount":"onmount"),p=!0);f;){var v=f.parentNode,h=f.__redom_lifecycle||(f.__redom_lifecycle={});for(var _ in r)h[_]=(h[_]||0)+r[_];if(p)break;(f.nodeType===Node.DOCUMENT_NODE||a&&f instanceof ShadowRoot||v&&v.__redom_mounted)&&(l(f,c?"onremount":"onmount"),p=!0),f=v}}else t.__redom_lifecycle={}}(t,d,c,u),t}function l(e,t){"onmount"===t||"onremount"===t?e.__redom_mounted=!0:"onunmount"===t&&(e.__redom_mounted=!1);var n=e.__redom_lifecycle;if(n){var o=e.__redom_view,i=0;for(var a in o&&o[t]&&o[t](),n)a&&i++;if(i)for(var r=e.firstChild;r;){var c=r.nextSibling;l(r,t),r=c}}}function c(e,t,n){e.style[t]=null==n?"":n}var d="http://www.w3.org/1999/xlink";function s(e,t,n,o){var i=h(e);if("object"==typeof t)for(var a in t)s(i,a,t[a],o);else{var r=i instanceof SVGElement,l="function"==typeof n;if("style"===t&&"object"==typeof n)!function(e,t,n){var o=h(e);if("object"==typeof t)for(var i in t)c(o,i,t[i]);else c(o,t,void 0)}(i,n);else if(r&&l)i[t]=n;else if("dataset"===t)m(i,n);else if(r||!(t in i)&&!l||"list"===t){if(r&&"xlink"===t)return void u(i,n);o&&"class"===t&&(n=i.className+" "+n),null==n?i.removeAttribute(t):i.setAttribute(t,n)}else i[t]=n}}function u(e,t,n){if("object"==typeof t)for(var o in t)u(e,o,t[o]);else null!=n?e.setAttributeNS(d,t,n):e.removeAttributeNS(d,t,n)}function m(e,t,n){if("object"==typeof t)for(var o in t)m(e,o,t[o]);else null!=n?e.dataset[t]=n:delete e.dataset[t]}function f(e){return document.createTextNode(null!=e?e:"")}function p(e,t,n){for(var o=0,i=t;o<i.length;o+=1){var a=i[o];if(0===a||a){var l=typeof a;"function"===l?a(e):"string"===l||"number"===l?e.appendChild(f(a)):_(h(a))?r(e,a):a.length?p(e,a,n):"object"===l&&s(e,a,null,n)}}}function v(e){return"string"==typeof e?b(e):h(e)}function h(e){return e.nodeType&&e||!e.el&&e||h(e.el)}function _(e){return e&&e.nodeType}var g={};function b(e){for(var t,n=[],o=arguments.length-1;o-- >0;)n[o]=arguments[o+1];var i=typeof e;if("string"===i)t=w(e).cloneNode(!1);else if(_(e))t=e.cloneNode(!1);else{if("function"!==i)throw new Error("At least one argument required");var a=e;t=new(Function.prototype.bind.apply(a,[null].concat(n)))}return p(h(t),n,!0),t}var y=b;function w(t){return g[t]||(g[t]=e(t))}function E(e){for(var n=[],o=arguments.length-1;o-- >0;)n[o]=arguments[o+1];for(var i=h(e),a=L(e,n,i.firstChild);a;){var r=a.nextSibling;t(e,a),a=r}}function L(e,t,n){for(var o=n,i=new Array(t.length),a=0;a<t.length;a++)i[a]=t[a]&&h(t[a]);for(var l=0;l<t.length;l++){var c=t[l];if(c){var d=i[l];if(d!==o)if(_(d)){var s=o&&o.nextSibling,u=null!=c.__redom_index&&s===i[l+1];r(e,c,o,u),u&&(o=s)}else null!=c.length&&(o=L(e,c,o));else o=o.nextSibling}}return o}b.extend=function(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];var o=w(e);return b.bind.apply(b,[this,o].concat(t))};var C=function(e,t,n){this.View=e,this.initData=n,this.oldLookup={},this.lookup={},this.oldViews=[],this.views=[],null!=t&&(this.key="function"==typeof t?t:function(e){return function(t){return t[e]}}(t))};C.prototype.update=function(e,t){for(var n=this,o=n.View,i=n.key,a=n.initData,r=null!=i,l=this.lookup,c={},d=new Array(e.length),s=this.views,u=0;u<e.length;u++){var m=e[u],f=void 0;if(r){var p=i(m);f=l[p]||new o(a,m,u,e),c[p]=f,f.__redom_id=p}else f=s[u]||new o(a,m,u,e);f.update&&f.update(m,u,e,t),h(f.el).__redom_view=f,d[u]=f}this.oldViews=s,this.views=d,this.oldLookup=l,this.lookup=c};var k=function(e,t,n,o){this.View=t,this.initData=o,this.views=[],this.pool=new C(t,n,o),this.el=v(e),this.keySet=null!=n};k.prototype.update=function(e,n){void 0===e&&(e=[]);var o=this.keySet,i=this.views;this.pool.update(e,n);var a=this.pool,r=a.views,l=a.lookup;if(o)for(var c=0;c<i.length;c++){var d=i[c];null==l[d.__redom_id]&&(d.__redom_index=null,t(this,d))}for(var s=0;s<r.length;s++)r[s].__redom_index=s;E(this,r),o&&(this.lookup=l),this.views=r},k.extend=function(e,t,n,o){return k.bind(k,e,t,n,o)};var x="http://www.w3.org/2000/svg",N={};function A(e){for(var t,n=[],o=arguments.length-1;o-- >0;)n[o]=arguments[o+1];var i=typeof e;if("string"===i)t=S(e).cloneNode(!1);else if(_(e))t=e.cloneNode(!1);else{if("function"!==i)throw new Error("At least one argument required");var a=e;t=new(Function.prototype.bind.apply(a,[null].concat(n)))}return p(h(t),n,!0),t}function S(t){return N[t]||(N[t]=e(t,x))}function T(){console.log("rendering home elements")}function j(){document.getElementById("tab").innerHTML=""}function M(e=T){switch(e){case"home":j(),T();break;case"menu":j(),function(){console.log("rendering menu elements");let e=document.getElementById("tab"),t=document.createElement("img");t.src="../../../assets/images/main.jpg",t.classList="img img-fluid",document.createElement("div").classList="container",e.appendChild(t)}();break;case"contact":j(),function(){console.log("rendering contact elements");const e=y("h1","Hello RE:DOM!");r(document.body,e)}()}}A.extend=function(e){var t=S(e);return A.bind(this,t)},A.ns=x,function(){let e=document.getElementById("navbar"),t=document.createElement("nav");t.classList="navbar navbar-expand-md fixed-top navbar-dark bg-dark";let n=document.createElement("a");n.classList="navbar-brand",n.href="#";let o=document.createElement("span");o.classList="fas fa-pepper-hot fa-2x",n.appendChild(o);let i=document.createElement("button");i.classList="navbar-toggler",i.type="button",i.setAttribute("aria-controls","navbarNav"),i.setAttribute("data-toggle","collapse"),i.setAttribute("data-target","#navbarNav"),i.setAttribute("aria-expanded","false"),i.setAttribute("aria-label","Toggle navigation");let a=document.createElement("span");a.classList="navbar-toggler-icon",i.appendChild(a);let r=document.createElement("span");r.classList="brand",r.innerHTML="Dragonstar";let l=document.createElement("div");l.classList="collapse navbar-collapse",l.id="navbarNav";let c=document.createElement("ul");c.classList="navbar-nav ml-auto";let d=document.createElement("li");d.classList="nav-item";let s=document.createElement("a");s.href="#",s.classList="nav-link",s.innerHTML="Home",s.id="home",d.appendChild(s),c.appendChild(d);let u=document.createElement("li");u.classList="nav-item";let m=document.createElement("a");m.id="menu",m.href="#",m.classList="nav-link",m.innerHTML="Menu",u.appendChild(m),c.appendChild(u);let f=document.createElement("li");f.classList="nav-item";let p=document.createElement("a");p.id="contact",p.href="#",p.classList="nav-link",p.innerHTML="Contact",f.appendChild(p),c.appendChild(f),t.appendChild(n),t.appendChild(r),t.appendChild(i),l.appendChild(c),t.appendChild(l),e.appendChild(t)}(),function(){let e=document.createElement("footer");e.classList="page-footer fixed-bottom my-3";let t=document.createElement("div");t.classList="container-fluid text-center";let n=document.createElement("div");n.classList="row align-items-center";let o=document.createElement("div");o.classList="col align-items-center";let i=document.createElement("a");i.classList="nav-item nav-link footer-icon mx-2",i.href="#";let a=document.createElement("i");a.classList="fab fa-twitter",i.appendChild(a);let r=document.createElement("a");r.classList="nav-item nav-link footer-icon mx-2",r.href="#";let l=document.createElement("i");l.classList="fab fa-facebook",r.appendChild(l);let c=document.createElement("a");c.classList="nav-item nav-link footer-icon mx-2",c.href="#";let d=document.createElement("i");d.classList="fab fa-instagram",c.appendChild(d),o.appendChild(i),o.appendChild(r),o.appendChild(c),n.appendChild(o),t.appendChild(n),e.appendChild(t),document.body.appendChild(e)}(),M(),function(){let e=document.getElementById("menu"),t=document.getElementById("home"),n=document.getElementById("contact");console.log("in addlisteners.js");let o=[e,t,n];console.log(o),o.forEach((function(e){console.log(e),e.addEventListener("click",(function(t){console.log(e.id),M(e.id)}))}))}()})();