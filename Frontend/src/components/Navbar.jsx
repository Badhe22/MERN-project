// Navbar.js
import React, { useState, useEffect } from "react";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
 
function Navbar() {
  const [isRegisterVisible, setRegisterVisible] = useState(false);
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState("");
    
  useEffect(() => {
    // Load registered users from local storage on component mount
    const storedUsers = localStorage.getItem("registeredUsers");
    if (storedUsers) {
      try {
        const parsedUsers = JSON.parse(storedUsers);
        setRegisteredUsers(parsedUsers);
      } catch (error) {
        console.error("Error parsing JSON:", error);
        // Handle the error appropriately, e.g., by setting default value for registeredUsers
      }
    }
  }, []);
  

  
  const handleRegister = (userData) => {
    setRegisterVisible(false);
    // Simulate storing registered users (in a real app, use a database)
    const updatedUsers = [...registeredUsers, userData];
    setRegisteredUsers(updatedUsers);
    saveUsersToLocalStorage(updatedUsers);
    // Show the login form after successful registration
    setLoginVisible(true);
    // Reset login success and error messages
    setLoginSuccess(false);
    setLoginError("");
  };

  const handleLogin = (userData) => {
    // Perform validation and check if the user is registered
    const userExists = registeredUsers.some(
      (user) =>
        user.email === userData.email && user.password === userData.password
    );

    if (userExists) {
      // Set the user as logged in and show the success message
      setLoggedIn(true);
      setLoginSuccess(true);
      setLoginError("");
      // Reset the login form visibility
      setLoginVisible(false);
    } else {
      // Display an error if the user is not registered
      setLoggedIn(false);
      setLoginSuccess(false);
      setLoginError("Invalid email or password.");
      // Reset the login form visibility
      setLoginVisible(true);
    }
  };

  const handleLogout = () => {
    // Handle logout logic (e.g., clear user session)
    console.log("Logout");
    // Set the user as logged out
    setLoggedIn(false);
    // Reset login success and error messages
    setLoginSuccess(false);
    setLoginError("");
  };

  return (
    <div>
      <nav className="relative flex flex-wrap items-center content-between py-2 px-4  navbar-secondary bg-indigo-600">
        <div className="container mx-auto sm:px-4 max-w-full  ">
          <Link className="inline-block pt-1 pb-1 mr-4 text-lg whitespace-no-wrap" style={{ color: "Black" }} to="/">
          🛒 Ecommerce App
        
          </Link>

          <ul className="flex flex-wrap list-none pl-0 mb-0 justify-end text-white">
            {!isLoggedIn && (
              <>
                <li className="">
                  <Link className="inline-block py-2 px-4 no-underline" style={{ color: "Black" }} to="/">
                    Home
                  </Link>
                </li>
                <li className="">
                  <Link className="inline-block py-2 px-4 no-underline" style={{ color: "Black" }} to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="inline-block py-2 px-4 no-underline"
                    style={{ color: "Black" }}
                    to="/register"
                    onClick={() => {
                      setRegisterVisible(true);
                      setLoginVisible(false);
                    }}
                  >
                    Register
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="inline-block py-2 px-4 no-underline"
                    style={{ color: "Black" }}
                    to="/login"
                    onClick={(handleLogin) => {
                      setLoginVisible(true);
                      setRegisterVisible(false);
                    }}
                  >
                    Login
                  </Link>
                </li>{" "}

                <li className="">
                  <Link
                    className="inline-block py-2 px-4 no-underline"
                    style={{ color: "Black" }}
                    to="/"
                    onClick={(handleLogout) => {
                      
                    }}
                  >
                   <button type="button"> Logout </button>
                  </Link>
                </li>
              </>
            )}
            {isLoggedIn && <li style={{ color: "Black" }} onClick={handleLogout}>Logout</li>}
          </ul>
        </div>
      </nav>
      
    </div>
  );
}

export default Navbar;