"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[4770],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},97306:(e,t,n)=>{n.d(t,{ZP:()=>a});var i=n(87462),o=(n(67294),n(3905));const r={toc:[{value:"Deployed Components",id:"deployed-components",level:2},{value:"OpenZiti Controller",id:"openziti-controller",level:3},{value:"OpenZiti Router",id:"openziti-router",level:3},{value:"OpenZiti Edge Clients",id:"openziti-edge-clients",level:3},{value:"Logical Components",id:"logical-components",level:2},{value:"Services",id:"services",level:3},{value:"Identities",id:"identities",level:3},{value:"Policies",id:"policies",level:3},{value:"Role Attributes",id:"role-attributes",level:4},{value:"Service Policies",id:"service-policies",level:4},{value:"Edge Router Policies",id:"edge-router-policies",level:4},{value:"Service Edge Router Policies",id:"service-edge-router-policies",level:4}]};function a(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"deployed-components"},"Deployed Components"),(0,o.kt)("h3",{id:"openziti-controller"},"OpenZiti Controller"),(0,o.kt)("p",null,"The OpenZiti Controller is the central function of the\nOpenZiti Network. The OpenZiti Controller provides the\nconfiguration plane. It is responsible for configuring OpenZiti services\nas well as being the central point for managing the identities\nused by users, devices and the nodes making up the OpenZiti Network.\nLastly but critically, the OpenZiti Controller is responsible for\nauthentication and authorization for every connection in the OpenZiti\nNetwork."),(0,o.kt)("p",null,"The OpenZiti Controller must be configured with public key infrastructure\n(PKI). The configured PKI is used to create secure, mutually-\nauthenticated TLS (mTLS) network connections between any two\npieces of the OpenZiti Network. The OpenZiti Controller does not provide its\nown PKI but for the OpenZiti Controller to sign certificate requests (CSR)\nthe OpenZiti Controller will need to be configured with a key and\ncertificate used for signing. The OpenZiti CLI can generate a PKI."),(0,o.kt)("p",null,"The OpenZiti Controller also supports using a third-party PKI should the\noperator of the OpenZiti Network have an existing PKI they wish to\nreuse. Utilizing a third-party CA pushes the burden of obtaining\nand distributing properly signed certificates to the operator of\nthe OpenZiti Network but for sophisticated customers this might make\noverall management of the network easier.\nThe OpenZiti Controller uses a local database based on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/etcd-io/bbolt"},"bbolt")," to\nstore the information needed to manage the network."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/guides/controller"},"Controller Deployment Guide")),(0,o.kt)("h3",{id:"openziti-router"},"OpenZiti Router"),(0,o.kt)("p",null,"OpenZiti Routers are the fundamental building blocks of the OpenZiti\nNetwork. These routers are responsible for securely and reliably\ndelivering traffic from one OpenZiti Network node to the destination."),(0,o.kt)("p",null,"Ziti Routers are linked together to form a mesh network. This mesh is\nconstantly being monitored for latency and the fastest paths are\nused when routing traffic to the destination. The monitoring also\nallows for active failover to ensure a reliable network connection\neven in the case of a node failure."),(0,o.kt)("p",null,"The OpenZiti Router is the entry point to the OpenZiti Network for client connections.\nThe OpenZiti Router in combination with the Ziti Controller is responsible\nfor authenticating and authorizing OpenZiti Edge Clients."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/guides/router/deployment"},"Router Deployment Guide")),(0,o.kt)("h3",{id:"openziti-edge-clients"},"OpenZiti Edge Clients"),(0,o.kt)("p",null,"Connecting to the OpenZiti Network requires an OpenZiti Edge Client. Edge\nClients are designed to work with both brownfield and greenfield\napplications."),(0,o.kt)("p",null,"If the solution being developed includes developing new\nsoftware OpenZiti offers SDKs targeting various languages\nand runtimes to provide fast, reliable and secure connectivity.\nThese SDKs provide the capabilities needed to securely connect\nto the OpenZiti Network and are designed to be easily incorporated\ninto the target application."),(0,o.kt)("p",null,"When adding secure connectivity to an already existing solution\nOpenZiti offers specialized Edge Clients called tunnelers\nwhich provide seamless, secure connectivity and do not require\nchanges to the target application."),(0,o.kt)("p",null,"Read more about ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/clients/choose"},"clients")),(0,o.kt)("h2",{id:"logical-components"},"Logical Components"),(0,o.kt)("p",null,"Once the OpenZiti Network is established and deployed the next step\nis to configure the software-powered network. The three main\nconcepts necessary to configure an OpenZiti Network are: Identities,\nServices, and Policies."),(0,o.kt)("h3",{id:"services"},"Services"),(0,o.kt)("p",null,'A service encapsulates the definition of any resource that could\nbe accessed by a client on a traditional network. An OpenZiti Service is\ndefined by a strong, extensible identity, rather than by an\nexpression of an underlay concept. This means that services\ndefined on an OpenZiti Network have an almost limitless "namespace"\navailable for identifying services. An OpenZiti Service is defined by a\nname and/or a certificate, rather than by a DNS name or an IP\naddress (underlay concepts). Services also declare a node where\ntraffic that exits the OpenZiti Network needs to be sent to before\nexiting. The node where traffic enters the OpenZiti Network may be the same\nnode where traffic exits. Alternatively, traffic may need to traverse the\nOpenZiti Network Routers to reach the exit node. Simply specifying the\nnode is all the end-user need do, the OpenZiti Network handles the\nrest.'),(0,o.kt)("p",null,"Read more about ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/services/overview"},"services")),(0,o.kt)("h3",{id:"identities"},"Identities"),(0,o.kt)("p",null,"Identities represent individual endpoints in the OpenZiti Network\nwhich can establish connectivity. All connections made within the\nOpenZiti Network are mutually authenticated using X509 Certificates.\nEvery Identity is mapped to a given certificate\u2019s signature. OpenZiti\nEdge Clients present this certificate when initiating connections\nto the OpenZiti Network. The presented certificate is used by the OpenZiti\nNetwork to authorize the client and enumerate the services the\nIdentity is authorized to use."),(0,o.kt)("p",null,"Read more about ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/identities/overview"},"identities")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/authentication/auth"},"authentication"),"."),(0,o.kt)("h3",{id:"policies"},"Policies"),(0,o.kt)("p",null,"Policies control how Identities, Services and Edge Routers are allowed\nto interact. In order to use a service the identity must be granted\naccess to the service. Also, since all access to a service goes through\none more edge routers, both the service and the identity must be\ngranted to access to the same edge router or edge routers."),(0,o.kt)("h4",{id:"role-attributes"},"Role Attributes"),(0,o.kt)("p",null,"Entities such as identities, services and edge routers can be added to\npolicies explicitly, either by id or name. Entities can  also be tagged\nwith role attributes. Role attributes are simple strings like ",(0,o.kt)("inlineCode",{parentName:"p"},"sales"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"Boston"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"us-employees")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"support"),". Their meaning is decided by the\nadministrator. Policies can include entities by specifying a set of role\nattributes to match."),(0,o.kt)("h4",{id:"service-policies"},"Service Policies"),(0,o.kt)("p",null,"Service Policies encapsulate the mapping between identities and\nservices in a software-powered network. In the simplest terms,\nService Policies are a group of services and a group of identities.\nThe act of adding a service to a Service Policy will grant the\nidentities in that Service Policy access to the given service.\nSimilarly, adding an identity to a Service Policy will grant that\nidentity access to the services mapped in that Service Policy."),(0,o.kt)("p",null,"Service policies controls both which identities may dial a service (use the service)\nand which identities may bind a service (provide or host the service).\nEach Service Policy may either grant dial or bind access, but not both."),(0,o.kt)("h4",{id:"edge-router-policies"},"Edge Router Policies"),(0,o.kt)("p",null,"Edge Router Policies manage the mapping between identities and\nedge routers. Edge Router Policies are a group of edge routers\nand a group of identities. Adding an edge router to an Edge\nRouter Policy will grant the identities in that Edge Router\nPolicy access to the given edge router. Similarly, adding an identity\nto an Edge Router Policy will grant that identity access to the\nedge routers mapped in that Edge Router Policy."),(0,o.kt)("h4",{id:"service-edge-router-policies"},"Service Edge Router Policies"),(0,o.kt)("p",null,"Service Edge Router Policies manage the mapping between services and\nedge routers. Service Edge Router Policies are a group of edge routers\nand a group of services. Adding an edge router to a Service Edge\nRouter Policy will grant the services in that Service Edge Router\nPolicy access to the given edge router. Similarly, adding a service\nto a Service Edge Router Policy will grant that service access to the\nedge routers mapped in that Service Edge Router Policy."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/learn/core-concepts/security/authorization/policies/overview"},"Read more about authorization")))}a.isMDXComponent=!0},58686:(e,t,n)=>{n.d(t,{ZP:()=>a});var i=n(87462),o=(n(67294),n(3905));const r={toc:[{value:"Zero Trust/Application Segmentation",id:"zero-trustapplication-segmentation",level:2},{value:"Dark Services and Routers",id:"dark-services-and-routers",level:2},{value:"End to End Encryption",id:"end-to-end-encryption",level:2}]};function a(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"zero-trustapplication-segmentation"},"Zero Trust/Application Segmentation"),(0,o.kt)("p",null,"Many networking security solutions act like a wall around an internal network. Once you are through the wall, you have access to everything inside. Zero trust solutions enforce not just access to a network, but access to individual applications within that network."),(0,o.kt)("p",null,"Every client in a Ziti system must have an identity with provisioned certificates. The certificates are used to establish secure communications channels as well as for authentication and authorization of the associated identity. Whenever the client attempts to access a network application, Ziti will first ensure that the identity has access to the application. If access is revoked, open network connections will be closed."),(0,o.kt)("p",null,"This model enables Ziti systems to provide access to multiple applications while ensuring that clients only get access to those applications to which they have been granted access."),(0,o.kt)("p",null,"In addition to requiring cert based authentication for clients, Ziti uses certificates to authorize communication between Ziti components."),(0,o.kt)("h2",{id:"dark-services-and-routers"},"Dark Services and Routers"),(0,o.kt)("p",null,"There are various levels of accessibility a network application/service can have."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Many network services are available to the world. The service then relies on authentication and authorization policies to prevent unwanted access."),(0,o.kt)("li",{parentName:"ol"},"Firewalls can be used to limit access to specific IP or ranges. This increases security at the cost of flexibility. Adding users can be complicated and users may not be able to easily switch devices or access the service remotely."),(0,o.kt)("li",{parentName:"ol"},"Services can be put behind a VPN or made only accessible to an internal network, but there are some downsides to this approach.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"If you can access the VPN or internal network for any reason, all services in that VPN become more vulnerable to you."),(0,o.kt)("li",{parentName:"ol"},"VPNs are not usually appropriate for external customers or users."),(0,o.kt)("li",{parentName:"ol"},"For end users, VPNs add an extra step that needs to be done each time they want to access the service."))),(0,o.kt)("li",{parentName:"ol"},"Services can be made dark, meaning they do not have any ports open for anyone to even try and connect to.")),(0,o.kt)("p",null,"Making something dark can be done in a few ways, but the way it's generally handled in Ziti is that services reach out and establish one or more connections to the Ziti network fabric. Clients coming into the fabric can then reach the service through these connections after being authenticated and authorized."),(0,o.kt)("p",null,"Ziti routers, which make up the fabric, can also be dark. Routers located in private networks will usually be made dark. These routers will reach out of the private network to talk to the controller and to make connections to join the network fabric mesh. This allows the services and routers in your private networks to make only outbound connections, so no holes have to be opened for inbound traffic."),(0,o.kt)("p",null,"Services can be completely dark if they are implemented with a Ziti SDK. If this is not possible a Ziti tunneler or proxy can be co-located with the service. The service then only needs to allow connections from the local machine or network, depending on how close you colocate the proxy to the service."),(0,o.kt)("h2",{id:"end-to-end-encryption"},"End to End Encryption"),(0,o.kt)("p",null,"If you take advantage of Ziti's developer SDKs and embed Ziti in your client and server applications, your traffic can be configured to be seamlessly encrypted from the client application to server application. If you prefer to use tunnelers or proxy applications, the traffic can be encrypted for you from machine to machine or private network to private network. Various combinations of the above are also supported."),(0,o.kt)("p",null,"End-to-end encryption means that even if systems between the client and server are compromised, your traffic cannot be decrypted or tampered with."))}a.isMDXComponent=!0},95205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var i=n(87462),o=(n(67294),n(3905)),r=n(97306),a=n(58686);const s={title:"What is OpenZiti?",hide_table_of_contents:!0},l=void 0,c={unversionedId:"learn/introduction/index",id:"learn/introduction/index",title:"What is OpenZiti?",description:"OpenZiti is a free and open source project focused on bringing zero trust networking principles directly into any application. The project provides all the pieces required to implement a zero trust overlay network and provides all the tools necessary to integrate zero trust into your existing solutions. The OpenZiti project believes the principles of zero trust shouldn't stop at your network, those ideas belong in your application.",source:"@site/docs/learn/introduction/index.mdx",sourceDirName:"learn/introduction",slug:"/learn/introduction/",permalink:"/docs/learn/introduction/",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/introduction/index.mdx",tags:[],version:"current",frontMatter:{title:"What is OpenZiti?",hide_table_of_contents:!0},sidebar:"docsSidebar",next:{title:"Components",permalink:"/docs/learn/introduction/components"}},d={},p=[],u={toc:p};function h(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("span",{style:{color:"var(--ifm-color-primary)",fontWeight:"bold"}},"OpenZiti")," is a free and open source project focused on bringing zero trust networking principles directly into any application. The project provides all the pieces required to implement a zero trust overlay network and provides all the tools necessary to integrate zero trust into your existing solutions. The OpenZiti project believes the principles of zero trust shouldn't stop at your network, those ideas belong ",(0,o.kt)("span",{style:{color:"var(--ifm-color-primary)",fontWeight:"bold"}},"in your application"),"."),(0,o.kt)("h3",null,"An Example of an OpenZiti Overlay Network"),(0,o.kt)("span",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:n(99727).Z,width:"901",height:"373"}))),(0,o.kt)("h3",null,"In OpenZiti You Will Find"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A zero trust ",(0,o.kt)("a",{parentName:"li",href:"/docs/reference/glossary#network-overlay-overlay"},"overlay mesh network")," composed of a controller, edge routers and fabric routers"),(0,o.kt)("li",{parentName:"ul"},"Numerous SDKs making it easy to embed zero trust principles directly into your application"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/clients/tunnelers/"},"Tunneling applications")," providing zero trust access to those applications you cannot embed zero trust into directly"),(0,o.kt)("li",{parentName:"ul"},"Zero trust principles such as ",(0,o.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/authentication/auth"},"authorize before connect"),",\n",(0,o.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/authorization/auth"},"continual authorization"),",\n",(0,o.kt)("a",{parentName:"li",href:"/docs/learn/core-concepts/security/authorization/policies/overview"},"least-privilege access"))),(0,o.kt)("p",null,"OpenZiti makes it ",(0,o.kt)("strong",{parentName:"p"},"easy")," to embed zero trust, programmable networking directly into your app. With OpenZiti you can have ",(0,o.kt)("strong",{parentName:"p"},"zero trust, high performance networking on any Internet connection"),", without VPNs!"),(0,o.kt)("p",null,"\ud83c\udfc3\u200d\u2642\ufe0f Ready to deploy your first network? Jump right in, feet first, and follow along with one of our\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/quickstarts/network"},"quickstart guides"),"!"),(0,o.kt)("hr",null),(0,o.kt)(r.ZP,{mdxType:"ComponentsMd"}),(0,o.kt)("hr",null),(0,o.kt)(a.ZP,{mdxType:"ConceptsMd"}))}h.isMDXComponent=!0},99727:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/ziti-overview-9513324b1546d747c51d4fd1af459b12.svg"}}]);