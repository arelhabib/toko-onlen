import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, Dashboard, Product, CreateProduct, User, CreateUser, EditUser, Category, CreateCategory, EditCategory, EditProduct } from "../pages";
import jwt_decode from "jwt-decode";

const Content = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("access_token");
    if (token) {
      let decoded = jwt_decode(token);
      if (decoded.roleId === 1) {
        setIsAdmin(true);
      }
    } else {
      setIsAdmin(false);
    }
  }, [isAdmin]);

  return (
    <div>
      <Routes>
        {/* <Route path="*"/> buat redirect kalo ganemu route yang udah ada */}
        {/* tapi ternyata ngerubah biar gabisa akses via url */}
        {!isAdmin ? (
          <>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="" element={<Home></Home>}></Route>
            <Route path="/register" element={<CreateUser></CreateUser>}></Route>
          </>
        ) : (
          <>
            <Route path="" element={<Home></Home>}></Route>
            <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>

            {/* Product */}
            <Route path="products" element={<Product></Product>}></Route>
            <Route path="products/create" element={<CreateProduct></CreateProduct>}></Route>
            <Route path="products/edit">
              <Route path=":id" element={<EditProduct></EditProduct>}></Route>
            </Route>

            {/* User */}
            <Route path="users" element={<User></User>}></Route>
            <Route path="users/create" element={<CreateUser></CreateUser>}></Route>
            <Route path="users/edit">
              <Route path=":id" element={<EditUser></EditUser>}></Route>
            </Route>

            <Route path="category" element={<Category></Category>}></Route>
            <Route path="category/create" element={<CreateCategory></CreateCategory>}></Route>
            <Route path="category/edit">
              <Route path=":id" element={<EditCategory></EditCategory>}></Route>
            </Route>
          </>
        )}
      </Routes>
    </div>
  );
};

export default Content;
