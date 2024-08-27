import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function DetailProduct1() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [message, setMessage] = useState("");

  const [inputs, setInputs] = useState([]);
  const [fileimage, setPhoto] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const uploadProduct = async () => {
    const formData = new FormData();
    formData.append("_method", "PUT");
    formData.append("name", inputs.name);
    formData.append("description", inputs.description);
    formData.append("image", fileimage);
    const response = await axios.post(
      "http://127.0.0.1:8000/api/productsupdate/" + id,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    setMessage(response.data.message); //"message": "Product successfully updated.."
    console.log(response);
    setTimeout(() => {
      navigate("/productlist");
    }, 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadProduct();
  };

  useEffect(() => {
    getproduct();
  }, []);

  function getproduct() {
    axios
      .get("http://127.0.0.1:8000/api/products/" + id)
      .then(function (response) {
        console.log(response);
        setInputs(response.data.product);
      });
  }

  return (
    <React.Fragment>
      <>
        <div className="main-content app-content">
          {/* container */}
          <div className="main-container container-fluid">
            {/* breadcrumb */}
            <div className="breadcrumb-header justify-content-between">
              <div className="my-auto">
                <div className="d-flex">
                  <h4 className="content-title mb-0 my-auto">Product</h4>
                  <span className="text-muted mt-1 tx-13 ms-2 mb-0">
                    / Product-details
                  </span>
                </div>
              </div>
              <div className="d-flex my-xl-auto right-content">
                <div className="pe-1 mb-xl-0">
                  <button
                    type="button"
                    className="btn btn-info btn-icon me-2 btn-b"
                  >
                    <i className="mdi mdi-filter-variant" />
                  </button>
                </div>
                <div className="pe-1 mb-xl-0">
                  <button
                    type="button"
                    className="btn btn-danger btn-icon me-2"
                  >
                    <i className="mdi mdi-star" />
                  </button>
                </div>
                <div className="pe-1 mb-xl-0">
                  <button
                    type="button"
                    className="btn btn-warning  btn-icon me-2"
                  >
                    <i className="mdi mdi-refresh" />
                  </button>
                </div>
                <div className="mb-xl-0">
                  <div className="btn-group dropdown">
                    <button type="button" className="btn btn-primary">
                      {inputs.created_at}
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                      id="dropdownMenuDate"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="dropdownMenuDate"
                      x-placement="bottom-end"
                    >
                      <a className="dropdown-item" href="javascript:void(0);">
                        2015
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        2016
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        2017
                      </a>
                      <a className="dropdown-item" href="javascript:void(0);">
                        2018
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* breadcrumb */}
            {/* row */}
            <div className="row row-sm">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body h-100">
                    <div className="row row-sm ">
                      <div className=" col-xl-5 col-lg-12 col-md-12">
                        <div className="preview-pic tab-content">
                          <div className="tab-pane active" id="pic-1">
                            <img
                              src={`http://127.0.0.1:8000/storage/${inputs.image}`}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="details col-xl-7 col-lg-12 col-md-12 mt-4 mt-xl-0">
                        <h4 className="product-title mb-1">{inputs.name}</h4>
                        <p className="text-muted tx-13 mb-1">
                          {inputs.company}
                        </p>
                        <div className="rating mb-1">
                          <div className="stars">
                            <strong> Precautions:</strong> {inputs.precautions}
                          </div>
                          <span className="review-no">
                            DrugType: {inputs.medType}
                          </span>
                        </div>
                        <h6 className="price">
                          current price:{" "}
                          <span className="h3 ms-2">{inputs.price} /Rs</span>
                        </h6>
                        <p className="product-description">
                          <strong> Description: </strong>
                          {inputs.description}
                        </p>
                        <p className="vote">
                          <strong>ExpiryDate: </strong> {inputs.expiryDate}{" "}
                          <strong>
                            {" "}
                            <br />
                            Quantity Available: {inputs.quantity}
                          </strong>
                        </p>

                        <div className="action">
                          <Link
                            to={`/orderForm/${inputs.id}`}
                            className="btn btn-success mx-2"
                          >
                            <button
                              className="add-to-cart btn btn-success"
                              type="button"
                            >
                              Proceed to Checkout
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* /row */}
            {/* row */}
            <div className="row row-sm">
              <div className="col-md-12 col-xl-4 col-xs-12 col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <div className="feature2">
                      <i className="mdi mdi-airplane-takeoff bg-purple ht-50 wd-50 text-center brround text-white" />
                    </div>
                    <h5 className="mb-2 tx-16">Free Shipping</h5>
                    <span className="fs-14 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua domenus orioneu.
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-xl-4 col-xs-12 col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <div className="feature2">
                      <i className="mdi mdi-headset bg-pink  ht-50 wd-50 text-center brround text-white" />
                    </div>
                    <h5 className="mb-2 tx-16">Customer Support</h5>
                    <span className="fs-14 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua domenus orioneu.
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-xl-4 col-xs-12 col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <div className="feature2">
                      <i className="mdi mdi-refresh bg-teal ht-50 wd-50 text-center brround text-white" />
                    </div>
                    <div className="icon-return" />
                    <h5 className="mb-2  tx-16">30 days money back</h5>
                    <span className="fs-14 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua domenus orioneu.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* row closed */}
          </div>
        </div>
        {/* Container closed */}
        {/* main-content closed */}
      </>
    </React.Fragment>
  );
}
export default DetailProduct1;
