import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUsers, removeUser } from "../../axios/userAxios";
import LoadData from "../../helpers/LoadData";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import { FaTimes, FaEdit } from "react-icons/fa";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers((result) => setUsers(result));
  }, []);

  const navigation = useNavigate();
  const deleteHandler = (id) => {
    removeUser(id);
    navigation("/users");
  };

  return (
    <>
      <div className="container-fluid content">
        <div className="row">
          <Navbar></Navbar>
          <div className="col-8 m-5">
            <div className="text-start py-3 mb-5">
              <h1>Good Morning,</h1>
              <small>welcome to dashboard</small>
            </div>

            <div class="row justify-content-between">
              <div class="col fs-3 ms-2 mb-3">User</div>
              <div class="col text-end">
                <Link to="/users/create" className="btn btn-primary me-2 mb-3">
                  +User
                </Link>
              </div>
            </div>
            <table class="table bg-white shadow-sm rounded-4">
              <thead>
                <tr className="text-center">
                  <th scope="col">#</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((User, index) => {
                    const { id, username, email, password } = User;
                    return (
                      <tr key={id} className="text-center">
                        <td>{index + 1}</td>
                        <td>{username}</td>
                        <td>{email}</td>
                        <td>{password}</td>

                        <td>
                          <Link to={`/users/edit/${id}`} className="btn btn-sm btn-success me-2" title="edit">
                            <FaEdit></FaEdit>
                          </Link>
                          <button onClick={() => deleteHandler(+id)} className="btn btn-sm btn-danger" title="delete">
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

export default User;
