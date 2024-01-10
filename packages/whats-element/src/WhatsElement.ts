import getTarget from "./target";
import {getUniqueId} from "./uniqueId";
import {compute} from "./compute";
import {QueryTypes, SPLIT_MODE_CODE} from "./const";
import {getKeyStyles, makeRangesForElement} from "./dna/dna";
import {getDefaultOption} from "./const/data";
import type {ClassFilter, WhatsUniqueResult} from "./typing";

interface Option {
    ignoreClassRule?: ClassFilter
}

export default class WhatsElement {
    private readonly option: Option;
    constructor(option: Option = getDefaultOption()) {
        this.option = option
    }

    static getTarget(queryString: string, type?: QueryTypes, root?: HTMLElement | Document){
        return getTarget(queryString,type,root)
    }

    getTarget(queryString: string, type?: QueryTypes, root?: HTMLElement | Document){
        return getTarget(queryString,type,root)
    }

    /**
     * 指定一个元素，计算出可以定位到该元素的唯一特征描述
     * */
    getUniqueId(element: HTMLElement): WhatsUniqueResult{
        /**
         * 该元素的特征描述
         * */
        try{
            return getUniqueId(element,this.option.ignoreClassRule);
        }catch (e) {
            console.error(e,'计算元素信息异常',element)
            return {
                wid: null,
                type: null,
            }
        }
    }

    static getUniqueId(element: HTMLElement){
        return getUniqueId(element)
    }

    compute(element: HTMLElement){
        const uniqueId = this.getUniqueId(element);
        return {
            ...compute(element),
            ...uniqueId,
        }
    }

    /**
     * 根据wid,查询DOM链
     * 返回可追溯目的元素 过程中的 所有 DOM 节点。最大程度的找到 目的元素的最小范围。缩小目标范围。
     * */
    getElementsLines(queryString: string): HTMLElement[]{
        if(!queryString){
            return []
        }
        const queryStringArray = queryString.trim().split(SPLIT_MODE_CODE);
        const result = [];
        for(let i=0; i<queryStringArray.length; i++){
            const tempQuery = (queryStringArray.slice(0,i+1).join(SPLIT_MODE_CODE)).trim();
            if(!tempQuery){
                continue
            }
            const tempTarget = this.getTarget(tempQuery,i===0? undefined : QueryTypes.bySplit)
            if(tempTarget){
                result.push(tempTarget)
            }
        }
        return result
    }

    /**
     * 获取一个可以作为 element 比对基因的标识
     * 包含自身节点的采样：text内容，样式宽高布局、位于整个document的布局位置。
     * 这些信息有利于二次比对，当 uniqueId 变化后的关键信息
     * */
    getDNA(element: HTMLElement){
        return {
            ranges: makeRangesForElement(element),
            styles: getKeyStyles(element),
            fragments: []
        }
    }
}

