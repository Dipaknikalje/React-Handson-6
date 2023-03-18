import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='nav'>
    <Link to={"/"} className='nav__child'>
    <p className='nav_p'>Home</p>  
    </Link>
    <Link to={"/AddStudent"} className='nav__child'>
    <p className='nav_p'>Student</p>  
    </Link>
    <Link to={"/ContactUs"} className='nav__child'>
    <p className='nav_p'>Contact</p>  
    </Link>
  </div>
  )
}

export default Navbar