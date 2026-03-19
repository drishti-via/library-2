/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        shelf: {
          50: '#f7f3ee',
          100: '#efe6da',
          500: '#8b6f47',
          600: '#735a39',
          700: '#5b472d',
          800: '#3f3120',
          900: '#241b12',
        },
        ink: {
          50: '#eef5fb',
          100: '#d9e8f4',
          500: '#4f7ca3',
          600: '#355f84',
          700: '#27496d',
          800: '#1f3a5f',
          900: '#162a45',
        },
        amber: {
          50: '#fff8eb',
          100: '#fcecc8',
          300: '#f2c66d',
          400: '#e6b14a',
          500: '#b88b4a',
          600: '#9a6f2f',
          700: '#7a5622',
        },
      },
    },
  },
  plugins: [],
}
