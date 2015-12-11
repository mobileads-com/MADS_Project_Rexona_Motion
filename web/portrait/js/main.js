/*
 *
 * mads - version 2.00.01
 * Copyright (c) 2015, Ninjoe
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * https://en.wikipedia.org/wiki/MIT_License
 * https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
 *
 */
var Zepto=function(){function L(t){return null==t?String(t):j[S.call(t)]||"object"}function Z(t){return"function"==L(t)}function _(t){return null!=t&&t==t.window}function $(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return"object"==L(t)}function M(t){return D(t)&&!_(t)&&Object.getPrototypeOf(t)==Object.prototype}function R(t){return"number"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||c[F(t)]?e:e+"px"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(n,i,r){for(e in i)r&&(M(i[e])||A(i[e]))?(M(i[e])&&!M(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),B(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function U(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className||"",r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,T={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return T.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~T.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},T.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),M(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},T.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},T.isZ=function(t){return t instanceof T.Z},T.init=function(e,i){var r;if(!e)return T.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=T.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(T.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=T.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}}return T.Z(r,e)},n=function(t,e){return T.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},T.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return $(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=L,n.isFunction=Z,n.isWindow=_,n.isArray=A,n.isPlainObject=M,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(R(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(R(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):R(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(T.qsa(this[0],t)):this.map(function(){return T.qsa(this,t)}):n()},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:T.matches(i,t));)i=i!==e&&!$(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!$(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return U(e,t)},parent:function(t){return U(N(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){X(this,t)},this)})},prop:function(t,e){return t=P[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r,o=this[0];if(!o)return;if(r=getComputedStyle(o,""),"string"==typeof t)return o.style[C(t)]||r.getPropertyValue(t);if(A(t)){var s={};return n.each(t,function(t,e){s[e]=o.style[C(e)]||r.getPropertyValue(e)}),s}}var a="";if("string"==L(t))i||0===i?a=F(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}}):this},removeClass:function(e){return this.each(function(n){if("className"in this){if(e===t)return W(this,"");i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),W(this,i.trim())}})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?_(s)?s["inner"+i]:$(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:T.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),T.Z.prototype=n.fn,T.uniq=N,T.deserializeValue=Y,n.zepto=T,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function S(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){e.type in f&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=S(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function h(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function p(t,e,i,r){return t.global?h(e||n,i,r):void 0}function d(e){e.global&&0===t.active++&&p(e,null,"ajaxStart")}function m(e){e.global&&!--t.active&&p(e,null,"ajaxStop")}function g(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||p(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void p(e,n,"ajaxSend",[t,e])}function v(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),p(n,r,"ajaxSuccess",[e,n,t]),x(o,e,n)}function y(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),p(i,o,"ajaxError",[n,i,t||e]),x(e,n,i)}function x(t,e,n){var i=n.context;n.complete.call(i,e,t),p(n,i,"ajaxComplete",[e,n]),m(n)}function b(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function E(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function j(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=E(e.url,e.data),e.data=void 0)}function S(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function C(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?C(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/,l=n.createElement("a");l.href=window.location.href,t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?v(f[0],l,i,r):y(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),g(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:b,success:b,error:b,complete:b,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var a,o=t.extend({},e||{}),s=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===o[i]&&(o[i]=t.ajaxSettings[i]);d(o),o.crossDomain||(a=n.createElement("a"),a.href=o.url,a.href=a.href,o.crossDomain=l.protocol+"//"+l.host!=a.protocol+"//"+a.host),o.url||(o.url=window.location.toString()),j(o);var u=o.dataType,f=/\?.+=\?/.test(o.url);if(f&&(u="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=u&&"jsonp"!=u)||(o.url=E(o.url,"_="+Date.now())),"jsonp"==u)return f||(o.url=E(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,s);var C,h=o.accepts[u],p={},m=function(t,e){p[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,S=o.xhr(),T=S.setRequestHeader;if(s&&s.promise(S),o.crossDomain||m("X-Requested-With","XMLHttpRequest"),m("Accept",h||"*/*"),(h=o.mimeType||h)&&(h.indexOf(",")>-1&&(h=h.split(",",2)[0]),S.overrideMimeType&&S.overrideMimeType(h)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&m("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(r in o.headers)m(r,o.headers[r]);if(S.setRequestHeader=m,S.onreadystatechange=function(){if(4==S.readyState){S.onreadystatechange=b,clearTimeout(C);var e,n=!1;if(S.status>=200&&S.status<300||304==S.status||0==S.status&&"file:"==x){u=u||w(o.mimeType||S.getResponseHeader("content-type")),e=S.responseText;try{"script"==u?(1,eval)(e):"xml"==u?e=S.responseXML:"json"==u&&(e=c.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?y(n,"parsererror",S,o,s):v(e,S,o,s)}else y(S.statusText||null,S.status?"error":"abort",S,o,s)}},g(S,o)===!1)return S.abort(),y(null,"abort",S,o,s),S;if(o.xhrFields)for(r in o.xhrFields)S[r]=o.xhrFields[r];var N="async"in o?o.async:!0;S.open(o.type,o.url,N,o.username,o.password);for(r in p)T.apply(S,p[r]);return o.timeout>0&&(C=setTimeout(function(){S.onreadystatechange=b,S.abort(),y(null,"timeout",S,o,s)},o.timeout)),S.send(o.data?o.data:null),S},t.get=function(){return t.ajax(S.apply(null,arguments))},t.post=function(){var e=S.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=S.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=S(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(T(e)+"="+T(n))},C(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);
var njSwipe=function(t,e){this.ele=t,this.direction=e,this.startX,this.startY,this.startTime,this.allowedTime=300,this.threshold=150,this.restraint=200,this.bindEvents()};njSwipe.prototype.curry=function(t,e){e=e||window;var i=arguments;return function(){for(var s=[],n=0;n<arguments.length;n++)s.push(arguments[n]);for(var h=2;h<i.length;h++)s.push(i[h]);return t.apply(e,s)}},njSwipe.prototype.bindEvents=function(){this.ele.addEventListener("touchstart",this.curry(this.touchStart,this)),this.ele.addEventListener("mousedown",this.curry(this.touchStart,this)),this.ele.addEventListener("touchmove",this.curry(this.touchMove,this)),this.ele.addEventListener("mousemove",this.curry(this.touchMove,this)),this.ele.addEventListener("touchend",this.curry(this.touchEnd,this)),this.ele.addEventListener("mouseup",this.curry(this.touchEnd,this))},njSwipe.prototype.touchStart=function(t){t.preventDefault();var e="touchstart"==t.type?t.changedTouches[0]:t;this.startX=e.pageX,this.startY=e.pageY,this.startTime=(new Date).getTime()},njSwipe.prototype.touchMove=function(t){t.preventDefault()},njSwipe.prototype.touchEnd=function(t){t.preventDefault();var e,i="touchend"==t.type?t.changedTouches[0]:t,s=i.pageX-this.startX,n=i.pageY-this.startY,h=(new Date).getTime()-this.startTime;h<=this.allowedTime&&(Math.abs(s)>=this.threshold&&Math.abs(n)<=this.restraint?e=0>s?"swipeleft":"swiperight":Math.abs(n)>=this.threshold&&Math.abs(s)<=this.restraint&&(e=0>n?"swipeup":"swipedown")),this.triggerEvent(e)},njSwipe.prototype.triggerEvent=function(t){if(this.direction==t){var e=new Event(t);this.ele.dispatchEvent(e)}},function(){var t=Element.prototype.addEventListener;Element.prototype.addEventListener=function(e,i,s){return("swipeleft"==e||"swiperight"==e||"swipeup"==e||"swipedown"==e)&&new njSwipe(this,e),t.call(this,e,i,s)}}();
(function(f){f.fn.jrumble=function(g){var a=f.extend({x:2,y:2,rotation:1,speed:15,opacity:false,opacityMin:0.5},g);return this.each(function(){var b=f(this),h=a.x*2,i=a.y*2,k=a.rotation*2,g=a.speed===0?1:a.speed,m=a.opacity,n=a.opacityMin,l,j,o=function(){var e=Math.floor(Math.random()*(h+1))-h/2,a=Math.floor(Math.random()*(i+1))-i/2,c=Math.floor(Math.random()*(k+1))-k/2,d=m?Math.random()+n:1,e=e===0&&h!==0?Math.random()<0.5?1:-1:e,a=a===0&&i!==0?Math.random()<0.5?1:-1:a;b.css("display")==="inline"&&(l=true,b.css("display","inline-block"));b.css({position:"relative",left:e+"px",top:a+"px","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(Opacity="+d*100+")",filter:"alpha(opacity="+d*100+")","-moz-opacity":d,"-khtml-opacity":d,opacity:d,"-webkit-transform":"rotate("+c+"deg)","-moz-transform":"rotate("+c+"deg)","-ms-transform":"rotate("+c+"deg)","-o-transform":"rotate("+c+"deg)",transform:"rotate("+c+"deg)"})},p={left:0,top:0,"-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",filter:"alpha(opacity=100)","-moz-opacity":1,"-khtml-opacity":1,opacity:1,"-webkit-transform":"rotate(0deg)","-moz-transform":"rotate(0deg)","-ms-transform":"rotate(0deg)","-o-transform":"rotate(0deg)",transform:"rotate(0deg)"};b.bind({startRumble:function(a){a.stopPropagation();clearInterval(j);j=setInterval(o,g)},stopRumble:function(a){a.stopPropagation();clearInterval(j);l&&b.css("display","inline");b.css(p)}})})}})(Zepto);
!function(n){function t(){w("Executed emptyFunc, which does nothing.")}function e(){return b?(L.apply(D,arguments),!0):(w(arguments),!1)}function r(t,e,u){var o=t.shift();return u=u||e,e(o),0===t.length?!0:n.setTimeout(function(){return r(t,u,e)},o)}function u(n){var t,e=0,r=0;for(r=0,t=n.length;t>r;r+=1)e+=n[r];return function(t){var r,u,o=t/e,i=[];for(r=0,u=n.length;u>r;r+=1)i.push(n[r]*o);P.vibrate(i)}}function o(){var t=arguments,e=arguments.length;return function(r){function u(){t[o](i)}var o=0,i=r/e;for(o=0;e>o;o+=1)n.setTimeout(u,i)}}function i(){var n,e,i,a=arguments;for(n=a.length,e=0;n>e;e+=1)"function"!=typeof a[e]&&(a[e]=u(a[e]));return i=o(a),function(n){"number"==typeof n?i(n):r(n,i,t)}}function a(n){function e(e){"number"==typeof e?n(e):r(e,n,t)}if(arguments.length>1)n=i.apply(this,arguments);else if(n&&"function"!=typeof n&&n.length)n=u(n);else if(n&&"function"!=typeof n)return null;return e}function f(n){n.preventDefault(),E.push(new Date)}function s(){E=[],n.addEventListener("touchstart",f,!1),n.addEventListener("touchend",f,!1),n.addEventListener("mousedown",f,!1),n.addEventListener("mouseup",f,!1)}function c(){w(E),n.removeEventListener("touchstart",f),n.removeEventListener("touchend",f),n.removeEventListener("mousedown",f),n.removeEventListener("mouseup",f),E.length%2!==0&&E.push(new Date);var t,e,r,u=[];for(t=0,r=E.length;r>t&&(e=t+1,!(e>=r));t+=2)u.push(E[e]-E[t]);return u}function h(n){var t,r,u=[];if(100>n)u=n;else for(t=n/100,r=1;10>=r;r+=1)u.push(r*t),10>r&&u.push((10-r)*t);e(u)}function v(n){var t,r,u=[];if(100>n)u=n;else{for(t=n/100,r=1;10>=r;r+=1)u.push(r*t),10>r&&u.push((10-r)*t);u.reverse()}e(u)}function p(n){var t,r,u;t=n/27,r=2*t,u=3*t,e([r,t,r,t,r,2*t,u,t,u,2*t,r,t,r,t,r])}function l(n){var t,r,u;r=n/60,t=2*r,u=24*r,e([r,t,u,2*t,u,2*t,r])}function m(n){var t,r,u;r=4*n/22,t=2*r,u=r/2*5,e([r,t,u])}function g(n,t,r){var u=[t];for(n-=t;n>0;)n-=r,n-=t,u.push(r),u.push(t);e(u)}function d(n,e,u){var o;"number"==typeof n?g(n,e,u):(o=function(n){g(n,e,u)},r(n,o,t))}function y(n,t){return function(e){d(e,n,t)}}var b,E,L,w,D,P={};D=n.navigator,w=function(){w.history=w.history||[],w.history.push(arguments),n.console&&n.console.log(Array.prototype.slice.call(arguments))},L=D.vibrate||D.webkitVibrate||D.mozVibrate||D.msVibrate,b=!!L,P.enabled=b,P.record=s,P.finish=c,P.fadeIn=a(h),P.fadeOut=a(v),P.notification=a(p),P.heartbeat=a(l),P.clunk=a(m),P.pwm=d,P.createPatternPWM=y,P.createPattern=a,P.vibrate=e,n.Haptics=P}(this);
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.cssanimations=function(){return F("animationName")},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
window.PageTransitions=function(){function a(){o.each(function(){var a=$(this);a.data("originalClassList",a.attr("class"))}),o.eq(c).addClass("pt-page-current"),s.on("click",function(){return p?!1:(r>67&&(r=1),n(r),void++r)})}function n(a){var n=a.animation?a.animation:a;if(p)return!1;p=!0;var i=o.eq(c);a.showPage?c=a.showPage<=d-1?a.showPage:0:d-1>c?++c:c=0;var e=o.eq(c).addClass("pt-page-current"),s="",r="";switch(n){case 8:s="pt-page-fade",r="pt-page-moveFromTop pt-page-ontop";break;case 46:s="pt-page-rotateFoldLeft",r="pt-page-moveFromRightFade";break;case 47:s="pt-page-rotateFoldRight",r="pt-page-moveFromLeftFade"}i.addClass(s).on(l,function(){i.off(l),f=!0,g&&t(i,e,a.finished)}),e.addClass(r).on(l,function(){e.off(l),g=!0,f&&t(i,e,a.finished)}),u||t(i,e,a.finished)}function t(a,n,t){f=!1,g=!1,i(a,n),p=!1,t&&t()}function i(a,n){a.attr("class",a.data("originalClassList")),n.attr("class",n.data("originalClassList")+" pt-page-current")}var e=$("#jar"),o=e.children("div.pt-page"),s=$("#iterateEffects"),r=1,d=o.length,c=0,p=!1,f=!1,g=!1,m={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd",animation:"animationend"},l=m[Modernizr.prefixed("animation")],u=Modernizr.cssanimations;return a(),{init:a,nextPage:n}};
var ytComponent=function(t){this.player,this.replay=!1,this.container=t.container,this.width=t.width,this.height=t.height,this.videoId=t.videoId,this.tracker=t.tracker||function(){},this.autoplay=t.autoplay||!1,this.realTime,this.playTimeDone=[],this.loadAPI()};ytComponent.prototype.curry=function(t,e){e=e||window;var a=arguments;return function(){for(var i=[],r=0;r<arguments.length;r++)i.push(arguments[r]);for(var n=2;n<a.length;n++)i.push(a[n]);return t.apply(e,i)}},ytComponent.prototype.loadAPI=function(){var t=document.createElement("script");t.src="https://www.youtube.com/iframe_api";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)},ytComponent.prototype.loadVideo=function(){this.player=new YT.Player(this.container,{width:this.width,height:this.height,videoId:this.videoId,events:{onReady:this.curry(this.onPlayerReady,this),onStateChange:this.curry(this.onPlayerStateChange,this)}})},ytComponent.prototype.onPlayerReady=function(t,e){this.autoplay&&t.target.playVideo()},ytComponent.prototype.onPlayerStateChange=function(t){-1==t.data?this.tracker("E","unstarted"):0==t.data?(this.replay=!0,this.tracker("E","end")):1==t.data?this.replay?this.tracker("E","replay"):(this.realTime=setInterval(this.curry(this.videoPlayLength,this),100),this.tracker("E","playing")):2==t.data&&(clearInterval(this.realTime),this.tracker("E","paused"))},ytComponent.prototype.videoPlayLength=function(){if(this.replay)return void clearInterval(this.realTime);var t=this.player.getDuration(),e=this.player.getCurrentTime(),a=100*(Math.round(e/t*4)/4).toFixed(2);25==a&&-1==this.playTimeDone.indexOf(a)?(this.tracker("E","play_25"),this.tracker("E","rexona_video")):50==a&&-1==this.playTimeDone.indexOf(a)?this.tracker("E","play_50"):75==a&&-1==this.playTimeDone.indexOf(a)&&this.tracker("E","play_75"),this.playTimeDone.push(a);var i=0==this.player.getPlayerState();i&&clearInterval(this.realTime)};

var mads = function () {
    /* Get Tracker */
    if (typeof custTracker == 'undefined' && typeof rma != 'undefined') {
        this.custTracker = rma.customize.custTracker;
    } else if (typeof custTracker != 'undefined') {
        this.custTracker = custTracker;
    } else {
        this.custTracker = [];
    }

    /* Unique ID on each initialise */
    this.id = this.uniqId();

    /* Tracked tracker */
    this.tracked = [];

    /* Body Tag */
    this.bodyTag = document.getElementsByTagName('body')[0];

    /* Head Tag */
    this.headTag = document.getElementsByTagName('head')[0];

    /* RMA Widget - Content Area */
    this.contentTag = document.getElementById('rma-widget');

    /* URL Path */
    this.path = typeof rma != 'undefined' ? rma.customize.src : '';


};

/* Generate unique ID */
mads.prototype.uniqId = function () {
    return new Date().getTime();
};

/* Link Opner */
mads.prototype.linkOpener = function (url) {
    if (typeof url != "undefined" && url != "") {
        if (typeof mraid !== 'undefined') {
            mraid.open(url);
        } else {
            window.open(url);
        }
    }
};

/* tracker */
mads.prototype.tracker = function (tt, type, name, value) {


    console.log(type);
    /* 
     * name is used to make sure that particular tracker is tracked for only once
     * there might have the same type in different location, so it will need the name to differentiate them
     */
    name = name || type;

    if (typeof this.custTracker != 'undefined' && this.custTracker != '' && this.tracked.indexOf(name) == -1) {
        if(type === 'rexona_video' || type === 'rexona_lp' || type === 'pria' || type === 'wanita' || type === 'pria_swipe' || type === 'wanita_swipe') {
            for (var i = 0; i < this.custTracker.length; i++) {
                var img = document.createElement('img');

                if (typeof value == 'undefined') {
                    value = '';
                }

                /* Insert Macro */
                var src = this.custTracker[i].replace('{{type}}', type);
                src = src.replace('{{tt}}', tt);
                src = src.replace('{{value}}', value);
                /* */
                img.src = src + '&' + this.id;

                img.style.display = 'none';
                this.bodyTag.appendChild(img);

                this.tracked.push(name)
            }
        }

    }
};

/* Load JS File */
mads.prototype.loadJs = function (js, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = js;
    script.async = true;

    if (typeof callback != 'undefined') {
        script.onload = callback;
    }

    this.headTag.appendChild(script);
};

/* Load CSS File */
mads.prototype.loadCss = function (href) {
    var link = document.createElement('link');
    link.href = href;
    link.setAttribute('type', 'text/css');
    link.setAttribute('rel', 'stylesheet');

    this.headTag.appendChild(link);
};


var playMolecule = function (selector, opt) {
    var moleculeImg = new Image();
    moleculeImg.src = 'img/bubblesprite.png';
    function moleculeSprite(options) {
        var that = {},
            frameIndex = 0,
            tickCount = 0,
            ticksPerFrame = options.ticksPerFrame || 0,
            numberOfFrames = options.numberOfFrames || 1;
        that.context = options.context;
        that.width = options.width;
        that.height = options.height;
        that.image = options.image;

        that.render = function () {
            that.context.clearRect(0, 0, that.width, that.height);
            that.context.drawImage(
                that.image,
                frameIndex * that.width / numberOfFrames,
                0,
                that.width / numberOfFrames,
                that.height,
                0,
                0,
                that.width / numberOfFrames,
                that.height
            );
        };

        that.loop = options.loop;

        var midbrk = false;
        var brk = false;

        that.update = function () {
            tickCount += 1;
            if (tickCount > ticksPerFrame) {
                tickCount = 0;
                if (frameIndex < numberOfFrames - 1) {
                    frameIndex += 1;
                } else if (that.loop) {
                    frameIndex = 0;
                } else {
                    if (opt && opt.after && !brk) {
                        brk = true;
                        if (req) {
                            window.cancelAnimFrame(req);
                            req = undefined;
                        }
                        opt.after();
                    }
                }

                if (frameIndex === Math.round(numberOfFrames / 2)) {
                    if (opt && opt.middle && !midbrk) {
                        midbrk = true;
                        $(selector).trigger('stopRumble');
                        opt.middle();
                    }
                }
                var s = selector.split(' ')[0].replace('.', '');
                if (s.indexOf('music') > -1) {
                    if (frameIndex === 1) {
                        $('.' + s + ' .image').removeClass(s + '-3').addClass(s + '-1');
                    }
                    if (frameIndex === 10) {
                        $('.' + s + ' .image').removeClass(s + '-1').addClass(s + '-2');
                    }
                    if (frameIndex === 19) {
                        $('.' + s + ' .image').removeClass(s + '-2').addClass(s + '-3');
                    }
                } else {
                    if (frameIndex === 5) {
                        $('.' + s + ' .image').removeClass(s + '-1').addClass(s + '-2');
                    }
                    if (frameIndex === 17) {
                        $('.' + s + ' .image').removeClass(s + '-2').addClass(s + '-3');
                    }
                }
            }
        };

        return that;
    }

    var canvas = $(selector)[0];
    canvas.width = 43;
    canvas.height = 50;

    var molecule = moleculeSprite({
        context: canvas.getContext('2d'),
        width: 946,
        height: 50,
        image: moleculeImg,
        numberOfFrames: 22,
        ticksPerFrame: 2
    });

    var req;

    window.cancelAnimFrame = (function () {
        return window.cancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            window.msCancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.oCancelAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            }
    });
    window.requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    moleculeImg.onload = function () {
        function playBubble() {
            req = window.requestAnimFrame(playBubble);
            molecule.update();
            molecule.render();
        }

        $(selector).jrumble({
            x: 0.4,
            y: 0.4,
            speed: 5
        });
        $(selector).trigger('startRumble');
        playBubble();
    };
};


var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

var rexonamotion = function () {
    var id = window.setTimeout(function () {
    }, 0);
    while (id--) {
        window.clearTimeout(id);
    }

    var app = new mads();

    var $container = app.contentTag,
        $delayEachFrame = 1500,
        $sensitivity = 10;

    app.loadCss('css/style.min.css');

    $container.innerHTML = '<div id="jar" class="pt-perspective"> <div class="pt-page ff"> <div class="bg"></div><div class="la_click absolute" data-select="female"></div><div class="ra_click absolute" data-select="male"></div><div class="header"><span class="bold baru">BARU!</span><span class="bold rexmotion">REXONA MOTIONSENSE&#8482;</span><span class="pilih">PILIH SALAH SATU</span> </div><div class="content"> <div class="female"><img src="img/fem-product.png" alt="Rexona Motionsense Wanita"/><span class="bold wanita">WANITA</span></div><div class="separator"></div><div class="male"><img src="img/mal-product.png" alt="Rexona Motionsense Pria"/><span class="bold pria">PRIA</span></div></div><div class="footer"><span class="bold seharian">SEHARIAN BERAKTIVITAS</span><span class="bold akan">AKAN MEMBUATMU BERKERINGAT</span><span class="cari">CARI TAHU CARA TETAP SEGAR</span><span class="si">DI SETIAP GERAKMU</span></div></div><div class="pt-page male-run"> <div class="bg"></div><div class="absolute product-male"><img src="img/mal-product.png" alt="Rexona Motionsense Pria"/></div><div class="header"> <span class="bold title">KETIKA<br>BEROLAHRAGA</span> <div class="logo absolute"></div></div><div class="footer"> <div class="block"> <div class="vertical-lines absolute"></div><div class="timeline absolute one"> <div class="first"> <canvas class="bubble"></canvas> <span class="bold">06:00</span></div><div class="second"> <canvas class="bubble"></canvas> <span class="bold">06:15</span></div><div class="third"> <canvas class="bubble"></canvas> <span class="bold">06:30</span></div></div></div></div><div class="absolute image male-run-1"></div><div class="action absolute"></div></div><div class="pt-page female-music"> <div class="bg"></div><div class="absolute product-female"><img src="img/fem-product.png" alt="Rexona Motionsense Wanita"/></div><div class="header"> <span class="bold title">MENARI SAMBIL<br>MENDENGARKAN MUSIK</span> <div class="logo absolute"></div></div><div class="footer"> <div class="block"> <div class="vertical-lines absolute"></div><div class="timeline absolute one"> <div class="first"> <canvas class="bubble"></canvas> <span class="bold">10:00</span></div><div class="second"> <canvas class="bubble"></canvas> <span class="bold">10:15</span></div><div class="third"> <canvas class="bubble"></canvas> <span class="bold">10:30</span></div></div></div></div><div class="absolute image female-music-1"></div><div class="action absolute"></div></div><div class="pt-page lf"> <div class="bg"></div><div class="header"> <span class="bold title">BARU REXONA<br>MOTIONSENSE&#8482;</span> <span class="medium sub">MENJAGAMU TETAP<br>SEGAR DI SETIAP<br>GERAKAN</span> </div><div class="content"> <div id="player"></div></div><div class="footer"> <div class="products"> <img src="img/product-c.png" alt="Rexona MotionSense"/></div><div class="actions"> <button class="bold">TAP DI SINI</button> <span class="bold">UNTUK INFO <br>& TIPS MENARIK</span> </div><div class="logo-motion"></div></div><div class="trigger_landing_site absolute"></div><div class="trigger_landing_site_upper absolute"></div><div class="video_play absolute"></div></div></div>';
    //app.loadJs('js/libs.js', function () {
    var clicked = false,
        lp_clicked = false,
        pria_swipe = false,
        wanita_swipe = false,
        $video = new ytComponent({
            'container': 'player',
            'width': '320',
            'height': '185',
            'videoId': '42Y5u7VH1Bw',
            'autoplay': false,
            'tracker': app
        });
    var $pt = (window.PageTransitions || null)();
    $('.ra_click').on('click', function () {
        clicked = true;
        if (clicked) app.tracker('E', 'pria');
        $pt.nextPage({
            animation: 46, finished: function () {
                var registerEvent = function (cb) {
                    $('.male-run')[0].addEventListener('swipeleft', cb, false);
                    $('.male-run')[0].addEventListener('swipeup', cb, false);
                    $('.male-run')[0].addEventListener('swipedown', cb, false);
                    $('.male-run')[0].addEventListener('swiperight', cb, false);
                };

                var unregisterEvent = function (cb) {
                    $('.male-run')[0].removeEventListener('swipeleft', cb, false);
                    $('.male-run')[0].removeEventListener('swipeup', cb, false);
                    $('.male-run')[0].removeEventListener('swipedown', cb, false);
                    $('.male-run')[0].removeEventListener('swiperight', cb, false);
                };

                var maleFirst = function () {
                    var swiper = function () {
                        unregisterEvent(swiper);
                        pria_swipe = true;
                        if (pria_swipe) app.tracker('E', 'pria_swipe');
                        $('.male-run .action').css('opacity', 0);
                        playMolecule('.male-run .timeline .first .bubble', {
                            middle: function () {
                                Haptics.vibrate(50);
                            },
                            after: function () {
                                $('.male-run .timeline .first .bubble').css('opacity', 0);
                                $('.male-run .timeline').removeClass('one').addClass('two');
                                $('.male-run .action').css('opacity', 1);
                                registerEvent(swiper2);
                            }
                        });
                    };

                    registerEvent(swiper);

                    var swiper2 = function () {
                        unregisterEvent(swiper2);
                        $('.male-run .action').css('opacity', 0);
                        playMolecule('.male-run .timeline .second .bubble', {
                            middle: function () {
                                Haptics.vibrate(50);
                            },
                            after: function () {
                                $('.male-run .timeline').removeClass('two').addClass('three');
                                $('.male-run .timeline .second .bubble').css('opacity', 0);
                                $('.male-run .action').css('opacity', 1);
                                registerEvent(swiper3);
                            }
                        });
                    };

                    var swiper3 = function () {
                        unregisterEvent(swiper3);
                        $('.male-run .action').css('opacity', 0);
                        playMolecule('.male-run .timeline .third .bubble', {
                            middle: function () {
                                Haptics.vibrate(50);
                            },
                            after: function () {
                                Haptics.vibrate(200);
                                $('.trigger_landing_site').on('click', function () {
                                    lp_clicked = true;
                                    if (lp_clicked) app.tracker('E', 'rexona_lp');
                                    app.linkOpener('http://www.rexona.co.id/');
                                }).css('z-index', 199);
                                $('.trigger_landing_site_upper').on('click', function () {
                                    lp_clicked = true;
                                    if (lp_clicked) app.tracker('CTR', 'rexona_lp');
                                    app.linkOpener('http://www.rexona.co.id/');
                                }).css('z-index', 199);
                                $pt.nextPage({
                                    showPage: 3,
                                    animation: 8,
                                    finished: window.onYouTubeIframeAPIReady($video)
                                });
                            }
                        });
                    };
                }();
            }
        });
    });
    $('.la_click').on('click', function () {
        clicked = true;
        if (clicked) app.tracker('E', 'wanita');
        $pt.nextPage({
            showPage: 2,
            animation: 47, finished: function () {
                var registerEvent = function (cb) {
                    $('.female-music')[0].addEventListener('swipeleft', cb, false);
                    $('.female-music')[0].addEventListener('swipeup', cb, false);
                    $('.female-music')[0].addEventListener('swipedown', cb, false);
                    $('.female-music')[0].addEventListener('swiperight', cb, false);
                };
                var unregisterEvent = function (cb) {
                    $('.female-music')[0].removeEventListener('swipeleft', cb, false);
                    $('.female-music')[0].removeEventListener('swipeup', cb, false);
                    $('.female-music')[0].removeEventListener('swipedown', cb, false);
                    $('.female-music')[0].removeEventListener('swiperight', cb, false);
                };
                var femaleFirst = function () {
                    var swiper = function () {
                        app.tracker('E','wanita_swipe');
                        unregisterEvent(swiper);
                        $('.female-music .action').css('opacity', 0);
                        playMolecule('.female-music .timeline .first .bubble', {
                            middle: function () {
                                Haptics.vibrate(50);
                            },
                            after: function () {
                                $('.female-music .timeline .first .bubble').css('opacity', 0);
                                $('.female-music .timeline').removeClass('one').addClass('two');
                                $('.female-music .action').css('opacity', 1);
                                registerEvent(swiper2);
                            }
                        });
                    };

                    registerEvent(swiper);

                    var swiper2 = function () {
                        unregisterEvent(swiper2);
                        $('.female-music .action').css('opacity', 0);
                        playMolecule('.female-music .timeline .second .bubble', {
                            middle: function () {
                                Haptics.vibrate(50);
                            },
                            after: function () {
                                $('.female-music .timeline').removeClass('two').addClass('three');
                                $('.female-music .timeline .second .bubble').css('opacity', 0);
                                $('.female-music .action').css('opacity', 1);
                                registerEvent(swiper3);
                            }
                        });
                    };

                    var swiper3 = function () {
                        unregisterEvent(swiper3);
                        $('.female-music .action').css('opacity', 0);
                        playMolecule('.female-music .timeline .third .bubble', {
                            middle: function () {
                                Haptics.vibrate(50);
                            },
                            after: function () {
                                Haptics.vibrate(200);
                                $('.trigger_landing_site').on('click', function () {
                                    lp_clicked = true;
                                    if (lp_clicked) app.tracker('E', 'rexona_lp');
                                    app.linkOpener('http://www.rexona.co.id/');
                                }).css('z-index', 199);
                                $('.trigger_landing_site_upper').on('click', function () {
                                    lp_clicked = true;
                                    if (lp_clicked) app.tracker('CTR', 'rexona_lp');
                                    app.linkOpener('http://www.rexona.co.id/');
                                }).css('z-index', 199);
                                $pt.nextPage({
                                    showPage: 3,
                                    animation: 8,
                                    finished: window.onYouTubeIframeAPIReady($video)
                                });
                            }
                        });
                    };

                }();
            }
        });
    });
    //});
};

window.onYouTubeIframeAPIReady = function (vid) {
    if (vid) {
        vid.loadVideo();
    }
};

rexonamotion();
