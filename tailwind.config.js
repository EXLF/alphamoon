/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#101014', // 深空灰
        'dark-secondary': '#0D1117', // 暗夜蓝
        'neutral-gray': '#888888',
        'light-gray': '#CCCCCC', // 淡灰色
        'near-white': '#F0F0F0', // 近白色
        'brand-purple': '#5D55E8', // 科技紫 - 主品牌色
        'brand-gold': '#F1DC4D', // 亮金 - 高亮色
        'brand-accent': '#5D55E8', // 保留别名以兼容
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