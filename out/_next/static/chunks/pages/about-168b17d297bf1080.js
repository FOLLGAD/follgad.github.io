(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{4613:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(4228)}])},6324:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893),o=n(1664),a=n(1163),l=function(e){var t,n=e.siteTitle,l=(0,a.useRouter)(),i="mx-2 px-2 py-1 text-decoration-none text-gray-200";return(0,r.jsx)("header",{className:"print:hidden bg-blue-700 mb-4",children:(0,r.jsxs)("div",{className:"flex container mx-auto justify-between",children:[(0,r.jsx)("div",{className:"p-4",children:(0,r.jsx)("span",{className:"text-decoration-none text-gray-200 text-2xl font-semibold",children:(0,r.jsx)(o.default,{href:"/",children:n})})}),(0,r.jsxs)("div",{className:"my-auto flex",children:[(0,r.jsx)("span",{className:(t="/",l.pathname===t?"mx-2 px-2 py-1 text-decoration-none text-gray-200 underline":i),children:(0,r.jsx)(o.default,{href:"/",children:"Resume"})}),(0,r.jsx)("span",{className:i,children:(0,r.jsx)(o.default,{href:"https://linkedin.com/in/emil-ahlback",children:(0,r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:"About me"})})})]})]})})},i=function(e){var t=e.children;(new Date).getFullYear();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{siteTitle:"follgad"}),(0,r.jsx)("div",{className:"container mx-auto content-container",children:(0,r.jsx)("main",{children:t})})]})}},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(u){i=!0,o=u}finally{try{l||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,l=(a=n(7294))&&a.__esModule?a:{default:a},i=n(6273),u=n(387),c=n(7190);var s={};function f(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=u.useRouter(),a=l.default.useMemo((function(){var t=o(i.resolveHref(r,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?i.resolveHref(r,e.as):a||n}}),[r,e.href,e.as]),d=a.href,p=a.as,h=e.children,v=e.replace,y=e.shallow,m=e.scroll,b=e.locale;"string"===typeof h&&(h=l.default.createElement("a",null,h));var x=(t=l.default.Children.only(h))&&"object"===typeof t&&t.ref,g=o(c.useIntersection({rootMargin:"200px"}),2),j=g[0],w=g[1],_=l.default.useCallback((function(e){j(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,j]);l.default.useEffect((function(){var e=w&&n&&i.isLocalURL(d),t="undefined"!==typeof b?b:r&&r.locale,o=s[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(r,d,p,{locale:t})}),[p,d,w,b,n,r]);var E={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,l,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:u,scroll:l}))}(e,r,d,p,v,y,m,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&f(r,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof b?b:r&&r.locale,k=r&&r.isLocaleDomain&&i.getDomainLocale(p,N,r&&r.locales,r&&r.domainLocales);E.href=k||i.addBasePath(i.addLocale(p,N,r&&r.defaultLocale))}return l.default.cloneElement(t,E)};t.default=d},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(u){i=!0,o=u}finally{try{l||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,r=a.useRef(),c=o(a.useState(!1),2),s=c[0],f=c[1],d=a.useCallback((function(e){r.current&&(r.current(),r.current=void 0),n||s||e&&e.tagName&&(r.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,l=r.elements;return l.set(e,t),a.observe(e),function(){l.delete(e),a.unobserve(e),0===l.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,s]);return a.useEffect((function(){if(!i&&!s){var e=l.requestIdleCallback((function(){return f(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[s]),[d,s]};var a=n(7294),l=n(9311),i="undefined"!==typeof IntersectionObserver;var u=new Map},4228:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=(n(7294),n(6324));t.default=function(){return(0,r.jsx)(o.Z,{children:(0,r.jsx)("div",{className:"flex flex-wrap px-4",children:(0,r.jsx)("div",{})})})}},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[774,888,179],(function(){return t=4613,e(e.s=t);var t}));var t=e.O();_N_E=t}]);