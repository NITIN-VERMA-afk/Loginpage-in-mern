import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);
  const Navigate = useNavigate();
  
 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !username || !email || !password || !confirmPassword || !termsAgreed) {
      alert("Please fill in all fields and agree to terms.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    axios
      .post("http://localhost:8000/api/v1/users/register", { name, username, email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Already registered") {
          alert("E-mail already registered! Please Login to proceed.");
          Navigate("/login");
        } else {
          alert("Registered successfully! Please Login to proceed.");
          Navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-start h-auto bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 mt-12">
      <div className="bg-fuchsia-200 p-8 rounded shadow-lg mt-5">
        <h2 className="text-3xl font-semibold mb-6 text-center">Register</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-start mb-2">Name</label>
            <input type="text" id="name" className="w-full border-1 rounded-md py-2 px-3" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-start mb-2">Username</label>
            <input type="text" id="username" className="w-full border rounded-md py-2 px-3" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-start">Email</label>
            <input type="email" id="email" className="w-full border rounded-md py-2 px-3" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-start">Password</label>
            <input type="password" id="password" className="w-full border rounded-md py-2 px-3" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-2 text-start">Confirm Password</label>
            <input type="password" id="confirmPassword" className="w-full border rounded-md py-2 px-3" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="termsAgreed" className="mr-2 text-start" checked={termsAgreed} onChange={(e) => setTermsAgreed(e.target.checked)} required />
            <label htmlFor="termsAgreed">I agree to the <Link to="/terms" className="text-blue-500">terms and conditions</Link>.</label>
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Register</button>
        </form>
        <p className="text-center mt-4">Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
        <div className="flex justify-center mt-4">
          <FaGoogle className="text-3xl mx-2 cursor-pointer" />
          <FaFacebook className="text-3xl mx-2 cursor-pointer" />
          <FaApple className="text-3xl mx-2 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Register;

