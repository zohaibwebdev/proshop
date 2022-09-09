import React from "react";
import { Link } from "react-router-dom";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
    return (
        <nav className="main-checkout">
            {step1 ? (
                <Link to="/login" className="checkoutItem">
                    Login
                </Link>
            ) : (
                <Link to="/login" className="checkoutItem disable">
                    Login
                </Link>
            )}
            {step2 ? (
                <Link to="/shipping" className="checkoutItem">
                    Shipping
                </Link>
            ) : (
                <Link to="/Shipping" className="checkoutItem disable">
                    Shipping
                </Link>
            )}
            {step3 ? (
                <Link to="/payment" className="checkoutItem">
                    Payment
                </Link>
            ) : (
                <Link to="/payment" className="checkoutItem disable">
                    Payment
                </Link>
            )}
            {step4 ? (
                <Link to="/placeorder" className="checkoutItem">
                    Place Order
                </Link>
            ) : (
                <Link to="/placeorder" className="checkoutItem disable">
                    Place Order
                </Link>
            )}
        </nav>
    );
};

export default CheckoutSteps;
