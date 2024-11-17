import {itemsTypes} from './types'
const initialState = {
    items: localStorage.getItem('itemsList') ? JSON.parse(localStorage.getItem('itemsList')) : [],
}

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case itemsTypes.ADD_ITEM:
            localStorage.setItem('itemsList', JSON.stringify(state.items.concat(action.payload)))
            return {
                ...state,
                items: state.items.concat(action.payload)
            }
        case itemsTypes.REMOVE_ITEM:
            localStorage.setItem('itemsList', JSON.stringify(state.items.filter(item => item.id !== action.payload)))
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        case itemsTypes.CHANGE_ITEM_COUNTER:
            localStorage.setItem('itemsList', JSON.stringify(state.items.map(item => {
                if (item.id === action.payload.id) {
                    return {
                        ...item,
                        counter: action.payload.counter
                    }
                }
                return item
            })))
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            counter: action.payload.counter
                        }
                    }
                    return item
                })
            }
        case itemsTypes.UPDATE_ITEM:
            localStorage.setItem('itemsList', JSON.stringify(state.items.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload
                }
                return item
            })))
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.payload.id) {
                        return action.payload
                    }
                    return item
                })
            }
        default:
            return state
    }
}

export default itemsReducer
