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
        't-white': '#a7aaad',
        'active': 'rgba(51, 97, 204, 0.4)'
      },
      width: {
        '72': '72.2%',
        '71': '72%',
        '28': '27.8%',
        '89': '89%'
      },
      height: {
        '13': '3.2em',
        '85': '88.5%'
      }
    },
  },
  plugins: [],
}
