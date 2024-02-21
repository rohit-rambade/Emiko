import React, { useEffect, useState } from "react";
import ProductOne from "../components/sections/products/ProductOne";

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const products = [
    {
      //banner
      id: 1,
      name: "Autometive Battery",
      title: "Autometive Batteries",
      description: `When power stops, life stops. Before the light goes out, let our
    batteries take your load.Experience Meets Innovation to Deliver
    Next-Gen Batteries.`,

      //

      tagline: "Rev Up Your Drive with Reliable Energy",
      desc: `Elevate Your Drive with Advanced Technology: Our Automotive
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
    brilliance`,
      featureSectionImage: "https://dummyimage.com/300",

      features: [
        {
          id: 1,
          title: "Capacity. 150 Ah.",
        },
        {
          id: 2,
          title: "Battery Type. Tall Tubular.",
        },
        {
          id: 3,
          title: "Voltage. 12 V.",
        },
        {
          id: 4,
          title: "Color. Red And White.",
        },
        {
          id: 5,
          title: "Phase. Single Phase.",
        },
        {
          id: 6,
          title: "Features. Long Back Up.",
        },
        {
          id: 6,
          title: "Battery Warrenty. 60 Months.",
        },
      ],
      rangesOfBatteries: [
        {
          id: 1,
          imgUrl: "https://dummyimage.com/300",
        },
      ],
      application: "Application",
      applicationDetails: [
        {
          id: 1,
          name: "Two Wheeler",
        },
        {
          id: 2,
          name: "Three Wheeler",
        },
        {
          id: 3,
          name: "Four Wheeler",
        },
      ],
    },
    {
      //banner
      id: 2,
      name: "Autometive Battery",
      title: "Inverter Batteries",
      description: ` 2nd componenet When power stops, life stops. Before the light goes out, let our
    batteries take your load.Experience Meets Innovation to Deliver
    Next-Gen Batteries.`,

      //

      tagline: "Rev Up Your Drive with Reliable Energy",
      desc: `Elevate Your Drive with Advanced Technology: Our Automotive
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
    brilliance`,
      featureSectionImage: "https://dummyimage.com/300",

      features: [
        {
          id: 1,
          title: "Capacity. 150 Ah.",
        },
        {
          id: 2,
          title: "Battery Type. Tall Tubular.",
        },
        {
          id: 3,
          title: "Voltage. 12 V.",
        },
        {
          id: 4,
          title: "Color. Red And White.",
        },
        {
          id: 5,
          title: "Phase. Single Phase.",
        },
        {
          id: 6,
          title: "Features. Long Back Up.",
        },
        {
          id: 6,
          title: "Battery Warrenty. 60 Months.",
        },
      ],
      rangesOfBatteries: [
        {
          id: 1,
          imgUrl: "https://dummyimage.com/300",
        },
      ],
      application: "Application",
      applicationDetails: [
        {
          id: 1,
          name: "Two Wheeler",
        },
        {
          id: 2,
          name: "Three Wheeler",
        },
        {
          id: 3,
          name: "Four Wheeler",
        },
      ],
    },
    {
      //banner
      id: 3,
      name: "Marine Battery",
      title: "Marine Battery",
      description: ` 2nd componenet When power stops, life stops. Before the light goes out, let our
    batteries take your load.Experience Meets Innovation to Deliver
    Next-Gen Batteries.`,

      //

      tagline: "Rev Up Your Drive with Reliable Energy",
      desc: `Elevate Your Drive with Advanced Technology: Our Automotive
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
    brilliance`,
      featureSectionImage: "https://dummyimage.com/300",

      features: [
        {
          id: 1,
          title: "Capacity. 150 Ah.",
        },
        {
          id: 2,
          title: "Battery Type. Tall Tubular.",
        },
        {
          id: 3,
          title: "Voltage. 12 V.",
        },
        {
          id: 4,
          title: "Color. Red And White.",
        },
        {
          id: 5,
          title: "Phase. Single Phase.",
        },
        {
          id: 6,
          title: "Features. Long Back Up.",
        },
        {
          id: 6,
          title: "Battery Warrenty. 60 Months.",
        },
      ],
      rangesOfBatteries: [
        {
          id: 1,
          imgUrl: "https://dummyimage.com/300",
        },
      ],
      application: "Application",
      applicationDetails: [
        {
          id: 1,
          name: "Two Wheeler",
        },
        {
          id: 2,
          name: "Three Wheeler",
        },
        {
          id: 3,
          name: "Four Wheeler",
        },
      ],
    },
    {
      //banner
      id: 4,
      name: "E-Rickshaws Batteries",
      title: "E-Rickshaws Batteries",
      description: ` 2nd componenet When power stops, life stops. Before the light goes out, let our
    batteries take your load.Experience Meets Innovation to Deliver
    Next-Gen Batteries.`,

      //

      tagline: "Rev Up Your Drive with Reliable Energy",
      desc: `Elevate Your Drive with Advanced Technology: Our Automotive
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
    brilliance`,
      featureSectionImage: "https://dummyimage.com/300",

      features: [
        {
          id: 1,
          title: "Capacity. 150 Ah.",
        },
        {
          id: 2,
          title: "Battery Type. Tall Tubular.",
        },
        {
          id: 3,
          title: "Voltage. 12 V.",
        },
        {
          id: 4,
          title: "Color. Red And White.",
        },
        {
          id: 5,
          title: "Phase. Single Phase.",
        },
        {
          id: 6,
          title: "Features. Long Back Up.",
        },
        {
          id: 6,
          title: "Battery Warrenty. 60 Months.",
        },
      ],
      rangesOfBatteries: [
        {
          id: 1,
          imgUrl: "https://dummyimage.com/300",
        },
      ],
      application: "Application",
      applicationDetails: [
        {
          id: 1,
          name: "Two Wheeler",
        },
        {
          id: 2,
          name: "Three Wheeler",
        },
        {
          id: 3,
          name: "Four Wheeler",
        },
      ],
    },
    {
      //banner
      id: 5,
      name: "Solor Batteries",
      title: "Solor Batteries",
      description: ` 2nd componenet When power stops, life stops. Before the light goes out, let our
    batteries take your load.Experience Meets Innovation to Deliver
    Next-Gen Batteries.`,

      //

      tagline: "Rev Up Your Drive with Reliable Energy",
      desc: `Elevate Your Drive with Advanced Technology: Our Automotive
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
    brilliance`,
      featureSectionImage: "https://dummyimage.com/300",

      features: [
        {
          id: 1,
          title: "Capacity. 150 Ah.",
        },
        {
          id: 2,
          title: "Battery Type. Tall Tubular.",
        },
        {
          id: 3,
          title: "Voltage. 12 V.",
        },
        {
          id: 4,
          title: "Color. Red And White.",
        },
        {
          id: 5,
          title: "Phase. Single Phase.",
        },
        {
          id: 6,
          title: "Features. Long Back Up.",
        },
        {
          id: 6,
          title: "Battery Warrenty. 60 Months.",
        },
      ],
      rangesOfBatteries: [
        {
          id: 1,
          imgUrl: "https://dummyimage.com/300",
        },
      ],
      application: "Application",
      applicationDetails: [
        {
          id: 1,
          name: "Two Wheeler",
        },
        {
          id: 2,
          name: "Three Wheeler",
        },
        {
          id: 3,
          name: "Four Wheeler",
        },
      ],
    },
  ];
  useEffect(() => {
    if (products.length > 0) {
      setSelectedProduct(products[0]);
    }
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  return (
    <div>
      <h1 className="p-2"> Products</h1>
      <h3 className="font-kameron font-bold text-3xl p-2">
        Power up your life with our services
      </h3>
      <div className="flex justify-evenly items-center my-8">
        {products.map((product) => {
          return (
            <button
              className="relative flex h-[50px] w-52  items-center justify-center overflow-hidden bg-red-100 font-bold text-black rounded-full shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-red-500 before:duration-500 before:ease-out hover:shadow-red-500 hover:before:h-56 hover:before:w-full"
              key={product.id}
              onClick={() => handleProductClick(product)}
            >
              <span className="relative z-10 font-arimo">{product.title}</span>
            </button>
          );
        })}
      </div>
      <ProductOne product={selectedProduct} />
    </div>
  );
};

export default Product;
