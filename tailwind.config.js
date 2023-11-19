/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,marko}",
    "./src/components/*.{js,ts,jsx,tsx,marko}",
    "./src/components/**/*.{js,ts,jsx,tsx,marko}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
