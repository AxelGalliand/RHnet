// write composant display all employees in tanle
// 1. import React
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { stateEmploye } from '../features/employe.slice';
import styles from '../styles/tableMaker.module.css';
import TableContent from '../Component/TableContent';
import chevUp from '../assets/chevronUp.svg';
import chevDown from '../assets/chevronDown.svg';
import chevRight from '../assets/chevronRight.svg';
import chevLeft from '../assets/chevronLeft.svg';
import PropTypes from 'prop-types';
import { current } from '@reduxjs/toolkit';

const TableMaker = (props) => {

    const data = [...props.rows]
    const [rows, setRows] = useState([...props.rows]);
    const [columns, setColumns] = useState(props.columns);
    const [slice, setSlice] = useState(10);
    const [search, setSearch] = useState("");
    const [totalPage, setTotalPage] = useState(Math.ceil(data.length / slice));
    const [currentPage, setCurrentPage] = useState(1);
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


    const SearchBar = (e) => {
      const input = e.target.value.toLowerCase();
      setSearch(input)
      filterBySearch(input)
    }

    const filterBySearch = (input) => {
      console.log(input, data)
      let filter = data.filter((row) => {
        return (
          row.firstName.toLowerCase().includes(input) ||
          row.lastName.toLowerCase().includes(input) ||
          row.dateBirth.toLowerCase().includes(input) ||
          row.dateStart.toLowerCase().includes(input) ||
          row.street.toLowerCase().includes(input) ||
          row.city.toLowerCase().includes(input) ||
          row.state.toLowerCase().includes(input) ||
          row.zipCode.toLowerCase().includes(input) ||
          row.departement.toLowerCase().includes(input)
        )
      })
      console.log(filter)
      setRows(filter)
    }

    const SliceBy = (e) => {
      const number = +e.target.value
      setSlice(number)
      setTotalPage(Math.ceil(data.length / number))
      setCurrentPage (1)
      setRows(data.slice(0, number))
    }
  
    const range = (from, to, step = 1) => {
      let i = from;
      const range = [];
    
      while (i <= to) {
        range.push(i);
        i += step;
      }
    
      return range;
    }

    const changePage = (numberPage) => {
      setCurrentPage(numberPage)
      setRows(data.slice((numberPage - 1) * slice, numberPage * slice))
    }

    const firstPage = () => {
      setCurrentPage(1)
    }

    const lastPage = () => {
      setCurrentPage(totalPage)
    }

    const previousPage = () => {
      setCurrentPage(currentPage - 1)
      setRows(data.slice((currentPage - 2) * slice, (currentPage - 1) * slice))
    }

    const nextPage = () => {
      setCurrentPage(currentPage + 1)
      setRows(data.slice(currentPage * slice, (currentPage + 1) * slice))
    }
    
    return (
        
        <div className={styles["TableDiv"]}>
          <input type='text' className={styles["TableSerch"]} placeholder='Recherche' onChange={SearchBar}></input>
          <div className={styles["sizeButton"]}>
            <select className={styles["sizeSelect"]} onChange={SliceBy}>
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>
          <div className={styles["pagination"]}>
              nombre de page {totalPage}
          </div>
          <div className={styles["paginate"]}>

            <button onClick={() => firstPage()}>1</button>
            {currentPage === 1 ? null : <button onClick={() => previousPage()}><img src={chevLeft}/></button>}

            {range(2, totalPage-1).map((numberPage) => {
              return (
                <button key={numberPage} onClick={() => changePage(numberPage)} className={currentPage === numberPage ? 'active' : null}>
                  {numberPage}
                </button>
              )
            })}
            {currentPage === totalPage ? null : <button onClick={() => nextPage()} ><img src={chevRight}/></button>}
            {totalPage === 1 ? null : <button onClick={() => lastPage()}>{totalPage}</button>}
          </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  {columns.map((column) => <th className={styles["columnTitle"]} key={column.dataField} onClick={() => sortRow(column)}>
                    {column.text} {column.sortOrder === "ASC" ? <img src={chevDown}/> : <img src={chevUp}/>}
                  </th>)}
                </tr>
              </thead>
                <TableContent columns={columns} data={rows}/>
            </Table>  
        
          <div className={styles["paginate"]}>

            <button onClick={() => firstPage()}>1</button>
            {currentPage === 1 ? null : <button onClick={() => previousPage()}><img src={chevLeft}/></button>}

            {range(2, totalPage-1).map((numberPage) => {
              return (
                <button key={numberPage} onClick={() => changePage(numberPage)} className={currentPage === numberPage ? 'active' : null}>
                  {numberPage}
                </button>
              )
            })}
            {currentPage === totalPage ? null : <button onClick={() => nextPage()} ><img src={chevRight}/></button>}
            {totalPage === 1 ? null : <button onClick={() => lastPage()}>{totalPage}</button>}
          </div>

        </div>
    )
}
 TableMaker.propTypes ={
  rows: PropTypes.array,
  columns: PropTypes.array
 }

export default TableMaker
