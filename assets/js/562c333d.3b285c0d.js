"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[3259,9406],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>f});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(i),h=r,f=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return i?n.createElement(f,a(a({ref:t},d),{},{components:i})):n.createElement(f,a({ref:t},d))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},11891:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=i(87462),r=(i(67294),i(3905));const o={title:"PKI Troubleshooting"},a=void 0,l={unversionedId:"guides/troubleshooting/pki-troubleshooting",id:"guides/troubleshooting/pki-troubleshooting",title:"PKI Troubleshooting",description:"Configuring a Ziti Network's PKI can be confusing. Validating a single side of a mutual TLS connection is",source:"@site/docs/guides/05-troubleshooting/pki-troubleshooting.md",sourceDirName:"guides/05-troubleshooting",slug:"/guides/troubleshooting/pki-troubleshooting",permalink:"/docs/guides/troubleshooting/pki-troubleshooting",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/guides/05-troubleshooting/pki-troubleshooting.md",tags:[],version:"current",frontMatter:{title:"PKI Troubleshooting"},sidebar:"docsSidebar",previous:{title:"Circuit Create Error Codes",permalink:"/docs/guides/troubleshooting/circuit-create-error-codes"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Define the verifyCertAgainstPool Function",id:"define-the-verifycertagainstpool-function",level:4},{value:"Validating the PKI",id:"validating-the-pki",level:3},{value:"Success",id:"success",level:4},{value:"Failure",id:"failure",level:4},{value:"Ziti Edge Router to Controller",id:"ziti-edge-router-to-controller",level:3},{value:"Variables to Establish Manually",id:"variables-to-establish-manually",level:4},{value:"Variables - Copy/Paste",id:"variables---copypaste",level:4},{value:"Commands to Verify PKI Configuration",id:"commands-to-verify-pki-configuration",level:4},{value:"Ziti Client to Controller - API",id:"ziti-client-to-controller---api",level:3},{value:"Variables to Establish Manually",id:"variables-to-establish-manually-1",level:4},{value:"Variables - Copy/Paste",id:"variables---copypaste-1",level:4},{value:"Commands to Verify PKI Configuration",id:"commands-to-verify-pki-configuration-1",level:4},{value:"Ziti Client to Ziti Edge Router - Data",id:"ziti-client-to-ziti-edge-router---data",level:3},{value:"Variables to Establish Manually",id:"variables-to-establish-manually-2",level:4},{value:"Variables - Copy/Paste",id:"variables---copypaste-2",level:4},{value:"Commands to Verify PKI Configuration",id:"commands-to-verify-pki-configuration-2",level:4}],d={toc:c};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Configuring a Ziti Network's PKI can be confusing. Validating a single side of a mutual TLS connection is\nstraightforward it becomes tedious to ensure all the certificates and cas in use are valid when you have a fully\nconfigured Ziti Network.  It's the goal of this page to make diagnosing PKI issues easier. This guide will also use the\npaths you will find in the Ziti Edge - Developer Edition. Change paths accordingly."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"The following steps are ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Bash_(Unix_shell)"},"bash-based")," functions and use the\n",(0,r.kt)("a",{parentName:"p",href:"https://www.openssl.org/"},"openssl"),", ",(0,r.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.ruby-lang.org/en/"},"ruby"),"\ncommands. If you don't have bash, openssl and ruby - this page is not for you! Do your best to follow along with the\nscripts and guidance herein or just make sure bash, openssl, ruby, and jq are installed. All of which are widely\navailable on linux/MacOS/Windows."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ruby")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"jq")," commands are not strictly required. They are used to make it easy for you to copy/paste these\ncommands. The ",(0,r.kt)("inlineCode",{parentName:"p"},"ruby")," command is used to translate yaml into json while the ",(0,r.kt)("inlineCode",{parentName:"p"},"jq")," command is used to pull the specific\nvalues out of the given files. You can certainly do the same manually (without ",(0,r.kt)("inlineCode",{parentName:"p"},"ruby")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"jq"),") if you choose."),(0,r.kt)("h4",{id:"define-the-verifycertagainstpool-function"},"Define the verifyCertAgainstPool Function"),(0,r.kt)("p",null,"In your bash prompt copy and paste these two functions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'function yaml2json()\n{\n    ruby -ryaml -rjson -e \'puts JSON.pretty_generate(YAML.load(ARGF))\' $*\n}\n\nfunction verifyCertAgainstPool()\n{\n    if [[ "" == "$1" ]]\n    then\n        echo "Usage: verifyCertAgainstPool [cert to test] [ca pool to use]"\n        return 1\n    fi\n    \n    if [[ "" == "$2" ]]\n    then\n        echo "Usage: verifyCertAgainstPool [cert to test] [ca pool to use]"\n        return 1\n    fi\n\n    echo "    Verifying that this certificate:"\n    echo "        - $1"\n    echo "    is valid for this ca pool:"\n    echo "        - $2"\n    echo ""\n    openssl verify -partial_chain -CAfile "$2" "$1"\n    if [ $? -eq 0 ]; then\n        echo ""\n        echo "============      SUCCESS!      ============"\n    else\n        echo ""\n        echo "============ FAILED TO VALIDATE ============"\n    fi\n}\n')),(0,r.kt)("h3",{id:"validating-the-pki"},"Validating the PKI"),(0,r.kt)("p",null,"Every connection in a Ziti Network is mutually authenticated via X509 certificates. It is easiest to first identify the\ntwo components trying to communicate to isolate and minimize the configuration and files that need to be inspected.\nBelow you will find sections relevant to each of the pieces of Ziti which connect."),(0,r.kt)("p",null,"Each section will refer to a bash variable that is expected to be established before running the command. This variable\nis intended to make it easier for you to simply copy/paste the command and determine if the configuration is valid or\nnot."),(0,r.kt)("p",null,"Using the provided bash function above - you will see one of two results:"),(0,r.kt)("h4",{id:"success"},"Success"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"verifyCertAgainstPool /path/to/cert-to-test.cert /path/to/capool.pem\n    Verifying that this certificate:\n        - /path/to/cert-to-test.cert\n    is valid for this ca pool:\n        - /path/to/capool.pem\n\n/path/to/cert-to-test.cert: OK\n\n============      SUCCESS!      ============\n")),(0,r.kt)("h4",{id:"failure"},"Failure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"verifyCertAgainstPool /path/to/cert-to-test.cert /path/to/capool.pem\n    Verifying that this certificate:\n        - /path/to/cert-to-test.cert\n    is valid for this ca pool:\n        - /path/to/capool.pem\n\nC = US, ST = NC, L = Charlotte, O = NetFoundry, OU = Ziti, CN = 87f8cee9-b288-49f1-ab90-b664af29e17a\nerror 20 at 0 depth lookup: unable to get local issuer certificate\nerror /path/to/cert-to-test.cert: verification failed\n\n============ FAILED TO VALIDATE ============\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"ziti-edge-router-to-controller"},"Ziti Edge Router to Controller"),(0,r.kt)("h4",{id:"variables-to-establish-manually"},"Variables to Establish Manually"),(0,r.kt)("p",null,"These two variables represent the Ziti Edge Router configuration file and the Controller configuration file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"controller_config_file=~/.config/ziti/ziti-controller/ziti_controller.yml\nedge_router_config_file=~/.config/ziti/ziti-router/ziti_router.yml\n")),(0,r.kt)("h4",{id:"variables---copypaste"},"Variables - Copy/Paste"),(0,r.kt)("p",null,"These commands extract the files specified in the configuration and store them into the assigned variables."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"edge_router_cert=$(yaml2json $edge_router_config_file | jq -j .identity.cert)\nsigning_cert=$(yaml2json $controller_config_file | jq -j .edge.enrollment.signingCert.cert)\ncontroller_cert=$(yaml2json $controller_config_file | jq -j .identity.cert)\nedge_router_ca=$(yaml2json $edge_router_config_file | jq -j .identity.ca)\n")),(0,r.kt)("h4",{id:"commands-to-verify-pki-configuration"},"Commands to Verify PKI Configuration"),(0,r.kt)("p",null,"Both of these commands should report SUCCESS."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"verifyCertAgainstPool $edge_router_cert $signing_cert\nverifyCertAgainstPool $controller_cert $edge_router_ca\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"ziti-client-to-controller---api"},"Ziti Client to Controller - API"),(0,r.kt)("h4",{id:"variables-to-establish-manually-1"},"Variables to Establish Manually"),(0,r.kt)("p",null,"These two variables represent the identity file in json for a Ziti client and the Controller configuration file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"identity_file=/path/to/enrolled-identity.json\ncontroller_config_file=~/.config/ziti/ziti-controller/ziti_controller.yml\n")),(0,r.kt)("h4",{id:"variables---copypaste-1"},"Variables - Copy/Paste"),(0,r.kt)("p",null,"These commands will extract the cert and ca from the enrolled identity file and put it into a file in the /tmp folder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'jq -j .id.cert $identity_file | cut -d ":" -f2 > /tmp/identity.cert\njq -j .id.ca $identity_file | cut -d ":" -f2 > /tmp/identity.ca\n')),(0,r.kt)("p",null,"These commands extract the files specified in the configuration and store them into the assigned variables."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'controller_cert=$(yaml2json $controller_config_file | jq -j .identity.cert)\nsigning_cert=$(yaml2json $controller_config_file | jq -j .edge.enrollment.signingCert.cert)\n\ncontroller_api_server_cert=$(yaml2json $controller_config_file | jq -j .edge.api.identity.server_cert)\nif [[ "null" == "$controller_api_server_cert" ]]; then controller_api_server_cert=$(yaml2json $controller_config_file | jq -j .identity.server_cert); fi\n')),(0,r.kt)("h4",{id:"commands-to-verify-pki-configuration-1"},"Commands to Verify PKI Configuration"),(0,r.kt)("p",null,"Both of these commands should report SUCCESS."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"verifyCertAgainstPool /tmp/identity.cert $signing_cert\nverifyCertAgainstPool $controller_api_server_cert /tmp/identity.ca\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"ziti-client-to-ziti-edge-router---data"},"Ziti Client to Ziti Edge Router - Data"),(0,r.kt)("h4",{id:"variables-to-establish-manually-2"},"Variables to Establish Manually"),(0,r.kt)("p",null,"These two variables represent the identity file in json for a Ziti client and the Controller configuration file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"identity_file=/path/to/enrolled-identity.json\nedge_router_config_file=~/.config/ziti/ziti-router/ziti_router.yml\n")),(0,r.kt)("h4",{id:"variables---copypaste-2"},"Variables - Copy/Paste"),(0,r.kt)("p",null,"This command will extract the ca from the enrolled identity file and put it into a file in the /tmp folder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'jq -j .id.ca $identity_file | cut -d ":" -f2 > /tmp/identity.ca\n')),(0,r.kt)("p",null,"This command extracts the file specified in the configuration and stores it into the assigned variable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"edge_router_cert=$(yaml2json $edge_router_config_file | jq -j .identity.cert)\n")),(0,r.kt)("h4",{id:"commands-to-verify-pki-configuration-2"},"Commands to Verify PKI Configuration"),(0,r.kt)("p",null,"The following command should report SUCCESS."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"verifyCertAgainstPool $edge_router_cert /tmp/identity.ca\n")))}p.isMDXComponent=!0},12569:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=i(87462),r=(i(67294),i(3905)),o=i(11891);const a={id:"pki",title:"Public Key Infrastructure (PKI)",sidebar_label:"PKI"},l=void 0,s={unversionedId:"learn/core-concepts/pki",id:"learn/core-concepts/pki",title:"Public Key Infrastructure (PKI)",description:"All Ziti Networks leverage Public Key Infrastructure (PKI) to",source:"@site/docs/learn/core-concepts/pki.md",sourceDirName:"learn/core-concepts",slug:"/learn/core-concepts/pki",permalink:"/docs/learn/core-concepts/pki",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/learn/core-concepts/pki.md",tags:[],version:"current",frontMatter:{id:"pki",title:"Public Key Infrastructure (PKI)",sidebar_label:"PKI"},sidebar:"docsSidebar",previous:{title:"sessions",permalink:"/docs/learn/core-concepts/security/sessions"},next:{title:"Overview",permalink:"/docs/reference/"}},c={},d=[{value:"Ziti Controller",id:"ziti-controller",level:3},{value:"PKI Configuration",id:"pki-configuration",level:4},{value:"Edge Router",id:"edge-router",level:3},{value:"PKI Configuration",id:"pki-configuration-1",level:4},{value:"Third Party CA (optional)",id:"third-party-ca-optional",level:3},{value:"Registering the CA",id:"registering-the-ca",level:4},{value:"Validating the CA",id:"validating-the-ca",level:4}],p={toc:d};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"All Ziti Networks leverage ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Public_key_infrastructure"},"Public Key Infrastructure (PKI)")," to\nprovide secure network connections.  This page is not intended to be a comprehensive guide. What it is, is a set of\nrules that must be followed to properly configure a Ziti Network. If there are issues when connecting any portion\nof a Ziti Network to another - this page should serve as a starting point of understanding."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This article is about managing your own PKI. There's a guide for using public CA certificates.")),(0,r.kt)("p",null,"The Ziti Network allows the operator to declare any trust anchors as valid. This means Ziti does not need to be\nconfigured with a full chain of certificates which link fully back to a root CA. A configuration using a full chain back\nto a root CA is of course supported but it is not explicitly required.  This allows the operator to configure a Ziti\nNetwork using one or more chains of trust back to the provided trust anchors.  The sections below will describe where\nthese trust anchors can be configured."),(0,r.kt)("p",null,"Ziti Network components are required to present a certificate to other Ziti Network components during the connection\nestablishment. This certificate will need to be valid per the configured trust anchor store being connected to."),(0,r.kt)("h3",{id:"ziti-controller"},"Ziti Controller"),(0,r.kt)("p",null,"The Ziti Controller has three distinct sections related to PKI: ",(0,r.kt)("inlineCode",{parentName:"p"},"identity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"edge.api.identity"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"edge.enrollment.signingCert"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"edge.api.identity")," configuration section is optional and is provided to allow the external\nREST endpoint to present a certificate that is different than the one configured in the identity section."),(0,r.kt)("p",null,"Connections to the Ziti Controller are considered valid if the certificate presented during connection is signed by a\ntrust anchor declared within the identity.ca configuration or if the certificate presented is signed by the certificate\nspecified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"edge.enrollment.signingCert"),"."),(0,r.kt)("h4",{id:"pki-configuration"},"PKI Configuration"),(0,r.kt)("p",null,"The identity section of the Ziti Controller configuration is used by the Ziti Controller when connections are\nestablished to or from other components of a Ziti Network. There are four sections in the identity block:\n",(0,r.kt)("inlineCode",{parentName:"p"},"cert"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"server_cert"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ca"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ca"),": A file representing a group of certificates with one or more certificate chains terminating at a trust anchor.\nWhen a Ziti Network component connects to the Ziti Controller and offers a certificate for validation the incoming\nconnection is checked to see if it signed by a trust anchor specified in this file."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"key"),": Also referred to as the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Symmetric-key_algorithm"},"private key"),". It is generated\nfirst and used to produce the certificates specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cert")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"server_cert")," fields of the Ziti Controller\nconfiguration file."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"cert"),": The certificate presented to other Ziti Network components during connection establishment."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"server_cert"),": The certificate returned by the Ziti Controller when other Ziti Network components attempt to\ncommunicate to the Ziti Controller over the IP and port specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl.listener")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"mgmt.listener")," fields of the Ziti Controller\nconfiguration file. If an edge section is present in the configuration file and no edge.api.identity section exists this\ncertificate is also returned to incoming connections to the ",(0,r.kt)("inlineCode",{parentName:"p"},"edge.api.advertise")," endpoint."),(0,r.kt)("h3",{id:"edge-router"},"Edge Router"),(0,r.kt)("p",null,"An Edge Router has one section related to PKI: ",(0,r.kt)("inlineCode",{parentName:"p"},"identity"),". It is important to note that an Edge Router will\nmanage its own PKI. Allowing the Edge Router to manage its own PKI is almost certainly desired. The\nonly setting that an operator may wish to provide is the ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," field of the identity. This field is treated differently\nthan the other values specified.  If the ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," specified does not exist a new key will be generated. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),"\nprovided exists the Edge Router will use it and the other fields will be ",(0,r.kt)("strong",{parentName:"p"},"regenerated and overwritten")," as necessary."),(0,r.kt)("p",null,"The certificate generated will be signed by the Ziti Controller using the certificate specified in ",(0,r.kt)("inlineCode",{parentName:"p"},"edge.enrollment.signingCert"),"."),(0,r.kt)("h4",{id:"pki-configuration-1"},"PKI Configuration"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"identity")," section of the Edge Router configuration is used by the Edge Router when connections are\nestablished to or from the other components of a Ziti Network. There are four sections in the identity block:\n",(0,r.kt)("inlineCode",{parentName:"p"},"cert"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"server_cert"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ca"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ca"),": A file representing a group of certificates with one or more certificate chains terminating at a trust anchor.\nWhen a Ziti Network component connects to the Edge Router and offers a certificate for validation the incoming\nconnection is checked to see if it signed by a trust anchor specified in this file."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"key"),": Also referred to as the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Symmetric-key_algorithm"},"private key"),". It is generated\nfirst and used to produce the certificates specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cert")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"server_cert")," fields of the Edge Router\nconfiguration file."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"cert"),": The certificate presented to other Ziti Network components during connection establishment."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"server_cert"),": The certificate returned by the Edge Router when other Ziti Network components attempt to\ncommunicate to the Edge Router over the IP and port specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl.listener")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"mgmt.listener")," fields of the Edge Router\nconfiguration file."),(0,r.kt)("h3",{id:"third-party-ca-optional"},"Third Party CA (optional)"),(0,r.kt)("p",null,"A third party CA is one which is maintained and managed entirely outside of the Ziti Network. This is an important\nfeature for organizations wishing to administer and maintain the certificates used by the different pieces of the Ziti\nNetwork. A Ziti Network is capable of using third party PKIs as the trust mechanism for enrollment and authentication of\nclients for a Ziti Network."),(0,r.kt)("p",null,"With the PKI being managed externally a Ziti Network is never in possession of the private key. This means the Ziti\nNetwork cannot maintain nor distribute certificates necessary for creating secure connections. The Ziti Network is\nonly capable of verifying if the certificate presented was signed by the externally managed PKI."),(0,r.kt)("p",null,"Maintaining a PKI outside of the Ziti Network is a more complex configuration. If a PKI is already established\nand maintained externally setting up a Ziti Network with a third party CA may be desired."),(0,r.kt)("h4",{id:"registering-the-ca"},"Registering the CA"),(0,r.kt)("p",null,"A Ziti Network will not trust any third party CA implicitly. Before a third party CA can be used for enrollment and\nauthentication of clients in a Ziti Network it must be registered with the Ziti Controller to ensure certificates signed\nby the third party CA can be trusted.  "),(0,r.kt)("p",null,"Registering a third party CA is done by using the REST endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"/cas")," from the Ziti Controller. To register a third\nparty CA the following information is required to be posted to the endpoint:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name"),": the desired name of the CA"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"isEnrollmentEnabled"),": a boolean value indicating if the CA can be used for enrollment. Defaults to true. Set to false\nto prevent further enrollments using this CA"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"isAuthEnabled"),": a boolean value indicating if the CA can be used for authentication. Defaults to true. Set to false to\nprevent all authentication from endpoints signed by this certificate")),(0,r.kt)("p",null,"Assuming the create request was well formed and successful, the response from this invocation will contain a field\nrepresenting the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of the third party CA at ",(0,r.kt)("inlineCode",{parentName:"p"},"data.id"),". The id of the third party CA will be needed when validating\nthe third party CA."),(0,r.kt)("h4",{id:"validating-the-ca"},"Validating the CA"),(0,r.kt)("p",null,"After being submitted to the Ziti Controller, the third party CA will have the isCsrValidated field set to false\nindicating it is not yet ready for use. A second step is needed to ensure the third party CA is setup properly as a CA.\nThis step ensures the third party CA provided is capable of fulfilling CSR requests. Clients attempting to connect to a\nZiti Network using the third party CA will be rejected."),(0,r.kt)("p",null,"To validate the third party CA a CSR must be generated and fulfilled by the third party CA to generate a certificate\nwith the common name (CN) field set to a value assigned by the Ziti Controller. The Ziti Controller ",(0,r.kt)("inlineCode",{parentName:"p"},"/cas"),"\nREST endpoint can be interrogated to retrieve the details for a specific third party CA. The field necessary to validate\nthe third party CA is ",(0,r.kt)("inlineCode",{parentName:"p"},"data.verificationToken")," and is obtained at this endpoint. A certificate is then created and\nsigned by the third party CA with the common name field set to the verificationToken."),(0,r.kt)("p",null,"To finish verifying the third party CA, the certificate created with the verificationToken is posted back to the Ziti\nController at ",(0,r.kt)("inlineCode",{parentName:"p"},"/cas/${id}/verify"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," is also obtained during the creation process. After posting the certificate\nwith the ",(0,r.kt)("inlineCode",{parentName:"p"},"verificationToken")," as the common name the third party CA will change from ",(0,r.kt)("inlineCode",{parentName:"p"},"isVerified=false")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"isVerified=true"),"."),(0,r.kt)(o.default,{mdxType:"PkiTroubleshootingMd"}))}u.isMDXComponent=!0}}]);