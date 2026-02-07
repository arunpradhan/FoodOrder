import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./constant";

export const addToCart = (data) => {
    console.warn("action called", data);
    return {
        type: ADD_TO_CART,
        data //data: data
    };
    
}

export const removeToCart = (data) => {
    console.warn("action removed called", data);
    return {
        type: REMOVE_TO_CART,
        data //data: data
    };
    
}

export const emptyCart = () => {
    console.warn("action performed for empty cart");
    return {
        type: EMPTY_CART,
    }
}