module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: "#460056",
        purpleLight: "#64007b",
        purpleLighter: "#74008f",
        whiteShade: "#d9d9d9",
      },
      fontFamily: {
        roboto: "Roboto",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
