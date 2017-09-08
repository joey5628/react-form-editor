import t from '../types'

export function addRow (row) {
    return {
        type: t.ADD_ROW,
        payload: row 
    }
}
