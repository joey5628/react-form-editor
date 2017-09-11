import t from '../types'



//添加正在拖拽的布局
// export function addDraggingLayout(payload) {
//     return {
//         type: t.ADD_DRAGGING_LAYOUT,
//         payload
//     }
// }

//添加正在拖拽的组件
export function addDraggingModule(payload) {
    return {
        type: t.ADD_DRAGGING_MODULE,
        payload
    }
}
