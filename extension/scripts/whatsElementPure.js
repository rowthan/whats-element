(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simpleFyId = simpleFyId;
exports.getCoords = getCoords;
exports.initFunction = initFunction;

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

/**
 * Created by rowthan on 2017/12/9.
 * 包含核心 api 获取id,获取元素，不含UI
 */
var document = window.document,
    noop = function noop() {},
    whatsElementPure = (0, _helper.initFunction)(),
    prototype = whatsElementPure.prototype;

prototype.getUniqueId = function (element, parent) {
  element = element ? element : this.lastClick;

  if (!(element instanceof HTMLElement)) {
    console.error("input is not a HTML element");
    return {};
  }

  var result = {
    wid: "",
    type: "",
    top: (0, _helper.getCoords)(element).top,
    left: (0, _helper.getCoords)(element).left,
    viewLeft: element.getBoundingClientRect().left,
    viewTop: element.getBoundingClientRect().top,
    text: element.innerText
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
    var regExp = new RegExp("^[a-zA-Z]+");
    /**当不为parent定位，且设置为简单结果时，直接返回id 否则使用完整路径标识符。注：两个if顺序不能更换，递归调用时 simpleId为undefined*/

    if (!parent && this.options.simpleId) {
      result.wid = id;
    }
    /*如果为parent定位，或者设置为完整结果时候，返回tag#id*/
    else if (regExp.test(id)) {
        result.wid = tag + "#" + id;
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
    var href = element.attributes.href.value;

    if (href) {
      queryString = "a[href=\"".concat(href, "\"]");
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
      if (!element.parentNode) {
        return;
      }

      var parentQueryResult = whatsElementPure.prototype.getUniqueId(element.parentNode, true);
      var parentQueryString = parentQueryResult ? parentQueryResult.wid : "";
      parentQueryString = (0, _helper.simpleFyId)(parentQueryString);

      if (!parentQueryString) {
        return {
          wid: null,
          type: "NO_LOCATION"
        };
      } // 通过 name.class 来寻找子节点


      var targetQuery = tag;

      if (className) {
        targetQuery += className;
      }

      queryString = parentQueryString + ">" + targetQuery;
      var queryElements = document.querySelectorAll(queryString);

      if (queryElements.length > 1) {
        queryString = null;
        var index = null;

        for (var j = 0; j < element.parentNode.children.length; j++) {
          if (element.parentNode.children[j] === element) {
            index = j + 1;
            break;
          }
        }

        if (index >= 1) {
          queryString = parentQueryString + ">" + targetQuery + ":nth-child(" + index + ")";
          var queryTarget = document.querySelector(queryString);

          if (queryTarget !== element) {
            queryString = null;
          }
        }
      }

      result.wid = queryString;
      result.type = "document.querySelector()";
    }

  this.focusedElement = prototype.getTarget(result.wid);

  if (!parent && this.options.draw) {
    this.__proto__.draw(result);
  }

  if (result.wid.length > '10') {
    result.warn = true;
  }

  return result;
};

prototype.getTarget = function (queryString) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var result = null;

  try {
    switch (type) {
      case 'document.getElementById()':
        result = document.getElementById(queryString);
        break;

      case 'document.getElementsByName()':
        result = document.getElementsByName(queryString)[0];
        break;

      case 'document.querySelector()':
        result = document.querySelector(queryString);
        break;

      default:
        result = document.getElementById(queryString) || document.getElementsByName(queryString)[0] || document.querySelector(queryString);
    }
  } catch (e) {
    console.error(e);
  }

  return result;
};

prototype.clean = noop;
prototype.draw = noop;
window.whatsElement = whatsElementPure;
var _default = whatsElementPure;
exports.default = _default;

},{"./helper":1}]},{},[2]);
