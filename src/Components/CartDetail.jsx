import React from "react";
import { useSelector } from "react-redux";
import ReturnToHome from "./ReturnToHome";
import CartItem from "./CartItem";

const CartDetail = () => {
    const products = useSelector(st => st.products);
    const myCart = useSelector(st => st.cartItems);
    let totalPrice = 0;
    for (const key in myCart) {
        totalPrice = totalPrice + (myCart[key] * products[key].price)
    }

    return (
        <div className="CartDetail">
            <ReturnToHome />
            <h1>My Cart</h1>
            {Object.keys(myCart).map((keyName, i) => (
                <CartItem  productId={keyName} product={products[keyName]} numOfProductInCart={myCart[keyName]} key={i} />
            ))}
            <h2>Total: ${Math.ceil(totalPrice * 100) / 100}</h2>
        </div>
    );
}

export default CartDetail;