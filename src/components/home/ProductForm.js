import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const ProductForm = () => {

    const dispatch = useDispatch();

    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    //function to set input value in the state
    const inputHandler = (e) => {
        setProductName(e.target.value);
        setCategory(e.target.value);
        setImageUrl(e.target.value);
        setPrice(e.target.value);
        setQuantity(e.target.value);
    };

    //function to handle form submit
    const submitHandler = (e) => {
        e.preventDefault();
        const selectedProduct = { productName, category, imageUrl, price, quantity };
        console.log(selectedProduct);
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
                        onChange={inputHandler}
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
                        onChange={inputHandler}
                        required />
                </div>
                {/* <!-- product image url --> */}
                <div className="space-y-2">
                    <label htmlFor="lws-inputImage">Image Url</label>
                    <input
                        className="addProductInput"
                        id="lws-inputImage"
                        type="text"
                        value={imageUrl}
                        onChange={inputHandler}
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
                            onChange={inputHandler}
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
                            onChange={inputHandler}
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