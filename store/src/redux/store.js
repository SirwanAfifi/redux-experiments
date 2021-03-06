import { createStore, combineReducers } from "redux";
import {
    products, carts, cartLoading,
    productLoading, categories
} from "./reducers";

const DEBUGGER_MIDDLEWARE = window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(combineReducers({
    categories,
    products,
    carts,
    cartLoading,
    productLoading
}), DEBUGGER_MIDDLEWARE)