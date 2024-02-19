import React from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Faq from "./pages/Faq";
import Timeline from "./components/sections/history/Timeline";
import About from "./pages/About";
import Careers from "./pages/Careers";

const App = () => {
  return (
    <>
      <Header />
      {/* <Home /> */}
      {/* <Product /> */}
      <Careers />
      {/* <Faq /> */}
      {/* <Timeline /> */}
      {/* <About /> */}
      <Footer />
    </>
  );
};

export default App;
