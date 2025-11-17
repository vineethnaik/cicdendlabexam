# Deployment Guide

This project uses GitHub Actions to automatically build and deploy the frontend on every push to the `main` branch.

## GitHub Pages Deployment

### Setup Instructions

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
   - Save the settings

2. **Configure Environment Variables (Optional):**
   - Go to **Settings** → **Secrets and variables** → **Actions**
   - Add a new repository secret named `VITE_API_URL` if you want to override the default API URL
   - Default API URL is `http://localhost:8081`

3. **Push to main branch:**
   - The workflow will automatically trigger on every push to `main`
   - You can also manually trigger it from the **Actions** tab using "workflow_dispatch"

### Workflow Features

- ✅ Automatic build on push to `main`
- ✅ Runs linter (won't fail build on lint errors)
- ✅ Deploys to GitHub Pages
- ✅ Manual trigger option available
- ✅ Node.js 20 with npm caching for faster builds

### Accessing Your Deployed Site

After the workflow completes successfully, your site will be available at:
```
https://<your-username>.github.io/<repository-name>/
```

For example, if your repository is `hospital-frontend-main`:
```
https://yourusername.github.io/hospital-frontend-main/
```

## Alternative Deployment Options

### Vercel Deployment

To deploy to Vercel instead of GitHub Pages:

1. Create a `vercel.json` file:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm ci"
}
```

2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy on every push

### Netlify Deployment

To deploy to Netlify:

1. Create a `netlify.toml` file:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

2. Connect your GitHub repository to Netlify
3. Netlify will automatically deploy on every push

## Troubleshooting

### Build Fails

- Check the Actions tab for error logs
- Ensure all dependencies are listed in `package.json`
- Verify Node.js version compatibility

### Pages Not Loading

- Ensure GitHub Pages is enabled with "GitHub Actions" as the source
- Check that the workflow completed successfully
- Verify the repository name matches the base path in `vite.config.js`

### API Connection Issues

- Update the `VITE_API_URL` secret in GitHub repository settings
- For production, ensure your backend API is publicly accessible
- Consider using CORS configuration on your backend

