import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import CartNav from "./CartNav";

const ProductList = () => {
    const products = useSelector(st => st.products);

    return (
        <div className="ProductList">
            <h1>Store</h1>
            {Object.keys(products).map(id => <ProductCard  key={id} productId={id} />)}
            <CartNav />
        </div>
    );
}

export default ProductList;