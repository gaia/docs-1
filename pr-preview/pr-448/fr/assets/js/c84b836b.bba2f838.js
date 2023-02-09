"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1615],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||l;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(4334),l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(3117),r=n(7294),l=n(4334),o=n(2389),i=n(7392),s=n(7094),c=n(2466),u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:f,groupId:m,className:b}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=f??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,i.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,s.U)(),[O,T]=(0,r.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=m){const e=k[m];null!=e&&e!==O&&h.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,n=E.indexOf(t),a=h[n].value;a!==O&&(N(t),T(a),null!=m&&w(m,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;n=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=E[t]??E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},b)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>E.push(e),onKeyDown:C,onClick:x},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":O===t})}),n??t)}))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function f(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},464:function(e,t){const n=Object.freeze({golang:"1.19.1","app-latest-tag":"v0.11.1","app-latest-sha":"a1eb594d43137ded5f9c1062168d26139a251e16","core-latest-tag":"v1.14.0-tm-v0.34.23","core-latest-sha":"ab4ef71b202dd9d27c879a820fa06e127d4234fa","node-latest-tag":"v0.6.2","node-latest-sha":"ab4ef71b202dd9d27c879a820fa06e127d4234fa"});t.Z=n},8549:function(e,t){const n=Object.freeze({golang:"1.19.1","app-latest-tag":"v0.11.1","app-latest-sha":"a1eb594d43137ded5f9c1062168d26139a251e16","core-latest-tag":"v1.14.0-tm-v0.34.23","core-latest-sha":"ab4ef71b202dd9d27c879a820fa06e127d4234fa","node-latest-tag":"v0.6.4","node-latest-sha":"ab4ef71b202dd9d27c879a820fa06e127d4234fa"});t.Z=n},4475:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return f}});var a=n(3117),r=(n(7294),n(3905)),l=n(8549),o=n(464),i=n(5488),s=n(5162);const c={sidebar_label:"Installing Celestia App"},u="Celestia App",p={unversionedId:"nodes/celestia-app",id:"nodes/celestia-app",title:"Celestia App",description:"This tutorial will guide you through building Celestia App. This",source:"@site/docs/nodes/celestia-app.mdx",sourceDirName:"nodes",slug:"/nodes/celestia-app",permalink:"/pr-preview/pr-448/fr/nodes/celestia-app",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/celestia-app.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Installing Celestia App"},sidebar:"nodes",previous:{title:"Docker Images",permalink:"/pr-preview/pr-448/fr/nodes/docker-images"},next:{title:"Deciding Which Node To Run",permalink:"/pr-preview/pr-448/fr/nodes/decide-node"}},d={},f=[{value:"Install Celestia App",id:"install-celestia-app",level:2}],m={toc:f};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"celestia-app"},"Celestia App"),(0,r.kt)("p",null,"This tutorial will guide you through building Celestia App. This\ntutorial presumes you completed the steps in setting up your\nown environment ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-448/fr/nodes/environment"},"here"),"."),(0,r.kt)("h2",{id:"install-celestia-app"},"Install Celestia App"),(0,r.kt)("p",null,"The steps below will create a binary file named ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-appd"),"\ninside ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/go/bin")," folder which will be used later to run the node.\nBe sure to select the correct network to install the binary for."),(0,r.kt)(i.Z,{groupId:"network",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,"cd $HOME ",(0,r.kt)("br",null),"rm -rf celestia-app ",(0,r.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-app.git ",(0,r.kt)("br",null),"cd celestia-app/ ",(0,r.kt)("br",null),"APP_VERSION=",l.Z["app-latest-tag"]," ",(0,r.kt)("br",null),"git checkout tags/$APP_VERSION -b $APP_VERSION ",(0,r.kt)("br",null),"make install ",(0,r.kt)("br",null)))),(0,r.kt)(s.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",null,"cd $HOME ",(0,r.kt)("br",null),"rm -rf celestia-app ",(0,r.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-app.git ",(0,r.kt)("br",null),"cd celestia-app/ ",(0,r.kt)("br",null),"APP_VERSION=",o.Z["app-latest-tag"]," ",(0,r.kt)("br",null),"git checkout tags/$APP_VERSION -b $APP_VERSION ",(0,r.kt)("br",null),"make install ",(0,r.kt)("br",null))))),(0,r.kt)("p",null,"To check if the binary was successfully compiled you can run the binary\nusing the ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd --help\n")),(0,r.kt)("p",null,"You should see a similar output (with helpful example commands):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'Start celestia app\n\nUsage:\n  celestia-appd [command]\n\nAvailable Commands:\n  add-genesis-account Add a genesis account to genesis.json\n  collect-gentxs      Collect genesis txs and output a genesis.json file\n  config              Create or query an application CLI configuration file\n  debug               Tool for helping with debugging your application\n  export              Export state to JSON\n  gentx               Generate a genesis tx carrying a self delegation\n  help                Help about any command\n  init                Initialize private validator, p2p, genesis, and application configuration files\n  keys                Manage your application\'s keys\n  migrate             Migrate genesis to a specified target version\n  query               Querying subcommands\n  rollback            rollback tendermint state by one height\n  rollback            rollback cosmos-sdk and tendermint state by one height\n  start               Run the full node\n  status              Query remote node for status\n  tendermint          Tendermint subcommands\n  tx                  Transactions subcommands\n  validate-genesis    validates the genesis file at the default location or at the location passed as an arg\n  version             Print the application binary version information\n\nFlags:\n  -h, --help                help for celestia-appd\n      --home string         directory for config and data (default "/root/.celestia-app")\n      --log_format string   The logging format (json|plain) (default "plain")\n      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")\n      --trace               print out full stack trace on errors\n\nUse "celestia-appd [command] --help" for more information about a command.\n')))}b.isMDXComponent=!0}}]);