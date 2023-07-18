import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import AllBooks from "../pages/AllBooks";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books",
        element: <AllBooks />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signun",
        element: <SignUp />,
      },
    ],
  },
]);

export default routes;
