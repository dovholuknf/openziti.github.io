"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[6578,5357,2647],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(7294),o=n(6010);const r="tabItem_Ymn6";function a(e){let{children:t,hidden:n,className:a}=e;return i.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,a),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>h});var i=n(7462),o=n(7294),r=n(6010),a=n(2389),l=n(7392),s=n(7094),c=n(2466);const d="tabList__CuJ",u="tabItem_LNqP";function p(e){var t;const{lazy:n,block:a,defaultValue:p,values:h,groupId:m,className:f}=e,y=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=h??y.map((e=>{let{props:{value:t,label:n,attributes:i}}=e;return{value:t,label:n,attributes:i}})),g=(0,l.l)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===p?p:p??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:w}=(0,s.U)(),[C,T]=(0,o.useState)(v),N=[],{blockElementScrollPositionUntilNextRender:A}=(0,c.o5)();if(null!=m){const e=b[m];null!=e&&e!==C&&k.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,n=N.indexOf(t),i=k[n].value;i!==C&&(A(t),T(i),null!=m&&w(m,String(i)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},f)},k.map((e=>{let{value:t,label:n,attributes:a}=e;return o.createElement("li",(0,i.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>N.push(e),onKeyDown:I,onFocus:E,onClick:E},a,{className:(0,r.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":C===t})}),n??t)}))),n?(0,o.cloneElement)(y.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function h(e){const t=(0,a.Z)();return o.createElement(p,(0,i.Z)({key:String(t)},e))}},6813:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>k,frontMatter:()=>u,metadata:()=>h,toc:()=>f});var i=n(7462),o=(n(7294),n(3905));const r={toc:[]};function a(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'#creates a new user named "NewUser"\nziti edge create identity user "NewUser" -o NewUser.jwt\n')))}a.isMDXComponent=!0;const l={toc:[]};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    Verb: POST\n\n    name:\n      The name of the CA to create\n    isAutoCaEnrollmentEnabled:\n      controls if the CA can be used for automatic enrollment\n    isOttCaEnrollmentEnabled:\n      controls if the CA be used for one time token enrollment\n    isAuthEnabled:\n      controls if the CA is enabled for authentication. Devices can enroll but not connect if set to false\n    certPem:\n      the CA to upload in PEM format\n    body:\n    {\n      "name": "${string}",\n      "isAutoCaEnrollmentEnabled": ${true|false},\n      "isOttCaEnrollmentEnabled": ${true|false},\n      "isAuthEnabled": ${true|false},\n      "certPem": "${string}"\n    }\n')))}s.isMDXComponent=!0;var c=n(5488),d=n(5162);const u={title:"Creating"},p=void 0,h={unversionedId:"core-concepts/identities/creating",id:"core-concepts/identities/creating",title:"Creating",description:"",source:"@site/docs/core-concepts/identities/10-creating.mdx",sourceDirName:"core-concepts/identities",slug:"/core-concepts/identities/creating",permalink:"/docusaurus/docs/core-concepts/identities/creating",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/core-concepts/identities/10-creating.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Creating"},sidebar:"rootSidebar",previous:{title:"Ziti Identities",permalink:"/docusaurus/docs/core-concepts/identities/overview"},next:{title:"Enrolling",permalink:"/docusaurus/docs/core-concepts/identities/enrolling"}},m={},f=[{value:"Creating an Identity",id:"creating-an-identity",level:2},{value:"Choosing an Enrollment Method",id:"choosing-an-enrollment-method",level:2},{value:"One Time Token (OTT)",id:"one-time-token-ott",level:3},{value:"3rd Party CA - Overview",id:"3rd-party-ca---overview",level:3},{value:"Adding a 3rd Party CA to the Ziti Controller",id:"adding-a-3rd-party-ca-to-the-ziti-controller",level:4},{value:"3rd Party CA - One Time Token",id:"3rd-party-ca---one-time-token",level:4},{value:"3rd Party CA - Auto Enrolled",id:"3rd-party-ca---auto-enrolled",level:4},{value:"Choosing an Identity Type",id:"choosing-an-identity-type",level:2}],y={toc:f};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"creating-an-identity"},"Creating an Identity"),(0,o.kt)("p",null,"The mechanism for creating identities is influenced by how your Ziti network is setup, specifically how the PKI is\nestablished. Identities are itegrally linked to the PKI configured in a given Ziti network and directly affects how\nidentities are created and enrolled. There are generally three enrollment methods for identities:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One Time Token (ott) identites using the configured PKI"),(0,o.kt)("li",{parentName:"ul"},"One Time Token (ott) identites using a 3rd Party CA"),(0,o.kt)("li",{parentName:"ul"},"3rd Party auto-enrolled identities")),(0,o.kt)("h2",{id:"choosing-an-enrollment-method"},"Choosing an Enrollment Method"),(0,o.kt)("p",null,"Choosing which type of enrollment your identity will use comes down to whether you are using a 3rd Party CA or not. If the\nnetwork does not have a 3rd Party Certificate configured the only option is to use the One Time Token (OTT) enrollment method."),(0,o.kt)("p",null,"If one or more 3rd Party CA is installed you will need to understand the intention of each 3rd Party certificate."),(0,o.kt)("p",null,"Each of the types of enrollments are secure it just depends on your actual network setup as to which type to choose. If\nyou don't know - just use the One Time Token (OTT) method. The identity can always be recreated at a later date if necessary."),(0,o.kt)("h3",{id:"one-time-token-ott"},"One Time Token (OTT)"),(0,o.kt)("p",null,"The One Time Token method is available to all Ziti networks.  A one time token enrolled identity will\nhave a token generated at the time of the identity's creation.  This token is then submitted at some point in the future\nas part of the ",(0,o.kt)("a",{parentName:"p",href:"./enrolling"},"enrollment")," process.  Once an identity is successfully enrolled - the one time token is\nno longer valid and cannot be used to enroll the same identity again."),(0,o.kt)("p",null,"One time tokens are delivered from the Ziti Controller as a ",(0,o.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7519"},"jwt")," and the token\nexpires 24 hours after the identity is created.  The token is downloadable via the Ziti Admin Console. After you create\na user you can go to the Identities page and click the icon that looks like a certificate to download the .jwt file."),(0,o.kt)("p",null,"You can also create an identity for one time token enrollment using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ziti")," cli tool.  This command will\ncreate a new identity and output the jwt to the selected path. You can then transfer the .jwt file to the device where\nthe permanent identity JSON file will be installed by running the ",(0,o.kt)("inlineCode",{parentName:"p"},"enroll")," command."),(0,o.kt)(a,{mdxType:"CreateCliExampleMd"}),(0,o.kt)("h3",{id:"3rd-party-ca---overview"},"3rd Party CA - Overview"),(0,o.kt)("p",null,'The Ziti Controller is capable of using an existing PKI for authentication and authorization rather than to PKI\nconfigured in the Ziti Controller.  Certificates that are not controlled by the Ziti Controller are referred to as "3rd\nparty". If you have an existing PKI setup you wish to reuse or if you are just interested in learning how\nto use a 3rd Party CA this section is for you.'),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Reusing a PKI is not a simple topic and managing and maintaining a PKI is out of the scope of this guide.")),(0,o.kt)("p",null,"A 3rd Party CA will need to be created and the public certificate uploaded into the Ziti Controller. After using an\nexisting PKI to reuse/generate a certificate, the Ziti Controller will be to create identities which will be expected to\npresent a certificate during the connection process that is valid per the provided certificate."),(0,o.kt)("h4",{id:"adding-a-3rd-party-ca-to-the-ziti-controller"},"Adding a 3rd Party CA to the Ziti Controller"),(0,o.kt)("p",null,"Adding a certificate to the Ziti Controller is easy using the Ziti Console."),(0,o.kt)(c.Z,{mdxType:"Tabs"},(0,o.kt)(d.Z,{value:"tabid-new-ca-ui",label:"New CA via UI",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'On the left side click "Certificate Authorities"'),(0,o.kt)("li",{parentName:"ol"},'In the top right corner of the screen click the "plus" image to add a new Certificate Authority'),(0,o.kt)("li",{parentName:"ol"},"Enter the name of the Certificate Authority you would like to create"),(0,o.kt)("li",{parentName:"ol"},"Choose if the CA should be used for Enrollment (yes) and Auth (yes)"),(0,o.kt)("li",{parentName:"ol"},"Click save"))),(0,o.kt)(d.Z,{value:"tabid-new-ca-cli",label:"New CA via REST",mdxType:"TabItem"},(0,o.kt)(s,{mdxType:"CreateCaJsonMd"}))),(0,o.kt)("h4",{id:"3rd-party-ca---one-time-token"},"3rd Party CA - One Time Token"),(0,o.kt)("p",null,"3rd Party CA OTT enrollment is closely related to ",(0,o.kt)("a",{parentName:"p",href:"#one-time-token-ott"},"OTT Enrollment"),". The main difference is the\nutilization of a 3rd party CA certificate rather than the configured Ziti Edge CA and PKI. In this method, the system\ndoes not have access to the 3rd party CA private key and thus cannot provide CSR fulfillment capabilities. Instead it is\nassumed that the enrolling device has a separate process to acquire signed certificates. Rather than submitting a CSR\nthe client uses an already acquired signed certificate as its client certificate for the enrollment request. The client\ncertificate is validated against the CA certificate tied to the one time token."),(0,o.kt)("p",null,"Similar to the ",(0,o.kt)("a",{parentName:"p",href:"#one-time-token-ott"},"OTT Enrollment")," process, identities must be provisioned ahead of enrollment in\norder to generate one time token required and to creat the jwt that can be delivered to enrolling devices. This means\nthat the provisioning of the Ziti Edge identities and the client certificates must be coordinated. Identities can be enrolled with a one time token flow similar to the ",(0,o.kt)("a",{parentName:"p",href:"#one-time-token-ott"},"one time token flow"),"."),(0,o.kt)("h4",{id:"3rd-party-ca---auto-enrolled"},"3rd Party CA - Auto Enrolled"),(0,o.kt)("p",null,"CA Auto Enrollment is useful in situations where devices are provisioned with certificates en-mass that need to be able\nto register as identities within Ziti Edge. This enrollment method allows for device provisioning processes to skip the\nmanual configuration of Ziti Edge and instead allow clients to present a signed client certificate to generate an\nidentity during the enrollment process. The identity will grant the client access to authenticate only - any\nauthorization will need to be done after the device identities have been created."),(0,o.kt)("p",null,"A certificate can only be used for one identity. The Ziti Edge system does not allow the same certificate to be used for\nmultiple identities. An enrollment request is comprised of a special enrollment URL used to perform an HTTP POST request\nusing the signed client certificate as the TLS client certificate and an optional JSON payload that allows the client to\nspecify the devices display name and internal username. See ",(0,o.kt)("a",{parentName:"p",href:"./enrolling"},"enrollment")," for more details on enrolling."),(0,o.kt)(c.Z,{mdxType:"Tabs"},(0,o.kt)(d.Z,{label:"New 3rd Party CA Identity via UI",value:"tabid-new-identity-ui",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'On the left side click "Certificate Authorities"'),(0,o.kt)("li",{parentName:"ol"},'In the top right corner of the screen click the "plus" image to add a new Certificate Authority'),(0,o.kt)("li",{parentName:"ol"},"Enter the name of the Certificate Authority you would like to create"),(0,o.kt)("li",{parentName:"ol"},"Choose if the CA should be used for Enrollment (yes) and Auth (yes)"),(0,o.kt)("li",{parentName:"ol"},"Click save"))),(0,o.kt)(d.Z,{label:"New 3rd Party Identity via CLI",value:"tabid-new-identity-cli",mdxType:"TabItem"},(0,o.kt)(a,{mdxType:"CreateIdCliMd"}))),(0,o.kt)("h2",{id:"choosing-an-identity-type"},"Choosing an Identity Type"),(0,o.kt)("p",null,"The three types of identities are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"User"),(0,o.kt)("li",{parentName:"ul"},"Device"),(0,o.kt)("li",{parentName:"ul"},"Service")),(0,o.kt)("p",null,"These are functionally equivalent and have identical properties. You may wish to express the intended purpose of an\nidentity by choosing one or another type when the identity is created. The type can not be changed."))}k.isMDXComponent=!0},2984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(7462),o=(n(7294),n(3905));const r={title:"Enrolling"},a="Enrolling an Identity",l={unversionedId:"core-concepts/identities/enrolling",id:"core-concepts/identities/enrolling",title:"Enrolling",description:"All connections made to the Ziti network leverage mutual TLS",source:"@site/docs/core-concepts/identities/20-enrolling.md",sourceDirName:"core-concepts/identities",slug:"/core-concepts/identities/enrolling",permalink:"/docusaurus/docs/core-concepts/identities/enrolling",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/core-concepts/identities/20-enrolling.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Enrolling"},sidebar:"rootSidebar",previous:{title:"Creating",permalink:"/docusaurus/docs/core-concepts/identities/creating"},next:{title:"Ziti Services",permalink:"/docusaurus/docs/core-concepts/services/overview"}},s={},c=[{value:"Overview",id:"overview",level:3},{value:"One Time Token Enrollment - Internal PKI",id:"one-time-token-enrollment---internal-pki",level:3},{value:"3rd Party CA - One Time Token",id:"3rd-party-ca---one-time-token",level:3},{value:"3rd Party CA - Auto",id:"3rd-party-ca---auto",level:3}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"enrolling-an-identity"},"Enrolling an Identity"),(0,o.kt)("p",null,"All connections made to the Ziti network leverage ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Mutual_authentication"},"mutual TLS"),'\nwhich means every client needs a valid X509 certificate which it will present to the Ziti network during the connection\nprocess. The process of obtaining a key/certificate pair and presenting it securely to the Ziti Controller is called\n"Enrollment".'),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"All identities need to be enrolled with the Ziti Controller so the Ziti Controller can authenticate the incoming connection.\nThis process is slightly different for each type of identity and is complex. The easiest way to enroll an identity is to\nuse either the Ziti Desktop Edge/Ziti Mobile Edge for your operating system. Alternatively, you may perform the enrollment separate\nwith the ",(0,o.kt)("inlineCode",{parentName:"p"},"ziti")," CLI which can be downloaded from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openziti/ziti/releases/latest"},"GitHub releases page")," "),(0,o.kt)("h3",{id:"one-time-token-enrollment---internal-pki"},"One Time Token Enrollment - Internal PKI"),(0,o.kt)("p",null,"Perhaps the easiest path to an enrolled identity is by using the one-time token enrollment flow. This flow leverages the\nPKI configured in the Ziti Controller.  Using the one-time token flow - the ",(0,o.kt)("inlineCode",{parentName:"p"},"ziti")," CLI will generate a private key\nand a certificate signing request for the Ziti Controller's built-in certificate authority to fulfill."),(0,o.kt)("p",null,"Follow these steps to enroll an identity with a one-time token:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"creating"},"create the Identity")),(0,o.kt)("li",{parentName:"ul"},"download or copy the JWT - this file contains the single use token"),(0,o.kt)("li",{parentName:"ul"},"run the ",(0,o.kt)("inlineCode",{parentName:"li"},"ziti")," CLI:")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ziti edge enroll \\\n    --jwt ${jwt_file} \\\n    --out ${identity_config_file}\n")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"The output from the ",(0,o.kt)("inlineCode",{parentName:"p"},"ziti")," CLI is a permanent identity configuration file which\nmust be stored securely. This file contains within it the private key that backs\nthe certificate issued by the Ziti Controller.  This file should not be\ntransferred or shared and should not be moved from the machine unless you are\nconfident you understand the risks involved in doing so.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage for ",(0,o.kt)("inlineCode",{parentName:"strong"},"ziti-edge-tunnel")," CLI")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# enroll from a token file\n./ziti-edge-tunnel enroll --jwt ./myTunneler.jwt --identity ./myTunneler.json\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# enroll from stdin\n./ziti-edge-tunnel enroll --jwt - --identity ./myTunneler.json < ./myTunneler.jwt\n")),(0,o.kt)("h3",{id:"3rd-party-ca---one-time-token"},"3rd Party CA - One Time Token"),(0,o.kt)("p",null,"This flow allows you to pre-create identities for a 3rd party CA with distinct role attributes. This flow is similar to the One Time Token flow from above except that it expects that a private key and certificate have\nalready been created on or distributed to the machine that is about to enroll and that the certificate presented is\nissued by a validated, ",(0,o.kt)("a",{parentName:"p",href:"/docs/manage/pki#third-party-ca-optional"},"third party CA"),"."),(0,o.kt)("p",null,"Follow these steps to enroll a 3rd Pary CA - one-time token identity:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"creating"},"create the Identity")),(0,o.kt)("li",{parentName:"ul"},"download or copy the JWT - this file contains the one-time token"),(0,o.kt)("li",{parentName:"ul"},"run the ",(0,o.kt)("inlineCode",{parentName:"li"},"ziti")," CLI. Notice you can provide the filename of the identity config JSON file to output:")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ziti edge enroll \\\n    --cert ${user_certificate} \\\n    --key ${user_private_key} \\\n    --jwt ${one_time_jwt_file} \\\n    --out ${identity_config_file}\n")),(0,o.kt)("h3",{id:"3rd-party-ca---auto"},"3rd Party CA - Auto"),(0,o.kt)("p",null,"When using a third party CA identity creation process in the Ziti Controller is\nautomatic. Enrolling the identity will create it with the default role attributes that were specified when the 3rd party CA was created."),(0,o.kt)("p",null,'Like "3rd Party CA - One Time Token" - this flow expects that a private key and certificate have\nalready been created on or distributed to the machine that is about to enroll.\nThe certificate presented to the Ziti Controller must be issued by a ',(0,o.kt)("a",{parentName:"p",href:"/docs/manage/pki#third-party-ca-optional"},"third\nparty CA")," that was already\nimported and verified in the Ziti Controller with the\n",(0,o.kt)("inlineCode",{parentName:"p"},"isAutoCaEnrollmentEnabled")," property set to true."),(0,o.kt)("p",null,"Using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ziti")," CLI will also require the re-use of a permanent JWT that is unique to the external CA. The JWT\ncan be downloaded from the Ziti Controller from:  ",(0,o.kt)("inlineCode",{parentName:"p"},"${controller_uri}/cas/${id}/jwt")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"${controller_uri}")," represents\nthe fully qualified address of the Ziti Controller api and ",(0,o.kt)("inlineCode",{parentName:"p"},"${id}")," represents the identifier for the given third party CA."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example Usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ziti edge enroll \\\n    --cert ${user_certificate} \\\n    --key ${user_private_key} \\\n    --jwt ${reusable_ca_jwt_file} \\\n    --out ${identity_config_file}\n")),(0,o.kt)("p",null,"If supplied, the argument to option ",(0,o.kt)("inlineCode",{parentName:"p"},"--idname")," will be used as the name for the identity created. The default name of auto-created identities is generated from a template that uses values from the user certificate i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"[caName]-[commonName]"),"."))}u.isMDXComponent=!0},6660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var i=n(7462),o=(n(7294),n(3905)),r=n(6813),a=n(2984);const l={},s="Ziti Identities",c={unversionedId:"core-concepts/identities/overview",id:"core-concepts/identities/overview",title:"Ziti Identities",description:"Ziti is built on the foundation of zero trust. A solid pillar of that foundation requires that all connections in a",source:"@site/docs/core-concepts/identities/overview.mdx",sourceDirName:"core-concepts/identities",slug:"/core-concepts/identities/overview",permalink:"/docusaurus/docs/core-concepts/identities/overview",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/core-concepts/identities/overview.mdx",tags:[],version:"current",frontMatter:{},sidebar:"rootSidebar",previous:{title:"Endpoint Registration",permalink:"/docusaurus/docs/core-concepts/clients/process-sequences/EndpointRegistration"},next:{title:"Creating",permalink:"/docusaurus/docs/core-concepts/identities/creating"}},d={},u=[{value:"3rd Party Certificates",id:"3rd-party-certificates",level:2}],p={toc:u};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ziti-identities"},"Ziti Identities"),(0,o.kt)("p",null,"Ziti is built on the foundation of zero trust. A solid pillar of that foundation requires that all connections in a\nZiti-enabled network are authenticated.  Identities are the basis for Ziti authentication.  All devices connecting to a\nZiti network will have an Identity which is presented at the time of a connection being established by both the device\ninitiating the connection and the device receiving the incoming connection. Ziti implements ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Mutual_authentication"},"mutual\nTLS")," in order to authenticate both sides of a connection."),(0,o.kt)("p",null,"Conceptually an identity can be thought of as congruent to a user account.  Identities are logical entities stored\ninside the Ziti Controller which map an X509 certifcate to a particular named identity.  Identities exist not only to\nauthenticate connections but are also used to authorize identities within Ziti. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/core-concepts/security/authorization/policies/overview"},"Policies"),"\nfor more information on authoriziation of identities."),(0,o.kt)("h2",{id:"3rd-party-certificates"},"3rd Party Certificates"),(0,o.kt)("p",null,'The certificate a Ziti Edge client presents can be generated by the Ziti Controller using the configured PKI or this\ncertificate can come from an existing PKI not controlled by the Ziti Controller. Certificates which are not created by\nthe Ziti Controller are referred to as "3rd Party" because from the perspective of the Ziti Controller the certificates\nare not from the configured PKI.'),(0,o.kt)(r.default,{mdxType:"CreateIdentityCliMd"}),(0,o.kt)(a.default,{mdxType:"EnrollingMd"}))}h.isMDXComponent=!0}}]);