import React from "react";
import { Link } from "react-router-dom";
import { FiUsers, FiMoreVertical, FiGrid, FiBox, FiTrendingUp } from "react-icons/fi";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="container">
          <div className="row pt-5">
            <div className="mb-3">
              <h1>Good Morning,</h1>
              <small>welcome to dashboard</small>
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
                <p className="fs-4 ms-2 lh-sm fw-semibold">101</p>
                <p className="lh-sm mb- ms-2">Total product</p>
              </div>
            </div>
            <div className="col m-2 me-5 shadow-sm rounded-5 bg-white">
              <div className="d-flex lh-sm">
                <div className="me-auto">
                  <FiTrendingUp className="fs-1 mt-3 ms-2 "></FiTrendingUp>
                </div>
                <div>
                  <FiMoreVertical className="fs-4 mt-3 me-2"></FiMoreVertical>
                </div>
              </div>
              <div>
                <p className="fs-4 ms-2 lh-sm fw-semibold">101</p>
                <p className="lh-sm mb-3 ms-2">Total category</p>
              </div>
            </div>
            <div className="col-4 rounded-5 m-3 sidebar">
              <div className="col mt-4 m-3 ">
                <div className="">
                  <p className="">Hi!, admin</p>
                </div>
              </div>
              <div className="d-block"></div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row p-2 ">
            <div className="col me-5 bg-white rounded-5 mt-3 pt-3">
              <div class="row justify-content-between">
                <div class="col fs-3 ms-2 mb-3">Product</div>
                <div class="col text-end">
                  <Link to="#" className="btn btn-primary me-2 mb-3">
                    +Product
                  </Link>
                </div>
              </div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">image</th>
                    <th scope="col">Price</th>
                    <th scope="col">Stock</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-4 m-2 mt-3 pt-3 rounded-5 sidebar">
              <h4 className="ms-3 mb-3 text-primary fw-semibold">Dashboard</h4>
              <div className="p-2 mt-2 mx-4 bg-white rounded-4 mb-2">
                <Link to="#">
                  <FiBox className="fs-4 me-2"></FiBox> <p className="d-inline fw-semibold">Product</p>
                </Link>
              </div>
              <div className="p-2 mx-4 bg-white rounded-4 mb-2">
                <Link to="#">
                  <FiGrid className="fs-4 me-2"></FiGrid> <p className="d-inline fw-semibold">Category</p>
                </Link>
              </div>
              <div className="p-2 mx-4 bg-white rounded-4">
                <Link to="#">
                  <FiUsers className="fs-4 me-2"></FiUsers> <p className="d-inline fw-semibold">Users</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
