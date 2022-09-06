import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { register } from "../actions/userActions";

const RegisterScreen = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const userRegister = useSelector((state) => state.userRegister);
    const { error, loading, userInfo } = userRegister;

    const submitHandler = (e) => {
        e.preventDefault();
        password != confirmPassword
            ? setMessage("Passwords don not match")
            : dispatch(register(name, email, password, navigate));
    };
    return (
        <div>
            <form action="" onSubmit={submitHandler}>
                <h1>Register</h1>
                {error && <Message>{error}</Message>}
                {message && <Message>{message}</Message>}
                {loading && <Loader />}
                <div className="form-container">
                    <input
                        required
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        required
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        required
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        required
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div>
                        <button className="btn" type="submit">
                            Register
                        </button>
                    </div>
                </div>
            </form>
            <div>
                <h2>
                    Already have an account? <NavLink to={"login/"}>Login</NavLink>
                </h2>
            </div>
        </div>
    );
};

export default RegisterScreen;
