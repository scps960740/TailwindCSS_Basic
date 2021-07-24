module.exports = {
  purge: ['./src/**/*.html'],
  // purge: {
  //   content: ['./src/**/*.html'],
  //   safelist: [
  //     'text-center',
  //   ]
  // },
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
