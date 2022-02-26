const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: "580px" },
        ...defaultTheme.screens,
      },
      fontFamily: {
        varela_round: "'Varela Round', sans-serif",
        raleway: "'Raleway', sans-serif",
        montserrat: "'Montserrat', sans-serif",
      },
    },
  },
  plugins: [],
};
