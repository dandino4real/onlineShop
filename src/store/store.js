import { configureStore } from "@reduxjs/toolkit";
import productReducer, { productsFetch } from "../features/productSlice";
import { productsApi } from "../features/productApi";
import cartReducer, { getTotals } from "../features/cartSlice";
import authReducer, { loadUser } from "../features/authSlice";
import ordersReducer from "../features/ordersSlice";
import userReducer from "../features/userSlice";


const store = configureStore({
    reducer:{
        products: productReducer,
        orders: ordersReducer,
        users: userReducer,
        [productsApi.reducerPath]:productsApi.reducer,
        cart: cartReducer,
        auth:authReducer,


    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(productsApi.middleware)
    }
})
store.dispatch(productsFetch())
store.dispatch(getTotals())
store.dispatch(loadUser(null))


export default store