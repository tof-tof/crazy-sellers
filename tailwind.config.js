module.exports = {
  purge: {
    enabled:true,
    content: [
    './public/**/*.html',
    './src/**/*.js',
    ]
  },
  theme: { 
    container: {
      center: true,
    },
    extend: {
      backgroundColor: {
        'black-t-50':'rgba(0,0,0,0.5)',
      }
    },
  },
  variants: {},
  plugins: [],
}
