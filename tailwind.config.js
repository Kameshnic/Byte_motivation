/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "#1E293B",
        lightBg: "#F8FAFC",
      },
    },
  },
  plugins: [],
};
