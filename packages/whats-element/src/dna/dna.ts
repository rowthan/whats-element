import type {Range} from "../typing";
import {checkCanBeFragmentNode} from "../fragment/check";

/**
 * 对元素内文本的采样
 * offset 偏移量(偏移量的数量也标识了该节点的内容丰富程度)
 * text: 偏移量的文本信息
 * */
export function makeRangesForElement(element: HTMLElement,fragments: number = 4) {
    const text = element.textContent || '';
    if(!text){
        return [];
    }else{
    }
    const ranges: Range[] = []
    for(let i=0; i < fragments; i++){
        const offset = i * Math.floor(text.length / fragments);
        ranges.push({
            offset: offset,
            text: text.substring(offset,offset+4)
        })
    }
    return ranges;
}


/**
 * 提取一个节点的关键样式特征
 *
 * */
const KEY_STYLES = ['width','height','position','display']
export function getKeyStyles(element: HTMLElement) {
    const styleMap = getComputedStyle(element);
    const result: Record<string, string> = {}
    KEY_STYLES.forEach(function (key) {
        //@ts-ignore
        result[key] = styleMap[key]
    })
    return result;
}


/**
 * 从叶子节点开始，绘制 fragment 图谱
 * */
export function getFragmentsFromLeafElement(leafElement: HTMLElement) {
    const fragments: HTMLElement[] = [];

    const parent = leafElement.parentElement;

    if(!parent || !parent.parentElement){
        fragments.unshift(leafElement)
        return fragments
    }

    const canBeFragment = checkCanBeFragmentNode(parent);


    if(canBeFragment){
        const {height: parentHeight, width: parentWidth} = parent.getBoundingClientRect();
        const parentArea = parentHeight * parentWidth;

        const {height,width} = parent.parentElement.getBoundingClientRect();
        const gradArea = height * width;

        // 有必要作为 fragment 节点
        const areaChanged = parentArea / gradArea < 0.8

        /**面积突变可以作为独立的 fragment */
        if(areaChanged){
            fragments.unshift(parent)
        } else{
            /**特殊样式，可以作为独立的 fragment */
            const style = getComputedStyle(parent);
            if(style.display==='none' || style.position==='fixed' || style.position === 'absolute'){
                fragments.unshift(parent)
            }
        }
    }

    /**继续向上寻找*/
    fragments.unshift(...getFragmentsFromLeafElement(parent))


    return fragments;
}

