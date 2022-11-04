export const SPLIT_MODE_CODE = '  '
export const PARENT_MODE_CODE_LENGTH = 2

export enum QueryTypes {
    // 通过ID查找
    byId = 'id',
    // 通过css selector 查找
    bySelector = 'css_selector',
    // 通过 name 查找，一般用于 input
    byName = 'name',
    // 分段查找，按层级逐层递进查找，最普遍的形式
    bySplit = 'split',
}

export interface QueryExtra {
    text?: string
}
