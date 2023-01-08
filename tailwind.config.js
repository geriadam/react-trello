/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      gray: colors.coolGray,
      blue: colors.lightBlue,
      green: {
        'lightest': '#F8FBF9',
        'lighter': '#F7FEFF',
        'light': '#4DB5BC',
        'DEFAULT': '#01959F',
        'dark': '#43936C',
        'twilight': "#B8DBCA"
      },
      red: {
        'lighter': '#FFFAFA',
        'light': '#F5B1B7',
        'DEFAULT': '#E11428',
      },
      yellow: {
        'lighter': '#FFFCF5',
        'light': '#FEEABC',
        'DEFAULT': '#FEEABC',
        'dark': '#FA9810',
      },
      gray98: '#FAFAFA',
      gray25: '#404040',
      gray88: '#E0E0E0',
      gray93: '#EDEDED',
      grayDark: '#757575',
      gray20: '#333333',
      black: {
        'DEFAULT': colors.black,
        'pearl': '#1D1F20',
        'russian': '#1E1F21'
      }
    },
    extend: {
      boxShadow: {
        'bt': 'box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12);',
      },
    },
  },
  plugins: [],
}
