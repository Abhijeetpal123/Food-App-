import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import Restaurantmenu from "./components/Restaurantmenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import useTheme from "./utils/useTheme.js";
import ToggleButton from "./components/Togglebutton.js";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      
          <ToggleButton/>
        

      {/* This is where nested (child) routes will appear ek placeholder hai jahan child route ka component dikhta hai.*/}
    </div>
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
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <Restaurantmenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
