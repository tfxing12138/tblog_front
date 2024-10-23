import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),  // 设置 `@` 别名指向 `src` 目录
    }
  },
  server: {
    host: '0.0.0.0',  // 允许通过任何 IP 地址访问
    port: 5173,       // 可以根据需要更改端口
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/config/scssConfig.scss"`
      }
    }
  }
})
