import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import ProductForm from './ProductForm';

const Home = () => {

    const productStates = useSelector((state) => state.products);

    return (
        <main className="py-16">
            <div className="productWrapper">
                {/* <!-- products container --> */}
                <div className="productContainer" id="lws-productContainer">
                    {/* <!-- product item --> */}
                    {
                        productStates?.length > 0
                            ? productStates?.map((product) => <ProductCard key={product.id} product={product} />)
                            : <h1
                                style={{ fontWeight: "bold", fontSize: 20 }}>
                                No Product Found
                            </h1>
                    }
                    {/* <!-- product item ends --> */}
                </div>
                {/* <!-- products container ends --> */}
                <div>
                    {/* <!-- Product Input Form --> */}
                    <ProductForm />
                    {/* <!-- Product Input Form Ends --> */}
                </div>
            </div>
        </main >
    );
};

export default Home;