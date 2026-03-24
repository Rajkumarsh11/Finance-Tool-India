import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://tools.yugofai.com',
      dynamicRoutes: [
        '/calculators',
        '/car-loan',
        '/home-loan',
        '/personal-loan',
        '/loan-eligibility',
        '/sip',
        '/fd',
        '/ppf',
        '/retirement',
        '/gst',
        '/income-tax',
        '/health-insurance',
        '/term-insurance',
        '/about',
        '/contact',
        '/disclaimer',
        '/help',
        '/methodology',
        '/privacy',
        '/terms'
      ]
    })
  ],
})
