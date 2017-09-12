import t from '../types'

export function setSelectedClientRect (payload) {
    return {
        type: t.SET_SELECTED_CLIENT_RECT,
        payload
    }
}
