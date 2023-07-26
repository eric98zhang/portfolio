/** @type {import('tailwindcss').Config} */

const { createThemes } = require("tw-colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    createThemes({
      light: {
        // primary: "#000000",
        // secondary: "#000000",
        // brand: "#000000",
        background: "#FFFFFF",
        on_background: "#000000",
      },
      dark: {
        // primary: "#000000",
        // secondary: "#000000",
        // brand: "#000000",
        background: "#000000",
        on_background: "#FFFFFF",
      },
    }),
  ],
};
