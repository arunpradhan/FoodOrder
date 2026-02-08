// import { createStore } from 'redux' // Commented due to Deprecated 

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

// const store = createStore (rootReducer) // Commented due to Deprecated 

const store = configureStore({reducer: rootReducer})

export default store;