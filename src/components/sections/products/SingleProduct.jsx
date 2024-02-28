import React from "react";
import scooterLogo from "../../../assets/product/scooterLogo.png";
import rikshawLogo from "../../../assets/product/autoRikshaw.png";
import carLogo from "../../../assets/product/carLogo.png";

const SingleProduct = ({ product }) => {
  return (
    <>
      <div>
        <div className="relative w-full h-72 md:h-96 flex justify-center items-center bg-gradient-to-bl from-orange-300 to-orange-200">
          <img
            src={product?.banner}
            className="  absolute object-cover w-full h-full opacity-50 mix-blend-normal"
          ></img>
          <div className="absolute flex flex-col justify-center items-center">
            <h3 className="text-center italic text-3xl md:text-4xl font-semibold backdrop-blur-sm w-fit">
              EMIKO- {product?.title}
            </h3>
            <p className="w-3/4 text-center backdrop-blur-sm p-2">
              {product?.description}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center content-center px-4 md:px-28">
          <h2 className="text-left md:text-center py-8 text-3xl md:text-4xl font-semibold text-primary">
            Rev Up Your Drive with Reliable Energy
          </h2>
          <p className=" text-left text-lg md:text-xl md:text-center">
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
        <div className="flex flex-col md:flex-row bg-gradient-to-b md:bg-gradient-to-r from-red-500 to-white justify-evenly items-center my-16 ">
          <div className="flex justify-center">
            <img
              src={product?.featureSectionImage}
              alt={product?.title}
              className="w-3/4 md:w-96"
            ></img>
          </div>
          <div className="py-4 flex flex-col gap-y-3 justify-center">
            <h3 className=" font-semibold text-3xl md:text-4xl underline underline-offset-8 decoration-red-400 py-1">
              FEATURES
            </h3>
            <ul className="list-disc px-8">
              {product?.features?.map((feature) => {
                return <li key={feature?.id}>{feature?.title}</li>;
              })}
            </ul>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------------------------- */}
        <div className="relative flex flex-col md:flex-row gap-2 md:flex-wrap justify-center md:justify-around items-center bg-clip-border rounded-xl md:w-full my-12">
          {product?.rangesOfBatteries?.map((battery) => {
            return (
              <div
                className="relative my-4  w-5/6 md:w-1/4 overflow-hidden text-gray-700 bg-white shadow-2xl hover:shadow-red-300 bg-clip-border rounded-xl "
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
              <h3 className=" text-white  text-3xl md:text-6xl font-bold">
                APPLICATION
              </h3>
            </div>
            <div className="flex justify-center flex-wrap">
              <div className="flex  p-2 rounded-full bg-white m-4 ">
                <img
                  src={scooterLogo}
                  alt=""
                  className="p-4"
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
