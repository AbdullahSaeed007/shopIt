import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Addproduct() {
  const navigate = useNavigate();

  const [txtname, setName] = useState("");
  const [txtdescription, setdescription] = useState("");
  const [fileimage, setPhoto] = useState("");
  const [message, setMessage] = useState("");
  const [txtcompany, setComp] = useState("");
  const [txtformula, setFormula] = useState("");
  const [txtexpiryDate, setExpiry] = useState("");
  const [txtquantity, setQuantity] = useState("");
  const [txtmedType, setmedtype] = useState("");
  const [txtstorageConditions, setstorage] = useState("");
  const [txtprice, setprice] = useState("");
  const [txtprecautions, setprecaution] = useState("");

  const uploadProduct = async () => {
    console.log(fileimage);
    const formData = new FormData();
    formData.append("name", txtname);
    formData.append("description", txtdescription);
    formData.append("image", fileimage);
    formData.append("company", txtcompany);
    formData.append("formula", txtformula);
    formData.append("expiryDate", txtexpiryDate);
    formData.append("quantity", txtquantity);
    formData.append("medType", txtmedType);
    formData.append("storageConditions", txtstorageConditions);
    formData.append("price", txtprice);
    formData.append("precautions", txtprecautions);
    const responce = await axios.post(
      "http://127.0.0.1:8000/api/products",
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
    await uploadProduct();
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-4">
            <h5 className="mb-4">Add Product </h5>
            <p className="text-warning">{message}</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3 row">
                <label className="col-sm-3">Product Title </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3">Description </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setdescription(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3">Company Name: </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setComp(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3">Medicine Formula: </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setFormula(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3">Set Expiry </label>
                <div className="col-sm-9">
                  <input
                    type="date"
                    className="form-control"
                    onChange={(e) => setExpiry(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3">Set the Amount/Quantity </label>
                <div className="col-sm-9">
                  <input
                    type="number"
                    className="form-control"
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3">Medicine Type: </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setmedtype(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3">Storage Conditions: </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setstorage(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3">Set price: </label>
                <div className="col-sm-9">
                  <input
                    type="number"
                    className="form-control"
                    onChange={(e) => setprice(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-3">Set Precautions: </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setprecaution(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3">Product Image</label>
                <div className="col-sm-9">
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setPhoto(e.target.files[0])}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3"></label>
                <div className="col-sm-9">
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Addproduct;
