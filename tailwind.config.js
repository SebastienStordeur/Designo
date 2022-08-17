/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      peach: "#E7816B",
      black: "#1D1C1E",
      white: "#FFFFFF",
      "light-peach": "#FFAD9B",
      "dark-grey": "#333136",
      "light-grey": "#F1F3F5",
    },
    fontFamily: {
      Jost: ["Jost", "sans-serif"],
    },
  },
  plugins: [],
};
