import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Change 'igem-2026-site' to match your GitHub repo name
  base: '/igem-2026-site/',
})
