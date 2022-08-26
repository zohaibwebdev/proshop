import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="nav">
            <div className="brand">
                <NavLink to="/">ProShop</NavLink>
            </div>
            <div className="nav-elements">
                <li className="nav-list">
                    <NavLink className="nav-link" to="/login">
                        <i className="fa-solid fa-user"></i> Login
                    </NavLink>
                </li>
                <li className="nav-list">
                    <NavLink className="nav-link" to="/cart">
                        <i className="fa-solid fa-cart-arrow-down"></i> Cart
                    </NavLink>
                </li>
            </div>
        </header>
    );
};

export default Header;
