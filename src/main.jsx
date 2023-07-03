import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import "./index.css";
import Pricingpage from "./Pages/Pricingpage";
import Aboutpage from "./Pages/Aboutpage";
import Blogpage from "./Pages/Blogpage";
import "./App.css"
import Contactpage from "./Pages/Contactpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
  path: "/pricing",
  element: <Pricingpage />,
},
{
  path: "/about",
  element: <Aboutpage />,
},
{
  path: "/blog",
  element: <Blogpage />,
},
{
  path: "/contact",
  element: <Contactpage />,
},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);