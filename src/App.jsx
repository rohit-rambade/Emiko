import React from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Faq from "./pages/Faq";

const App = () => {
  return (
    <>
      <Header />
      {/* <Home /> */}
      {/* <Product /> */}
      <Faq />
      <Footer />
    </>
  );
};

export default App;
