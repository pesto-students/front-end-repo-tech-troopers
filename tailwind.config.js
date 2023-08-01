/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "serif"],
        ellen: ["Sue Ellen Francisco", "cursive"],
        shippori: ["Shippori Mincho", "serif"],
        work: ["Work Sans", "sans-serif"],
      },
    },
    colors: {
      primary: "#FF6D6D",
      secondary: "#77D7D3",
      dark: "#2E4049",
      "gray-50": "#F1EEEC",
      "gray-100": "#ECF1F0",
      "gray-200": "#F2F2F2",
      "gray-dark": "#727272",
      white: "#fff",
    },
  },
  plugins: [],
};
