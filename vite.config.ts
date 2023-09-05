import solid from 'solid-start/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [solid()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "./src/scss/import.scss" as *;`,
      },
    },
    modules: {
      localsConvention: 'camelCase',
    },
  },
})
