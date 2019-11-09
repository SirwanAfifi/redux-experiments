import { createStore } from "redux";
import { products, carts, cartLoading, productLoading } from "./reducers";

const DEBUGGER_MIDDLEWARE = window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(Redux.combineReducers({
    products,
    carts,
    cartLoading,
    productLoading
}), DEBUGGER_MIDDLEWARE)