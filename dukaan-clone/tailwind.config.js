/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          700:"#146eb4",
          750:"1174c2",
          900: "#0E4F82",
          
        },
      },
    },
  },
  plugins: [],
}