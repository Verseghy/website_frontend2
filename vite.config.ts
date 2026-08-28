import { defineConfig } from 'vite'
import { nitro } from 'nitro/vite'
import { solidStart } from '@solidjs/start/config'

export default defineConfig({
  plugins: [
    solidStart({
      ssr: true,
    }),
    nitro({
      traceDeps: ['jsdom*'],
    }),
  ],
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
})
