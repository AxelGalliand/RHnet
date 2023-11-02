// write composant display all employees in tanle
// 1. import React
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { stateEmploye } from '../features/employe.slice';
import styles from '../styles/EmployeeList.module.css';
import { TableContent } from '../Component/TableContent';
export function Employees () {

    const { data } = useSelector(stateEmploye);
    const [rows, setRows] = useState(data);
    console.log(rows)
    // console.log(data);
    /**
     * 
     */
    const columns = [
      {
        dataField: 'firstName',
        text: 'First Name',
        type: "String",
      },
      {
        dataField: 'lastName',
        text: 'Last Name',
        type: "String",
      },
      {
        dataField: 'dateBirth',
        text: 'Date of birth',
        type: "Date",
      },
      {
        dataField: 'dateStart',
        text: 'Date of Start',
        type: "Date",
      },
      {
        dataField: 'street',
        text: 'Street',
        type: "String",
      },
      {
        dataField: 'city',
        text: 'City',
        type: "String",
      },
      {
        dataField: 'state',
        text: 'State',
        type: "String",
      },
      {
        dataField: 'zipCode',
        text: 'Zip Code',
        type: "Number",
      },
      {
        dataField: 'departement',
        text: 'Departement',
        type: "String",
      },
    ];

    const selectRow = () => {
      console.log("row")
    }

    const sortRow = (column) => {
      console.log(column);
      
    }


     

    return (
        <main>
          <div className={styles["TableDiv"]}>
            {/* <Table data={employees} columns={columns} select={selectRow}/>  */}
            <Table striped bordered hover>
              <thead>
                <tr>
                {/* <th>City</th>
                <th>Zip code</th>
                <th>Departement</th> */}
                  {columns.map((column) => <th key={column.dataField} onClick={() => sortRow(column)}>{column.text}</th>)}
                </tr>
              </thead>
                <TableContent columns={columns} data={rows}/>
            </Table>   

          </div>
        </main>
    )
}


// { firstName: "Fabien",
//             lastName: "TORREZ",
//             dateBirth: "1982-10-02",
//             dateStart: "2000-05-14",
//             street: "5 rue du domaine",
//             city: "Los santos",
//             state: "NY",
//             zipCode: "52000",
//             departement: "sale"},
//            {firstName: "Dona",
//             lastName: "De MONTAZAC",
//             dateBirth: "1989-06-08",
//             dateStart: "2002-08-12",
//             street: "8 rue du domaine",
//             city: "Los santos",
//             state: "NY",
//             zipCode: "52000",
//             departement: "Marketing"},
//            {firstName: "Jonny",
//             lastName: "MONNEY",
//             dateBirth: "1975-02-17",
//             dateStart: "2010-01-06",
//             street: "25 route okay",
//             city: "Hyerstate",
//             state: "AK",
//             zipCode: "07580",
//             departement: "Legal"}