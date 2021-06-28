module.exports = {
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xx': '1000px'
      }
    },
  },
  variants: {
    extend: {
      ringWidth: ['active']
    },
  },
  plugins: [],
}
