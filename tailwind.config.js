
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily : {
      'Manrope': "'Manrope', sans-serif"
    },

    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1050px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    extend: {
      backgroundImage : theme =>({
        'bkg-text' : "linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)",
        'bkg-bar' : "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)",
      }),

      colors : theme =>({
        "bg" : "#040C18",
        "blog" : "#042c54",
        "footer" : "#031B34",
        "text" : "#81AFDD",
        "subtext" : "#FF8A71"
      })
    },
  },
  plugins: [],
}



