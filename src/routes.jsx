import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import ProductList from "./Components/ProductList";
import ProductDetail from "./Components/ProductDetail";
import CartDetail from "./Components/CartDetail";

function Routes() {
    return (
        <Switch>
            <Route path="/" exact>
                <ProductList />
            </Route>
            <Route path="/products/:id" exact>
                <ProductDetail />
            </Route>
            <Route path="/cart" exact>
                <CartDetail />
            </Route>
            <Redirect to="/" />
        </Switch>
    );
}

export default Routes;