import React from 'react';
import { useSelector } from 'react-redux';
import BillDetails from './BillDetails';
import CartCard from './CartCard';

const Cart = () => {

    const cartsState = useSelector((state) => state.cart);

    return (
        <main className="py-16">
            <div className="container 2xl:px-8 px-2 mx-auto">
                <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
                <div className="cartListContainer">
                    <div className="space-y-6">
                        {/* <!-- Cart Item --> */}
                        {
                            cartsState?.map((cartItem) => <CartCard key={cartItem.id} cartItem={cartItem} />)
                        }
                        {/* <!-- Cart Items Ends --> */}
                    </div>

                    {/* <!-- Bill Details --> */}

                    <BillDetails cartsState={cartsState} />

                </div>
            </div>
        </main>
    );
};

export default Cart;