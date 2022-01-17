(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{211:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(6),r=(n(0),n(280)),o={id:"pan-gh",title:"PanGestureHandler",sidebar_label:"Pan"},l={unversionedId:"api/gesture-handlers/pan-gh",id:"version-1.10.3/api/gesture-handlers/pan-gh",isDocsHomePage:!1,title:"PanGestureHandler",description:"A continuous gesture handler that can recognize a panning (dragging) gesture and track its movement.",source:"@site/versioned_docs/version-1.10.3/api/gesture-handlers/pan-gh.md",slug:"/api/gesture-handlers/pan-gh",permalink:"/react-native-gesture-handler/docs/1.10.3/api/gesture-handlers/pan-gh",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/main/docs/versioned_docs/version-1.10.3/api/gesture-handlers/pan-gh.md",version:"1.10.3",sidebar_label:"Pan",sidebar:"version-1.10.3/docs",previous:{title:"Common handler properties",permalink:"/react-native-gesture-handler/docs/1.10.3/api/gesture-handlers/common-gh"},next:{title:"TapGestureHandler",permalink:"/react-native-gesture-handler/docs/1.10.3/api/gesture-handlers/tap-gh"}},s=[{value:"Custom activation criteria",id:"custom-activation-criteria",children:[]},{value:"Multi touch pan handling",id:"multi-touch-pan-handling",children:[]},{value:"Properties",id:"properties",children:[{value:"<code>minDist</code>",id:"mindist",children:[]},{value:"<code>minPointers</code>",id:"minpointers",children:[]},{value:"<code>maxPointers</code>",id:"maxpointers",children:[]},{value:"<code>activeOffsetX</code>",id:"activeoffsetx",children:[]},{value:"<code>activeOffsetY</code>",id:"activeoffsety",children:[]},{value:"<code>failOffsetY</code>",id:"failoffsety",children:[]},{value:"<code>failOffsetX</code>",id:"failoffsetx",children:[]},{value:"<code>avgTouches</code> (Android only)",id:"avgtouches-android-only",children:[]},{value:"<code>enableTrackpadTwoFingerGesture</code> (iOS only)",id:"enabletrackpadtwofingergesture-ios-only",children:[]}]},{value:"Event data",id:"event-data",children:[{value:"<code>translationX</code>",id:"translationx",children:[]},{value:"<code>translationY</code>",id:"translationy",children:[]},{value:"<code>velocityX</code>",id:"velocityx",children:[]},{value:"<code>velocityY</code>",id:"velocityy",children:[]},{value:"<code>x</code>",id:"x",children:[]},{value:"<code>y</code>",id:"y",children:[]},{value:"<code>absoluteX</code>",id:"absolutex",children:[]},{value:"<code>absoluteY</code>",id:"absolutey",children:[]}]},{value:"Example",id:"example",children:[]}],c={rightToc:s};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A continuous gesture handler that can recognize a panning (dragging) gesture and track its movement."),Object(r.b)("p",null,"The handler ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/1.10.3/state#active"}),"activates")," when a finger is placed on the screen and moved some initial distance."),Object(r.b)("p",null,"Configurations such as a minimum initial distance, specific vertical or horizontal pan detection and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#minPointers"}),"number of fingers")," required for activation (allowing for multifinger swipes) may be specified."),Object(r.b)("p",null,"Gesture callback can be used for continuous tracking of the pan gesture. It provides information about the gesture such as its XY translation from the starting point as well as its instantaneous velocity."),Object(r.b)("p",null,"The handler is implemented using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.apple.com/documentation/uikit/uipangesturerecognizer"}),"UIPanGestureRecognizer")," on iOS and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/blob/main/android/lib/src/main/java/com/swmansion/gesturehandler/PanGestureHandler.kt"}),"PanGestureHandler")," on Android."),Object(r.b)("h2",{id:"custom-activation-criteria"},"Custom activation criteria"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"PanGestureHandler")," component exposes a number of properties that can be used to customize the criteria under which a handler will ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/1.10.3/state#active"}),"activate")," or ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/1.10.3/state#fail"}),"fail")," when recognizing a gesture."),Object(r.b)("p",null,"When more than one of such a property is set, ",Object(r.b)("inlineCode",{parentName:"p"},"PanGestureHandler")," expects all criteria to be met for successful recognition and at most one of the criteria to be overstepped to fail recognition.\nFor example when both ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#mindeltax"}),Object(r.b)("inlineCode",{parentName:"a"},"minDeltaX"))," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#mindeltay"}),Object(r.b)("inlineCode",{parentName:"a"},"minDeltaY"))," are set to 20 we expect the finger to travel by 20 points in both the X and Y axis before the handler activates.\nAnother example would be setting both ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#maxdeltaX"}),Object(r.b)("inlineCode",{parentName:"a"},"maxDeltaX"))," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#maxdeltay"}),Object(r.b)("inlineCode",{parentName:"a"},"maxDeltaY"))," to 20 and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#mindist"}),Object(r.b)("inlineCode",{parentName:"a"},"minDist"))," to 23.\nIn such a case, if we move a finger along the X-axis by 20 points and along the Y-axis by 0 points, the handler will fail even though the finger is still within the bounds of translation along Y-axis."),Object(r.b)("h2",{id:"multi-touch-pan-handling"},"Multi touch pan handling"),Object(r.b)("p",null,"If your app relies on multi touch pan handling this section provides some information how the default behavior differs between the platform and how (if necessary) it can be unified."),Object(r.b)("p",null,"The difference in multi touch pan handling lies in the way how translation properties during the event are being calculated.\nOn iOS the default behavior when more than one finger is placed on the screen is to treat this situation as if only one pointer was placed in the center of mass (average position of all the pointers).\nThis applies also to many platform native components that handle touch even if not primarily interested in multi touch interactions like for example UIScrollView component."),Object(r.b)("p",null,"The default behavior for native components like scroll view, pager views or drawers is different and hence gesture handler defaults to that when it comes to pan handling.\nThe difference is that instead of treating the center of mass of all the fingers placed as a leading pointer it takes the latest placed finger as such.\nThis behavior can be changed on Android using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#avgtouches-android-only"}),Object(r.b)("inlineCode",{parentName:"a"},"avgTouches"))," flag."),Object(r.b)("p",null,'Note that on both Android and iOS when the additional finger is placed on the screen that translation prop is not affected even though the position of the pointer being tracked might have changed.\nTherefore it is safe to rely on translation most of the time as it only reflects the movement that happens regardless of how many fingers are placed on the screen and if that number changes over time.\nIf you wish to track the "center of mass" virtual pointer and account for its changes when the number of finger changes you can use relative or absolute position provided in the event (',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#x"}),Object(r.b)("inlineCode",{parentName:"a"},"x"))," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#y"}),Object(r.b)("inlineCode",{parentName:"a"},"y"))," or ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#absolutex"}),Object(r.b)("inlineCode",{parentName:"a"},"absoluteX"))," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#absolutey"}),Object(r.b)("inlineCode",{parentName:"a"},"absoluteY")),")."),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"common-gh#properties"}),"set of properties inherited from base handler class"),". Below is a list of properties specific to ",Object(r.b)("inlineCode",{parentName:"p"},"PanGestureHandler")," component:"),Object(r.b)("h3",{id:"mindist"},Object(r.b)("inlineCode",{parentName:"h3"},"minDist")),Object(r.b)("p",null,"Minimum distance the finger (or multiple finger) need to travel before the handler ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/1.10.3/state#active"}),"activates"),". Expressed in points."),Object(r.b)("h3",{id:"minpointers"},Object(r.b)("inlineCode",{parentName:"h3"},"minPointers")),Object(r.b)("p",null,"A number of fingers that is required to be placed before handler can ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/1.10.3/state#active"}),"activate"),". Should be a higher or equal to 0 integer."),Object(r.b)("h3",{id:"maxpointers"},Object(r.b)("inlineCode",{parentName:"h3"},"maxPointers")),Object(r.b)("p",null,"When the given number of fingers is placed on the screen and handler hasn't yet ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/1.10.3/state#active"}),"activated")," it will fail recognizing the gesture. Should be a higher or equal to 0 integer."),Object(r.b)("h3",{id:"activeoffsetx"},Object(r.b)("inlineCode",{parentName:"h3"},"activeOffsetX")),Object(r.b)("p",null,"Range along X axis (in points) where fingers travels without activation of handler. Moving outside of this range implies activation of handler. Range can be given as an array or a single number.\nIf range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0.\nIf only one number ",Object(r.b)("inlineCode",{parentName:"p"},"p")," is given a range of ",Object(r.b)("inlineCode",{parentName:"p"},"(-inf, p)")," will be used if ",Object(r.b)("inlineCode",{parentName:"p"},"p")," is higher or equal to 0 and ",Object(r.b)("inlineCode",{parentName:"p"},"(-p, inf)")," otherwise."),Object(r.b)("h3",{id:"activeoffsety"},Object(r.b)("inlineCode",{parentName:"h3"},"activeOffsetY")),Object(r.b)("p",null,"Range along Y axis (in points) where fingers travels without activation of handler. Moving outside of this range implies activation of handler. Range can be given as an array or a single number.\nIf range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0.\nIf only one number ",Object(r.b)("inlineCode",{parentName:"p"},"p")," is given a range of ",Object(r.b)("inlineCode",{parentName:"p"},"(-inf, p)")," will be used if ",Object(r.b)("inlineCode",{parentName:"p"},"p")," is higher or equal to 0 and ",Object(r.b)("inlineCode",{parentName:"p"},"(-p, inf)")," otherwise."),Object(r.b)("h3",{id:"failoffsety"},Object(r.b)("inlineCode",{parentName:"h3"},"failOffsetY")),Object(r.b)("p",null,"When the finger moves outside this range (in points) along Y axis and handler hasn't yet activated it will fail recognizing the gesture. Range can be given as an array or a single number.\nIf range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0.\nIf only one number ",Object(r.b)("inlineCode",{parentName:"p"},"p")," is given a range of ",Object(r.b)("inlineCode",{parentName:"p"},"(-inf, p)")," will be used if ",Object(r.b)("inlineCode",{parentName:"p"},"p")," is higher or equal to 0 and ",Object(r.b)("inlineCode",{parentName:"p"},"(-p, inf)")," otherwise."),Object(r.b)("h3",{id:"failoffsetx"},Object(r.b)("inlineCode",{parentName:"h3"},"failOffsetX")),Object(r.b)("p",null,"When the finger moves outside this range (in points) along X axis and handler hasn't yet activated it will fail recognizing the gesture. Range can be given as an array or a single number.\nIf range is set as an array, first value must be lower or equal to 0, a the second one higher or equal to 0.\nIf only one number ",Object(r.b)("inlineCode",{parentName:"p"},"p")," is given a range of ",Object(r.b)("inlineCode",{parentName:"p"},"(-inf, p)")," will be used if ",Object(r.b)("inlineCode",{parentName:"p"},"p")," is higher or equal to 0 and ",Object(r.b)("inlineCode",{parentName:"p"},"(-p, inf)")," otherwise."),Object(r.b)("h3",{id:"avgtouches-android-only"},Object(r.b)("inlineCode",{parentName:"h3"},"avgTouches")," (Android only)"),Object(r.b)("h3",{id:"enabletrackpadtwofingergesture-ios-only"},Object(r.b)("inlineCode",{parentName:"h3"},"enableTrackpadTwoFingerGesture")," (iOS only)"),Object(r.b)("p",null,"Enables two-finger gestures on supported devices, for example iPads with trackpads. If not enabled the gesture will require click + drag, with enableTrackpadTwoFingerGesture swiping with two fingers will also trigger the gesture."),Object(r.b)("h2",{id:"event-data"},"Event data"),Object(r.b)("p",null,"See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"common-gh#event-data"}),"set of event attributes from base handler class"),". Below is a list of gesture event attributes specific to ",Object(r.b)("inlineCode",{parentName:"p"},"PanGestureHandler"),":"),Object(r.b)("h3",{id:"translationx"},Object(r.b)("inlineCode",{parentName:"h3"},"translationX")),Object(r.b)("p",null,"Translation of the pan gesture along X axis accumulated over the time of the gesture. The value is expressed in the point units."),Object(r.b)("h3",{id:"translationy"},Object(r.b)("inlineCode",{parentName:"h3"},"translationY")),Object(r.b)("p",null,"Translation of the pan gesture along Y axis accumulated over the time of the gesture. The value is expressed in the point units."),Object(r.b)("h3",{id:"velocityx"},Object(r.b)("inlineCode",{parentName:"h3"},"velocityX")),Object(r.b)("p",null,"Velocity of the pan gesture along the X axis in the current moment. The value is expressed in point units per second."),Object(r.b)("h3",{id:"velocityy"},Object(r.b)("inlineCode",{parentName:"h3"},"velocityY")),Object(r.b)("p",null,"Velocity of the pan gesture along the Y axis in the current moment. The value is expressed in point units per second."),Object(r.b)("h3",{id:"x"},Object(r.b)("inlineCode",{parentName:"h3"},"x")),Object(r.b)("p",null,"X coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the handler. Expressed in point units."),Object(r.b)("h3",{id:"y"},Object(r.b)("inlineCode",{parentName:"h3"},"y")),Object(r.b)("p",null,"Y coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the handler. Expressed in point units."),Object(r.b)("h3",{id:"absolutex"},Object(r.b)("inlineCode",{parentName:"h3"},"absoluteX")),Object(r.b)("p",null,"X coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the root view. The value is expressed in point units. It is recommended to use it instead of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#x"}),Object(r.b)("inlineCode",{parentName:"a"},"x"))," in cases when the original view can be transformed as an effect of the gesture."),Object(r.b)("h3",{id:"absolutey"},Object(r.b)("inlineCode",{parentName:"h3"},"absoluteY")),Object(r.b)("p",null,"Y coordinate of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the root view. The value is expressed in point units. It is recommended to use it instead of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#y"}),Object(r.b)("inlineCode",{parentName:"a"},"y"))," in cases when the original view can be transformed as an effect of the gesture."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("p",null,"See the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/blob/main/example/src/basic/draggable/index.tsx"}),"draggable example")," from ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"../../example"}),"GestureHandler Example App")," or view it directly on your phone by visiting ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://snack.expo.io/@adamgrzybowski/react-native-gesture-handler-demo"}),"our expo demo"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const circleRadius = 30;\nclass Circle extends Component {\n  _touchX = new Animated.Value(windowWidth / 2 - circleRadius);\n  _onPanGestureEvent = Animated.event([{ nativeEvent: { x: this._touchX } }], {\n    useNativeDriver: true,\n  });\n  render() {\n    return (\n      <PanGestureHandler onGestureEvent={this._onPanGestureEvent}>\n        <Animated.View\n          style={{\n            height: 150,\n            justifyContent: 'center',\n          }}>\n          <Animated.View\n            style={[\n              {\n                backgroundColor: '#42a5f5',\n                borderRadius: circleRadius,\n                height: circleRadius * 2,\n                width: circleRadius * 2,\n              },\n              {\n                transform: [\n                  {\n                    translateX: Animated.add(\n                      this._touchX,\n                      new Animated.Value(-circleRadius)\n                    ),\n                  },\n                ],\n              },\n            ]}\n          />\n        </Animated.View>\n      </PanGestureHandler>\n    );\n  }\n}\n")))}d.isMDXComponent=!0},280:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,u=p["".concat(o,".").concat(h)]||p[h]||b[h]||r;return n?i.a.createElement(u,l(l({ref:t},c),{},{components:n})):i.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);