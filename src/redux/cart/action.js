import { ADDTOCART, INCREMENT, DECREMENT, DELETECART } from "./actionType";

export const addToCart = (productData) => {
    return {
        type: ADDTOCART,
        payload: productData,
    }
}

export const cartItemIncrement = (productId) => {
    return {
        type: INCREMENT,
        payload: productId,
    }
}

export const cartItemDecrement = (productId) => {
    return {
        type: DECREMENT,
        payload: productId,
    }
}

export const deleteCartItem = (productId) => {
    return {
        type: DELETECART,
        payload: productId,
    }
}