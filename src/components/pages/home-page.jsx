// import React from 'react'
import { Link } from "react-router-dom";
import HeaderFooter, { Footer } from "../header-footer";

const HomePage = () => {
  return (
    <div className="font-titillium">
      <HeaderFooter />
      {/* Hero section */}
      <div className="flex flex-col justify-center items-center gap-5 h-[100vh]">
        <h1 className="font-bold text-3xl text-white">HERO SECTION</h1>
        <Link to={"/login"}>
          <button className="py-2 px-4 rounded-lg bg-blue-500 text-white font-semibold">
            Logout
          </button>
        </Link>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
