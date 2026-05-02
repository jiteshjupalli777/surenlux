/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: {
          50: '#fdf9f0',
          100: '#f7edcf',
          200: '#efd9a0',
          300: '#e8d5a3',
          400: '#d4bb7e',
          500: '#c9a96e',
          600: '#b8924f',
          700: '#9a7538',
          800: '#7c5c28',
          900: '#5e441b',
        },
      },
      transitionDuration: {
        '400': '400ms',
        '1500': '1500ms',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'shimmer': 'shimmer 4s linear infinite',
      },
    },
  },
  plugins: [],
};
