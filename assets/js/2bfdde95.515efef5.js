(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return m}));var o=n(3),a=n(8),r=(n(0),n(184)),i={id:"componenttree",title:"ComponentTree"},c={unversionedId:"mainconcepts/coordinate-state-actions/componenttree",id:"mainconcepts/coordinate-state-actions/componenttree",isDocsHomePage:!1,title:"ComponentTree",description:"Moved from old website without any change.",source:"@site/../docs/mainconcepts/coordinate-state-actions/componenttree.md",slug:"/mainconcepts/coordinate-state-actions/componenttree",permalink:"/docs/mainconcepts/coordinate-state-actions/componenttree",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/mainconcepts/coordinate-state-actions/componenttree.md",version:"current",sidebar:"mainSidebar",previous:{title:"TreeProps",permalink:"/docs/mainconcepts/coordinate-state-actions/treeprops"},next:{title:"Dynamic Props",permalink:"/docs/mainconcepts/coordinate-state-actions/dynamic-props"}},p=[],s={toc:p};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Content needs to be updated")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Moved from old website without any change."))),Object(r.b)("p",null,"In the ",Object(r.b)("a",{parentName:"p",href:"/docs/using-components"},"Using Components")," guide, we saw how you can create a root component and pass it to a ",Object(r.b)("inlineCode",{parentName:"p"},"LithoView"),", which will take care of creating a ",Object(r.b)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/ComponentTree.html"},Object(r.b)("inlineCode",{parentName:"a"},"ComponentTree"))," with the given root. ",Object(r.b)("inlineCode",{parentName:"p"},"ComponentTree")," manages your component's lifecycle in a thread-safe way. You can create and make calls to it from any thread."),Object(r.b)("p",null,"You shouldn't typically need to do this, as you usually provide a component to your LithoView instead as shown in ",Object(r.b)("a",{parentName:"p",href:"/docs/using-components"},"Using Components"),". However, there are situations where you might want to create and manage your own ",Object(r.b)("inlineCode",{parentName:"p"},"ComponentTree"),"."),Object(r.b)("p",null,"In order to create a ",Object(r.b)("inlineCode",{parentName:"p"},"ComponentTree"),", you pass it a component root and attach it to a ",Object(r.b)("inlineCode",{parentName:"p"},"LithoView"),". The ",Object(r.b)("inlineCode",{parentName:"p"},"ComponentTree"),"'s ",Object(r.b)("inlineCode",{parentName:"p"},"create()")," method returns a ",Object(r.b)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/ComponentTree.Builder.html"},"Builder")," which exposes configuration methods for the ",Object(r.b)("inlineCode",{parentName:"p"},"ComponentTree"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'@Override\npublic void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n\n    final LithoView lithoView = new LithoView(this);\n    final ComponentContext c = new ComponentContext(this);\n\n    final Component text = Text.create(c)\n        .text("Hello World")\n        .textSizeDip(50)\n        .build();\n    final ComponentTree componentTree = ComponentTree.create(c, text).build();\n\n    lithoView.setComponentTree(componentTree);\n    setContentView(lithoView);\n}\n')))}m.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),m=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=m(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=m(n),u=o,b=l["".concat(i,".").concat(u)]||l[u]||d[u]||r;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);