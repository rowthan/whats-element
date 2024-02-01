import WhatsElement from "../whats-element/src/index";
// import skeletonElement from "~packages/skeleton/skeleton";
import {getFragmentsFromLeafElement} from "../whats-element/src/dna/dna";

export {}

console.log(
    "You may find that having is not so pleasing a thing as wanting. This is not logical, but it is often true."
)



const whats = new WhatsElement({
})


// @ts-ignore
window.whats = whats;


let cnt = 0;
let error = false;
function runWhatsElement(root: HTMLElement) {
    if(error){
        return;
    }
    if(root){
      const result =  whats.getUniqueId(root)
        // console.log(result.type,result.wid, root)
        if(!result.wid){
            console.error('无法定位',root)
            error = true;
            return
        }else{
            cnt++
            if(root.children.length){
                for(let i=0; i<root.children.length; i++){
                    if(!result.wid){
                        break
                    }
                    runWhatsElement(root.children[i] as HTMLElement)
                }
            }else{
                if(result.wid === 'body > div:nth-of-type(15) > div:nth-of-type(1) > div:nth-of-type(1)'){
                    // debugger
                }
                const fragments = getFragmentsFromLeafElement(root)
                console.warn(result.wid,[root],'leaf node',fragments)
            }
        }

    }
}

const root = document.body;

runWhatsElement(root);

const noLimitedMax = 99999999;
enum BoxType {
    sideBar="1",
    navBar="2",
    mainContainer="3",
    mainBlock="4",
    normalSize="5"
}
const sizes = [
    {
        // 纵向侧边导航栏
        minWidth: 30,
        minHeight: window.innerHeight - 100,
        maxHeight: noLimitedMax,
        maxWidth: 400,
        typeName: BoxType.sideBar,
    },
    {
        // 横向导航栏尺寸
        minWidth: window.innerWidth - 400,
        minHeight: 30,
        maxHeight: 100,
        maxWidth: noLimitedMax,
        typeName: BoxType.navBar,
    },
    {
        // 超大容器
        minWidth: 600,
        minHeight: 600,
        maxHeight: noLimitedMax,
        maxWidth: noLimitedMax,
        typeName: BoxType.mainContainer,
    },
    {
        // 横向大块
        minWidth: 600,
        minHeight: 300,
        maxHeight: noLimitedMax,
        maxWidth: noLimitedMax,
        typeName: BoxType.mainBlock,
    },
    {
        // 小模块基础尺寸
        minWidth: 100,
        minHeight: 100,
        maxHeight: noLimitedMax,
        maxWidth: noLimitedMax,
        typeName: BoxType.normalSize,
    }
]
// function generateSkeleton() {
//     const result = skeletonElement(document.body,{
//         sizes: sizes,
//         // minText: 1,
//         position: null,
//         ignoreSelector: ""
//     });
//
//     console.log('skeleton 结果：',result)
// }

// generateSkeleton();


