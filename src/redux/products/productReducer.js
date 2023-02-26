import { productState } from "./productState";
import { ADDPRODUCT, ADDTOCART, INCREMENT, DECREMENT, DELETECART } from "./actionType";

const generateId = (arrayData) => {
    const maxId = arrayData.reduce((maxId, product) => Math.max(product.id, maxId), 0);
    return maxId + 1;
};

const productReducer = (state = productState, action) => {
    switch (action.type) {
        case ADDPRODUCT:
            return [
                ...state,
                {
                    ...action.payload,
                    id: generateId(state)
                }
            ]

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