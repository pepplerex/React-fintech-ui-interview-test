import React from "react";
import "./LargeScreenHeader.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LargeScreen = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <header className="d-none d-md-block col-md-3 large-screen-header">
      <div className="logo">
        <h3>App logo</h3>
        {/* <img src="" alt="Logo" srcset="" /> */}
      </div>

      <ul className="sidebar-list">
        <a>
          <li
            onClick={() => navigate("/dashboard")}
            className={pathname === "/dashboard" ? "active" : ""}
          >
            <i className="fa-solid fa-layer-group"></i>
            Dashboard
          </li>
        </a>
        <a>
          <li
            onClick={() => navigate("/transactions")}
            className={pathname === "/transactions" ? "active" : ""}
          >
            <i className="fa-solid fa-file-invoice"></i> Transactions
          </li>
        </a>
        <li>
          <i className="fa-solid fa-wallet"></i>Wallet
        </li>
        <li>
          <i className="fa-solid fa-code-compare"></i> Referrals
        </li>
        <li>
          <i className="fa-solid fa-building-columns"></i>
          Payment
        </li>

        <a>
          <li
            onClick={() => navigate("/settings")}
            className={pathname === "/settings" ? "active" : ""}
          >
            <i className="fa-solid fa-gear"></i> Settings
          </li>
        </a>
      </ul>
    </header>
  );
};

export default LargeScreen;
