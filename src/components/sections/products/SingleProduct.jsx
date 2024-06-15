import React from "react";
import scooterLogo from "../../../assets/product/scooterLogo.png";
import rikshawLogo from "../../../assets/product/autoRikshaw.png";
import carLogo from "../../../assets/product/carLogo.png";
import { Fade } from "react-awesome-reveal";

const SingleProduct = ({ product }) => {
  return (
    <>
      <div className="font-poppins">
        <Fade direction="up" triggerOnce="true">
          <div className="relative w-full h-72  md:h-96 flex justify-center items-center bg-gradient-to-bl from-orange-300 to-orange-200">
            <img
              src={product?.banner}
              className="  absolute object-cover w-full h-full opacity-50 mix-blend-normal"
            ></img>

            <div className="absolute flex flex-col justify-center items-center">
              <Fade direction="up" triggerOnce="true">
                <h3 className="text-center  text-3xl md:text-4xl font-semibold backdrop-blur-sm w-fit">
                  EMIKO- {product?.title}
                </h3>
              </Fade>
              <p className="w-3/4 text-center backdrop-blur-sm p-2">
                <Fade direction="up" triggerOnce="true">
                  {product?.description}
                </Fade>
              </p>
            </div>
          </div>
        </Fade>
        <div className="flex flex-col justify-center content-center px-4 md:px-28">
          <Fade direction="up" triggerOnce="true">
            <h2 className="text-left md:text-center py-8 text-3xl md:text-4xl font-semibold text-primary">
              {product?.tagline}
            </h2>
          </Fade>
          <Fade direction="up" triggerOnce="true">
            <p className=" text-left text-lg md:text-xl md:text-center">
              {product?.desc}
            </p>
          </Fade>
        </div>
        <div className="flex flex-col md:flex-row bg-gradient-to-b md:bg-gradient-to-r from-red-500 to-white justify-evenly items-center my-16 ">
          <div className="flex justify-center">
            <Fade
              direction="up"
              triggerOnce="true"
              className="flex justify-center"
            >
              <img
                src={product?.featureSectionImage}
                alt={product?.title}
                className="w-3/4 md:w-96"
              />
            </Fade>
          </div>
          <div className="py-4 flex flex-col gap-y-3  md:justify-center  ">
            <Fade direction="up" triggerOnce="true">
              {" "}
              <h3 className=" font-semibold text-3xl text-left md:text-4xl underline underline-offset-8 decoration-red-400 py-1 ">
                FEATURES
              </h3>{" "}
            </Fade>
            <Fade direction="up" triggerOnce="true">
              <ul className=" list-disc px-4 md:px-8">
                {product?.features?.map((feature) => {
                  return <li key={feature?.id}>{feature?.title}</li>;
                })}
              </ul>
            </Fade>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------------------------- */}
        <Fade direction="up" triggerOnce="true">
          {" "}
          <h1 className=" text-4xl font-semibold py-8 px-4 text-center">
            RANGES OF <span className="text-primary">BATTERIES</span>
          </h1>
        </Fade>
        <div className="relative flex flex-col md:flex-row gap-2 md:flex-wrap justify-center md:justify-around items-center bg-clip-border rounded-xl md:w-full my-12">
          {product?.rangesOfBatteries?.map((battery) => {
            return (
              <div
                className="relative my-4  w-5/6 md:w-1/4 overflow-hidden text-gray-700 bg-white shadow-2xl hover:shadow-red-300 bg-clip-border rounded-xl "
                key={battery.id}
              >
                <Fade direction="up" triggerOnce="true">
                  {" "}
                  <img src={battery.url} alt="Battery Manufacturer" />
                </Fade>
              </div>
            );
          })}
        </div>
        {/* --------------------------------------------------------------------------------------------------------- */}
        <div className="flex flex-col gap-y-20">
          {product?.isApplication ? (
            <div className="md:h-full bg-gradient-to-b from-red-500 to-white flex flex-col justify-center items-center">
              <div className="py-4">
                <Fade direction="up" triggerOnce="true">
                  <h3 className=" text-white  text-3xl md:text-6xl font-bold">
                    APPLICATION
                  </h3>
                </Fade>
              </div>
              <div className="flex justify-center flex-wrap">
                {product.isApplication ? (
                  <>
                    {product?.applicationDetails?.map((app, index) => {
                      return (
                        <Fade direction="up" triggerOnce="true">
                          <div
                            className="flex  p-2 rounded-full bg-white m-4 "
                            key={(app, index)}
                          >
                            <img
                              src={app.img}
                              alt=""
                              className="p-4"
                              style={{
                                width: "100px",
                                height: "100px",
                                objectFit: "cover",
                              }}
                            ></img>
                          </div>{" "}
                        </Fade>
                      );
                    })}
                  </>
                ) : (
                  <div>
                    <Fade direction="up" triggerOnce="true">
                      {" "}
                      <h1>No Application</h1>
                    </Fade>
                  </div>
                )}
              </div>
              {/* -------------------------------------------------------Product Features-----------------------------------------------------------------  */}

              {/* ------------------------------------------------------------------------------------------------------------------------- */}
            </div>
          ) : (
            ""
          )}
          <div>
            <div>
              <Fade direction="up" triggerOnce="true">
                {" "}
                <h1 className="text-3xl md:text-6xl text-primary text-center font-bold">
                  ADVANTAGES
                </h1>{" "}
              </Fade>
            </div>
            <div className="container mx-auto px-20">
              <div>
                <div
                  className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5 pt-4 pb-10 lg:pt-6 lg:pb-20 "
                  style={{ cursor: "auto" }}
                >
                  {product?.advantages?.map((item) => {
                    return (
                      <div
                        className="p-6 rounded-lg  backdrop-filter backdrop-blur-3xl bg-white bg-opacity-50 shadow-xl transition-transform hover:scale-105  my-4 text-center"
                        key={item.id}
                      >
                        <Fade direction="up" triggerOnce="true">
                          <h3 className="text-lg font-semibold my-2">
                            {item.title}
                          </h3>
                        </Fade>
                        <Fade direction="up" triggerOnce="true">
                          <p className="text-sm leading-6 text-gray-600">
                            {item.desc}
                          </p>
                        </Fade>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
