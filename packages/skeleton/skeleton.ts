

type Position = 'relative' | 'absolute' | 'fixed' | null

type Size = {
    minWidth: number
    maxWidth: number
    minHeight: number
    maxHeight: number
    minInterText?: number // 内部的文本内容超过限制
    minOuterText?: number
    typeName: string
}
type Options = {
    sizes:Size[],
    // minText?: number,
    position: Position
    ignoreSelector: string, // 忽略的节点匹配
}

type Container = {
    height: number,
    width: number,
}
type MatchedRule = Size & Container

interface MatchedNode {
    node: HTMLElement,
    pNode: MatchedNode,
    rangeRate: number,
    childTotalRate: number,
    deep: number,
    innerText: string,
    styles: Record<string, any>,
    matchedRule: MatchedRule,
    child_list: MatchedNode[],
}

function checkMatched(element:HTMLElement,filter:Options): MatchedRule | null {
    // const {minText} = filter;
    // if(minText){
    const whiteTags = ['IMG','VIDEO','BODY']
    if(!whiteTags.includes(element.tagName) && element?.innerText?.length<1){
        return null;
    }
    // }

    const {height,width} = element.getBoundingClientRect();
    const matched = filter.sizes.find(function (size) {
        const {minWidth,minHeight,maxHeight,maxWidth,minInterText,minOuterText} = size;
        let match =  height > minHeight && height < maxHeight && width > minWidth && width < maxWidth;
        if(minInterText){
            match = match && getElementText(element).length > minInterText
        }
        if(minOuterText){
            match = match && element.outerText.length > minOuterText
        }
        return match;
    })

    if(matched){
        return {
            ...matched,
            height: height,
            width: width
        }
    }
    return null
}

function diffSize(preNode:HTMLElement,nextNode:HTMLElement){
    if(!preNode || !nextNode){
        return 1
    }
    const preWidth = preNode.offsetWidth;
    const preHeight = preNode.offsetHeight;
    const nextWidth = nextNode.offsetWidth;
    const nextHeight = nextNode.offsetHeight;


    const diffArea = preWidth*preHeight - nextWidth * nextHeight
    const parentArea = (Math.max(preWidth,nextWidth) * Math.max(preHeight,nextHeight))

    return Math.abs(diffArea / parentArea);
}

function getElementText(root: HTMLElement) {
    let str = ''
    for(let i=0; i<root.childNodes.length; i++){
        const node = root.childNodes[i];
        if(node.nodeType===3){
            str += node.nodeValue.trim()
        }
    }
    return str
}

/**
 * skeleton for a element
 * 为一个DOM元素，绘制画像。勾勒骨架，可用于绘制骨架屏，返回数值，可以用于对比两个 DOM 元素的相似性
 * */
function skeletonElement(root:HTMLElement, options:Options, deep=0):MatchedNode {
    // const {minWidth,minHeight,maxHeight,maxWidth} = options;
    const matched = checkMatched(root,options);
    // if(root.id==='bytedance-gitlab-hidden-watermark'){
    //     debugger
    // }
    if(!matched){
        return null
    }
    const result: MatchedNode = {
        styles: {
            width: root.offsetWidth,
            height: root.offsetHeight,
        },
        matchedRule: matched,
        deep:deep,
        node: root,
        pNode: null,
        rangeRate: 0,
        childTotalRate: 0,
        innerText: getElementText(root),
        child_list:[]
    }
    const nextDeep = deep + 1
    for(let i=0; i<root.children.length; i++){
        const child = <HTMLElement>root.children[i];

        // const childMatch: Options = {
        //     ignoreSelector: "",
        //     maxHeight: Math.min(matched.height,options.maxHeight),
        //     maxWidth: Math.min(matched.width,options.maxWidth),
        //     minHeight:options.minHeight,
        //     minWidth: options.minWidth,
        //     position: null,
        // }
        // console.log(childMatch,'child',options)
        const tempCheck = skeletonElement(child,options,nextDeep);
        if(tempCheck){
            tempCheck.pNode = result
            result.child_list.push(tempCheck)
        }
    }

    // 如果子节点只被切割为1个，则无需再切割
    if(result.child_list.length===1){
        const parent = result.node;
        const child = result.child_list[0].node;
        const diffRate = diffSize(parent,child)
        if(diffRate<0.1){
            return result.child_list[0]
        }
    }
    result.rangeRate = 1 - diffSize(result.node,result.node.parentElement)
    let childrenRate = 0;
    result.child_list.forEach(function (item) {
        childrenRate += item.rangeRate;
    })
    result.childTotalRate = childrenRate
    return result
}


export type {
    MatchedNode
}

export default skeletonElement
