import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SettingsHeader from "./components/content/settings/SettingsHeader";

const SettingsView = () => {
  const navigate = useNavigate();
  return (
    <div className="settings-container" data-aos="fade-down">
      <SettingsHeader redirect={"/dashboard"}>
        <div className="setting-header-img">
          <img src="/assets/img/avatar/01.png" alt="Profile image" />
          <span className="update-img-btn">
            <i className="fa-solid fa-image"></i> Upload photo
          </span>
        </div>
        <div className="setting-header-text-2">
          <h5>Pepplerex</h5>
          <span>user@email.com</span>
        </div>
      </SettingsHeader>
      <div className="setting-content">
        <h6>General settings</h6>
        <div className="mt-4">
          <div className="setting-item" onClick={() => navigate("/edit-info")}>
            <div className="setting-item-icon shadow">
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="setting-item-text">
              <h5>Personal information</h5>
              <span className="d-block">Edit your information</span>
            </div>
          </div>
          <div className="setting-item" onClick={() => navigate("/security")}>
            <div className="setting-item-icon shadow">
              <i className="fa-solid fa-key"></i>
            </div>
            <div className="setting-item-text">
              <h5>Settings & Security</h5>
              <span className="d-block">Account, 2FA, reset password</span>
            </div>
          </div>
          <div className="setting-item" onClick={() => navigate("/security")}>
            <div className="setting-item-icon shadow">
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="setting-item-text">
              <h5>Refer & Earn</h5>
              <span className="d-block">Referals, Reward & commision </span>
            </div>
          </div>
          <div className="setting-item" onClick={() => navigate("/security")}>
            <div className="setting-item-icon shadow">
              <i className="fa-solid fa-message"></i>
            </div>
            <div className="setting-item-text">
              <h5>Help & support</h5>
              <span className="d-block">Chat with us or send a message</span>
            </div>
          </div>
          <div className="setting-item">
            <div className="setting-item-icon text-white bg-danger">
              <i className="fa-solid fa-power-off"></i>
            </div>
            <div className="setting-item-text">
              <h5>Logout</h5>
              <span className="d-block">Sign out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;
