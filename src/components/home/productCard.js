import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/action';
import { productItemAddToCart } from '../../redux/products/action';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    //add to cart handler
    const addToCardHandler = (productData) => {

        dispatch(addToCart(productData));
        dispatch(productItemAddToCart(productData.id));
    }

    return (
        <div>
            <div key={product.id} className="lws-productCard">
                <img className="lws-productImage" src={product.imageURL} alt="product" />
                <div className="p-4 space-y-2">
                    <h4 className="lws-productName">{product.productName}</h4>
                    <p className="lws-productCategory">{product.category}</p>
                    <div className="flex items-center justify-between pb-2">
                        <p className="productPrice">BDT <span className="lws-price">{product.price}</span></p>
                        <p className="productQuantity">QTY <span className="lws-quantity">{product.quantity}</span></p>
                    </div>
                    <button
                        onClick={() => addToCardHandler(product)}
                        disabled={product.quantity === 0 && true}
                        className="lws-btnAddToCart"
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;