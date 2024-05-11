/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      italiana: ['Italiana', 'serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      height: {
        '100': '30rem',
      },
      colors: {
        gold: '#fece31',
        red: '#bd2323',
        'dark-blue': '#0a295e',
      },
      // backgroundImage: {
      //   'car': "rgba(0, 0, 0, 0.65) url('/src/assets/background.jpg')",
      // },
    },
  },
  plugins: [],
}

