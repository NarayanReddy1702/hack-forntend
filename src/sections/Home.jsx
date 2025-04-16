import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ScrollVelocity from './ScrollVelocity'

const Home = () => {
  const navigate=useNavigate()
  const RedirectQuizPage =()=>{
     navigate("/Login")
  }

  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://192.168.61.1:8080/api/user/register')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch user data');
        return res.json();
      })
      .then((data) => {
        setUsers(data); // Assuming data is an array of users
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  console.log(users);
  
  return (
<>
<div className= "w-full min-h-[90vh] bg-black flex flex-col items-center justify-center text-center px-4">
  <h1 className="text-6xl font-bold text-blue-600 mb-6"><span className='text-white'>Real-Time Disaster  </span>Alert System</h1>
  <p className="text-xl text-gray-400 mb-8 max-w-3xl">
  A Real-Time Disaster Alert System provides instant notifications about natural or man-made hazards, helping people respond quickly and stay safe.
  </p>
  <button onClick={RedirectQuizPage} className="px-8 py-3 cursor-pointer text-lg font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-800 transition-all duration-300">
    Get Started
  </button>
</div>
<ScrollVelocity/>
</>
  )
}

export default Home