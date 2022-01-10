(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.computeOffset = computeOffset;
exports.getCoords = getCoords;
exports.initFunction = initFunction;
exports.simpleFyId = simpleFyId;

function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  var body = document.body;
  var docEl = document.documentElement;
  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;
  var top = box.top + scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;
  return {
    top: Math.round(top),
    left: Math.round(left)
  };
}

function computeOffset(element) {
  var offsetLeft = element.offsetLeft;
  var offsetTop = element.offsetTop;

  if (element.offsetParent) {
    var parentOffset = computeOffset(element.offsetParent);
    offsetLeft += parentOffset.offsetLeft;
    offsetTop += parentOffset.offsetTop;
  }

  return {
    offsetLeft: offsetLeft,
    offsetTop: offsetTop
  };
}

function initFunction() {
  var init = function init(argument) {
    this.options = Object.assign({}, {
      draw: true,

      /**尽可能短的wid*/
      simpleId: true
    }, argument);
    this.lastClick = document.body;
    var that = this;
    /**点击其他地方时，清除*/

    document.addEventListener('mousedown', function (event) {
      that.lastClick = event.target;

      if (that.focusedElement !== that.lastClick) {
        init.prototype.clean();
      }
    });
  };

  return init;
}

function simpleFyId(wid) {
  if (!wid) {
    return wid;
  }

  var result = wid; // todo 递归二分法 衰减

  try {
    var classList = wid.split('.');
    var newQuery = classList.slice(0, Math.fround(classList.length / 2)).join('.');

    if (!newQuery) {
      return wid;
    }

    if (document.querySelector(newQuery) === document.querySelector(wid)) {
      result = newQuery;
    }
  } catch (e) {}

  return result;
}

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helper = require("./helper");

var _whatsElementPure = _interopRequireDefault(require("./whatsElementPure.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*使用 UI，导出js使用 具备完善功能  */
var PREFIX = 'whats-element',
    containerID = PREFIX + '-tip-container',
    deleteID = PREFIX + '-tip-delete',
    copyID = PREFIX + "-copy",
    uniqueContainer = PREFIX + '-unique-container',
    uniqueID = PREFIX + '-unique-id';
var whatsWithUI = (0, _helper.initFunction)(),
    prototype = whatsWithUI.prototype;
prototype.getTarget = _whatsElementPure.default.prototype.getTarget;
prototype.getUniqueId = _whatsElementPure.default.prototype.getUniqueId;
prototype.compute = _whatsElementPure.default.prototype.compute;

prototype.draw = function (result) {
  console.log("draw ui");
  var target = prototype.getTarget(result.wid);

  if (!target) {
    console.error("no this element:" + result.wid);
    return;
  }

  var tip = document.getElementById(containerID) ? document.getElementById(containerID) : createElement("aside", containerID);
  tip.innerHTML = "";
  tip.addEventListener("mousedown", function (e) {
    e.stopPropagation();
  });
  var deleteButton = createElement("div", deleteID);
  deleteButton.innerText = 'x';

  deleteButton.onclick = function (e) {
    e.stopPropagation();
    prototype.clean();
  };

  tip.appendChild(deleteButton);
  var tipQueryContainer = createElement("div", uniqueContainer);
  var query = createElement("input", uniqueID);
  query.readOnly = true;
  query.className = result.type;
  query.value = result.wid;
  var tipCopy = createElement("div", copyID);
  tipCopy.setAttribute("query-type", result.type);
  tipCopy.innerText = "复制";

  tipCopy.onclick = function () {
    query.select();
    document.execCommand("Copy");
  };

  tipQueryContainer.appendChild(query);
  tipQueryContainer.appendChild(tipCopy);
  tip.appendChild(tipQueryContainer);
  var top = target.getBoundingClientRect().top + target.offsetHeight,
      tempLeft = target.getBoundingClientRect().left,
      toLeft = tempLeft < 100 ? tempLeft : tempLeft + target.offsetWidth / 2 - (tip.offsetWidth | 240) / 2 - document.body.getBoundingClientRect().left;
  tip.style.left = toLeft + "px";
  tip.style.top = top + window.scrollY + 10 + "px";
  document.body.appendChild(tip);
  revertStyle();
  target.classList.add('whats-element-active');
};

prototype.clean = function () {
  revertStyle();
  var container = document.getElementById(containerID);

  if (container) {
    container.outerHTML = '';
  }
};

function createElement(type, id) {
  var el = document.createElement(type ? type : "div");
  id ? el.id = id : "";
  return el;
}

function revertStyle() {
  document.querySelectorAll("." + PREFIX + "-active").forEach(function (element) {
    element.classList.remove(PREFIX + '-active');
  });
}

var style = createElement("style"),
    styleString = "#" + containerID + "{position:absolute;color:#8ed3fb;font-size:14px;z-index:1000;background-color:rgba(255, 255, 255,0.9);box-sizing:border-box;box-shadow:rgba(0, 0, 0, 0.2) 0px 1px 10px 3px;padding: 10px 20px;border-radius: 36px;}";
styleString += "#" + deleteID + "{cursor:pointer;position:absolute;top:-10px;width:20px;height: 20px;left:calc(50% - 8px);text-align:center;clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%);background:#fff;}";
styleString += "#" + deleteID + ":hover{background:#fffbf0}";
styleString += "#" + uniqueContainer + "{display:flex;justify-content:space-around;}";
styleString += "#" + uniqueID + "{border:1px solid #d1d5da;box-shadow:inset 0 1px 2px rgba(27,31,35,0.075);text-indent:10px;}";
styleString += "#" + copyID + "{background:aliceblue;cursor: pointer;}";
styleString += "#" + copyID + "::after{position:absolute;z-index:1000000;padding: 0.1em 0.75em;color: #fff;text-align:center;text-shadow:none;text-transform:none;content:attr(query-type);background: #a88462;border-radius: 3px;opacity: 0;transition:all .5s}";
styleString += "#" + copyID + ":hover:after{display:inline-block;opacity: 1;}";
styleString += ".whats-element-active{outline:red 1px dashed !important}";
style.innerText = styleString;
document.head.appendChild(style);
window.whatsElement = whatsWithUI;
var _default = whatsWithUI;
exports.default = _default;

},{"./helper":1,"./whatsElementPure.js":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helper = require("./helper");

/**
 * Created by rowthan on 2017/12/9.
 * 包含核心 api 获取id,获取元素，不含UI
 */
var document = window.document,
    noop = function noop() {},
    whatsElementPure = (0, _helper.initFunction)(),
    prototype = whatsElementPure.prototype;

var SPLIT_MODE_CODE = '  ';

prototype.getUniqueId = function (element, isParent) {
  element = element ? element : this.lastClick;

  if (!(element instanceof HTMLElement)) {
    console.error("input is not a HTML element", element);
    return {};
  }

  var result = {
    wid: "",
    type: ""
  },
      //construct data info of the element
  id = element.id,
      name = element.name,
      tag = element.tagName.toLowerCase(),
      type = element.type ? element.type.toLowerCase() : "",
      className = "",
      classList = element.classList || [];
  classList.forEach(function (item) {
    if (/^[a-zA-Z]/.test(item)) {
      // 过滤非法 class 名称
      className += "." + item;
    }
  });

  if (tag === "body" || tag === "html") {
    result.wid = tag;
    result.type = tag;
  } //locate by id


  if (id && document.getElementById(id) === element) {
    /**当不为parent定位，且设置为简单结果时，直接返回id 否则使用完整路径标识符。注：两个if顺序不能更换，递归调用时 simpleId为undefined*/
    if (!isParent && this.options.simpleId) {
      result.wid = id;
    }
    /*如果为parent定位，或者设置为完整结果时候，返回tag#id*/
    else {
      var queryTag = tag + "#" + id;

      try {
        var queryResult = document.querySelector(queryTag);

        if (queryResult === element) {
          result.wid = queryTag;
        }
      } catch (e) {
        console.log('id 不合法');
      }
    }

    result.type = "document.getElementById()";
  } //locate by name


  if (!result.wid && name && document.getElementsByName(name)[0] === element) {
    result.wid = name;
    result.type = "document.getElementsByName()";
  } //locate by class


  if (!result.wid && className && document.querySelector(tag + className) === element) {
    result.wid = tag + className;
    result.type = "document.querySelector()";
  } //for radio


  if (!result.wid && type === "radio") {
    var value = element.value,
        queryString = tag + "[value='" + value + "']";

    if (name) {
      queryString += "[name='" + name + "']";
    }

    if (document.querySelector(queryString) === element) {
      result.wid = queryString;
      result.type = "document.querySelector()";
    }
  }

  if (!result.wid && tag === 'a') {
    var hrefAttr = element.attributes.href;
    var href = hrefAttr ? hrefAttr.value : '';

    if (href) {
      queryString = "a[href='" + href + "']";
      var selectedEl = document.querySelector(queryString);

      if (selectedEl === element) {
        result.wid = queryString;
        result.type = "document.querySelector()";
      }
    }
  } //locate by tag,class,name


  if (!result.wid) {
    queryString = tag;
    queryString = className ? queryString + className : queryString;
    queryString = name ? queryString + "[name='" + name + "']" : queryString;

    if (document.querySelector(queryString) === element) {
      result.wid = queryString;
      result.type = "document.querySelector()";
    }
  } //locate by order


  if (!result.wid) {
    queryString = tag;
    queryString = className ? queryString + className : queryString;
    var elements = document.querySelectorAll(queryString);

    if (elements && elements.length > 0) {
      var index = null;

      for (var i = 0; i < elements.length; i++) {
        if (element === elements[i]) {
          index = i + 1;
          break;
        }
      }

      if (index) {
        queryString = queryString + ":nth-child(" + index + ")";

        if (document.querySelector(queryString) === element) {
          result.wid = queryString;
          result.type = "document.querySelector()";
        }
      }
    }
  }

  if (result.wid) {
    // 通过本身已经定位到自己时，尝试简化ID长度
    result.wid = (0, _helper.simpleFyId)(result.wid);
  } //location by parent
  else {
    var parentNode = element.parentNode;
    var parentQueryResult = whatsElementPure.prototype.getUniqueId(parentNode, true);
    var parentQueryString = parentQueryResult.wid;
    parentQueryString = (0, _helper.simpleFyId)(parentQueryString);

    if (!parentQueryString) {
      return {
        wid: null,
        type: "NO_LOCATION_NOT_LOCATED_PARENT_WID"
      };
    } // 通过 name.class 来寻找子节点


    var targetQuery = tag;

    if (className) {
      targetQuery += className;
    }

    queryString = parentQueryString + SPLIT_MODE_CODE + targetQuery;
    var queryElements = parentNode.querySelectorAll(queryString);
    var firstChildNodes = [].filter.call(queryElements, function (item) {
      return item.parentNode === parentNode;
    });

    if (firstChildNodes.length > 1) {
      queryString = null;

      var _index = -1;

      for (var j = 0; j < parentNode.children.length; j++) {
        // 只比较一级子节点
        if (parentNode.children[j] === element) {
          _index = j + 1;
          break;
        }
      }

      if (_index >= 1) {
        queryString = parentQueryString + SPLIT_MODE_CODE + targetQuery + ":nth-child(" + _index + ")";
        var queryTarget = this.getTarget(queryString, 'split');

        if (queryTarget !== element) {
          queryString = '';
        }
      }
    }

    result.wid = queryString;
    result.type = "split";
  }

  this.focusedElement = prototype.getTarget(result.wid);

  if (!isParent && this.options.draw) {
    this.__proto__.draw(result);
  }

  if (result.wid.length > '10') {
    result.warn = true;
  }

  return result;
};

prototype.getTarget = function (queryString, type, root) {
  var result = null;
  queryString = queryString ? queryString.trim() : '';

  try {
    var findRoot = root || document;

    if (!findRoot || !queryString) {
      return;
    } // 没有指定 type 的情况下，判断是否需要根据父元素查找，split 模式


    var splitedSelector = queryString.split(/\s{2}/);

    if (!type) {
      if (splitedSelector.length > 1) {
        type = 'split';
      }
    }

    switch (type) {
      // TODO 生成ID时避免使用 id
      case 'document.getElementById()':
        // 仅body有
        result = findRoot.getElementById ? findRoot.getElementById(queryString) : null;
        break;

      case 'document.getElementsByName()':
        // 仅body有
        result = findRoot.getElementsByName ? findRoot.getElementsByName(queryString)[0] : null;
        break;

      case 'document.querySelector()':
        // getElementsByTagName
        result = findRoot.querySelector ? findRoot.querySelector(queryString) : null;
        break;

      case 'split':
        var selectors = splitedSelector.filter(function (item) {
          return item ? !!item.trim() : false;
        });

        if (selectors.length > 1) {
          var currentSelector = selectors[0];
          var matchedChildNodes = findRoot.querySelectorAll(currentSelector);
          var currentTarget = matchedChildNodes[0] || this.getTarget(currentSelector); // 只查找符合要求的子元素

          if (root) {
            currentTarget = [].find.call(matchedChildNodes, function (item) {
              return item.parentNode === root;
            });
          }

          selectors.splice(0, 1);
          var nextString = selectors.join(SPLIT_MODE_CODE);
          result = this.getTarget(nextString, 'split', currentTarget);
        } else {
          // 全局查找符合要求的，root 比较
          var matchedElements = document.querySelectorAll(selectors[0]);
          result = [].find.call(matchedElements, function (item) {
            return item.parentNode === root;
          });
        }

        break;

      default:
        result = this.getTarget(queryString, 'document.getElementById()') || this.getTarget(queryString, 'document.getElementsByName()') || this.getTarget(queryString, 'document.querySelector()');
    }
  } catch (e) {
    console.error('定位ID不合法', e);
  }

  return result;
};

prototype.compute = function (element) {
  element = element ? element : this.lastClick;
  var uinque = this.getUniqueId(element);
  var viewPosition = element.getBoundingClientRect();
  var inView = viewPosition.left > 0 && viewPosition.left < window.innerWidth && viewPosition.top > 0 && viewPosition.top < window.innerHeight;
  var offset = (0, _helper.computeOffset)(element);
  var result = {
    wid: uinque.wid,
    type: uinque.type,
    top: (0, _helper.getCoords)(element).top,
    left: (0, _helper.getCoords)(element).left,
    viewLeft: viewPosition.left,
    viewTop: viewPosition.top,
    text: element.innerText,
    visible: inView,
    offsetBodyTop: offset.offsetTop,
    offsetBodyLeft: offset.offsetLeft
  };
  return result;
};

prototype.clean = noop;
prototype.draw = noop;
window.whatsElement = whatsElementPure;
var _default = whatsElementPure;
exports.default = _default;

},{"./helper":1}]},{},[2]);
