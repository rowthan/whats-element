import {QueryTypes} from "../const";

export type Range = {
    offset: number,
    text: string
}
export interface WhatsUniqueResult {
    wid: string | null;
    type: QueryTypes | null;
}

export interface Fragment {
    /**节点的抽帧记录片段
     * 当dom id class 变化，或结构微调后，自动化修复节点wid 的依据。
     * start: 文本开始节点  text 文案内容
     * 校验内容是否发生变更
     * 1. offset 对应的偏移量是否有内容变更
     * 2. 两个 offset 之间的差异
     * */
    ranges?: Range[]

    /**
     * 样式描述
     * */
    style?: Record<string, string>
}

export interface ClassFilter {
    blockClassList?: (string | RegExp)[],
    maxLength?: number // class 精简控制
}
