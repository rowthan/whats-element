/**
 * Created by rowthan on 2017/12/9.
 */
(function(w,undefined){
    var doc = w.document,
    rootBody = "body",
    rootHTML = "html",
    PREFIX = 'whats-element',
    containerID = 'whats-element-tip-container',
    whatsElement = function (argument) {
        this.options = Object.assign({},{
            draw:true
        },argument)
        this.lastClick = doc.body
        this.focusedElement = null
        var that = this
        /**点击其他地方时，清除*/
        doc.addEventListener('click', function(event){
            that.lastClick = event.target
            if(that.focusedElement!=null && that.focusedElement!=event.target){
              o.clean()
            }
        })
    },
    o = whatsElement.prototype
    o.version = '1.0.1'
    o.getUniqueId = function (element,parent) {
        element = element ? element : this.lastClick;
        if(!(element instanceof HTMLElement)){
            console.error("invalid input,not a HTML element");
            return null;
        }
        var result = {
            wid:"",
            type:""
        },
        //construct data info of the element
          id = element.id,
          name = element.name,
          tag = element.tagName.toLowerCase(),
          type = element.type?element.type.toLowerCase():"",
          className = "",
          classList = element.classList || [];
          classList.forEach(function (item) {
            className = className+"."+item;
          })
        if(tag===rootBody || tag=== rootHTML){
            result.wid = tag;
            result.type= tag;
        }
        //location by id
        if(id && doc.getElementById(id) === element){
            var regExp= new RegExp("^[a-zA-Z]+") ;
            if(!parent){
                result.wid = id;
            }
            /*如果是最为父节点进行定位，需要加上 # 用于 querySelector() 查询，且符合 querySelector() 参数要求，以字母开头*/
            else if(regExp.test(id)){
                result.wid = tag+"#"+id
            }
            result.type = "byId"
        }
        //location by name
        if(!result.wid && name && doc.getElementsByName(name)[0] === element){
            result.wid = name;
            result.type = "byName"
        }
        //location by class
        if(!result.wid && className && doc.querySelector(tag+className)===element){
            result.wid = tag+className;
            result.type = "byClass"
        }
        //for radio
        if(type === "radio"){
            var value = element.value,queryString = tag+"[value='"+value+"']"
            if(name){
                queryString += "[name='"+name+"']"
            }
            if(doc.querySelector(queryString)===element){
                result.wid = queryString
                result.type = "byValue"
            }
        }
        //location by mixed,order
        if(!result.wid){
            var queryString = tag;
            queryString = className ? queryString +className: queryString
            queryString = name? queryString + "[name='"+name+"']": queryString
            if(o.getTarget(queryString)===element){
                result.wid = queryString
                result.type = "byMixed"
            }
        }
        //location by order
        if(!result.wid){
            var queryString = tag
            queryString = className ? queryString +className: queryString

            var elements = doc.querySelectorAll(queryString)
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
                    if(doc.querySelector(queryString) === element){
                        result.wid = queryString
                        result.type = "byOrder"
                    }
                }
            }
        }
        //location by parent
        if(!result.wid){
            var parentQueryResult = whatsElement.prototype.getUniqueId(element.parentNode,true),
              parentQueryString = parentQueryResult.wid;
            if(!parentQueryString){
                return;
            }
            var targetQuery = tag;
            if(className){
                targetQuery += className;
            }
            var queryString = parentQueryString+">"+targetQuery,
              queryElements = doc.querySelectorAll(queryString);
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
                    var queryTarget = doc.querySelector(queryString);
                    if(queryTarget!=element){
                        queryString = null;
                    }
                }
            }
            result.wid = queryString
            result.type = "byParent"
        }

        this.focusedElement = o.getTarget(result.wid);
        if(!parent && this.options.draw ){
            whatsElement.prototype.draw(result);
        }
        return result
    }
    o.getTarget = function (queryString) {
        return doc.getElementById(queryString) || doc.getElementsByName(queryString)[0] || doc.querySelector(queryString);
    }
    o.draw = function (result) {
        var target = o.getTarget(result.wid);
        if(!target){
            console.error("不存在该HTML对象，无法绘制");
            return;
        }
        var tip = doc.getElementById(containerID) ? doc.getElementById(containerID) :doc.createElement("aside")
        tip.id = containerID
        tip.innerHTML = ""
        tip.addEventListener("click",function (e) {
            e.stopPropagation();
        })

        var deleteButton = doc.createElement("div")
        deleteButton.id = "whats-element-tip-delete"
        deleteButton.innerText = 'x';
        deleteButton.onclick = function () {
          whatsElement.prototype.clean();
        }
        tip.appendChild(deleteButton);

        var tipQueryContainer = doc.createElement("div");
        tipQueryContainer.id = "whats-element-unique-container";

        var query = doc.createElement("input");
        query.readOnly = true;
        query.id = "whats-element-unique-id";
        query.className = result.type;
        query.value = result.wid;

        var tipCopy = doc.createElement("div");
        tipCopy.id = "whats-element-copy";
        tipCopy.setAttribute("query-type",result.type);
        tipCopy.innerText = "复制";
        tipCopy.onclick=function () {
            query.select();
            doc.execCommand("Copy");
        };

        tipQueryContainer.appendChild(query);
        tipQueryContainer.appendChild(tipCopy);

        tip.appendChild(tipQueryContainer);

        var element = doc.createElement("div");
        element.id = "whats-element-inner-text";
        element.innerText = o.getTarget(result.wid).innerText;
        tip.appendChild(element);

        var
        top = target.getBoundingClientRect().top + target.offsetHeight,
        tempLeft = target.getBoundingClientRect().left+w.screenX,
        toLeft = tempLeft<100?tempLeft:tempLeft-(tip.offsetWidth|240)/2+target.offsetWidth/2-doc.body.getBoundingClientRect().left;
        tip.style.left = toLeft+"px";
        tip.style.top = top+w.scrollY+10+"px";
        doc.body.appendChild(tip);
        revertStyle();
        target.classList.add('whats-element-active');
    };
    o.clean = function () {
        revertStyle();
        var container = doc.getElementById(containerID);
        if(container){
            container.outerHTML='';
        }
    };

    function revertStyle(){
      doc.querySelectorAll("."+PREFIX+"-active").forEach(function(element){
        element.classList.remove(PREFIX+'-active');
      })
    }

    if (typeof w !== "undefined" && w !== null) {
       w.whatsElement = whatsElement;
    }
    if (typeof w === "undefined" || w === null) {
        this.whatsElement = whatsElement;
    }
    if (typeof module !== 'undefined' && module.exports) module.exports = whatsElement;
    if (typeof define === 'function') define(function() { return whatsElement; });

    var style = doc.createElement("style"),
    styleString = "#whats-element-tip-container{position: absolute;white-space: nowrap;background: #333740;color: #8ed3fb;font-size: 14px;z-index: 1000;background-color: rgba(255, 255, 255,0.95);box-sizing: border-box;box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 10px 3px;padding: 10px 20px;border-radius: 36px;}"
    styleString += "#whats-element-tip-delete{cursor: pointer;position: absolute;top: -10px;width: 20px;height: 20px;left: calc(50% - 8px);clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);background: #fff;text-align: center;}";
    styleString += "#whats-element-tip-delete:hover{background:#fffbf0}";
    styleString += "#whats-element-unique-container{display:flex;justify-content: space-around;}";
    styleString += "#whats-element-unique-id{border:1px solid #d1d5da;border-radius:3px;box-shadow:inset 0 1px 2px rgba(27,31,35,0.075);background-color:#fff;line-height: 20px;text-indent:10px;}";
    styleString += "#whats-element-copy{background:aliceblue;text-align: center;border-radius: 5px;cursor: pointer;}";
    styleString += "#whats-element-copy::after{position: absolute;z-index: 1000000;padding: 0.1em 0.75em;color: #fff;text-align: center;text-shadow: none;text-transform: none;content:attr(query-type);background: #a88462;border-radius: 3px;opacity: 0;transition:all .5s}";
    styleString += "#whats-element-copy:hover:after{display:inline-block;opacity: 1;}";
    styleString += "#whats-element-inner-text{color:#ddd;max-width:200px;max-height:100px;overflow:hidden;text-overflow:ellipsis;}";
    styleString += ".whats-element-active{outline: red 1px dashed !important}";
    style.innerText = styleString
    doc.head.appendChild(style)
})(window)