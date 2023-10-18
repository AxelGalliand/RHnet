// write composant display all employees in tanle
// 1. import React
import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { stateEmploye } from './employeesSlice';
const Employees = (props) => {
    const employees = useSelector(stateEmploye);
    return (
        <Table data={Employees} />
    )
};
