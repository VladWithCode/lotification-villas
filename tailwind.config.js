/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
  ],
  theme: {
    extend: {
        colors: {
            "main": "#347928",
            "secondary": "#D5ED9F",
            "light": "#FFFBE6",
            "accent": "#FF9100",
        },
        fontFamily: {
            "main": "'Plus Jakarta Sans', sans-serif",
            "secondary": "'Playfair Display', serif",
        }
    },
  },
  plugins: [],
}

