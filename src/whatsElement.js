/**
 * Created by rowthan on 2017/12/9. TODO show size
 */
import {getCoords,initFunction} from "./helper";
var document = window.document,noop = function(){console.log("no ui")},

whatsElement = initFunction(),
prototype = whatsElement.prototype
prototype.getUniqueId = function (element,parent) {
    element = element ? element : this.lastClick;
    if(!(element instanceof HTMLElement)){
        console.error("invalid input,not a HTML element");
        return null;
    }
    var result = {
        wid:"",
        type:"",
        top:getCoords(element).top,
        left:getCoords(element).left,
        viewLeft:element.getBoundingClientRect().left,
        viewTop: element.getBoundingClientRect().top,
        text: element.innerText
    },
    //construct data info of the element
      id = element.id,
      name = element.name,
      tag = element.tagName.toLowerCase(),
      type = element.type?element.type.toLowerCase():"",
      className = "",
      classList = element.classList || [];
      classList.forEach(function (item) {
        className += "."+item;
      })
    if(tag==="body" || tag=== "html"){
        result.wid = tag;
        result.type= tag;
    }
    //location by id
    if(id && document.getElementById(id) === element){
        var regExp= new RegExp("^[a-zA-Z]+") ;
        /**当不为parent定位，且设置为简单结果时，直接返回id 否则使用完整路径标识符。注：两个if顺序不能更换，递归调用时 simpleId为undefined*/
        if(!parent && this.options.simpleId){
            result.wid = id;
        }
        /*如果为parent定位，或者设置为完整结果时候，返回tag#id*/
        else if(regExp.test(id)){
            result.wid = tag+"#"+id
        }
        result.type = "document.getElementById()"
    }
    //location by name
    if(!result.wid && name && document.getElementsByName(name)[0] === element){
        result.wid = name;
        result.type = "document.getElementsByName()"
    }
    //location by class
    if(!result.wid && className && document.querySelector(tag+className)===element){
        result.wid = tag+className;
        result.type = "document.querySelector()"
        var classLength = classList.length
        if(classLength>2){
          var n = 1;
          /**使用class查询的个数，如2，4，8：使用2，4，8个className做查询*/
          var queryCount = []
          while (Math.pow(2,n)<classLength){
              queryCount.push(Math.pow(2,n));
              n++;
          }
          queryCount.push(classLength)

          for(var k=0; k<queryCount.length;k++){
              /**使用class个数去查询*/
              var countNum = queryCount[k];
                //TODO 性能优化
          }
        }
    }
    //for radio
    if(type === "radio"){
        var value = element.value,queryString = tag+"[value='"+value+"']"
        if(name){
            queryString += "[name='"+name+"']"
        }
        if(document.querySelector(queryString)===element){
            result.wid = queryString
            result.type = "document.querySelector()"
        }
    }
    //location by mixed,order
    if(!result.wid){
        var queryString = tag;
        queryString = className ? queryString +className: queryString
        queryString = name? queryString + "[name='"+name+"']": queryString
        if(prototype.getTarget(queryString)===element){
            result.wid = queryString
            result.type = "document.querySelector()"
        }
    }
    //location by order
    if(!result.wid){
        var queryString = tag
        queryString = className ? queryString +className: queryString

        var elements = document.querySelectorAll(queryString)
        if(elements && elements.length>0){
            var index = null
            for(var i=0; i<elements.length; i++){
                if(element===elements[i]){
                    index = i+1;
                    break;
                }
            }
            if(index){
                queryString = queryString + ":nth-child("+index+")"
                if(document.querySelector(queryString) === element){
                    result.wid = queryString
                    result.type = "document.querySelector()"
                }
            }
        }
    }
    //location by parent
    if(!result.wid){
        if(!element.parentNode){
            return
        }
        var parentQueryResult = whatsElement.prototype.getUniqueId(element.parentNode,true),
          parentQueryString = parentQueryResult?parentQueryResult.wid:"";
        if(!parentQueryString){
            return{
                wid:"",
                type:"NO_LOCATION"
            };
        }
        var targetQuery = tag;
        if(className){
            targetQuery += className;
        }
        var queryString = parentQueryString+">"+targetQuery,
          queryElements = document.querySelectorAll(queryString);
        if(queryElements.length>1){
            queryString = null;
            var index = null;
            for(var j=0; j<element.parentNode.children.length; j++){
                if(element.parentNode.children[j]===element){
                    index = j+1;
                    break;
                }
            }
            if(index>=1){
                queryString = parentQueryString+">"+ targetQuery + ":nth-child("+index+")";
                var queryTarget = document.querySelector(queryString);
                if(queryTarget!=element){
                    queryString = null;
                }
            }
        }
        result.wid = queryString
        result.type = "document.querySelector()"
    }

    this.focusedElement = prototype.getTarget(result.wid);
    if(!parent && this.options.draw ){
        console.log("draw")
        this.__proto__.draw(result);
    }
    return result
}
prototype.getTarget = function (queryString) {
    return document.getElementById(queryString) || document.getElementsByName(queryString)[0] || document.querySelector(queryString);
}

prototype.clean = noop
prototype.draw = noop
window.whatsElement = whatsElement;
export default whatsElement