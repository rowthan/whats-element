import { QueryTypes, SPLIT_MODE_CODE} from "../const";
import {findFirstLevelChildren} from "../utils/helper";


export interface TargetElement {
    target:  HTMLElement  | null,
    nearest: HTMLElement | Document,
    error: string
}

/**
 * 基于 wid 查找 dom 节点
 * */
export default function getTarget(queryString: string, type?: QueryTypes, root?: HTMLElement | Document): TargetElement{
    const query = queryString ? queryString.trim() : '';
    const findRoot: HTMLElement | Document = root || document;
    if(!query || !findRoot){
        console.trace('wid 或 根节点不存在',query,findRoot)
        return {
            target:null,
            nearest: findRoot,
            error: 'wid 或 根节点不存在'
        }
    }

    // TODO 支持跨层级计算，如祖父节点定位 2、3、4 分别代表父节点、祖父、曾祖父节点定位； 通过三级 * 跨级 实现贯穿至 body 节点的定位
    const regex = new RegExp(`\\s{${SPLIT_MODE_CODE.length}}`);
    const splitedSelector = query.split(regex);
    if(!type){
        if(splitedSelector.length>1){
            type = QueryTypes.bySplit;
        }
    }

    let target: HTMLElement | null = null;
    let nearest = findRoot
    switch (type){
        case QueryTypes.byId:
            target = "getElementById" in findRoot ? target = findRoot.getElementById(queryString) : null
            break;
        case QueryTypes.byName:
            target = "getElementsByName" in findRoot ? findRoot.getElementsByName(queryString)[0] : null;
            break;
        case QueryTypes.bySelector:
            target = findRoot.querySelector ? findRoot.querySelector(queryString) : null;
            break;
        /**whats-element 扩展的查找方法**/
        case QueryTypes.bySplit:
            const selectors = splitedSelector.filter((item)=>{
                return item ? !!item.trim() : false;
            })
            const firstSelector = selectors[0];// 寻找第一级

            /**
             * 1. 在指定根节点的情况下，仅查找直接子节点;
             * 2. 未指定根节点的情况下，子、孙节点第一个即为对象。
             * */
            if(root){
                const matchedElements = findFirstLevelChildren(findRoot,firstSelector);
                target = matchedElements[0] || null;
                if(matchedElements.length !== 1){
                    // TODO ？ 给一定的提示
                    // console.warn(firstSelector,'非唯一子节点，取第0个，可能异常',matchedElements)
                }
            }else{
                target = getTarget(firstSelector,QueryTypes.bySelector,findRoot).target
            }
            // 继续查找下一层级节点
            if(target && selectors.length > 1){
                selectors.splice(0,1);
                const nextString = (selectors.join(SPLIT_MODE_CODE)).trim();
                const nextResult = getTarget(nextString,QueryTypes.bySplit,target);
                target = nextResult.target;
                nearest = nextResult.nearest;
            }
            break;
        default:
            /**未指定type的情况下，按优先级查找*/
            const result = getTarget(queryString, QueryTypes.byId,findRoot).target
                || getTarget(queryString, QueryTypes.byName,findRoot).target
                || getTarget(queryString,QueryTypes.bySelector,findRoot).target;

            if(result){
                return {
                    target: result,
                    nearest: nearest,
                    error: ''
                }
            }else{
                return getTarget(queryString, QueryTypes.byId, findRoot)
            }
    }

    // TODO 正向查找不到的情况下，进行反向查找，避免因为父节点的DOM 变动导致子节点无法被定位，存在多个节点的时候，按照深度优先返回最终结果。
    return {
        nearest: nearest,
        target: target,
        error: ''
    };
}
