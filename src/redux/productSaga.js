import { put, takeEvery } from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST } from './constant';

function* getProducts() {
    console.warn("call api here...");
    let data = yield fetch('http://localhost:3000/foodMenu');
    data = yield data.json();
    yield put({ type: SET_PRODUCT_LIST, data: data })
}

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
}
export default productSaga;