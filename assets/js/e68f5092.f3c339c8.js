(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[356],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||s;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6974:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var a=n(2122),r=n(9756),s=(n(7294),n(3905)),i={id:"guides.chatEvent",title:"Using ChatEvent",sidebar_label:"Using ChatEvent",slug:"/guides/chatEvent"},o=void 0,c={unversionedId:"guides/guides.chatEvent",id:"guides/guides.chatEvent",isDocsHomePage:!1,title:"Using ChatEvent",description:"Creating chatEvent",source:"@site/docs/guides/chatEvent.md",sourceDirName:"guides",slug:"/guides/chatEvent",permalink:"/laravel-chat-system/docs/guides/chatEvent",editUrl:"https://github.com/myckhel/laravel-chat-system-docs/edit/master/docs/guides/chatEvent.md",version:"current",frontMatter:{id:"guides.chatEvent",title:"Using ChatEvent",sidebar_label:"Using ChatEvent",slug:"/guides/chatEvent"},sidebar:"docs",previous:{title:"Using Message",permalink:"/laravel-chat-system/docs/guides/message"},next:{title:"Listening to broadcast events",permalink:"/laravel-chat-system/docs/guides/broadcasts"}},l=[{value:"Creating chatEvent",id:"creating-chatevent",children:[]},{value:"Broadcasting chatEvent",id:"broadcasting-chatevent",children:[]}],u={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"creating-chatevent"},"Creating chatEvent"),(0,s.kt)("p",null,"You may create chat events by a ",(0,s.kt)("inlineCode",{parentName:"p"},"ChatEventMaker")," model for ",(0,s.kt)("inlineCode",{parentName:"p"},"Message")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"Conversation")," models.\nfor example, creating a read event for a particular message."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$user->chatEventMakers()\n  ->create([\n    'made_type' => $message::class,\n    'made_id'   => $message->id,\n    'type'      => \"read\"\n  ]);\n")),(0,s.kt)("details",null,(0,s.kt)("summary",null,"output"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "made_type": "App\\\\Models\\\\Message",\n    "made_id": 925,\n    "type": "read",\n    "maker_id": 13,\n    "maker_type": "App\\\\Models\\\\User",\n    "updated_at": "2021-07-23T23:00:06.000000Z",\n    "created_at": "2021-07-23T23:00:06.000000Z",\n    "id": 2042\n}\n'))),(0,s.kt)("h2",{id:"broadcasting-chatevent"},"Broadcasting chatEvent"),(0,s.kt)("p",null,"By default, everytime chat is event is created, a ",(0,s.kt)("a",{parentName:"p",href:"../apis/events/message/events"},"Message\\Events")," is broadcasted if only you ",(0,s.kt)("a",{parentName:"p",href:"providers#registering-observers"},"registered ChatSystem Observers"),".\nYou may manually broadcast chatEvent."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"use Myckhel\\ChatSystem\\Events\\Message\\Events;\n\nbroadcast(new Events($chatEvent));\n")),(0,s.kt)("details",null,(0,s.kt)("summary",null,"output"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[2021-07-23 23:00:07] local.INFO: Broadcasting [message] on channels [private-message-event.user.13, private-message-event.user.10] with payload:\n{\n    "event": {\n        "id": 2042,\n        "maker_type": "App\\\\Models\\\\User",\n        "maker_id": 13,\n        "made_type": "App\\\\Models\\\\Message",\n        "made_id": 925,\n        "type": "read",\n        "all": false,\n        "created_at": "2021-07-23T23:00:06.000000Z",\n        "updated_at": "2021-07-23T23:00:06.000000Z",\n        "made": {\n            "id": 925,\n            "conversation_id": 305,\n            "user_id": 13,\n            "reply_type": null,\n            "reply_id": null,\n            "message": "i am good",\n            "type": "user",\n            "metas": {\n                "token": "1627080883413"\n            },\n            "created_at": "2021-07-23T22:54:44.000000Z",\n            "updated_at": "2021-07-23T22:54:44.000000Z",\n            "isSender": true\n        }\n    },\n    "conversation_id": null,\n    "socket": null\n}\n'))))}d.isMDXComponent=!0}}]);