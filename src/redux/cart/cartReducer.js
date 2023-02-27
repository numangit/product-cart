import { cartState } from "./cartState";
import { ADDTOCART, INCREMENT, DECREMENT, DELETECART } from "./actionType";

const cartReducer = (state = cartState, action) => {

    switch (action.type) {
        case ADDTOCART:
            const updatedCart = [...state];
            let itemExist = false;

            updatedCart.forEach((product => {
                if (product.id === action.payload.id) {
                    itemExist = true;
                }
            }));

            if (updatedCart.length > 0 && !itemExist) {
                updatedCart.push({
                    ...action.payload,
                    quantity: 1,
                });
                return updatedCart;

            } if (updatedCart.length > 0) {
                updatedCart.forEach((product) => {
                    if (product.id === action.payload.id) {
                        product.quantity = product.quantity + 1;
                        return updatedCart;
                    }
                });

            } else if (updatedCart.length === 0) {
                updatedCart.push({
                    ...action.payload,
                    quantity: 1,
                });
                return updatedCart;

            } else {
                return updatedCart;
            }

            return updatedCart;

        case INCREMENT:
            return state.map((product => {
                if (product.id === action.payload) {
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                }
                return product;
            }));

        case DECREMENT:
            console.log("DECREMENT clicked");
            return;
        case DELETECART:
            console.log("DELETECART clicked");
            return;
        default:
            return state;
    }
}

export default cartReducer;