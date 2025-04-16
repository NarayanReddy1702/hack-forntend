import React from 'react'
import { MdMenu } from 'react-icons/md'
import { NavLink, useNavigate } from 'react-router-dom'

const Nav = () => {
    const navigate =useNavigate()
const redirectLogin =()=>{
    navigate("/Login")
}

  return (
    <nav className="flex  justify-between items-center px-4 md:px-8 py-4 bg-gray-900 shadow-md">
      <div className="flex items-center">
      <h1 className="text-2xl font-bold text-blue-600">🌐 DisasterAlert</h1>
      </div>
       
      <div className="hidden md:flex gap-8">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `font-medium px-4 py-2 rounded-md transition-all duration-300 ${
              isActive 
                ? 'text-blue-600 underline decoration-blue-600 ' 
                : 'text-gray-700 hover:text-blue-600 hover:underline hover:decoration-blue-600'
            }`
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/Regions" 
          className={({ isActive }) => 
            `font-medium px-4 py-2 rounded-md transition-all duration-300 ${
              isActive 
            ? 'text-blue-600 underline decoration-blue-600 ' 
                : 'text-gray-700 hover:text-blue-600 hover:underline hover:decoration-blue-600'
            }`
          }
        >
        Regions
        </NavLink>
        <NavLink 
          to="/Resources" 
          className={({ isActive }) => 
            `font-medium px-4 py-2 rounded-md transition-all duration-300 ${
              isActive 
               ? 'text-blue-600 underline decoration-blue-600 ' 
                : 'text-gray-700 hover:text-blue-600 hover:underline hover:decoration-blue-600'
            }`
          }
        >
         Resources
        </NavLink>
        <NavLink 
          to="/Contact" 
          className={({ isActive }) => 
            `font-medium px-4 py-2 rounded-md transition-all duration-300 ${
              isActive 
               ? 'text-blue-600 underline decoration-blue-600 ' 
                : 'text-gray-700 hover:text-blue-600 hover:underline hover:decoration-blue-600'
            }`
          }
        >
          Contact
        </NavLink>
 </div>
      <div className="hidden md:flex gap-4">
        <button onClick={redirectLogin} className="px-6 cursor-pointer  py-2 font-medium rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300">
          Login
        </button>
        <button className="px-6  cursor-pointer py-2 font-medium rounded-md bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 hover:border-blue-700 transition-all duration-300">
          Sign Up
        </button>
      </div>
      <div  className=' text-2xl text-white  block md:hidden'>
      <MdMenu/>
       </div>
    </nav>
  )
}

export default Nav