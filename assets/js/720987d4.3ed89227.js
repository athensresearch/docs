"use strict";(self.webpackChunkfirst_docusaurus=self.webpackChunkfirst_docusaurus||[]).push([[254],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5747:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),s=["components"],a={},l="Git and GitHub Conventions",u={unversionedId:"developing/git",id:"developing/git",isDocsHomePage:!1,title:"Git and GitHub Conventions",description:"Commits",source:"@site/docs/developing/git.md",sourceDirName:"developing",slug:"/developing/git",permalink:"/docs/developing/git",editUrl:"https://github.com/athensresearch/docs/edit/main/docs/developing/git.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Continuous Integration",permalink:"/docs/developing/ci"},next:{title:"Storybook",permalink:"/docs/developing/storybook"}},c=[{value:"Commits",id:"commits",children:[],level:2},{value:"Issues",id:"issues",children:[],level:2},{value:"Pull Requests",id:"pull-requests",children:[],level:2}],p={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"git-and-github-conventions"},"Git and GitHub Conventions"),(0,i.kt)("h2",{id:"commits"},"Commits"),(0,i.kt)("p",null,"Follow guidelines from ",(0,i.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Conventional Commits"),". Specifically, begin each commit with one of the following types:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"build:\nci:\nchore:\ndocs:\nfeat:\nfix:\nperf:\nrefactor:\nrevert:\nstyle:\ntest:\n")),(0,i.kt)("p",null,"See some real examples in our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/athensresearch/athens/commits/master"},"commit history"),"."),(0,i.kt)("h2",{id:"issues"},"Issues"),(0,i.kt)("p",null,"Please create issues using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/athensresearch/athens/issues/new/choose"},"our templates"),". However, you will almost certainly get feedback and help faster in our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/GCJaV3V"},"Discord"),"!"),(0,i.kt)("h2",{id:"pull-requests"},"Pull Requests"),(0,i.kt)("p",null,"If your PR is related to other issue(s), reference it by issue number. You can close issues smoothly with ",(0,i.kt)("a",{parentName:"p",href:"https://help.github.com/en/enterprise/2.16/user/github/managing-your-work-on-github/closing-issues-using-keywords"},"GitHub keywords"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"close #1\nfix #2\nresolve #2\n")),(0,i.kt)("p",null,'This repo only allows those with merge permissions to "Squash and Merge" PRs. This makes reverts easier if they are needed.'))}m.isMDXComponent=!0}}]);