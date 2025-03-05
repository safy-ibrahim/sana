import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Notfound from "./components/Notfound/Notfound";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> }, 
        { path: "about", element: <About /> },
        { path: "products", element: <Products /> },
        { path: "contact", element: <Contact /> },
        { path: '*', element: <Notfound /> },
      ],
    },
  ]);

  return (
    <>

     <RouterProvider router={router}></RouterProvider>

    </>
  );
}

export default App;
