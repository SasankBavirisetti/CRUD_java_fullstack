import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './HomePage.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function HomePage() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    console.log('useEffect');
    loadUsers();
  }, [])

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/employees");
    // console.log(result.data);
    setEmployees(result.data);
  }

  const deleteEmployee = async (id) => {
    await axios.delete(`http://localhost:8080/employees/${id}`);
    loadUsers();
  }


  return (
    <div className='homepage'>
      <Navbar />
      <table className='homepage-table-details'>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th className='action-btns'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            employees.map((employee, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.salary}</td>
                  <td>
                    <div>
                      <Link to={`/employees/${employee.id}`}><button className='action-btn view-btn'>View</button></Link>
                      <Link to={`/employee/${employee.id}`}><button className='action-btn edit-btn'>Edit</button></Link>
                      <button className='action-btn delete-btn' onClick={() => { deleteEmployee(employee.id) }} >Delete</button>
                    </div>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
