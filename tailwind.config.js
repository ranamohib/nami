/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'navy': '#310D7D',
      'blue': '#4700B3',
      'sky': '#5E74FF',
      'green': '#22DB54',
      'transparent': 'transparent',
      'current': 'currentColor'
    },
    fontFamily: {
      sans: ['Codec Pro', 'sans-serif'],
      arabic: ['Arabic', 'sans-serif']
    },
  },
  plugins: [],
}

