> 定位一个网页DOM元素，一般会以 id,class,name 作为标识符，通过 `document.getElementById()`、`document.getElementByName()` 、 `document.querySelector()` 
API来定位、获取指定元素。而针对一些无任何标识的节点，如 `<span>文本</sapn>` 是否有方法定位到它们呢？ 应用场景：[pagenote](https://addons.mozilla.org/zh-CN/firefox/addon/page-note/)

## 引入&使用方法

### 引入一：JavaScript文件
```javascript
<script src="./dist/whatsElement.js"></script>
```

### 引入二：npm包引用(推荐)
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

## 运算结果
返回结果 
```javascript
result = {
  wid:"", // wid 为最终的DOM元素在网页中的唯一标识符
  type:"", // 结果为：document.getElementById(),document.getElementsByName(),document.querySelector()
  top:0, // 在文档中的位置 top
  left:0, // 在文档中的位置 left
  viewLeft:0, // 在视口的位置 left
  viewTop: 0, // 在视口的位置 top
  text: 'innerText' // element.innerText
}
```


## API
* *`whatsElement.getTarget(queryString)`*  根据一个标识符获取一个HTML元素对象
* *`whatsElement.getUniqueId(HTMLElement)`*  输入一个HTML对象，计算出它的唯一标识符、定位方式
* *`whatsElement.draw(result)`*  根据 `whatsElement.getUniqueId(HTMLElement)`的结果在页面中渲染出结果信息。`pure` 版本不提供
* *`whatsElement.clean()`*  删除 `whatsElement.draw()` 在网页中绘制的提示框。 `pure` 版本不提供

## 更多
为了将代码极致压缩，提供pure版本whatsElement，该版本仅有计算逻辑不包含UI，不到4kb
使用方法：

`import whatsElement from 'whats-element/pure'`

## 开发
```shell script
npm install
npm install gulp -g
gulp release // 打包至dist文件夹
```
