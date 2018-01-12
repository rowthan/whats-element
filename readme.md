> 定位一个网页DOM元素，一般会通过 id,class,name 作为标识符，通过 `document.getElementById()`、`document.getElementByName()` 或 `document.querySelector()` 
原生API来定位获取指定元素。而针对一些节点，如 `<span>文本</sapn>` 是否有方法定位到它们呢？ 

## 使用方法
### 方式一、引入JavaScript文件
下载 whatselement.js   
demo.html 中使用：
```javascript
<script src="whatsElement.js"></script>

 var whats = new whatsElement();
  document.addEventListener('mousedown', (event) => {
    if(event.button === 2){
      const target = event.target;
      const result = whats.getUniqueId(target);
    }
  })
```

### 方式二、npm包引用
安装依赖包
```
npm install whats-element --save
```
demo.js
```javascript
import whatsElement from 'whats-element';
 var comput = new whatsElement();
  document.addEventListener('mousedown', (event) => {
    if(event.button === 2){
      const target = event.target;
      comput.getUniqueId(target);
    }
  })
```

## 运算结果
```javascript
 result = whatsElement.getUniqueId(target);
```
返回结果 
```javascript
result = {
  uniqueId:"", // uniqueId 为最终的DOM元素在网页中的唯一标识符
  queryType:"" // 结果为：byId,byName,byClass,byValue,byMixed,byOrder,byParent 其中一种
}
```
* queryType === 'byId'：表示通过id可以定位到该元素。使用 `document.getElementById(result.uniqueId)` 获取该对象
* queryType === 'byName'：表示可以通过name定位到该元素。使用 `document.getElementsByName(result.uniqueId)[0]` 获取对象
* 其他四种情况下，可以通过 `document.querySelector(result.uniqueId)` 获取对象  
其中四种queryType分别代表：
* byClass，可以通过 class 来定位该元素。如 `.username`
* byValue，针对 radio 标签可以通过 value 定位，如 `input[value='male'][name='gender'']`
* byMixed，只通过 id,class中的一种无法定位到该元素，需要联合使用 id,class 来定位。如 `input#user.username`
* byOrder，通过序列号可以定位到元素，如 `div.title:nth-child(2)`
* byParent，指不能元素自身所具备的特征值定位到本身，需要借助于父节点才能定位。如 `article>.title`


## API
whatsElement 提供以下方法
* *`whatsElement.getTarget(queryString)`*  根据一个标识符获取一个HTML元素对象
* *`whatsElement.getUniqueId(HTMLElement)`*  输入一个HTML对象，计算出它的唯一标识符、定位方式
* *`whatsElement.draw(result)`*  根据 `whatsElement.getUniqueId(HTMLElement)`的结果在页面中渲染出结果信息。

<img src="./img/draw.png" alt="whatsElement.draw(result)" >

注：`whatsElement.getUniqueId(HTMLElement)`默认自动调用该方法。如果不希望在网页中渲染出结果信息，new 对象时，可如下使用：
```javascript
var compute = new whatsElement({draw:false});//传入参数{draw:false}
var result = comput.getUniqueId(HTMLElement);
```
* *`whatsElement.clean()`*  删除 `whatsElement.draw()` 在网页中绘制的提示框。

TODO 绘制该元素的相关信息，如高度宽度背景图片,右侧缩略位点
将关闭按钮设置为 固定住按钮。固定后可以拖拽