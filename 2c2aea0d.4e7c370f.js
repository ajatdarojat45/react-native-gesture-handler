(window.webpackJsonp=window.webpackJsonp||[]).push([[30,28],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(280)),i=n(75),s={id:"gesture-detector",title:"GestureDetector",sidebar_label:"Gesture detector"},c={unversionedId:"api/gestures/gesture-detector",id:"version-2.0.0/api/gestures/gesture-detector",isDocsHomePage:!1,title:"GestureDetector",description:"GestureDetector is the main component of the RNGH2. It is responsible for creating and updating native gesture handlers based on the config of provided gesture. The most significant difference between it and old gesture handlers is that the GestureDetector can recognize more than one gesture at the time thanks to gesture composition. Keep in mind that GestureDetector is not compatible with the Animated API, nor with Reanimated 1.",source:"@site/versioned_docs/version-2.0.0/api/gestures/gesture-detector.md",slug:"/api/gestures/gesture-detector",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/gesture-detector",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.0.0/api/gestures/gesture-detector.md",version:"2.0.0",sidebar_label:"Gesture detector",sidebar:"version-2.0.0/docs",previous:{title:"Running Example App",permalink:"/react-native-gesture-handler/docs/2.0.0/example"},next:{title:"Gesture",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/gesture"}},p=[{value:"Properties",id:"properties",children:[{value:"<code>gesture</code>",id:"gesture",children:[]}]}],d={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"GestureDetector")," is the main component of the RNGH2. It is responsible for creating and updating native gesture handlers based on the config of provided gesture. The most significant difference between it and old gesture handlers is that the ",Object(o.b)("inlineCode",{parentName:"p"},"GestureDetector")," can recognize more than one gesture at the time thanks to gesture composition. Keep in mind that ",Object(o.b)("inlineCode",{parentName:"p"},"GestureDetector")," is not compatible with the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactnative.dev/docs/animated"}),"Animated API"),", nor with ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.swmansion.com/react-native-reanimated/docs/1.x.x/"}),"Reanimated 1"),"."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Gesture Detector will use first native view in its subtree to recognize gestures, however if this view is used only to group its children it may get automatically ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactnative.dev/docs/view#collapsable-android"}),"collapsed"),". Consider this example:"),Object(o.b)(i.default,{mdxType:"FunctionalComponents"}),"If we were to remove the collapsable prop from the View, the gesture would stop working because it would be attached to a view that is not present in the view hierarchy. Gesture Detector adds this prop automatically to its direct child but it's impossible to do automatically for more complex view trees.")),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("h3",{id:"gesture"},Object(o.b)("inlineCode",{parentName:"h3"},"gesture")),Object(o.b)("p",null,"A gesture object containing the configuration and callbacks. Can be any of the base gestures (",Object(o.b)("inlineCode",{parentName:"p"},"Tap"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Pan"),", ",Object(o.b)("inlineCode",{parentName:"p"},"LongPress"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Fling"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Pinch"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Rotation"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ForceTouch"),") or any ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/api/gestures/composed-gestures"}),Object(o.b)("inlineCode",{parentName:"a"},"ComposedGesture"))," (",Object(o.b)("inlineCode",{parentName:"p"},"Race"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Simultaneous"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Exclusive"),")."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"GestureDetector will decide whether to use Reanimated to process provided gestures based on callbacks they have. If any of the callbacks is a worklet, tools provided by the Reanimated will be utilized bringing ability to handle gestures synchrously."),Object(o.b)("p",{parentName:"div"},"Starting with Reanimated-2.3.0-beta.4 Gesture Handler will provide a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/api/gestures/state-manager"}),"StateManager")," in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/2.0.0/api/gestures/touch-events"}),"touch events")," that allows for managing the state of the gesture."))))}u.isMDXComponent=!0},280:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,m=u["".concat(i,".").concat(b)]||u[b]||l[b]||o;return n?a.a.createElement(m,s(s({ref:t},p),{},{components:n})):a.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),o=(n(0),n(280)),i={},s={unversionedId:"api/gestures/gesture-detector-functional1",id:"version-2.0.0/api/gestures/gesture-detector-functional1",isDocsHomePage:!1,title:"gesture-detector-functional1",description:"`jsx",source:"@site/versioned_docs/version-2.0.0/api/gestures/gesture-detector-functional1.md",slug:"/api/gestures/gesture-detector-functional1",permalink:"/react-native-gesture-handler/docs/2.0.0/api/gestures/gesture-detector-functional1",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.0.0/api/gestures/gesture-detector-functional1.md",version:"2.0.0"},c=[],p={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"export default function Example() {\n  const tap = Gesture.Tap().onStart(() => {\n    console.log('tap');\n  });\n\n  return (\n    <GestureDetector gesture={tap}>\n      <FunctionalComponent>\n        <View style={styles.box} />\n      </FunctionalComponent>\n    </GestureDetector>\n  );\n}\n\nfunction FunctionalComponent(props) {\n  return <View collapsable={false}>{props.children}</View>;\n}\n")))}d.isMDXComponent=!0}}]);