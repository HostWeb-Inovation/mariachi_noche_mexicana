import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    allowedHosts: [
      'pretty-cloths-exist.loca.lt',
      '.loca.lt' // Permite todos los subdominios de loca.lt
    ]
  }
})
