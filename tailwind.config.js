/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{html,ts}", "./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        red: "#450a0a",
      },
    },
  },
  plugins: [],
};
