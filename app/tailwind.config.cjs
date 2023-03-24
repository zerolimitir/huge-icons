module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container:{
      center:true,
      padding:"2rem"
    },
    extend: {
      colors:{
        primary:"#011627",
        secondary:"#F43565",
      }
    },
  },
  plugins: [],
}