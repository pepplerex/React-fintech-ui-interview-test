import React from "react";

const Services = () => {
  return (
    <div className="services-container">
      <div className="service-header">
        <div className="service-header-content">
          <h3>Pay your bills faster ⚡</h3>
        </div>
      </div>

      <div className="service-list">
        <div className="service-item">
          <img src="/assets/img/brands/mtn.png" alt="" />
          <span>MTN Nigeria</span>
        </div>
        <div className="service-item">
          <img src="/assets/img/brands/airtel.png?v=001" alt="" />
          <span>Airtel Nigeria</span>
        </div>
        <div className="service-item">
          <img src="/assets/img/brands/glo.jpg?v=001" alt="" />
          <span>Glo Nigeria</span>
        </div>
        <div className="service-item">
          <img src="/assets/img/brands/dstv.jpg" alt="" />
          <span>DSTV Nigeria</span>
        </div>
        <div className="service-item">
          <img src="/assets/img/brands/gotv.png" alt="" />
          <span>GOTV Nigeria</span>
        </div>
        <div className="service-item">
          <img src="/assets/img/brands/9mobile.jpg" alt="" />
          <span>9Mobile Nigeria</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
