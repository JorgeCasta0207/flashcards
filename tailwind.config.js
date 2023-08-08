/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#4BBEFF',
        'secondary':'#F1FAFE',
        'accent': '#9C73F6',
        'text': '#040B02'
      },
    },
  },
  plugins: [],
}

