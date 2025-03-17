import { combineReducers, configureStore } from "@reduxjs/toolkit";
import blogDataSlice from './blogDataSlice'

const rootReducer = combineReducers({
    blogDataReducer: blogDataSlice,
})

export type tooReducer = ReturnType<typeof rootReducer>;

export const createStore = ()=>configureStore({
    reducer: rootReducer
})