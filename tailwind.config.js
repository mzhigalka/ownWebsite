/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#111111",
        semigrey: "#333333",
        grey: "#666666",
      },
      fontFamily: {
        sans: ["Geist", "sans-serif"],
      },
    },
  },
  plugins: [],
};
