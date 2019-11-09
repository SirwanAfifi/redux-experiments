import {
    LOAD_PRODUCT_DATA,
    LOAD_CART_DATA,
    ADD_TO_CART,
    REMOVE_FROM_CART
} from "./constants";

export const productLoading = (state = true, action) => {
    switch (action.type) {
        case LOAD_PRODUCT_DATA:
            return true;
        default:
            return state;
    }
}
export const cartLoading = (state = true, action) => {
    switch (action.type) {
        case LOAD_CART_DATA:
            return true;
        default:
            return state;
    }
}
export const products = (state = [], action) => {
    switch (action.type) {
        case LOAD_PRODUCT_DATA:
            return action.products;
        default:
            return state;
    }
}
export const carts = (state = [], action) => {
    switch (action.type) {
        case LOAD_CART_DATA:
            return action.products;
        case ADD_TO_CART:
            return state.concat([action.product]);
        case REMOVE_FROM_CART:
            return state.filter(cart => cart.productId !== action.productId);
        default:
            return state;
    }
}