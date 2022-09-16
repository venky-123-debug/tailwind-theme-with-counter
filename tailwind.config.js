/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ['Montserrat'],
        'Noto-Sans': ['"Noto Sans"'],
        'Comforter-Brush': ['"Comforter Brush"'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
