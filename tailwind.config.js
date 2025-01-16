/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        helvetica: ['Helvetica'],
      },
      scrollbar: ['rounded'],
    },
  },
  plugins: [
    tailwindScrollbar,
  ],
};
