/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        surface: '#161A18',
        surfaceLight: '#2F3126',
        surfaceDark: '#0E100F',
        primary: '#F3FFC9',
        secondary: '#A9AD9B',
        icon: '#F9FFE5',
        border: '#585E44'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'marquee-pingpong': 'ping-pong-scroll 120s linear infinite',
        'scroll': 'scroll-left 40s linear infinite',
        'marquee': 'marquee 60s linear infinite',
        'marquee-60s': 'marquee-ltr 60s linear infinite',
        'marquee-60s-reverse': 'marquee-rtl 60s linear infinite',
        'marquee-alternate': 'marquee-alternate-direction 120s linear infinite',
        'marquee-right-40s': 'marquee-rtl 40s linear infinite',
      },
      keyframes: {
        'ping-pong-scroll': {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-ltr': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rtl': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'marquee-alternate-direction': {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-50%)' },
          '50.01%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
