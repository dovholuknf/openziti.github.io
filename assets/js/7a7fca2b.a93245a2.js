"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[4898],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},83298:(e,t,n)=>{n.d(t,{ZP:()=>a});var i=n(87462),r=(n(67294),n(3905));const o={toc:[]};function a(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Ziti provides several APIs. The most relevant Ziti API for an integrator is ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/developer/api/#edge-management-api"},"the Management API")," provided by the Ziti controller. The ",(0,r.kt)("inlineCode",{parentName:"p"},"ziti edge")," CLI and the web UI both use the Management API for create, list, update, delete operations on Ziti entities like identities and services."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/developer/api/#edge-client-api"},"The Edge Client API")," is also provided by the Ziti controller. This is the API implemented by Ziti Edge SDKs which are used by endpoints to authenticate and discover Ziti services and routers."))}a.isMDXComponent=!0},61676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(87462),r=(n(67294),n(3905)),o=n(83298);const a={title:"Edge APIs"},s=void 0,l={unversionedId:"reference/developer/api/index",id:"reference/developer/api/index",title:"Edge APIs",description:"Specifications & Documentation",source:"@site/docs/reference/developer/api/index.md",sourceDirName:"reference/developer/api",slug:"/reference/developer/api/",permalink:"/docs/reference/developer/api/",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/reference/developer/api/index.md",tags:[],version:"current",frontMatter:{title:"Edge APIs"},sidebar:"docsSidebar",previous:{title:"Ziti Developer Resources",permalink:"/docs/reference/developer/"},next:{title:"Edge Client API Reference",permalink:"/docs/reference/developer/api/edge-client-reference"}},c={},d=[{value:"Specifications &amp; Documentation",id:"specifications--documentation",level:2},{value:"Find the Controller Version",id:"find-the-controller-version",level:3},{value:"Edge Management API",id:"edge-management-api",level:2},{value:"Edge Client API",id:"edge-client-api",level:2},{value:"Edge Client &amp; Management Shared Capabilities",id:"edge-client--management-shared-capabilities",level:2},{value:"Configuring the Controller Edge APIs",id:"configuring-the-controller-edge-apis",level:2},{value:"Controller Configuration Reference",id:"controller-configuration-reference",level:3},{value:"Example Controller Edge Configuration Section",id:"edge-configuration-section",level:4},{value:"Example Controller Web Configuration Section",id:"web-configuration-section",level:4}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.ZP,{mdxType:"ApiQuickInfoMd"}),(0,r.kt)("h2",{id:"specifications--documentation"},"Specifications & Documentation"),(0,r.kt)("p",null,"Both the Edge Management and Client APIs have OpenAPI 2.0, formerly Swagger, specifications. The most up-to-date versions  are\navailable within the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openziti/edge-api#user-content-versioning"},"Ziti Edge API GitHub repository"),". There is also\nan API reference web site built in to the running Ziti controller:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"https://<host>:<port>/edge/client/v1/docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"https://<host>:<port>/edge/management/v1/docs"))),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"<host>:<port>")," should be replaced with the values configured for the APIs in the ",(0,r.kt)("a",{parentName:"p",href:"#web-configuration-section"},(0,r.kt)("inlineCode",{parentName:"a"},"web")," section")),(0,r.kt)("h3",{id:"find-the-controller-version"},"Find the Controller Version"),(0,r.kt)("p",null,"It is essential to build your application with respect to the specification of your controller version, and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openziti/edge-api#user-content-versioning"},"the spec is versioned separately from the controller"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": {\n        "apiVersions": {\n            "edge": {\n                "v1": {\n                    "path": "/edge/v1"\n                }\n            }\n        },\n        "buildDate": "2021-04-23 18:09:47",\n        "revision": "fe826ed2ec0c",\n        "runtimeVersion": "go1.16.3",\n        "version": "v0.19.12"\n    },\n    "meta": {}\n}\n')),(0,r.kt)("h2",{id:"edge-management-api"},"Edge Management API"),(0,r.kt)("p",null,"The Edge Management API is used by clients that wish to configure an OpenZiti Network and does not facilitate to interacting\nwith service for dialing (connecting) nor binding (hosting). The Edge Management API provides the ability to create\nnew identities, identities, policies, and other entities used to manage an OpenZiti Network."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/developer/api/edge-management-reference"},"Explore the latest Edge Management API Reference")),(0,r.kt)("h2",{id:"edge-client-api"},"Edge Client API"),(0,r.kt)("p",null,"The Edge Client API is used by clients that wish to dial (connect) or bind (host) services. The services that the\nclients are allowed to interact with is defined by ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/authorization/policies/overview"},"policies"),". In order\nfor clients to use the client API they must first ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/authentication/auth"},"authenticate")," and\nobtain either a ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/authentication/auth#full-vs-partial-authentication"},"partial or fully authenticated"),"\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/sessions#"},"API Session"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/developer/api/edge-client-reference"},"Explore the latest Edge Client API Reference")),(0,r.kt)("h2",{id:"edge-client--management-shared-capabilities"},"Edge Client & Management Shared Capabilities"),(0,r.kt)("p",null,"The Client and Management APIs both follow the ",(0,r.kt)("a",{parentName:"p",href:"./shared-api-capabilities"},"shared API capabilities")," common on\nall Ziti APIs. Additionally, between the two the following endpoint paths are exposed on both."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"current-identity")," - facilitates the ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"/edge/management/v1/current-identity/*"),(0,r.kt)("li",{parentName:"ul"},"/edge/client/v1/current-api-session/*"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"current-api-session"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"/edge/client/v1/current-api-session/*"),(0,r.kt)("li",{parentName:"ul"},"/edge/management/v1/current-api-session/*")))),(0,r.kt)("h2",{id:"configuring-the-controller-edge-apis"},"Configuring the Controller Edge APIs"),(0,r.kt)("p",null,"In order for the Edge Client and Management API to be available a controller must be configured to enable them. This\nrequires two configuration sections ",(0,r.kt)("inlineCode",{parentName:"p"},"edge")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"web"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"edge")," section configures values that will affect  both the\nEdge Client API and the Edge Management API. The ",(0,r.kt)("inlineCode",{parentName:"p"},"web")," section is used to configure and compose any of Ziti's\nAPIs, Edge Client and Management included, to listen on any combination of network interface and ports."),(0,r.kt)("h3",{id:"controller-configuration-reference"},"Controller Configuration Reference"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/configuration/controller"},"The controller configuration reference")),(0,r.kt)("h4",{id:"edge-configuration-section"},"Example Controller Edge Configuration Section"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"edge:\n  api:\n    #(optional, default 90s) Alters how frequently heartbeat and last activity values are persisted\n    # activityUpdateInterval: 90s\n    #(optional, default 250) The number of API Sessions updated for last activity per transaction\n    # activityUpdateBatchSize: 250\n    # sessionTimeout - optional, default 10m\n    # The number of minutes before an Edge API session will timeout. Timeouts are reset by\n    # API requests and connections that are maintained to Edge Routers\n    sessionTimeout: 30m\n    # address - required\n    # The default address (host:port) to use for enrollment for the Client API. This value must match one of the addresses\n    # defined in a bind point's address field for the `edge-client` API in the web section.\n    address: 127.0.0.1:1280\n  # enrollment - required\n  # A section containing settings pertaining to enrollment.\n  enrollment:\n    # signingCert - required\n    # A Ziti Identity configuration section that specifically makes use of the cert and key fields to define\n    # a signing certificate from the PKI that the Ziti environment is using to sign certificates. The signingCert.cert\n    # will be added to the /.well-known CA store that is used to bootstrap trust with the Ziti Controller.\n    signingCert:\n      cert: ./ziti/etc/ca/intermediate/certs/intermediate.cert.pem\n      key: ./ziti/etc/ca/intermediate/private/intermediate.key.pem\n    # edgeIdentity - optional\n    # A section for identity enrollment specific settings\n    edgeIdentity:\n      # duration - optional, default 5m\n      # The length of time that a Ziti Edge Identity enrollment should remain valid. After\n      # this duration, the enrollment will expire and not longer be usable.\n      duration: 5m\n    # edgeRouter - Optional\n    # A section for edge router enrollment specific settings.\n    edgeRouter:\n      # duration - optional, default 5m\n      # The length of time that a Ziti Edge Router enrollment should remain valid. After\n      # this duration, the enrollment will expire and not longer be usable.\n      duration: 5m\n")),(0,r.kt)("h4",{id:"web-configuration-section"},"Example Controller Web Configuration Section"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"web")," section of the controller is based off of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openziti/xweb"},"xweb")," library. xweb allows\na single configuration section to be used to compose multiple APIs across any number of network interfaces. Understanding\nthe xweb configuration format is essential for success with configuring the ",(0,r.kt)("inlineCode",{parentName:"p"},"web")," section in the controller."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'# web - optional\n# Defines webListeners that will be hosted by the controller. Each webListener can host many APIs and be bound to many\n# bind points.\nweb:\n# name - required\n# Provides a name for this listener, used for logging output. Not required to be unique, but is highly suggested.\n- name: all-apis-localhost\n  # bindPoints - required\n  # One or more bind points are required. A bind point specifies an interface (interface:port string) that defines\n  # where on the host machine the webListener will listen and the address (host:port) that should be used to\n  # publicly address the webListener(i.e. mydomain.com, localhost, 127.0.0.1). This public address may be used for\n  # incoming address resolution as well as used in responses in the API.\n  bindPoints:\n  #interface - required\n  # A host:port string on which network interface to listen on. 0.0.0.0 will listen on all interfaces\n    - interface: 127.0.0.1:1280\n\n      # address - required\n      # The public address that external incoming requests will be able to resolve. Used in request processing and\n      # response content that requires full host:port/path addresses.\n      address: 127.0.0.1:1280\n\n      # newAddress - optional\n      # A host:port string which will be sent out as an HTTP header "ziti-new-address" if specified. If the header\n      # is present, clients should update location configuration to immediately use the new address for future\n      # connections. The value of newAddress must be resolvable both via DNS and validate via certificates\n      newAddress: localhost:1280\n  # identity - optional\n  # Allows the webListener to have a specific identity instead of defaulting to the root `identity` section.\n  #    identity:\n  #      cert:                 ${ZITI_SOURCE}/ziti/etc/ca/intermediate/certs/ctrl-client.cert.pem\n  #      server_cert:          ${ZITI_SOURCE}/ziti/etc/ca/intermediate/certs/ctrl-server.cert.pem\n  #      key:                  ${ZITI_SOURCE}/ziti/etc/ca/intermediate/private/ctrl.key.pem\n  #      ca:                   ${ZITI_SOURCE}/ziti/etc/ca/intermediate/certs/ca-chain.cert.pem\n  # options - optional\n  # Allows the specification of webListener level options - mainly dealing with HTTP/TLS settings. These options are\n  # used for all http servers started by the current webListener.\n  options:\n  # idleTimeout - optional, default 5000ms\n  # The maximum amount of idle time in milliseconds allowed for pipelined HTTP requests. Setting this too high\n  # can cause resources on the host to be consumed as clients remain connected and idle. Lowering this value\n  # will cause clients to reconnect on subsequent HTTPs requests.\n  idleTimeout: 5000ms  #http timeouts, new\n\n  # readTimeout - optional, default 5000ms\n  # The maximum amount of time in milliseconds http servers will wait to read the first incoming requests. A higher\n  # value risks consuming resources on the host with clients that are acting bad faith or suffering from high latency\n  # or packet loss. A lower value can risk losing connections to high latency/packet loss clients.\n\n  readTimeout: 5000ms\n  # writeTimeout - optional, default 10000ms\n  # The total maximum time in milliseconds that the http server will wait for a single requests to be received and\n  # responded too. A higher value can allow long running requests to consume resources on the host. A lower value\n  # can risk ending requests before the server has a chance to respond.\n\n  writeTimeout: 100000ms\n  # minTLSVersion - optional, default TSL1.2\n  # The minimum version of TSL to support\n\n  minTLSVersion: TLS1.2\n  # maxTLSVersion - optional, default TSL1.3\n  # The maximum version of TSL to support\n\n  maxTLSVersion: TLS1.3\n  # apis - required\n  # Allows one or more APIs to be bound to this webListener\n  apis:\n  # binding - required\n  # Specifies an API to bind to this webListener. Built-in APIs are\n  #   - health-checks\n  #   - edge-management\n  #   - edge-client\n  #   - fabric-management\n    - binding: health-checks\n      options: { }\n    - binding: fabric\n    - binding: edge-management\n      # options - variable optional/required\n      # This section is used to define values that are specified by the API they are associated with.\n      # These settings are per API. The example below is for the `edge-api` and contains both optional values and\n      # required values.\n      options: { }\n    - binding: edge-client\n      options: { }\n')))}u.isMDXComponent=!0}}]);