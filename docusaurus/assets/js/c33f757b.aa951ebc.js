"use strict";(self.webpackChunkopen_ziti=self.webpackChunkopen_ziti||[]).push([[5419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?i.createElement(h,l(l({ref:t},u),{},{components:n})):i.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const r={title:"Linux"},l="Linux",o={unversionedId:"core-concepts/clients/tunnelers/linux",id:"core-concepts/clients/tunnelers/linux",title:"Linux",description:"The Tunneller CLI",source:"@site/docs/core-concepts/clients/tunnelers/01-linux.md",sourceDirName:"core-concepts/clients/tunnelers",slug:"/core-concepts/clients/tunnelers/linux",permalink:"/docusaurus/docs/core-concepts/clients/tunnelers/linux",draft:!1,editUrl:"https://github.com/openziti/ziti-doc/tree/main/docusaurus/docs/core-concepts/clients/tunnelers/01-linux.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Linux"},sidebar:"rootSidebar",previous:{title:"Tunnelers",permalink:"/docusaurus/docs/core-concepts/clients/tunnelers/"},next:{title:"Windows",permalink:"/docusaurus/docs/core-concepts/clients/tunnelers/windows"}},s={},p=[{value:"The Tunneller CLI",id:"the-tunneller-cli",level:3},{value:"Installation and Upgrade",id:"installation-and-upgrade",level:3},{value:"Installing the DEB",id:"installing-the-deb",level:4},{value:"Ubuntu Jammy 22.04",id:"ubuntu-jammy-2204",level:5},{value:"Ubuntu Focal 20.04, Bionic 18.04, Xenial 16.04, Trusty 14.04",id:"ubuntu-focal-2004-bionic-1804-xenial-1604-trusty-1404",level:5},{value:"Debian GNU/Linux",id:"debian-gnulinux",level:5},{value:"Installing the RPM",id:"installing-the-rpm",level:4},{value:"RHEL, CentOS, and Rocky Linux",id:"rhel-centos-and-rocky-linux",level:5},{value:"Fedora",id:"fedora",level:5},{value:"Amazon Linux",id:"amazon-linux",level:5},{value:"Binary",id:"binary",level:4},{value:"Enroll Before You Run",id:"enroll-before-you-run",level:5},{value:"Global Options",id:"global-options",level:3},{value:"<code>run</code> Mode",id:"run-mode",level:3},{value:"How does <code>ziti-edge-tunnel run</code> configure nameservers?",id:"how-does-ziti-edge-tunnel-run-configure-nameservers",level:4},{value:"System Requirements For Mode <code>run</code>",id:"system-requirements-for-mode-run",level:4},{value:"<code>run-host</code> Mode",id:"run-host-mode",level:3},{value:"System Requirements For Mode <code>run-host</code>",id:"system-requirements-for-mode-run-host",level:4},{value:"Run with Docker",id:"run-with-docker",level:3},{value:"Specialized Tunneller Alternatives",id:"specialized-tunneller-alternatives",level:3},{value:"tproxy",id:"tproxy",level:3},{value:"tproxy DNS nameserver",id:"tproxy-dns-nameserver",level:3},{value:"dhclient",id:"dhclient",level:3},{value:"systemd-resolved",id:"systemd-resolved",level:3},{value:"IP Address Assignment",id:"ip-address-assignment",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"linux"},"Linux"),(0,a.kt)("h3",{id:"the-tunneller-cli"},"The Tunneller CLI"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ziti-edge-tunnel")," is the general purpose tunneller CLI and can also run as a systemd daemon. For the best overall experience, please use the preferred tunneller ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti-edge-tunnel")," described here."),(0,a.kt)("p",null,"The purpose of the tunneller is to configure host access. This means all users and all processes on the host will share the same level of access. This is accomplished by configuring the OS to have an on-board OpenZiti DNS nameserver and IP routes for authorized OpenZiti Services."),(0,a.kt)("h3",{id:"installation-and-upgrade"},"Installation and Upgrade"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"It is not necessary to manually enroll the identity when using the RPM or DEB package. Just install the token in the identities directory and it will be enrolled when you start the daemon.")),(0,a.kt)("h4",{id:"installing-the-deb"},"Installing the DEB"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run the script below to import the signing key, add a package source to the list, update sources, and install ziti-edge-tunnel."),(0,a.kt)("li",{parentName:"ol"},"Install an enroll token JWT file or identity config JSON file in ",(0,a.kt)("inlineCode",{parentName:"li"},"/opt/openziti/etc/identities"),"."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"systemctl start ziti-edge-tunnel.service"),". The service needs to be restarted if the contents of the identities directory change.")),(0,a.kt)("h5",{id:"ubuntu-jammy-2204"},"Ubuntu Jammy 22.04"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSLf https://raw.githubusercontent.com/openziti/ziti-tunnel-sdk-c/main/package-repos.gpg \\\n| gpg --dearmor \\\n| sudo tee /usr/share/keyrings/openziti.gpg >/dev/null\necho 'deb [signed-by=/usr/share/keyrings/openziti.gpg] https://packages.openziti.org/zitipax-openziti-deb-stable jammy main' \\\n| sudo tee /etc/apt/sources.list.d/openziti.list >/dev/null\nsudo apt update\nsudo apt install ziti-edge-tunnel\n")),(0,a.kt)("h5",{id:"ubuntu-focal-2004-bionic-1804-xenial-1604-trusty-1404"},"Ubuntu Focal 20.04, Bionic 18.04, Xenial 16.04, Trusty 14.04"),(0,a.kt)("p",null,'The script is the same as Jammy for these older Ubuntu releases, but you must substitute the correct Ubuntu release code name e.g. "focal" in place of "jammy" in the apt sources file.'),(0,a.kt)("h5",{id:"debian-gnulinux"},"Debian GNU/Linux"),(0,a.kt)("p",null,'The script is the same as Ubuntu Jammy for Debian releases, but you should substitute the youngest Ubuntu release code name e.g. "focal" that is older than your release of Debian in place of "jammy" in the apt sources file. For simplicity\'s sake, the Ubuntu 18.04 "bionic" build is broadly compatible with modern Debian releases.'),(0,a.kt)("h4",{id:"installing-the-rpm"},"Installing the RPM"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a repo file like ",(0,a.kt)("inlineCode",{parentName:"li"},"/etc/yum.repos.d/openziti.repo")," matching the appropriate example below for your OS."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"yum update")," to refresh your repodata cache. Optionally, you may wish to also install all available updates."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"yum install ziti-edge-tunnel")," to install the RPM."),(0,a.kt)("li",{parentName:"ol"},"Install an enroll token JWT file or identity config JSON file in ",(0,a.kt)("inlineCode",{parentName:"li"},"/opt/openziti/etc/identities"),"."),(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"systemctl start ziti-edge-tunnel.service"),". The service needs to be restarted if the contents of the identities directory change.")),(0,a.kt)("h5",{id:"rhel-centos-and-rocky-linux"},"RHEL, CentOS, and Rocky Linux"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[OpenZiti]\nname=OpenZiti\nbaseurl=https://packages.openziti.org/zitipax-openziti-rpm-stable/redhat$releasever/$basearch\nenabled=1\ngpgcheck=0\ngpgkey=https://packages.openziti.org/zitipax-openziti-rpm-stable/redhat$releasever/$basearch/repodata/repomd.xml.key\nrepo_gpgcheck=1\n")),(0,a.kt)("h5",{id:"fedora"},"Fedora"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[OpenZiti]\nname=OpenZiti\nbaseurl=https://packages.openziti.org/zitipax-openziti-rpm-stable/redhat8/$basearch\nenabled=1\ngpgcheck=0\ngpgkey=https://packages.openziti.org/zitipax-openziti-rpm-stable/redhat8/$basearch/repodata/repomd.xml.key\nrepo_gpgcheck=1\n")),(0,a.kt)("h5",{id:"amazon-linux"},"Amazon Linux"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"[OpenZiti]\nname=OpenZiti\nbaseurl=https://packages.openziti.org/zitipax-openziti-rpm-stable/redhat7/$basearch\nenabled=1\ngpgcheck=0\ngpgkey=https://packages.openziti.org/zitipax-openziti-rpm-stable/redhat7/$basearch/repodata/repomd.xml.key\nrepo_gpgcheck=1\n")),(0,a.kt)("h4",{id:"binary"},"Binary"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/openziti/ziti-tunnel-sdk-c/releases/latest/"},"The latest binary release")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti-edge-tunnel")," is distributed as an executable for amd64, arm, arm64 architectures. The upgrade procedure is identical to the installation procedure."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# shell script illustrating the steps to install or upgrade ziti-edge-tunnel\nwget -q "https://github.com/openziti/ziti-tunnel-sdk-c/releases/latest/download/ziti-edge-tunnel-Linux_$(uname -p).zip" \\\n  && unzip ./ziti-edge-tunnel-Linux_$(uname -p).zip \\\n  && rm ./ziti-edge-tunnel-Linux_$(uname -p).zip \\\n  && chmod -c +x ./ziti-edge-tunnel \\\n  && ./ziti-edge-tunnel version\n')),(0,a.kt)("h5",{id:"enroll-before-you-run"},"Enroll Before You Run"),(0,a.kt)("p",null,"You will need the token file or its contents to enroll. Enrollment is the act of exchanging the token for an identity that is to be permanently installed in the filesystem."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/core-concepts/identities/enrolling"},"Here's a link to the article about enrolling")),(0,a.kt)("h3",{id:"global-options"},"Global Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Load a single identity.\n--identity <identity>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Load all identities in a dir, ignoring files with a .bak or .original filename suffix.\n--identity-dir <dir>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Set log level, higher is more verbose (default level 3 means INFO).\n--verbose N\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Set service polling interval in seconds (default 10).\n--refresh N\n")),(0,a.kt)("h3",{id:"run-mode"},(0,a.kt)("inlineCode",{parentName:"h3"},"run")," Mode"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ziti-edge-tunnel run")," provides a transparent proxy and nameserver. The nameserver may be configured to be authoritative (the default) or recursive with a command-line option. The OS is automatically configured to treat the nameserver as primary. You may inspect the resulting configuration with these commands."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"resolvectl dns     # inspect the association of tun device and nameserver\nresolvectl domain  # inspect the configuration of query routing domains\n")),(0,a.kt)("p",null,"If any interfaces have a wildcard routing domain configured, ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti-edge-tunnel")," will also configure its tun with a wildcard routing domain. If no other interface has a wildcard routing domain configured, neither will the ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti-edge-tunnel")," tun."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Specify the tun interface address and the subnet to which Service domain names are resolved (default 100.64.0.1/10). The nameserver address is always the tun interface address +1, default is 100.64.0.2.\n--dns-ip-range <ip range>\n")),(0,a.kt)("h4",{id:"how-does-ziti-edge-tunnel-run-configure-nameservers"},"How does ",(0,a.kt)("inlineCode",{parentName:"h4"},"ziti-edge-tunnel run")," configure nameservers?"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ziti-edge-tunnel run")," provides a built-in nameserver that will answer queries that exactly match authorized OpenZiti services' intercept domain names, and will respond with a hard-fail ",(0,a.kt)("inlineCode",{parentName:"p"},"NXDOMAIN")," code if the query does not match an authorized service."),(0,a.kt)("p",null,"You may enable DNS recursion by specifying an upstream nameserver to answer queries for other domain names that are not services' intercept domain names: ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti-edge-tunnel run --dns-upstream 208.67.222.222"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ziti-edge-tunnel")," uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"libsystemd")," D-Bus RPC client and will try to configure the OS's resolvers with ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd-resolved"),". If that's not possible for any reason then ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti-edge-tunnel run")," will fall back to shell commands like ",(0,a.kt)("inlineCode",{parentName:"p"},"resolvectl"),". If ",(0,a.kt)("inlineCode",{parentName:"p"},"resolvectl")," fails then ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti-edge-tunnel run")," will attempt to modify ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf")," directly to install the built-in nameserver as the primary resolver."),(0,a.kt)("p",null,"If the DNS record exists it returns the answer and sets query status to ",(0,a.kt)("inlineCode",{parentName:"p"},"NO_ERROR"),". If it does not exist then it sends the query to an upstream DNS server if configured. Otherwise, it sets the query status to ",(0,a.kt)("inlineCode",{parentName:"p"},"REFUSE"),". This implies that the caller ",(0,a.kt)("em",{parentName:"p"},"should")," keep trying to resolve the domain name with other nameservers."),(0,a.kt)("h4",{id:"system-requirements-for-mode-run"},"System Requirements For Mode ",(0,a.kt)("inlineCode",{parentName:"h4"},"run")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ziti-edge-tunnel run")," requires elevated privileges for managing the ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/net/tun")," device, running ",(0,a.kt)("inlineCode",{parentName:"p"},"resolvectl")," to assign nameservers and domain routes to the tun interface, and running ",(0,a.kt)("inlineCode",{parentName:"p"},"ip route")," to manage IP routes. This requires running as root because ",(0,a.kt)("inlineCode",{parentName:"p"},"setcaps")," are not inherited in all of these cases, even when the inherit bit is set."),(0,a.kt)("h3",{id:"run-host-mode"},(0,a.kt)("inlineCode",{parentName:"h3"},"run-host")," Mode"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ziti-edge-tunnel run-host")," is a mode for hosting (listening) for services which does provide service intercepts or DNS. Services configured for 'Bind' will be hosted by the tunneller."),(0,a.kt)("h4",{id:"system-requirements-for-mode-run-host"},"System Requirements For Mode ",(0,a.kt)("inlineCode",{parentName:"h4"},"run-host")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ziti-edge-tunnel run-host")," does not require elevated privileges or the above device or socket, only network egress to the servers for which it is hosting Services."),(0,a.kt)("h3",{id:"run-with-docker"},"Run with Docker"),(0,a.kt)("p",null,"Please reference the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openziti/ziti-tunnel-sdk-c/tree/main/docker#readme"},"Docker README")," for guidance and examples!"),(0,a.kt)("h3",{id:"specialized-tunneller-alternatives"},"Specialized Tunneller Alternatives"),(0,a.kt)("p",null,"There are also a couple of more specialized tunneling apps. Please use the preferred tunneller ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti-edge-tunnel")," described above if possible."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"ziti-tunnel")," has the unique capability of an opaque, raw TCP proxy in addition to some redundant capabilities deprecated by the preferred, general purpose tunneller described above: ",(0,a.kt)("inlineCode",{parentName:"li"},"ziti-edge-tunnel"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"ziti-router")," has an optional ",(0,a.kt)("inlineCode",{parentName:"li"},"ziti-tunnel")," feature built-in that may be enabled when an Edge Router is first created.")),(0,a.kt)("p",null,"The configuration and behavior of these two tunneller alternatives are identical and so are discussed as one for the remainder of this article. The tunneller is capable of operating in transparent proxy (",(0,a.kt)("inlineCode",{parentName:"p"},"tproxy"),"), opaque proxy (",(0,a.kt)("inlineCode",{parentName:"p"},"proxy"),"), and host (",(0,a.kt)("inlineCode",{parentName:"p"},"host"),") modes, discussed immediately below."),(0,a.kt)("h3",{id:"tproxy"},"tproxy"),(0,a.kt)("p",null,"Typically you will run ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti-tunnel tproxy"),". This is the transparent proxy mode that uses IPtables rules to intercept traffic intended for OpenZiti Services. In this mode ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti-tunnel")," will also serve as an OpenZiti nameserver. You must configure the OS with that nameserver as the primary resolver. The nameserver will only answer queries for which it is authoritative i.e. OpenZiti Services' domain names, and so you will also need a secondary, recursive resolver."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# You must have the IPtables kernel module installed.\n$ lsmod | grep ip_tables\nip_tables              32768  5 iptable_filter,iptable_security,iptable_raw,iptable_nat,iptable_mangle\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ziti-tunnel")," manipulates routing tables and IPtables rules when using the tproxy\nintercept mode. The ",(0,a.kt)("inlineCode",{parentName:"p"},"NET_ADMIN")," Linux capability is required for these actions. The\nusage example here runs ziti-tunnel with sudo as a convenient way to gain\nthat privilege:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo ziti-tunnel --identity ziti.json tproxy\n[   0.000]    INFO ziti/tunnel/intercept/tproxy.New: tproxy listening on 127.0.0.1:33355\n[   0.010]    INFO ziti/tunnel/dns.NewDnsServer: starting dns server...\n[   2.018]    INFO ziti/tunnel/dns.NewDnsServer: dns server running at 127.0.0.1:53\n[   2.018]    INFO ziti/tunnel/dns.(*resolver).AddHostname: adding ziti-tunnel.resolver.test = 19.65.28.94 to resolver\n[   2.033]    INFO ziti/tunnel/dns.(*resolver).RemoveHostname: removing ziti-tunnel.resolver.test from resolver\n[   2.096]    INFO ziti/tunnel/cmd/ziti-tunnel/subcmd.updateServices: starting tunnel for newly available service wttr.in\n[   2.290]    INFO ziti/tunnel/dns.(*resolver).AddHostname: adding wttr.in = 5.9.243.187 to resolver\n[   2.300]    INFO ziti/tunnel/cmd/ziti-tunnel/subcmd.updateServices: service wttr.in not hostable\n[   2.300]    INFO ziti/tunnel/cmd/ziti-tunnel/subcmd.updateServices: starting tunnel for newly available service ssh-local\n[   2.570]    INFO ziti/tunnel/dns.(*resolver).AddHostname: adding local.io = 169.254.1.1 to resolver\n")),(0,a.kt)("p",null,"The tproxy intercept mode creates a network listener that accepts connections at a\nrandomly selected port on the loopback interface. Intercepted ziti service traffic\ndirected to the listener by two mechanisms:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Firewall Rules (iptables)"),(0,a.kt)("p",{parentName:"li"},"  The TPROXY iptables target is the primary intercept mechanism used by the tproxy\nintercept mode. The TPROXY target essentially sends packets to a local listener\nwithout actually modifying the packet's destination address fields. See\n",(0,a.kt)("a",{parentName:"p",href:"https://www.kernel.org/doc/Documentation/networking/tproxy.txt"},"https://www.kernel.org/doc/Documentation/networking/tproxy.txt")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"iptables-extensions(8)")," for more details on the TPROXY target."),(0,a.kt)("p",{parentName:"li"},"  First, the tproxy interceptor links a new iptables chain to the PREROUTING chain:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo iptables -nt mangle -L PREROUTING | grep NF-INTERCEPT\nNF-INTERCEPT  all  --  0.0.0.0/0            0.0.0.0/0\n")),(0,a.kt)("p",{parentName:"li"},"  Then it creates rules in the new chain for each intercepted service. You can view\nthe tproxy rules in play:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo iptables -nt mangle -L NF-INTERCEPT\nChain NF-INTERCEPT (1 references)\ntarget     prot opt source               destination         \nTPROXY     tcp  --  0.0.0.0/0            5.9.243.187          /* wttr.in */ tcp dpt:443 TPROXY redirect 127.0.0.1:33355 mark 0x1/0x1\nTPROXY     tcp  --  0.0.0.0/0            169.254.1.1          /* ssh-local */ tcp dpt:22 TPROXY redirect 127.0.0.1:33355 mark 0x1/0x1\nTPROXY     tcp  --  0.0.0.0/0            1.2.3.4              /* netcat */ tcp dpt:22169 TPROXY redirect 127.0.0.1:33355 mark 0x1/0x1\n")),(0,a.kt)("p",{parentName:"li"},"  Packets with a destination address that matches the intercept address of a Ziti\nservice are directed to ziti-tunnel's network listener (127.0.0.1:33355 in the\nexamples above). This effectively enables ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti-tunnel")," to capture packets that\nare destined for any address using a single listener (and a single port)."),(0,a.kt)("p",{parentName:"li"},"  NOTE: ",(0,a.kt)("em",{parentName:"p"},"netfilter")," rules were considered when implementing ziti-tunnel's tproxy\nintercept mode. ",(0,a.kt)("em",{parentName:"p"},"netfilter")," is a slightly more modern than ",(0,a.kt)("em",{parentName:"p"},"iptables"),' and has\na supported netlink API for manipulating rules without "shelling out" to the\n',(0,a.kt)("inlineCode",{parentName:"p"},"iptables")," command line utility. ",(0,a.kt)("em",{parentName:"p"},"netfilter")," was ultimately abandoned because\nnetfilter tproxy support requires kernel configuration options (",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_NFT_TPROXY"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"CONFIG_NFT_SOCKET"),") that are not enabled in the default kernels of many common\nLinux distributions.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Local Routes"),(0,a.kt)("p",{parentName:"li"},"  The TPROXY target is only valid in the PREROUTING iptables chain, which is\ntraversed by incoming packets that were routed to the host over the network. A\n",(0,a.kt)("em",{parentName:"p"},"local")," route is necessary in order to get locally generated packets to traverse\nthe PREROUTING chain:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ ip route show table local\nlocal 1.2.3.4 dev lo proto kernel scope host src 1.2.3.4\nlocal 5.9.243.187 dev lo proto kernel scope host src 5.9.243.187\nlocal 169.254.1.1 dev lo proto kernel scope host src 169.254.1.1\n")))),(0,a.kt)("h3",{id:"tproxy-dns-nameserver"},"tproxy DNS nameserver"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Please use the preferred tunneller if possible. It is not necessary to manually configure DNS for the preferred tunneller")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ziti-tunnel tproxy")," mode runs a built-in nameserver serving on udp://127.0.0.1:53 by default, and configurable with a command-line option. The nameserver is authoritative for all authorized OpenZiti Services' domain names. This nameserver must be primary in the host's resolver\nconfiguration. A self-test is performed when ziti-tunnel starts to ensure that OpenZiti domains names are resolvable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"INFO[0002] dns server started on 127.0.0.1:53           \nINFO[0002] adding ziti-tunnel.resolver.test -> 19.65.28.94 to resolver \nINFO[0002] removing ziti-tunnel.resolver.test from resolver \n")),(0,a.kt)("p",null,"The test involves inserting a known hostname/IP address into the internal DNS server, and using the system\nresolver to retrieve the address of the hostname. ",(0,a.kt)("em",{parentName:"p"},"ziti-tunnel will exit if the DNS self-test fails.")),(0,a.kt)("p",null,"Linux distributions typically manage the contents of /etc/resolv.conf, so simply editing the file\nwill only work for a short time until /etc/resolv.conf is overwritten by the managing process."),(0,a.kt)("p",null,"Resolver configuration changes must survive restarts of the Linux name resolution manager. Linux\ndistrubutions use one of several name resolution managers. The simplest way to determine which name\nresolution manager is being used by your Linux distrubtion is to look at /etc/resolv.conf:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ls -l /etc/resolv.conf\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If /etc/resolv.conf is a regular file, then it is most likely being managed by ",(0,a.kt)("inlineCode",{parentName:"li"},"dhclient"),"."),(0,a.kt)("li",{parentName:"ul"},"If /etc/resolv.conf is a symlink to a file in /run/systemd/resolve, then it is being\nmanaged by ",(0,a.kt)("inlineCode",{parentName:"li"},"systemd-resolved")),(0,a.kt)("li",{parentName:"ul"},"If /etc/resolv.conf is a symlink at all it is being managed by some process on which the particular steps to configure the primary nameserver will depend.")),(0,a.kt)("h3",{id:"dhclient"},"dhclient"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Please use the preferred tunneller if possible. It is not necessary to manually configure DNS for the preferred tunneller")),(0,a.kt)("p",null,"If your Linux distribution uses dhclient, you can configure the system resolver to use\nziti-tunnel's internal DNS server first by adding the following to /etc/dhcp/dhclient.conf:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"prepend domain-name-servers 127.0.0.1;\n")),(0,a.kt)("p",null,"Then restart network manager. Unless you know the name of the NetworkManager systemd\nservice on your Linux distrubtion, it's probably easiest to reboot the host."),(0,a.kt)("h3",{id:"systemd-resolved"},"systemd-resolved"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Please use the preferred tunneller if possible. It is not necessary to manually configure DNS for the preferred tunneller")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'sudo ln -sf /run/systemd/resolve/resolv.conf /etc\necho -e "[Resolve]\\nDNS=127.0.0.1" | sudo tee /etc/systemd/resolved.conf.d/ziti-tunnel.conf\nsudo systemctl restart systemd-resolved\n')),(0,a.kt)("p",null,"If you are unable to control the resolver on your operating system, ziti-tunnel can use/update a hosts file for\nany hostnames that it tunnels:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'ziti-tunnel run --resolver file:///etc/hosts "${HOME}/ziti.json"\n')),(0,a.kt)("h3",{id:"ip-address-assignment"},"IP Address Assignment"),(0,a.kt)("p",null,"If the service specifies a hostname for its address, ziti-tunnel resolves the hostname and adds the result to its\ninternal DNS server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"[0127]  INFO adding myservice.mydomain.com -> 45.60.32.165 to resolver\n")),(0,a.kt)("p",null,"If the service hostname does not resolve, ziti-tunnel will find an unused link-local address and assign it to\nthe route for the service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"[0012]  INFO adding bogushost.net -> 169.254.1.4 to resolver\n[0012]  INFO ziti/tunnel/protocols/tcp.Listen: Accepting on 169.254.1.4:25 service=telnet\n")),(0,a.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The simplest step you can take toward a diagnosis is to reduce the minimum message log level. This usually means lower-level DEBUG messages and above are emitted in addition to the default level of INFO level and above e.g. WARN, ERROR, etc."),(0,a.kt)("p",{parentName:"li"},"For ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti-edge-tunnel"),": DEBUG log level is ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti-edge-tunnel --verbose=4")),(0,a.kt)("p",{parentName:"li"},"For the alternative tunnellers: DEBUG log level is like ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti-tunnel --verbose"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you change your package repo subscription or install the same DEB or RPM package from another source, excluding normal upgrades and downgrades, then it may be necessary to reload the systemd service unit definitions:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl daemon-reload\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You may inspect the loaded identities' info for a running ",(0,a.kt)("inlineCode",{parentName:"p"},"ziti-edge-tunnel")," by dumping it to stdout or the systemd journal with an IPC command, or you may signal to dump the identities' info to a file."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# dump indentities info to std our journal if systemd unit with IPC command\n./ziti-edge-tunnel dump\n")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# dump identities info to a file and inspect\nsudo pkill -USR1 -f ziti-edge-tunnel\nless /tmp/ziti-dump.964315.dump\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If the tunneller is crashing then it may be crucial to collect and analyze the core dump file. You may need to enable saving core dumps depending upon your OS configuration. "),(0,a.kt)("p",{parentName:"li"},"You can see how dump files are handled by inspecting this file, which is from Ubuntu 20.10."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat /proc/sys/kernel/core_pattern\n|/usr/share/apport/apport %p %s %c %d %P %E\n")),(0,a.kt)("p",{parentName:"li"},"In this case the dump is handled by ",(0,a.kt)("inlineCode",{parentName:"p"},"apport")," which saves the file in ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/crash"),". I'll need to follow the ",(0,a.kt)("inlineCode",{parentName:"p"},"apport")," documentation to learn how to unpack and parse the dump file."))))}d.isMDXComponent=!0}}]);