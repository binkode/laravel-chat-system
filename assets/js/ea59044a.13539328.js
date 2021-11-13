(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[12],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=i,f=d["".concat(o,".").concat(h)]||d[h]||u[h]||l;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6504:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return c},default:function(){return u}});var n=r(2122),i=r(9756),l=(r(7294),r(3905)),a={id:"install",title:"Installation",sidebar_label:"Installation",slug:"/install"},s=void 0,o={unversionedId:"install",id:"version-v1.0-alpha.3/install",isDocsHomePage:!1,title:"Installation",description:"Install",source:"@site/versioned_docs/version-v1.0-alpha.3/install.md",sourceDirName:".",slug:"/install",permalink:"/laravel-chat-system/docs/v1.0-alpha.3/install",editUrl:"https://github.com/myckhel/laravel-chat-system-docs/edit/master/versioned_docs/version-v1.0-alpha.3/install.md",version:"v1.0-alpha.3",frontMatter:{id:"install",title:"Installation",sidebar_label:"Installation",slug:"/install"},sidebar:"version-v1.0-alpha.3/docs",previous:{title:"Introduction",permalink:"/laravel-chat-system/docs/v1.0-alpha.3/"},next:{title:"Requirements",permalink:"/laravel-chat-system/docs/v1.0-alpha.3/requirements"}},c=[{value:"<code>Install</code>",id:"install",children:[]},{value:"<code>Setup</code>",id:"setup",children:[{value:"Publishing the config file",id:"publishing-the-config-file",children:[]},{value:"Publishing the migrations files",id:"publishing-the-migrations-files",children:[]},{value:"Publishing the seeders files",id:"publishing-the-seeders-files",children:[]},{value:"Publishing the factories files",id:"publishing-the-factories-files",children:[]},{value:"Publishing all resources files",id:"publishing-all-resources-files",children:[]}]}],p={toc:c};function u(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"install"},(0,l.kt)("inlineCode",{parentName:"h2"},"Install")),(0,l.kt)("p",null,"Via Composer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"composer require myckhel/laravel-chat-system\n")),(0,l.kt)("h2",{id:"setup"},(0,l.kt)("inlineCode",{parentName:"h2"},"Setup")),(0,l.kt)("h3",{id:"publishing-the-config-file"},"Publishing the config file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan vendor:publish --provider=\"Myckhel\\ChatSystem\\ChatSystemServiceProvider\" --tag='config'\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"chat-system.php")," should be copied to the ",(0,l.kt)("inlineCode",{parentName:"p"},"config")," directory"),(0,l.kt)("h3",{id:"publishing-the-migrations-files"},"Publishing the migrations files"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan vendor:publish --provider=\"Myckhel\\ChatSystem\\ChatSystemServiceProvider\" --tag='migrations'\n")),(0,l.kt)("p",null,"migration files should be copied to the ",(0,l.kt)("inlineCode",{parentName:"p"},"database/migrations")," directory"),(0,l.kt)("h3",{id:"publishing-the-seeders-files"},"Publishing the seeders files"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan vendor:publish --provider=\"Myckhel\\ChatSystem\\ChatSystemServiceProvider\" --tag='seeders'\n")),(0,l.kt)("p",null,"seeders files should be copied to the ",(0,l.kt)("inlineCode",{parentName:"p"},"database/seeders")," directory"),(0,l.kt)("h3",{id:"publishing-the-factories-files"},"Publishing the factories files"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan vendor:publish --provider=\"Myckhel\\ChatSystem\\ChatSystemServiceProvider\" --tag='factories'\n")),(0,l.kt)("p",null,"factories files should be copied to the ",(0,l.kt)("inlineCode",{parentName:"p"},"database/factories")," directory"),(0,l.kt)("h3",{id:"publishing-all-resources-files"},"Publishing all resources files"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'php artisan vendor:publish --provider="Myckhel\\ChatSystem\\ChatSystemServiceProvider"\n')),(0,l.kt)("p",null,"all resources files should be copied to the respective directories"))}u.isMDXComponent=!0}}]);