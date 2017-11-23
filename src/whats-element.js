/**
 * Created by rowthan on 2017/11/19.
 */
var whatsElement;
whatsElement = (function () {
  function Whats(draw,showConsole) {
    Whats.draw = draw === true;
    Whats.showConsole = showConsole === true;
    Whats.root = "body";

    var style = document.createElement("style");
    let styleString = "#whats-element-tip-container{position: absolute;white-space: nowrap;background: #333740;color: #8ed3fb;font-size: 14px;z-index: 1000;background-color: rgba(255, 255, 255,0.95);box-sizing: border-box;box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 10px 3px;padding: 8px 20px;border-radius: 36px;}"
        styleString += "#whats-element-tip-container::after{content:'';position:absolute;top:0;width: 0px;height: 0px;left: calc(50% - 8px);box-sizing: border-box;transform-origin: 0px 0px 0px;transform: rotate(-45deg);border-width: 6px;border-style: solid;border-color: rgb(255, 255, 255);border-image: initial;}"
        styleString += "#whats-element-inner-text{color:#ddd;max-width:200px;overflow:hidden;text-overflow:ellipsis;}";
    style.innerText = styleString;
    document.head.appendChild(style);
  }
  Whats.getUniqueId = function (target,prefix) {
    var result = {
      uniqueId:"",
      queryType:""
    };
    //not a htmlElement
    if(!(target instanceof HTMLElement)){
      return result;
    }
    //construct data info of the target
    var id = target.id;
    var name = target.name;
    var className = "";
    var classList = target.classList;
    if(classList){
      classList.forEach(function (item) {
        className = className+"."+item;
      });
    }
    var tag = target.tagName.toLowerCase();
    var type = target.type?target.type.toLowerCase():"";

    if(tag==="body"){
      result.uniqueId = tag;
      result.queryType="body";
    }
    //location by id
    if(id && document.getElementById(id) === target){
      result.uniqueId = prefix?tag+"#"+id:id;
      result.queryType = "byId";
    }
    //location by name
    if(!result.uniqueId && name && document.getElementsByName(name)[0] === target){
      result.uniqueId = name;
      result.queryType = "byName";
    }
    //location by class
    if(!result.uniqueId && className && document.querySelector(tag+className)===target){
      result.uniqueId = tag+className;
      result.queryType = "byClass";
    }
     //for radio
    //TODO select
    if(type === "radio"){
      var value = target.value;
      var queryString = tag+"[value='"+value+"']";
      if(document.querySelector(queryString)===target){
        result.uniqueId = queryString;
        result.queryType = "byValue";
      }
    }
    //location by mixed,order
    if(!result.uniqueId){
      var queryString = tag;
      queryString = id ? queryString + "#"+id: queryString;
      queryString = className ? queryString +className: queryString;
      queryString = name? queryString + "[name='"+name+"']": queryString;
      queryString = type ? queryString +  "[type='"+type+"']": queryString;
      if(queryString!=tag && document.querySelector(queryString)===target){
        result.uniqueId = queryString;
        result.queryType = "byMixed";
      }
    }
    //location by order
    if(!result.uniqueId){
      var queryString = tag;
      queryString = id ? queryString + "#"+id : queryString;
      queryString = className ? queryString +className: queryString;

      var elements = document.querySelectorAll(queryString);
      if(elements && elements.length>0){
        var index = null;
        for(var i=0; i<elements.length; i++){
          if(target===elements[i]){
            index = i+1;
            break;
          }
        }
        if(index){
          queryString = queryString + ":nth-child("+index+")";
          if(document.querySelector(queryString) === target){
            result.uniqueId = queryString;
            result.queryType = "byOrder";
          }
        }
      }
    }
    //location by parent
    if(!result.uniqueId){
      var parentQueryResult = Whats.getUniqueId(target.parentNode,true);
      var parentQueryString = parentQueryResult.uniqueId;
      if(!parentQueryString){
        return;
      }
      var targetQuery = tag;
      if(id){
        targetQuery += "#"+id;
      }
      else if(className){
        targetQuery += className;
      }
      var queryString = parentQueryString+">"+targetQuery;
      var queryElements = document.querySelectorAll(queryString);
      if(queryElements.length>1){
        queryString = null;
        var index = null;
        for(var i=0; i<target.parentNode.children.length; i++){
          if(target.parentNode.children[i]===target){
            index = i+1;
            break;
          }
        }
        if(index>=1){
          queryString = parentQueryString+">"+ targetQuery + ":nth-child("+index+")";
          var queryTarget = document.querySelector(queryString);
          if(queryTarget!=target){
            queryString = null;
          }
        }
      }
      result.uniqueId = queryString;
      result.queryType = "byParent";
    }
    if(this.showConsole){
      console.log("该对象的唯一标识符是："+result.uniqueId);
      console.log("定位该对象的方式为："+result.queryType);
      console.log(Whats.getTarget(result.uniqueId));
    }
    //TODO 将该运行结果渲染到页面上去 计算该元素是否为
    if(this.draw){

      var tip = document.getElementById("whats-element-tip-container") ? document.getElementById("whats-element-tip-container") :document.createElement("aside") ;
      tip.id = "whats-element-tip-container";

      tip.innerHTML = "";

      var query = document.createElement("span");
      query.id = "whats-element-unique-id";
      query.innerText = result.uniqueId;
      tip.appendChild(query);

      /*var type = document.createElement("span");
      type.id = "whats-element-query-type";
      type.innerText = result.queryType;
      tip.appendChild(type);*/

      var element = document.createElement("div");
      element.id = "whats-element-inner-text";
      element.innerText = Whats.getTarget(result.uniqueId).innerText;
      tip.appendChild(element);

      var left = target.getBoundingClientRect().left;
      var top = target.getBoundingClientRect().top + target.offsetHeight;
      var toLeft = left+window.screenX;
      if(toLeft>100){
        toLeft = toLeft-tip.offsetWidth/2+target.offsetWidth/2;
      }
      tip.style.left = toLeft+"px";
      tip.style.top = top+window.scrollY+"px";
      document.body.prepend(tip);
    }
    return result;
  };
  Whats.getTarget = function (queryString) {
    return document.getElementById(queryString) || document.getElementsByName(queryString)[0] || document.querySelector(queryString)
  };
  return Whats;
})();

if (typeof window !== "undefined" && window !== null) {
  window.whatsElement = whatsElement;
}

if (typeof window === "undefined" || window === null) {
  this.whatsElement = whatsElement;
}
if (typeof module !== 'undefined' && module.exports) module.exports = whatsElement;
if (typeof define === 'function') define(function() { return whatsElement; });


