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
        'brand-secondary': '#75c3c6',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

