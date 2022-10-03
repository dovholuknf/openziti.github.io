"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[2788],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=p(t),g=o,m=f["".concat(s,".").concat(g)]||f[g]||u[g]||i;return t?r.createElement(m,c(c({ref:n},l),{},{components:t})):r.createElement(m,c({ref:n},l))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8583:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const i={},c=void 0,a={unversionedId:"core-concepts/config-store/managing",id:"core-concepts/config-store/managing",title:"managing",description:"Managing Configurations",source:"@site/docs/core-concepts/config-store/managing.md",sourceDirName:"core-concepts/config-store",slug:"/core-concepts/config-store/managing",permalink:"/docusaurus/docs/core-concepts/config-store/managing",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/core-concepts/config-store/managing.md",tags:[],version:"current",frontMatter:{},sidebar:"rootSidebar",previous:{title:"consuming",permalink:"/docusaurus/docs/core-concepts/config-store/consuming"},next:{title:"Metrics",permalink:"/docusaurus/docs/core-concepts/metrics/"}},s={},p=[{value:"Managing Configurations",id:"managing-configurations",level:2}],l={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"managing-configurations"},"Managing Configurations"),(0,o.kt)("p",null,"Here is a JSON schema, modeled on the tunneler client configuration. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$id": "http://myapp.company.com/schemas/myapp.v1.config.json",\n  "additionalProperties": false,\n  "properties": {\n    "hostname": {\n      "type": "string"\n    },\n    "port": {\n      "maximum": 65535,\n      "minimum": 0,\n      "type": "integer"\n    }\n  },\n  "required": [\n    "hostname",\n    "port"\n  ],\n  "type": "object"\n}\n')),(0,o.kt)("p",null,"Put the schema in a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"example-config-type.json"),", and you can create a configuration type named my-app with it. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ ziti edge create config-type my-app --schema-file example-config-type.json \n")),(0,o.kt)("p",null,"You can now create a configuration of this type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ ziti edge create config ssh-client my-app \\\n    \'{  \n       "hostname" : "ssh.company.com", \n       "port" : 22 \n     }\'\n')),(0,o.kt)("p",null,"Finally, you can reference this when creating a service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ ziti edge create service ssh --configs ssh\n")),(0,o.kt)("p",null,"If a particular site wanted SSH on a different port, you could create a different configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ ziti edge create config scranton-office-ssh-client my-app \\\n    \'{ \n       "hostname" : "ssh.company.com", \n       "port" : 2222 \n     }\'\n')),(0,o.kt)("p",null,"The identity corresponding to a tunneler at that site could then be configured to use that configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ ziti edge create identity service scranton-office\n\n$ ziti edge update identity-configs scranton-office ssh scranton-office-ssh-client\n\n$ ziti edge list identity service-configs scranton-office\nservice: ssh    config: scranton-office-ssh-client\nresults: 1-1 of 1\n")),(0,o.kt)("p",null,"Overrides can be removed as well, if they are no longer needed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ ziti edge update identity-configs scranton-office ssh scranton-office-ssh-client --remove\n\n$ ziti edge list identity service-configs scranton-office\nresults: none\n")))}u.isMDXComponent=!0}}]);