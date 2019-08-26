/*!
 * Font Awesome Pro 5.0.12 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Commercial License)
 */
!function(){"use strict";var t=function(){},e={},n={},i=null,r={mark:t,measure:t};try{"undefined"!=typeof window&&(e=window),"undefined"!=typeof document&&(n=document),"undefined"!=typeof MutationObserver&&(i=MutationObserver),"undefined"!=typeof performance&&(r=performance)}catch(t){}var a=(e.navigator||{}).userAgent,o=void 0===a?"":a,s=e,f=n,l=i,c=r,u=!!s.document,m=!!f.documentElement&&!!f.head&&"function"==typeof f.addEventListener&&"function"==typeof f.createElement,d=~o.indexOf("MSIE")||~o.indexOf("Trident/"),g="___FONT_AWESOME___",h=16,p="svg-inline--fa",v="data-fa-i2svg",b="data-fa-pseudo-element",y="fontawesome-i2svg",w=function(){try{return!0}catch(t){return!1}}(),x=[1,2,3,4,5,6,7,8,9,10],k=x.concat([11,12,13,14,15,16,17,18,19,20]),z=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],C=["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter"].concat(x.map(function(t){return t+"x"})).concat(k.map(function(t){return"w-"+t})),N=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},A=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),O=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},M=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},L=s.FontAwesomeConfig||{},E=Object.keys(L),j=O({familyPrefix:"fa",replacementClass:p,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},L);j.autoReplaceSvg||(j.observeMutations=!1);var S=O({},j);function P(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).asNewDefault,n=void 0!==e&&e,i=Object.keys(S),r=n?function(t){return~i.indexOf(t)&&!~E.indexOf(t)}:function(t){return~i.indexOf(t)};Object.keys(t).forEach(function(e){r(e)&&(S[e]=t[e])})}s.FontAwesomeConfig=S;var T=s||{};T[g]||(T[g]={}),T[g].styles||(T[g].styles={}),T[g].hooks||(T[g].hooks={}),T[g].shims||(T[g].shims=[]);var R=T[g],H=[],F=!1;m&&((F=(f.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(f.readyState))||f.addEventListener("DOMContentLoaded",function t(){f.removeEventListener("DOMContentLoaded",t),F=1,H.map(function(t){return t()})}));var I=function(t){m&&(F?setTimeout(t,0):H.push(t))},_=h,B={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function D(t){if(t&&m){var e=f.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=f.head.childNodes,i=null,r=n.length-1;r>-1;r--){var a=n[r],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=a)}return f.head.insertBefore(e,i),t}}var W=0;function X(){return++W}function Y(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function U(t){return t.classList?Y(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(t){return t})}function V(t,e){var n,i=e.split("-"),r=i[0],a=i.slice(1).join("-");return r!==t||""===a||(n=a,~C.indexOf(n))?null:a}function q(t){return(""+t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function K(t){return Object.keys(t||{}).reduce(function(e,n){return e+(n+": ")+t[n]+";"},"")}function G(t){return t.size!==B.size||t.x!==B.x||t.y!==B.y||t.rotate!==B.rotate||t.flipX||t.flipY}function J(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth;return{outer:{transform:"translate("+n/2+" 256)"},inner:{transform:"translate("+32*e.x+", "+32*e.y+") "+" "+("scale("+e.size/16*(e.flipX?-1:1)+", "+e.size/16*(e.flipY?-1:1)+") ")+" "+("rotate("+e.rotate+" 0 0)")},path:{transform:"translate("+i/2*-1+" -256)"}}}var Q={x:0,y:0,width:"100%",height:"100%"},Z=function(t){var e=t.children,n=t.attributes,i=t.main,r=t.mask,a=t.transform,o=i.width,s=i.icon,f=r.width,l=r.icon,c=J({transform:a,containerWidth:f,iconWidth:o}),u={tag:"rect",attributes:O({},Q,{fill:"white"})},m={tag:"g",attributes:O({},c.inner),children:[{tag:"path",attributes:O({},s.attributes,c.path,{fill:"black"})}]},d={tag:"g",attributes:O({},c.outer),children:[m]},g="mask-"+X(),h="clip-"+X(),p={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:[l]},{tag:"mask",attributes:O({},Q,{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[u,d]}]};return e.push(p,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#"+h+")",mask:"url(#"+g+")"},Q)}),{children:e,attributes:n}},$=function(t){var e=t.children,n=t.attributes,i=t.main,r=t.transform,a=K(t.styles);if(a.length>0&&(n.style=a),G(r)){var o=J({transform:r,containerWidth:i.width,iconWidth:i.width});e.push({tag:"g",attributes:O({},o.outer),children:[{tag:"g",attributes:O({},o.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:O({},i.icon.attributes,o.path)}]}]})}else e.push(i.icon);return{children:e,attributes:n}},tt=function(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,a=t.styles,o=t.transform;if(G(o)&&n.found&&!i.found){var s=n.width/n.height/2,f=.5;r.style=K(O({},a,{"transform-origin":s+o.x/16+"em "+(f+o.y/16)+"em"}))}return[{tag:"svg",attributes:r,children:e}]},et=function(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,a=t.symbol,o=!0===a?e+"-"+S.familyPrefix+"-"+n:a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O({},r,{id:o}),children:i}]}]};function nt(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,a=t.iconName,o=t.transform,s=t.symbol,f=t.title,l=t.extra,c=t.watchable,u=void 0!==c&&c,m=i.found?i:n,d=m.width,g=m.height,h="fa-w-"+Math.ceil(d/g*16),p=[S.replacementClass,a?S.familyPrefix+"-"+a:"",h].concat(l.classes).join(" "),b={children:[],attributes:O({},l.attributes,{"data-prefix":r,"data-icon":a,class:p,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+d+" "+g})};u&&(b.attributes[v]=""),f&&b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-"+X()},children:[f]});var y=O({},b,{prefix:r,iconName:a,main:n,mask:i,transform:o,symbol:s,styles:l.styles}),w=i.found&&n.found?Z(y):$(y),x=w.children,k=w.attributes;return y.children=x,y.attributes=k,s?et(y):tt(y)}function it(t){var e=t.content,n=t.width,i=t.height,r=t.transform,a=t.title,o=t.extra,s=t.watchable,f=void 0!==s&&s,l=O({},o.attributes,a?{title:a}:{},{class:o.classes.join(" ")});f&&(l[v]="");var c,u,m,g,p,b,y,w,x,k=O({},o.styles);G(r)&&(k.transform=(u=(c={transform:r,startCentered:!0,width:n,height:i}).transform,m=c.width,g=void 0===m?h:m,p=c.height,b=void 0===p?h:p,y=c.startCentered,x="",x+=(w=void 0!==y&&y)&&d?"translate("+(u.x/_-g/2)+"em, "+(u.y/_-b/2)+"em) ":w?"translate(calc(-50% + "+u.x/_+"em), calc(-50% + "+u.y/_+"em)) ":"translate("+u.x/_+"em, "+u.y/_+"em) ",x+="scale("+u.size/_*(u.flipX?-1:1)+", "+u.size/_*(u.flipY?-1:1)+") ",x+="rotate("+u.rotate+"deg) "),k["-webkit-transform"]=k.transform);var z=K(k);z.length>0&&(l.style=z);var C=[];return C.push({tag:"span",attributes:l,children:[e]}),a&&C.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),C}var rt=function(){},at=S.measurePerformance&&c&&c.mark&&c.measure?c:{mark:rt,measure:rt},ot='FA "5.0.12"',st=function(t){at.mark(ot+" "+t+" ends"),at.measure(ot+" "+t,ot+" "+t+" begins",ot+" "+t+" ends")},ft={begin:function(t){return at.mark(ot+" "+t+" begins"),function(){return st(t)}},end:st},lt=function(t,e,n,i){var r,a,o,s,f,l=Object.keys(t),c=l.length,u=void 0!==i?(s=e,f=i,function(t,e,n,i){return s.call(f,t,e,n,i)}):e;for(void 0===n?(r=1,o=t[l[0]]):(r=0,o=n);r<c;r++)o=u(o,t[a=l[r]],a,t);return o},ct=R.styles,ut=R.shims,mt={},dt={},gt={},ht=function(){var t=function(t){return lt(ct,function(e,n,i){return e[i]=lt(n,t,{}),e},{})};mt=t(function(t,e,n){return t[e[3]]=n,t}),dt=t(function(t,e,n){var i=e[2];return t[n]=n,i.forEach(function(e){t[e]=n}),t});var e="far"in ct;gt=lt(ut,function(t,n){var i=n[0],r=n[1],a=n[2];return"far"!==r||e||(r="fas"),t[i]={prefix:r,iconName:a},t},{})};ht();var pt=R.styles,vt=function(){return{prefix:null,iconName:null,rest:[]}};function bt(t){return t.reduce(function(t,e){var n=V(S.familyPrefix,e);if(pt[e])t.prefix=e;else if(n){var i="fa"===t.prefix?gt[n]||{prefix:null,iconName:null}:{};t.iconName=i.iconName||n,t.prefix=i.prefix||t.prefix}else e!==S.replacementClass&&0!==e.indexOf("fa-w-")&&t.rest.push(e);return t},vt())}function yt(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}function wt(t){var e,n=t.tag,i=t.attributes,r=void 0===i?{}:i,a=t.children,o=void 0===a?[]:a;return"string"==typeof t?q(t):"<"+n+" "+(e=r,Object.keys(e||{}).reduce(function(t,n){return t+(n+'="')+q(e[n])+'" '},"").trim())+">"+o.map(wt).join("")+"</"+n+">"}var xt=function(){};function kt(t){return"string"==typeof(t.getAttribute?t.getAttribute(v):null)}var zt={replace:function(t){var e=t[0],n=t[1].map(function(t){return wt(t)}).join("\n");if(e.parentNode&&e.outerHTML)e.outerHTML=n+(S.keepOriginalSource&&"svg"!==e.tagName.toLowerCase()?"\x3c!-- "+e.outerHTML+" --\x3e":"");else if(e.parentNode){var i=document.createElement("span");e.parentNode.replaceChild(i,e),i.outerHTML=n}},nest:function(t){var e=t[0],n=t[1];if(~U(e).indexOf(S.replacementClass))return zt.replace(t);var i=new RegExp(S.familyPrefix+"-.*");delete n[0].attributes.style;var r=n[0].attributes.class.split(" ").reduce(function(t,e){return e===S.replacementClass||e.match(i)?t.toSvg.push(e):t.toNode.push(e),t},{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" ");var a=n.map(function(t){return wt(t)}).join("\n");e.setAttribute("class",r.toNode.join(" ")),e.setAttribute(v,""),e.innerHTML=a}};function Ct(t,e){var n="function"==typeof e?e:xt;0===t.length?n():(s.requestAnimationFrame||function(t){return t()})(function(){var e=!0===S.autoReplaceSvg?zt.replace:zt[S.autoReplaceSvg]||zt.replace,i=ft.begin("mutate");t.map(e),i(),n()})}var Nt=!1;var At=null;var Ot=function(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(t,e){var n=e.split(":"),i=n[0],r=n.slice(1);return i&&r.length>0&&(t[i]=r.join(":").trim()),t},{})),n};var Mt=function(t){var e,n,i,r,a=t.getAttribute("data-prefix"),o=t.getAttribute("data-icon"),s=void 0!==t.innerText?t.innerText.trim():"",f=bt(U(t));return a&&o&&(f.prefix=a,f.iconName=o),f.prefix&&s.length>1?f.iconName=(i=f.prefix,r=t.innerText,dt[i][r]):f.prefix&&1===s.length&&(f.iconName=(e=f.prefix,n=function(t){for(var e="",n=0;n<t.length;n++)e+=("000"+t.charCodeAt(n).toString(16)).slice(-4);return e}(t.innerText),mt[e][n])),f},Lt=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce(function(t,e){var n=e.toLowerCase().split("-"),i=n[0],r=n.slice(1).join("-");if(i&&"h"===r)return t.flipX=!0,t;if(i&&"v"===r)return t.flipY=!0,t;if(r=parseFloat(r),isNaN(r))return t;switch(i){case"grow":t.size=t.size+r;break;case"shrink":t.size=t.size-r;break;case"left":t.x=t.x-r;break;case"right":t.x=t.x+r;break;case"up":t.y=t.y-r;break;case"down":t.y=t.y+r;break;case"rotate":t.rotate=t.rotate+r}return t},e):e},Et=function(t){return Lt(t.getAttribute("data-fa-transform"))},jt=function(t){var e=t.getAttribute("data-fa-symbol");return null!==e&&(""===e||e)},St=function(t){var e=Y(t.attributes).reduce(function(t,e){return"class"!==t.name&&"style"!==t.name&&(t[e.name]=e.value),t},{}),n=t.getAttribute("title");return S.autoA11y&&(n?e["aria-labelledby"]=S.replacementClass+"-title-"+X():e["aria-hidden"]="true"),e},Pt=function(t){var e=t.getAttribute("data-fa-mask");return e?bt(e.split(" ").map(function(t){return t.trim()})):vt()};function Tt(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=(new Error).stack}(Tt.prototype=Object.create(Error.prototype)).constructor=Tt;var Rt={fill:"currentColor"},Ht={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},Ft={tag:"path",attributes:O({},Rt,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},It=O({},Ht,{attributeName:"opacity"}),_t={tag:"g",children:[Ft,{tag:"circle",attributes:O({},Rt,{cx:"256",cy:"364",r:"28"}),children:[{tag:"animate",attributes:O({},Ht,{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O({},It,{values:"1;0;1;1;0;1;"})}]},{tag:"path",attributes:O({},Rt,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:[{tag:"animate",attributes:O({},It,{values:"1;0;0;0;0;1;"})}]},{tag:"path",attributes:O({},Rt,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O({},It,{values:"0;0;1;1;0;0;"})}]}]},Bt=R.styles,Dt="fa-layers-text",Wt=/Font Awesome 5 (Solid|Regular|Light|Brands)/,Xt={Solid:"fas",Regular:"far",Light:"fal",Brands:"fab"};function Yt(t,e){var n={found:!1,width:512,height:512,icon:_t};if(t&&e&&Bt[e]&&Bt[e][t]){var i=Bt[e][t];n={found:!0,width:i[0],height:i[1],icon:{tag:"path",attributes:{fill:"currentColor",d:i.slice(4)[0]}}}}else if(t&&e&&!S.showMissingIcons)throw new Tt("Icon is missing for prefix "+e+" with icon name "+t);return n}function Ut(t){var e,n,i,r,a,o,s,f,l,c,u,m,g,h,p,v,b,y,w,x=(n=Mt(e=t),i=n.iconName,r=n.prefix,a=n.rest,o=Ot(e),s=Et(e),f=jt(e),l=St(e),c=Pt(e),{iconName:i,title:e.getAttribute("title"),prefix:r,transform:s,symbol:f,mask:c,extra:{classes:a,styles:o,attributes:l}});return~x.extra.classes.indexOf(Dt)?function(t,e){var n=e.title,i=e.transform,r=e.extra,a=null,o=null;if(d){var s=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();a=f.width/s,o=f.height/s}return S.autoA11y&&!n&&(r.attributes["aria-hidden"]="true"),[t,it({content:t.innerHTML,width:a,height:o,transform:i,title:n,extra:r,watchable:!0})]}(t,x):(u=t,g=(m=x).iconName,h=m.title,p=m.prefix,v=m.transform,b=m.symbol,y=m.mask,w=m.extra,[u,nt({icons:{main:Yt(g,p),mask:Yt(y.iconName,y.prefix)},prefix:p,iconName:g,transform:v,symbol:b,mask:y,title:h,extra:w,watchable:!0})])}function Vt(t){"function"==typeof t.remove?t.remove():t&&t.parentNode&&t.parentNode.removeChild(t)}function qt(t){if(m){var e=ft.begin("searchPseudoElements");Nt=!0,function(){Y(t.querySelectorAll("*")).forEach(function(t){[":before",":after"].forEach(function(e){var n=s.getComputedStyle(t,e),i=n.getPropertyValue("font-family").match(Wt),r=Y(t.children).filter(function(t){return t.getAttribute(b)===e})[0];if(r&&(r.nextSibling&&r.nextSibling.textContent.indexOf(b)>-1&&Vt(r.nextSibling),Vt(r),r=null),i&&!r){var a=n.getPropertyValue("content"),o=f.createElement("i");o.setAttribute("class",""+Xt[i[1]]),o.setAttribute(b,e),o.innerText=3===a.length?a.substr(1,1):a,":before"===e?t.insertBefore(o,t.firstChild):t.appendChild(o)}})})}(),Nt=!1,e()}}function Kt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(m){var n=f.documentElement.classList,i=function(t){return n.add(y+"-"+t)},r=function(t){return n.remove(y+"-"+t)},a=Object.keys(Bt),o=["."+Dt+":not(["+v+"])"].concat(a.map(function(t){return"."+t+":not(["+v+"])"})).join(", ");if(0!==o.length){var s=Y(t.querySelectorAll(o));if(s.length>0){i("pending"),r("complete");var l=ft.begin("onTree"),c=s.reduce(function(t,e){try{var n=Ut(e);n&&t.push(n)}catch(t){w||t instanceof Tt&&console.error(t)}return t},[]);l(),Ct(c,function(){i("active"),i("complete"),r("pending"),"function"==typeof e&&e()})}}}}function Gt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=Ut(t);n&&Ct([n],e)}var Jt=function(){var t=p,e=S.familyPrefix,n=S.replacementClass,i="svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1em}.svg-inline--fa.fa-stack-2x{height:2em;width:2em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}";if("fa"!==e||n!==t){var r=new RegExp("\\.fa\\-","g"),a=new RegExp("\\."+t,"g");i=i.replace(r,"."+e+"-").replace(a,"."+n)}return i};var Qt=function(){function t(){N(this,t),this.definitions={}}return A(t,[{key:"add",value:function(){for(var t=this,e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];var r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(function(e){t.definitions[e]=O({},t.definitions[e]||{},r[e]),function t(e,n){var i=Object.keys(n).reduce(function(t,e){var i=n[e];return i.icon?t[i.iconName]=i.icon:t[e]=i,t},{});"function"==typeof R.hooks.addPack?R.hooks.addPack(e,i):R.styles[e]=O({},R.styles[e]||{},i),"fas"===e&&t("fa",n)}(e,r[e])})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var n=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(n).map(function(e){var i=n[e],r=i.prefix,a=i.iconName,o=i.icon;t[r]||(t[r]={}),t[r][a]=o}),t}}]),t}();function Zt(t){return{found:!0,width:t[0],height:t[1],icon:{tag:"path",attributes:{fill:"currentColor",d:t.slice(4)[0]}}}}var $t=!1;function te(){S.autoAddCss&&($t||D(Jt()),$t=!0)}function ee(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(t){return wt(t)})}}),Object.defineProperty(t,"node",{get:function(){if(m){var e=f.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function ne(t){var e=t.prefix,n=void 0===e?"fa":e,i=t.iconName;if(i)return yt(re.definitions,n,i)||yt(R.styles,n,i)}var ie,re=new Qt,ae=(ie=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,i=void 0===n?B:n,r=e.symbol,a=void 0!==r&&r,o=e.mask,s=void 0===o?null:o,f=e.title,l=void 0===f?null:f,c=e.classes,u=void 0===c?[]:c,m=e.attributes,d=void 0===m?{}:m,g=e.styles,h=void 0===g?{}:g;if(t){var p=t.prefix,v=t.iconName,b=t.icon;return ee(O({type:"icon"},t),function(){return te(),S.autoA11y&&(l?d["aria-labelledby"]=S.replacementClass+"-title-"+X():d["aria-hidden"]="true"),nt({icons:{main:Zt(b),mask:s?Zt(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:v,transform:O({},B,i),symbol:a,title:l,extra:{attributes:d,styles:h,classes:u}})})}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(t||{}).icon?t:ne(t||{}),i=e.mask;return i&&(i=(i||{}).icon?i:ne(i||{})),ie(n,O({},e,{mask:i}))}),oe={noAuto:function(){var t;P({autoReplaceSvg:t=!1,observeMutations:t}),At&&At.disconnect()},dom:{i2svg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(m){te();var e=t.node,n=void 0===e?f:e,i=t.callback,r=void 0===i?function(){}:i;S.searchPseudoElements&&qt(n),Kt(n,r)}},css:Jt,insertCss:function(){D(Jt())}},library:re,parse:{transform:function(t){return Lt(t)}},findIconDefinition:ne,icon:ae,text:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,i=void 0===n?B:n,r=e.title,a=void 0===r?null:r,o=e.classes,s=void 0===o?[]:o,f=e.attributes,l=void 0===f?{}:f,c=e.styles,u=void 0===c?{}:c;return ee({type:"text",content:t},function(){return te(),it({content:t,transform:O({},B,i),title:a,extra:{attributes:l,styles:u,classes:[S.familyPrefix+"-layers-text"].concat(M(s))}})})},layer:function(t){return ee({type:"layer"},function(){te();var e=[];return t(function(t){Array.isArray(t)?t.map(function(t){e=e.concat(t.abstract)}):e=e.concat(t.abstract)}),[{tag:"span",attributes:{class:S.familyPrefix+"-layers"},children:e}]})}},se=function(){m&&S.autoReplaceSvg&&oe.dom.i2svg({node:f})};Object.defineProperty(oe,"config",{get:function(){return S},set:function(t){P(t)}}),function(t){try{t()}catch(t){if(!w)throw t}}(function(){u&&(s.FontAwesome||(s.FontAwesome=oe),I(function(){Object.keys(R.styles).length>0&&se(),S.observeMutations&&"function"==typeof MutationObserver&&function(t){if(l){var e=t.treeCallback,n=t.nodeCallback,i=t.pseudoElementsCallback;At=new l(function(t){Nt||Y(t).forEach(function(t){if("childList"===t.type&&t.addedNodes.length>0&&!kt(t.addedNodes[0])&&(S.searchPseudoElements&&i(t.target),e(t.target)),"attributes"===t.type&&t.target.parentNode&&S.searchPseudoElements&&i(t.target.parentNode),"attributes"===t.type&&kt(t.target)&&~z.indexOf(t.attributeName))if("class"===t.attributeName){var r=bt(U(t.target)),a=r.prefix,o=r.iconName;a&&t.target.setAttribute("data-prefix",a),o&&t.target.setAttribute("data-icon",o)}else n(t.target)})}),m&&At.observe(f.getElementsByTagName("body")[0],{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}({treeCallback:Kt,nodeCallback:Gt,pseudoElementsCallback:qt})})),R.hooks=O({},R.hooks,{addPack:function(t,e){R.styles[t]=O({},R.styles[t]||{},e),ht(),se()},addShims:function(t){var e;(e=R.shims).push.apply(e,M(t)),ht(),se()}})})}();