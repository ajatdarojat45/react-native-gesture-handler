(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{280:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),l=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=r,m=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return t?a.a.createElement(m,c(c({ref:n},u),{},{components:t})):a.a.createElement(m,c({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(2),a=t(6),o=(t(0),t(280)),i={},c={unversionedId:"manual-gestures/step3",id:"version-2.0.0/manual-gestures/step3",isDocsHomePage:!1,title:"step3",description:"`jsx",source:"@site/versioned_docs/version-2.0.0/manual-gestures/step3.md",slug:"/manual-gestures/step3",permalink:"/react-native-gesture-handler/docs/2.0.0/manual-gestures/step3",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-2.0.0/manual-gestures/step3.md",version:"2.0.0"},s=[],u={rightToc:s};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"export default function Example() {\n  const trackedPointers: Animated.SharedValue<Pointer>[] = [];\n  const active = useSharedValue(false);\n\n  for (let i = 0; i < 12; i++) {\n    trackedPointers[i] =\n      useSharedValue <\n      Pointer >\n      {\n        visible: false,\n        x: 0,\n        y: 0,\n      };\n  }\n\n  const gesture = Gesture.Manual();\n\n  return (\n    <GestureDetector gesture={gesture}>\n      <Animated.View style={{ flex: 1 }}>\n        {trackedPointers.map((pointer, index) => (\n          <PointerElement pointer={pointer} active={active} key={index} />\n        ))}\n      </Animated.View>\n    </GestureDetector>\n  );\n}\n")))}l.isMDXComponent=!0}}]);