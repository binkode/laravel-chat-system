(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6556],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||l;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},20:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),o={id:"chatEvent",title:"ChatEvent APIs",sidebar_label:"ChatEvent",slug:"/apis/models/chatEvent"},i=void 0,s={unversionedId:"apis/models/chatEvent",id:"version-v1.0-alpha.3/apis/models/chatEvent",isDocsHomePage:!1,title:"ChatEvent APIs",description:"Namespace",source:"@site/versioned_docs/version-v1.0-alpha.3/apis/models/chatEvent.md",sourceDirName:"apis/models",slug:"/apis/models/chatEvent",permalink:"/laravel-chat-system/docs/v1.0-alpha.3/apis/models/chatEvent",editUrl:"https://github.com/myckhel/laravel-chat-system-docs/edit/master/versioned_docs/version-v1.0-alpha.3/apis/models/chatEvent.md",version:"v1.0-alpha.3",frontMatter:{id:"chatEvent",title:"ChatEvent APIs",sidebar_label:"ChatEvent",slug:"/apis/models/chatEvent"},sidebar:"version-v1.0-alpha.3/docs",previous:{title:"Conversation",permalink:"/laravel-chat-system/docs/v1.0-alpha.3/apis/models/conversation"},next:{title:"Message Events",permalink:"/laravel-chat-system/docs/v1.0-alpha.3/apis/events/message/events"}},p=[{value:"<strong>Namespace</strong>",id:"namespace",children:[]},{value:"<strong>Columns</strong>",id:"columns",children:[]},{value:"Query Builders",id:"query-builders",children:[{value:"<code>withAll()</code>",id:"withall",children:[]},{value:"<code>notMessenger()</code>",id:"notmessenger",children:[]}]},{value:"Relationships",id:"relationships",children:[{value:"<code>message()</code>",id:"message",children:[]},{value:"<code>conversation()</code>",id:"conversation",children:[]},{value:"<code>maker()</code>",id:"maker",children:[]},{value:"<code>made()</code>",id:"made",children:[]}]}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"namespace"},(0,l.kt)("strong",{parentName:"h2"},"Namespace")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Myckhel\\ChatSystem\\Models\\ChatEvent")),(0,l.kt)("h2",{id:"columns"},(0,l.kt)("strong",{parentName:"h2"},"Columns")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"maker_id")),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"id of the model making event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"maker_type")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"class of the model making event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"made_id")),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"id of the model making event from")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"made_type")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"class of the model making event from")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},"enum(read, delete, deliver)"),(0,l.kt)("td",{parentName:"tr",align:null},"the type of the event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"all")),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"whether event was made for all participant")))),(0,l.kt)("h2",{id:"query-builders"},"Query Builders"),(0,l.kt)("p",null,"Methods that build queries."),(0,l.kt)("h3",{id:"withall"},(0,l.kt)("inlineCode",{parentName:"h3"},"withAll()")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"adds query where maker is the given user or chat event is for all participants.")),(0,l.kt)("h4",{id:"params"},"@Params"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"user"))," | user to retrive chat events for. | ",(0,l.kt)("inlineCode",{parentName:"li"},"ChatEventMaker"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"ChatEvent::withAll($user)->get();\n")),(0,l.kt)("h3",{id:"notmessenger"},(0,l.kt)("inlineCode",{parentName:"h3"},"notMessenger()")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"adds query where the chat event message sender is not the given user.")),(0,l.kt)("h4",{id:"params-1"},"@Params"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"user"))," | user that should not be the chat event message sender. | ",(0,l.kt)("inlineCode",{parentName:"li"},"ChatEventMaker|int"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"ChatEvent::notMessenger($user)->first();\n")),(0,l.kt)("h2",{id:"relationships"},"Relationships"),(0,l.kt)("p",null,"These are methods that defines the relationship between models."),(0,l.kt)("h3",{id:"message"},(0,l.kt)("inlineCode",{parentName:"h3"},"message()")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"ChatEvent belongs to a message.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$chatEvent->message;\n")),(0,l.kt)("h3",{id:"conversation"},(0,l.kt)("inlineCode",{parentName:"h3"},"conversation()")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"ChatEvent belongs to a conversation.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$chatEvent->conversation;\n")),(0,l.kt)("h3",{id:"maker"},(0,l.kt)("inlineCode",{parentName:"h3"},"maker()")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"ChatEvent morph to maker models.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$chatEvent->maker;\n")),(0,l.kt)("h3",{id:"made"},(0,l.kt)("inlineCode",{parentName:"h3"},"made()")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"ChatEvent morph to made models.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$chatEvent->made;\n")))}m.isMDXComponent=!0}}]);