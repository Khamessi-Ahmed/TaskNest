import Button from "@mui/material/Button";
import logo from "../assets/TaskNest_logo.png";
import React, { useState } from 'react';
import { SignIn } from "../Services/auth/SignIn";
export const Login = () => {
  const [showLoginForm, setShowLoginForm] = useState(false); // State to manage login form visibility
  const [user,setUser] = useState({
    name:"",
    email: '',
    password: '',
    confirmPassword: '',
    
  });

  const handleSubmitSignIn = async (e) => {
    e.preventDefault();
    try {
      await SignIn(user); // Call the service function correctly
      // Optionally, reset the form or navigate elsewhere
      
    } catch (error) {
      console.error("Error adding board:", error);
    }
  };
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value }); // Use functional update
  };
  return (
    <>
      <div className="flex flex-col sm:flex-row h-screen">
        {/* Logo Section */}
        <div className="flex-1 bg-black hidden sm:flex items-center justify-center">
          <img className="max-h-full max-w-full" src={logo} alt="TaskNest Logo" />
        </div>

        {/* Form Section */}
        <div className="flex-1 flex items-center justify-center bg-white">
          <div className="w-full max-w-md px-8 py-10 shadow-lg rounded-lg bg-gray-50">
            <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Welcome to TaskNest
            </h3>

            {/* Conditional Rendering for Registration and Login Forms */}
            <form className="space-y-6">
              {!showLoginForm && (
                <>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Sign up</h4>
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="nom"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your Name
                    </label>
                    <input
                    onChange={handleChange}
                      type="text"
                      name="name"
                      id="name"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                    onChange={handleChange}
                      type="email"
                      name="email"
                      id="email"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  {/* Password Input */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <input
                    onChange={handleChange}
                      type="password"
                      id="password"
                      name="password"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your password"
                      required
                    />
                  </div>

                  {/* Confirm Password Input */}
                  <div>
                    <label
                      htmlFor="confirm_password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Confirm password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Re-enter your password"
                      required
                    />
                  </div>

                  {/* Link to Login Form */}
                  <p className="text-sm text-blue-600 cursor-pointer" onClick={() => setShowLoginForm(true)}>
                    Already have an account? Login here
                  </p>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Sign Up
                  </button>
                </>
              )}

              {showLoginForm && (
                <>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Login</h4>
                  <div>
                    <label
                      htmlFor="login_email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                    onChange={handleChange}
                      type="email"
                      id="login_email"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="login_password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <input
                    onChange={handleChange}
                      type="password"
                      id="login_password"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your password"
                      required
                    />
                  </div>

                  
                  {/* Link to Registration Form */}
                  <p className="text-sm text-blue-600 cursor-pointer" onClick={() => setShowLoginForm(false)}>
                    Go back to Registration
                  </p>
                  {/* Login Button */}
                  <button
                    type="button"
                    className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-green-500 mt-4"
                    onClick={() => {
                      console.log("Logging in...");
                      // Add your login logic here
                    }}
                  >
                    Login
                  </button>

                </>
              )}
            </form>

            {/* Google Login Button */}
            <button
              type="button"
              className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-red-500 mt-4"
              onClick={() => {
                console.log("Login with Google");
                window.location.href = "http://localhost:8080/oauth2/authorization/google";
              }}
            >
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
