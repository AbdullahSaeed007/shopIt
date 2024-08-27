import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function Header() {
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    getProductCount();
  }, []);

  const getProductCount = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/ordersCount");
      const { count } = response.data;
      setProductCount(count);
    } catch (error) {
      console.error("Error occurred while fetching product count:", error);
    }
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            ChemiXpress
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/productlist" className="nav-link">
                  {" "}
                  Product List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/addproduct" className="nav-link">
                  Add Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/orders" className="nav-link">
                  Check Orders ({productCount})
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
export default Header;
