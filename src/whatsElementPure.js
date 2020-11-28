/**
 * Created by rowthan on 2017/12/9.
 * 包含核心 api 获取id,获取元素，不含UI
 */
import {getCoords,initFunction,simpleFyId} from "./helper";
var document = window.document,noop = function(){},
whatsElementPure = initFunction(),
prototype = whatsElementPure.prototype

prototype.getUniqueId = function (element,parent) {
    element = element ? element : this.lastClick;
    if(!(element instanceof HTMLElement)){
        console.error("input is not a HTML element",element);
        return {};
    }
    var result = {
        wid:"",
        type:"",
    },
    //construct data info of the element
      id = element.id,
      name = element.name,
      tag = element.tagName.toLowerCase(),
      type = element.type?element.type.toLowerCase():"",
      className = "",
      classList = element.classList || [];
      classList.forEach(function (item) {
        if(/^[a-zA-Z]/.test(item)){ // 过滤非法 class 名称
            className += "."+item;
        }
      });
    if(tag==="body" || tag=== "html"){
        result.wid = tag;
        result.type= tag;
    }
    //locate by id
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
    //locate by name
    if(!result.wid && name && document.getElementsByName(name)[0] === element){
        result.wid = name;
        result.type = "document.getElementsByName()"
    }
    //locate by class
    if(!result.wid && className && document.querySelector(tag+className)===element){
        result.wid = tag+className;
        result.type = "document.querySelector()"
    }
    //for radio
    if(!result.wid && type === "radio"){
        var value = element.value,queryString = tag+"[value='"+value+"']"
        if(name){
            queryString += "[name='"+name+"']"
        }
        if(document.querySelector(queryString)===element){
            result.wid = queryString
            result.type = "document.querySelector()"
        }
    }
    if(!result.wid && tag === 'a'){
        var href = element.attributes.href.value;
        if(href){
            queryString = "a[href='"+href+"']";
            var selectedEl = document.querySelector(queryString);
            if(selectedEl===element){
                result.wid = queryString
                result.type = "document.querySelector()"
            }
        }
    }
    //locate by tag,class,name
    if(!result.wid){
        queryString = tag;
        queryString = className ? queryString +className: queryString
        queryString = name? queryString + "[name='"+name+"']": queryString
        if(document.querySelector(queryString)===element){
            result.wid = queryString
            result.type = "document.querySelector()"
        }
    }
    //locate by order
    if(!result.wid){
        queryString = tag
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
    if(result.wid){ // 通过本身已经定位到自己时，尝试简化ID长度
        result.wid = simpleFyId(result.wid);
    }
    //location by parent
    else {
        // 没有父节点
        if(!element.parentNode){
            return {wid:null,type:'NO_LOCATION'}
        }
        var parentQueryResult = whatsElementPure.prototype.getUniqueId(element.parentNode,true);
        var parentQueryString = parentQueryResult?parentQueryResult.wid:"";
        parentQueryString = simpleFyId(parentQueryString);
        if(!parentQueryString){
            return{
                wid: null,
                type:"NO_LOCATION"
            };
        }
        // 通过 name.class 来寻找子节点
        var targetQuery = tag;
        if(className){
            targetQuery += className;
        }
          queryString = parentQueryString+">"+targetQuery
          var queryElements = document.querySelectorAll(queryString);
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
                if(queryTarget!==element){
                    queryString = null;
                }
            }
        }
        result.wid = queryString
        result.type = "document.querySelector()"
    }

    this.focusedElement = prototype.getTarget(result.wid);
    if(!parent && this.options.draw ){
        this.__proto__.draw(result);
    }
    if(result.wid.length>'10'){
        result.warn = true;
    }
    return result
};

prototype.getTarget = function (queryString,type='') {
    var result = null;
    try{
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
    }catch (e) {
        console.error(e);
    }
    return result;
};

prototype.compute = function(element){
    element = element ? element : this.lastClick;
    var uinque = this.getUniqueId(element);
    var viewPosition = element.getBoundingClientRect();
    var inView = viewPosition.left>0 && viewPosition.left < window.innerWidth && viewPosition.top>0 && viewPosition.top<window.innerHeight;

    var result = {
        wid: uinque.wid,
        type: uinque.type,
        top:getCoords(element).top,
        left:getCoords(element).left,
        viewLeft:viewPosition.left,
        viewTop: viewPosition.top,
        text: element.innerText,
        visible: inView,
    };
    return result;
};

prototype.clean = noop
prototype.draw = noop
window.whatsElement = whatsElementPure;
export default whatsElementPure
