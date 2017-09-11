import t from '../types'

/**
 * 添加一行布局
 */
export function addRow (row) {
    if (row.value && row.value.length > 0) {
        row.cols = []
        row.value.forEach((cur, index) => {
            row.cols.push({
                span: cur,
                module: null
            })
        })
    }
    console.log('row:', row)
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
