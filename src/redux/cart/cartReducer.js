import { cartState } from "./cartState";
import { ADDTOCART, INCREMENT, DECREMENT, DELETECART } from "./actionType";

const cartReducer = (state = cartState, action) => {

    switch (action.type) {
        case ADDTOCART:
            console.log("length:", state.length);
            if (state.length > 0) {
                state.forEach(product => {
                    console.log(product.id, action.payload.id);
                    if (product.id === action.payload.id) {
                        // updatedCartState.push();
                        return [
                            ...state,
                            {
                                ...action.payload,
                                quantity: product.quantity + 1
                            }
                        ]
                    } else {
                        return [
                            ...state,
                            {
                                ...action.payload,
                                quantity: 1
                            }
                        ]
                    }
                })

            } else {
                return [
                    ...state,
                    {
                        ...action.payload,
                        quantity: 1
                    }
                ]
            }
            return state;

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