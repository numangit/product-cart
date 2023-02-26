import React from 'react';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../redux/cart/action';
// import { productItemAddToCart } from '../../redux/products/action';

const ProductCard = ({ product }) => {

    // const dispatch = useDispatch();
    // const { id, imageUrl, productName, category, price, quantity } = product;

    //add to cart handler
    const addToCardHandler = () => {

        // dispatch(addToCart(productData));
        // dispatch(productItemAddToCart(productData.id));
        console.log("addToCardHandler");
    }

    return (
        <div>
            <div key={product.id} className="lws-productCard">
                <img className="lws-productImage" src={product.imageUrl} alt="product" />
                <div className="p-4 space-y-2">
                    <h4 className="lws-productName">{product.productName}</h4>
                    <p className="lws-productCategory">{product.category}</p>
                    <div className="flex items-center justify-between pb-2">
                        <p className="productPrice">BDT <span className="lws-price">{product.price}</span></p>
                        <p className="productQuantity">QTY <span className="lws-quantity">{product.quantity}</span></p>
                    </div>
                    <button
                        onClick={addToCardHandler}
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