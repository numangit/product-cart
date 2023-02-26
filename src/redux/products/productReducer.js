import { productState } from "./productState";
import { ADDPRODUCT, ADDTOCART, INCREMENT, DECREMENT, DELETECART } from "./actionType";

const productReducer = (state = productState, action) => {
    switch (action.payload) {
        case ADDPRODUCT:
            console.log(ADDPRODUCT, "clicked");
            return;
        case ADDTOCART:
            console.log(ADDTOCART, "clicked");
            return;
        case INCREMENT:
            console.log(INCREMENT, "clicked");
            return;
        case DECREMENT:
            console.log(DECREMENT, "clicked");
            return;
        case DELETECART:
            console.log(DELETECART, "clicked");
            return;
        default:
            return state;
    }
}

export default productReducer;