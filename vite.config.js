import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Dedicated port so this project never clashes with the DriveMax dev server.
export default defineConfig({
  plugins: [react()],
  server: { port: 5174, open: true },
  preview: { port: 4174 },
})
