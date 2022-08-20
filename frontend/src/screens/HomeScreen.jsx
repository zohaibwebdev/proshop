import React from "react";
import Product from "../components/Product";
import { useState, useEffect } from "react";
import axios from "axios";

const HomeScreen = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProduct() {
            const { data } = await axios.get("/api/products");
            setProducts(data);
        }
        fetchProduct();
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
};

export default HomeScreen;
