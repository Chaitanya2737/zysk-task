/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':"rgba(16, 24, 40, 1)",
        'secondary': "rgba(127, 86, 217, 1)"

      }
    },
  },
  plugins: [],
}