import { cartState } from "./cartState";
import { ADDTOCART, INCREMENT, DECREMENT, DELETECART } from "./actionType";

const cartReducer = (state = cartState, action) => {

    switch (action.type) {
        case ADDTOCART:
            // const updatedCart = [...state];
            // let itemExist = false;
            // state.forEach((product => {
            //     if (product.id === action.payload.id) {
            //         itemExist = true;
            //     }
            // }));

            // if (updatedCart.length > 0 && !itemExist) {
            //     updatedCart.push({
            //         ...action.payload,
            //         quantity: 1,
            //     });
            //     return updatedCart;

            // } else if (updatedCart.length > 0) {
            //     updatedCart.forEach((product) => {
            //         if (product.id === action.payload.id) {
            //             product.quantity = product.quantity + 1;
            //             return updatedCart;
            //         }
            //     });

            // } else if (updatedCart.length === 0) {
            //     updatedCart.push({
            //         ...action.payload,
            //         quantity: 1,
            //     });
            //     return updatedCart;

            // } else {
            //     return updatedCart;
            // }
            // return updatedCart;

            // switch (state) {
            //     case state.length > 0 && !itemExist:
            //         return [
            //             ...state,
            //             {
            //                 ...action.payload,
            //                 quantity: 1
            //             }
            //         ]
            //     case state.length > 0:
            //         return state.map((product) => {
            //             if (product.id === action.payload.id) {
            //                 return {
            //                     ...product,
            //                     quantity: product.quantity + 1
            //                 };
            //             }
            //             return product;
            //         })
            //     case state.length === 0:
            //         return [
            //             ...state,
            //             {
            //                 ...action.payload,
            //                 quantity: 1
            //             }
            //         ]
            //     default:
            //         return state;
            // }

            ////sucesssssssssssssssssssssssssssss

            // if (state.length > 0 && !itemExist) {
            //     return [
            //         ...state,
            //         {
            //             ...action.payload,
            //             quantity: 1
            //         }
            //     ]
            // } else if (state.length > 0) {
            //     return state.map((product) => {
            //         if (product.id === action.payload.id) {
            //             return {
            //                 ...product,
            //                 quantity: product.quantity + 1
            //             };
            //         }
            //         return product;
            //     })

            // } else if (state.length === 0) {
            //     return [
            //         ...state,
            //         {
            //             ...action.payload,
            //             quantity: 1
            //         }
            //     ]

            // } else {
            //     return state;
            // }

            if (state.length > 0) {

                const itemExist = state.find(product => product.id === action.payload.id);
                console.log(itemExist);

                if (itemExist) {
                    return state.map((product) => {
                        if (product.id === action.payload.id) {
                            return {
                                ...product,
                                quantity: product.quantity + 1
                            };
                        }
                        return product;
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

            } else {
                return [
                    ...state,
                    {
                        ...action.payload,
                        quantity: 1
                    }
                ]
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