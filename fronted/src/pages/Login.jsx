import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import authImage from "../assets/authImage.jpg";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      // Save the JWT token to localStorage
      localStorage.setItem("token", response.data.token);

      // Redirect to the dashboard or home page
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#4682b4] to-[#add8e6] p-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-5xl"
        >
          {/* Info Section - Hidden on Mobile */}
          <div className="hidden md:flex flex-col items-center justify-center bg-blue-100 p-10 w-1/2 text-center">
            <img
              src={authImage}
              alt="SkillSwap Illustration"
              className="w-72 mb-6"
            />
            <p className="text-gray-700 text-lg">
              Swap what you know for what you want to learn.
              <br />
              No money. Just skills. Learn locally or online.
            </p>
          </div>

          {/* Login Form */}
          <div className="flex-1 p-8 md:p-12 flex items-center justify-center">
            <div className="w-full max-w-md">
              <h2 className="text-2xl font-semibold text-center mb-6">
                Welcome Back! Log In
              </h2>
              {error && (
                <p className="text-red-500 text-center mb-4">{error}</p>
              )}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium"
                >
                  Log In
                </button>
              </form>
              <p className="text-center text-sm mt-4">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-600 text-md font-bold">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
