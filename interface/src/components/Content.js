import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Dashboard, Product, User, Category, CreateCategory, EditCategory } from "../pages";

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>

        {/* Product */}
        <Route path="products" element={<Product></Product>}></Route>

        {/* User */}
        <Route path="users" element={<User></User>}></Route>

        <Route path="category" element={<Category></Category>}></Route>
        <Route path="category/create" element={<CreateCategory></CreateCategory>}></Route>
        <Route path="category/edit">
          <Route path=":id" element={<EditCategory></EditCategory>}></Route>
        </Route>

        <Route path="add" element={<add></add>}></Route>
      </Routes>
    </div>
  );
};

export default Content;
