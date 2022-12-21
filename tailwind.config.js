const plugin = require('tailwindcss/plugin')
module.exports = {
  prefix:"tw-",
  important: true,
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors:{
        cc:{
          'pink':'#EB0CE2',
          'broken-white': '#EEFFE4',
          'dark-sage': '#37A573'
        }
      },
      fontSize:{
        'cc-28':['28px','38px']
      },
      fontFamily: {
        'farro': ['Farro', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif']
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
          '.app-background':{
            background: 'linear-gradient(138.14deg, #FFFFFF 19.04%, #FFFBFB 38.87%, #EAFFF9 55.69%, #C4F8DF 70.57%, #E1DADA 82.02%)'
          },
          '.element-center':{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)'
          },
          '.form-background-outer':{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='1031' height='1055' viewBox='0 0 1031 1055' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='536.877' y='1054.44' width='835.233' height='645.031' rx='322.516' transform='rotate(-130 536.877 1054.44)' fill='black' fill-opacity='0.11'/%3E%3Crect x='515' y='947' width='697.504' height='551.785' rx='275.893' transform='rotate(-130 515 947)' fill='%2387CDAD'/%3E%3C/svg%3E")`
          }
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
  })
  ],
}