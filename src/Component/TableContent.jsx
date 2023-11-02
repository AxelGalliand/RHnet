import styles from '../styles/TableContent.module.css';

export function TableContent (props) {
  

    return (
        <tbody>
            {props.data.map((row, index) => <tr key={index}>
              {props.columns.map((column, index) => <td key={index}>{row[column.dataField]}</td>)} 
            </tr>)}
            {/* {trMaker()} */}
        {/* {data.map((row) => <tr key={row.lastName}>{row.map((info) => <td key={info}>{testedetexte}</td>)}</tr>)} */}
        {/* <tr>
          <td>Fabien</td>
          <td>TORREZ</td>
          <td>1982-10-02</td>
          <td>2000-05-14</td>
          <td>5 rue du domaine</td>
          <td>Los santos</td>
          <td>NY</td>
          <td>52000</td>
          <td>sale</td>
        </tr>
        <tr>
          <td>Dona</td>
          <td>De MONTAZAC</td>
          <td>1989-06-08</td>
          <td>2002-08-12</td>
          <td>8 rue du domaine</td>
          <td>Los santos</td>
          <td>NY</td>
          <td>52000</td>
          <td>Marketing</td>
        </tr>
        <tr>
          <td>Jonny</td>
          <td>MONNEY</td>
          <td>1975-02-17</td>
          <td>2010-01-06</td>
          <td>25 route okay</td>
          <td>Hyerstate</td>
          <td>AK</td>
          <td>07580</td>
          <td>Legal</td>
        </tr> */}
      </tbody>
    )
}