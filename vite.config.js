import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// For GitHub Pages, base must be '/REPOSITORY_NAME/'
// This ensures all assets (JS, CSS, images) load from the correct path
// Use base path when building for GitHub Pages (CI environment or explicit flag)
const isGitHubPages = process.env.GITHUB_PAGES === 'true' || process.env.CI === 'true'
const basePath = isGitHubPages ? '/cicdendlabexam/' : '/'

// Log for debugging (only in build, not dev)
if (process.env.NODE_ENV === 'production' || process.env.CI) {
  console.log('🔧 Vite Config:')
  console.log('  Base path:', basePath)
  console.log('  GITHUB_PAGES:', process.env.GITHUB_PAGES)
  console.log('  CI:', process.env.CI)
}

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
