import { createSlice } from "@reduxjs/toolkit";

const propertyDetailsSlice = createSlice({
  name: "propertyDetails",
  initialState: {
    propertydetails: [],
    loading: false,
    error: null,
  },
  reducers: {
    getListRequest(state) {
      state.loading = true;
    },
    //update property details in the state after succussfully fetching them
    getPropertyDetails(state,action) {
      state.propertydetails = action.payload;
      state.loading = false;
    },
    getErrors(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const propertyDetailsAction = propertyDetailsSlice.actions;
export default propertyDetailsSlice;
