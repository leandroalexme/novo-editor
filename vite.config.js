import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "polotno",
    project: "polotno-studio"
  })],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: [
      'localhost',
      '.replit.dev',
      '1ff9934b-82a0-4147-8a25-04210de1c892-00-g3c3ojzsdbp1.janeway.replit.dev'
    ],
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  build: {
    sourcemap: true
  }
})