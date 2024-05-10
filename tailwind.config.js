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
        gold: '#fece31'
      },
    },
  },
  plugins: [],
}

