const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".font-parisienne": {
          fontFamily: "Parisienne",
        },
        ".font-jost": {
          fontFamily: "Jost bold",
        },
        ".slidein-30": {
          animation: "slidein-30 ease-out 1.5s 1",
        },
        ".slidein-200": {
          animation: "slidein-200 ease-out 1.5s 1",
        },
        ".slideup-300": {
          animation: "slideup-300 ease-out 0.5s 1",
        },
        ".appear-disappear": {
          animation: "appear_disappear linear 5s 1",
        },
        ".button-gold": {
          backgroundColor: "gold",
          color: "black",
          fontFamily: "Jost bold",
          border: "none",
          cursor: "pointer",
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
