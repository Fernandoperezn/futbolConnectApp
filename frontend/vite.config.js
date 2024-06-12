import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configuracion de alias de carpetas
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
