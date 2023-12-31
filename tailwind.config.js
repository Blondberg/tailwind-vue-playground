/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'cyber': "-1px 1px 20px 3px rgba(191,73,227,0.42)",
      },
      fontFamily: {
        'inconsolata': 'Inconsolata',
        'inter': 'Inter',
        'pacifico': 'Pacifico'
      },
      colors: {
        'dark': '#202020'
      }
    },
  },
  plugins: [],
}