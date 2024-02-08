import React from "react";

const QuickLink = () => {
  return (
    <div className="quick-link">
      <div className="row">
        <div
          className="col-3 quicklink-action quicklink-action"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWidthdraw"
          aria-controls="offcanvasWidthdraw"
        >
          <div className="link-content shadow">
            <i className="fa-solid fa-wallet"></i>
          </div>
          <p>Withdraw</p>
        </div>
        <div
          className="col-3 quicklink-action"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasTransafer"
          aria-controls="offcanvasTransafer"
        >
          <div className="link-content shadow">
            <i className="fa-solid fa-paper-plane"></i>
          </div>
          <p>Transfer</p>
        </div>
        <div className="col-3 quicklink-action">
          <div className="link-content shadow">
            <i className="fa-solid fa-building-columns"></i>
          </div>
          <p>My Bank</p>
        </div>
        <div className="col-3 quicklink-action">
          <div className="link-content shadow">
            <i className="fa-solid fa-address-book"></i>
          </div>
          <p>Split Bills</p>
        </div>
      </div>
    </div>
  );
};

export default QuickLink;
