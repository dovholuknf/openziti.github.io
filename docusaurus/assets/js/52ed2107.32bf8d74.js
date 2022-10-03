"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[4122],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),k=r,h=d["".concat(s,".").concat(k)]||d[k]||u[k]||i;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:7},a="Local - Docker Compose",l={unversionedId:"quickstarts/network/local-docker-compose",id:"quickstarts/network/local-docker-compose",title:"Local - Docker Compose",description:"If you are not familiar with it, Docker Compose is a tool for defining and running",source:"@site/docs/quickstarts/network/local-docker-compose.md",sourceDirName:"quickstarts/network",slug:"/quickstarts/network/local-docker-compose",permalink:"/docusaurus/docs/quickstarts/network/local-docker-compose",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/quickstarts/network/local-docker-compose.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"rootSidebar",previous:{title:"Local - With Docker",permalink:"/docusaurus/docs/quickstarts/network/local-with-docker"},next:{title:"Host OpenZiti Anywhere",permalink:"/docusaurus/docs/quickstarts/network/hosted"}},s={},c=[{value:"Preparation - Required Files",id:"preparation---required-files",level:2},{value:"Running via Docker Compose",id:"running-via-docker-compose",level:2},{value:"Stopping the Network",id:"stopping-the-network",level:3},{value:"Deployment Diagram",id:"deployment-diagram",level:2},{value:"Deployment Simplified",id:"deployment-simplified",level:3},{value:"Networks",id:"networks",level:3},{value:"Purple Network",id:"purple-network",level:4},{value:"Red Network",id:"red-network",level:4},{value:"Blue Network",id:"blue-network",level:4},{value:"The &quot;Fabric&quot; Router",id:"the-fabric-router",level:4},{value:"Testing the Network",id:"testing-the-network",level:2},{value:"Using Docker Locally",id:"using-docker-locally",level:3},{value:"Testing",id:"testing",level:3},{value:"Test - Edge Routers Online",id:"test---edge-routers-online",level:3},{value:"Test - Edge Router Identites",id:"test---edge-router-identites",level:3},{value:"Test - Network Connectivity Success",id:"test---network-connectivity-success",level:3},{value:"Test - Network Connectivity Failure",id:"test---network-connectivity-failure",level:3},{value:"Test - Web Test Blue",id:"test---web-test-blue",level:3},{value:"Install Ziti Admin Console (ZAC) Optional",id:"install-ziti-admin-console-zac-optional",level:2},{value:"Using the Overlay",id:"using-the-overlay",level:2}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"local---docker-compose"},"Local - Docker Compose"),(0,r.kt)("p",null,"If you are not familiar with it, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose")," is a tool for defining and running\nmulti-container Docker applications. It makes deploying multiple containers easy by using a declarative format defined\nvia yaml."),(0,r.kt)("p",null,"Ziti provides a Docker compose file that will get you up and running very quickly assuming you have both ",(0,r.kt)("inlineCode",{parentName:"p"},"docker"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," already installed in your system."),(0,r.kt)("h2",{id:"preparation---required-files"},"Preparation - Required Files"),(0,r.kt)("p",null,"First, grab the compose file from the\n",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/openziti/ziti/release-next/quickstart/docker/docker-compose.yml"},"ziti repository"),"."),(0,r.kt)("p",null,"Using curl that would look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o docker-compose.yaml https://raw.githubusercontent.com/openziti/ziti/release-next/quickstart/docker/docker-compose.yml\n")),(0,r.kt)("p",null,"Next, grab the\ndefault ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/openziti/ziti/release-next/quickstart/docker/.env"},"environment file"),"\nor just make a file in this folder that looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o .env https://raw.githubusercontent.com/openziti/ziti/release-next/quickstart/docker/.env\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"cat > .env <<DEFAULT_ENV_FILE\n# OpenZiti Variables\nZITI_IMAGE=openziti/quickstart\nZITI_VERSION=latest\nZITI_CONTROLLER_RAWNAME=ziti-controller\nZITI_EDGE_CONTROLLER_RAWNAME=ziti-edge-controller\n\n## Additional variables to override. \n#ZITI_EDGE_CONTROLLER_RAWNAME=some.other.name.com\n#ZITI_EDGE_CTRL_ADVERTISED_HOST_PORT=some.other.name.com:1280\n#ZITI_CTRL_ADVERTISED_ADDRESS=some.other.name.com\n#ZITI_EDGE_CONTROLLER_HOSTNAME=some.other.name.com\n#ZITI_CONTROLLER_HOSTNAME=some.other.name.com\n#ZITI_EDGE_CONTROLLER_IP_OVERRIDE=20.20.20.20\nDEFAULT_ENV_FILE\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you are running Void linux, you need to modify the docker-compose file, otherwise the services will not start properly.  To do this, add the following two lines to each service definition."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"    security_opt:\n      - seccomp:unconfined\n")),(0,r.kt)("p",{parentName:"admonition"},"Please see ",(0,r.kt)("a",{parentName:"p",href:"https://openziti.discourse.group/t/docker-compose-quickstart-setup-edge-controller-issue/601/10"},"this discussion")," for more information")),(0,r.kt)("h2",{id:"running-via-docker-compose"},"Running via Docker Compose"),(0,r.kt)("p",null,"Once the compose file is downloaded and the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file exists, you'll be able to start this network using\ndocker-compose just like you can with any other compose file: ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose up")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Docker compose will name your containers based on the folder you were in when you started them. For me, I've made a folder\nnamed ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," so all my containers start with ",(0,r.kt)("inlineCode",{parentName:"p"},"docker_"),". You can influence how this works by adding\n",(0,r.kt)("inlineCode",{parentName:"p"},"--project-name docker")," (or whatever name you like) to your docker-compose up/down commands"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose --project-name docker up \n"))),(0,r.kt)("h3",{id:"stopping-the-network"},"Stopping the Network"),(0,r.kt)("p",null,"This docker-compose file will generate a volume mount as well as a ",(0,r.kt)("strong",{parentName:"p"},"two")," docker networks. When you issue\n",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose --project-name docker down")," the volume mapping will not be removed. If you wish to remove the volume,\nyou'll need to specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"-v")," flag to the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," command. Leave the ",(0,r.kt)("inlineCode",{parentName:"p"},"-v")," off your command if you want to just\nstop the containers without losing the controller database and PKI."),(0,r.kt)("h2",{id:"deployment-diagram"},"Deployment Diagram"),(0,r.kt)("p",null,"This ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," file will create quite a few containers on your behalf. Here is an overview of the network that\nwill get created:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"docker-compose-overview.svg",src:n(4010).Z,width:"547",height:"391"})),(0,r.kt)("p",null,"As you can see there's a fair bit going on in there, let's break it down. The first thing to notice is that the entire\nimage is within the scope of a Docker network. You'll see with this compose file there are three pieces of the overlay\nwhich span the Docker network: the controller, an edge router, and a websocket-based edge router.  "),(0,r.kt)("h3",{id:"deployment-simplified"},"Deployment Simplified"),(0,r.kt)("p",null,"The stock docker-compose.yml deploys many components and is somewhat complex. If you prefer a simplified deployment via\nDocker compose, one which only includes the basic controller and edge router combination you can instead download the\n",(0,r.kt)("a",{parentName:"p",href:"https://git.io/JXQSt"},"simplified-docker-compose.yml")),(0,r.kt)("h3",{id:"networks"},"Networks"),(0,r.kt)("p",null,"Inside the Docker network you'll see there are three networks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the blue docker network"),(0,r.kt)("li",{parentName:"ul"},"the red docker network"),(0,r.kt)("li",{parentName:"ul"},'the purple "logical" network')),(0,r.kt)("p",null,'Docker will ensure only the pieces within a given network, can only communicate within that network. This network\ntopology is designed to approximate, very loosely, what it would be like to have a publicly deployed network. The purple\nnetwork would approximate the internet itself, the blue network would represent a cloud provider\'s private network\n(such as AWS) and the red network could represent another cloud provider network (like Azure). Those details are not\nimportant, the important part is that the networks are totally private to one another. See more on this topic below in\nthe "Testing" section.'),(0,r.kt)("h4",{id:"purple-network"},"Purple Network"),(0,r.kt)("p",null,'There is no Docker network named "purple" in the compose file, it\'s entirely a logical construct. It is shown only for\nclarity. All the assets in the purple network are in both the blue and red docker networks (which is why it\'s\nreferred to as purple). The assets in the purple network need to be in both the red and blue networks because the\nassets located in the blue and red networks need to communicate to the public edge routers and also need to communicate\nto the controller. If that\'s confusing, see the "Testing" section below which will hopefully make this more clear.'),(0,r.kt)("h4",{id:"red-network"},"Red Network"),(0,r.kt)("p",null,"The red network exists for demonstration only at this time. As you can see there are no assets inside the red network\nother than the private, ",(0,r.kt)("inlineCode",{parentName:"p"},"ziti-private-red")," router ",(0,r.kt)("strong",{parentName:"p"},"and")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"ziti-fabric-router-br"),". This means there's nothing in the\nred network for Ziti to access. It would serve as a great place for you to put your own assets and explore using Ziti!"),(0,r.kt)("h4",{id:"blue-network"},"Blue Network"),(0,r.kt)("p",null,"The blue network contains two important assets, the ",(0,r.kt)("inlineCode",{parentName:"p"},"ziti-private-blue")," router and the ",(0,r.kt)("inlineCode",{parentName:"p"},"web-test-blue")," server. Along\nwith those assets, the network also contains the ",(0,r.kt)("inlineCode",{parentName:"p"},"ziti-fabric-router-br"),". Although the ",(0,r.kt)("inlineCode",{parentName:"p"},"web-test-blue")," server does\nexport a port by default (port 80 on your localhost, will translate to port 8000 on the ",(0,r.kt)("inlineCode",{parentName:"p"},"web-test-blue")," server), you\ncan use Ziti to access this server without the exported port."),(0,r.kt)("h4",{id:"the-fabric-router"},'The "Fabric" Router'),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ziti-fabric-router-br")," exists to illustrate that you can create edge routers that are not necessarily fully public.\nThis is the only router which can communicate to ",(0,r.kt)("strong",{parentName:"p"},"all")," the other routers. The Ziti mesh may choose to use this router\nif the algorithm indicates it's the fastest path. Perhaps we'll see more about this in future docs."),(0,r.kt)("h2",{id:"testing-the-network"},"Testing the Network"),(0,r.kt)("h3",{id:"using-docker-locally"},"Using Docker Locally"),(0,r.kt)("p",null,"A quick note. If you are not well-versed with Docker you might forget that exposing ports in Docker is one thing,\nbut you'll also need to have a hosts entry for the containers you want to access from outside the Docker\nnetwork. This quickstart will expect that you understand this and for every router you add you will want to make\nsure you add a host entry. In the docker-compose example you will want/need hosts entries for at least: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ziti-edge-controller"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ziti-edge-router"))),(0,r.kt)("p",null,"And if you want to expose any other routers - of course you'll need/want to have entries for those as well."),(0,r.kt)("h3",{id:"testing"},"Testing"),(0,r.kt)("p",null,"Now that we have used ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," to deploy a relatively complicated network, we can start testing it out to make\nsure everything is in place and looks correct. Let's try it out."),(0,r.kt)("p",null,"To test, we will ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose exec")," into the running controller. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose exec ziti-controller bash\n")),(0,r.kt)("p",null,"Once exec'ed into the controller, the ",(0,r.kt)("inlineCode",{parentName:"p"},"ziti")," CLI will be added to your PATH for you. There is also the ",(0,r.kt)("inlineCode",{parentName:"p"},"zitiLogin"),"\nalias to make it easy for you to authenticate to the Ziti controller. Run ",(0,r.kt)("inlineCode",{parentName:"p"},"zitiLogin")," now and ensure you're\nauthenticated."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ziti@724087d30014:/openziti$ zitiLogin\nToken: 55ec6721-f33b-4101-970a-412331bd7578\nSaving identity 'default' to /openziti/ziti-cli.json\n")),(0,r.kt)("h3",{id:"test---edge-routers-online"},"Test - Edge Routers Online"),(0,r.kt)("p",null,"Once authenticated, let's see if all our routers are online by running ",(0,r.kt)("inlineCode",{parentName:"p"},"ziti edge list edge-routers"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ziti@724087d30014:/openziti$ ziti edge list edge-routers\n\u256d\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e\n\u2502 ID         \u2502 NAME                  \u2502 ONLINE \u2502 ALLOW TRANSIT \u2502 COST \u2502 ATTRIBUTES            \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 C6LbVE7fIc \u2502 ziti-edge-router      \u2502 true   \u2502 true          \u2502    0 \u2502 public                \u2502\n\u2502 GY1pcE78Ic \u2502 ziti-private-blue     \u2502 true   \u2502 true          \u2502    0 \u2502 ziti-private-blue     \u2502\n\u2502 H0UbcE78Tc \u2502 ziti-fabric-router-br \u2502 true   \u2502 true          \u2502    0 \u2502 ziti-fabric-router-br \u2502\n\u2502 KHTAct78Tc \u2502 ziti-private-red      \u2502 true   \u2502 true          \u2502    0 \u2502 ziti-private-red      \u2502\n\u2502 Yblbct7fTc \u2502 ziti-edge-router-wss  \u2502 true   \u2502 true          \u2502    0 \u2502 public                \u2502\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f\nresults: 1-5 of 5\n")),(0,r.kt)("p",null,"We can see all the routers are online - excellent."),(0,r.kt)("h3",{id:"test---edge-router-identites"},"Test - Edge Router Identites"),(0,r.kt)("p",null,"In this compose file, we have used a script that adds an identity for each of our edge routers as well. We can see those\nby running ",(0,r.kt)("inlineCode",{parentName:"p"},"ziti@724087d30014:/openziti$ ziti edge list identities"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ziti@724087d30014:/openziti$ ziti edge list identities\n\u256d\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e\n\u2502 ID         \u2502 NAME                  \u2502 TYPE   \u2502 ATTRIBUTES \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 C6LbVE7fIc \u2502 ziti-edge-router      \u2502 Router \u2502            \u2502\n\u2502 GY1pcE78Ic \u2502 ziti-private-blue     \u2502 Router \u2502            \u2502\n\u2502 H0UbcE78Tc \u2502 ziti-fabric-router-br \u2502 Router \u2502            \u2502\n\u2502 KHTAct78Tc \u2502 ziti-private-red      \u2502 Router \u2502            \u2502\n\u2502 Yblbct7fTc \u2502 ziti-edge-router-wss  \u2502 Router \u2502            \u2502\n\u2502 kkVrSLy.D  \u2502 Default Admin         \u2502 User   \u2502            \u2502\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f\nresults: 1-6 of 6\n\n")),(0,r.kt)("p",null,"Notice there is an identity for every router."),(0,r.kt)("h3",{id:"test---network-connectivity-success"},"Test - Network Connectivity Success"),(0,r.kt)("p",null,"Recall that the controller should be able to contact both the red and blue edge routers. Let's use ping and verify:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ziti@724087d30014:/openziti$ ping ziti-private-red -c 1\nPING ziti-private-red (172.29.0.2): 56 data bytes\n64 bytes from 172.29.0.2: icmp_seq=0 ttl=64 time=0.387 ms\n--- ziti-private-red ping statistics ---\n1 packets transmitted, 1 packets received, 0% packet loss\nround-trip min/avg/max/stddev = 0.387/0.387/0.387/0.000 ms\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ziti@724087d30014:/openziti$ ping ziti-private-blue -c 1\nPING ziti-private-blue (172.28.0.6): 56 data bytes\n64 bytes from 172.28.0.6: icmp_seq=0 ttl=64 time=0.633 ms\n--- ziti-private-blue ping statistics ---\n1 packets transmitted, 1 packets received, 0% packet loss\nround-trip min/avg/max/stddev = 0.633/0.633/0.633/0.000 ms\n")),(0,r.kt)("h3",{id:"test---network-connectivity-failure"},"Test - Network Connectivity Failure"),(0,r.kt)("p",null,"Now let's exit the Ziti controller and instead attach to the private blue router by running this command:\n",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose exec ziti-private-blue bash"),".  Once attached to the blue router we'll verify that we cannot\nconnect to the private red router:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ziti@e610d6b44166:/openziti$ ping ziti-private-red -c 1\nping: unknown host\n")),(0,r.kt)("p",null,"Unknown host - the private blue router cannot connect to the red router."),(0,r.kt)("h3",{id:"test---web-test-blue"},"Test - Web Test Blue"),(0,r.kt)("p",null,"While we're attached to the blue router - let's make sure we can connect to that ",(0,r.kt)("inlineCode",{parentName:"p"},"web-test-blue")," server.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'ziti@e610d6b44166:/openziti$ curl http://web-test-blue:8000\n<pre>\nHello World\n\n\n                                       ##         .\n                                 ## ## ##        ==\n                              ## ## ## ## ##    ===\n                           /""""""""""""""""\\___/ ===\n                      ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~\n                           \\______ o          _,/\n                            \\      \\       _,\'\n                             `\'--.._\\..--\'\'\n</pre>\n')),(0,r.kt)("p",null,"Don't forget - you can also access this from the exported port 80 on your local machine too!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://localhost:80\n<pre>\nHello World\n\n\n                                       ##         .\n                                 ## ## ##        ==\n                              ## ## ## ## ##    ===\n                           /""""""""""""""""\\___/ ===\n                      ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~\n                           \\______ o          _,/\n                            \\      \\       _,\'\n                             `\'--.._\\..--\'\'\n</pre>\n')),(0,r.kt)("h2",{id:"install-ziti-admin-console-zac-optional"},"Install Ziti Admin Console (ZAC) ","[Optional]"),(0,r.kt)("p",null,"Once you have the network up and running, if you want to install the UI management console, the ZAC, ",(0,r.kt)("a",{parentName:"p",href:"../zac/installation#using-docker-compose"},"follow along with\nthe installation guide")),(0,r.kt)("h2",{id:"using-the-overlay"},"Using the Overlay"),(0,r.kt)("p",null,"Now you have your zero trust overlay network in place, you probably want to try it out. Head on over to\n",(0,r.kt)("a",{parentName:"p",href:"../services"},"the services quickstart")," and start the journey to understanding how to use OpenZiti."))}u.isMDXComponent=!0},4010:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/docker-compose-overview-5df0fe0f68908ad3be227537cfa28a49.svg"}}]);