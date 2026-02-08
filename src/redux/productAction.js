import { PRODUCT_LIST } from "./constant";

export const productList = () => {
    let data = [
        {
            "id": 1,
            "name": "Margherita Pizza",
            "type": "Pizza",
            "price": 12,
            "description": "Classic tomato and mozzarella",
            "image": "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg"
        }
    ];

    console.warn("ProductAction called", data);
    return {
        type: PRODUCT_LIST,
        data
    }
    
}