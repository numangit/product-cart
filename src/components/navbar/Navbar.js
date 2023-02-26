import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../../images/logo.png';

const Navbar = ({ setSelectedPage }) => {

    const cartQuantity = useSelector((state) => state.cart.reduce((total, cartItem) => total + cartItem.quantity, 0));
    console.log("cart quantity:", cartQuantity);

    return (
        <nav className="bg-[#171C2A] py-4">
            <div className="navBar">
                <a href="index.html">
                    <img src={logo} alt="LWS" className="max-w-[140px]" />
                </a>
                <div className="flex gap-4">
                    <a
                        onClick={() => setSelectedPage("home")}
                        // href="#home"
                        className="navHome"
                        id="lws-home"
                    >
                        Home
                    </a>
                    <a
                        onClick={() => setSelectedPage("cart")}
                        // href="cart.html"
                        className="navCart"
                        id="lws-cart"
                    >
                        <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                        <span id="lws-totalCart">{cartQuantity}</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;