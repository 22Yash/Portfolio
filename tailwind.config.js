/** @type {import('tailwindcss').Config} */
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
      scrollbar: ['rounded']
      
    },
    
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

