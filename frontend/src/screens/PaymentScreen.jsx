import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";

import { savePaymentMethod } from "../actions/cartActions";

const PaymentScreen = () => {
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    const dispatch = useDispatch();
    const [paymentMethod, setPaymentMethod] = useState("PayPal");
    const navigate = useNavigate();
    if (!shippingAddress.address) {
        navigate("/shipping");
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(paymentMethod);
        dispatch(savePaymentMethod(paymentMethod));
        navigate("/placeorder");
    };
    return (
        <div>
            <CheckoutSteps step1 step2 step3 />
            <form onSubmit={submitHandler}>
                <p>please select the payment method</p>
                <input
                    type="radio"
                    name="paymentMethod"
                    id="paypal"
                    value="paypal"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label htmlFor="paypal">PayPal</label>
                <br />
                <input
                    type="radio"
                    name="paymentMethod"
                    id="google"
                    value="google"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label htmlFor="google">Google Pay</label>
                <br />
                <button className="btn" type="submit">
                    Continue
                </button>
            </form>
        </div>
    );
};

export default PaymentScreen;
