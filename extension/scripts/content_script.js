/**
 * Created by rowthan on 2018/8/23.
 */
window.whats = new whatsElement();

document.addEventListener("click",function (e) {
    // whats.getUniqueId();
    getMousePos(e)
})


function getMousePos(event) {
    var e = event || window.event;
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var x = e.pageX || e.clientX + scrollX;
    var y = e.pageY || e.clientY + scrollY;
    return { 'x': x, 'y': y };
}