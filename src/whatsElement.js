/**
 * Created by rowthan on 2017/12/9.
 */
(function(window,undefined){
    var rootBody = "body",
    rootHTML = "html",
    version="0.0.5",
    whatsElement = function (argument) {
        this.options = Object.assign({},{
            draw:true
        },argument) ;
    };
    whatsElement.prototype.version = version;
    whatsElement.prototype.getUniqueId = function (element,parent) {
        if(!(element instanceof HTMLElement)){
            console.error && console.error("非法输入，不是一个HTML元素");
            return null;
        }
        var result = {
            uniqueId:"",
            queryType:""
        };
        //construct data info of the element
        var id = element.id;
        var name = element.name;
        var className = "";
        var classList = element.classList;
        if(classList){
            classList.forEach(function (item) {
                className = className+"."+item;
            });
        }
        var tag = element.tagName.toLowerCase();
        var type = element.type?element.type.toLowerCase():"";
        if(tag===rootBody || tag=== rootHTML){
            result.uniqueId = tag;
            result.queryType= tag;
        }
        //location by id
        if(id && document.getElementById(id) === element){
            result.uniqueId = parent?tag+"#"+id:id;
            result.queryType = "byId";
        }
        //location by name
        if(!result.uniqueId && name && document.getElementsByName(name)[0] === element){
            result.uniqueId = name;
            result.queryType = "byName";
        }
        //location by class
        if(!result.uniqueId && className && document.querySelector(tag+className)===element){
            result.uniqueId = tag+className;
            result.queryType = "byClass";
        }
        //for radio
        if(type === "radio"){
            var value = element.value;
            var queryString = tag+"[value='"+value+"']";
            if(name){
                queryString += "[name='"+name+"']"
            }
            if(document.querySelector(queryString)===element){
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
            if(whatsElement.prototype.getTarget(queryString)===element){
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
                    if(element===elements[i]){
                        index = i+1;
                        break;
                    }
                }
                if(index){
                    queryString = queryString + ":nth-child("+index+")";
                    if(document.querySelector(queryString) === element){
                        result.uniqueId = queryString;
                        result.queryType = "byOrder";
                    }
                }
            }
        }
        //location by parent
        if(!result.uniqueId){
            var parentQueryResult = whatsElement.prototype.getUniqueId(element.parentNode,true);
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
                for(var i=0; i<element.parentNode.children.length; i++){
                    if(element.parentNode.children[i]===element){
                        index = i+1;
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
            result.uniqueId = queryString;
            result.queryType = "byParent";
        }

        if(!parent && this.options.draw ){
            whatsElement.prototype.draw(result);
        }
        return result;
    };
    whatsElement.prototype.getTarget = function (queryString) {
        return document.getElementById(queryString) || document.getElementsByName(queryString)[0] || document.querySelector(queryString);
    };
    whatsElement.prototype.draw = function (result) {
        if(!result){
            return;
        }
        var target = whatsElement.prototype.getTarget(result.uniqueId);
        if(!target){
            console.error && console.error("不存在该HTML对象，无法绘制");
            return;
        }
        var tip = document.getElementById("whats-element-tip-container") ? document.getElementById("whats-element-tip-container") :document.createElement("aside") ;
        tip.id = "whats-element-tip-container";
        tip.innerHTML = "";

        var deleteButton = document.createElement("div");
        deleteButton.id = "whats-element-tip-delete";
        deleteButton.innerText = 'x';
        deleteButton.onclick = function () {
            tip.outerHTML = "";
        }
        tip.appendChild(deleteButton);

        var tipQueryContainer = document.createElement("div");
        tipQueryContainer.id = "whats-element-unique-container";

        var query = document.createElement("input");
        query.id = "whats-element-unique-id";
        query.className = result.queryType;
        query.value = result.uniqueId;

        var tipCopy = document.createElement("div");
        tipCopy.id = "whats-element-copy";
        tipCopy.setAttribute("query-type",result.queryType);
        tipCopy.innerText = "复制";
        tipCopy.onclick=function () {
            query.select();
            document.execCommand("Copy");
        };

        tipQueryContainer.appendChild(query);
        tipQueryContainer.appendChild(tipCopy);

        tip.appendChild(tipQueryContainer);

        var element = document.createElement("div");
        element.id = "whats-element-inner-text";
        element.innerText = whatsElement.prototype.getTarget(result.uniqueId).innerText;
        tip.appendChild(element);

        var left = target.getBoundingClientRect().left;
        var top = target.getBoundingClientRect().top + target.offsetHeight;
        var toLeft = left+window.screenX;
        if(toLeft>100){
            toLeft = toLeft-tip.offsetWidth/2+target.offsetWidth/2;
        }
        tip.style.left = toLeft+"px";
        tip.style.top = top+window.scrollY+"px";
        document.body.appendChild(tip);
    };
    whatsElement.prototype.clean = function () {
        var container = document.getElementById("whats-element-tip-container");
        if(container){
            container.parentNode.removeChild(container);
        }
    };

    if (typeof window !== "undefined" && window !== null) {
       window.whats = window.whatsElement = whatsElement;
    }

    if (typeof window === "undefined" || window === null) {
        this.whatsElement = whatsElement;
    }
    if (typeof module !== 'undefined' && module.exports) module.exports = whatsElement;
    if (typeof define === 'function') define(function() { return whatsElement; });


    var style = document.createElement("style");
    var styleString = "#whats-element-tip-container{position: absolute;white-space: nowrap;background: #333740;color: #8ed3fb;font-size: 14px;z-index: 1000;background-color: rgba(255, 255, 255,0.95);box-sizing: border-box;box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 10px 3px;padding: 10px 20px;border-radius: 36px;}"
    styleString += "#whats-element-tip-delete{cursor: pointer;position: absolute;top: -10px;width: 20px;height: 20px;left: calc(50% - 8px);clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);background: #fff;text-align: center;}";
    styleString += "#whats-element-tip-delete:hover{background:#fffbf0}";
    styleString += "#whats-element-unique-container{display:flex;justify-content: space-around;}";
    styleString += "#whats-element-unique-id{border:1px solid #d1d5da;border-radius:3px;box-shadow:inset 0 1px 2px rgba(27,31,35,0.075);background-color:#fff;line-height: 20px;text-indent:10px;}";
    styleString += "#whats-element-copy{background:aliceblue;text-align: center;border-radius: 5px;cursor: pointer;}";
    styleString += "#whats-element-copy::after{position: absolute;z-index: 1000000;padding: 0.1em 0.75em;color: #fff;text-align: center;text-shadow: none;text-transform: none;content:attr(query-type);background: #a88462;border-radius: 3px;opacity: 0;transition:all .5s}";
    styleString += "#whats-element-copy:hover:after{display:inline-block;opacity: 1;}";
    styleString += ".byId{color:#f20c00}";
    styleString += ".byName{color:#4b5cc4}";
    styleString += ".byValue{color:#75664d}";
    styleString += ".byClass{color:#808080}";
    styleString += ".byMixed{color:#a78e44}";
    styleString += ".byOrder{color:#eedeb0}";
    styleString += ".byParent{color:#edd1d8}";
    styleString += "#whats-element-inner-text{color:#ddd;max-width:200px;max-height:100px;overflow:hidden;text-overflow:ellipsis;}";
    style.innerText = styleString;
    document.head.appendChild(style);
})(window);