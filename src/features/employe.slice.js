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
        data: [
           { firstName: "Fabien",
            lastName: "TORREZ",
            dateBirth: "1982-10-02",
            dateStart: "2000-05-14",
            street: "5 rue du domaine",
            city: "Los santos",
            state: "NY",
            zipCode: "52000",
            departement: "sale"},
           {firstName: "Dona",
            lastName: "De MONTAZAC",
            dateBirth: "1989-06-08",
            dateStart: "2002-08-12",
            street: "8 rue du domaine",
            city: "Los santos",
            state: "NY",
            zipCode: "52000",
            departement: "Marketing"},
           {firstName: "Jonny",
            lastName: "MONNEY",
            dateBirth: "1975-02-17",
            dateStart: "2010-01-06",
            street: "25 route okay",
            city: "Hyerstate",
            state: "AK",
            zipCode: "07580",
            departement: "Legal"}
        ],
    },
    reducers: {
        employeCreation: (state, {payload}) => {
            state.data.push(payload)

        }
    }
 })

 export const {employeCreation} = employeSlice.actions;
 export const stateEmploye = (state) => state.employe;
 export default employeSlice.reducer;