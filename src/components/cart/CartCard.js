import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartItemDecrement, cartItemIncrement, deleteCartItem } from '../../redux/cart/action';
import { productItemDecrement, productItemDeleteCart, productItemIncrement } from '../../redux/products/action';

const CartCard = ({ cartItem }) => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    //function to get current product quantity
    const currentProduct = products.find(product => product.id === cartItem.id)

    //increment  button handler
    const incrementHandler = (productId) => {
        dispatch(cartItemIncrement(productId));
        dispatch(productItemIncrement(productId));
    }

    //decrement  button handler
    const decrementHandler = (productId) => {
        dispatch(cartItemDecrement(productId));
        dispatch(productItemDecrement(productId));
    }

    //delete cart button handler
    const deleteCartHandler = (deletedQuantity, productId) => {
        dispatch(deleteCartItem(productId));
        dispatch(productItemDeleteCart(deletedQuantity, productId));
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
                    <button
                        onClick={() => incrementHandler(cartItem.id)}
                        className="lws-incrementQuantity"
                        disabled={currentProduct.quantity === 0 && true}
                    >
                        <i className="text-lg fa-solid fa-plus"></i>
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
                <button
                    onClick={() => deleteCartHandler(cartItem.quantity, cartItem.id)}
                    className="lws-removeFromCart"
                >
                    <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
};

export default CartCard;