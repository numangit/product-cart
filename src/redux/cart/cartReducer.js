import { cartState } from "./cartState";
import { ADDTOCART, INCREMENT, DECREMENT, DELETECART } from "./actionType";

const cartReducer = (state = cartState, action) => {
    switch (action.payload) {
        case ADDTOCART:
            console.log("ADDTOCART clicked");
            return;
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