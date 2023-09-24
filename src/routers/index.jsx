// import React from 'react'
import { Route, Routes } from "react-router-dom";

import LoginPage from "../components/pages/login-page";
import HomePage from "../components/pages/home-page";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
