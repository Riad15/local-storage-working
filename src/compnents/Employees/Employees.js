import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';

const Employees = () => {
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, [])
    return (
        <div>
            <h1>Employees Information</h1>
            {
                employees.map(employee => <Person key={employee.id} person={employee} ></Person>)
            }

        </div>
    );
};

export default Employees;