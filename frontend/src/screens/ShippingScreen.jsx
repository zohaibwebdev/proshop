import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../components/CheckoutSteps";
import { saveShippingAddress } from "../actions/cartActions";

const ShippingScreen = () => {
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ address, city, postalCode, country }));
        console.log("clicked");
        navigate("/payment");
    };
    return (
        <div>
            <CheckoutSteps step1 step2 />
            <h1>Shipping</h1>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="Enter Address"
                    value={address ? address : ""}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter City Name"
                    value={city ? city : ""}
                    onChange={(e) => setCity(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter Postal Code"
                    value={postalCode ? postalCode : ""}
                    onChange={(e) => setPostalCode(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter Country"
                    value={country ? country : ""}
                    onChange={(e) => setCountry(e.target.value)}
                />
                <button className="btn" type="submit">
                    Save
                </button>
            </form>
        </div>
    );
};

export default ShippingScreen;
