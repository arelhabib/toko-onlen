import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getProduct, removeProduct } from "../../axios/productAxios";
import LoadData from "../../helpers/LoadData";
import Navbar from "../Navbar";
import { FaTimes, FaEdit } from "react-icons/fa";

const Product = () => {
  const [products, setProducts] = useState([]);

  const navigation = useNavigate();
  const deleteHandler = (id) => {
    removeProduct(id);
    navigation("/products");
  };

  useEffect(() => {
    getProduct((result) => setProducts(result));
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

            <div class="row justify-content-between">
              <div class="col fs-3 ms-2 mb-3">Product</div>
              <div class="col text-end">
                <Link to="/products/create" className="btn btn-primary me-2 mb-3">
                  +Product
                </Link>
              </div>
            </div>
            <table class="table bg-white shadow-sm rounded-4">
              <thead>
                <tr className="text-center">
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 ? (
                  products.map((Product, index) => {
                    const { id, name, price, stock, imageData } = Product;
                    let imageBase64 = null;
                    try {
                      imageBase64 = btoa(String.fromCharCode(...new Uint8Array(imageData.data)));
                    } catch (error) { }
                    return (
                      <tr key={id} className="text-center">
                        <td>{index + 1}</td>
                        <td>
                          <div class="row">
                            <div class="col-2">
                              <img class="img-fluid rounded-circle" src={imageData ? "data:image/png;base64," + imageBase64 : "https://via.placeholder.com/200"} alt="" width="70px" />
                            </div>
                            <div class="col-10">{name}</div>
                          </div>
                        </td>
                        <td>Rp. {price.toLocaleString('id')}</td>
                        <td>{stock}</td>
                        <td>
                          <Link to={`/products/edit/${id}`} className="btn btn-sm btn-success me-2" title="Edit">
                            <FaEdit></FaEdit>
                          </Link>
                          <button onClick={() => deleteHandler(+id)} className="btn btn-sm btn-danger" title="Delete">
                            {" "}
                            <FaTimes></FaTimes>
                          </button>
                        </td>
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
