import React from "react";
import { NavLink } from "react-router-dom";
import products from "../products";
import Rating from "../components/Rating";
import { useParams } from "react-router-dom";

const ProductScreen = (props) => {
    const { id } = useParams();
    const product = products.find((p) => p._id === id);
    return (
        <div className="product-main">
            <figure className="product-image">
                <img src={product.image} alt="image" />
            </figure>

            <div className="second-colum">
                <div className="product-name">
                    <h3>{product.name}</h3>
                </div>
                <div className="product-rating">
                    <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                        color={"#841B2D"}
                    />
                </div>
                <div className="product-price">
                    <h3>price: ${product.price}</h3>
                </div>
                <div className="product-detail">
                    <p>{product.description}</p>
                </div>
            </div>

            <div className="third-coloum">
                <div className="price">
                    <span>Price:</span>
                    <span>${product.price}</span>
                </div>
                <div className="status">
                    <span>status:</span>
                    <span>{product.countInStock ? "In Stock" : "Out of Stock"}</span>
                </div>
                <div className="button">
                    <NavLink to="/" className="btn">
                        ADD TO CART
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ProductScreen;
