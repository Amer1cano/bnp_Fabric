/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'miniPhone':{'min': '280px', 'max' : '320px'},
      'phone':{'min': '320px', 'max' : '400px'},
      'bigPhone':{'min': '400px', 'max' : '576px'},
      'miniTablet':{'min': '576px', 'max' : '768px'},
      'tablet':{'min': '768px', 'max' : '992px'},
      'bigTablet':{'min': '992px', 'max' : '1024px'},
      'miniDesktop':{'min': '1024px', 'max' : '1200px'},
      
    },
    extend: {
      boxShadow:{
        'red-3xl': '0 30px 40px -5px rgba(255, 0, 0, 0.3)',
        'gray-3xl': '0 30px 40px -5px rgb(211, 211, 211)'
      }
    },
  },
  plugins: [],
}