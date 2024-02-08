import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { verifyToken } from "../../utils/VerifyToken";
import LayoutContent from "./LayoutContent";
import "./dashboard.css";
import "./ecommerce/ecommerce.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Layout = () => {
  const { access_token } = useContext(UserContext);

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (access_token == null) {
  //     navigate("/");
  //     return;
  //   } else {
  //     verifyToken(access_token)
  //       .then((response) => {
  //         if (response === false) {
  //           navigate("/");
  //         }
  //       })
  //       .catch((err) => console.log(`error: ${err}`));
  //   }
  // }, []);

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
      <LayoutContent>
        <Outlet />
      </LayoutContent>
    </>
  );
};

export default Layout;
