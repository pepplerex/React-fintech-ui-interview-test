import React from "react";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const whiteListAddress = ["/settings", "/edit-info", , "/security"];
  const { pathname } = useLocation();

  const hideNavigation = whiteListAddress.includes(pathname);

  return (
    <div
      className={hideNavigation ? "d-none" : "d-none d-md-block navigation-bar"}
    >
      <div className="justify-content-between d-flex">
        {/* <h3>Overview</h3> */}
        <div>
          <img className="nav-avatar" src="/assets/img/avatar/02.png" alt="" />
        </div>
        <div className="justify-content-end">
          <div className="d-flex">
            <div
              className="notification-pill bg-light"
              data-bs-toggle="modal"
              data-bs-target="#notificationModal"
            >
              <i className="fa-solid fa-bell p-2"></i>
            </div>

            <div className="username-pill d-flex bg-light">
              <div className="username-icon ms-1">
                <i className="fa-solid fa-user p-2"></i>
              </div>
              <div className="mt-1 me-5">
                <h6>@username</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
