import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
  
    try {
      const loginData = {
        email,
        password,
      };
  
      const response = await axios.post('http://localhost:3002/login', loginData);
  
      if (response.data.message === 'Success') {
        alert('Login successful!');
        localStorage.setItem('token', response.data.token);
        navigate('/');
      } else {
        alert('Incorrect email or password! Please try again.');
      }
    } catch (error) {
      alert('Login failed. Please try again later.');
      console.error('Login Error:', error);
    }
  };
  

  return (
    <div>
      <div className="flex justify-center items-center text-center vh-100 " style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
        <div className="bg-white p-6 rounded-xl m-8" style={{ width: '40%', minHeight: '400px' }}>
          <h2 className='mb-3 text-blue-600 text-xl'>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3 text-start">
              <label htmlFor="exampleInputEmail1" className="form-label">
                <strong>Email Id</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                id="exampleInputEmail1"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="exampleInputPassword1" className="form-label">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                id="exampleInputPassword1"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <button type="submit" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600">Login</button>
          </form>
          <p className='container mx-auto sm:px-4 my-2'>Don&apos;t have an account?</p>
          <Link to='/register' className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-gray-600 text-white hover:bg-gray-700">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;




