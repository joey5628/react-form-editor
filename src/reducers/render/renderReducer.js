import t from '../types'

const initialState = [
    {
        alias: '12',
        value: [12],
        modules: []
    },
    {
        alias: '6 6',
        value: [6, 6],
        modules: []
    }
]

export default function renderReducer (state = initialState, action) {
    switch (action.type) {
        case t.ADD_ROW:
            // return Object.assgin({}, state, action.payload)
            let rowData = action.payload
            rowData.modules = []
            return [
                ...state,
                rowData
            ]
        case t.ADD_MODULE:
            const { rowIndex, colIndex, draggingModule } = action.payload
            let newState = state.map((cur, index) => {
                if (index === rowIndex) {
                    // for(let i = 0; i < colIndex + 1; i++) {
                    //
                    // }
                    cur.modules[colIndex] = draggingModule
                    return cur
                } else {
                    return cur
                }
            })
            return newState
    }
    return state
}
