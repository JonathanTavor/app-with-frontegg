// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // anything under /frontegg → goes to your real Frontegg domain
      '/frontegg': {
        target: 'https://app-i4p75rhnyvbf.frontegg.com',
        changeOrigin: true,
        secure: true,
        // no rewrite needed if you keep /frontegg in the path
      },
    },
  },
})
