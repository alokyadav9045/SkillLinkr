import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import authImage from "../assets/authImage.jpg";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skillWant: "",
    skillOffer: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", formData);
      console.log("Response:", response.data); // Debugging
      setSuccess("Account created successfully!");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      console.error("Error:", err.response || err.message); // Debugging
      setError(err.response?.data?.message || "Registration failed. Please try again.");
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
          <div className="hidden md:flex flex-col items-center justify-center bg-blue-100 p-10 w-1/2 text-center">
            <img
              src={authImage}
              alt="SkillSwap Illustration"
              className="w-96 mb-6 object-cover rounded-md"
            />
            <p className="text-gray-700 text-lg">
              Swap what you know for what you want to learn.
              <br />
              No money. Just skills. Learn locally or online.
            </p>
          </div>

          <div className="flex-1 p-8 md:p-12 flex items-center justify-center">
            <div className="w-full max-w-md">
              <h2 className="text-2xl font-semibold text-center mb-6">
                Create Your Account
              </h2>
              {error && <p className="text-red-500 text-center mb-4">{error}</p>}
              {success && <p className="text-green-500 text-center mb-4">{success}</p>}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="skillWant"
                  placeholder="Skill You Want"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.skillWant}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="skillOffer"
                  placeholder="Skill You Offer"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.skillOffer}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium"
                >
                  Sign Up
                </button>
              </form>
              <p className="text-center text-sm mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 text-md font-bold">
                  Log In
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

export default Signup;
