"use strict";(self.webpackChunkai_meeting_frontend=self.webpackChunkai_meeting_frontend||[]).push([[250],{"./src/shared/ui/Eye/Eye.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AnimatedEye:function(){return AnimatedEye},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Eye_stories}});var react=__webpack_require__("./node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Eye=function(param){var scale=param.scale,_useState=_sliced_to_array((0,react.useState)({x:12,y:15}),2),leftEyePosition=_useState[0],setLeftEyePosition=_useState[1],_useState1=_sliced_to_array((0,react.useState)({x:30,y:15}),2),rightEyePosition=_useState1[0],setRightEyePosition=_useState1[1],svgRef=(0,react.useRef)(null);return(0,react.useEffect)((function(){var handleMouseMove=function(e){if(svgRef.current){var boundingRect=svgRef.current.getBoundingClientRect(),offsetX=e.clientX-boundingRect.left,offsetY=e.clientY-boundingRect.top,clamp=function(value,min,max){return Math.min(Math.max(value,min),max)},clampedX=clamp(offsetX,3.3,11.7),clampedY=clamp(offsetY,10.8,19.2);setLeftEyePosition({x:clampedX,y:clampedY}),setRightEyePosition({x:clampedX+18,y:clampedY})}};return window.addEventListener("mousemove",handleMouseMove),function(){window.removeEventListener("mousemove",handleMouseMove)}}),[]),react.createElement("svg",{ref:svgRef,width:"33",height:"30",viewBox:"0 0 33 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{transform:"scale(".concat(scale,")")}},react.createElement("path",{d:"M14.5 15C14.5 19.0813 13.6718 22.7516 12.3561 25.383C11.0254 28.0443 9.27965 29.5 7.5 29.5C5.72035 29.5 3.97457 28.0443 2.64391 25.383C1.32821 22.7516 0.5 19.0813 0.5 15C0.5 10.9187 1.32821 7.24841 2.64391 4.617C3.97457 1.95569 5.72035 0.5 7.5 0.5C9.27965 0.5 11.0254 1.95569 12.3561 4.617C13.6718 7.24841 14.5 10.9187 14.5 15Z",stroke:"#111111"}),react.createElement("path",{d:"M32.5 15C32.5 19.0813 31.6718 22.7516 30.3561 25.383C29.0254 28.0443 27.2797 29.5 25.5 29.5C23.7203 29.5 21.9746 28.0443 20.6439 25.383C19.3282 22.7516 18.5 19.0813 18.5 15C18.5 10.9187 19.3282 7.24841 20.6439 4.617C21.9746 1.95569 23.7203 0.5 25.5 0.5C27.2797 0.5 29.0254 1.95569 30.3561 4.617C31.6718 7.24841 32.5 10.9187 32.5 15Z",stroke:"#111111"}),react.createElement("circle",{cx:leftEyePosition.x,cy:leftEyePosition.y,r:"3",fill:"#111111",style:{transition:"0.3s ease-out"}}),react.createElement("circle",{cx:rightEyePosition.x,cy:rightEyePosition.y,r:"3",fill:"#111111",style:{transition:"0.3s ease-out"}}))};Eye.__docgenInfo={description:"",methods:[],displayName:"Eye",props:{scale:{required:!1,tsType:{name:"number"},description:""}}};var Eye_stories={title:"Components/Eye",component:Eye,parameters:{layout:"centered"},argTypes:{scale:{control:{type:"range",min:0,max:3,step:.1}}}},AnimatedEye={args:{scale:1}};AnimatedEye.parameters={...AnimatedEye.parameters,docs:{...AnimatedEye.parameters?.docs,source:{originalSource:"{\n  args: {\n    scale: 1\n  }\n}",...AnimatedEye.parameters?.docs?.source}}};const __namedExportsOrder=["AnimatedEye"]}}]);