module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ecrDarkBlue: "#18467D",
        ecrLightBlue: "#5894CF",
        ecrCamel: "#FFD028",
        ecrBlack: "#121617",
        ecrWhite: "#FFFFFF"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
