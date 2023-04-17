import React, { useState } from "react";
import { addUser } from "../../axios/userAxios";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

const CreateCategory = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "123",
  });

  const navigation = useNavigate();

  const submitHandler = () => {
    addUser(form);
    navigation("/users");
  };

  return (
    <>
      <div className="container-fluid content">
        <div className="row ">
          <Navbar></Navbar>
          <div className="col m-5">
            <div className="text-center py-3 mb-5">
              <h2 className="fw-bold">Create Form</h2>
              <small>user</small>
            </div>

            <div className="col-6 offset-md-3 bg-white shadow-sm rounded-4">
              <div className="mb-3 mx-5 pt-3">
                <label className="mb-2 fw-bold">Username </label>
                <input onChange={(e) => setForm({ ...form, username: e.target.value })} type="text" className="form-control" autofocus></input>
              </div>
              <div className="mb-3 mx-5">
                <label className="mb-2 fw-bold">Email </label>
                <input onChange={(e) => setForm({ ...form, email: e.target.value })} type="text" className="form-control" autofocus></input>
              </div>
              <div className="mb-3 mx-5">
                <label className="mb-2 fw-bold">Password </label>
                <input onChange={(e) => setForm({ ...form, password: e.target.value })} type="password" className="form-control" autofocus></input>
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

export default CreateCategory;
