# Deployment Instructions for GitHub Pages

## 🚀 Before You Deploy

### 1. Add GitHub Secrets (Required for Notion)
Go to your GitHub repository → Settings → Secrets and variables → Actions

Add these two secrets:
- **NOTION_TOKEN**: Your Notion integration token
- **NOTION_DATABASE_ID**: Your Notion database ID

⚠️ **Important**: Without these secrets, your website will show sample data instead of your Notion content.

### 2. Verify Your Setup
- ✅ Notion integration is working locally
- ✅ Build completes without errors
- ✅ GitHub Actions workflow is updated (already done)

## 📤 Deploy to GitHub Pages

### Option 1: Push to GitHub (Automatic Deploy)
```bash
# Add all changes
git add .

# Commit with message
git commit -m "Add Notion CMS integration with simplified schema"

# Push to GitHub (this triggers automatic deployment)
git push origin main
```

### Option 2: Manual Deploy (if needed)
1. Go to Actions tab in your GitHub repository
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Select main branch
5. Click "Run workflow"

## 🔍 Monitor Deployment

1. **Check GitHub Actions**:
   - Go to Actions tab
   - Watch the "Deploy to GitHub Pages" workflow
   - Should take 2-3 minutes

2. **Verify Deployment**:
   - Visit: https://enod.github.io/praegrandis-construction-website/
   - Check that your Notion content appears
   - Test project story pages

## 🐛 Troubleshooting

### If Notion Content Doesn't Appear:
1. Check GitHub Actions logs for errors
2. Verify secrets are set correctly in GitHub
3. Content will fall back to sample data if Notion fails

### If Build Fails:
1. Check the error in GitHub Actions
2. Most common issue: Missing environment variables
3. Verify NOTION_TOKEN and NOTION_DATABASE_ID are set

## ✅ Post-Deploy Checklist
- [ ] Homepage loads with your featured project
- [ ] Projects page shows your Notion content
- [ ] Individual project story pages work
- [ ] Images display correctly
- [ ] Mobile responsive design works

## 🔄 Future Updates
Whenever you update content in Notion:
1. Content appears immediately in local dev
2. For production, just push any code change or manually trigger deployment
3. GitHub Pages will rebuild with latest Notion content

Your website is production-ready! 🎉