/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        shake: "shake 0.5s ease-in-out",
        fadeIn: "fadeIn 1s ease-in forwards",
        fadeOut: "fadeOut 1s ease-out forwards",
      },
      keyframes: {
        shake: {
          "0%": {
            transform: "translateX(0)",
          },
          "25%": {
            transform: "translateX(-4px)",
          },
          "50%": {
            transform: "translateX(4px)",
          },
          "75%": {
            transform: "translateX(-4px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      backgroundColor: {
        "barely-black": "rgb(31, 31, 31)",
      },
    },
  },
  plugins: [],
};
