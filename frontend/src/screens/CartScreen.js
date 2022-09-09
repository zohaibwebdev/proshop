import React, { useEffect } from "react";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import Message from "../components/Message";
import { useNavigate } from "react-router-dom";
const CartScreen = (props) => {
    const { Id } = useParams();
    const navigate = useNavigate();
    const sp = useSearchParams()[0];
    let qty = sp.get("qty");
    qty ? (qty = qty) : (qty = 1);
    // console.log(sp.get("qty"), Id);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    useEffect(() => {
        if (Id) {
            dispatch(addToCart(Id, qty));
        }
    }, [dispatch, Id, qty]);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };
    const checkOutHandler = () => {
        navigate("/shipping");
    };

    return (
        <div className="cart">
            <div className="cart-detail">
                <h1>SHOPPING CART</h1>
                {cartItems.length === 0 ? (
                    <Message>Your cart is Empty!!! Please add some items</Message>
                ) : (
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div className="cart-item" key={item.product}>
                                <span className="item-image">
                                    <img src={item.image} alt="" />
                                </span>
                                <span className="item-heading">
                                    <NavLink to={`/product/${item.product}`}>{item.name}</NavLink>
                                </span>
                                <span className="item-price">$ {item.price}</span>
                                <form>
                                    <select
                                        name=""
                                        id=""
                                        value={item.qty}
                                        onChange={(e) =>
                                            dispatch(
                                                addToCart(item.product, Number(e.target.value))
                                            )
                                        }
                                    >
                                        {[...Array(item.countInStock).keys()].map((x) => (
                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>
                                        ))}
                                    </select>
                                </form>
                                <button
                                    type="button"
                                    onClick={() => removeFromCartHandler(item.product)}
                                >
                                    <i className="fas fa-trash"></i>
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="third-coloum">
                <div className="price">
                    <span>Sub-Total:</span>
                    <span>{cartItems.reduce((acc, item) => acc + Number(item.qty), 0)}</span>
                </div>
                <div className="price">
                    <span>Total-Price:</span>
                    <span>
                        {cartItems.reduce((acc, item) => acc + Number(item.qty) * item.price, 0)}
                    </span>
                </div>
                <div className="button" onClick={checkOutHandler}>
                    <button className="btn">Proceed To CheckOut</button>
                </div>
            </div>
        </div>
    );
};

export default CartScreen;
