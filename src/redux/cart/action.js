import { ADDPRODUCT, ADDTOCART, INCREMENT, DECREMENT, DELETECART } from "./actionType";

export const addProduct = (productData) => {
    return {
        type: ADDPRODUCT,
        payload: productData,
    }
}

export const addToCart = (productId) => {
    return {
        type: ADDTOCART,
        payload: productId,
    }
}

export const productIncrement = (productId) => {
    return {
        type: INCREMENT,
        payload: productId,
    }
}
export const productDecrement = (productId) => {
    return {
        type: DECREMENT,
        payload: productId,
    }
}
export const deleteCart = (deletedQuantity, productId) => {
    return {
        type: DELETECART,
        payload: { deletedQuantity, productId }
    }
}