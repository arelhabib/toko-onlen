import React, { useState } from "react";
import { addCategory } from "../../axios/categoryAxios";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../Navbar";

const CreateCategory = () => {
  const [form, setForm] = useState({
    name: "",
  });

  const navigation = useNavigate();

  const submitHandler = () => {
    addCategory(form);
    navigation("/category");
  };

  return (
    <>
      <div className="container-fluid content">
        <div className="row ">
          <Navbar></Navbar>
          <div className="col m-5">
            <div className="text-center py-3 mb-5">
              <h2 className="fw-bold">Edit Form</h2>
              <small>category</small>
            </div>

            <div className="col-6 offset-md-3 bg-white shadow-sm rounded-4">
              <div className="mb-2 m-5 pt-3">
                <label>Name: </label>
                <input onChange={(e) => setForm({ ...form, name: e.target.value })} type="text" className="form-control" autofocus></input>
              </div>
              <div className="col create-button py-3 ms-5">
                <button onClick={() => submitHandler()} className="btn btn-block btn-primary">
                  {" "}
                  Update
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
