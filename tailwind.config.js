/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('./public/bg_01.jpg')",
      },
    },
  },
  plugins: [],
}
