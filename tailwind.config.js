/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8B5CF6", // violet-500 vibe
        accent: "#22D3EE"   // cyan-400 vibe
      }
    },
  },
  plugins: [],
}
