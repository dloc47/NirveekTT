/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#2522a4',
        'brand-secondary': '#75c3c6',//2,122,88
        'primary-color': "#0E9F6E",
        'primary-hover-color':'rgb(5 112 85)'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

