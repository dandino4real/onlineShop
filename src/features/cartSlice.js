import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify"

const initialState = {
    cartItems:localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartToTalAmount: 0
}


const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state, action){
            const itemIndex = state.cartItems.findIndex(item=>item.id === action.payload.id)
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1
                toast.info(`${action.payload.name} has been added to your cart`, {position: toast.POSITION.TOP_RIGHT,})
            }else{

                const tempProduct = {...action.payload, cartQuantity: 1}
                state.cartItems.push(tempProduct)
                toast.success(`${action.payload.name} has been added to your  to cart`, {position:  toast.POSITION.TOP_RIGHT})

            }

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        }



    }

})

export default cartSlice.reducer
export const {addToCart} = cartSlice.actions