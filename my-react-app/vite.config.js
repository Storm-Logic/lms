import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    watch: {
      usePolling: true,
      interval: 100, // Adjust as needed
    },
    host: true, // allows access from Docker container network
  },
})
