import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ productId }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const product = useSelector(st => st.products)[productId];
    const numOfProductInCart = useSelector(st => st.cartItems[productId] || 0);

    const handleAddToCart = () => {
        dispatch({type: "ADD_PRODUCT_TO_CART", id:productId})
    }

    const handleRemoveFromCart = () => {
        dispatch({type: "REMOVE_PRODUCT_FROM_CART", id:productId})
    }

    const handleClick = (e) => {
        if(e.target.tagName.toLowerCase() !== 'button') {
            history.push(`/products/${productId}`);
        }
    }

    return (
        <div className="ProductCard" onClick={handleClick}>
            <div className="left-panel">
                <h2>{product.name} ({numOfProductInCart})</h2>
                <h3>${product.price}</h3>
            </div>
            <div className="right-panel">
                <button onClick={handleAddToCart}>Add to cart</button>
                <button onClick={handleRemoveFromCart}>Remove from cart</button>
            </div>
        </div>
    );
}

export default ProductCard;