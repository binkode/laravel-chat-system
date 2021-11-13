(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1931],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return h}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(t),h=o,p=m["".concat(c,".").concat(h)]||m[h]||d[h]||s;return t?r.createElement(p,a(a({ref:n},u),{},{components:t})):r.createElement(p,a({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9933:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=t(2122),o=t(9756),s=(t(7294),t(3905)),a={id:"configure",title:"ChatSystem configuration",sidebar_label:"Configuring ChatSystem",slug:"/guides/configure"},i=void 0,c={unversionedId:"guides/configure",id:"version-1.0.0-beta.0/guides/configure",isDocsHomePage:!1,title:"ChatSystem configuration",description:"Publish config file",source:"@site/versioned_docs/version-1.0.0-beta.0/guides/configure.md",sourceDirName:"guides",slug:"/guides/configure",permalink:"/laravel-chat-system/docs/guides/configure",editUrl:"https://github.com/myckhel/laravel-chat-system-docs/edit/master/versioned_docs/version-1.0.0-beta.0/guides/configure.md",version:"1.0.0-beta.0",frontMatter:{id:"configure",title:"ChatSystem configuration",sidebar_label:"Configuring ChatSystem",slug:"/guides/configure"},sidebar:"version-1.0.0-beta.0/docs",previous:{title:"Requirements",permalink:"/laravel-chat-system/docs/requirements"},next:{title:"Using Providers",permalink:"/laravel-chat-system/docs/guides/providers"}},l=[{value:"Publish config file",id:"publish-config-file",children:[]}],u={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"publish-config-file"},"Publish config file"),(0,s.kt)("p",null,"publish the config file if not published"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan vendor:publish --provider=\"Myckhel\\ChatSystem\\ChatSystemServiceProvider\" --tag='config'\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},'\nreturn [\n  /*\n  * ChatSystem Models\n  */\n  "models" => [\n    /*\n    * The model you want to use as a User model needs to implement the\n    * `Myckhel\\ChatSystem\\Contracts\\IChatEventMaker` contract.\n    */\n    "user"                => "App\\\\Models\\\\User",\n    \n    /*\n    * The model you want to use as a Conversation model needs to implement the\n    * `Myckhel\\ChatSystem\\Contracts\\IConversation` contract.\n    */\n    "conversation"        => Myckhel\\ChatSystem\\Models\\Conversation::class,\n    \n    /*\n    * The model you want to use as a ConversationUser model needs to implement the\n    * `Myckhel\\ChatSystem\\Contracts\\IConversationUser` contract or extends the\n    * `Myckhel\\ChatSystem\\Models\\ConversationUser`\n    */\n    "conversation_user"   => Myckhel\\ChatSystem\\Models\\ConversationUser::class,\n    \n    /*\n    * The model you want to use as a Message model needs to implement the\n    * `Myckhel\\ChatSystem\\Contracts\\IMessage` contract or extends the\n    * `Myckhel\\ChatSystem\\Models\\Message`\n    */\n    "message"             => Myckhel\\ChatSystem\\Models\\Message::class,\n    \n    /*\n    * The model you want to use as a ChatEvent model needs to implement the\n    * `Myckhel\\ChatSystem\\Contracts\\IChatEvent` contract or extends the\n    * `Myckhel\\ChatSystem\\Models\\ChatEvent`\n    */\n    "chat_event"          => Myckhel\\ChatSystem\\Models\\ChatEvent::class,\n  ],\n\n  /*\n  * ChatSystem Routes\n  * Change if you want to add middleware or prefix to\n  * chatSystem routes.\n  */\n  "route" => [\n    "middlewares" => [\'api\'],\n    "prefix"      => \'api\'\n  ],\n\n  /*\n  * Events Queues\n  * Change if you want to rename the broadcast queue\n  */\n  "queues" => [\n    "events" => [\n      "message" => [\n        "created" => "chat",\n        "events"  => "chat-event",\n      ],\n    ],\n    "jobs" => [\n      "chat" => [\n        "make-event" => "chat-event",\n      ],\n    ],\n  ],\n\n  /*\n  * Model Observers\n  * The class you want to use for model Observer\n  */\n  "observers"         => [\n    "models"          => [\n      "chat_event"    => Myckhel\\ChatSystem\\Observers\\ChatEventObserver::class,\n      "conversation"  => Myckhel\\ChatSystem\\Observers\\ConversationObserver::class,\n    ]\n  ]\n];\n\n\n')))}d.isMDXComponent=!0}}]);