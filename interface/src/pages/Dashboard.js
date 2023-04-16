import React from "react";
import { Link } from "react-router-dom";
import { FiUsers, FiMoreVertical, FiGrid, FiBox, FiTrendingUp } from "react-icons/fi";
import Navbar from "./Navbar";
import { BsBox } from "react-icons/bs";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid content">
        <div className="row">
          <Navbar></Navbar>
          <div className="col m-5">
            <div className="text-start py-3 mb-5">
              <h1>Good Morning,</h1>
              <small>welcome to dashboard</small>
            </div>
            <div className="row">
              <div className="col m-2 shadow-sm rounded-5 bg-white">
                <div className="d-flex lh-sm">
                  <div className="me-auto">
                    <FiTrendingUp className="fs-1 mt-3 ms-2 "></FiTrendingUp>
                  </div>
                  <div className="">
                    <FiMoreVertical className="fs-4 mt-3 me-2"></FiMoreVertical>
                  </div>
                </div>
                <div>
                  <p className="fs-4 ms-2 lh-sm fw-semibold">10</p>
                  <p className="lh-sm mb-3 ms-2">Total user</p>
                </div>
              </div>
              <div className="col m-2 shadow-sm rounded-5 bg-white">
                <div className="d-flex lh-sm">
                  <div className="me-auto">
                    <FiTrendingUp className="fs-1 mt-3 ms-2 "></FiTrendingUp>
                  </div>
                  <div className="">
                    <FiMoreVertical className="fs-4 mt-3 me-2"></FiMoreVertical>
                  </div>
                </div>
                <div>
                  <p className="fs-4 ms-2 lh-sm fw-semibold">10</p>
                  <p className="lh-sm mb-3 ms-2">Total user</p>
                </div>
              </div>
              <div className="col m-2 shadow-sm rounded-5 bg-white">
                <div className="d-flex lh-sm">
                  <div className="me-auto">
                    <FiTrendingUp className="fs-1 mt-3 ms-2 "></FiTrendingUp>
                  </div>
                  <div className="">
                    <FiMoreVertical className="fs-4 mt-3 me-2"></FiMoreVertical>
                  </div>
                </div>
                <div>
                  <p className="fs-4 ms-2 lh-sm fw-semibold">10</p>
                  <p className="lh-sm mb-3 ms-2">Total user</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8 m-2 py-3 shadow-sm rounded-5 bg-white">
                <h2 className="ms-2">Quick Access</h2>
                <div className="row">
                  <div className="col-2 m-4 p-3 rounded-3  border border-light-subtle text-center">
                    <BsBox className="fs-2"></BsBox> +Product
                  </div>
                  <div className="col-2 m-4 p-3 rounded-3  border border-light-subtle text-center">
                    <BsBox className="fs-2"></BsBox> +Product
                  </div>
                  <div className="col-2 m-4 p-3 rounded-3  border border-light-subtle text-center">
                    <BsBox className="fs-2"></BsBox> +Product
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
