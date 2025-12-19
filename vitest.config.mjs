import { defineConfig } from 'vitest/config'

export default defineConfig({
  esbuild: {
    loader: 'jsx',
    include: [
      /.*\.jsx?$/
    ],
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
    css: false,
    include: ['**/*.test.{js,jsx,ts,tsx}']
  },
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname
    }
  }
})
