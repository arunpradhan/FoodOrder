import { ADD_TO_CART, REMOVE_TO_CART, UPDATE_TO_CART } from "./constant";

export const cartData = (data = [], action) => {
    
    console.warn("reducer called", action.type);

    switch (action.type) {
        case ADD_TO_CART:
            // add to cart
            console.warn(ADD_TO_CART, action);
            return [action.data, ...data]; // [new data, old data]
        case REMOVE_TO_CART:
            // remove to cart
            console.warn(REMOVE_TO_CART, action);
            return 1-1;
        case UPDATE_TO_CART:
            // Update to cart
            console.warn(UPDATE_TO_CART, action);
            return 1+1;
    
        default:
            return data;//"No action matched";
    }
}