
export const cartData = (data = [], action) => {
    if(action.type === "Add_To_Cart"){
        console.warn("reducer called", action);
        return action.data
    } else {
        return "No action matched";
    }
}