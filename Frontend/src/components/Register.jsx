

import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  
    const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    // Register.jsx
    const handleRegister = (event) => {
        event.preventDefault();

        axios.post('http://localhost:3002/register', { firstName, lastName, email, password })
            .then(result => {
                console.log(result);
                if (result.status === 200) {
                    // Registration successful
                    alert("Registered successfully! Please Login to proceed.");
                    const storedUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
                    const updatedUsers = [...storedUsers, { firstName, lastName, email, password }];
                    localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));
                    navigate('/login');
                }
            })
            .catch(err => {
                console.log(err);
                if (err.response && err.response.data && err.response.data.message === "Email already registered") {
                    // Email already registered
                    alert("Email already registered! Please Login to proceed.");
                    navigate('/login');
                } else {
                    // Handle other errors
                    alert("Registration failed. Please try again later.");
                }
            });
    };
     
    return (
        <div>
            <div className="flex justify-center items-center text-center vh-100 " style= {{backgroundImage : "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))"}}>
                <div className="bg-white p-6 rounded-xl m-8" style={{width : '40%'}}>
                    <h2 className='mb-3 text-blue-600 text-xl'>Register</h2>
                    <form onSubmit={handleRegister}>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong >First Name</strong>
                            </label>
                            <input 
                                type="text"
                                placeholder="Enter First Name"
                                className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" 
                                id="exampleInputname" 
                                onChange={(event) => setFirstName(event.target.value)}
                                required
                            /> 
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong >Last Name</strong>
                            </label>
                            <input 
                                type="text"
                                placeholder="Enter Last Name"
                                className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" 
                                id="exampleInputname" 
                                onChange={(event) => setLastName(event.target.value)}
                                required
                            /> 
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                <strong>Email Id</strong>
                            </label>
                            <input 
                                type="email" 
                                placeholder="Enter Email"
                                className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded" 
                                id="exampleInputEmail1" 
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
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <button type="submit"  className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600">Register</button>
                    </form>

                    <p className='container mx-auto sm:px-4 my-2'>Already have an account ?</p>
                    <Link to='/login' className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-gray-600 text-white hover:bg-gray-700">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Register
