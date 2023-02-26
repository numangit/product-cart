import { ADDPRODUCT, ADDTOCART, INCREMENT, DECREMENT, DELETECART } from "./actionType";

export const addProduct = (productData) => {
    return {
        type: ADDPRODUCT,
        payload: productData,
    }
}

export const productItemAddToCart = (productId) => {
    return {
        type: ADDTOCART,
        payload: productId,
    }
}

export const productItemIncrement = (productId) => {
    return {
        type: INCREMENT,
        payload: productId,
    }
}

export const productItemDecrement = (productId) => {
    return {
        type: DECREMENT,
        payload: productId,
    }
}

export const productItemDeleteCart = (deletedQuantity, productId) => {
    return {
        type: DELETECART,
        payload: { deletedQuantity, productId }
    }
}