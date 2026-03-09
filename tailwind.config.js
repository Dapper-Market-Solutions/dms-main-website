/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#ffcb05',
        navy: '#00274c',
        'navy-dark': '#001a33',
        'light-gray': '#efefef',
        'off-white': '#f7f7f7',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
