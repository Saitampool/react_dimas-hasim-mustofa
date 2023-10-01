import {configureStore} from '@reduxjs/toolkit';
import productReducer from './productSlice'

const store = configureStore({
    reducer: {
        list: productReducer,
    },
});

export default store;