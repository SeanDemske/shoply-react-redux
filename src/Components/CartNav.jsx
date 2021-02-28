import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CartNav = () => {
    const cartItems = useSelector(st => st.cartItems)

    const calculateNumOfItems = () => {
        let counter = 0;
        for (const [key] of Object.entries(cartItems)) {
            counter += cartItems[key]
        }
        return counter;
    }

    return (
        <div className="CartNav">
            <Link to="/cart"><i className="fas fa-shopping-cart fa-5x"></i></Link> ({calculateNumOfItems()})
        </div>
    );
}

export default CartNav;