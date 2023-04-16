import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FiUsers, FiMoreVertical, FiGrid, FiBox, FiTrendingUp } from "react-icons/fi";
import { getData } from "../../axios/productAxios";
import LoadData from "../../helpers/LoadData";
import Navbar from "../Navbar";

const Product = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate;

  useEffect(() => {
    getData((result) => setProducts(result));
  }, []);

  // const deleteHandler = (id) => {
  //   remove(id);
  //   navigate("/users");
  // };

  return (
    <>
      <div className="container-fluid bg-light">
        <div className="row">
          <Navbar></Navbar>
          <div className="col m-5">
            <div className="text-start py-3 mb-5">
              <h1>Good Morning,</h1>
              <small>welcome to dashboard</small>
            </div>

            <div class="row justify-content-between">
              <div class="col fs-3 ms-2 mb-3">Product</div>
              <div class="col text-end">
                <Link to="#" className="btn btn-primary me-2 mb-3">
                  +Product
                </Link>
              </div>
            </div>
            <table class="table bg-white shadow-sm rounded-4">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 ? (
                  products.map((Product) => {
                    const { id, name, price, stock } = Product;
                    return (
                      <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{price}</td>
                        <td>{stock}</td>
                        <td></td>
                      </tr>
                    );
                  })
                ) : (
                  <LoadData></LoadData>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
