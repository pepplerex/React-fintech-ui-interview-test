import React from "react";
import Header from "./components/header/Header";
import Navigation from "./components/Navigation";
import NotificationModal from "./components/NotificationModal";

const LayoutContent = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Header />

        <main className="col-md-9">
          <Navigation />
          <div className="main-content">{children}</div>
        </main>
      </div>
      <NotificationModal />
    </div>
  );
};

export default LayoutContent;
