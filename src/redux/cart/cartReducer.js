import { cartState } from "./cartState";
import { ADDTOCART, INCREMENT, DECREMENT, DELETECART } from "./actionType";

const cartReducer = (state = cartState, action) => {

    switch (action.type) {
        case ADDTOCART:
            // switch (state) {
            //     case "exist":
            //         return state.map(product => {
            //             if (product.id === action.payload.id) {
            //                 return [
            //                     ...state,
            //                     {
            //                         ...product,
            //                         quantity: product.quantity + 1
            //                     }
            //                 ]
            //             }
            //         });

            //     default:
            //         return [
            //             ...state,
            //             {
            //                 ...action.payload,
            //                 quantity: 1
            //             }
            //         ]
            // }
            // if (state) {
            //     state.map(product => {
            //         if (product.id === action.payload.id) {
            //             return [
            //                 ...state,
            //                 {
            //                     ...product,
            //                     quantity: product.quantity + 1
            //                 }
            //             ]
            //         }
            //     });
            // } else {
            //     return [
            //         ...state,
            //         {
            //             ...action.payload,
            //             quantity: 1
            //         }
            //     ]
            // }
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