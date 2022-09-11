import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import CheckoutSteps from "../components/CheckoutSteps";
import { createOrder } from "../actions/orderActions";
import { ORDER_CREATE_RESET } from "../constants/orderConstants";

export const PlaceOrderScreen = () => {
    const navigate = useNavigate();
    const orderCreate = useSelector((state) => state.orderCreate);
    const { order, error, success } = orderCreate;

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);

    cart.itemsPrice = cart.cartItems
        .reduce((acc, item) => acc + item.price * item.qty, 0)
        .toFixed(2);
    cart.shippingPrice = (cart.itemsPrice > 100 ? 0 : 10).toFixed(2);
    cart.taxPrice = Number(0.082 * cart.itemsPrice).toFixed(2);

    cart.totalPrice = (
        Number(cart.itemsPrice) +
        Number(cart.shippingPrice) +
        Number(cart.taxPrice)
    ).toFixed(2);

    // cart.totalPrice = (cart.itemPrice + cart.shippingPrice + cart.taxPrice).toFixed(2);
    if (!cart.paymentMethod) {
        navigate("/payment");
    }
    useEffect(() => {
        if (success) {
            navigate(`/order/${order._id}`);
            dispatch({ type: ORDER_CREATE_RESET });
        }
    }, [success, navigate]);
    const placeOrder = (e) => {
        e.preventDefault();
        dispatch(
            createOrder({
                orderItems: cart.cartItems,
                shippingAddress: cart.shippingAddress,
                paymentMethod: cart.paymentMethod,
                itemsPrice: cart.itemsPrice,
                shippingPrice: cart.shippingPrice,
                taxPrice: cart.taxPrice,
                totalPrice: cart.totalPrice,
            })
        );
    };
    return (
        <div>
            <CheckoutSteps step1 step2 step3 step4 />
            <div className="place-order-main">
                <div className="place-order-left">
                    <h2>Shipping</h2>
                    <p>
                        <strong>shipping: </strong>
                        {cart.shippingAddress.address}, {cart.shippingAddress.city}
                        <br />
                        {cart.shippingAddress.postalCode},<br />
                        {cart.shippingAddress.country}
                    </p>

                    <h2>Payment Method:</h2>
                    <p>
                        <strong>Payment Method: </strong>
                        {cart.paymentMethod}
                    </p>
                    <h2>Payment Method:</h2>
                    {cart.cartItems.length === 0 ? (
                        <Message>Your Cart is Empty</Message>
                    ) : (
                        <div className="cart-items">
                            {cart.cartItems.map((item) => (
                                <div className="cart-item" key={item.product}>
                                    <span className="item-image">
                                        <img src={item.image} alt="" />
                                    </span>
                                    <span className="item-heading">
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </span>
                                    <span className="item-price">
                                        {item.qty} x {item.price} = $
                                        {(item.qty * item.price).toFixed(2)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="place-order-right">
                    <div className="third-coloum">
                        <div className="price">
                            <span>Order Summary:</span>
                        </div>
                        <div className="price">
                            <span>Item:</span>
                            <span>${cart.itemPrice}</span>
                        </div>
                        <div className="price">
                            <span>Shipping:</span>
                            <span>${cart.shippingPrice}</span>
                        </div>
                        <div className="price">
                            <span>Tax:</span>
                            <span>${cart.taxPrice}</span>
                        </div>
                        <div className="price">
                            <span>Total:</span>
                            <span>${cart.totalPrice}</span>
                        </div>
                        {error && (
                            <div className="price">
                                <span>
                                    <Message>{error}</Message>
                                </span>
                            </div>
                        )}
                        <div className="button">
                            <button className="btn" onClick={placeOrder}>
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PlaceOrderScreen;
