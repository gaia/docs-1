"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[4619],{3905:function(e,n,a){a.d(n,{Zo:function(){return p},kt:function(){return d}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=t.createContext({}),i=function(e){var n=t.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},p=function(e){var n=i(e.components);return t.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=i(a),d=r,g=c["".concat(u,".").concat(d)]||c[d]||m[d]||l;return a?t.createElement(g,o(o({ref:n},p),{},{components:a})):t.createElement(g,o({ref:n},p))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=a[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:function(e,n,a){a.d(n,{Z:function(){return o}});var t=a(7294),r=a(6010),l="tabItem_Ymn6";function o(e){var n=e.children,a=e.hidden,o=e.className;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},n)}},5488:function(e,n,a){a.d(n,{Z:function(){return d}});var t=a(7462),r=a(7294),l=a(6010),o=a(2389),s=a(7392),u=a(7094),i=a(2466),p="tabList__CuJ",m="tabItem_LNqP";function c(e){var n,a,o=e.lazy,c=e.block,d=e.defaultValue,g=e.values,b=e.groupId,v=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=g?g:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),f=(0,s.l)(k,(function(e,n){return e.value===n.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===d?d:null!=(n=null!=d?d:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?n:h[0].props.value;if(null!==w&&!k.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,u.U)(),T=y.tabGroupChoices,N=y.setTabGroupChoices,x=(0,r.useState)(w),I=x[0],O=x[1],$=[],H=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var z=T[b];null!=z&&z!==I&&k.some((function(e){return e.value===z}))&&O(z)}var E=function(e){var n=e.currentTarget,a=$.indexOf(n),t=k[a].value;t!==I&&(H(n),O(t),null!=b&&N(b,String(t)))},Z=function(e){var n,a=null;switch(e.key){case"ArrowRight":var t,r=$.indexOf(e.currentTarget)+1;a=null!=(t=$[r])?t:$[0];break;case"ArrowLeft":var l,o=$.indexOf(e.currentTarget)-1;a=null!=(l=$[o])?l:$[$.length-1]}null==(n=a)||n.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},v)},k.map((function(e){var n=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:I===n?0:-1,"aria-selected":I===n,key:n,ref:function(e){return $.push(e)},onKeyDown:Z,onFocus:E,onClick:E},o,{className:(0,l.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":I===n})}),null!=a?a:n)}))),o?(0,r.cloneElement)(h.filter((function(e){return e.props.value===I}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==I})}))))}function d(e){var n=(0,o.Z)();return r.createElement(c,(0,t.Z)({key:String(n)},e))}},787:function(e,n,a){a.r(n),a.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return d}});var t=a(7462),r=a(3366),l=(a(7294),a(3905)),o=a(5488),s=a(5162),u=["components"],i={sidebar_label:"Setting Up Environment"},p="Development Environment",m={unversionedId:"developers/environment",id:"developers/environment",title:"Development Environment",description:"This tutorial will go over setting up your development environment to run",source:"@site/docs/developers/environment.mdx",sourceDirName:"developers",slug:"/developers/environment",permalink:"/pr-preview/pr-280/zh/developers/environment",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/environment.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Setting Up Environment"},sidebar:"developers",previous:{title:"Overview",permalink:"/pr-preview/pr-280/zh/developers/overview"},next:{title:"Celestia App",permalink:"/pr-preview/pr-280/zh/category/celestia-app"}},c={},d=[{value:"Install Dependencies",id:"install-dependencies",level:2},{value:"\ud83c\udf7a Installing Homebrew",id:"-installing-homebrew",level:4},{value:"\ud83d\uddc4 Install wget and jq",id:"-install-wget-and-jq",level:4},{value:"\ud83c\udf7a Installing Homebrew",id:"-installing-homebrew-1",level:4},{value:"\ud83d\uddc4 Install wget and jq",id:"-install-wget-and-jq-1",level:4},{value:"Install Golang",id:"install-golang",level:3}],g={toc:d};function b(e){var n=e.components,a=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,t.Z)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"development-environment"},"Development Environment"),(0,l.kt)("p",null,"This tutorial will go over setting up your development environment to run\nCelestia software. This environment can be used for development, building\nbinaries, and running nodes."),(0,l.kt)("h2",{id:"install-dependencies"},"Install Dependencies"),(0,l.kt)("p",null,"Once you have setup your instance, ssh into the instance to begin installing the\ndependencies needed to run a node."),(0,l.kt)("p",null,"First, make sure to update and upgrade the OS:"),(0,l.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"apt",label:"APT",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update && sudo apt upgrade -y\n"))),(0,l.kt)(s.Z,{value:"yum",label:"YUM",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo yum update\n")))),(0,l.kt)("p",null,"These are essential packages that are necessary to execute many tasks like\ndownloading files, compiling, and monitoring the node:"),(0,l.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"apt",label:"APT",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install curl tar wget clang pkg-config libssl-dev jq build-essential git make ncdu -y\n"))),(0,l.kt)(s.Z,{value:"yum",label:"YUM",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"sudo yum install curl tar wget clang pkg-config libssl-dev jq build-essential git make ncdu -y\n"))),(0,l.kt)(s.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,l.kt)("h4",{id:"-installing-homebrew"},"\ud83c\udf7a Installing Homebrew"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," is a package manager for macOS and Linux and will\nallow you to install your dependencies. Install it by running this command in\nyour terminal:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,l.kt)("p",null,"Be sure to run the commands in the output that are similar to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"==> Next steps:\n- Run these three commands in your terminal to add Homebrew to your PATH:\n    echo '# Set PATH, MANPATH, etc., for Homebrew.' >> /Users/joshstein/.zprofile\n    echo 'eval \"$(/opt/homebrew/bin/brew shellenv)\"' >> /Users/joshstein/.zprofile\n    eval \"$(/opt/homebrew/bin/brew shellenv)\"\n")),(0,l.kt)("h4",{id:"-install-wget-and-jq"},"\ud83d\uddc4 Install wget and jq"),(0,l.kt)("p",null,"Using Homebrew, in your terminal:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"brew install wget && brew install jq\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget/"},"wget")," is an internet file retriever and\n",(0,l.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq")," is a lightweight command-line JSON\nprocessor.")),(0,l.kt)(s.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,l.kt)("h4",{id:"-installing-homebrew-1"},"\ud83c\udf7a Installing Homebrew"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," is a package manager for macOS and Linux and will\nallow you to install your dependencies. Install it by running this command in\nyour terminal:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,l.kt)("p",null,"Be sure to run the commands in the output that are similar to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"==> Next steps:\n- Run these three commands in your terminal to add Homebrew to your PATH:\n    echo '# Set PATH, MANPATH, etc., for Homebrew.' >> /Users/joshstein/.zprofile\n    echo 'eval \"$(/opt/homebrew/bin/brew shellenv)\"' >> /Users/joshstein/.zprofile\n    eval \"$(/opt/homebrew/bin/brew shellenv)\"\n")),(0,l.kt)("h4",{id:"-install-wget-and-jq-1"},"\ud83d\uddc4 Install wget and jq"),(0,l.kt)("p",null,"Using Homebrew, in your terminal:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"brew install wget && brew install jq\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/wget/"},"wget")," is an internet file retriever and\n",(0,l.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq")," is a lightweight command-line JSON\nprocessor."))),(0,l.kt)("h3",{id:"install-golang"},"Install Golang"),(0,l.kt)("p",null,"Celestia-app and celestia-node are written in ",(0,l.kt)("a",{parentName:"p",href:"https://go.dev/"},"Golang"),"\nso you must install Golang to build and run them."),(0,l.kt)(o.Z,{groupId:"network",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,l.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.19.1"\ncd $HOME\nwget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"\nrm "go$ver.linux-amd64.tar.gz"\n'))),(0,l.kt)(s.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.19.1"\ncd $HOME\nwget "https://golang.org/dl/go$ver.linux-arm64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.linux-arm64.tar.gz"\nrm "go$ver.linux-arm64.tar.gz"\n'))),(0,l.kt)(s.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.19.1"\ncd $HOME\nwget "https://golang.org/dl/go$ver.darwin-arm64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.darwin-arm64.tar.gz"\nrm "go$ver.darwin-arm64.tar.gz"\n'))),(0,l.kt)(s.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.19.1"\ncd $HOME\nwget "https://golang.org/dl/go$ver.darwin-amd64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.darwin-amd64.tar.gz"\nrm "go$ver.darwin-amd64.tar.gz"\n')))),(0,l.kt)("p",null,"Now you need to add the ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/go/bin")," directory to ",(0,l.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,l.kt)(o.Z,{groupId:"shell",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"bash",label:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'))),(0,l.kt)(s.Z,{value:"zsh",label:"zsh",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-zsh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.zshrc\nsource $HOME/.zshrc\n')))),(0,l.kt)("p",null,"To check if Go was installed correctly run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"go version\n")),(0,l.kt)("p",null,"The output should be the version installed:"),(0,l.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.19.1 linux/amd64\n"))),(0,l.kt)(s.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.19.1 linux/arm64\n"))),(0,l.kt)(s.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.19.1 darwin/arm64\n"))),(0,l.kt)(s.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.19.1 darwin/amd64\n"))))),(0,l.kt)(s.Z,{value:"mamaki",label:"Mamaki",mdxType:"TabItem"},(0,l.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.18.2"\ncd $HOME\nwget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"\nrm "go$ver.linux-amd64.tar.gz"\n'))),(0,l.kt)(s.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.18.2"\ncd $HOME\nwget "https://golang.org/dl/go$ver.linux-arm64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.linux-arm64.tar.gz"\nrm "go$ver.linux-arm64.tar.gz"\n'))),(0,l.kt)(s.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.18.2"\ncd $HOME\nwget "https://golang.org/dl/go$ver.darwin-arm64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.darwin-arm64.tar.gz"\nrm "go$ver.darwin-arm64.tar.gz"\n'))),(0,l.kt)(s.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.18.2"\ncd $HOME\nwget "https://golang.org/dl/go$ver.darwin-amd64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.darwin-amd64.tar.gz"\nrm "go$ver.darwin-amd64.tar.gz"\n')))),(0,l.kt)("p",null,"Now you need to add the ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/go/bin")," directory to ",(0,l.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,l.kt)(o.Z,{groupId:"shell",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"bash",label:"bash",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n'))),(0,l.kt)(s.Z,{value:"zsh",label:"zsh",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-zsh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.zshrc\nsource $HOME/.zshrc\n')))),(0,l.kt)("p",null,"To check if Go was installed correctly run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"go version\n")),(0,l.kt)("p",null,"The output should be the version installed:"),(0,l.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.18.2 linux/amd64\n"))),(0,l.kt)(s.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.18.2 linux/arm64\n"))),(0,l.kt)(s.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.18.2 darwin/arm64\n"))),(0,l.kt)(s.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.18.2 darwin/amd64\n")))))))}b.isMDXComponent=!0}}]);