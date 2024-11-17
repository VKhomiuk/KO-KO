import {createSelector} from "reselect";

export const getItems = createSelector(
    [(state) => state.items],
    items => {
        return items.items
    }
)

export const getItemById = createSelector(
    [(state, itemId) => itemId, (state) => state.items],
    (itemId, items) => {
        return items.items.find(item => item.id === itemId)
    }
)
