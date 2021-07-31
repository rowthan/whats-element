/**
 * Created by rowthan on 2017/12/9.
 * 包含核心 api 获取id,获取元素，不含UI
 */
import {getCoords,initFunction,simpleFyId} from "./helper";
var document = window.document,noop = function(){},
whatsElementPure = initFunction(),
prototype = whatsElementPure.prototype

const SPLIT_MODE_CODE = '  '

prototype.getUniqueId = function (element,isParent) {
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
        if(!isParent && this.options.simpleId){
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
        console.log(result.wid,'before')
        result.wid = simpleFyId(result.wid);
        console.log(result.wid,'after')
    }
    //location by parent
    else {
        const parentNode = element.parentNode;
        var parentQueryResult = whatsElementPure.prototype.getUniqueId(parentNode,true);
        var parentQueryString = parentQueryResult.wid;
        parentQueryString = simpleFyId(parentQueryString);
        if(!parentQueryString){
            return{
                wid: null,
                type:"NO_LOCATION_NOT_LOCATED_PARENT_WID"
            };
        }
        // 通过 name.class 来寻找子节点
        var targetQuery = tag;
        if(className){
            targetQuery += className;
        }
        queryString = parentQueryString+SPLIT_MODE_CODE+targetQuery;
        var queryElements = parentNode.querySelectorAll(queryString);

        var firstChildNodes = [].filter.call(queryElements,(item)=>{
            return item.parentNode === parentNode;
        })

        if(firstChildNodes.length>1){
            queryString = null;
            let index = -1;
            for(let j=0; j<parentNode.children.length; j++){
                // 只比较一级子节点
                if(parentNode.children[j]===element){
                    index = j+1;
                    break;
                }
            }

            if(index>=1){
                queryString = parentQueryString+SPLIT_MODE_CODE+ targetQuery + ":nth-child("+index+")";
                var queryTarget = this.getTarget(queryString,'split');
                if(queryTarget!==element){
                    queryString = '';
                }
            }
        }
        result.wid = queryString
        result.type = "split"
    }

    this.focusedElement = prototype.getTarget(result.wid);
    if(!isParent && this.options.draw ){
        this.__proto__.draw(result);
    }
    if(result.wid.length>'10'){
        result.warn = true;
    }
    return result
};


prototype.getTarget = function (queryString,type,root) {
    var result = null;
    queryString = queryString ? queryString.trim() : '';
    try{
        const findRoot = root || document;
        if(!findRoot || !queryString){
            return
        }

        // 没有指定 type 的情况下，判断是否需要根据父元素查找，split 模式
        const splitedSelector = queryString.split(/\s{2}/);
        if(!type){
            if(splitedSelector.length>1){
                type = 'split';
            }
        }
        switch (type) {
            // TODO 生成ID时避免使用 id
            case 'document.getElementById()': // 仅body有
                result = findRoot.getElementById ? findRoot.getElementById(queryString) : null;
                break;
            case 'document.getElementsByName()': // 仅body有
                result = findRoot.getElementsByName ? findRoot.getElementsByName(queryString)[0]: null;
                break;
            case 'document.querySelector()':
                // getElementsByTagName
                result = findRoot.querySelector ? findRoot.querySelector(queryString) : null;
                break;
            case 'split':
                const selectors = splitedSelector.filter((item)=>{
                    return item ? !!item.trim() : false;
                })

                if(selectors.length>1){
                    const currentSelector = selectors[0];

                    const matchedChildNodes = findRoot.querySelectorAll(currentSelector);

                    let currentTarget = matchedChildNodes[0] || this.getTarget(currentSelector);
                    // 只查找符合要求的子元素
                    if(root){
                        currentTarget = [].find.call(matchedChildNodes,function (item) {
                            return item.parentNode === root;
                        })
                    }

                    selectors.splice(0,1);
                    const nextString = selectors.join(SPLIT_MODE_CODE);

                    result = this.getTarget(nextString,'split',currentTarget);
                }else{
                    // 全局查找符合要求的，root 比较
                    const matchedElements = document.querySelectorAll(selectors[0]);
                    result = [].find.call(matchedElements,function (item) {
                        return item.parentNode === root;
                    })
                }
                break;
            default:
                result = this.getTarget(queryString,'document.getElementById()')
                    || this.getTarget(queryString,'document.getElementsByName()')
                    || this.getTarget(queryString,'document.querySelector()')
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
