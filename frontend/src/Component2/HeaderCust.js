import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function HeaderCust() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = () => {
      fetch("http://127.0.0.1:8000/api/products")
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          console.log(response.products);
          setProduct(response.products);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getProduct();
  }, []);

  return (
    <React.Fragment>
      <>
        {/* banner bg main end */}
        {/* electronic section start */}
        <div className="fashion_section">
          <div
            id="electronic_main_slider"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <h1 className="fashion_taital">Chemistry in Motion:)</h1>
                  <div className="fashion_section_2">
                    <div className="row">
                      {product.slice(0, 6).map((pdata, index) => (
                        <div className="col-lg-4 col-sm-4">
                          <div className="box_main">
                            <tr key={index}>
                              <td>{index + 1} </td>
                              <h4 className="shirt_text">{pdata.name}</h4>
                              <p className="price_text">
                                <span style={{ color: "#262626" }}>
                                  {" "}
                                  {pdata.formula}
                                </span>
                              </p>
                              <div className="electronic_img">
                                <img
                                  src={`http://127.0.0.1:8000/storage/${pdata.image}`}
                                  alt=""
                                />
                              </div>

                              <div className="btn_main">
                                <div className="buy_bt">
                                  <Link
                                    to={`/detailProduct/${pdata.id}`}
                                    className="btn btn-success mx-2"
                                  >
                                    Details
                                  </Link>
                                </div>
                              </div>
                            </tr>
                          </div>
                        </div>
                      ))}
                      {/* <div className="col-lg-4 col-sm-4">
                        <div className="box_main">
                          <h4 className="shirt_text">Mobile</h4>
                          <p className="price_text">
                            Start Price{" "}
                            <span style={{ color: "#262626" }}>$ 100</span>
                          </p>
                          <div className="electronic_img">
                            <img src="images/mobile-img.png" />
                          </div>
                          <div className="btn_main">
                            <div className="buy_bt">
                              <a href="#">Buy Now</a>
                            </div>
                            <div className="seemore_bt">
                              <a href="#">See More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-4">
                        <div className="box_main">
                          <h4 className="shirt_text">Computers</h4>
                          <p className="price_text">
                            Start Price{" "}
                            <span style={{ color: "#262626" }}>$ 100</span>
                          </p>
                          <div className="electronic_img">
                            <img src="images/computer-img.png" />
                          </div>
                          <div className="btn_main">
                            <div className="buy_bt">
                              <a href="#">Buy Now</a>
                            </div>
                            <div className="seemore_bt">
                              <a href="#">See More</a>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <h1 className="fashion_taital">Electronic</h1>
                  <div className="fashion_section_2">
                    <div className="row">
                      <div className="col-lg-4 col-sm-4">
                        <div className="box_main">
                          <h4 className="shirt_text">Laptop</h4>
                          <p className="price_text">
                            Start Price{" "}
                            <span style={{ color: "#262626" }}>$ 100</span>
                          </p>
                          <div className="electronic_img">
                            <img src="images/laptop-img.png" />
                          </div>
                          <div className="btn_main">
                            <div className="buy_bt">
                              <a href="#">Buy Now</a>
                            </div>
                            <div className="seemore_bt">
                              <a href="#">See More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-4">
                        <div className="box_main">
                          <h4 className="shirt_text">Mobile</h4>
                          <p className="price_text">
                            Start Price{" "}
                            <span style={{ color: "#262626" }}>$ 100</span>
                          </p>
                          <div className="electronic_img">
                            <img src="images/mobile-img.png" />
                          </div>
                          <div className="btn_main">
                            <div className="buy_bt">
                              <a href="#">Buy Now</a>
                            </div>
                            <div className="seemore_bt">
                              <a href="#">See More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-4">
                        <div className="box_main">
                          <h4 className="shirt_text">Computers</h4>
                          <p className="price_text">
                            Start Price{" "}
                            <span style={{ color: "#262626" }}>$ 100</span>
                          </p>
                          <div className="electronic_img">
                            <img src="images/computer-img.png" />
                          </div>
                          <div className="btn_main">
                            <div className="buy_bt">
                              <a href="#">Buy Now</a>
                            </div>
                            <div className="seemore_bt">
                              <a href="#">See More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <h1 className="fashion_taital">Electronic</h1>
                  <div className="fashion_section_2">
                    <div className="row">
                      <div className="col-lg-4 col-sm-4">
                        <div className="box_main">
                          <h4 className="shirt_text">Laptop</h4>
                          <p className="price_text">
                            Start Price{" "}
                            <span style={{ color: "#262626" }}>$ 100</span>
                          </p>
                          <div className="electronic_img">
                            <img src="images/laptop-img.png" />
                          </div>
                          <div className="btn_main">
                            <div className="buy_bt">
                              <a href="#">Buy Now</a>
                            </div>
                            <div className="seemore_bt">
                              <a href="#">See More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-4">
                        <div className="box_main">
                          <h4 className="shirt_text">Mobile</h4>
                          <p className="price_text">
                            Start Price{" "}
                            <span style={{ color: "#262626" }}>$ 100</span>
                          </p>
                          <div className="electronic_img">
                            <img src="images/mobile-img.png" />
                          </div>
                          <div className="btn_main">
                            <div className="buy_bt">
                              <a href="#">Buy Now</a>
                            </div>
                            <div className="seemore_bt">
                              <a href="#">See More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-4">
                        <div className="box_main">
                          <h4 className="shirt_text">Computers</h4>
                          <p className="price_text">
                            Start Price{" "}
                            <span style={{ color: "#262626" }}>$ 100</span>
                          </p>
                          <div className="electronic_img">
                            <img src="images/computer-img.png" />
                          </div>
                          <div className="btn_main">
                            <div className="buy_bt">
                              <a href="#">Buy Now</a>
                            </div>
                            <div className="seemore_bt">
                              <a href="#">See More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#electronic_main_slider"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-angle-left" />
            </a>
            <a
              className="carousel-control-next"
              href="#electronic_main_slider"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-angle-right" />
            </a>
          </div>
        </div>
      </>
    </React.Fragment>
  );
}
export default HeaderCust;
