/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    screens: {
      sm: "360px",
      md: "540px",
      lg: "768px",
      xl: "1180px"
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "32px"
      }
    },
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
