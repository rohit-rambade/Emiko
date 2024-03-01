import React from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Outlet } from "react-router-dom";
import FindDealer from "./components/sections/whereToBuy/FindDealer";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      {/* <FindDealer /> */}
      <Footer />
    </>
  );
};

export default App;
