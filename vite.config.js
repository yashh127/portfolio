import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Relative base path ensures images load on any domain/subpath!
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: true,
    port: 3000,
    open: false,
    allowedHosts: [
      'yash-portfolio.local',
      '.local',
      'localhost',
      '127.0.0.1'
    ]
  }
})
