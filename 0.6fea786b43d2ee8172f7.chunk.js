webpackJsonp([0],{1005:function(e,n,o){"use strict";o.d(n,"a",function(){return f});var t=o(1),l=o(29),c=o(956),a=o(957),d=o(958),i=o(959),r=o(960),p=o(961),u=o(962),s=o(963),m=o(964),x=o(965),h=this&&this.__decorate||function(e,n,o,t){var l,c=arguments.length,a=c<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,o,t);else for(var d=e.length-1;d>=0;d--)(l=e[d])&&(a=(c<3?l(a):c>3?l(n,o,a):l(n,o))||a);return c>3&&a&&Object.defineProperty(n,o,a),a},b=[{path:"",component:c.a,children:[{path:"radio",component:d.a},{path:"checkbox",component:a.a},{path:"input",component:i.a},{path:"input-number",component:r.a},{path:"select",component:p.a},{path:"switch",component:u.a},{path:"rate",component:s.a},{path:"cascader",component:m.a},{path:"date-picker",component:x.a}]}],f=function(){function FormRoutingModule(){}return FormRoutingModule=h([Object(t.M)({imports:[l.e.forChild(b)],exports:[l.e]})],FormRoutingModule)}()},1006:function(e,n){e.exports="<router-outlet></router-outlet>\n"},1007:function(e,n){e.exports=""},1008:function(e,n,o){"use strict";n.a=["\n\x3c!-- 'checked' 为 true 或 false --\x3e\n<el-checkbox [(model)]=\"checked\" >备选项</el-checkbox>\n\n",'\n\n<el-checkbox [model]="checked1" [disabled]="true">备选项1</el-checkbox>\n<el-checkbox [model]="checked2" [disabled]="true">备选项2</el-checkbox>\n\n','\n\n\x3c!--当组件中无值时，label 属性的值也会用于显示--\x3e\n<el-checkbox-group [model]="[\'复选框 B\', \'选中且禁用\']">\n  <el-checkbox label="复选框 A"></el-checkbox>\n  <el-checkbox label="复选框 B">复选框 F</el-checkbox>\n  <el-checkbox label="复选框 C"></el-checkbox>\n  <el-checkbox label="禁用" [disabled]="true"></el-checkbox>\n  <el-checkbox label="选中且禁用" [disabled]="true"></el-checkbox>\n</el-checkbox-group>\n\n','\n\x3c!--min 与 [min] 并不是等价的，具体请参见 Angular 官方文档--\x3e\n<el-checkbox-group [model]="[\'Java\', \'TypeScript\']" [min]="1" max="2">\n  <el-checkbox label="Java"></el-checkbox>\n  <el-checkbox label=".NET">复选框 F</el-checkbox>\n  <el-checkbox label="C++"></el-checkbox>\n  <el-checkbox label="JavaScript" [disabled]="true"></el-checkbox>\n  <el-checkbox label="TypeScript" [disabled]="true"></el-checkbox>\n</el-checkbox-group>\n\n',"\n<div style=\"margin: 15px 0;\"></div>\n<el-checkbox-group [model]=\"['Java', 'TypeScript', 'Swift']\">\n  <el-checkbox-button *ngFor=\"let city of ['Hello', 'TypeScript', 'CSS']\"\n    [label]=\"city\"></el-checkbox-button>\n</el-checkbox-group>\n\n<div style=\"margin: 15px 0;\"></div>\n<el-checkbox-group [model]=\"['Hegel', 'Aristotle', 'Dewey']\" size=\"small\">\n  <el-checkbox-button *ngFor=\"let man of ['Hegel', 'Aristotle', 'Dewey']\"\n    [label]=\"man\" [disabled]=\"man === 'Aristotle'\">{{man}}</el-checkbox-button>\n</el-checkbox-group>\n"]},1009:function(e,n){e.exports='<h2>Checkbox 多选框</h2>\n<p>一组备选项中进行多选</p>\n\n<h3>基础用法</h3>\n<p>单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。</p>\n<ex-demo link="2" [code]="code[0]" notes="在组件中定义 <code>model</code> 绑定变量，\n单一使用组件时，默认绑定变量的值会是 <code>Boolean</code>，选中为 <code>true</code>">\n</ex-demo>\n\n<h3>禁用状态</h3>\n<p>多选框不可用状态。</p>\n<ex-demo link="2" [code]="code[1]" notes="设置 <code>disabled</code> 属性即可">\n</ex-demo>\n\n<h3>多选框组</h3>\n<p>适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。</p>\n<ex-demo link="2" [code]="code[2]" notes="<code>label</code> 与数组中的元素值相对应，\n如果存在指定的值则为选中状态，否则为不选中。">\n</ex-demo>\n\n<h3>可选项目数量的限制</h3>\n<p>使用 <code>min</code> 和 <code>max</code> 属性能够限制可以被勾选的项目的数量。</p>\n<ex-demo link="2" [code]="code[3]">\n</ex-demo>\n\n<h3>按钮样式</h3>\n<p>按钮样式的多选组合。</p>\n<ex-demo link="2" [code]="code[4]" notes="组件还提供了 <code>size</code> 属性，\n支持 <code>large</code> 和 <code>small</code> 两种。">\n</ex-demo>\n\n<ex-document doc="checkbox"></ex-document>\n<ex-document doc="checkbox-group"></ex-document>\n\n<ex-footer-nav [page]="page"></ex-footer-nav>\n'},1010:function(e,n){e.exports=""},1011:function(e,n,o){"use strict";n.a=['\n\x3c!--绑定的 model 与 label 值相同时就会被选中--\x3e\n<el-radio class="radio" [(model)]="radio" label="备选1">备选项</el-radio>\n\n<el-radio class="radio" [(model)]="radio" label="备选2"></el-radio>\n\n<el-radio class="radio" [(model)]="radio" label="备选3">备选3</el-radio>\n\n','\n\x3c!--你可以拆分 model 达到不同的用途：--\x3e\n\x3c!--单独使用 \'[]\' 来标记输入组件的值，甚至可以不声明变量--\x3e\n\x3c!--单独使用 \'(modelChange)\' 来获取组件返回的变化--\x3e\n<el-radio [disabled]="true" [model]="\'element\'" label="element">备选项</el-radio>\n\n<el-radio [disabled]="true" [(model)]="element2" label="element">备选项</el-radio>\n\n','\n<el-radio-group [model]="\'3\'">\n  <el-radio label="3">备选项</el-radio>\n  <el-radio label="6">备选项</el-radio>\n  <el-radio label="9">备选项</el-radio>\n</el-radio-group>\n','\n<el-radio-group [model]="\'上海\'">\n  <el-radio-button label="上海"></el-radio-button>\n  <el-radio-button label="北京"></el-radio-button>\n  <el-radio-button label="广州"></el-radio-button>\n  <el-radio-button label="深圳"></el-radio-button>\n</el-radio-group>\n<div style="margin: 15px 0;"></div>\n\n<el-radio-group [model]="\'Angular\'">\n  <el-radio-button label="Angular"></el-radio-button>\n  <el-radio-button label="React"></el-radio-button>\n  <el-radio-button label="Bootstrap" :disabled="true"></el-radio-button>\n  <el-radio-button label="Vue"></el-radio-button>\n</el-radio-group>\n<div style="margin: 15px 0;"></div>\n\n<el-radio-group [model]="\'北京\'" :disabled="true">\n  <el-radio-button label="上海"></el-radio-button>\n  <el-radio-button label="北京"></el-radio-button>\n  <el-radio-button label="广州"></el-radio-button>\n  <el-radio-button label="深圳"></el-radio-button>\n</el-radio-group>\n']},1012:function(e,n){e.exports='<h2>Radio 单选框</h2>\n<p>在一组备选项中进行单选</p>\n\n<h3>基础用法</h3>\n<p>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p>\n<ex-demo link="2" [code]="code[0]" notes="要使用 Radio 组件，只需要设置 <code>[(model)]</code>绑定变量。\n如果组件中未包含内容，则会优先显示 <code>[label]</code> 中的内容。">\n</ex-demo>\n\n<h3>禁用状态</h3>\n<p>单选框不可用的状态。</p>\n<ex-demo link="2" [code]="code[1]" notes="选中的条件是绑定的变量值等于`label`中的值。只要在<code>el-radio</code>元素中设置\n<code>disabled</code>属性即可，它接受一个<code>boolean</code>，<code>true</code>为禁用。">\n</ex-demo>\n\n<h3>单选框组</h3>\n<p>适用于在多个互斥的选项中选择的场景</p>\n<ex-demo link="2" [code]="code[2]" notes="在 <code>el-radio-group</code> 中绑定 <code>model</code>，\n在el-radio中设置好label即可，无需再给每一个el-radio绑定变量 (会被忽略)。">\n</ex-demo>\n\n<h3>按钮样式</h3>\n<p>按钮样式的单选组合。</p>\n<ex-demo link="2" [code]="code[3]" notes="只需要把 <code>el-radio</code> 元素换成\n<code>el-radio-button</code> 元素即可，此组件还提供了 <code>size</code> 属性，支持\n<code>large</code> 和 <code>small</code> 两种">\n</ex-demo>\n\n<ex-document doc="radio"></ex-document>\n<ex-document doc="radio-group"></ex-document>\n<ex-document doc="radio-button"></ex-document>\n\n<ex-footer-nav [page]="page"></ex-footer-nav>\n'},1013:function(e,n){e.exports=""},1014:function(e,n,o){"use strict";n.a=['\n\x3c!--当设置 value 初始值属性后，会覆盖 placeholder--\x3e\n\x3c!--你可以通过 [(model)] 进行双向绑定--\x3e\n<el-input [model]="input" placeholder="请输入内容"></el-input>\n\n','\n\n<el-input placeholder="请输入内容"\n  [model]="input1"\n  [disabled]="true">\n</el-input>\n\n','\n\n\x3c!--你可以使用 (icon-click)=Function 来得到图标点击的事件--\x3e\n<el-input placeholder="请选择日期"\n  icon="search"\n  [model]="input2">\n</el-input>\n\n','\n<el-input type="textarea"\n  [rows]="2"\n  placeholder="请输入内容"\n  [model]="textarea">\n</el-input>\n','\n<el-input type="textarea"\n  autosize\n  placeholder="固定高度文本域"\n  [model]="textarea2">\n</el-input>\n\n<div style="margin: 20px 0;"></div>\n\n<el-input type="textarea"\n  [autosize]="{ minRows: 2, maxRows: 4}"\n  placeholder="自动调整高度 { minRows: 2, maxRows: 4 }"\n  [model]="textarea3">\n</el-input>\n','\n<div>\n  <el-input placeholder="请输入内容" [model]="input3">\n    <ng-template #prepend>\n      <span>Http://</span>\n    </ng-template>\n  </el-input>\n</div>\n\n<div style="margin-top: 15px;">\n  <el-input placeholder="请输入内容" [model]="input4">\n    <ng-template #append>\n      <span>.com</span>\n    </ng-template>\n  </el-input>\n</div>\n\n','\n<div class="demo-input-size">\n\n  <el-input size="large" placeholder="请输入内容" [model]="input6">\n  </el-input>\n  \n  <el-input placeholder="请输入内容" [model]="input7">\n  </el-input>\n  \n  <el-input size="small" placeholder="请输入内容" [model]="input8">\n  </el-input>\n  \n  <el-input size="mini" placeholder="请输入内容" [model]="input9">\n  </el-input>\n  \n</div>\n']},1015:function(e,n){e.exports='<h2>Input 输入框</h2>\n<p>通过鼠标或键盘输入字符</p>\n\n<h3>基础用法</h3>\n<ex-demo link="2" [code]="code[0]">\n</ex-demo>\n\n<h3>禁用状态</h3>\n<ex-demo link="2" [code]="code[1]" notes="通过 <code>disabled</code> 属性指定是否禁用 input 组件">\n</ex-demo>\n\n<h3>带 icon 的输入框</h3>\n<p>带有图标标记输入类型</p>\n<ex-demo link="2" [code]="code[2]" notes="通过 <code>icon</code> 属性在 input 组件尾部增加显示图标">\n</ex-demo>\n\n<h3>文本域</h3>\n<p>用于输入多行文本信息，通过将 <code>type</code> 属性的值指定为 textarea。</p>\n<ex-demo link="2" [code]="code[3]" notes="文本域高度可通过 <code>rows</code> 属性控制">\n</ex-demo>\n\n<h3>可自适应文本高度的文本域</h3>\n<p>通过设置 <code>autosize</code> 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 <code>autosize</code> 还可以设定为一个对象，指定最小行数和最大行数</p>\n<ex-demo link="2" [code]="code[4]">\n</ex-demo>\n\n<h3>复合型输入框</h3>\n<p>可前置或后置元素，一般为标签或按钮</p>\n<ex-demo link="2" [code]="code[5]">\n</ex-demo>\n\n<h3>尺寸</h3>\n<ex-demo link="2" [code]="code[6]" notes="可通过 <code>size</code> 属性指定输入框的尺寸，\n除了默认的大小外，还提供了 large、small 和 mini 三种尺寸">\n</ex-demo>\n\n\n<ex-document doc="input"></ex-document>\n<ex-footer-nav [page]="page"></ex-footer-nav>\n\n\n'},1016:function(e,n){e.exports=".demo-input.demo-zh-CN .el-select .el-input {\n  width: 110px; }\n\n.demo-input.demo-zh-CN .el-input {\n  width: 180px; }\n\n.demo-input.demo-zh-CN .el-textarea {\n  width: 414px; }\n\n.demo-input.demo-zh-CN .el-input-group {\n  width: 100%; }\n\n.demo-input.demo-zh-CN .demo-input-size .el-input {\n  vertical-align: top;\n  margin: 0 10px 10px 0; }\n\n.demo-input.demo-zh-CN .demo-autocomplete {\n  text-align: center; }\n  .demo-input.demo-zh-CN .demo-autocomplete .sub-title {\n    margin-bottom: 10px;\n    font-size: 14px;\n    color: #8492a6; }\n  .demo-input.demo-zh-CN .demo-autocomplete .el-col:not(:last-child) {\n    border-right: 1px solid rgba(224, 230, 237, 0.5); }\n  .demo-input.demo-zh-CN .demo-autocomplete .el-autocomplete {\n    text-align: left; }\n\n.el-autocomplete-suggestion.my-autocomplete li {\n  line-height: normal;\n  padding: 7px auto; }\n  .el-autocomplete-suggestion.my-autocomplete li .name {\n    text-overflow: ellipsis;\n    overflow: hidden; }\n  .el-autocomplete-suggestion.my-autocomplete li .addr {\n    font-size: 12px;\n    color: #b4b4b4; }\n  .el-autocomplete-suggestion.my-autocomplete li .highlighted .addr {\n    color: #ddd; }\n"},1017:function(e,n,o){"use strict";n.a=['\n\n\x3c!--你可以通过 [(model)] 进行双向绑定--\x3e\n<el-input-number [model]="5" [min]="1" [max]="10"></el-input-number>\n\n','\n\n<el-input-number [model]="1" [disabled]="true"></el-input-number>\n\n','\n\n<el-input-number [model]="10" [step]="2"></el-input-number>\n\n','\n<el-input-number size="large" [model]="1"></el-input-number>\n\n<el-input-number [model]="3"></el-input-number>\n\n<el-input-number size="small" [model]="5"></el-input-number>\n\n']},1018:function(e,n){e.exports='<h2>InputNumber 计数器</h2>\n<p>仅允许输入标准的数字值，可定义范围</p>\n\n<h3>基础用法</h3>\n<ex-demo [code]="code[0]" link="2" notes="变量的初始值即为默认值">\n</ex-demo>\n\n<h3>禁用状态</h3>\n<ex-demo [code]="code[1]" link="2" notes="<code>disabled</code> 属性接受一个 <code>boolean</code>">\n</ex-demo>\n\n<h3>步数</h3>\n<p>允许定义递增递减的步数控制</p>\n<ex-demo [code]="code[2]" link="2" notes="设置 <code>step</code> 属性可以控制步长，\n接受一个 <code>number</code>">\n</ex-demo>\n\n<h3>尺寸</h3>\n<p>额外提供了 <code>large</code>、<code>small</code> 两种尺寸的数字输入框</p>\n<ex-demo [code]="code[3]" link="2">\n</ex-demo>\n\n<ex-document doc="input-number"></ex-document>\n<ex-footer-nav [page]="page"></ex-footer-nav>\n\n\n'},1019:function(e,n){e.exports=".demo-box.demo-input-number .el-input-number + .el-input-number {\n  margin-left: 10px; }\n"},1020:function(e,n,o){"use strict";n.a=["\n\x3c!--你可以通过 model 来获取每次选择的值--\x3e\n\x3c!--或者通过绑定 (modelChange)=handle 来获得每次值改变的触发--\x3e\n<el-select [(model)]=\"value\" placeholder=\"请选择\">\n  <el-option *ngFor=\"let item of [{value: '选项1',label: '黄金糕' },\n      { value: '选项2', label: '双皮奶' },\n      { value: '选项3', label: '蚵仔煎' },\n      { value: '选项4', label: '龙须面' },\n      { value: '选项5', label: '北京烤鸭' }]\"\n    [label]=\"item.label\"\n    [value]=\"item.value\">\n  </el-option>\n</el-select>\n\n","\n\n<el-select [(model)]=\"value\" placeholder=\"请选择\">\n  <el-option *ngFor=\"let item of [{value: '选项1',label: '黄金糕' },\n      { value: '选项2', label: '双皮奶' },\n      { disabled: true, value: '选项3', label: '蚵仔煎' },\n      { value: '选项4', label: '龙须面' },\n      { value: '选项5', label: '北京烤鸭' }]\"\n    [label]=\"item.label\"\n    [disabled]=\"item.disabled\"\n    [value]=\"item.value\">\n  </el-option>\n</el-select>\n\n",'\n\n<el-select [model]="\'选项2\'" [disabled]="true">\n  <el-option *ngFor="let item of [{value: \'选项1\',label: \'黄金糕\' }]"\n    [label]="item.label"\n    [value]="item.value">\n  </el-option>\n</el-select>\n\n',"\n\n<el-select [model]=\"'选项2'\">\n  <el-option *ngFor=\"let item of [{value: '选项1',label: '黄金糕' },\n      { value: '选项2', label: '双皮奶' },\n      { disabled: true, value: '选项3', label: '蚵仔煎' },\n      { value: '选项4', label: '龙须面' },\n      { value: '选项5', label: '北京烤鸭' }]\"\n    [label]=\"item.label\"\n    [value]=\"item.value\">\n  </el-option>\n</el-select>\n\n","\n\n<el-select [(model)]=\"value\" [clearable]=\"true\">\n  <el-option *ngFor=\"let item of [{value: '选项1',label: '黄金糕' },\n      { value: '选项2', label: '双皮奶' },\n      { disabled: true, value: '选项3', label: '蚵仔煎' },\n      { value: '选项4', label: '龙须面' },\n      { value: '选项5', label: '北京烤鸭' }]\"\n    [label]=\"item.label\"\n    [value]=\"item.value\">\n  </el-option>\n</el-select>\n\n"]},1021:function(e,n){e.exports='<h2>Select 选择器</h2>\n<p>当选项过多时，使用下拉菜单展示并选择内容。</p>\n\n<h3>基础用法</h3>\n<p>适用广泛的基础单选</p>\n<ex-demo link="2" [code]="code[0]" notes="<code>el-option</code> 的属性\n<code>label</code>和<code>value</code>是必填的。">\n</ex-demo>\n\n<h3>有禁用选项</h3>\n<ex-demo link="2" [code]="code[1]" notes="在<code>el-option</code>中，设定\n<code>disabled</code>值为 true，即可禁用该选项。">\n</ex-demo>\n\n<h3>禁用状态</h3>\n<p>选择器不可用状态</p>\n<ex-demo link="2" [code]="code[2]" notes="在<code>el-option</code>中，设定\n<code>disabled</code>值为 true，即可禁用该选项。">\n</ex-demo>\n\n<h3>默认选中</h3>\n<p>初始状态时默认选中值</p>\n<ex-demo link="2" [code]="code[3]" notes="在<code>el-select</code>中，设定\nmodel 初始值等于需要选中项的 value 即可。">\n</ex-demo>\n\n<h3>可清空单选</h3>\n<p>包含清空按钮，可将选择器清空为初始状态</p>\n<ex-demo link="2" [code]="code[4]" notes="在<code>el-select</code>中，设定\n<code>clearable</code>值为 true，则可将选择器清空。">\n</ex-demo>\n\n\n<ex-document doc="select"></ex-document>\n<ex-document doc="select-option"></ex-document>\n\n<ex-footer-nav [page]="page"></ex-footer-nav>\n\n\n'},1022:function(e,n){e.exports=""},1023:function(e,n,o){"use strict";n.a=['\n\x3c!--你可以为 model 绑定布尔变量--\x3e\n\x3c!--或者通过绑定 (modelChange)=handle 来获得每次值改变的触发--\x3e\n<el-switch [(model)]="value1" [on-text]="" [off-text]="">\n</el-switch>\n<el-switch [model]="true" [on-color]="\'#13ce66\'" [off-color]="\'#ff4949\'">\n</el-switch>\n\n','\n\n<el-switch [(model)]="value1" [on-text]="" [off-text]=""\n  [disabled]="true">\n</el-switch>\n<el-switch [(model)]="value2" [on-color]="\'#13ce66\'" [off-color]="\'#ff4949\'"\n  [disabled]="true">\n</el-switch>\n\n','\n\n<el-switch [model]="true" [on-text]="" [off-text]=""\n  [on-icon-class]="\'el-icon-circle-check\'" [off-icon-class]="\'el-icon-circle-cross\'">\n</el-switch>\n\n\n']},1024:function(e,n){e.exports='<h2>Switch 开关</h2>\n<p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>\n\n<h3>基本用法</h3>\n<ex-demo link="2" [code]="code[0]">\n</ex-demo>\n\n<h3>禁用状态</h3>\n<ex-demo link="2" [code]="code[1]" notes="设置 <code>disabled</code> 属性，\n接受一个 <code>boolean</code>。">\n</ex-demo>\n\n<h3>自定义图标名</h3>\n<ex-demo link="2" [code]="code[2]" notes="设置指定图标后，会忽略文字显示">\n</ex-demo>\n\n\n<ex-document doc="switch"></ex-document>\n\n<ex-footer-nav [page]="page"></ex-footer-nav>\n\n\n'},1025:function(e,n){e.exports=".el-switch {\n  margin: 20px 20px 20px 0; }\n"},1026:function(e,n,o){"use strict";n.a=['\n\x3c!--你可以为 model 绑定整数变量--\x3e\n\x3c!--通过绑定 (modelChange)=handle 来获得每次值改变的触发--\x3e\n<div class="block">\n  <span class="demonstration">默认不区分颜色</span>\n  <el-rate [model]="4"></el-rate>\n</div>\n\n<div class="block">\n  <span class="demonstration">区分颜色</span>\n  <el-rate [model]="2"\n    [colors]="[\'#99A9BF\', \'#F7BA2A\', \'#FF9900\']">\n  </el-rate>\n</div>\n\n','\n\x3c!--通过设置 [texts] 可以为每一个分值指定对应的辅助文字。--\x3e\n\x3c!-- [texts] 为一个数组，长度应等于最大值 [max] --\x3e\n<el-rate [model]="3" [show-text]="true">\n</el-rate>\n\n',"\n\n<el-rate [model]=\"4\"\n  [icon-classes]=\"['el-icon-information', 'el-icon-information', 'el-icon-information']\"\n  [void-icon-class]=\"'el-icon-information'\"\n  [colors]=\"['#FF9900', '#FF9900', '#FF9900']\">\n</el-rate>\n\n",'\n\n<el-rate\n  [model]="3"\n  [disabled]="true"\n  [show-text]="true"\n  [text-color]="\'#ff9900\'">\n</el-rate>\n\n']},1027:function(e,n){e.exports='<h2>Rate 评分</h2>\n<p>评分组件</p>\n\n<h3>基础用法</h3>\n<ex-demo link="2" [code]="code[0]">\n</ex-demo>\n\n<h3>辅助文字</h3>\n<p>用辅助文字直接地表达对应分数</p>\n<ex-demo link="2" [code]="code[1]" notes="设置 <code>[show-text]</code> 属性会在右侧显示辅助文字">\n</ex-demo>\n\n<h3>其它 icon</h3>\n<p>当有多层评价时，可以用不同类型的 icon 区分评分层级</p>\n<ex-demo link="2" [code]="code[2]">\n</ex-demo>\n\n<h3>只读</h3>\n<p>只读的评分用来展示分数</p>\n<ex-demo link="2" [code]="code[3]" notes="为组件设置 <code>disabled</code> 属性表示组件为只读">\n</ex-demo>\n\n<ex-document doc="rate"></ex-document>\n\n<ex-footer-nav [page]="page"></ex-footer-nav>\n\n\n'},1028:function(e,n){e.exports=".block {\n  padding: 30px 0;\n  text-align: center;\n  border-right: solid 1px #EFF2F6;\n  float: left;\n  width: 50%;\n  box-sizing: border-box; }\n  .block:last-child {\n    border-right: none; }\n\n.demonstration {\n  display: block;\n  color: #8492a6;\n  font-size: 14px;\n  margin-bottom: 20px; }\n"},1029:function(e,n,o){"use strict";n.a=['\n\x3c!--你可以通过绑定 (modelChange)=handle 来获得每次值改变的触发--\x3e\n<el-cascader [options]="options" (modelChange)="changeHandle($event)">\n</el-cascader>\n\n<script type="text">\n  // in Component :\n  changeHandle(event: { path: string[], value: string }): void {\n    console.log(event)\n  }\n<\/script>\n\n',"\n\n<el-cascader [options]=\"disabledOptions\">\n</el-cascader>\n\n<script type=\"text\">\n  // in Component :\n  private disabledOptions: any[] = [{\n    value: 'disabled',\n    label: 'disabled',\n    disabled: true,\n  }, {\n    value: 'normal',\n    label: 'normal',\n  }]\n<\/script>\n",'\n\n<el-cascader [options]="options"\n  [all-levels]="false"\n  (modelChange)="changeHandle($event)">\n</el-cascader>\n\n<script type="text">\n  // in Component :\n  changeHandle(event: { path: string[], value: string }): void {\n    console.log(event)\n  }\n<\/script>\n\n','\n\n\x3c!--增加默认值需要输入每一层选项的 value--\x3e\n<el-cascader [options]="options"\n  [model]="[\'zujian\', \'layout\']"\n  (modelChange)="changeHandle($event)">\n</el-cascader>\n\n','\n\n<el-cascader [options]="options"\n  [change-on-select]="true"\n  (modelChange)="changeHandle($event)">\n</el-cascader>\n\n']},1030:function(e,n){e.exports='<h2>Cascader 级联选择器</h2>\n<p>当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。</p>\n\n<h3>基础用法</h3>\n<p>展示多个步骤。</p>\n<ex-demo link="2" [code]="code[0]" [class]="exClass" notes="<code>options</code>\n需要遵循一定的结构，具体可见文末的参考">\n</ex-demo>\n\n<h3>禁用选项</h3>\n<p>通过在数据源中设置 <code>disabled</code> 字段来声明该选项是禁用的</p>\n<ex-demo link="2" [code]="code[1]" [class]="exClass" notes="设置任意一项数据的 <code>disabled</code>\n为 <code>true</code>，即可禁用该项。">\n</ex-demo>\n\n<h3>仅显示最后一级</h3>\n<p>可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。</p>\n<ex-demo link="2" [code]="code[2]" [class]="exClass">\n</ex-demo>\n\n<h3>默认值</h3>\n<ex-demo link="2" [code]="code[3]" [class]="exClass">\n</ex-demo>\n\n<h3>选择即改变</h3>\n<p>点击或移入选项即表示选中该项，可用于选择任意一级菜单的选项。</p>\n<ex-demo link="2" [code]="code[4]" [class]="exClass" notes="设置属性的 <code>[change-on-select]</code>\n为 <code>true</code> 即可。">\n</ex-demo>\n\n<ex-document doc="cascader"></ex-document>\n\n<ex-footer-nav [page]="page"></ex-footer-nav>\n\n\n'},1031:function(e,n){e.exports=""},1032:function(e,n,o){"use strict";n.a=['\n\n<el-date-picker (modelChange)="handle($event)">\n</el-date-picker>\n\n<script type="text">\n// in component:\n\nhandle(time: number): void {\n  // [time] is string\n  // date style follow format props\n  console.log(time)\n}\n\n<\/script>\n\n','\n\n<el-date-picker (modelChange)="handle($event)"\n  [format]="\'yyyy年MM月-dd日\'">\n</el-date-picker>\n\n\n','\n\n<el-date-picker (modelChange)="handle($event)"\n  [disabled]="true">\n</el-date-picker>\n\n\n']},1033:function(e,n){e.exports='<h2>DatePicker 日期选择器</h2>\n<p>用于选择或输入日期</p>\n\n<h3>选择日</h3>\n<p>以「日」为基本单位，基础的日期选择控件</p>\n<ex-demo link="2" [code]="code[0]" [class]="exClass" notes="你可以在 <code>[model]</code>\n中定义一个初始值，如果留空，则优先显示当前时间。">\n</ex-demo>\n\n<h3>日期格式</h3>\n<p>预定义日期格式</p>\n<ex-demo link="2" [code]="code[1]" [class]="exClass" notes=" <code>[format]</code>\n属性非常强大，你可以发挥自己的想象力来定义它的格式。">\n</ex-demo>\n\n<h3>禁用</h3>\n<p>禁用整个日期组件</p>\n<ex-demo link="2" [code]="code[2]" [class]="exClass">\n</ex-demo>\n\n\n\n<ex-document doc="date-picker"></ex-document>\n\n<ex-footer-nav [page]="page"></ex-footer-nav>\n\n\n'},1034:function(e,n){e.exports=""},944:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),o.d(n,"FormModule",function(){return k});var t=o(7),l=o(1),c=o(46),a=o(1005),d=o(99),i=o(222),r=o(956),p=o(958),u=o(957),s=o(959),m=o(960),x=o(961),h=o(962),b=o(963),f=o(964),g=o(965),v=this&&this.__decorate||function(e,n,o,t){var l,c=arguments.length,a=c<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,o,t);else for(var d=e.length-1;d>=0;d--)(l=e[d])&&(a=(c<3?l(a):c>3?l(n,o,a):l(n,o))||a);return c>3&&a&&Object.defineProperty(n,o,a),a},k=function(){function FormModule(){}return FormModule=v([Object(l.M)({declarations:[r.a,p.a,u.a,s.a,m.a,x.a,h.a,b.a,f.a,g.a],imports:[t.b,c.a,a.a,d.b,i.a],exports:[r.a],providers:[]})],FormModule)}()},956:function(e,n,o){"use strict";o.d(n,"a",function(){return a});var t=o(1),l=this&&this.__decorate||function(e,n,o,t){var l,c=arguments.length,a=c<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,o,t);else for(var d=e.length-1;d>=0;d--)(l=e[d])&&(a=(c<3?l(a):c>3?l(n,o,a):l(n,o))||a);return c>3&&a&&Object.defineProperty(n,o,a),a},c=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},a=function(){function ExFormMainComponent(){}return ExFormMainComponent.prototype.ngOnInit=function(){},ExFormMainComponent=l([Object(t.o)({selector:"ex-form-main",template:o(1006),styles:[o(1007)]}),c("design:paramtypes",[])],ExFormMainComponent)}()},957:function(e,n,o){"use strict";o.d(n,"a",function(){return a});var t=o(1),l=o(1008),c=this&&this.__decorate||function(e,n,o,t){var l,c=arguments.length,a=c<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,o,t);else for(var d=e.length-1;d>=0;d--)(l=e[d])&&(a=(c<3?l(a):c>3?l(n,o,a):l(n,o))||a);return c>3&&a&&Object.defineProperty(n,o,a),a},a=function(){function ExCheckboxComponent(){this.code=l.a,this.page={previous:{name:"Radio 单选框",link:"/form/radio"},next:{name:"Input 输入框",link:"/form/input"}}}return ExCheckboxComponent.prototype.ngOnInit=function(){},ExCheckboxComponent=c([Object(t.o)({selector:"ex-checkbox",template:o(1009),styles:[o(1010)]})],ExCheckboxComponent)}()},958:function(e,n,o){"use strict";o.d(n,"a",function(){return a});var t=o(1),l=o(1011),c=this&&this.__decorate||function(e,n,o,t){var l,c=arguments.length,a=c<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,o,t);else for(var d=e.length-1;d>=0;d--)(l=e[d])&&(a=(c<3?l(a):c>3?l(n,o,a):l(n,o))||a);return c>3&&a&&Object.defineProperty(n,o,a),a},a=function(){function ExRadioComponent(){this.code=l.a,this.page={previous:{name:"Button 按钮",link:"/form/radio"},next:{name:"Checkbox 多选框",link:"/form/checkbox"}}}return ExRadioComponent.prototype.ngOnInit=function(){},ExRadioComponent=c([Object(t.o)({selector:"ex-radio",template:o(1012),styles:[o(1013)]})],ExRadioComponent)}()},959:function(e,n,o){"use strict";o.d(n,"a",function(){return a});var t=o(1),l=o(1014),c=this&&this.__decorate||function(e,n,o,t){var l,c=arguments.length,a=c<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,o,t);else for(var d=e.length-1;d>=0;d--)(l=e[d])&&(a=(c<3?l(a):c>3?l(n,o,a):l(n,o))||a);return c>3&&a&&Object.defineProperty(n,o,a),a},a=function(){function ExInputComponent(){this.code=l.a,this.page={previous:{name:"Check 多选框",link:"/form/checkbox"},next:{name:"InputNumber 计数器",link:"/form/input-number"}}}return ExInputComponent.prototype.ngOnInit=function(){},ExInputComponent=c([Object(t.o)({selector:"ex-input",template:o(1015),styles:[o(1016)],encapsulation:t._19.None})],ExInputComponent)}()},960:function(e,n,o){"use strict";o.d(n,"a",function(){return a});var t=o(1),l=o(1017),c=this&&this.__decorate||function(e,n,o,t){var l,c=arguments.length,a=c<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,o,t);else for(var d=e.length-1;d>=0;d--)(l=e[d])&&(a=(c<3?l(a):c>3?l(n,o,a):l(n,o))||a);return c>3&&a&&Object.defineProperty(n,o,a),a},a=function(){function ExInputNumberComponent(){this.code=l.a,this.page={previous:{name:"Input 输入框",link:"/form/input"},next:{name:"Select 选择器",link:"/form/select"}}}return ExInputNumberComponent.prototype.ngOnInit=function(){},ExInputNumberComponent=c([Object(t.o)({selector:"ex-input-number",template:o(1018),styles:[o(1019)],encapsulation:t._19.None})],ExInputNumberComponent)}()},961:function(e,n,o){"use strict";o.d(n,"a",function(){return a});var t=o(1),l=o(1020),c=this&&this.__decorate||function(e,n,o,t){var l,c=arguments.length,a=c<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,o,t);else for(var d=e.length-1;d>=0;d--)(l=e[d])&&(a=(c<3?l(a):c>3?l(n,o,a):l(n,o))||a);return c>3&&a&&Object.defineProperty(n,o,a),a},a=function(){function ExSelectComponent(){this.code=l.a,this.page={previous:{name:"InputNumber 计数器",link:"/form/input-number"},next:{name:"Cascader 级联选择器",link:"/form/cascader"}}}return ExSelectComponent.prototype.ngOnInit=function(){},ExSelectComponent=c([Object(t.o)({selector:"ex-select",template:o(1021),styles:[o(1022)],encapsulation:t._19.None})],ExSelectComponent)}()},962:function(e,n,o){"use strict";o.d(n,"a",function(){return a});var t=o(1),l=o(1023),c=this&&this.__decorate||function(e,n,o,t){var l,c=arguments.length,a=c<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,o,t);else for(var d=e.length-1;d>=0;d--)(l=e[d])&&(a=(c<3?l(a):c>3?l(n,o,a):l(n,o))||a);return c>3&&a&&Object.defineProperty(n,o,a),a},a=function(){function ExSwitchComponent(){this.code=l.a,this.page={previous:{name:"Cascader 级联选择器",link:"/form/cascader"},next:{name:"DatePicker 日期选择器",link:"/form/date-picker"}}}return ExSwitchComponent.prototype.ngOnInit=function(){},ExSwitchComponent=c([Object(t.o)({selector:"ex-switch",template:o(1024),styles:[o(1025)],encapsulation:t._19.None})],ExSwitchComponent)}()},963:function(e,n,o){"use strict";o.d(n,"a",function(){return a});var t=o(1),l=o(1026),c=this&&this.__decorate||function(e,n,o,t){var l,c=arguments.length,a=c<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,o,t);else for(var d=e.length-1;d>=0;d--)(l=e[d])&&(a=(c<3?l(a):c>3?l(n,o,a):l(n,o))||a);return c>3&&a&&Object.defineProperty(n,o,a),a},a=function(){function ExRateComponent(){this.code=l.a,this.page={previous:{name:"DatePicker 日期选择器",link:"/form/date-picker"},next:{name:"Tag 标签",link:"/data/tag"}}}return ExRateComponent.prototype.ngOnInit=function(){},ExRateComponent=c([Object(t.o)({selector:"ex-rate",template:o(1027),styles:[o(1028)],encapsulation:t._19.None})],ExRateComponent)}()},964:function(e,n,o){"use strict";o.d(n,"a",function(){return d});var t=o(1),l=o(1029),c=this&&this.__decorate||function(e,n,o,t){var l,c=arguments.length,a=c<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,o,t);else for(var d=e.length-1;d>=0;d--)(l=e[d])&&(a=(c<3?l(a):c>3?l(n,o,a):l(n,o))||a);return c>3&&a&&Object.defineProperty(n,o,a),a},a=function(){function ExCascaderDemoComponent(){this.options=[{value:"zhinan",label:"指南",children:[{value:"shejiyuanze",label:"设计原则",children:[{value:"yizhi",label:"一致"},{value:"fankui",label:"反馈"},{value:"xiaolv",label:"效率"},{value:"kekong",label:"可控"}]}]},{value:"zujian",label:"组件",children:[{value:"layout",label:"Layout 布局"},{value:"color",label:"Color 色彩"},{value:"typography",label:"Typography 字体"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio 单选框"},{value:"checkbox",label:"Checkbox 多选框"},{value:"input",label:"Input 输入框"},{value:"input-number",label:"InputNumber 计数器"},{value:"select",label:"Select 选择器"},{value:"cascader",label:"Cascader 级联选择器"}]}],this.disabledOptions=[{value:"disabled",label:"disabled",disabled:!0},{value:"normal",label:"normal"}]}return ExCascaderDemoComponent.prototype.changeHandle=function(e){console.log(e)},ExCascaderDemoComponent=c([Object(t.o)({selector:"ex-cascader-demo"})],ExCascaderDemoComponent)}(),d=function(){function ExCascaderComponent(){this.code=l.a,this.page={previous:{name:"Select 选择器",link:"/form/select"},next:{name:"Switch 开关",link:"/form/switch"}},this.exClass=a}return ExCascaderComponent.prototype.ngOnInit=function(){},ExCascaderComponent=c([Object(t.o)({selector:"ex-cascader",template:o(1030),styles:[o(1031)],encapsulation:t._19.None})],ExCascaderComponent)}()},965:function(e,n,o){"use strict";o.d(n,"a",function(){return a});var t=o(1),l=o(1032),c=this&&this.__decorate||function(e,n,o,t){var l,c=arguments.length,a=c<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,o):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,o,t);else for(var d=e.length-1;d>=0;d--)(l=e[d])&&(a=(c<3?l(a):c>3?l(n,o,a):l(n,o))||a);return c>3&&a&&Object.defineProperty(n,o,a),a},a=function(){function ExDatePickerComponent(){this.code=l.a,this.page={previous:{name:"Switch 开关",link:"/form/switch"},next:{name:"Rate 评分",link:"/form/rate"}},this.exClass=function(){function class_1(){}return class_1.prototype.handle=function(e){console.log(e)},class_1}()}return ExDatePickerComponent.prototype.ngOnInit=function(){},ExDatePickerComponent=c([Object(t.o)({selector:"ex-date-picker",template:o(1033),styles:[o(1034)],encapsulation:t._19.None})],ExDatePickerComponent)}()}});