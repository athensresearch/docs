"use strict";(self.webpackChunkfirst_docusaurus=self.webpackChunkfirst_docusaurus||[]).push([[625],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9898:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={},s="Continuous Integration",u={unversionedId:"developing/ci",id:"developing/ci",isDocsHomePage:!1,title:"Continuous Integration",description:"After each submitted PR to Athens, GitHub Actions runs the continuous integration workflow declared in .github/workflows/build.yml. This workflow runs scripts from script/ to test, lint, and build Athens. You can see these workflows in practice in the Actions tab.",source:"@site/docs/developing/ci.md",sourceDirName:"developing",slug:"/developing/ci",permalink:"/docs/developing/ci",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/developing/ci.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"REPL",permalink:"/docs/developing/repl"},next:{title:"Git and GitHub Conventions",permalink:"/docs/developing/git"}},c=[{value:"Testing",id:"testing",children:[],level:3},{value:"Linting",id:"linting",children:[],level:3},{value:"Clojure Styling",id:"clojure-styling",children:[],level:3},{value:"Unused Variable Checking",id:"unused-variable-checking",children:[],level:3}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"continuous-integration"},"Continuous Integration"),(0,i.kt)("p",null,"After each submitted PR to Athens, GitHub Actions runs the continuous integration workflow declared in ",(0,i.kt)("inlineCode",{parentName:"p"},".github/workflows/build.yml"),". This workflow runs scripts from ",(0,i.kt)("a",{parentName:"p",href:"https://app.gitbook.com/s/-MVghT4Ocm_YaZ2-l20i-2910905616/community/get-involved/script"},(0,i.kt)("inlineCode",{parentName:"a"},"script/"))," to test, lint, and build Athens. You can see these workflows in practice in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/athensresearch/athens/actions/"},"Actions tab"),"."),(0,i.kt)("p",null,"However, it's a lot faster if you run these tests locally, so you don't have to submit a PR each time to make sure the workflow succeeds. You may need to install additional dependencies, though."),(0,i.kt)("h3",{id:"testing"},"Testing"),(0,i.kt)("p",null,"No additional installation is needed. Just run this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lein test\n")),(0,i.kt)("p",null,"The output will look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ lein test\n\nTesting athens.block-test\n\nTesting athens.parser-test\n\nTesting athens.patterns-test\n\nRan 4 tests containing 16 assertions.\n0 failures, 0 errors.\n")),(0,i.kt)("h3",{id:"linting"},"Linting"),(0,i.kt)("p",null,"We are linting Clojure code using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/borkdude/clj-kondo"},"clj-kondo"),". Our clj-kondo configuration is in ",(0,i.kt)("a",{parentName:"p",href:"https://app.gitbook.com/s/-MVghT4Ocm_YaZ2-l20i-2910905616/community/get-involved/.clj-kondo/config.edn"},(0,i.kt)("inlineCode",{parentName:"a"},".clj-kondo/config.edn")),"."),(0,i.kt)("p",null,"For this linting to work, you will need to install ",(0,i.kt)("inlineCode",{parentName:"p"},"clj-kondo"),". Instructions are in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/borkdude/clj-kondo/blob/master/doc/install.md"},(0,i.kt)("inlineCode",{parentName:"a"},"clj-kondo"),"\u2019s installation guide"),"."),(0,i.kt)("p",null,"To see the problems reported by clj-kondo, run ",(0,i.kt)("inlineCode",{parentName:"p"},"script/lint"),". Example run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ script/lint\nlinting took 257ms, errors: 0, warnings: 0\n")),(0,i.kt)("p",null,"Your editor may also be able to integrate with clj-kondo\u2019s output. For example, if you use ",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=betterthantomorrow.calva"},"Calva")," for VS Code, then clj-kondo\u2019s messages are reported in the Problems panel."),(0,i.kt)("h3",{id:"clojure-styling"},"Clojure Styling"),(0,i.kt)("p",null,"To format your code or check that your code is formatted correctly, you will need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"cljstyle"),". Instructions for installing it are ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/greglook/cljstyle/tree/master#installation"},"in ",(0,i.kt)("inlineCode",{parentName:"a"},"cljstyle"),"\u2019s README"),"."),(0,i.kt)("p",null,"To check if your Clojure code is formatted correctly, run ",(0,i.kt)("inlineCode",{parentName:"p"},"cljstyle check"),". If there is no output and the return code is zero, you\u2019re good. You can also run ",(0,i.kt)("inlineCode",{parentName:"p"},"script/style"),", but currently it only works if you\u2019re running Linux."),(0,i.kt)("p",null,"To reformat all your Clojure files in place, run ",(0,i.kt)("inlineCode",{parentName:"p"},"cljstyle fix"),"."),(0,i.kt)("h3",{id:"unused-variable-checking"},"Unused Variable Checking"),(0,i.kt)("p",null,"To set this up, first make sure that a global ",(0,i.kt)("inlineCode",{parentName:"p"},"clojure")," binary is installed. You won\u2019t necessarily have a ",(0,i.kt)("inlineCode",{parentName:"p"},"clojure")," binary installed just because you installed Leiningen."),(0,i.kt)("p",null,"Next, just run ",(0,i.kt)("inlineCode",{parentName:"p"},"script/carve"),". The first time you run it it will download ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/borkdude/carve"},"Carve")," as a dependency, which takes about a minute and outputs lots of messages. On subsequent runs ",(0,i.kt)("inlineCode",{parentName:"p"},"script/carve")," won\u2019t output anything unless an unused variable was found."))}d.isMDXComponent=!0}}]);