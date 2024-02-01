export function getCoords(elem: HTMLElement) {
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

export function computeOffset(element: HTMLElement) {
    let offsetLeft = element.offsetLeft;
    let offsetTop = element.offsetTop;

    if(element.offsetParent){
        const parentOffset = computeOffset(<HTMLElement>element.offsetParent);
        offsetLeft += parentOffset.offsetLeft;
        offsetTop += parentOffset.offsetTop;
    }

    return{
        offsetLeft: offsetLeft,
        offsetTop: offsetTop,
    }
}

export function simpleFyId(wid: string) {
    if(!wid){
        return wid;
    }
    let result = wid;
    // todo 递归二分法 衰减
    try{
        const classList = wid.split('.');
        const newQuery = classList.slice(0,Math.fround(classList.length/2)).join('.');
        if(!newQuery){
            return wid;
        }
        if(document.querySelector(newQuery)===document.querySelector(wid)){
            result = newQuery;
        }
    }catch (e) {

    }
    return result;
}

export function findFirstLevelChildren(findRoot: HTMLElement | Document, firstSelector: string):HTMLElement[] {
    const globalFindElements = findRoot.querySelectorAll(firstSelector);
    const matchedElement: HTMLElement[] = []
    for(let i=0; i<globalFindElements.length; i++){
        const tempElement = globalFindElements[i];
        if(tempElement.parentNode === findRoot){
            matchedElement.push(tempElement as HTMLElement)
        }
    }
    return matchedElement;
}
