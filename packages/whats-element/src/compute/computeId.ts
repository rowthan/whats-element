import {PARENT_SPLIT_CODE, QueryTypes} from "../const";
import getTarget from "../target";
// import {findFirstLevelChildren} from "../utils/helper";
import type {ClassFilter, WhatsUniqueResult} from "../typing";
import {getValidIdForElement} from "../utils/element";

// 一些非法的class名，不可作为定位符
const BASIC_BLOCK_CLASS_RULES = [
    /[:\[\]\.]/,
    /\//,
    /^\d+/,
    /-px/,
    /\d+rem/,
    /**tailwind 语法，边界*/
    /m[tlrbxy]-\d+/,
    /p[ltbrxy]-\d+/,
    /**tailwind 语法，位置信息*/
    /top-\d+$/,
    /left-\d+$/,
    /right-\d+$/,
    /bottom-\d+$/,

    /^[hw]-\d+$/,


    /**tailwind 语法，zindex*/
    /z-\d+$/,
    /inset-\d+$/,
    'active',
]
export function getElementClass(element: HTMLElement, classFilter:ClassFilter = {blockClassList:[],maxLength:10}) {
    const blockList = [...BASIC_BLOCK_CLASS_RULES,...(classFilter?.blockClassList||[])]

    const classNames = [];
    for(let i=0; i<element.classList.length; i++){
        const item = element.classList[i];
        if(!/^[a-zA-Z]/.test(item)){ // 过滤非法 class 名称
            continue;
        }

        /**检测class合法性*/
        let blocked = false;
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

        if(!blocked){
            classNames.push(item);
        }
    }

    return classNames.length ? '.'+classNames.slice(0,classFilter.maxLength || 99).join('.') : ''
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

export function getById(element: HTMLElement,root?: HTMLElement):WhatsUniqueResult|null {

    const id = getValidIdForElement(element);
    if(!id){
        return null
    }

    const tag = element.tagName.toLowerCase();
    const wid = tag+"#"+id;


    /**二次校验*/
    if(getTarget(wid,QueryTypes.bySelector,root).target === element){
        return {
            wid: wid,
            type: QueryTypes.bySelector
        }
    }
    return null;
}

/**
 * 对于一些 form 元素，name 属性有唯一性
 * */
export function getByName(element: HTMLElement | HTMLInputElement, root?: HTMLElement):WhatsUniqueResult|null {
    const tag = getElementTag(element)
    const name = "name" in element ? element.name : '';
    const query = name ? `${tag}[name="${name}"]` : ''
    if(query && getTarget(query,QueryTypes.byName, root).target === element){
        return{
            wid: query,
            type: QueryTypes.byName
        }
    }
    return null
}


/**
 * 对于一些比较罕见的 tag 可以作为标识符来使用
 * */
export function getByTagName(element: HTMLElement | HTMLInputElement, root?: HTMLElement):WhatsUniqueResult|null {
    const tag = getElementTag(element) || ''
    const allowByTagName = ['svg','path','iframe','video','img','b','strong'].includes(tag.toLowerCase())
    const isCustomTag = tag.indexOf('-') > -1;
    if(allowByTagName || isCustomTag){
        const query = tag ? `${tag}` : ''
        if(query && getTarget(query,QueryTypes.byTagName, root).target === element){
            return{
                wid: query,
                type: QueryTypes.byName
            }
        }
    }

    return null
}

/**
 * 基于 tag+class 定位
 * */
export function getByClass(element: HTMLElement, classFilter: ClassFilter, root?: HTMLElement):WhatsUniqueResult|null {
    const className = getElementClass(element,classFilter)
    const tag = element.tagName.toLowerCase();
    const wid = tag+className
    if(className && getTarget(wid,QueryTypes.bySelector, root).target===element){
        return {
            wid: wid,
            type: QueryTypes.bySelector
        }
    }
    return null;
}

export function getByType(element: HTMLElement | HTMLInputElement, root?: HTMLElement):WhatsUniqueResult|null {
    const type = "type" in element ? (element.type || '')?.toString()?.toLowerCase() : "";
    if(type === "radio"){
        const value = 'value' in element ? element.value : '';
        const tag = element.tagName.toLowerCase();
        const name = "name" in element ? element.name : '';
        let queryString = tag+"[value='"+value+"']"
        if(name){
            queryString += "[name='"+name+"']"
        }
        if(getTarget(queryString,QueryTypes.bySelector,root).target===element){
            return {
                wid: queryString,
                type: QueryTypes.bySelector
            }
        }
    }
    return null;
}

export function getByAttr(element: HTMLElement | HTMLInputElement,root?: HTMLElement):WhatsUniqueResult|null {
    const tag = element.tagName.toLowerCase();
    // if(tag === 'a'){
    //     const href = element.getAttribute('href');
    //     if(href){
    //         const queryString = "a[href='"+href+"']";
    //         if(getTarget(queryString,QueryTypes.bySelector,root).target===element){
    //             return {
    //                 wid: queryString,
    //                 type: QueryTypes.bySelector,
    //             }
    //         }
    //     }
    // }

    const types = ['href','src','tabIndex','role']
    for (let i = 0 ; i<types.length; i++){
        const attribute = types[i];
        const value = element.getAttribute(attribute);
        if(value !== undefined){
            const queryString = `${tag}[${attribute}="${value}"]`;
            if(getTarget(queryString,QueryTypes.bySelector,root).target === element){
                return {
                    wid: queryString,
                    type: QueryTypes.bySelector,
                }
            }
        }
    }
    return null;
}

/**只能用于父节点的场景，不支持跨级别的查询（css nth-of-type selector 的限制 ）
 * 基于父节点，的索引序号定位
 * */
export function getByIndex(element: HTMLElement, classFilter: ClassFilter, parentWid: string):WhatsUniqueResult|null {
    // TODO 这里对 tagName 做过滤，一般性的标签如 div\span 不应该作为标识符，不具备标识能力，原网站很可能对其任意调整
    // TODO 非层级模式下的 通过 index 获取，不够稳健。避免出现单层级的基于index的定位，如 p:nth-of-type(2) ，应尽可能的保证足够多的上层级，如 #username  p:nth-of-type(2); 网页变动的情况下 ， 提升定位的稳定性
    const className = getElementClass(element,classFilter);
    const queryString = className ? className : element.tagName.toLowerCase()
    // queryString = className ? queryString + className: queryString
    // TODO 排查这里是 document 还是 element parent 作为参数传入 这里的自元素拉取逻辑
    // const elements = element.parentElement.querySelectorAll(queryString)
    const elements = element.parentElement?.children;
    if(elements && elements.length>0){
        let index = 0;
        for(let i=0; i<elements.length; i++){
            // 只比对一级自节点
            if(elements[i].parentElement !== element.parentElement){
                continue;
            }
            if(elements[i].tagName===element.tagName){
                index++
            }
            if(element===elements[i]){
                break;
            }
        }
        if(index){
            const queryStringWithIndex = parentWid + PARENT_SPLIT_CODE + queryString + ":nth-of-type("+index+")"
            // https://www.w3schools.com/cssref/css_selectors.php
            // 重点，基于父节点作为范围ID，所以查找时，需要提升至祖父节点
            const checkResult = getTarget(queryStringWithIndex,QueryTypes.bySelector,element.parentElement?.parentElement).target;
            if(checkResult === element){
                return {
                    wid: queryStringWithIndex,
                    type: QueryTypes.bySelector
                }
            }else{
                console.log('queryString',queryStringWithIndex)
                console.log('checkResult',checkResult)
                console.log(element,'校验失败')
                console.log(elements,'elements')
                console.log(element.parentElement,'root')
                // const find = element.parentElement.querySelectorAll(queryString);
                // console.log(find,'result',find.length)
                for(let j=0; j<element.parentElement.children.length;j++){
                   const checkIndexElement = element.parentElement.querySelector(queryString+ ':nth-of-type('+j+')');
                   console.log('check',j)
                   if(checkIndexElement===element){
                       console.log('the index should be', j)
                       break;
                   }
                }
                return null;
                // const checkTarget = getTarget(queryString,QueryTypes.bySelector).target;
            }
        }else{
            console.warn('did not found index')
            debugger
        }
    }
    console.error('children is empty',element)
    return null;
}


/**
 * 在父节点的基础下，计算出它的唯一标识；
 * 缺点：如果父节点丢失，则也无法寻找到
 * todo delete
 * */
// function getByParent(element: HTMLElement, parentQueryString?: String | null, classFilter?: ClassFilter):WhatsUniqueResult|null  {
//     const parentNode = element.parentElement;
//     if(!parentNode || !parentQueryString){
//         return {
//             wid: null,
//             type: null,
//         }
//     }
//     // 基于上一级节点的位置ID，通过 name.class 条件 来寻找子节点
//     const targetQuery = element.tagName.toLowerCase() + getElementClass(element,classFilter);
//     const queryString = (parentQueryString+SPLIT_MODE_CODE+targetQuery).trim();
//     // 通过增加条件后，如果能直接插到，则直接返回
//     if(getTarget(queryString,QueryTypes.bySplit).target === element){
//         return {
//             wid: queryString,
//             type: QueryTypes.bySplit,
//         }
//     }
//
//     // 无法通过增加 name.class 定位，则通过 + nth:child 来按顺序查找; 这里只查找一级子节点，之后可以放开
//     const matchedFirstChildNodes = findFirstLevelChildren(parentNode,queryString);
//     /**如果一级子节点找不到，则无法定位*/
//     if(!matchedFirstChildNodes.length){
//         return {
//             wid: null,
//             type: null
//         }
//     }
//
//     /**确定可以通过 querySelector 找到子节点的前提下，计算作为节点的 序列号*/
//     let index = -1;
//     // 这里的 children 包含所有子、孙节点。获取到索引值
//     for(let j=0; j<parentNode.children.length; j++){
//         // 只比较一级子节点
//         if(parentNode.children[j]===element){
//             index = j+1;
//             break;
//         }
//     }
//
//     /**构造序列号的选择器*/
//     const queryByIndex = queryString +  ":nth-child("+index+")";
//     if(getTarget(queryByIndex,QueryTypes.bySplit).target === element){
//         return {
//             wid: queryByIndex,
//             type: QueryTypes.bySplit,
//         }
//     }
//
//     return {
//         wid: null,
//         type: QueryTypes.bySplit
//     }
// }
