import { cartState } from "./cartState";
import { ADDTOCART, INCREMENT, DECREMENT, DELETECART } from "./actionType";

const cartReducer = (state = cartState, action) => {

    switch (action.type) {
        case ADDTOCART:

            //using if else (Success)
            // if (state.length > 0) {

            //     const itemExist = state.find(product => product.id === action.payload.id);
            //     console.log(itemExist);

            //     if (itemExist) {
            //         return state.map((product) => {
            //             if (product.id === action.payload.id) {
            //                 return {
            //                     ...product,
            //                     quantity: product.quantity + 1
            //                 };
            //             }
            //             return product;
            //         })

            //     } else {
            //         return [
            //             ...state,
            //             {
            //                 ...action.payload,
            //                 quantity: 1
            //             }
            //         ]
            //     }

            // } else {
            //     return [
            //         ...state,
            //         {
            //             ...action.payload,
            //             quantity: 1
            //         }
            //     ]
            // }

            switch (state.length === 0) {
                case true:
                    return [
                        {
                            ...action.payload,
                            quantity: 1
                        }
                    ]

                case false:
                    const exist = state.find(product => product.id === action.payload.id)
                    switch (exist === undefined) {
                        case false:
                            return state.map((product) => {
                                if (product.id === action.payload.id) {
                                    return {
                                        ...product,
                                        quantity: product.quantity + 1
                                    };
                                }
                                return product;
                            })

                        case true:
                            return [
                                ...state,
                                {
                                    ...action.payload,
                                    quantity: 1
                                }
                            ]

                        default:
                            return state;
                    }

                default:
                    return state;
            }

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
            return state.map((product => {
                if (product.id === action.payload) {
                    return {
                        ...product,
                        quantity: product.quantity - 1
                    }
                }
                return product;
            }));

        case DELETECART:
            return state.filter((product => product.id !== action.payload));

        default:
            return state;
    }
}

export default cartReducer;