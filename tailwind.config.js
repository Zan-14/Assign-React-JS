/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,ttf}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'titillium': ['Titillium', 'sans-serif'],
      },
      colors: {
        'blackSoft': '#0f0f0f',
        'grayLight': '#D9D9D9',
        'grayDarker': '#454B4E',
      }
    },
  },
  plugins: [],
}