// import React from 'react'
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="font-bold text-3xl">Login Page</h1>
      <Link to={"/"}>
        <button className="py-2 px-4 rounded-lg bg-blue-500 text-white font-semibold">
          Login
        </button>
      </Link>
    </div>
  );
};

export default LoginPage;
