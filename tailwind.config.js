/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            back: "#FFF6DE",
            card: "#8BDFDD",
            btn: "#F48F68",
            highlight: "#FFE394"
        }
    },
  },
  plugins: [],
}