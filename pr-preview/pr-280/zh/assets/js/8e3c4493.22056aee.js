"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[3910],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7606:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var n=r(7462),o=r(3366),l=(r(7294),r(3905)),i=["components"],a={},s="Rollmint",p={unversionedId:"developers/rollmint",id:"developers/rollmint",title:"Rollmint",description:"rollmint",source:"@site/docs/developers/rollmint.md",sourceDirName:"developers",slug:"/developers/rollmint",permalink:"/pr-preview/pr-280/zh/developers/rollmint",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/rollmint.md",tags:[],version:"current",frontMatter:{},sidebar:"developers",previous:{title:"Node API",permalink:"/pr-preview/pr-280/zh/developers/node-api"},next:{title:"gm world",permalink:"/pr-preview/pr-280/zh/category/gm-world"}},c={},u=[{value:"Tutorials",id:"tutorials",level:2}],m={toc:u};function d(e){var t=e.components,a=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"rollmint"},"Rollmint"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"rollmint",src:r(6256).Z,width:"1280",height:"910"})),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/rollmint"},"Rollmint")," is an ABCI\n(Application Blockchain Interface) implementation for sovereign\nrollups to deploy on top of Celestia."),(0,l.kt)("p",null,"It is built by replacing Tendermint, the Cosmos-SDK\nconsensus layer, with a drop-in replacement that\ncommunicates directly with Celestia's Data Availability layer."),(0,l.kt)("p",null,"It spins up a sovereign rollup, which collects transactions into blocks and\nposts them onto Celestia for consensus and data availability."),(0,l.kt)("p",null,"The goal of Rollmint is to enable anyone to design and\ndeploy a sovereign rollup on Celestia in minutes."),(0,l.kt)("p",null,'Furthermore, while Rollmint allows you to build sovereign rollups\non Celestia, it currently does not support fraud proofs yet and is\ntherefore running in "pessimistic" mode, where nodes would need to\nre-execute the transactions to check the validity of the chain\n(i.e. a full node). Furthermore, Rollmint currently only supports\na single sequencer.'),(0,l.kt)("h2",{id:"tutorials"},"Tutorials"),(0,l.kt)("p",null,"The following tutorials will help you get started building\nCosmos-SDK applications that connect to Celestia's Data Availability\nLayer via Rollmint. You call those chains Sovereign Rollups."),(0,l.kt)("p",null,"You can get started with the following tutorials:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/pr-preview/pr-280/zh/developers/gm-world"},"gm world")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/pr-preview/pr-280/zh/developers/wordle"},"Wordle Game")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/pr-preview/pr-280/zh/developers/cosmwasm"},"CosmWasm Tutorial"))))}d.isMDXComponent=!0},6256:function(e,t,r){t.Z=r.p+"assets/images/rollmint-5be7479f6bad05fad502a38ad0f3c5c6.png"}}]);