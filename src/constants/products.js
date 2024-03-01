import { automotiveBattery } from "./products/autometiveBattery";
import { eRikshawBattery } from "./products/eRikshaw";
import { inverterBattery } from "./products/inverter";
import { marineBattery } from "./products/marine";
import { solarBattery } from "./products/solor";
import inverterBanner from "../assets/product/banners/Inverter.jpg";

import marineBanner from "../assets/product/banners/ship.jpg";

import solarBanner from "../assets/product/banners/solar.jpg";
import carBanner from "../assets/product/banners/car.jpg";
import automotiveImg from "../assets/product/Automotive/autometive.png";
import inverterImg from "../assets/product/Inverter/InverterBattery.png";
import marineImg from "../assets/product/Marine/MarineBattery.png";
import eRikshawImg from "../assets/product/E-ric/ErikshawBattery.png";
import solarImg from "../assets/product/Solar/SolarBattery.png";

//Automotive Applications
import bus from "../assets/product/Icons/Automotive/bus.png"
import excavator from "../assets/product/Icons/Automotive/excavator_8654464.png"
import hatchbackcar from "../assets/product/Icons/Automotive/hatchback.png"
import suv from "../assets/product/Icons/Automotive/suv-transportation-car-suv-svgrepo-com.png"
import tractor from "../assets/product/Icons/Automotive/tractor-svgrepo-com.svg"
import jcb from "../assets/product/Icons/Automotive/tractor_2318605.png"

//Inverter Applications
import home from "../assets/product/Icons/Inverter/home_553376.png"
import work from "../assets/product/Icons/Inverter/work_10866399.png"

//Marine Applications
import boatwithcontainer from "../assets/product/Icons/Marine/boat-with-containers_75931.png"

//E-Rikshaw Applications
import transport from "../assets/product/Icons/E-Rickshaw/transport_11334923.png"
export const products = [
  {
    id: 1,
    name: "Automotive",
    title: "Automotive Batteries",
    description: `When power stops, life stops. Before the light goes out, let our
    batteries take your load.Experience Meets Innovation to Deliver
    Next-Gen Batteries.`,
    banner: carBanner,

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
    featureSectionImage: automotiveImg,

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
    rangesOfBatteries: automotiveBattery,
    application: "Application",
    isApplication: true,
    applicationDetails: [
      {
        id: 1,
        img: bus
      },
      {
        id: 2,
        img: excavator,
      },
      {
        id: 3,
        name: bus,
      },
      {
        id: 4,
        name: suv,
      },
      {
        id: 5,
        name: tractor,
      },
      {
        id: 6,
        name: jcb,
      },
    ],
    advantages: [
      {
        id: 1,
        title: "High starting power",
        desc: "combines CCA and low temp performance"
      },
      {
        id: 2,
        title: "Corrosion-resistant",

      },
      {
        id: 3,
        title: "Vibration-resistant",

      },
      {
        id: 4,
        title: "Ready to install",

      },
      {
        id: 5,
        title: "Long-lasting",
        desc: "combines high reserve capacity and spill resistance"
      },
    ]
  },
  {
    id: 2,
    name: "Inverter",
    title: "Inverter Batteries",
    description: `When power stops, life stops. Before the light goes out, let our batteries take your load.Experience Meets Innovation to Deliver Next-Gen Batteries.`,
    banner: inverterBanner,

    tagline: "Power Back up for Every Need",
    desc: `We use high surface carbon in our tubular batteries. It not only improves the discharge performance of the batteries but also ensures fast recovery in the deep cycle. Suited for frequent and long power cuts these batteries have a long life cycle and can lighten up every moment of your life. Use of special grade polyethylene separator results in high volume porosity and higher mechanical strength. Our tubular batteries require low water top up and have a life expectancy up to 5-6 years. From household application to industrial use these batteries will run for life and power your world with brightness forever`,
    featureSectionImage: inverterImg,

    features: [
      {
        id: 1,
        title: "Long back up",
      },
      {
        id: 2,
        title: "60-month warranty",
      },
      {
        id: 3,
        title: "Excellent cycle life",
      },
      {
        id: 4,
        title: "Deep discharge capabilities",
      },
      {
        id: 5,
        title: "Efficiency",
      },
      {
        id: 6,
        title: "Rapid charging",
      },
      {
        id: 6,
        title: "Safety",
      },
    ],
    rangesOfBatteries: inverterBattery,
    isApplication: true,
    application: "Application",
    applicationDetails: [
      {
        id: 1,
        img: home,
      },
      {
        id: 2,
        img: work,
      },

    ],
  },
  {
    id: 3,
    name: "Marine",
    title: "Marine Batteries",
    description: `When power stops, life stops. Before the light goes out, let our batteries take your load.Experience Meets Innovation to Deliver Next-Gen Batteries.`,
    banner: marineBanner,

    tagline: "Uninterrupted Energy on the Open Seas",
    desc: `Navigate with Confidence: Our Marine Batteries Set Sail with High Surface Carbon for Peak Performance. Specially crafted for deep cycles, these batteries offer swift recovery and enduring power in the roughest waters. Featuring a unique polyethylene separator, they boast superior porosity and robust mechanical strength. Designed for low water top-up, these marine batteries have an impressive life expectancy of up to 5-6 years. Whether for leisure or professional marine applications, our batteries are built to endure, lighting up your maritime adventures with unwavering reliability`,
    featureSectionImage: marineImg,

    features: [
      {
        id: 1,
        title: "Capacity. 200 Ah.",
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
        title: "Long Back Up",
      },
      {
        id: 5,
        title: "Size. 120x96x200 mm.",
      },
      {
        id: 6,
        title: "Frequency. 50 Hz.",
      },
      {
        id: 7,
        title: "Phase. Single Phase",
      },
    ],
    rangesOfBatteries: marineBattery,
    isApplication: true,
    application: "Application",
    applicationDetails: [
      {
        id: 1,
        img: boatwithcontainer,
      },


    ],
  },
  {
    id: 4,
    name: "E-Rickshaw",
    title: "E-Rickshaw Batteries",
    description: `When power stops, life stops. Before the light goes out, let our batteries take your load.Experience Meets Innovation to Deliver Next-Gen Batteries.`,

    banner: "",

    tagline: "Uninterrupted Energy on the Open Seas",
    desc: `Empower Your E-Rickshaw with Cutting-Edge Energy: Our tubular batteries, featuring high surface carbon technology, elevate the performance of E-Rickshaws with enhanced discharge capabilities and rapid deep cycle recovery. Specially designed for prolonged and frequent use in demanding urban environments, these batteries boast an extended life cycle, providing reliable power for an uninterrupted journey. The utilization of advanced polyethylene separators ensures optimal porosity and mechanical strength, minimizing maintenance with low water top-ups. With a life expectancy of up to 5-6 years, our tubular batteries are engineered to meet the rigorous demands of E-Rickshaws, lighting up the path for sustainable and efficient transportation, from city streets to industrial zones`,
    featureSectionImage: eRikshawImg,

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
    rangesOfBatteries: eRikshawBattery,
    isApplication: true,
    applicationDetails: [
      {
        id: 1,
        img: transport
      },

    ],
  },
  {
    id: 5,
    name: "Solar ",
    title: "Solar Batteries",
    description: `When power stops, life stops. Before the light goes out, let our batteries take your load.Experience Meets Innovation to Deliver Next-Gen Batteries.`,

    banner: solarBanner,

    tagline: "Empowering Tomorrow, Solar Batteries for Sustainable Power Today",
    desc: `Harvest the Sun's Power with Superior Solar Batteries. Our solar batteries utilize high surface carbon technology for enhanced discharge performance and swift recovery in deep cycles, making them ideal for areas with frequent and prolonged power cuts. With an extended life cycle and a lifespan of up to 5-6 years, these tubular batteries are designed to illuminate every moment of your life. The use of special-grade polyethylene separators ensures high volume porosity and superior mechanical strength. Low water top-up requirements and versatility for both household and industrial applications make our solar batteries the enduring choice to power your world with everlasting brightness`,
    featureSectionImage: solarImg,

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
    rangesOfBatteries: solarBattery,
    isApplication: false,

  },
];
