(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5192],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?a.createElement(v,i(i({ref:t},p),{},{components:n})):a.createElement(v,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6271:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=n(2122),r=n(9756),s=(n(7294),n(3905)),i={id:"broadcasts",title:"ChatSystem Broadcast Events",sidebar_label:"Listening to broadcast events",slug:"/guides/broadcasts"},o=void 0,l={unversionedId:"guides/broadcasts",id:"version-v1.0-alpha.3/guides/broadcasts",isDocsHomePage:!1,title:"ChatSystem Broadcast Events",description:"Listening to Message\\Created event",source:"@site/versioned_docs/version-v1.0-alpha.3/guides/broadcasts.md",sourceDirName:"guides",slug:"/guides/broadcasts",permalink:"/laravel-chat-system/docs/v1.0-alpha.3/guides/broadcasts",editUrl:"https://github.com/myckhel/laravel-chat-system-docs/edit/master/versioned_docs/version-v1.0-alpha.3/guides/broadcasts.md",version:"v1.0-alpha.3",frontMatter:{id:"broadcasts",title:"ChatSystem Broadcast Events",sidebar_label:"Listening to broadcast events",slug:"/guides/broadcasts"},sidebar:"version-v1.0-alpha.3/docs",previous:{title:"Using ChatEvent",permalink:"/laravel-chat-system/docs/v1.0-alpha.3/guides/chatEvent"},next:{title:"Message",permalink:"/laravel-chat-system/docs/v1.0-alpha.3/apis/models/message"}},c=[{value:"Listening to MessageCreated event",id:"listening-to-messagecreated-event",children:[]},{value:"Listening to MessageEvents event",id:"listening-to-messageevents-event",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"listening-to-messagecreated-event"},"Listening to Message\\Created event"),(0,s.kt)("p",null,"From the frontend channel, you may listen to ",(0,s.kt)("a",{parentName:"p",href:"../apis/events/message/created"},"Message\\Created Event")," on broadcast channel:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"private-message-created.{$conversation_id}")," as ",(0,s.kt)("inlineCode",{parentName:"li"},"message")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"private-message-new.user.{$participantId}")," as ",(0,s.kt)("inlineCode",{parentName:"li"},"message")," to each conversation participants")),(0,s.kt)("p",null,"Using Laravel Echo as example broadcast client"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"Echo.private(`message-created.${conversation_id}`)\n  .listen('message', (event) => {\n    console.log(event)\n  })\n// OR\nEcho.private(`message-new.user.${participant_id}`)\n  .listen('message', (event) => {\n    console.log(event)\n  })\n")),(0,s.kt)("details",null,(0,s.kt)("summary",null,"output"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": {\n      "id": 922,\n      "conversation_id": 304,\n      "user_id": 13,\n      "reply_type": null,\n      "reply_id": null,\n      "message": "i am good",\n      "type": "activity",\n      "metas": null,\n      "created_at": "2021-07-23T22:36:20.000000Z",\n      "updated_at": "2021-07-23T22:36:20.000000Z",\n      "isSender": true,\n      "reply": null\n  }\n}\n'))),(0,s.kt)("h2",{id:"listening-to-messageevents-event"},"Listening to Message\\Events event"),(0,s.kt)("p",null,"From the frontend channel, you may listen to ",(0,s.kt)("a",{parentName:"p",href:"../apis/events/message/events"},"Message\\Events Event")," on broadcast channel ",(0,s.kt)("inlineCode",{parentName:"p"},"private-message-event.user.{$participant_id}")," as ",(0,s.kt)("inlineCode",{parentName:"p"},"message"),". This will broadcast to all participant otherwise it will only broadcast to the event maker if the ",(0,s.kt)("inlineCode",{parentName:"p"},"event->type")," is ",(0,s.kt)("inlineCode",{parentName:"p"},"delete")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"event->all")," is not ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"event->made_tye")," is ",(0,s.kt)("inlineCode",{parentName:"p"},"message"),"."),(0,s.kt)("p",null,"Using Laravel Echo as example broadcast client"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"Echo.private(`message-event.user.${participant_id}`)\n  .listen('message', (event) => {\n    console.log(event)\n  })\n")),(0,s.kt)("details",null,(0,s.kt)("summary",null,"output"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event": {\n        "id": 2042,\n        "maker_type": "App\\\\Models\\\\User",\n        "maker_id": 13,\n        "made_type": "App\\\\Models\\\\Message",\n        "made_id": 925,\n        "type": "read",\n        "all": false,\n        "created_at": "2021-07-23T23:00:06.000000Z",\n        "updated_at": "2021-07-23T23:00:06.000000Z",\n        "made": {\n            "id": 925,\n            "conversation_id": 305,\n            "user_id": 13,\n            "reply_type": null,\n            "reply_id": null,\n            "message": "i am good",\n            "type": "user",\n            "metas": {\n                "token": "1627080883413"\n            },\n            "created_at": "2021-07-23T22:54:44.000000Z",\n            "updated_at": "2021-07-23T22:54:44.000000Z",\n            "isSender": true\n        }\n    }\n}\n'))))}d.isMDXComponent=!0}}]);