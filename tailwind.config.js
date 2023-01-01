/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fffbaf",

          secondary: "#e8a0d4",

          accent: "#22a541",

          neutral: "#231C27",

          "base-100": "#F3F4F6",

          info: "#84A2D7",

          success: "#7CE4AB",

          warning: "#C5A507",

          error: "#FA6B6E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
