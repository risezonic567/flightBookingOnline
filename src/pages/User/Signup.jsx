import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
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

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Signup Data:", formData);

    // 👉 yaha API call karega
    // axios.post("/api/register", formData)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg flex overflow-hidden">
        
        {/* LEFT - BANNER */}
        <div className="hidden md:flex w-1/2 bg-blue-400 text-white items-center justify-center p-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Join Us</h1>
            <p>Create your account & start booking flights easily</p>
          </div>
        </div>

        {/* RIGHT - SIGNUP FORM */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 p-8 flex flex-col justify-center"
        >
          <h2 className="text-2xl font-bold text-center mb-6">
            Create Account
          </h2>

          {/* SOCIAL */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg mb-3 hover:bg-blue-300 transition"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
              className="w-5 h-5"
              alt="google"
            />
            Sign up with Google
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
            Sign up with Facebook
          </button>

          {/* OR */}
          <div className="text-center mb-4 text-gray-500">OR</div>

          {/* NAME */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

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
            placeholder="Create Password"
            required
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          {/* CONFIRM PASSWORD */}
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-400 transition"
          >
            Create Account
          </button>

          {/* LOGIN LINK */}
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}