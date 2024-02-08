import React from "react";
import "./SmallScreenHeader.css";
import { Link, useLocation } from "react-router-dom";

const SmallScreen = () => {
  const whiteListAddress = ["/settings", "/edit-info", "/security"];
  const { pathname } = useLocation();

  const hideNavigation = whiteListAddress.includes(pathname);
  return (
    <header
      className={hideNavigation ? "d-none" : "d-block d-md-none app_header"}
      id="header"
    >
      <nav className="app_nav app_container">
        <a to="#" className={pathname === "/settings" ? "d-none" : "nav__logo"}>
          <img src="/assets/img/avatar/02.png" alt="" className="nav__img" />
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                to={"/dashboard"}
                className={
                  pathname === "/dashboard"
                    ? "active-link nav__link"
                    : "nav__link"
                }
              >
                <i className="bx bx-home-alt nav__icon"></i>
                <span className="nav__name">Home</span>
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to={"/transactions"}
                className={
                  pathname === "/transactions"
                    ? "active-link nav__link"
                    : "nav__link"
                }
              >
                <i className="bx bx-user nav__icon"></i>
                <span className="nav__name">Transactions</span>
              </Link>
            </li>

            <li className="nav__item">
              <Link
                to={"/settings"}
                className={
                  pathname === "/settings"
                    ? "active-link nav__link"
                    : "nav__link"
                }
              >
                <i className="fa-solid fa-gear nav__icon"></i>
                <span className="nav__name">Settings</span>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={pathname === "/settings" ? "d-none" : "nav-icon-container"}
          data-bs-toggle="modal"
          data-bs-target="#notificationModal"
        >
          <i className="fa-solid fa-bell"></i>
        </div>
      </nav>
    </header>
  );
};

export default SmallScreen;
