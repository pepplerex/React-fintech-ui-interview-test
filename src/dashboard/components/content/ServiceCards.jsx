import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ServiceCards = () => {
  const navigate = useNavigate();
  return (
    <div className="service-container" data-aos="fade-up">
      <h6 className="mb-4">Available services 🚀</h6>

      <div className="row">
        <div className="service-card col-6 col-md-4">
          <div
            className="card shadow-sm border-2 text-center"
            data-bs-toggle="offcanvas"
            data-bs-target="#airtimePurchase"
            aria-controls="airtimePurchase"
          >
            <div className="card-body">
              <i className="fa-solid fa-phone"></i>
              <h6>Airtime</h6>
            </div>
          </div>
        </div>

        <div className="service-card col-6 col-md-4">
          <div
            className="card shadow-sm border-2 text-center"
            data-bs-toggle="offcanvas"
            data-bs-target="#dataPurchase"
            aria-controls="dataPurchase"
          >
            <div className="card-body">
              <i className="fa-solid fa-wifi"></i>
              <h6>Buy data</h6>
            </div>
          </div>
        </div>

        <div className="service-card col-6 col-md-4">
          <div className="card shadow-sm border-2 text-center">
            <div className="card-body">
              <i className="fa-solid fa-tv"></i>
              <h6>Cable TV</h6>
            </div>
          </div>
        </div>

        <div className="service-card col-6 col-md-4">
          <div className="card shadow-sm border-2 text-center">
            <div className="card-body">
              <i className="fa-solid fa-lightbulb"></i>
              <h6>Utility Bill</h6>
            </div>
          </div>
        </div>
        
        <div className="service-card col-6 col-md-4">
          <div className="card shadow-sm border-2 shadow-sm text-center">
            <div className="card-body">
              <i className="fa-solid fa-ellipsis"></i>
              <h6>More</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
