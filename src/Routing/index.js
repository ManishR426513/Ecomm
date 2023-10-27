import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import ProductDetail from "../Components/ProductDetail";
import Login from "../Components/Login";
import NavBar from "../Components/NavBar";
import PageNotFound from "../Components/PageNotFound";
import ProductCart from "../Components/ProductCart";
import Signup from "../Components/Signup";

export default function Routing() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<ProductCart />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}
