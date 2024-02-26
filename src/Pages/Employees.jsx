// write composant display all employees in tanle
// 1. import React
import styles from '../styles/EmployeeList.module.css';
import TableMaker from '../Component/Table/tableMaker';
import { useSelector } from 'react-redux';
import { stateEmploye } from '../features/employe.slice';
const Employees = () => {
    const { data } = useSelector(stateEmploye)
    const columns = [
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
      ];


    return (
        <main className={styles["mainEmployee"]}>
         <TableMaker columns={columns} rows={data}  />
        </main>
    )
};
export default Employees