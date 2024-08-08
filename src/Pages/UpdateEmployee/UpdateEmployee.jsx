import React, { useEffect, useState } from 'react'
import './UpdateEmployee.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

export default function UpdateEmployee() {

  let navigate = useNavigate();

  const [employee,setEmployee] =useState({});

  let {id} = useParams();

  useEffect(()=>
  {
    console.log('update');
    loadEmployee();
  },[])

  const loadEmployee = async() =>
  {
    const result = await axios.get(`http://localhost:8080/employees/${id}`)
    setEmployee(result.data);
  }

  const InputChange = (e) =>
  {
    setEmployee({...employee,[e.target.name]:e.target.value})
  }

  const submitForm= async(e)=>
  {
    e.preventDefault();
    await axios.put(`http://localhost:8080/employee/${id}`,employee);
    navigate('/');

    // console.log(employee);
  }

  return (
    <div className='update-emp'>
        <div className='update-employee-nav'>
            <h2>Update Employee</h2>
        </div>
        <form className='form' onSubmit={(e)=>{submitForm(e)}}>
            <label >Name : </label>
            <input type='text' placeholder='Enter Name here' onChange={(e)=>{InputChange(e)}} name='name' value={employee.name} className='form-input'/>
            <label >Email : </label>
            <input type='email' placeholder='Enter Email here' onChange={(e)=>{InputChange(e)}} value={employee.email} name='email' className='form-input'/>
            <label >Salary : </label>
            <input type='number' placeholder='Enter Salary here' onChange={(e)=>{InputChange(e)}} value={employee.salary}  name='salary' className='form-input'/>

            <div className='form-btns'>
                <button className='form-btn update-btn' type='submit'>Update Employee</button>
                <Link to='/'><button className='form-btn cancel-btn'>Cancel</button></Link>
            </div>
        </form>
    </div>
  )
}
