/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        customBlack: "rgba(0, 0, 0, 0.5)",
        transparent: "rgba(0, 0, 0, 0.3)",
        newBG: "rgba(35,38,67,.5)",
      },
      animation: {
        pulseAnimation: "pulse 2s ease-in-out infinite",
      },
      keyframes: {
        pulse: {
          "0%": {
            opacity: "0.3",
          },
          "50%": {
            opacity: "0.5",
          },
          "100%": {
            opacity: "0.3",
          },
        },
      },
      gridTemplateColumns: {
        20: "repeat(20, minmax(0, 1fr))",
      },
      screens: {
        "custom-sm": "320px",
        "custom-sl": "425px",
        "custom-500px": "500px",
        "custom-600px": "600px",
        "custom-xxl": "1440px",
      },
      colors: {
        customPurple: "#5A2E98", // Define your custom color
      },
    },
  },
  plugins: [],
};
