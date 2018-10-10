function getCoords(elem) {
    var box = elem.getBoundingClientRect();
    var body = document.body;
    var docEl = document.documentElement;
    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;
    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;
    return { top: Math.round(top), left: Math.round(left) };
}

function initFunction(){
    var init =  function (argument) {
        this.options = Object.assign({},{
            draw:true,
            /**尽可能短的wid*/
            simpleId:true
        },argument)
        this.lastClick = document.body
        var that = this
        /**点击其他地方时，清除*/
        document.addEventListener('mousedown', function(event){
            that.lastClick = event.target
            if(that.focusedElement!==that.lastClick){
              init.prototype.clean()
            }
        })
    }
    return init;
}

export {
    getCoords,
    initFunction
}