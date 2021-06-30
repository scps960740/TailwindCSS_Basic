module.exports = {
  purge: ['./src/**/*.html'],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xx': '1000px'
      },
      colors: {
        fill: '#fff'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
