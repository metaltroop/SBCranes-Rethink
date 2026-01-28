/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'industrial-blue': '#003366',
        'safety-yellow': '#FFD700',
        'steel-grey': '#f3f4f6',
        'dark-slate': '#1e293b',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        header: ['Oswald', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
