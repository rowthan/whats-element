/**
 * Created by rowthan on 2017/12/9.
 */
(function(window,undefined){
    var document = window.document,
    PREFIX = 'whats-element',
    containerID = PREFIX+'-tip-container',
    deleteID = PREFIX+'-tip-delete',
    copyID = PREFIX+"-copy",
    uniqueContainer = PREFIX+'-unique-container',
    uniqueID = PREFIX+'-unique-id',
    whatsElement = function (argument) {
        this.options = Object.assign({},{
            draw:true
        },argument)
        this.lastClick = document.body
        var that = this
        /**点击其他地方时，清除*/
        document.addEventListener('click', function(event){
            that.lastClick = event.target
            if(that.focusedElement!==that.lastClick){
              prototype.clean()
            }
        })
    },
    prototype = whatsElement.prototype
    prototype.getUniqueId = function (element,parent) {
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
            className += "."+item;
          })
        if(tag==="body" || tag=== "html"){
            result.wid = tag;
            result.type= tag;
        }
        //location by id
        if(id && document.getElementById(id) === element){
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
        if(!result.wid && name && document.getElementsByName(name)[0] === element){
            result.wid = name;
            result.type = "byName"
        }
        //location by class
        if(!result.wid && className && document.querySelector(tag+className)===element){
            result.wid = tag+className;
            result.type = "byClass"
        }
        //for radio
        if(type === "radio"){
            var value = element.value,queryString = tag+"[value='"+value+"']"
            if(name){
                queryString += "[name='"+name+"']"
            }
            if(document.querySelector(queryString)===element){
                result.wid = queryString
                result.type = "byValue"
            }
        }
        //location by mixed,order
        if(!result.wid){
            var queryString = tag;
            queryString = className ? queryString +className: queryString
            queryString = name? queryString + "[name='"+name+"']": queryString
            if(prototype.getTarget(queryString)===element){
                result.wid = queryString
                result.type = "byMixed"
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
            result.type = "byParent"
        }

        this.focusedElement = prototype.getTarget(result.wid);
        if(!parent && this.options.draw ){
            whatsElement.prototype.draw(result);
        }
        return result
    }
    prototype.getTarget = function (queryString) {
        return document.getElementById(queryString) || document.getElementsByName(queryString)[0] || document.querySelector(queryString);
    }
    prototype.draw = function (result) {
        var target = prototype.getTarget(result.wid);
        if(!target){
            console.error("no this element:"+result.wid);
            return;
        }
        var tip = document.getElementById(containerID) ? document.getElementById(containerID) :createElement("aside",containerID);
        tip.innerHTML = ""
        tip.addEventListener("click",function (e) {
            e.stopPropagation();
        })

        var deleteButton = createElement("div",deleteID)
        deleteButton.innerText = 'x'
        deleteButton.onclick = function () {
          whatsElement.prototype.clean();
        }
        tip.appendChild(deleteButton);

        var tipQueryContainer = createElement("div",uniqueContainer);

        var query = createElement("input",uniqueID);
        query.readOnly = true;
        query.className = result.type;
        query.value = result.wid;

        var tipCopy = createElement("div",copyID);
        tipCopy.setAttribute("query-type",result.type);
        tipCopy.innerText = "复制";
        tipCopy.onclick=function () {
            query.select();
            document.execCommand("Copy");
        };

        tipQueryContainer.appendChild(query);
        tipQueryContainer.appendChild(tipCopy);
        tip.appendChild(tipQueryContainer);

        var
        top = target.getBoundingClientRect().top + target.offsetHeight,
        tempLeft = target.getBoundingClientRect().left+window.screenX,
        toLeft = tempLeft<100?tempLeft:tempLeft-(tip.offsetWidth|240)/2+target.offsetWidth/2-document.body.getBoundingClientRect().left;
        tip.style.left = toLeft+"px";
        tip.style.top = top+window.scrollY+10+"px";
        document.body.appendChild(tip);
        revertStyle();
        target.classList.add('whats-element-active');
    };
    prototype.clean = function () {
        revertStyle();
        var container = document.getElementById(containerID);
        if(container){
            container.outerHTML='';
        }
    };

    function revertStyle(){
      document.querySelectorAll("."+PREFIX+"-active").forEach(function(element){
        element.classList.remove(PREFIX+'-active');
      })
    }
    function createElement(type,id) {
      var el = document.createElement(type?type:"div");
      id?el.id = id:"";
      return el;
    }

    var style = createElement("style"),
    styleString = "#"+containerID+"{position:absolute;color:#8ed3fb;font-size:14px;z-index:1000;background-color:rgba(255, 255, 255,0.9);box-sizing:border-box;box-shadow:rgba(0, 0, 0, 0.2) 0px 1px 10px 3px;padding: 10px 20px;border-radius: 36px;}"
    styleString += "#"+deleteID+"{cursor:pointer;position:absolute;top:-10px;width:20px;height: 20px;left:calc(50% - 8px);clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%);background:#fff;}";
    styleString += "#"+deleteID+":hover{background:#fffbf0}";
    styleString += "#"+uniqueContainer+"{display:flex;justify-content:space-around;}";
    styleString += "#"+uniqueID+"{border:1px solid #d1d5da;box-shadow:inset 0 1px 2px rgba(27,31,35,0.075);text-indent:10px;}";
    styleString += "#"+copyID+"{background:aliceblue;cursor: pointer;}";
    styleString += "#"+copyID+"::after{position:absolute;z-index:1000000;padding: 0.1em 0.75em;color: #fff;text-align:center;text-shadow:none;text-transform:none;content:attr(query-type);background: #a88462;border-radius: 3px;opacity: 0;transition:all .5s}";
    styleString += "#"+copyID+":hover:after{display:inline-block;opacity: 1;}";
    styleString += ".whats-element-active{outline:red 1px dashed !important}";
    style.innerText = styleString
    document.head.appendChild(style)

    window.whatsElement = whatsElement
})(window)