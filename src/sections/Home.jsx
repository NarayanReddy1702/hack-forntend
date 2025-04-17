import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoaderPage from './LoadingPage'
import CustomCursor from './CustomCursor'

const Home = () => {
  const navigate=useNavigate()
  const RedirectQuizPage =()=>{
     navigate("/Dashboard")
  }


  
  return (
<>
<div className= "w-full min-h-[90vh] bg-black flex flex-col items-center justify-center text-center px-7 lg:px-4">
  <LoaderPage/>
  <CustomCursor/>
  <h1 className="text-4xl lg:text-6xl font-bold text-blue-600 mb-6"><span className='text-white'>Real-Time Disaster  </span>Alert System</h1>
  <p className="text-[15px] lg:text-xl text-gray-400 mb-8 max-w-3xl">
  A Real-Time Disaster Alert System provides instant notifications about natural or man-made hazards, helping people respond quickly and stay safe.
  </p>
  <button onClick={RedirectQuizPage} className="px-8 py-3 cursor-pointer text-[15px] lg:text-lg font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-800 transition-all duration-300">
    Get Started
  </button>
</div>
</>
  )
}

export default Home