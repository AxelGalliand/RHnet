import { configureStore } from "@reduxjs/toolkit";
import employeSlice from "../features/employe.slice";

export default configureStore({
    reducer: {
        employe: employeSlice
    }
})