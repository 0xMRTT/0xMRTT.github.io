"use strict";(self.webpackChunk_0_x_mrtt_github_io=self.webpackChunk_0_x_mrtt_github_io||[]).push([[6197],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return s}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(t),s=o,g=d["".concat(u,".").concat(s)]||d[s]||f[s]||c;return t?r.createElement(g,i(i({ref:n},p),{},{components:t})):r.createElement(g,i({ref:n},p))}));function s(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1407:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return f}});var r=t(7462),o=t(3366),c=(t(7294),t(3905)),i=["components"],a={},u="Use CNP user config",l={unversionedId:"cnp/advanced/config",id:"cnp/advanced/config",title:"Use CNP user config",description:"You can globaly configure CNP by creating a config file at ~/.config/cnp.ini",source:"@site/docs/cnp/advanced/config.md",sourceDirName:"cnp/advanced",slug:"/cnp/advanced/config",permalink:"/docs/cnp/advanced/config",draft:!1,editUrl:"https://github.com/0xMRTT/0xMRTT.github.io/edit/main/docs/docs/cnp/advanced/config.md",tags:[],version:"current",lastUpdatedBy:"0xMRTT",lastUpdatedAt:1653410066,formattedLastUpdatedAt:"5/24/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Advanced",permalink:"/docs/category/advanced"},next:{title:"Contribute",permalink:"/docs/cnp/community/contribute"}},p={},f=[],d={toc:f};function s(e){var n=e.components,t=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"use-cnp-user-config"},"Use CNP user config"),(0,c.kt)("p",null,"You can globaly configure CNP by creating a config file at ",(0,c.kt)("inlineCode",{parentName:"p"},"~/.config/cnp.ini")),(0,c.kt)("details",null,(0,c.kt)("summary",null,"Advanced config"),(0,c.kt)("div",null,(0,c.kt)("div",null,"You can change the file where cnp will found the config by setting ",(0,c.kt)("code",null,"CNP_CONFIG")," environment variable."),(0,c.kt)("code",null,'export CNP_CONFIG="/path/to/cnp/config.ini'))))}s.isMDXComponent=!0}}]);