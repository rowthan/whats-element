import {getByAttr, getByClass, getById, getByIndex, getByName, getByRoot, getByTagName, getByType} from "./computeId";
import type {ClassFilter, WhatsUniqueResult} from "../typing";
import getTarget from "../target";
import {QueryTypes, SPLIT_MODE_CODE} from "../const";


function getUniqueIdInScope(element: HTMLElement | HTMLInputElement, classFilter: ClassFilter = {blockClassList:[],maxLength: 10}, rootElement?: HTMLElement) {
    return getByRoot(element)
        || getById(element,rootElement)
        || getByName(element,rootElement)
        || getByClass(element, classFilter,rootElement)
        || getByType(element,rootElement)
        || getByAttr(element,rootElement)
}

/**
 * 基于当前节点找到一个可以被全局唯一定位的元素
 * */
function getUniqueIdForPre(element: HTMLElement | HTMLInputElement, classFilter: ClassFilter = {blockClassList:[],maxLength: 10},): {
    wid: string,
    element: HTMLElement
} | null {
    const parentNode = element.parentElement;
    if(parentNode){
        const result = getUniqueIdInScope(parentNode,classFilter);
        if(result && result.wid){
            return {
                element: parentNode,
                wid: result.wid
            }
        }else{
            return getUniqueIdForPre(parentNode,classFilter)
        }
    }

    return null
}

/**
 * 计算 HTMLElement 的唯一定位 wid 字符串
 * */
export function getUniqueId(element: HTMLElement | HTMLInputElement, classFilter: ClassFilter = {blockClassList:[],maxLength: 10}, rootElement?: HTMLElement ): WhatsUniqueResult {
    /**入参类型守护*/
    if(!element.tagName){
        console.error("input is not a HTML element",element);
        return {
            wid: null,
            type: null,
        };
    }

    /**
     * 根节点 > locate by id > by name > by class > type > link > index > parent
     * TODO 识别动态生成的ID，规则 长度过长？ 含有数字、特殊字符等
     * TODO 增加一种定位方式，按inner文本内容 md5 处理后生成ID
     * **/
    let result = getUniqueIdInScope(element,classFilter,rootElement)

    /**
     * 无法在全局范围内得到唯一ID，
     * 需要进一步通过祖/父节点定位。在祖/父节点的范围内得到唯一ID。
     * */
    if(!result){
        const parentUnique = getUniqueIdForPre(element,classFilter);
        // todo 选择可以作为 fragment 的定位作为祖先节点
        if(parentUnique){
            /**递归定位上一级节点的ID*/
            const relativeResult = getUniqueIdInScope(element,classFilter,parentUnique.element)
                || getByTagName(element,parentUnique.element)
            const relativeWid = relativeResult ? relativeResult.wid : '';
            /**父元素能够在全局得到唯一ID时*/
            if(relativeWid){
                result = {
                    type: QueryTypes.bySplit,
                    wid: parentUnique.wid +  SPLIT_MODE_CODE + relativeWid
                }
            }
        }
    }

    /**无法通过祖父节点缩小范围后，得到唯一ID，则必须依靠直系父亲节点通过索引得到*/
    if(!result){
        const parentNode = element.parentElement
        const parentUniqueId = parentNode ? getUniqueId(parentNode,classFilter) : '';

        if(parentUniqueId && parentUniqueId.wid){
            const parentRelatedQuery = getByIndex(element,classFilter,parentUniqueId.wid)
            if(parentRelatedQuery && parentRelatedQuery.wid){
                result = {
                    wid: parentRelatedQuery.wid,
                    type: QueryTypes.byParent
                }
            }
        }
    }

    if(!result){
        console.error('cant unique id for element ', element)
        return {
            wid: null,
            type: null
        }
    }

    const checkResult = result.wid ? getTarget(result.wid) : {target: null,type: null};

    if(checkResult === element){
        return result
    }else{
        console.warn('检测不通过', element,checkResult,result.wid)
    }


    // 无法定位的情况，增加
    console.error(element,'无法被唯一定位')
    return {
        wid: null,
        type: null,
    }
}
