/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : "#014f97", // sidebar background
        secondary: "#2874ba", // icon background before selected
        icon_color: "#77a7d3", // sidebar icon colors
        desc_color : "#a7c2e8", // sidebar description color
      }
    },
  },
  plugins: [],
}

