import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Dashboard } from "../pages";

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  );
};

export default Content;
