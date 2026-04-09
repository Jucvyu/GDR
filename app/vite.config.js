import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  VitePWA({
    registerType: 'autoUpdate',
    includeAssets: [
      'img/favicon2.png',
      'img/pwa192.png',
      'img/pwa512.png',
      'img/screenshot-1.png',
      'img/preview.jpg',
    ],
    workbox: {
      navigateFallback: '/index.html',
      globPatterns: ['**/*.{js,jsx,css,html,ico,png,jpg,svg,txt}'],
    },
    manifest: {
      name: 'Gastos Diario',
      short_name: 'GD',
      description: 'Una aplicación web para gestionar los gastos diarios y así poder tener control sobre gastos financieros.',
      start_url: '/',
      display: 'standalone',
      background_color: '#fff',
      theme_color: '#000000',
      screenshots: [
        {
          src: '/img/screenshot-1.png',
          sizes: '480x480',
          type: 'image/png',
          form_factor: 'narrow'  // narrow is mobile and wide is desktop
        },
        {
          src: '/img/screenshot-1.png',
          sizes: '480x480',
          type: 'image/png',
          form_factor: 'wide'  // narrow is mobile and wide is desktop
        },
        {
          src: '/img/preview.jpg',
          sizes: '328x153',
          type: 'image/png',
          form_factor: 'narrow'  // narrow is mobile and wide is desktop
        },
        {
          src: '/img/preview.jpg',
          sizes: '328x153',
          type: 'image/png',
          form_factor: 'wide'  // narrow is mobile and wide is desktop
        }
      ],
      icons: [
        {
          src: '/img/pwa192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/img/pwa512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  })],
})
