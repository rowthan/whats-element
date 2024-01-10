

export function getValidIdForElement(element: HTMLElement) {
    const id = element.id;
    if(!id){
        return null
    }
    // id 含有特殊字符 . : 等特殊字符串 不可用
    if(/[\.:!]/.test(id)){
        console.log('忽略含有特殊字符',id)
        return null;
    }
    // 纯数字的 ID ，不可信，可能是系统基于 list 生成，变动性大，可能误判查找。
    if(/^\d+$/.test(id)){
        console.log('忽略纯数字',id)
        return null;
    }
    return id;
}
