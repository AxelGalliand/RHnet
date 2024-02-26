import { useState } from 'react';
import styles from '../../styles/tableMaker.module.css';
import TableContent from './TableContent';
import PropTypes from 'prop-types';

const TableMaker = (props) => {

    const data = [...props.rows]
    const [columns, setColumns] = useState(props.columns);
    const [slice, setSlice] = useState(10);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOrder, setSortOrder] = useState("ASC");
    const [sortColumn, setSortColumn] = useState(null);
    const [sortType, setSortType] = useState("String");
    
    const sortRow = (column) => {
      setSortColumn(column.dataField)
      setSortType(column.type)
      setSortOrder(sortOrder === "ASC" ? "DSC" : "ASC")
      
      const columnsUpdated = [...columns];
      const indexColumn = columnsUpdated.findIndex((col) => col.dataField === column.dataField)
      columnsUpdated[indexColumn].sortOrder = sortOrder === "ASC" ? "DSC" : "ASC";
      setColumns(columnsUpdated)
    }


    const SearchBar = (e) => {
      const input = e.target.value.toLowerCase();
      setSearch(input)
    }


    const filteredData = data.filter((row) => {
      return Object.keys(row).some((key) => row[key].toLowerCase().includes(search))
    })

    const sortedDatas = filteredData.sort((a,b) => {
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
      sortedDatas.reverse()
    }
    const indexLastData = currentPage * slice
    const indexFirstData = indexLastData - slice
    const currentData = sortedDatas.slice(indexFirstData, indexLastData)
    const totalPage = Math.ceil(sortedDatas.length / slice)
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
         
          <div className={styles["paginateBlock"]}>
            <input type='text' className={styles["TableSerch"]} placeholder='Research' onChange={SearchBar}></input>
            <div className={styles["block-right"]}>
              <div className={styles["sizeButton"]}>
                <select className={styles["sizeSelect"]} onChange={SliceBy}>
                  <option value={10}>10</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </div>
              <div className={styles["paginate"]}>

                <button onClick={() => firstPage()} className={currentPage === 1 ? 'active' : null} >1</button>
                {currentPage === 1 ? null : <button onClick={() => previousPage()}><svg className={styles['svg']} height="1em" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></button>}

                {range(2, totalPage-1).map((numberPage) => {
                  if (numberPage === currentPage-2 || numberPage === currentPage-1 || numberPage === currentPage || numberPage === currentPage+1 || numberPage === currentPage+2) {
                    return <button key={numberPage} onClick={() => changePage(numberPage)} className={currentPage === numberPage ? 'active' : null}> {numberPage}</button>}
                })}
                {currentPage === totalPage ? null : <button onClick={() => nextPage()} ><svg className={styles["svg"]} height="16" viewBox="0 0 512 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></button>}
                {totalPage === 1 ? null : <button onClick={() => lastPage()} className={currentPage === totalPage ? 'active' : null}>{totalPage}</button>}
              </div>
            </div>
          </div>
          <div className={styles["TableContener"]}>
            <table className={styles["Table"]}>
              <thead className={styles["TableThead"]}>
                <tr>
                  {columns.map((column) => <th className={styles["columnTitle"]} key={column.dataField} onClick={() => sortRow(column)}>
                    <div className={styles["TableTheadTitle"]}>
                    <span>{column.text}</span>
                     {column.sortOrder === "ASC" ? <svg className={styles['svg']} height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg> : <svg className={styles['svg']} height="1em" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>}
                     </div>
                  </th>)}
                </tr>
              </thead>
              <TableContent columns={columns} data={currentData} />
            </table>  
          </div>
          <div className={styles["paginate"]}>

            <button onClick={() => firstPage()} className={currentPage === 1 ? 'active' : null}>1</button>
            {currentPage === 1 ? null : <button onClick={() => previousPage()}><svg className={styles['svg']} height="1em" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></button>}

            {range(2, totalPage-1).map((numberPage) => {
              if (numberPage === currentPage-2 || numberPage === currentPage-1 || numberPage === currentPage || numberPage === currentPage+1 || numberPage === currentPage+2) {
                return <button key={numberPage} onClick={() => changePage(numberPage)} className={currentPage === numberPage ? 'active' : null}> {numberPage}</button>}
            })}
            {currentPage === totalPage ? null : <button onClick={() => nextPage()} ><svg className={styles["svg"]} height="16" viewBox="0 0 512 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></button>}
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