import { put, takeEvery } from 'redux-saga/effects'
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from './constant';

function* getProducts() {
    console.warn("call api here...");
    let data = yield fetch('http://localhost:3000/foodMenu');
    data = yield data.json();
    yield put({ type: SET_PRODUCT_LIST, data: data })
}

function* searchProducts(data) {
    try {
        console.warn("Searching for...", data.query);
        let result = yield fetch(`http://localhost:3000/foodMenu?q=${data.query}`);
        result = yield result.json();
        
        // Filter results based on query
        const filteredResult = result.filter(item => 
            item.name?.toLowerCase().includes(data.query.toLowerCase()) ||
            item.title?.toLowerCase().includes(data.query.toLowerCase()) ||
            item.category?.toLowerCase().includes(data.query.toLowerCase())
        );
        
        console.warn("Filtered Search Result ...", filteredResult);
        
        if (filteredResult && filteredResult.length > 0) {
            yield put({ type: SET_PRODUCT_LIST, data: filteredResult })
        } else {
            console.warn("No results found for query:", data.query);
        }
    } catch (error) {
        console.error("Search failed:", error);
    }
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    yield takeEvery(SEARCH_PRODUCT, searchProducts)
}
export default productSaga;