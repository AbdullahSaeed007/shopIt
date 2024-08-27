import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function OrderForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [txtquantity, setQuantity] = useState("");
  const [txtname1, setName] = useState("");
  const [txtname2, setdescription] = useState("");
  const [txtaddress, setAddress] = useState("");
  const [txtnumber, setNumber] = useState("");
  const [txtemail, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const uploadOrder = async () => {
    const formData = new FormData();
    formData.append("quantity", txtquantity);
    formData.append("first_name", txtname1);
    formData.append("last_name", txtname2);
    formData.append("home_address", txtaddress);
    formData.append("contact_number", txtnumber);
    formData.append("email", txtemail);
    formData.append("orderedProduct", id);
    const responce = await axios.post(
      "http://127.0.0.1:8000/api/orders",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    if (responce) {
      console.log(responce);
      setMessage(responce.message); //"message": "Product successfully created."
      setTimeout(() => {
        navigate("/productlist");
      }, 2000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadOrder();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mt-4">
          <h5 className="mb-2">Place Order for Product id: {id}</h5>
          <h6 className="mb-2">We Will Contact You Soon:)</h6>
          <h7 className="mb-2">
            Provide Us the information Below to Get Your Order:)
          </h7>
          <p className="text-warning">{message}</p>

          <div className="mb-3 row">
            <label className="col-sm-3">Set order Quantity/Pack:</label>
            <div className="col-sm-2">
              <input
                type="number"
                className="form-control"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3 row">
              <label className="col-sm-3">First Name</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-3">Last Name</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setdescription(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-3">Home Address</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-3">Contact Number</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-3">Email</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-3"></label>
              <div className="col-sm-9">
                <button type="submit" className="btn btn-success">
                  Place Order
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OrderForm;
