import data from "./data.json";

const INITIAL_STATE = {
    products: data.products,
    cartItems: {}
}

const rootReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "ADD_PRODUCT_TO_CART": {
                const cartCopy = { ...state.cartItems };
                cartCopy[action.id] = (cartCopy[action.id] || 0) + 1;
                return {
                    ...state,
                    cartItems: cartCopy
                }
            }
        
        case "REMOVE_PRODUCT_FROM_CART": {
                const cartCopy = { ...state.cartItems };
                if (!cartCopy[action.id]) return state;
                cartCopy[action.id] = cartCopy[action.id] - 1;
                if (cartCopy[action.id] === 0) {
                    delete cartCopy[action.id];
                }
                return {
                    ...state,
                    cartItems: cartCopy
                }
            }

        default:
            return state;
    }
}

export default rootReducer;