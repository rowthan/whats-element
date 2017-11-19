> 定位一个网页DOM元素，一般会通过 id,class,name 作为标识符，通过 `document.getElementById()`、`document.getElementByName()` 或 `document.querySelector()` 
原生API来定位获取指定元素。而针对一些节点，如 `<span>文本</sapn>` 是否有方法定位到它们呢？ 

理论上来说网页上的每一个元素一定存在一个用于定位到它的唯一标识符。 whats-element.js 就能够计算出任意一个DOM元素的唯一标识符。

## 使用方法
### 一、引入JavaScript文件
下载 whatselement.js   
demo.html 中使用：
```javascript
<script src="whats-element.js"></script>

document.addEventListener('mousedown', (event) => {
    const target = event.target;
    if (event.button === 2) {
      const result = whatsElement.getUniqueId(target); //target 为DOM节点对象
    }
});
```
返回结果 
```javascript
result = {
  uniqueId:"", // uniqueId 为最终的DOM元素在网页中的唯一标识符
  queryType:"" // 结果为：byId,byName,byClass,byMixed,byOrder,byParent 其中一种
}
```

### 二、npm包引用
安装依赖包
```
npm install whats-element
```
demo.js
```javascript
import whatsElement from 'whats-element';
document.addEventListener('mousedown', (event) => {
    const target = event.target;
    if (event.button === 2) {
      const result = whatsElement.getUniqueId(target);
    }
});
```

## 运算结果
```javascript
const result = whatsElement.getUniqueId(target);
```
result结果结构如下：
```javascript
result = {
  uniqueId:"", // uniqueId 为最终的DOM元素在网页中的唯一标识符
  queryType:"" // 结果为：byId,byName,byClass,byMixed,byOrder,byParent 其中一种
}
```
* queryType === 'byId'，可以通过 `document.getElementById(result.uniqueId)` 获取该对象
* queryType === 'byName',可以通过 `document.getElementsByName(result.uniqueId)[0]` 获取对象
* 其他四种情况下，可以通过 `document.querySelector(result.uniqueId)` 获取对象

其中 whats-element.js 还提供了一个获取DOM节点方法:
```javascript
whatsElement.getTarget(result.uniqueId);//适用于任何queryType
```