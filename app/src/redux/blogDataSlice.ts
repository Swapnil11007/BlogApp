import { createSlice } from "@reduxjs/toolkit";
import { initialStoreType } from "../constants/dataTypes";
import { tooReducerType } from "./reducers";

const initialStore: initialStoreType = {
    blogData: {
        posts: [],
        total: 0,
        skip: 0,
        limit: 0
    },
    savedBlogs: []
}
const blogDataSlice = createSlice({
    name:'blogData',
    initialState: initialStore,
    reducers:{
        setBlogData:(state, action)=>{
            state.blogData = action.payload
        },
        saveBlog:(state, action)=>{
            state.savedBlogs = [...state.savedBlogs, action.payload]
        }
    }
})

export const {setBlogData, saveBlog} = blogDataSlice.actions
export const getBlogData = (state: tooReducerType)=>{
    return state?.blogDataReducer?.blogData;
}
export const getSavedBlogs = (state: tooReducerType)=>{
    return state?.blogDataReducer?.savedBlogs;
}

export default blogDataSlice.reducer