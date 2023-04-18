/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'cyber': "-1px 1px 20px 3px rgba(191,73,227,0.42)",
      }
    },
  },
  plugins: [],
}