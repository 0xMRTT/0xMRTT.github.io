"use strict";(self.webpackChunk_0_x_mrtt_github_io=self.webpackChunk_0_x_mrtt_github_io||[]).push([[9817],{7974:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(3117),r=n(7294),i=n(6010),l=n(3702),c=n(3734),s=n(9003),o=n(3699),m=n(9524),u=n(7325);function d(e){return r.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}var v={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function b(e){var t=e.children,n=e.href,a="breadcrumbs__link";return e.isLast?r.createElement("span",{className:a,itemProp:"name"},t):n?r.createElement(o.Z,{className:a,href:n,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:a},t)}function h(e){var t=e.children,n=e.active,l=e.index,c=e.addMicrodata;return r.createElement("li",(0,a.Z)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,i.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,r.createElement("meta",{itemProp:"position",content:String(l+1)}))}function f(){var e=(0,m.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.Z,{"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,i.Z)("breadcrumbs__link",v.breadcrumbsItemLink),href:e},r.createElement(d,{className:v.breadcrumbHomeIcon})))}function g(){var e=(0,c.s1)(),t=(0,s.Ns)();return e?r.createElement("nav",{className:(0,i.Z)(l.k.docs.docBreadcrumbs,v.breadcrumbsContainer),"aria-label":(0,u.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(f,null),e.map((function(t,n){var a=n===e.length-1;return r.createElement(h,{key:n,active:a,index:n,addMicrodata:!!t.href},r.createElement(b,{href:t.href,isLast:a},t.label))})))):null}},853:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});var a=n(7294),r=n(5463),i=n(3734),l=n(9524),c=n(6010),s=n(3699),o=n(2735),m=n(7325),u="cardContainer_fWXF",d="cardTitle_rnsV",v="cardDescription_PWke";function b(e){var t=e.href,n=e.children;return a.createElement(s.Z,{href:t,className:(0,c.Z)("card padding--lg",u)},n)}function h(e){var t=e.href,n=e.icon,r=e.title,i=e.description;return a.createElement(b,{href:t},a.createElement("h2",{className:(0,c.Z)("text--truncate",d),title:r},n," ",r),i&&a.createElement("p",{className:(0,c.Z)("text--truncate",v),title:i},i))}function f(e){var t=e.item,n=(0,i.Wl)(t);return n?a.createElement(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){var t,n=e.item,r=(0,o.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!=(t=n.docId)?t:void 0);return a.createElement(h,{href:n.href,icon:r,title:n.label,description:null==l?void 0:l.description})}function p(e){var t=e.item;switch(t.type){case"link":return a.createElement(g,{item:t});case"category":return a.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function E(e){var t=e.items,n=e.className;return a.createElement("section",{className:(0,c.Z)("row",n)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,i.Wl)(e)}))}(t).map((function(e,t){return a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(p,{item:e}))})))}var Z=n(1792),N=n(5350),_=n(4617),k=n(7974),L=n(3899),T="generatedIndexPage_vN6x",x="list_eTzJ",y="title_kItE";function I(e){var t=e.categoryGeneratedIndex;return a.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,l.Z)(t.image)})}function w(e){var t=e.categoryGeneratedIndex,n=(0,i.jA)();return a.createElement("div",{className:T},a.createElement(N.Z,null),a.createElement(k.Z,null),a.createElement(_.Z,null),a.createElement("header",null,a.createElement(L.Z,{as:"h1",className:y},t.title),t.description&&a.createElement("p",null,t.description)),a.createElement("article",{className:"margin-top--lg"},a.createElement(E,{items:n.items,className:x})),a.createElement("footer",{className:"margin-top--lg"},a.createElement(Z.Z,{previous:t.navigation.previous,next:t.navigation.next})))}function V(e){return a.createElement(a.Fragment,null,a.createElement(I,e),a.createElement(w,e))}},1792:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(3117),r=n(7294),i=n(7325),l=n(3672);function c(e){var t=e.previous,n=e.next;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&r.createElement(l.Z,(0,a.Z)({},t,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&r.createElement(l.Z,(0,a.Z)({},n,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},4617:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),r=n(6010),i=n(7325),l=n(3702),c=n(8801);function s(e){var t=e.className,n=(0,c.E)();return n.badge?a.createElement("span",{className:(0,r.Z)(t,l.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}},5350:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(7294),r=n(6010),i=n(9962),l=n(3699),c=n(7325),s=n(9871),o=n(3702),m=n(6409),u=n(8801);var d={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(c.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(c.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=d[e.versionMetadata.banner];return a.createElement(t,e)}function b(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(c.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(l.Z,{to:n,onClick:r},a.createElement(c.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){var t,n=e.className,l=e.versionMetadata,c=(0,i.Z)().siteConfig.title,u=(0,s.gA)({failfast:!0}).pluginId,d=(0,m.J)(u).savePreferredVersionName,h=(0,s.Jo)(u),f=h.latestDocSuggestion,g=h.latestVersionSuggestion,p=null!=f?f:(t=g).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,r.Z)(n,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(v,{siteTitle:c,versionMetadata:l})),a.createElement("div",{className:"margin-top--md"},a.createElement(b,{versionLabel:g.label,to:p.path,onClick:function(){return d(g.name)}})))}function f(e){var t=e.className,n=(0,u.E)();return n.banner?a.createElement(h,{className:t,versionMetadata:n}):null}},3899:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(3117),r=n(102),i=n(7294),l=n(6010),c=n(7325),s=n(107),o="anchorWithStickyNavbar_LWe7",m="anchorWithHideOnScrollNavbar_WYt5",u=["as","id"];function d(e){var t=e.as,n=e.id,d=(0,r.Z)(e,u),v=(0,s.L)().navbar.hideOnScroll;return"h1"!==t&&n?i.createElement(t,(0,a.Z)({},d,{className:(0,l.Z)("anchor",v?m:o),id:n}),d.children,i.createElement("a",{className:"hash-link",href:"#"+n,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(t,(0,a.Z)({},d,{id:void 0}))}},3672:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(6010),i=n(3699);function l(e){var t=e.permalink,n=e.title,l=e.subLabel,c=e.isNext;return a.createElement(i.Z,{className:(0,r.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},n))}}}]);