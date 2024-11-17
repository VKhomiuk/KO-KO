import { itemsTypes } from "./types";

export const itemsActionCreator = {
    addItem: (item) => ({
        type: itemsTypes.ADD_ITEM,
        payload: item
    }),

    removeItem: (id) => ({
        type: itemsTypes.REMOVE_ITEM,
        payload: id
    }),

    changeCounter: ({ id, counter }) => ({
        type: itemsTypes.CHANGE_ITEM_COUNTER,
        payload: {
            id,
            counter
        }
    }),

    updateItem: (item) => ({
        type: itemsTypes.UPDATE_ITEM,
        payload: item
    })
}
