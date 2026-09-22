import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [vue()],
    base: process.env.SITE_BASE || env.SITE_BASE || '/',
    build: {
      outDir: process.env.VITE_OUT_DIR || env.VITE_OUT_DIR || 'docs',
      emptyOutDir: true,
    },
  }
})
