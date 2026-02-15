import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from "./constant";

export const cartData = (data = [], action) => {
    
    console.warn("Reducer called", action.type);

    switch (action.type) {
        case ADD_TO_CART:
            // add to cart
            console.warn(ADD_TO_CART, action);
            return [action.data, ...data]; // [new data, old data]

        case REMOVE_TO_CART:
            // remove to cart
            console.warn(REMOVE_TO_CART, action);
            // data.length = data.length ? data.length-1 : [];
            const remainingItem = data.filter((item)=> item.id != action.data);
            console.warn("remaining Item", remainingItem);
            return [...remainingItem];

        case EMPTY_CART:
            // Update to cart
            console.warn(EMPTY_CART, action);
            data = [];
            return [...data];
    
        default:
            return data;//"No action matched";
    }
}