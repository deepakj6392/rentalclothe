import { Navigate, Route } from "react-router-dom";
import { ROUTE_URLS } from "@constants/route.constant";
import Home from "@pages/Home";
import Login from "@pages/Login";
import SignUp from "@pages/SignUp";
import ForgotPassword from "@pages/ForgotPassword";
import Clothes from "@pages/Clothes";
import ClotheDetail from "@pages/ClotheDetail";
import BillingPage from "@pages/BillingPage";
import TermsAndCondition from "@pages/TermsAndCondition";
import PrivacyPolicy from "@pages/PrivacyPolicy";
import ContactUs from "@pages/ContactUs";
import About from "@pages/About";
import Features from "@pages/Features";
import Categories from "@pages/Categories";
import Settings from "@pages/Settings";
import Dashboard from "@pages/admin/Dashboard";

const routes = ROUTE_URLS;
export const PUBLIC_ROUTES = [
  {
    path: routes.home,
    element: <Home />,
    route: Route,
  },
  {
    path: routes.clothes,
    element: <Clothes />,
    route: Route,
  },
  {
    path: routes.clothe_detail,
    element: <ClotheDetail />,
    route: Route,
  },
  {
    path: routes.billing,
    element: <BillingPage />,
    route: Route,
  },
    {
    path: routes.terms_and_condition,
    element: <TermsAndCondition />,
    route: Route,
  },
      {
    path: routes.privacy_policy,
    element: <PrivacyPolicy />,
    route: Route,
  },
    {
    path: routes.contact,
    element: <ContactUs />,
    route: Route,
  },
      {
    path: routes.about,
    element: <About />,
    route: Route,
  },
  {
    path: routes.features,
    element: <Features />,
    route: Route,
  },
  

   {
    path: routes.categories,
    element: <Categories />,
    route: Route,
  },
     {
    path: routes.settings,
    element: <Settings />,
    route: Route,
  },
    {
    path: routes.dashboard,
    element: <Dashboard />,
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
