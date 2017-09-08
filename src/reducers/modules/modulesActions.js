import t from '../types'

export function addDraggingModule(payload) {
    return {
        type: t.ADD_DRAGGING_MODULE,
        payload
    }
}
