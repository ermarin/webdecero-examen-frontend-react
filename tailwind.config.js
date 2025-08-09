/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F2226",
        secondary: "#EA4D88",
      },
      fontFamily: {
        sans: ['Quicksand', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

