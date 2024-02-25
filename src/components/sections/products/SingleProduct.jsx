import React from "react";
import scooterLogo from "../../../assets/product/scooterLogo.png";
import rikshawLogo from "../../../assets/product/autoRikshaw.png";
import carLogo from "../../../assets/product/carLogo.png";

const SingleProduct = ({ product }) => {
  return (
    <>
      <div>
        {/* <h1 className="p-2"> Products</h1>
        <h3 className="font-poppins font-bold text-3xl p-2">
          Power up your life with our services
        </h3>
        <div className="flex justify-evenly items-center my-8">
          <button className="relative flex h-[50px] w-52  items-center justify-center overflow-hidden bg-red-100 font-bold text-black rounded-full shadow-xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-red-500 before:duration-500 before:ease-out hover:shadow-red-500 hover:before:h-56 hover:before:w-full">
            <span className="relative z-10 font-poppins">Autometive Battery</span>
          </button>
          <button className="relative flex h-[50px] w-52  items-center justify-center overflow-hidden bg-red-100 font-bold text-black rounded-full shadow-xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-red-500 before:duration-500 before:ease-out hover:shadow-red-500 hover:before:h-56 hover:before:w-full">
            <span className="relative z-10 font-poppins">Inverter</span>
          </button>
          <button className="relative flex h-[50px] w-52  items-center justify-center overflow-hidden bg-red-100 font-bold text-black rounded-full shadow-xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-red-500 before:duration-500 before:ease-out hover:shadow-red-500 hover:before:h-56 hover:before:w-full">
            <span className="relative z-10 font-poppins">Marine Battery</span>
          </button>
          <button className="relative flex h-[50px] w-52  items-center justify-center overflow-hidden bg-red-100 font-bold text-black rounded-full shadow-xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-red-500 before:duration-500 before:ease-out hover:shadow-red-500 hover:before:h-56 hover:before:w-full">
            <span className="relative z-10 font-poppins"> E-Rickshaws</span>
          </button>
          <button className="relative flex h-[50px] w-52  items-center justify-center overflow-hidden bg-red-100 font-bold text-black rounded-full shadow-xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-red-500 before:duration-500 before:ease-out hover:shadow-red-500 hover:before:h-56 hover:before:w-full">
            <span className="relative z-10 font-poppins">Solar Batteries</span>
          </button>
        </div> */}
        <div className="relative w-full h-96 flex justify-center items-center bg-gradient-to-bl from-orange-300 to-orange-200">
          <img
            src={product?.banner}
            className="  absolute object-cover w-full h-full opacity-50 mix-blend-normal"
          ></img>
          <div className="absolute flex flex-col justify-center items-center">
            <h3 className="text-center font-poppins italic text-4xl font-semibold backdrop-blur-sm w-fit">
              EMIKO- {product?.title}
            </h3>
            <p className="w-3/4 text-center backdrop-blur-sm p-2">
              {product?.description}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center content-center px-28">
          <h2 className="text-center py-8 text-4xl font-semibold text-primary">
            Rev Up Your Drive with Reliable Energy
          </h2>
          <p className=" text-xl text-center">
            Elevate Your Drive with Advanced Technology: Our Automotive
            Batteries Redefine Performance. Featuring high-surface carbon for
            enhanced discharge capabilities and rapid deep cycle recovery, our
            batteries are designed to thrive in the face of frequent and
            prolonged power demands. Crafted with a special-grade polyethylene
            separator, our batteries boast high volume porosity and superior
            mechanical strength. With minimal water top-up requirements and an
            impressive life expectancy of up to 5-6 years, these batteries
            guarantee a reliable and enduring power source. Whether for everyday
            commuting or heavy-duty industrial applications, our automotive
            batteries are engineered to power your journey with lasting
            brilliance.
          </p>
        </div>
        <div className="bg-gradient-to-r from-red-500 to-red-50 flex justify-evenly items-center my-16 ">
          <div className="">
            <img
              src={product?.featureSectionImage}
              alt={product?.title}
              className="w-96 h-72"
            ></img>
          </div>
          <div className="">
            <h3 className="font-poppins font-bold text-4xl underline underline-offset-8 decoration-red-400 py-1">
              FEATURES
            </h3>
            <ul className="list-disc px-8">
              {product?.features?.map((feature) => {
                return <li key={feature?.id}>{feature?.title}</li>;
              })}
              {/* <li>Capacity. 150 Ah.</li>
              <li>Battery Type. Tall Tubular.</li>
              <li>Voltage. 12 V.</li>
              <li>Color. Red And White.</li>
              <li>Phase. Single Phase.</li>
              <li>Features. Long Back Up.</li>
              <li>Battery Warrenty. 60 Months.</li> */}
            </ul>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------------------------- */}
        <div className="relative flex flex-wrap justify-around content-center bg-clip-border rounded-xl w-full my-12">
          {product?.rangesOfBatteries?.map((battery) => {
            return (
              <div
                className="relative m-4  w-1/2 md:w-1/5 overflow-hidden text-gray-700 bg-white shadow-2xl hover:shadow-red-300 bg-clip-border rounded-xl "
                key={battery.id}
              >
                <img src={battery.url} alt="profile-picture" />
              </div>
            );
          })}
        </div>
        {/* --------------------------------------------------------------------------------------------------------- */}
        {product?.isApplication ? (
          <div className="h-96 bg-gradient-to-b from-red-500 to-white flex flex-col justify-center items-center">
            <div className="py-4">
              <h3 className="font-poppins text-white text-6xl font-bold">
                APPLICATION
              </h3>
            </div>
            <div className="flex">
              <div className="flex p-2 rounded-full bg-white m-4">
                <img
                  src={scooterLogo}
                  alt=""
                  className="p-4 "
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                ></img>
              </div>
              <div className="flex p-2 rounded-full bg-white m-4">
                <img
                  src={rikshawLogo}
                  alt=""
                  className="p-4 "
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                ></img>
              </div>
              <div className="flex p-2 rounded-full bg-white m-4">
                <img
                  src={carLogo}
                  alt=""
                  className="p-4 "
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                ></img>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default SingleProduct;
