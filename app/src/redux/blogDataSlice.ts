import { createSlice } from "@reduxjs/toolkit";
import { initialStoreType } from "../constants/dataTypes";
import { tooReducerType } from "./reducers";

const initialStore: initialStoreType = {
  blogData: {
    posts: [],
    total: 0,
    skip: 0,
    limit: 0,
  },
  savedBlogs: [],
};
const blogDataSlice = createSlice({
  name: "blogData",
  initialState: initialStore,
  reducers: {
    setBlogData: (state, action) => {
      state.blogData = action.payload;
    },
    saveOrRemoveBlog: (state, action) => {
      if (state.savedBlogs.includes(action.payload))
        state.savedBlogs = [
          ...state.savedBlogs.filter(
            (blogIndex) => blogIndex !== action.payload
          ),
        ];
      else state.savedBlogs = [...state.savedBlogs, action.payload];
    },
  },
});

export const { setBlogData, saveOrRemoveBlog } = blogDataSlice.actions;
export const getBlogData = (state: tooReducerType) => {
  return state?.blogDataReducer?.blogData;
};
export const getSavedBlogs = (state: tooReducerType) => {
  return state?.blogDataReducer?.savedBlogs;
};
export const getPostData = (state: tooReducerType) => {
  return state?.blogDataReducer?.blogData?.posts;
};

export default blogDataSlice.reducer;
