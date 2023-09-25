// import React from 'react'
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 h-screen">
      <h1 className="font-bold text-3xl text-white">Login Page</h1>
      <Link to={"/"}>
        <button className="py-2 px-4 rounded-lg bg-slate-700 text-white font-semibold hover:bg-blue-500">
          Login
        </button>
      </Link>
    </div>
  );
};

export default LoginPage;
