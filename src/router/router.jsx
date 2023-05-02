import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutUs from "../components/AboutUs/AboutUs";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";
import Register from "../components/Register/Register";
import UserProfile from "../components/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/details/:detailsId",
        element: <PrivateRoute><RecipeDetails /></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://chef-legend-server-nazmulhasannasim333.vercel.app/chefCategories/${params.detailsId}`),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "profile",
        element: <UserProfile />,
      },
    ],
  },
]);

export default router;
