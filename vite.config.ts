import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // 允许外部访问
    port: 5173,       // 指定端口
    strictPort: true, // 端口被占用时不要尝试下一个端口
  }
})