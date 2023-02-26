import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/products/action';

const ProductForm = () => {

    const dispatch = useDispatch();

    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    //function to handle form submit
    const submitHandler = (e) => {
        e.preventDefault();
        const selectedProduct = { productName, category, imageURL, price, quantity };
        dispatch(addProduct(selectedProduct));
    }

    return (
        <div className="formContainer">
            <h4 className="formTitle">Add New Product</h4>
            <form
                onSubmit={submitHandler}
                className="space-y-4 text-[#534F4F]"
                id="lws-addProductForm"
            >
                {/* <!-- product name --> */}
                <div className="space-y-2">
                    <label htmlFor="lws-inputName">Product Name</label>
                    <input
                        className="addProductInput"
                        id="lws-inputName"
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required />
                </div>
                {/* <!-- product category --> */}
                <div className="space-y-2">
                    <label htmlFor="lws-inputCategory">Category</label>
                    <input
                        className="addProductInput"
                        id="lws-inputCategory"
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required />
                </div>
                {/* <!-- product image url --> */}
                <div className="space-y-2">
                    <label htmlFor="lws-inputImage">Image Url</label>
                    <input
                        className="addProductInput"
                        id="lws-inputImage"
                        type="text"
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                        required />
                </div>
                {/* <!-- price & quantity container --> */}
                <div className="grid grid-cols-2 gap-8 pb-4">
                    {/* <!-- price --> */}
                    <div className="space-y-2">
                        <label htmlFor="ws-inputPrice">Price</label>
                        <input
                            className="addProductInput"
                            type="number"
                            id="lws-inputPrice"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required />
                    </div>
                    {/* <!-- quantity --> */}
                    <div className="space-y-2">
                        <label htmlFor="lws-inputQuantity">Quantity</label>
                        <input
                            className="addProductInput"
                            type="number"
                            id="lws-inputQuantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            required />
                    </div>
                </div>
                {/* <!-- submit button --> */}
                <button type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
            </form>
        </div>
    );
};

export default ProductForm;