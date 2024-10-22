import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light footer pt-5 mt-5">
      <div className="container py-5">
        <div className="row g-5">
          {/* Company Section */}
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
              Company
            </h4>
            <Link className="btn btn-link" to="/about">
              About Us
            </Link>
            <Link className="btn btn-link" to="/contact">
              Contact Us
            </Link>

            <Link className="btn btn-link" to="#">
              Privacy Policy
            </Link>
            <Link className="btn btn-link" to="#">
              Terms & Condition
            </Link>
          </div>

          {/* Contact Section */}
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
              Contact
            </h4>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3"></i>Cagayan de Oro
              Misamis Oriental
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3"></i>+012 345 67890
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3"></i>kusinangbayan@gmail.com
            </p>
            <div className="d-flex pt-2">
              <Link className="btn btn-outline-light btn-social" to="#">
                <i className="fab fa-twitter"></i>
              </Link>
              <a
                className="btn btn-outline-light btn-social"
                href="https://www.facebook.com/profile.php?id=61567247573741&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <Link className="btn btn-outline-light btn-social" to="#">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link className="btn btn-outline-light btn-social" to="#">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>

          {/* Opening Section */}
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
              Opening
            </h4>
            <h5 className="text-light fw-normal">Monday - Saturday</h5>
            <p>09AM - 09PM</p>
            <h5 className="text-light fw-normal">Sunday</h5>
            <p>10AM - 08PM</p>
          </div>

          {/* Newsletter Section */}
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
              Newsletter
            </h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div
              className="position-relative mx-auto"
              style={{ maxWidth: "400px" }}
            >
              <input
                className="form-control border-primary w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <Link className="border-bottom" to="https://www.facebook.com/profile.php?id=61567247573741&mibextid=ZbWKwL">
                Kusina ng Bayan
              </Link>
              , All Right Reserved.
              <br />
              Designed By{" "}
              <Link className="border-bottom" to="/team">
                LunchRoom Bandits BSIT-3R1
              </Link>
              <br />
              <br />
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <Link to="./">Home</Link>
                <Link to="#">Cookies</Link>
                <Link to="#">Help</Link>
                <Link to="#">FAQs</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
