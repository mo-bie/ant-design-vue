webpackJsonp([51],{1657:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=t(2156),a=function(e){return e&&e.__esModule?e:{default:e}}(n),i={cn:'# 图标 Icon\n        语义化的矢量图形。\n        ## 图标的命名规范\n        我们为每个图标赋予了语义化的命名，命名规则如下:\n        - 实心和描线图标保持同名，用 ` - o` 来区分，比如 `question-circle`（实心） 和 `question-circle-o`（描线）；\n        - 命名顺序：`[图标名]-[形状?]-[描线?]-[方向?]`。\n        > `?` 为可选。\n\n        完整的图标设计规范请访问 [图标规范](/docs/spec/icon)。\n        ## 如何使用\n        使用 `<a-icon />` 标签声明组件，指定图标对应的 type 属性，示例代码如下:\n        ```html\n        <a-icon type="link" />\n        ```\n        ## 本地部署\n        图标默认托管在 [iconfont.cn](http://iconfont.cn)，默认公网可访问。如需本地部署，可参考 [示例](https://github.com/ant-design/antd-init/tree/master/examples/local-iconfont)。\n        ## 图标列表\n        > 点击图标复制代码。\n      ',us:'# Icon\n        Semantic vector graphics.\n        ## Icons naming convention\n        We provide semantic name for every icon, and naming rules are as follows:\n        - Scanning line icon has the similar name with its solid one，but it\'s distinguished by `-o`, for example, `question-circle` (a full circle) and `question-circle-o` (an empty circle);\n        - Naming sequence：`[name]-[shape?]-[outline?]-[direction?]`.\n        > `?` means is optional.\n        See more design detail at [here](/docs/spec/icon).\n        ## How To Use\n        Use tag <a-icon /> to create an icon and set its type in the type prop, for example:\n        ```html\n        <a-icon type="link" />\n        ```\n        ## Local deployment\n        By default, icons are deployed at [iconfont.cn](http://iconfont.cn), publicly available repository of a huge set of icons. In case you need to use a locally deployed version of the icon font, you can refer to [this example](https://github.com/ant-design/antd-init/tree/master/examples/local-iconfont)。\n        ## List of icons\n        > Click the icon and copy the code。\n      '};o.default={category:"Components",type:"General",title:"Icon",subtitle:"图标",render:function(){var e=arguments[0];return e("div",[e("md",{class:"api-container",attrs:{cn:i.cn,us:i.us}}),e("md",{attrs:{cn:"### 方向性图标",us:"### Directional Icons"}}),e(a.default,{class:"icons",attrs:{catigory:"direction"}}),e("md",{attrs:{cn:"### 提示建议性图标",us:"### Suggested Icons"}}),e(a.default,{class:"icons",attrs:{catigory:"suggestion"}}),e("md",{attrs:{cn:"### 网站通用图标",us:"### Application Icons"}}),e(a.default,{class:"icons",attrs:{catigory:"other"}}),e("md",{attrs:{cn:"### 品牌和标识",us:"### Brand and Logos"}}),e(a.default,{class:"icons",attrs:{catigory:"logo"}})])}}},1658:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=t(2157),a=function(e){return e&&e.__esModule?e:{default:e}}(n);o.default={props:{catigory:String},data:function(){return{icons:{direction:["step-backward","step-forward","fast-backward","fast-forward","shrink","arrows-alt","down","up","left","right","caret-up","caret-down","caret-left","caret-right","up-circle","down-circle","left-circle","right-circle","up-circle-o","down-circle-o","right-circle-o","left-circle-o","double-right","double-left","verticle-left","verticle-right","forward","backward","rollback","enter","retweet","swap","swap-left","swap-right","arrow-up","arrow-down","arrow-left","arrow-right","play-circle","play-circle-o","up-square","down-square","left-square","right-square","up-square-o","down-square-o","left-square-o","right-square-o","login","logout","menu-fold","menu-unfold"],suggestion:["question","question-circle-o","question-circle","plus","plus-circle-o","plus-circle","pause","pause-circle-o","pause-circle","minus","minus-circle-o","minus-circle","plus-square","plus-square-o","minus-square","minus-square-o","info","info-circle-o","info-circle","exclamation","exclamation-circle-o","exclamation-circle","close","close-circle","close-circle-o","close-square","close-square-o","check","check-circle","check-circle-o","check-square","check-square-o","clock-circle-o","clock-circle","warning"],logo:["android","android-o","apple","apple-o","windows","windows-o","ie","chrome","github","aliwangwang","aliwangwang-o","dingding","dingding-o","weibo-square","weibo-circle","taobao-circle","html5","weibo","twitter","wechat","youtube","alipay-circle","taobao","skype","qq","medium-workmark","gitlab","medium","linkedin","google-plus","dropbox","facebook","codepen","amazon","google","codepen-circle","alipay","ant-design","aliyun","zhihu","slack","slack-square","behance","behance-square","dribbble","dribbble-square","instagram","yuque"],other:["lock","unlock","area-chart","pie-chart","bar-chart","dot-chart","bars","book","calendar","cloud","cloud-download","code","code-o","copy","credit-card","delete","desktop","download","edit","ellipsis","file","file-text","file-unknown","file-pdf","file-word","file-excel","file-jpg","file-ppt","file-markdown","file-add","folder","folder-open","folder-add","hdd","frown","frown-o","meh","meh-o","smile","smile-o","inbox","laptop","appstore-o","appstore","line-chart","link","mail","mobile","notification","paper-clip","picture","poweroff","reload","search","setting","share-alt","shopping-cart","tablet","tag","tag-o","tags","tags-o","to-top","upload","user","video-camera","home","loading","loading-3-quarters","cloud-upload-o","cloud-download-o","cloud-upload","cloud-o","star-o","star","heart-o","heart","environment","environment-o","eye","eye-o","camera","camera-o","save","team","solution","phone","filter","exception","export","customer-service","qrcode","scan","like","like-o","dislike","dislike-o","message","pay-circle","pay-circle-o","calculator","pushpin","pushpin-o","bulb","select","switcher","rocket","bell","disconnect","database","compass","barcode","hourglass","key","flag","layout","printer","sound","usb","skin","tool","sync","wifi","car","schedule","user-add","user-delete","usergroup-add","usergroup-delete","man","woman","shop","gift","idcard","medicine-box","red-envelope","coffee","copyright","trademark","safety","wallet","bank","trophy","contacts","global","shake","api","fork","dashboard","form","table","profile"]},newIcons:["zhihu","file-markdown","slack","slack-square","behance","behance-square","dribbble","dribbble-square","instagram","yuque"]}},render:function(){var e=this,o=arguments[0],t=this.$props.catigory;return o("ul",{class:{"anticons-list":!0,clearfix:!0}},[this.icons[t].map(function(t){return o(a.default,{key:t,attrs:{type:t,isNew:e.newIcons.indexOf(t)>=0}})})])}}},1659:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=t(6),a=function(e){return e&&e.__esModule?e:{default:e}}(n);o.default={mixins:[a.default],props:{type:String,isNew:Boolean},data:function(){return{justCopied:!1,text:'<a-icon type="'+this.type+'" />'}},methods:{onCopied:function(){var e=this;this.setState({justCopied:!0},function(){setTimeout(function(){e.setState({justCopied:!1})},2e3)})}}}},2156:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=t(1658),a=t.n(n);for(var i in n)"default"!==i&&function(e){t.d(o,e,function(){return n[e]})}(i);var r=t(58),c=r(a.a,null,!1,null,null,null);o.default=c.exports},2157:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=t(1659),a=t.n(n);for(var i in n)"default"!==i&&function(e){t.d(o,e,function(){return n[e]})}(i);var r=t(2158),c=t(58),l=c(a.a,r.a,!1,null,null,null);o.default=l.exports},2158:function(e,o,t){"use strict";var n=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("li",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.text,expression:"text",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopied,expression:"onCopied",arg:"success"}],class:e.justCopied?"copied":""},[t("a-icon",{attrs:{type:e.type}}),e._v(" "),t("span",{staticClass:"anticon-class"},[t("a-badge",{attrs:{dot:e.isNew}},[e._v("\n      "+e._s(e.type)+"\n    ")])],1)],1)},a=[],i={render:n,staticRenderFns:a};o.a=i},618:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=t(1657),a=t.n(n);for(var i in n)"default"!==i&&function(e){t.d(o,e,function(){return n[e]})}(i);var r=t(58),c=r(a.a,null,!1,null,null,null);o.default=c.exports}});