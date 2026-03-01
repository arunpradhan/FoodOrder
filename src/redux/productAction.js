import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant";

export const productList = () => {
    return {
        type: PRODUCT_LIST,
        // data: "hello"
    }
    
}

export const productSearch = (query) => {
    return {
        type: SEARCH_PRODUCT,
        query,
    }
    
}

// export const setProductList = (data) => {
//     console.warn(SET_PRODUCT_LIST, data);
    
//     return {
//         type: SET_PRODUCT_LIST,
//         data
//     }
    
// }