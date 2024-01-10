import {QueryTypes, SPLIT_MODE_CODE} from "../const";


/**
 * 基于 wid 查找 dom 节点
 * */
export default function getTarget(queryString: string | undefined = '', type?: QueryTypes, root?: HTMLElement | Document | null): HTMLElement | null{
    const query = queryString ? queryString.trim() : '';
    const findRoot: HTMLElement | Document = root || document;

    if(!query || !findRoot){
        console.trace('wid 或 根节点不存在',query,findRoot)
        return null
    }

    // const regex = new RegExp(`${SPLIT_MODE_CODE}`);
    const targetQueryArray = query.split(SPLIT_MODE_CODE);
    if(!type){
        if(targetQueryArray.length>1){
            type = QueryTypes.bySelector;
        }
    }

    let target: HTMLElement | null = null;
    switch (type){
        case QueryTypes.byId:
            target = "getElementById" in findRoot ? target = findRoot.getElementById(queryString) : null
            break;
        case QueryTypes.byName:
            target = "getElementsByName" in findRoot ? findRoot.getElementsByName(queryString)[0] : null;
            break;
        case QueryTypes.bySelector:
            // 这里应该用 querySelectorAll 来判断是否具备唯一性
            try{
                const matchedList = findRoot.querySelectorAll ? findRoot.querySelectorAll(queryString) : [];
                if(matchedList && matchedList.length === 1){
                    target = matchedList[0] as HTMLElement;
                }
                // if(matchedList.length>1){
                //     console.warn('存在多个满足', matchedList)
                // }
            }catch (e) {
                console.warn(e,queryString)
            }
            break;
        /**whats-element 扩展的查找方法**/
        case QueryTypes.bySplit:
            const selectors = targetQueryArray.filter((item)=>{
                return item ? !!item.trim() : false;
            })
            let root: Document | HTMLElement = document;
            /**逐级查找*/
            for(let i=0;i<selectors.length; i++){
                const tempNode = getTarget(selectors[i],undefined,root);
                if(tempNode){
                    target = tempNode
                    root = tempNode
                }else{
                    break;
                }
            }

            /**
             * 1. 在指定根节点的情况下，仅查找直接子节点;
             * 2. 未指定根节点的情况下，子、孙节点第一个即为对象。
             * */
            // if(root){
            //     const matchedElements = findFirstLevelChildren(findRoot,firstSelector);
            //     target = matchedElements[0] || null;
            //     if(matchedElements.length !== 1){
            //         // TODO ？ 给一定的提示
            //         // console.warn(firstSelector,'非唯一子节点，取第0个，可能异常',matchedElements)
            //     }
            // }else{
            //     target = getTarget(firstSelector,QueryTypes.bySelector,findRoot).target
            // }
            // // 继续查找下一层级节点
            // if(target && selectors.length > 1){
            //     selectors.splice(0,1);
            //     const nextString = (selectors.join(SPLIT_MODE_CODE)).trim();
            //     const nextResult = getTarget(nextString,QueryTypes.bySplit,target);
            //     target = nextResult.target;
            //     nearest = nextResult.nearest;
            // }
            break;
        default:
            /**未指定type的情况下，按优先级查找*/
            const result = getTarget(queryString, QueryTypes.byId,findRoot)
                || getTarget(queryString, QueryTypes.byName,findRoot)
                || getTarget(queryString,QueryTypes.bySelector,findRoot);

            if(result){
                return result
            }else{
                return getTarget(queryString, QueryTypes.byId, findRoot)
            }
    }

    // TODO 正向查找不到的情况下，进行反向查找，避免因为父节点的DOM 变动导致子节点无法被定位，存在多个节点的时候，按照深度优先返回最终结果。
    return target
}
