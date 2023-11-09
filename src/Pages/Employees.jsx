// write composant display all employees in tanle
// 1. import React
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { stateEmploye } from '../features/employe.slice';
import styles from '../styles/EmployeeList.module.css';
import { TableContent } from '../Component/TableContent';
import chevUp from '../assets/chevronUp.svg';
import chevDown from '../assets/chevronDown.svg';
export function Employees () {

    const { data } = useSelector(stateEmploye);
    const [rows, setRows] = useState(data);
    console.log(rows)
   
    const [columns, setColumns] = useState([
      {
        dataField: 'firstName',
        text: 'First Name',
        sortOrder: "ASC",
        type: "String",
      },
      {
        dataField: 'lastName',
        text: 'Last Name',
        sortOrder: "ASC",
        type: "String",
      },
      {
        dataField: 'dateBirth',
        text: 'Date of birth',
        sortOrder: "ASC",
        type: "Date",
      },
      {
        dataField: 'dateStart',
        text: 'Date of Start',
        sortOrder: "ASC",
        type: "Date",
      },
      {
        dataField: 'street',
        text: 'Street',
        sortOrder: "ASC",
        type: "String",
      },
      {
        dataField: 'city',
        text: 'City',
        sortOrder: "ASC",
        type: "String",
      },
      {
        dataField: 'state',
        text: 'State',
        sortOrder: "ASC",
        type: "String",
      },
      {
        dataField: 'zipCode',
        text: 'Zip Code',
        sortOrder: "ASC",
        type: "Number",
      },
      {
        dataField: 'departement',
        text: 'Departement',
        sortOrder: "ASC",
        type: "String",
      },
    ]);

    const sortRow = (column) => {
      console.log(column);
      const columnsUpdated = [...columns];
      const rowsSorted = [...rows];
      // on trie par ordre croissant
      if (column.type === "Date" || column.type === "Number") {
        // object.mapropriete
        // object["mapropriete"]
        rowsSorted.sort((a,b) => {
          return new Date(a[column.dataField]) - new Date(b[column.dataField])
        })

      } 
      else {
        rowsSorted.sort((a,b) => a[column.dataField].toLowerCase().localeCompare(b[column.dataField].toLowerCase()))
      }

      if(column.sortOrder === "ASC") {
        column.sortOrder = "DSC"
      }else {
        // on inverse l'order des rows
        rowsSorted.reverse()
        column.sortOrder = "ASC"
      }

      // on met à jour la column
      // on récupère l'index de la column à mettre à jour
      const indexColumn = columnsUpdated.findIndex((col) => col.dataField === column.dataField)
      // on met à la column dans le tableau
      columnsUpdated[indexColumn] = column;
      // on met à jour les states
      setColumns(columnsUpdated)
      setRows(rowsSorted)
    }

    const SearchBar = () => {
      const rowsSerchSorted = [...rows];

    addEventListener('keyup', function (e) {
      const input = e.target.value.toLowerCase();
      let Filter = [];
      for(let i = 0; i < rowsSerchSorted.length; i++ ) {
        if (rowsSerchSorted[i].firstName.toLowerCase().includes(input) ||
            rowsSerchSorted[i].lastName.toLowerCase().includes(input) ||
            rowsSerchSorted[i].dateBirth.toLowerCase().includes(input) ||
            rowsSerchSorted[i].dateStart.toLowerCase().includes(input) ||
            rowsSerchSorted[i].street.toLowerCase().includes(input) ||
            rowsSerchSorted[i].city.toLowerCase().includes(input) ||
            rowsSerchSorted[i].state.toLowerCase().includes(input) ||
            rowsSerchSorted[i].zipCode.toLowerCase().includes(input) ||
            rowsSerchSorted[i].departement.toLowerCase().includes(input)) Filter.push(rowsSerchSorted[i]);
            console.log(Filter);
      }})}

     

    return (
        <main>
          <div className={styles["TableDiv"]}>
          <input type='text' className={styles["TableSerch"]} placeholder='Recherche' onChange={SearchBar}></input>
            <Table striped bordered hover>
              <thead>
                <tr>
                  {columns.map((column) => <th key={column.dataField} onClick={() => sortRow(column)}>
                    {column.text} {column.sortOrder === "ASC" ? <img src={chevDown}/> : <img src={chevUp}/>}
                  </th>)}
                </tr>
              </thead>
                <TableContent columns={columns} data={rows}/>
            </Table>   
          </div>
        </main>
    )
}
