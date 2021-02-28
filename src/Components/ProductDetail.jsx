import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ReturnToHome from "./ReturnToHome";


const ProductDetail = () => {
    const { id } = useParams();
    const product = useSelector(st => st.products[id]);
    const numOfProductInCart = useSelector(st => st.cartItems[id] || 0);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch({type: "ADD_PRODUCT_TO_CART", id: id});
    }

    const handleRemoveFromCart = () => {
        dispatch({type: "REMOVE_PRODUCT_FROM_CART", id: id});
    }

    return (
        <div className="ProductDetail">
            <ReturnToHome />
            <h1>{product.name}</h1>
            <h2>{product.description}</h2>
            <img src={product.image_url} alt={`product (${product.name})`}/>
            <h3>Price: ${product.price}</h3>
            <br/>
            <p>Add to cart ({numOfProductInCart})</p>
            <button onClick={handleAddToCart}>+</button>
            <button onClick={handleRemoveFromCart}>-</button>
        </div>
    );
}

export default ProductDetail;