/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#DE0606",
        secondary: "#FF5B5B",
        hoverColor: "#FF0505",
      },
      backgroundImage: {
        banner: "url('./assets/banner.jpg')",
        section3banner: "url('./assets/home/section-3-banner.png')",
      },
    },
  },
  plugins: [],
};
