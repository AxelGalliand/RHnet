import { configureStore } from "@reduxjs/toolkit";
import employeSlice from "../features/employe.slice";
import paginationSlice from "../features/pagination.slice";

export default configureStore({
    reducer: {
        employe: employeSlice,
        pagination: paginationSlice
    }
})