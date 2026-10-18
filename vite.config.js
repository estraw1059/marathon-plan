import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

// Two pages share one build: Eric's plan at /marathon-plan/ and Rachel's at /marathon-plan/rachel.html
export default defineConfig({
  plugins: [react()],
  base: '/marathon-plan/',
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        rachel: fileURLToPath(new URL('./rachel.html', import.meta.url)),
      },
    },
  },
})
