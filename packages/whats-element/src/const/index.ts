export const SPLIT_MODE_CODE = '  '

/**直系父节点选择器*/
export const PARENT_SPLIT_CODE = ' > '

export enum QueryTypes {
    // 通过ID查找
    byId = 'id',
    // 通过css selector 查找
    bySelector = 'css_selector',
    // 通过 name 查找，一般用于 input
    byName = 'name',
    byTagName = 'tagName',
    // 分段查找，按层级逐层递进查找，最普遍的形式
    bySplit = 'steps',
    byParent = 'parent',

}

export interface QueryExtra {
    text?: string
}
