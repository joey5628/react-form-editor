import t from '../types'

const initialState = {
    selectedClientRect: null,
}

export default function propertyReducer (state = initialState, action) {
    switch (action.type) {
        case t.SET_SELECTED_CLIENT_RECT:
            return Object.assign({}, state, {selectedClientRect: action.payload})
    }
    return state
}
