import t from '../types'

const initialState = [
    {
        alias: '12',
        cols: [
            {
                span: 12,
                module: null
            }
        ]
    },
    {
        alias: '6 6',
        cols: [
            {
                span: 6,
                module: null
            },
            {
                span: 6,
                module: null
            }
        ]
    }
]

export default function renderReducer (state = initialState, action) {
    switch (action.type) {
        case t.ADD_ROW:
            /**
             * TODO 我真想用immutable啊
             * 如果不使用Object.assgin生产新的对象，而直接使用draggingModule的话，
             * 他们在内存中还是同一块区域，会导致后续给row.col下添加module时导致相同
             * 的modules中是相同的数据
             */
            let rowData = Object.assign({}, action.payload)
            return [
                ...state,
                rowData
            ]

        case t.ADD_MODULE:
            const { rowIndex, colIndex, draggingModule } = action.payload
            state[rowIndex].cols[colIndex].module = draggingModule
            let newState = [...state]
            return newState

    }
    return state
}
