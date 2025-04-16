// Login.jsx
import React, { useEffect, useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const navigate=useNavigate()

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  const handleSubmit = (e) => {
    
    e.preventDefault();
    toast.success('Login Successfully!', {
        style: {
          background: 'green',
          color: 'white',
        },
      });
      
      // Show an error toast (if needed)
    //   toast.error('Login Failed!', {
    //     style: {
    //       background: 'red',
    //       color: 'white',
    //     },
    //   });
    console.log('Form Submitted:', formData);
    // You can add form validation or API call here
    setFormData({
        username:"",
        email:"",
        password:""
    })
    
    setTimeout(()=>{
        navigate("/Dashboard")
    },1000)

  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Login</h2>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
        </div>

        <button
          type="submit"
         
          className="cursor-pointer w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
        <Toaster/>
      </form>
    </div>
  );
}

export default Login;

// import toast, { Toaster } from 'react-hot-toast';

// const notify = () => toast('Here is your toast.');

//  const Login = () => {
//   return (
//     <div>
//       <button onClick={notify}>Make me a toast</button>
//       <Toaster />
//     </div>
//   );
// };

// export default Login
