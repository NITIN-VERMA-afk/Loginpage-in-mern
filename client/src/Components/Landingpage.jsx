import React from "react";
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <div>
      <h1 className="text-3xl">ADVISOROPEDIA ASSIGNMENT</h1>
      <div className="flex gap-3 justify-center">
        <button className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
          {" "}
          <Link to="/login">login page </Link>{" "}
        </button>
        <button className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
          {" "}
          <Link to="/post" >Post</Link>
        </button>
      </div>
    </div>
  );
};

export default Landingpage;
