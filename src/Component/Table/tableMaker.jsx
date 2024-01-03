// write composant display all employees in tanle
// 1. import React
import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import styles from '../../styles/tableMaker.module.css';
import TableContent from './TableContent';
import chevUp from '../../assets/chevronUp.svg';
import chevDown from '../../assets/chevronDown.svg';
import chevRight from '../../assets/chevronRight.svg';
import chevLeft from '../../assets/chevronLeft.svg';
import PropTypes from 'prop-types';

const TableMaker = (props) => {

    const data = [...props.rows]
    const [columns, setColumns] = useState(props.columns);
    const [slice, setSlice] = useState(10);
    const [search, setSearch] = useState("");
    // const [totalPage, setTotalPage] = useState(Math.ceil(data.length / slice));
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOrder, setSortOrder] = useState("ASC");
    const [sortColumn, setSortColumn] = useState(null);
    const [sortType, setSortType] = useState("String");
    
    const sortRow = (column) => {
      setSortColumn(column.dataField)
      setSortType(column.type)
      setSortOrder(sortOrder === "ASC" ? "DSC" : "ASC")
      
      const columnsUpdated = [...columns];
      // on met à jour la column
      // on récupère l'index de la column à mettre à jour
      const indexColumn = columnsUpdated.findIndex((col) => col.dataField === column.dataField)
      // on met à la column dans le tableau
      columnsUpdated[indexColumn].sortOrder = sortOrder === "ASC" ? "DSC" : "ASC";
      // on met à jour les states
      setColumns(columnsUpdated)
      // setRows(rowsSorted)
    }


    const SearchBar = (e) => {
      const input = e.target.value.toLowerCase();
      setSearch(input)
    }



    const filteredEmployees = data.filter((row) => {
      return Object.keys(row).some((key) => row[key].toLowerCase().includes(search))
    })

    const sortedEmployees = filteredEmployees.sort((a,b) => {
      if(sortColumn !== null) {
        if (sortType === "Date") {
          return new Date(a[sortColumn]) - new Date(b[sortColumn])
        } else if (sortType === "Number") {
          return a[sortColumn] - b[sortColumn]
        }
        else {
          return a[sortColumn].toLowerCase().localeCompare(b[sortColumn].toLowerCase())
        }
      }
    })
    
    if (sortOrder === "DSC") {
      sortedEmployees.reverse()
    }
    const indexLastEmployee = currentPage * slice
    const indexFirstEmployee = indexLastEmployee - slice
    const currentEmployee = sortedEmployees.slice(indexFirstEmployee, indexLastEmployee)
    const totalPage = Math.ceil(sortedEmployees.length / slice)
    const SliceBy = (e) => {
      const number = +e.target.value
      setSlice(number)
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
    }

    const firstPage = () => {
      setCurrentPage(1)
    }

    const lastPage = () => {
      setCurrentPage(totalPage)
    }

    const previousPage = () => {
      setCurrentPage(currentPage - 1)
    }

    const nextPage = () => {
      setCurrentPage(currentPage + 1)
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

            <button onClick={() => firstPage()} className={currentPage === 1 ? 'active' : null} >1</button>
            {currentPage === 1 ? null : <button onClick={() => previousPage()}><img src={chevLeft}/></button>}

            {range(2, totalPage-1).map((numberPage) => {
              if (numberPage === currentPage-2 || numberPage === currentPage-1 || numberPage === currentPage || numberPage === currentPage+1 || numberPage === currentPage+2) {
                return <button key={numberPage} onClick={() => changePage(numberPage)} className={currentPage === numberPage ? 'active' : null}> {numberPage}</button>}
            })}
            {currentPage === totalPage ? null : <button onClick={() => nextPage()} ><img src={chevRight}/></button>}
            {totalPage === 1 ? null : <button onClick={() => lastPage()} className={currentPage === totalPage ? 'active' : null}>{totalPage}</button>}
          </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  {columns.map((column) => <th className={styles["columnTitle"]} key={column.dataField} onClick={() => sortRow(column)}>
                    {column.text} {column.sortOrder === "ASC" ? <img src={chevDown}/> : <img src={chevUp}/>}
                  </th>)}
                </tr>
              </thead>
                <TableContent columns={columns} data={currentEmployee} />
            </Table>  
        
          <div className={styles["paginate"]}>

            <button onClick={() => firstPage()} className={currentPage === 1 ? 'active' : null}>1</button>
            {currentPage === 1 ? null : <button onClick={() => previousPage()}><img src={chevLeft}/></button>}

            {range(2, totalPage-1).map((numberPage) => {
              if (numberPage === currentPage-2 || numberPage === currentPage-1 || numberPage === currentPage || numberPage === currentPage+1 || numberPage === currentPage+2) {
                return <button key={numberPage} onClick={() => changePage(numberPage)} className={currentPage === numberPage ? 'active' : null}> {numberPage}</button>}
            })}
            {currentPage === totalPage ? null : <button onClick={() => nextPage()} ><img src={chevRight}/></button>}
            {totalPage === 1 ? null : <button onClick={() => lastPage()} className={currentPage === totalPage ? 'active' : null}>{totalPage}</button>}
          </div>

        </div>
    )
}
 TableMaker.propTypes ={
  rows: PropTypes.array,
  columns: PropTypes.array
 }

export default TableMaker
