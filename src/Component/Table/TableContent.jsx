import React from 'react';
import styles from '../../styles/TableContent.module.css';
import PropTypes from 'prop-types'

/**
 * 
 * @param {Array} props 
 * @returns {jsx|Component}
 */
const TableContent = (props) => {
  
    return (
        <tbody>
            {props.data.map((row, index) => <tr className={styles["TableLine"]} key={index}>
              {props.columns.map((column, index) => <td key={index}>{row[column.dataField]}</td>)} 
            </tr>)}
      </tbody>
    )
};
 TableContent.propTypes ={
  data: PropTypes.array,
  columns: PropTypes.array,
 }

 export default TableContent;