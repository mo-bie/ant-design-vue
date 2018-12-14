webpackJsonp([44],{1640:function(a,s,t){"use strict";function e(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(s,"__esModule",{value:!0});var r=t(1998),n=e(r),l=t(2001),v=e(l),_=t(2004),p=e(_),i=t(2007),c=e(i),m=t(2010),h=e(m),o=t(2013),u=e(o),d={cn:"# Breadcrumb面包屑\n         显示当前页面在系统层级结构中的位置，并能向上返回。\n       ## 何时使用\n       - 当系统拥有超过两级以上的层级结构时；\n       - 当需要告知用户『你在哪里』时；\n       -  当需要向上导航的功能时。\n       ## 代码演示\n      ",us:"# Breadcrumb\n       A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.\n       ## When to use\n       - When the system has more than two layers in a hierarchy.\n       - When you need to inform the user of where they are.\n       - When the user may need to navigate back to a higher level.\n       - When the application has multi-layer architecture.\n       ## Examples\n      "};s.default={category:"Components",subtitle:"面包屑",type:"Navigation",title:"Breadcrumb",render:function(){var a=arguments[0];return a("div",[a("md",{attrs:{cn:d.cn,us:d.us}}),a(n.default),a(v.default),a(p.default),a(c.default),a("api",[a(u.default,{slot:"cn"}),a(h.default)])])}}},1641:function(a,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{basePath:"/"+this.$route.params.lang+"/components/breadcrumb",routes:[{path:"index",breadcrumbName:"首页"},{path:"first",breadcrumbName:"一级面包屑"},{path:"second",breadcrumbName:"当前页面"}]}}}},1998:function(a,s,t){a.exports=t(1999)},1999:function(a,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=t(2e3),r=t(58),n=r(null,e.a,!1,null,null,null);s.default=n.exports},2e3:function(a,s,t){"use strict";var e=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",[[t("demo-box",{attrs:{jsfiddle:{html:'\n  <a-breadcrumb>\n    <a-breadcrumb-item>Home</a-breadcrumb-item>\n    <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>\n    <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>\n    <a-breadcrumb-item>An Application</a-breadcrumb-item>\n  </a-breadcrumb>\n',script:null,style:null,us:"\n  #### Basic usage \n  The simplest use\n",cn:"\n  #### 基本\n  最简单的用法\n",sourceCode:'<template>\n  <a-breadcrumb>\n    <a-breadcrumb-item>Home</a-breadcrumb-item>\n    <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>\n    <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>\n    <a-breadcrumb-item>An Application</a-breadcrumb-item>\n  </a-breadcrumb>\n</template>\n'}}},[t("template",{slot:"component"},[t("a-breadcrumb",[t("a-breadcrumb-item",[a._v("Home")]),a._v(" "),t("a-breadcrumb-item",[t("a",{attrs:{href:""}},[a._v("Application Center")])]),a._v(" "),t("a-breadcrumb-item",[t("a",{attrs:{href:""}},[a._v("Application List")])]),a._v(" "),t("a-breadcrumb-item",[a._v("An Application")])],1)],1),a._v(" "),t("template",{slot:"description"},[t("h4",{attrs:{id:"基本"}},[a._v("基本 "),t("a",{staticClass:"anchor",attrs:{href:"#基本","aria-hidden":"true"}},[a._v("#")])]),a._v(" "),t("p",[a._v("最简单的用法")])]),a._v(" "),t("template",{slot:"us-description"},[t("h4",{attrs:{id:"Basic-usage"}},[a._v("Basic usage "),t("a",{staticClass:"anchor",attrs:{href:"#Basic-usage","aria-hidden":"true"}},[a._v("#")])]),a._v(" "),t("p",[a._v("The simplest use")])]),a._v(" "),t("template",{slot:"code"},[t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("template")]),a._v(">")]),a._v("\n  "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb")]),a._v(">")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(">")]),a._v("Home"),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(">")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(">")]),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("href")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('""')]),a._v(">")]),a._v("Application Center"),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("a")]),a._v(">")]),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(">")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(">")]),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("href")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('""')]),a._v(">")]),a._v("Application List"),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("a")]),a._v(">")]),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(">")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(">")]),a._v("An Application"),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(">")]),a._v("\n  "),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb")]),a._v(">")]),a._v("\n"),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("template")]),a._v(">")]),a._v("\n")])])])],2)]],2)},r=[],n={render:e,staticRenderFns:r};s.a=n},2001:function(a,s,t){a.exports=t(2002)},2002:function(a,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=t(2003),r=t(58),n=r(null,e.a,!1,null,null,null);s.default=n.exports},2003:function(a,s,t){"use strict";var e=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",[[t("demo-box",{attrs:{jsfiddle:{html:'\n<a-breadcrumb>\n  <a-breadcrumb-item href="">\n    <a-icon type="home"/>\n  </a-breadcrumb-item>\n  <a-breadcrumb-item href="">\n    <a-icon type="user"/>\n    <span>Application List</span>\n  </a-breadcrumb-item>\n  <a-breadcrumb-item>\n    Application\n  </a-breadcrumb-item>\n</a-breadcrumb>\n',script:null,style:null,us:"\n #### With an Icon\n The icon should be placed in front of the text\n",cn:"\n  #### 带有图标的\n  图标放在文字前面\n",sourceCode:'<template>\n<a-breadcrumb>\n  <a-breadcrumb-item href="">\n    <a-icon type="home" />\n  </a-breadcrumb-item>\n  <a-breadcrumb-item href="">\n    <a-icon type="user" />\n    <span>Application List</span>\n  </a-breadcrumb-item>\n  <a-breadcrumb-item>\n    Application\n  </a-breadcrumb-item>\n</a-breadcrumb>\n</template>\n'}}},[t("template",{slot:"component"},[t("a-breadcrumb",[t("a-breadcrumb-item",{attrs:{href:""}},[t("a-icon",{attrs:{type:"home"}})],1),a._v(" "),t("a-breadcrumb-item",{attrs:{href:""}},[t("a-icon",{attrs:{type:"user"}}),a._v(" "),t("span",[a._v("Application List")])],1),a._v(" "),t("a-breadcrumb-item",[a._v("\n    Application\n  ")])],1)],1),a._v(" "),t("template",{slot:"description"},[t("h4",{attrs:{id:"带有图标的"}},[a._v("带有图标的 "),t("a",{staticClass:"anchor",attrs:{href:"#带有图标的","aria-hidden":"true"}},[a._v("#")])]),a._v(" "),t("p",[a._v("图标放在文字前面")])]),a._v(" "),t("template",{slot:"us-description"},[t("h4",{attrs:{id:"With-an-Icon"}},[a._v("With an Icon "),t("a",{staticClass:"anchor",attrs:{href:"#With-an-Icon","aria-hidden":"true"}},[a._v("#")])]),a._v(" "),t("p",[a._v("The icon should be placed in front of the text")])]),a._v(" "),t("template",{slot:"code"},[t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("template")]),a._v(">")]),a._v("\n"),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb")]),a._v(">")]),a._v("\n  "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("href")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('""')]),a._v(">")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-icon")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("type")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"home"')]),a._v(" />")]),a._v("\n  "),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(">")]),a._v("\n  "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("href")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('""')]),a._v(">")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-icon")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("type")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"user"')]),a._v(" />")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("span")]),a._v(">")]),a._v("Application List"),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("span")]),a._v(">")]),a._v("\n  "),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(">")]),a._v("\n  "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(">")]),a._v("\n    Application\n  "),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(">")]),a._v("\n"),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb")]),a._v(">")]),a._v("\n"),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("template")]),a._v(">")]),a._v("\n")])])])],2)]],2)},r=[],n={render:e,staticRenderFns:r};s.a=n},2004:function(a,s,t){a.exports=t(2005)},2005:function(a,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=t(2006),r=t(58),n=r(null,e.a,!1,null,null,null);s.default=n.exports},2006:function(a,s,t){"use strict";var e=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",[[t("demo-box",{attrs:{jsfiddle:{html:'\n<div>\n  <a-breadcrumb separator=">">\n    <a-breadcrumb-item>Home</a-breadcrumb-item>\n    <a-breadcrumb-item href="">Application Center</a-breadcrumb-item>\n    <a-breadcrumb-item href="">Application List</a-breadcrumb-item>\n    <a-breadcrumb-item>An Application</a-breadcrumb-item>\n  </a-breadcrumb>\n  <a-breadcrumb>\n    <span slot="separator" style="color: red">></span>\n    <a-breadcrumb-item>Home</a-breadcrumb-item>\n    <a-breadcrumb-item href="">Application Center</a-breadcrumb-item>\n    <a-breadcrumb-item href="">Application List</a-breadcrumb-item>\n    <a-breadcrumb-item>An Application</a-breadcrumb-item>\n  </a-breadcrumb>\n</div>\n',script:null,style:null,us:'\n  #### Configuring the Separator\n  The separator can be customized by setting the separator preperty: separator=">" or use \n  slot="separator"\n',cn:'\n  #### 分隔符\n  使用` separator=">" `可以自定义分隔符，或者使用slot="separator"自定义更复杂的分隔符\n',sourceCode:'<template>\n<div>\n  <a-breadcrumb separator=">">\n    <a-breadcrumb-item>Home</a-breadcrumb-item>\n    <a-breadcrumb-item href="">Application Center</a-breadcrumb-item>\n    <a-breadcrumb-item href="">Application List</a-breadcrumb-item>\n    <a-breadcrumb-item>An Application</a-breadcrumb-item>\n  </a-breadcrumb>\n  <a-breadcrumb>\n    <span slot="separator" style="color: red">></span>\n    <a-breadcrumb-item>Home</a-breadcrumb-item>\n    <a-breadcrumb-item href="">Application Center</a-breadcrumb-item>\n    <a-breadcrumb-item href="">Application List</a-breadcrumb-item>\n    <a-breadcrumb-item>An Application</a-breadcrumb-item>\n  </a-breadcrumb>\n</div>\n</template>\n'}}},[t("template",{slot:"component"},[t("div",[t("a-breadcrumb",{attrs:{separator:">"}},[t("a-breadcrumb-item",[a._v("Home")]),a._v(" "),t("a-breadcrumb-item",{attrs:{href:""}},[a._v("Application Center")]),a._v(" "),t("a-breadcrumb-item",{attrs:{href:""}},[a._v("Application List")]),a._v(" "),t("a-breadcrumb-item",[a._v("An Application")])],1),a._v(" "),t("a-breadcrumb",[t("span",{staticStyle:{color:"red"},attrs:{slot:"separator"},slot:"separator"},[a._v(">")]),a._v(" "),t("a-breadcrumb-item",[a._v("Home")]),a._v(" "),t("a-breadcrumb-item",{attrs:{href:""}},[a._v("Application Center")]),a._v(" "),t("a-breadcrumb-item",{attrs:{href:""}},[a._v("Application List")]),a._v(" "),t("a-breadcrumb-item",[a._v("An Application")])],1)],1)]),a._v(" "),t("template",{slot:"description"},[t("h4",{attrs:{id:"分隔符"}},[a._v("分隔符 "),t("a",{staticClass:"anchor",attrs:{href:"#分隔符","aria-hidden":"true"}},[a._v("#")])]),a._v(" "),t("p",[a._v("使用"),t("code",[a._v('separator=">"')]),a._v('可以自定义分隔符，或者使用slot="separator"自定义更复杂的分隔符')])]),a._v(" "),t("template",{slot:"us-description"},[t("h4",{attrs:{id:"Configuring-the-Separator"}},[a._v("Configuring the Separator "),t("a",{staticClass:"anchor",attrs:{href:"#Configuring-the-Separator","aria-hidden":"true"}},[a._v("#")])]),a._v(" "),t("p",[a._v('The separator can be customized by setting the separator preperty: separator=">" or use'),t("br"),a._v('\nslot="separator"'),t("br")])]),a._v(" "),t("template",{slot:"code"},[t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("template")]),a._v(">")]),a._v("\n"),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("div")]),a._v(">")]),a._v("\n  "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("separator")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('">"')]),a._v(">")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(">")]),a._v("Home"),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(">")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("href")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('""')]),a._v(">")]),a._v("Application Center"),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(">")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("href")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('""')]),a._v(">")]),a._v("Application List"),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(">")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(">")]),a._v("An Application"),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(">")]),a._v("\n  "),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb")]),a._v(">")]),a._v("\n  "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb")]),a._v(">")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("span")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("slot")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"separator"')]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("style")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"color: red"')]),a._v(">")]),a._v(">"),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("span")]),a._v(">")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(">")]),a._v("Home"),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(">")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("href")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('""')]),a._v(">")]),a._v("Application Center"),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(">")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("href")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('""')]),a._v(">")]),a._v("Application List"),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(">")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(">")]),a._v("An Application"),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb-item")]),a._v(">")]),a._v("\n  "),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb")]),a._v(">")]),a._v("\n"),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("div")]),a._v(">")]),a._v("\n"),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("template")]),a._v(">")]),a._v("\n")])])])],2)]],2)},r=[],n={render:e,staticRenderFns:r};s.a=n},2007:function(a,s,t){a.exports=t(2008)},2008:function(a,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=t(1641),r=t.n(e);for(var n in e)"default"!==n&&function(a){t.d(s,a,function(){return e[a]})}(n);var l=t(2009),v=t(58),_=v(r.a,l.a,!1,null,null,null);s.default=_.exports},2009:function(a,s,t){"use strict";var e=function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",[[t("demo-box",{attrs:{jsfiddle:{html:'\n<div>\n  <a-breadcrumb :routes="routes">\n    <template slot="itemRender" slot-scope="{route, params, routes, paths}">\n      <span v-if="routes.indexOf(route) === routes.length - 1">\n        {{route.breadcrumbName}}\n      </span>\n      <router-link v-else="" :to="`${basePath}/${paths.join(\'/\')}`">\n        {{route.breadcrumbName}}\n      </router-link>\n    </template>\n  </a-breadcrumb>\n  <br/>\n  {{$route.path}}\n</div>\n',script:"\n  export default {\n    data(){\n      const { lang } = this.$route.params\n      return {\n        basePath: `/${lang}/components/breadcrumb`,\n        routes: [{\n          path: 'index',\n          breadcrumbName: '首页'\n        }, {\n          path: 'first',\n          breadcrumbName: '一级面包屑'\n        }, {\n          path: 'second',\n          breadcrumbName: '当前页面'\n        }],\n      }\n    },\n  }\n",style:null,us:"\n  #### Vue Router Integration\nUsed together with `vue-router`\n",cn:"\n  #### vue-router\n和 `vue-router` 进行结合使用。\n",sourceCode:"<template>\n<div>\n  <a-breadcrumb :routes=\"routes\">\n    <template slot=\"itemRender\" slot-scope=\"{route, params, routes, paths}\">\n      <span v-if=\"routes.indexOf(route) === routes.length - 1\">\n        {{route.breadcrumbName}}\n      </span>\n      <router-link v-else :to=\"`${basePath}/${paths.join('/')}`\">\n        {{route.breadcrumbName}}\n      </router-link>\n    </template>\n  </a-breadcrumb>\n  <br/>\n  {{$route.path}}\n</div>\n</template>\n<script>\n  export default {\n    data(){\n      const { lang } = this.$route.params\n      return {\n        basePath: `/${lang}/components/breadcrumb`,\n        routes: [{\n          path: 'index',\n          breadcrumbName: '首页'\n        }, {\n          path: 'first',\n          breadcrumbName: '一级面包屑'\n        }, {\n          path: 'second',\n          breadcrumbName: '当前页面'\n        }],\n      }\n    },\n  }\n<\/script>\n"}}},[t("template",{slot:"component"},[t("div",[t("a-breadcrumb",{attrs:{routes:a.routes},scopedSlots:a._u([{key:"itemRender",fn:function(s){var e=s.route,r=(s.params,s.routes),n=s.paths;return[r.indexOf(e)===r.length-1?t("span",[a._v("\n        "+a._s(e.breadcrumbName)+"\n      ")]):t("router-link",{attrs:{to:a.basePath+"/"+n.join("/")}},[a._v("\n        "+a._s(e.breadcrumbName)+"\n      ")])]}}])}),a._v(" "),t("br"),a._v("\n  "+a._s(a.$route.path)+"\n")],1)]),a._v(" "),t("template",{slot:"description"},[t("h4",{attrs:{id:"vue-router"}},[a._v("vue-router "),t("a",{staticClass:"anchor",attrs:{href:"#vue-router","aria-hidden":"true"}},[a._v("#")])]),a._v(" "),t("p",[a._v("和 "),t("code",[a._v("vue-router")]),a._v(" 进行结合使用。")])]),a._v(" "),t("template",{slot:"us-description"},[t("h4",{attrs:{id:"Vue-Router-Integration"}},[a._v("Vue Router Integration "),t("a",{staticClass:"anchor",attrs:{href:"#Vue-Router-Integration","aria-hidden":"true"}},[a._v("#")])]),a._v(" "),t("p",[a._v("Used together with "),t("code",[a._v("vue-router")])])]),a._v(" "),t("template",{slot:"code"},[t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("template")]),a._v(">")]),a._v("\n"),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("div")]),a._v(">")]),a._v("\n  "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v(":routes")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"routes"')]),a._v(">")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("template")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("slot")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"itemRender"')]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("slot-scope")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"{route, params, routes, paths}"')]),a._v(">")]),a._v("\n      "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("span")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("v-if")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v('"routes.indexOf(route) === routes.length - 1"')]),a._v(">")]),a._v("\n        "),t("span",[a._v("{{")]),a._v("route.breadcrumbName"),t("span",[a._v("}}")]),a._v("\n      "),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("span")]),a._v(">")]),a._v("\n      "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("router-link")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v("v-else")]),a._v(" "),t("span",{staticClass:"hljs-attr"},[a._v(":to")]),a._v("="),t("span",{staticClass:"hljs-string"},[a._v("\"`${basePath}/${paths.join('/')}`\"")]),a._v(">")]),a._v("\n        "),t("span",[a._v("{{")]),a._v("route.breadcrumbName"),t("span",[a._v("}}")]),a._v("\n      "),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("router-link")]),a._v(">")]),a._v("\n    "),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("template")]),a._v(">")]),a._v("\n  "),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("a-breadcrumb")]),a._v(">")]),a._v("\n  "),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("br")]),a._v("/>")]),a._v("\n  "),t("span",[a._v("{{")]),a._v("$route.path"),t("span",[a._v("}}")]),a._v("\n"),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("div")]),a._v(">")]),a._v("\n"),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("template")]),a._v(">")]),a._v("\n"),t("span",{staticClass:"hljs-tag"},[a._v("<"),t("span",{staticClass:"hljs-name"},[a._v("script")]),a._v(">")]),t("span",{staticClass:"javascript"},[a._v("\n  "),t("span",{staticClass:"hljs-keyword"},[a._v("export")]),a._v(" "),t("span",{staticClass:"hljs-keyword"},[a._v("default")]),a._v(" {\n    data(){\n      "),t("span",{staticClass:"hljs-keyword"},[a._v("const")]),a._v(" { lang } = "),t("span",{staticClass:"hljs-keyword"},[a._v("this")]),a._v(".$route.params\n      "),t("span",{staticClass:"hljs-keyword"},[a._v("return")]),a._v(" {\n        "),t("span",{staticClass:"hljs-attr"},[a._v("basePath")]),a._v(": "),t("span",{staticClass:"hljs-string"},[a._v("`/"),t("span",{staticClass:"hljs-subst"},[a._v("${lang}")]),a._v("/components/breadcrumb`")]),a._v(",\n        "),t("span",{staticClass:"hljs-attr"},[a._v("routes")]),a._v(": [{\n          "),t("span",{staticClass:"hljs-attr"},[a._v("path")]),a._v(": "),t("span",{staticClass:"hljs-string"},[a._v("'index'")]),a._v(",\n          "),t("span",{staticClass:"hljs-attr"},[a._v("breadcrumbName")]),a._v(": "),t("span",{staticClass:"hljs-string"},[a._v("'首页'")]),a._v("\n        }, {\n          "),t("span",{staticClass:"hljs-attr"},[a._v("path")]),a._v(": "),t("span",{staticClass:"hljs-string"},[a._v("'first'")]),a._v(",\n          "),t("span",{staticClass:"hljs-attr"},[a._v("breadcrumbName")]),a._v(": "),t("span",{staticClass:"hljs-string"},[a._v("'一级面包屑'")]),a._v("\n        }, {\n          "),t("span",{staticClass:"hljs-attr"},[a._v("path")]),a._v(": "),t("span",{staticClass:"hljs-string"},[a._v("'second'")]),a._v(",\n          "),t("span",{staticClass:"hljs-attr"},[a._v("breadcrumbName")]),a._v(": "),t("span",{staticClass:"hljs-string"},[a._v("'当前页面'")]),a._v("\n        }],\n      }\n    },\n  }\n")]),t("span",{staticClass:"hljs-tag"},[a._v("</"),t("span",{staticClass:"hljs-name"},[a._v("script")]),a._v(">")]),a._v("\n")])])])],2)]],2)},r=[],n={render:e,staticRenderFns:r};s.a=n},2010:function(a,s,t){a.exports=t(2011)},2011:function(a,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=t(2012),r=t(58),n=r(null,e.a,!1,null,null,null);s.default=n.exports},2012:function(a,s,t){"use strict";var e=function(){var a=this,s=a.$createElement;a._self._c;return a._m(0)},r=[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",[t("h2",{attrs:{id:"API"}},[a._v("API "),t("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[a._v("#")])]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("Property")]),a._v(" "),t("th",[a._v("Description")]),a._v(" "),t("th",[a._v("Type")]),a._v(" "),t("th",[a._v("Optional")]),a._v(" "),t("th",[a._v("Default")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("itemRender")]),a._v(" "),t("td",[a._v('Custom item renderer, slot="itemRender" and slot-scope="{route, params, routes, paths}"')]),a._v(" "),t("td",[a._v("({route, params, routes, paths}) => vNode")]),a._v(" "),t("td"),a._v(" "),t("td",[a._v("-")])]),a._v(" "),t("tr",[t("td",[a._v("params")]),a._v(" "),t("td",[a._v("Routing parameters")]),a._v(" "),t("td",[a._v("object")]),a._v(" "),t("td"),a._v(" "),t("td",[a._v("-")])]),a._v(" "),t("tr",[t("td",[a._v("routes")]),a._v(" "),t("td",[a._v("The routing stack information of router")]),a._v(" "),t("td",[a._v("object[]")]),a._v(" "),t("td"),a._v(" "),t("td",[a._v("-")])]),a._v(" "),t("tr",[t("td",[a._v("separator")]),a._v(" "),t("td",[a._v("Custom separator")]),a._v(" "),t("td",[a._v("string|slot")]),a._v(" "),t("td"),a._v(" "),t("td",[t("code",{pre:!0},[a._v("/")])])])])]),a._v(" "),t("h3",{attrs:{id:"Use-with-browserHistory"}},[a._v("Use with browserHistory "),t("a",{staticClass:"anchor",attrs:{href:"#Use-with-browserHistory","aria-hidden":"true"}},[a._v("#")])]),a._v(" "),t("p",[a._v("The link of Breadcrumb item targets "),t("code",{pre:!0},[a._v("#")]),a._v(" by default, you can use "),t("code",{pre:!0},[a._v("itemRender")]),a._v(" to make a "),t("code",{pre:!0},[a._v("browserHistory")]),a._v(" Link.")]),a._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("template")]),a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("a-breadcrumb")]),a._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v(":routes")]),a._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"routes"')]),a._v(">")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("template")]),a._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("slot")]),a._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"itemRender"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("slot-scope")]),a._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"{route, params, routes, paths}"')]),a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("span")]),a._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("v-if")]),a._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"routes.indexOf(route) === routes.length - 1"')]),a._v(">")]),a._v("\n      "),t("span",[a._v("{{")]),a._v("route.breadcrumbName"),t("span",[a._v("}}")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("span")]),a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("router-link")]),a._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("v-else")]),a._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v(":to")]),a._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("\"paths.join('/')\"")]),a._v(">")]),a._v("\n      "),t("span",[a._v("{{")]),a._v("route.breadcrumbName"),t("span",[a._v("}}")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("router-link")]),a._v(">")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("template")]),a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("a-breadcrumb")]),a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("template")]),a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("script")]),a._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[a._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("default")]),a._v(" {\n    data(){\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("return")]),a._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("routes")]),a._v(": [{\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("path")]),a._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'index'")]),a._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("breadcrumbName")]),a._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'首页'")]),a._v("\n        }, {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("path")]),a._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'first'")]),a._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("breadcrumbName")]),a._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'一级面包屑'")]),a._v("\n        }, {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("path")]),a._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'second'")]),a._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("breadcrumbName")]),a._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'当前页面'")]),a._v("\n        }],\n      }\n    },\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("script")]),a._v(">")]),a._v("\n")])])])}],n={render:e,staticRenderFns:r};s.a=n},2013:function(a,s,t){a.exports=t(2014)},2014:function(a,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=t(2015),r=t(58),n=r(null,e.a,!1,null,null,null);s.default=n.exports},2015:function(a,s,t){"use strict";var e=function(){var a=this,s=a.$createElement;a._self._c;return a._m(0)},r=[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",[t("h2",{attrs:{id:"API"}},[a._v("API "),t("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[a._v("#")])]),a._v(" "),t("table",[t("thead",[t("tr",[t("th",[a._v("参数")]),a._v(" "),t("th",[a._v("说明")]),a._v(" "),t("th",[a._v("类型")]),a._v(" "),t("th",[a._v("可选值")]),a._v(" "),t("th",[a._v("默认值")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("itemRender")]),a._v(" "),t("td",[a._v('自定义链接函数，和 vue-router 配置使用， 也可使用slot="itemRender" 和 slot-scope="props"')]),a._v(" "),t("td",[a._v("({route, params, routes, paths}) => vNode")]),a._v(" "),t("td"),a._v(" "),t("td",[a._v("-")])]),a._v(" "),t("tr",[t("td",[a._v("params")]),a._v(" "),t("td",[a._v("路由的参数")]),a._v(" "),t("td",[a._v("object")]),a._v(" "),t("td"),a._v(" "),t("td",[a._v("-")])]),a._v(" "),t("tr",[t("td",[a._v("routes")]),a._v(" "),t("td",[a._v("router 的路由栈信息")]),a._v(" "),t("td",[a._v("object[]")]),a._v(" "),t("td"),a._v(" "),t("td",[a._v("-")])]),a._v(" "),t("tr",[t("td",[a._v("separator")]),a._v(" "),t("td",[a._v("分隔符自定义")]),a._v(" "),t("td",[a._v("string|slot")]),a._v(" "),t("td"),a._v(" "),t("td",[a._v("'/'")])])])]),a._v(" "),t("h3",{attrs:{id:"和-browserHistory-配合"}},[a._v("和 browserHistory 配合 "),t("a",{staticClass:"anchor",attrs:{href:"#和-browserHistory-配合","aria-hidden":"true"}},[a._v("#")])]),a._v(" "),t("p",[a._v("和 vue-router 一起使用时，默认生成的 url 路径是带有 "),t("code",{pre:!0},[a._v("#")]),a._v(" 的，如果和 browserHistory 一起使用的话，你可以使用 "),t("code",{pre:!0},[a._v("itemRender")]),a._v(" 属性定义面包屑链接。")]),a._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("template")]),a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("a-breadcrumb")]),a._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v(":routes")]),a._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"routes"')]),a._v(">")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("template")]),a._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("slot")]),a._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"itemRender"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("slot-scope")]),a._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"{route, params, routes, paths}"')]),a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("span")]),a._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("v-if")]),a._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"routes.indexOf(route) === routes.length - 1"')]),a._v(">")]),a._v("\n      "),t("span",[a._v("{{")]),a._v("route.breadcrumbName"),t("span",[a._v("}}")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("span")]),a._v(">")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("router-link")]),a._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("v-else")]),a._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v(":to")]),a._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("\"paths.join('/')\"")]),a._v(">")]),a._v("\n      "),t("span",[a._v("{{")]),a._v("route.breadcrumbName"),t("span",[a._v("}}")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("router-link")]),a._v(">")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("template")]),a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("a-breadcrumb")]),a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("template")]),a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("script")]),a._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[a._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("default")]),a._v(" {\n    data(){\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("return")]),a._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("routes")]),a._v(": [{\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("path")]),a._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'index'")]),a._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("breadcrumbName")]),a._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'首页'")]),a._v("\n        }, {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("path")]),a._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'first'")]),a._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("breadcrumbName")]),a._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'一级面包屑'")]),a._v("\n        }, {\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("path")]),a._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'second'")]),a._v(",\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[a._v("breadcrumbName")]),a._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'当前页面'")]),a._v("\n        }],\n      }\n    },\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[a._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[a._v("script")]),a._v(">")]),a._v("\n")])])])}],n={render:e,staticRenderFns:r};s.a=n},613:function(a,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=t(1640),r=t.n(e);for(var n in e)"default"!==n&&function(a){t.d(s,a,function(){return e[a]})}(n);var l=t(58),v=l(r.a,null,!1,null,null,null);s.default=v.exports}});