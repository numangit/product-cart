import { cartState } from "./cartState";
import { ADDTOCART, INCREMENT, DECREMENT, DELETECART } from "./actionType";

const cartReducer = (state = cartState, action) => {

    switch (action.type) {
        case ADDTOCART:

            const updatedCartState = [...state];
            if (updatedCartState) {
                updatedCartState.forEach(product => {
                    if (product.id === action.payload.id) {
                        updatedCartState.push({
                            ...action.payload,
                            quantity: product.quantity + 1
                        });
                        return;
                    }
                })

            } else {
                updatedCartState.push({ ...action.payload, quantity: 1 })
            }
            return updatedCartState;
        case INCREMENT:
            console.log("INCREMENT clicked");
            return;
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