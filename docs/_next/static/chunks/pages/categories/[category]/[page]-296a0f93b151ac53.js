(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[643],{3454:function(e,t,n){"use strict";var r,o;e.exports=(null===(r=n.g.process)||void 0===r?void 0:r.env)&&"object"===typeof(null===(o=n.g.process)||void 0===o?void 0:o.env)?n.g.process:n(7663)},2214:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/categories/[category]/[page]",function(){return n(8899)}])},6166:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),o=n(9008),i=n(8145),a=n(7294),c=function(){(0,a.useEffect)((function(){if(document.head){var e=document.createElement("script");e.async=!0,e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=".concat(i.Z.googleAdsense.adClient),e.crossOrigin="anonymous",document.head.appendChild(e)}}),[])},s=function(e){var t=e.title,n=e.description,a=e.keywords,s=e.url,l=e.imageURL,u=e.customMeta;return c(),(0,r.jsxs)(o.default,{children:[(0,r.jsx)("link",{rel:"canonical",href:s}),(0,r.jsx)("link",{rel:"apple-touch-icon",href:i.Z.appleTouchIconPath}),(0,r.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,r.jsx)("meta",{name:"theme-color",content:i.Z.themeColor},"theme-color"),(0,r.jsx)("meta",{property:"og:type",content:"website"},"og:type"),(0,r.jsx)("meta",{property:"og:site_name",content:i.Z.title},"og:site_name"),(0,r.jsx)("meta",{name:"author",content:i.Z.author},"author"),(null===a||void 0===a?void 0:a.length)&&(0,r.jsx)("meta",{name:"keyword",content:a.join(", ")},"keyword"),(0,r.jsx)("meta",{name:"description",content:n},"description"),(0,r.jsx)("meta",{property:"og:description",content:n},"og:description"),(0,r.jsx)("meta",{property:"og:title",content:t},"og:title"),(0,r.jsx)("meta",{property:"og:url",content:s},"og:url"),(0,r.jsx)("meta",{property:"og:image",content:l},"og:image"),u&&u,(0,r.jsx)("title",{children:t})]})}},1780:function(e,t,n){"use strict";var r=n(5893),o=n(7294);t.Z=function(e){return(0,o.useEffect)((function(){window.adsbygoogle=window.adsbygoogle||[],window.adsbygoogle.push({})}),[]),(0,r.jsx)("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":e.adClient,"data-ad-slot":e.adSlot,"data-ad-format":"auto","data-full-width-responsive":"true",onLoad:function(){return console.log("loaded")}})}},9337:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(5893),o=n(7026),i=(0,o.Z)((0,r.jsx)("path",{d:"M14.71 6.71a.9959.9959 0 0 0-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z"}),"ChevronLeftRounded"),a=(0,o.Z)((0,r.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHorizRounded"),c=(0,o.Z)((0,r.jsx)("path",{d:"M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"}),"ChevronRightRounded"),s=n(1664),l=n(7294),u=n(2256),f=n.n(u);function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var g=function(e){var t=e.page,n=e.lastPage,o=e.displayCount,u=void 0===o?5:o,d=e.query,g=e.baseURL,p=(0,l.useState)([]),m=p[0],v=p[1];(0,l.useEffect)((function(){for(var e=[],r=[],o=Math.floor(u/2),i=0;i<o;i++){var a=t-o+i;a>0&&e.push(a);var c=t+1+i;c<=n&&r.push(c)}v(h(e).concat([t],h(r)))}),[t,n,u]),(0,l.useEffect)((function(){}),[]);var y=function(e){var t="".concat(g,"/").concat(e);return d&&(t+="?query=".concat(d)),t};return(0,r.jsx)("div",{className:f().container,children:(0,r.jsxs)("ul",{children:[t>1&&(0,r.jsx)("li",{children:(0,r.jsx)(s.default,{href:y(t-1),children:(0,r.jsx)("a",{children:(0,r.jsx)(i,{})})})}),t>1&&!m.includes(1)&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:y(1),children:1})}),(0,r.jsx)(a,{})]}),m.map((function(e){return(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:t===e?f().currentPage:"",href:y(e),children:e})},e)})),t<n&&!m.includes(n)&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:y(n),children:n})})]}),t<n&&(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:y(t+1),children:(0,r.jsx)(c,{})})})]})})}},7221:function(e,t,n){"use strict";var r=n(5893),o=n(1664),i=n(4111),a=n(9443),c=n(8286),s=n(7594),l=n(7828),u=n.n(l);t.Z=function(e){var t=e.titleLevel,n=void 0===t?3:t,l=e.post,f=(0,i.Z)(new Date(l.publishedAt));return(0,r.jsxs)("article",{className:u().card,children:[(0,r.jsx)(o.default,{href:c.Z.buildLinkURLByTitle(l.title),children:(0,r.jsxs)("a",{className:u().title,children:[1===n&&(0,r.jsx)("h1",{children:l.title}),2===n&&(0,r.jsx)("h2",{children:l.title}),3===n&&(0,r.jsx)("h3",{children:l.title})]})}),(0,r.jsx)("span",{className:u().category,children:l.category}),(0,r.jsx)("span",{className:u().publishedAt,children:f}),(0,r.jsx)(o.default,{href:c.Z.buildLinkURLByTitle(l.title),children:(0,r.jsx)("a",{className:u().description,children:(0,r.jsx)("p",{children:l.description})})}),l.thumbnailName&&(0,r.jsx)("div",{className:u().thumbnail,children:(0,r.jsx)(o.default,{href:c.Z.buildLinkURLByTitle(l.title),children:(0,r.jsx)("a",{children:(0,r.jsx)("img",{className:"thumbnail",src:a.Z.buildImagePath(l.thumbnailName),alt:l.description})})})}),(0,r.jsx)("section",{className:u().tags,children:(0,r.jsx)(s.Z,{tags:l.tags})})]})}},7594:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(5893),o=n(1664),i=n(8145),a=n(2002),c=n.n(a),s=function(e){return(0,r.jsx)(o.default,{href:"".concat(i.Z.baseURL,"/posts/1?query=").concat(encodeURI(e.tag)),children:(0,r.jsx)("a",{children:(0,r.jsxs)("span",{className:c().tag,children:[e.tag," ",e.count&&e.count]})})})},l=n(8193),u=n.n(l),f=function(e){return(0,r.jsx)("ul",{className:u().tags,children:e.tags.map((function(e,t){return(0,r.jsx)("li",{children:"string"===typeof e?(0,r.jsx)(s,{tag:e}):(0,r.jsx)(s,{tag:e.tag,count:e.count})},t)}))})}},4111:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".",n=(0,r.useState)(""),o=n[0],i=n[1];return(0,r.useEffect)((function(){var n=String(e.getFullYear()).slice(2),r=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");i([n,r,o].join(t))}),[e,t]),o}},8899:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d}});var r=n(5893),o=n(6166),i=n(1780),a=n(9337),c=n(7221),s=n(8145),l=n(7427);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=!0;t.default=function(e){var t=e.page,n=e.lastPage,u=e.posts,d=e.category;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{title:l.Z.buildPageTitle(d),description:"".concat(d," ").concat(t," \ud398\uc774\uc9c0"),url:"".concat(s.Z.baseURL,"/categories/").concat(d,"/").concat(t,"}"),imageURL:"/icons/icon-512x512.png",keywords:u.map((function(e){return f(e.tags).concat([e.title,e.category,e.description])})).flat()}),(0,r.jsx)("h1",{children:d}),Boolean(null===u||void 0===u?void 0:u.length)&&u.map((function(e,t){return(0,r.jsx)(c.Z,{titleLevel:2,post:e},t)})),(0,r.jsx)(i.Z,{adClient:s.Z.googleAdsense.adClient,adSlot:"5391522351"}),(0,r.jsx)(a.Z,{page:t,lastPage:n,baseURL:"".concat(s.Z.baseURL,"/categories/").concat(d)})]})}},9443:function(e,t,n){"use strict";var r=n(8145);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,i;return t=e,i=[{key:"absolutePath",value:function(e,t){return e=e.replace(/^\//,""),[t||r.Z.baseURL,e].join("/")}},{key:"buildImagePath",value:function(e){return"/assets/images/".concat(e)}}],(n=null)&&o(t.prototype,n),i&&o(t,i),e}();t.Z=i},8286:function(e,t,n){"use strict";var r=n(1864),o=n.n(r),i=n(8145);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"normalizeTitle",value:function(e){return e.replace(/\s/g,"-").toLowerCase()}},{key:"getMarkdownFilePath",value:function(e){return o().join("../posts",e.category,e.fileName)}},{key:"buildLinkURLByTitle",value:function(e){return"".concat(i.Z.baseURL,"/").concat(this.normalizeTitle(e))}}],(n=null)&&a(t.prototype,n),r&&a(t,r),e}();t.Z=c},7427:function(e,t,n){"use strict";var r=n(8145);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,i;return t=e,i=[{key:"buildPageTitle",value:function(e){return"".concat(e," | ").concat(r.Z.title)}}],(n=null)&&o(t.prototype,n),i&&o(t,i),e}();t.Z=i},2256:function(e){e.exports={container:"Paginator_container__Jyd6p",currentPage:"Paginator_currentPage__uykCS"}},7828:function(e){e.exports={card:"PostCard_card__RhSh8",title:"PostCard_title__sytFV",category:"PostCard_category__maLVP",publishedAt:"PostCard_publishedAt__jx58S",description:"PostCard_description__53x7j",thumbnail:"PostCard_thumbnail__RluzR",tags:"PostCard_tags__H0ViL"}},2002:function(e){e.exports={tag:"Tag_tag__tXphA"}},8193:function(e){e.exports={tags:"Tags_tags__mhykw"}},1864:function(e,t,n){var r=n(3454);!function(){"use strict";var t={977:function(e){function t(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function n(e,t){for(var n,r="",o=0,i=-1,a=0,c=0;c<=e.length;++c){if(c<e.length)n=e.charCodeAt(c);else{if(47===n)break;n=47}if(47===n){if(i===c-1||1===a);else if(i!==c-1&&2===a){if(r.length<2||2!==o||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){var s=r.lastIndexOf("/");if(s!==r.length-1){-1===s?(r="",o=0):o=(r=r.slice(0,s)).length-1-r.lastIndexOf("/"),i=c,a=0;continue}}else if(2===r.length||1===r.length){r="",o=0,i=c,a=0;continue}t&&(r.length>0?r+="/..":r="..",o=2)}else r.length>0?r+="/"+e.slice(i+1,c):r=e.slice(i+1,c),o=c-i-1;i=c,a=0}else 46===n&&-1!==a?++a:a=-1}return r}var o={resolve:function(){for(var e,o="",i=!1,a=arguments.length-1;a>=-1&&!i;a--){var c;a>=0?c=arguments[a]:(void 0===e&&(e=r.cwd()),c=e),t(c),0!==c.length&&(o=c+"/"+o,i=47===c.charCodeAt(0))}return o=n(o,!i),i?o.length>0?"/"+o:"/":o.length>0?o:"."},normalize:function(e){if(t(e),0===e.length)return".";var r=47===e.charCodeAt(0),o=47===e.charCodeAt(e.length-1);return 0!==(e=n(e,!r)).length||r||(e="."),e.length>0&&o&&(e+="/"),r?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,n=0;n<arguments.length;++n){var r=arguments[n];t(r),r.length>0&&(void 0===e?e=r:e+="/"+r)}return void 0===e?".":o.normalize(e)},relative:function(e,n){if(t(e),t(n),e===n)return"";if((e=o.resolve(e))===(n=o.resolve(n)))return"";for(var r=1;r<e.length&&47===e.charCodeAt(r);++r);for(var i=e.length,a=i-r,c=1;c<n.length&&47===n.charCodeAt(c);++c);for(var s=n.length-c,l=a<s?a:s,u=-1,f=0;f<=l;++f){if(f===l){if(s>l){if(47===n.charCodeAt(c+f))return n.slice(c+f+1);if(0===f)return n.slice(c+f)}else a>l&&(47===e.charCodeAt(r+f)?u=f:0===f&&(u=0));break}var d=e.charCodeAt(r+f);if(d!==n.charCodeAt(c+f))break;47===d&&(u=f)}var h="";for(f=r+u+1;f<=i;++f)f!==i&&47!==e.charCodeAt(f)||(0===h.length?h+="..":h+="/..");return h.length>0?h+n.slice(c+u):(c+=u,47===n.charCodeAt(c)&&++c,n.slice(c))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var n=e.charCodeAt(0),r=47===n,o=-1,i=!0,a=e.length-1;a>=1;--a)if(47===(n=e.charCodeAt(a))){if(!i){o=a;break}}else i=!1;return-1===o?r?"/":".":r&&1===o?"//":e.slice(0,o)},basename:function(e,n){if(void 0!==n&&"string"!==typeof n)throw new TypeError('"ext" argument must be a string');t(e);var r,o=0,i=-1,a=!0;if(void 0!==n&&n.length>0&&n.length<=e.length){if(n.length===e.length&&n===e)return"";var c=n.length-1,s=-1;for(r=e.length-1;r>=0;--r){var l=e.charCodeAt(r);if(47===l){if(!a){o=r+1;break}}else-1===s&&(a=!1,s=r+1),c>=0&&(l===n.charCodeAt(c)?-1===--c&&(i=r):(c=-1,i=s))}return o===i?i=s:-1===i&&(i=e.length),e.slice(o,i)}for(r=e.length-1;r>=0;--r)if(47===e.charCodeAt(r)){if(!a){o=r+1;break}}else-1===i&&(a=!1,i=r+1);return-1===i?"":e.slice(o,i)},extname:function(e){t(e);for(var n=-1,r=0,o=-1,i=!0,a=0,c=e.length-1;c>=0;--c){var s=e.charCodeAt(c);if(47!==s)-1===o&&(i=!1,o=c+1),46===s?-1===n?n=c:1!==a&&(a=1):-1!==n&&(a=-1);else if(!i){r=c+1;break}}return-1===n||-1===o||0===a||1===a&&n===o-1&&n===r+1?"":e.slice(n,o)},format:function(e){if(null===e||"object"!==typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var n=t.dir||t.root,r=t.base||(t.name||"")+(t.ext||"");return n?n===t.root?n+r:n+e+r:r}("/",e)},parse:function(e){t(e);var n={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return n;var r,o=e.charCodeAt(0),i=47===o;i?(n.root="/",r=1):r=0;for(var a=-1,c=0,s=-1,l=!0,u=e.length-1,f=0;u>=r;--u)if(47!==(o=e.charCodeAt(u)))-1===s&&(l=!1,s=u+1),46===o?-1===a?a=u:1!==f&&(f=1):-1!==a&&(f=-1);else if(!l){c=u+1;break}return-1===a||-1===s||0===f||1===f&&a===s-1&&a===c+1?-1!==s&&(n.base=n.name=0===c&&i?e.slice(1,s):e.slice(c,s)):(0===c&&i?(n.name=e.slice(1,a),n.base=e.slice(1,s)):(n.name=e.slice(c,a),n.base=e.slice(c,s)),n.ext=e.slice(a,s)),c>0?n.dir=e.slice(0,c-1):i&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null};o.posix=o,e.exports=o}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}},a=!0;try{t[e](i,i.exports,o),a=!1}finally{a&&delete n[e]}return i.exports}o.ab="//";var i=o(977);e.exports=i}()},7663:function(e){!function(){var t={162:function(e){var t,n,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var c,s=[],l=!1,u=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):u=-1,s.length&&d())}function d(){if(!l){var e=a(f);l=!0;for(var t=s.length;t;){for(c=s,s=[];++u<t;)c&&c[u].run();u=-1,t=s.length}c=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function g(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||l||a(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=g,r.addListener=g,r.once=g,r.off=g,r.removeListener=g,r.removeAllListeners=g,r.emit=g,r.prependListener=g,r.prependOnceListener=g,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},a=!0;try{t[e](i,i.exports,r),a=!1}finally{a&&delete n[e]}return i.exports}r.ab="//";var o=r(162);e.exports=o}()},9008:function(e,t,n){e.exports=n(5443)}},function(e){e.O(0,[774,888,179],(function(){return t=2214,e(e.s=t);var t}));var t=e.O();_N_E=t}]);