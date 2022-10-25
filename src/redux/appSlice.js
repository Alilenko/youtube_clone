import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "New",
  searchTerm: "",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
    changeSearch: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

const { actions, reducer } = appSlice;
export default reducer;
export const { changeCategory, changeSearch } = actions;
