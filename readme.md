> 定位一个网页DOM元素，一般会以 id,class,name 作为标识符，通过 `getElementById`、`getElementByName` 、 `querySelector` 
API来定位、获取指定元素。而针对一些无任何标识的节点，如 `<span>文本</sapn>` 是否有方法定位到它们呢？ 


## 作用
* 为任意DOM元素，计算出它可定位到它的唯一标识符
* 为任意DOM元素，计算出它的DOM信息，如基于窗口的相对位置，基于文档的相对位置，是否在视窗内。

## 引入&使用方法

### 方式一：JavaScript文件
```javascript
<script src="./dist/whatsElement.js"></script>
```

### 方式二：npm包引用(推荐)
```shell script
npm install whats-element --save
```
```javascript
import whatsElement from 'whats-element';
```

### 使用方法
```javascript
var whats = new whatsElement();
document.addEventListener('mousedown', (event) => {
  const result = whats.getUniqueId(event.target)// getUniqueId()参数为空时，默认计算鼠标点击到的最后一个HTML元素。
  console.log(result) // {wid:'xxxx',type:'document.getElementById()'}
})
```

## API

### *`whatsElement.getUniqueId(HTMLElement)`*  
输入一个HTML对象，计算出它的唯一标识符、定位方式。
```javascript
result = {
  wid:"", // wid 为最终的DOM元素在网页中的唯一标识符
  type:"", // 结果为：document.getElementById(),document.getElementsByName(),document.querySelector()
}
```

### *`whatsElement.getTarget(wid)`*  
根据一个标识符获取一个HTML元素对象。返回一个 `DOM 节点`或 `NULL`

### *`whatsElement.compute(HTMLElement)`*
计算一个HTML节点的相关信息，返回包括：
```javascript
result = {
  wid:"", // 同 getUniqueId 返回
  type:"", // 同 getUniqueId 返回
  top:0, // 在文档中的位置 top
  left:0, // 在文档中的位置 left
  viewLeft:0, // 在视口的位置 left
  viewTop: 0, // 在视口的位置 top
  text: '', // element.innerText
  visible: false, // 是否在当前可视区域内，且能被肉眼看见（opacity不为0，visible不为false,display不为none）
}
```

---

### 【debug使用】`whatsElement.draw(result)`
根据 `whatsElement.getUniqueId(HTMLElement)`的结果在页面中渲染出结果信息。`pure` 版本不提供

### 【debug使用】 `whatsElement.clean()` 
删除上述 `whatsElement.draw()` 在网页中绘制的提示框。 `pure` 版本不提供

## pure 版本
为了将代码极致压缩，提供pure版本whatsElement，该版本仅有计算逻辑不包含UI，不到4kb
使用方法：

`import whatsElement from 'whats-element/pure'`

## 开发
```shell script
npm install
npm install gulp -g
gulp release // 打包至dist文件夹
```

## 应用场景
* [pagenote](https://addons.mozilla.org/zh-CN/firefox/addon/page-note/)

