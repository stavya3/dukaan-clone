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
        black: {
          100: "#F2F2F2",
          200: "#E6E6E6",
          150: "#D9D9D9",
          300: "#808080",
          400: "#4D4D4D",
          500: "#999999",
          600: "#1A181E"
        },
      },
    },
  },
  plugins: [],
}