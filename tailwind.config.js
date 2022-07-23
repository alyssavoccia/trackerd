/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purpleBlue': {
          100: '#F0F1FE',
          200: '#C5C6FD',
          300: '#A7AAFB',
          400: '#8A8DFA',
          500: '#6D71F9',
          600: '#575AC7',
          700: '#4C4FAE',
          800: '#414495',
          900: '#37397D'
        },
        'mayaBlue': '#54C1FB',
        'midnightBlue': '#272848',
        'athensGray': '#EFF0F8',
      }
    },
  },
  plugins: [],
}
