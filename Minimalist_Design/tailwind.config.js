module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        'red': {
          600: '#E31E24',
          700: '#CC1A1F',
        },
        'blue': {
          600: '#0055A4',
          700: '#004A8F',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}