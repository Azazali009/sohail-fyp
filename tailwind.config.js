/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/hero.jpg')",
      },
      colors: {
        primary: "#004085",
        bodyColor: "#F5F5F5",
        buttonColor: "#28a745",
      },
    },
  },
  plugins: [require("daisyui")],
};
