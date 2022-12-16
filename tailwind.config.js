/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./dist/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
}