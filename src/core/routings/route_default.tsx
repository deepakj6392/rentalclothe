import { Navigate, Route } from "react-router-dom";
import { ROUTE_URLS } from "@constants/route.constant";
import Home from "@pages/Home";
import Login from "@pages/Login";
import SignUp from "@pages/SignUp";
import ForgotPassword from "@pages/ForgotPassword";

const routes = ROUTE_URLS;
export const PUBLIC_ROUTES = [
  {
    path: routes.home,
    element: <Home />,
    route: Route,
  },
  {
    path: routes.login,
    element: <Login />,
    route: Route,
  },
  {
    path: routes.signup,
    element: <SignUp />,
    route: Route,
  },
  {
    path: routes.forgot_password,
    element: <ForgotPassword />,
    route: Route,
  },
  {
    path: "/",
    name: "Root",
    element: <Navigate to="/" />,
    route: Route,
  },
  {
    path: "*",
    name: "NotFound",
    element: <Navigate to="/" />,
    route: Route,
  },
];

export const PROTECTED_ROUTES = [
  {
    path: routes.profile,
    element: <Home />,
    route: Route,
  },
];
