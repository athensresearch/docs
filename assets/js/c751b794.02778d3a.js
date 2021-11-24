"use strict";(self.webpackChunkfirst_docusaurus=self.webpackChunkfirst_docusaurus||[]).push([[255],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8771:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={},s="Installation Guide",p={unversionedId:"user_guide/installation",id:"user_guide/installation",isDocsHomePage:!1,title:"Installation Guide",description:"Install Athens",source:"@site/docs/user_guide/installation.md",sourceDirName:"user_guide",slug:"/user_guide/installation",permalink:"/docs/user_guide/installation",editUrl:"https://github.com/athensresearch/docs/edit/main/docs/user_guide/installation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"About Athens",permalink:"/docs/"},next:{title:"Basic Product Tour",permalink:"/docs/user_guide/basics"}},c=[{value:"Install Athens",id:"install-athens",children:[{value:"Windows",id:"windows",children:[],level:3},{value:"OS X",id:"os-x",children:[],level:3},{value:"Linux",id:"linux",children:[],level:3}],level:2},{value:"Post-installation",id:"post-installation",children:[{value:"Finding where Athens stores your data",id:"finding-where-athens-stores-your-data",children:[],level:3},{value:"Importing an existing database",id:"importing-an-existing-database",children:[],level:3},{value:"Creating a new database",id:"creating-a-new-database",children:[],level:3},{value:"Syncing your data between machines",id:"syncing-your-data-between-machines",children:[],level:3},{value:"Updating Athens",id:"updating-athens",children:[],level:3}],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation-guide"},"Installation Guide"),(0,r.kt)("h2",{id:"install-athens"},"Install Athens"),(0,r.kt)("p",null,"Open the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/athensresearch/athens/releases"},"Releases page"),"."),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Assets")," tab for the latest release."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/15487/122689808-0bc65880-d1eb-11eb-96eb-43ac464de143.png",alt:"Screenshot of the Releases page with an arrow pointing to the Assets tab"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/15487/122689924-a888f600-d1eb-11eb-9d4b-df8690f43fb4.png",alt:"Screenshot of the Releases page with the Assets tab expanded with its contents marked with a red square"})),(0,r.kt)("p",null,"Find the next section of this page appropriate for your operating system."),(0,r.kt)("h3",{id:"windows"},"Windows"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download ",(0,r.kt)("inlineCode",{parentName:"li"},"Athens-Setup-1.0.0-[VERSION].exe"),"."),(0,r.kt)("li",{parentName:"ol"},"Double-click it to run it."),(0,r.kt)("li",{parentName:"ol"},"The installer will run and then launch Athens, at which point it should be available in your Start menu."),(0,r.kt)("li",{parentName:"ol"},"At this point, you can delete the file you downloaded in step 1.")),(0,r.kt)("h3",{id:"os-x"},"OS X"),(0,r.kt)("p",null,"If your OS X computer contains an ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Apple_M1"},"M1 chip")," ","(","i.e. was purchased during or after November 10, 2020",")",", you can download either ",(0,r.kt)("inlineCode",{parentName:"p"},"Athens-1.0.0-[VERSION]-arm64-mac.zip")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Athens-1.0.0-[VERSION]-arm64.dmg"),"."),(0,r.kt)("p",null,"If your OS X computer contains an ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Mac_transition_to_Intel_processors"},"Intel chip")," ","(","i.e. was purchased between January 2006 and early November 2020",")",", you can download either ",(0,r.kt)("inlineCode",{parentName:"p"},"Athens-1.0.0-[VERSION]-mac.zip")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Athens-1.0.0-[VERSION].dmg"),"."),(0,r.kt)("p",null,"If you download a ",(0,r.kt)("inlineCode",{parentName:"p"},".zip")," file:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Double-click it to have Archive Utility automatically extract it into the same folder."),(0,r.kt)("li",{parentName:"ol"},"Move the extracted ",(0,r.kt)("inlineCode",{parentName:"li"},"Athens")," application into your ",(0,r.kt)("inlineCode",{parentName:"li"},"Applications")," folder.")),(0,r.kt)("p",null,"If you download a ",(0,r.kt)("inlineCode",{parentName:"p"},".dmg")," file:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Double-click it to mount it."),(0,r.kt)("li",{parentName:"ol"},"Find the mounted image on your desktop and double-click it to open it."),(0,r.kt)("li",{parentName:"ol"},"Drag the contained ",(0,r.kt)("inlineCode",{parentName:"li"},"Athens")," application into your ",(0,r.kt)("inlineCode",{parentName:"li"},"Applications")," folder."),(0,r.kt)("li",{parentName:"ol"},"Right-click the mount on your desktop and select the ",(0,r.kt)("inlineCode",{parentName:"li"},"Eject")," option.")),(0,r.kt)("p",null,"At this point, you can delete whichever file you downloaded."),(0,r.kt)("h3",{id:"linux"},"Linux"),(0,r.kt)("p",null,"The Linux release is a standalone ",(0,r.kt)("a",{parentName:"p",href:"https://appimage.org/"},"AppImage")," executable."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download ",(0,r.kt)("inlineCode",{parentName:"p"},"Athens-1.0.0-[VERSION].AppImage"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Change permissions of the file to make it executable, e.g. run the following command in a terminal from the directory containing the file."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chmod a+x Athens-1.0.0-[VERSION].AppImage\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Execute the file."))),(0,r.kt)("h2",{id:"post-installation"},"Post-installation"),(0,r.kt)("h3",{id:"finding-where-athens-stores-your-data"},"Finding where Athens stores your data"),(0,r.kt)("p",null,"By default, Athens opens an initial knowledge graph that's stored in a local file called ",(0,r.kt)("inlineCode",{parentName:"p"},"index.transit"),", which is a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tonsky/datascript"},"datascript")," database at rest. The ",(0,r.kt)("inlineCode",{parentName:"p"},"index.transit")," file and every other file in the folder, minus the backup ","(",(0,r.kt)("inlineCode",{parentName:"p"},".bkp"),")"," files, make up the Athens database."),(0,r.kt)("p",null,"To find the location of this file for your operating system, click the ",(0,r.kt)("strong",{parentName:"p"},"Choose Database")," icon in the top-right corner of the Athens window."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/15487/122690410-108d0b80-d1ef-11eb-8c4c-cd502b28e318.png",alt:"Athens window with a red arrow pointing to the Choose Database icon"})),(0,r.kt)("p",null,"The file location appears in the ",(0,r.kt)("strong",{parentName:"p"},"Open")," tab that's displayed by default."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/15487/122767507-5cc86200-d268-11eb-93cb-858cc198320e.png",alt:"Choose Database modal with the current database file location marked with a red square"})),(0,r.kt)("h3",{id:"importing-an-existing-database"},"Importing an existing database"),(0,r.kt)("p",null,"If you've used ",(0,r.kt)("a",{parentName:"p",href:"https://roamresearch.com/"},"Roam")," and want to bring your content into Athens, see documentation on ","[Athens import features]","."),(0,r.kt)("h3",{id:"creating-a-new-database"},"Creating a new database"),(0,r.kt)("p",null,"To create a new database in a different location, click the ",(0,r.kt)("strong",{parentName:"p"},"New")," tab, enter a database name, and click the ",(0,r.kt)("strong",{parentName:"p"},"Browse")," button to select a directory to house the database files."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/15487/122768180-f7c13c00-d268-11eb-959c-22bb2170c585.png",alt:"Choose Database modal with the New tab and its Database Name text box and Browse button marked by red arrows"})),(0,r.kt)("h3",{id:"syncing-your-data-between-machines"},"Syncing your data between machines"),(0,r.kt)("p",null,"If you need to edit your knowledge graph from multiple machines or on different networks, you have two choices:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use a file synchronization tool like ",(0,r.kt)("a",{parentName:"li",href:"https://www.dropbox.com"},"Dropbox")," or ",(0,r.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage"},"OneDrive"),". While Athens warns you about updated blocks coming from these tools, you should take care not to edit the same database from multiple machines at the same time."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/athensresearch/athens-backend"},"Athens backend")," is in the process of being refactored into the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/athensresearch/athens"},"main Athens git repository")," ","(","see ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/athensresearch/athens/pull/1170/"},"this issue")," for details",")",", but until that effort is completed, the existing archived backend can be used.")),(0,r.kt)("h3",{id:"updating-athens"},"Updating Athens"),(0,r.kt)("p",null,"Athens will automatically download new releases and use them when restarted. As such, it's a good idea to restart Athens periodically."),(0,r.kt)("p",null,"Note that there may be issues with this automatic update feature in Windows; see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/athensresearch/athens/issues/1248"},"this issue")," for details."))}d.isMDXComponent=!0}}]);