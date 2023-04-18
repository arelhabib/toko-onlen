import React, { useState, useEffect } from "react";
import { accountCategory, editCategory } from "../../axios/categoryAxios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";

const EditCategory = () => {
  const [form, setForm] = useState({
    name: "",
  });

  const navigation = useNavigate();
  const params = useParams();

  const getCategoryInfo = () => {
    const { id } = params;
    accountCategory(+id, (result) => {
      setForm({
        name: result.name,
      });
      console.log(result);
    });
  };

  useEffect(() => {
    getCategoryInfo();
  }, []);

  const submitHandler = () => {
    editCategory(+params.id, form);
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
                <label className="fw-bold mb-2">Name</label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} type="text" className="form-control"></input>
              </div>
              <div className="col  py-3 mx-5">
                <button onClick={() => submitHandler()} className="btn btn-block btn-primary w-100">
                  {" "}
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCategory;
