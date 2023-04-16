import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Dashboard, Product, User, Category } from "../pages";

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>

        {/* Product */}
        <Route path="/products" element={<Product></Product>}></Route>

        {/* User */}
        <Route path="/users" element={<User></User>}></Route>

        {/*  */}
        <Route path="/categories" element={<Category></Category>}></Route>
      </Routes>
    </div>
  );
};

export default Content;
