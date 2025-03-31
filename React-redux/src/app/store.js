import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "../featured/todo/todoSlice";

export default configureStore({
    reducer: todoReducer,
})