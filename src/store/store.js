import { configureStore } from "@reduxjs/toolkit";
import productReducer, { productsFetch } from "../features/productSlice";
import { productsApi } from "../features/productApi";


const store = configureStore({
    reducer:{
        // products: productReducer,
        [productsApi.reducerPath]:productsApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(productsApi.middleware)
    }
})
// store.dispatch(productsFetch())
export default store