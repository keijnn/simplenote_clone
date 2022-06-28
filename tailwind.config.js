/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1d2327',
        'white-blue': '#84a4f0',
        'b-blue': '#2c3338',
        't-white': '#a7aaad'
      },
      width: {
        '72': '72.1%'
      },
      height: {
        '13': '3.2em'
      }
    },
  },
  plugins: [],
}
