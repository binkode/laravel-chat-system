(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7813],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?a.createElement(v,i(i({ref:t},p),{},{components:n})):a.createElement(v,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1901:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=n(2122),r=n(9756),s=(n(7294),n(3905)),i={id:"messageEvent",title:"Message Events",sidebar_label:"Message Events",slug:"/apis/events/message/events"},o=void 0,l={unversionedId:"apis/events/message/messageEvent",id:"version-1.0.0-beta.0/apis/events/message/messageEvent",isDocsHomePage:!1,title:"Message Events",description:"Namespace",source:"@site/versioned_docs/version-1.0.0-beta.0/apis/events/message/events.md",sourceDirName:"apis/events/message",slug:"/apis/events/message/events",permalink:"/laravel-chat-system/docs/apis/events/message/events",editUrl:"https://github.com/myckhel/laravel-chat-system-docs/edit/master/versioned_docs/version-1.0.0-beta.0/apis/events/message/events.md",version:"1.0.0-beta.0",frontMatter:{id:"messageEvent",title:"Message Events",sidebar_label:"Message Events",slug:"/apis/events/message/events"},sidebar:"version-1.0.0-beta.0/docs",previous:{title:"HasMessage",permalink:"/laravel-chat-system/docs/apis/traits/message/hasMessage"},next:{title:"Message Created Event",permalink:"/laravel-chat-system/docs/apis/events/message/created"}},c=[{value:"<strong>Namespace</strong>",id:"namespace",children:[]},{value:"<strong>Broadcasts as</strong>",id:"broadcasts-as",children:[]},{value:"<strong>Broadcasts when</strong>",id:"broadcasts-when",children:[]},{value:"<strong>Broadcasts with</strong>",id:"broadcasts-with",children:[]},{value:"<strong>Broadcasts on channels</strong>",id:"broadcasts-on-channels",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"namespace"},(0,s.kt)("strong",{parentName:"h2"},"Namespace")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Myckhel\\ChatSystem\\Events\\Message\\Events")),(0,s.kt)("h2",{id:"broadcasts-as"},(0,s.kt)("strong",{parentName:"h2"},"Broadcasts as")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"message"))),(0,s.kt)("h2",{id:"broadcasts-when"},(0,s.kt)("strong",{parentName:"h2"},"Broadcasts when")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"event type is not (",(0,s.kt)("inlineCode",{parentName:"li"},"delete")," and event is for ",(0,s.kt)("inlineCode",{parentName:"li"},"message")," and is not ",(0,s.kt)("inlineCode",{parentName:"li"},"conversation_id"),")")),(0,s.kt)("h2",{id:"broadcasts-with"},(0,s.kt)("strong",{parentName:"h2"},"Broadcasts with")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"event"),"  type ",(0,s.kt)("inlineCode",{parentName:"li"},"Myckhel\\ChatSystem\\Contracts\\IChatEvent")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"conversation_id"),"  type ",(0,s.kt)("inlineCode",{parentName:"li"},"int"))),(0,s.kt)("h2",{id:"broadcasts-on-channels"},(0,s.kt)("strong",{parentName:"h2"},"Broadcasts on channels")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"private-message-event.user.{$participant_id}"))))}d.isMDXComponent=!0}}]);