// import { createStore } from 'redux' // Commented due to Deprecated 

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

import productSaga from './productSaga';
import createSagaMiddleware from 'redux-saga'

// const store = createStore (rootReducer) // Commented due to Deprecated 

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware] // Regiter middleware
})
sagaMiddleware.run(productSaga);
export default store;