import React, { useState } from "react";
import { createProduct } from "../../axios/productAxios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

const CreateProduct = () => {
  const [form, setForm] = useState({
    name: "",
    price: 0,
    stock: 0,
    description: "",
  });

  const [image, setImage] = useState(null);

  const navigation = useNavigate();

  const submitHandler = () => {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('name', form.name);
    formData.append('price', form.price);
    formData.append('stock', form.stock);
    formData.append('description', form.description);
    createProduct(formData)
    navigation("/products");
  };

  return (
    <>
      <div className="container-fluid content">
        <div className="row ">
          <Navbar></Navbar>
          <div className="col m-5">
            <div className="text-center py-3 mb-5">
              <h2 className="fw-bold">Create Form</h2>
              <small>Product</small>
            </div>

            <div className="col-6 offset-md-3 bg-white shadow-sm rounded-4">
              <div className="mb-3 mx-5 pt-3">
                <label className="mb-2 fw-bold">Name </label>
                <input onChange={(e) => setForm({ ...form, name: e.target.value })} type="text" className="form-control" autofocus></input>
              </div>

              <div class="mb-3 mx-5">
                <label for="formFile " class="form-label mb-2 fw-bold">
                  Image
                </label>
                <input onChange={(e) => setImage(e.target.files[0])} class="form-control" type="file" id="formFile"></input>
              </div>

              <div className="mb-3 mx-5">
                <label className="mb-2 fw-bold">Price </label>
                <input onChange={(e) => setForm({ ...form, price: e.target.value })} type="number" className="form-control" autofocus></input>
              </div>
              <div className="mb-3 mx-5">
                <label className="mb-2 fw-bold">Stock </label>
                <input onChange={(e) => setForm({ ...form, stock: e.target.value })} type="number" className="form-control" autofocus></input>
              </div>
              <div className="mb-3 mx-5">
                <label className="mb-2 fw-bold">Description </label>
                <input onChange={(e) => setForm({ ...form, description: e.target.value })} type="text" className="form-control" autofocus></input>
              </div>
              <div className="col mx-5 py-3">
                <button onClick={() => submitHandler()} className="btn btn-block btn-primary w-100">
                  {" "}
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
