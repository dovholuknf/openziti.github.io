"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[6897],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},55195:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"Authentication"},s=void 0,o={unversionedId:"core-concepts/security/authentication/auth",id:"core-concepts/security/authentication/auth",title:"Authentication",description:"Authentication in Ziti Edge occurs when a client wishes to interact with the Ziti Edge Controller. Authentication",source:"@site/docs/core-concepts/security/authentication/auth.md",sourceDirName:"core-concepts/security/authentication",slug:"/core-concepts/security/authentication/auth",permalink:"/docs/core-concepts/security/authentication/auth",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/core-concepts/security/authentication/auth.md",tags:[],version:"current",frontMatter:{title:"Authentication"},sidebar:"rootSidebar",previous:{title:"Overview",permalink:"/docs/core-concepts/security/overview"},next:{title:"Password Management",permalink:"/docs/core-concepts/security/authentication/password-management"}},l={},c=[{value:"API Sessions",id:"api-sessions",level:2},{value:"Full vs Partial Authentication",id:"full-vs-partial-authentication",level:3},{value:"Authentication Queries",id:"authentication-queries",level:4},{value:"Associated Data &amp; Removal",id:"associated-data--removal",level:3},{value:"Timeout",id:"timeout",level:3},{value:"Administrative Removal",id:"administrative-removal",level:3},{value:"Client Removal (Logout)",id:"client-removal-logout",level:3},{value:"Primary Authentication",id:"primary-authentication",level:2},{value:"Authenticators",id:"authenticators",level:2},{value:"x509 Certificate Primary Authentication",id:"x509-certificate-primary-authentication",level:2},{value:"JWT Primary Authentication",id:"jwt-primary-authentication",level:2},{value:"Username/password",id:"usernamepassword",level:2},{value:"Secondary Authentication",id:"secondary-authentication",level:2},{value:"TOTP: Time-Based One-Time Password",id:"totp-time-based-one-time-password",level:3},{value:"JWT",id:"jwt",level:3},{value:"Authentication Requests",id:"authentication-requests",level:2},{value:"Example UPDB Authentication Request",id:"example-updb-authentication-request",level:3},{value:"Example Client Certificate Request",id:"example-client-certificate-request",level:3},{value:"Example JWT Authentication Request",id:"example-jwt-authentication-request",level:3},{value:"Example TOTP Authentication Query Response",id:"example-totp-authentication-query-response",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Authentication in Ziti Edge occurs when a client wishes to interact with the Ziti Edge Controller. Authentication\nhas begun when the client receives and API Session and is  complete when the API Session is fully authenticated.\nAPI Sessions are a high level security context that represents an authenticated session with either the Ziti ",(0,i.kt)("a",{parentName:"p",href:"/api/rest/edge-apis#edge-client-api"},"Edge Client API"),"\nor the Ziti ",(0,i.kt)("a",{parentName:"p",href:"/api/rest/edge-apis#edge-management-api"},"Edge Management API"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clients that are powered by a Ziti SDK that access services will authenticate with the ",(0,i.kt)("a",{parentName:"li",href:"/api/rest/edge-apis#edge-client-api"},"Edge Client API")),(0,i.kt)("li",{parentName:"ul"},"Clients that are managing a Ziti Network will authenticate with the ",(0,i.kt)("a",{parentName:"li",href:"/api/rest/edge-apis#edge-management-api"},"Edge Management API"))),(0,i.kt)("h1",{id:"authentication-flow"},"Authentication Flow"),(0,i.kt)("p",null,"Below is diagram showing initial authentication for some client. The same model is used between the ",(0,i.kt)("a",{parentName:"p",href:"/api/rest/edge-apis#edge-client-api"},"Edge Client API"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"/api/rest/edge-apis#edge-management-api"},"Edge Management API"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNp1kUtPwzAQhP_KyudW3HMApU1fFxQaHoK4B1Mv1CJZR34IRUn-O46bCiGVm9f6ZmY97thRS2QJ-zSiOcFjxiktn0h4d0Jy6igcygPM57d94d9r5SA3qhamhaVBORKisj0sumdRKXk3cFqMMCzLex1lkF6usvIV7YFTFqdVmQszqqsW0j9hnFaRWHeplMopTaKKCDx4NArtmLKOyGayPE_bMZPTNg79Hp03BGm-gwKtDTbwfaMvHj28lWt_LXzzr_xF_e7Qw66cCtmjbTTZuMjuvDmbsRpNLZQMxXacADgLKTVyloSjFOaLM05D4HwjQ_AqPFQblnyENnHGQvu6aOnIEmc8XqBMifBJ9UQNP7yGlbE"},(0,i.kt)("img",{parentName:"a",src:"https://mermaid.ink/img/pako:eNp1kUtPwzAQhP_KyudW3HMApU1fFxQaHoK4B1Mv1CJZR34IRUn-O46bCiGVm9f6ZmY97thRS2QJ-zSiOcFjxiktn0h4d0Jy6igcygPM57d94d9r5SA3qhamhaVBORKisj0sumdRKXk3cFqMMCzLex1lkF6usvIV7YFTFqdVmQszqqsW0j9hnFaRWHeplMopTaKKCDx4NArtmLKOyGayPE_bMZPTNg79Hp03BGm-gwKtDTbwfaMvHj28lWt_LXzzr_xF_e7Qw66cCtmjbTTZuMjuvDmbsRpNLZQMxXacADgLKTVyloSjFOaLM05D4HwjQ_AqPFQblnyENnHGQvu6aOnIEmc8XqBMifBJ9UQNP7yGlbE",alt:null}))),(0,i.kt)("p",null,"In the above a client has provided primary authentication credentials (certificate, JWT, username password) and then\nsubsequently provided any secondary credentials necessary (JWT, TOTP, etc). The secondary credentials are requested\nvia Authentication Queries and enable multifactor authentication to occur."),(0,i.kt)("p",null,"The goal of authentication is to obtain an API Session. API Sessions are used to interact with the Ziti Controller\nand Ziti Edge Routers. API Sessions for clients are represented by opaque tokens that are provided as headers in HTTP\nrequests and by values in protobuf messages for the Edge protocol between routers and SDKs. API Sessions represent a\nsecurity context that is used to determine authorization in the rest of the Ziti network."),(0,i.kt)("h2",{id:"api-sessions"},"API Sessions"),(0,i.kt)("p",null,"API Sessions are represented by opaque strings and are provided in the HTTP header ",(0,i.kt)("inlineCode",{parentName:"p"},"zt-session")," and in Edge Router\nconnection requests initiated by Ziti SDKs. API Sessions remain valid as long they have not timed out."),(0,i.kt)("p",null,"An API Sessions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"can and are represented by a JSON data structure returned from the Client and Management APIs",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"returned from:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"POST /edge/management/v1/authenticate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /edge/management/v1/current-api-session")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"POST /edge/client/v1/authenticate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /edge/client/v1/current-api-session")))))),(0,i.kt)("li",{parentName:"ul"},"can be referenced by an internal ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," and a security token that is in the format of a UUID",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," can be used on the following endpoints:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET /edge/management/v1/api-sessions/<id>")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DELETE /edge/management/v1/api-sessions/<id>"))))))),(0,i.kt)("p",null,"API Sessions are defined in the Client and Management Open API 2.0 specifications under ",(0,i.kt)("inlineCode",{parentName:"p"},"currentApiSessionDetail"),"."),(0,i.kt)("p",null,"Example ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /edge/management/v1/authenticate")," response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "_links": {\n      "self": {\n        "href": "./api-sessions/cl4zptpgqcrinn0hhgm7ek5ve"\n      },\n      "sessions": {\n        "href": "./api-sessions/cl4zptpgqcrinn0hhgm7ek5ve/sessions"\n      }\n    },\n    "createdAt": "2022-06-29T14:51:07.946Z",\n    "id": "cl4zptpgqcrinn0hhgm7ek5ve",\n    "tags": {},\n    "updatedAt": "2022-06-29T14:51:07.946Z",\n    "authQueries": [\n      {\n        "format": "alphaNumeric",\n        "httpMethod": "POST",\n        "httpUrl": "./authenticate/mfa",\n        "maxLength": 6,\n        "minLength": 4,\n        "provider": "ziti",\n        "typeId": "MFA"\n      }\n    ],\n    "authenticatorId": "vxtlfvUj6",\n    "cachedLastActivityAt": "2022-06-29T14:51:07.945Z",\n    "configTypes": [],\n    "identity": {\n      "_links": {\n        "auth-policies": {\n          "href": "./auth-policies/default"\n        },\n        "authenticators": {\n          "href": "./identities/vxtlfvUj6/authenticators"\n        },\n        "edge-router-policies": {\n          "href": "./identities/vxtlfvUj6/edge-routers"\n        },\n        "enrollments": {\n          "href": "./identities/vxtlfvUj6/enrollments"\n        },\n        "failed-service-requests": {\n          "href": "./identities/vxtlfvUj6/failed-service-requests"\n        },\n        "posture-data": {\n          "href": "./identities/vxtlfvUj6/posture-data"\n        },\n        "self": {\n          "href": "./identities/vxtlfvUj6"\n        },\n        "service-policies": {\n          "href": "./identities/vxtlfvUj6/service-policies"\n        }\n      },\n      "entity": "identities",\n      "id": "vxtlfvUj6",\n      "name": "Default Admin"\n    },\n    "identityId": "vxtlfvUj6",\n    "ipAddress": "127.0.0.1",\n    "isMfaComplete": false,\n    "isMfaRequired": true,\n    "lastActivityAt": "2022-06-29T14:51:07.945Z",\n    "token": "44a20395-1a0e-469d-ad9b-80df8dbbf8c4",\n    "expirationSeconds": 1800,\n    "expiresAt": "2022-06-29T15:21:07.945Z"\n  },\n  "meta": {}\n}\n')),(0,i.kt)("h3",{id:"full-vs-partial-authentication"},"Full vs Partial Authentication"),(0,i.kt)("p",null,"API Sessions may exist in two states:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Partially Authenticated - limited API access"),(0,i.kt)("li",{parentName:"ul"},"Fully Authenticated - full API access")),(0,i.kt)("p",null,"Partial authentication occurs when a primary authentication method has been passed, but secondary Authentication Queries\nremain outstanding. Ziti Edge models MFA challenges as Authentication Queries. Authentication Queries include information\nthat can be used to display user prompts or direct users to integrating websites for SSO. If no outstanding\nAuthentication Queries are present for an API Session it is considered fully authenticated."),(0,i.kt)("p",null,"While partially authenticated, the API Session can only be used for a reduced set of operations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"answering Authentication Queries "),(0,i.kt)("li",{parentName:"ul"},"enrolling in MFA TOTP")),(0,i.kt)("h4",{id:"authentication-queries"},"Authentication Queries"),(0,i.kt)("p",null,"Authentication Queries are represented on an API Session the property ",(0,i.kt)("inlineCode",{parentName:"p"},"authQueries")," which is an array. An example\nMFA challenge represented as an Authentication Query is provided below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "authQueries": [\n    {\n      "format": "alphaNumeric",\n      "httpMethod": "POST",\n      "httpUrl": "./authenticate/mfa",\n      "maxLength": 6,\n      "minLength": 4,\n      "provider": "ziti",\n      "typeId": "MFA"\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"The existence of any Authentication Query on an API Session represents a partial authentication state. API Sessions\nin this state will have reduced access to their target API. The data structure for Authentication Queries is defined\nin the Client and Management Open API 2.0 specifications under the label ",(0,i.kt)("inlineCode",{parentName:"p"},"authQueryDetail"),"."),(0,i.kt)("h3",{id:"associated-data--removal"},"Associated Data & Removal"),(0,i.kt)("p",null,"API Sessions, may be used to create ephemeral certificates called ",(0,i.kt)("a",{parentName:"p",href:"/docs/core-concepts/security/authentication/api-session-certificates"},"API Session Certificates"),"\nand sessions for service access. Additionally, API Sessions are used to scope ",(0,i.kt)("a",{parentName:"p",href:"../authorization/posture-checks#posture-data"},"Posture Data"),".\nWhen an API Session is removed for any reason, all associated data is also removed. As an example, when removing an\nAPI Session used to create a Session the Session will also be removed. Removing a Session will also terminate any\nexisting connections that used the security token associated with that Session and prevent it from being used to\nestablish new connections."),(0,i.kt)("p",null,"Removal of an API Session occurs in the following scenarios:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"timeout"),(0,i.kt)("li",{parentName:"ul"},"administrative removal"),(0,i.kt)("li",{parentName:"ul"},"client removal (logout)")),(0,i.kt)("h3",{id:"timeout"},"Timeout"),(0,i.kt)("p",null,"The controller maintains a last accessed at timestamp for every API Session. This timestamp is used to determine whether\nthe session timeout has been reached, signaling an API Session removal. Activities that update the timestamp include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Any maintained Edge Router connection"),(0,i.kt)("li",{parentName:"ul"},"Any valid Client or Management API interaction")),(0,i.kt)("p",null,"The API Session timeout defaults to 30 minutes and can be configured in ",(0,i.kt)("inlineCode",{parentName:"p"},"edge.api.sessionTimeout")," in the controller\nconfiguration file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"edge:\n  api:\n  ...\n    # sessionTimeout - optional, default 30m\n    # The number of minutes before an Edge API session will time out. Timeouts are reset by\n    # API requests and connections that are maintained to Edge Routers\n    sessionTimeout: 30m\n    ...\n")),(0,i.kt)("h3",{id:"administrative-removal"},"Administrative Removal"),(0,i.kt)("p",null,"Through the ",(0,i.kt)("a",{parentName:"p",href:"/api/rest/edge-apis#edge-management-api"},"Edge Management API")," any API Session may be forcefully removed\nby calling ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE /edge/management/v1/api-sessions<id>")," with an empty body. "),(0,i.kt)("h3",{id:"client-removal-logout"},"Client Removal (Logout)"),(0,i.kt)("p",null,"A client may terminate its own API Session at any time by calling: ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE /edge/client/v1/current-api-session")),(0,i.kt)("h2",{id:"primary-authentication"},"Primary Authentication"),(0,i.kt)("p",null,"Primary authentication in Ziti establishes and API Sessions identity principal and enabled Ziti to determine which\nsecondary authentication factors are necessary for an API Session to become fully authenticated. If no secondary\nauthentication factors are required the API Session becomes fully authenticated immediately without any further\ninteraction with the Client or Management API."),(0,i.kt)("p",null,"Primary authentication factors include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"x509 certificates"),(0,i.kt)("li",{parentName:"ul"},"JWTs"),(0,i.kt)("li",{parentName:"ul"},"Username/password")),(0,i.kt)("p",null,"Valid primary authentication methods can be restricted via ",(0,i.kt)("a",{parentName:"p",href:"./authentication-policies"},"Authentication Policies"),".\nAn Identity can have one ",(0,i.kt)("a",{parentName:"p",href:"./authentication-policies"},"Authentication Policies")," associated with it.\nThis association is defined by the ",(0,i.kt)("inlineCode",{parentName:"p"},"authPolicyId")," property on the identity. If no",(0,i.kt)("a",{parentName:"p",href:"./authentication-policies"},"Authentication Policy"),"\nis set for an Identity, a special system defined ",(0,i.kt)("a",{parentName:"p",href:"./authentication-policies"},"Authentication Policy"),"\nwith the id of ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," will be used."),(0,i.kt)("h2",{id:"authenticators"},"Authenticators"),(0,i.kt)("p",null,"Some primary authentication mechanisms (x509, username/password) need to store per-identity credentials. When necessary,\nthese are stored as authenticators. Authenticators are manipulated using ",(0,i.kt)("a",{parentName:"p",href:"./password-management"},"password management"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"./certificate-management"},"certificate management"),"."),(0,i.kt)("p",null,"Authenticators may be listed via the CLI:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ziti edge list authenticators")),(0,i.kt)("p",null,"or via the ",(0,i.kt)("a",{parentName:"p",href:"/api/rest/edge-apis#edge-management-api"},"Edge Management API"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GET /edge/management/v1/authenticators\n")),(0,i.kt)("h2",{id:"x509-certificate-primary-authentication"},"x509 Certificate Primary Authentication"),(0,i.kt)("p",null,"x509 authentication requires the client to initiate a HTTPs authentication request using a x509 client certificate that\nis associated to the target Identity on an Authenticator. The client certificate can be issued by the Ziti Edge\nController's internal PKI or an external PKI. If an external PKI is being used, it must be registered as a\n",(0,i.kt)("a",{parentName:"p",href:"./third-party-cas"},"3rd Party CA")," via the Ziti ",(0,i.kt)("a",{parentName:"p",href:"/api/rest/edge-apis#edge-management-api"},"Edge Management API"),", verified, and\nhave authentication enabled. The client certificate must pass signature and CA chain-of-trust validation. All client,\nintermediate CA, and root CA functionality supports RSA and EC keys."),(0,i.kt)("p",null,"Please note that intermediate CA certificates may be provided during authentication if necessary. The client certificate\nshould be in index zero and intermediate CA certificates in subsequent indexes in any order."),(0,i.kt)("p",null,"To associate a client certificate with an Identity and Authenticator see the ",(0,i.kt)("a",{parentName:"p",href:"../enrollment"},"Enrollment"),"\nsection."),(0,i.kt)("p",null,"Expired client certificates may be allowed via ",(0,i.kt)("a",{parentName:"p",href:"./authentication-policies"},"Authentication Policies")," if desired."),(0,i.kt)("h2",{id:"jwt-primary-authentication"},"JWT Primary Authentication"),(0,i.kt)("p",null,"JWT authentication requires that an ",(0,i.kt)("a",{parentName:"p",href:"./external-jwt-signers"},"External JWT Signer")," be added via the Ziti Edge Management\nAPI. The definition of ",(0,i.kt)("a",{parentName:"p",href:"./external-jwt-signers"},"External JWT Signer")," allows configuration of which JWT claim should be\nused as a value to map against the unique ",(0,i.kt)("inlineCode",{parentName:"p"},"externalId")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," property on Identities. This mapping of JWT claim to\n",(0,i.kt)("inlineCode",{parentName:"p"},"externalId"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"id")," is used to determine which Identity is authenticating."),(0,i.kt)("p",null,"The JWT must be provided in the HTTP request in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Authentication")," header with a value in the format of\n",(0,i.kt)("inlineCode",{parentName:"p"},"Bearer <jwt>"),". The JWT provided must pass signature, expiration, issuer, and audience validation as configured\non the ",(0,i.kt)("a",{parentName:"p",href:"./external-jwt-signers"},"External JWT Signer"),"."),(0,i.kt)("h2",{id:"usernamepassword"},"Username/password"),(0,i.kt)("p",null,"An internal username/password authentication system is provided for smaller deployments of Ziti. It is highly suggested\nthat all username/password authenticators be replaced by x509 certificate/JWT authentication mechanisms. Passwords\nare stored individually salted and one-way cryptographically hashed using ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Argon2"},"Argon2id"),"."),(0,i.kt)("p",null,"Password policies may be enforced via ",(0,i.kt)("a",{parentName:"p",href:"./authentication-policies"},"Authentication Policies"),". Administrative ",(0,i.kt)("a",{parentName:"p",href:"./password-management"},"management\nof passwords")," is also available."),(0,i.kt)("p",null,"Username/password authentication, while supported, is only suggested to be used for testing and R&D activities. For\nproduction environments JWT and X509 authentication is recommended."),(0,i.kt)("h2",{id:"secondary-authentication"},"Secondary Authentication"),(0,i.kt)("p",null,"Secondary authentication is represented by a series of ",(0,i.kt)("a",{parentName:"p",href:"#authentication-queries"},"Authentication Queries")," on an API\nSession in the ",(0,i.kt)("inlineCode",{parentName:"p"},"authQueries")," property. At present the following secondary authentication mechanisms are supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"TOTP - Time-Based One-Time Password (aka Authenticator Apps)"),(0,i.kt)("li",{parentName:"ul"},"JWT - JSON Web Tokens")),(0,i.kt)("h3",{id:"totp-time-based-one-time-password"},"TOTP: Time-Based One-Time Password"),(0,i.kt)("p",null,"Ziti supports all authenticator application that implement ",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6238"},"RFC6238"),"\nwhich includes all major and popular TOTP applications such as Google Authenticator, Microsoft Authenticator, Authy, and\nmany others."),(0,i.kt)("p",null,"TOTP is configured per-identity and must be client initiated due to the symmetric key exchange that must take place.\nAdministrators can enforce TOTP usage through ",(0,i.kt)("a",{parentName:"p",href:"./authentication-policies"},"Authentication Policies")," and\n",(0,i.kt)("a",{parentName:"p",href:"../authorization/posture-checks"},"Posture Checks"),". ",(0,i.kt)("a",{parentName:"p",href:"./authentication-policies"},"Authentication Policy")," enforcement\nstops the client from transitioning between ",(0,i.kt)("a",{parentName:"p",href:"#full-vs-partial-authentication"},"partially authenticated")," and\n",(0,i.kt)("a",{parentName:"p",href:"#full-vs-partial-authentication"},"fully authenticated")," status. This stops a client from accessing any service information\nor connect to any service. ",(0,i.kt)("a",{parentName:"p",href:"../authorization/posture-checks"},"Posture Check")," enforcement allows a client to\n",(0,i.kt)("a",{parentName:"p",href:"#full-vs-partial-authentication"},"fully authenticate"),", but based on ",(0,i.kt)("a",{parentName:"p",href:"/docs/core-concepts/security/authorization/policies/overview"},"Service Policy"),"\nrestrict connection to specific services."),(0,i.kt)("h3",{id:"jwt"},"JWT"),(0,i.kt)("p",null,"Similar to JWT primary authentication, a valid JWT must be present in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Authentication")," header in the format of\n",(0,i.kt)("inlineCode",{parentName:"p"},"bearer <JWT>")," on every request."),(0,i.kt)("h2",{id:"authentication-requests"},"Authentication Requests"),(0,i.kt)("h3",{id:"example-updb-authentication-request"},"Example UPDB Authentication Request"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST /edge/client/v1/authenticate?method=password")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "my-name",\n  "password": "my-password"\n}\n')),(0,i.kt)("h3",{id:"example-client-certificate-request"},"Example Client Certificate Request"),(0,i.kt)("p",null,"Note: The TLS connection to the controller MUST use a valid client certificate"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST /edge/management/v1/authenticate?method=cert")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"{}\n")),(0,i.kt)("h3",{id:"example-jwt-authentication-request"},"Example JWT Authentication Request"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST /edge/client/v1/authenticate?method=ext-jwt"),"\nHTTP Header: ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cC...")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"{}\n")),(0,i.kt)("h3",{id:"example-totp-authentication-query-response"},"Example TOTP Authentication Query Response"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"POST /edge/client/v1/authenticate/mfa")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "123456"\n}\n')))}p.isMDXComponent=!0}}]);