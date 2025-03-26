/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF69B4',
        secondary: '#FFB6C1',
        background: '#FFF5F8',
      },
    },
  },
  plugins: [],
} 