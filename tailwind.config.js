module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        clean: '#f7ede2'
      },
      colors: {
        primary: '#5F616E',
        secondary: '#50E3A4',
        buttonText: '#44BE8C',
        buttonHover: '#60FFBB',
        lightYellow: '#f7ede2',
        modalText: '#297053'
      },
      borderWidth: {
        3: '3px'
      },
      height: {
        container: '530px',
        date: 'max-content'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
      width: {
        container: '380px',
        date: '95px'
      }
    }
  },
  plugins: []
}
