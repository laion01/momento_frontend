/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3434FF',
      },
      fontFamily: {
        'ibm': ['IBM Plex Sans', 'sans-serif']
      },
      zIndex: {
        '45': '45',
        '100': '100',
      }
    },
  },
  plugins: [],
}