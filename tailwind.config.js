/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF4C00',
        'primary-hover': '#FF6D00',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 76, 0, 0.5)',
      },
    },
  },
  plugins: [],
};