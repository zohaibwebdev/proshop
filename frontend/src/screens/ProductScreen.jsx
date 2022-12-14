import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Rating from "../components/Rating";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ListProductDetails } from "../actions/productAction";

const ProductScreen = (props) => {
    const [qty, setQty] = useState(1);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const productDetailss = useSelector((state) => state.productDetails);
    const { id } = useParams();
    const { product, error, loading } = productDetailss;
    useEffect(() => {
        dispatch(ListProductDetails(id));
    }, [dispatch]);
    const addToCartHandler = () => {
        navigate(`/cart/${id}?qty=${qty}`);
    };
    return (
        <>
            <div className="button">
                <NavLink to="/" className="btn-back">
                    Back To Home
                </NavLink>
            </div>
            <div className="product-main" key={product.id}>
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
                    {product.countInStock > 0 && (
                        <div className="qty-form">
                            <span>Qty:</span>
                            <span>
                                <form>
                                    <select
                                        name=""
                                        id=""
                                        value={qty}
                                        onChange={(e) => setQty(e.target.value)}
                                    >
                                        {[...Array(product.countInStock).keys()].map((x) => (
                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>
                                        ))}
                                    </select>
                                </form>
                            </span>
                        </div>
                    )}
                    <div className="button">
                        <button className="btn" onClick={addToCartHandler}>
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductScreen;
