import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCategories, createCategory } from "../../axios/categoryAxios";
import LoadData from "../../helpers/LoadData";
import Navbar from "../Navbar";

const Category = () => {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate;

  useEffect(() => {
    getCategories((result) => setCategories(result));
  }, []);

  const deleteHandler = (id) => {
    createCategory(id);
    navigate("/categoriess");
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
              <div class="col fs-3 ms-2 mb-3">Category</div>
              <div class="col text-end">
                <Link to="#" className="btn btn-primary me-2 mb-3">
                  +Category
                </Link>
              </div>
            </div>
            <table class="table bg-white shadow-sm rounded-4">
              <thead>
                <tr className="text-center">
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                </tr>
              </thead>
              <tbody>
                {categories.length > 0 ? (
                  categories.map((Category, index) => {
                    const { id, name } = Category;
                    return (
                      <tr key={id} className="text-center">
                        <td>{index + 1}</td>
                        <td>{name}</td>

                        <td>
                          <Link to={`/categoriess/edit/${id}`} className="btn btn-sm btn-info me-2">
                            Edit
                          </Link>
                          <button onClick={() => deleteHandler(+id)} className="btn btn-sm btn-danger">
                            Delete
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

export default Category;
