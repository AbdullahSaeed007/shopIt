import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../Component/Header";
import Home from "../Component/Home";
import Addproduct from "../Component/Addproduct";
import Productlist from "../Component/Productlist";
import Orders from "../Component/Orders";
import EditProduct from "../Component/EditProduct";
import Footer from "../Component/Footer";

function AdminPage() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addproduct" element={<Addproduct />} />
        <Route exact path="/productlist" element={<Productlist />} />
        <Route path="/editproduct/:id/edit" element={<EditProduct />} />
        <Route exact path="/orders" element={<Orders />} />
        {/* <Route exact path="/orderForm" element={<OrderForm />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default AdminPage;
