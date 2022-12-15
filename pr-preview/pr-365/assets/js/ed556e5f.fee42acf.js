"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9178],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8813:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return p}});var r=n(3117),o=(n(7294),n(3905));const i={},l="Rollmint Installation",a={unversionedId:"developers/rollmint-on-ethermint",id:"developers/rollmint-on-ethermint",title:"Rollmint Installation",description:"ethermintd Installation",source:"@site/docs/developers/rollmint-on-ethermint.md",sourceDirName:"developers",slug:"/developers/rollmint-on-ethermint",permalink:"/pr-preview/pr-365/developers/rollmint-on-ethermint",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/rollmint-on-ethermint.md",tags:[],version:"current",frontMatter:{},sidebar:"developers",previous:{title:"Ethermint Dependencies",permalink:"/pr-preview/pr-365/developers/ethermint-dependencies"},next:{title:"Setting Up Your Environment for Ethermint on Celestia",permalink:"/pr-preview/pr-365/developers/instantiate-ethermint"}},c={},p=[{value:"ethermintd Installation",id:"ethermintd-installation",level:2}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rollmint-installation"},"Rollmint Installation"),(0,o.kt)("h2",{id:"ethermintd-installation"},"ethermintd Installation"),(0,o.kt)("p",null,"Here, we are going to pull down the ",(0,o.kt)("inlineCode",{parentName:"p"},"ethermint")," from the\nCelestia repository. This version of Ethermint has Rollmint installed on it.\nRollmint is a drop-in replacement for Tendermint that allows\nCosmos-SDK applications to connect to Celestia's Data Availability network."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/celestiaorg/ethermint.git\ncd ethermint \nmake install\n")),(0,o.kt)("p",null,"You can check if ",(0,o.kt)("inlineCode",{parentName:"p"},"ethermintd")," is installed by running the following\ncommand:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ethermintd\n")))}m.isMDXComponent=!0}}]);