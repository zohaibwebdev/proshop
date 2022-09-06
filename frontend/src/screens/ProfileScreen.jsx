import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { getUserDetails } from "../actions/userActions";
import { useEffect } from "react";

const ProfileScreen = () => {
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

    const orderListMy = useSelector((state) => state.orderListMy);

    useEffect(() => {
        if (!userInfo) {
            navigate("/login");
        } else {
            if (!user || !user.name || userInfo._id !== user._id) {
                // dispatch({ type: USER_UPDATE_PROFILE_RESET });
                dispatch(getUserDetails("profile"));
                // dispatch(listMyOrders());
            } else {
                setName(user.name);
                setEmail(user.email);
            }
        }
    }, [dispatch, userInfo, user]);

    const submitHandler = (e) => {
        e.preventDefault();

        if (password != confirmPassword) {
            setMessage("Passwords do not match");
        }
        //     } else {
        //         // dispatch(
        //             updateUserProfile({
        //                 id: user._id,
        //                 name: name,
        //                 email: email,
        //                 password: password,
        //             })
        //         );
        //         setMessage("");
        //     }
        // };
    };
    return (
        <div className="profile-container">
            <div className="user-profile">
                <form action="" onSubmit={submitHandler}>
                    <h1>User Profile</h1>
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
            </div>
            <div className="user-orders">
                <h2>My Orders</h2>
            </div>
        </div>
    );
};

export default ProfileScreen;
