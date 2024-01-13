/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0d2137',//#1a1a1a (First color used)
        'secondary': '#ff8e2b',//#ddc676 (First color used)
        'bg-blur': 'rgba(0, 0, 0, 0.1)',
        'bord-blur': '1px solid rgba(255, 255, 255, 0.3)',
      },
    },
  },
  plugins: [],
}