import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../actions/userActions";

const Header = () => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
    };
    return (
        <header className="nav">
            <div className="brand">
                <NavLink to="/">ProShop</NavLink>
            </div>
            <div className="nav-elements">
                <li className="nav-list">
                    <NavLink className="nav-link" to="/cart">
                        <i className="fa-solid fa-cart-arrow-down"></i> Cart
                    </NavLink>
                </li>

                {userInfo ? (
                    <div className="dropdown">
                        <button className="dropbtn">{userInfo.name}</button>
                        <div class="dropdown-content">
                            <NavLink to="/profile">Profile</NavLink>
                            <button className="logout" onClick={logoutHandler}>
                                Logout
                            </button>
                        </div>
                    </div>
                ) : (
                    <li className="nav-list">
                        <NavLink className="nav-link" to="/login">
                            <i className="fa-solid fa-user"></i> Login
                        </NavLink>
                    </li>
                )}
            </div>
        </header>
    );
};

export default Header;
