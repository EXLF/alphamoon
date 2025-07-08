/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1A1A1A',
        'dark-secondary': '#0D1117',
        'neutral-gray': '#888888',
        'brand-accent': '#FFD700', // 金黄色作为品牌点缀色，可根据Logo调整
      },
      fontFamily: {
        'sans': ['Inter', 'Source Han Sans', 'PingFang SC', 'sans-serif'],
        'display': ['Montserrat', 'Source Han Sans', 'PingFang SC', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}