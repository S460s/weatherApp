(()=>{"use strict";var e={982:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"* {\n\tmargin: 0;\n\tpadding: 0;\n}\n\n#title {\n\tcolor: blueviolet;\n}\n\n#searchBar {\n\twidth: 200px;\n}\n\n#submitBtn {\n\tbackground-color: beige;\n}\n#card {\n\tborder: 2px solid red;\n}\n",""]);const i=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:(e,t,n)=>{var o,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},o=[],r=0;r<e.length;r++){var s=e[r],c=t.base?s[0]+t.base:s[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var d=a(u),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:h(f,t),references:1}),o.push(u)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,p=0;function h(e,t){var n,o,r;if(t.singleton){var i=p++;n=m||(m=c(t)),o=d.bind(null,n,i,!1),r=d.bind(null,n,i,!0)}else n=c(t),o=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=a(n[o]);i[r].references--}for(var c=s(e,t),l=0;l<n.length;l++){var u=a(n[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=c}}}}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),o=n(982);t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;let r=0;const i=function(){const e=document.getElementById("localTime");let t=new Date,n=("0"+t.getMinutes()).substr(-2),o=("0"+t.getSeconds()).substr(-2),i=t.getTimezoneOffset(),a=t.getHours()+i/60+r/3600;Math.floor(a)!==a&&(console.log(a+" 1st if"),n=Number(n)+60*(a-Math.floor(a)),a=Math.floor(a),n>60&&(console.log(a+" 1st nested if"),a+=1,n-=60)),a<0&&(a=24+a,console.log(a+" 2st nested if"));let s=a+":"+n+":"+o;e.textContent="Local time: "+s},a=function(e){let t=new Date(1e3*e),n=("0"+t.getMinutes()).substr(-2),o=("0"+t.getSeconds()).substr(-2),i=t.getTimezoneOffset(),a=t.getHours()+i/60+r/3600;return Math.floor(a)!==a&&(console.log(a+" 1st if"),n=Number(n)+60*(a-Math.floor(a)),a=Math.floor(a),n>60&&(console.log(a+" 1st nested if"),a+=1,n-=60)),a<0&&(a=24+a,console.log(a+" 2st nested if")),a+":"+n+":"+o},s=document.querySelector("form"),c=document.getElementById("searchBar");s.addEventListener("submit",(e=>{e.preventDefault(),async function(e){const t=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${e},&APPID=0a4f4a6eecd2d2972049aaf3d53317b8&units=metric`,{mode:"cors"});if(t.ok){const e=await t.json();!function(e){const t=document.getElementById("city"),n=document.getElementById("temp"),o=document.getElementById("humidity"),s=document.getElementById("visibility"),c=document.getElementById("flag"),l=document.getElementById("sunr"),u=document.getElementById("suns");t.textContent=e.name,n.textContent=Math.floor(e.main.temp),o.textContent=e.main.humidity,s.textContent=e.visibility/1e3+"km",c.src=`https://www.countryflags.io/${e.sys.country}/flat/64.png`,r=e.timezone,l.textContent="Sunrise   "+a(e.sys.sunrise),u.textContent="Sunset   "+a(e.sys.sunset),i(),setInterval(i,1e3)}(e),console.log(e)}else console.log("Err")}(c.value),s.reset()}))})()})();