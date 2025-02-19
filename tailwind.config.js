/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        uniloop: {
          orange: '#FF7E1D',
          yellow: '#FFB237',
          mint: '#7CFFB2',
          turquoise: '#00E5BB',
          dark: '#1A1A1A'
        }
      },
      backgroundImage: {
        'gradient-uniloop': 'linear-gradient(to right, #FF7E1D, #FFB237, #7CFFB2, #00E5BB)',
      }
    },
  },
  plugins: [],
};