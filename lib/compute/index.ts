import {
    ClassFilter,
    getByAttr,
    getByClass,
    getById,
    getByIndex,
    getByName,
    getByParent,
    getByRoot,
    getByType,
    WhatsUniqueResult
} from "./computeId";

/**
 * 计算 HTMLElement 的唯一定位 wid 字符串
 * */
export function getUniqueId(element: HTMLElement | HTMLInputElement, classFilter: ClassFilter = {blockClassList:[],maxLength: 10}): WhatsUniqueResult {
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
    const result = getByRoot(element)
        || getById(element)
        || getByName(element)
        || getByClass(element,classFilter)
        || getByType(element)
        || getByAttr(element)
        // TODO 非父节点控制下，不适用于基于索引的定位；取消
        || getByIndex(element,classFilter);
    if(result){
        return result;
    }


    /**
     * 无法通过自身定位，需要进一步通过父节点定位 location by parent
     * */
    const parentNode = element.parentElement;
    if(parentNode){
        // 递归定位上一级节点的ID
        const parentQueryResult = getUniqueId(parentNode,classFilter);
        const parentQueryString = parentQueryResult.wid;
        const result = getByParent(element,parentQueryString,classFilter);
        if(result){
            return result;
        }
    }

    // 无法定位的情况，增加
    console.error(element,'无法被唯一定位')
    return {
        wid: null,
        type: null
    }
}
