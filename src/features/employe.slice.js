import { createSlice } from "@reduxjs/toolkit";
 export const employeSlice = createSlice({
    name: "employe",
    initialState: {
        firstName: null,
        lastName: null,
        dateBirth: null,
        dateStart: null,
        street: null,
        city: null,
        state: null,
        zipCode: null,
        departement: null,
        data: [],
    },
    reducers: {
        employeCreation: (state, {payload}) => {
            state.data.push(payload)

        }
    }
 })

 export const {employeCreation} = employeSlice.actions;
 export const stateEmploye = (state) => state.data;
 export default employeSlice.reducer;