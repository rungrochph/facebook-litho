(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{161:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||r;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},166:function(e,t,n){"use strict";var o=n(0),a=n(167);t.a=function(){var e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},167:function(e,t,n){"use strict";var o=n(0),a=n.n(o).a.createContext(void 0);t.a=a},168:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var o=n(19),a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},r=n(0),i={Prism:o.a,theme:a};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},u=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},b=function(e,t){var n=e.plain,o=Object.create(null),a=e.styles.reduce((function(e,n){var o=n.languages,a=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=l({},e[t],a);e[t]=n})),e}),o);return a.root=n,a.plain=l({},n,{backgroundColor:null}),a};function d(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var m=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?b(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,o=e.className,a=e.style,r=l({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(r.style=i.plain),void 0!==a&&(r.style=void 0!==r.style?l({},r.style,a):a),void 0!==n&&(r.key=n),o&&(r.className+=" "+o),r})),s(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,a=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===a&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===a&&!o)return r[n[0]];var i=o?{display:"inline-block"}:{},s=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[i].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,o=e.className,a=e.style,r=e.token,i=l({},d(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==a&&(i.style=void 0!==i.style?l({},i.style,a):a),void 0!==n&&(i.key=n),o&&(i.className+=" "+o),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,a=e.children,r=this.getThemeDict(this.props),i=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],o=[0],a=[e.length],r=0,i=0,s=[],l=[s];i>-1;){for(;(r=o[i]++)<a[i];){var b=void 0,d=t[i],m=n[i][r];if("string"==typeof m?(d=i>0?d:["plain"],b=m):(d=u(d,m.type),m.alias&&(d=u(d,m.alias)),b=m.content),"string"==typeof b){var h=b.split(c),y=h.length;s.push({types:d,content:h[0]});for(var g=1;g<y;g++)p(s),l.push(s=[]),s.push({types:d,content:h[g]})}else i++,t.push(d),n.push(b),o.push(0),a.push(b.length)}i--,t.pop(),n.pop(),o.pop(),a.pop()}return p(s),l}(void 0!==i?t.tokenize(o,i,n):[o]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);t.a=m},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var o=n(2),a=n(0),r=n.n(a),i=n(168),s={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]},l={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]},c="0.40.0",p="0.40.1-SNAPSHOT",u="0.9.0",b="0.46.0",d=n(166),m=function(e){var t=e.language,n=e.code.replace(/{{site.lithoVersion}}/g,c).replace(/{{site.soloaderVersion}}/g,u).replace(/{{site.lithoSnapshotVersion}}/g,p).replace(/{{site.flipperVersion}}/g,b),a=Object(d.a)().isDarkTheme?l:s;return r.a.createElement(i.a,Object(o.a)({},i.b,{code:n,language:t,theme:a}),(function(e){var t=e.className,n=e.style,o=e.tokens,a=e.getLineProps,i=e.getTokenProps;return r.a.createElement("pre",{className:t,style:n},o.map((function(e,t){return r.a.createElement("div",a({line:e,key:t}),e.map((function(e,t){return r.a.createElement("span",i({token:e,key:t}))})))})))}))}},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"testingDependenciesCode",(function(){return p})),n.d(t,"default",(function(){return b}));var o=n(2),a=n(6),r=(n(0),n(161)),i=n(169),s={id:"unit-testing",title:"Getting Started"},l={unversionedId:"testing/unit-testing",id:"testing/unit-testing",isDocsHomePage:!1,title:"Getting Started",description:"export const testingDependenciesCode = testImplementation 'com.facebook.litho{{site.lithoVersion}}';",source:"@site/docs/testing/unit-testing.mdx",slug:"/testing/unit-testing",permalink:"/docs/testing/unit-testing",editUrl:"https://github.com/facebook/litho/edit/master/website/docs/testing/unit-testing.mdx",version:"current",sidebar:"mainSidebar",previous:{title:"Introduction",permalink:"/docs/testing/testing-overview"},next:{title:"Sub-Component Testing",permalink:"/docs/testing/subcomponent-testing"}},c=[{value:"Example",id:"example",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Testing component rendering",id:"testing-component-rendering",children:[]},{value:"Additional assertions",id:"additional-assertions",children:[]}],p="testImplementation 'com.facebook.litho:litho-testing:{{site.lithoVersion}}'",u={rightToc:c,testingDependenciesCode:p};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In order to use any of the testing utilities please include the ",Object(r.b)("inlineCode",{parentName:"p"},"litho-testing")," package in the\nbuild. Add the following lines to the ",Object(r.b)("inlineCode",{parentName:"p"},"dependencies")," block in the ",Object(r.b)("inlineCode",{parentName:"p"},"build.gradle")," file:"),Object(r.b)(i.a,{language:"groovy",code:p,mdxType:"VersionedCodeBlock"}),Object(r.b)("p",null,"Litho's testing APIs are exposed through fluid AssertJ methods. They are available as:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"pathname:///javadoc/com/facebook/litho/testing/assertj/ComponentAssert.html"}),"ComponentAssert"),"\nfor assertions that are run against either Component builders or Components."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"pathname:///javadoc/com/facebook/litho/testing/assertj/LithoViewAssert.html"}),"LithoViewAssert"),"\nfor assertions against mounted UI hierarchies.")),Object(r.b)("p",null,"For convenience, ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"pathname:///javadoc/com/facebook/litho/testing/assertj/LithoAssertions.html"}),"LithoAssertions.assertThat"),"\ncan be statically imported. It hosts all the APIs of ",Object(r.b)("inlineCode",{parentName:"p"},"ComponentAssert"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"LithoViewAssert"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"import static com.facebook.litho.testing.assertj.LithoAssertions.assertThat;\n")),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("p",null,"To demonstrate the usage of these APIs consider the following component that displays a like icon and\na short description."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"/**\n * Displays who liked the post.\n *\n * 1 - 3 likers => Comma separated names (e.g. Jane, Mike, Doug)\n * > 3 likers => Comma separated number denoting the like count\n */\n@LayoutSpec\nclass LikersComponentSpec {\n\n  @OnCreateLayout\n  protected static Component onCreateLayout(\n      ComponentContext c,\n      @Prop List<User> likers) {\n\n    return Row.create(c)\n        .alignItems(FLEX_START)\n        .child(\n          Image.create(c)\n            .drawableRes(R.drawable.like))\n        .child(\n          Text.create(c)\n            .text(formatLikers(likers))\n            .textSizeSp(12)\n            .ellipsize(TruncateAt.END))\n        .build();\n  }\n\n  private static String formatLikers(List<User> likers) {\n    ...\n  }\n}\n")),Object(r.b)("h2",{id:"setup"},"Setup"),Object(r.b)("p",null,"To verify the rendering of the text and the icon."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create a new test class; ",Object(r.b)("inlineCode",{parentName:"li"},"LikersComponentTest"),"."),Object(r.b)("li",{parentName:"ul"},"Add ",Object(r.b)("inlineCode",{parentName:"li"},"@RunWith(RobolectricTestRunner.class)")," to the top of the test class."),Object(r.b)("li",{parentName:"ul"},"Add a ",Object(r.b)("inlineCode",{parentName:"li"},"LithoViewRule")," JUnit ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/junit-team/junit4/wiki/Rules"}),Object(r.b)("inlineCode",{parentName:"a"},"@Rule"))," which\nsets up overrides for ",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.android.com/reference/android/R.styleable.html"}),"Styleables"),"\nand exposes some useful APIs.")),Object(r.b)("p",null,"The test class should look like the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),"@RunWith(RobolectricTestRunner.class)\npublic class LikersComponentTest {\n\n  public final @Rule LithoViewRule mLithoViewRule = new LithoViewRule();\n\n}\n")),Object(r.b)("h2",{id:"testing-component-rendering"},"Testing component rendering"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"LithoAssertions")," exposes AssertJ-style APIs to assert what get rendered by a component. These APIs\nwill generally layout, mount and render the component before testing the assertions."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-java"}),'@RunWith(RobolectricTestRunner.class)\npublic class LikersComponentTest {\n\n  public final @Rule LithoViewRule mLithoViewRule = new LithoViewRule();\n  @Test\n  public void whenTwoUsersLike_shouldShowBothUserNames() {\n    final ComponentContext c = mLithoViewRule.getContext();\n    final ImmutableList<User> likers = ImmutableList.of(\n      new User("Jane"), new User("Mike")\n    );\n    final LikersComponent component = LikersComponent.create(c)\n        .likers(likers)\n        .build();\n\n    LithoAssertions.assertThat(c , component).hasVisibleText("Jane, Mike");\n  }\n\n  @Test\n  public void whenUsersLike_shouldShowLikeIcon() {\n    final ComponentContext c = mLithoViewRule.getContext();\n    final ImmutableList<User> likers = ImmutableList.of(\n      new User("Jane"), new User("Mike")\n    );\n    final LikersComponent component = LikersComponent.create(c)\n        .likers(likers)\n        .build();\n\n    final Drawable likeIcon = c.getResources().getDrawable(R.drawable.like);\n    LithoAssertions.assertThat(c , component).hasVisibleDrawable(likeIcon);\n  }\n}\n')),Object(r.b)("h2",{id:"additional-assertions"},"Additional assertions"),Object(r.b)("p",null,"There are several more assertions that can be tested using LithoAssertions. To see the entire\nAPIs please checkout its ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"pathname:///javadoc/com/facebook/litho/testing/assertj/LithoAssertions.html"}),"JavaDoc here"),".\nThese APIs test assertions on the view heirarchy created by the mounted Component. So asserting\nthe presence of a Drawable in a Component will traverse the entire view hierarchy rendered by\nthe Component. Following are some of the assertions provided by LithoAssertions:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LithoAssertions#hasVisibleTextMatching()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LithoAssertions#doesNotHaveVisibleText()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LithoAssertions#willRender()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LithoAssertions#doesNotHaveVisibleDrawable()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LithoAssertions#hasContentDescription()")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LithoAssertions#willNotRender()"))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"When running Litho unit tests, be aware that the native library for Yoga must be loaded\nwhich can pose some challenges depending on your build system of choice. With Gradle and\nRobolectric, for instance, you may run into issues as Robolectric spins up new\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.oracle.com/javase/7/docs/api/java/lang/ClassLoader.html"}),"ClassLoaders"),"\nfor every test suite with a different configuration. The same goes for PowerMock, which\nprepares the ClassLoaders on a per-suite basis and leaves them in a non-reusable state."),Object(r.b)("p",{parentName:"div"},"The JVM has two important limitations that are relevant to this:"),Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",{parentName:"ol"},"A shared library can only ever be loaded once per process."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("inlineCode",{parentName:"li"},"ClassLoader"),"s do not share information about the libraries loaded.")),Object(r.b)("p",{parentName:"div"},"Because of that, using multiple ClassLoaders for test runs is highly problematic\nas every instance will attempt to load Yoga and every but the first will fail with\n",Object(r.b)("inlineCode",{parentName:"p"},"libyoga.so already loaded in another classloader")," exception."),Object(r.b)("p",{parentName:"div"},"The only way to avoid this is by either preventing the use of multiple ClassLoaders\nor forking the process whenever a new ClassLoader is necessary."),Object(r.b)("p",{parentName:"div"},"Gradle allows you to limit the number of test classes a process can execute before\nit is discarded. If you set the number to one, we avoid the ClassLoader reuse:"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-groovy"}),"android {\n    [...]\n\n    testOptions {\n        unitTests.all {\n            forkEvery = 1\n            maxParallelForks = Math.ceil(Runtime.runtime.availableProcessors() * 1.5)\n        }\n    }\n}\n")),Object(r.b)("p",{parentName:"div"},"With Buck, this behavior can be achieved by assigning test targets separate names\nas those will result in a parallel process being spun up. Alternatively, you can\nset the ",Object(r.b)("inlineCode",{parentName:"p"},"fork_mode")," to ",Object(r.b)("inlineCode",{parentName:"p"},"per_test")," as described\n",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://buckbuild.com/rule/java_test.html#fork_mode"}),"here"),"."),Object(r.b)("p",{parentName:"div"},"Ultimately, depending on your build system and the existing constraints of your\nproject, you may need to adjust the way in which your test runner utilizes\nClassLoaders. This is, however, not a problem unique to Litho but an unfortunate\nconsequence of mixing native and Java code in Android projects."))))}b.isMDXComponent=!0}}]);