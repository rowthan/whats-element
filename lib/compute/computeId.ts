import {QueryTypes, SPLIT_MODE_CODE} from "../const";
import getTarget from "../target";
import {findFirstLevelChildren} from "../utils/helper";

export interface WhatsUniqueResult {
    wid: string | null;
    type: QueryTypes | null;
}

export interface ClassFilter {
    blockClassList?: (string | RegExp)[],
    maxLength?: number
}

// 一些非法的class名，不可作为定位符
const BASIC_BLOCK_CLASS_RULES = [/[:\[\]\.]/,/\//,/^\d+/]
export function getElementClass(element: HTMLElement, classFilter?:ClassFilter) {
    let className = "";
    for(let i=0; i<element.classList.length; i++){
        const item = element.classList[i];
        if(!/^[a-zA-Z]/.test(item)){ // 过滤非法 class 名称
            continue;
        }

        if(classFilter?.maxLength && item.length >= classFilter.maxLength){
            continue
        }
        let blocked = false;
        const blockList = [...BASIC_BLOCK_CLASS_RULES,...(classFilter?.blockClassList||[])]

        for(let j=0; j<blockList.length;j++){
            const tempNameOrRule = blockList[j];
            if(typeof tempNameOrRule === 'string'){
                if(tempNameOrRule === item){
                    blocked = true;
                    break;
                }
            }else{
                if(tempNameOrRule.test(item)){
                    blocked = true;
                    break;
                }
            }
        }

        if(blocked){
            continue
        }

        className += "."+item;
    }

    return className
}

function getElementTag(element: HTMLElement) {
    const tag = element.tagName.toLowerCase();
    return tag;
}

export function getByRoot(element: HTMLElement):WhatsUniqueResult|null {
    const tag = element.tagName.toLowerCase();
    if(tag==="body" || tag=== "html"){
        return {
            type: QueryTypes.bySelector,
            wid: tag
        }
    }else{
        return null
    }
}

export function getById(element: HTMLElement):WhatsUniqueResult|null {
    const id = element.id;
    if(!id){
        return null
    }
    // id 含有特殊字符 . 不可用
    if(/\./.test(id)){
        return null;
    }

    const tag = element.tagName.toLowerCase();
    const wid = tag+"#"+id;
    if(getTarget(wid,QueryTypes.bySelector).target === element){
        return {
            wid: wid,
            type: QueryTypes.bySelector
        }
    }

    /**当不为parent定位，且设置为简单结果时，直接返回id 否则使用完整路径标识符。注：两个if顺序不能更换，递归调用时 simpleId为undefined*/
    // let wid = ''
    // if(!isParent){
    //     wid = id;
    //     if(getTarget(wid,QueryTypes.byId).target === element){
    //         return {
    //             wid: wid,
    //             type: QueryTypes.byId
    //         }
    //     }
    // } else { /*如果为parent定位，或者设置为完整结果时候，返回tag#id*/
    //
    // }

    return null;
}

export function getByName(element: HTMLElement | HTMLInputElement):WhatsUniqueResult|null {
    const tag = getElementTag(element)
    const name = "name" in element ? element.name : '';
    const query = name ? `${tag}[name="${name}"]` : ''
    if(query && getTarget(query,QueryTypes.byName)){
        return{
            wid: query,
            type: QueryTypes.byName
        }
    }
    return null
}

export function getByClass(element: HTMLElement, classFilter: ClassFilter):WhatsUniqueResult|null {
    const className = getElementClass(element,classFilter)
    const tag = element.tagName.toLowerCase();
    if(className && getTarget(tag+className,QueryTypes.bySelector).target===element){
        return {
            wid: tag+className,
            type: QueryTypes.bySelector
        }
    }
    return null;
}

export function getByType(element: HTMLElement | HTMLInputElement):WhatsUniqueResult|null {
    const type = "type" in element ? (element.type || '')?.toString()?.toLowerCase() : "";
    if(type === "radio"){
        const value = 'value' in element ? element.value : '';
        const tag = element.tagName.toLowerCase();
        const name = "name" in element ? element.name : '';
        let queryString = tag+"[value='"+value+"']"
        if(name){
            queryString += "[name='"+name+"']"
        }
        if(getTarget(queryString,QueryTypes.bySelector).target===element){
            return {
                wid: queryString,
                type: QueryTypes.bySelector
            }
        }
    }
    return null;
}

export function getByAttr(element: HTMLElement | HTMLInputElement):WhatsUniqueResult|null {
    const tag = element.tagName.toLowerCase();
    if(tag === 'a'){
        const href = element.getAttribute('href');
        if(href){
            const queryString = "a[href='"+href+"']";
            if(getTarget(queryString,QueryTypes.bySelector).target===element){
                return {
                    wid: queryString,
                    type: QueryTypes.bySelector,
                }
            }
        }
    }
    return null;
}

/**只能用于具备明确父节点的场景，*/
export function getByIndex(element: HTMLElement, classFilter: ClassFilter):WhatsUniqueResult|null {
    // TODO 这里对 tagName 做过滤，一般性的标签如 div\span 不应该作为标识符，不具备标识能力，原网站很可能对其任意调整
    // TODO 非层级模式下的 通过 index 获取，不够稳健。避免出现单层级的基于index的定位，如 p:nth-of-type(2) ，应尽可能的保证足够多的上层级，如 #username  p:nth-of-type(2); 网页变动的情况下 ， 提升定位的稳定性
    let queryString = element.tagName.toLowerCase()
    const className = getElementClass(element,classFilter);
    queryString = className ? queryString +className: queryString
    // TODO 排查这里是 document 还是 element parent 作为参数传入
    const elements = document.querySelectorAll(queryString)
    if(elements && elements.length>0){
        let index = 0;
        for(let i=0; i<elements.length; i++){
            if(element===elements[i]){
                index = i+1;
                break;
            }
        }
        if(index){
            // TODO nth-of-type 代替 nth-of 也不是完美的解决方案， 需要自定义一个全局查找的工具语法 :nth-index(); 作为配置项
            queryString = queryString + ":nth-of-type("+index+")";
            const checkTarget = getTarget(queryString,QueryTypes.bySelector).target;
            if(checkTarget === element){
                return {
                    wid: queryString,
                    type: QueryTypes.bySelector
                }
            }else{
                // const checkTarget = getTarget(queryString,QueryTypes.bySelector).target;
                console.warn(checkTarget,'computeid 不匹配',queryString, element)
            }
        }
    }
    return null;
}

export function getByParent(element: HTMLElement, parentQueryString?: String | null, classFilter?: ClassFilter):WhatsUniqueResult|null  {
    const parentNode = element.parentElement;
    if(!parentNode || !parentQueryString){
        return {
            wid: null,
            type: null,
        }
    }
    // 基于上一级节点的位置ID，通过 name.class 条件 来寻找子节点
    const targetQuery = element.tagName.toLowerCase() + getElementClass(element,classFilter);
    const queryString = (parentQueryString+SPLIT_MODE_CODE+targetQuery).trim();
    // 通过增加条件后，如果能直接插到，则直接返回
    if(getTarget(queryString,QueryTypes.bySplit).target === element){
        return {
            wid: queryString,
            type: QueryTypes.bySplit,
        }
    }

    // 无法通过增加 name.class 定位，则通过 + nth:child 来按顺序查找; 这里只查找一级子节点，之后可以放开
    const matchedFirstChildNodes = findFirstLevelChildren(parentNode,queryString);
    /**如果一级子节点找不到，则无法定位*/
    if(!matchedFirstChildNodes.length){
        return {
            wid: null,
            type: null
        }
    }

    /**确定可以通过 querySelector 找到子节点的前提下，计算作为节点的 序列号*/
    let index = -1;
    // 这里的 children 包含所有子、孙节点。获取到索引值
    for(let j=0; j<parentNode.children.length; j++){
        // 只比较一级子节点
        if(parentNode.children[j]===element){
            index = j+1;
            break;
        }
    }

    /**构造序列号的选择器 TODO 这里改为 nth-type(n)-*/
    const queryByIndex = (queryString +  ":nth-of-type("+index+")").trim();
    if(getTarget(queryByIndex,QueryTypes.bySplit).target === element){
        return {
            wid: queryByIndex,
            type: QueryTypes.bySplit,
        }
    }

    return {
        wid: null,
        type: QueryTypes.bySplit
    }
}
