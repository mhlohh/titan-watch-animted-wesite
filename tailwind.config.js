/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          black: '#030303',
          dark: '#0A0A0A',
          charcoal: '#1A1A1A',
        },
        platinum: {
          100: '#F5F5F5',
          200: '#E5E4E2',
          300: '#D1D1D1',
          400: '#B0B4B4',
          500: '#8A8D8F',
          900: '#2A2C2E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        serif: ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'platinum-gradient': 'linear-gradient(135deg, #E5E4E2 0%, #B0B4B4 100%)',
        'dark-gradient': 'radial-gradient(circle at center, #1A1A1A 0%, #030303 100%)',
      }
    },
  },
  plugins: [],
}
