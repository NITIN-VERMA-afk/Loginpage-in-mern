import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import Profile from "./Profile";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/register", { name, email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Already registered") {
          alert("E-mail already registered! Please Login to proceed.");
          navigate("/login");
        } else {
          alert("Registered successfully! Please Login to proceed.");
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div>
        <div
          className="d-flex justify-content-center align-items-center text-center vh-100"
          style={{
            backgroundImage:
              "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))",
          }}
        >
          <div className="bg-white-500 p-3 rounded">
            <h2 className="mb-3 mr-12 text-2xl ">Register</h2>
            {/* profile  */}
            <div className="flex justify-center rounded-full mb-3">
              <Profile />
            </div>

            <form handleSubmit={handleSubmit}>
              <div className="mb-3 flex justify-center items-center gap-4">
                <label htmlFor="emil">Enter your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="appearance-none border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                  id="email"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-center gap-5 flex-wrap">
                <div className="mb-3 flex justify-center items-center gap-4">
                  <label htmlFor="username">Enter your username</label>
                  <input
                    type="text"
                    placeholder="Enter your usename"
                    className="appearance-none border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3 flex justify-center items-center gap-4">
                  <label className="" htmlFor="username">
                    Confirm your username
                  </label>
                  <input
                    type="text"
                    placeholder="Confirm your username"
                    className="appearance-none border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex justify-center flex-wrap gap-5">
                <div className="mb-3 flex justify-center items-center gap-4">
                  <label htmlFor="emil">Enter your email</label>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="appearance-none border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3 flex justify-center items-center gap-6">
                  <label className="" htmlFor="emil">
                    Confirm your email
                  </label>
                  <input
                    type="email"
                    placeholder="Confirm your email address Email"
                    className="appearance-none border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 "
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center flex-wrap gap-5">
                <div className="mb-3 flex justify-center items-center gap-3">
                  <label htmlFor="emil">Enter your password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="appearance-none border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3 flex justify-center items-center gap-4">
                  <label htmlFor="emil">Confirm your password</label>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="appearance-none border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <input type="checkbox" name="" id="" />
                <p>
                  By ticking,you are confirm that you have read,understand agree
                  to our <Link>terms and conditions </Link>
                </p>
              </div>

              <button
                type="submit"
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Register
              </button>
            </form>
            <div className="flex justify-center">
              <p>Already have an account?</p>
              <Link to="/login">Login</Link>
            </div>
            <p>or</p>
            <div className="flex justify-center gap-2">
              <div>
                <ul className="flex space-x-4 mt-1 gap-2">
                  <li>
                    <FaGoogle />
                  </li>
                  <li>
                    <FaFacebook />
                  </li>
                  <li>
                    <FaApple />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
