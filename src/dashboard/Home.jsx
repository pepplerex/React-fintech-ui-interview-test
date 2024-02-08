import React, { useEffect } from "react";
import BalanceCard from "./components/content/BalanceCard";
import ServiceCards from "./components/content/ServiceCards";
import QuickLink from "./components/content/QuickLink";
import Transfer from "./components/content/Transfer";

import Header from "./components/header/Header";
import Navigation from "./components/Navigation";
import NotificationModal from "./components/NotificationModal";
import "./dashboard.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

const Home = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
      AOS.init({ duration: 700, offset: 0, anchorPlacement: "top-bottom" });
    }, []);

    return null;
  };

  return (
    <>
      <ScrollToTop />
      <div className="container-fluid">
        <div className="row">
          <Header />

          <main className="col-md-9">
            <Navigation />
            <div className="main-content">
              <div className="app-container">
                <div className="row">
                  <BalanceCard />
                  <QuickLink />
                  <ServiceCards />

                  {/* /// others  */}
                  <Transfer />
                </div>
              </div>
            </div>
          </main>
        </div>
        <NotificationModal />
      </div>
    </>
  );
};

export default Home;
