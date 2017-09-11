import t from '../types'

const initialState = {
    draggingModule: {}
}

export default function modulesReducer (state = initialState, action) {
    switch (action.type) {
        // case t.ADD_DRAGGING_LAYOUT: //正在拖拽的布局
        //     return  Object.assign({}, state, {
        //         draggingLayout: action.payload
        //     })
        case t.ADD_DRAGGING_MODULE: //正在拖拽的组件
            return Object.assign({}, state, {
                draggingModule: action.payload
            })
    }
    return state
}
