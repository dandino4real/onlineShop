import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(`${action.payload.name} has been added to your cart`, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(
          `${action.payload.name} has been added to your  to cart`,
          { position: toast.POSITION.BOTTOM_LEFT}
        );
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.info(` Decreased ${action.payload.name} cart quantity`, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem._id !== action.payload._id
        );
        state.cartItems = nextCartItems;
        toast.error(`${action.payload.name} has been removed from your cart`, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem._id !== action.payload._id
      );
      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error(`${action.payload.name} has been removed from your cart`, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    
    clearCart(state, action){
        state.cartItems = []
        state.cartTotalAmount = 0;
        toast.error(`All cart has been deleted`, {
            position: toast.POSITION.BOTTOM_LEFT,
          });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

    }
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } = cartSlice.actions;



