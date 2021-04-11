module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'libraPurple': '#FCFAF9',
        'libraOrange': '#f99200',
        'libraPink': 'rgba(235,179,159,1)',
        'libraPurple2': '#e7d9f2'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
