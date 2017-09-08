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
        case t.ADD_ROW: {
            // return Object.assgin({}, state, action.payload)
            return [
                ...state,
                action.payload
            ]
        }
    }
    return state
}
