import { defineConfig } from '@solidjs/start/config'

export default defineConfig({
  ssr: true,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          loadPaths: ['./src/scss/'],
          additionalData: (source: string, file: string) => {
            if (file.endsWith('import.scss') || file.endsWith('_breakpoints.scss')) {
              return source
            }
            return `
            @use "import.scss" as *;
            ${source}
          `
          },
        },
      },
      modules: {
        localsConvention: 'camelCase',
      },
    },
  },
})
