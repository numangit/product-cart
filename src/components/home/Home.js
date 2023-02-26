import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
    const productStates = useSelector((state) => state.products);
    console.log(productStates);
    return (
        <main className="py-16">
            <div className="productWrapper">
                {/* <!-- products container --> */}
                <div className="productContainer" id="lws-productContainer">
                    {/* <!-- product item --> */}
                    {
                        productStates.map((product) => {
                            return <div key={product.id} className="lws-productCard">
                                <img className="lws-productImage" src={product.imageUrl} alt="product" />
                                <div className="p-4 space-y-2">
                                    <h4 className="lws-productName">{product.productName}</h4>
                                    <p className="lws-productCategory">{product.category}</p>
                                    <div className="flex items-center justify-between pb-2">
                                        <p className="productPrice">BDT <span className="lws-price">{product.price}</span></p>
                                        <p className="productQuantity">QTY <span className="lws-quantity">{product.quantity}</span></p>
                                    </div>
                                    <button
                                        onClick={() => console.log('clicked')} className="lws-btnAddToCart"
                                    >
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        })
                    }
                    {/* <!-- product item ends --> */}
                </div>
                {/* <!-- products container ends --> */}
                <div>
                    {/* <!-- Product Input Form --> */}
                    <div className="formContainer">
                        <h4 className="formTitle">Add New Product</h4>
                        <form className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
                            {/* <!-- product name --> */}
                            <div className="space-y-2">
                                <label htmlFor="lws-inputName">Product Name</label>
                                <input className="addProductInput" id="lws-inputName" type="text" required />
                            </div>
                            {/* <!-- product category --> */}
                            <div className="space-y-2">
                                <label htmlFor="lws-inputCategory">Category</label>
                                <input className="addProductInput" id="lws-inputCategory" type="text" required />
                            </div>
                            {/* <!-- product image url --> */}
                            <div className="space-y-2">
                                <label htmlFor="lws-inputImage">Image Url</label>
                                <input className="addProductInput" id="lws-inputImage" type="text" required />
                            </div>
                            {/* <!-- price & quantity container --> */}
                            <div className="grid grid-cols-2 gap-8 pb-4">
                                {/* <!-- price --> */}
                                <div className="space-y-2">
                                    <label htmlFor="ws-inputPrice">Price</label>
                                    <input className="addProductInput" type="number" id="lws-inputPrice" required />
                                </div>
                                {/* <!-- quantity --> */}
                                <div className="space-y-2">
                                    <label htmlFor="lws-inputQuantity">Quantity</label>
                                    <input className="addProductInput" type="number" id="lws-inputQuantity" required />
                                </div>
                            </div>
                            {/* <!-- submit button --> */}
                            <button type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
                        </form>
                    </div>
                    {/* <!-- Product Input Form Ends --> */}
                </div>
            </div>
        </main >
    );
};

export default Home;