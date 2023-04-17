import React, { useState, useEffect } from "react";
import { accountUser, editUser } from "../../axios/userAxios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";

const EditUser = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
  });

  const navigation = useNavigate();
  const params = useParams();

  const getUserInfo = () => {
    const { id } = params;
    accountUser(+id, (result) => {
      setForm({
        username: result.username,
        email: result.email,
      });
      console.log(result);
    });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const submitHandler = () => {
    editUser(+params.id, form);
    navigation("/users");
  };

  return (
    <>
      <div className="container-fluid content">
        <div className="row ">
          <Navbar></Navbar>
          <div className="col m-5">
            <div className="text-center py-3 mb-5">
              <h2 className="fw-bold">Edit Form</h2>
              <small>User</small>
            </div>

            <div className="col-6 offset-md-3 bg-white shadow-sm rounded-4">
              <div className="mb-3 mx-5 pt-3">
                <label className="mb-2 fw-bold">Username</label>
                <input value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} type="text" className="form-control"></input>
              </div>
              <div className="mb-3 mx-5">
                <label className="mb-2 fw-bold">Email</label>
                <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" className="form-control"></input>
              </div>
              <div className="col mx-5 py-3">
                <button onClick={() => submitHandler()} className="btn btn-block btn-primary w-100">
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

export default EditUser;
