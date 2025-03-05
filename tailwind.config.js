
/** @type {import('tailwindcss').Config} */

import svgr from 'vite-plugin-svgr';
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        en: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: "#B72A23", // اللون الأساسي
        secondary: "#555555", // اللون الثانوي
        darkText: "#2D2D2D", // اللون الداكن
      },
    },
    
  },
  plugins: [],
}


