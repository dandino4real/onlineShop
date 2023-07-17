import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url, setHeaders } from "./api";
import { toast } from "react-toastify";

const initialState = {
  list: [],
  status: null,
  deleteStatus: null,
};

export const usersFetch = createAsyncThunk("users/usersFetch", async () => {
  try {
    const response = await axios.get(`${url}/users`, setHeaders());
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const userDelete = createAsyncThunk("users/userDelete", async (id) => {
  try {
    const response = await axios.delete(
      `${url}/users/${id}`,

      setHeaders()
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [usersFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [usersFetch.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = "success";
    },
    [usersFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [userDelete.pending]: (state, action) => {
      state.status = "pending";
    },
    [userDelete.fulfilled]: (state, action) => {
      const updatedusers = state.list.map((user) =>
        user._id === action.payload._id ? action.payload : user
      );
      state.list = updatedusers;
      state.status = "success";
    },
    [userDelete.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default usersSlice.reducer;
