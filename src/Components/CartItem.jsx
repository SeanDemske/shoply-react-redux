import React from "react";
import { useDispatch } from "react-redux";
import "./CartItem.css";

const CartItem = ({ productId, product, numOfProductInCart }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch({type: "ADD_PRODUCT_TO_CART", id:productId})
    }

    const handleRemoveFromCart = () => {
        dispatch({type: "REMOVE_PRODUCT_FROM_CART", id:productId})
    }

    return (
        <div className="CartItem">
            <div className="left-panel">
                <h2>{product.name} ({numOfProductInCart})</h2>
                <h3>${product.price}</h3>
                <button onClick={handleAddToCart}>+</button>
                <button onClick={handleRemoveFromCart}>-</button>
            </div>
            <div className="right-panel">
                <img src={product.image_url} alt=""/>
            </div>
        </div>
    );
}

export default CartItem;