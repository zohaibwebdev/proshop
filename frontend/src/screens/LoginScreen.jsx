import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { login } from "../actions/userActions";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { error, loading, userInfo } = userLogin;

    // useEffect(() => {
    //     if (userInfo) {
    //         // navigate("/");
    //     }
    // });

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password, navigate));
    };

    return (
        <div>
            <form action="" onSubmit={submitHandler}>
                <h1>Sign In</h1>
                {error && <Message>{error}</Message>}
                {loading && <Loader />}
                <div className="form-container">
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div>
                        <button className="btn" type="submit">
                            Login
                        </button>
                    </div>
                </div>
            </form>
            <div>
                <h2>
                    New Customer? <NavLink to={"/register"}>Regiter Here</NavLink>
                </h2>
            </div>
        </div>
    );
};

export default LoginScreen;
