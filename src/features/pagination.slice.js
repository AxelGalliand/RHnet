import { createSlice } from "@reduxjs/toolkit";
import info from '../data/data.json';

 export const paginationSlice = createSlice({
    name: "pagination",
    initialState: {
        sliceBy: 10,
    },
   
 })

 export const {paginationCreation} = paginationSlice.actions;
 export const statePagination = (state) => state.pagination;
 export default paginationSlice.reducer;