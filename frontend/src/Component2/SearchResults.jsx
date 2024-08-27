import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SearchResults = ({ searchTerm }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/search/${searchTerm}`
        );
        setResults(response.data);
      } catch (error) {
        console.error("Error occurred while fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [searchTerm]);
  return (
    <React.Fragment>
      <>
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
                      {results.map((result, index) => (
                        <div className="col-lg-4 col-sm-4">
                          <div className="box_main">
                            <tr key={index}>
                              <td>{index + 1} </td>
                              <h4 className="shirt_text">{result.name}</h4>
                              <p className="price_text">
                                <span style={{ color: "#262626" }}>
                                  {" "}
                                  {result.formula}
                                </span>
                              </p>
                              <div className="electronic_img">
                                <img
                                  src={`http://127.0.0.1:8000/storage/${result.image}`}
                                  alt=""
                                />
                              </div>

                              <div className="btn_main">
                                <div className="buy_bt">
                                  <Link
                                    to={`/detailProduct/${result.id}`}
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
            </div>
          </div>
        </div>
      </>
    </React.Fragment>
  );
};

export default SearchResults;
