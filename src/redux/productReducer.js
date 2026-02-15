import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

export const productData = (data = [], action) => {
    console.warn("Product Reducer called", action);
    switch(action.type) {
        // case PRODUCT_LIST:
        //     console.warn("Product List case", action);
        //     return [action.data];
        case SET_PRODUCT_LIST:
            console.warn("Set Product List case", action.data);
            return [...action.data];
        default:
            return data;
    }
    
}