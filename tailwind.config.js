/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#e44444", // mnf primary color red
          "secondary": "#ffe2e5", //mnf secondary color raded red
          "info": "#3abff8",
          "base-100": "#ffffff",
          "success": "#7FC349", // mnf success color
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

