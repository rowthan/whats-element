import './style.css'
import WhatsElement from "../lib";
// @ts-ignore
import content from './page_test/github.html?raw'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div style=";">
    <style>
        #result{
            position: fixed;
            background: #fff;
            left: 0px;
            right:0;;
            bottom: 0px;
            z-index: 99999;
            background: pink;
        }
    </style>
    <div id="result"></div>
    ${content}
  </div>
`

// @ts-ignore
const whats = window.whats = new WhatsElement({
    ignoreClassRule: {
        maxLength: 16,
        blockClassList: ['px-md','flex','max','h4',/flex-\d+/,/mr-\d+/,/mb-\d+/,/mt-\d+/,/col-\d+/,/pb-\d+/,/pt-\d+/,/py-\d+/,/px-\d+/]
    },
    minDeep: 3
});

document.getElementById('container')

function autoTest(root: HTMLElement = document.body) {
    if(!root.children){
        return;
    }
    for(let i=0; i<root.children.length; i++){
        const tempItem = root.children[i];
        const result = whats.getUniqueId(<HTMLElement>tempItem);
        if(!result.wid){
            console.warn('此元素计算失败')
            console.log(tempItem)
        }else{
            // console.log('success',result.wid);
            if(tempItem.children){
                for(let j=0; j<tempItem.children.length; j++){
                    autoTest(<HTMLElement>tempItem.children[j])
                }
            }
        }
    }
}

setTimeout(function () {
    autoTest()
},4000)

document.addEventListener('click',function (event) {
    event.stopPropagation();
    event.preventDefault();
    const result = whats.getUniqueId(<HTMLElement>event.target);//event.target
    const target = whats.getTarget(result.wid || 'body');
    if(target.target !== event.target){
        console.error('结果不匹配')
        console.log('原始对象',event.target)
        console.log('计算结果',result)
        console.log('通过结果查找对象',target.target,target.nearest)
    }else{
        console.log('计算成功',result.wid)
        console.log('链路',whats.getTargetLine(result.wid || ''))
        console.log('根节点',whats.getTarget((result.wid || '')?.split('  ')[0]).target)
    }


    const resultRoot = document.getElementById('result');
    if(resultRoot){
        resultRoot.innerHTML = `<span>点击元素的 getUniqueId 计算结果：</span> <span>${JSON.stringify(result)}</span>`
    }

},{
    capture: true
})

