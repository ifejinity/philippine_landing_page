/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        //mynavbar
        'navbar': '1fr auto',
        'navbarBtn' : 'repeat(4, auto)',
        'navMobile' : '1fr auto',
      },

      margin:{
        
      },

      fontFamily:{
        'poppins' : 'Poppins',
      }
    },
  },
  plugins: [],
}

