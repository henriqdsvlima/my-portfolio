/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'portifolio-text-white': '#fffcf2',
        'portfolio-text': '#ccc5b9',
        'bg-portfolio': '#403d39',
        'bg-portfolio-darker': '#252422',
        'hover-color': '#eb5e28',
      }
    }
  },
  plugins: [],
}