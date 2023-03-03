const { transparent } = require("tailwindcss/colors");
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  darkMode: "class", // to support toggling dark mode manually instead of relying on the operating system preference, use the class strategy instead of the media strategy
  content: ["./src/**/*.{html,js,jsx}", "./src/index.html"],
  theme: {
    screens: {
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1400px",
      xxl: "1700px",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xs: "540px",
        sm: "720px",
        md: "960px",
        lg: "1140px",
        xl: "1200px",
      },
    },

    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },

    fontSize: {
      semiLarge: "20px",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      md: "16px",
      base: "1rem",
      "base-lg": "1.0625rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
    },

    colors: {
      gray: colors.gray,
      white: colors.white,
      blue: colors.blue,
      transparent: transparent,
      black: "#333333",
      primary: {
        "lightest-double-ultra": "#f0fdfa", //50
        "lightest-ultra": "#ccfbf1", // 100
        lightest: "#99f6e4", // 200
        lighter: "#5eead4", // 300
        light: "#2dd4bf", // 400
        default: "#14b8a6", // 500
        dark: "#0d9488", // 600
        darker: "#0f766e", // 700
        darkest: "#115e59", // 800
        "darkest-ultra": "#134e4a", // 900
      },
      secondary: {
        "lightest-double-ultra": "#fefce8", //50
        "lightest-ultra": "#fef9c3", // 100
        lightest: "#fef08a", // 200
        lighter: "#fde047", // 300
        light: "#facc15", // 400
        default: "#eab308", // 500
        dark: "#ca8a04", // 600
        darker: "#a16207", // 700
        darkest: "#854d0e", // 800
        "darkest-ultra": "#713f12", // 900
      },
    },

    extend: {
      backgroundImage: {
        fuel: "linear-gradient( 90deg, #ffe38f -17%, rgba(255, 193, 7, 26%) 0%, #fff ), url('../src/images/fuel.png')",
        fuel180:
          "linear-gradient( 180deg, #ffe38f -17%, rgba(255, 193, 7, 26%) 0%, #fff ), url('../src/images/fuel.png')",
        crew: "linear-gradient( 270deg, rgb(0 150 136 / 58%) 0%, rgb(0 150 136 / 26%) 18%, #fff ), url('../src/images/crew.png')",
        crew180:
          "linear-gradient( 180deg, rgb(0 150 136 / 58%) 0%, rgb(0 150 136 / 26%) 18%, #fff ), url('../src/images/crew.png')",
        journey:
          "linear-gradient( 90deg, #ffe38f -17%, rgba(255, 193, 7, 26%) 0%, #fff ), url('../src/images/journey.png')",
        journey180:
          "linear-gradient( 180deg, #ffe38f -17%, rgba(255, 193, 7, 26%) 0%, #fff ), url('../src/images/journey.png')",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".scale-1": {
          transform: "scale(1)",
        },
      };
      addUtilities(newUtilities, {
        variants: ["responsive", "hover"],
      });
    }),
  ],
};
