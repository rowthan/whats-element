import {getElementClass} from "../uniqueId/computeId";
import {getValidIdForElement} from "../utils/element";

export function checkCanBeFragmentNode(element: HTMLElement) {
    const whiteListTag = ['html','body','section','nav','footer','table']
    const tag = element.tagName.toLowerCase();
    if(whiteListTag.includes(tag)){
        return true;
    }

    const parentElement = element.parentElement;
    /**如果父节点只有一个子节点，则父节点更适合作为 fragment*/
    if(parentElement && parentElement.children && parentElement.children.length<=1){
        return false;
    }

    /**元素缺乏标识 class or id，不适合作为 fragment */
    const classNameOrId = getElementClass(element) || getValidIdForElement(element);
    if(!classNameOrId){
        return false;
    }
    return true;
}
