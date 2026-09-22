import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: process.env.SITE_BASE || '/art-supabase-site/',
  build: { outDir: process.env.VITE_OUT_DIR || 'dist' },
})
