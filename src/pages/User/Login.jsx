import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data:", formData);

    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg flex overflow-hidden">
        
        {/* LEFT - BANNER */}
        <div className="hidden md:flex w-1/2 bg-blue-400 text-white items-center justify-center p-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Welcome Back</h1>
            <p>Book flights easily and travel the world</p>
          </div>
        </div>

        {/* RIGHT - LOGIN FORM */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 p-8 flex flex-col justify-center"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          {/* SOCIAL LOGIN */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg mb-3 hover:bg-blue-300 transition"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
              className="w-5 h-5"
              alt="google"
            />
            Login with Google
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg mb-4 hover:bg-blue-300 transition"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
              className="w-5 h-5"
              alt="facebook"
            />
            Login with Facebook
          </button>

          {/* OR */}
          <div className="text-center mb-4 text-gray-500">OR</div>

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            required
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          {/* PASSWORD */}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            required
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          {/* LOGIN BTN */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-400 transition"
          >
            Login
          </button>

          {/* SIGN UP */}
          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}