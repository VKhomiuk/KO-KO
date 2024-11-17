import { thunk } from "redux-thunk";
import Reducers from "./reducers";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";

const RootReducer = combineReducers(Reducers);

export const store = createStore(
    RootReducer,
    undefined,
    compose(applyMiddleware(thunk)),
)
