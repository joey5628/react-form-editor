import t from '../types'

const initialState = {
    draggingModule: {}
}

export default function modulesReducer (state = initialState, action) {
    switch (action.type) {
        case t.ADD_DRAGGING_MODULE:
            return Object.assign({}, state, {
                draggingModule: action.payload
            })
    }
    return state
}
