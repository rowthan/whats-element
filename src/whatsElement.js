/*使用 UI，导出js使用 具备完善功能  */
import {initFunction} from "./helper";
import whatsElementPure from './whatsElementPure.js'
var PREFIX = 'whats-element',
    containerID = PREFIX+'-tip-container',
    deleteID = PREFIX+'-tip-delete',
    copyID = PREFIX+"-copy",
    uniqueContainer = PREFIX+'-unique-container',
    uniqueID = PREFIX+'-unique-id';
var whatsWithUI = initFunction(),
prototype = whatsWithUI.prototype;
prototype.getTarget = whatsElementPure.prototype.getTarget
prototype.getUniqueId = whatsElementPure.prototype.getUniqueId

prototype.draw = function (result) {
    console.log("draw ui")
    var target = prototype.getTarget(result.wid);
    if(!target){
        console.error("no this element:"+result.wid);
        return;
    }
    var tip = document.getElementById(containerID) ? document.getElementById(containerID) :createElement("aside",containerID);
    tip.innerHTML = ""
    tip.addEventListener("mousedown",function (e) {
        e.stopPropagation();
    })

    var deleteButton = createElement("div",deleteID)
    deleteButton.innerText = 'x'
    deleteButton.onclick = function (e) {
        e.stopPropagation()
        prototype.clean()
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
        tempLeft = target.getBoundingClientRect().left,
        toLeft = tempLeft<100?tempLeft:tempLeft+target.offsetWidth/2-(tip.offsetWidth|240)/2-document.body.getBoundingClientRect().left;
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
function createElement(type,id) {
    var el = document.createElement(type?type:"div");
    id?el.id = id:"";
    return el;
}
function revertStyle(){
    document.querySelectorAll("."+PREFIX+"-active").forEach(function(element){
        element.classList.remove(PREFIX+'-active');
    })
}
var style = createElement("style"),
    styleString = "#"+containerID+"{position:absolute;color:#8ed3fb;font-size:14px;z-index:1000;background-color:rgba(255, 255, 255,0.9);box-sizing:border-box;box-shadow:rgba(0, 0, 0, 0.2) 0px 1px 10px 3px;padding: 10px 20px;border-radius: 36px;}"
styleString += "#"+deleteID+"{cursor:pointer;position:absolute;top:-10px;width:20px;height: 20px;left:calc(50% - 8px);text-align:center;clip-path: polygon(50% 0,100% 50%,50% 100%,0 50%);background:#fff;}";
styleString += "#"+deleteID+":hover{background:#fffbf0}";
styleString += "#"+uniqueContainer+"{display:flex;justify-content:space-around;}";
styleString += "#"+uniqueID+"{border:1px solid #d1d5da;box-shadow:inset 0 1px 2px rgba(27,31,35,0.075);text-indent:10px;}";
styleString += "#"+copyID+"{background:aliceblue;cursor: pointer;}";
styleString += "#"+copyID+"::after{position:absolute;z-index:1000000;padding: 0.1em 0.75em;color: #fff;text-align:center;text-shadow:none;text-transform:none;content:attr(query-type);background: #a88462;border-radius: 3px;opacity: 0;transition:all .5s}";
styleString += "#"+copyID+":hover:after{display:inline-block;opacity: 1;}";
styleString += ".whats-element-active{outline:red 1px dashed !important}";
style.innerText = styleString
document.head.appendChild(style)
window.whatsElement = whatsWithUI;
export default  whatsWithUI

