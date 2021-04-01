module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'libraPurple': '#FCFAF9',
        'libraOrange': '#f99200'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
