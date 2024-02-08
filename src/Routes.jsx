import { createBrowserRouter } from "react-router-dom";
import Home from "./dashboard/Home";

const Routes = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
]);

export default Routes;
