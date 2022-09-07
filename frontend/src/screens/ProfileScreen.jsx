import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";

function ProfileScreen() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetails);
    const { error, loading, user } = userDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const { success } = userUpdateProfile;

    useEffect(() => {
        if (!userInfo) {
            navigate("/login");
        } else {
            if (!user || !user.name || success || userInfo._id !== user._id) {
                dispatch({ type: USER_UPDATE_PROFILE_RESET });
                dispatch(getUserDetails("profile"));
            } else {
                setName(user.name);
                setEmail(user.email);
            }
        }
    }, [dispatch, userInfo, user, success]);

    const submitHandler = (e) => {
        e.preventDefault();

        if (password != confirmPassword) {
            setMessage("Passwords do not match");
        } else {
            dispatch(
                updateUserProfile({
                    id: user._id,
                    name: name,
                    email: email,
                    password: password,
                })
            );
            setMessage("");
        }
    };
    return (
        <div>
            <div>
                <h2>User Profile</h2>

                {message && <Message variant="danger">{message}</Message>}
                {error && <Message variant="danger">{error}</Message>}
                {loading && <Loader />}
                <form onSubmit={submitHandler}>
                    <input
                        required
                        type="name"
                        placeholder="Enter name"
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
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <button>Update</button>
                </form>
            </div>

            <div className="oder">
                <h2>my orders</h2>
            </div>
        </div>
    );
}

export default ProfileScreen;
