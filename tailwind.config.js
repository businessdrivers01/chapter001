/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        ticker: 'ticker 30s linear infinite', // Increase time if needed
      },



      colors: {
        red: {
          100: '#FDE7E8',
          200: '#FAC5C7',
          300: '#F7A3A6',
          400: '#F48184',
          500: '#BE2026', // Original red
          600: '#981A1F',
          700: '#721317',
          800: '#4C0D10',
          900: '#260608',
        },
        navy: {
          100: '#E6EEF2',
          200: '#B3CDD9',
          300: '#80ACC0',
          400: '#4D8BA7',
          500: '#002F47', // Original navy
          600: '#002639',
          700: '#001C2B',
          800: '#00131D',
          900: '#00090E',
        },
        white: "#fffefe"

      },
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

