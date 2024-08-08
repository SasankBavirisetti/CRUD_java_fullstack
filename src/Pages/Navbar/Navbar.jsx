import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='nav-heading'><h2>CRUD Application</h2></div>
        <Link to='/employees'><button className='addemp-btn'>Add Employee</button></Link>
    </div>
  )
}
