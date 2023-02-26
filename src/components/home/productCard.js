import React from 'react';

const ProductCard = ({ product }) => {
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
                        onClick={() => console.log('compclicked')} className="lws-btnAddToCart"
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;