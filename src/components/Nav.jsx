import React, { useState } from 'react'
import { MdMenu, MdClose } from 'react-icons/md'
import { NavLink, useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const redirectLogin = () => {
    navigate("/Login")
    setMenuOpen(false)
  }

  const toggleMenu = () => setMenuOpen(!menuOpen)
 const pageRedirect =()=>{
   navigate("/")
 }

  return (
    <nav className="relative">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 bg-gray-900 shadow-md">
        <div className="flex items-center">
          <h1 onClick={pageRedirect} className="  cursor-pointer text-2xl font-bold text-blue-600">🌐 DisasterAlert</h1>
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
            to="/Dashboard"
            className={({ isActive }) =>
              `font-medium px-4 py-2 rounded-md transition-all duration-300 ${
                isActive
                  ? 'text-blue-600 underline decoration-blue-600 '
                  : 'text-gray-700 hover:text-blue-600 hover:underline hover:decoration-blue-600'
              }`
            }
          >
            Dashboard
          </NavLink>
        </div>

        <div className="hidden md:flex gap-4">
          <button
            onClick={redirectLogin}
            className="px-6 cursor-pointer py-2 font-medium rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300"
          >
            Login
          </button>
          <button className="px-6 cursor-pointer py-2 font-medium rounded-md bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 hover:border-blue-700 transition-all duration-300">
            Sign Up
          </button>
        </div>

        <div
          className="text-3xl text-white md:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <MdClose /> : <MdMenu />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="flex flex-col gap-4 bg-gray-800 px-6 py-4 md:hidden shadow-md">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-white font-medium hover:text-blue-400 transition"
          >
            Home
          </NavLink>
          <NavLink
            to="/Regions"
            onClick={() => setMenuOpen(false)}
            className="text-white font-medium hover:text-blue-400 transition"
          >
            Regions
          </NavLink>
          <NavLink
            to="/Resources"
            onClick={() => setMenuOpen(false)}
            className="text-white font-medium hover:text-blue-400 transition"
          >
            Resources
          </NavLink>
          <NavLink
            to="/Dashboard"
            onClick={() => setMenuOpen(false)}
            className="text-white font-medium hover:text-blue-400 transition"
          >
            Dashboard
          </NavLink>
          <button
            onClick={redirectLogin}
            className="text-blue-400 border border-blue-500 py-2 rounded-md font-medium hover:bg-blue-500 hover:text-white transition"
          >
            Login
          </button>
          <button className="bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600 transition">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  )
}

export default Nav
