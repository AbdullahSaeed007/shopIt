import React from "react";

function FooterCust() {
  return (
    <React.Fragment>
      <>
        <div className="footer_section layout_padding">
          <div className="container">
            <div className="footer_logo">
              <b>
                <h1 class="text-white bg-dark">ChemiXpress</h1>
              </b>
              {/* <a href="index.html">
                <img src="images/footer-logo.png" />
              </a> */}
            </div>
            <div className="input_bt">
              <input
                type="text"
                className="mail_bt"
                placeholder="Your Email"
                name="Your Email"
              />
              <span className="subscribe_bt" id="basic-addon2">
                <a href="#">Subscribe</a>
              </span>
            </div>
            <div className="footer_menu">
              <ul>
                <li>
                  <a href="#">Best Sellers</a>
                </li>
                <li>
                  <a href="#">Gift Ideas</a>
                </li>
                <li>
                  <a href="#">New Releases</a>
                </li>
                <li>
                  <a href="#">Today's Deals</a>
                </li>
                <li>
                  <a href="#">Customer Service</a>
                </li>
              </ul>
            </div>
            <div className="location_main">
              Help Line Number : <a href="#">+1 1800 1200 1200</a>
            </div>
          </div>
        </div>
      </>
    </React.Fragment>
  );
}
export default FooterCust;
