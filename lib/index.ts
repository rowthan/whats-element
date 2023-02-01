import getTarget, {TargetElement} from "./target";
import {getUniqueId} from "./compute";
import {QueryTypes, SPLIT_MODE_CODE} from "./const";
import {ClassFilter, WhatsUniqueResult} from "./compute/computeId";

interface Option {
  ignoreClassRule?: ClassFilter
  minDeep: number // 生成ID的，最小层级深度，如 #app 为1级， body #app 为2级； #app 变化时，还可以通过上级节点，进一步查找定位
}

export default class WhatsElement {
  private readonly option: Option;
  constructor(option: Option) {
    this.option = option
  }

  getTarget(queryString: string, type?: QueryTypes, root?: HTMLElement | Document): TargetElement{
    return getTarget(queryString,type,root)
  }

  getUniqueId(element: HTMLElement,minDeep=this.option.minDeep): WhatsUniqueResult{
    try{
      const result = getUniqueId(element,this.option.ignoreClassRule);
      /**无法定位*/
      if(!result.wid){
        return result
      }
      const selectorArray = (result.wid || '').split(SPLIT_MODE_CODE);
      if(minDeep > selectorArray.length){
        const needDeep = minDeep - selectorArray.length;
        // 层级不够的情况下，对一级节点的父节点再定位
        const rootElement = getTarget(selectorArray[0]);
        if(rootElement?.target?.parentElement){
          const parentResult = this.getUniqueId(rootElement?.target?.parentElement,needDeep);
          const selectorWithParent = ((parentResult.wid || '') + SPLIT_MODE_CODE + result.wid).trim();
          const check = getTarget(selectorWithParent);
          if(check.target === element){
            return {
              wid: selectorWithParent,
              type: QueryTypes.bySplit,
            };
          }else{
            // console.warn(check.target,'拼接后，不匹配原始节点',selectorWithParent)
          }
        }
      }
      return result;
    }catch (e) {
      console.error(e,'计算元素信息异常',element)
      return {
        wid: null,
        type: null,
      }
    }
  }

  /**根据wid,查询DOM链*/
  getTargetLine(queryString: string): HTMLElement[]{
    if(!queryString){
      return []
    }
    const queryStringArray = queryString.trim().split(/\s+/);
    const result: HTMLElement[] = [];
    for(let i=0; i<queryStringArray.length; i++){
      const tempQuery = (queryStringArray.slice(0,i+1).join(SPLIT_MODE_CODE)).trim();
      if(!tempQuery){
        continue
      }
      const tempTarget = this.getTarget(tempQuery,i===0? undefined : QueryTypes.bySplit)
      if(tempTarget.target){
        result.push(tempTarget.target)
      }
    }
    return result
  }
}

