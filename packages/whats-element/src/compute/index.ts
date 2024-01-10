import {computeOffset, getCoords} from "../utils/helper";

export function compute(element: HTMLElement) {
    const viewPosition = element.getBoundingClientRect();
    const inView = viewPosition.left>0 && viewPosition.left < window.innerWidth && viewPosition.top>0 && viewPosition.top<window.innerHeight;

    const offset = computeOffset(element);
    return {
        top: getCoords(element).top,
        left: getCoords(element).left,
        viewLeft: viewPosition.left,
        viewTop: viewPosition.top,
        text: element.innerText,
        visible: inView,
        offsetBodyTop: offset.offsetTop,
        offsetBodyLeft: offset.offsetLeft,
    };
}
