import { defineConfig } from '@solidjs/start/config'

export default defineConfig({
  start: {
    ssr: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (source: string, file: string) => {
          if (file.endsWith('import.scss') || file.endsWith('_breakpoints.scss')) {
            return source
          }
          return `
            @use "./src/scss/import.scss" as *;
            ${source}
          `
        },
      },
    },
    modules: {
      localsConvention: 'camelCase',
    },
  },
})
