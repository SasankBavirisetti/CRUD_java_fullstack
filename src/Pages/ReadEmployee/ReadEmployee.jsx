import React, { useEffect, useState } from 'react'
import './ReadEmployee.css'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function ReadEmployee() {

    const [employee, setEmployee] = useState({});

    let { id } = useParams();

    useEffect(() => {
        loadEmployee();
    }, [])

    const loadEmployee = async () => {
        const result = await axios.get(`http://localhost:8080/employees/${id}`);
        setEmployee(result.data);
    }


    return (
        <div className='read-employee'>
            <div className='read-employee-nav'>
                <h2> Employee Details</h2>
            </div>

            <table className='details-table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{employee.name}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{employee.email}</td>
                    </tr>
                    <tr>
                        <td>Salary</td>
                        <td>{employee.salary}</td>
                    </tr>
                </tbody>
            </table>
            <Link to='/'><button className='home-btn'>Back to Home</button></Link>
        </div>
    )
}
