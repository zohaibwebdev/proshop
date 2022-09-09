import React from "react";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productAction";

function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { error, loading, products } = productList;
    const store = useSelector((state) => state);
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);
    return (
        <div className="home">
            <h1>Latest Products Available</h1>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message>{error}</Message>
            ) : (
                <div className="cards">
                    {products.map((product) => (
                        <Product product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default HomeScreen;
