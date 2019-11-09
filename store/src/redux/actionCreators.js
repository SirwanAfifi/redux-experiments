import {
    LOAD_PRODUCT_DATA,
    LOAD_CART_DATA,
    ADD_TO_CART,
    REMOVE_FROM_CART
} from "./constants";

export function loadProductDataAction(products) {
    return {
        type: LOAD_PRODUCT_DATA,
        products
    }
}
export function loadCartDataAction(products) {
    return {
        type: LOAD_CART_DATA,
        products
    }
}
export function addToCartAction(product) {
    return {
        type: ADD_TO_CART,
        product
    }
}
export function removeFromCartAction(productId) {
    return {
        type: REMOVE_FROM_CART,
        productId
    }
}