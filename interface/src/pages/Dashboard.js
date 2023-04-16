import React from "react";
import { Link } from "react-router-dom";
import { FiUsers, FiMoreVertical, FiGrid, FiBox, FiTrendingUp } from "react-icons/fi";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Navbar></Navbar>
          <div className="col m-5">
            <div className="text-start py-3 mb-5">
              <h1>Good Morning,</h1>
              <small>welcome to dashboard</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
