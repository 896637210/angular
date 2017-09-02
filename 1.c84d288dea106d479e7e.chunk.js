webpackJsonp([1],{1022:function(e,n,t){"use strict";t.d(n,"a",function(){return d});var o=t(2),a=t(34),i=t(951),l=t(952),r=t(953),c=t(954),p=t(955),u=t(956),s=t(957),f=this&&this.__decorate||function(e,n,t,o){var a,i=arguments.length,l=i<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,n,t,o);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(l=(i<3?a(l):i>3?a(n,t,l):a(n,t))||l);return i>3&&l&&Object.defineProperty(n,t,l),l},g=[{path:"",component:i.a,children:[{path:"install",component:l.a},{path:"start",component:r.a},{path:"i18n",component:c.a},{path:"theme",component:p.a},{path:"transition",component:u.a},{path:"log",component:s.a}]}],d=function(){function GuideRoutingModule(){}return GuideRoutingModule=f([Object(o.M)({imports:[a.e.forChild(g)],exports:[a.e]})],GuideRoutingModule)}()},1023:function(e,n){e.exports="<router-outlet></router-outlet>\n"},1024:function(e,n){e.exports=".box {\n  width: 400px;\n  padding-left: 100px; }\n\n.top {\n  text-align: center; }\n\n.left {\n  float: left;\n  width: 60px; }\n\n.right {\n  float: right;\n  width: 60px; }\n\n.bottom {\n  clear: both;\n  text-align: center; }\n\n.item {\n  margin: 4px; }\n\n.left .el-tooltip__popper,\n.right .el-tooltip__popper {\n  padding: 8px 10px; }\n"},1025:function(e,n,t){"use strict";n.a=["\n# npm i --save element-angular\n\n","\n// import module\nimport { ElModule } from 'element-angular'\n\n// import style\nimport 'element-theme-default'\n\n@NgModule({\n  imports: [\n    ElModule.forRoot(),\n    ...\n  ],\n    ...\n  bootstrap: [ExAppComponent],\n})\n\n// components\ntemplate: '<el-button>Hello World</el-button>'\n\n"]},1026:function(e,n){e.exports='<h2>安装</h2>\n<h3>npm 安装</h3>\n<p>推荐使用 npm 的方式安装，它能更好地和 <a href="https://webpack.js.org/" target="_blank">webpack</a> 打包工具配合使用。</p>\n<pre>\n  <code class="hljs" [innerHTML]="code[0] | highlightAuto"></code>\n</pre>\n\n<h3>Hello world</h3>\n<p>引入模块后，我们能轻易地构建一个简易页面</p>\n<p><code>element-theme-default</code> 样式库是 <code>Element Angul</code> 的依赖，无需再次安装。</p>\n\n<p>注: 假设你已经通过 <a href="https://github.com/angular/angular-cli" target="_blank">angular-cli</a> 创建了基础的 Angular 项目。</p>\n<pre>\n  <code class="hljs" [innerHTML]="code[1] | highlightAuto"></code>\n</pre>\n\n\n<p>如果你希望能够通过模块、异步模块、子模块来引入 element-angular，请参阅下一章</p>\n\n\n<ex-footer-nav [page]="page"></ex-footer-nav>\n\n\n\n'},1027:function(e,n){e.exports=".box {\n  width: 400px;\n  padding-left: 100px; }\n\n.top {\n  text-align: center; }\n\n.left {\n  float: left;\n  width: 60px; }\n\n.right {\n  float: right;\n  width: 60px; }\n\n.bottom {\n  clear: both;\n  text-align: center; }\n\n.item {\n  margin: 4px; }\n\n.left .el-tooltip__popper,\n.right .el-tooltip__popper {\n  padding: 8px 10px; }\n"},1028:function(e,n,t){"use strict";n.a=["\n# install cli\nnpm install -g @angular/cli\n\n# init project\nng new YOUR-PROJECT-NAME --style=scss\ncd YOUR-PROJECT-NAME\n\n# install element-angular\nnpm i --save element-angular\n\n# run\nng server\n\n","\nimport { NgModule } from '@angular/core'\nimport { BrowserModule } from '@angular/platform-browser'\nimport { RouterModule } from '@angular/router'\nimport { AppComponent } from './app.component'\n\nimport { ElModule } from 'element-angular'\n// import style\nimport 'element-theme-default'\n\n@NgModule({\n  declarations: [\n    ExAppComponent,\n  ],\n  imports: [\n    BrowserModule,\n    ElModule.forRoot(),\n  ],\n  providers: [],\n  bootstrap: [ExAppComponent],\n})\nexport class AppModule {\n}\n\n// 不同组件与指令使用请参考具体章节\n","\nimport { CommonModule } from '@angular/common'\nimport { NgModule } from '@angular/core'\nimport { FormsModule } from '@angular/forms'\nimport { MenuComponent } from './menu/menu.component'\n\nimport { ElChildModules } from 'element-angular'\n\n@NgModule({\n  declarations: [\n    MenuComponent,\n  ],\n  imports: [\n    CommonModule,\n    FormsModule,\n    ElChildModules.ElButton,          // just import button module\n  ],\n  exports: [ExGuideMainComponent],\n  providers: [],\n})\nexport class MenuModule {\n}\n\n"]},1029:function(e,n){e.exports='<h2>快速上手</h2>\n<p>本节将介绍如何在项目中使用 Element-angular。</p>\n\n<h3>创建项目</h3>\n<p>如果你还没有一个 <code>Angular</code> 项目，可以考虑使用 cli 快速安装。</p>\n<pre>\n  <code class="hljs" [innerHTML]="code[0] | highlightAuto"></code>\n</pre>\n\n<h3>根模块引入</h3>\n<p>将 <code>element-angular</code> 引入根模块后，可以在任意组件中使用。</p>\n<pre>\n  <code class="hljs" [innerHTML]="code[1] | highlightAuto"></code>\n</pre>\n\n<h3>引入单个组件</h3>\n<p>附: 即便是引入整个库，Angular 在 Build 时也会去除未使用的代码，\n  请参考 <a href="https://angular.cn/guide/aot-compiler#tree-shaking" target="_blank">Tree shaking</a></p>\n<pre>\n  <code class="hljs" [innerHTML]="code[2] | highlightAuto"></code>\n</pre>\n\n<ex-footer-nav [page]="page"></ex-footer-nav>\n\n\n\n'},1030:function(e,n){e.exports=""},1031:function(e,n){e.exports='<h2>国际化</h2>\n<p>Element Angular 组件内部默认使用中文，若希望使用其他语言，则需要进行多语言设置。</p>\n<p>国际化仍在开发中，如果你对此有任何建议或想法，请前往 <a href="https://github.com/eleme/element-angular/issues" target="_blank">ISSUE</a></p>\n\n<ex-footer-nav [page]="page"></ex-footer-nav>\n\n\n\n\n\n\n'},1032:function(e,n){e.exports=""},1033:function(e,n,t){"use strict";n.a=["\n# install cli\nnpm i element-theme -g\n\n","\n# init\net -i FILE_NAME\n","\n:root {\n\n  /* Colors\n  -------------------------- */\n  --color-primary: #20a0ff;\n  --color-success: #13ce66;\n  --color-warning: #f7ba2a;\n  --color-danger: #ff4949;\n  --color-info: #50BFFF;\n  --color-blue: #2e90fe;\n  --color-blue-light: #5da9ff;\n  --color-blue-lighter: rgba(var(--color-blue), 0.12);\n  --color-white: #fff;\n  --color-black: #000;\n  --color-grey: #C0CCDA;\n","\n# edit\n--color-primary: red;\n","\n# build\net\n> ✔ build theme font\n> ✔ build element theme\n","\nimport '../theme/index.css'\n"]},1034:function(e,n){e.exports='<h2>自定义主题</h2>\n<p>Element-Angular 默认提供一套主题，CSS 命名采用 BEM 的风格方便使用者覆盖样式。如果你想完全替换主题色或者部分样式，可以使用下面的方法。</p>\n\n<h2>仅替换主题色</h2>\n<p>如果仅希望更换 Element 的主题色，推荐使用<a href="https://elementui.github.io/theme-preview" target="_blank">在线主题生成工具</a>。</p>\n<p>Element-Angular 默认的主题色是鲜艳、友好的蓝色。通过替换主题色，能够让 Element-Angular 的视觉更加符合具体项目的定位。</p>\n<p>使用上述工具，可以很方便地实时预览主题色改变之后的视觉，同时它还可以基于新的主题色生成完整的样式文件包，供直接下载使用（关于如何使用下载的主题包，请参考本节「引入自定义主题」和「搭配插件按需引入组件主题」部分）。</p>\n<p>如果希望进行除主题色之外的样式定制，请继续阅读。</p>\n\n<h2>深层次的定制</h2>\n<p>如果仅仅改变主题色不能满足你的需求，请按以下步骤进行更深层次的主题定制：</p>\n\n<h3>安装工具</h3>\n<p>首先安装「主题生成工具」，可以全局安装或者安装在当前项目下，推荐安装在项目里，方便别人 clone 项目时能直接安装依赖并启动，这里以全局安装做演示。</p>\n<pre>\n  <code class="hljs" [innerHTML]="code[0] | highlightAuto"></code>\n</pre>\n\n\n<h3>初始化变量文件</h3>\n<p>主题生成工具安装成功后，如果全局安装可以在命令行里通过 <code>et</code> 调用工具，如果安装在当前目录下，\n  需要通过 <code>node_modules/.bin/et</code> 访问到命令。执行 <code>-i</code> 初始化变量文件。\n  默认输出到 <code>element-variables.css</code>，当然你可以传参数指定文件输出目录。</p>\n<pre>\n  <code class="hljs" [innerHTML]="code[1] | highlightAuto"></code>\n</pre>\n<p>如果使用默认配置，执行后当前目录会有一个 <code>element-variables.css</code> 文件。\n  内部包含了主题所用到的所有变量，它们使用 CSS4 的风格定义。大致结构如下</p>\n<pre>\n  <code class="hljs language-css" [innerHTML]="code[2] | highlightAuto"></code>\n</pre>\n\n<h3>修改变量</h3>\n<p>直接编辑 <code>element-variables.css</code> 文件，例如修改主题色为红色。</p>\n<pre>\n  <code class="hljs language-css" [innerHTML]="code[3] | highlightAuto"></code>\n</pre>\n\n<h3>编译主题</h3>\n<p>保存文件后，到命令行里执行 <code>et</code> 编译主题，如果你想启用 <code>watch</code> 模式，\n  实时编译主题，增加 <code>-w</code> 参数；\n  如果你在初始化时指定了自定义变量文件，则需要增加 <code>-c</code> 参数，并带上你的变量文件名</p>\n<pre>\n  <code class="hljs language-css" [innerHTML]="code[4] | highlightAuto"></code>\n</pre>\n\n<h3>引入自定义主题</h3>\n<p>默认情况下编译的主题目录是放在 <code>./theme</code> 下，你可以通过 <code>-o</code> 参数指定打包目录。\n  像引入默认主题一样，在代码里直接引用 <code>theme/index.css</code> 文件即可。</p>\n<pre>\n  <code class="hljs" [innerHTML]="code[5] | highlightAuto"></code>\n</pre>\n\n\n<ex-footer-nav [page]="page"></ex-footer-nav>\n\n\n\n'},1035:function(e,n){e.exports=""},1036:function(e,n){e.exports='<h2>内置过渡动画</h2>\n<p>开发中</p>\n\n\n\n\n<ex-footer-nav [page]="page"></ex-footer-nav>\n\n\n\n'},1037:function(e,n){e.exports=""},1038:function(e,n){e.exports='<div class="page-changelog">\n  <div class="heading">\n    <el-button class="fr">\n      <a href="https://www.npmjs.com/package/element-angular" target="_blank">\n        NPM Releases\n      </a>\n    </el-button>\n    更新日志\n  </div>\n  <ul class="timeline" ref="timeline">\n    <li><h3><a href="javascript:;" target="_blank">0.0.3-alpha.4</a></h3>\n      <p><em>2017-09-03</em></p>\n      <ul>\n        <li>\n          修复文档的编译警告\n        </li>\n        <li>\n          修复文档路由标记错误\n        </li>\n        <li>\n          增加 Cascader 组件与文档\n        </li>\n        <li>\n          Input 组件增加 icon-class 属性\n        </li>\n      </ul>\n    </li>\n    <li><h3><a href="javascript:;" target="_blank">0.0.3-alpha.3</a></h3>\n      <p><em>2017-09-02</em></p>\n      <ul>\n        <li>\n          修复 Aot 编译警告\n        </li>\n        <li>\n          增加 Notification，message 组件\n        </li>\n      </ul>\n    </li>\n    <li><h3><a href="javascript:;" target="_blank">0.0.3-alpha.2</a></h3>\n      <p><em>2017-08-30</em></p>\n      <ul>\n        <li>\n          完成主要组件。补充组件文档以及安装引导。\n          \x3c!--<a href="" target="_blank">#issue</a>--\x3e\n        </li>\n      </ul>\n    </li>\n    <li><h3><a href="javascript:;" target="_blank">0.0.1</a></h3>\n      <p><em>2017-08-06</em></p>\n      <ul>\n        <li>\n          创建项目\n          \x3c!--<a href="" target="_blank">#issue</a>--\x3e\n        </li>\n      </ul>\n    </li>\n  </ul>\n</div>\n\n\n<ex-footer-nav [page]="page"></ex-footer-nav>\n\n\n\n'},1039:function(e,n){e.exports=".page-changelog {\n  padding-bottom: 100px; }\n  .page-changelog .fr {\n    float: right;\n    padding: 0; }\n    .page-changelog .fr a {\n      display: block;\n      padding: 10px 15px;\n      color: #475669; }\n    .page-changelog .fr:hover a {\n      color: #20a0ff; }\n  .page-changelog .heading {\n    margin-bottom: 40px; }\n  .page-changelog .timeline {\n    margin: 0 0 0 105px;\n    padding-left: 25px;\n    position: relative;\n    color: #5e6d82; }\n    .page-changelog .timeline:before {\n      content: '';\n      width: 1px;\n      height: 100%;\n      position: absolute;\n      left: 0;\n      top: 10px;\n      background-color: #eaeefa; }\n    .page-changelog .timeline > li {\n      list-style: none;\n      position: relative;\n      line-height: 1.8; }\n      .page-changelog .timeline > li:not(:last-child) {\n        margin-bottom: 50px; }\n      .page-changelog .timeline > li:first-child {\n        margin-top: -10px; }\n        .page-changelog .timeline > li:first-child h3:before {\n          left: -33px;\n          top: 10px;\n          width: 17px;\n          height: 17px;\n          background-color: #20a0ff;\n          border: 0; }\n    .page-changelog .timeline ul {\n      padding-left: 0; }\n      .page-changelog .timeline ul ul {\n        padding-left: 20px; }\n        .page-changelog .timeline ul ul li::before {\n          content: '';\n          circle: 4px #fff;\n          border: solid 1px #5e6d82;\n          margin-right: 5px;\n          display: inline-block;\n          vertical-align: middle; }\n    .page-changelog .timeline li li {\n      font-size: 14px;\n      list-style: none;\n      padding-left: 0;\n      word-break: break-all; }\n      .page-changelog .timeline li li:before {\n        content: '';\n        circle: 4px #5e6d82;\n        margin-right: 5px;\n        display: inline-block;\n        vertical-align: middle; }\n    .page-changelog .timeline h3 {\n      margin: 0 0 10px; }\n      .page-changelog .timeline h3:before {\n        content: '';\n        display: block;\n        position: absolute;\n        left: -31px;\n        top: 13px;\n        circle: 13px transparent;\n        border: 2px solid #20a0ff;\n        box-sizing: border-box;\n        background-color: #fff; }\n      .page-changelog .timeline h3 a {\n        opacity: 1;\n        float: none;\n        margin-left: 0;\n        color: inherit; }\n    .page-changelog .timeline h4 {\n      margin: 50px 0 10px; }\n    .page-changelog .timeline p {\n      margin: 0; }\n    .page-changelog .timeline em {\n      position: absolute;\n      left: -127px;\n      font-style: normal;\n      top: 6px;\n      font-size: 14px;\n      color: #99a9bf; }\n"},928:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"GuideModule",function(){return b});var o=t(8),a=t(2),i=t(34),l=t(51),r=t(1022),c=t(98),p=t(218),u=t(951),s=t(952),f=t(953),g=t(954),d=t(955),h=t(956),m=t(957),x=this&&this.__decorate||function(e,n,t,o){var a,i=arguments.length,l=i<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,n,t,o);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(l=(i<3?a(l):i>3?a(n,t,l):a(n,t))||l);return i>3&&l&&Object.defineProperty(n,t,l),l},b=function(){function GuideModule(){}return GuideModule=x([Object(a.M)({declarations:[u.a,s.a,f.a,g.a,d.a,h.a,m.a],imports:[o.b,l.a,i.e,r.a,c.b,p.a],exports:[u.a],providers:[]})],GuideModule)}()},951:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var o=t(2),a=this&&this.__decorate||function(e,n,t,o){var a,i=arguments.length,l=i<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,n,t,o);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(l=(i<3?a(l):i>3?a(n,t,l):a(n,t))||l);return i>3&&l&&Object.defineProperty(n,t,l),l},i=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},l=function(){function ExGuideMainComponent(){}return ExGuideMainComponent.prototype.ngOnInit=function(){},ExGuideMainComponent=a([Object(o.o)({selector:"ex-guide-main",template:t(1023),styles:[t(1024)],encapsulation:o._19.None}),i("design:paramtypes",[])],ExGuideMainComponent)}()},952:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var o=t(2),a=t(1025),i=this&&this.__decorate||function(e,n,t,o){var a,i=arguments.length,l=i<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,n,t,o);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(l=(i<3?a(l):i>3?a(n,t,l):a(n,t))||l);return i>3&&l&&Object.defineProperty(n,t,l),l},l=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},r=function(){function ExInstallComponent(){this.code=a.a,this.page={previous:{name:""},next:{name:"快速开始",link:"/guide/start"}}}return ExInstallComponent.prototype.ngOnInit=function(){},ExInstallComponent=i([Object(o.o)({selector:"ex-install",template:t(1026),styles:[t(1027)]}),l("design:paramtypes",[])],ExInstallComponent)}()},953:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var o=t(2),a=t(1028),i=this&&this.__decorate||function(e,n,t,o){var a,i=arguments.length,l=i<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,n,t,o);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(l=(i<3?a(l):i>3?a(n,t,l):a(n,t))||l);return i>3&&l&&Object.defineProperty(n,t,l),l},l=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},r=function(){function ExStartComponent(){this.code=a.a,this.page={previous:{name:"安装",link:"/guide/install"},next:{name:"国际化",link:"/guide/i18n"}}}return ExStartComponent.prototype.ngOnInit=function(){},ExStartComponent=i([Object(o.o)({selector:"ex-start",template:t(1029),styles:[t(1030)]}),l("design:paramtypes",[])],ExStartComponent)}()},954:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var o=t(2),a=this&&this.__decorate||function(e,n,t,o){var a,i=arguments.length,l=i<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,n,t,o);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(l=(i<3?a(l):i>3?a(n,t,l):a(n,t))||l);return i>3&&l&&Object.defineProperty(n,t,l),l},i=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},l=function(){function ExLanguageComponent(){this.page={previous:{name:"快速上手",link:"/guide/start"},next:{name:"自定义主题",link:"/guide/theme"}}}return ExLanguageComponent.prototype.ngOnInit=function(){},ExLanguageComponent=a([Object(o.o)({selector:"ex-language",template:t(1031),styles:[t(1032)]}),i("design:paramtypes",[])],ExLanguageComponent)}()},955:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var o=t(2),a=t(1033),i=this&&this.__decorate||function(e,n,t,o){var a,i=arguments.length,l=i<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,n,t,o);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(l=(i<3?a(l):i>3?a(n,t,l):a(n,t))||l);return i>3&&l&&Object.defineProperty(n,t,l),l},l=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},r=function(){function ExThemeComponent(){this.code=a.a,this.page={previous:{name:"国际化",link:"/guide/i18n"},next:{name:"更新日志",link:"/guide/log"}}}return ExThemeComponent.prototype.ngOnInit=function(){},ExThemeComponent=i([Object(o.o)({selector:"ex-theme",template:t(1034),styles:[t(1035)]}),l("design:paramtypes",[])],ExThemeComponent)}()},956:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var o=t(2),a=this&&this.__decorate||function(e,n,t,o){var a,i=arguments.length,l=i<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,n,t,o);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(l=(i<3?a(l):i>3?a(n,t,l):a(n,t))||l);return i>3&&l&&Object.defineProperty(n,t,l),l},i=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},l=function(){function ExTransitionComponent(){this.page={previous:{name:"自定义主题",link:"/guide/theme"},next:{name:"更新日志",link:"/guide/log"}}}return ExTransitionComponent.prototype.ngOnInit=function(){},ExTransitionComponent=a([Object(o.o)({selector:"ex-transition",template:t(1036),styles:[t(1037)]}),i("design:paramtypes",[])],ExTransitionComponent)}()},957:function(e,n,t){"use strict";t.d(n,"a",function(){return l});var o=t(2),a=this&&this.__decorate||function(e,n,t,o){var a,i=arguments.length,l=i<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,n,t,o);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(l=(i<3?a(l):i>3?a(n,t,l):a(n,t))||l);return i>3&&l&&Object.defineProperty(n,t,l),l},i=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},l=function(){function ExLogComponent(){this.page={previous:{name:"自定义主题",link:"/guide/theme"},next:{name:"Layout 布局",link:"/basic/layout"}}}return ExLogComponent.prototype.ngOnInit=function(){},ExLogComponent=a([Object(o.o)({selector:"ex-log",template:t(1038),styles:[t(1039)],encapsulation:o._19.None}),i("design:paramtypes",[])],ExLogComponent)}()}});