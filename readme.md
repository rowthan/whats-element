> 通常我们会通过 id,class,name来定位到我们需要控制的网页元素，
而更多的元素是没有这些属性的，比如就是一个简单的`<span>文本</sapn>`标签，
那么这些元素是否也有方法定位到它们呢？ 理论上来说网页上的每一个元素一定存在一个用于定位到它的唯一标识符。
whats-element.js 就能够计算出任意一个网页元素的唯一标识符。

## 获取元素使用方法
获取元素对象，常用的有如下
```javascript
document.getElementById(queryString) || document.getElementsByName(queryString)[0] || document.querySelector(queryString)
```
whats-element.js 计算得出的 queryString 结果，就适用于以上api去定位元素，按照优先顺序，先根据 id 号查询，再根据 name 名查询，
如果以上都没有结果，那么就使用 css 选择规范查找元素。