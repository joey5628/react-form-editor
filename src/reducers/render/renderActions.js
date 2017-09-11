import t from '../types'

/**
 * 添加一行布局
 */
export function addRow (row) {
    return {
        type: t.ADD_ROW,
        payload: row
    }
}

export function addModule (payload) {
    return {
        type: t.ADD_MODULE,
        payload
    }
}
