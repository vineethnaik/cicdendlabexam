import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// For GitHub Pages, base must be '/REPOSITORY_NAME/'
// This ensures all assets (JS, CSS, images) load from the correct path
const isGitHubPages = process.env.GITHUB_PAGES === 'true' || process.env.CI === 'true'
const basePath = isGitHubPages ? '/cicdendlabexam/' : '/'

export default defineConfig({
  plugins: [react()],
  base: basePath,
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
  },
})
