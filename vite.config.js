import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    host: true, 
    strictPort: true,
    port: 5080, 
    watch: {
     usePolling: true,
    }
  }}
)