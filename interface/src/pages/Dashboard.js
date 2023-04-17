import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMoreVertical, FiTrendingUp } from "react-icons/fi";
import { BsBox, BsPeople, BsCardChecklist } from "react-icons/bs";
import Navbar from "./Navbar";
import { getProduct } from "../axios/productAxios";
import { getCategories } from "../axios/categoryAxios";
import { getUsers } from "../axios/userAxios";

const Dashboard = () => {
  const [product, setProduct] = useState([], 0);
  const [user, setUser] = useState([], 0);
  const [category, setCategory] = useState([], 0);

  useEffect(() => {
    getProduct((result) => setProduct(result));
    getCategories((result) => setCategory(result));
    getUsers((result) => setUser(result));
  }, []);

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
                  <p className="fs-4 ms-2 lh-sm fw-semibold">{product.length}</p>
                  <p className="lh-sm mb-3 ms-2">Total Product</p>
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
                  <p className="fs-4 ms-2 lh-sm fw-semibold">{category.length}</p>
                  <p className="lh-sm mb-3 ms-2">Total Category</p>
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
                  <p className="fs-4 ms-2 lh-sm fw-semibold">{user.length}</p>
                  <p className="lh-sm mb-3 ms-2">Total User</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8 m-2 py-3 shadow-sm rounded-5 bg-white">
                <h2 className="ms-2">Quick Access</h2>
                <div className="row">
                  <div className="col-2 m-4 p-3 rounded-3  border border-light-subtle text-center">
                    <Link to="/products/create" title="add product">
                      <BsBox className="fs-2"></BsBox> <small>+Product</small>
                    </Link>
                  </div>
                  <div className="col-2 m-4 p-3 rounded-3  border border-light-subtle text-center">
                    <Link to="/category/create" title="add category">
                      <BsCardChecklist className="fs-2"></BsCardChecklist> <small>+Category</small>
                    </Link>
                  </div>
                  <div className="col-2 m-4 p-3 rounded-3  border border-light-subtle text-center">
                    <Link to="/users/create" title="add user">
                      <BsPeople className="fs-2"></BsPeople> <small>+User</small>
                    </Link>
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
