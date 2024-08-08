import React, { useState } from 'react'
import './CreateEmployee.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function CreateEmployee() {

  let navigate = useNavigate();

  const [employee,setEmployee] = useState({
    "name":"",
    "email":"",
    "salary":0
  });

  const InputChange = (e) =>
  {
    console.log(e.target.name,e.target.value);
    setEmployee({...employee,[e.target.name]:e.target.value});
  }

  const SubmitDetails=async(e)=>
  {
    e.preventDefault();
    // console.log('submitted');
    // console.log(employee);
    await axios.post('http://localhost:8080/employees',employee);
    navigate('/');
  }


  return (
    <div className='create-employee'>
        <div className='create-employee-nav'>
            <h2>Create Employee</h2>
        </div>
        <form className='form' onSubmit={(e)=>{SubmitDetails(e)}}>
            <label >Name : </label>
            <input type='text' placeholder='Enter Name here' value={employee.name} onChange={(e)=>{InputChange(e)}}  name='name'  className='form-input'/>
            <label >Email : </label>
            <input type='email' placeholder='Enter Email here'  value={employee.email}  onChange={(e)=>{InputChange(e)}}   name='email' className='form-input'/>
            <label >Salary : </label>
            <input type='number' placeholder='Enter Salary here' value={employee.salary}  onChange={(e)=>{InputChange(e)}}   name='salary' className='form-input'/>

            <div className='form-btns'>
                <button  type='submit' className='form-btn add-btn' >Add Employee</button>
                <Link to='/'><button className='form-btn cancel-btn'>Cancel</button></Link>
            </div>
        </form>
    </div>
  )
}
