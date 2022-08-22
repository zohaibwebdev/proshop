import React from "react";
import Product from "../components/Product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productAction";

function HomeScreen() {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, []);
    return (
        <div className="home">
            <h1>Latest Products Available</h1>
            <div className="cards">
                {products.map((product) => (
                    <Product product={product} />
                ))}
            </div>
        </div>
    );
}

export default HomeScreen;
