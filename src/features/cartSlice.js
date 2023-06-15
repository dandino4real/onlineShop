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
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(`${action.payload.name} has been added to your cart`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(
          `${action.payload.name} has been added to your  to cart`,
          { position: toast.POSITION.TOP_RIGHT }
        );
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.info(` Decreased ${action.payload.name} cart quantity`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
        toast.error(`${action.payload.name} has been removed from your cart`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error(`${action.payload.name} has been removed from your cart`, {
        position: toast.POSITION.TOP_RIGHT,
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
        toast.error(`All cart has been deleted`, {
            position: toast.POSITION.TOP_RIGHT,
          });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

    }
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, decreaseCart, clearCart,getTotals } = cartSlice.actions;




// import { createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";

// const initialState = {
//   cartItems: localStorage.getItem("cartItems")
//     ? JSON.parse(localStorage.getItem("cartItems"))
//     : [],
//   cartTotalQuantity: 0,
//   cartTotalAmount: 0,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       const existingIndex = state.cartItems.findIndex(
//         (item) => item._id === action.payload._id
//       );

//       if (existingIndex >= 0) {
//         state.cartItems[existingIndex] = {
//           ...state.cartItems[existingIndex],
//           cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
//         };
//         toast.info("Increased product quantity", {
//           position: "bottom-left",
//         });
//       } else {
//         let tempProductItem = { ...action.payload, cartQuantity: 1 };
//         state.cartItems.push(tempProductItem);
//         toast.success("Product added to cart", {
//           position: "bottom-left",
//         });
//       }
//       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
//     },
//     decreaseCart(state, action) {
//       const itemIndex = state.cartItems.findIndex(
//         (item) => item._id === action.payload._id
//       );

//       if (state.cartItems[itemIndex].cartQuantity > 1) {
//         state.cartItems[itemIndex].cartQuantity -= 1;

//         toast.info("Decreased product quantity", {
//           position: "bottom-left",
//         });
//       } else if (state.cartItems[itemIndex].cartQuantity === 1) {
//         const nextCartItems = state.cartItems.filter(
//           (item) => item._id !== action.payload._id
//         );

//         state.cartItems = nextCartItems;

        

//         toast.error("Product removed from cart", {
//           position: "bottom-left",
//         });
//       }

//       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
//     },
//     removeFromCart(state, action) {
//       state.cartItems.map((cartItem) => {
//         if (cartItem._id === action.payload._id) {
//           const nextCartItems = state.cartItems.filter(
//             (item) => item._id !== cartItem._id
//           );

//           state.cartItems = nextCartItems;

//           toast.error("Product removed from cart", {
//             position: "bottom-left",
//           });
//         }
//         localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
//         return state;
//       });
//     },
    // getTotals(state, action) {
    //   let { total, quantity } = state.cartItems.reduce(
    //     (cartTotal, cartItem) => {
    //       const { price, cartQuantity } = cartItem;
    //       const itemTotal = price * cartQuantity;

    //       cartTotal.total += itemTotal;
    //       cartTotal.quantity += cartQuantity;

    //       return cartTotal;
    //     },
    //     {
    //       total: 0,
    //       quantity: 0,
    //     }
    //   );
    //   total = parseFloat(total.toFixed(2));
    //   state.cartTotalQuantity = quantity;
    //   state.cartTotalAmount = total;
    // },
//     clearCart(state, action) {
//       state.cartItems = [];
//       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
//       toast.error("Cart cleared", { position: "bottom-left" });
//     },
//   },
// });

// export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } =
//   cartSlice.actions;

// export default cartSlice.reducer;