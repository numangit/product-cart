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
            return state.map((product) => {

                if (product.id === action.payload) {
                    return {
                        ...product,
                        quantity: product.quantity - 1
                    }
                } else {
                    return product;
                }
            })

        case INCREMENT:
            return state.map(product => {
                if (product.id === action.payload) {
                    return {
                        ...product,
                        quantity: product.quantity - 1
                    }
                }
                return product;
            });

        case DECREMENT:
            return state.map(product => {
                if (product.id === action.payload) {
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                }
                return product;
            });

        case DELETECART:
            return state.map(product => {
                if (product.id === action.payload.productId) {
                    return {
                        ...product,
                        quantity: product.quantity + action.payload.deletedQuantity
                    }
                }
                return product;
            });

        default:
            return state;
    }
}

export default productReducer;