"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[4265],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>f});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(i),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||r;return i?n.createElement(m,s(s({ref:t},u),{},{components:i})):n.createElement(m,s({ref:t},u))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,s=new Array(r);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<r;l++)s[l]=i[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},6719:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=i(7462),a=(i(7294),i(3905));const r={},s="API Session Certificates",o={unversionedId:"core-concepts/security/authentication/api-session-certificates",id:"core-concepts/security/authentication/api-session-certificates",title:"API Session Certificates",description:"API Session Certificates are ephemeral short-lived x509 certificates that can be created through a CSR process after",source:"@site/docs/core-concepts/security/authentication/20-api-session-certificates.md",sourceDirName:"core-concepts/security/authentication",slug:"/core-concepts/security/authentication/api-session-certificates",permalink:"/docusaurus/docs/core-concepts/security/authentication/api-session-certificates",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/core-concepts/security/authentication/20-api-session-certificates.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"rootSidebar",previous:{title:"3rd Party CAs",permalink:"/docusaurus/docs/core-concepts/security/authentication/third-party-cas"},next:{title:"Authentication Policies",permalink:"/docusaurus/docs/core-concepts/security/authentication/authentication-policies"}},c={},l=[{value:"Lifecycle &amp; Scope",id:"lifecycle--scope",level:2},{value:"Use",id:"use",level:2},{value:"Creation",id:"creation",level:2},{value:"Request Payload",id:"request-payload",level:3},{value:"Response Payload",id:"response-payload",level:3},{value:"List &amp; Detail",id:"list--detail",level:2},{value:"Delete",id:"delete",level:2}],u={toc:l};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-session-certificates"},"API Session Certificates"),(0,a.kt)("p",null,"API Session Certificates are ephemeral short-lived x509 certificates that can be created through a CSR process after\nan API Session is ",(0,a.kt)("a",{parentName:"p",href:"auth#full-vs-partial-authentication"},"fully authenticated"),". "),(0,a.kt)("h2",{id:"lifecycle--scope"},"Lifecycle & Scope"),(0,a.kt)("p",null,'The certificates are scoped by the "valid before" and "valid after" dates in addition to the API Session. If an API Session is\nremoved (expiration, logout, etc.) the API Session Certificates created by that API Session are no longer valid.'),(0,a.kt)("p",null,"API Session Certificates may only be used by the API Session that created them. Attempting to use an API Session\nCertificate to connect to and Edge Router without the matching API Session security token will be rejected."),(0,a.kt)("h2",{id:"use"},"Use"),(0,a.kt)("p",null,"API Session Certificates are useful for identities that do not use x509 certificates as a primary authentication mechanism.\nAPI Sessions that use x509 certificates during primary authentication can use that  certificate for connections to\nEdge Routers. For non-x509 primary authentication mechanisms (JWT, UPDB, etc.) API Session Certificates must be used\nas no certificates will be available for use to connect to Edge Routers."),(0,a.kt)("h2",{id:"creation"},"Creation"),(0,a.kt)("p",null,"API Session Certificates can be created by ",(0,a.kt)("inlineCode",{parentName:"p"},"POST /edge/client/v1/current-api-session/certificates"),". The payload\nneeds to be a valid PEN encoded CSR in the ",(0,a.kt)("inlineCode",{parentName:"p"},"csr")," field. The CSR should contain at minimum subject information.\nSensitive fields such as key usage will be ignored. Additional Ziti specific SANs information\nmay be added."),(0,a.kt)("h3",{id:"request-payload"},"Request Payload"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "csr": "-----BEGIN CERTIFICATE REQUEST-----\\nMIICij...\\n-----END CERTIFICATE REQUEST-----"\n}\n')),(0,a.kt)("h3",{id:"response-payload"},"Response Payload"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "_links": {\n            "self": {\n                "href": "./current-api-session/certificates/URjzX9U1U"\n            }\n        },\n        "id": "URjzX9U1U",\n        "cas": "\\n-----BEGIN CERTIFICATE-----\\nMII...\\n-----END CERTIFICATE-----\\n",\n        "certificate": "-----BEGIN CERTIFICATE-----\\nMII...\\n-----END CERTIFICATE-----\\n"\n    },\n    "meta": {}\n}\n')),(0,a.kt)("h2",{id:"list--detail"},"List & Detail"),(0,a.kt)("p",null,"API Session certificates for the current API Session may be "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"listed: ",(0,a.kt)("inlineCode",{parentName:"li"},"GET /edge/client/v1/current-api-session/certificates")),(0,a.kt)("li",{parentName:"ul"},"detailed: ",(0,a.kt)("inlineCode",{parentName:"li"},"GET /edge/client/v1/current-api-session/certificates/<id>"))),(0,a.kt)("h2",{id:"delete"},"Delete"),(0,a.kt)("p",null,"API Session Certificates may be removed via ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE /edge/client/v1/current-api-session/certificates/<id>")))}p.isMDXComponent=!0}}]);