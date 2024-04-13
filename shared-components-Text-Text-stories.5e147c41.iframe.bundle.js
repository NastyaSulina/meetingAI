"use strict";(self.webpackChunkai_meeting_frontend=self.webpackChunkai_meeting_frontend||[]).push([[418],{"./src/shared/components/Text/Text.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AdditionalText:function(){return AdditionalText},BPHighlights:function(){return BPHighlights},BodyParagraph:function(){return BodyParagraph},Captions:function(){return Captions},Header:function(){return Header},Subhead:function(){return Subhead},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Text_stories}});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Text_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/components/Text/Text.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Text_module.Z,options);var TextType,Text_Text_module=Text_module.Z&&Text_module.Z.locals?Text_module.Z.locals:void 0;!function(TextType){TextType.header="header",TextType.subhead="subhead",TextType.additionalText="additionalText",TextType.captions="captions",TextType.bodyParagraph="bodyParagraph",TextType.bPHighlights="bPHighlights"}(TextType||(TextType={}));var Text=function(param){var _param_text=param.text,text=void 0===_param_text?"":_param_text,textType=param.textType;return react.createElement("span",{className:(Text_Text_module.root,Text_Text_module[textType])},text)};Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},textType:{required:!0,tsType:{name:"TextType"},description:""}}};var Text_stories={title:"Components/Text",component:Text,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{text:{control:"text"},textType:{control:"select",options:TextType}}},Header={args:{text:"По итогам встречи с Points вы получите информацию о прошедшем zoom звонке. Перетаскивайте карточки, чтобы узнать, что входит в резюме каждой конференции!",textType:TextType.header}},Subhead={args:{text:"По итогам встречи с Points вы получите информацию о прошедшем zoom звонке. Перетаскивайте карточки, чтобы узнать, что входит в резюме каждой конференции!",textType:TextType.subhead}},BPHighlights={args:{text:"По итогам встречи с Points вы получите информацию о прошедшем zoom звонке. Перетаскивайте карточки, чтобы узнать, что входит в резюме каждой конференции!",textType:TextType.bPHighlights}},BodyParagraph={args:{text:"По итогам встречи с Points вы получите информацию о прошедшем zoom звонке. Перетаскивайте карточки, чтобы узнать, что входит в резюме каждой конференции!",textType:TextType.bodyParagraph}},Captions={args:{text:"По итогам встречи с Points вы получите информацию о прошедшем zoom звонке. Перетаскивайте карточки, чтобы узнать, что входит в резюме каждой конференции!",textType:TextType.captions}},AdditionalText={args:{text:"По итогам встречи с Points вы получите информацию о прошедшем zoom звонке. Перетаскивайте карточки, чтобы узнать, что входит в резюме каждой конференции!",textType:TextType.additionalText}};Header.parameters={...Header.parameters,docs:{...Header.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'По итогам встречи с Points вы получите информацию о прошедшем zoom звонке. Перетаскивайте карточки, чтобы узнать, что входит в резюме каждой конференции!',\n    textType: TextType.header\n  }\n}",...Header.parameters?.docs?.source}}},Subhead.parameters={...Subhead.parameters,docs:{...Subhead.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'По итогам встречи с Points вы получите информацию о прошедшем zoom звонке. Перетаскивайте карточки, чтобы узнать, что входит в резюме каждой конференции!',\n    textType: TextType.subhead\n  }\n}",...Subhead.parameters?.docs?.source}}},BPHighlights.parameters={...BPHighlights.parameters,docs:{...BPHighlights.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'По итогам встречи с Points вы получите информацию о прошедшем zoom звонке. Перетаскивайте карточки, чтобы узнать, что входит в резюме каждой конференции!',\n    textType: TextType.bPHighlights\n  }\n}",...BPHighlights.parameters?.docs?.source}}},BodyParagraph.parameters={...BodyParagraph.parameters,docs:{...BodyParagraph.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'По итогам встречи с Points вы получите информацию о прошедшем zoom звонке. Перетаскивайте карточки, чтобы узнать, что входит в резюме каждой конференции!',\n    textType: TextType.bodyParagraph\n  }\n}",...BodyParagraph.parameters?.docs?.source}}},Captions.parameters={...Captions.parameters,docs:{...Captions.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'По итогам встречи с Points вы получите информацию о прошедшем zoom звонке. Перетаскивайте карточки, чтобы узнать, что входит в резюме каждой конференции!',\n    textType: TextType.captions\n  }\n}",...Captions.parameters?.docs?.source}}},AdditionalText.parameters={...AdditionalText.parameters,docs:{...AdditionalText.parameters?.docs,source:{originalSource:"{\n  args: {\n    text: 'По итогам встречи с Points вы получите информацию о прошедшем zoom звонке. Перетаскивайте карточки, чтобы узнать, что входит в резюме каждой конференции!',\n    textType: TextType.additionalText\n  }\n}",...AdditionalText.parameters?.docs?.source}}};const __namedExportsOrder=["Header","Subhead","BPHighlights","BodyParagraph","Captions","AdditionalText"]},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/shared/components/Text/Text.module.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Qz4ikHzsHONlaMy558_p{font-size:32px;font-weight:500;font-style:normal;line-height:125%}.ftCJK_wbQq1HosC_ANpd{font-size:17px;font-weight:500;font-style:normal;line-height:100%}.gM54eydJq3O6Yg3OYFch{font-size:12px;font-weight:450;font-style:normal;line-height:125%}.jILaxwrGxPSW8GYjecGg{text-transform:uppercase;font-size:10px;font-weight:450;font-style:normal;line-height:125%}.b4g7FuL26ySaWjZ463Zx{font-size:15px;font-weight:450;font-style:normal;line-height:125%}.m6Krxbgo9bouTSJEYwxu{font-size:15px;font-weight:700;font-style:normal;line-height:125%}","",{version:3,sources:["webpack://./src/shared/components/Text/Text.module.scss"],names:[],mappings:"AAAA,sBACI,cAAA,CACA,eAAA,CACA,iBAAA,CACA,gBAAA,CAGJ,sBACI,cAAA,CACA,eAAA,CACA,iBAAA,CACA,gBAAA,CAGJ,sBACI,cAAA,CACA,eAAA,CACA,iBAAA,CACA,gBAAA,CAGJ,sBACI,wBAAA,CAEA,cAAA,CACA,eAAA,CACA,iBAAA,CACA,gBAAA,CAGJ,sBACI,cAAA,CACA,eAAA,CACA,iBAAA,CACA,gBAAA,CAGJ,sBACI,cAAA,CACA,eAAA,CACA,iBAAA,CACA,gBAAA",sourcesContent:[".header {\n    font-size: 32px;\n    font-weight: 500;\n    font-style: normal;\n    line-height: 125%;\n}\n\n.subhead {\n    font-size: 17px;\n    font-weight: 500;\n    font-style: normal;\n    line-height: 100%;\n}\n\n.additionalText {\n    font-size: 12px;\n    font-weight: 450;\n    font-style: normal;\n    line-height: 125%;\n}\n\n.captions {\n    text-transform: uppercase;\n\n    font-size: 10px;\n    font-weight: 450;\n    font-style: normal;\n    line-height: 125%;\n}\n\n.bodyParagraph {\n    font-size: 15px;\n    font-weight: 450;\n    font-style: normal;\n    line-height: 125%;\n}\n\n.bPHighlights {\n    font-size: 15px;\n    font-weight: 700;\n    font-style: normal;\n    line-height: 125%;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={header:"Qz4ikHzsHONlaMy558_p",subhead:"ftCJK_wbQq1HosC_ANpd",additionalText:"gM54eydJq3O6Yg3OYFch",captions:"jILaxwrGxPSW8GYjecGg",bodyParagraph:"b4g7FuL26ySaWjZ463Zx",bPHighlights:"m6Krxbgo9bouTSJEYwxu"},__webpack_exports__.Z=___CSS_LOADER_EXPORT___}}]);