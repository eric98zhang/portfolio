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
        background: "#FFFFFF",
        foreground: "#000000",
        text: "#000000",
      },
      dark: {
        background: "#000000",
        foreground: "#FFFFFF",
        text: "#FFFFFF",
      },
    }),
  ],
};
