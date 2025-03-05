import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="pt-[92px]">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;
