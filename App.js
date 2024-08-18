import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Components/Header";
import Body from "./Components/Body";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import { Auth0Provider } from '@auth0/auth0-react';
import Footer from "./Components/Footer";

import PathContext from "./utils/PathContext";
import { useState } from "react";

const AppLayout = () => {

  const [currentPath, setCurrentPath] = useState("home");

  return (

    <PathContext.Provider value={{ currentPath, setCurrentPath }}>
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </PathContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: '/restaurants/:resId',
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-ptaigorri7fsu4i5.us.auth0.com"
    clientId="45C6CAiGsiyfOwjbXTa2YaOXsKvGw0WZ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <RouterProvider router={appRouter} />
  </Auth0Provider>,
);

