# Step-by-Step Deployment Guide

Follow these steps to deploy your hospital frontend using GitHub Actions.

## Prerequisites Checklist

- [ ] You have a GitHub account
- [ ] Your code is in a GitHub repository (or you're ready to create one)
- [ ] You have Git installed on your local machine
- [ ] You have Node.js installed (for local testing)

---

## Step 1: Prepare Your Local Repository

### 1.1 Navigate to your project directory
```bash
cd hospital-frontend-main
```

### 1.2 Check Git status
```bash
git status
```

### 1.3 If not already a Git repository, initialize it
```bash
git init
```

### 1.4 Add all files to Git
```bash
git add .
```

### 1.5 Commit the changes
```bash
git commit -m "Add GitHub Actions workflow for automatic deployment"
```

---

## Step 2: Create/Connect to GitHub Repository

### Option A: If you already have a GitHub repository

#### 2.1 Add remote (if not already added)
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

#### 2.2 Verify remote
```bash
git remote -v
```

### Option B: If you need to create a new repository

#### 2.1 Go to GitHub.com and sign in

#### 2.2 Click the "+" icon in the top right → "New repository"

#### 2.3 Fill in repository details:
- **Repository name**: `hospital-frontend-main` (or your preferred name)
- **Description**: "Hospital Management System Frontend"
- **Visibility**: Choose Public or Private
- **DO NOT** initialize with README, .gitignore, or license (you already have these)

#### 2.4 Click "Create repository"

#### 2.5 Copy the repository URL and add it as remote:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

---

## Step 3: Push Code to GitHub

### 3.1 Push to main branch
```bash
git branch -M main
git push -u origin main
```

**Note**: If you get authentication errors, you may need to:
- Use a Personal Access Token instead of password
- Or set up SSH keys

---

## Step 4: Enable GitHub Pages

### 4.1 Go to your repository on GitHub.com

### 4.2 Click on "Settings" tab (top menu)

### 4.3 Scroll down to "Pages" in the left sidebar

### 4.4 Under "Source", select:
- **Source**: `GitHub Actions` (NOT "Deploy from a branch")
- This is important! The workflow needs this setting.

### 4.5 Click "Save"

**Expected Result**: You should see a message like "Your site is ready to be published at..."

---

## Step 5: Verify Workflow File is Present

### 5.1 In your repository, navigate to:
```
.github/workflows/deploy.yml
```

### 5.2 Verify the file exists and has content

If the file is missing, you may need to push again:
```bash
git add .github/workflows/deploy.yml
git commit -m "Add deployment workflow"
git push origin main
```

---

## Step 6: Trigger the Workflow

### Option A: Automatic Trigger (Recommended)

#### 6.1 Make any small change to trigger the workflow:
```bash
# Make a small change (e.g., update README)
echo "# Deployment successful" >> README.md
git add README.md
git commit -m "Trigger deployment workflow"
git push origin main
```

### Option B: Manual Trigger

#### 6.1 Go to your repository on GitHub

#### 6.2 Click on "Actions" tab

#### 6.3 You should see "Build and Deploy" workflow

#### 6.4 Click on it, then click "Run workflow" button

#### 6.5 Select "main" branch and click "Run workflow"

---

## Step 7: Monitor the Deployment

### 7.1 Go to "Actions" tab in your repository

### 7.2 Click on the running workflow (it will show "Build and Deploy" with a yellow dot)

### 7.3 Watch the progress:
- ✅ Green checkmark = Success
- ❌ Red X = Failure
- 🟡 Yellow dot = In progress

### 7.4 Click on the job to see detailed logs

### Expected Steps in the Workflow:
1. ✅ Checkout repository
2. ✅ Setup Node.js
3. ✅ Install dependencies
4. ✅ Run linter
5. ✅ Build project
6. ✅ Setup Pages
7. ✅ Upload artifact
8. ✅ Deploy to GitHub Pages

**Total time**: Usually 2-5 minutes

---

## Step 8: Access Your Deployed Site

### 8.1 After the workflow completes successfully:

#### 8.2 Go to "Settings" → "Pages" in your repository

#### 8.3 You'll see your site URL:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

#### 8.4 Click the URL or copy it to your browser

**Example URLs:**
- If repo is `hospital-frontend-main`: `https://yourusername.github.io/hospital-frontend-main/`
- If repo is `hospital-frontend`: `https://yourusername.github.io/hospital-frontend/`

---

## Step 9: Verify Deployment

### 9.1 Open your deployed site in a browser

### 9.2 You should see:
- ✅ The login page loads
- ✅ Navigation works
- ✅ No console errors (check browser DevTools)

### 9.3 Test the application:
- Try navigating between pages
- Check if styling is correct

---

## Step 10: Future Deployments

### From now on, every push to `main` will automatically:
1. Build your project
2. Deploy to GitHub Pages
3. Update your live site

### To deploy updates:
```bash
# Make your changes
git add .
git commit -m "Your commit message"
git push origin main
```

The workflow will automatically trigger and deploy!

---

## Troubleshooting

### Issue: Workflow not triggering

**Solution:**
- Check that you pushed to `main` branch (not `master`)
- Verify `.github/workflows/deploy.yml` exists in the repository
- Check the "Actions" tab to see if workflow appears

### Issue: "Pages build failed"

**Solution:**
- Check the workflow logs in "Actions" tab
- Verify all dependencies are in `package.json`
- Ensure `vite.config.js` is correct
- Check for build errors in the logs

### Issue: Site shows 404 or blank page

**Solution:**
- Wait 1-2 minutes after deployment (GitHub Pages needs time to propagate)
- Clear browser cache
- Check that GitHub Pages source is set to "GitHub Actions"
- Verify the base path in `vite.config.js` matches your repository name

### Issue: API calls not working

**Solution:**
- Your backend API must be publicly accessible
- Update `VITE_API_URL` secret in repository settings if needed
- Check browser console for CORS errors
- Ensure your backend allows requests from your GitHub Pages domain

### Issue: Authentication errors when pushing

**Solution:**
- Use Personal Access Token instead of password
- Or set up SSH keys for authentication
- See: https://docs.github.com/en/authentication

---

## Quick Reference Commands

```bash
# Check status
git status

# Add all changes
git add .

# Commit
git commit -m "Your message"

# Push to main
git push origin main

# Check remote
git remote -v

# View workflow logs (on GitHub)
# Go to: Repository → Actions tab
```

---

## Need Help?

1. Check the workflow logs in the "Actions" tab
2. Review `DEPLOYMENT.md` for more details
3. Check GitHub Actions documentation: https://docs.github.com/en/actions
4. Verify all files are committed and pushed

---

## Success Checklist

- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled with "GitHub Actions" source
- [ ] Workflow ran successfully (green checkmark)
- [ ] Site is accessible at the GitHub Pages URL
- [ ] Application loads and functions correctly

🎉 **Congratulations! Your frontend is now deployed!**

