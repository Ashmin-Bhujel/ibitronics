/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        gilroy: ["gilroy-bold", "monospace"],
      },
      colors: {
        primary: "#ff8104",
        secondary: "#0d77e3",
        light: "#feffff",
        lightMid: "#f5f5f7",
        dark: "#1d1d1f",
        darkMid: "#6f6e72",
      },
    },
  },
  plugins: [],
};
