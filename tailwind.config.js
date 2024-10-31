/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      scrollbarWidth: {
        thin: "thin",
      },
      height: {
        100: "100vh",
        110: "110vh",
        99: "99vh",
        98: "98vh",
        90: "90vh",
        80: "80vh",
        85: "85vh",
        25: "25rem",
        28: "28rem",
        35: "35rem",
        45: "45rem",
        50: "50rem",
        65: "65rem",
        75: "20rem",
      },
      width: {
        60: "60vw",
        65: "65vw",
        70: "70vw",
        80: "80vw",
        90: "90vw",
        95: "95vw",
        98: "98vw",
        100: "100vw",
      },
      margin: {
        "1/2": "50%",
        "1/4": "25%",
      },
      colors: {
        navbarBg: "#1d1f1c",
        secondaryHeadingText: "#333331",
        secondaryText: "#979997",
        secodaryBg: "#141414",
      },

      // Add custom animations and keyframes here
      keyframes: {
        blinkBorder: {
          "0%, 100%": { boxShadow: "0 0 5px 1px rgba(255, 255, 255, 0.1)" }, // light white
          "25%": { boxShadow: "0 0 7px 2px rgba(255, 255, 255, 0.2)" },
          "50%": { boxShadow: "0 0 10px 3px rgba(255, 255, 255, 0.3)" }, // stronger white
        },
      },
      animation: {
        "blink-border": "blinkBorder 1s ease-in-out 1",
      },
    },
  },
  plugins: [],
};
