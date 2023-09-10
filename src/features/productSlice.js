import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url, setHeaders } from "./api";
import { toast } from "react-toastify";

const initialState = {
  items: [],
  pageStatus: {}, // added
  status: null,
  createStatus: null,
  deleteStatus: null,
  editStatus: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  // async (page) => {
    async (page = 1) => {
    
    try {
      const response = await axios.get(`${url}/products/?page=${page}&limit=10`);
      // return response.data.data.products;
      return response.data.data; //added. this will return an object

    } catch (error) {
      console.log(error);
      // toast.error(error.message);
      toast.error(error.response?.data);
    }
  }
);

export const productsCreate = createAsyncThunk(
  "products/productsCreate",
  async (values) => {
   
    try {
      const response = await axios.post(
        `${url}/products`,
        values,
        setHeaders()
      );

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);

export const productsDelete = createAsyncThunk(
  "products/productsDelete",
  async (id) => {
    try {
      const response = await axios.delete(
        `${url}/products/${id}`,

        setHeaders()
      );

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);

export const productsEdit = createAsyncThunk(
  "products/productsEdit",
  async (values) => {
    try {
      const response = await axios.put(
        `${url}/products/${values.product._id}`,
        values,
        setHeaders()
      );

      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      // state.items = action.payload;   
      state.items = action.payoad.products; //added
      state.pageStatus = action.payload.pagination; //added
      state.status = "success";
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [productsCreate.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [productsCreate.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.createStatus = "success";
      toast.success("Product Created!", { position: toast.POSITION.BOTTOM_LEFT});
    },
    [productsCreate.rejected]: (state, action) => {
      state.createStatus = "rejected";
    },

    [productsDelete.pending]: (state, action) => {
      state.deleteStatus = "pending";
    },
    [productsDelete.fulfilled]: (state, action) => {
      const newProducts = state.items.filter((product) =>
        product._id !== action.payload._id 
      );
      state.items = newProducts;
      state.deleteStatus = "success";
      toast.error("products Deleted!", { position: toast.POSITION.BOTTOM_LEFT})
    },
    [productsDelete.rejected]: (state, action) => {
      state.deleteStatus = "rejected";
    },

    [productsEdit.pending]: (state, action) => {
      state.editStatus = "pending";
    },
    [productsEdit.fulfilled]: (state, action) => {
     const updatedProducts = state.items.map((product)=>
      product._id === action.payload._id ? action.payload : product
     )
      state.items = updatedProducts;
      state.editStatus = "success";
      toast.info("Product Edited!", { position: toast.POSITION.BOTTOM_LEFT});
    },
    [productsEdit.rejected]: (state, action) => {
      state.editStatus = "rejected";
    },
  },
});

export default productsSlice.reducer;
