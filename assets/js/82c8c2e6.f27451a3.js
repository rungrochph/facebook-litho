(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var o=n(3),a=n(8),r=(n(0),n(184)),c={id:"writing-components",title:"Writing Components"},p={unversionedId:"writing-components",id:"writing-components",isDocsHomePage:!1,title:"Writing Components",description:"Component Specs",source:"@site/../docs/writing-components.md",slug:"/writing-components",permalink:"/docs/writing-components",editUrl:"https://github.com/facebook/litho/edit/master/website/../docs/writing-components.md",version:"current"},i=[{value:"Component Specs",id:"component-specs",children:[]},{value:"Spec, Lifecycle, and Component classes",id:"spec-lifecycle-and-component-classes",children:[]}],l={toc:i};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"component-specs"},"Component Specs"),Object(r.b)("p",null,"A component ",Object(r.b)("em",{parentName:"p"},"spec")," generates the actual component class that you'll use in your UI. There are two types of component specs:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Layout spec"),": combines other components into a specific layout. This is the equivalent of a ViewGroup on Android."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"Mount spec"),": a component that can render a view or a drawable.")),Object(r.b)("p",null,"For now, let's just have a look at the overall structure of a ",Object(r.b)("em",{parentName:"p"},"layout spec"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"@LayoutSpec\nclass MyComponentSpec {\n\n  @OnCreateLayout\n  static Component onCreateLayout(\n      ComponentContext c,\n      @Prop String title,\n      @Prop Uri imageUri) {\n    ...\n  }\n}\n")),Object(r.b)("p",null,"A few things to note:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A component spec is just a plain java class with some special annotations."),Object(r.b)("li",{parentName:"ul"},"A component spec is completely stateless and doesn't have any class members."),Object(r.b)("li",{parentName:"ul"},"The arguments annotated with ",Object(r.b)("inlineCode",{parentName:"li"},"@Prop")," will automatically become part of the component's builder."),Object(r.b)("li",{parentName:"ul"},"For components to be created from your component specs, you need to add the Litho annotation processor to your BUCK or Gradle file. See the ",Object(r.b)("a",{parentName:"li",href:"getting-started"},"Getting Started")," guide on how to do that. You can make the generated class package-private by adding ",Object(r.b)("inlineCode",{parentName:"li"},"isPublic = false")," to the class annotation.")),Object(r.b)("h2",{id:"spec-lifecycle-and-component-classes"},"Spec, Lifecycle, and Component classes"),Object(r.b)("p",null,"A component spec class will be processed to generate a ",Object(r.b)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/ComponentLifecycle.html"},"ComponentLifecycle")," subclass with the same name as the spec but without the ",Object(r.b)("em",{parentName:"p"},"Spec")," suffix. For example, a ",Object(r.b)("inlineCode",{parentName:"p"},"MyComponentSpec")," spec generates a ",Object(r.b)("inlineCode",{parentName:"p"},"MyComponent")," class."),Object(r.b)("p",null,"The generated ",Object(r.b)("inlineCode",{parentName:"p"},"ComponentLifecycle")," class is what you are going to ",Object(r.b)("a",{parentName:"p",href:"using-components"},"use in your product"),". The spec class will be used as a delegate in the generated code at runtime."),Object(r.b)("p",null,"The only API exposed by the generated class is a ",Object(r.b)("inlineCode",{parentName:"p"},"create(...)")," method that returns the appropriate ",Object(r.b)("a",{parentName:"p",href:"pathname:///javadoc/com/facebook/litho/Component.Builder.html"},Object(r.b)("inlineCode",{parentName:"a"},"Component.Builder"))," for the ",Object(r.b)("inlineCode",{parentName:"p"},"@Prop"),"s that you declared in your spec class."),Object(r.b)("p",null,"At runtime, all component instances of a certain type share the same ",Object(r.b)("inlineCode",{parentName:"p"},"ComponentLifecycle")," reference. This means that there will only be one spec instance per component type, not per component instance."))}s.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(n),b=o,d=m["".concat(c,".").concat(b)]||m[b]||u[b]||r;return n?a.a.createElement(d,p(p({ref:t},l),{},{components:n})):a.a.createElement(d,p({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=b;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,c[1]=p;for(var l=2;l<r;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);