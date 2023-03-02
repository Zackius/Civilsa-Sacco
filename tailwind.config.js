/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage:  {
        "about": "url('./img/bizna.jpg')",
        "testimonials" : "url('./img/work.jpg"
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
