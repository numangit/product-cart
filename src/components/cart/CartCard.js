import React from 'react';
import { useDispatch } from 'react-redux';
import { cartItemDecrement, cartItemIncrement } from '../../redux/cart/action';

const CartCard = ({ cartItem }) => {

    const dispatch = useDispatch();

    //increment  button handler
    const incrementHandler = (productId) => {
        dispatch(cartItemIncrement(productId));
        // console.log("inside incrementHandler");
    }

    //decrement  button handler
    const decrementHandler = (productId) => {
        dispatch(cartItemDecrement(productId));
        // console.log("inside incrementHandler");
    }

    return (
        <div className="cartCard">
            <div className="flex items-center col-span-6 space-x-6">
                {/* <!-- cart image --> */}
                <img className="lws-cartImage" src={cartItem.imageURL} alt="product" />
                {/* <!-- cart item info --> */}
                <div className="space-y-2">
                    <h4 className="lws-cartName">{cartItem.productName}</h4>
                    <p className="lws-cartCategory">{cartItem.category}</p>
                    <p>BDT <span className="lws-cartPrice">{cartItem.price}</span></p>
                </div>
            </div>
            <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                {/* <!-- amount buttons --> */}
                <div className="flex items-center space-x-4">
                    <button className="lws-incrementQuantity">
                        <i
                            onClick={() => incrementHandler(cartItem.id)}
                            className="text-lg fa-solid fa-plus"
                        ></i>
                    </button>
                    <span className="lws-cartQuantity">{cartItem.quantity}</span>
                    <button
                        onClick={() => decrementHandler(cartItem.id)} className="lws-decrementQuantity"
                        disabled={cartItem.quantity === 0 && true}
                    >
                        <i className="text-lg fa-solid fa-minus">
                        </i>
                    </button>
                </div>
                {/* <!-- price --> */}
                <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">{cartItem.quantity * cartItem.price}</span></p>
            </div>
            {/* <!-- delete button --> */}
            <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                <button className="lws-removeFromCart">
                    <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
};

export default CartCard;