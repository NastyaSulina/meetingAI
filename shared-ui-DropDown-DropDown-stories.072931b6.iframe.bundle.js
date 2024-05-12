/*! For license information please see shared-ui-DropDown-DropDown-stories.072931b6.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkai_meeting_frontend=self.webpackChunkai_meeting_frontend||[]).push([[587],{"./src/shared/ui/DropDown/DropDown.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return DropDown_stories}});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),DropDown_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/DropDown/DropDown.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(DropDown_module.Z,options);var DropDown_DropDown_module=DropDown_module.Z&&DropDown_module.Z.locals?DropDown_module.Z.locals:void 0;function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var DropDown=function(param){var obj,key,value,header=param.header,_param_children=param.children,children=void 0===_param_children?"":_param_children,number=param.number,_useState=_sliced_to_array((0,react.useState)(!1),2),isOpen=_useState[0],setIsOpen=_useState[1];return react.createElement("div",{className:classnames_default()(DropDown_DropDown_module.root)},react.createElement("div",{className:DropDown_DropDown_module.wrapper,"data-aos":"slide-right"},react.createElement("a",{className:classnames_default()(DropDown_DropDown_module.top),type:"button",onClick:function(){setIsOpen(!isOpen)}},react.createElement("div",null,react.createElement("span",{className:classnames_default()(DropDown_DropDown_module.number)},"".concat(isOpen?"↓":"→"," 0").concat(number)),react.createElement("span",{className:classnames_default()(DropDown_DropDown_module.header)},header)),react.createElement("span",{className:classnames_default()(DropDown_DropDown_module.openButton)},isOpen?"Закрыть":"Открыть")),react.createElement("div",{className:classnames_default()(DropDown_DropDown_module.content,(obj={},key=DropDown_DropDown_module.open,value=isOpen,key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj))},children)))};DropDown.__docgenInfo={description:"",methods:[],displayName:"DropDown",props:{header:{required:!0,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"''",computed:!1}},number:{required:!0,tsType:{name:"number"},description:""}}};var DropDown_stories={title:"Components/DropDown",component:DropDown,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{header:{control:"text"},number:{control:{type:"range",min:1,max:9}}}},Default={args:{header:"Полная текстовая расшифровка",number:3,children:""}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    header: 'Полная текстовая расшифровка',\n    number: 3,\n    children: ''\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/DropDown/DropDown.module.scss":function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Sjrpie0uhNfLslQZksrJ{width:100%;border-bottom:1px solid var(--Basic-Black)}.Sjrpie0uhNfLslQZksrJ .H006vLrQ6CHMdQrQIli9{display:flex;flex-direction:column;box-sizing:border-box;width:100%;max-width:1020px;margin:0 auto;padding:0 28px}.Sjrpie0uhNfLslQZksrJ .oB_Tuav77QNaIZ_Melm3{display:flex;justify-content:space-between;align-items:center;gap:40px;height:96px}.Sjrpie0uhNfLslQZksrJ .oB_Tuav77QNaIZ_Melm3>div:first-child{display:flex;align-items:center;gap:40px}.Sjrpie0uhNfLslQZksrJ .oB_Tuav77QNaIZ_Melm3 .Yf8d50fjaxSul_EK0Y5O{cursor:pointer;text-transform:uppercase;font-size:12px;font-weight:500;line-height:15px;color:var(--Basic-Black);border:0;background-color:rgba(0,0,0,0)}.Sjrpie0uhNfLslQZksrJ .oB_Tuav77QNaIZ_Melm3 .Yf8d50fjaxSul_EK0Y5O:hover,.Sjrpie0uhNfLslQZksrJ .oB_Tuav77QNaIZ_Melm3 .Yf8d50fjaxSul_EK0Y5O:active{color:var(--Orange)}.Sjrpie0uhNfLslQZksrJ .oB_Tuav77QNaIZ_Melm3 .Yf8d50fjaxSul_EK0Y5O:disabled{color:var(--Inactive-Grey)}.Sjrpie0uhNfLslQZksrJ .oB_Tuav77QNaIZ_Melm3 .BFbZdsybLRBvdlRCh1Iu{font-size:32px;font-weight:500;line-height:40px}@media screen and (max-width: 768px){.Sjrpie0uhNfLslQZksrJ .oB_Tuav77QNaIZ_Melm3 .BFbZdsybLRBvdlRCh1Iu{font-size:24px;line-height:21.6px}}.Sjrpie0uhNfLslQZksrJ .nZdN5lpeB4tnGrEXv15g{overflow:hidden;height:0;padding:0 22px;transition:height .3s ease}.Sjrpie0uhNfLslQZksrJ .RmsMEvMFUswgcQaFdNpB{height:auto;padding-bottom:40px}@media screen and (max-width: 768px){.Sjrpie0uhNfLslQZksrJ .H006vLrQ6CHMdQrQIli9{padding:0 20px}.Sjrpie0uhNfLslQZksrJ .nZdN5lpeB4tnGrEXv15g{padding:0}.Sjrpie0uhNfLslQZksrJ .RmsMEvMFUswgcQaFdNpB{padding-bottom:40px}}","",{version:3,sources:["webpack://./src/shared/ui/DropDown/DropDown.module.scss"],names:[],mappings:"AAEA,sBACI,UAAA,CAEA,0CAAA,CAEA,4CACI,YAAA,CACA,qBAAA,CAEA,qBAAA,CACA,UAAA,CACA,gBAAA,CACA,aAAA,CACA,cAAA,CAGJ,4CACI,YAAA,CACA,6BAAA,CACA,kBAAA,CACA,QAAA,CAEA,WAAA,CAEA,4DACI,YAAA,CACA,kBAAA,CACA,QAAA,CAGJ,kEACI,cAAA,CACA,wBAAA,CAEA,cAAA,CACA,eAAA,CACA,gBAAA,CAEA,wBAAA,CACA,QAAA,CACA,8BAAA,CACA,iJAEI,mBAAA,CAGJ,2EACI,0BAAA,CAIR,kEACI,cAAA,CACA,eAAA,CACA,gBAAA,CAEA,qCALJ,kEAMQ,cAAA,CACA,kBAAA,CAAA,CAKZ,4CACI,eAAA,CAEA,QAAA,CACA,cAAA,CAEA,0BAAA,CAGJ,4CACI,WAAA,CACA,mBAAA,CAGJ,qCACI,4CACI,cAAA,CAGJ,4CACI,SAAA,CAGJ,4CACI,mBAAA,CAAA",sourcesContent:["@import '../../../app/variables';\n\n.root {\n    width: 100%;\n\n    border-bottom: 1px solid var(--Basic-Black);\n\n    .wrapper {\n        display: flex;\n        flex-direction: column;\n\n        box-sizing: border-box;\n        width: 100%;\n        max-width: 1020px;\n        margin: 0 auto;\n        padding: 0 28px;\n    }\n\n    .top {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        gap: 40px;\n\n        height: 96px;\n\n        & > div:first-child {\n            display: flex;\n            align-items: center;\n            gap: 40px;\n        }\n\n        .openButton {\n            cursor: pointer;\n            text-transform: uppercase;\n\n            font-size: 12px;\n            font-weight: 500;\n            line-height: 15px;\n\n            color: var(--Basic-Black);\n            border: 0;\n            background-color: transparent;\n            &:hover,\n            &:active {\n                color: var(--Orange);\n            }\n\n            &:disabled {\n                color: var(--Inactive-Grey);\n            }\n        }\n\n        .header {\n            font-size: 32px;\n            font-weight: 500;\n            line-height: 40px;\n\n            @media screen and (max-width: $maxWidthTablet) {\n                font-size: 24px;\n                line-height: 21.6px;\n            }\n        }\n    }\n\n    .content {\n        overflow: hidden;\n\n        height: 0;\n        padding: 0 22px;\n\n        transition: height 0.3s ease;\n    }\n\n    .open {\n        height: auto;\n        padding-bottom: 40px;\n    }\n\n    @media screen and (max-width: $maxWidthTablet) {\n        .wrapper {\n            padding: 0 20px;\n        }\n\n        .content {\n            padding: 0;\n        }\n\n        .open {\n            padding-bottom: 40px;\n        }\n    }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"Sjrpie0uhNfLslQZksrJ",wrapper:"H006vLrQ6CHMdQrQIli9",top:"oB_Tuav77QNaIZ_Melm3",openButton:"Yf8d50fjaxSul_EK0Y5O",header:"BFbZdsybLRBvdlRCh1Iu",content:"nZdN5lpeB4tnGrEXv15g",open:"RmsMEvMFUswgcQaFdNpB"},__webpack_exports__.Z=___CSS_LOADER_EXPORT___}}]);