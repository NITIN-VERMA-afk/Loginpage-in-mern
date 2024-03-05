import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          console.log("Login Success");
          alert("Login successful!");
          navigate("/home");
        } else {
          alert("Incorrect password! Please try again.");
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
            <h1 className="mb-3 font-bold text-2xl">Login</h1>

            <form handleSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="mr-6" htmlFor="emil">Enter your email :-</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="appearance-none border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500 "
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password">Enter your password:-</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="appearance-none border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                  id="email"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="Submit" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Log in
              </button>
            </form>
            <div className="flex justify-center">
              <p>Don&apos;t have an account?</p>
              <Link to="/register">Register</Link>
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
                    <FaApple />{" "}
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

export default Login;
