import React from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <>
      <Header />
      <div className="h-[100vh] bg-red-600 ">
        <h1>Home</h1>
      </div>
      <Footer />
    </>
  );
};

export default App;
