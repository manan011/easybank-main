/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        greenLinear: "#33D35E",
        blueLinear: "#2AB6D9",
        greenlight: "#30C88F",
        bluelight: "#2D314D",
        graylight: "#9597A5",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [require("./plugins/openVarient")],
};
